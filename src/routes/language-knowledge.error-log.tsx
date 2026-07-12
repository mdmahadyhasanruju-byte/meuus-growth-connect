import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Personal template",
  title: "Error Log Template",
  subtitle: "A gentle correction template for learning from mistakes and confusion.",
  shortPurpose: "This page offers a gentle correction template for learning from mistakes and confusion.",
  whatThisIs: ["an internal draft public-preview candidate", "a correction and reflection template", "a way to learn from confusion", "a personal practice tool"],
  whatThisIsNot: ["therapy", "diagnosis", "shame language", "a judgment of the learner", "a guaranteed learning outcome", "official source verification"],
  sections: [
    { title: "Simple body content", paragraphs: ["Mistake is not failure. Correction can help learning when the learner notices what happened, records what changed, and practices the next small step.", "The source/proof field means the learner's personal learning source, evidence, or reason. It does not mean official authority unless separately verified."] },
    { title: "Error Log Template", bullets: ["Date:", "Mistake/confusion:", "What I thought:", "What I learned:", "Corrected version:", "Source/proof:", "Next practice:"] },
  ],
  claimReminder: "This page may support correction as learning. It may not provide therapy, diagnosis, shame, official authority, or guaranteed mastery.",
  oneSmallAction: "Write one mistake gently and correct only the next small step.",
  relatedPages: [{ label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Daily Learning Log", to: "/language-knowledge/daily-learning-log" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/error-log")({
  head: () => ({ meta: [{ title: "Error Log Template - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview correction template. Not therapy, diagnosis, official authority, guaranteed mastery, or a live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Error Log Template - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview correction template. Not therapy, diagnosis, official authority, guaranteed mastery, or a live advanced meUus system." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
