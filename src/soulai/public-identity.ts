export const OWNER_APPROVAL_PENDING = "AWAITING_OWNER_APPROVAL";

export const PUBLIC_CONSENT_VERSION = "meuus-soulai-consent-v1";
export const PUBLIC_PILOT_VERSION = "meuus-soulai-guided-reflection-v1";
export const PUBLIC_SOURCE_ID = "meuus.org/soulai-test";

export const INTERNAL_N8N_CONSENT_VERSION = "internal-test-v1";
export const INTERNAL_N8N_PILOT_VERSION = "soulai-pilot-v1";
export const INTERNAL_N8N_SOURCE_ID = "n8n-soulai-test";

export function publicSoulAiIdentifiersAreApproved(): boolean {
  return [PUBLIC_CONSENT_VERSION, PUBLIC_PILOT_VERSION, PUBLIC_SOURCE_ID].every(
    (value) => value !== OWNER_APPROVAL_PENDING && value.trim().length > 0,
  );
}
