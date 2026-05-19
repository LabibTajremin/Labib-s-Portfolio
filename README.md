# Labib Tajremin — Portfolio

A premium, modern personal portfolio website for Labib Tajremin — Software Engineer
specializing in scalable SaaS, multi-tenant architecture, .NET, React, and Azure.

Built with the App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui
primitives — designed to feel like a top-tier international developer portfolio.

---

## Features

- Animated hero with role-rotator typewriter, conic-gradient avatar, floating badges
- About section with bio, stats, and animated career timeline
- 9 categorized skills cards with hover gradient reveals
- Projects section with category filtering and Framer Motion layout animations
- Alternating-side experience timeline
- 8 services derived from real expertise
- Education + competencies grid
- Contact section with validated form (react-hook-form) and toast notifications (sonner)
- Light / dark mode toggle with `next-themes` (persisted)
- Glassmorphism navbar with active section highlighting and mobile menu
- Scroll progress bar, ambient gradient orbs, grid background
- Full SEO: metadata, Open Graph, Twitter card, sitemap, robots
- Resume + Cover Letter view/download (PDFs served from `/public`)
- Fully responsive (mobile → tablet → desktop → ultrawide)
- Accessible: ARIA labels, keyboard navigation, focus rings

---

## Tech Stack

| Layer          | Choice                          |
| -------------- | ------------------------------- |
| Framework      | Next.js 14 (App Router)         |
| Language       | TypeScript 5                    |
| Styling        | Tailwind CSS 3, CSS variables   |
| UI Primitives  | shadcn/ui patterns + Radix      |
| Animation      | Framer Motion 11                |
| Icons          | Lucide React                    |
| Theme          | next-themes                     |
| Forms          | react-hook-form + sonner toasts |
| Fonts          | Inter, Space Grotesk, JetBrains Mono (via `next/font`) |

---

## Project Structure

```
portfolio/
├── app/                       # App Router pages and root layout
│   ├── globals.css            # Tailwind base + design tokens
│   ├── layout.tsx             # Root layout (fonts, theme, metadata)
│   ├── page.tsx               # Homepage composition
│   ├── robots.ts              # robots.txt route
│   └── sitemap.ts             # sitemap.xml route
├── components/
│   ├── layout/                # Navbar, footer, scroll progress, etc.
│   ├── sections/              # Hero, About, Skills, Projects, ...
│   ├── ui/                    # shadcn-style primitives
│   └── theme-provider.tsx
├── data/                      # Typed content layer (single source of truth)
│   ├── personalInfo.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── achievements.ts
│   ├── services.ts
│   └── socialLinks.ts
├── hooks/                     # use-active-section, use-mounted
├── lib/utils.ts               # cn() + siteConfig
├── public/                    # Static assets (resume.pdf, cover-letter.pdf, favicon)
└── types/                     # Shared TypeScript interfaces
```

---

## Installation & Development

Requires **Node.js 18.17+** and **npm 9+** (or pnpm/yarn).

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → open http://localhost:3000
```

---

## Build & Production

```bash
npm run build   # produces .next/ production build
npm run start   # serves the production build
npm run lint    # ESLint check
```

---

## Deployment

### Vercel (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Import the project at https://vercel.com/new.
3. Vercel auto-detects Next.js — no extra configuration needed.
4. Set the production domain and you're live.

### Netlify

1. Push the repo.
2. Create a new site from Git.
3. Build command: `npm run build` · Publish directory: `.next` (use the official
   [Next.js runtime plugin](https://github.com/netlify/next-runtime)).

### Self-hosting

```bash
npm run build && npm run start
```

Place behind a reverse proxy (nginx, Caddy) on port 3000.

---

## Customization Guide

Every piece of content lives in `/data` as typed TypeScript — no markup edits needed
for normal updates.

- **Personal info, taglines, bio, stats** → `data/personalInfo.ts`
- **Skill categories & competencies** → `data/skills.ts`
- **Projects** (add/remove cards, set categories, status) → `data/projects.ts`
- **Experience timeline entries** → `data/experience.ts`
- **Education & career journey** → `data/achievements.ts`
- **Services offered** → `data/services.ts`
- **Social links** → `data/socialLinks.ts`

### Design tokens

Colors, radii and the brand gradient are defined as HSL CSS variables in
`app/globals.css` (under `:root` and `.dark`). Adjust `--brand-violet`,
`--brand-cyan`, and `--brand-pink` to re-skin the entire site.

### Documents

Replace `public/resume.pdf` and `public/cover-letter.pdf` with your own files —
the View / Download buttons reference these paths directly.

### SEO

Edit `siteConfig` in `lib/utils.ts` (name, title, description, url, keywords).
The root layout in `app/layout.tsx` wires these into `<head>`, OG tags, Twitter
metadata, sitemap, and robots automatically.

---

## License

© Labib Tajremin. All rights reserved.
