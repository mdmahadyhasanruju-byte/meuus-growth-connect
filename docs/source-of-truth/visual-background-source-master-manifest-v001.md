# meUus Visual & Background Source-Master Manifest v1.0

Status: Documentation manifest only. This is not a public route, not an asset import, and not proof that every visual/background/source-master asset exists in the current tracked repo.

## 1. Purpose

This manifest records the current visual/background asset status for meUus, the boundary between source masters and derivatives, and the rules for future public usage.

It separates:

- what is verified in the current tracked repo;
- what is tracked documentation only;
- what is planning memory or founder-approved direction but not current repo proof;
- what must be reviewed before public use.

The goal is to prevent visual drift, accidental overclaims, source-master loss, unlicensed usage, and public presentation of visuals as proof of systems that are not live.

## 2. Current verified repo evidence

Current verified evidence from the tracked repo:

- `docs/visual-system-inventory-v001.md` exists and was read before this manifest was created.
- `.lovable/project.json` exists as a tracked project metadata file.
- `.lovable/plan.md` exists as tracked planning material.
- Site-level visual components exist in `src/components/site`, including:
  - `AnimatedOrb.tsx`
  - `Countdown.tsx`
  - `ExplorerPanel.tsx`
  - `Footer.tsx`
  - `Navbar.tsx`
  - `ParticleCanvas.tsx`
  - `SectionHeading.tsx`
- Global visual styling exists in `src/styles.css`, including dark theme tokens, gradient utilities, glass styling, glow styling, grain, and animation helpers.
- Data-driven visual identity exists in:
  - `src/data/pillars.ts`
  - `src/data/roles.ts`
  - `src/data/navigation.ts`
- `src/routes/__root.tsx` includes metadata references, including remote social image metadata.
- The current tracked repo check did not find a root `public/` directory.
- The current tracked repo check did not find tracked `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`, `.gif`, `.avif`, or `.ico` visual source-master image files.
- No public `/visual-system` route was found in `src/routes` or `src/routeTree.gen.ts`.
- No canonical source-master image folder, final image hash manifest, pillar image mapping, or KBA image mapping was verified in the current tracked repo.

The existing `docs/visual-system-inventory-v001.md` also records that the active public visual system is largely code-driven or data-driven through procedural particles, animated orbs, typography, gradients, colors, symbols, cards, and route-level composition. That inventory should remain the first repo-local evidence source for visual system context until a fuller asset manifest exists.

## 3. Planning memory — not current repo proof

The following items are planning memory and direction. They are not proof that source-master files are present in the current tracked repo, and they are not proof that a public visual system is fully integrated.

- meUus is moving toward a premium dark, cinematic, human-centered visual direction.
- Symbolic-realism landscape visuals are a desired direction for background and identity work.
- Text-free source masters are preferred where possible, so text can be handled accessibly in HTML/CSS and localized without regenerating the visual.
- A source master → derivative workflow is preferred:
  - preserve the original source master;
  - generate route-specific derivatives;
  - document crop, size, compression, route, purpose, fallback, and status.
- A proof-journey asset idea may become useful later for explaining transformation, evidence, progress, or learning pathways.
- Pillar visual masters may exist outside the current tracked repo, but they must be located, verified, rights-checked, and reviewed before any public use.

## 4. Asset status categories

Use these categories in future visual inventories and PRs.

### Verified in repo

A file, component, route, or documented reference exists in the current tracked repo and can be located by path.

### Tracked documentation only

The repo contains a document describing an asset, concept, boundary, or plan, but the actual production asset file is not present or not yet connected.

### External/unverified source

An asset may exist outside the current tracked repo, in an archive, local export, design tool, download folder, or separate workspace, but has not been verified as current repo evidence.

### Approved concept, asset not located

The visual direction or idea is approved as a concept, but no canonical file has been found and verified.

### Derivative generated

A resized, cropped, compressed, or route-specific version exists. It must point back to the preserved source master and document its intended use.

### Needs review before public use

The asset exists or may exist, but needs source, rights, licensing, accessibility, claim-boundary, religious/cultural, privacy, or product-truth review.

### Do not use yet

The asset or concept should not be used publicly until a specific blocker is resolved, such as missing rights, unclear source, overclaim risk, sensitive content, missing alt text, or no verified source master.

## 5. Source-master rules

- Source masters should be preserved separately from derivatives.
- Do not overwrite original source masters with compressed, cropped, filtered, watermarked, or text-bearing versions.
- Do not embed text in visual masters unless intentionally approved for a specific reason.
- Derivatives should document:
  - source-master path or external source reference;
  - generated file path;
  - size;
  - crop;
  - compression format;
  - fallback purpose;
  - intended route or page;
  - public status.
- Public usage should reference verified files only.
- Every public asset should have:
  - purpose;
  - route or placement;
  - alt text or decorative-hidden decision;
  - status;
  - origin/licensing note;
  - review owner or review status.
- Archive assets should not be imported wholesale.
- Any source-master recovery should happen through a separate evidence-first inventory PR before integration.

## 6. Public usage rules

- No AI-generated visual should imply evidence, diagnosis, certification, legal authority, religious authority, or scientific proof.
- Visuals are symbolic and supportive unless a verified evidence source explicitly says otherwise.
- Do not use misleading screenshots of features that are not live.
- Do not create fake dashboards, fake accounts, fake AI decisions, fake DLAS results, fake payments, fake rewards, or fake operational evidence.
- Do not use people, organization, company, school, platform, or partner logos without approval.
- Do not use unlicensed images.
- Do not use a visual in a way that implies endorsement, partnership, sponsorship, ownership, investment, validation, or responsibility by a tool, company, person, or organization.
- Do not present archive visuals as current production truth.
- Do not use sensitive wellbeing, family, recovery, child/youth, religious, or legal imagery without specific review and clear boundaries.
- Keep public visual claims aligned with `/status`, `/privacy`, `/terms`, `/consent`, and current source-of-truth documents.

## 7. Missing or not-yet-verified items

- Canonical source-master folder is not yet verified in the tracked repo.
- Public `/visual-system` route has not been created.
- Source-master image files are not imported in this PR.
- Final asset manifest with file hashes is not yet completed.
- Alt text and accessibility review is not yet completed.
- Licensing, source, and origin review is not yet completed.
- Pillar source-master image files are not verified in the tracked repo.
- KBA visual source-master image files are not verified in the tracked repo.
- Background image source masters are not verified in the tracked repo.
- Route-by-route public visual placement map is not yet completed.

## 8. Recommended next visual PRs

Recommended sequence:

1. Verify current tracked public assets and visual references.
2. Create a file-hash inventory if source files are present.
3. Create a public `/visual-system` route only after source evidence is clear.
4. Add accessibility and alt-text review for any selected visuals.
5. Connect selected verified visuals to public pages gradually.

Each PR should stay evidence-first and avoid treating external/archive assets as production truth until the asset path, source, rights, status, and public use case are verified.

## 9. Non-goals of this PR

- No public route.
- No design rewrite.
- No asset import.
- No image or binary addition.
- No homepage visual replacement.
- No navigation change.
- No route tree change.
- No Journey change.
- No app, Soul, or game change.
- No archive import.
- No deployment.
- No DNS or domain setting change.
- No product/backend feature.
- No backend, auth, AI, DLAS, payment, account, database, admin, or cloud feature.
