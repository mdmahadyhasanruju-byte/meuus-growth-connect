# meUus Game Work Inventory v001

## Status

Archive evidence only — not production truth, not a live product, not imported into meuus.org.

This document inventories recovered meUus game-related work as archive evidence for future planning. It does not import game code, create a public route, add a product surface, or verify that the game is live.

## Recovered artifacts

| Artifact | Type | Size | SHA256 | Notes |
| --- | --- | ---: | --- | --- |
| `C:\Users\mdmah\OneDrive\Documents(1)\Downloads\meuus_game_v1.jsx` | JSX | 59,534 bytes | `5F9B2E0D4B4F29C04E0F21A3371974D37F9B30F3D73BE1A56D6B2A255DC0B0F9` | Earlier recovered game prototype candidate. |
| `C:\Users\mdmah\OneDrive\Documents(1)\Downloads\meuus_game_v3.jsx` | JSX | 99,244 bytes | `8ABDD980AC2299E99A52552DD4FDE7FFAA5E8525ECB4A368B48A62247D90D2A9` | Preferred reference candidate for future review. |
| `C:\Users\mdmah\OneDrive\Documents(1)\Downloads\meuus_game_v3_1.jsx` | JSX | 99,244 bytes | `8ABDD980AC2299E99A52552DD4FDE7FFAA5E8525ECB4A368B48A62247D90D2A9` | Exact duplicate of `meuus_game_v3.jsx`. |
| `C:\Users\mdmah\OneDrive\Desktop(1)\meuus deploy work\for21\meuus-org\AllinOne_meUus_PlayBook.html` | HTML | 144,389 bytes | `C7C38F863ADFE98E9CEE43BEC1427334D5EB3B1AA7E094F8977C451CD428710E` | Adjacent playbook artifact; not imported into production source. |

## Duplicate note

`meuus_game_v3.jsx` and `meuus_game_v3_1.jsx` are exact duplicates by SHA256.

Keep `meuus_game_v3.jsx` as the preferred reference candidate.

## What the game appears to be

The recovered v3 artifact appears to be a gamified human-development/Journey prototype.

It uses “The Human Development Civilization Game” framing and combines:

- Journey
- reflection
- Knowledge Before Action
- Seerah learning
- pillars
- XP
- achievements
- realms
- quests
- mood check-in
- meYoo

This makes it a potentially meaningful future app concept, but not a verified production feature.

## Domain classification

| Domain | Current classification |
| --- | --- |
| `meuus.org` | Not suitable as an active public route now. The public trust site should not present this as a live product or current Journey feature. |
| `meuus.app` | Best future destination after safety hardening, because the game is app-like and product-like. |
| `meuussoul.com` | May later support learning/reflection content, but not the whole game shell. |
| Current overall classification | Archive only / future app module candidate. |

## Safety risks

- Direct browser call to Anthropic.
- “Always private” wording conflicts with external AI call.
- Private reflections, mood, intention, and chat can be sensitive.
- DLAS claims are not production-verified.
- XP/reward/achievement language could be misread as real-world achievement, ranking, eligibility, or contribution proof.
- Religious/Seerah content needs editorial review.
- Mental wellbeing, family, recovery, and drug-related content require careful safety boundaries.
- No visible consent/privacy/emergency boundary in the inspected artifact.
- “World’s first” style claims need removal or verification.

## Must not import directly

Do not directly import:

- Anthropic browser fetch
- meYoo screen as-is
- “Powered by Claude · Always private”
- DLAS assessment claims
- XP/reward claims as real achievement
- private reflection fields without consent
- sensitive wellbeing/recovery/religious content without review
- “world’s first” claims
- any archive code wholesale

## Future safe path

Recommended sequence:

1. `docs/game-work-inventory-v001`
2. `docs/game-safety-boundary-v001`
3. isolated game static-preview safety branch
4. disable AI/API calls
5. add privacy/consent/non-diagnostic boundaries
6. review religious/wellbeing/recovery content
7. only then consider meUus.app integration

## Relationship to current Journey

Current production Journey is browser-local, bounded, and does not include AI, backend, cloud storage, auth, payment, or rewards.

Game v3 conflicts with that boundary if imported as-is.

Treat the game as a future companion concept, not a current Journey feature.

## Validation expectation

No build is required for this docs-only inventory.

`git diff --check` is the expected validation gate for this PR.
