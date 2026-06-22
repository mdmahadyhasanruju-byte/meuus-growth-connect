export type RoleUrgency = "Most Urgent" | "Urgent" | "Open" | "Rolling";

export interface Role {
  slug: string;
  title: string;
  urgency: RoleUrgency;
  short: string;
  description: string;
  responsibilities: string[];
  ideal: string[];
  commitment: string;
  reward: string;
  symbol: string;
  color: string;
}

export const ROLES: Role[] = [
  {
    slug: "co-founder",
    title: "Co-Founder",
    urgency: "Most Urgent",
    short: "Build the foundation of meUus with the founder.",
    description:
      "Stand beside the founder and shape meUus from intention to institution. You will own a major surface of the project — product, technology, growth, or operations — and carry equal weight in direction, decisions, and discipline.",
    responsibilities: [
      "Co-own product, growth, technology, or operations end-to-end",
      "Shape strategy, roadmap, and culture from day zero",
      "Build the founding team alongside the founder",
      "Represent meUus to partners, investors, and early users",
    ],
    ideal: [
      "Long-term operator mindset, not short-term hire mindset",
      "Track record of shipping or running something real",
      "Honest, principled, and willing to do unglamorous work",
    ],
    commitment: "Full ownership · Long-term",
    reward: "Founding equity & co-founder title",
    symbol: "◈",
    color: "#A78BFA",
  },
  {
    slug: "execution-partner",
    title: "Execution Partner",
    urgency: "Urgent",
    short: "Turn the blueprint into shipped reality.",
    description:
      "We have direction. We need delivery. Execution Partners run sprints, ship product, coordinate pillars, and make sure July 21, 2026 arrives with something real in users' hands.",
    responsibilities: [
      "Drive weekly delivery across product, content, or operations",
      "Coordinate between pillar leads and the founder",
      "Own a clear domain and report progress transparently",
      "Build the systems that keep meUus shipping",
    ],
    ideal: [
      "Strong bias for action and clear communication",
      "Experience running projects, sprints, or small teams",
      "Comfortable with structure, documentation, and follow-through",
    ],
    commitment: "Significant time · 6+ months",
    reward: "Equity / honorarium · Founding team status",
    symbol: "▶",
    color: "#F59E0B",
  },
  {
    slug: "investor",
    title: "Investor",
    urgency: "Open",
    short: "Back a long-term human-development platform.",
    description:
      "meUus is raising a focused pre-seed round to fund the July 21, 2026 launch — infrastructure, founding team, pilot district programs, and the operational backbone. Patient capital, mission-aligned, with structured reporting.",
    responsibilities: [
      "Strategic capital partnership",
      "Optional advisory cadence",
      "Mission alignment over short-term return optimization",
    ],
    ideal: [
      "Angel investors, family offices, or mission-driven funds",
      "Comfortable with social-impact + sustainable revenue blend",
      "Interested in Bangladesh and South Asia growth markets",
    ],
    commitment: "Capital partnership",
    reward: "Pre-seed allocation · Quarterly reporting",
    symbol: "◇",
    color: "#D4AF37",
  },
  {
    slug: "founding-member",
    title: "Founding Member",
    urgency: "Open",
    short: "Among the first 500. Build the culture with us.",
    description:
      "Founding Members are not customers — they are the first community. Early access, direct input on the product, a permanent founding badge, and a seat in the conversations that shape what meUus becomes.",
    responsibilities: [
      "Use the platform early and give honest feedback",
      "Help shape culture, language, and tone",
      "Refer others who fit the mission",
    ],
    ideal: [
      "Anyone aligned with the mission and willing to engage honestly",
      "Open to public or pseudonymous founding-member status",
    ],
    commitment: "Light · Self-paced",
    reward: "Permanent Founding Member badge · Lifetime perks",
    symbol: "✶",
    color: "#27AE60",
  },
  {
    slug: "core-team",
    title: "Core Team",
    urgency: "Open",
    short: "Engineers, designers, counsellors, writers, operators.",
    description:
      "Core Team is the working team of meUus — the people who build, design, counsel, write, and operate every day. Multiple roles open across all 9 pillars and central platform.",
    responsibilities: [
      "Own a specific role within a pillar or central platform",
      "Contribute consistently to weekly delivery",
      "Participate in reviews, retros, and planning",
    ],
    ideal: [
      "Engineers (frontend, backend, AI)",
      "Designers, writers, content & community",
      "Counsellors, mediators, legal, finance professionals",
      "Operators, recruiters, growth and partnerships",
    ],
    commitment: "Part-time or full-time",
    reward: "Honorarium / salary · Equity for early joiners",
    symbol: "✦",
    color: "#5B8DEF",
  },
  {
    slug: "campus-ambassador",
    title: "Campus Ambassador",
    urgency: "Open",
    short: "Bring meUus to your university and community.",
    description:
      "Run workshops, host events, build a campus chapter, and connect students to opportunities, counselling, and the founding journey of meUus.",
    responsibilities: [
      "Build a campus chapter on your university",
      "Host monthly workshops or info sessions",
      "Refer students to relevant pillars",
      "Report on activity and feedback",
    ],
    ideal: [
      "Current university student in Bangladesh (any campus)",
      "Strong communicator, organizer, or natural leader",
      "Willing to commit at least one semester",
    ],
    commitment: "Light · 1 semester",
    reward: "Stipend · Certificate · Founding Ambassador badge",
    symbol: "◉",
    color: "#10B981",
  },
  {
    slug: "advisor",
    title: "Advisor",
    urgency: "Rolling",
    short: "Lend deep expertise in a focused domain.",
    description:
      "Advisors are people whose experience compresses our learning curve — in law, finance, mental health, government, technology, or international expansion. Light commitment, deep impact.",
    responsibilities: [
      "Monthly or quarterly advisory sessions",
      "Open access for specific decisions in your domain",
      "Honest, principled guidance",
    ],
    ideal: ["10+ years in your domain", "Mission-aligned and comfortable with a youth-led team"],
    commitment: "Light · 1–2 hrs / month",
    reward: "Symbolic equity · Advisor recognition",
    symbol: "◎",
    color: "#EC4899",
  },
  {
    slug: "volunteer",
    title: "Volunteer",
    urgency: "Rolling",
    short: "Contribute time and care, in any shape.",
    description:
      "Volunteers are the heart of meUus. From event support to translation, from outreach to documentation — every honest hand matters.",
    responsibilities: [
      "Help with events, content, translation, or outreach",
      "Show up consistently for what you commit to",
    ],
    ideal: ["Anyone with time, care, and integrity"],
    commitment: "Flexible",
    reward: "Recognition · Certificate · Community",
    symbol: "✷",
    color: "#14B8A6",
  },
];

export const getRole = (slug: string) => ROLES.find((r) => r.slug === slug);
