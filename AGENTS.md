# MOOZ Website — Agent Guide

## Project

- Astro 7 landing page styled with Tailwind CSS and deployed through the Vercel adapter.
- Source code lives in `src/`; reusable UI belongs in `src/components/`, routes in `src/pages/`, and global CSS in `src/styles/globals.css`.
- `src/pages/api/stats.json.ts` is a server-rendered OpenSea stats endpoint. Keep `export const prerender = false`, preserve its cache headers, and never expose `OPENSEA_API_KEY` to client-side code.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

Run lint and a production build after code or dependency changes. Set `ASTRO_TELEMETRY_DISABLED=1` in restricted environments where Astro cannot write its telemetry configuration.

## Conventions

- Use TypeScript and Astro components; keep the strict TypeScript configuration intact.
- Prefer local optimized assets from `src/assets/` or `public/`; provide meaningful `alt` text for informational images.
- Keep visual changes responsive and preserve the existing design system before introducing new styles or libraries.
- Do not commit `.env` files, API keys, generated `dist/` output, `.vercel/`, or `node_modules/`.
- Keep dependency updates compatible with the Astro/Vercel adapter pair and verify deployment output with `npm run build`.
