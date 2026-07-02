# Portfolio — Kanhaiya Mehta

## Original problem statement
Build a modern, fully animated personal portfolio website. Single-page React app,
Vercel-deployable static site, fully responsive, smooth scroll, dark theme with
neon/gradient (cyan/violet) accents. Sections: Hero (cinematic typewriter intro
+ rotating subtitle + quantum circuit background), About, Achievements
(highlighted animated cards), Skills (categorized chips), Projects (glassmorphism
cards → modal), Research (separate academic paper-style card — QAOA/TPC-H),
Contact (icons + Download CV). Framer Motion animations, glassmorphism, drifting
gradient orbs behind everything, active-section navbar. Zero backend.

## Persona
Kanhaiya Mehta — B.Tech CSE, IIIT Dharwad. Full-stack dev, AI/ML engineer,
quantum computing researcher. Portfolio consumers: recruiters, hackathon
judges, research collaborators.

## User choices (2026-12)
- Animation: Framer Motion
- Fonts: Space Grotesk (display) + JetBrains Mono (body/mono)
- CV: placeholder link
- No profile photo — text-only hero + quantum circuit backdrop
- Kept CRA (react-scripts) template — deploys fine to Vercel as static

## Architecture
- Frontend-only React (CRA) SPA. No backend, no MongoDB writes.
- src/App.js orchestrates: Navbar + GradientOrbs + Hero + About + Achievements + Skills + Projects + Research + Contact.
- Data centralized in src/data/portfolio.js.
- Framer Motion for entrance/scroll animations; CSS + tailwind for orbs and quantum wires.

## What's implemented (2026-12)
- Hero cinematic sequence: "Hi..." → "Welcome" → gradient-glow "Kanhaiya Mehta" + rotating role subtitle + CTAs + scroll indicator.
- Animated quantum-circuit background (5 wires, H/X/RZ/CX/M gates, moving pulses, CX vertical links).
- Drifting gradient orbs (cyan/violet/magenta) as global background with grain + vignette.
- Fixed glass navbar with IntersectionObserver active-section highlight, layoutId underline animation, mobile menu.
- About: scroll fade+slide, 3 side stat cards.
- Achievements: 5 highlighted glass cards with gradient-border trick + colored glow blobs + gradient rank text.
- Skills: 6 category cards with staggered chip entrance and per-chip hover.
- Projects: 5 glassmorphism cards → animated modal (Escape/backdrop close, body scroll lock) with highlights + full tech stack + links.
- Research: dedicated academic paper-style card with side gradient accent, badges, abstract.
- Contact: icon links (GitHub, LinkedIn, email), Download CV placeholder button, footer.

## Backlog / next tasks
- P1: Replace CV placeholder with real PDF (in /public and update PROFILE.cv).
- P2: Add subtle magnetic-hover micro-interaction on CTA buttons.
- P2: Add /projects/:id deep-linking (currently modal state only).
- P2: SEO — add OG image + JSON-LD person schema.
- P3: Analytics events for project modal opens.
