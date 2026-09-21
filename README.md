# 🌐 Academic Website — Arghyadip Chakraborty

[![Website](https://img.shields.io/badge/Website-arghyac.com-0ea1c5?logo=google-chrome&logoColor=white)](https://arghyac.com)
[![Astro 7](https://img.shields.io/badge/Astro-v7-BC52EE?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen?logo=git&logoColor=white)](https://commitizen.github.io/cz-cli/)
[![License](https://img.shields.io/github/license/arghyadipchak/homepage?color=8250DF)](LICENSE)

The personal academic website and research portfolio of [**Arghyadip Chakraborty**](https://github.com/arghyadipchak).

🌐 **Live Website**: [arghyac.com](https://arghyac.com)

> [!TIP]
> **Looking to create your own academic website?**  
> This site is powered by the [**academicpages-astro**](https://github.com/arghyadipchak/academicpages-astro) template. If you would like to build a similar academic portfolio with Astro 7 and Tailwind CSS v4, check out the [academicpages-astro repository](https://github.com/arghyadipchak/academicpages-astro) and click **"Use this template"** to get started.

---

## 🛠️ Tech Stack

| Layer                  | Technologies                                                                                  |
| :--------------------- | :-------------------------------------------------------------------------------------------- |
| **Framework**          | [Astro 7](https://astro.build/)                                                               |
| **Language**           | [TypeScript 5](https://www.typescriptlang.org/) (Strict mode)                                 |
| **Styling & Design**   | [Tailwind CSS v4](https://tailwindcss.com/)                                                   |
| **Math Engine**        | [KaTeX](https://katex.org/) (via `remark-math`, `rehype-katex`, and `marked-katex-extension`) |
| **Icons**              | [Astro Icon](https://www.astro-icon.dev/) (`academicons`, `fa6-brands`, `fa6-solid`)          |
| **Search Engine**      | Fast client-side modal search (`/api/search.json`)                                            |
| **Hosting & CDN**      | [Cloudflare Pages](https://pages.cloudflare.com/)                                             |
| **Automation & CI/CD** | GitHub Actions (`ci.yml`), Dependabot                                                         |
| **Package Manager**    | [pnpm](https://pnpm.io/)                                                                      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `>= 22.11.0` (Node 22, 24, or 26+)
- [pnpm](https://pnpm.io/) `>= 11.0.0`

### Local Development

```bash
# 1. Install dependencies
pnpm install

# 2. Start local development server
pnpm dev
```

Visit `http://localhost:4321` in your browser.

### Quality Verification & Production Build

```bash
# Verify code quality (lint, format check, and typecheck)
pnpm verify

# Build static production site to dist/
pnpm build

# Preview production build locally
pnpm preview
```

---

## 📚 Documentation & Guides

- [**AI Prompt Playbook**](docs/PROMPT.md) &mdash; Turnkey prompts for AI coding assistants to add publications, projects, talks, and courses
- [**Site Configuration**](docs/CONFIG.md) &mdash; Author profile handles, site metadata, and settings
- [**Content Authoring**](docs/CONTENT.md) &mdash; Schema rules and frontmatter references for collections
- [**Markdown & Math**](docs/MARKDOWN.md) &mdash; Mathematical equation ($\LaTeX$ / KaTeX), table, and Mermaid syntax guide
- [**Template Synchronization**](docs/SYNC.md) &mdash; Tag-to-tag upstream template upgrade runbook

---

## 📄 License & Attribution

- **Source Code**: Licensed under the [MIT License](LICENSE)
- **Template Heritage**: Built upon [`academicpages-astro`](https://github.com/arghyadipchak/academicpages-astro), adapted from the original [AcademicPages](https://github.com/academicpages/academicpages.github.io)
- **Personal Content**: All personal writings, notes, and site content © 2026 Arghyadip Chakraborty; publications and preprints remain subject to publisher agreements
