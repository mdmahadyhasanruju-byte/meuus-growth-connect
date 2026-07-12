import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Draft set index",
  title: "Language & Knowledge Hub Draft Set v0.2",
  subtitle: "An internal corrected draft set index, not publication approval or deployment approval.",
  shortPurpose: "This page presents the internal corrected v0.2 draft set index only if approved for preview visibility.",
  whatThisIs: ["an internal draft public-preview candidate", "a draft set index", "a record of included v0.2 draft pages", "a reminder of shared status, disclaimer, and advanced-system boundaries"],
  whatThisIsNot: ["publication approval", "website deployment approval", "canonical approval", "curriculum approval", "verified vocabulary", "Arabic/Quran/Seerah religious authority", "legal, medical, financial, therapy, recovery, or professional advice", "live AI, DLAS, accounts, payments, dashboards, certification, or advanced systems"],
  sections: [
    { title: "Draft set identity", bullets: ["Draft set title: Language & Knowledge Hub First Public Page Draft Set v0.2", "Folder path: drafts/public-pages/language-knowledge-hub-v0_2/", "Date created: 2026-07-12", "Relationship to v0.1: Corrected internal revision based on the first public draft set review and correction plan.", "Reason for v0.2: Strengthen status clarity, Claim <= Evidence boundaries, non-authority language, and runtime/publication boundaries."] },
    { title: "Included pages", bullets: ["01_public_status_review_boundary.md", "02_language_knowledge_hub_home.md", "03_start_with_one_word.md", "04_how_words_become_understanding.md", "05_daily_learning_log.md", "06_error_log_template.md"] },
    { title: "What changed from v0.1", bullets: ["Status blocks now include explicit canonical, runtime, and implementation boundaries.", "Draft pages are more clearly internal and not live.", "Language paths are framed as proposed learning directions, not complete curricula.", "Vocabulary and Arabic/Quran/Seerah authority boundaries remain protected.", "Template pages stay personal/local and do not imply accounts, dashboards, storage, AI feedback, or certification."] },
  ],
  claimReminder: "This index may identify the v0.2 draft set. It may not imply publication approval, deployment approval, canonical approval, curriculum approval, verified vocabulary, or live advanced systems.",
  oneSmallAction: "Review one included draft page and confirm its boundary language remains visible.",
  relatedPages: [{ label: "Language & Knowledge Hub Home", to: "/language-knowledge" }, { label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Daily Learning Log", to: "/language-knowledge/daily-learning-log" }, { label: "Error Log Template", to: "/language-knowledge/error-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/draft-set")({
  head: () => ({ meta: [{ title: "Language & Knowledge Hub Draft Set - Draft Public Preview" }, { name: "description", content: "Internal draft set index for v0.2 public-preview candidates. Not publication approval, not deployment approval, not canonical, and not production-ready." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Language & Knowledge Hub Draft Set - Draft Public Preview" }, { property: "og:description", content: "Internal draft set index for v0.2 public-preview candidates. Not publication approval, not deployment approval, not canonical, and not production-ready." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
