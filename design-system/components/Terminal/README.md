# Terminal

Una terminal que funciona sobre el mismo sistema de archivos que el explorador: navega, lee, busca, abre archivos en el editor y guarda algún secreto.

**Qué aporta quien la usa:** un contenedor con alto y `Portfolio.terminal(el, api)`. `api` conecta con lo de fuera y todo es opcional: `open(path)` (si falta, `open` hace `cat`), `reveal(dir)`, `close()` para `exit`, `setTheme(id)`, `theme()` y `themes`. Devuelve `{ run(texto), focus(), print(html), clear(), reset() }`.

**Composición:** `code` sobre `bg-panel`; prompt con usuario en `term-ok` y ruta en `term-path`; errores en `term-err`; hashes y avisos en `term-warn`; salida secundaria en `ink-muted`. Los nombres de archivo de la salida son enlaces: abren el archivo en el editor.

**Comandos:** los de `help` más los easter eggs listados en `PropuestaEditor`. Tab completa comandos y rutas; ↑ ↓ historial; `Ctrl+L` limpia; `Ctrl+C` cancela.

- Sí: respuestas cortas y útiles; si un comando es broma, que termine señalando algo real (contacto, un archivo).
- No: comandos que finjan hacer algo peligroso sin desmentirlo enseguida.
