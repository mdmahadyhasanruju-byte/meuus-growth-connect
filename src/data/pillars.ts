export type PillarStatus = "Proposed" | "Building" | "Planned";

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
  launch: string; // planned Day One intent for July 21, 2026
}

export const PILLARS: Pillar[] = [
  {
    slug: "legal-hub",
    num: "01",
    name: "Legal Hub",
    tagline: "Justice and structure for every citizen",
    short: "Proposed legal-access education and referral direction.",
    description:
      "Legal Hub is a proposed direction for future legal-access education, document-navigation content, and possible qualified referral pathways. It is not a live legal service, legal advice, or a substitute for a lawyer.",
    philosophy:
      "Law should not be a privilege. This direction should translate complexity carefully only after qualified review, evidence, and clear professional boundaries exist.",
    services: [
      "Business registration & RJSC filings",
      "TIN, VAT & tax compliance",
      "Contracts & documentation",
      "Possible qualified-legal referral or consultation pathway",
      "Dispute resolution & mediation",
    ],

    status: "Proposed",
    color: "#5B8DEF",
    symbol: "⚖",
    launch: "Planned legal consultation desk, document templates, and online filing support.",
  },
  {
    slug: "business-hub",
    num: "02",
    name: "Business Hub",
    tagline: "Where honest businesses come to grow",
    short: "Proposed business-learning and support direction.",
    description:
      "A proposed direction for entrepreneur and SME learning, model design, planning, branding, and revenue-thinking content. It is not live financial, legal, investment, or professional business advice.",
    philosophy:
      "Sustainability before scale. Any future business-support path should remain evidence-bound and professionally reviewed where needed.",
    services: [
      "Business model design",
      "Startup setup & trade licence",
      "Future financial-planning education concepts",
      "Branding & positioning",
      "Possible future mentorship pathway",
    ],

    status: "Proposed",
    color: "#8B5CF6",
    symbol: "◆",
    launch: "Planned SME starter kit, founder office hours, and structured mentorship cohorts.",
  },
  {
    slug: "unemployment-buster",
    num: "03",
    name: "Unemployment Buster",
    tagline: "Busting unemployment, one career at a time",
    short: "Proposed skills and work-readiness direction.",
    description:
      "A proposed direction for future work-readiness content, manual review, and possible employment-support pathways. It is not a live job-matching, placement, hiring, or automated assessment service.",
    philosophy:
      "There is no shortage of talent. There is a shortage of bridges. We build the bridges.",
    services: [
      "Future employer-verification concept",
      "Future skills-reflection and training concept",
      "Interview & CV coaching",
      "Future manual employment-support pathway",
      "Potential employer partnership discussions",
    ],

    status: "Proposed",
    color: "#F59E0B",
    symbol: "↗",
    launch: "Planned job board, employer verification, skills assessments, and placement desk.",
  },
  {
    slug: "mind-beautifier",
    num: "04",
    name: "Mind Beautifier",
    tagline: "Beautiful minds build beautiful lives",
    short: "Proposed mental-wellness learning direction.",
    description:
      "A proposed mental-wellness learning direction for future reviewed content and possible qualified support pathways. It is not therapy, diagnosis, crisis support, or a live counselling service.",
    philosophy:
      "Human wellbeing deserves care and humility. Any future support path must stay non-diagnostic, consent-aware, and professionally bounded.",
    services: [
      "Possible qualified-support referral pathway",
      "Emotional intelligence workshops",
      "Stress and burnout education concepts",
      "Planned DLAS-informed self-reflection",
      "Possible future peer-support circles with safeguards",
    ],

    status: "Proposed",
    color: "#EC4899",
    symbol: "✦",
    launch:
      "Planned reviewed wellness education, non-diagnostic self-reflection concepts, and possible safeguarded support circles.",
  },
  {
    slug: "drug-buster",
    num: "05",
    name: "Drug Buster",
    tagline: "Breaking addiction. Rebuilding lives.",
    short: "Proposed recovery-support education and referral direction.",
    description:
      "A proposed direction for recovery-support education and possible qualified referral pathways. It is not treatment, diagnosis, crisis support, emergency help, or a live rehabilitation service.",
    philosophy:
      "Recovery-related work must be handled with dignity, qualified support, safety boundaries, and no public promise of treatment or outcome.",
    services: [
      "Future qualified recovery-support referral pathway",
      "Possible future rehabilitation-referral research",
      "Future family reintegration education concepts",
      "Relapse-prevention education concepts",
      "Future safeguarded intake concept",
    ],
    status: "Building",
    color: "#EF4444",
    symbol: "⟁",
    launch: "Planned confidential intake desk and partner-rehab referral network.",
  },
  {
    slug: "family-harmony",
    num: "06",
    name: "Family Harmony",
    tagline: "Strong families. Strong Bangladesh.",
    short: "Proposed family-learning and referral direction.",
    description:
      "A proposed direction for family-learning content and possible qualified referral pathways around mediation, marriage, parenting, and elder-care topics. It is not live counselling, legal advice, therapy, or emergency support.",
    philosophy:
      "Family-related work should be careful, qualified where needed, non-coercive, and bounded by consent and safety.",
    services: [
      "Future qualified mediation/referral pathway",
      "Parenting education concepts",
      "Future elder-care coordination concept",
      "Conflict-resolution education concepts",
      "Future qualified counselling/referral pathway",
    ],
    status: "Building",
    color: "#14B8A6",
    symbol: "❖",
    launch: "Planned mediation desk and structured parenting / marriage support tracks.",
  },
  {
    slug: "green-solutions",
    num: "07",
    name: "Green Solutions",
    tagline: "Sustainable today. Liveable tomorrow.",
    short: "Greenhouse, agri-tech, and clean living.",
    description:
      "A proposed direction for future greenhouse partnership research, agri-tech learning, and clean-living ideas rooted in Bangladeshi context. Operating pilots require separate evidence.",
    philosophy: "We borrow this land from the next generation. We hand it back honestly.",
    services: [
      "Future greenhouse partnership research",
      "Agri-tech learning concepts",
      "Clean-living education concepts",
      "Future rural cooperative support concept",
      "Future sustainability review concepts",
    ],
    status: "Planned",
    color: "#10B981",
    symbol: "❀",
    launch: "Planned pilot greenhouse partnerships and clean-living advisory.",
  },
  {
    slug: "idea-lab",
    num: "08",
    name: "Idea Lab",
    tagline: "Where ideas are born and businesses begin",
    short: "Proposed idea-validation and prototype-learning direction.",
    description:
      "A proposed direction for idea-validation learning, prototype thinking, and future founder-support pathways. It is not live investment, incubation, legal, financial, or guaranteed launch support.",
    philosophy: "An idea deserves a real chance. We give it structure, not flattery.",
    services: [
      "Idea validation sprints",
      "Prototype & MVP support",
      "Gate-review mentorship",
      "Possible future founder cohorts",
      "Day One planning playbooks",
    ],
    status: "Building",
    color: "#F97316",
    symbol: "✸",
    launch: "Planned Idea Lab cohort with structured validation and launch support.",
  },
  {
    slug: "alive-bangladesh",
    num: "09",
    name: "aLive Bangladesh",
    tagline: "Bringing Bangladesh alive — one opportunity at a time",
    short: "Proposed local-economy learning and evidence direction.",
    description:
      "A proposed direction for future local-economy learning, district-outreach research, transparent progress notes, and cross-pillar evidence. It is not a live public-impact dashboard or operating district program yet.",
    philosophy: "Bangladesh is not a problem to be solved. It is a country to be unlocked.",
    services: [
      "Future district-outreach research",
      "Local-economy learning concepts",
      "Future transparent progress notes",
      "Future cross-pillar coordination concept",
      "Possible future community partnership discussions",
    ],
    status: "Building",
    color: "#27AE60",
    symbol: "✺",
    launch: "Planned public progress dashboard and district-partnership evidence record.",
  },
];

export const getPillar = (slug: string) => PILLARS.find((p) => p.slug === slug);
