# Explorer

El árbol de carpetas que reparte la experiencia y el conocimiento; al pasar el cursor por un archivo o carpeta sale su ficha.

**Qué aporta quien lo usa:** un contenedor y `Portfolio.explorer(el, { open, hidden, active, onOpen })`: `open` dice qué carpetas empiezan abiertas, `hidden` muestra los archivos que empiezan por punto, `onOpen(path)` recibe el archivo pulsado. Para las fichas, `Portfolio.hover(root)` una vez sobre el contenedor común.

**Orden:** carpetas primero; en la raíz, experience → skills → projects → education → lab; dentro, orden alfabético (por eso los logros llevan número delante).

**Filas:** 22px (`row-h`), sangría de 12px por nivel, guía vertical en `line`, glifo de lenguaje coloreado, nombre en `ui`. Hover en `bg-hover`, archivo abierto en `bg-select`, ocultos en cursiva y `ink-muted`.

- Teclado: ↑ ↓ recorren, → abre carpeta, ← la cierra o sube al padre, Intro abre el archivo.
- Sí: carpetas con una idea cada una; mejor tres niveles que un cajón de veinte archivos.
- No: carpetas vacías ni archivos «TODO» visibles.
