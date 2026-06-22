# Visual System Inventory v001

## 1. Branch and Baseline

- Branch: `visual-system-inventory-v001`
- Base commit: `f096848 feat(journey): add first-slice Journey flow`
- Preserved workflow file: `meuus/.github_workflows_deploy.yml`
- Preservation status: `meuus/.github_workflows_deploy.yml` remains untracked and must not be staged unless separately approved.

## 2. Repository Structure Relevant to Visual System

### Routes

Primary public routes are in `src/routes`:

- `src/routes/index.tsx`
- `src/routes/founder.tsx`
- `src/routes/manifesto.tsx`
- `src/routes/manifesto-full.tsx`
- `src/routes/foundation.tsx`
- `src/routes/ecosystem.tsx`
- `src/routes/pillars.tsx`
- `src/routes/pillars.$slug.tsx`
- `src/routes/global.tsx`
- `src/routes/join.tsx`
- `src/routes/journey.tsx`
- `src/routes/journey.*.tsx`

### Site Components

Reusable site-level visual components are in `src/components/site`:

- `AnimatedOrb.tsx`
- `Countdown.tsx`
- `Footer.tsx`
- `Navbar.tsx`
- `ParticleCanvas.tsx`
- `SectionHeading.tsx`

### UI Components

Reusable UI primitives are in `src/components/ui`. The component setup appears to follow shadcn-style conventions through `components.json`, with Radix-based primitives and CSS variable styling.

### Styles

Global styling and Tailwind v4 configuration live in:

- `src/styles.css`

This file defines theme tokens, typography tokens, color tokens, dark default styling, and custom visual utilities such as gradients, glass panels, glow shadows, grain, and animation helpers.

### Data Files

Visual and content data used by routes live in:

- `src/data/pillars.ts`
- `src/data/roles.ts`
- `src/journey/content/first-slice.ts`

`src/data/pillars.ts` currently carries pillar colors, symbols, statuses, launch text, descriptions, and services.

### Docs

Current docs include Codex workflow/governance files:

- `docs/CODEX_EXECUTION_DIRECTIVE_v1.md`
- `docs/CODEX_PREFLIGHT_CHECKLIST_v1.md`
- `docs/CODEX_PROMPT_v1.md`
- `docs/CODEX_RUNTIME_INTEGRITY_AUDITOR_v1.md`
- `docs/CODEX_START_PROTOCOL_v1.md`

No canonical visual-system blueprint file was found in this repo during inspection.

### Assets/Public Paths

Observed public/assets paths:

- `meuus/public`
- `.lovable/project.json`

No local canonical image library, pillar image folder, KBA image folder, or visual asset manifest was found during inspection.

## 3. Current Typography Setup

Current typography is based on two Google font families:

- `Cormorant Garamond`
- `Plus Jakarta Sans`

Font loading is defined in `src/routes/__root.tsx` through Google Fonts preconnect links and a stylesheet link.

Font tokens are defined in `src/styles.css`:

```css
--font-serif: "Cormorant Garamond", ui-serif, Georgia, serif;
--font-sans: "Plus Jakarta Sans", ui-sans-serif, system-ui, sans-serif;
```

Global body typography uses `var(--font-sans)`.

Display typography uses `var(--font-serif)` through heading rules and `.font-serif`:

```css
h1, h2, h3, h4, .font-serif {
  font-family: var(--font-serif);
  letter-spacing: -0.015em;
}
```

Current usage pattern:

- Serif display type for hero headings, large titles, pull quotes, and brand-like moments.
- Sans type for body text, controls, navigation, forms, and UI primitives.
- Visual identity leans on serif/sans contrast, dark cosmic palette, gold/violet gradients, glass surfaces, procedural particles, and glowing radial orbs.

## 4. Bangla Typography Readiness

Bangla text already exists in the repo, especially in:

- `src/journey/content/first-slice.ts`
- `src/journey/ui/JourneyScreen.tsx`
- `src/routes/manifesto-full.tsx`

Bangla support is also referenced as a requirement in `docs/CODEX_PROMPT_v1.md`.

No Bangla-specific font is currently loaded.

Likely current behavior:

- Bangla glyphs fall through from `Plus Jakarta Sans` or `Cormorant Garamond` into system fallback fonts.
- Rendering may work on common systems, but visual consistency is not guaranteed.
- Bengali line height, conjunct rendering, weight matching, and spacing may differ from the Latin design system.

Fallback risks:

- Serif display styles may apply negative tracking before fallback.
- Bengali headings may look inconsistent beside Latin headings.
- Mixed English/Bangla UI may shift line height and card spacing.

Mobile readability risks:

- Bengali text can require more generous line-height than the current Latin-first layout.
- Small labels, uppercase-style tracking, and dense card text may not translate well to Bangla.
- Long Bangla strings may wrap earlier and need responsive layout checks.

Accessibility risks:

- Small text sizes may reduce readability for Bengali conjuncts.
- Decorative display treatment may reduce legibility.
- Inconsistent fallback fonts may make UI harder to scan.

Performance risks if adding Bangla fonts later:

- Adding full multilingual font families and many weights could increase render-blocking CSS and font payloads.
- Any future font addition should evaluate required weights, `font-display`, preload strategy, and route-level need.

Candidate families to evaluate later only:

- Noto Sans Bengali
- Noto Serif Bengali
- Hind Siliguri
- Anek Bangla

No font installation or typography change is made in this inventory.

