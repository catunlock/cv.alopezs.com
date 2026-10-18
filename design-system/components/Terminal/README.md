# Terminal

Una terminal que funciona sobre el mismo sistema de archivos que el explorador: navega, lee, busca, abre archivos en el editor y guarda algún secreto.

**Qué aporta quien la usa:** un contenedor con alto y `Portfolio.terminal(el, api)`. `api` conecta con lo de fuera y todo es opcional: `open(path)` (si falta, `open` hace `cat`), `reveal(dir)`, `close()` para `exit`, `setTheme(id)`, `theme()` y `themes`. Devuelve `{ run(texto), focus(), print(html), clear(), reset() }`.

**Composición:** `code` sobre `bg-panel`; prompt con usuario en `term-ok` y ruta en `term-path`; errores en `term-err`; hashes y avisos en `term-warn`; salida secundaria en `ink-muted`. Los nombres de archivo de la salida son enlaces: abren el archivo en el editor.

**Quién escribe:** quien visita entra como `recruiter` (`recruiter@alopezs:~$`); `su <rol>` cambia de usuario y `exit` vuelve al anterior. Roles con mensaje propio: `recruiter`, `hiring-manager`, `engineer`, `friend`, `future-boss`, `guest`; vale cualquier nombre en minúsculas. `su root` y `su alberto` fallan con «Authentication failure». El prompt, `whoami`, `pwd`, `sudo` y el aviso de la cuenta siguen al usuario activo; los archivos siguen siendo de `alberto` (`ls -l`). Devuelve también `user()`.

**Comandos:** los de `help` más los easter eggs listados en `PropuestaEditor`. Tab completa comandos y rutas; ↑ ↓ historial; `Ctrl+L` limpia; `Ctrl+C` cancela.

- Sí: respuestas cortas y útiles; si un comando es broma, que termine señalando algo real (contacto, un archivo).
- No: comandos que finjan hacer algo peligroso sin desmentirlo enseguida.
