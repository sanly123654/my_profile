# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — runs `astro check` (TypeScript + `.astro` diagnostics) then `astro build` into `dist/`. A type error fails the build.
- `npm run check` — type-check only
- `npm run preview` — serve the built `dist/`

There is no test suite or linter; `npm run check` is the verification step.

## Architecture

Single-page static Astro site (`output: 'static'`, Astro 7, strict TS via `astro/tsconfigs/strict`). No UI framework integrations and no client-side JS.

- **Content is data, not markup.** Every piece of profile text lives in `src/data/profile.ts` (a typed `profile` object, arrays checked with `satisfies`). Components import it directly rather than receiving it via props. Change content there; change structure in components. Adding a new field means updating the interface in `profile.ts` and the component that renders it.
- `src/pages/index.astro` composes the page: `Hero` plus one `Section` per list (skills, experience, projects). `Section` is a generic titled wrapper that takes `title` and `id` and renders its slot.
- `src/layouts/BaseLayout.astro` owns `<head>` (meta, OG tags, canonical URL built from `site` in `astro.config.mjs`) and imports the global stylesheet.
- **Styling:** design tokens are CSS custom properties on `:root` in `src/styles/global.css`, with a dark palette under `prefers-color-scheme: dark`. Components use scoped `<style>` blocks that reference only these tokens, so add new colors as tokens, not hard-coded values. `.container` (max 760px, 16px side padding) is the page-width wrapper.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) is manual-only (`workflow_dispatch`, run from the Actions tab); pushing to `main` does not deploy. It publishes `dist/` to GitHub Pages at `https://sanly123654.github.io/my_profile/`. Because it is a project site, `astro.config.mjs` sets `base: '/my_profile'`: any root-relative URL to a `public/` asset or internal page must be prefixed with `import.meta.env.BASE_URL` (see the favicon link in `BaseLayout.astro`), or it will 404 in production while still working in a local setup without a base.
