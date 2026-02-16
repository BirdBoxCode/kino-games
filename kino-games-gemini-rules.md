{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 # Project Memory (Read First)\
\
This file defines non-negotiable rules and working conventions for this project.\
All instructions here must be followed strictly.\
\
---\
\
## Project\
\
Kino Games website  \
Tech stack: Next.js (App Router) + Tailwind CSS\
\
---\
\
## Environment Assumptions (Important)\
\
- The local NPM / Node environment is already running.\
- Do NOT ask whether the dev server is running.\
- Do NOT suggest starting, installing, or re-running npm unless explicitly asked.\
- Assume dependencies are installed and the project builds successfully.\
\
---\
\
## Mandatory Workflow Rule\
\
**Before making any code changes or writing any implementation:**\
\
1. First respond with a clear **Implementation Plan**, including:\
   - What files will be touched\
   - What will change in each file\
   - Why each change is necessary\
2. Wait for explicit confirmation before proceeding.\
\
No code, diffs, or edits should be produced before approval.\
\
---\
\
## Non-negotiable Rules\
\
- Do NOT refactor unrelated components.\
- ONLY change files that are explicitly requested.\
- Do NOT remove UI elements unless explicitly asked.\
- Do NOT change section heights to fixed pixel values unless explicitly requested.\
- Always match Figma specs exactly:\
  - typography\
  - spacing\
  - alignment\
  - colors\
- Prefer minimal diffs.\
- Avoid redesigning, restructuring, or \'93improving\'94 unless explicitly requested.\
\
---\
\
## Layout Conventions\
\
- Hero sections must be:\
  - `100vh` using `h-screen` or `min-h-screen`\
  - Never fixed height\
- Sections described as \'93full-screen\'94 must:\
  - Use `100vh`\
  - Crop background media (never shrink to fit)\
\
### Max Width Containers\
\
- Use `max-w-[1440px]` where specified\
- Use `max-w-[1280px]` for content wrappers where specified\
\
---\
\
## Styling Conventions\
\
- Use Tailwind utility classes as the primary styling method.\
- Use `globals.css` ONLY for:\
  - Custom element styling\
  - Third-party embeds (e.g. Cloudflare Stream)\
- Do NOT move Tailwind styles into CSS unless explicitly asked.\
\
### Color Tokens\
\
- Accent gold: `#F9C962`\
- Primary text color: `#F6F4F1`\
\
---\
\
## Video Background Pattern\
\
- Backgrounds must crop, not shrink.\
- Prefer Cloudflare Stream `<stream>` element when possible.\
- Background structure requirements:\
  - `position: absolute`\
  - `inset-0`\
  - `overflow-hidden`\
- Layer order:\
  1. Video\
  2. Overlay (above video)\
  3. Content (above overlay)\
\
---\
\
## Typography\
\
- H1:\
  - Font: Garet\
  - Weight: 850\
  - Uppercase\
- Body text and subheadings:\
  - Font: Inter\
  - Sizes, weights, and letter-spacing must match Figma exactly\
\
---\
\
## Components & Structure\
\
- Hero component location:\
  - `components/landing/HeroSection.tsx`\
- New sections must follow naming conventions:\
  - Outer wrapper: `section-[name]`\
  - Inner elements: `content-block`, `content-wrapper`\
- Never rename existing class names unless explicitly requested.\
  - Webflow-style naming consistency must be preserved.\
\
---\
\
## Output Requirements\
\
- Always provide:\
  - Updated code snippets\
  - A list of files changed\
- Verify and consider responsiveness:\
  - Desktop\
  - Narrow / mobile viewport\
- Do NOT include speculative changes or optional enhancements unless asked.\
\
---}