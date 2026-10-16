# LevelMeter

El nivel de experiencia con una habilidad o afición, de 1 a 5, siempre con su palabra.

**Qué aporta quien la usa:** un entero 1–5 (`Portfolio.level(4)`); `{ compact: true }` quita la palabra.

**La escala:** 1 Explorando · 2 Básico · 3 Competente · 4 Avanzado · 5 Experto. Pips de 7px llenos en `accent`, vacíos con borde `line-strong`.

- Sale en la ficha, en la vista previa (con la línea `Nivel: n/5`), encima del código y en la vista Conocimiento.
- No: porcentajes ni barras de progreso.
