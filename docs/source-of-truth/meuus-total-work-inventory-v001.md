# meUus Total Local Work Inventory v001

## Context

This internal inventory was created after PR #13. The current active repository is
`meuus-growth-connect`, and the confirmed `main` baseline for this inventory is:

`fceca2d docs(truth): inventory SOT v3 archive`

This is a preservation-first record of discovered local material. It does not make
old material verified, current, approved, deployable, or production truth. Folder
names and likely purposes are inventory observations, not endorsements of the
claims or implementations inside those folders.

## Locations Inspected

| Location | Result |
|---|---|
| `C:\Users\mdmah\OneDrive\Documents(1)\Downloads` | Inspected. meUus prototypes, archives, records, saved pages, and visual assets were found. |
| `C:\Users\mdmah\OneDrive\Desktop\meuus deploy work` | Supplied path was absent. |
| `C:\Users\mdmah\OneDrive\Desktop(1)\meuus deploy work` | Relocated actual tree was found and inspected. |
| `C:\Users\mdmah\OneDrive\Desktop(1)\meuus deploy work\for21` | Inspected as the main recovered work tree. |

ZIP files were inventoried from archive metadata only. They were not extracted or
imported into the active repository.

## Scale of Discovered Archive

The relocated `for21` tree contained approximately:

| Measure | Approximate value |
|---|---:|
| Files | 23,395 |
| Directories | 2,500 |
| Size | 525 MB |
| Generated or build directories | 94 |

These are discovery-scale counts, not a count of unique, approved, or reusable
artifacts. Generated outputs, copied repositories, and duplicates account for part
of the volume.

## Major Groups Found

- Downloads prototypes: app v2/v2.1/v2.2, Complete App, v4/v5, game, and
  `meuus-org` JSX/HTML variants.
- Downloads archives: SOT v3, ecosystem, transition, execution, and recovery ZIPs.
- Internal records: Reality Registers, source-of-truth drafts, founder records,
  recovery masters, operational masters, and session material.
- Saved public pages: meUus OS, meUus.org, and meUusSoul saved HTML.
- Visual assets: pillar ZIPs, PNG, JPG, WebP, SVG, and JSON metadata.
- `for21/content`: Gimium and meUusSoul book documents.
- `for21/meuus_source_of_truth`: Day One/Day Two reports and drafts for First
  Signal, One Word Start, response templates, and pathways.
- `for21/Ai chat Source of thuth`: recovery exports, master libraries, operational
  material, founder decision material, and private/person-labeled folders.
- `for21/meuus-org`: an older static public-site version, playbook, blueprint,
  visual map, and deployment configuration.
- `for21/meuus.app`: app documents, app v2 HTML, Complete App TSX, setup material,
  package metadata, and ecosystem archives.
- `for21/meuussoul-com`: an older Soul site with DLAS pages, books, pillars,
  library, registration, and deployment archives.
- Deployment history: dated Codex work, backups, deployment copies, and generated
  outputs.
- AI deployment: API routes and service-integration experiments.
- Old repo copies: multiple nested Git repositories and stale copies of active or
  adjacent projects.

## Categorization

| Artifact or group | Likely purpose | Likely destination | Confidence |
|---|---|---|---|
| Current `meuus-growth-connect` | Active public-site source and current repository truth | `meuus.org` | High |
| `meuus-org` | Older static public-site version, public copy, playbook, blueprint, and visual map | `meuus.org`, after claim-by-claim review only | High |
| `meuussoul-com` | Older Soul-focused site, books, pillars, library, registration, and DLAS presentation | `meuussoul.com`, after editorial, legal, privacy, and implementation review | High |
| App v2 / Complete App TSX | App prototype and interaction/UI experiments | `meuus.app`, later architecture review | High |
| Game v1/v3 JSX | Experimental game or engagement prototype | Future roadmap or isolated prototype review | High |
| SOT/recovery masters | Source-of-truth recovery, continuity, governance, and historical evidence | Internal documentation | High |
| Reality Registers | Session-level reality records and continuity notes | Internal documentation | High |
| Gimium/book files | Book, learning, narrative, or editorial source material | `meuussoul.com` and internal editorial review | Medium |
| Pillar asset ZIPs/SVGs | Visual/design assets and pillar imagery | Design library, `meuus.org`, or `meuussoul.com` after rights and provenance review | High |
| 39-day/action plans | Planning, sequencing, launch, and execution records | Internal documentation or future roadmap | High |
| AI deployment/API routes | AI/DLAS experiments and server-side integration prototypes | Future architecture research only | High |
| Codex outputs | Generated drafts, recovery outputs, code experiments, and working records | Internal evidence; selective review only | High |
| Copied Git repositories | Historical working copies, backups, deployments, and stale project snapshots | Archive/quarantine only; never wholesale import | High |

“Likely destination” records potential relevance only. It is not an import,
publication, or implementation decision.

## Useful Content Candidates

### For `meuus.org`

- Review older `meuus-org` copy for mission, pillar, participation, and public
  information that can be independently verified.
- Review the playbook, blueprint, and visual map as design and information-
  architecture references.
- Review saved meUus.org pages as historical snapshots, not current deployment
  evidence.
- Reconcile any candidate copy against current `/status`, `/join`, and `/journey`
  truth before use.

### For `meuussoul.com`

- Review Gimium and meUusSoul book documents through an editorial and provenance
  process.
- Review older Soul books, pillars, library, and learning-page structures.
- Review Soul visual assets after confirming ownership, source, intended audience,
  and public-use approval.
