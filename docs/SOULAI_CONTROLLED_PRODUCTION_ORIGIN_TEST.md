# Feel meUus — Controlled Production-Origin Test Plan

Date: 2026-07-17
Status: hidden-route-only plan; no workflow publication, environment change, deployment, or live test performed

## Evidence boundary

The verified production target is Worker `meuus-growth-connect`, serving `meuus.org` and `www.meuus.org` from repository `mdmahadyhasanruju-byte/meuus-growth-connect`, branch `main`, active commit `47f372740bd343629aa4a39d5309830173c013c0`. The verified build sequence is `bun install --frozen-lockfile`, `bun run build`, then `npx wrangler deploy`. The required webhook build variable is currently absent. Current production has no `/soulai-test` route and no visible SoulAI entry.

## Founder-locked release scope

| In scope                                                       | Out of scope                                          | Unchanged public surface            |
| -------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------- |
| Direct `/soulai-test` route                                    | Homepage card, invitation, or pilot status            | Homepage                            |
| Route-local adult confirmation and consent                     | Public Status, Privacy, or Consent additions          | `/status`, `/privacy`, `/consent`   |
| Official `@n8n/chat` client and environment-only webhook       | Navigation, footer, sitemap, or release-note exposure | Navigation and footer               |
| Pseudonymous session, five-message limit, timeout, safe errors | Announcement, indexing, or general invitation         | Existing indexed routes and content |
| Route-local tests and non-public technical documentation       | Any unrelated public redesign or copy change          | Existing public layout and copy     |

## Controlled website state

Use this build-time value only in the verified hosting project:

```text
VITE_N8N_SOULAI_WEBHOOK_URL=<OWNER-SUPPLIED_PRODUCTION_CHAT_URL>
```

The value is the public production Chat Trigger URL, not an editor, management, API, credential, or test URL. This hidden-route RC1 contains no homepage entry mechanism. Because Vite injects `VITE_` values at build time, changing the value requires a new verified build and deployment before browser behavior can change.

For a local owner-only build on Windows, the prepared command sequence is:

```powershell
$env:VITE_N8N_SOULAI_WEBHOOK_URL='<OWNER-SUPPLIED_PRODUCTION_CHAT_URL>'
bun run build
Remove-Item Env:VITE_N8N_SOULAI_WEBHOOK_URL
```

Do not paste the real webhook into source, a committed `.env` file, logs, screenshots, or a public report.

## Required n8n draft state before publication

- Gate 01 verified that public identifiers exactly match `meuus.org/soulai-test`, `meuus-soulai-consent-v1`, and `meuus-soulai-guided-reflection-v1` in the saved private draft.
- Chat Trigger uses the production embedded-chat mode and the existing response-node behavior.
- Gate 01 verified allowed origins as exactly `https://meuus.org` and `https://www.meuus.org` in the saved private draft.
- Data minimization remains applied: successful and manual executions not saved, execution progress not saved, failed production executions saved temporarily only for bounded diagnosis.
- The workflow stays private until a separate owner publication action.

## Single controlled test

After separate approvals for workflow publication, environment change, and controlled deployment:

1. Confirm rollback is prepared before deployment.
2. Confirm homepage, Status, Privacy, Consent, navigation, footer, and sitemap remain unchanged.
3. Visit the exact `/soulai-test` URL from the deployed `meuus.org` origin; do not announce or share it.
4. Confirm `noindex,nofollow` and no n8n request before both adult confirmation and active consent.
5. Run one owner-controlled session with one harmless initial message.
6. Continue only if each earlier check passes, never exceeding five user messages.
7. Verify response, one restricted Sheet row, approved identifiers, stable session reference, reset isolation, five-message closure, safe error copy, and inert raw HTML.
8. Stop immediately on unexpected public exposure, data retention, CORS, model, session, storage, or retry behavior.
9. Preserve only redacted evidence and stop the test window.

## Public discovery remains out of scope

This RC1 intentionally has no homepage/public-entry flag. A later public entry, status disclosure, sitemap decision, announcement, or invitation requires a separate Founder-authorized source and content release; it cannot be enabled through this hidden-route build.

## Rollback

1. Disable or unpublish the n8n RC1 workflow under owner authority.
2. Confirm the homepage and ordinary public pages still contain no SoulAI entry or invitation.
3. Set or leave `VITE_N8N_SOULAI_WEBHOOK_URL` empty in the verified build environment.
4. Rebuild/redeploy if the client bundle embedded the value, or promote the verified prior Cloudflare version if that is the safer approved containment action.
5. Verify `/soulai-test` is unavailable or safely unavailable.
6. Preserve evidence; do not delete records during initial incident assessment.
7. Record the action, result, and remaining connected-system limitations.

The full shutdown and rollback sequence has not yet been rehearsed.
