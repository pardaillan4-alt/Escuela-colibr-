#!/usr/bin/env bash
# Une los archivos de src/ en un solo index.html listo para abrir o publicar.
set -euo pipefail
cd "$(dirname "$0")"
JS=(src/motor/motor.js src/motor/visuales-y-generadores.js
    src/grado1/mat.js src/grado1/esp.js src/grado1/cie.js src/grado1/his.js src/grado1/civ.js src/grado1/rel.js src/grado1/com.js src/grado1/fe.js
    src/grado2/mat.js src/grado2/esp.js src/grado2/cie.js src/grado2/his.js src/grado2/civ.js src/grado2/rel-y-comunion.js)
{
  echo '<!doctype html>'
  echo '<html lang="es-MX"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">'
  echo '<style>:root{padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui,sans-serif}img{max-width:100%}</style>'
  echo '</head><body>'
  cat src/head.html
  echo '<script>'
  cat "${JS[@]}"
  echo
  echo 'init();'
  echo '</script>'
  echo '</body></html>'
} > index.html
echo "index.html generado ($(wc -c < index.html) bytes)"
