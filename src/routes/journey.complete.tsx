import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/complete")({
  component: () => <JourneyScreen kind="locked" path="/journey/complete" />,
});
