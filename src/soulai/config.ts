export const SOULAI_WEBHOOK_ENV_NAME = "VITE_N8N_SOULAI_WEBHOOK_URL";

export type SoulAiWebhookConfig =
  | { status: "ready"; url: string; endpointKind: "local-mock" | "production" }
  | { status: "missing"; reason: string }
  | { status: "invalid"; reason: string };

export function validateSoulAiWebhookUrl(rawValue: string | undefined): SoulAiWebhookConfig {
  const value = rawValue?.trim();

  if (!value) {
    return {
      status: "missing",
      reason: "The public production chat webhook has not been configured.",
    };
  }

  let url: URL;

  try {
    url = new URL(value);
  } catch {
    return { status: "invalid", reason: "The configured chat endpoint is not a valid URL." };
  }

  const isLocalDevelopment =
    url.protocol === "http:" &&
    (url.hostname === "localhost" || url.hostname === "127.0.0.1" || url.hostname === "[::1]");

  if (url.protocol !== "https:" && !isLocalDevelopment) {
    return {
      status: "invalid",
      reason: "The public chat endpoint must use HTTPS.",
    };
  }

  if (url.username || url.password) {
    return {
      status: "invalid",
      reason: "The public chat endpoint must not contain embedded credentials.",
    };
  }

  if (url.pathname.toLowerCase().includes("webhook-test")) {
    return {
      status: "invalid",
      reason: "A test webhook cannot be used for the public pilot.",
    };
  }

  url.hash = "";

  return {
    status: "ready",
    url: url.toString(),
    endpointKind: isLocalDevelopment ? "local-mock" : "production",
  };
}

export function getSoulAiWebhookConfig(): SoulAiWebhookConfig {
  return validateSoulAiWebhookUrl(import.meta.env.VITE_N8N_SOULAI_WEBHOOK_URL);
}
