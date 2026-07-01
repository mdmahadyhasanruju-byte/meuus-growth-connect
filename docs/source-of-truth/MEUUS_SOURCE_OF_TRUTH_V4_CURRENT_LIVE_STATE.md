# MEUUS_SOURCE_OF_TRUTH_V4_CURRENT_LIVE_STATE

**Recorded:** 2 July 2026 (Asia/Dhaka)

**Purpose:** Current verified public-state checkpoint

**Repository baseline:** `meuus-growth-connect` main at `41b7306692e48e552c0dbfdf9e586b1c43f9373c`

## 1. Date and purpose

This document records the current verified public state after:

- PR #36, the public manifesto repair;
- PR #37, the Amanah Constitution merge;
- the temporary `meuussoul.com` redirect repair; and
- the `meuus.app` truthful-placeholder repair.

It distinguishes what is publicly reachable now from what remains unverified, not live, archival, experimental, or future work. It is a current-state record, not a claim that every meUus concept or historical artifact has been implemented.

## 2. Governing principle

> “meUus is an amanah before it is an app, company, platform, or ecosystem.”

Current public claims must remain no stronger than the evidence supporting them. Correction is part of the amanah.

## 3. Current canonical truth source

- `https://meuus.org` is the current public foundation and truth gateway.
- `https://meuus.org/status` is the current public status checkpoint.
- `https://meuus.org/amanah` is the public Amanah Constitution page.
- `docs/source-of-truth/MEUUS_AMANAH_CONSTITUTION_V1.md` is the internal governing constitution.

When an older page, deployment, document, screenshot, prototype, or source pack conflicts with these current surfaces, it must not be treated as current public truth without renewed review and explicit promotion.

## 4. Current live domain state

The following behavior was verified with public, no-auth HTTP GET checks on 2 July 2026.

| Domain or URL | Current verified behavior | Public meaning |
| --- | --- | --- |
| `meuus.org` | HTTP 200 | Public foundation and current truth gateway |
| `www.meuus.org` | HTTP 301 to `https://meuus.org/` | Safely resolves to the canonical foundation |
| `meuus.app` | HTTP 308 to `https://www.meuus.app/` | Safely resolves to the truthful app placeholder |
| `www.meuus.app` | HTTP 200; renders **meUus App — Being Realigned** | Truthful placeholder; it does not claim a live full app, AI runtime, DLAS runtime, payments, accounts, or dashboards |
| `meuussoul.com` | Temporary HTTP 302 to `https://meuus.org/soul` | Temporary Soul-domain contradiction repair |
| `www.meuussoul.com` | Temporary HTTP 302 to `https://meuus.org/soul` | Temporary Soul-domain contradiction repair |

## 5. Repairs completed

### 5.1 `meuussoul.com`

- **Cloudflare Redirect Rule name:** `P0 temporary Soul redirect to meuus.org/soul`
- **Rule condition:** `(http.host in {"meuussoul.com" "www.meuussoul.com"})`
- **Target:** `https://meuus.org/soul`
- **Status:** Active temporary redirect
- **Verified public result:** Both apex and `www` return HTTP 302 to the exact target.

The redirect is the current public safety layer. It does not establish the old Worker source as current truth and does not delete or rewrite that source.

### 5.2 `meuus.app`

- **Vercel project:** `meuus-app-ai`
- **Repository:** `mdmahadyhasanruju-byte/meuus-app-ai`
- **Main commit:** `6d6ac79fccb6f92bc056d5aed6069b6f31950525`
- **Production:** Ready / Current
- **Production resources:** One static `index.html`
- **Functions:** 0
- **`/api/dlas`:** HTTP 404
- **`/api/meyoo`:** HTTP 404

The production page is a static truthful placeholder. It contains no full app runtime, API directory, backend, account system, AI runtime, DLAS runtime, payment system, forms, tracking, or data capture.

## 6. What is live now

The following public surfaces are currently reachable:

- the `meuus.org` public foundation site;
- the current status page at `/status`;
- the public Amanah Constitution page at `/amanah`;
- the repaired public founder and manifesto content;
- the Soul gateway at `/soul`;
- the truthful app placeholder at `www.meuus.app`;
- the bounded browser-local Journey prototype at `/journey`; this is a prototype/first slice, not a backend service or full Journey system; and
- the public Terms, Privacy, Consent, Domains, and Appreciation pages.

Public reachability does not by itself prove that every statement on a page has completed claim review. The status page and Amanah boundaries remain controlling.

## 7. What is not live yet

The following must not be presented as verified live systems:

- a full meUus app;
- backend user accounts;
- an AI runtime;
- a DLAS runtime;
- cloud storage;
- payments;
- subscriptions;
- rewards;
- dashboards;
- full service systems;
- automated decisions; or
- professional legal, medical, psychological, financial, religious, employment, or emergency support.

Public educational, reflective, spiritual, legal-boundary, or wellbeing-related writing does not create professional authority, diagnosis, judgment, representation, employment, or a service relationship.

## 8. Archive rule

Old source packs, recovered repositories, old live pages, old app deployments, old Soul pages, raw founder writing, screenshots, and prototypes are evidence or archive material. They are not current public truth unless they are reviewed against the current constitution and status boundaries, corrected where necessary, and explicitly promoted.

Archive value must be preserved without allowing archive claims to silently regain public authority.

## 9. Current risk register

| Risk | Current position | Required follow-up |
| --- | --- | --- |
| Countdown or date display | May still create a false or stale time claim if visible | Review the live display and fix the truth bug if it remains visible |
| Old Soul Worker provenance | The redirect makes the public domain safe, but the exact old Worker source should still be preserved and inspected | Perform later provenance/preservation work without removing the active redirect first |
| Recovered app material | Current app production is safe, while recovered app repositories and branches remain archive only | Keep them isolated unless reviewed and deliberately promoted |
| Public pillars and roles | Some language may still be broader than the evidence | Run a dedicated claim-and-evidence review |
| Older source-of-truth documents | Documents older than this V4 may describe superseded or incomplete state | Treat them as potentially stale until reconciled or updated |

## 10. Next recommended work order

1. Verify live propagation of `/amanah` in a clean browser.
2. Verify all repaired domains from a browser, including redirect destinations and visible copy.
3. Refresh the domain record documentation with current ownership, redirect, hosting, and rollback evidence.
4. Review public pillar and role claim language against evidence and the Amanah Constitution.
5. Fix the countdown/date truth bug if it is still visible.
6. Then pause for rest and a founder reset before expanding scope.

## 11. No-change confirmation

This document is descriptive only. It does not itself change deployments, redirects, domains, DNS, public routes, app code, Cloudflare Workers, Vercel settings, GitHub workflows, or production behavior.
