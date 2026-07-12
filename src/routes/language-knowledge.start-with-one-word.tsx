import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Reflection doorway",
  title: "Start With One Word",
  subtitle: "One word can begin reflection, but it is not intake, diagnosis, scoring, or a solution promise.",
  shortPurpose: "This page presents One Word Start as a reflection doorway, not intake, diagnosis, scoring, or a promise of solution.",
  whatThisIs: ["an internal draft public-preview candidate", "a simple reflection doorway", "a way to begin learning with one word", "a low-risk personal exercise"],
  whatThisIsNot: ["diagnosis", "intake", "AI scoring", "emergency support", "a full story about a person", "a guarantee that meUus can solve the issue"],
  sections: [
    { title: "Simple body content", paragraphs: ["One word can be enough to begin. It may point to a question, a need, a confusion, a hope, or a direction for learning.", "One word is a beginning, not a full story."] },
    { title: "Examples", bullets: ["English", "Job", "Law", "Money", "Study", "Family", "Faith", "Help"] },
    { title: "Safety boundary", paragraphs: ["Each example may point to many possible meanings. Law does not mean legal advice is being provided. Faith does not mean religious ruling is being provided. Money does not mean financial advice is being provided. Help does not mean emergency support is available through this page."] },
    { title: "Basic framework", paragraphs: ["receive -> clarify -> learn -> reflect -> choose one responsible step"] },
  ],
  claimReminder: "This page may help a learner begin reflection with one word. It may not diagnose, score, solve, automate, or decide what a person needs.",
  oneSmallAction: "Write one word, then write three possible meanings it may carry.",
  relatedPages: [{ label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Language & Knowledge Hub Home", to: "/language-knowledge" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Daily Learning Log", to: "/language-knowledge/daily-learning-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/start-with-one-word")({
  head: () => ({ meta: [{ title: "Start With One Word - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview reflection doorway for learning support only. Not intake, diagnosis, AI scoring, emergency support, or a live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Start With One Word - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview reflection doorway for learning support only. Not intake, diagnosis, AI scoring, emergency support, or a live advanced meUus system." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
