# MarkdownView

La vista previa donde se lee cada documento: puesto, logros, conocimiento y proyectos.

**Qué aporta quien la usa:** la ruta (`Portfolio.docHTML(path)`); el markdown sale de `Portfolio.files`. Los enlaces relativos (`../../skills/languages/rust.rs`) se resuelven y abren el archivo; los `http` salen fuera.

**Composición:** columna de 820px como máximo con 48px de margen (`space-12`). `#` en `display`, `##` en `title` con filete `line`, `###` en `heading`, texto en `body`. Enlaces en `accent`; código en línea en mono sobre `bg-input`; bloques de código resaltados sobre `bg-side`; citas con filete `line-strong` y texto `ink-muted` (para lo pendiente); tablas con bordes `line`.

**Nivel:** una línea `Level: 4/5 · Advanced` justo bajo el título se pinta como `LevelMeter`.

- Sí: un `#` por documento; listas para logros y enlaces.
- No: HTML incrustado ni imágenes decorativas; si hace falta una foto de una placa o una pieza, que sea la de verdad.
