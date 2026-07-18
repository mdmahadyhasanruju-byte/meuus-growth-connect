# Feel meUus RC1 — Privacy and Data Flow

Date: 2026-07-15
Status: local release candidate; no public traffic

## Processing path if later approved

Only after adult confirmation and active consent, a submitted message may pass through:

1. `meuus.org/soulai-test`;
2. the official n8n chat client;
3. the approved public n8n Chat Trigger workflow;
4. the configured AI model provider;
5. the restricted pilot record destination.

The page says **pseudonymous**, not anonymous. The browser and service providers may process ordinary network and technical metadata.

## Browser storage

Application code stores only:

- a random pseudonymous conversation ID;
- the number of user messages used in the current conversation.

Application code does not write chat text or feedback to localStorage or sessionStorage. The official chat package also receives the explicit pseudonymous ID. Exit/reset removes its previous session key and creates a new ID.

## Intended restricted record

The approved schema target remains:

```text
timestamp
session_id
user_message
ai_response
source
consent_version
pilot_version
save_status
review_status
```

The owner-approved local public values are:

```text
source=meuus.org/soulai-test
consent_version=meuus-soulai-consent-v1
pilot_version=meuus-soulai-guided-reflection-v1
```

Gate 01 verified the private n8n RC1 draft identifiers, allowed origins, and persistence against the approved public values. Production runtime behavior remains untested, and workflow publication, execution, deployment, and public release remain unauthorized.

## Information not requested

The pilot must not request a full name, email, phone number, exact address, NID number, password, payment credential, private account information, precise location, medical document, or another person’s confidential information.

## Retention and deletion

Restricted Google Sheet pilot records have an approved 30-day retention period measured from each submitted-message timestamp. One disposable-row deletion test passed for the Google Sheet scope, and the documented 30-day Sheet deletion procedure and completion record exist. This does not establish deletion or retention behavior for n8n execution data, AI-provider or managed-gateway data, Google Sheets revision history, technical logs, exports, backups, screenshots, or other connected systems. Actual Sheet sharing/access settings still require manual verification before publication.

The conditionally approved channel is `privacy@meuus.org`, but it is not operational and must not be presented as available until mailbox creation, access control, send/receive, and public verification pass. The website exposes a copyable pseudonymous Session Reference; matching may still fail.

The private RC1 applies the owner-approved n8n data-minimization settings: successful production executions are not saved, manual executions are not saved in the public-ready state, and execution progress is not saved. Failed production executions may be saved temporarily for bounded incident diagnosis. Those failed executions remain readable and unredacted because redaction is unavailable on the current plan.

Exact failed-execution retention, managed AI Gateway processing and retention, technical logs, exports, and backups remain provider-controlled or unverified. Their verified limits must be disclosed, and deletion across every connected system cannot be guaranteed without separate evidence.

Selected review is limited to Ruju, up to 10% of weekly sessions or 10 sessions per week—whichever is lower—plus approved incident, harmful-output, security, or deletion investigations. There is no routine reading of every conversation, continuous monitoring, or guaranteed human response.

## Consent and exit

Neither consent choice is pre-selected. A person may leave before submitting a message. Once submitted, a message may already have reached configured providers. Exit/reset changes the browser conversation ID and visible state; it does not claim to delete records already processed by external services.
