# Active `.org` Worker source recovery

**Checkpoint:** 4 October 2026
**Repository:** `mdmahadyhasanruju-byte/meuus-growth-connect`
**Production Worker:** `meuus-growth-connect`, active version `13b90944` at 100% traffic (manual Wrangler upload observed 3 October 2026)

## Recovered source

The preserved source/build snapshot is in `00_DOMAIN_REPOSITORIES/01_meuus.org` in the ecosystem workspace. Branch `recovery/oct3-live-source-13b90944` is based on `origin/main` at `d019705`. Its 18 modified tracked source files are byte-identical to the preserved snapshot. Across 193 tracked files, 190 are byte-identical; the two differences are `README.md` and `docs/source-of-truth/01_claim_evidence_register.md`, and `.env.example` is not present in the snapshot. The tracked `package.json`, `vite.config.ts`, and `bun.lock` match the snapshot.

This establishes a strong source-tree link. It does **not** establish that commit `d019705` or this recovery branch produced the exact active Worker bundle.

## Build and asset evidence

- `npm run typecheck`: passed.
- `npm run build`: passed with Vite 7.3.2 (2,097 modules).
- `git diff --check`: passed.
- `npm run lint`: repository-wide lint is not clean (97 formatting errors and 7 warnings across 15 files outside the 18 modified paths). The recovery diff itself has no lint findings.
- A clean build of `d019705` matches 1/59 client assets and 1/63 server assets in the preserved snapshot.
- A build of this recovery source matches 59/59 client assets and 2/63 server assets. Re-running with Bun 1.3.14 (`bun run build`, Vite 7.3.2) gives the same result. The two matching server files also match by content when filenames are ignored.

Client parity and exact source-file matches support this recovery. The server-bundle discrepancy remains unexplained and prevents claiming byte-for-byte production provenance. Compare the active Worker's uploaded server bundle and build context before preparing a production release.

## Release boundary

This branch is a recovery candidate for review. The active Worker remains on its existing manual production version. No production deployment, DNS change, binding/secret change, or custom-domain change was made. Language Hub remains a draft public preview, not a completed curriculum. Any promotion requires a reviewed preview, route/content/accessibility review, and a documented rollback target.

## PR preview continuation — 4 October 2026

- Both Cloudflare PR checks (`meuus-growth-connect` and `tried`) completed successfully for the initial recovery head.
- The isolated Workers.dev preview returned HTTP 200 on `/`, `/soul`, `/book`, `/app`, and `/language-knowledge`. `/dlas` is not a route on this domain; DLAS concept content is linked to the `.com` domain. Browser review at 319×510 showed the fixed Book Preview CTA obscuring hero copy on narrow screens.
- Commit `8f91311` hides that floating CTA below the small-screen breakpoint; the Book Preview remains reachable through normal site navigation. Typecheck and production build pass after the change. Both refreshed Cloudflare checks passed and the Workers.dev preview was reloaded at 319×510; hero copy is now visible without overlap. This limited visual check does not complete full responsive/accessibility review; no production release has occurred.
