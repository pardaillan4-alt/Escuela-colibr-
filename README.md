# Escuelita Colibrí

App de homeschooling para primaria con enfoque católico. Sigue los temas de la SEP y enseña cada materia desde la fe.

Funciona en el navegador del teléfono, la tableta o la computadora, sin instalar nada. Para usarla, abre `index.html`.

## Qué incluye

| Grado | Materias | Lecciones |
|---|---|---|
| 1.º | Matemáticas, Español, Ciencias Naturales, Historia y Geografía, Cívica y Valores, Religión Católica, Primera Comunión | 84 |
| 2.º | Las mismas siete materias | 79 |
| 3.º | Las mismas, con «Vida de fe» en lugar de Primera Comunión | 67 |

- **Infografías ilustradas:** cada una de las 230 lecciones tiene una infografía con ilustraciones propias, en cinco diseños: ciclo, pasos, comparación, datos clave y cuadrícula. Todas incluyen una frase de fe. Cada materia tiene una galería para repasarlas juntas.
- **Cuadernos para imprimir:** en la carpeta `cuadernos/` hay un cuaderno de trabajo en PDF para cada grado (tamaño carta). Incluye portada, índice con páginas, una hoja por lección con infografía, ejercicios para lápiz y papel, caligrafía en Español, operaciones en Matemáticas, recuadro para dibujar en Ciencias e Historia, sección de fe y solucionario al final. En `cuadernos/por-materia/` está cada materia por separado.
- **Cada lección tiene dos partes:** *Aprende*, con dibujos y lectura en voz alta, y *Practica*, con ejercicios de opción múltiple, teclado numérico, formar palabras, ordenar y clasificar.
- **Enfoque católico en todas las materias:** cada lección de Matemáticas, Español, Ciencias, Historia y Cívica incluye una página «Con los ojos de la fe» con sus propios ejercicios.
- **Ejercicios que cambian:** en Matemáticas y en algunos temas de Español los ejercicios se generan cada vez, así que el niño puede repetir la práctica sin memorizar las respuestas.
- **Operaciones en columnas como en papel:** el resultado se escribe en casillas debajo de cada columna, de derecha a izquierda, empezando por las unidades. Cada columna tiene un color fijo (unidades azul, decenas rojo, centenas verde, millares morado), hay casillas para lo que se lleva y se puede marcar la decena que se pide prestada.
- **Estrellas y niveles:** el niño gana de 1 a 3 estrellas por lección.
- **Perfiles:** cada hijo tiene su propio perfil y su propio grado.
- **Zona de papás:** se abre resolviendo una multiplicación. Muestra el progreso por materia y permite agregar niños y ajustar la voz y los sonidos.
- **Dónde se guarda el progreso:** solo en el navegador del dispositivo donde se usa.

## Estructura

```
index.html                   ← la app completa, ya armada (se genera con build.sh)
build.sh                     ← une los archivos de src/ en index.html
manifest.webmanifest, sw.js  ← para instalarla como app y usarla sin internet
iconos/                      ← íconos de la app
src/head.html                ← estilos, íconos y estructura de la página
src/motor/motor.js           ← navegación, ejercicios, voz, estrellas, perfiles
src/motor/generadores-2.js   ← dibujos y ejercicios automáticos de 2.º
src/motor/generadores-3.js   ← dibujos y ejercicios automáticos de 3.º
src/motor/ilustraciones.js   ← biblioteca de ilustraciones y diseño de infografías
src/motor/columnas.js        ← sumas, restas y multiplicaciones en columnas, con colores por columna
src/grado1/*.js              ← temario de 1.º (fe.js agrega las páginas de fe)
src/grado2/*.js              ← temario de 2.º
src/grado3/*.js              ← temario de 3.º (las infografías van dentro de cada lección)
src/infografias/*.js         ← infografías de 1.º y 2.º, y el código que las inserta
```

## Cómo agregar o cambiar contenido

1. Edita el archivo de la materia en `src/gradoN/`.
2. Ejecuta `./build.sh`.
3. Abre `index.html` para revisar el cambio.

Cada lección se escribe así:

```js
L("2m6", "Título de la lección", [
  P("Título de la página", "Texto que se lee", {t:"emo", x:"🍎"}),
  F("Página de fe", "Texto con enfoque católico", {t:"emo", x:"✝️"}),
  I("Título", "steps", [["sun","Paso 1","texto"], ["cross","Paso 2","texto"]], "Frase de fe")
], [
  C("Pregunta de opción múltiple", ["respuesta correcta", "opción", "opción"]),
  N("Pregunta con respuesta numérica", 12),
  TF("Afirmación", true),
  O("Ordena", ["primero", "segundo", "tercero"])
], [["mult", 10]])   // ejercicios generados automáticamente: [generador, cantidad]
```

En las preguntas de opción múltiple, la respuesta correcta siempre va primero. La app revuelve las opciones al mostrarlas.

## Regenerar los cuadernos

Después de cambiar lecciones, ejecuta `./build.sh` y luego, dentro de `herramientas/cuadernos/`, `python3 assemble.py 1` (o 2, o 3). Se necesita Node con Playwright y Python con `pypdf` y `reportlab`. Para comprimir los PDF y separarlos por materia, ejecuta `python3 finalize.py` dentro de `out/`; usa `qpdf`.

## Instalar en el celular como app

La app se puede instalar desde Chrome y abre a pantalla completa, sin la barra del navegador, y también funciona sin internet.

1. Abre `https://pardaillan4-alt.github.io/Escuela-colibr-/` en Chrome.
2. Toca el menú ⋮ y elige **Instalar app** (en algunos teléfonos dice **Agregar a la pantalla principal → Instalar**).

En iPhone, abre la dirección en Safari, toca **Compartir** y elige **Agregar a inicio**.

## Publicar con GitHub Pages

En **Settings → Pages**, elige la rama `main` y la carpeta `/ (root)`. La app queda disponible en `https://pardaillan4-alt.github.io/Escuela-colibr-/` (con **E** mayúscula, igual que el nombre del repositorio).
