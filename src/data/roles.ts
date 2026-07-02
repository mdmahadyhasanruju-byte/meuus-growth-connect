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
      "Express interest in standing beside the founder during the early foundation stage. Any future ownership, authority, title, or decision role requires direct review, clear agreement, and proper legal structure.",
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
    reward: "Manual founder discussion only · no guaranteed title, payment, or equity",
    symbol: "◈",
    color: "#A78BFA",
  },
  {
    slug: "execution-partner",
    title: "Execution Partner",
    urgency: "Urgent",
    short: "Turn the blueprint into shipped reality.",
    description:
      "We have direction. We need careful delivery. Execution Partners may help with content, coordination, documentation, and public-foundation work so the Day One checkpoint remains truthful and useful.",
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
    reward: "Manual review · possible future discussion, no guaranteed compensation or equity",
    symbol: "▶",
    color: "#F59E0B",
  },
  {
    slug: "investor",
    title: "Investor",
    urgency: "Open",
    short: "Back a long-term human-development platform.",
    description:
      "meUus may explore mission-aligned funding later. This site is not offering securities, investment allocation, or financial terms.",
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
    reward: "Direct founder conversation only · no public investment offer",
    symbol: "◇",
    color: "#D4AF37",
  },
  {
    slug: "founding-member",
    title: "Founding Member",
    urgency: "Open",
    short: "Express early interest and help shape the culture carefully.",
    description:
      "Founding Members are early expressions of interest, not customers or guaranteed users. Any future access, badge, role, or participation path must be reviewed and clearly confirmed later.",
    responsibilities: [
      "Review public pages and give honest feedback",
      "Help shape culture, language, and tone",
      "Refer others who fit the mission",
    ],
    ideal: [
      "Anyone aligned with the mission and willing to engage honestly",
      "Open to public or pseudonymous founding-member status",
    ],
    commitment: "Light · Self-paced",
    reward: "Recognition may be considered later · no guaranteed access, badge, or perks",
    symbol: "✶",
    color: "#27AE60",
  },
  {
    slug: "core-team",
    title: "Core Team",
    urgency: "Open",
    short: "Engineers, designers, counsellors, writers, operators.",
    description:
      "Core Team is a proposed future working-team direction for people who may help build, design, write, organize, and support the public foundation. Multiple areas may be reviewed manually across the pillars and central platform direction.",
    responsibilities: [
      "Own a specific role within a pillar or central platform",
      "Contribute consistently to weekly delivery",
      "Participate in reviews, retros, and planning",
    ],
    ideal: [
      "Engineers (frontend, backend, AI)",
      "Designers, writers, content & community",
      "Qualified professional contributors may be considered later where appropriate",
      "Operators, recruiters, growth and partnerships",
    ],
    commitment: "Part-time or full-time",
    reward: "No guaranteed salary, honorarium, role, or equity",
    symbol: "✦",
    color: "#5B8DEF",
  },
  {
    slug: "campus-ambassador",
    title: "Campus Ambassador",
    urgency: "Open",
    short: "Bring meUus to your university and community.",
    description:
      "Express interest in future campus outreach, learning sessions, and community feedback. No campus chapter, counselling path, opportunity, stipend, or certificate is guaranteed from this public page.",
    responsibilities: [
      "Explore whether a future campus chapter could be appropriate",
      "Host monthly workshops or info sessions",
      "Point students to public pillar pages and status boundaries",
      "Report on activity and feedback",
    ],
    ideal: [
      "Current university student in Bangladesh (any campus)",
      "Strong communicator, organizer, or natural leader",
      "Willing to commit at least one semester",
    ],
    commitment: "Light · 1 semester",
    reward: "Recognition may be considered later · no guaranteed stipend or certificate",
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
      "Optional input on specific questions if a reviewed advisory relationship is created",
      "Honest, principled guidance",
    ],
    ideal: ["10+ years in your domain", "Mission-aligned and comfortable with a youth-led team"],
    commitment: "Light · 1–2 hrs / month",
    reward: "Advisor recognition may be discussed later · no guaranteed equity",
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
