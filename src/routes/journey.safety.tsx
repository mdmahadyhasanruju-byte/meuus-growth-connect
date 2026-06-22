import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/safety")({
  component: () => <JourneyScreen kind="info" path="/journey/safety" />,
});
