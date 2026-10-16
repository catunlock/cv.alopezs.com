# CommandPalette

El buscador flotante: abre cualquier archivo por su nombre (`Ctrl+P`) o ejecuta un comando si se escribe `>` delante (`Ctrl+Shift+P`).

**Qué aporta quien la usa:** `Portfolio.paletteHTML()` en el contenedor y `Portfolio.palette(box, { close })`; luego `open(fuente, valorInicial, placeholder)`, donde `fuente(q)` devuelve `{ query, items, empty }` y cada item es `{ label, desc, kbd, icon, run, keep }`.

**Composición:** caja de 560px sobre `bg-input` con `line-strong`, `radius-md` y `shadow-pop`, pegada arriba y centrada. Campo con borde `focus`. Filas de 24px; la elegida en `bg-select`; las letras que coinciden en `accent` y negrita; atajos como `kbd` a la derecha.

- La búsqueda es difusa y no distingue acentos («impresion» encuentra «impresión»).
- ↑ ↓ eligen, Intro ejecuta, Esc cierra.
