# meUusSoulAI — Guided Reflection Pilot

> An OpenAI Build Week submission within the meUus Starting Point.

meUusSoulAI is a limited, experimental, consent-based guided-reflection
experience for adults aged 18 and above.

It may help a person pause, express what currently matters, and identify one
possible next step.

It is not therapy, diagnosis, counselling, medical advice, legal advice,
financial advice, emergency assistance, crisis monitoring, or a validated
assessment.

## Live Links

- [Guided Reflection Pilot](https://meuus.org/soulai-test)
- [Main meUus Public Foundation](https://meuus.org)
- [Public Demonstration Video](https://youtu.be/0Hydbz9nykQ)
- [Devpost Project Page](https://devpost.com/software/meuus-starting-point-one-word-to-one-week)

## Project Status

The public **meUus Starting Point** is live.

This Build Week submission focuses specifically on the bounded
**meUusSoulAI Guided Reflection Pilot**.

The wider meUus platform, user accounts, dashboards, DLAS runtime, automated
decision systems, payments, subscriptions, rewards, cloud profiles, and
complete Nine Pillar operations are not being claimed as live.

## What Existed Before OpenAI Build Week

Before the Build Week submission period, the project already included:

- the broader meUus human-development vision;
- the **me → U → us** identity and public website/domain direction;
- the meuus.org public foundation;
- early Status, Foundation, Ecosystem, Soul, book, and privacy-related pages;
- a browser-local Journey prototype;
- the Nine Pillars as intended future directions;
- early architecture, governance, and product planning.

These pre-existing elements provide context for the submitted pilot. They are
not being presented as work created entirely during Build Week.

## What Was Built or Meaningfully Extended During Build Week

During the Build Week submission period, the project was meaningfully extended
through work including:

- a consent-gated, adults-only SoulAI guided-reflection route;
- a maximum of five user messages per reflection session;
- explicit privacy, scope, emergency, and non-diagnostic limitations;
- integration of the web interface with a private n8n workflow;
- use of the OpenAI API through that private workflow;
- restricted structured records using explicitly mapped fields in Google Sheets;
- response guarding against unsupported reminder, monitoring, contact, URL,
  address, and emergency-number claims;
- Bangla, Banglish, Bengali-digit, URL, and address-pattern guard hardening;
- timeout, retry, reset, and error handling;
- a public experimental guided-reflection route at `/soulai-test`;
- the Phase One — meUus Starting Point public release;
- automated linting, type-checking, unit testing, boundary/integration testing,
  and production-build verification.

The project existed before Build Week. Judging should therefore focus on the
meaningful extensions completed during the official submission period.

## Architecture

```text
Browser
  ↓
meuus.org / Cloudflare
  ↓
TanStack Start application
  ↓
Private n8n workflow
  ↓
OpenAI API
  ↓
Bounded response guard
  ↓
Restricted Google Sheets record
  ↓
Response returned to the browser
```

The n8n workflow, credentials, webhook secrets, API keys, private reflections,
and restricted records are not included in the public repository.

## Built With

- TanStack Start
- TypeScript
- Bun
- Cloudflare
- n8n
- OpenAI API
- `gpt-5-mini`
- Google Sheets
- Webhooks
- JSON
- GitHub
- Codex with GPT-5.6

## How Codex and GPT-5.6 Were Used

The experimental reflection workflow currently uses `gpt-5-mini` through the
OpenAI API.

During OpenAI Build Week, GPT-5.6 in Codex was used as a development
collaborator for:

- reviewing the existing repository;
- examining the application and workflow architecture;
- developing and refining the SoulAI pilot experience;
- identifying unsupported-capability and safety risks;
- hardening response-guard behaviour;
- reviewing consent, privacy, and public-claim boundaries;
- debugging implementation and test failures;
- preparing and reviewing release changes;
- validating build and test results;
- supporting technical documentation and submission preparation.

GPT-5.6 was used meaningfully during the build, analysis, review, testing, and
hardening process.

It is not being claimed as the current runtime model.

## Decisions That Remained With the Founder

The founder, Md. Mahady Hasan, retained final responsibility for:

- the project purpose and human-development direction;
- product scope and naming;
- adult-only and consent requirements;
- privacy and safety boundaries;
- public status labels and limitation wording;
- what could and could not be presented as operational;
- deployment and publication approval;
- data-handling decisions;
- final acceptance or rejection of Codex suggestions.

Codex accelerated implementation, analysis, review, and testing. It did not
replace founder judgement, responsibility, or authority.

## Local Setup

### Requirements

- Bun
- Git
- A Node-compatible development environment

### Install dependencies

```bash
bun install
```

### Configure the environment

Create a local environment file from `.env.example`.

On PowerShell:

```powershell
Copy-Item .env.example .env.local
```

On macOS, Linux, or Git Bash:

```bash
cp .env.example .env.local
```

Provide only your own authorized configuration values.

### Run locally

```bash
bun run dev
```

### Create a production build

```bash
bun run build
```

Do not commit API keys, credentials, private webhook tokens, personal
reflections, restricted records, or production secrets.

## Public Testing Instructions

1. Open [https://meuus.org/soulai-test](https://meuus.org/soulai-test).
2. Review the pilot scope, adult-only requirement, consent language, privacy
   notice, and limitations.
3. Confirm that you are at least 18 years old.
4. Provide explicit consent.
5. Enter a neutral, non-emergency reflection.

Suggested test message:

> I have several responsibilities and I am finding it difficult to decide what
> to prioritize.

6. Continue through the limited guided-reflection flow.
7. Observe the reflection response and possible small next-step suggestion.
8. Confirm that the system does not claim to create reminders, monitor the
   user, contact another person, diagnose the user, or provide emergency
   assistance.

No login credentials are required.

Do not enter real passwords, financial information, identity documents,
medical records, exact addresses, or confidential third-party information.

## Verified Development Checks

The latest controlled release checks recorded during development included:

- ESLint: passed
- TypeScript: passed
- Unit tests: 24 passed, 0 failed
- Boundary/integration tests: 9 passed, 0 failed
- Production client and SSR build: passed

These checks demonstrate the tested code state. They do not constitute
clinical validation or proof of a complete meUus platform.

## Build Week Evidence

The repository history and preserved development records distinguish the
pre-existing meUus foundation from the work completed or meaningfully extended
during Build Week.

Relevant recorded commits include:

- SoulAI feature commit:
  `a24883a9dae2069e1ebadd9ece93f8c92f32fd46`
- Merged production baseline:
  `58af4c45a16e60d70e4fc226598d0883adafec78`

The representative Codex Session ID is supplied separately in the private
Devpost organizer field.

## Current Limitations

- Adults aged 18 and above only.
- Limited experimental text-reflection pilot.
- Maximum five user messages per conversation.
- Not therapy, diagnosis, counselling, medical advice, legal advice, financial
  advice, religious authority, emergency assistance, or crisis monitoring.
- No guaranteed human review.
- No background monitoring.
- Cannot create reminders.
- Cannot contact another person.
- Has not been clinically validated.
- The wider meUus platform is not live.
- The private workflow depends on configured external services.
- AI-generated responses may be incomplete, imperfect, or unsuitable.
- Users must not submit passwords, financial details, identity documents,
  medical records, exact addresses, or another person’s confidential data.

## Deployment Status

- Main public foundation: [https://meuus.org](https://meuus.org)
- Experimental pilot route:
  [https://meuus.org/soulai-test](https://meuus.org/soulai-test)
- Wider meUus application and DLAS platform: not live
- Experimental pilot runtime model: `gpt-5-mini` through the OpenAI API
- GPT-5.6 role: Codex-based development, analysis, review, testing, and
  hardening during Build Week

## Core Direction

```text
Understand → Learn → Reflect → Act

me → U → us
```

The purpose of this pilot is not to claim that AI can fully understand or
resolve a person’s life.

Its more limited purpose is to explore whether AI can support one careful,
structured moment of reflection while remaining clear about its limitations.
