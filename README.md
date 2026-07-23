# Nico Antonio — GIS Portfolio

Personal portfolio site for Antonio Augusto Santos ("Nico Antonio"), a GIS-specialist geographer with 12+ years of public-sector experience in Brazil, now working independently out of Turin, Italy. The site showcases geospatial analysis, cartography, and geodata engineering work for GIS/geodata clients.

**Live site:** https://antonio-nico-santos.github.io/gis-portfolio/

## About this project

This isn't a template portfolio with placeholder content — every case study is built from a real, worked analysis, with the underlying methodology documented rather than just the polished result. English is the primary and complete language; the Italian version (`src/pages/it/`) is currently a stub.

## Tech stack

- [Astro](https://astro.build/) 7 — static site generation
- [MapLibre GL JS](https://maplibre.org/) — interactive maps
- Deployed to GitHub Pages via GitHub Actions (`withastro/action`), auto-deployed on every push to `main` (see `.github/workflows/deploy.yml`)

## Project structure

```
src/
├── components/          # ChoroplethFigure, ContourBackground, Footer, InteractiveMap, Nav
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── en/               # English site (primary, complete)
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── case-study-torino/        # complete
│   │   └── case-study-worldbuilding/ # placeholder, in progress
│   └── it/                # Italian stub (not yet built out)
├── styles/
│   └── global.css
├── utils/
│   └── base.js
└── assets/images/
```

## Case studies

- **Torino: Urban Suitability Re-location** — With no chance to scout the city in person before a sudden move, this project uses open data (OpenStreetMap road network, ISTAT demographics, OMI housing prices, isochrone commute analysis, nursery-proximity modeling) to narrow down a neighborhood, a nursery with availability, and an affordable apartment, entirely from spatial analysis.
- **World-building (climate, biome, and hypsometry modeling)** — placeholder, in progress.

## Development

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

Requires Node.js ≥ 22.12.0 (see `engines` in `package.json`).

## i18n

Configured via Astro's built-in i18n routing (`en` default, `it` secondary — see `astro.config.mjs`). The `base` path is `/gis-portfolio`, matching the GitHub Pages project-site URL.

## Contact

antonio.nico.santos@gmail.com · [antonio-nico-santos.github.io/gis-portfolio/en/contact](https://antonio-nico-santos.github.io/gis-portfolio/en/contact)
