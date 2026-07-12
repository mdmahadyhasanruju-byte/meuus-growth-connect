import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Personal template",
  title: "Daily Learning Log",
  subtitle: "A personal, local learning log template for reflection only.",
  shortPurpose: "This page offers a personal, local learning log template for reflection.",
  whatThisIs: ["an internal draft public-preview candidate", "a personal reflection template", "a local/manual exercise", "a simple way to notice learning, confusion, and next steps"],
  whatThisIsNot: ["a live account feature", "a dashboard", "cloud storage", "an AI feedback tool", "a certification tracker", "a progress guarantee"],
  sections: [
    { title: "Simple body content", paragraphs: ["A daily learning log can help a learner notice what they studied, what they understood, what confused them, and what small step may come next.", "This template is for personal reflection only."] },
    { title: "Daily Learning Log Template", bullets: ["Date:", "Topic:", "One word I learned:", "Simple meaning:", "Example sentence:", "One confusion:", "One question:", "One small action:", "Tomorrow's next step:"] },
  ],
  claimReminder: "This page may provide a personal reflection template. It may not claim account storage, dashboard tracking, AI feedback, certification, or guaranteed progress.",
  oneSmallAction: "Complete one row today without trying to make it perfect.",
  relatedPages: [{ label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Error Log Template", to: "/language-knowledge/error-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/daily-learning-log")({
  head: () => ({ meta: [{ title: "Daily Learning Log - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview personal learning template. No account, dashboard, cloud storage, AI feedback, certification, or live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Daily Learning Log - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview personal learning template. No account, dashboard, cloud storage, AI feedback, certification, or live advanced meUus system." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
