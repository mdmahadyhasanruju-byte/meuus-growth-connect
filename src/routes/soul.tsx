import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/soul")({
  component: SoulLayout,
});

function SoulLayout() {
  return <Outlet />;
}
