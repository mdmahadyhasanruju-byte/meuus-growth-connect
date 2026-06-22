import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey Mode — Knowledge Before Action" },
      {
        name: "description",
        content: "A local-first public prototype for learning before action.",
      },
    ],
  }),
  component: () => <JourneyScreen kind="home" path="/journey" />,
});
