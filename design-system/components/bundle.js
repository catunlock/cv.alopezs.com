/* Portfolio — un editor de código como portfolio: sistema de archivos, markdown, resaltado, terminal y la app completa. Sin dependencias. */
(function () {
  'use strict';
  // ================= Content =================
  // From Alberto's CVs and github.com/catunlock. Skill levels (1–5) set by Alberto.
  var SITE = 'cv.alopezs.com', NAME = 'Alberto López Sánchez', LINKEDIN = 'https://www.linkedin.com/in/alberto-lopez-sanchez', GITHUB = 'https://github.com/catunlock';
  var FILES = {}, DIRS = {};
  function f(path, meta, body) { FILES[path] = { path: path, meta: meta, body: body.replace(/^\n/, '').replace(/\s+$/, '') + '\n' }; }
  function d(path, text) { DIRS[path] = text; }

  var HP_SUMMARY = 'I develop software, firmware and development tools for embedded product platforms, combining hands-on engineering with technical leadership across teams and external partners.';
  var GH = 'https://github.com/catunlock/';

  d('experience', 'Where I have worked: HP, Nuclia, ALBA Synchrotron and JEDI, plus two startups of my own.');
  d('experience/hp', 'Software Engineer · Mar 2022 – present. One file per achievement.');
  d('experience/hp/achievements', 'One file per achievement: what, with what and what changed.');
  d('experience/startups', 'Projects I started that did not go far, but taught me a lot.');
  d('skills', 'What I can do, by area. Every file carries its level.');
  d('skills/languages', 'Programming languages, each one written in itself.');
  d('skills/systems', 'Firmware, security and virtualization.');
  d('skills/tools', 'Containers and continuous integration.');
  d('skills/data', 'Databases and search.');
  d('skills/ai', 'Machine learning: the master’s degree and what came after.');
  d('skills/web', 'Web and mobile frameworks.');
  d('skills/linux', 'My system for work and for fun.');
  d('skills/people', 'Leadership, agile and teaching.');
  d('projects', 'Personal projects on github.com/catunlock.');
  d('projects/embedded', 'Firmware and devices.');
  d('projects/tools', 'Command-line utilities, mostly in Rust.');
  d('projects/linux', 'Making my Linux do what I want.');
  d('projects/games', 'Graphics, engines and agents.');
  d('education', 'Bachelor’s and master’s degrees at UPC, and certifications.');
  d('lab', 'What I do for fun: IoT, PCBs, CAD, 3D printing and the desktop.');

  f('README.md', { kind: 'about', title: NAME, sub: 'Software Engineer · HP · Barcelona', text: 'Who I am, what I do and how to find your way around this site.' }, `
# Alberto López Sánchez

**Software Engineer at HP** · Barcelona

I’m a software engineer focused on R&D: I build systems from the ground up and have spent years building internal tools for other developers. I work across firmware, operating systems (Linux), hardware and virtualization.

I’ve worked at several startups and started projects of my own. I’m product-minded and put user feedback first; I’ve been a Scrum Master and a Technical Product Owner.

Outside work I build IoT devices for Home Assistant, design boards and parts, 3D print, and keep tuning a Linux desktop that is never quite finished. I’m interested in machine learning, LLMs and accelerated computing.

## Now

- [Software Engineer · HP](experience/hp/README.md) — Mar 2022 – present

## Before

- [Software Engineer · Nuclia](experience/nuclia.md) — Aug 2021 – Feb 2022
- [Software Engineer · ALBA Synchrotron](experience/alba-synchrotron.md) — Dec 2020 – Aug 2021
- [Instructor and head of education · JEDI](experience/jedi.md) — May 2017 – Sep 2020

## Education

- [M.S. in Artificial Intelligence · UPC](education/masters-ai.md) — 2018 – 2020
- [B.S. in Computer Science and Engineering · UPC](education/bachelors-cs.md) — 2013 – 2018

Spanish and Catalan (native) · English (C1).

## Getting around

- **Explorer**, on the left: experience, skills, projects, education and lab, each in its own folder. Hover over a file to see a summary.
- **Terminal**, at the bottom: drag the status bar up, or press Ctrl + backtick. Start with **help**.
- **Command palette**: \`Ctrl+Shift+P\`. To open a file by name, \`Ctrl+P\`.
- **Contact**: [LinkedIn](https://www.linkedin.com/in/alberto-lopez-sanchez) · [GitHub](https://github.com/catunlock).
`);

  var KN = '../../../skills/';
  f('experience/hp/README.md', { kind: 'work', title: 'Software Engineer · HP', sub: 'Mar 2022 – present · Barcelona', text: HP_SUMMARY }, `
# Software Engineer · HP

\`HP Inc · Barcelona · Mar 2022 – present\`

${HP_SUMMARY}

I work in the Foundations team for additive manufacturing (3D printing): base OS, security and system services, plus the internal tools to develop, package and distribute the software.

## Achievements

- [Firmware integration with CI and Docker](achievements/01-ci-docker.md)
- [Automated releases with computer vision](achievements/02-automated-releases.md)
- [Firmware security: Secure Boot, TPM and encryption](achievements/03-security.md)
- [Modernizing a 20+ year-old C++ codebase](achievements/04-cpp-modernization.md)
- [Integration testing with virtualization](achievements/05-virtualized-testing.md)
- [Field reliability: backup and recovery](achievements/06-reliability.md)
- [Manufacturing and repairability](achievements/07-manufacturing.md)
- [Technical delivery with external partners](achievements/08-partners.md)
- [Mentoring engineers and interns](achievements/09-mentoring.md)

## Stack

[C / C++](../../skills/languages/cpp.cpp) · [Python](../../skills/languages/python.py) · [Rust](../../skills/languages/rust.rs) · [C#](../../skills/languages/csharp.cs) · [Tcl](../../skills/languages/tcl.tcl) · [Linux and Bash](../../skills/linux/linux.sh) · [Docker](../../skills/tools/Dockerfile) · [CI/CD](../../skills/tools/ci.yml) · [Virtualization](../../skills/systems/virtualization.md)

[hp.com](https://www.hp.com)
`);
  [
    ['01-ci-docker', 'Firmware integration with CI and Docker', 'Built CI workflows and Docker-based tooling to automate firmware integration across multiple product platforms. Created reusable firmware tools, adopted across product teams, that simplify maintenance and support.', [['CI/CD', 'tools/ci.yml'], ['Docker', 'tools/Dockerfile'], ['Firmware', 'systems/firmware.md']]],
    ['02-automated-releases', 'Automated releases with computer vision', 'Built the infrastructure to automatically generate and publish firmware release components; with computer vision, the process frees up several hours of work every week.', [['Python', 'languages/python.py'], ['Machine learning', 'ai/machine-learning.md']]],
    ['03-security', 'Firmware security: Secure Boot, TPM and encryption', 'Led key security projects: Secure Boot with TPM (Trusted Platform Module) and disk encryption, protecting the company’s intellectual property. I also coordinate cybersecurity audit preparation, bringing together technical evidence and follow-up actions across disciplines.', [['Security', 'systems/security.md'], ['Firmware', 'systems/firmware.md']]],
    ['04-cpp-modernization', 'Modernizing a 20+ year-old C++ codebase', 'Designed and modernized core C++ components in a codebase more than 20 years old, keeping it scalable and maintainable, and raised code quality with unit and integration tests.', [['C / C++', 'languages/cpp.cpp']]],
    ['05-virtualized-testing', 'Integration testing with virtualization', 'Enhanced integration test coverage with advanced virtualization and emulation techniques.', [['Virtualization', 'systems/virtualization.md'], ['Linux', 'linux/linux.sh']]],
    ['06-reliability', 'Field reliability: backup and recovery', 'Designed and developed system backup and recovery capabilities, and engineered robust fixes for issues found in the field after launch, reducing field-support costs across several products.', [['Firmware', 'systems/firmware.md'], ['C / C++', 'languages/cpp.cpp']]],
    ['07-manufacturing', 'Manufacturing and repairability', 'Worked with other teams on secure, scalable solutions that simplified device manufacturing — lowering cost and raising the success rate — and improved repairability.', [['Firmware', 'systems/firmware.md'], ['Technical leadership', 'people/leadership.md']]],
    ['08-partners', 'Technical delivery with external partners', 'Led technical delivery with external partners, translating requirements into implementable solutions and coordinating dependencies across engineering teams.', [['Technical leadership', 'people/leadership.md']]],
    ['09-mentoring', 'Mentoring engineers and interns', 'Mentored engineers and interns, helping them build technical knowledge and contribute independently.', [['Mentoring and teaching', 'people/mentoring.md']]]
  ].forEach(function (l) {
    f('experience/hp/achievements/' + l[0] + '.md', { kind: 'achievement', title: l[1], sub: 'HP · Software Engineer', text: l[2] },
      '# ' + l[1] + '\n\n`HP · Software Engineer · Mar 2022 – present`\n\n' + l[2] + '\n\n**Stack:** ' +
      l[3].map(function (t) { return '[' + t[0] + '](' + KN + t[1] + ')'; }).join(' · ') + '\n');
  });

  f('experience/nuclia.md', { kind: 'work', title: 'Software Engineer · Nuclia', sub: 'Aug 2021 – Feb 2022 · Barcelona', text: 'NucliaDB: the distributed database behind an enterprise search engine for business documents.' }, `
# Software Engineer · Nuclia

\`NucliaDB · Barcelona · Aug 2021 – Feb 2022\`

Designed and implemented the indexing of NucliaDB, the distributed database behind an enterprise search engine for business documents: videos, images, podcasts and text.

- Extracted metadata, text and semantic representations from each media type to improve search accuracy and relevance.
- Applied data-processing techniques to improve the semantic understanding of documents.

**Stack:** [Rust](../skills/languages/rust.rs) · [Python](../skills/languages/python.py) · [Databases and search](../skills/data/search.sql) · [Docker](../skills/tools/Dockerfile) · gRPC

[nuclia.com](https://nuclia.com/)
`);
  f('experience/alba-synchrotron.md', { kind: 'work', title: 'Software Engineer · ALBA Synchrotron', sub: 'Dec 2020 – Aug 2021 · Barcelona', text: 'Data acquisition and control software for high-precision scientific equipment.' }, `
# Software Engineer · ALBA Synchrotron

\`Data acquisition and control · Dec 2020 – Aug 2021\`

Software to control high-precision devices in a distributed environment at a hard X-ray facility: accurate, reliable operation without exposure to radiation.

- Project lead for the control software of the MINERVA beamline.
- Integrated scientific equipment into the control software.
- Contributor to the open-source projects Sardana, PyTango and cppTango.

**Stack:** [C / C++](../skills/languages/cpp.cpp) · [Python](../skills/languages/python.py) · Cython

[cells.es](https://www.cells.es/en)
`);
  f('experience/jedi.md', { kind: 'work', title: 'Instructor · JEDI', sub: 'May 2017 – Sep 2020 · Barcelona', text: 'Head of education at the JEDI computer science student association, and teacher of its summer courses.' }, `
# Instructor and head of education · JEDI

\`Joves Estudiants d'Informàtica · May 2017 – Sep 2020\`

- Head of the education department.
- Taught the summer courses on machine learning, deep learning, robotics and 3D printing.

**Stack:** [Mentoring and teaching](../skills/people/mentoring.md) · [Machine learning](../skills/ai/machine-learning.md) · [CAD and 3D printing](../lab/cad-3d.md)
`);
  f('experience/startups/proxishop.md', { kind: 'work', title: 'Proxishop', sub: 'Aug 2020 · Android and iOS app', text: 'E-commerce so that farmers and small shops in Catalonia could keep selling during the lockdowns.' }, `
# Proxishop

\`Android and iOS app · Aug 2020\`

An e-commerce platform for local farmers and small businesses in Catalonia, built to keep the regional economy going during COVID-19: proximity commerce could keep running through the lockdowns.

**Stack:** [Flutter, Flask and SQLAlchemy](../../skills/web/frameworks.md) · [Python](../../skills/languages/python.py) · [PostgreSQL](../../skills/data/search.sql)

[App video](https://www.youtube.com/watch?v=pRpX1iOqmvw)
`);
  f('experience/startups/quokka.md', { kind: 'work', title: 'Quokka', sub: 'Jun – Dec 2019 · smart fridge', text: 'The electronics of a system that detects the items inside a fridge.' }, `
# Quokka · smart fridge

\`Jun – Dec 2019\`

Designed and programmed the electronics of a detection system inside a fridge to identify items, combining sensor integration and control logic for accurate, reliable detection.

**Stack:** [Firmware](../../skills/systems/firmware.md) · [PCB design](../../lab/pcb.md)

[getkombo.app](https://getkombo.app/)
`);

  // —— skills ——
  f('skills/languages/cpp.cpp', { kind: 'skill', title: 'C / C++', level: 4, text: 'System components and firmware; modernizing a 20+ year-old C++ codebase.' }, `
// C / C++ — level 4/5 · Advanced
// System components and firmware; modernizing a 20+ year-old C++ codebase.

#include <string>
#include <vector>

struct Use {
    std::string where;
    std::string what;
};

const std::vector<Use> uses = {
    {"HP", "core components in modern C++, with CMake and Google Test"},
    {"ALBA Synchrotron", "control of scientific equipment (C, C++, Cython)"},
    {"drm_display", "an image viewer for embedded systems (C)"},
    {"esp8266-smartlight", "a connected light (C++)"},
};

int main() {
    return 0;  // no warnings
}
`);
  f('skills/languages/rust.rs', { kind: 'skill', title: 'Rust', level: 4, text: 'NucliaDB’s indexing, and my own tools and embedded libraries.' }, `
//! Rust — level 4/5 · Advanced
//! NucliaDB's indexing, and my own tools and embedded libraries.

pub struct Use {
    pub place: &'static str,
    pub what: &'static str,
}

pub const USES: [Use; 4] = [
    Use { place: "Nuclia", what: "distributed indexing with Tantivy and gRPC" },
    Use { place: "esp32-ble-keyboard", what: "a BLE keyboard library for ESP32" },
    Use { place: "cat-rs", what: "cat, with superpowers" },
    Use { place: "file2wav", what: "hiding files inside a WAV" },
];

fn main() {
    for u in USES.iter() {
        println!("{}: {}", u.place, u.what);
    }
}
`);
  f('skills/languages/python.py', { kind: 'skill', title: 'Python', level: 5, text: 'Tooling and automation, scientific equipment control, backends and machine learning.' }, `
"""Python — level 5/5 · Expert

Tooling and automation, scientific equipment control, backends and machine learning.
"""

USES = {
    "HP": "internal tools and release automation",
    "Nuclia": "document processing for the search engine",
    "ALBA Synchrotron": "control with Sardana and PyTango",
    "Proxishop": "backend with Flask and SQLAlchemy",
    "M.S. in AI": "deep learning with Keras and TensorFlow",
}

if __name__ == "__main__":
    for place, what in USES.items():
        print(f"{place}: {what}")
`);
  f('skills/languages/csharp.cs', { kind: 'skill', title: 'C#', level: 3, text: 'Tools at HP, a game with multi-agent NPCs and the powerMeter backend.' }, `
// C# — level 3/5 · Competent
// Tools at HP, a game with multi-agent NPCs and the powerMeter backend.

using System;

var uses = new[] {
    ("HP", "internal tools"),
    ("Ourcraft", "deformable terrain and multi-agent NPCs"),
    ("powerMeter", "the meter's backend"),
};

foreach (var (place, what) in uses)
    Console.WriteLine($"{place}: {what}");
`);
  f('skills/languages/tcl.tcl', { kind: 'skill', title: 'Tcl', level: 3, text: 'Scripts and internal tools at HP.' }, `
# Tcl — level 3/5 · Competent
# Scripts and internal tools at HP.

set places {HP}

proc greet {place} {
    puts "tcl at $place"
}

foreach place $places {
    greet $place
}
`);
  f('skills/linux/linux.sh', { kind: 'skill', title: 'Linux and Bash', level: 5, text: 'The base OS at work and my desktop at home.' }, `
#!/usr/bin/env bash
# Linux and Bash — level 5/5 · Expert
# The base OS at work and my desktop at home.

set -euo pipefail

uses=(
    "HP: base OS and system services"
    "brother-archlinux: a Brother printer on Arch Linux"
    "FreqAudio: a GNOME extension for audio"
)

for use in "\${uses[@]}"; do
    echo "$use"
done
`);
  f('skills/systems/firmware.md', { kind: 'skill', title: 'Firmware', level: 5, text: 'Firmware and system software for embedded products, and the tools to maintain them.' }, `
# Firmware

Level: 5/5 · Expert

Firmware and system software for embedded products, and the tools to maintain them.

## Where

- [HP](../../experience/hp/README.md): integration across platforms, security, backup and recovery, manufacturing.
- [Quokka](../../experience/startups/quokka.md): the electronics of a smart fridge.
- [drm_display](../../projects/embedded/drm_display.md), [esp32-ble-keyboard](../../projects/embedded/esp32-ble-keyboard.md) and [powerMeter](../../projects/embedded/powermeter.md).
`);
  f('skills/systems/security.md', { kind: 'skill', title: 'Security', level: 3, text: 'Secure Boot with TPM, disk encryption and cybersecurity audits.' }, `
# Security

Level: 3/5 · Competent

Secure Boot with TPM, disk encryption and cybersecurity audit preparation.

## Where

- [HP · firmware security](../../experience/hp/achievements/03-security.md)
`);
  f('skills/systems/virtualization.md', { kind: 'skill', title: 'Virtualization', level: 5, text: 'QEMU and VMware to emulate the device and test firmware without the hardware.' }, `
# Virtualization

Level: 5/5 · Expert

QEMU and VMware to emulate the device and test firmware without depending on the hardware.

## Where

- [HP · integration testing with virtualization](../../experience/hp/achievements/05-virtualized-testing.md)
`);
  f('skills/tools/Dockerfile', { kind: 'skill', title: 'Docker', level: 5, text: 'Reproducible environments to build and integrate firmware, and to run services.' }, `
# Docker — level 5/5 · Expert
# Reproducible environments to build and integrate firmware (HP) and for services (Nuclia).
# Illustrative example: not the real configuration of any project.

FROM ubuntu:24.04
RUN apt-get update && apt-get install -y build-essential cmake
WORKDIR /fw
COPY . .
ENTRYPOINT ["make", "integration"]
`);
  f('skills/tools/ci.yml', { kind: 'skill', title: 'CI/CD', level: 4, text: 'Continuous-integration workflows for firmware across product platforms.' }, `
# CI/CD — level 4/5 · Advanced
# Continuous-integration workflows for firmware across product platforms (HP).
# Illustrative example: not the real configuration of any project.

name: firmware-integration
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        platform: [product-a, product-b, product-c]
    steps:
      - uses: actions/checkout@v4
      - name: Build in a container
        run: docker run --rm fw-builder --platform \${{ matrix.platform }}
`);
  f('skills/data/search.sql', { kind: 'skill', title: 'Databases and search', level: 3, text: 'A distributed database for a search engine, and good old SQL.' }, `
-- Databases and search — level 3/5 · Competent
-- A distributed database for a search engine, and good old SQL.

SELECT place, what
FROM uses
ORDER BY place;

-- Nuclia     | NucliaDB: distributed indexing with Tantivy and Redis
-- Proxishop  | PostgreSQL with SQLAlchemy
-- Also       | SQLite
`);
  f('skills/ai/machine-learning.md', { kind: 'skill', title: 'Machine learning', level: 3, text: 'M.S. in AI, computer vision and deep learning; these days, LLMs and accelerated computing.' }, `
# Machine learning

Level: 3/5 · Competent

M.S. in Artificial Intelligence: natural language processing, multi-agent systems, computer vision and deep learning. These days I’m into LLMs and accelerated computing.

## Where

- [M.S. in AI](../../education/masters-ai.md): 3D gaze estimation with optical flow.
- [HP](../../experience/hp/achievements/02-automated-releases.md): computer vision to automate releases.
- [JEDI](../../experience/jedi.md): summer courses on machine learning and deep learning.

With Keras and TensorFlow.
`);
  f('skills/web/frameworks.md', { kind: 'skill', title: 'Web and mobile', level: 3, text: 'Flask, Flutter, Nest.js and Angular.' }, `
# Web and mobile

Level: 3/5 · Competent

Flask, Flutter, Nest.js and Angular.

## Where

- [Proxishop](../../experience/startups/proxishop.md): a Flutter app with a Flask and PostgreSQL backend.
`);
  f('skills/people/leadership.md', { kind: 'skill', title: 'Technical leadership', level: 4, text: 'Technical delivery with external partners; Scrum Master and Technical Product Owner.' }, `
# Technical leadership

Level: 4/5 · Advanced

Technical delivery with external partners: turning requirements into implementable solutions and coordinating dependencies across teams. I’ve been a Scrum Master and a Technical Product Owner.

## Where

- [HP · technical delivery with external partners](../../experience/hp/achievements/08-partners.md)
- [ALBA Synchrotron](../../experience/alba-synchrotron.md): project lead for the MINERVA beamline control software.
`);
  f('skills/people/mentoring.md', { kind: 'skill', title: 'Mentoring and teaching', level: 4, text: 'Mentoring engineers and interns, and years of teaching at JEDI.' }, `
# Mentoring and teaching

Level: 4/5 · Advanced

Helping engineers and interns until they work independently, and explaining complex things simply.

## Where

- [HP · mentoring engineers and interns](../../experience/hp/achievements/09-mentoring.md)
- [JEDI](../../experience/jedi.md): head of education and summer-course teacher.
`);

  // —— projects (github.com/catunlock) ——
  [
    ['embedded/drm_display', 'drm_display', 'C · 2025', 'A DRM image viewer for embedded systems.', 'drm_display', [['C / C++', 'languages/cpp.cpp'], ['Linux', 'linux/linux.sh']]],
    ['embedded/esp32-ble-keyboard', 'esp32-ble-keyboard', 'Rust · 2023', 'A Bluetooth LE keyboard library for ESP32.', 'esp32-ble-keyboard', [['Rust', 'languages/rust.rs'], ['Firmware', 'systems/firmware.md']]],
    ['embedded/powermeter', 'powerMeter', 'C and C# · 2022', 'Firmware in C and a backend in C#, in two repositories.', 'powerMeter-firmware', [['C / C++', 'languages/cpp.cpp'], ['C#', 'languages/csharp.cs']]],
    ['embedded/esp8266-smartlight', 'esp8266-smartlight', 'C++ · 2017', 'Controls a relay to turn a light on and off, with plenty of features.', 'esp8266-smartlight', [['C / C++', 'languages/cpp.cpp']]],
    ['tools/cat-rs', 'cat-rs', 'Rust · 2023', 'The cat command reimplemented in Rust, with superpowers.', 'cat-rs', [['Rust', 'languages/rust.rs']]],
    ['tools/file2wav', 'file2wav', 'Rust · 2021', 'A steganography tool that hides any file inside a WAV audio file.', 'file2wav', [['Rust', 'languages/rust.rs']]],
    ['tools/r-means', 'r-means', 'Rust · 2020', 'A basic K-means implementation in Rust.', 'r-means', [['Rust', 'languages/rust.rs'], ['Machine learning', 'ai/machine-learning.md']]],
    ['linux/freqaudio', 'FreqAudio', 'JavaScript · 2017', 'A GNOME Shell extension to change the sample rate and sample format of your audio.', 'FreqAudio', [['Linux', 'linux/linux.sh']]],
    ['linux/brother-archlinux', 'brother-archlinux', 'Shell · 2016', 'A script to install a Brother MFC-5490CN (and similar models) in CUPS on Arch Linux.', 'brother-archlinux', [['Linux and Bash', 'linux/linux.sh']]],
    ['games/ourcraft', 'Ourcraft', 'C# · 2024', 'A deformable-terrain game with NPCs based on multi-agent systems.', 'Ourcraft', [['C#', 'languages/csharp.cs'], ['Machine learning', 'ai/machine-learning.md']]],
    ['games/dementia', 'Dementia', 'C++ · 2021', 'A 3D framework on DirectX 11.', 'Dementia', [['C / C++', 'languages/cpp.cpp']]]
  ].forEach(function (p) {
    f('projects/' + p[0] + '.md', { kind: 'project', title: p[1], sub: 'GitHub · ' + p[2], text: p[3] },
      '# ' + p[1] + '\n\n`' + p[2] + '`\n\n' + p[3] + '\n\n**Repository:** [github.com/catunlock/' + p[4] + '](' + GH + p[4] + ')\n\n**Stack:** ' +
      p[5].map(function (t) { return '[' + t[0] + '](../../skills/' + t[1] + ')'; }).join(' · ') + '\n');
  });

  // —— education ——
  f('education/masters-ai.md', { kind: 'education', title: 'M.S. in Artificial Intelligence', sub: 'UPC · Sep 2018 – Feb 2020', text: 'NLP, multi-agent systems, computer vision, planning and deep learning.' }, `
# M.S. in Artificial Intelligence

\`UPC · Sep 2018 – Feb 2020\`

Natural language processing, multi-agent systems, computer vision, planning and reasoning, and deep learning.

## Thesis

**Spatio-temporal Gaze Estimation for Human-Machine and Human-Human Interaction** (Feb 2020): optical flow as a new source of temporal information, alongside the face and eyes, to estimate 3D gaze from remote cameras at mid distance.

[hdl.handle.net/2117/335288](http://hdl.handle.net/2117/335288)
`);
  f('education/bachelors-cs.md', { kind: 'education', title: 'B.S. in Computer Science and Engineering', sub: 'UPC · Sep 2013 – Jun 2018', text: 'Specialized in Computing: algorithms, theory of computation, compilers, AI and machine learning.' }, `
# B.S. in Computer Science and Engineering

\`UPC · Sep 2013 – Jun 2018\`

Specialized in Computing: algorithms (C++), theory of computation, functional programming (Haskell), compilers, artificial intelligence (Java and Python), machine learning (Python and R) and logic (Prolog).

## Final project

**Web platform for the search and recommendation of scientific articles** (Feb 2018): a “Netflix” for researchers that finds the relevant papers using natural language processing and other machine-learning techniques.

[hdl.handle.net/2117/122563](http://hdl.handle.net/2117/122563)
`);
  f('education/certifications.md', { kind: 'education', title: 'Certifications', sub: '2020', text: 'ITIL 4 Foundation.' }, `
# Certifications

- **ITIL 4 Foundation** · 2020
`);

  // —— lab ——
  f('lab/home-assistant.yaml', { kind: 'hobby', title: 'Home Assistant · IoT', level: 4, text: 'My smart home, with devices I built myself.' }, `
# Home Assistant · IoT — level 4/5 · Advanced
# My smart home, with devices I built myself.

homeassistant:
  name: Home
  unit_system: metric

# Some of the devices are on GitHub:
#   projects/embedded/esp8266-smartlight.md
#   projects/embedded/esp32-ble-keyboard.md
`);
  f('lab/pcb.md', { kind: 'hobby', title: 'PCB design', level: 3, text: 'Schematics and boards for my own devices.' }, `
# PCB design

Level: 3/5 · Competent

Schematics and boards for my own devices.

- [Quokka](../experience/startups/quokka.md): the electronics of a smart fridge.
`);
  f('lab/cad-3d.md', { kind: 'hobby', title: 'CAD and 3D printing', level: 3, text: 'Enclosures, mounts and custom parts, designed and printed at home.' }, `
# CAD and 3D printing

Level: 3/5 · Competent

Enclosures, mounts and custom parts, designed and printed at home. I also taught it in the [JEDI](../experience/jedi.md) summer courses, and today I work on the software of [HP](../experience/hp/README.md)’s 3D printers.
`);
  f('lab/desktop.conf', { kind: 'hobby', title: 'Linux desktop', level: 5, text: 'Tuning my desktop until it does exactly what I need.' }, `
# Linux desktop — level 5/5 · Expert
# Tuning my desktop until it does exactly what I need.

[on_github]
audio = "projects/linux/freqaudio.md"
printer = "projects/linux/brother-archlinux.md"

[status]
finished = false
`);

  f('contact.json', { kind: 'contact', title: 'Contact', text: 'LinkedIn (with the full CV) and GitHub.' }, `
{
  "web": "https://${SITE}",
  "linkedin": "${LINKEDIN}",
  "github": "${GITHUB}"
}
`);
  f('.secret', { kind: 'secret', title: '.secret', text: 'If you are reading this, you already found it.' }, `
You found the secret file.

No prize, but there is a trick. Anywhere on the page:

    ↑ ↑ ↓ ↓ ← → ← → B A
`);

  // Career as a git history (newest first)
  var COMMITS = [
    { hash: '9f3c2e1', refs: 'HEAD -> main, origin/hp', date: 'Mar 2022 – present', msg: 'feat(hp): Software Engineer · firmware, security and tooling', file: 'experience/hp/README.md' },
    { hash: '7a41d0b', refs: '', date: 'Aug 2021 – Feb 2022', msg: 'feat(nuclia): distributed indexing for NucliaDB in Rust', file: 'experience/nuclia.md' },
    { hash: 'c3b7e90', refs: '', date: 'Dec 2020 – Aug 2021', msg: 'feat(alba): scientific equipment control at ALBA Synchrotron', file: 'experience/alba-synchrotron.md' },
    { hash: '52e8a9c', refs: '', date: 'Aug 2020', msg: 'feat(proxishop): local e-commerce during COVID-19', file: 'experience/startups/proxishop.md' },
    { hash: 'b01dfac', refs: '', date: 'Jun – Dec 2019', msg: 'feat(quokka): electronics for a smart fridge', file: 'experience/startups/quokka.md' },
    { hash: '4d2a6f3', refs: '', date: 'Sep 2018 – Feb 2020', msg: 'feat(upc): M.S. in Artificial Intelligence', file: 'education/masters-ai.md' },
    { hash: 'e81f00d', refs: '', date: 'May 2017 – Sep 2020', msg: 'feat(jedi): instructor and head of education', file: 'experience/jedi.md' },
    { hash: '1c0ffee', refs: '', date: 'Sep 2013', msg: 'chore: initial commit — starting Computer Science', file: 'education/bachelors-cs.md' }
  ];
  // ================= Utilidades =================
  var LEVELS = ['', 'Exploring', 'Basic', 'Competent', 'Advanced', 'Expert'];
  var KINDS = { about: 'About', work: 'Experience', achievement: 'Achievement', skill: 'Skill', hobby: 'Lab', project: 'Project', education: 'Education', contact: 'Contact', secret: '??' };
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
    var ORDER = ['experience', 'skills', 'projects', 'education', 'lab'], rank = function (c) { var k = dir ? -1 : ORDER.indexOf(c.name); return k < 0 ? 99 : k; };
    return out.sort(function (a, b) { return (b.dir - a.dir) || (rank(a) - rank(b)) || a.name.localeCompare(b.name, 'en'); });
  }
  function filesUnder(dir, hidden) { var pre = dir ? dir + '/' : ''; return Object.keys(FILES).filter(function (k) { return k.indexOf(pre) === 0 && (hidden || !/(^|\/)\./.test(k)); }); }
  function langOf(p) {
    var b = baseOf(p).toLowerCase();
    if (b === 'dockerfile') return 'dockerfile';
    var ext = b.lastIndexOf('.') > 0 ? b.slice(b.lastIndexOf('.') + 1) : '';
    return { md: 'markdown', rs: 'rust', c: 'c', cpp: 'cpp', cs: 'csharp', tcl: 'tcl', sql: 'sql', py: 'python', yml: 'yaml', yaml: 'yaml', json: 'json', toml: 'toml', conf: 'ini', sh: 'bash' }[ext] || 'text';
  }
  var LANG_NAME = { markdown: 'Markdown', rust: 'Rust', c: 'C', cpp: 'C++', csharp: 'C#', tcl: 'Tcl', sql: 'SQL', python: 'Python', yaml: 'YAML', json: 'JSON', toml: 'TOML', ini: 'Ini', bash: 'Shell Script', dockerfile: 'Dockerfile', text: 'Plain Text' };
  var ICON = { markdown: ['#', 'syn-func'], rust: ['R', 'syn-keyword'], c: ['C', 'syn-type'], cpp: ['C+', 'syn-type'], csharp: ['C#', 'syn-key'], tcl: ['T', 'syn-func'], sql: ['DB', 'syn-number'], python: ['py', 'syn-string'], yaml: ['≡', 'syn-key'], json: ['{}', 'syn-number'], toml: ['⚙', 'ink-muted'], ini: ['⚙', 'ink-muted'], bash: ['$', 'syn-string'], dockerfile: ['◫', 'syn-type'], text: ['·', 'ink-muted'] };
  function icon(p) { var i = ICON[langOf(p)]; return '<span class="vs-ficon" aria-hidden="true" style="color:var(--' + i[1] + ')">' + i[0] + '</span>'; }

  function level(l, opts) {
    opts = opts || {};
    var pips = '';
    for (var i = 1; i <= 5; i++) pips += '<span class="vs-pip' + (i <= l ? ' on' : '') + '"></span>';
    return '<span class="vs-level" role="img" aria-label="Level ' + l + ' of 5: ' + LEVELS[l] + '"><span class="vs-pips">' + pips + '</span>' +
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
      var t = buf.join(' '), lv = /^Level: (\d)\/5/.exec(t);
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
      return '<div class="vs-card"><div class="vs-card-kind">Folder<span>' + esc(path) + '/</span></div><div class="vs-card-title">' + esc(baseOf(path)) + '/</div>' +
        '<div class="vs-card-sub">' + n + (n === 1 ? ' file' : ' files') + '</div>' + (DIRS[path] ? '<p class="vs-card-text">' + esc(DIRS[path]) + '</p>' : '') + '</div>';
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
    'Make it work, then make it right, then make it fast. In that order.',
    'Firmware without logs is firmware with secrets.',
    'If you do it three times, automate it. If you do it twice, think about it.',
    'The best commit is the one you still understand six months later.',
    'It works on my machine. That is why Docker exists.'
  ];
  function lev(a, b) {
    var m = [], i, j;
    for (i = 0; i <= a.length; i++) { m[i] = [i]; for (j = 1; j <= b.length; j++) m[i][j] = i ? Math.min(m[i - 1][j] + 1, m[i][j - 1] + 1, m[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)) : j; }
    return m[a.length][b.length];
  }
  // Who the visitor is: `su <role>` switches, `exit` goes back. Any lowercase name works; these have their own lines.
  var DEFAULT_USER = 'recruiter';
  var ROLES = {
    recruiter: { hello: 'Signed in as recruiter. Start with README.md, or type hire if you are hiring.', whoami: "recruiter — and Alberto hopes you're hiring." },
    'hiring-manager': { hello: 'Welcome. The short version: git log. The long one: open experience/hp/README.md.', whoami: 'hiring-manager — the one who decides. No pressure.' },
    engineer: { hello: 'Welcome, fellow engineer. Try cat skills/languages/rust.rs or tree projects.', whoami: 'engineer — you have probably tried rm -rf / already.' },
    friend: { hello: 'Hey! Make yourself at home: the lab/ folder has the fun stuff.', whoami: 'friend — always welcome.' },
    'future-boss': { hello: 'Hello, boss. Shall we talk? Type hire.', whoami: 'future-boss — Alberto likes the sound of that.' },
    guest: { hello: 'Signed in as guest. Look around; nothing breaks.', whoami: 'guest' }
  };
  function terminal(el, api) {
    api = api || {};
    var cwd = '', hist = [], hi = 0, mode = 'sh', user = DEFAULT_USER, users = [];
    el.classList.add('vs-term');
    el.innerHTML = '<div class="vs-term-out" role="log" aria-live="polite"></div><div class="vs-term-line"><span class="vs-term-ps"></span><input class="vs-term-in" aria-label="Terminal: type a command" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"></div>';
    var out = el.querySelector('.vs-term-out'), input = el.querySelector('.vs-term-in'), ps = el.querySelector('.vs-term-ps');
    function promptHTML() { return '<span class="c-ok">' + esc(user) + '@alopezs</span>:<span class="c-path">' + (cwd ? '~/' + esc(cwd) : '~') + '</span>$ '; }
    function setPs() { ps.innerHTML = mode === 'vim' ? '<span class="c-dim">:</span>' : mode === 'busy' ? '' : promptHTML(); el.classList.toggle('is-busy', mode === 'busy'); }
    function print(html) { var dv = document.createElement('div'); dv.innerHTML = html; out.appendChild(dv); el.scrollTop = el.scrollHeight; return dv; }
    function line(text, cls) { return print(cls ? '<span class="' + cls + '">' + esc(text) + '</span>' : esc(text)); }
    function ext(url, label) { return '<a class="c-file" href="' + url + '" target="_blank" rel="noopener">' + esc(label || url.replace(/^https?:\/\/(www\.)?/, '')) + '</a>'; }
    function link(p, label) { return '<a href="#" class="c-file" data-open="' + esc(p) + '">' + esc(label || baseOf(p)) + '</a>'; }
    function nameHTML(c) { return c.dir ? '<span class="c-path">' + esc(c.name) + '/</span>' : link(c.path, c.name); }
    function target(arg) { return resolve(cwd, arg || '.'); }
    function exists(p) { return isFile(p) || isDir(p); }
    function pips(n) { var s = ''; for (var i = 1; i <= 5; i++) s += i <= n ? '■' : '□'; return s; }
    function pad(s, n) { s = String(s); while (s.length < n) s += ' '; return s; }
    function home() { return '/home/' + user; }
    function setUser(u) { user = u; setPs(); if (api.onUser) api.onUser(u); }
    function welcome() {
      print('<span class="c-dim">portfolio-sh 1.0 — signed in as</span> <span class="c-ok">' + esc(user) + '</span><span class="c-dim">. Type</span> <span class="c-ok">help</span> <span class="c-dim">to look around, or</span> <span class="c-ok">hire</span> <span class="c-dim">if you are hiring.</span>\n<span class="c-dim">Not a recruiter? Try</span> <span class="c-ok">su engineer</span><span class="c-dim">,</span> <span class="c-ok">su friend</span><span class="c-dim">…</span>');
    }

    var HELP = [
      ['help', 'this help'], ['ls [-a] [path]', 'list a folder'], ['cd <path>', 'change folder'], ['cat <file>', 'print a file'],
      ['open <file>', 'open it in the editor (also: code)'], ['tree [path]', 'folder tree'], ['grep <text>', 'search every file'],
      ['skills', 'skills and lab, with their levels'], ['git log', 'my career, as a commit history'], ['neofetch', 'system summary'],
      ['contact', 'how to reach me'], ['cv', 'the full CV'], ['su <role>', 'sign in as someone else (recruiter, engineer, friend…)'], ['theme [name]', 'change the theme'], ['clear', 'clear the terminal (Ctrl+L)'], ['exit', 'close the panel']
    ];
    var C = {
      help: function () { print(HELP.map(function (h) { return '<span class="c-ok">' + esc(pad(h[0], 18)) + '</span>' + esc(h[1]); }).join('\n') + '\n<span class="c-dim">Tab completes, ↑ ↓ walk the history. There are more commands than the ones listed here.</span>'); },
      ls: function (a) {
        var all = a.indexOf('-a') >= 0 || a.indexOf('-la') >= 0 || a.indexOf('-al') >= 0, long = /^-\w*l/.test(a.join(' ')), p = target(a.filter(function (x) { return x.charAt(0) !== '-'; })[0]);
        if (isFile(p)) return print(link(p));
        if (!isDir(p)) return line("ls: cannot access '" + p + "': No such file or directory", 'c-err');
        var items = children(p, all);
        if (long) return print(items.map(function (c) { var sz = c.dir ? 4096 : FILES[c.path].body.length; return (c.dir ? 'drwxr-xr-x' : '-rw-r--r--') + '  alberto  ' + pad(String(sz), 5) + '  ' + nameHTML(c); }).join('\n'));
        print((all ? '<span class="c-path">./</span>  <span class="c-path">../</span>  ' : '') + items.map(nameHTML).join('  '));
      },
      cd: function (a) {
        var p = a[0] === '-' ? cwd : target(a[0] || '~');
        if (isFile(p)) return line('cd: not a directory: ' + a[0], 'c-err');
        if (!isDir(p)) return line('cd: no such file or directory: ' + a[0], 'c-err');
        cwd = p;
      },
      pwd: function () { line(home() + (cwd ? '/' + cwd : '')); },
      cat: function (a) {
        if (!a[0]) return line('cat: missing file. Try: cat README.md', 'c-err');
        var p = target(a[0]);
        if (isDir(p) && !isFile(p)) return line('cat: ' + a[0] + ': Is a directory', 'c-err');
        if (!isFile(p)) return line('cat: ' + a[0] + ': No such file or directory', 'c-err');
        print('<span class="c-cat">' + esc(FILES[p].body.replace(/\n$/, '')) + '</span>');
      },
      open: function (a) {
        var p = target(a[0] || '.');
        if (isFile(p)) { api.open ? api.open(p) : 0; return line('Opened in the editor: ' + p, 'c-dim'); }
        if (isDir(p)) { api.reveal ? api.reveal(p) : 0; return line('Shown in the explorer: ' + (p || '~'), 'c-dim'); }
        line('open: not found: ' + a[0], 'c-err');
      },
      tree: function (a) {
        var root = target(a[0]), lines = [esc(root ? root + '/' : '.')];
        if (!isDir(root)) return line('tree: not a directory: ' + a[0], 'c-err');
        (function walk(dir, prefix) {
          var cs = children(dir, false);
          cs.forEach(function (c, i) { var last = i === cs.length - 1; lines.push('<span class="c-dim">' + prefix + (last ? '└── ' : '├── ') + '</span>' + nameHTML(c)); if (c.dir) walk(c.path, prefix + (last ? '    ' : '│   ')); });
        })(root, '');
        print(lines.join('\n'));
      },
      grep: function (a) {
        var q = a.filter(function (x) { return x.charAt(0) !== '-'; }).join(' ');
        if (!q) return line('grep: search for what? Try: grep firmware', 'c-err');
        var fq = fold(q), res = [];
        filesUnder('', false).forEach(function (p) {
          FILES[p].body.split('\n').forEach(function (l, i) {
            var k = fold(l).indexOf(fq);
            if (k >= 0) res.push(link(p, p) + '<span class="c-dim">:' + (i + 1) + ':</span> ' + esc(l.slice(0, k).trim().slice(-40)) + '<span class="c-hit">' + esc(l.substr(k, q.length)) + '</span>' + esc(l.slice(k + q.length).slice(0, 50)));
          });
        });
        if (!res.length) return line('No matches for "' + q + '".', 'c-dim');
        print(res.slice(0, 40).join('\n') + (res.length > 40 ? '\n<span class="c-dim">… and ' + (res.length - 40) + ' more</span>' : ''));
      },
      skills: function () {
        var rows = [], add = function (title, kind) {
          rows.push('<span class="c-warn">' + title + '</span>');
          Object.keys(FILES).forEach(function (p) { var m = FILES[p].meta; if (m && m.kind === kind && m.level) rows.push(link(p, pad(m.title, 22)) + ' <span class="c-ok">' + pips(m.level) + '</span>  ' + LEVELS[m.level]); });
        };
        add('SKILLS', 'skill'); rows.push(''); add('LAB', 'hobby');
        print(rows.join('\n'));
      },
      git: function (a) {
        var sub = a[0] || '';
        if (sub === 'log') {
          if (a.indexOf('--oneline') >= 0) return print(COMMITS.map(function (c) { return '<span class="c-warn">' + c.hash + '</span> ' + (c.refs ? '<span class="c-path">(' + esc(c.refs) + ')</span> ' : '') + '<a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>'; }).join('\n'));
          return print(COMMITS.map(function (c) { return '<span class="c-warn">commit ' + c.hash + '</span>' + (c.refs ? ' <span class="c-path">(' + esc(c.refs) + ')</span>' : '') + '\nAuthor: Alberto López\nDate:   ' + esc(c.date) + '\n\n    <a href="#" class="c-file" data-open="' + c.file + '">' + esc(c.msg) + '</a>\n'; }).join('\n'));
        }
        if (sub === 'status') return print("On branch main\nYour branch is up to date with 'origin/hp'.\n\nnothing to commit, working tree clean\n<span class=\"c-dim\">(apart from a couple of ideas for the next project)</span>");
        if (sub === 'blame') return line('Every line: Alberto López. Production bugs: the compiler.', 'c-dim');
        if (sub === 'push') return print('remote: No code accepted here, but ideas are welcome.\nremote: Write to me: ' + link('contact.json'));
        if (sub === 'checkout' || sub === 'switch') return print("<span class=\"c-err\">error: pathspec '" + esc(a[a.length - 1] || '') + "' did not match any branch yet.</span>\nShall we create it together? " + link('contact.json'));
        line("git: '" + sub + "' is not available here. Try git log or git status.", 'c-err');
      },
      neofetch: function () {
        var art = [' █████  ██      ', '██   ██ ██      ', '███████ ██      ', '██   ██ ██      ', '██   ██ ███████ ', '', '', '', '', ''];
        var info = ['<span class="c-ok">alberto</span>@<span class="c-ok">alopezs</span>', '<span class="c-dim">─────────────────</span>',
          '<span class="c-warn">Role</span>: Software Engineer', '<span class="c-warn">Company</span>: HP · Barcelona', '<span class="c-warn">Does</span>: firmware, security, tooling',
          '<span class="c-warn">Languages</span>: C++, Rust, Python, C#', '<span class="c-warn">Education</span>: M.S. in AI (UPC)', '<span class="c-warn">Lab</span>: IoT, PCB, 3D printing', '<span class="c-warn">Speaks</span>: es, ca, en (C1)', '<span class="c-warn">Theme</span>: ' + esc(api.theme ? api.theme() : 'night')];
        print(art.map(function (r, i) { return '<span class="c-ok">' + esc(r) + '</span>  ' + (info[i] || ''); }).join('\n'));
      },
      contact: function () { if (api.open) api.open('contact.json'); print('Write to me on LinkedIn: ' + ext(LINKEDIN) + '\nThe code, on GitHub: ' + ext(GITHUB)); },
      cv: function () { print('The full CV is on LinkedIn: ' + ext(LINKEDIN)); },
      theme: function (a) {
        var list = api.themes || ['night', 'day'];
        if (!a[0]) return print(list.filter(function (t) { return t !== 'pcb'; }).map(function (t) { return (api.theme && api.theme() === t ? '<span class="c-ok">● ' : '  ') + t + (api.theme && api.theme() === t ? '</span>' : ''); }).join('\n') + '\n<span class="c-dim">Usage: theme day</span>');
        if (list.indexOf(a[0]) < 0) return line("theme: unknown theme '" + a[0] + "'. Try: theme", 'c-err');
        if (api.setTheme) api.setTheme(a[0]);
        line('Theme: ' + a[0], 'c-ok');
      },
      history: function () { print(hist.map(function (h, i) { return '<span class="c-dim">' + pad(String(i + 1), 4) + '</span>' + esc(h); }).join('\n')); },
      echo: function (a) { line(a.join(' ')); },
      date: function () { line(new Date().toLocaleString('en-GB', { dateStyle: 'full', timeStyle: 'short' })); },
      whoami: function () { line(ROLES[user] ? ROLES[user].whoami : user); },
      su: function (a) {
        var name = a.filter(function (x) { return x !== '-' && x !== '-l' && x !== '--login'; })[0] || 'root';
        if (name === 'root') return line('su: Authentication failure — nice try, root stays with Alberto.', 'c-err');
        if (name === 'alberto') return line('su: Authentication failure — only Alberto gets to be Alberto.', 'c-err');
        if (!/^[a-z][a-z0-9_-]{0,19}$/.test(name)) return line("su: user '" + name + "' does not exist. Try: su " + Object.keys(ROLES).join(', su '), 'c-err');
        if (name === user) return line('Already signed in as ' + user + '.', 'c-dim');
        users.push(user); setUser(name);
        line(ROLES[name] ? ROLES[name].hello : 'Welcome, ' + name + '. Type help to look around.', 'c-dim');
      },
      hostname: function () { line(SITE); },
      uname: function (a) { line(a[0] === '-a' ? 'PortfolioOS 1.0 alopezs 6.0.0-alberto x86_64 GNU/Linux' : 'PortfolioOS'); },
      clear: function () { out.innerHTML = ''; },
      exit: function () { if (users.length) { setUser(users.pop()); return line('logout — back to ' + user + '.', 'c-dim'); } if (api.close) { api.close(); line('logout', 'c-dim'); } else line('logout (there is no panel to close here)', 'c-dim'); },
      man: function (a) {
        var h = HELP.filter(function (x) { return x[0].split(' ')[0] === a[0]; })[0];
        line(h ? a[0] + ' — ' + h[1] : 'No manual entry for ' + (a[0] || 'that') + '. Try help.', h ? '' : 'c-dim');
      },
      // —— not listed in help ——
      sudo: function (a) {
        if (a.join(' ') === 'make me a sandwich') return line('Okay.', 'c-ok');
        print('[sudo] password for ' + esc(user) + ': \n<span class="c-err">' + esc(user) + ' is not in the sudoers file. This incident will be reported.</span>\n<span class="c-dim">…but you can still type</span> <span class="c-ok">hire</span><span class="c-dim">.</span>');
      },
      rm: function (a) {
        if (a.indexOf('-rf') < 0 && a.indexOf('-fr') < 0) return line('rm: nothing gets deleted here; this is my career.', 'c-err');
        mode = 'busy'; setPs();
        var steps = ['experience', 'skills', 'projects', 'lab'], k = 0;
        (function next() {
          if (k < steps.length) { line("rm: removing '" + home() + '/' + steps[k++] + "'…", 'c-err'); return setTimeout(next, REDUCED ? 0 : 420); }
          line('Just kidding: this is a static site. Everything is still in place.', 'c-ok'); mode = 'sh'; setPs(); input.focus({ preventScroll: true });
        })();
      },
      vim: function (a) {
        mode = 'vim'; setPs();
        var rows = ''; for (var i = 0; i < 6; i++) rows += '<span class="c-dim">~</span>\n';
        print('<div class="c-vim">' + rows + '<span class="c-inv">"' + esc(a[0] || '[No Name]') + '" — NORMAL</span></div>');
        input.placeholder = ':q to quit… if you know how';
      },
      emacs: function () { line('Nice try. We use vim here.', 'c-dim'); C.vim([]); },
      nano: function () { line('nano: a sensible choice. But this terminal is make-believe.', 'c-dim'); },
      coffee: function () { print("<span class=\"c-err\">HTTP 418</span> I'm a teapot.\n<span class=\"c-dim\">(RFC 2324. For real coffee, write to me: " + link('contact.json') + ')</span>'); },
      make: function (a) { if (a[0] === 'coffee') return C.coffee(); line("make: *** No rule to make target '" + (a[0] || 'all') + "'.  Stop.", 'c-err'); },
      sl: function () {
        var train = ['      ====        ________                ', '  _D _|  |_______/        \\__I_I_____===__', '   |(_)---  |   H\\________/ |   |        |', '   /     |  |   H  |  |     |   |  ALB   |', '  |      |  |   H  |__--------------------|', '__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___', ' |/-=|___|=    ||    ||    ||    |_____/~\\', '  \\_/      \\O=====O=====O=====O_/      \\_/'];
        var dv = print('<div class="c-train-wrap"><pre class="c-train">' + esc(train.join('\n')) + '</pre></div>');
        if (REDUCED) return line('(you meant ls)', 'c-dim');
        mode = 'busy'; setPs();
        setTimeout(function () { dv.remove(); line('(you meant ls)', 'c-dim'); mode = 'sh'; setPs(); input.focus({ preventScroll: true }); }, 2600);
      },
      ping: function (a) { var h = a[0] || 'alberto'; print('PING ' + esc(h) + ': 56 data bytes\n64 bytes from ' + esc(h) + ': icmp_seq=1 time=one coffee\n64 bytes from ' + esc(h) + ': icmp_seq=2 time=a coffee and a half\n<span class="c-dim">--- 2 packets transmitted, 2 received. To actually talk: ' + link('contact.json') + ' ---</span>'); },
      pacman: function () { line('Arch? Respect. But nothing gets installed here.', 'c-dim'); },
      fortune: function () { line(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]); },
      cowsay: function (a) {
        var t = a.join(' ') || 'Moo. Type help.', bar = new Array(t.length + 3).join('-');
        print(' ' + bar.replace(/-/g, '_') + '\n< ' + esc(t) + ' >\n ' + bar + '\n        \\   ^__^\n         \\  (oo)\\_______\n            (__)\\       )\\/\\\n                ||----w |\n                ||     ||');
      },
      42: function () { line('The answer. Now we need the question.', 'c-dim'); },
      hello: function () { line('Hi! Type help to get started, or contact to talk.'); },
      hire: function () { line('Good idea.', 'c-ok'); C.contact(); }
    };
    C.code = C.open; C.vi = C.nvim = C.vim; C.fastfetch = C.neofetch; C.hi = C.hello;
    C.apt = C['apt-get'] = C.dnf = function () { line('E: You need to be root to install packages. And you are not.', 'c-err'); };
    C.ll = function (a) { C.ls(['-la'].concat(a)); }; C.logout = C.exit;

    function run(raw) {
      var text = raw.trim();
      if (mode === 'vim') {
        print('<span class="c-dim">:</span>' + esc(text.replace(/^:/, '')));
        if (/^:?(q|q!|wq|x|qa!?|wq!)$/.test(text)) { mode = 'sh'; input.placeholder = ''; setPs(); return line('You escaped vim. Few manage it on the first try.', 'c-ok'); }
        return print('<span class="c-err">E492: Not an editor command: ' + esc(text || '(nothing)') + '</span>  <span class="c-dim">hint: :q</span>');
      }
      print(promptHTML() + esc(text));
      if (!text) return;
      hist.push(text); hi = hist.length;
      if (/^rm\s+-(rf|fr)\s+\/?/.test(text)) return C.rm(['-rf']);
      var args = text.split(/\s+/), cmd = args.shift(), fn = C.hasOwnProperty(cmd) ? C[cmd] : null;
      if (fn) return fn(args);
      var best = Object.keys(C).filter(function (k) { return C[k] && k.length > 1; }).map(function (k) { return [k, lev(cmd, k)]; }).sort(function (x, y) { return x[1] - y[1]; })[0];
      print('<span class="c-err">' + esc(cmd) + ': command not found.</span>' + (best && best[1] <= 2 ? ' Did you mean <span class="c-ok">' + best[0] + '</span>?' : ' Try <span class="c-ok">help</span>.'));
    }
    function complete() {
      var v = input.value, parts = v.split(' '), last = parts[parts.length - 1], cands;
      if (parts.length === 1) cands = Object.keys(C).filter(function (k) { return C[k] && k.indexOf(last) === 0; });
      else if (parts[0] === 'su' && parts.length === 2) cands = Object.keys(ROLES).filter(function (k) { return k.indexOf(last) === 0; });
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
      else if (e.ctrlKey && (e.key === 'c' || e.key === 'C') && !window.getSelection().toString()) { e.preventDefault(); print((mode === 'vim' ? '' : promptHTML()) + esc(input.value) + '<span class="c-dim">^C</span>'); input.value = ''; if (mode === 'vim') { mode = 'sh'; setPs(); line('Fine, that works to quit vim too.', 'c-dim'); } }
    });
    el.addEventListener('click', function (e) {
      var a = e.target.closest('[data-open]');
      if (a) { e.preventDefault(); e.stopPropagation(); var p = a.getAttribute('data-open'); if (api.open) api.open(p); else C.cat([p]); return; }
      if (!window.getSelection().toString()) input.focus({ preventScroll: true });
    });
    setPs();
    welcome();
    return {
      run: function (t) { run(t); setPs(); }, focus: function () { input.focus({ preventScroll: true }); }, print: print,
      clear: function () { out.innerHTML = ''; }, reset: function () { out.innerHTML = ''; cwd = ''; mode = 'sh'; users = []; setUser(DEFAULT_USER); welcome(); },
      user: function () { return user; },
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
  function paletteHTML() { return '<div class="vs-palette" role="dialog" aria-label="Command palette"><input class="vs-pal-in" aria-label="Search" autocomplete="off" spellcheck="false"><div class="vs-pal-list" role="listbox"></div></div>'; }
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
      }).join('') : '<div class="vs-pal-empty">' + esc(mode.empty || 'No results') + '</div>';
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
    var THEMES = ['night', 'day', 'pcb'], THEME_NAME = { night: 'Night', day: 'Day', pcb: 'PCB' };
    var S = {
      view: 'explorer', sideOpen: true, side: 264, panelOpen: opts.panel !== false, panel: 220, lastPanel: 220, panelTab: 'terminal',
      tabs: ['README.md'], active: 'README.md', source: {}, hidden: false,
      theme: root.getAttribute('data-theme') || document.documentElement.getAttribute('data-theme') || 'night'
    };
    if (THEMES.indexOf(S.theme) < 0) S.theme = 'night';
    var narrow = function () { return root.offsetWidth < 720; };
    if (narrow()) { S.sideOpen = false; S.panelOpen = false; }
    root.classList.add('vs');
    root.innerHTML =
      '<header class="vs-title">' +
        '<span class="vs-mark" aria-hidden="true">AL</span>' +
        '<nav class="vs-menubar"><button data-menu="file">File</button><button data-menu="view">View</button><button data-menu="terminal">Terminal</button><button data-menu="help">Help</button></nav>' +
        '<button class="vs-cc" data-act="quick">' + ico('search', 14) + '<span>' + NAME + '</span></button>' +
        '<div class="vs-win"><button data-act="win-min" aria-label="Minimize">' + ico('min', 14) + '</button><button data-act="win-max" aria-label="Full screen">' + ico('max', 13) + '</button><button data-act="win-close" class="x" aria-label="Close">' + ico('close', 14) + '</button></div>' +
      '</header>' +
      '<div class="vs-body">' +
        '<nav class="vs-activity" aria-label="Views">' +
          '<button data-view="explorer" title="Explorer (Ctrl+Shift+E)" aria-label="Explorer">' + ico('files', 24) + '</button>' +
          '<button data-view="search" title="Search (Ctrl+Shift+F)" aria-label="Search">' + ico('search', 24) + '</button>' +
          '<button data-view="scm" title="Career (Ctrl+Shift+G)" aria-label="Career">' + ico('branch', 24) + '<span class="vs-badge">' + COMMITS.length + '</span></button>' +
          '<button data-view="ext" title="Skills (Ctrl+Shift+X)" aria-label="Skills">' + ico('blocks', 24) + '</button>' +
          '<span class="vs-act-spacer"></span>' +
          '<button data-act="account" title="Account" aria-label="Account">' + ico('user', 24) + '</button>' +
          '<button data-act="settings" title="Color theme" aria-label="Color theme">' + ico('sliders', 24) + '</button>' +
        '</nav>' +
        '<aside class="vs-side" aria-label="Sidebar"><div class="vs-side-head"><span class="vs-side-title"></span><span class="vs-side-actions"></span></div><div class="vs-side-body"></div></aside>' +
        '<div class="vs-sash vs-sash-v" title="Drag to resize"></div>' +
        '<main class="vs-main">' +
          '<div class="vs-tabbar"><div class="vs-tabs" role="tablist"></div><div class="vs-tab-actions"></div></div>' +
          '<div class="vs-crumbs"></div>' +
          '<div class="vs-editor" tabindex="-1"></div>' +
          '<div class="vs-sash vs-sash-h" title="Drag to open or resize the panel"></div>' +
          '<section class="vs-panel" aria-label="Panel">' +
            '<div class="vs-panel-head"><div class="vs-ptabs" role="tablist"><button data-ptab="problems">Problems <span class="vs-count">1</span></button><button data-ptab="output">Output</button><button data-ptab="terminal">Terminal</button><button data-ptab="ports">Ports</button></div>' +
            '<div class="vs-panel-actions"><button data-act="term-new" title="New terminal" aria-label="New terminal">' + ico('plus') + '</button><button data-act="term-clear" title="Clear" aria-label="Clear terminal">' + ico('trash') + '</button><button data-act="panel-max" title="Maximize panel" aria-label="Maximize panel">' + ico('up') + '</button><button data-act="panel-close" title="Close panel" aria-label="Close panel">' + ico('close') + '</button></div></div>' +
            '<div class="vs-panel-body"><div class="vs-pview" data-pview="terminal"></div><div class="vs-pview vs-plist" data-pview="problems"></div><div class="vs-pview vs-plist" data-pview="output"></div><div class="vs-pview vs-plist" data-pview="ports"></div></div>' +
          '</section>' +
        '</main>' +
      '</div>' +
      '<footer class="vs-status">' +
        '<button data-act="scm">' + ico('branch', 14) + 'main</button><button data-act="problems">' + ico('err', 14) + '0 ' + ico('warn', 14) + '1</button>' +
        '<span class="vs-status-fill" title="Drag up to open the terminal"></span>' +
        '<span class="vs-pos"></span><span>UTF-8</span><span>LF</span><button data-act="lang" class="vs-lang"></button><button data-act="settings" class="vs-themebtn"></button>' +
        '<button data-act="term-toggle">' + ico('term', 14) + 'Terminal</button><button data-act="bell" aria-label="Notifications">' + ico('bell', 14) + '</button>' +
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
      t.innerHTML = ico('info', 16) + '<div class="vs-toast-text">' + text + '</div><button class="vs-toast-x" aria-label="Dismiss">' + ico('close', 14) + '</button>' +
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
      if (!isFile(p)) { if (isDir(p)) return reveal(p); return toast('Not found: <b>' + esc(p) + '</b>.'); }
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
          (names[baseOf(p)] > 1 ? '<span class="vs-tab-desc">' + esc(dirOf(p) || '~') + '</span>' : '') + '<button class="vs-tab-x" data-close="' + esc(p) + '" aria-label="Close ' + esc(baseOf(p)) + '">' + ico('close', 14) + '</button></div>';
      }).join('');
      var md = S.active && langOf(S.active) === 'markdown';
      $('.vs-tab-actions').innerHTML = md ? '<button data-act="md-toggle" title="' + (S.source[S.active] ? 'Open preview' : 'Show source') + '" aria-label="' + (S.source[S.active] ? 'Open preview' : 'Show source') + '">' + ico(S.source[S.active] ? 'preview' : 'code') + '</button>' : '';
      var on = $('.vs-tab.on'); if (on) on.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
    function renderEditor() {
      var p = S.active, crumbs = $('.vs-crumbs');
      if (!p) {
        crumbs.innerHTML = '';
        editor.innerHTML = '<div class="vs-empty"><span class="vs-mark big" aria-hidden="true">AL</span><dl><dt>Show all commands</dt><dd><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd></dd><dt>Open file</dt><dd><kbd>Ctrl</kbd>+<kbd>P</kbd></dd><dt>Toggle terminal</dt><dd><kbd>Ctrl</kbd>+<kbd>`</kbd></dd><dt>Read the README</dt><dd><a href="#" class="vs-link" data-open="README.md">README.md</a></dd></dl></div>';
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
    var VIEW_TITLE = { explorer: 'Explorer', search: 'Search', scm: 'Career', ext: 'Skills' };
    function setView(v, force) {
      if (S.view === v && S.sideOpen && !force) { S.sideOpen = false; return layout(); }
      S.view = v; S.sideOpen = true; layout(); renderSide();
    }
    function renderSide() {
      root.querySelectorAll('.vs-activity [data-view]').forEach(function (b) { b.classList.toggle('on', b.getAttribute('data-view') === S.view && S.sideOpen); });
      $('.vs-side-title').textContent = VIEW_TITLE[S.view];
      var acts = $('.vs-side-actions');
      if (S.view === 'explorer') {
        acts.innerHTML = '<button data-act="toggle-hidden" title="' + (S.hidden ? 'Hide' : 'Show') + ' hidden files" aria-label="Hidden files">' + ico('eye') + '</button><button data-act="collapse" title="Collapse folders" aria-label="Collapse folders">' + ico('collapse') + '</button>';
        sideBody.innerHTML = '<div class="vs-sect">' + SITE + '</div><div class="vs-tree"></div>';
        exp = explorer(sideBody.querySelector('.vs-tree'), { open: exp ? exp.state.open : { experience: true, 'experience/hp': true, skills: true }, hidden: S.hidden, active: S.active, onOpen: function (p) { openFile(p, { keepFocus: true }); } });
      } else if (S.view === 'search') {
        acts.innerHTML = '';
        sideBody.innerHTML = '<div class="vs-sidebox"><input class="vs-field" data-search placeholder="Search all files" aria-label="Search"></div><div class="vs-results"></div>';
        var inp = sideBody.querySelector('[data-search]'); inp.value = S.query || ''; inp.focus({ preventScroll: true }); search(inp.value);
        inp.addEventListener('input', function () { S.query = inp.value; search(inp.value); });
      } else if (S.view === 'scm') {
        acts.innerHTML = '';
        sideBody.innerHTML = '<div class="vs-sidebox"><textarea class="vs-field" rows="2" data-commit placeholder="Message (Ctrl+Enter to commit on &quot;main&quot;)" aria-label="Commit message"></textarea><button class="vs-btn primary" data-act="commit">Commit</button></div>' +
          '<div class="vs-sect">History · main</div>' + COMMITS.map(function (c) {
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
        sideBody.innerHTML = '<div class="vs-sidebox"><input class="vs-field" data-extq placeholder="Filter skills" aria-label="Filter skills"></div>' + group('Installed', 'skill') + group('Lab', 'hobby');
        sideBody.querySelector('[data-extq]').addEventListener('input', function (e) {
          var q = fold(e.target.value);
          sideBody.querySelectorAll('.vs-ext').forEach(function (x) { x.style.display = fold(x.textContent).indexOf(q) >= 0 ? '' : 'none'; });
        });
      }
    }
    function search(q) {
      var box = sideBody.querySelector('.vs-results'); if (!box) return;
      if (!q || q.length < 2) { box.innerHTML = '<p class="vs-hint">Type at least two letters. Try “firmware” or “Rust”.</p>'; return; }
      var fq = fold(q), groups = [], total = 0;
      filesUnder('', S.hidden).forEach(function (p) {
        var hits = [];
        FILES[p].body.split('\n').forEach(function (l) { var k = fold(l).indexOf(fq); if (k >= 0) hits.push(esc(l.slice(Math.max(0, k - 24), k).replace(/^\S*\s/, '')) + '<mark>' + esc(l.substr(k, q.length)) + '</mark>' + esc(l.slice(k + q.length, k + q.length + 60))); });
        if (hits.length) { total += hits.length; groups.push('<div class="vs-sr-file" data-file="' + esc(p) + '">' + icon(p) + '<span>' + esc(baseOf(p)) + '</span><span class="vs-sr-dir">' + esc(dirOf(p)) + '</span><span class="vs-count">' + hits.length + '</span></div>' + hits.slice(0, 4).map(function (h) { return '<div class="vs-sr-line" data-file="' + esc(p) + '">' + h + '</div>'; }).join('')); }
      });
      box.innerHTML = '<p class="vs-hint">' + total + ' results in ' + groups.length + ' files</p>' + groups.join('');
    }
    function commit() {
      var t = sideBody.querySelector('[data-commit]'), msg = t ? t.value.trim() : '';
      if (!msg) return toast('No message. No changes. No rush.');
      t.value = '';
      toast('Commit “' + esc(msg) + '” created… in your imagination. If you mean it, write to me.', [{ label: 'Open contact', run: function () { openFile('contact.json'); } }]);
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
        { label: 'View: Toggle Terminal', kbd: 'Ctrl+`', run: toggleTerminal },
        { label: 'View: Explorer', kbd: 'Ctrl+Shift+E', run: function () { setView('explorer', true); } },
        { label: 'View: Search Files', kbd: 'Ctrl+Shift+F', run: function () { setView('search', true); } },
        { label: 'View: Career (History)', kbd: 'Ctrl+Shift+G', run: function () { setView('scm', true); } },
        { label: 'View: Skills', kbd: 'Ctrl+Shift+X', run: function () { setView('ext', true); } },
        { label: 'View: Toggle Sidebar', kbd: 'Ctrl+B', run: function () { S.sideOpen = !S.sideOpen; layout(); } },
        { label: 'Preferences: Color Theme', keep: true, run: themePicker },
        { label: 'File: Open README', run: function () { openFile('README.md'); } },
        { label: 'Contact: Write to Me', run: function () { openFile('contact.json'); } },
        { label: 'CV: View on LinkedIn', run: openCV },
        { label: 'Terminal: Run “neofetch”', run: function () { openPanel('terminal', true); term.run('neofetch'); } },
        { label: 'Coffee: Brew', run: function () { toast("<b>HTTP 418</b>: I'm a teapot."); } },
        { label: 'Help: Keyboard Shortcuts', run: shortcuts }
      ];
    }
    function themePicker() {
      pal.open(function (q) { return { query: q, items: THEMES.filter(function (t) { return t !== 'pcb' || S.theme === 'pcb'; }).map(function (t) { return { label: THEME_NAME[t], desc: t === S.theme ? 'current' : '', run: function () { setTheme(t); } }; }) }; }, '', 'Select a color theme');
      root.classList.add('has-palette');
    }
    function openPalette(cmd) {
      root.classList.add('has-palette');
      pal.open(function (q) {
        if (q.charAt(0) === '>') return { query: q.slice(1).trim(), items: commands(), empty: 'No matching commands' };
        return { query: q, items: fileItems(), empty: 'No matching files' };
      }, cmd ? '>' : '', cmd ? '' : 'Search files by name (type > for commands)');
    }
    function openCV() { window.open(LINKEDIN, '_blank', 'noopener'); }
    function shortcuts() {
      dialog('Keyboard shortcuts', 'Ctrl+Shift+P command palette · Ctrl+P open file · Ctrl+` terminal · Ctrl+B sidebar · Ctrl+Shift+E/F/G/X views · Esc closes anything floating. And a code you might know.', [{ label: 'Got it', primary: true }]);
    }

    // —— menús ——
    var MENUS = {
      file: [['Open File…', 'Ctrl+P', function () { openPalette(false); }], ['Open README', '', function () { openFile('README.md'); }], ['Contact', '', function () { openFile('contact.json'); }], ['View CV on LinkedIn', '', openCV], null, ['Close Window', '', closeWindow]],
      view: [['Command Palette…', 'Ctrl+Shift+P', function () { openPalette(true); }], null, ['Explorer', 'Ctrl+Shift+E', function () { setView('explorer', true); }], ['Search', 'Ctrl+Shift+F', function () { setView('search', true); }], ['Career', 'Ctrl+Shift+G', function () { setView('scm', true); }], ['Skills', 'Ctrl+Shift+X', function () { setView('ext', true); }], null, ['Terminal', 'Ctrl+`', toggleTerminal], ['Sidebar', 'Ctrl+B', function () { S.sideOpen = !S.sideOpen; layout(); }], ['Color Theme…', '', function () { themePicker(); }]],
      terminal: [['New Terminal', '', function () { openPanel('terminal', true); term.reset(); }], ['Clear Terminal', '', function () { term.clear(); }], ['Run “help”', '', function () { openPanel('terminal', true); term.run('help'); }]],
      help: [['Keyboard Shortcuts', '', shortcuts], ['About', '', function () { dialog('About', SITE + ' — the portfolio of ' + NAME + '. Version 1.0 · Handmade, no frameworks. Inspired by the code editors we all know.', [{ label: 'Close', primary: true }]); }]]
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
      dialog('Close the portfolio?', 'You have unsaved changes in your career: you have not written to me yet.', [
        { label: 'Write to me', primary: true, run: function () { openFile('contact.json'); } },
        { label: 'Close anyway', run: function () { toast('Websites don’t close from the inside. But thanks for trying.'); } },
        { label: 'Cancel' }]);
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
        case 'lang': return toast('Language mode: <b>' + esc(LANG_NAME[langOf(S.active)]) + '</b>. Detected automatically, nothing to change.');
        case 'settings': return themePicker();
        case 'account': return toast('Signed in as <b>' + esc(term.user()) + '</b>. Not you? Try <code>su engineer</code> in the terminal. For anything else, <a href="#" class="vs-link" data-open="contact.json">write to me</a>.');
        case 'bell': return toast('No new notifications. Enjoy the silence.');
        case 'md-toggle': S.source[S.active] = !S.source[S.active]; renderTabs(); return renderEditor();
        case 'toggle-hidden': S.hidden = !S.hidden; exp.setHidden(S.hidden); return renderSide();
        case 'collapse': return exp.collapse();
        case 'commit': return commit();
        case 'win-min': return toast('Minimize is not available: this portfolio wants to be read.');
        case 'win-max': if (root.requestFullscreen && !document.fullscreenElement) root.requestFullscreen().catch(function () { toast('Your browser does not allow full screen here.'); }); else if (document.exitFullscreen && document.fullscreenElement) document.exitFullscreen(); return;
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
      var prev = S.theme === 'pcb' ? 'night' : S.theme;
      setTheme('pcb');
      var inp = root.querySelector('.vs-term-in'); if (inp) inp.value = '';
      toast('<b>PCB mode on.</b> Firmware included. To go back: <code>theme ' + prev + '</code> in the terminal.', [{ label: 'Back to ' + THEME_NAME[prev], run: function () { setTheme(prev); } }]);
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
    root.querySelector('[data-pview="problems"]').innerHTML = '<div class="vs-prow">' + ico('warn', 16) + '<span>Running low on coffee.</span><span class="vs-sr-dir">portfolio · Ln 1, Col 1</span></div><div class="vs-prow muted">' + ico('info', 16) + '<span>0 errors. Everything compiles, at least here.</span></div>';
    root.querySelector('[data-pview="output"]').innerHTML = ['[info] Starting portfolio-sh 1.0', '[info] ' + Object.keys(FILES).length + ' files indexed in ' + Object.keys(DIRS).length + ' folders', '[info] Theme: ' + THEME_NAME[S.theme], '[info] Ready. Type help in the terminal.'].map(function (l) { return '<div>' + esc(l) + '</div>'; }).join('');
    root.querySelector('[data-pview="ports"]').innerHTML = '<p class="vs-hint">No forwarded ports. Better that way.</p>';
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
