import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/start")({
  component: () => <JourneyScreen kind="start" path="/journey/start" />,
});
