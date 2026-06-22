export type PillarStatus = "Active" | "Building" | "Planned";

export interface Pillar {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  short: string;
  description: string;
  philosophy: string;
  services: string[];
  leader?: string;
  status: PillarStatus;
  color: string; // tailwind-safe hex used for accents/gradients
  symbol: string; // single character or short glyph used as visual mark
  launch: string; // what launches on July 21, 2026
}

export const PILLARS: Pillar[] = [
  {
    slug: "legal-hub",
    num: "01",
    name: "Legal Hub",
    tagline: "Justice and structure for every citizen",
    short: "Legal access, compliance, and protection.",
    description:
      "Legal Hub brings trustworthy legal access to people and small enterprises that have long been priced out of guidance. From business registration and TIN/VAT to contracts, RJSC filings, and dispute resolution — handled with clarity and dignity.",
    philosophy:
      "Law should not be a privilege. It should be a path. We translate complexity into action, and protect honest people from being trapped by what they did not know.",
    services: [
      "Business registration & RJSC filings",
      "TIN, VAT & tax compliance",
      "Contracts & documentation",
      "Legal consultation for individuals & SMEs",
      "Dispute resolution & mediation",
    ],
    leader: "Md. Alim Hossen — Certified ITP",
    status: "Active",
    color: "#5B8DEF",
    symbol: "⚖",
    launch: "Live legal consultation desk, document templates, and online filing support.",
  },
  {
    slug: "business-hub",
    num: "02",
    name: "Business Hub",
    tagline: "Where honest businesses come to grow",
    short: "Build, structure, and scale sustainable businesses.",
    description:
      "A complete environment for entrepreneurs and SMEs — model design, financial planning, branding, and revenue strategy — so that growth is real and not borrowed.",
    philosophy:
      "We measure businesses by what they leave behind, not only what they earn. Sustainability before scale.",
    services: [
      "Business model design",
      "Startup setup & trade licence",
      "Financial planning & revenue modelling",
      "Branding & positioning",
      "Long-term mentorship",
    ],
    leader: "Core Team",
    status: "Active",
    color: "#8B5CF6",
    symbol: "◆",
    launch: "SME starter kit, founder office hours, and structured mentorship cohorts.",
  },
  {
    slug: "unemployment-buster",
    num: "03",
    name: "Unemployment Buster",
    tagline: "Busting unemployment, one career at a time",
    short: "Skills, placement, and dignity-first work.",
    description:
      "Job matching, skills assessment, interview preparation, and employment pathways — so capable hands find work that respects them.",
    philosophy:
      "There is no shortage of talent. There is a shortage of bridges. We build the bridges.",
    services: [
      "Verified job board",
      "Skills assessment & training",
      "Interview & CV coaching",
      "Placement support",
      "Employer partnerships",
    ],
    leader: "Md. Shamsul Islam Shawon — Dominant International",
    status: "Active",
    color: "#F59E0B",
    symbol: "↗",
    launch: "Live job board with verified employers, skills assessments, and placement desk.",
  },
  {
    slug: "mind-beautifier",
    num: "04",
    name: "Mind Beautifier",
    tagline: "Beautiful minds build beautiful lives",
    short: "Mental wellness rooted in compassion.",
    description:
      "Counselling, emotional intelligence support, and structured mental wellness — without shame, without performance, and with the first session always free.",
    philosophy:
      "Healing is not weakness. It is preparation. A clear mind is the foundation of every other pillar.",
    services: [
      "1-on-1 counselling sessions",
      "Emotional intelligence workshops",
      "Stress & burnout recovery",
      "DLAS-guided self-assessments",
      "Peer support circles",
    ],
    leader: "Core Team",
    status: "Active",
    color: "#EC4899",
    symbol: "✦",
    launch: "First-session-free counselling, DLAS self-assessment, and weekly wellness circles.",
  },
  {
    slug: "drug-buster",
    num: "05",
    name: "Drug Buster",
    tagline: "Breaking addiction. Rebuilding lives.",
    short: "Recovery, rehabilitation, and reintegration.",
    description:
      "Addiction recovery support, rehabilitation guidance, and family reintegration — handled with honesty, never with shame.",
    philosophy: "We do not judge the fall. We walk the climb back, together.",
    services: [
      "Recovery counselling",
      "Rehabilitation referrals",
      "Family reintegration support",
      "Relapse-prevention plans",
      "Confidential intake",
    ],
    status: "Building",
    color: "#EF4444",
    symbol: "⟁",
    launch: "Confidential intake desk and partner-rehab referral network.",
  },
  {
    slug: "family-harmony",
    num: "06",
    name: "Family Harmony",
    tagline: "Strong families. Strong Bangladesh.",
    short: "Mediation, parenting, marriage, and elder care.",
    description:
      "Mediation, marriage support, parenting guidance, and elder care — protecting the foundation of society from the inside out.",
    philosophy: "A healed family heals a generation. We start where the world starts.",
    services: [
      "Family & marriage mediation",
      "Parenting guidance",
      "Elder care coordination",
      "Conflict resolution",
      "Confidential counselling",
    ],
    status: "Building",
    color: "#14B8A6",
    symbol: "❖",
    launch: "Mediation desk and structured parenting / marriage support tracks.",
  },
  {
    slug: "green-solutions",
    num: "07",
    name: "Green Solutions",
    tagline: "Sustainable today. Liveable tomorrow.",
    short: "Greenhouse, agri-tech, and clean living.",
    description:
      "Greenhouse partnerships, agri-tech, and clean-living projects rooted in real Bangladeshi soil — economy and ecology, not one or the other.",
    philosophy: "We borrow this land from the next generation. We hand it back honestly.",
    services: [
      "Greenhouse partnerships",
      "Agri-tech advisory",
      "Clean-living programs",
      "Rural cooperative support",
      "Sustainability audits",
    ],
    status: "Planned",
    color: "#10B981",
    symbol: "❀",
    launch: "Two pilot greenhouse partnerships and a clean-living advisory.",
  },
  {
    slug: "idea-lab",
    num: "08",
    name: "Idea Lab",
    tagline: "Where ideas are born and businesses begin",
    short: "Validation, prototyping, and launch support.",
    description:
      "Structured validation, prototyping, gate reviews, and launch support for first-time founders — the missing space between an idea and a business.",
    philosophy: "An idea deserves a real chance. We give it structure, not flattery.",
    services: [
      "Idea validation sprints",
      "Prototype & MVP support",
      "Gate-review mentorship",
      "Founder cohorts",
      "Launch playbooks",
    ],
    status: "Building",
    color: "#F97316",
    symbol: "✸",
    launch: "Quarterly Idea Lab cohort with structured validation and launch support.",
  },
  {
    slug: "alive-bangladesh",
    num: "09",
    name: "aLive Bangladesh",
    tagline: "Bringing Bangladesh alive — one opportunity at a time",
    short: "Local economy, district outreach, transparent reporting.",
    description:
      "A living map of national progress — local economy programs, district outreach, transparent reporting, and the connective tissue across all other pillars.",
    philosophy: "Bangladesh is not a problem to be solved. It is a country to be unlocked.",
    services: [
      "District-level outreach",
      "Local economy programs",
      "Transparent public reporting",
      "Cross-pillar coordination",
      "Community partnerships",
    ],
    status: "Building",
    color: "#27AE60",
    symbol: "✺",
    launch: "Public progress dashboard and first three district partnerships.",
  },
];

export const getPillar = (slug: string) => PILLARS.find((p) => p.slug === slug);
