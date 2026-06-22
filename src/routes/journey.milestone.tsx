import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/milestone")({
  component: () => <JourneyScreen kind="locked" path="/journey/milestone" />,
});
