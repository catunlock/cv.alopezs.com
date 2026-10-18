# CodeView

Un archivo de código con números de línea, resaltado y, encima de la primera línea, el nivel de esa habilidad.

**Qué aporta quien la usa:** la ruta (`Portfolio.docHTML(path)` o `Portfolio.codeHTML(path)`); el lenguaje sale de la extensión. Resalta Rust, C, Python, Bash, YAML, TOML/INI, JSON, Dockerfile y el propio markdown en modo fuente.

**Composición:** bloque de 900px como máximo, centrado en el editor como la vista previa; medianil de 56px en `ink-muted`; código en `code`; resaltado con `syn-keyword`, `syn-string`, `syn-number`, `syn-comment` (cursiva), `syn-type`, `syn-func` y `syn-key`. La línea superior («CodeLens») muestra `LevelMeter` y la frase de la ficha en `small`.

- Sí: archivos cortos y que se entiendan sin saber el lenguaje: los comentarios cuentan el qué.
- No: código real de empresa ni nada que no se pueda publicar.