- Keep DLAS and registration claims non-operational unless independently specified,
  governed, implemented, and verified.

### For `meuus.app`

- Review app v2 and Complete App TSX for isolated interaction patterns, content
  structure, and product questions.
- Review setup and package metadata to understand prior technical assumptions.
- Treat old app code as a prototype reference, not a merge candidate.
- Reassess the app only after product scope, architecture, privacy, security,
  accessibility, and maintenance ownership are defined.

### For Internal Documentation

- Reality Registers and source-of-truth/recovery masters.
- Day One and Day Two reports, action plans, missing-items records, and decision
  histories.
- First Signal, One Word Start, response-template, and pathway drafts.
- Codex recovery outputs where provenance and session context can be retained.
- Duplicate, privacy, claim, and import-decision registers derived from this
  inventory.

### For Future Roadmap Only

- Game prototypes.
- Full app implementations.
- AI, DLAS, account, authentication, database, cloud-storage, email, and payment
  systems.
- Ecosystem-wide operating models, launch plans, and unverified maturity claims.

## Risky or Direct-Import Items

| Risk area | Why direct import is unsafe |
|---|---|
| AI/OpenAI/Supabase/Anthropic/API code | May introduce unsupported services, credentials, personal-data processing, costs, vendor dependencies, and unverified behavior. |
| `.env.example` | Reveals expected service configuration and can normalize integrations that have not passed architecture or security review. It must never be treated as a real secret file or production configuration. |
| Vercel metadata | `.vercel/project.json` and related deployment metadata may bind work to old projects, accounts, or deployment assumptions. |
| Old public claims | Claims of working DLAS, AI, authentication, email, accounts, cloud storage, or payments conflict with current verified repo truth unless separately proven. |
| Founder/private archive material | May contain personal, sensitive, decision, identity, email, or consent-restricted information unsuitable for source control or publication. |
| Copied repositories | Carry stale history, conflicting architecture, nested `.git` state, duplicated dependencies, and uncertain provenance. |
| Generated folders | `.next`, `node_modules`, build outputs, and deployment folders are reproducible or environment-specific and can conceal stale or vulnerable code. |
| Old `.github_workflows_deploy.yml` artifact | A protected historical deployment artifact; it must not be copied, staged, enabled, or used to alter current deployment behavior. |

No high-confidence embedded production key was confirmed during the discovery
pass. That does not establish that every archive is secret-free. Any later review
of executable or configuration material requires a dedicated credential and
sensitive-data scan before opening or importing content.

## Duplicate and Old-Version Findings

Exact duplicate groups identified during the inventory include:

- All four inspected `meUus_v5_Complete*.html` files.
- Both inspected `meUus_Complete_v4*.html` files.
- `meuus_game_v3.jsx` and `meuus_game_v3_1.jsx`.
- `meuus-ecosystem-v1.zip` and `meuus-ecosystem-v1_1.zip`.
- The inspected app v2/v2.1 HTML copies across Downloads and `for21`, including
  `meuus_app_v21.html`.

Additional version-numbered, dated, backup, deploy, and recovery copies should be
assumed potentially duplicate or stale until content hashes and provenance records
prove otherwise. Filenames, modification dates, and folder placement alone do not
establish authority.

## Current Repo Comparison

Current confirmed repository truth:

- Public `/status`, `/join`, and `/journey` routes exist.
- Journey preferences exist with explicit preference confirmation.
- Journey uses local storage and includes clear/restart behavior.
- The SOT v3 archive inventory exists at
  `docs/source-of-truth/sot-v3-inventory-v001.md`.

Current confirmed absences:

- No verified backend.
- No verified AI runtime.
- No verified DLAS runtime.
- No verified accounts or authentication system.
- No verified cloud storage.
- No verified payments, rewards, subscriptions, or related commerce systems.

`src/routes/status.tsx` contains older copy saying Journey preference, storage, and
restart work remains in progress. That copy should be handled later on a separate
copy-reconciliation branch, not on this inventory branch and not by importing old
public claims.

## Recommended Recovery Order

1. Content and governance documents first: establish provenance, privacy, evidence
   level, contradictions, and approval status.
2. Public-page copy second: recover only statements that are independently verified
   against current source and deployed behavior.
3. Visual assets third: verify rights, source, duplicates, accessibility, formats,
   and intended domain.
4. UI ideas and isolated components fourth: extract concepts only after design,
   accessibility, and dependency review.
5. Full app code later: require a separate product and architecture decision before
   any code migration.
6. Backend, database, authentication, AI, DLAS, and payment systems last: require
   dedicated security, privacy, legal, economic, operational, and governance review.

## Recovery Governance Rules

- No archive or folder should be imported wholesale.
- Old material is evidence or source material, not production truth.
- Every recovered item needs recorded provenance, evidence level, intended domain,
  privacy level, duplicate group, review status, and import decision.
- Generated folders and copied repositories must not be imported into the active
  repository.
- Public claims require source evidence, deployed-behavior verification where
  applicable, and explicit approval.
- Private or founder-sensitive material must remain outside public source and public
  routes unless a separate review confirms consent, necessity, and safe handling.
- Executable code requires dependency, license, security, privacy, data-flow, test,
  and maintenance review before any migration decision.

## Next Recommended Branch

`status-current-copy-reconciliation-v001`

Purpose: update `/status` to reflect that Journey preference confirmation and local
clear/restart are now completed and live verified. That work must remain separate
from this preservation inventory and should verify the current deployed behavior
again before changing public copy.
