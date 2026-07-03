# Kanhaiya Mehta — Portfolio

Single-page portfolio built with React 19, Vite, Tailwind CSS, and Framer Motion.

## Development

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # serve the production build locally
```

## Editing content

All site content lives in [`src/data/portfolio.js`](src/data/portfolio.js) —
profile/links, about text, achievements, skill groups, projects (cards + modal
details), research paper info, and nav sections. Edit that file to change
content; the components in `src/components/` only render it.

## Structure

```
index.html              HTML shell (fonts, meta)
vite.config.js          Vite + React plugin, "@" → src alias
src/
├── main.jsx            entry (mounts App, reduced-motion config)
├── App.jsx             section layout
├── index.css           Tailwind + custom utilities (glass, gradients, circuit)
├── App.css             app-level overrides
├── data/portfolio.js   ← all content
└── components/         one component per section + Navbar, backgrounds
```

## Deploying to Vercel

The site is fully static — no server, no environment variables.

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project**, import the repo.
3. Vercel auto-detects Vite (build `npm run build`, output `dist/`). Accept and deploy.

Or from the CLI: `npx vercel` from the repo root.
