# StatusBar

La barra inferior: rama, problemas, posición, codificación, lenguaje, tema y el acceso a la terminal. También es el asa para arrastrarla.

**Qué aporta quien la usa:** nada en la app; por separado, sus botones y un `span.vs-status-fill` que ocupa el hueco central.

**Composición:** `small` en `on-status` sobre `status-bg`; cada elemento es un botón con 8px de relleno y el hover aclara el fondo. El hueco central lleva cursor de redimensionar: arrastrarlo hacia arriba abre el panel y fija su alto (por debajo de 64px se vuelve a cerrar).

- `main` abre Trayectoria; `⊗ 0 ⚠ 1` abre Problemas; el tema abre el selector; «Terminal» la abre o la cierra; la campana avisa de que no hay nada.
