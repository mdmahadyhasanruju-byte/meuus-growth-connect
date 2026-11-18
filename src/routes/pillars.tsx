import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pillars")({
  component: PillarsLayout,
});

function PillarsLayout() {
  return <Outlet />;
}
