  // ================= Utilidades =================
  var LEVELS = ['', 'Explorando', 'Básico', 'Competente', 'Avanzado', 'Experto'];
  var KINDS = { about: 'Sobre mí', work: 'Experiencia', achievement: 'Logro', skill: 'Conocimiento', hobby: 'Taller', project: 'Proyecto', education: 'Formación', contact: 'Contacto', secret: '¿?' };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function fold(s) { return s.split('').map(function (c) { return c.normalize('NFD').replace(/[̀-ͯ]/g, '') || c; }).join('').toLowerCase(); }
  function dirOf(p) { var i = p.lastIndexOf('/'); return i < 0 ? '' : p.slice(0, i); }
  function baseOf(p) { return p.slice(p.lastIndexOf('/') + 1); }
  function resolve(from, rel) {
    rel = rel || '';
    var abs = rel === '~' || rel === '/' || rel.indexOf('~/') === 0 || rel.charAt(0) === '/';
    var src = abs ? rel.replace(/^~\/?|^\//, '') : (from ? from + '/' : '') + rel, out = [];
    src.split('/').forEach(function (p) { if (!p || p === '.') return; if (p === '..') out.pop(); else out.push(p); });
    return out.join('/');
  }
  function isFile(p) { return !!FILES[p]; }
  function isDir(p) { if (p === '') return true; var pre = p + '/'; return Object.keys(FILES).some(function (k) { return k.indexOf(pre) === 0; }); }
  function children(dir, hidden) {
    var pre = dir ? dir + '/' : '', seen = {}, out = [];
    Object.keys(FILES).forEach(function (k) {
      if (k.indexOf(pre) !== 0) return;
      var rest = k.slice(pre.length), i = rest.indexOf('/'), name = i < 0 ? rest : rest.slice(0, i);
      if (seen[name] || (!hidden && name.charAt(0) === '.')) return;
      seen[name] = 1;
      out.push({ name: name, path: pre + name, dir: i >= 0 });
    });
    var ORDER = ['experiencia', 'conocimiento', 'proyectos', 'formacion', 'taller'], rank = function (c) { var k = dir ? -1 : ORDER.indexOf(c.name); return k < 0 ? 99 : k; };
    return out.sort(function (a, b) { return (b.dir - a.dir) || (rank(a) - rank(b)) || a.name.localeCompare(b.name, 'es'); });
  }
  function filesUnder(dir, hidden) { var pre = dir ? dir + '/' : ''; return Object.keys(FILES).filter(function (k) { return k.indexOf(pre) === 0 && (hidden || !/(^|\/)\./.test(k)); }); }
  function langOf(p) {
    var b = baseOf(p).toLowerCase();
    if (b === 'dockerfile') return 'dockerfile';
    var ext = b.lastIndexOf('.') > 0 ? b.slice(b.lastIndexOf('.') + 1) : '';
    return { md: 'markdown', rs: 'rust', c: 'c', cpp: 'cpp', cs: 'csharp', tcl: 'tcl', sql: 'sql', py: 'python', yml: 'yaml', yaml: 'yaml', json: 'json', toml: 'toml', conf: 'ini', sh: 'bash' }[ext] || 'text';
  }
  var LANG_NAME = { markdown: 'Markdown', rust: 'Rust', c: 'C', cpp: 'C++', csharp: 'C#', tcl: 'Tcl', sql: 'SQL', python: 'Python', yaml: 'YAML', json: 'JSON', toml: 'TOML', ini: 'Ini', bash: 'Shell Script', dockerfile: 'Dockerfile', text: 'Texto sin formato' };
  var ICON = { markdown: ['#', 'syn-func'], rust: ['R', 'syn-keyword'], c: ['C', 'syn-type'], cpp: ['C+', 'syn-type'], csharp: ['C#', 'syn-key'], tcl: ['T', 'syn-func'], sql: ['DB', 'syn-number'], python: ['py', 'syn-string'], yaml: ['≡', 'syn-key'], json: ['{}', 'syn-number'], toml: ['⚙', 'ink-muted'], ini: ['⚙', 'ink-muted'], bash: ['$', 'syn-string'], dockerfile: ['◫', 'syn-type'], text: ['·', 'ink-muted'] };
  function icon(p) { var i = ICON[langOf(p)]; return '<span class="vs-ficon" aria-hidden="true" style="color:var(--' + i[1] + ')">' + i[0] + '</span>'; }

  function level(l, opts) {
    opts = opts || {};
    var pips = '';
    for (var i = 1; i <= 5; i++) pips += '<span class="vs-pip' + (i <= l ? ' on' : '') + '"></span>';
    return '<span class="vs-level" role="img" aria-label="Nivel ' + l + ' de 5: ' + LEVELS[l] + '"><span class="vs-pips">' + pips + '</span>' +
      (opts.compact ? '' : '<span class="vs-level-word">' + LEVELS[l] + ' · ' + l + '/5</span>') + '</span>';
  }

  // ================= Resaltado =================
  var KW = {
    rust: 'as break const continue crate else enum extern false fn for if impl in let loop match mod move mut pub ref return self Self static struct super trait true type unsafe use where while',
    c: 'auto break case char const continue default do double else enum extern float for goto if int long return short signed sizeof static struct switch typedef union unsigned void volatile while',
    cpp: 'auto bool break case catch char class const constexpr continue default delete do double else enum explicit false float for if include inline int long namespace new nullptr override private protected public return short static struct switch template this throw true try typedef typename unsigned using virtual void while',
    csharp: 'bool break case class const else false foreach for if in int namespace new null private public return static string true using var void while',
    tcl: 'proc set puts foreach if else elseif return expr while for incr',
    sql: 'SELECT FROM WHERE ORDER BY GROUP INSERT INTO VALUES CREATE TABLE PRIMARY KEY NOT NULL AND OR AS JOIN ON',
    python: 'and as assert break class continue def del elif else except False finally for from global if import in is lambda None not or pass raise return True try while with yield',
    bash: 'if then else elif fi for do done while case esac function set export local return in echo',
    dockerfile: 'FROM RUN COPY ADD WORKDIR ENV ARG ENTRYPOINT CMD EXPOSE LABEL USER VOLUME',
    yaml: 'true false null', toml: 'true false', ini: 'true false', json: 'true false null'
  };
  var LINE_COMMENT = { rust: '//', c: '//', cpp: '//', csharp: '//', tcl: '#', sql: '--', python: '#', bash: '#', dockerfile: '#', yaml: '#', toml: '#', ini: '#' };
  function tok(cls, s) { return '<span class="' + cls + '">' + esc(s) + '</span>'; }
  function hlMd(line) {
    if (/^#{1,6} /.test(line)) return tok('t-kw', line);
    if (/^> /.test(line)) return tok('t-com', line);
    if (/^```/.test(line)) return tok('t-str', line);
    var m = /^(\s*(?:[-*]|\d+\.) )/.exec(line), pre = '';
    if (m) { pre = tok('t-kw', m[1]); line = line.slice(m[1].length); }
    return pre + esc(line)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<span class="t-fn">[$1]</span><span class="t-str">($2)</span>')
      .replace(/\*\*([^*]+)\*\*/g, '<span class="t-type">**$1**</span>')
      .replace(/`([^`]+)`/g, '<span class="t-str">`$1`</span>');
  }
  function hlLine(line, lang, st) {
    if (lang === 'markdown') return hlMd(line);
    if (lang === 'text') return esc(line);
    var out = '', i = 0, n = line.length, kw = (KW[lang] || '').split(' '), lc = LINE_COMMENT[lang];
    if ((lang === 'toml' || lang === 'ini') && /^\s*\[.*\]\s*$/.test(line)) return tok('t-type', line);
    if (lang === 'yaml' || lang === 'toml' || lang === 'ini') {
      var m = /^(\s*-?\s*)([A-Za-z0-9_.+-]+)(\s*[:=])/.exec(line);
      if (m && line.trim().charAt(0) !== '#') { out += esc(m[1]) + tok('t-key', m[2]) + esc(m[3]); i = m[0].length; }
    }
    while (i < n) {
      var rest = line.slice(i), ch = line.charAt(i), e;
      if (st.block) { e = rest.indexOf('*/'); if (e < 0) return out + tok('t-com', rest); out += tok('t-com', rest.slice(0, e + 2)); i += e + 2; st.block = false; continue; }
      if (st.triple) { e = rest.indexOf('"""'); if (e < 0) return out + tok('t-str', rest); out += tok('t-str', rest.slice(0, e + 3)); i += e + 3; st.triple = false; continue; }
      if ((lang === 'c' || lang === 'cpp' || lang === 'csharp' || lang === 'rust') && rest.indexOf('/*') === 0) { st.block = true; continue; }
      if (lang === 'python' && rest.indexOf('"""') === 0) { e = rest.indexOf('"""', 3); if (e < 0) { st.triple = true; return out + tok('t-str', rest); } out += tok('t-str', rest.slice(0, e + 3)); i += e + 3; continue; }
      if (lc && rest.indexOf(lc) === 0) return out + tok('t-com', rest);
      if ((lang === 'c' || lang === 'cpp') && ch === '#') { var pp = /^#\s*\w+/.exec(rest)[0]; out += tok('t-kw', pp); i += pp.length; continue; }
      if (lang === 'rust' && ch === "'" && /^'[a-z_]+\b(?!')/.test(rest)) { var lt = /^'[a-z_]+/.exec(rest)[0]; out += tok('t-kw', lt); i += lt.length; continue; }
      if (ch === '"' || ch === "'") {
        var j = i + 1;
        while (j < n && line.charAt(j) !== ch) { if (line.charAt(j) === '\\') j++; j++; }
        out += tok(lang === 'json' && /^\s*:/.test(line.slice(j + 1)) ? 't-key' : 't-str', line.slice(i, j + 1)); i = j + 1; continue;
      }
      if ((lang === 'bash' || lang === 'tcl') && ch === '$') { var v = /^\$\{[^}]*\}|^\$[A-Za-z_0-9@]+/.exec(rest); if (v) { out += tok('t-key', v[0]); i += v[0].length; continue; } }
      var num = /^\d[\d_.]*/.exec(rest);
      if (num && !/[A-Za-z_]/.test(line.charAt(i - 1))) { out += tok('t-num', num[0]); i += num[0].length; continue; }
      var w = /^[A-Za-z_][A-Za-z0-9_]*!?/.exec(rest);
      if (w) {
        var word = w[0], after = line.slice(i + word.length);
        var cls = kw.indexOf(word) >= 0 ? 't-kw' : (/^[A-Z][a-z]/.test(word) && lang !== 'dockerfile') ? 't-type' : (/^\s*\(/.test(after) || word.slice(-1) === '!') ? 't-fn' : '';
        out += cls ? tok(cls, word) : esc(word); i += word.length; continue;
      }
      out += esc(ch); i++;
    }
    return out;
  }
  function codeHTML(path) {
    var file = FILES[path], lang = langOf(path), st = {}, lines = file.body.replace(/\n$/, '').split('\n'), gut = '', src = '';
    lines.forEach(function (l, i) { gut += (i + 1) + '\n'; src += hlLine(l, lang, st) + '\n'; });
    var m = file.meta, lens = m && m.level ? '<div class="vs-lens">' + level(m.level) + '<span>' + esc(m.title) + ' · ' + esc(m.text) + '</span></div>' : '';
    return '<div class="vs-code"><div></div>' + (lens || '<div></div>') + '<pre class="vs-gutter" aria-hidden="true">' + gut + '</pre><pre class="vs-src">' + src + '</pre></div>';
  }

  // ================= Markdown =================
  function inline(s, base) {
    var codes = [];
    s = esc(s).replace(/`([^`]+)`/g, function (_, c) { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
    s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (_, t, h) {
      if (/^https?:/.test(h)) return '<a class="vs-link" href="' + h + '" target="_blank" rel="noopener">' + t + '</a>';
      return '<a class="vs-link" href="#" data-open="' + esc(resolve(base, h.replace(/&amp;/g, '&'))) + '">' + t + '</a>';
    });
    return s.replace(/\u0000(\d+)\u0000/g, function (_, i) { return '<code>' + codes[+i] + '</code>'; });
  }
  function mdHTML(src, base) {
    var L = src.replace(/\n$/, '').split('\n'), out = '', i = 0, buf = [];
    function para() {
      if (!buf.length) return;
      var t = buf.join(' '), lv = /^Nivel: (\d)\/5/.exec(t);
      out += lv ? '<div class="vs-md-level">' + level(+lv[1]) + '</div>' : '<p>' + inline(t, base) + '</p>';
      buf = [];
    }
    while (i < L.length) {
      var l = L[i];
      if (l.trim() && !/^(#{1,3} |```|\s*[-*] |\d+\. |> |\||---\s*$|    )/.test(l)) { buf.push(l.trim()); i++; continue; }
      para();
      if (!l.trim()) { i++; continue; }
      var h = /^(#{1,3}) (.*)$/.exec(l);
      if (h) { out += '<h' + h[1].length + '>' + inline(h[2], base) + '</h' + h[1].length + '>'; i++; continue; }
      if (/^```/.test(l)) {
        var lang = l.slice(3).trim() || 'text', code = [], st = {};
        for (i++; i < L.length && !/^```/.test(L[i]); i++) code.push(hlLine(L[i], lang === 'sh' ? 'bash' : lang, st));
        i++; out += '<pre class="vs-md-pre">' + code.join('\n') + '</pre>'; continue;
      }
      if (/^    /.test(l)) { var pre = []; while (i < L.length && /^    /.test(L[i])) pre.push(esc(L[i++].slice(4))); out += '<pre class="vs-md-pre">' + pre.join('\n') + '</pre>'; continue; }
      if (/^\s*[-*] |^\d+\. /.test(l)) {
        var ord = /^\d+\. /.test(l), items = [], re = ord ? /^\d+\. / : /^\s*[-*] /;
        while (i < L.length && re.test(L[i])) items.push(L[i++].replace(re, ''));
        out += (ord ? '<ol>' : '<ul>') + items.map(function (t) { return '<li>' + inline(t, base) + '</li>'; }).join('') + (ord ? '</ol>' : '</ul>'); continue;
      }
      if (/^> /.test(l)) { var q = []; while (i < L.length && /^> /.test(L[i])) q.push(L[i++].slice(2)); out += '<blockquote>' + inline(q.join(' '), base) + '</blockquote>'; continue; }
      if (/^---\s*$/.test(l)) { out += '<hr>'; i++; continue; }
      if (/^\|/.test(l)) {
        var rows = []; while (i < L.length && /^\|/.test(L[i])) rows.push(L[i++]);
        var cells = function (r) { return r.replace(/^\||\|$/g, '').split('|').map(function (c) { return c.trim(); }); };
        out += '<table><thead><tr>' + cells(rows[0]).map(function (c) { return '<th>' + inline(c, base) + '</th>'; }).join('') + '</tr></thead><tbody>' +
          rows.slice(2).map(function (r) { return '<tr>' + cells(r).map(function (c) { return '<td>' + inline(c, base) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
        continue;
      }
      i++;
    }
    para();
    return out;
  }
  function docHTML(path, source) {
    if (langOf(path) === 'markdown' && !source) return '<article class="vs-md">' + mdHTML(FILES[path].body, dirOf(path)) + '</article>';
    return codeHTML(path);
  }

  // ================= Ficha (hover) =================
  function cardHTML(path) {
    var file = FILES[path];
    if (!file && isDir(path)) {
      var n = filesUnder(path).length;
      return '<div class="vs-card"><div class="vs-card-kind">Carpeta<span>' + esc(path) + '/</span></div><div class="vs-card-title">' + esc(baseOf(path)) + '/</div>' +
        '<div class="vs-card-sub">' + n + (n === 1 ? ' archivo' : ' archivos') + '</div>' + (DIRS[path] ? '<p class="vs-card-text">' + esc(DIRS[path]) + '</p>' : '') + '</div>';
    }
    if (!file || !file.meta) return '';
    var m = file.meta;
    return '<div class="vs-card"><div class="vs-card-kind">' + esc(KINDS[m.kind] || '') + '<span>' + esc(path) + '</span></div>' +
      '<div class="vs-card-title">' + esc(m.title) + '</div>' + (m.sub ? '<div class="vs-card-sub">' + esc(m.sub) + '</div>' : '') +
      (m.level ? '<div class="vs-card-level">' + level(m.level) + '</div>' : '') + '<p class="vs-card-text">' + esc(m.text) + '</p></div>';
  }
  function scaleOf(root) { var w = root.getBoundingClientRect().width; return root.offsetWidth && w ? w / root.offsetWidth : 1; }
  function relRect(root, el) { var s = scaleOf(root), r = el.getBoundingClientRect(), o = root.getBoundingClientRect(); return { x: (r.left - o.left) / s, y: (r.top - o.top) / s, w: r.width / s, h: r.height / s }; }
  // Fichas con retardo para [data-file], [data-dir] y enlaces [data-open] dentro de root
  function hover(root) {
    var box = document.createElement('div'), timer = 0, cur = null;
    box.className = 'vs-hover'; box.setAttribute('role', 'tooltip'); root.appendChild(box);
    function hide() { clearTimeout(timer); cur = null; box.classList.remove('open'); }
    function show(el) {
      var path = el.getAttribute('data-file') || el.getAttribute('data-dir') || el.getAttribute('data-open'), html = cardHTML(path);
      if (!html) return hide();
      box.innerHTML = html; box.classList.add('open');
      var r = relRect(root, el), W = root.offsetWidth, H = root.offsetHeight, bw = box.offsetWidth, bh = box.offsetHeight, side = el.closest('.vs-side, .vs-sidebox');
      var x, y;
      if (side) { var sr = relRect(root, side); x = sr.x + sr.w + 6; y = r.y - 6; }
      else { x = r.x; y = r.y + r.h + 6; if (y + bh > H - 8) y = r.y - bh - 6; }
      if (x + bw > W - 8) x = Math.max(8, W - bw - 8);
      box.style.left = Math.round(x) + 'px'; box.style.top = Math.round(Math.min(Math.max(8, y), H - bh - 8)) + 'px';
    }
    root.addEventListener('mouseover', function (e) {
      var el = e.target.closest && e.target.closest('[data-file],[data-dir],[data-open]');
      if (!el || !root.contains(el) || el === cur || el.closest('.vs-tabs,.vs-palette,.vs-term')) return;
      cur = el; clearTimeout(timer); box.classList.remove('open');
      timer = setTimeout(function () { if (cur === el) show(el); }, 380);
    });
    root.addEventListener('mouseout', function (e) {
      var to = e.relatedTarget && e.relatedTarget.closest ? e.relatedTarget.closest('[data-file],[data-dir],[data-open]') : null;
      if (to !== cur) hide();
    });
    root.addEventListener('mousedown', hide, true);
    root.addEventListener('scroll', hide, true);
    return { hide: hide };
  }

  // ================= Explorador =================
  function treeHTML(dir, depth, st) {
    return children(dir, st.hidden).map(function (c) {
      var pad = 8 + depth * 12;
      if (c.dir) {
        var open = !!st.open[c.path];
        return '<div class="vs-row" role="treeitem" aria-expanded="' + open + '" tabindex="-1" data-dir="' + esc(c.path) + '" style="padding-left:' + pad + 'px"><span class="vs-chev' + (open ? ' open' : '') + '"></span><span class="vs-name">' + esc(c.name) + '</span></div>' +
          (open ? '<div role="group" class="vs-group" style="--guide:' + (pad + 7) + 'px">' + treeHTML(c.path, depth + 1, st) + '</div>' : '');
      }
      return '<div class="vs-row' + (c.path === st.active ? ' on' : '') + (c.name.charAt(0) === '.' ? ' hidden-file' : '') + '" role="treeitem" tabindex="-1" data-file="' + esc(c.path) + '" style="padding-left:' + (pad + 16) + 'px">' + icon(c.path) + '<span class="vs-name">' + esc(c.name) + '</span></div>';
    }).join('');
  }
  // Árbol navegable con ratón y teclado. opts: { open, hidden, active, onOpen(path) }
  function explorer(el, opts) {
    var st = { open: opts.open || {}, hidden: !!opts.hidden, active: opts.active || null };
    el.setAttribute('role', 'tree');
    function render() {
      var focused = document.activeElement && el.contains(document.activeElement) ? document.activeElement.getAttribute('data-file') || document.activeElement.getAttribute('data-dir') : null;
      el.innerHTML = treeHTML('', 0, st);
      var rows = el.querySelectorAll('.vs-row'), target = focused && el.querySelector('[data-file="' + focused + '"],[data-dir="' + focused + '"]');
      if (rows.length) (target || el.querySelector('.vs-row.on') || rows[0]).setAttribute('tabindex', '0');
      if (target) target.focus({ preventScroll: true });
    }
    function toggle(p, force) { st.open[p] = force != null ? force : !st.open[p]; render(); }
    el.addEventListener('click', function (e) {
      var r = e.target.closest('.vs-row'); if (!r) return;
      if (r.hasAttribute('data-dir')) toggle(r.getAttribute('data-dir'));
      else { st.active = r.getAttribute('data-file'); render(); opts.onOpen && opts.onOpen(st.active); }
    });
    el.addEventListener('keydown', function (e) {
      var rows = [].slice.call(el.querySelectorAll('.vs-row')), r = document.activeElement, i = rows.indexOf(r);
      if (i < 0) return;
      var go = function (k) { if (rows[k]) { rows.forEach(function (x) { x.setAttribute('tabindex', '-1'); }); rows[k].setAttribute('tabindex', '0'); rows[k].focus(); } };
      var dirp = r.getAttribute('data-dir');
      if (e.key === 'ArrowDown') go(i + 1);
      else if (e.key === 'ArrowUp') go(i - 1);
      else if (e.key === 'ArrowRight' && dirp) { if (!st.open[dirp]) toggle(dirp, true); else go(i + 1); }
      else if (e.key === 'ArrowLeft') { if (dirp && st.open[dirp]) toggle(dirp, false); else { var up = dirOf(dirp || r.getAttribute('data-file')); var u = up && el.querySelector('[data-dir="' + up + '"]'); if (u) go(rows.indexOf(u)); } }
      else if (e.key === 'Enter' || e.key === ' ') r.click();
      else return;
      e.preventDefault();
    });
    render();
    return {
      state: st, render: render,
      reveal: function (p) { var parts = p.split('/'); for (var k = 1; k <= parts.length; k++) { var dp = parts.slice(0, k).join('/'); if (isDir(dp) && !isFile(dp)) st.open[dp] = true; } if (isFile(p)) st.active = p; render(); },
      collapse: function () { st.open = {}; render(); },
      setHidden: function (v) { st.hidden = v; render(); },
      setActive: function (p) { st.active = p; render(); }
    };
  }
