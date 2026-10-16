# EditorTabs

La barra de pestañas de los archivos abiertos y, debajo, las migas de pan de la ruta del activo.

**Qué aporta quien la usa:** nada en la app (la pinta `Portfolio.app`); por separado, la lista de rutas abiertas y la activa, con `Portfolio.icon(path)` y `Portfolio.ico('close')`.

**Pestaña:** glifo + nombre en `ui`; activa sobre `bg-editor` con raya `accent` de 2px arriba; inactivas en `ink-muted` sobre `bg-side`. Si dos pestañas se llaman igual (`README.md`), cada una muestra su carpeta en `small`. La × aparece al pasar el cursor y siempre en la activa; clic central también cierra.

**Migas:** `small` en `ink-muted`; cada carpeta es un botón que la muestra en el explorador.

- A la derecha, la acción del documento: en markdown alterna vista previa ↔ código fuente.
- No: más de una fila de pestañas; las que no caben se desplazan.
