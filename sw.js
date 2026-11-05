// Escuelita Colibrí: guarda la app para que funcione sin internet.
// La página se pide primero a la red (para recibir actualizaciones) y, si no hay conexión, se usa la copia guardada.
const CACHE = "colibri-v11";
const FOTOS = "colibri-fotos"; // las fotos se guardan aparte y no se borran al actualizar
const ARCHIVOS = ["./", "./index.html", "./manifest.webmanifest", "./iconos/icon-192.png", "./iconos/icon-512.png", "./iconos/apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARCHIVOS)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== FOTOS).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method === "GET" && /^(images\.unsplash\.com|commons\.wikimedia\.org|upload\.wikimedia\.org)$/.test(new URL(r.url).hostname)) {
    // Fotos: primero la copia guardada; si no está, se descarga y se guarda para usarla sin internet.
    e.respondWith(caches.open(FOTOS).then(c => c.match(r).then(m => m || fetch(r).then(res => { if (res.ok || res.type === "opaque") c.put(r, res.clone()); return res; }))));
    return;
  }
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin || r.url.endsWith(".pdf")) return;
  e.respondWith(fetch(r).then(res => { if (res.ok) { const copia = res.clone(); caches.open(CACHE).then(c => c.put(r, copia)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match("./index.html"))));
});
