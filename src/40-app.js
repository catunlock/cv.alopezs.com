  // ================= Iconos (dibujados aquí, sin fuentes de iconos) =================
  var SVG = {
    files: '<path d="M8 3.5h7l4 4V18H8z"/><path d="M15 3.5V8h4"/><path d="M5 7v13.5h10"/>',
    search: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5 5"/>',
    branch: '<circle cx="7" cy="5.5" r="2"/><circle cx="7" cy="18.5" r="2"/><circle cx="17" cy="7.5" r="2"/><path d="M7 7.5v9M17 9.5c0 4-10 2.5-10 7"/>',
    blocks: '<rect x="4" y="11" width="7" height="7"/><rect x="11" y="11" width="7" height="7"/><rect x="4" y="4" width="7" height="7"/><rect x="14" y="3" width="7" height="7" transform="rotate(12 17.5 6.5)"/>',
    user: '<circle cx="12" cy="8.5" r="3.5"/><path d="M5 20c1.2-3.6 4-5 7-5s5.8 1.4 7 5"/>',
    sliders: '<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>',
    bell: '<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5h4"/>',
    term: '<rect x="3.5" y="5" width="17" height="14" rx="1"/><path d="M7 10l3 2-3 2M12 15h5"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>', max: '<rect x="6" y="6" width="12" height="12"/>', min: '<path d="M6 12h12"/>',
    up: '<path d="M6 15l6-6 6 6"/>', trash: '<path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/>', plus: '<path d="M12 5v14M5 12h14"/>',
    more: '<circle cx="6" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18" cy="12" r="1"/>', split: '<rect x="4" y="5" width="16" height="14"/><path d="M12 5v14"/>',
    preview: '<rect x="4" y="5" width="16" height="14"/><path d="M12 5v14M7 9h2M7 12h2M15 9h2M15 12h2"/>', code: '<path d="M9 7l-5 5 5 5M15 7l5 5-5 5"/>',
    collapse: '<rect x="4" y="4" width="16" height="16"/><path d="M8 12h8"/>', eye: '<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><circle cx="12" cy="12" r="2.5"/>',
    warn: '<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>', err: '<circle cx="12" cy="12" r="8"/><path d="M9 9l6 6M15 9l-6 6"/>', info: '<circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8v.5"/>'
  };
  function ico(name, size) { return '<svg class="vs-ico" viewBox="0 0 24 24" width="' + (size || 16) + '" height="' + (size || 16) + '" aria-hidden="true">' + SVG[name] + '</svg>'; }

  // ================= Paleta (reutilizable) =================
  // Lista filtrable: items [{ label, desc, kbd, icon, run }]
  function paletteHTML() { return '<div class="vs-palette" role="dialog" aria-label="Paleta de comandos"><input class="vs-pal-in" aria-label="Buscar" autocomplete="off" spellcheck="false"><div class="vs-pal-list" role="listbox"></div></div>'; }
  function matchScore(label, q) {
    if (!q) return { score: 0, marks: [] };
    var L = fold(label), Q = fold(q), marks = [], j = 0, start = L.indexOf(Q);
    if (start >= 0) { for (var k = 0; k < Q.length; k++) marks.push(start + k); return { score: 100 - start, marks: marks }; }
    for (var i = 0; i < L.length && j < Q.length; i++) if (L[i] === Q[j]) { marks.push(i); j++; }
    return j === Q.length ? { score: 10 - marks[marks.length - 1] / 100, marks: marks } : null;
  }
  function marked(label, marks) { return label.split('').map(function (c, i) { return marks.indexOf(i) >= 0 ? '<b>' + esc(c) + '</b>' : esc(c); }).join(''); }
  function palette(box, opts) {
    var input = box.querySelector('.vs-pal-in'), list = box.querySelector('.vs-pal-list'), items = [], shown = [], sel = 0, source = null;
    function render() {
      var q = input.value, mode = source(q);
      items = mode.items; q = mode.query;
      shown = items.map(function (it) { var m = matchScore(it.label, q); return m && { it: it, m: m }; }).filter(Boolean);
      if (q) shown.sort(function (a, b) { return b.m.score - a.m.score; });
      sel = Math.min(sel, Math.max(0, shown.length - 1));
      list.innerHTML = shown.length ? shown.map(function (s, i) {
        return '<div class="vs-pal-item' + (i === sel ? ' on' : '') + '" role="option" aria-selected="' + (i === sel) + '" data-i="' + i + '">' + (s.it.icon || '') +
          '<span class="vs-pal-label">' + marked(s.it.label, s.m.marks) + '</span>' + (s.it.desc ? '<span class="vs-pal-desc">' + esc(s.it.desc) + '</span>' : '') + (s.it.kbd ? '<kbd>' + esc(s.it.kbd) + '</kbd>' : '') + '</div>';
      }).join('') : '<div class="vs-pal-empty">' + esc(mode.empty || 'No hay resultados') + '</div>';
      var on = list.querySelector('.on'); if (on) on.scrollIntoView({ block: 'nearest' });
    }
    function pick(i) { var s = shown[i]; if (!s) return; if (!s.it.keep) opts.close(); s.it.run(); }
    input.addEventListener('input', function () { sel = 0; render(); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { sel = Math.min(shown.length - 1, sel + 1); render(); }
      else if (e.key === 'ArrowUp') { sel = Math.max(0, sel - 1); render(); }
      else if (e.key === 'Enter') pick(sel);
      else if (e.key === 'Escape') opts.close();
      else return;
      e.preventDefault();
    });
    list.addEventListener('mousedown', function (e) { var it = e.target.closest('.vs-pal-item'); if (it) { e.preventDefault(); pick(+it.getAttribute('data-i')); } });
    return {
      open: function (src, value, placeholder) { source = src; input.value = value || ''; input.placeholder = placeholder || ''; sel = 0; render(); input.focus({ preventScroll: true }); },
      render: render
    };
  }

  // ================= La app completa =================
  function app(root, opts) {
    opts = opts || {};
    var THEMES = ['noche', 'dia', 'placa'], THEME_NAME = { noche: 'Noche', dia: 'Día', placa: 'Placa' };
    var S = {
      view: 'explorer', sideOpen: true, side: 264, panelOpen: opts.panel !== false, panel: 220, lastPanel: 220, panelTab: 'terminal',
      tabs: ['README.md'], active: 'README.md', source: {}, hidden: false,
      theme: root.getAttribute('data-theme') || document.documentElement.getAttribute('data-theme') || 'noche'
    };
    if (THEMES.indexOf(S.theme) < 0) S.theme = 'noche';
    var narrow = function () { return root.offsetWidth < 720; };
    if (narrow()) { S.sideOpen = false; S.panelOpen = false; }
    root.classList.add('vs');
    root.innerHTML =
      '<header class="vs-title">' +
        '<span class="vs-mark" aria-hidden="true">AL</span>' +
        '<nav class="vs-menubar"><button data-menu="archivo">Archivo</button><button data-menu="ver">Ver</button><button data-menu="terminal">Terminal</button><button data-menu="ayuda">Ayuda</button></nav>' +
        '<button class="vs-cc" data-act="quick">' + ico('search', 14) + '<span>' + SITE + '</span></button>' +
        '<div class="vs-win"><button data-act="win-min" aria-label="Minimizar">' + ico('min', 14) + '</button><button data-act="win-max" aria-label="Pantalla completa">' + ico('max', 13) + '</button><button data-act="win-close" class="x" aria-label="Cerrar">' + ico('close', 14) + '</button></div>' +
      '</header>' +
      '<div class="vs-body">' +
        '<nav class="vs-activity" aria-label="Vistas">' +
          '<button data-view="explorer" title="Explorador (Ctrl+Shift+E)" aria-label="Explorador">' + ico('files', 24) + '</button>' +
          '<button data-view="search" title="Buscar (Ctrl+Shift+F)" aria-label="Buscar">' + ico('search', 24) + '</button>' +
          '<button data-view="scm" title="Trayectoria (Ctrl+Shift+G)" aria-label="Trayectoria">' + ico('branch', 24) + '<span class="vs-badge">' + COMMITS.length + '</span></button>' +
          '<button data-view="ext" title="Conocimiento (Ctrl+Shift+X)" aria-label="Conocimiento">' + ico('blocks', 24) + '</button>' +
          '<span class="vs-act-spacer"></span>' +
          '<button data-act="account" title="Cuenta" aria-label="Cuenta">' + ico('user', 24) + '</button>' +
          '<button data-act="settings" title="Tema de color" aria-label="Tema de color">' + ico('sliders', 24) + '</button>' +
        '</nav>' +
        '<aside class="vs-side" aria-label="Barra lateral"><div class="vs-side-head"><span class="vs-side-title"></span><span class="vs-side-actions"></span></div><div class="vs-side-body"></div></aside>' +
        '<div class="vs-sash vs-sash-v" title="Arrastra para cambiar el ancho"></div>' +
        '<main class="vs-main">' +
          '<div class="vs-tabbar"><div class="vs-tabs" role="tablist"></div><div class="vs-tab-actions"></div></div>' +
          '<div class="vs-crumbs"></div>' +
          '<div class="vs-editor" tabindex="-1"></div>' +
          '<div class="vs-sash vs-sash-h" title="Arrastra para abrir o cambiar el tamaño del panel"></div>' +
          '<section class="vs-panel" aria-label="Panel">' +
            '<div class="vs-panel-head"><div class="vs-ptabs" role="tablist"><button data-ptab="problems">Problemas <span class="vs-count">1</span></button><button data-ptab="output">Salida</button><button data-ptab="terminal">Terminal</button><button data-ptab="ports">Puertos</button></div>' +
            '<div class="vs-panel-actions"><button data-act="term-new" title="Nueva terminal" aria-label="Nueva terminal">' + ico('plus') + '</button><button data-act="term-clear" title="Limpiar" aria-label="Limpiar terminal">' + ico('trash') + '</button><button data-act="panel-max" title="Maximizar panel" aria-label="Maximizar panel">' + ico('up') + '</button><button data-act="panel-close" title="Cerrar panel" aria-label="Cerrar panel">' + ico('close') + '</button></div></div>' +
            '<div class="vs-panel-body"><div class="vs-pview" data-pview="terminal"></div><div class="vs-pview vs-plist" data-pview="problems"></div><div class="vs-pview vs-plist" data-pview="output"></div><div class="vs-pview vs-plist" data-pview="ports"></div></div>' +
          '</section>' +
        '</main>' +
      '</div>' +
      '<footer class="vs-status">' +
        '<button data-act="scm">' + ico('branch', 14) + 'main</button><button data-act="problems">' + ico('err', 14) + '0 ' + ico('warn', 14) + '1</button>' +
        '<span class="vs-status-fill" title="Arrastra hacia arriba para abrir la terminal"></span>' +
        '<span class="vs-pos"></span><span>UTF-8</span><span>LF</span><button data-act="lang" class="vs-lang"></button><button data-act="settings" class="vs-themebtn"></button>' +
        '<button data-act="term-toggle">' + ico('term', 14) + 'Terminal</button><button data-act="bell" aria-label="Notificaciones">' + ico('bell', 14) + '</button>' +
      '</footer>' +
      '<div class="vs-overlay"></div>' + paletteHTML() + '<div class="vs-menu" role="menu"></div><div class="vs-dialog" role="dialog" aria-modal="true"></div><div class="vs-toasts" aria-live="polite"></div>';

    var $ = function (s) { return root.querySelector(s); };
    var side = $('.vs-side'), sideBody = $('.vs-side-body'), main = $('.vs-main'), editor = $('.vs-editor'), panel = $('.vs-panel');
    var tips = hover(root), exp = null, term = null;

    // —— tema ——
    function setTheme(t) { S.theme = t; root.setAttribute('data-theme', t); $('.vs-themebtn').innerHTML = '◐ ' + THEME_NAME[t]; }

    // —— avisos y diálogos ——
    function toast(text, actions) {
      var t = document.createElement('div'); t.className = 'vs-toast';
      t.innerHTML = ico('info', 16) + '<div class="vs-toast-text">' + text + '</div><button class="vs-toast-x" aria-label="Cerrar aviso">' + ico('close', 14) + '</button>' +
        (actions ? '<div class="vs-toast-acts">' + actions.map(function (a, i) { return '<button data-i="' + i + '"' + (i === 0 ? ' class="primary"' : '') + '>' + esc(a.label) + '</button>'; }).join('') + '</div>' : '');
      t.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; if (b.hasAttribute('data-i')) actions[+b.getAttribute('data-i')].run(); t.remove(); });
      var box = $('.vs-toasts'); box.appendChild(t); while (box.children.length > 3) box.firstChild.remove();
      setTimeout(function () { t.remove(); }, 7000);
    }
    function dialog(title, text, buttons) {
      var dl = $('.vs-dialog');
      dl.innerHTML = '<div class="vs-dialog-title">' + esc(title) + '</div><p>' + esc(text) + '</p><div class="vs-dialog-acts">' + buttons.map(function (b, i) { return '<button data-i="' + i + '"' + (b.primary ? ' class="primary"' : '') + '>' + esc(b.label) + '</button>'; }).join('') + '</div>';
      root.classList.add('has-dialog');
      dl.onclick = function (e) { var b = e.target.closest('button'); if (!b) return; root.classList.remove('has-dialog'); var fn = buttons[+b.getAttribute('data-i')].run; if (fn) fn(); };
      dl.querySelector('button.primary, button').focus();
    }

    // —— archivos y pestañas ——
    function openFile(p, opt) {
      if (!isFile(p)) { if (isDir(p)) return reveal(p); return toast('No existe <b>' + esc(p) + '</b>.'); }
      if (S.tabs.indexOf(p) < 0) S.tabs.push(p);
      S.active = p;
      if (narrow() && S.sideOpen) { S.sideOpen = false; layout(); }
      if (exp) exp.reveal(p);
      renderTabs(); renderEditor(); renderStatus();
      if (!opt || !opt.keepFocus) editor.focus({ preventScroll: true });
    }
    function closeTab(p) {
      var i = S.tabs.indexOf(p); if (i < 0) return;
      S.tabs.splice(i, 1);
      if (S.active === p) S.active = S.tabs[i] || S.tabs[i - 1] || null;
      if (exp) exp.setActive(S.active);
      renderTabs(); renderEditor(); renderStatus();
    }
    function reveal(dir) { setView('explorer', true); exp.reveal(dir); var r = sideBody.querySelector('[data-dir="' + dir + '"]'); if (r) { r.scrollIntoView({ block: 'nearest' }); r.focus({ preventScroll: true }); } }
    function renderTabs() {
      var names = {}; S.tabs.forEach(function (p) { var b = baseOf(p); names[b] = (names[b] || 0) + 1; });
      $('.vs-tabs').innerHTML = S.tabs.map(function (p) {
        return '<div class="vs-tab' + (p === S.active ? ' on' : '') + '" role="tab" aria-selected="' + (p === S.active) + '" tabindex="0" data-tab="' + esc(p) + '" title="' + esc(p) + '">' + icon(p) + '<span>' + esc(baseOf(p)) + '</span>' +
          (names[baseOf(p)] > 1 ? '<span class="vs-tab-desc">' + esc(dirOf(p) || '~') + '</span>' : '') + '<button class="vs-tab-x" data-close="' + esc(p) + '" aria-label="Cerrar ' + esc(baseOf(p)) + '">' + ico('close', 14) + '</button></div>';
      }).join('');
      var md = S.active && langOf(S.active) === 'markdown';
      $('.vs-tab-actions').innerHTML = md ? '<button data-act="md-toggle" title="' + (S.source[S.active] ? 'Abrir vista previa' : 'Ver código fuente') + '" aria-label="' + (S.source[S.active] ? 'Abrir vista previa' : 'Ver código fuente') + '">' + ico(S.source[S.active] ? 'preview' : 'code') + '</button>' : '';
      var on = $('.vs-tab.on'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    function renderEditor() {
      var p = S.active, crumbs = $('.vs-crumbs');
      if (!p) {
        crumbs.innerHTML = '';
        editor.innerHTML = '<div class="vs-empty"><span class="vs-mark big" aria-hidden="true">AL</span><dl><dt>Mostrar todos los comandos</dt><dd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd></dd><dt>Abrir archivo</dt><dd><kbd>Ctrl</kbd>+<kbd>P</kbd></dd><dt>Abrir o cerrar la terminal</dt><dd><kbd>Ctrl</kbd>+<kbd>ñ</kbd></dd><dt>Leer el README</dt><dd><a href="#" class="vs-link" data-open="README.md">README.md</a></dd></dl></div>';
        return;
      }
      crumbs.innerHTML = [SITE].concat(p.split('/')).map(function (c, i, a) {
        var path = a.slice(1, i + 1).join('/');
        return i === a.length - 1 ? icon(p) + '<span class="cur">' + esc(c) + '</span>' : '<button data-reveal="' + esc(path) + '">' + esc(c) + '</button><span class="sep">›</span>';
      }).join('');
      editor.innerHTML = docHTML(p, S.source[p]);
      editor.scrollTop = 0;
    }
    function renderStatus() {
      var p = S.active;
      $('.vs-pos').textContent = p ? 'Ln 1, Col 1' : '';
      $('.vs-lang').textContent = p ? LANG_NAME[langOf(p)] : '';
      $('.vs-lang').style.display = p ? '' : 'none';
    }

    // —— barra lateral ——
    var VIEW_TITLE = { explorer: 'Explorador', search: 'Buscar', scm: 'Trayectoria', ext: 'Conocimiento' };
    function setView(v, force) {
      if (S.view === v && S.sideOpen && !force) { S.sideOpen = false; return layout(); }
      S.view = v; S.sideOpen = true; layout(); renderSide();
    }
    function renderSide() {
      root.querySelectorAll('.vs-activity [data-view]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-view') === S.view && S.sideOpen); });
      $('.vs-side-title').textContent = VIEW_TITLE[S.view];
      var acts = $('.vs-side-actions');
      if (S.view === 'explorer') {
        acts.innerHTML = '<button data-act="toggle-hidden" title="' + (S.hidden ? 'Ocultar' : 'Mostrar') + ' archivos ocultos" aria-label="Archivos ocultos">' + ico('eye') + '</button><button data-act="collapse" title="Contraer carpetas" aria-label="Contraer carpetas">' + ico('collapse') + '</button>';
        sideBody.innerHTML = '<div class="vs-sect">' + SITE + '</div><div class="vs-tree"></div>';
        exp = explorer(sideBody.querySelector('.vs-tree'), { open: exp ? exp.state.open : { experiencia: true, 'experiencia/hp': true, conocimiento: true }, hidden: S.hidden, active: S.active, onOpen: function (p) { openFile(p, { keepFocus: true }); } });
      } else if (S.view === 'search') {
        acts.innerHTML = '';
        sideBody.innerHTML = '<div class="vs-sidebox"><input class="vs-field" data-search placeholder="Buscar en todos los archivos" aria-label="Buscar"></div><div class="vs-results"></div>';
        var inp = sideBody.querySelector('[data-search]'); inp.value = S.query || ''; inp.focus({ preventScroll: true }); search(inp.value);
        inp.addEventListener('input', function () { S.query = inp.value; search(inp.value); });
      } else if (S.view === 'scm') {
        acts.innerHTML = '';
        sideBody.innerHTML = '<div class="vs-sidebox"><textarea class="vs-field" rows="2" data-commit placeholder="Mensaje (Ctrl+Enter para confirmar en «main»)" aria-label="Mensaje de commit"></textarea><button class="vs-btn primary" data-act="commit">Confirmar</button></div>' +
          '<div class="vs-sect">Historial · main</div>' + COMMITS.map(function (c) {
            return '<div class="vs-commit" data-file="' + c.file + '" tabindex="0"><span class="vs-commit-dot"></span><div><div class="vs-commit-msg">' + esc(c.msg) + '</div><div class="vs-commit-meta"><span class="h">' + c.hash + '</span> · ' + esc(c.date) + (c.refs ? ' · <span class="r">' + esc(c.refs.split(',')[0]) + '</span>' : '') + '</div></div></div>';
          }).join('');
        sideBody.querySelector('[data-commit]').addEventListener('keydown', function (e) { if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); commit(); } });
      } else if (S.view === 'ext') {
        acts.innerHTML = '';
        var group = function (title, kind) {
          var list = Object.keys(FILES).filter(function (p) { return FILES[p].meta && FILES[p].meta.kind === kind && FILES[p].meta.level; });
          return '<div class="vs-sect">' + title + ' · ' + list.length + '</div>' + list.map(function (p) {
            var m = FILES[p].meta, ic = ICON[langOf(p)];
            return '<div class="vs-ext" data-file="' + esc(p) + '" tabindex="0"><span class="vs-ext-ico" style="color:var(--' + ic[1] + ')">' + ic[0] + '</span><div class="vs-ext-body"><div class="vs-ext-name">' + esc(m.title) + '</div><div class="vs-ext-desc">' + esc(m.text) + '</div><div class="vs-ext-meta">alberto · ' + level(m.level) + '</div></div></div>';
          }).join('');
        };
        sideBody.innerHTML = '<div class="vs-sidebox"><input class="vs-field" data-extq placeholder="Filtrar conocimiento" aria-label="Filtrar conocimiento"></div>' + group('Instalado', 'skill') + group('Taller', 'hobby');
        sideBody.querySelector('[data-extq]').addEventListener('input', function (e) {
          var q = fold(e.target.value);
          sideBody.querySelectorAll('.vs-ext').forEach(function (x) { x.style.display = fold(x.textContent).indexOf(q) >= 0 ? '' : 'none'; });
        });
      }
    }
    function search(q) {
      var box = sideBody.querySelector('.vs-results'); if (!box) return;
      if (!q || q.length < 2) { box.innerHTML = '<p class="vs-hint">Escribe al menos dos letras. Prueba «firmware» o «Rust».</p>'; return; }
      var fq = fold(q), groups = [], total = 0;
      filesUnder('', S.hidden).forEach(function (p) {
        var hits = [];
        FILES[p].body.split('\n').forEach(function (l) { var k = fold(l).indexOf(fq); if (k >= 0) hits.push(esc(l.slice(Math.max(0, k - 24), k).replace(/^\S*\s/, '')) + '<mark>' + esc(l.substr(k, q.length)) + '</mark>' + esc(l.slice(k + q.length, k + q.length + 60))); });
        if (hits.length) { total += hits.length; groups.push('<div class="vs-sr-file" data-file="' + esc(p) + '">' + icon(p) + '<span>' + esc(baseOf(p)) + '</span><span class="vs-sr-dir">' + esc(dirOf(p)) + '</span><span class="vs-count">' + hits.length + '</span></div>' + hits.slice(0, 4).map(function (h) { return '<div class="vs-sr-line" data-file="' + esc(p) + '">' + h + '</div>'; }).join('')); }
      });
      box.innerHTML = '<p class="vs-hint">' + total + ' resultados en ' + groups.length + ' archivos</p>' + groups.join('');
    }
    function commit() {
      var t = sideBody.querySelector('[data-commit]'), msg = t ? t.value.trim() : '';
      if (!msg) return toast('No hay mensaje. Ni cambios. Ni prisa.');
      t.value = '';
      toast('Commit «' + esc(msg) + '» creado… en tu imaginación. Si va en serio, escríbeme.', [{ label: 'Abrir contacto', run: function () { openFile('contacto.json'); } }]);
    }

    // —— panel ——
    function setPanelTab(t) {
      S.panelTab = t;
      root.querySelectorAll('[data-ptab]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-ptab') === t); b.setAttribute('aria-selected', b.getAttribute('data-ptab') === t); });
      root.querySelectorAll('[data-pview]').forEach(function (v) { v.hidden = v.getAttribute('data-pview') !== t; });
      $('.vs-panel-actions').classList.toggle('is-term', t === 'terminal');
    }
    function openPanel(tab, focus) {
      if (!S.panelOpen) { S.panelOpen = true; S.panel = Math.max(S.lastPanel, 160); layout(); }
      if (tab) setPanelTab(tab);
      if (focus && S.panelTab === 'terminal') term.focus();
    }
    function closePanel() { if (S.panelOpen) { S.lastPanel = S.panel; S.panelOpen = false; layout(); editor.focus({ preventScroll: true }); } }
    function toggleTerminal() { if (S.panelOpen && S.panelTab === 'terminal') closePanel(); else openPanel('terminal', true); }

    function layout() {
      root.style.setProperty('--side-cur', (S.sideOpen ? S.side : 0) + 'px');
      root.style.setProperty('--panel-cur', (S.panelOpen ? S.panel : 0) + 'px');
      root.classList.toggle('side-closed', !S.sideOpen);
      root.classList.toggle('panel-closed', !S.panelOpen);
      root.querySelectorAll('.vs-activity [data-view]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-view') === S.view && S.sideOpen); });
    }

    // —— arrastre (panel inferior y barra lateral) ——
    function drag(handle, opt) {
      handle.addEventListener('pointerdown', function (e) {
        if (e.button !== 0 || (opt.filter && !opt.filter(e))) return;
        var sx = e.clientX, sy = e.clientY, moving = false, id = e.pointerId;
        try { handle.setPointerCapture(id); } catch (x) { }
        function mv(ev) {
          if (!moving && Math.abs(ev.clientY - sy) + Math.abs(ev.clientX - sx) < (opt.threshold || 0)) return;
          if (!moving) { moving = true; root.classList.add(opt.cls); }
          opt.move(ev);
        }
        function up(ev) {
          handle.removeEventListener('pointermove', mv); handle.removeEventListener('pointerup', up); handle.removeEventListener('pointercancel', up);
          try { handle.releasePointerCapture(id); } catch (x) { }
          root.classList.remove(opt.cls);
          if (moving) opt.end(); else if (opt.click) opt.click(ev);
        }
        handle.addEventListener('pointermove', mv); handle.addEventListener('pointerup', up); handle.addEventListener('pointercancel', up);
      });
    }
    function panelMove(ev) {
      var r = main.getBoundingClientRect(), s = scaleOf(root), h = (r.bottom - ev.clientY) / s, max = main.offsetHeight - 90;
      S.panel = Math.max(0, Math.min(max, h)); S.panelOpen = S.panel > 0;
      if (S.panelOpen) setPanelTab(S.panelTab);
      layout();
    }
    function panelEnd() {
      if (S.panel < 64) { S.panelOpen = false; S.panel = S.lastPanel; } else { S.lastPanel = S.panel; if (S.panelTab === 'terminal') term.focus(); }
      layout();
    }
    drag($('.vs-sash-h'), { cls: 'drag-h', move: panelMove, end: panelEnd });
    drag($('.vs-status'), { cls: 'drag-h', threshold: 4, move: panelMove, end: panelEnd, filter: function (e) { return !e.target.closest('button'); } });
    $('.vs-sash-h').addEventListener('dblclick', toggleTerminal);
    drag($('.vs-sash-v'), {
      cls: 'drag-v',
      move: function (ev) { var r = side.getBoundingClientRect(), s = scaleOf(root); S.side = Math.max(0, Math.min(520, (ev.clientX - r.left) / s)); S.sideOpen = S.side > 0; layout(); },
      end: function () { if (S.side < 150) { S.sideOpen = false; S.side = 264; } else if (S.side < 170) S.side = 170; layout(); if (S.sideOpen) renderSide(); }
    });

    // —— paleta de comandos ——
    var pal = palette($('.vs-palette'), { close: closePalette });
    function closePalette() { root.classList.remove('has-palette'); }
    function fileItems() {
      return filesUnder('', S.hidden).map(function (p) { return { label: baseOf(p), desc: dirOf(p), icon: icon(p), run: function () { openFile(p); } }; });
    }
    function commands() {
      return [
        { label: 'Ver: Alternar terminal', kbd: 'Ctrl+ñ', run: toggleTerminal },
        { label: 'Ver: Explorador', kbd: 'Ctrl+Shift+E', run: function () { setView('explorer', true); } },
        { label: 'Ver: Buscar en archivos', kbd: 'Ctrl+Shift+F', run: function () { setView('search', true); } },
        { label: 'Ver: Trayectoria (historial)', kbd: 'Ctrl+Shift+G', run: function () { setView('scm', true); } },
        { label: 'Ver: Conocimiento', kbd: 'Ctrl+Shift+X', run: function () { setView('ext', true); } },
        { label: 'Ver: Alternar barra lateral', kbd: 'Ctrl+B', run: function () { S.sideOpen = !S.sideOpen; layout(); } },
        { label: 'Preferencias: Tema de color', keep: true, run: themePicker },
        { label: 'Archivo: Abrir README', run: function () { openFile('README.md'); } },
        { label: 'Contacto: Escribirme', run: function () { openFile('contacto.json'); } },
        { label: 'CV: Ver en LinkedIn', run: openCV },
        { label: 'Terminal: Ejecutar «neofetch»', run: function () { openPanel('terminal', true); term.run('neofetch'); } },
        { label: 'Café: Preparar', run: function () { toast('<b>HTTP 418</b>: soy una tetera.'); } },
        { label: 'Ayuda: Atajos de teclado', run: shortcuts }
      ];
    }
    function themePicker() {
      pal.open(function (q) { return { query: q, items: THEMES.filter(function (t) { return t !== 'placa' || S.theme === 'placa'; }).map(function (t) { return { label: THEME_NAME[t], desc: t === S.theme ? 'actual' : '', run: function () { setTheme(t); } }; }) }; }, '', 'Elige un tema de color');
      root.classList.add('has-palette');
    }
    function openPalette(cmd) {
      root.classList.add('has-palette');
      pal.open(function (q) {
        if (q.charAt(0) === '>') return { query: q.slice(1).trim(), items: commands(), empty: 'Ningún comando coincide' };
        return { query: q, items: fileItems(), empty: 'Ningún archivo coincide' };
      }, cmd ? '>' : '', cmd ? '' : 'Buscar archivos por nombre (escribe > para comandos)');
    }
    function openCV() { window.open(LINKEDIN, '_blank', 'noopener'); }
    function shortcuts() {
      dialog('Atajos de teclado', 'Ctrl+Shift+P paleta de comandos · Ctrl+P abrir archivo · Ctrl+ñ terminal · Ctrl+B barra lateral · Ctrl+Shift+E/F/G/X vistas · Esc cierra lo que flota. Y un código que quizá conozcas.', [{ label: 'Entendido', primary: true }]);
    }

    // —— menús ——
    var MENUS = {
      archivo: [['Abrir archivo…', 'Ctrl+P', function () { openPalette(false); }], ['Abrir README', '', function () { openFile('README.md'); }], ['Contacto', '', function () { openFile('contacto.json'); }], ['Ver CV en LinkedIn', '', openCV], null, ['Cerrar ventana', '', closeWindow]],
      ver: [['Paleta de comandos…', 'Ctrl+Shift+P', function () { openPalette(true); }], null, ['Explorador', 'Ctrl+Shift+E', function () { setView('explorer', true); }], ['Buscar', 'Ctrl+Shift+F', function () { setView('search', true); }], ['Trayectoria', 'Ctrl+Shift+G', function () { setView('scm', true); }], ['Conocimiento', 'Ctrl+Shift+X', function () { setView('ext', true); }], null, ['Terminal', 'Ctrl+ñ', toggleTerminal], ['Barra lateral', 'Ctrl+B', function () { S.sideOpen = !S.sideOpen; layout(); }], ['Tema de color…', '', function () { themePicker(); }]],
      terminal: [['Nueva terminal', '', function () { openPanel('terminal', true); term.reset(); }], ['Limpiar terminal', '', function () { term.clear(); }], ['Ejecutar «help»', '', function () { openPanel('terminal', true); term.run('help'); }]],
      ayuda: [['Atajos de teclado', '', shortcuts], ['Acerca de', '', function () { dialog('Acerca de', SITE + ' — el portfolio de Alberto López Sánchez. Versión 1.0 · Hecho a mano, sin frameworks. Inspirado en los editores de código de toda la vida.', [{ label: 'Cerrar', primary: true }]); }]]
    };
    var menuEl = $('.vs-menu'), menuFor = null;
    function openMenu(name, btn) {
      menuFor = name;
      menuEl.innerHTML = MENUS[name].map(function (m, i) { return m ? '<button role="menuitem" data-mi="' + i + '"><span>' + esc(m[0]) + '</span><kbd>' + esc(m[1]) + '</kbd></button>' : '<hr>'; }).join('');
      var r = relRect(root, btn); menuEl.style.left = r.x + 'px'; menuEl.style.top = (r.y + r.h) + 'px';
      root.classList.add('has-menu');
      root.querySelectorAll('[data-menu]').forEach(function (b) { b.classList.toggle('on', b === btn); });
      var first = menuEl.querySelector('button'); if (first) first.focus({ preventScroll: true });
    }
    function closeMenu() { menuFor = null; root.classList.remove('has-menu'); root.querySelectorAll('[data-menu]').forEach(function (b) { b.classList.remove('on'); }); }
    menuEl.addEventListener('click', function (e) { var b = e.target.closest('[data-mi]'); if (!b) return; var m = MENUS[menuFor][+b.getAttribute('data-mi')]; closeMenu(); m[2](); });
    menuEl.addEventListener('keydown', function (e) {
      var bs = [].slice.call(menuEl.querySelectorAll('button')), i = bs.indexOf(document.activeElement);
      if (e.key === 'ArrowDown') { e.preventDefault(); bs[(i + 1) % bs.length].focus(); } else if (e.key === 'ArrowUp') { e.preventDefault(); bs[(i - 1 + bs.length) % bs.length].focus(); }
    });
    function closeWindow() {
      dialog('¿Cerrar el portfolio?', 'Hay cambios sin guardar en tu carrera: todavía no me has escrito.', [
        { label: 'Escribirme', primary: true, run: function () { openFile('contacto.json'); } },
        { label: 'Cerrar igualmente', run: function () { toast('Las webs no se cierran desde dentro. Pero gracias por intentarlo.'); } },
        { label: 'Cancelar' }]);
    }

    // —— clics ——
    root.addEventListener('click', function (e) {
      var t = e.target;
      var menuBtn = t.closest('[data-menu]');
      if (menuBtn) { if (menuFor === menuBtn.getAttribute('data-menu')) closeMenu(); else openMenu(menuBtn.getAttribute('data-menu'), menuBtn); return; }
      if (!t.closest('.vs-menu')) closeMenu();
      var x = t.closest('[data-close]'); if (x) { e.stopPropagation(); return closeTab(x.getAttribute('data-close')); }
      var tab = t.closest('[data-tab]'); if (tab) { S.active = tab.getAttribute('data-tab'); exp && exp.setActive(S.active); renderTabs(); renderEditor(); renderStatus(); return; }
      var op = t.closest('[data-open]'); if (op) { e.preventDefault(); return openFile(op.getAttribute('data-open')); }
      var fl = t.closest('.vs-side [data-file]:not(.vs-row)'); if (fl) return openFile(fl.getAttribute('data-file'));
      var rv = t.closest('[data-reveal]'); if (rv) return reveal(rv.getAttribute('data-reveal'));
      var vw = t.closest('[data-view]'); if (vw) return setView(vw.getAttribute('data-view'));
      var pt = t.closest('[data-ptab]'); if (pt) { openPanel(pt.getAttribute('data-ptab'), true); return; }
      if (t.classList.contains('vs-overlay')) { closePalette(); root.classList.remove('has-dialog'); return; }
      var a = t.closest('[data-act]'); if (!a) return;
      switch (a.getAttribute('data-act')) {
        case 'quick': return openPalette(false);
        case 'term-toggle': return toggleTerminal();
        case 'term-new': openPanel('terminal', true); return term.reset();
        case 'term-clear': return term.clear();
        case 'panel-close': return closePanel();
        case 'panel-max': S.panelOpen = true; S.panel = S.panel > main.offsetHeight - 140 ? S.lastPanel : main.offsetHeight - 90; layout(); return;
        case 'scm': return setView('scm', true);
        case 'problems': return openPanel('problems');
        case 'lang': return toast('Modo de lenguaje: <b>' + esc(LANG_NAME[langOf(S.active)]) + '</b>. Lo detecto yo solo, no hace falta tocarlo.');
        case 'settings': return themePicker();
        case 'account': return toast('Sesión iniciada como <b>visitante</b>. Para algo más, ' + '<a href="#" class="vs-link" data-open="contacto.json">escríbeme</a>.');
        case 'bell': return toast('No hay notificaciones nuevas. Disfruta del silencio.');
        case 'md-toggle': S.source[S.active] = !S.source[S.active]; renderTabs(); return renderEditor();
        case 'toggle-hidden': S.hidden = !S.hidden; exp.setHidden(S.hidden); return renderSide();
        case 'collapse': return exp.collapse();
        case 'commit': return commit();
        case 'win-min': return toast('Minimizar no está disponible: este portfolio quiere que lo leas.');
        case 'win-max': if (root.requestFullscreen && !document.fullscreenElement) root.requestFullscreen().catch(function () { toast('Tu navegador no deja ponerlo a pantalla completa aquí.'); }); else if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen(); return;
        case 'win-close': return closeWindow();
      }
    });
    root.addEventListener('auxclick', function (e) { var tab = e.target.closest('[data-tab]'); if (tab && e.button === 1) closeTab(tab.getAttribute('data-tab')); });
    root.addEventListener('keydown', function (e) {
      var tab = e.target.closest && e.target.closest('[data-tab]');
      if (tab && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); tab.click(); }
      var sideItem = e.target.closest && e.target.closest('.vs-commit, .vs-ext');
      if (sideItem && e.key === 'Enter') openFile(sideItem.getAttribute('data-file'));
    });

    // —— teclado global + Konami ——
    var KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], kpos = 0;
    function konami() {
      var prev = S.theme === 'placa' ? 'noche' : S.theme;
      setTheme('placa');
      var inp = root.querySelector('.vs-term-in'); if (inp) inp.value = '';
      toast('<b>Modo placa activado.</b> Firmware incluido. Para volver: <code>theme ' + prev + '</code> en la terminal.', [{ label: 'Volver a ' + THEME_NAME[prev], run: function () { setTheme(prev); } }]);
    }
    (opts.keyTarget || document).addEventListener('keydown', function (e) {
      var k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      kpos = k === KONAMI[kpos] ? kpos + 1 : (k === KONAMI[0] ? 1 : 0);
      if (kpos === KONAMI.length) { kpos = 0; konami(); }
      var ctrl = e.ctrlKey || e.metaKey, key = e.key.toLowerCase();
      if (e.key === 'Escape') { closePalette(); closeMenu(); root.classList.remove('has-dialog'); tips.hide(); return; }
      if ((ctrl && e.shiftKey && key === 'p') || e.key === 'F1') { e.preventDefault(); return openPalette(true); }
      if (ctrl && !e.shiftKey && key === 'p') { e.preventDefault(); return openPalette(false); }
      if (ctrl && (e.code === 'Backquote' || key === 'ñ' || key === '`' || key === 'º')) { e.preventDefault(); return toggleTerminal(); }
      if (ctrl && !e.shiftKey && key === 'b') { e.preventDefault(); S.sideOpen = !S.sideOpen; layout(); if (S.sideOpen) renderSide(); return; }
      if (ctrl && e.shiftKey) { var v = { e: 'explorer', f: 'search', g: 'scm', x: 'ext' }[key]; if (v) { e.preventDefault(); setView(v, true); } }
    });

    // —— panel: contenidos ——
    root.querySelector('[data-pview="problems"]').innerHTML = '<div class="vs-prow">' + ico('warn', 16) + '<span>El café se está acabando.</span><span class="vs-sr-dir">portfolio · Ln 1, Col 1</span></div><div class="vs-prow muted">' + ico('info', 16) + '<span>0 errores. Todo compila, al menos aquí.</span></div>';
    root.querySelector('[data-pview="output"]').innerHTML = ['[info] Iniciando portfolio-sh 1.0', '[info] ' + Object.keys(FILES).length + ' archivos indexados en ' + Object.keys(DIRS).length + ' carpetas', '[info] Tema: ' + THEME_NAME[S.theme], '[info] Listo. Escribe help en la terminal.'].map(function (l) { return '<div>' + esc(l) + '</div>'; }).join('');
    root.querySelector('[data-pview="ports"]').innerHTML = '<p class="vs-hint">No hay puertos reenviados. Mejor así.</p>';
    term = terminal(root.querySelector('[data-pview="terminal"]'), {
      open: function (p) { openFile(p, { keepFocus: true }); }, reveal: reveal, close: closePanel, toast: toast,
      setTheme: setTheme, theme: function () { return S.theme; }, themes: THEMES
    });

    setTheme(S.theme); layout(); renderSide(); setPanelTab('terminal'); renderTabs(); renderEditor(); renderStatus();
    (opts.run || []).forEach(function (c) { term.run(c); });
    return { open: openFile, terminal: term, toast: toast, setTheme: setTheme, openPalette: openPalette, setView: setView, state: S, konami: konami, layout: layout };
  }
