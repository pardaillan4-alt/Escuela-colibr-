#!/usr/bin/env bash
# Uso: bash largas.sh <materia>
# Muestra «N<TAB>línea» de las preguntas cuya respuesta correcta es mucho más larga que las incorrectas,
# para reescribirlas y pasarlas a reemplaza.py. Funciona en la copia de trabajo y en el repositorio.
H="$(cd "$(dirname "$0")" && pwd)"
if [ -f "$H/../build-order.txt" ]; then T="$H/../banco"; else T="$H/../../src/banco"; fi
python3 "$H/mkbanco.py" "$1" -v | grep -o "$1.txt:[0-9]*: la correcta" | sed "s/$1.txt:\([0-9]*\):.*/\1/" | while read -r n; do printf '%s\t%s\n' "$n" "$(sed -n "${n}p" "$T/$1.txt")"; done
