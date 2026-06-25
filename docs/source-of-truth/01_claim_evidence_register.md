# Claim Evidence Register

## Decision Rule

Claims must use the strongest label supported by evidence, and no stronger. When live-admin facts and repository facts differ, preserve both and mark the gap for reconciliation.

## Register

| Claim | Label | Evidence | Allowed wording | Blocked wording |
|---|---|---|---|---|
| `meuus.org` is connected to the project. | Live verified | Current operator record says `meuus.org` and `www.meuus.org` are connected to `meuus-growth-connect`. | "`meuus.org` is connected to the current meUus project." | "All meUus systems are live." |
| `/status` is live on the main domain. | Live verified | Current operator record plus merged source route. | "The status page is live and should be used as a truth boundary." | "The full platform is live." |
| PR #9 was merged into `main`. | Merged source | Latest local `main` commit is `733ec8dd9ba6ddb3b0f367f0f217f474cf5ae116` with a status-page PR message. | "PR #9 added the Day One truth status page to `main`." | "PR #9 deployed every planned system." |
| Public website source exists. | Merged source | Routes and UI source exist in `src/routes` and supporting components. | "The public website source is merged." | "The public website proves all operations are active." |
| Journey Mode exists. | Prototype | `src/routes/journey.tsx` and `src/journey/*` implement a local-first first slice. | "Journey Mode first slice is a prototype." | "Journey is complete or clinically validated." |
| `/join` accepts founding interest. | Merged source | `src/routes/join.tsx` opens a `mailto:` flow and tells the user to send from their mail app. | "The join flow prepares a manual email." | "Applications are automatically received." |
| DLAS exists in the product. | Proposed | No implemented engine, schema, scoring model, consent model, or validated workflow is present. | "DLAS is a proposed future assessment/guidance concept." | "DLAS is operational." |
| First Signal Listening Layer exists. | Proposed | Recovered analysis defines a framework; no approved route, service, form, or workflow exists. | "First Signal Listening Layer is a proposed internal framework." | "First Signal Listening is deployed." |
| One Word Start exists. | Proposed | Recovered analysis defines a possible manual pilot; no approved pilot record or tooling exists. | "One Word Start is a proposed manual pilot." | "One Word Start is an AI/DLAS feature." |
| Backend, database, auth, AI agents, payments, subscriptions, rewards, wallet, analytics, jobs, or automated service delivery are available. | Not yet available | Current source and status boundaries do not contain these systems. | "These systems are not yet available." | "The complete platform is operational." |

## Required Evidence Fields For New Claims

- Claim text
- Label
- Owner
- Date
- Source path or live-admin record
- Verification method
- Confidence
- Public channel, if any
- Expiration or review date
- Contradictions or unresolved gaps
