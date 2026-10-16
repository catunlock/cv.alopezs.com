# HoverCard

La ficha que aparece al dejar el cursor sobre un archivo, una carpeta o un enlace: qué es, su nivel y una frase.

**Qué aporta quien la usa:** nada más que la ruta: `Portfolio.cardHTML(path)` la compone desde la ficha del archivo (o, en carpetas, desde su descripción y el número de archivos). `Portfolio.hover(root)` la muestra con 380ms de retardo junto a la barra lateral o bajo el enlace.

**Partes:** tipo en `label` con la ruta en mono a la derecha; título en 16/22 semibold; subtítulo en mono `ink-muted` (puesto y fechas, repositorio); `LevelMeter` si tiene nivel; una frase en `ink`. Sobre `bg-input`, borde `line-strong`, `radius-md`, `shadow-pop`, 300px de ancho.

- Sí: una frase que diga qué hiciste tú, no qué es la tecnología.
- No: botones ni enlaces dentro: desaparece al mover el cursor.
