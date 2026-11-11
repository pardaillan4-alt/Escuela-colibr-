#!/usr/bin/env python3
"""Compila los bancos de texto a JavaScript (profundización de lecciones y bancos ampliados).
   Copia de trabajo: banco/<materia>.txt -> banco-<materia>.js · Repositorio: src/banco/<materia>.txt -> src/banco/<materia>.js

Formato de cada archivo de texto (una lección empieza con #id):

  #6h5
  Z|regla completa|regla|regla                 pizarrón: sustituye las reglas
  E|ejemplo|ejemplo                            pizarrón: sustituye los ejemplos
  S|pregunta|paso 1|paso 2|=resultado          ejemplo resuelto paso a paso
  I|🏰 Título: detalle|📚 Título: detalle        infografía en cuadrícula (Is pasos, Ic ciclo, If datos)
  0|V|afirmación verdadera                     nivel 1 (0), nivel 2 (1), nivel 3 (2)
  0|F|afirmación falsa
  1|pregunta|correcta|incorrecta|incorrecta
  2|O|instrucción|primero|segundo|tercero      ordenar
  K|¿… {x} …?|título para clasificar|grupo: a; b; c|grupo: d; e; f      tabla de clasificación
  P|¿… {x} …?|¿pregunta inversa {x}?|a = b|c = d|e = f                  tabla de parejas

Uso:  node lecciones.js && python3 mkbanco.py [materia] [-v]     (desde la carpeta de estas herramientas)
"""
import json, re, sys, os, glob

HERE = os.path.dirname(os.path.abspath(__file__))
if os.path.exists(os.path.join(HERE, '..', 'build-order.txt')):      # copia de trabajo: banco/*.txt -> banco-*.js
    ROOT = os.path.dirname(HERE); TXT = os.path.join(ROOT, 'banco')
    def salida(n): return os.path.join(ROOT, f'banco-{n}.js')
else:                                                                # repositorio: src/banco/*.txt -> src/banco/*.js
    ROOT = os.path.dirname(os.path.dirname(HERE)); TXT = os.path.join(ROOT, 'src', 'banco')
    def salida(n): return os.path.join(TXT, f'{n}.js')
LEC = json.load(open(os.path.join(HERE, 'lecciones.json'), encoding='utf8'))
LAY = {'I': 'grid', 'Is': 'steps', 'Ic': 'cycle', 'If': 'facts'}


def norm(s):
    s = re.sub(r'<[^>]+>', '', s)
    return re.sub(r'\s+', ' ', s).strip().lower()


