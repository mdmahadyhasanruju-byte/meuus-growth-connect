# Codex Execution Directive — TanStack Start V1

Use Strict Production Mode.

Package manager:
- bun.lock exists, so use Bun consistently unless Phase 0 finds stronger conflicting evidence.
- Do not generate npm, pnpm, or Yarn lockfiles.

Mandatory invariants:
1. One canonical source for shared types.
2. Reducer-only state transitions.
3. One hydrateJourneyState() entry point.
4. Reflection tests before reflection implementation.
5. No cross-module shortcuts.
6. TanStack route loaders and beforeLoad guards never mutate progression.
7. Milestone engine is not imported into UI or route files.
8. Generated route-tree files follow the existing TanStack workflow.

Test-first order:
types/constants → reflection tests/logic → content validation → initial state → reducer tests/logic → milestone tests/logic → guards → storage → migration → hydration → provider → first-slice routes/UI → checkpoint report.

Validation:
bun run lint
bun run typecheck
bun run test
bun run test:e2e
bun run build

Do not claim unrun checks passed.
