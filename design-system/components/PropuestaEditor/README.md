# PropuestaEditor

La web completa: un editor de código cuyo proyecto abierto es la carrera de Alberto, con explorador, documentos, terminal que funciona y unos cuantos secretos.

**Qué aporta quien la monta:** un contenedor con alto y ancho (`Portfolio.app(root)`), el contenido en `Portfolio.files` (rutas → texto + ficha) y, si se quiere, el tema inicial en `data-theme`. Opcional: `{ panel: false }` para empezar con la terminal cerrada y `{ run: ['neofetch'] }` para ejecutar comandos al cargar.

**Zonas.** Barra de título (menús File, View, Terminal y Help, y el buscador central con tu nombre, que abre `Ctrl+P`) · barra de actividad (Explorer, Search, Career —la carrera como historial de git—, Skills —las habilidades como extensiones instaladas, con su nivel—) · barra lateral redimensionable · pestañas y migas de pan · documento · panel inferior arrastrable (Problems, Output, Terminal, Ports) · barra de estado.

**Terminal.** `help`, `ls [-a|-l]`, `cd`, `pwd`, `cat`, `open`/`code`, `tree`, `grep`, `skills`, `git log [--oneline]`, `git status`, `neofetch`, `contacto`, `cv`, `theme`, `history`, `echo`, `date`, `whoami`, `uname -a`, `man`, `clear`, `exit`. Completa con Tab, recuerda con ↑ ↓, `Ctrl+L` limpia, `Ctrl+C` cancela, y sugiere el comando parecido cuando te equivocas.

**Usuario de la terminal:** el visitante entra como `recruiter`; con `su engineer`, `su friend`, `su future-boss`… cambia de papel y cada uno tiene su bienvenida y su `whoami`. `exit` vuelve al anterior.

**Easter eggs** (para el dueño; en la web no se listan):
- Código Konami (↑ ↑ ↓ ↓ ← → ← → B A) en cualquier parte: tema secreto `pcb`. La pista está en `.secret`, que solo aparece con `ls -a` o el botón del ojo.
- `sudo …` → «recruiter is not in the sudoers file… but you can still type hire». `sudo make me a sandwich` → «Okay.» `su root` / `su alberto` → «Authentication failure».
- `rm -rf /` → borra la carrera carpeta a carpeta… y era broma.
- `vim`, `vi`, `nvim`, `emacs` → atrapado en vim hasta escribir `:q` (o `Ctrl+C`).
- `coffee`, `make coffee` y «Coffee: Brew» en la paleta → HTTP 418. `cv` y «CV: View on LinkedIn» llevan al CV completo.
- `sl` → un tren cruza la terminal.
- `git push`, `git checkout <rama>` y el botón «Commit» de Career → acaban en el contacto (LinkedIn). `git blame` → culpa al compilador.
- `cowsay`, `fortune`, `ping`, `42`, `pacman`, `apt`, `hello`. `hire` da `hire@alopezs.com` («the fast lane»); `hola` responde en español con `hola@alopezs.com`, lo único en español de la web; `mail` / `email` dan `hello@`.
- Botón cerrar de la ventana → «Hay cambios sin guardar en tu carrera: todavía no me has escrito». Minimizar se niega; maximizar pone la web a pantalla completa.
- Problems: «Running low on coffee». Campana: «Enjoy the silence».

**En móvil.** La barra lateral pasa a cajón sobre el editor y se abre con los iconos de actividad; los menús se van a la paleta; el panel ocupa el ancho y sigue arrastrándose desde la barra de estado.

- Sí: el README y el puesto se leen sin interactuar; todo lo interactivo es un atajo, nunca el único camino.
- No: animaciones de escritura, sonidos o «arranque» falso al entrar.
