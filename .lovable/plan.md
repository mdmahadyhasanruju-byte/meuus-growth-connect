
# meUus — Full Project Visualization

Goal: turn the site into a **complete, cinematic overview** of the meUus project — from Foundation → DLAS → Ecosystem → Global → Everything to Everyone — while making every pillar deeply explorable and every pre-founding role clearly open until **July 21, 2026**.

Keep current premium aesthetic (Cormorant Garamond + Plus Jakarta Sans, deep navy, violet/gold accents). Build on v7, do not restart.

---

## 1. Rebuilt Homepage — the cinematic overview

A scroll-driven story replacing the current home. Sections in order:

1. **Hero** — wordmark, "Connecting Everything", live countdown to July 21, 2026, primary CTA "Join the Founding Journey", secondary "Explore the Ecosystem".
2. **The Journey Map** — pinned scroll section animating through 5 chapters:
   `Foundation → DLAS → Ecosystem → Platform → Global → Everything to Everyone`. Each chapter: one sentence, one visual cue, one link to its deep page.
3. **Three Vision Hubs** — large cards linking to `/`, `/ecosystem`, `/global` (meUus, meUus Ecosystem, meUus Global).
4. **The 9 Pillars Constellation** — animated grid of all pillars. Each tile links to its own page `/pillars/<slug>`.
5. **Deep Life Assessment System (DLAS)** — 5 levels, 4 dimensions, visualized as a flowing diagram.
6. **Countdown + Pre-Founding Call** — large countdown reused, followed by the 6 open positions as cards, each linking into `/join` with the role pre-selected.
7. **Manifesto + Footer** — Bismillah, brand statement, Bangladesh → World.

## 2. Nine dedicated pillar pages

New route group: `/pillars/$slug` with one page per pillar:
Legal Hub, Business Hub, Unemployment Buster, Mind Beautifier, Drug Buster, Family Harmony, Green Solutions, Idea Lab, aLive Bangladesh.

Each page contains:
- Hero with pillar name, tagline, status badge (Active / Building / Planned)
- Full description and philosophy
- Services / sub-modules list
- Leader / team (where known, e.g. Md. Alim Hossen for Legal, Md. Shamsul Islam Shawon for Unemployment)
- What launches on July 21, 2026
- "How to contribute" CTA → `/join`
- Related pillars (2–3 cross-links)

Existing `/pillars` becomes the index/overview that links into each detail page.

## 3. Pre-Founding Roles — clearer flow

Until July 21, 2026, surface all open positions prominently:

- Co-Founder
- Execution Partner
- Investor
- Founding Member
- Core Team
- Campus Ambassador
- *(Add Advisor and Volunteer to round it out)*

Roles appear in three places:
- Homepage "Pre-Founding Call" section (teaser cards)
- Dedicated `/join` page (full forms — already wired to DB)
- Pillar pages ("Contribute to this pillar" CTA)

Clicking a role card on the homepage deep-links to `/join?role=<slug>` and pre-fills the form.

## 4. Navigation & polish

- Navbar: Home · Ecosystem · Pillars · Global · Join · *(Countdown chip on the right showing days to launch)*
- Footer: add quick-links to all 9 pillars
- Keep current premium typography, motion register editorial (restrained, cinematic), reuse `AnimatedOrb` and `ParticleCanvas`

## Technical Notes

- New routes: `src/routes/pillars.$slug.tsx` (dynamic), keep `src/routes/pillars.tsx` as index
- Central data file: `src/data/pillars.ts` (single source for slug, name, tagline, color, leader, description, services, status) — used by homepage constellation, `/pillars` index, and `/pillars/$slug`
- Central data file: `src/data/roles.ts` for the 8 pre-founding roles — used by homepage teaser and `/join`
- `/join` reads `?role=` search param to pre-select role and scroll to its form
- No backend changes needed; existing applications table already accepts arbitrary role strings
- Countdown component reused; create a small `CountdownChip` variant for the navbar

## What I will not change

- Database schema, admin page, existing `/ecosystem` and `/global` pages (only minor link additions)
- Current premium theme tokens in `styles.css` (only additive tweaks if needed)

---

After you approve, I'll execute in this order: data files → pillar detail route → homepage rebuild → role pre-fill on /join → nav + footer polish → screenshot every page to verify.
