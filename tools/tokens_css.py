"""Compila design-system/tokens.json a site/tokens.css para la web independiente (index.html)."""
import json, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t = json.load(open(os.path.join(ROOT, 'design-system', 'tokens.json')))
themes = [x['id'] for x in t['color']['themes']]

def val(tok, th):
    v = tok['value']
    if isinstance(v, str):
        return v if th == themes[0] else None
    return v.get(th)

css = ['/* Generado por tools/tokens_css.py a partir de design-system/tokens.json. No editar a mano. */']
for f in t['type']['fonts']:
    css.append("@font-face { font-family: '%s'; src: url('../design-system/%s') format('woff2'); font-weight: %s; font-style: %s; font-display: swap; }"
               % (f['family'], f['file'], f['weight'], f.get('style', 'normal')))
for i, th in enumerate(themes):
    sel = ':root, [data-theme="%s"]' % th if i == 0 else '[data-theme="%s"]' % th
    decl = ['--%s: %s' % (k['name'], val(k, th)) for fam in ('color', 'shadow') for k in t[fam]['tokens'] if val(k, th)]
    css.append(sel + ' { ' + '; '.join(decl) + '; }')
root = ['--%s: %s' % (k['name'], k['value']) for fam in ('spacing', 'radius', 'size') if fam in t for k in t[fam]['tokens']]
root += ['--font-%s: %s' % (k, v) for k, v in t['type']['families'].items()]
css.append(':root { ' + '; '.join(root) + '; }')
for g in t['type']['groups']:
    for s in g['styles']:
        css.append('.%s { font-family: var(--font-%s); font-size: %s; line-height: %s; font-weight: %s;%s }' % (
            s['name'], g['family'], s['fontSize'], s['lineHeight'], s['fontWeight'],
            (' letter-spacing: %s;' % s['letterSpacing']) if 'letterSpacing' in s else ''))
os.makedirs(os.path.join(ROOT, 'site'), exist_ok=True)
open(os.path.join(ROOT, 'site', 'tokens.css'), 'w').write('\n'.join(css) + '\n')
print('site/tokens.css OK')
