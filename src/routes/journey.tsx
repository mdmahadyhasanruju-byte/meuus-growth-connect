import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";

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
  component: JourneyRoute,
});

function JourneyRoute() {
  const location = useLocation();

  if (location.pathname === "/journey" || location.pathname === "/journey/") {
    return <JourneyScreen kind="home" path="/journey" />;
  }

  return <Outlet />;
}
