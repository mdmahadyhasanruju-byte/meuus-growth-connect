import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";

import { JourneyProvider } from "@/journey/provider";
import { JourneyScreen } from "@/journey/ui/JourneyScreen";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — meUus Browser-Local Prototype" },
      {
        name: "description",
        content:
          "A browser-local reflection prototype for learning and responsible next steps. No account, backend, or completed platform is implied.",
      },
      { property: "og:title", content: "Journey — meUus Browser-Local Prototype" },
      {
        property: "og:description",
        content:
          "A browser-local reflection prototype for learning and responsible next steps. No account, backend, or completed platform is implied.",
      },
    ],
  }),
  component: JourneyRoute,
});

function JourneyRoute() {
  const location = useLocation();

  return (
    <JourneyProvider>
      {location.pathname === "/journey" || location.pathname === "/journey/" ? (
        <JourneyScreen kind="home" path="/journey" />
      ) : (
        <Outlet />
      )}
    </JourneyProvider>
  );
}
