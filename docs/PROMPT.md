# ⚙️ AI Prompt Playbook & Customization Guide

Turnkey prompts and recipes for AI coding assistants (**Antigravity**, **Cursor**, **Claude Code**, or **GitHub Copilot**) to maintain and update this academic portfolio.

---

## ✍️ Routine Content Authoring (Ongoing)

Use these copy-paste prompt templates when adding new academic materials to your website:

<details open>
<summary><b>📄 Adding a Publication</b></summary>

```markdown
Please add a new publication to `src/content/publications/` following `.agents/skills/content-operations/SKILL.md` and `docs/CONTENT.md`:

- Title: [Paper title, e.g. "FLASH: Fast Linked AF_XDP Sockets for High Performance Network Function Chains"]
- Category: [conferences | journals | books | preprints]
- Venue: [e.g. "ACM SoCC 2025"]
- Date: [YYYY-MM-DD]
- Authors: [List of authors, with asterisks for co-first authors if applicable]
- Links / Badges: [Paper PDF URL, arXiv URL, GitHub code URL, slides URL]
- BibTeX: [Raw BibTeX snippet or leave blank to generate from metadata]
- Abstract / Summary: [Paste paper abstract or notes]
```

</details>

<details>
<summary><b>💼 Adding a Portfolio Project</b></summary>

```markdown
Please add a new project to `src/content/portfolio/` following `.agents/skills/content-operations/SKILL.md` and `docs/CONTENT.md`:

- Title: [Project title]
- Date: [YYYY-MM-DD]
- Timeline: [e.g. "May – Jul 2025" or "Aug 2025 – Present"]
- Venue / Affiliation: [e.g. "Master's Thesis | Advisor: Prof. Mythili Vutukuru, IIT Bombay"]
- Links: [PDF report URL, code repo URL, or project page]
- Highlights:
  - [Key contribution or bullet point 1]
  - [Key contribution or bullet point 2]
```

</details>

<details>
<summary><b>🎤 Adding Talks & Presentations</b></summary>

```markdown
Please add a new talk to `src/content/talks/` following `.agents/skills/content-operations/SKILL.md` and `docs/CONTENT.md`:

- Title: [Talk title, e.g. "Kubernetes and eBPF Workshop"]
- Type: [Workshop | Keynote | Conference Talk | Seminar]
- Date: [YYYY-MM-DD]
- Venue: [Conference or department name, e.g. "IIIT Delhi"]
- Location: [City, State / Country]
- Links: [Slides PDF, recording URL, or conference link]
- Abstract: [Brief description or talk outline]
```

</details>

<details>
<summary><b>🎓 Adding Teaching & Courses</b></summary>

```markdown
Please add a new course to `src/content/teaching/` following `.agents/skills/content-operations/SKILL.md` and `docs/CONTENT.md`:

- Title: [Course title, e.g. "Operating Systems (CS 219) + Lab (CS 236)"]
- Semester: [e.g. "Autumn 2026" or "Spring 2026"]
- Role: [Teaching Assistant | Instructor | Guest Lecturer]
- Institution: [Department or university name, e.g. "IIT Bombay"]
- Instructor: [Instructor name and link, e.g. "[Prof. Purushottam Kulkarni](https://www.cse.iitb.ac.in/~puru/)"]
```

</details>

<details>
<summary><b>📝 Writing a Blog Post with Math</b></summary>

```markdown
Please create a new blog post in `src/content/blog/` following `.agents/skills/content-operations/SKILL.md` and `docs/MARKDOWN.md`:

- Title: [Post title, supports inline math like $E=mc^2$]
- Date: [YYYY-MM-DD]
- Tags: [List of tags]
- Description: [Brief summary for SEO and feed]
- Topic / Draft: [Topic outline, equations to typeset in KaTeX, and key takeaways]
```

</details>

<details>
<summary><b>📋 Updating the Structured CV</b></summary>

```markdown
Please update my CV in `src/data/cv.ts` and `src/pages/cv.astro`:

- Section to update: [Education | Internships | Honors and Fellowships | Academic Service | Skills]
- Details to add / modify: [Paste new entry details including dates, institutions, roles, links]
```

</details>

---

## 🔄 Template Upgrades & Synchronization (Maintenance)

When new releases are published in `academicpages-astro`, update your site with:

> [!TIP]
> **Template Upgrade Prompt**:
>
> ```markdown
> Please upgrade my website with the latest template improvements from `academicpages-astro` following `.agents/skills/template-sync/SKILL.md` and `docs/SYNC.md`.
> ```

---

## 📚 Related Documentation

- [`docs/CONFIG.md`](CONFIG.md) &mdash; Author profile handles, site metadata, and base URL resolution
- [`docs/CONTENT.md`](CONTENT.md) &mdash; Content collection schemas, frontmatter fields, and BibTeX format
- [`docs/MARKDOWN.md`](MARKDOWN.md) &mdash; Mathematical typesetting ($\LaTeX$ / KaTeX), tables, callouts, and diagrams
- [`docs/SYNC.md`](SYNC.md) &mdash; Upstream template upgrade workflow via ephemeral patches
