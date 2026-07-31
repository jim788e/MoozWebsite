import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: "https://www.mooz.top",
  adapter: vercel(),
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
