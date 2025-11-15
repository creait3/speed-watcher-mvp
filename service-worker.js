// service-worker.js
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  console.log('Service Worker aktiviert');
});
// Aktuell wird nur showNotification vom Frontend aus genutzt.
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {};
  event.waitUntil(
    self.registration.showNotification(data.title || 'Speed‑Wächter', {
      body: data.body || 'Geschwindigkeit zu gering.',
      icon: '/icon.png'
    })
  );
});
