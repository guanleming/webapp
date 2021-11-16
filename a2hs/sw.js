self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/webapp/a2hs/',
      '/webapp/a2hs/index.html',
      '/webapp/a2hs/index.js',
      '/webapp/a2hs/style.css',
      '/webapp/a2hs/images/fox1.jpg',
      '/webapp/a2hs/images/fox2.jpg',
      '/webapp/a2hs/images/fox3.jpg',
      '/webapp/a2hs/images/fox4.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
