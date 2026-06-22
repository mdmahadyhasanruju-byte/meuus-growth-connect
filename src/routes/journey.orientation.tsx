import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/orientation")({
  component: () => <JourneyScreen kind="orientation" path="/journey/orientation" />,
});
