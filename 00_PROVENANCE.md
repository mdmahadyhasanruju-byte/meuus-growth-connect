# 00_PROVENANCE — 01-apps/meuus-org

## Status: VERIFIED LIVE-SOURCE (refreshed 2026-09-24)

**Surface:** meuus.org (UNDERSTAND) — Cloudflare Worker `meuus-growth-connect`

| Field | Value |
|---|---|
| Source pack | `C:\Users\Lenovo\Desktop\meUus_R55_Two_Lane_Promotion_EXECUTION_20260825-044944\UNDERSTAND_R46\` |
| Live version (pinned) | `3c876c8c-3280-4c28-80f2-3ce65823d4cc`, deployed 2026-08-24T22:52:04Z (`meUus-R55-promotion-UNDERSTAND_R46`) |
| Verification | **5/5 live client assets SHA-256 byte-identical** (index-BgwCToJi.js, index-bjm0Pq6g.js, check-BtVmnVIs.js, map-KiKmzPac.js, styles-CCzh1Dsk.css — styles present in both dist/client and dist/server copies, both identical) |
| Copy method | robocopy /E, 2026-09-24; **dist INCLUDED** (verified live build) |
| Exclusions | node_modules, .git, .temp, .vercel, .vinext, .vinect, out, build, .next, .gradle, .kotlin, caches, .turbo, coverage, secrets dirs; .env*, *.env, *.tsbuildinfo, *.log, *.pem, *.key, *.jks, *.keystore files |
| Slot contents | 321 files / ~34 MB (was 172 files stale snapshot before refresh) |
| Secrets scan | CLEAN — zero node_modules / .env* / .pem / .key / .jks / .keystore / .temp / .git / *.tsbuildinfo in slot |

## Caveat (server bundle)

The pinned live deployment (2026-08-24) predates this source tree's build stamps (dist built 2026-08-25).
Client output is byte-identical to live, but the **server bundle in `dist/server/` may be newer than the
deployed live version** and cannot be verified read-only. Treat `dist/client/` as the live-verified
artifact; treat `dist/server/` as best-available, not pinned.

## Supersession

Replaces the previous STALE snapshot copied from
`E:\MEUUS_MASTER_ORGANIZED_20260814\05_GROWTH_WEBSITE\meuus-growth-connect-lf` (TanStack Start build
2026-08-19, behind live — see record §7). The E: original remains untouched. Prior snapshot removed from
this slot; original E: archive copy is the recovery path if ever needed.

Evidence chain: record §7 (currency check) → §9 (version pinning) → §10 (client-asset recovery) → §11
(live source located: R55 UNDERSTAND_R46) → §12 (this refresh).
