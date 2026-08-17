---
name: testing-techconsult-spa
description: How to run and test the TechConsult CRA + React Router SPA locally, including SPA deep-link/refresh fallback verification.
---

# Testing the TechConsult SPA

## Running it
- Dev server: `npm start` (CRA, http://localhost:3000). Use `BROWSER=none` so it doesn't try to open a browser.
- Production build: `npm run build` then `npx serve -s build -l 5000`. The `-s` flag is what supplies the SPA history fallback — without it `serve` returns a 404 for `/team`, which is a good way to reproduce the "static host 404s on deep link" class of bug.
- Kill stale servers first: `ss -lntp | grep -E ':3000|:5000'` then `kill <pid>`.

## Routes / UI paths
Routes live in `src/App.jsx`; nav links in `src/components/Navbar.jsx` (`navLinks` array): `/`, `/services`, `/projects`, `/team`, `/contact`.
- Desktop navbar is `hidden md:flex` — it only appears when the window is wider than 768px.
- To exercise the mobile hamburger menu, shrink the window instead of using devtools:
  `wmctrl -r :ACTIVE: -b remove,maximized_vert,maximized_horz && wmctrl -r :ACTIVE: -e 0,20,20,430,760`
  Restore with `wmctrl -r :ACTIVE: -b add,maximized_vert,maximized_horz`.
- Page hero headings to assert on: Home "Transform Your Business with", Services "Our Services", Projects "Our Portfolio", Team "Meet Our Team", Contact "Get In Touch".

## Static-host fallback artifacts
Deep-link support on static hosts comes from three separate files — check all of them:
- `vercel.json` rewrite `/(.*)` -> `/index.html`
- `public/_redirects` (Netlify) `/*  /index.html  200`, copied to `build/_redirects`
- `build/404.html`, produced by the `build` script copying `index.html` (GitHub Pages). Verify with `cmp build/404.html build/index.html`.
Note: `npx serve build` (without `-s`) does NOT serve `404.html`, so it cannot be used to validate the GitHub Pages path locally — that one can only be verified by inspecting the file, or on a real GH Pages deploy.

## Known noise / pre-existing issues (don't report as new regressions)
- Dev console emits React warnings: duplicate `key` (mockData has repeated `id: 3`) and lowercase icon-tag casing warnings from `src/data/mockData.js` icon strings. The production build console is clean.
- Active navbar link uses `text-primary-600` (blue) which is invisible on the blue page heroes.
- The mobile dropdown menu has no opaque background over the hero, so items overlap page content.

## Devin Secrets Needed
None — everything runs locally with no credentials.
