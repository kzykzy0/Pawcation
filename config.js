/* Pawcation backend settings.
   Leave both values empty to run in local demo mode (no accounts, data stays on the device).
   To turn on accounts + cloud sync: create a free Supabase project, run supabase/schema.sql and
   supabase/seed.sql, then paste the Project URL and the *anon* public key below.
   (The anon key is meant to be public — Row Level Security protects the data. NEVER put the service_role key here.) */
window.PAWCATION_CONFIG = {
  supabaseUrl: '',
  supabaseAnonKey: ''
};
