#!/usr/bin/env bash
# Une los archivos de src/ en un solo index.html listo para abrir o publicar.
set -euo pipefail
cd "$(dirname "$0")"
JS=(src/motor/motor.js src/motor/generadores-2.js src/motor/generadores-3.js src/motor/ilustraciones.js src/motor/fotos.js src/motor/columnas.js src/motor/sincronizacion.js src/motor/repaso-y-boleta.js src/motor/paginas-cuaderno.js src/motor/plan-de-clases.js src/motor/examenes-trimestrales.js src/motor/liturgia.js src/motor/album-de-santos.js
    src/grado1/mat.js src/grado1/esp.js src/grado1/cie.js src/grado1/his.js src/grado1/civ.js src/grado1/rel.js src/grado1/com.js src/grado1/fe.js
    src/grado2/mat.js src/grado2/esp.js src/grado2/cie.js src/grado2/his.js src/grado2/civ.js src/grado2/rel-y-comunion.js
    src/grado3/mat.js src/grado3/esp.js src/grado3/cie.js src/grado3/his.js src/grado3/civ.js src/grado3/rel-y-vida-de-fe.js
    src/infografias/grado1.js src/infografias/grado2-y-unir.js src/infografias/colores-de-columnas.js
    src/talleres/ingles-arte-y-educacion-fisica.js src/talleres/biblioteca.js src/talleres/escribe-con-el-dedo.js src/talleres/arte-sacro.js src/talleres/laminas-y-pantalla-completa.js src/talleres/biografias-de-santos.js src/talleres/santos-ampliado-a.js src/talleres/santos-ampliado-b.js src/talleres/santos-ampliado-c.js src/talleres/santos-ampliado-d.js src/talleres/santos-imagenes.js src/talleres/escuela-de-oracion.js src/talleres/misiones.js src/talleres/oraciones-finales.js src/talleres/vida-diaria.js src/talleres/ciencias-imagenes.js src/talleres/biblioteca-imagenes.js src/talleres/laminas-del-cuerpo.js src/talleres/espanol-vida-diaria.js src/talleres/espanol-imagenes-y-juegos.js src/talleres/matematicas-vida-diaria.js src/talleres/ciencias-historia-vida-diaria.js src/talleres/matematicas-interactivas.js src/talleres/historia-imagenes-y-laminas.js src/talleres/ciencias-laminas-extra.js src/talleres/voz-natural.js src/talleres/musica-de-fondo.js src/talleres/matematicas-1-juegos.js src/talleres/matematicas-1-temario-ampliado.js src/motor/plantilla-profunda.js src/talleres/matematicas-1-profundo-a.js src/talleres/matematicas-1-profundo-b.js src/talleres/matematicas-juegos-2.js src/talleres/matematicas-1-alfa.js src/talleres/matematicas-2-profundo.js src/talleres/matematicas-3-profundo.js src/talleres/matematicas-3-alfa.js src/talleres/espanol-juegos-y-palabras.js src/talleres/espanol-1-profundo.js src/talleres/espanol-2-profundo.js src/motor/banco-de-preguntas.js src/talleres/comunion-1-profundo.js src/talleres/comunion-2-profundo.js src/talleres/religion-1-profundo.js src/talleres/religion-2-profundo.js src/talleres/religion-3-y-vida-de-fe.js src/talleres/ciencias-1-profundo.js src/talleres/ciencias-2-profundo.js src/talleres/ciencias-3-profundo.js src/talleres/historia-1-3-profundo.js src/talleres/civica-1-3-profundo.js src/talleres/espanol-3-profundo.js src/grado4/base-y-generadores.js src/grado4/mat.js src/grado4/esp.js src/grado4/cie.js src/grado4/his.js src/grado4/civ.js src/grado4/rel.js src/grado5/base-y-generadores.js src/grado5/mat.js src/grado5/rel.js src/grado5/esp.js src/grado5/cie.js src/grado5/geo-his.js src/grado5/civ.js src/grado6/base-y-mat.js src/grado6/esp-cie.js src/grado6/geo-his-civ-rel.js src/grado5/ampliacion-esp-cie.js src/grado5/ampliacion-geo-his-civ.js src/grado6/ampliacion-mat-esp-cie.js src/grado6/ampliacion-geo-his-civ-rel.js src/talleres/ingles-niveles.js src/fe/evangelios-ciclos-a-c.js src/fe/calendario-liturgico.js src/fe/camino-sacramentos.js src/talleres/voz-natural-piper.js)
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
