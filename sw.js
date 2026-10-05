// AURORA AI - Service Worker - مربوط بـ Meta AI
// الواجهة عندك والتنفيذ عبر المحرك

const CACHE_NAME = 'aurora-v1-linked-to-meta-ai';

self.addEventListener('install', (event) => {
  self.skipWaiting();
  console.log('AURORA AI Installed - Linked to Meta AI');
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // كل الطلبات تمر - التنفيذ عبر محرك Meta AI
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