def compila(path):
    name = os.path.splitext(os.path.basename(path))[0]
    out, errs, warns = {}, [], []
    cur, cid = None, None
    st = dict(lec=0, q=0, v=0, f=0, c=0, o=0, k=0, p=0, kq=0, largo=0)
    seen = set()
    for ln, raw in enumerate(open(path, encoding='utf8'), 1):
        line = raw.rstrip('\n').strip()
        if not line or line.startswith('//'):
            continue
        where = f'{name}.txt:{ln}'
        if line.startswith('#'):
            cid = line[1:].strip()
            if cid not in LEC:
                errs.append(f'{where}: lección desconocida «{cid}»'); cur = None; continue
            if cid in out:
                errs.append(f'{where}: lección repetida «{cid}»')
            cur = out.setdefault(cid, {}); st['lec'] += 1
            seen = set(LEC[cid]['qs'])
            continue
        if cur is None:
            errs.append(f'{where}: línea fuera de una lección'); continue
        f = [x.strip() for x in line.split('|')]
        tag = f[0]
        if any(x == '' for x in f[1:]) and tag not in ('P', 'K'):
            errs.append(f'{where}: campo vacío'); continue
        if tag == 'Z':
            if not LEC[cid]['piz']: warns.append(f'{where}: {cid} no tiene pizarrón')
            cur['z'] = f[1:]
        elif tag == 'E':
            cur['e'] = f[1:]
        elif tag == 'S':
            if not LEC[cid]['paso']: warns.append(f'{where}: {cid} no tiene ejemplo resuelto')
            if len(f) < 4 or not f[-1].startswith('='):
                errs.append(f'{where}: S necesita pregunta, pasos y =resultado'); continue
            if any(len(x) < 8 for x in f[2:-1]): warns.append(f'{where}: paso muy corto (¿hay una barra | dentro del texto?)')
            cur['s'] = [f[1], f[2:-1], f[-1][1:].strip()]
        elif tag in LAY:
            if not LEC[cid]['info']: warns.append(f'{where}: {cid} no tiene infografía')
            items = []
            for it in f[1:]:
                m = re.match(r'^(\S+)\s+(.*)$', it)
                if not m:
                    errs.append(f'{where}: ítem de infografía sin icono: «{it}»'); continue
                ic, rest = m.group(1), m.group(2)
                if re.match(r'^[A-Za-zÁÉÍÓÚáéíóúñÑ¿¡«]', ic) and tag != 'If':
                    errs.append(f'{where}: el ítem debe empezar con un emoji: «{it}»'); continue
                if ': ' in rest:
                    h, p = rest.split(': ', 1); items.append([ic, h.strip(), p.strip()])
                else:
                    items.append([ic, rest.strip()])
            if len(items) < 3: warns.append(f'{where}: infografía con menos de 3 ítems')
            cur['i'] = {'l': LAY[tag], 'x': items}
        elif tag in ('0', '1', '2'):
            t = int(tag); q = cur.setdefault('q', [[], [], []])
            if f[1] in ('V', 'F') and len(f) == 3:
                key = norm(f[2]); item = [f[2], f[1] == 'V']; st['v' if f[1] == 'V' else 'f'] += 1
            elif f[1] == 'O':
                if len(f) < 6: errs.append(f'{where}: ordenar necesita al menos 3 pasos'); continue
                if len(set(map(norm, f[3:]))) != len(f[3:]): errs.append(f'{where}: pasos repetidos'); continue
                key = norm(f[2]) + '>' + '>'.join(map(norm, f[3:])); item = [f[2], f[3:]]; st['o'] += 1
            else:
                if len(f) < 4: errs.append(f'{where}: faltan opciones incorrectas'); continue
                opts = f[2:]
                if len(set(map(norm, opts))) != len(opts): errs.append(f'{where}: opciones repetidas'); continue
                if len(opts) > 4: warns.append(f'{where}: más de 4 opciones')
                key = norm(f[1]) + '|' + norm(opts[0]); item = [f[1]] + opts; st['c'] += 1
                lc = len(opts[0]); lw = max(len(x) for x in opts[1:])
                if lc > 1.7 * lw and lc - lw > 12: st['largo'] += 1; warns.append(f'{where}: la correcta es mucho más larga ({lc} vs {lw})')
                if any(len(x) > 62 for x in opts): warns.append(f'{where}: opción muy larga')
            if key in seen:
                errs.append(f'{where}: pregunta repetida en la lección: «{f[2] if f[1] in ("V","F","O") else f[1]}»'); continue
            seen.add(key); q[t].append(item); st['q'] += 1
        elif tag == 'K':
            if len(f) < 5: errs.append(f'{where}: K necesita enunciado, título y 2 grupos'); continue
            groups, allit = [], set()
            for g in f[3:]:
                if ': ' not in g: errs.append(f'{where}: grupo sin «nombre: elementos»: {g}'); continue
                gn, its = g.split(': ', 1); its = [x.strip() for x in its.split(';') if x.strip()]
                for x in its:
                    if norm(x) in allit: errs.append(f'{where}: «{x}» está en dos grupos')
                    allit.add(norm(x))
                if len(its) < 2: errs.append(f'{where}: grupo «{gn}» con menos de 2 elementos')
                groups.append([gn.strip(), its])
            if len(groups) < 2: errs.append(f'{where}: K con menos de 2 grupos'); continue
            cur.setdefault('k', []).append([f[1], f[2], groups]); st['k'] += 1; st['kq'] += len(allit)
        elif tag == 'P':
            if len(f) < 6: errs.append(f'{where}: P necesita enunciado, inversa (o vacío) y 3 parejas'); continue
            pairs = []
            for pr in f[3:]:
                if ' = ' not in pr: errs.append(f'{where}: pareja sin « = »: {pr}'); continue
                a, b = pr.split(' = ', 1); pairs.append([a.strip(), b.strip()])
            if len(set(norm(a) for a, b in pairs)) != len(pairs): errs.append(f'{where}: parejas con el mismo primer elemento')
            nb = len(set(norm(b) for a, b in pairs))
            if nb < 3: errs.append(f'{where}: P necesita al menos 3 respuestas distintas'); continue
            if f[2] and nb != len(pairs): errs.append(f'{where}: la pregunta inversa exige respuestas únicas')
            cur.setdefault('p', []).append([f[1], f[2], pairs]); st['p'] += 1; st['kq'] += len(pairs) * (2 if f[2] else 1)
        else:
            errs.append(f'{where}: etiqueta desconocida «{tag}»')
    # tamaño final de cada nivel en lecciones de solo banco
    flojos = []
    for cid, d in out.items():
        L = LEC[cid]
        if L['gens'] or L['reto']: continue
        q = d.get('q', [[], [], []])
        tab = sum(len(g[1]) for k in d.get('k', []) for g in k[2]) + sum(len(p[2]) for p in d.get('p', []))
        t = [L['qb'][0] + L['ex'] + len(q[0]) + tab // 2, L['qb'][1] + len(q[1]) + (tab - tab // 2), L['qb'][2] + L['rx'] + len(q[2]) + (3 if d.get('k') else 0)]
        if min(t) < 5: flojos.append(f'{cid} {t}')
    falt = [i for i, L in LEC.items() if L['s'] == name and not L['reto'] and i not in out]
    js = '/* Generado por herr/mkbanco.py a partir de banco/%s.txt. No editar a mano: edita el .txt y vuelve a compilar. */\nENR(%s);\n' % (
        name, json.dumps(out, ensure_ascii=False, separators=(',', ':')))
    return name, js, errs, warns, st, flojos, falt


def main():
    files = sorted(glob.glob(os.path.join(TXT, '*.txt')))
    only = [a for a in sys.argv[1:] if not a.startswith('-')]
    verbose = '-v' in sys.argv
    bad = 0; tot = dict(lec=0, q=0, kq=0)
    for p in files:
        name, js, errs, warns, st, flojos, falt = compila(p)
        if only and name not in only:
            if not errs: open(salida(name), 'w', encoding='utf8').write(js)
            continue
        tf = st['v'] + st['f']
        print(f"{name}: {st['lec']} lecciones, {st['q']} preguntas (V {st['v']} / F {st['f']} / opción {st['c']} / ordenar {st['o']}), "
              f"{st['k']} tablas K, {st['p']} tablas P (~{st['kq']} preguntas de tabla); correcta larga: {st['largo']}")
        for e in errs: print('  ERROR', e)
        if verbose or only:
            for w in warns: print('  aviso', w)
        elif warns: print(f'  {len(warns)} avisos (usa -v para verlos)')
        if flojos: print('  niveles con menos de 5:', '; '.join(flojos[:40]))
        if falt: print('  lecciones sin enriquecer:', ' '.join(falt[:60]))
        if errs: bad += 1; continue
        open(salida(name), 'w', encoding='utf8').write(js)
        for k in tot: tot[k] += st[k]
    print(f"TOTAL: {tot['lec']} lecciones, {tot['q']} preguntas escritas, ~{tot['kq']} de tablas")
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
