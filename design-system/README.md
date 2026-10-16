Web personal de Alberto López Sánchez (cv.alopezs.com) con forma de editor de código. La experiencia y el conocimiento viven en carpetas del explorador, cada documento se lee como una vista previa limpia, la terminal de abajo funciona de verdad y hay algún secreto para quien lo busque. Es seria por dentro y juguetona en los bordes: lo que importa —puesto, logros, nivel con cada tecnología— se lee sin tocar nada; lo demás premia a quien curiosea.

Es un editor *inspirado* en los de toda la vida, con identidad propia: sin logotipos, iconos ni colores de ningún producto. La marca es el cuadrado **AL**.

## Contenido: las carpetas son la estructura

| Carpeta | Qué va dentro | Formato |
| --- | --- | --- |
| `README.md` | Quién soy, a qué me dedico y cómo moverse por la web. Se abre al entrar. | Markdown |
| `experiencia/hp/README.md` | El puesto actual: fechas, equipo, resumen y la lista de logros enlazados. | Markdown |
| `experiencia/hp/logros/NN-nombre.md` | Un logro por archivo: qué y con qué (enlaces a conocimiento). | Markdown |
| `experiencia/<empresa>.md` | Puestos anteriores en un solo archivo: Nuclia, ALBA Synchrotron, JEDI. | Markdown |
| `experiencia/startups/` | Proxishop y Quokka: qué eran, mi papel y con qué. | Markdown |
| `conocimiento/<área>/` | Una tecnología o habilidad por archivo, con nivel y descripción. Los lenguajes se escriben en sí mismos (`rust.rs`, `c.c`, `python.py`); lo demás, en su formato natural (`Dockerfile`, `ci.yml`, `linux.sh`) o en markdown. | Varios |
| `proyectos/<área>/<repo>.md` | Una selección de github.com/catunlock por áreas (embebido, herramientas, linux, juegos): qué es, lenguaje, año, enlace y con qué. | Markdown |
| `formacion/` | Máster en IA y grado en Informática (UPC) con sus trabajos finales, y certificaciones. | Markdown |
| `taller/` | Aficiones con nivel: Home Assistant, PCB, CAD e impresión 3D, el escritorio. | Varios |
| `contacto.json` | Formulario, GitHub, LinkedIn y CV. | JSON |
| `.secreto` | Oculto. Solo aparece con `ls -a` o el botón de archivos ocultos. | Texto |

- Cada archivo de conocimiento o taller lleva su **nivel 1–5 con palabra** (Explorando, Básico, Competente, Avanzado, Experto): en markdown con una línea `Nivel: 4/5 · Avanzado` justo bajo el título; en código, en el primer comentario. La web lo pinta con `LevelMeter`.
- Lo que se hizo con una tecnología se cuenta con **enlaces normales**: el logro enlaza a `ci.yml` y `Dockerfile`; `firmware.md` enlaza, en «Dónde», a los puestos y proyectos. No hay grafo: hay carpetas y enlaces.
- Los nombres de archivo van en minúsculas y con guiones; los logros se numeran (`01-`, `02-`…) para que el orden lo decida el autor.
- Cada archivo tiene una ficha para el hover: tipo, título, subtítulo, nivel y una frase.

## Voz

- Seria y clara. Primera persona sin adornos, frases cortas, verbo o resultado al principio: «Workflows de CI y tooling basado en Docker para automatizar la integración de firmware en varias plataformas de producto».
- Los comentarios del código son texto de verdad, en español y legibles: aquí cuentan cosas.
- Sin emoji, sin exclamaciones, sin superlativos. El nivel lo dice `LevelMeter`, no los adjetivos.
- El humor vive solo en los bordes —la terminal, los avisos, los diálogos— y siempre acaba devolviendo a algo útil (`git push` → «escríbeme»).
- Fechas, rutas y comandos en mono (`code`); nombres de empresa en texto, sin logotipos.

## Fundamentos visuales

**Temas.** `noche` es el tema por defecto, `dia` su versión clara y `placa` un tema secreto (el verde de la PCB con cobre) que se activa con el código Konami o con `theme placa`. Los tres comparten los mismos 29 tokens de color.

**Color.** Fondos por zona (`bg-title`, `bg-activity`, `bg-side`, `bg-editor`, `bg-panel`) para separar el marco sin sombras. Texto en `ink` y `ink-muted`, que pasan 4.5:1 sobre todos los fondos y en los tres temas. `accent` marca lo activo: vista, pestaña, enlaces, pips de nivel y el cursor de la terminal. La barra de estado es `status-bg` con `on-status`. El resaltado (`syn-*`) y la terminal (`term-*`) también pasan 4.5:1 sobre sus fondos.

**Tipografía.** IBM Plex Sans para leer y para la interfaz; IBM Plex Mono solo para código, terminal, rutas y fechas. Documento: `display`, `title`, `heading`, `body`. Interfaz: `ui`, `small`, `label` (cabeceras en mayúsculas). Código: `code`.

**Medidas.** Base de 4px. El marco usa las medidas de `size`: barra de título 34px, actividad 48px, lateral 264px (se arrastra entre 170 y 520px), pestañas 35px, filas 22px, panel 220px, barra de estado 24px.

**Bordes, radios y sombras.** El marco va a escuadra (`radius-0`) y separado por `line`. Solo lo que flota —paleta, menús, ficha, diálogos, avisos— se redondea (`radius-md`), lleva borde `line-strong` y `shadow-pop`.

**Estados.** Fila bajo el cursor en `bg-hover`; fila o archivo abierto en `bg-select`; pestaña activa con una raya `accent` arriba; vista activa con una raya `accent` a la izquierda. Foco de teclado: contorno de 1px de `focus` dentro de filas y botones; `focus-ring` fuera de ellos.

**Movimiento.** Casi ninguno: la ficha aparece tras 380ms y se funde en 120ms; el resalte del borde arrastrable tarda 200ms. El tren de `sl` es la única animación y desaparece con `prefers-reduced-motion`.

## Iconografía

Iconos de trazo de 1,5px dibujados en SVG dentro del propio bundle (`Portfolio.ico`): archivos, buscar, rama, bloques, usuario, ajustes, campana, terminal… Sin fuentes de iconos ni iconos de terceros. Los archivos se distinguen por un glifo mono coloreado según su lenguaje (`#` markdown, `R` Rust, `C` C, `py` Python, `≡` YAML, `{}` JSON, `◫` Dockerfile, `$` shell, `⚙` configuración). Sin emoji.

## Interacción y accesibilidad

- **Terminal:** se abre arrastrando hacia arriba la barra de estado o el borde del panel, con el botón «Terminal» de la barra de estado o con `Ctrl+ñ`. Por debajo de 64px se cierra; doble clic en el borde la alterna.
- **Teclado:** `Ctrl+Shift+P` comandos, `Ctrl+P` archivos, `Ctrl+B` barra lateral, `Ctrl+Shift+E/F/G/X` vistas, `Esc` cierra lo que flota. El árbol se recorre con flechas, Intro abre.
- Todo lo que tiene hover tiene su equivalente sin hover: la ficha resume, el archivo cuenta lo mismo y más.
- En pantallas estrechas (menos de 720px) la barra lateral flota sobre el editor y se ocultan menús y botones de ventana; la terminal sigue arrastrándose desde abajo.
