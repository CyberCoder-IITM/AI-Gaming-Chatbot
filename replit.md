# BB AI

A React + Vite web app ported from a Next.js/Vercel project. Displays a simple landing page with a navbar (including the BB logo) and a hero section with the tagline "You Ask We Answer" and a "Get Started" button.

## Architecture

- **Frontend**: `artifacts/bb-ai/` — React + Vite app (Tailwind CSS v4, wouter routing, shadcn/ui components)
- **API Server**: `artifacts/api-server/` — Express server (not yet used by this app)
- **Preview path**: `/` (root)

## Key Files

- `artifacts/bb-ai/src/App.tsx` — Main app with wouter router
- `artifacts/bb-ai/src/components/Navbar.tsx` — Navigation bar with logo, Home, Chat, About us, Support Us links
- `artifacts/bb-ai/src/components/Hero.tsx` — Hero section with "You Ask We Answer" headline and "Get Started" button
- `artifacts/bb-ai/src/index.css` — Theme with brand colors (purple #8D16A6, cyan #01FFFC)
- `artifacts/bb-ai/public/bb_logo.png` — BB AI logo
- `artifacts/bb-ai/index.html` — Entry HTML with Inter font from Google Fonts

## Brand

- Primary color: Purple (`#8D16A6`)
- Accent color: Cyan (`#01FFFC`)
- Font: Inter

## Port Notes

Ported from Next.js 13 (App Router) to Vite + React:
- `next/image` → `<img>` tags
- `next/font/google` → Google Fonts `<link>` in index.html
- `app/page.js` → route component in App.tsx
- No API routes existed — api-server is scaffolded but unused
