  // ================= Terminal =================
  // api: { open(path), reveal(dir), setTheme(id), theme(), close(), toast(text), themes }
  var REDUCED = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FORTUNES = [
    'Make it work, then make it right, then make it fast. In that order.',
    'Firmware without logs is firmware with secrets.',
    'If you do it three times, automate it. If you do it twice, think about it.',
    'The best commit is the one you still understand six months later.',
    'It works on my machine. That is why Docker exists.'
  ];
  function lev(a, b) {
    var m = [], i, j;
    for (i = 0; i <= a.length; i++) { m[i] = [i]; for (j = 1; j <= b.length; j++) m[i][j] = i ? Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) : j; }
    return m[a.length][b.length];
  }
  // Who the visitor is: `su <role>` switches, `exit` goes back. Any lowercase name works; these have their own lines.
  var DEFAULT_USER = 'recruiter';
  var ROLES = {
    recruiter: { hello: 'Signed in as recruiter. Start with README.md, or type hire if you are hiring.', whoami: "recruiter — and Alberto hopes you're hiring." },
    'hiring-manager': { hello: 'Welcome. The short version: git log. The long one: open experience/hp/README.md.', whoami: 'hiring-manager — the one who decides. No pressure.' },
    engineer: { hello: 'Welcome, fellow engineer. Try cat skills/languages/rust.rs or tree projects.', whoami: 'engineer — you have probably tried rm -rf / already.' },
    friend: { hello: 'Hey! Make yourself at home: the lab/ folder has the fun stuff.', whoami: 'friend — always welcome.' },
    'future-boss': { hello: 'Hello, boss. Shall we talk? Type hire.', whoami: 'future-boss — Alberto likes the sound of that.' },
    guest: { hello: 'Signed in as guest. Look around; nothing breaks.', whoami: 'guest' }
  };
  function terminal(el, api) {
    api = api || {};
    var cwd = '', hist = [], hi = 0, mode = 'sh', user = DEFAULT_USER, users = [];
    el.classList.add('vs-term');
    el.innerHTML = '<div class="vs-term-out" role="log" aria-live="polite"></div><div class="vs-term-line"><span class="vs-term-ps"></span><input class="vs-term-in" aria-label="Terminal: type a command" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>';
    var out = el.querySelector('.vs-term-out'), input = el.querySelector('.vs-term-in'), ps = el.querySelector('.vs-term-ps');
    function promptHTML() { return '<span class="c-ok">' + esc(user) + '@alopezs</span>:<span class="c-path">' + (cwd ? '~/' + esc(cwd) : '~') + '</span>$ '; }
    function setPs() { ps.innerHTML = mode === 'vim' ? '<span class="c-dim">:</span>' : mode === 'busy' ? '' : promptHTML(); el.classList.toggle('is-busy', mode === 'busy'); }
    function print(html) { var dv = document.createElement('div'); dv.innerHTML = html; out.appendChild(dv); el.scrollTop = el.scrollHeight; return dv; }
    function line(text, cls) { return print(cls ? '<span class="' + cls + '">' + esc(text) + '</span>' : esc(text)); }
    function ext(url, label) { return '<a class="c-file" href="' + url + '"' + (/^mailto:/.test(url) ? '' : ' target="_blank" rel="noopener"') + '>' + esc(label || url.replace(/^(https?:\/\/(www\.)?|mailto:)/, '')) + '</a>'; }
    function email(u) { return ext('mailto:' + mail(u)); }
    function link(p, label) { return '<a href="#" class="c-file" data-open="' + esc(p) + '">' + esc(label || baseOf(p)) + '</a>'; }
    function nameHTML(c) { return c.dir ? '<span class="c-path">' + esc(c.name) + '/</span>' : link(c.path, c.name); }
    function target(arg) { return resolve(cwd, arg || '.'); }
    function exists(p) { return isFile(p) || isDir(p); }
    function pips(n) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= n ? '■' : '□'; return s; }
    function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }
    function home() { return '/home/' + user; }
    function setUser(u) { user = u; setPs(); if (api.onUser) api.onUser(u); }
    function welcome() {
      print('<span class="c-dim">portfolio-sh 1.0 — signed in as</span> <span class="c-ok">' + esc(user) + '</span><span class="c-dim">. Type</span> <span class="c-ok">help</span> <span class="c-dim">to look around, or</span> <span class="c-ok">hire</span> <span class="c-dim">if you are hiring.</span>\n<span class="c-dim">Not a recruiter? Try</span> <span class="c-ok">su engineer</span><span class="c-dim">,</span> <span class="c-ok">su friend</span><span class="c-dim">…</span>');
    }

    var HELP = [
      ['help', 'this help'], ['ls [-a] [path]', 'list a folder'], ['cd <path>', 'change folder'], ['cat <file>', 'print a file'],
      ['open <file>', 'open it in the editor (also: code)'], ['tree [path]', 'folder tree'], ['grep <text>', 'search every file'],
      ['skills', 'skills and lab, with their levels'], ['git log', 'my career, as a commit history'], ['neofetch', 'system summary'],
      ['contact', 'how to reach me'], ['cv', 'the full CV'], ['su <role>', 'sign in as someone else (recruiter, engineer, friend…)'], ['theme [name]', 'change the theme'], ['clear', 'clear the terminal (Ctrl+L)'], ['exit', 'close the panel']
    ];
    var C = {
      help: function () { print(HELP.map(function (h) { return '<span class="c-ok">' + esc(pad(h[0], 18)) + '</span>' + esc(h[1]); }).join('\n') + '\n<span class="c-dim">Tab completes, ↑ ↓ walk the history. There are more commands than the ones listed here.</span>'); },
      ls: function (a) {
        var all = a.indexOf('-a') >= 0 || a.indexOf('-la') >= 0 || a.indexOf('-al') >= 0, long = /^-\w*l/.test(a.join(' ')), p = target(a.filter(function (x) { return x.charAt(0) !== '-'; })[0]);
        if (isFile(p)) return print(link(p));
        if (!isDir(p)) return line("ls: cannot access '" + p + "': No such file or directory", 'c-err');
        var items = children(p, all);
        if (long) return print(items.map(function (c) { var sz = c.dir ? 4096 : FILES[c.path].body.length; return (c.dir ? 'drwxr-xr-x' : '-rw-r--r--') + '  alberto  ' + pad(String(sz), 5) + '  ' + nameHTML(c); }).join('\n'));
        print((all ? '<span class="c-path">./</span>  <span class="c-path">../</span>  ' : '') + items.map(nameHTML).join('  '));
      },
      cd: function (a) {
        var p = a[0] === '-' ? cwd : target(a[0] || '~');
        if (isFile(p)) return line('cd: not a directory: ' + a[0], 'c-err');
        if (!isDir(p)) return line('cd: no such file or directory: ' + a[0], 'c-err');
        cwd = p;
      },
      pwd: function () { line(home() + (cwd ? '/' + cwd : '')); },
      cat: function (a) {
        if (!a[0]) return line('cat: missing file. Try: cat README.md', 'c-err');
        var p = target(a[0]);
        if (isDir(p) && !isFile(p)) return line('cat: ' + a[0] + ': Is a directory', 'c-err');
        if (!isFile(p)) return line('cat: ' + a[0] + ': No such file or directory', 'c-err');
        print('<span class="c-cat">' + esc(FILES[p].body.replace(/\n$/, '')) + '</span>');
      },
      open: function (a) {
        var p = target(a[0] || '.');
        if (isFile(p)) { api.open ? api.open(p) : 0; return line('Opened in the editor: ' + p, 'c-dim'); }
        if (isDir(p)) { api.reveal ? api.reveal(p) : 0; return line('Shown in the explorer: ' + (p || '~'), 'c-dim'); }
        line('open: not found: ' + a[0], 'c-err');
      },
      tree: function (a) {
        var root = target(a[0]), lines = [esc(root ? root + '/' : '.')];
        if (!isDir(root)) return line('tree: not a directory: ' + a[0], 'c-err');
        (function walk(dir, prefix) {
          var cs = children(dir, false);
          cs.forEach(function (c, i) { var last = i === cs.length - 1; lines.push('<span class="c-dim">' + prefix + (last ? '└── ' : '├── ') + '</span>' + nameHTML(c)); if (c.dir) walk(c.path, prefix + (last ? '    ' : '│   ')); });
        })(root, '');
        print(lines.join('\n'));
      },
      grep: function (a) {
        var q = a.filter(function (x) { return x.charAt(0) !== '-'; }).join(' ');
        if (!q) return line('grep: search for what? Try: grep firmware', 'c-err');
        var fq = fold(q), res = [];
        filesUnder('', false).forEach(function (p) {
          FILES[p].body.split('\n').forEach(function (l, i) {
            var k = fold(l).indexOf(fq);
            if (k >= 0) res.push(link(p, p) + '<span class="c-dim">:' + (i + 1) + ':</span> ' + esc(l.slice(0, k).trim().slice(-40)) + '<span class="c-hit">' + esc(l.substr(k, q.length)) + '</span>' + esc(l.slice(k + q.length).slice(0, 50)));
          });
        });
        if (!res.length) return line('No matches for "' + q + '".', 'c-dim');
        print(res.slice(0, 40).join('\n') + (res.length > 40 ? '\n<span class="c-dim">… and ' + (res.length - 40) + ' more</span>' : ''));
      },
      skills: function () {
        var rows = [], add = function (title, kind) {
          rows.push('<span class="c-warn">' + title + '</span>');
          Object.keys(FILES).forEach(function (p) { var m = FILES[p].meta; if (m && m.kind === kind && m.level) rows.push(link(p, pad(m.title, 22)) + ' <span class="c-ok">' + pips(m.level) + '</span>  ' + LEVELS[m.level]); });
        };
        add('SKILLS', 'skill'); rows.push(''); add('LAB', 'hobby');
        print(rows.join('\n'));
      },
      git: function (a) {
        var sub = a[0] || '';
        if (sub === 'log') {
          if (a.indexOf('--oneline') >= 0) return print(COMMITS.map(function (c) { return '<span class="c-warn">' + c.hash + '</span> ' + (c.refs ? '<span class="c-path">(' + esc(c.refs) + ')</span> ' : '') + '<a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>'; }).join('\n'));
          return print(COMMITS.map(function (c) { return '<span class="c-warn">commit ' + c.hash + '</span>' + (c.refs ? ' <span class="c-path">(' + esc(c.refs) + ')</span>' : '') + '\nAuthor: Alberto López\nDate:   ' + esc(c.date) + '\n\n    <a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>\n'; }).join('\n'));
        }
        if (sub === 'status') return print("On branch main\nYour branch is up to date with 'origin/hp'.\n\nnothing to commit, working tree clean\n<span class=\"c-dim\">(apart from a couple of ideas for the next project)</span>");
        if (sub === 'blame') return line('Every line: Alberto López. Production bugs: the compiler.', 'c-dim');
        if (sub === 'push') return print('remote: No code accepted here, but ideas are welcome.\nremote: Write to me: ' + link('contact.json'));
        if (sub === 'checkout' || sub === 'switch') return print("<span class=\"c-err\">error: pathspec '" + esc(a[a.length - 1] || '') + "' did not match any branch yet.</span>\nShall we create it together? " + link('contact.json'));
        line("git: '" + sub + "' is not available here. Try git log or git status.", 'c-err');
      },
      neofetch: function () {
        var art = [' █████  ██      ', '██   ██ ██      ', '███████ ██      ', '██   ██ ██      ', '██   ██ ███████ ', '', '', '', '', ''];
        var info = ['<span class="c-ok">alberto</span>@<span class="c-ok">alopezs</span>', '<span class="c-dim">─────────────────</span>',
          '<span class="c-warn">Role</span>: Software Engineer', '<span class="c-warn">Company</span>: HP · Barcelona', '<span class="c-warn">Does</span>: firmware, security, tooling',
          '<span class="c-warn">Languages</span>: C++, Rust, Python, C#', '<span class="c-warn">Education</span>: M.S. in AI (UPC)', '<span class="c-warn">Lab</span>: IoT, PCB, 3D printing', '<span class="c-warn">Speaks</span>: es, ca, en (C1)', '<span class="c-warn">Theme</span>: ' + esc(api.theme ? api.theme() : 'night')];
        print(art.map(function (r, i) { return '<span class="c-ok">' + esc(r) + '</span>  ' + (info[i] || ''); }).join('\n'));
      },
      contact: function () { if (api.open) api.open('contact.json'); print('Email:     ' + email('hello') + '\nHiring:    ' + email('hire') + '\nEspañol:   ' + email('hola') + '\nLinkedIn:  ' + ext(LINKEDIN) + '\nGitHub:    ' + ext(GITHUB)); },
      mail: function () { print('Write to me: ' + email('hello') + '<span class="c-dim">  (hiring? ' + '</span>' + email('hire') + '<span class="c-dim">)</span>'); },
      cv: function () { print('The full CV is on LinkedIn: ' + ext(LINKEDIN)); },
      theme: function (a) {
        var list = api.themes || ['night', 'day'];
        if (!a[0]) return print(list.filter(function (t) { return t !== 'pcb'; }).map(function (t) { return (api.theme && api.theme() === t ? '<span class="c-ok">● ' : '  ') + t + (api.theme && api.theme() === t ? '</span>' : ''); }).join('\n') + '\n<span class="c-dim">Usage: theme day</span>');
        if (list.indexOf(a[0]) < 0) return line("theme: unknown theme '" + a[0] + "'. Try: theme", 'c-err');
        if (api.setTheme) api.setTheme(a[0]);
        line('Theme: ' + a[0], 'c-ok');
      },
      history: function () { print(hist.map(function (h, i) { return '<span class="c-dim">' + pad(String(i + 1), 4) + '</span>' + esc(h); }).join('\n')); },
      echo: function (a) { line(a.join(' ')); },
      date: function () { line(new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })); },
      whoami: function () { line(ROLES[user] ? ROLES[user].whoami : user); },
      su: function (a) {
        var name = a.filter(function (x) { return x !== '-' && x !== '-l' && x !== '--login'; })[0] || 'root';
        if (name === 'root') return line('su: Authentication failure — nice try, root stays with Alberto.', 'c-err');
        if (name === 'alberto') return line('su: Authentication failure — only Alberto gets to be Alberto.', 'c-err');
        if (!/^[a-z][a-z0-9_-]{0,19}$/.test(name)) return line("su: user '" + name + "' does not exist. Try: su " + Object.keys(ROLES).join(', su '), 'c-err');
        if (name === user) return line('Already signed in as ' + user + '.', 'c-dim');
        users.push(user); setUser(name);
        line(ROLES[name] ? ROLES[name].hello : 'Welcome, ' + name + '. Type help to look around.', 'c-dim');
      },
      hostname: function () { line(SITE); },
      uname: function (a) { line(a[0] === '-a' ? 'PortfolioOS 1.0 alopezs 6.0.0-alberto x86_64 GNU/Linux' : 'PortfolioOS'); },
      clear: function () { out.innerHTML = ''; },
      exit: function () { if (users.length) { setUser(users.pop()); return line('logout — back to ' + user + '.', 'c-dim'); } if (api.close) { api.close(); line('logout', 'c-dim'); } else line('logout (there is no panel to close here)', 'c-dim'); },
      man: function (a) {
        var h = HELP.filter(function (x) { return x[0].split(' ')[0] === a[0]; })[0];
        line(h ? a[0] + ' — ' + h[1] : 'No manual entry for ' + (a[0] || 'that') + '. Try help.', h ? '' : 'c-dim');
      },
      // —— not listed in help ——
      sudo: function (a) {
        if (a.join(' ') === 'make me a sandwich') return line('Okay.', 'c-ok');
        print('[sudo] password for ' + esc(user) + ': \n<span class="c-err">' + esc(user) + ' is not in the sudoers file. This incident will be reported.</span>\n<span class="c-dim">…but you can still type</span> <span class="c-ok">hire</span><span class="c-dim">, or write to</span> ' + email('hire') + '<span class="c-dim">.</span>');
      },
      rm: function (a) {
        if (a.indexOf('-rf') < 0 && a.indexOf('-fr') < 0) return line('rm: nothing gets deleted here; this is my career.', 'c-err');
        mode = 'busy'; setPs();
        var steps = ['experience', 'skills', 'projects', 'lab'], k = 0;
        (function next() {
          if (k < steps.length) { line("rm: removing '" + home() + '/' + steps[k++] + "'…", 'c-err'); return setTimeout(next, REDUCED ? 0 : 420); }
          line('Just kidding: this is a static site. Everything is still in place.', 'c-ok'); mode = 'sh'; setPs(); input.focus({ preventScroll: true });
        })();
      },
      vim: function (a) {
        mode = 'vim'; setPs();
        var rows = ''; for (var i = 0; i < 6; i++) rows += '<span class="c-dim">~</span>\n';
        print('<div class="c-vim">' + rows + '<span class="c-inv">"' + esc(a[0] || '[No Name]') + '" — NORMAL</span></div>');
        input.placeholder = ':q to quit… if you know how';
      },
      emacs: function () { line('Nice try. We use vim here.', 'c-dim'); C.vim([]); },
      nano: function () { line('nano: a sensible choice. But this terminal is make-believe.', 'c-dim'); },
      coffee: function () { print("<span class=\"c-err\">HTTP 418</span> I'm a teapot.\n<span class=\"c-dim\">(RFC 2324. For real coffee, write to me: " + link('contact.json') + ')</span>'); },
      make: function (a) { if (a[0] === 'coffee') return C.coffee(); line("make: *** No rule to make target '" + (a[0] || 'all') + "'.  Stop.", 'c-err'); },
      sl: function () {
        var train = ['      ====        ________                ', '  _D _|  |_______/        \\__I_I_____===__', '   |(_)---  |   H\\________/ |   |        |', '   /     |  |   H  |  |     |   |  ALB   |', '  |      |  |   H  |__--------------------|', '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___', ' |/-=|___|=    ||    ||    ||    |_____/~\\', '  \\_/      \\O=====O=====O=====O_/      \\_/'];
        var dv = print('<div class="c-train-wrap"><pre class="c-train">' + esc(train.join('\n')) + '</pre></div>');
        if (REDUCED) return line('(you meant ls)', 'c-dim');
        mode = 'busy'; setPs();
        setTimeout(function () { dv.remove(); line('(you meant ls)', 'c-dim'); mode = 'sh'; setPs(); input.focus({ preventScroll: true }); }, 2600);
      },
      ping: function (a) { var h = a[0] || 'alberto'; print('PING ' + esc(h) + ': 56 data bytes\n64 bytes from ' + esc(h) + ': icmp_seq=1 time=one coffee\n64 bytes from ' + esc(h) + ': icmp_seq=2 time=a coffee and a half\n<span class="c-dim">--- 2 packets transmitted, 2 received. To actually talk: ' + link('contact.json') + ' ---</span>'); },
      pacman: function () { line('Arch? Respect. But nothing gets installed here.', 'c-dim'); },
      fortune: function () { line(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]); },
      cowsay: function (a) {
        var t = a.join(' ') || 'Moo. Type help.', bar = new Array(t.length + 3).join('-');
        print(' ' + bar.replace(/-/g, '_') + '\n< ' + esc(t) + ' >\n ' + bar + '\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||');
      },
      42: function () { line('The answer. Now we need the question.', 'c-dim'); },
      hello: function () { line('Hi! Type help to get started, or contact to talk.'); },
      hire: function () { print('<span class="c-ok">Good idea.</span> Write to ' + email('hire') + ' <span class="c-dim">— that one is the fast lane.</span>\n<span class="c-dim">Everything else:</span> ' + link('contact.json')); },
      hola: function () { print('¡Hola! Si prefieres escribirme en español: ' + email('hola')); }
    };
    C.code = C.open; C.vi = C.nvim = C.vim; C.fastfetch = C.neofetch; C.hi = C.hello;
    C.apt = C['apt-get'] = C.dnf = function () { line('E: You need to be root to install packages. And you are not.', 'c-err'); };
    C.ll = function (a) { C.ls(['-la'].concat(a)); }; C.logout = C.exit; C.email = C.mail;

    function run(raw) {
      var text = raw.trim();
      if (mode === 'vim') {
        print('<span class="c-dim">:</span>' + esc(text.replace(/^:/, '')));
        if (/^:?(q|q!|wq|x|qa!?|wq!)$/.test(text)) { mode = 'sh'; input.placeholder = ''; setPs(); return line('You escaped vim. Few manage it on the first try.', 'c-ok'); }
        return print('<span class="c-err">E492: Not an editor command: ' + esc(text || '(nothing)') + '</span>  <span class="c-dim">hint: :q</span>');
      }
      print(promptHTML() + esc(text));
      if (!text) return;
      hist.push(text); hi = hist.length;
      if (/^rm\s+-(rf|fr)\s+\/?/.test(text)) return C.rm(['-rf']);
      var args = text.split(/\s+/), cmd = args.shift(), fn = C.hasOwnProperty(cmd) ? C[cmd] : null;
      if (fn) return fn(args);
      var best = Object.keys(C).filter(function (k) { return C[k] && k.length > 1; }).map(function (k) { return [k, lev(cmd, k)]; }).sort(function (x, y) { return x[1] - y[1]; })[0];
      print('<span class="c-err">' + esc(cmd) + ': command not found.</span>' + (best && best[1] <= 2 ? ' Did you mean <span class="c-ok">' + best[0] + '</span>?' : ' Try <span class="c-ok">help</span>.'));
    }
    function complete() {
      var v = input.value, parts = v.split(' '), last = parts[parts.length - 1], cands;
      if (parts.length === 1) cands = Object.keys(C).filter(function (k) { return C[k] && k.indexOf(last) === 0; });
      else if (parts[0] === 'su' && parts.length === 2) cands = Object.keys(ROLES).filter(function (k) { return k.indexOf(last) === 0; });
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
      else if (e.ctrlKey && (e.key === 'c' || e.key === 'C') && !window.getSelection().toString()) { e.preventDefault(); print((mode === 'vim' ? '' : promptHTML()) + esc(input.value) + '<span class="c-dim">^C</span>'); input.value = ''; if (mode === 'vim') { mode = 'sh'; setPs(); line('Fine, that works to quit vim too.', 'c-dim'); } }
    });
    el.addEventListener('click', function (e) {
      var a = e.target.closest('[data-open]');
      if (a) { e.preventDefault(); e.stopPropagation(); var p = a.getAttribute('data-open'); if (api.open) api.open(p); else C.cat([p]); return; }
      if (!window.getSelection().toString()) input.focus({ preventScroll: true });
    });
    setPs();
    welcome();
    return {
      run: function (t) { run(t); setPs(); }, focus: function () { input.focus({ preventScroll: true }); }, print: print,
      clear: function () { out.innerHTML = ''; }, reset: function () { out.innerHTML = ''; cwd = ''; mode = 'sh'; users = []; setUser(DEFAULT_USER); welcome(); },
      user: function () { return user; },
      typeAndRun: function (t) { run(t); setPs(); }
    };
  }
