#!/usr/bin/env bash
# Regenera el bundle y el CSS de tokens.
#   tools/build.sh           → src/*.js → design-system/components/bundle.js, y site/tokens.css
#   tools/build.sh --tokens  → además comprueba el contraste de la paleta y regenera tokens.json
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ "${1:-}" == "--tokens" ]]; then
    python3 tools/palette.py
    python3 tools/gen_tokens.py design-system/tokens.json
fi
cat src/*.js > design-system/components/bundle.js
if grep -q -e '</script' -e '<!--' design-system/components/bundle.js; then
    echo "bundle.js no puede contener '</script' ni '<!--'" >&2; exit 1
fi
python3 tools/tokens_css.py
echo "bundle.js OK ($(wc -c < design-system/components/bundle.js) bytes)"
