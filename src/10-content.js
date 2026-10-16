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
