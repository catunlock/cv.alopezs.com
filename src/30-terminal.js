  // ================= Terminal =================
  // api: { open(path), reveal(dir), setTheme(id), theme(), close(), toast(text), themes }
  var REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FORTUNES = [
    'Primero haz que funcione; luego, que funcione bien; después, que sea rápido. En ese orden.',
    'Un firmware sin logs es un firmware con secretos.',
    'Si lo haces tres veces, automatízalo. Si lo haces dos, piénsalo.',
    'El mejor commit es el que se entiende dentro de seis meses.',
    'Funciona en mi máquina. Por eso existe Docker.'
  ];
  function lev(a, b) {
    var m = [], i, j;
    for (i = 0; i <= a.length; i++) { m[i] = [i]; for (j = 1; j <= b.length; j++) m[i][j] = i ? Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) : j; }
    return m[a.length][b.length];
  }
  function terminal(el, api) {
    api = api || {};
    var cwd = '', hist = [], hi = 0, mode = 'sh';
    el.classList.add('vs-term');
    el.innerHTML = '<div class="vs-term-out" role="log" aria-live="polite"></div><div class="vs-term-line"><span class="vs-term-ps"></span><input class="vs-term-in" aria-label="Terminal: escribe un comando" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>';
    var out = el.querySelector('.vs-term-out'), input = el.querySelector('.vs-term-in'), ps = el.querySelector('.vs-term-ps');
    function promptHTML() { return '<span class="c-ok">alberto@alopezs</span>:<span class="c-path">' + (cwd ? '~/' + esc(cwd) : '~') + '</span>$ '; }
    function setPs() { ps.innerHTML = mode === 'vim' ? '<span class="c-dim">:</span>' : mode === 'busy' ? '' : promptHTML(); el.classList.toggle('is-busy', mode === 'busy'); }
    function print(html) { var dv = document.createElement('div'); dv.innerHTML = html; out.appendChild(dv); el.scrollTop = el.scrollHeight; return dv; }
    function line(text, cls) { return print(cls ? '<span class="' + cls + '">' + esc(text) + '</span>' : esc(text)); }
    function ext(url, label) { return '<a class="c-file" href="' + url + '" target="_blank" rel="noopener">' + esc(label || url.replace(/^https?:\/\/(www\.)?/, '')) + '</a>'; }
    function link(p, label) { return '<a href="#" class="c-file" data-open="' + esc(p) + '">' + esc(label || baseOf(p)) + '</a>'; }
    function nameHTML(c) { return c.dir ? '<span class="c-path">' + esc(c.name) + '/</span>' : link(c.path, c.name); }
    function target(arg) { return resolve(cwd, arg || '.'); }
    function exists(p) { return isFile(p) || isDir(p); }
    function pips(n) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= n ? '■' : '□'; return s; }
    function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }

    var HELP = [
      ['help', 'esta ayuda'], ['ls [-a] [ruta]', 'lista una carpeta'], ['cd <ruta>', 'cambia de carpeta'], ['cat <archivo>', 'muestra un archivo'],
      ['open <archivo>', 'lo abre en el editor (también: code)'], ['tree [ruta]', 'árbol de carpetas'], ['grep <texto>', 'busca en todos los archivos'],
      ['skills', 'conocimiento y taller con su nivel'], ['git log', 'la trayectoria, como historial'], ['neofetch', 'resumen del sistema'],
      ['contacto', 'cómo escribirme'], ['cv', 'el CV completo'], ['theme [nombre]', 'cambia el tema'], ['clear', 'limpia la terminal (Ctrl+L)'], ['exit', 'cierra el panel']
    ];
    var C = {
      help: function () { print(HELP.map(function (h) { return '<span class="c-ok">' + esc(pad(h[0], 18)) + '</span>' + esc(h[1]); }).join('\n') + '\n<span class="c-dim">Tab completa, ↑ ↓ recorren el historial. Hay más comandos de los que salen aquí.</span>'); },
      ls: function (a) {
        var all = a.indexOf('-a') >= 0 || a.indexOf('-la') >= 0 || a.indexOf('-al') >= 0, long = /^-\w*l/.test(a.join(' ')), p = target(a.filter(function (x) { return x.charAt(0) !== '-'; })[0]);
        if (isFile(p)) return print(link(p));
        if (!isDir(p)) return line('ls: no se puede acceder a «' + p + '»: No existe el archivo o el directorio', 'c-err');
        var items = children(p, all);
        if (long) return print(items.map(function (c) { var sz = c.dir ? 4096 : FILES[c.path].body.length; return (c.dir ? 'drwxr-xr-x' : '-rw-r--r--') + '  alberto  ' + pad(String(sz), 5) + '  ' + nameHTML(c); }).join('\n'));
        print((all ? '<span class="c-path">./</span>  <span class="c-path">../</span>  ' : '') + items.map(nameHTML).join('  '));
      },
      cd: function (a) {
        var p = a[0] === '-' ? cwd : target(a[0] || '~');
        if (isFile(p)) return line('cd: no es un directorio: ' + a[0], 'c-err');
        if (!isDir(p)) return line('cd: no existe el directorio: ' + a[0], 'c-err');
        cwd = p;
      },
      pwd: function () { line('/home/alberto' + (cwd ? '/' + cwd : '')); },
      cat: function (a) {
        if (!a[0]) return line('cat: falta el archivo. Prueba: cat README.md', 'c-err');
        var p = target(a[0]);
        if (isDir(p) && !isFile(p)) return line('cat: ' + a[0] + ': Es un directorio', 'c-err');
        if (!isFile(p)) return line('cat: ' + a[0] + ': No existe el archivo o el directorio', 'c-err');
        print('<span class="c-cat">' + esc(FILES[p].body.replace(/\n$/, '')) + '</span>');
      },
      open: function (a) {
        var p = target(a[0] || '.');
        if (isFile(p)) { api.open ? api.open(p) : 0; return line('Abierto en el editor: ' + p, 'c-dim'); }
        if (isDir(p)) { api.reveal ? api.reveal(p) : 0; return line('Mostrado en el explorador: ' + (p || '~'), 'c-dim'); }
        line('open: no existe: ' + a[0], 'c-err');
      },
      tree: function (a) {
        var root = target(a[0]), lines = [esc(root ? root + '/' : '.')];
        if (!isDir(root)) return line('tree: no es un directorio: ' + a[0], 'c-err');
        (function walk(dir, prefix) {
          var cs = children(dir, false);
          cs.forEach(function (c, i) { var last = i === cs.length - 1; lines.push('<span class="c-dim">' + prefix + (last ? '└── ' : '├── ') + '</span>' + nameHTML(c)); if (c.dir) walk(c.path, prefix + (last ? '    ' : '│   ')); });
        })(root, '');
        print(lines.join('\n'));
      },
      grep: function (a) {
        var q = a.filter(function (x) { return x.charAt(0) !== '-'; }).join(' ');
        if (!q) return line('grep: ¿qué busco? Prueba: grep firmware', 'c-err');
        var fq = fold(q), res = [];
        filesUnder('', false).forEach(function (p) {
          FILES[p].body.split('\n').forEach(function (l, i) {
            var k = fold(l).indexOf(fq);
            if (k >= 0) res.push(link(p, p) + '<span class="c-dim">:' + (i + 1) + ':</span> ' + esc(l.slice(0, k).trim().slice(-40)) + '<span class="c-hit">' + esc(l.substr(k, q.length)) + '</span>' + esc(l.slice(k + q.length).slice(0, 50)));
          });
        });
        if (!res.length) return line('Sin coincidencias para «' + q + '».', 'c-dim');
        print(res.slice(0, 40).join('\n') + (res.length > 40 ? '\n<span class="c-dim">… y ' + (res.length - 40) + ' más</span>' : ''));
      },
      skills: function () {
        var rows = [], add = function (title, kind) {
          rows.push('<span class="c-warn">' + title + '</span>');
          Object.keys(FILES).forEach(function (p) { var m = FILES[p].meta; if (m && m.kind === kind && m.level) rows.push(link(p, pad(m.title, 22)) + ' <span class="c-ok">' + pips(m.level) + '</span>  ' + LEVELS[m.level]); });
        };
        add('CONOCIMIENTO', 'skill'); rows.push(''); add('TALLER', 'hobby');
        print(rows.join('\n'));
      },
      git: function (a) {
        var sub = a[0] || '';
        if (sub === 'log') {
          if (a.indexOf('--oneline') >= 0) return print(COMMITS.map(function (c) { return '<span class="c-warn">' + c.hash + '</span> ' + (c.refs ? '<span class="c-path">(' + esc(c.refs) + ')</span> ' : '') + '<a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>'; }).join('\n'));
          return print(COMMITS.map(function (c) { return '<span class="c-warn">commit ' + c.hash + '</span>' + (c.refs ? ' <span class="c-path">(' + esc(c.refs) + ')</span>' : '') + '\nAutor: Alberto López\nFecha: ' + esc(c.date) + '\n\n    <a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>\n'; }).join('\n'));
        }
        if (sub === 'status') return print('En la rama main\nTu rama está al día con «origin/hp».\n\nnada para confirmar, el árbol de trabajo está limpio\n<span class="c-dim">(salvo un par de ideas para el próximo proyecto)</span>');
        if (sub === 'blame') return line('Todas las líneas: Alberto López. Los bugs en producción, el compilador.', 'c-dim');
        if (sub === 'push') return print('remote: Aquí no se acepta código, pero sí ideas.\nremote: Escríbeme: ' + link('contacto.json'));
        if (sub === 'checkout' || sub === 'switch') return print('<span class="c-err">error: la rama «' + esc(a[a.length - 1] || '') + '» todavía no existe.</span>\n¿La creamos juntos? ' + link('contacto.json'));
        line('git: «' + sub + '» no está disponible aquí. Prueba git log o git status.', 'c-err');
      },
      neofetch: function () {
        var art = [' █████  ██      ', '██   ██ ██      ', '███████ ██      ', '██   ██ ██      ', '██   ██ ███████ ', '', '', '', '', ''];
        var info = ['<span class="c-ok">alberto</span>@<span class="c-ok">alopezs</span>', '<span class="c-dim">─────────────────</span>',
          '<span class="c-warn">Rol</span>: Software Engineer', '<span class="c-warn">Empresa</span>: HP · Barcelona', '<span class="c-warn">Hace</span>: firmware, seguridad, tooling',
          '<span class="c-warn">Lenguajes</span>: C++, Rust, Python, C#', '<span class="c-warn">Formación</span>: Máster en IA (UPC)', '<span class="c-warn">Taller</span>: IoT, PCB, impresión 3D', '<span class="c-warn">Idiomas</span>: es, ca, en (C1)', '<span class="c-warn">Tema</span>: ' + esc(api.theme ? api.theme() : 'noche')];
        print(art.map(function (r, i) { return '<span class="c-ok">' + esc(r) + '</span>  ' + (info[i] || ''); }).join('\n'));
      },
      contacto: function () { if (api.open) api.open('contacto.json'); print('Escríbeme por LinkedIn: ' + ext(LINKEDIN) + '\nEl código, en GitHub: ' + ext(GITHUB)); },
      cv: function () { print('El CV completo está en LinkedIn: ' + ext(LINKEDIN)); },
      theme: function (a) {
        var list = api.themes || ['noche', 'dia'];
        if (!a[0]) return print(list.filter(function (t) { return t !== 'placa'; }).map(function (t) { return (api.theme && api.theme() === t ? '<span class="c-ok">● ' : '  ') + t + (api.theme && api.theme() === t ? '</span>' : ''); }).join('\n') + '\n<span class="c-dim">Uso: theme dia</span>');
        if (list.indexOf(a[0]) < 0) return line('theme: no conozco «' + a[0] + '». Prueba: theme', 'c-err');
        if (api.setTheme) api.setTheme(a[0]);
        line('Tema: ' + a[0], 'c-ok');
      },
      history: function () { print(hist.map(function (h, i) { return '<span class="c-dim">' + pad(String(i + 1), 4) + '</span>' + esc(h); }).join('\n')); },
      echo: function (a) { line(a.join(' ')); },
      date: function () { line(new Date().toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'short' })); },
      whoami: function () { line('alberto'); },
      hostname: function () { line(SITE); },
      uname: function (a) { line(a[0] === '-a' ? 'PortfolioOS 1.0 alopezs 6.0.0-alberto x86_64 GNU/Linux' : 'PortfolioOS'); },
      clear: function () { out.innerHTML = ''; },
      exit: function () { if (api.close) { api.close(); line('logout', 'c-dim'); } else line('logout (aquí no hay ningún panel que cerrar)', 'c-dim'); },
      man: function (a) {
        var h = HELP.filter(function (x) { return x[0].split(' ')[0] === a[0]; })[0];
        line(h ? a[0] + ' — ' + h[1] : 'No hay entrada de manual para ' + (a[0] || 'eso') + '. Prueba help.', h ? '' : 'c-dim');
      },
      // —— los que no salen en help ——
      sudo: function (a) {
        if (a.join(' ') === 'make me a sandwich') return line('Vale.', 'c-ok');
        print('[sudo] contraseña para alberto: \n<span class="c-err">alberto no está en el archivo sudoers. Este incidente será reportado.</span>');
      },
      rm: function (a) {
        if (a.indexOf('-rf') < 0 && a.indexOf('-fr') < 0) return line('rm: aquí no se borra nada; es mi carrera.', 'c-err');
        mode = 'busy'; setPs();
        var steps = ['experiencia', 'conocimiento', 'proyectos', 'taller'], k = 0;
        (function next() {
          if (k < steps.length) { line('rm: borrando /home/alberto/' + steps[k++] + '…', 'c-err'); return setTimeout(next, REDUCED ? 0 : 420); }
          line('Es broma: es una web estática. Todo sigue en su sitio.', 'c-ok'); mode = 'sh'; setPs(); input.focus({ preventScroll: true });
        })();
      },
      vim: function (a) {
        mode = 'vim'; setPs();
        var rows = ''; for (var i = 0; i < 6; i++) rows += '<span class="c-dim">~</span>\n';
        print('<div class="c-vim">' + rows + '<span class="c-inv">"' + esc(a[0] || '[Sin nombre]') + '" — NORMAL</span></div>');
        input.placeholder = 'q para salir… si sabes cómo';
      },
      emacs: function () { line('Buen intento. Aquí se usa vim.', 'c-dim'); C.vim([]); },
      nano: function () { line('nano: elección sensata. Pero esto es una terminal de mentira.', 'c-dim'); },
      coffee: function () { print('<span class="c-err">HTTP 418</span> Soy una tetera.\n<span class="c-dim">(RFC 2324. Para café de verdad, escríbeme: ' + link('contacto.json') + ')</span>'); },
      make: function (a) { if (a[0] === 'coffee' || a[0] === 'cafe' || a[0] === 'café') return C.coffee(); line('make: *** No hay ninguna regla para construir «' + (a[0] || 'todo') + '». Alto.', 'c-err'); },
      sl: function () {
        var train = ['      ====        ________                ', '  _D _|  |_______/        \\__I_I_____===__', '   |(_)---  |   H\\________/ |   |        |', '   /     |  |   H  |  |     |   |  ALB   |', '  |      |  |   H  |__--------------------|', '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___', ' |/-=|___|=    ||    ||    ||    |_____/~\\', '  \\_/      \\O=====O=====O=====O_/      \\_/'];
        var dv = print('<div class="c-train-wrap"><pre class="c-train">' + esc(train.join('\n')) + '</pre></div>');
        if (REDUCED) return line('(querías decir ls)', 'c-dim');
        mode = 'busy'; setPs();
        setTimeout(function () { dv.remove(); line('(querías decir ls)', 'c-dim'); mode = 'sh'; setPs(); input.focus({ preventScroll: true }); }, 2600);
      },
      ping: function (a) { var h = a[0] || 'alberto'; print('PING ' + esc(h) + ': 56 bytes de datos.\n64 bytes de ' + esc(h) + ': icmp_seq=1 tiempo=un café\n64 bytes de ' + esc(h) + ': icmp_seq=2 tiempo=un café y medio\n<span class="c-dim">--- 2 paquetes enviados, 2 recibidos. Para hablar de verdad: ' + link('contacto.json') + ' ---</span>'); },
      pacman: function () { line('¿Arch? Respeto. Pero aquí no se instala nada.', 'c-dim'); },
      fortune: function () { line(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]); },
      cowsay: function (a) {
        var t = a.join(' ') || 'Muu. Escribe help.', bar = new Array(t.length + 3).join('-');
        print(' ' + bar.replace(/-/g, '_') + '\n< ' + esc(t) + ' >\n ' + bar + '\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||');
      },
      42: function () { line('La respuesta. Falta la pregunta.', 'c-dim'); },
      hola: function () { line('¡Hola! Escribe help para empezar, o contacto para hablar.'); },
      contratar: function () { line('Buena idea.', 'c-ok'); C.contacto(); }
    };
    C.code = C.open; C.vi = C.nvim = C.vim; C.cafe = C['café'] = C.coffee; C.fastfetch = C.neofetch; C.contact = C.contacto; C.hire = C.contratar;
    C.apt = C['apt-get'] = C.dnf = function () { line('E: Necesitas ser root para instalar paquetes. Y no lo eres.', 'c-err'); };
    C.hello = C.hola; C.ll = function (a) { C.ls(['-la'].concat(a)); };

    function run(raw) {
      var text = raw.trim();
      if (mode === 'vim') {
        print('<span class="c-dim">:</span>' + esc(text.replace(/^:/, '')));
        if (/^:?(q|q!|wq|x|qa!?|wq!)$/.test(text)) { mode = 'sh'; input.placeholder = ''; setPs(); return line('Has salido de vim. Pocos lo consiguen a la primera.', 'c-ok'); }
        return print('<span class="c-err">E492: No es una orden del editor: ' + esc(text || '(nada)') + '</span>  <span class="c-dim">pista: :q</span>');
      }
      print(promptHTML() + esc(text));
      if (!text) return;
      hist.push(text); hi = hist.length;
      if (/^rm\s+-(rf|fr)\s+\/?/.test(text)) return C.rm(['-rf']);
      var args = text.split(/\s+/), cmd = args.shift(), fn = C.hasOwnProperty(cmd) ? C[cmd] : null;
      if (fn) return fn(args);
      var best = Object.keys(C).filter(function (k) { return C[k] && k.length > 1; }).map(function (k) { return [k, lev(cmd, k)]; }).sort(function (x, y) { return x[1] - y[1]; })[0];
      print('<span class="c-err">' + esc(cmd) + ': orden no encontrada.</span>' + (best && best[1] <= 2 ? ' ¿Querías decir <span class="c-ok">' + best[0] + '</span>?' : ' Prueba <span class="c-ok">help</span>.'));
    }
    function complete() {
      var v = input.value, parts = v.split(' '), last = parts[parts.length - 1], cands;
      if (parts.length === 1) cands = Object.keys(C).filter(function (k) { return C[k] && k.indexOf(last) === 0; });
      else {
        var cut = last.lastIndexOf('/'), dirPart = cut >= 0 ? last.slice(0, cut + 1) : '', pre = last.slice(cut + 1), dir = target(dirPart || '.');
        cands = isDir(dir) ? children(dir, pre.charAt(0) === '.').filter(function (c) { return c.name.indexOf(pre) === 0; }).map(function (c) { return dirPart + c.name + (c.dir ? '/' : ''); }) : [];
      }
      if (cands.length === 1) { parts[parts.length - 1] = cands[0] + (parts.length === 1 || cands[0].slice(-1) !== '/' ? ' ' : ''); input.value = parts.join(' '); }
      else if (cands.length > 1) {
        var common = cands.reduce(function (a, b) { var k = 0; while (k < a.length && a[k] === b[k]) k++; return a.slice(0, k); });
        if (common.length > last.length) { parts[parts.length - 1] = common; input.value = parts.join(' '); }
        else { print(promptHTML() + esc(v)); line(cands.map(function (c) { return baseOf(c.replace(/\/$/, '')) + (c.slice(-1) === '/' ? '/' : ''); }).join('  ')); }
      }
    }
    input.addEventListener('keydown', function (e) {
      if (mode === 'busy') { e.preventDefault(); return; }
      if (e.key === 'Enter') { var v = input.value; input.value = ''; run(v); setPs(); el.scrollTop = el.scrollHeight; }
      else if (e.key === 'Tab') { e.preventDefault(); if (mode === 'sh') complete(); }
      else if (e.key === 'ArrowUp' && mode === 'sh') { e.preventDefault(); if (hi > 0) input.value = hist[--hi]; }
      else if (e.key === 'ArrowDown' && mode === 'sh') { e.preventDefault(); hi = Math.min(hist.length, hi + 1); input.value = hist[hi] || ''; }
      else if (e.ctrlKey && (e.key === 'l' || e.key === 'L')) { e.preventDefault(); out.innerHTML = ''; }
      else if (e.ctrlKey && (e.key === 'c' || e.key === 'C') && !window.getSelection().toString()) { e.preventDefault(); print((mode === 'vim' ? '' : promptHTML()) + esc(input.value) + '<span class="c-dim">^C</span>'); input.value = ''; if (mode === 'vim') { mode = 'sh'; setPs(); line('Vale, también vale para salir de vim.', 'c-dim'); } }
    });
    el.addEventListener('click', function (e) {
      var a = e.target.closest('[data-open]');
      if (a) { e.preventDefault(); e.stopPropagation(); var p = a.getAttribute('data-open'); if (api.open) api.open(p); else C.cat([p]); return; }
      if (!window.getSelection().toString()) input.focus({ preventScroll: true });
    });
    setPs();
    print('<span class="c-dim">portfolio-sh 1.0 — escribe</span> <span class="c-ok">help</span> <span class="c-dim">para ver los comandos.</span>');
    return {
      run: function (t) { run(t); setPs(); }, focus: function () { input.focus({ preventScroll: true }); }, print: print,
      clear: function () { out.innerHTML = ''; }, reset: function () { out.innerHTML = ''; cwd = ''; mode = 'sh'; setPs(); print('<span class="c-dim">Nueva terminal.</span>'); },
      typeAndRun: function (t) { run(t); setPs(); }
    };
  }
