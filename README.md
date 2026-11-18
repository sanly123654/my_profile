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
Set `site` in `astro.config.mjs` to the deployed URL.

## Deploy

`dist/` is a fully static site. It can be hosted on GitHub Pages, Netlify, Vercel, Cloudflare Pages or any static host.
