import json, sys, os
P = json.load(open(os.path.join(os.path.dirname(__file__), 'palette.json')))
order = ["noche", "dia", "placa"]
names = {"noche": "Noche", "dia": "Día", "placa": "Placa (secreto)"}
usage = {
 "bg_editor": "Fondo del editor: donde se leen los archivos. También el del panel inferior en Noche y Día.",
 "bg_side": "Barra lateral (explorador, búsqueda, historial, conocimiento), barra de pestañas y bloques de código en la vista previa.",
 "bg_activity": "Barra de actividad (iconos de la izquierda).",
 "bg_title": "Barra de título con menús y el buscador central.",
 "bg_panel": "Panel inferior: terminal, problemas y salida.",
 "bg_input": "Campos de texto, paleta de comandos, menús, ficha flotante y diálogos.",
 "bg_hover": "Fila de lista o pestaña bajo el cursor.",
 "bg_select": "Fila seleccionada (archivo abierto en el explorador, opción activa de la paleta).",
 "line": "Separadores entre zonas (barra lateral, pestañas, panel). Decorativo.",
 "line_strong": "Borde de controles: campos, paleta, menús, ficha flotante; ≥3:1 sobre bg-side, bg-editor, bg-input y bg-title.",
 "ink": "Texto principal sobre cualquier fondo bg-*.",
 "ink_muted": "Texto secundario sobre cualquier fondo bg-*: números de línea, rutas, migas de pan, iconos inactivos, descripciones.",
 "accent": "Identidad: indicador de vista activa, pestaña activa, enlaces y pips de nivel. Como texto sobre bg-editor, bg-side, bg-panel, bg-input, bg-hover o accent-soft.",
 "accent_soft": "Fondo tintado detrás de texto accent (pestaña del panel activa, coincidencias de búsqueda).",
 "on_accent": "Texto sobre un relleno accent (botón principal, marca AL).",
 "status_bg": "Barra de estado inferior.",
 "on_status": "Texto e iconos de la barra de estado sobre status-bg.",
 "syn_keyword": "Resaltado: palabras clave, encabezados de markdown, directivas de Dockerfile. Sobre bg-editor, bg-side o bg-input.",
 "syn_string": "Resaltado: cadenas y código en línea.",
 "syn_number": "Resaltado: números y constantes.",
 "syn_comment": "Resaltado: comentarios, en cursiva. Legible (≥4.5:1): en esta web los comentarios cuentan cosas.",
 "syn_type": "Resaltado: tipos, secciones de configuración, negrita en markdown.",
 "syn_func": "Resaltado: funciones, macros y texto de enlace en markdown.",
 "syn_key": "Resaltado: claves de YAML, TOML, JSON y variables de shell.",
 "term_ok": "Terminal: usuario del prompt y mensajes correctos. Sobre bg-panel, bg-editor o bg-input.",
 "term_warn": "Terminal: avisos y hashes de commit.",
 "term_err": "Terminal: errores y comandos no encontrados.",
 "term_path": "Terminal: ruta del prompt y carpetas en ls y tree.",
 "focus": "Foco de teclado: contorno de 1px dentro de filas y botones; anillo con focus-ring fuera de ellos. ≥3:1 sobre todos los fondos.",
}
toks = [{"name": k.replace('_', '-'), "value": {t: P[t][k] for t in order}, "usage": usage[k]} for k in usage]
tokens = {
 "name": "Alberto López", "version": 2,
 "color": {"note": "Noche es el tema por defecto y Día su versión clara. Placa es un tema secreto: se activa con el código Konami o con «theme placa» en la terminal.",
   "themes": [{"id": t, "name": names[t]} for t in order], "tokens": toks},
 "type": {
   "fonts": [
     {"family": "IBM Plex Sans", "file": "fonts/IBMPlexSans-Regular.woff2", "weight": "400", "style": "normal"},
     {"family": "IBM Plex Sans", "file": "fonts/IBMPlexSans-Medium.woff2", "weight": "500", "style": "normal"},
     {"family": "IBM Plex Sans", "file": "fonts/IBMPlexSans-SemiBold.woff2", "weight": "600", "style": "normal"},
     {"family": "IBM Plex Mono", "file": "fonts/IBMPlexMono-Regular.woff2", "weight": "400", "style": "normal"},
     {"family": "IBM Plex Mono", "file": "fonts/IBMPlexMono-Medium.woff2", "weight": "500", "style": "normal"}],
   "families": {"sans": "\"IBM Plex Sans\", system-ui, -apple-system, \"Segoe UI\", sans-serif",
                "mono": "\"IBM Plex Mono\", ui-monospace, \"SF Mono\", Menlo, monospace"},
   "groups": [
     {"name": "Documento", "family": "sans", "note": "La vista previa de markdown: donde se lee la experiencia. Sans y generosa.",
      "styles": [
        {"name": "display", "fontSize": "36px", "lineHeight": "44px", "fontWeight": 600, "letterSpacing": "-0.02em", "sample": "Alberto López", "usage": "El # de cada documento."},
        {"name": "title", "fontSize": "22px", "lineHeight": "30px", "fontWeight": 600, "letterSpacing": "-0.01em", "sample": "Logros", "usage": "## de un documento, con filete inferior."},
        {"name": "heading", "fontSize": "17px", "lineHeight": "26px", "fontWeight": 600, "sample": "Dónde", "usage": "### de un documento."},
        {"name": "body", "fontSize": "15px", "lineHeight": "26px", "fontWeight": 400, "sample": "Desarrollo software, firmware y herramientas para plataformas de producto embebido.", "usage": "Párrafos y listas de un documento."}]},
     {"name": "Interfaz", "family": "sans", "note": "El marco del editor: listas, pestañas, menús, barra de estado.",
      "styles": [
        {"name": "ui", "fontSize": "13px", "lineHeight": "22px", "fontWeight": 400, "sample": "software-engineer.md", "usage": "Filas del explorador, pestañas, menús, paleta."},
        {"name": "small", "fontSize": "12px", "lineHeight": "18px", "fontWeight": 400, "sample": "Ln 1, Col 1   UTF-8   Markdown", "usage": "Barra de estado, migas de pan, descripciones en listas."},
        {"name": "label", "fontSize": "11px", "lineHeight": "16px", "fontWeight": 600, "letterSpacing": "0.06em", "sample": "EXPLORADOR", "usage": "Cabeceras de vista y de sección, en mayúsculas."}]},
     {"name": "Código", "family": "mono", "note": "Mono solo dentro del editor de código y la terminal.",
      "styles": [
        {"name": "code", "fontSize": "13px", "lineHeight": "20px", "fontWeight": 400, "sample": "pub const USOS: [Uso; 2] = [", "usage": "Código, terminal, código en línea."}]}]},
 "spacing": {"note": "Base de 4px.", "tokens": [
   {"name": "space-1", "value": "4px", "usage": "Icono ↔ texto en filas y pestañas."},
   {"name": "space-2", "value": "8px", "usage": "Relleno horizontal de filas, botones de la barra de estado."},
   {"name": "space-3", "value": "12px", "usage": "Sangría por nivel del árbol; relleno de pestañas."},
   {"name": "space-4", "value": "16px", "usage": "Relleno de la terminal, fichas y menús."},
   {"name": "space-6", "value": "24px", "usage": "Separación entre bloques de un documento."},
   {"name": "space-12", "value": "48px", "usage": "Margen lateral de la vista previa de markdown."}]},
 "radius": {"note": "Marco a escuadra; solo flota lo redondeado.", "tokens": [
   {"name": "radius-0", "value": "0px", "usage": "Barras, pestañas, filas, panel."},
   {"name": "radius-sm", "value": "3px", "usage": "Campos de texto, código en línea, insignias."},
   {"name": "radius-md", "value": "6px", "usage": "Paleta de comandos, menús, ficha flotante, diálogos, avisos."},
   {"name": "radius-full", "value": "9999px", "usage": "Pips de nivel y contador de resultados."}]},
 "size": {"note": "Medidas del marco del editor.", "tokens": [
   {"name": "titlebar-h", "value": "34px", "usage": "Alto de la barra de título."},
   {"name": "activity-w", "value": "48px", "usage": "Ancho de la barra de actividad."},
   {"name": "side-w", "value": "264px", "usage": "Ancho inicial de la barra lateral (se arrastra entre 170 y 520px)."},
   {"name": "tabs-h", "value": "35px", "usage": "Alto de la barra de pestañas."},
   {"name": "row-h", "value": "22px", "usage": "Alto de fila en listas y árbol."},
   {"name": "panel-h", "value": "220px", "usage": "Alto inicial del panel inferior (se arrastra; por debajo de 64px se cierra)."},
   {"name": "status-h", "value": "24px", "usage": "Alto de la barra de estado."}]},
 "shadow": {"note": "Solo para lo que flota sobre el editor.", "tokens": [
   {"name": "shadow-pop", "value": {"noche": "0 8px 24px #000000b3", "dia": "0 1px 2px #1d1f2214, 0 8px 24px #1d1f2229", "placa": "0 8px 24px #000000a6"}, "usage": "Paleta, menús, ficha flotante, diálogos y avisos."},
   {"name": "focus-ring", "value": {t: "0 0 0 2px %s, 0 0 0 3px %s" % (P[t]['bg_editor'], P[t]['focus']) for t in order}, "usage": "Foco de elementos sueltos (enlaces, botones de diálogo): 2px de separación y 1px sólido de focus."}]}
}
json.dump(tokens, open(sys.argv[1], 'w'), ensure_ascii=False, indent=2)
print('ok', len(toks), 'colors')
