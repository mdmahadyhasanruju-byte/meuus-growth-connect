import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Review boundary",
  title: "Public Status and Review Boundary",
  subtitle: "A boundary page for the corrected v0.2 Language & Knowledge Hub draft pages.",
  shortPurpose: "This page explains the status and review boundary for the corrected v0.2 Language & Knowledge Hub draft pages.",
  whatThisIs: ["an internal draft public-preview candidate", "a review-boundary page", "a reminder that the draft pages are not live public pages", "a protection against overclaiming", "a guide for checking whether each page stays within Claim <= Evidence"],
  whatThisIsNot: ["a live public page", "publication approval", "implementation approval", "deployment approval", "final website copy", "canonical curriculum", "proof that any advanced meUus system is live", "professional service approval"],
  sections: [
    { title: "Core boundary", paragraphs: ["These pages are draft candidates only. They are not live public pages. They do not approve publishing. They do not approve implementation. They do not make any curriculum canonical. They do not verify vocabulary. They do not make Arabic/Quran/Seerah material religious authority. They do not make legal material legal advice. They do not make AI, DLAS, accounts, payments, or certification live. They do not create professional services."] },
    { title: "What is allowed in this draft set", bullets: ["low-risk learning support language", "simple reflection prompts", "personal learning templates", "clear status labels", "clear disclaimers", "clear separation between draft, future, and live", "reminders that content requires review before public use"] },
    { title: "What is not allowed yet", bullets: ["verified vocabulary claims", "Arabic/Quran/Seerah religious authority", "legal advice", "therapy, diagnosis, or emergency care", "financial advice", "income, fluency, certification, or transformation guarantees", "live account, dashboard, payment, subscription, AI, or DLAS claims"] },
    { title: "What remains future/internal", bullets: ["Quran/Seerah vocabulary pages", "Arabic pronunciation and tajweed-related content", "Legal Hub law curriculum", "How to Earn income/investing pages", "EQ mental-health-sensitive pages", "certification pathway", "paid practitioner lab", "AI pronunciation feedback", "DLAS-linked assessment pages"] },
  ],
  claimReminder: "Every page must keep its claims smaller than or equal to the evidence behind it. If something is draft, future, unreviewed, or not live, the page must say so clearly.",
  oneSmallAction: "Read one draft page and check whether its status is clear.",
  relatedPages: [{ label: "Language & Knowledge Hub Home", to: "/language-knowledge" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Daily Learning Log", to: "/language-knowledge/daily-learning-log" }, { label: "Error Log Template", to: "/language-knowledge/error-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/status")({
  head: () => ({ meta: [{ title: "Language & Knowledge Hub Status Boundary - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview status boundary. Not published, not canonical, not production-ready, and not a live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Language & Knowledge Hub Status Boundary - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview status boundary. Not published, not canonical, not production-ready, and not a live advanced meUus system." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
