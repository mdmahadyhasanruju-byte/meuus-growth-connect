import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/accessibility")({
  component: () => <JourneyScreen kind="info" path="/journey/accessibility" />,
});
