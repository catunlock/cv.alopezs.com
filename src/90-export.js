
  window.Portfolio = {
    site: SITE, files: FILES, dirs: DIRS, commits: COMMITS, LEVELS: LEVELS, KINDS: KINDS,
    resolve: resolve, children: children, langOf: langOf, icon: icon, level: level,
    highlight: function (code, lang) { var st = {}; return code.split('\n').map(function (l) { return hlLine(l, lang, st); }).join('\n'); },
    markdown: mdHTML, codeHTML: codeHTML, docHTML: docHTML, cardHTML: cardHTML, hover: hover,
    explorer: explorer, terminal: terminal, palette: palette, paletteHTML: paletteHTML, ico: ico, app: app
  };
})();
