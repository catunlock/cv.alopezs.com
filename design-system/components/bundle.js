/* Portfolio — un editor de código como portfolio: sistema de archivos, markdown, resaltado, terminal y la app completa. Sin dependencias. */
(function () {
  'use strict';
  // ================= Contenido =================
  // Datos de los CV y de github.com/catunlock. Los niveles (1–5) son una estimación inicial a revisar por Alberto.
  var SITE = 'cv.alopezs.com';
  var FILES = {}, DIRS = {};
  function f(path, meta, body) { FILES[path] = { path: path, meta: meta, body: body.replace(/^\n/, '').replace(/\s+$/, '') + '\n' }; }
  function d(path, text) { DIRS[path] = text; }

  var HP_SUMMARY = 'Desarrollo software, firmware y herramientas de desarrollo para plataformas de producto embebido, combinando ingeniería práctica con liderazgo técnico entre equipos y partners externos.';
  var GH = 'https://github.com/catunlock/';

  d('experiencia', 'Dónde he trabajado: HP, Nuclia, ALBA Synchrotron y JEDI, más dos startups propias.');
  d('experiencia/hp', 'Software Engineer · mar 2022 – hoy. Un archivo por logro.');
  d('experiencia/hp/logros', 'Un archivo por logro: qué, con qué y qué cambió.');
  d('experiencia/startups', 'Proyectos que arranqué y no llegaron lejos, pero enseñaron mucho.');
  d('conocimiento', 'Lo que sé hacer, por áreas. Cada archivo lleva su nivel.');
  d('conocimiento/lenguajes', 'Lenguajes de programación, cada uno escrito en sí mismo.');
  d('conocimiento/sistemas', 'Firmware, seguridad y virtualización.');
  d('conocimiento/herramientas', 'Contenedores e integración continua.');
  d('conocimiento/datos', 'Bases de datos y búsqueda.');
  d('conocimiento/ia', 'Machine learning: el máster y lo que vino después.');
  d('conocimiento/web', 'Frameworks web y móvil.');
  d('conocimiento/linux', 'Sistema de trabajo y de ocio.');
  d('conocimiento/personas', 'Liderazgo, metodologías ágiles y docencia.');
  d('proyectos', 'Proyectos personales en github.com/catunlock.');
  d('proyectos/embebido', 'Firmware y dispositivos.');
  d('proyectos/herramientas', 'Utilidades de línea de comandos, casi todas en Rust.');
  d('proyectos/linux', 'Para que mi Linux haga lo que quiero.');
  d('proyectos/juegos', 'Gráficos, motores y agentes.');
  d('formacion', 'Grado y máster en la UPC, y certificaciones.');
  d('taller', 'Lo que hago por gusto: IoT, PCB, CAD, impresión 3D y el escritorio.');

  f('README.md', { kind: 'about', title: 'Alberto López Sánchez', sub: 'Software Engineer · HP · Barcelona', text: 'Quién soy, a qué me dedico y cómo moverte por esta web.' }, `
# Alberto López Sánchez

**Software Engineer en HP** · Barcelona

Soy ingeniero de software centrado en I+D: construyo sistemas desde cero y llevo años haciendo herramientas internas para otros desarrolladores. Trabajo con firmware, sistemas operativos (Linux), hardware y virtualización.

He trabajado en varias startups y he arrancado proyectos propios. Me importa el producto y lo que dicen quienes lo usan; he sido Scrum Master y Technical Product Owner.

Fuera del trabajo hago dispositivos IoT para Home Assistant, diseño placas y piezas, imprimo en 3D y mantengo un escritorio Linux que nunca está terminado. Me interesan el machine learning, los LLM y la computación acelerada.

## Ahora

- [Software Engineer · HP](experiencia/hp/README.md) — mar 2022 – hoy

## Antes

- [Software Engineer · Nuclia](experiencia/nuclia.md) — ago 2021 – feb 2022
- [Software Engineer · ALBA Synchrotron](experiencia/alba-synchrotron.md) — dic 2020 – ago 2021
- [Profesor y responsable de formación · JEDI](experiencia/jedi.md) — may 2017 – sep 2020

## Formación

- [Máster en Inteligencia Artificial · UPC](formacion/master-ia.md) — 2018 – 2020
- [Grado en Ingeniería Informática · UPC](formacion/grado-informatica.md) — 2013 – 2018

Español y catalán nativos · inglés C1.

## Cómo moverte

- **Explorador**, a la izquierda: experiencia, conocimiento, proyectos, formación y taller, cada cosa en su carpeta. Pasa el cursor por un archivo para ver su resumen.
- **Terminal**, abajo: arrastra hacia arriba la barra de estado o pulsa \`Ctrl+ñ\`. Empieza por \`help\`.
- **Paleta de comandos**: \`Ctrl+Shift+P\`. Para abrir un archivo por su nombre, \`Ctrl+P\`.
- [Contacto](contacto.json), cuando quieras.
`);

  var KN = '../../../conocimiento/';
  f('experiencia/hp/README.md', { kind: 'work', title: 'Software Engineer · HP', sub: 'mar 2022 – hoy · Barcelona', text: HP_SUMMARY }, `
# Software Engineer · HP

\`HP Inc · Barcelona · mar 2022 – hoy\`

${HP_SUMMARY}

Trabajo en el equipo Foundations de fabricación aditiva (impresión 3D): sistema operativo base, seguridad y servicios del sistema, y las herramientas internas para desarrollar, empaquetar y distribuir el software.

## Logros

- [Integración de firmware con CI y Docker](logros/01-ci-docker.md)
- [Releases automáticas con visión por computador](logros/02-releases-automaticas.md)
- [Seguridad del firmware: Secure Boot, TPM y cifrado](logros/03-seguridad.md)
- [Modernización de una base de código C++ de más de 20 años](logros/04-modernizacion-cpp.md)
- [Tests de integración con virtualización](logros/05-tests-virtualizacion.md)
- [Fiabilidad en campo: backup y recuperación](logros/06-fiabilidad.md)
- [Fabricación y reparabilidad del dispositivo](logros/07-fabricacion.md)
- [Entrega técnica con partners externos](logros/08-partners.md)
- [Mentoría de ingenieros y becarios](logros/09-mentoria.md)

## Con qué

[C / C++](../../conocimiento/lenguajes/cpp.cpp) · [Python](../../conocimiento/lenguajes/python.py) · [Rust](../../conocimiento/lenguajes/rust.rs) · [C#](../../conocimiento/lenguajes/csharp.cs) · [Tcl](../../conocimiento/lenguajes/tcl.tcl) · [Linux y Bash](../../conocimiento/linux/linux.sh) · [Docker](../../conocimiento/herramientas/Dockerfile) · [CI/CD](../../conocimiento/herramientas/ci.yml) · [Virtualización](../../conocimiento/sistemas/virtualizacion.md)

[hp.com](https://www.hp.com)
`);
  [
    ['01-ci-docker', 'Integración de firmware con CI y Docker', 'Workflows de CI y herramientas basadas en Docker para automatizar la integración de firmware en varias plataformas de producto. Herramientas de firmware reutilizables, adoptadas por varios equipos, que simplifican el mantenimiento y el soporte.', [['CI/CD', 'herramientas/ci.yml'], ['Docker', 'herramientas/Dockerfile'], ['Firmware', 'sistemas/firmware.md']]],
    ['02-releases-automaticas', 'Releases automáticas con visión por computador', 'Infraestructura para generar y publicar automáticamente los componentes de cada release de firmware; con visión por computador, el proceso libera varias horas de trabajo cada semana.', [['Python', 'lenguajes/python.py'], ['Machine learning', 'ia/machine-learning.md']]],
    ['03-seguridad', 'Seguridad del firmware: Secure Boot, TPM y cifrado', 'Proyectos clave de seguridad: Secure Boot con TPM (Trusted Platform Module) y cifrado de disco, para proteger la propiedad intelectual de la empresa. También coordino la preparación de auditorías de ciberseguridad, reuniendo evidencia técnica y acciones de seguimiento entre disciplinas.', [['Seguridad', 'sistemas/seguridad.md'], ['Firmware', 'sistemas/firmware.md']]],
    ['04-modernizacion-cpp', 'Modernización de una base de código C++ de más de 20 años', 'Diseño y modernización de componentes core en C++ de una base de código con más de 20 años, para que escale y se pueda mantener; más calidad con tests unitarios y de integración.', [['C / C++', 'lenguajes/cpp.cpp']]],
    ['05-tests-virtualizacion', 'Tests de integración con virtualización', 'Más cobertura de tests de integración gracias a técnicas avanzadas de virtualización y emulación.', [['Virtualización', 'sistemas/virtualizacion.md'], ['Linux', 'linux/linux.sh']]],
    ['06-fiabilidad', 'Fiabilidad en campo: backup y recuperación', 'Diseño y desarrollo de backup y recuperación del sistema; soluciones robustas a problemas aparecidos tras el lanzamiento que redujeron el coste de soporte en campo de varios productos.', [['Firmware', 'sistemas/firmware.md'], ['C / C++', 'lenguajes/cpp.cpp']]],
    ['07-fabricacion', 'Fabricación y reparabilidad del dispositivo', 'Con otros equipos, soluciones seguras y escalables que simplificaron la fabricación del dispositivo —menos coste y más éxito— y mejoraron su reparabilidad.', [['Firmware', 'sistemas/firmware.md'], ['Liderazgo técnico', 'personas/liderazgo.md']]],
    ['08-partners', 'Entrega técnica con partners externos', 'Liderazgo de la entrega técnica con partners externos: de los requisitos a soluciones implementables, coordinando dependencias entre equipos de ingeniería.', [['Liderazgo técnico', 'personas/liderazgo.md']]],
    ['09-mentoria', 'Mentoría de ingenieros y becarios', 'Mentoría de ingenieros y becarios para que construyan conocimiento técnico y contribuyan de forma independiente.', [['Mentoría y docencia', 'personas/mentoria.md']]]
  ].forEach(function (l) {
    f('experiencia/hp/logros/' + l[0] + '.md', { kind: 'achievement', title: l[1], sub: 'HP · Software Engineer', text: l[2] },
      '# ' + l[1] + '\n\n`HP · Software Engineer · mar 2022 – hoy`\n\n' + l[2] + '\n\n**Con:** ' +
      l[3].map(function (t) { return '[' + t[0] + '](' + KN + t[1] + ')'; }).join(' · ') + '\n');
  });

  f('experiencia/nuclia.md', { kind: 'work', title: 'Software Engineer · Nuclia', sub: 'ago 2021 – feb 2022 · Barcelona', text: 'NucliaDB: la base de datos distribuida de un buscador de documentos de empresa.' }, `
# Software Engineer · Nuclia

\`NucliaDB · Barcelona · ago 2021 – feb 2022\`

Diseñé e implementé la indexación de NucliaDB, la base de datos distribuida de un buscador para documentos de empresa: vídeos, imágenes, podcasts y texto.

- Extracción de metadatos, texto y representaciones semánticas de cada tipo de medio para que las búsquedas sean más precisas y relevantes.
- Técnicas de procesado de datos para entender mejor el significado de los documentos.

**Con:** [Rust](../conocimiento/lenguajes/rust.rs) · [Python](../conocimiento/lenguajes/python.py) · [Bases de datos y búsqueda](../conocimiento/datos/busqueda.sql) · [Docker](../conocimiento/herramientas/Dockerfile) · gRPC

[nuclia.com](https://nuclia.com/)
`);
  f('experiencia/alba-synchrotron.md', { kind: 'work', title: 'Software Engineer · ALBA Synchrotron', sub: 'dic 2020 – ago 2021 · Barcelona', text: 'Software de control y adquisición de datos para equipos científicos de alta precisión.' }, `
# Software Engineer · ALBA Synchrotron

\`Adquisición de datos y control · dic 2020 – ago 2021\`

Software para controlar dispositivos de alta precisión en un entorno distribuido, en una instalación de rayos X duros: operaciones precisas y fiables sin exposición a la radiación.

- Responsable del software de control de la línea Minerva.
- Integración de equipos científicos en el software de control.
- Contribuciones a los proyectos de código abierto Sardana, PyTango y cppTango.

**Con:** [C / C++](../conocimiento/lenguajes/cpp.cpp) · [Python](../conocimiento/lenguajes/python.py) · Cython

[cells.es](https://www.cells.es/ca)
`);
  f('experiencia/jedi.md', { kind: 'work', title: 'Profesor · JEDI', sub: 'may 2017 – sep 2020 · Barcelona', text: 'Responsable de formación de la asociación de estudiantes de informática JEDI y profesor de sus cursos de verano.' }, `
# Profesor y responsable de formación · JEDI

\`Joves Estudiants d'Informàtica · may 2017 – sep 2020\`

- Responsable del departamento de formación.
- Profesor de los cursos de verano de machine learning, deep learning, robótica e impresión 3D.

**Con:** [Mentoría y docencia](../conocimiento/personas/mentoria.md) · [Machine learning](../conocimiento/ia/machine-learning.md) · [CAD e impresión 3D](../taller/cad-3d.md)
`);
  f('experiencia/startups/proxishop.md', { kind: 'work', title: 'Proxishop', sub: 'ago 2020 · app Android e iOS', text: 'E-commerce para que agricultores y pequeños comercios de Cataluña siguieran vendiendo durante el confinamiento.' }, `
# Proxishop

\`App para Android e iOS · ago 2020\`

Plataforma de comercio electrónico para agricultores locales y pequeños comercios de Cataluña, pensada para reactivar la economía de la zona durante la COVID-19: el comercio de proximidad pudo seguir funcionando en los confinamientos.

**Con:** [Flutter, Flask y SQLAlchemy](../../conocimiento/web/frameworks.md) · [Python](../../conocimiento/lenguajes/python.py) · [PostgreSQL](../../conocimiento/datos/busqueda.sql)

[Vídeo de la app](https://www.youtube.com/watch?v=pRpX1iOqmvw)
`);
  f('experiencia/startups/quokka.md', { kind: 'work', title: 'Quokka', sub: 'jun – dic 2019 · nevera inteligente', text: 'La electrónica de un sistema de detección de productos dentro de una nevera.' }, `
# Quokka · nevera inteligente

\`jun – dic 2019\`

Diseñé y programé la electrónica de un sistema de detección dentro de una nevera para identificar los productos: integración de sensores y lógica de control para que la detección fuera precisa y fiable.

**Con:** [Firmware](../../conocimiento/sistemas/firmware.md) · [Diseño de PCB](../../taller/pcb.md)

[getkombo.app](https://getkombo.app/)
`);

  // —— conocimiento ——
  f('conocimiento/lenguajes/cpp.cpp', { kind: 'skill', title: 'C / C++', level: 4, text: 'Componentes del sistema y firmware; modernización de una base de código C++ de más de 20 años.' }, `
// C / C++ — nivel 4/5 · Avanzado
// Componentes del sistema y firmware; modernización de una base de código C++ de más de 20 años.

#include <string>
#include <vector>

struct Uso {
    std::string donde;
    std::string que;
};

const std::vector<Uso> usos = {
    {"HP", "componentes core en C++ moderno, con CMake y Google Test"},
    {"ALBA Synchrotron", "control de equipos científicos (C, C++, Cython)"},
    {"drm_display", "visor de imágenes para sistemas embebidos (C)"},
    {"esp8266-smartlight", "una luz conectada (C++)"},
};

int main() {
    return 0;  // sin warnings
}
`);
  f('conocimiento/lenguajes/rust.rs', { kind: 'skill', title: 'Rust', level: 4, text: 'La indexación de NucliaDB y mis herramientas y librerías para embebido.' }, `
//! Rust — nivel 4/5 · Avanzado
//! La indexación de NucliaDB y mis herramientas y librerías para embebido.

pub struct Uso {
    pub donde: &'static str,
    pub que: &'static str,
}

pub const USOS: [Uso; 4] = [
    Uso { donde: "Nuclia", que: "indexación distribuida con Tantivy y gRPC" },
    Uso { donde: "esp32-ble-keyboard", que: "librería de teclado BLE para ESP32" },
    Uso { donde: "cat-rs", que: "cat, con superpoderes" },
    Uso { donde: "file2wav", que: "esconder archivos dentro de un WAV" },
];

fn main() {
    for uso in USOS.iter() {
        println!("{}: {}", uso.donde, uso.que);
    }
}
`);
  f('conocimiento/lenguajes/python.py', { kind: 'skill', title: 'Python', level: 5, text: 'Herramientas y automatización, control de equipos científicos, backends y machine learning.' }, `
"""Python — nivel 5/5 · Experto

Herramientas y automatización, control de equipos científicos, backends y machine learning.
"""

USOS = {
    "HP": "herramientas internas y automatización de releases",
    "Nuclia": "procesado de documentos para el buscador",
    "ALBA Synchrotron": "control con Sardana y PyTango",
    "Proxishop": "backend con Flask y SQLAlchemy",
    "Máster en IA": "deep learning con Keras y TensorFlow",
}

if __name__ == "__main__":
    for donde, que in USOS.items():
        print(f"{donde}: {que}")
`);
  f('conocimiento/lenguajes/csharp.cs', { kind: 'skill', title: 'C#', level: 3, text: 'Herramientas en HP, un juego con NPC multiagente y el backend de powerMeter.' }, `
// C# — nivel 3/5 · Competente
// Herramientas en HP, un juego con NPC multiagente y el backend de powerMeter.

using System;

var usos = new[] {
    ("HP", "herramientas internas"),
    ("Ourcraft", "terreno deformable y NPC multiagente"),
    ("powerMeter", "el backend del medidor"),
};

foreach (var (donde, que) in usos)
    Console.WriteLine($"{donde}: {que}");
`);
  f('conocimiento/lenguajes/tcl.tcl', { kind: 'skill', title: 'Tcl', level: 3, text: 'Scripts y herramientas internas en HP.' }, `
# Tcl — nivel 3/5 · Competente
# Scripts y herramientas internas en HP.

set usos {HP}

proc saluda {donde} {
    puts "tcl en $donde"
}

foreach donde $usos {
    saluda $donde
}
`);
  f('conocimiento/linux/linux.sh', { kind: 'skill', title: 'Linux y Bash', level: 5, text: 'El sistema operativo base en el trabajo y mi escritorio en casa.' }, `
#!/usr/bin/env bash
# Linux y Bash — nivel 5/5 · Experto
# El sistema operativo base en el trabajo y mi escritorio en casa.

set -euo pipefail

usos=(
    "HP: sistema operativo base y servicios del sistema"
    "brother-archlinux: una impresora Brother en Arch Linux"
    "FreqAudio: una extensión de GNOME para el audio"
)

for uso in "\${usos[@]}"; do
    echo "$uso"
done
`);
  f('conocimiento/sistemas/firmware.md', { kind: 'skill', title: 'Firmware', level: 5, text: 'Firmware y software de sistema para producto embebido, y las herramientas para mantenerlo.' }, `
# Firmware

Nivel: 5/5 · Experto

Firmware y software de sistema para producto embebido, y las herramientas para mantenerlo.

## Dónde

- [HP](../../experiencia/hp/README.md): integración en varias plataformas, seguridad, backup y recuperación, fabricación.
- [Quokka](../../experiencia/startups/quokka.md): la electrónica de una nevera inteligente.
- [drm_display](../../proyectos/embebido/drm_display.md), [esp32-ble-keyboard](../../proyectos/embebido/esp32-ble-keyboard.md) y [powerMeter](../../proyectos/embebido/powermeter.md).
`);
  f('conocimiento/sistemas/seguridad.md', { kind: 'skill', title: 'Seguridad', level: 3, text: 'Secure Boot con TPM, cifrado de disco y auditorías de ciberseguridad.' }, `
# Seguridad

Nivel: 3/5 · Competente

Secure Boot con TPM, cifrado de disco y la preparación de auditorías de ciberseguridad.

## Dónde

- [HP · seguridad del firmware](../../experiencia/hp/logros/03-seguridad.md)
`);
  f('conocimiento/sistemas/virtualizacion.md', { kind: 'skill', title: 'Virtualización', level: 5, text: 'QEMU y VMware para emular el dispositivo y probar el firmware sin hardware.' }, `
# Virtualización

Nivel: 5/5 · Experto

QEMU y VMware para emular el dispositivo y probar el firmware sin depender del hardware.

## Dónde

- [HP · tests de integración con virtualización](../../experiencia/hp/logros/05-tests-virtualizacion.md)
`);
  f('conocimiento/herramientas/Dockerfile', { kind: 'skill', title: 'Docker', level: 5, text: 'Entornos reproducibles para compilar e integrar firmware y para desplegar servicios.' }, `
# Docker — nivel 5/5 · Experto
# Entornos reproducibles para compilar e integrar firmware (HP) y para servicios (Nuclia).

FROM ubuntu:24.04
RUN apt-get update && apt-get install -y build-essential cmake
WORKDIR /fw
COPY . .
ENTRYPOINT ["make", "integracion"]
`);
  f('conocimiento/herramientas/ci.yml', { kind: 'skill', title: 'CI/CD', level: 4, text: 'Workflows de integración continua para el firmware de varias plataformas de producto.' }, `
# CI/CD — nivel 4/5 · Avanzado
# Workflows de integración continua para firmware de varias plataformas (HP).

name: integracion-firmware
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        plataforma: [producto-a, producto-b, producto-c]
    steps:
      - uses: actions/checkout@v4
      - name: Compilar en contenedor
        run: docker run --rm fw-builder --plataforma \${{ matrix.plataforma }}
`);
  f('conocimiento/datos/busqueda.sql', { kind: 'skill', title: 'Bases de datos y búsqueda', level: 3, text: 'Una base de datos distribuida para un buscador, y SQL de toda la vida.' }, `
-- Bases de datos y búsqueda — nivel 3/5 · Competente
-- Una base de datos distribuida para un buscador, y SQL de toda la vida.

SELECT donde, que
FROM usos
ORDER BY donde;

-- Nuclia     | NucliaDB: indexación distribuida con Tantivy y Redis
-- Proxishop  | PostgreSQL con SQLAlchemy
-- Además     | SQLite
`);
  f('conocimiento/ia/machine-learning.md', { kind: 'skill', title: 'Machine learning', level: 3, text: 'Máster en IA, visión por computador y deep learning; hoy, LLM y computación acelerada.' }, `
# Machine learning

Nivel: 3/5 · Competente

Máster en Inteligencia Artificial: procesamiento del lenguaje natural, sistemas multiagente, visión por computador y deep learning. Hoy me interesan los LLM y la computación acelerada.

## Dónde

- [Máster en IA](../../formacion/master-ia.md): estimación de la mirada en 3D con flujo óptico.
- [HP](../../experiencia/hp/logros/02-releases-automaticas.md): visión por computador para automatizar releases.
- [JEDI](../../experiencia/jedi.md): cursos de verano de machine learning y deep learning.

Con Keras y TensorFlow.
`);
  f('conocimiento/web/frameworks.md', { kind: 'skill', title: 'Web y móvil', level: 3, text: 'Flask, Flutter, Nest.js y Angular.' }, `
# Web y móvil

Nivel: 3/5 · Competente

Flask, Flutter, Nest.js y Angular.

## Dónde

- [Proxishop](../../experiencia/startups/proxishop.md): app en Flutter con backend en Flask y PostgreSQL.
`);
  f('conocimiento/personas/liderazgo.md', { kind: 'skill', title: 'Liderazgo técnico', level: 4, text: 'Entrega técnica con partners externos, Scrum Master y Technical Product Owner.' }, `
# Liderazgo técnico

Nivel: 4/5 · Avanzado

Entrega técnica con partners externos: traducir requisitos en soluciones implementables y coordinar dependencias entre equipos. He sido Scrum Master y Technical Product Owner.

## Dónde

- [HP · entrega con partners externos](../../experiencia/hp/logros/08-partners.md)
- [ALBA Synchrotron](../../experiencia/alba-synchrotron.md): responsable del software de control de la línea Minerva.
`);
  f('conocimiento/personas/mentoria.md', { kind: 'skill', title: 'Mentoría y docencia', level: 4, text: 'Mentoría de ingenieros y becarios, y años dando clase en JEDI.' }, `
# Mentoría y docencia

Nivel: 4/5 · Avanzado

Acompañar a ingenieros y becarios hasta que trabajan con autonomía, y explicar lo complejo de forma sencilla.

## Dónde

- [HP · mentoría de ingenieros y becarios](../../experiencia/hp/logros/09-mentoria.md)
- [JEDI](../../experiencia/jedi.md): responsable de formación y profesor de cursos de verano.
`);

  // —— proyectos (github.com/catunlock) ——
  [
    ['embebido/drm_display', 'drm_display', 'C · 2025', 'Visor de imágenes para sistemas embebidos sobre DRM.', 'drm_display', [['C / C++', 'lenguajes/cpp.cpp'], ['Linux', 'linux/linux.sh']]],
    ['embebido/esp32-ble-keyboard', 'esp32-ble-keyboard', 'Rust · 2023', 'Librería de teclado Bluetooth LE para ESP32.', 'esp32-ble-keyboard', [['Rust', 'lenguajes/rust.rs'], ['Firmware', 'sistemas/firmware.md']]],
    ['embebido/powermeter', 'powerMeter', 'C y C# · 2022', 'Firmware en C y backend en C#, en dos repositorios.', 'powerMeter-firmware', [['C / C++', 'lenguajes/cpp.cpp'], ['C#', 'lenguajes/csharp.cs']]],
    ['embebido/esp8266-smartlight', 'esp8266-smartlight', 'C++ · 2017', 'Controla un relé para encender y apagar una luz, con muchas funciones.', 'esp8266-smartlight', [['C / C++', 'lenguajes/cpp.cpp']]],
    ['herramientas/cat-rs', 'cat-rs', 'Rust · 2023', 'El comando cat reimplementado en Rust, con superpoderes.', 'cat-rs', [['Rust', 'lenguajes/rust.rs']]],
    ['herramientas/file2wav', 'file2wav', 'Rust · 2021', 'Esteganografía: esconde cualquier archivo dentro de un audio WAV.', 'file2wav', [['Rust', 'lenguajes/rust.rs']]],
    ['herramientas/r-means', 'r-means', 'Rust · 2020', 'Una implementación básica de K-means en Rust.', 'r-means', [['Rust', 'lenguajes/rust.rs'], ['Machine learning', 'ia/machine-learning.md']]],
    ['linux/freqaudio', 'FreqAudio', 'JavaScript · 2017', 'Extensión de GNOME Shell para cambiar la frecuencia y el formato de muestreo del audio.', 'FreqAudio', [['Linux', 'linux/linux.sh']]],
    ['linux/brother-archlinux', 'brother-archlinux', 'Shell · 2016', 'Script para instalar una Brother MFC-5490CN y similares en CUPS, en Arch Linux.', 'brother-archlinux', [['Linux y Bash', 'linux/linux.sh']]],
    ['juegos/ourcraft', 'Ourcraft', 'C# · 2024', 'Un juego de terreno deformable con NPC basados en sistemas multiagente.', 'Ourcraft', [['C#', 'lenguajes/csharp.cs'], ['Machine learning', 'ia/machine-learning.md']]],
    ['juegos/dementia', 'Dementia', 'C++ · 2021', 'Un framework 3D sobre DirectX 11.', 'Dementia', [['C / C++', 'lenguajes/cpp.cpp']]]
  ].forEach(function (p) {
    f('proyectos/' + p[0] + '.md', { kind: 'project', title: p[1], sub: 'GitHub · ' + p[2], text: p[3] },
      '# ' + p[1] + '\n\n`' + p[2] + '`\n\n' + p[3] + '\n\n**Repositorio:** [github.com/catunlock/' + p[4] + '](' + GH + p[4] + ')\n\n**Con:** ' +
      p[5].map(function (t) { return '[' + t[0] + '](../../conocimiento/' + t[1] + ')'; }).join(' · ') + '\n');
  });

  // —— formación ——
  f('formacion/master-ia.md', { kind: 'education', title: 'Máster en Inteligencia Artificial', sub: 'UPC · sep 2018 – feb 2020', text: 'PLN, sistemas multiagente, visión por computador, planificación y deep learning.' }, `
# Máster en Inteligencia Artificial

\`UPC · sep 2018 – feb 2020\`

Procesamiento del lenguaje natural, sistemas multiagente, visión por computador, planificación y razonamiento, y deep learning.

## Trabajo final

**Spatio-temporal Gaze Estimation for Human-Machine and Human-Human Interaction** (feb 2020): el flujo óptico como nueva información temporal, junto a la cara y los ojos, para estimar la mirada en 3D desde cámaras remotas a media distancia.

[hdl.handle.net/2117/335288](http://hdl.handle.net/2117/335288)
`);
  f('formacion/grado-informatica.md', { kind: 'education', title: 'Grado en Ingeniería Informática', sub: 'UPC · sep 2013 – jun 2018', text: 'Especialidad en Computación: algoritmos, teoría de la computación, compiladores, IA y machine learning.' }, `
# Grado en Ingeniería Informática

\`UPC · sep 2013 – jun 2018\`

Especialidad en Computación: algoritmos (C++), teoría de la computación, programación funcional (Haskell), compiladores, inteligencia artificial (Java y Python), machine learning (Python y R) y lógica (Prolog).

## Trabajo final

**Plataforma web de búsqueda y recomendación de artículos científicos** (feb 2018): un «Netflix» para investigadores que encuentra los artículos relevantes con procesamiento del lenguaje natural y otras técnicas de machine learning.

[hdl.handle.net/2117/122563](http://hdl.handle.net/2117/122563)
`);
  f('formacion/certificaciones.md', { kind: 'education', title: 'Certificaciones', sub: '2020', text: 'ITIL 4 Foundation.' }, `
# Certificaciones

- **ITIL 4 Foundation** · 2020
`);

  // —— taller ——
  f('taller/home-assistant.yaml', { kind: 'hobby', title: 'Home Assistant · IoT', level: 4, text: 'Mi casa domótica, con dispositivos hechos por mí.' }, `
# Home Assistant · IoT — nivel 4/5 · Avanzado
# Mi casa domótica, con dispositivos hechos por mí.

homeassistant:
  name: Casa
  unit_system: metric

# Algunos dispositivos están en GitHub:
#   proyectos/embebido/esp8266-smartlight.md
#   proyectos/embebido/esp32-ble-keyboard.md
`);
  f('taller/pcb.md', { kind: 'hobby', title: 'Diseño de PCB', level: 3, text: 'Esquemas y placas para mis propios dispositivos.' }, `
# Diseño de PCB

Nivel: 3/5 · Competente

Esquemas y placas para mis propios dispositivos.

- [Quokka](../experiencia/startups/quokka.md): la electrónica de una nevera inteligente.
`);
  f('taller/cad-3d.md', { kind: 'hobby', title: 'CAD e impresión 3D', level: 3, text: 'Cajas, soportes y piezas a medida, diseñadas e impresas en casa.' }, `
# CAD e impresión 3D

Nivel: 3/5 · Competente

Cajas, soportes y piezas a medida, diseñadas e impresas en casa. También la enseñé en los cursos de verano de [JEDI](../experiencia/jedi.md), y hoy trabajo en el software de impresoras 3D de [HP](../experiencia/hp/README.md).
`);
  f('taller/escritorio.conf', { kind: 'hobby', title: 'Escritorio Linux', level: 5, text: 'Ajustar el escritorio hasta que hace exactamente lo que necesito.' }, `
# Escritorio Linux — nivel 5/5 · Experto
# Ajustar el escritorio hasta que hace exactamente lo que necesito.

[en_github]
audio = "proyectos/linux/freqaudio.md"
impresora = "proyectos/linux/brother-archlinux.md"

[estado]
terminado = false
`);

  f('contacto.json', { kind: 'contact', title: 'Contacto', text: 'Formulario, GitHub, LinkedIn y CV.' }, `
{
  "web": "${SITE}",
  "formulario": "/contacto",
  "github": "github.com/catunlock",
  "linkedin": "linkedin.com/in/alberto-lopez-sanchez",
  "cv": "/cv.pdf"
}
`);
  f('.secreto', { kind: 'secret', title: '.secreto', text: 'Si estás leyendo esto, ya lo has encontrado.' }, `
Has encontrado el archivo secreto.

No hay premio, pero hay truco. En cualquier parte de la página:

    ↑ ↑ ↓ ↓ ← → ← → B A
`);

  // Trayectoria como historial de git (más reciente primero)
  var COMMITS = [
    { hash: '9f3c2e1', refs: 'HEAD -> main, origin/hp', date: 'mar 2022 – hoy', msg: 'feat(hp): Software Engineer · firmware, seguridad y herramientas', file: 'experiencia/hp/README.md' },
    { hash: '7a41d0b', refs: '', date: 'ago 2021 – feb 2022', msg: 'feat(nuclia): indexación distribuida de NucliaDB en Rust', file: 'experiencia/nuclia.md' },
    { hash: 'c3b7e90', refs: '', date: 'dic 2020 – ago 2021', msg: 'feat(alba): control de equipos científicos en ALBA Synchrotron', file: 'experiencia/alba-synchrotron.md' },
    { hash: '52e8a9c', refs: '', date: 'ago 2020', msg: 'feat(proxishop): e-commerce de proximidad durante la COVID-19', file: 'experiencia/startups/proxishop.md' },
    { hash: 'b01dfac', refs: '', date: 'jun – dic 2019', msg: 'feat(quokka): electrónica de una nevera inteligente', file: 'experiencia/startups/quokka.md' },
    { hash: '4d2a6f3', refs: '', date: 'sep 2018 – feb 2020', msg: 'feat(upc): máster en Inteligencia Artificial', file: 'formacion/master-ia.md' },
    { hash: 'e81f00d', refs: '', date: 'may 2017 – sep 2020', msg: 'feat(jedi): profesor y responsable de formación', file: 'experiencia/jedi.md' },
    { hash: '1c0ffee', refs: '', date: 'sep 2013', msg: 'chore: primer commit — empiezo Ingeniería Informática', file: 'formacion/grado-informatica.md' }
  ];
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
      ['contacto', 'cómo escribirme'], ['theme [nombre]', 'cambia el tema'], ['clear', 'limpia la terminal (Ctrl+L)'], ['exit', 'cierra el panel']
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
      contacto: function () { if (api.open) api.open('contacto.json'); print('Lo más rápido es el formulario: <span class="c-path">' + SITE + '/contacto</span>\nTambién: GitHub (catunlock), LinkedIn y el CV, en ' + link('contacto.json')); },
      cv: function () { line('Descargando cv.pdf… (en la web real, aquí empieza la descarga)', 'c-dim'); },
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
      ping: function (a) { var h = a[0] || 'alberto'; print('PING ' + esc(h) + ': 56 bytes de datos.\n64 bytes de ' + esc(h) + ': icmp_seq=1 tiempo=un café\n64 bytes de ' + esc(h) + ': icmp_seq=2 tiempo=un café y medio\n<span class="c-dim">--- respuesta media: 1–2 días por ' + link('contacto.json', 'el formulario') + ' ---</span>'); },
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
      toast('Commit «' + esc(msg) + '» creado… en tu imaginación. Si va en serio, mándamelo por el formulario.', [{ label: 'Abrir contacto', run: function () { openFile('contacto.json'); } }]);
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
        { label: 'CV: Descargar', run: function () { toast('Descargando <b>cv.pdf</b>… (en la web real).'); } },
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
    function shortcuts() {
      dialog('Atajos de teclado', 'Ctrl+Shift+P paleta de comandos · Ctrl+P abrir archivo · Ctrl+ñ terminal · Ctrl+B barra lateral · Ctrl+Shift+E/F/G/X vistas · Esc cierra lo que flota. Y un código que quizá conozcas.', [{ label: 'Entendido', primary: true }]);
    }

    // —— menús ——
    var MENUS = {
      archivo: [['Abrir archivo…', 'Ctrl+P', function () { openPalette(false); }], ['Abrir README', '', function () { openFile('README.md'); }], ['Contacto', '', function () { openFile('contacto.json'); }], ['Descargar CV', '', function () { toast('Descargando <b>cv.pdf</b>… (en la web real).'); }], null, ['Cerrar ventana', '', closeWindow]],
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

  window.Portfolio = {
    site: SITE, files: FILES, dirs: DIRS, commits: COMMITS, LEVELS: LEVELS, KINDS: KINDS,
    resolve: resolve, children: children, langOf: langOf, icon: icon, level: level,
    highlight: function (code, lang) { var st = {}; return code.split('\n').map(function (l) { return hlLine(l, lang, st); }).join('\n'); },
    markdown: mdHTML, codeHTML: codeHTML, docHTML: docHTML, cardHTML: cardHTML, hover: hover,
    explorer: explorer, terminal: terminal, palette: palette, paletteHTML: paletteHTML, ico: ico, app: app
  };
})();
