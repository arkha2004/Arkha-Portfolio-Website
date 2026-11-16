# Arkha Portfolio

Personal portfolio built with Next.js, JavaScript, and Tailwind CSS.

## Getting started

Install dependencies and start the local development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Available scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Project structure

- `app/page.js` — composes the single-page portfolio
- `app/layout.js` — document shell and metadata
- `app/_components/site-nav.js` and `site-footer.js` — shared page chrome
- `app/_components/sections/` — Home, Projects, and Contact sections
- `app/_components/hero-links.js` — resume, profile, and email-copy interactions
- `app/globals.css` — global styles, design tokens, and the availability animation
- `public/` — resume and image assets served by the site
