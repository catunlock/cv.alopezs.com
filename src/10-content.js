  // ================= Content =================
  // From Alberto's CVs and github.com/catunlock. Skill levels (1–5) set by Alberto.
  var SITE = 'cv.alopezs.com', NAME = 'Alberto López Sánchez', LINKEDIN = 'https://www.linkedin.com/in/alberto-lopez-sanchez', GITHUB = 'https://github.com/catunlock';
  // Email aliases on alopezs.com (Cloudflare Email Routing), assembled at runtime so the full address never appears in the source.
  var MAIL_DOMAIN = ['alopezs', 'com'].join('.');
  function mail(user) { return user + '@' + MAIL_DOMAIN; }
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

## Contact

- Email: [${mail('hello')}](mailto:${mail('hello')})
- Hiring? [${mail('hire')}](mailto:${mail('hire')})
- ¿Prefieres escribir en español? [${mail('hola')}](mailto:${mail('hola')})
- [LinkedIn](https://www.linkedin.com/in/alberto-lopez-sanchez) · [GitHub](https://github.com/catunlock)
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

  f('contact.json', { kind: 'contact', title: 'Contact', text: 'Email, LinkedIn (with the full CV) and GitHub.' }, `
{
  "web": "https://${SITE}",
  "email": "${mail('hello')}",
  "hiring": "${mail('hire')}",
  "en_español": "${mail('hola')}",
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
