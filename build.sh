#!/usr/bin/env bash
# Une los archivos de src/ en un solo index.html listo para abrir o publicar.
set -euo pipefail
cd "$(dirname "$0")"
JS=(src/motor/motor.js src/motor/generadores-2.js src/motor/generadores-3.js src/motor/ilustraciones.js src/motor/columnas.js src/motor/sincronizacion.js src/motor/repaso-y-boleta.js
    src/grado1/mat.js src/grado1/esp.js src/grado1/cie.js src/grado1/his.js src/grado1/civ.js src/grado1/rel.js src/grado1/com.js src/grado1/fe.js
    src/grado2/mat.js src/grado2/esp.js src/grado2/cie.js src/grado2/his.js src/grado2/civ.js src/grado2/rel-y-comunion.js
    src/grado3/mat.js src/grado3/esp.js src/grado3/cie.js src/grado3/his.js src/grado3/civ.js src/grado3/rel-y-vida-de-fe.js
    src/infografias/grado1.js src/infografias/grado2-y-unir.js src/infografias/colores-de-columnas.js)
{
  echo '<!doctype html>'
  echo '<html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  echo '<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}</style>'
  echo '<title>Escuelita Colibrí</title><link rel="manifest" href="manifest.webmanifest"><meta name="theme-color" content="#1d8f4e"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="Colibrí"><meta name="apple-mobile-web-app-status-bar-style" content="default"><link rel="apple-touch-icon" href="iconos/apple-touch-icon.png"><link rel="icon" href="iconos/icono.svg" type="image/svg+xml">'
  echo '</head><body>'
  cat src/head.html
  echo '<script>'
  cat "${JS[@]}"
  echo
  echo 'init();'
  echo 'if("serviceWorker" in navigator&&/^https?:$/.test(location.protocol)){addEventListener("load",()=>{navigator.serviceWorker.register("sw.js").catch(()=>{})})}'
  echo '</script>'
  echo '</body></html>'
} > index.html
echo "index.html generado ($(wc -c < index.html) bytes)"
