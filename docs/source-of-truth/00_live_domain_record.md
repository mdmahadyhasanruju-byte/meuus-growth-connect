# Live Domain Record

## Status Labels

- Live verified: `https://meuus.org`, `https://www.meuus.org`, and `/status` are connected to the live `meuus-growth-connect` project per the current operator record supplied on 2026-06-26.
- Merged source: `/status`, `/journey`, and `/join` exist in the repository source.
- Prototype: `/journey` is a local-first Journey Mode first-slice prototype.
- Proposed: public domain governance should keep live records separate from source-code evidence.
- Planned: reconcile Cloudflare source configuration with the currently connected Worker identity.
- Not yet available: source code alone does not prove runtime health, inbox delivery, worker routing, or operational program availability.

## Current Live Record

| Item | Current record | Evidence boundary |
|---|---|---|
| Root domain | `https://meuus.org` | Live verified by current operator record; not independently proven by source code. |
| WWW domain | `https://www.meuus.org` | Live verified by current operator record; not independently proven by source code. |
| Status page | `/status` | Live on main domain per operator record; source route exists at `src/routes/status.tsx`. |
| Journey route | `/journey` | Source route exists; must be described as prototype unless separately approved. |
| Join route | `/join` | Source route exists; intake is manual email-client handoff, not confirmed delivery automation. |
| PR #9 | Merged into `main` | Latest local `main` commit message references `#9`. |
| Latest main commit | `733ec8dd9ba6ddb3b0f367f0f217f474cf5ae116` | Local `HEAD`, `origin/main`, and `origin/HEAD` pointed here before this documentation branch was created. |
| Cloudflare Worker | `meuus-growth-connect` | Current operator record says this is connected. Repository `wrangler.jsonc` still names `tanstack-start-app`; this needs reconciliation before source config is used as proof. |
| Old mapping | `broken-leaf-1d10` removed | Current operator record says the old domain mapping was removed. Keep as live-admin record unless Cloudflare state is rechecked. |

## Claim Boundary

This file records current live-domain truth for internal governance. It does not add routes, modify deployment behavior, or prove that One Word Start, First Signal Listening, DLAS, AI guidance, backend services, subscriptions, rewards, payments, or automated intake are available.
