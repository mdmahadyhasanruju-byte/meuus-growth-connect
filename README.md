# meuus.org — Public Truth, Trust & Transparency Gateway
## Layer 1: Understand — The Public Front Door of meUus

This repository powers **[meuus.org](https://meuus.org)**, the authoritative public portal that explains what meUus is, why it was created, its ethical foundation, and its active operational status.

---

### 📌 Core Architecture & Governance
* **Operating Law:** `Claim ≤ Evidence` — Consistent, Honest Action Over Perfection.
* **Governing Document:** [`governance/MEUUS_AMANAH_CONSTITUTION_V1.md`](governance/MEUUS_AMANAH_CONSTITUTION_V1.md)
* **Status System:** Transparently marks what features are *Live*, *Pilot*, *Demo*, *Manual*, *In Review*, or *Coming Later*.

---

### 🚀 Key Routes & Pages
- `/` — Homepage (What is meUus? Why does it exist? Who is it for?)
- `/status` — Live ecosystem status and verification checkpoint
- `/about` — Origin, philosophy, and founder responsibility statement
- `/amanah` — The Amanah Constitution and ethical principles
- `/join` — Express interest (manual review; no guaranteed role)

The founder's living archive, including *The First True Story of meUus*, is kept on
[rujbel.org](https://rujbel.org). `/founder` on this site redirects there by design, so
the archive is not duplicated here.

---

### 💻 Development & Deployment
This repository is a Bun project (`bun.lock`, `bunfig.toml`).

```bash
# Install dependencies
bun install --frozen-lockfile

# Run local development server
bun run dev

# Build production bundle
bun run build

# Typecheck, lint, unit tests
bun run typecheck
bun run lint
bun test tests/unit
```
