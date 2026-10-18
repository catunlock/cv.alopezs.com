# cv.alopezs.com

Web personal de Alberto López Sánchez, en inglés y con forma de editor de código: la experiencia y el conocimiento viven en carpetas del explorador, cada documento se lee como una vista previa, la terminal de abajo funciona de verdad y hay algún easter egg.

Sin frameworks ni dependencias: HTML, CSS y un único `bundle.js`.

## Verla

Abre `index.html` en el navegador o sirve la carpeta:

```bash
python3 -m http.server 8000
```

y entra en http://localhost:8000.

## Estructura

| Ruta | Qué es |
| --- | --- |
| `index.html` | La web: monta `Portfolio.app` a pantalla completa. |
| `design-system/` | El sistema de diseño (el mismo que el artifact *Alberto López — portfolio*): `README.md` con las reglas, `tokens.json`, fuentes IBM Plex y los componentes con su `preview.html` y su guía. |
| `design-system/components/bundle.js` | Generado. Contenido, sistema de archivos, markdown, resaltado, terminal y la app. |
| `design-system/components/bundle.css` | Estilos de todos los componentes, solo con tokens. |
| `src/` | Las piezas de `bundle.js`, en orden: `10-content.js` (todo el contenido), `20-core.js`, `30-terminal.js`, `40-app.js`. |
| `site/tokens.css` | Generado a partir de `tokens.json`. |
| `tools/` | `build.sh`, la paleta con su comprobación de contraste y los generadores de tokens. |

## Cambiar el contenido

Todo el texto está en `src/10-content.js`: cada archivo del explorador es una llamada `f(ruta, ficha, texto)`, donde la ficha (`kind`, `title`, `sub`, `level`, `text`) es lo que sale al pasar el cursor. Las carpetas llevan su descripción con `d(ruta, texto)` y la trayectoria (vista de git) está en `COMMITS`. Después:

```bash
tools/build.sh
```

Para cambiar colores, edita `tools/palette.py` y ejecuta `tools/build.sh --tokens`: comprueba el contraste (texto ≥ 4.5:1, bordes y foco ≥ 3:1 en los tres temas) y regenera `tokens.json` y `site/tokens.css`.

## Temas

`night` (por defecto), `day` (claro) y `pcb`, el secreto: código Konami o `theme pcb` en la terminal.

## Idioma

Toda la web (contenido, interfaz y terminal) está en inglés. La documentación del repositorio y del sistema de diseño sigue en español.
