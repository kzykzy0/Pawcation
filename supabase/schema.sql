-- =====================================================================
-- Pawcation — Supabase schema (run once in Supabase → SQL Editor)
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE / DROP POLICY IF EXISTS.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------- profiles (1 row per auth user) ----------
create table if not exists public.profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  lang          text not null default 'tr' check (lang in ('tr','en')),
  points        integer not null default 0 check (points >= 0),
  referral_code text unique,
  referred_by   uuid references public.profiles(id),
  data          jsonb not null default '{}'::jsonb,   -- prefs, pricing, availability, consents, trainer CV, ...
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- ---------- pets (owner's saved pets + health card) ----------
create table if not exists public.pets (
  id         uuid primary key default gen_random_uuid(),
  owner_id   uuid not null references auth.users(id) on delete cascade,
  position   integer not null default 0,
  name       text not null,
  data       jsonb not null default '{}'::jsonb,       -- type, breed, age, notes, photo (URL), health{...}
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists pets_owner_idx on public.pets(owner_id);

-- ---------- bookings (per user; the app stores its own copy of each booking) ----------
create table if not exists public.bookings (
  user_id    uuid not null references auth.users(id) on delete cascade,
  id         text not null,
  status     text,
  sitter_id  text,
  data       jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);
create index if not exists bookings_sitter_idx on public.bookings(sitter_id);

-- ---------- favorites ----------
create table if not exists public.favorites (
  user_id   uuid not null references auth.users(id) on delete cascade,
  sitter_id text not null,
  created_at timestamptz not null default now(),
  primary key (user_id, sitter_id)
);

-- ---------- sitters (public directory) ----------
create table if not exists public.sitters (
  id          text primary key,
  owner_id    uuid references auth.users(id) on delete set null,   -- set when a real user claims/creates the listing
  area        text,
  price       integer,
  rating      numeric(2,1),
  lat         double precision,
  lng         double precision,
  instant_book boolean not null default false,
  active      boolean not null default true,
  data        jsonb not null default '{}'::jsonb,
  updated_at  timestamptz not null default now()
);
create index if not exists sitters_area_idx on public.sitters(area);

-- ---------- updated_at helper ----------
create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;

do $$ declare t text; begin
  foreach t in array array['profiles','pets','bookings','sitters'] loop
    execute format('drop trigger if exists trg_touch on public.%I', t);
    execute format('create trigger trg_touch before update on public.%I for each row execute function public.touch_updated_at()', t);
  end loop;
end $$;

-- ---------- new user → profile + referral code ----------
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
declare code text; tries int := 0;
begin
  loop
    code := 'PAW-' || upper(substr(encode(gen_random_bytes(4),'hex'),1,6));
    exit when not exists (select 1 from public.profiles where referral_code = code) or tries > 8;
    tries := tries + 1;
  end loop;
  insert into public.profiles (id, display_name, lang, referral_code)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)),
          coalesce(new.raw_user_meta_data->>'lang','tr'), code)
  on conflict (id) do nothing;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- ---------- referral: validated server-side, both sides get points ----------
create or replace function public.apply_referral(p_code text) returns integer
language plpgsql security definer set search_path = public as $$
declare me uuid := auth.uid(); ref uuid; bonus constant int := 100;
begin
  if me is null then raise exception 'not_authenticated'; end if;
  select id into ref from public.profiles where referral_code = upper(trim(p_code));
  if ref is null then raise exception 'invalid_code'; end if;
  if ref = me then raise exception 'own_code'; end if;
  if exists (select 1 from public.profiles where id = me and referred_by is not null) then raise exception 'already_used'; end if;
  update public.profiles set referred_by = ref, points = points + bonus where id = me;
  update public.profiles set points = points + bonus where id = ref;
  return bonus;
end $$;
revoke all on function public.apply_referral(text) from public, anon;
grant execute on function public.apply_referral(text) to authenticated;

-- ---------- Row Level Security ----------
alter table public.profiles  enable row level security;
alter table public.pets      enable row level security;
alter table public.bookings  enable row level security;
alter table public.favorites enable row level security;
alter table public.sitters   enable row level security;

drop policy if exists profiles_select on public.profiles;
drop policy if exists profiles_update on public.profiles;
create policy profiles_select on public.profiles for select using (auth.uid() = id);
create policy profiles_update on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);
-- clients may not change referral bookkeeping directly (only apply_referral can)
revoke update on public.profiles from authenticated;
grant  update (display_name, lang, data, points) on public.profiles to authenticated;
-- NOTE: `points` is client-writable for the demo. Before real rewards go live, remove it from the grant above
-- and credit points only through security-definer functions / a ledger table.

drop policy if exists pets_all on public.pets;
create policy pets_all on public.pets for all using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

drop policy if exists bookings_all on public.bookings;
create policy bookings_all on public.bookings for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists favorites_all on public.favorites;
create policy favorites_all on public.favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

drop policy if exists sitters_read on public.sitters;
drop policy if exists sitters_write on public.sitters;
create policy sitters_read  on public.sitters for select using (active or auth.uid() = owner_id);
create policy sitters_write on public.sitters for all    using (auth.uid() = owner_id) with check (auth.uid() = owner_id);

-- ---------- Storage: pet photos (public read, owner write to own folder) ----------
insert into storage.buckets (id, name, public) values ('pet-photos','pet-photos', true) on conflict (id) do nothing;
drop policy if exists "pet photos read"   on storage.objects;
drop policy if exists "pet photos insert" on storage.objects;
drop policy if exists "pet photos update" on storage.objects;
drop policy if exists "pet photos delete" on storage.objects;
create policy "pet photos read"   on storage.objects for select using (bucket_id = 'pet-photos');
create policy "pet photos insert" on storage.objects for insert to authenticated with check (bucket_id = 'pet-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "pet photos update" on storage.objects for update to authenticated using (bucket_id = 'pet-photos' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "pet photos delete" on storage.objects for delete to authenticated using (bucket_id = 'pet-photos' and (storage.foldername(name))[1] = auth.uid()::text);

-- ---------- Round 10: public sitter profiles (share link) ----------
-- The app upserts one row per sitter into public.sitters (id 'u-<user prefix>', data.slug = name slug).
-- The share link  index.html?sitter=<slug>  looks the row up with: select * from sitters where active and data->>'slug' = <slug>
create index if not exists sitters_slug_idx on public.sitters ((data->>'slug'));

-- ---------- Storage: sitter media (profile gallery + home video; public read, owner write to own folder) ----------
insert into storage.buckets (id, name, public, file_size_limit) values ('sitter-media','sitter-media', true, 31457280) on conflict (id) do nothing;
drop policy if exists "sitter media read"   on storage.objects;
drop policy if exists "sitter media insert" on storage.objects;
drop policy if exists "sitter media update" on storage.objects;
drop policy if exists "sitter media delete" on storage.objects;
create policy "sitter media read"   on storage.objects for select using (bucket_id = 'sitter-media');
create policy "sitter media insert" on storage.objects for insert to authenticated with check (bucket_id = 'sitter-media' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "sitter media update" on storage.objects for update to authenticated using (bucket_id = 'sitter-media' and (storage.foldername(name))[1] = auth.uid()::text);
create policy "sitter media delete" on storage.objects for delete to authenticated using (bucket_id = 'sitter-media' and (storage.foldername(name))[1] = auth.uid()::text);
