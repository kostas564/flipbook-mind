// Offline support. Bump VERSION when shipping changes to the app shell.
const VERSION = 'ic-v14';
const FONTS = ['fonts.css', 'fraunces-latin-standard-normal.woff2', 'fraunces-latin-ext-standard-normal.woff2',
  'fraunces-latin-standard-italic.woff2', 'fraunces-latin-ext-standard-italic.woff2', 'inter-latin-wght-normal.woff2',
  'inter-latin-ext-wght-normal.woff2', 'inter-greek-wght-normal.woff2', 'inter-greek-ext-wght-normal.woff2'].map(f => 'fonts/' + f);
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', ...FONTS];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  // The app only ever loads its own files.
  if (new URL(req.url).origin !== location.origin) return;

  // Pages: network first so updates show up, cache when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => { if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put('index.html', copy)); } return res; })
        .catch(() => caches.match('index.html'))
    );
    return;
  }

  // Everything else: serve from cache, refresh in the background.
  e.respondWith(
    caches.open(VERSION).then(async c => {
      const hit = await c.match(req);
      const net = fetch(req)
        .then(res => { if (res.ok) c.put(req, res.clone()); return res; })
        .catch(() => hit);
      return hit || net;
    })
  );
});
