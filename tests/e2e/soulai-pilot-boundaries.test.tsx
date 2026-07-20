import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";

import { SafeMessage, SoulAiPilot } from "../../src/components/soulai/SoulAiPilot";

const projectRoot = join(import.meta.dir, "..", "..");

describe("Feel meUus Day One pilot boundaries", () => {
  test("renders the dedicated pilot with active, unchecked adult and consent controls", () => {
    const html = renderToStaticMarkup(
      <SoulAiPilot
        webhookConfig={{
          status: "ready",
          endpointKind: "local-mock",
          url: "http://localhost:8787/webhook/chat",
        }}
      />,
    );

    expect(html).toContain("Feel meUus");
    expect(html).toContain("meUusSoulAI —");
    expect(html).toContain("Experimental · Free Pilot · 18+ · Maximum 5 Messages");
    expect(html).toContain("Begin the Guided Reflection");
    expect(html).toContain("I confirm that I am 18 years of age or older.");
    expect(html).toContain("আমি নিশ্চিত করছি যে আমার বয়স ১৮ বছর বা তার বেশি।");
    expect(html).toContain("retained for no more than 30 days");
    expect(html).toContain("সর্বোচ্চ ৩০ দিন");
    expect(html).toContain("not diagnosis, therapy, medical advice, legal advice");
    expect(html.match(/type="checkbox"/g)?.length).toBe(2);
    expect(html).not.toContain('checked=""');
    expect(html).toContain('disabled=""');
    expect(html).toContain("motion-reduce:animate-none");
    expect(html).toContain("Harmless local mock mode");
  });

  test("renders safe missing and invalid states without endpoint details", () => {
    const missing = renderToStaticMarkup(
      <SoulAiPilot
        webhookConfig={{ status: "missing", reason: "Production endpoint not configured." }}
      />,
    );
    const invalid = renderToStaticMarkup(
      <SoulAiPilot
        webhookConfig={{
          status: "invalid",
          reason: "Private endpoint details must remain hidden.",
        }}
      />,
    );

    for (const html of [missing, invalid]) {
      expect(html).toContain("Reflection is resting right now. Please try again shortly.");
      expect(html).toContain("No connection has been attempted");
      expect(html).toContain('disabled=""');
      expect(html).not.toContain("Private endpoint details must remain hidden");
    }
  });

  test("escapes plain-text content owned by the React interface", () => {
    const html = renderToStaticMarkup(
      <SafeMessage text={'<script>alert("unsafe")</script><strong>not markup</strong>'} />,
    );

    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain("&lt;strong&gt;");
    expect(html).not.toContain("<script>");
    expect(html).not.toContain("<strong>");
  });

  test("adds one bounded public gateway while keeping navigation and legal surfaces free of invitations", () => {
    const home = readSource("src/routes/index.tsx");
    const status = readSource("src/routes/status.tsx");
    const privacy = readSource("src/routes/privacy.tsx");
    const consent = readSource("src/routes/consent.tsx");
    const navigation = readSource("src/data/navigation.ts");
    const navbar = readSource("src/components/site/Navbar.tsx");
    const footer = readSource("src/components/site/Footer.tsx");
    const route = readSource("src/routes/soulai-test.tsx");
    const routeTree = readSource("src/routeTree.gen.ts");

    expect(route).toContain('createFileRoute("/soulai-test")');
    expect(route).toContain("noindex,nofollow");
    expect(routeTree).toContain("'/soulai-test'");

    expect(home).toContain('to="/soulai-test"');
    expect(home).toContain("Feel meUus");
    expect(home).toContain("Experimental");
    expect(home).toContain("Claim ≤ Evidence");
    expect(home).toContain("me → U → us");
    expect(home).toContain("Cannot create reminders, monitor you, contact people");
    expect(status).toContain('to="/soulai-test"');
    expect(status).toContain("Experimental Pilot");
    expect(status).toContain("The complete meYoo");

    const ordinaryPublicSurfaces = [privacy, consent, navigation, navbar, footer];
    for (const source of ordinaryPublicSurfaces) {
      expect(source).not.toContain("/soulai-test");
      expect(source).not.toContain("Feel meUus");
      expect(source).not.toContain("meUusSoulAI");
    }
  });

  test("uses the official client after consent and enforces reset, timeout, retry and UI-limit code paths", () => {
    const component = readSource("src/components/soulai/SoulAiPilot.tsx");
    const client = readSource("src/soulai/client.ts");
    const policy = readSource("src/soulai/public-policy.ts");
    const session = readSource("src/soulai/session.ts");
    const css = readSource("src/components/soulai/soulai-n8n-chat.css");
    const packageJson = readSource("package.json");

    expect(packageJson).toContain('"@n8n/chat": "1.29.1"');
    expect(component).toContain('await import("@n8n/chat")');
    expect(component).toContain("const consentComplete = adultConfirmed && consentGiven");
    expect(component).toContain("!consentComplete ||");
    expect(component).toContain("if (!active || !configurationReady");
    expect(client).toContain('chatInputKey: "chatInput"');
    expect(client).toContain('chatSessionKey: "sessionId"');
    expect(client).toContain("loadPreviousSession: false");
    expect(client).not.toContain("fetch(");
    expect(client).not.toContain("extractSoulAiOutput");
    expect(component).toContain("REQUEST_TIMEOUT_MS = 30_000");
    expect(component).toContain("Prepare one manual retry");
    expect(component).toContain("Nothing will be resent automatically");
    expect(component).toContain("replaceSoulAiBrowserSession");
    expect(policy).toContain("Your Session Reference");
    expect(component).toContain("navigator.clipboard.writeText");
    expect(component).toContain("exitReference");
    expect(component).toContain("Return to the consent gate");
    expect(session).toContain("N8N_CHAT_LOCAL_STORAGE_KEY");
    expect(session).toContain("SOULAI_MAX_USER_MESSAGES = 5");
    expect(css).toContain(".soulai-chat-locked .chat-input");
    expect(css).toContain("prefers-reduced-motion: reduce");
    expect(css).toContain("max-width: 640px");
  });

  test("contains no app-owned raw HTML rendering, sensitive logs, or conversation persistence", () => {
    const component = readSource("src/components/soulai/SoulAiPilot.tsx");
    const client = readSource("src/soulai/client.ts");
    const session = readSource("src/soulai/session.ts");
    const appSources = `${component}\n${client}\n${session}`;

    expect(appSources).not.toContain("dangerouslySetInnerHTML");
    expect(appSources).not.toContain("innerHTML");
    expect(appSources).not.toContain("console.log");
    expect(appSources).not.toContain("console.error");
    expect(session).not.toContain("user_message");
    expect(session).not.toContain("ai_response");
    expect(component).not.toContain("localStorage.setItem");
  });
});

function readSource(relativePath: string): string {
  return readFileSync(join(projectRoot, relativePath), "utf8");
}
