const CACHE_NAME = 'maikiir-v1';
const urlsToCache = [
  '/maikiir/',
  '/maikiir/index.html',
  '/maikiir/about.html',
  '/maikiir/contact.html',
  '/maikiir/style.css',
  '/maikiir/app.js',
  '/maikiir/manifest.json'
];

// Install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch - serve from cache
self.addEventListener('fetch', e => {
  if (!e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});