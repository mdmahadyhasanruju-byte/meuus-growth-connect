## Final Polish Plan — meUus (credit-conscious)

Since credits are limited, I'll do a single focused build pass that ships every remaining must-have in one go. No exploration loops, no re-asks.

### What ships in this one pass

1. **Homepage final polish** (`src/routes/index.tsx`)
   - Tighten hero countdown, journey, pillar constellation spacing
   - Add a clear "Pre-Founding Roles" teaser section with all 8 role cards → deep-link `/join?role=<slug>`
   - Add Vision Hubs (meUus / meUus Ecosystem / meUus Global) as 3 prominent cards linking to `/ecosystem` and `/global`
   - Add closing manifesto + CTA band

2. **Pillar pages** (`src/routes/pillars.$slug.tsx`, `src/routes/pillars.tsx`)
   - Add "Join this pillar" role chips that deep-link to `/join?role=...`
   - Polish related-pillars and launch sections

3. **Join page** (`src/routes/join.tsx`)
   - Confirm `?role=` deep-link auto-expands & scrolls to the right role
   - Add success state polish + persistence note

4. **Navbar + Footer**
   - Add prominent "Join Pre-Founding" CTA button in navbar
   - Footer: add roles quick-links + countdown line

5. **SEO + metadata**
   - Unique `head()` titles/descriptions on every route (home, ecosystem, global, pillars index, pillar detail, join)
   - JSON-LD Organization on home

6. **Visual final pass**
   - Verify Cormorant + Plus Jakarta loading
   - Verify gold hairlines, violet glow, glass cards consistent
   - Mobile (630px viewport) spacing audit on home + pillar detail

### What I will NOT touch (to save credits)

- Database schema, admin page, auth
- Color tokens in `src/styles.css` (already finalized in v7)
- Any new routes beyond what exists
- No new dependencies

### Verification

- Single build check after all edits
- Quick screenshot of home + one pillar page + join page

This is one implementation pass — approve and I'll execute end-to-end without further questions.
