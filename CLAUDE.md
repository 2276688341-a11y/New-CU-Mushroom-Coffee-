# CLUB UNDEFINED — Claude Code Guidance

## Project Overview

CLUB UNDEFINED is a high-end minimalist brand website for a low-caffeine coffee product (freeze-dried coffee + L-theanine + Lion's Mane). Single-page Next.js site. Dark mode only. Massive whitespace. Typography-driven.

## Key Principles

- NEVER use warm colors, brown, wood, coffee shop aesthetic, tech blue, cyberpunk, meditation-app style
- NEVER use "Buy Now", "Shop Now", or purchase-oriented language
- ALWAYS favor restraint: more whitespace, less content, slower animations
- Animation rhythm = "deep breathing", not flashy effects
- CTA language: "Join the waitlist", "Early access", "Stay updated"

## Standard Files

- **Design guidelines**: [/docs/design-guidelines.md](docs/design-guidelines.md)
- **Technical specifications**: [/docs/tech-specs.md](docs/tech-specs.md)
- **Development requirements**: [/docs/dev-requirements.md](docs/dev-requirements.md)
- **Execution steps**: [/docs/execution-steps.md](docs/execution-steps.md)
- **Dev log**: [/devlog/](devlog/) (daily entries)

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4 (CSS-first config, `@theme inline` blocks, no `tailwind.config.ts`)
- Motion (import from `"motion/react"`, formerly framer-motion)
- TypeScript, Inter font via `next/font/google`

## Directory Structure

```
src/
├── app/            # layout.tsx, page.tsx, globals.css
├── components/
│   ├── layout/     # Navbar, Footer, GrainOverlay
│   ├── sections/   # Hero, Problem, Solution, ProductShowcase, Waitlist
│   ├── ui/         # CTAButton, SectionHeading, Divider, BreathingElement
│   └── motion/     # FadeIn, ParallaxSlow
├── lib/            # constants.ts (all copy), utils.ts
└── types/          # TypeScript interfaces
```

## Design Tokens (globals.css)

- `--bg`: #0A0A0A (main background)
- `--surface`: #111111 (section background)
- `--surface-elevated`: #1A1A1A (elevated surface)
- `--text-primary`: #FAFAFA (headings)
- `--text-secondary`: #A3A3A3 (body)
- `--text-tertiary`: #737373 (muted)
- `--border`: #2A2A2A (borders)
- `--accent`: #FAFAFA (accent)

## Font Hierarchy

- Brand name: weight 300, tracking-[0.3em], uppercase
- Section headings: weight 300, tracking-[0.08em]
- Card titles: weight 400, tracking-[0.2em], uppercase
- Body: weight 300
- Labels/CTAs: weight 400, tracking-[0.2em], uppercase

## Animation Rules

- Slow: duration >= 0.6s
- Small: y <= 16px, scale <= 0.04
- Easing: easeOut / easeInOut only
- Trigger: whileInView with once: true
- NEVER: spring, stagger, bounce, large scroll animations
- Always check prefers-reduced-motion

## Spacing

- Sections: py-24 (mobile) / py-32 (desktop)
- Max content width: max-w-4xl or max-w-5xl
- Text never full-width on desktop
