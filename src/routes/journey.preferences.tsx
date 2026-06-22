import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/preferences")({
  component: () => <JourneyScreen kind="preferences" path="/journey/preferences" />,
});
