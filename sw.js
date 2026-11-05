// Escuelita Colibrí: guarda la app para que funcione sin internet.
// La página se pide primero a la red (para recibir actualizaciones) y, si no hay conexión, se usa la copia guardada.
const CACHE = "colibri-v5";
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./iconos/icon-192.png", "./iconos/icon-512.png", "./iconos/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin || r.url.endsWith(".pdf")) return;
  e.respondWith(fetch(r).then(res => { if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
});
