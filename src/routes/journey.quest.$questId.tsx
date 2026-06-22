import { createFileRoute, notFound } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/quest/$questId")({
  loader: ({ params }) => {
    if (params.questId !== "KBA-LQ-001") {
      throw notFound();
    }
    return { questId: params.questId };
  },
  component: () => <JourneyScreen kind="quest" path="/journey/quest/KBA-LQ-001" />,
});
