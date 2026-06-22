import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/confirm")({
  component: () => <JourneyScreen kind="locked" path="/journey/confirm" />,
});
