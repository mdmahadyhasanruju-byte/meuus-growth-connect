import { createFileRoute } from "@tanstack/react-router";

import { SoulAiPilot } from "@/components/soulai/SoulAiPilot";

export const Route = createFileRoute("/soulai-test")({
  head: () => ({
    meta: [
      { title: "Feel meUus — Guided Reflection Pilot" },
      {
        name: "description",
        content:
          "An experimental, consent-gated guided-reflection pilot. It is not therapy, diagnosis, professional advice, emergency support, or the completed DLAS system.",
      },
      { property: "og:title", content: "Feel meUus — Guided Reflection Pilot" },
      {
        property: "og:description",
        content:
          "A bounded local release candidate for short guided reflection. Experimental, consent-gated, and not professional or emergency support.",
      },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: SoulAiTestPage,
});

function SoulAiTestPage() {
  return <SoulAiPilot />;
}
