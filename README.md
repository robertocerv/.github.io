# roberto-cervantes.com

This repository is the source for [roberto-cervantes.com](https://roberto-cervantes.com), Roberto Cervantes' professional portfolio site. It is a static site served via **GitHub Pages** from this repo (`robertocerv/.github.io`), with the custom domain configured through the `CNAME` file.

## Structure

```
.
├── index.html                          # Home — Hero, Summary, Expertise, Featured Projects, Experience, Education, Contact
├── projects/
│   ├── procurement-intelligence-portal.html    # Case study
│   └── intelligent-email-tracking-agent.html   # Case study
├── assets/
│   ├── styles.css
│   ├── script.js
│   ├── roberto-cervantes.jpg
│   ├── cv-roberto-cervantes-en.pdf     # Downloadable CV — English
│   ├── cv-roberto-cervantes-es.pdf     # Downloadable CV — Spanish
│   └── projects/                       # Images used by each case study page
├── CNAME                               # Custom domain: roberto-cervantes.com
└── README.md
```

## Previewing locally

No build step is required — open `index.html` directly in a browser, or use a tool like VS Code's **Live Server** extension to auto-reload on save.

## Deployment

Pushes to `main` are served automatically by GitHub Pages. `index.html` must stay at the repository root. DNS for `roberto-cervantes.com` points to GitHub Pages' IPs, with the domain configured under **Settings → Pages → Custom domain** in this repository.

## Adding a new project

1. Duplicate an existing file in `projects/` as a starting template for the new case study page.
2. Add its images under `assets/projects/<project-name>/`.
3. Add a new `<a class="project-row">` entry to the "Featured Projects" section in `index.html`, linking to the new page.
