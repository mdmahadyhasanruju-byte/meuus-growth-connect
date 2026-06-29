export const PRIMARY_NAVIGATION = [
  { kind: "link", to: "/", label: "Home" },
  { kind: "link", to: "/foundation", label: "Foundation" },
  { kind: "link", to: "/ecosystem", label: "Ecosystem" },
  { kind: "explore", label: "Explore" },
  { kind: "link", to: "/status", label: "Status" },
] as const;

export const EXPLORER_NAVIGATION_GROUPS = [
  {
    id: "start-here",
    title: "Start Here",
    links: [
      { to: "/", label: "meUus Home" },
      { to: "/knowledge-before-action", label: "Knowledge Before Action" },
      { to: "/one-word-start", label: "One Word Start" },
      { to: "/journey", label: "Journey", status: "Live · browser-local" },
    ],
  },
  {
    id: "knowledge-reflection",
    title: "Knowledge & Reflection",
    links: [
      { to: "/soul", label: "meUus Soul", status: "In development" },
      {
        to: "/book",
        label: "Book meUus",
        status: "Book project in development",
      },
      { to: "/manifesto-full", label: "Complete Manifesto" },
    ],
  },
  {
    id: "app-direction",
    title: "App Direction",
    links: [
      { to: "/app", label: "meUus App", status: "Future app gateway" },
      {
        to: "/ecosystem",
        label: "Ecosystem Vision",
        status: "Planned direction",
      },
      { to: "/pillars", label: "Nine Pillars", status: "Intended directions" },
    ],
  },
  {
    id: "project-reality",
    title: "Project Reality",
    links: [
      { to: "/status", label: "Current Status", status: "Truth board" },
      { to: "/privacy", label: "Privacy", status: "Initial public boundary" },
      { to: "/terms", label: "Terms", status: "Initial public boundary" },
      { to: "/consent", label: "Consent", status: "Initial public boundary" },
      { to: "/appreciation", label: "Appreciation", status: "Gratitude and boundaries" },
      { to: "/foundation", label: "Public Foundation" },
      { to: "/founder", label: "Founder’s Letter" },
      { to: "/global", label: "Global Vision", status: "Future direction" },
      {
        to: "/join",
        label: "Express Interest",
        status: "Manual review · no guaranteed role",
        search: {},
      },
    ],
  },
] as const;