## 5. Visual Assets

No local canonical image library was found.

No pillar visual source masters were found.

No KBA visual source masters were found.

No asset manifest was found.

Current visuals are procedural, code-driven, or data-driven:

- `ParticleCanvas` provides procedural canvas particle backgrounds.
- `AnimatedOrb` provides radial-gradient animated orb visuals.
- `src/data/pillars.ts` provides pillar colors and glyph-like symbols.
- `src/data/roles.ts` provides role colors and symbols.
- `src/styles.css` provides gradient, glass, glow, grain, and animation utilities.
- `src/routes/__root.tsx` references a remote OG image URL.

## 6. Route/Page Visual Usage

### Homepage

`src/routes/index.tsx` uses:

- `ParticleCanvas`
- multiple `AnimatedOrb` instances
- `Countdown`
- `SectionHeading`
- pillar cards from `PILLARS`
- role cards from `ROLES`
- gradient text, glow, glass, and card utilities

### Founder

`src/routes/founder.tsx` uses:

- `ParticleCanvas`
- `AnimatedOrb`
- `SectionHeading`
- editorial serif typography
- CTA card styling

### Manifesto

`src/routes/manifesto-full.tsx` uses:

- `ParticleCanvas`
- `AnimatedOrb`
- `SectionHeading`
- long-form editorial typography
- quote blocks and decorative type treatments
- inline Arabic font-family fallback for one figure, without confirmed font loading

`src/routes/manifesto.tsx` exists as a route file, but the main visual manifesto experience appears to be `manifesto-full`.

### Foundation

`src/routes/foundation.tsx` uses:

- `ParticleCanvas`
- `AnimatedOrb`
- `Countdown`
- `SectionHeading`
- execution cards and loop sections

### Ecosystem

`src/routes/ecosystem.tsx` uses:

- `ParticleCanvas`
- `AnimatedOrb`
- `SectionHeading`
- `PILLARS` data for a visual pillar grid
- platform and timeline sections

### Pillars

`src/routes/pillars.tsx` and `src/routes/pillars.$slug.tsx` use:

- `ParticleCanvas`
- `AnimatedOrb`
- `SectionHeading`
- `PILLARS` data
- pillar colors
- pillar symbols
- status labels
- launch copy
- related pillar cards

### Global

`src/routes/global.tsx` uses:

- `ParticleCanvas`
- multiple `AnimatedOrb` instances
- `SectionHeading`
- phase cards
- global/bilingual/multilingual positioning copy

### Journey

Journey routes use `src/journey/ui/JourneyScreen.tsx`.

The Journey visual style is intentionally simpler and text-first:

- framed sections
- serif titles
- local-first privacy/safety copy
- no procedural orb/canvas hero treatment
- no canonical KBA visual assets connected yet

### Join

`src/routes/join.tsx` uses:

- `ParticleCanvas`
- `AnimatedOrb`
- `Countdown`
- `SectionHeading`
- `ROLES` data
- role accordions/cards
- form UI

## 7. Gaps Against Visual System and Pre-21 July Scope

### KBA Visual Placement

KBA currently exists as Journey content and route flow, but no KBA visual placement, visual source-master, or asset manifest connection was found.

### Pillar Source-Master Usage

Pillar visuals are currently data-driven through colors and glyph symbols in `src/data/pillars.ts`.

No canonical pillar source-master assets or mapping file was found.

### Full meUus Visualization Page

No dedicated full meUus visualization route was found.

### Bangla Typography Support

Bangla content exists, but there is no Bangla-specific font strategy, token, class, or visual QA record.

### No-Content-Loss Register

No no-content-loss register was found in this repo during inspection.

### Public Status Labels

`src/data/pillars.ts` currently uses:

- `Active`
- `Building`
- `Planned`

These do not match the allowed public status-label set from the pre-21 July workflow and should be mapped before public status-label corrections.

### Trust/Accessibility Boundaries

Journey has explicit privacy, safety, and accessibility routes. Broader public pages include launch, founding, live, role, platform, partnership, and availability-style language that should be reviewed before visual expansion.

### Canonical Visual-System Blueprint Absence

No canonical visual-system blueprint was found in this repo. Any visual implementation should wait for either a verified source file or an approved inventory-derived plan.

## 8. Preservation Warnings

- Do not replace existing procedural visuals without a no-content-loss/register entry.
- Do not remove or overwrite existing route visual treatments without mapping preserved meaning and replacement location.
- Do not add fonts without performance, accessibility, fallback, and mobile readability review.
- Do not change status labels without mapping the current label, meaning, risk, and replacement.
- Do not introduce visual claims not backed by existing assets, content, or founder-approved source material.
- Do not create pillar/KBA visuals as if canonical unless source-master status is verified.
- Do not stage `meuus/.github_workflows_deploy.yml`.

## 9. Recommended Next Branch Sequence

Recommended sequence:

1. `bangla-typography-audit-v001`
2. `visual-asset-manifest-v001`
3. `kba-visual-integration-v001`
4. `status-label-alignment-v001`
5. `full-meuus-visualization-v001`
6. `no-content-loss-register-v001`

Suggested order rationale:

- Audit typography before changing fonts.
- Create asset manifest before integrating visuals.
- Integrate KBA visuals before wider visualization pages.
- Align status labels before public visual expansion.
- Build full meUus visualization only after source masters and claim boundaries are clear.
- Maintain no-content-loss mapping before any removal, rewrite, merge, or replacement.
