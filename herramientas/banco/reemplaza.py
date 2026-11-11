#!/usr/bin/env python3
"""Sustituye líneas completas de un archivo: python3 herr/reemplaza.py archivo < cambios   (cada cambio: «N<TAB>línea nueva»)"""
import sys
p = sys.argv[1]; L = open(p, encoding='utf8').read().split('\n'); n = 0
for row in sys.stdin.read().split('\n'):
    if not row.strip(): continue
    k, new = row.split('\t', 1); k = int(k)
    old = L[k - 1]
    if old.split('|')[1] != new.split('|')[1]: sys.exit(f'línea {k}: la pregunta no coincide: {old[:60]} / {new[:60]}')
    L[k - 1] = new; n += 1
open(p, 'w', encoding='utf8').write('\n'.join(L)); print('líneas cambiadas:', n)
