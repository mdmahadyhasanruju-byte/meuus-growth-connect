# Plan — /manifesto-full: The Founder's Complete Manifesto

A single long-form, editorially polished route that publishes the founder's entire 6-part theological-philosophical document in full, preserving every word, emoji, and Bangla line — but typeset with the dignity of a sacred text.

## Route

- **New file**: `src/routes/manifesto-full.tsx` at `/manifesto-full`
- `/manifesto` redirect stays as-is (still points to `/founder`, the short letter)
- `/founder` short letter stays untouched
- Navbar gets a subtle link to "The Full Manifesto" inside the Founder dropdown / nearby
- Footer adds a link under a "Founder" column

## Page structure (single scroll, no sub-routes)

```text
HERO
  Eyebrow: "The Complete Manifesto"
  Title:   "On creation, loneliness,
            and why meUus had to exist."
  Sub:     Author + date + reading time + "Raw. Unedited in spirit."
  Particle canvas + violet orb (matches /founder)

EXECUTIVE SUMMARY  (boxed, gold hairline)
  - The dual-role founder framing
  - Core Philosophy Statement (sex ↔ life, body ↔ soul)

PROLOGUE — "Nobody asked..."
  The opening confessional, verbatim.
  Pull-quote: "I will never show you my inner... 🖤"

PART I — MY WITNESS TO ALLAH
  Full text. Arabic/Bangla rendered in proper serif fallback stack.
  Pull-quote: "We are trapped. No one remains human."

PART II — THE THEOLOGICAL-PHILOSOPHICAL FRAMEWORK
  Author's Note on Terminology  (highlighted callout box)
  THE CREATION STORY
  [Talks with various kinds of people]  (inset block)
  The Reality of Impurity and Purity

PART III — THE COMPREHENSIVE GUIDELINES
  The Story of Iblis  (sub-section card)

PART IV — AFTER ALL CREATION
  Bangla ayah rendered large, centered, with translation underneath
  (Surah Adh-Dhariyat 51:56)

PART V — FORGIVENESS & SUBMISSION
  Closing du'a styled as italic prayer block

PART VI — THE REASON FOR CREATION OF meUus
  Six "Born from..." lines as a vertical rhythm list
  Final 🖤 line as standalone closing flourish

CLOSING CTA
  "Read it. Sit with it. Then join the work."
  → /join  → /founder (short letter)  → /foundation
```

## Typography & design rules

- Cormorant serif for headings & pull-quotes, Plus Jakarta for body — already in system
- Body size 19–20px, line-height 1.85, max-width 68ch for readability of long passages
- Bangla ayah: larger serif, centered, gold hairline above + below, italic English translation
- Emojis preserved inline at original positions — no stripping
- Pull-quotes: violet gradient text on left-border gold hairline (matches /founder)
- Part dividers: small roman numerals + thin gold rule, generous vertical breathing room
- "Author's Note" and "[Talks with various kinds of people]" rendered as inset callout cards (glass bg, hairline border)
- Reading time chip in hero (~14 min)
- No images required — typography carries the weight

## Editorial polish rules (per user's "authenticity with polish")

- Fix obvious typos & broken punctuation only
- Normalize spacing around emojis & em-dashes
- Keep ALL emojis, ALL Bangla, ALL parenthetical asides
- Keep informal voice ("fucking", "khatam, tata, bye-bye", 🤣) exactly as written
- Section headings re-typeset but text inside each section preserved word-for-word
- Add inline `<em>` / `<strong>` only where it clarifies emphasis the writer clearly intended

## SEO & metadata (leaf route)

- `title`: "The Complete Manifesto — Md. Mahady Hasan | meUus"
- `description`: "The founder's full theological-philosophical letter on creation, loneliness, intention, and why meUus exists. Raw. Unedited in spirit."
- og:title / og:description / og:type=article / og:url
- twitter:card = summary_large_image
- Canonical = /manifesto-full
- JSON-LD `Article` schema with author = Md. Mahady Hasan, publisher = meUus
- og:image: reuse the existing /founder share image (no new asset this round)

## Navbar & footer touch-ups

- Navbar: add "Manifesto (Full)" link near existing "Founder" entry
- Footer: under Founder column add "The Complete Manifesto → /manifesto-full"

## What I will NOT do this round

- No new images / og asset generation
- No auth gating (user chose public-in-full)
- No /phase-one, /membership-tiers, /business-model — those are a separate round
- No DB, no forms, no Lovable Cloud changes
- No edits to /founder short letter
- No changes to color tokens or design system

## Files to change

- **Create**: `src/routes/manifesto-full.tsx`
- **Edit**: `src/components/site/Navbar.tsx` — add link
- **Edit**: `src/components/site/Footer.tsx` — add link
- Route tree auto-regenerates

## Verification

- Build check
- Single screenshot at 889px (current viewport) of hero + one mid-section + closing
- Confirm Bangla ayah renders, emojis intact, no overflow

Approve and I'll execute end-to-end in one pass.