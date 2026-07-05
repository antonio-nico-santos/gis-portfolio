import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://antonio-nico-santos.github.io',
  base: '/gis-portfolio',
  i18n: {
    defaultLocale: "en",
    locales: ["en", "it"],
  },
});