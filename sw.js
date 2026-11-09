/* Pawcation service worker — offline app shell + runtime caching */
const VERSION = 'pawcation-v26';
const SHELL = ['./', './index.html', './about.html', './help.html', './become-sitter.html', './img/pet-1.png', './img/pet-2.png', './img/pet-3.png', './become-trainer.html', './img/trainer-hero.jpg', './img/trainer-2.jpg', './img/trainer-3.jpg', './site.css', './site.js', './img/hero.svg', './img/sitter-hero.jpg', './img/home-hero.jpg', './img/sitter-2.jpg', './img/sitter-3.jpg', './img/sitter-hero.svg', './img/sitter-hero.jpg', './img/sitter-1.svg', './img/sitter-2.svg', './img/sitter-3.svg', './become-sitter.html', './img/sitter-hero.svg', './img/sitter-2.svg', './img/sitter-3.svg', './app.html', './manifest.webmanifest', './config.js',
  './vendor/leaflet.js', './vendor/leaflet.css', './vendor/supabase.js', './vendor/qrcode.js',
  './vendor/images/marker-icon.png', './vendor/images/layers.png',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
const TILE_CACHE = 'pawcation-tiles-v1', IMG_CACHE = 'pawcation-img-v1', MAX_TILES = 250, MAX_IMG = 80;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(SHELL.map(u => c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k=>![VERSION,TILE_CACHE,IMG_CACHE].includes(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('message', e => { if(e.data==='skip-waiting') self.skipWaiting(); });

async function trim(name, max){
  const c = await caches.open(name), keys = await c.keys();
  if(keys.length > max) await Promise.all(keys.slice(0, keys.length-max).map(k=>c.delete(k)));
}
async function cacheFirst(req, name, max){
  const c = await caches.open(name), hit = await c.match(req);
  if(hit) return hit;
  try{ const res = await fetch(req); if(res && (res.ok || res.type==='opaque')){ c.put(req, res.clone()); if(max) trim(name,max); } return res; }
  catch(err){ return hit || Response.error(); }
}
async function networkFirst(req){
  const c = await caches.open(VERSION);
  const u = new URL(req.url), key = new Request(u.origin + u.pathname);          // shared links carry ?sitter=…&utm_source=… — cache one shell
  try{ const res = await fetch(req); if(res && res.ok) c.put(key, res.clone()); return res; }
  catch(err){ return (await c.match(key)) || (await c.match(req, { ignoreSearch:true })) || (await c.match('./index.html')) || Response.error(); }
}
async function staleWhileRevalidate(req){
  const c = await caches.open(VERSION), hit = await c.match(req);
  const net = fetch(req).then(res=>{ if(res && res.ok) c.put(req, res.clone()); return res; }).catch(()=>hit);
  return hit || net;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.hostname.endsWith('supabase.co') || url.pathname.startsWith('/rest/') || url.pathname.startsWith('/auth/')) return;   // never cache API/auth
  if(url.hostname==='tile.openstreetmap.org') return e.respondWith(cacheFirst(req, TILE_CACHE, MAX_TILES));
  if(url.hostname==='images.unsplash.com') return e.respondWith(cacheFirst(req, IMG_CACHE, MAX_IMG));
  if(url.hostname==='fonts.googleapis.com' || url.hostname==='fonts.gstatic.com') return e.respondWith(staleWhileRevalidate(req));
  if(url.origin !== location.origin) return;
  if(req.mode==='navigate') return e.respondWith(networkFirst(req));
  e.respondWith(staleWhileRevalidate(req));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => { for(const c of list){ if('focus' in c) return c.focus(); } return self.clients.openWindow('./'); }));
});
