# Personal Website (React + Vite)

A clean restart of the site using React, with hash-based routing so it works on GitHub Pages.

## Features

- Blank home route at `#/`
- Markdown routes at `#/md/:slug`
- Markdown files served from `public/docs/`
- GitHub Pages deployment via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Add Markdown Pages

1. Add a file under `public/docs/`.
2. Add an entry in `src/docs.js` with `slug`, `label`, and `file`.

## Deploy To GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages.

In your repository settings:

1. Go to **Settings > Pages**.
2. Set **Source** to **GitHub Actions**.

Then push to `main`.
