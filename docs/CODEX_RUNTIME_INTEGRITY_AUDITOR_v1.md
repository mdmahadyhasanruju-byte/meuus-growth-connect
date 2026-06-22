# Codex Runtime Integrity Auditor — TanStack Start V1

Verification-only by default.

Blocking checks:
- reducer remains sole transition authority
- hydrateJourneyState remains sole recovery authority
- no journey mutation in TanStack route loaders, beforeLoad, components, or hooks
- explicit reflection terminal states remain intact
- no milestone engine imports in src/routes or UI components
- no direct localStorage outside approved adapter
- navigation never awards progression
- no private content in route search params, URLs, logs, network, analytics, or telemetry
- no backend, auth, AI, or visible XP introduced
- no conflicting hand-written route tree

Outcomes:
PASS — CONTINUE
PASS WITH DOCUMENTED NON-BLOCKING ISSUE
FAIL — STOP AND CORRECT
