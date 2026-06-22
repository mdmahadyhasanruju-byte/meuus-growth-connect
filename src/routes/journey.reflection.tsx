import { createFileRoute } from "@tanstack/react-router";

import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey/reflection")({
  component: () => <JourneyScreen kind="reflection" path="/journey/reflection" />,
});
