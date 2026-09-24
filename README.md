# Moyinoluwa Oso Ogooluwa — Portfolio

> "I follow the clues in the data until the bigger picture starts to make sense."

An editorial, dark, investigative personal site — question-led case studies,
real dashboard evidence, and an honest account of what is being explored next.
Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Lucide icons**.
Scroll reveals are a tiny hand-rolled IntersectionObserver — no animation
libraries, high performance.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (GitHub + Vercel)

1. Push this folder to a GitHub repository.
2. On [Vercel](https://vercel.com): **Add New → Project → Import** the repo.
3. Framework auto-detects (Next.js). Click **Deploy**.

## Before you ship — checklist

| What | Where |
| --- | --- |
| Your URLs (GitHub, LinkedIn, Medium ) | `src/data/links.ts` |
| Your real résumé (replace the placeholder) | `public/resume.pdf` |
| Your domain | `NEXT_PUBLIC_SITE_URL` env var in Vercel (fallback in `src/app/layout.tsx`) |
| Project copy, tools, links | `src/data/projects.ts` |
| Project screenshots / walkthrough videos | `public/images/projects/`, `public/video/` |

Empty strings in `links.ts` render as a subtle "coming soon" state — the site
never looks broken while you gather URLs.

## Structure

```
src/
├── app/
│   ├── layout.tsx          # SEO + Open Graph + fonts
│   ├── page.tsx            # the single-page experience
│   ├── work/[slug]/        # case study pages (auto-generated from projects.ts)
│   └── globals.css
├── components/             # one file per section
└── data/
    ├── links.ts            # all external links — the main file to edit
    └── projects.ts         # all projects: question → investigation → evidence → learnings
```

Each project entry in `projects.ts` is self-contained:

- `question` — the question the project investigates (leads the card + case study)
- `context` — one or two lines of background
- `investigation` — numbered paragraphs: what was explored and found
- `learnings` — what the work taught you
- `images` / `video` — the evidence, rendered as captioned exhibits
- `tools` — verified against the actual project files

## Notes

- Case-study numbers were transcribed from the actual dashboards — re-verify
  against your own notes before publishing.
- Videos are compressed walkthroughs (preload="none", so pages stay fast).
- Fonts: Fraunces (display serif), Inter (text), IBM Plex Mono (labels).
- All motion respects `prefers-reduced-motion`.
