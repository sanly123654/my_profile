# Profile

A personal profile site built with [Astro](https://astro.build), output as plain static HTML.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to dist/
npm run preview   # serve dist/ locally
```

## Edit content

All text (name, bio, links, skills, experience, projects) lives in `src/data/profile.ts`.
## Deploy

Every push to `main` builds and deploys to GitHub Pages via `.github/workflows/deploy.yml`:
https://sanly123654.github.io/my_profile/

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

The site is served under the `/my_profile` sub-path (`base` in `astro.config.mjs`). If the repo is renamed or a custom domain is used, update `site` and `base` there.
