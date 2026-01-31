# Project Memory (Read First)

## Project

Kino Games website (Next.js App Router + Tailwind).

## Non-negotiable rules

- Do not refactor unrelated components.
- Only change files that are explicitly requested.
- Do not remove UI elements unless asked.
- Do not change section heights to fixed pixels unless explicitly requested.
- Always match Figma specs exactly (typography, spacing, alignment, colors).
- Prefer minimal diffs and avoid redesigning.

## Layout conventions

- Hero must be 100vh (h-screen / min-h-screen), never fixed height.
- Sections that are "full-screen" must use 100vh and crop backgrounds.
- Max width containers:
  - Use max-w-[1440px] where specified.
  - Use max-w-[1280px] for content wrappers when specified.

## Styling conventions

- Use Tailwind classes primarily.
- Use globals.css only for custom element styling (e.g. Cloudflare Stream).
- Accent gold: #F9C962
- Primary text: #F6F4F1

## Video background pattern

- Background must crop, not shrink.
- Use Cloudflare Stream <stream> element when possible.
- The background layer must be:
  - position absolute, inset-0
  - overflow-hidden
  - overlay above video, content above overlay

## Typography

- H1: Garet, weight 850, uppercase.
- Body/subheadersoring: Inter with specified sizes/letter spacing from Figma.

## Components

- Hero: components/landing/HeroSection.tsx
- New sections should follow naming pattern:
  - section-[name] for outer wrapper
  - content-block, content-wrapper for inner
- Never rename classnames without request (Webflow-style naming for consistency).

## Output requirements

- Always provide the updated code snippet and list of files changed.
- Verify responsive behavior (desktop + narrow viewport).
