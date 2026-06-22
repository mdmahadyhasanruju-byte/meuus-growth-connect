# meUus Journey Mode v0.01 — Codex Implementation Contract (TanStack Start V1)

Implement inside the existing TanStack Start + Vite + React + TypeScript repository. Preserve the existing application, routes, styles, and configuration. Do not convert the project to Next.js and do not create a second application root.

Product: meUus Journey Mode v0.01
Journey: Knowledge Before Action
Milestone: First Responsible Step
Route: /journey
Status: Public Prototype
Local-first; no auth, backend, cloud saving, AI, multiplayer, payments, leaderboard, diagnosis, or visible XP.

Playable loop:
Understand → Learn → Reflect → Choose One Responsible Step → Review → Complete

Canonical state authority:
- The reducer is the sole JourneySession transition authority.
- hydrateJourneyState() is the sole recovery entry point.
- Route loaders, beforeLoad guards, components, and hooks may inspect state and dispatch typed events, but may not mutate progression.
- Storage persists resulting state but never decides progression.
- Milestone logic is invoked only from reducer-driven domain evaluation.
- Visiting a route never creates progress or a milestone.

Use TanStack Router conventions in src/routes, src/router.ts, and the generated route tree. Do not hand-edit src/routeTree.gen.ts unless the existing toolchain explicitly requires it.

Required route behaviours:
- /journey
- /journey/start
- /journey/preferences
- /journey/orientation
- /journey/quest/$questId
- /journey/reflection
- /journey/review
- /journey/confirm
- /journey/milestone
- /journey/complete
- /journey/privacy
- /journey/accessibility
- /journey/safety

ReflectionResolution:
written | considered_privately | skipped_optional | not_provided

Required reflection accepts written, considered_privately, and not_provided.
Optional reflection also accepts skipped_optional.
Undefined, unresolved, empty string, truthiness, and Boolean coercion do not count as completion.
Written text is never mandatory.

JourneyState:
idle | boundary | preferences | orientation | quest | reflection | responsibility_review | final_confirmation | milestone | completed

Recovery priority:
1. valid active in-memory state
2. valid migrated localStorage state
3. default state

Storage modes:
- session_only
- progress_only
- progress_and_reflection

In progress_only, private text must never persist.

The First Responsible Step milestone unlocks only after boundary, orientation, all required quests, reflection stage, responsible step, responsibility review, and final confirmation. It is private, local, Evidence Level 0, actionVerified false, and idempotent.

English and Bangla are required. Language switching preserves progress.
Accessibility: keyboard-only, visible focus, semantic structure, reduced motion, high contrast, text scaling, no drag-only flow, no time limits.
Privacy: no private content in URLs, logs, analytics, telemetry, metadata, or network requests.
