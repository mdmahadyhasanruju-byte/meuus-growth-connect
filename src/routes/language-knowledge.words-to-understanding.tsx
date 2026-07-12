import { createFileRoute } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Learning framework",
  title: "How Words Become Understanding",
  subtitle: "A low-risk learning framework for moving from a word toward meaning, context, reflection, and responsible action.",
  shortPurpose: "This page explains a low-risk learning framework for moving from a word toward meaning, context, reflection, and responsible action.",
  whatThisIs: ["an internal draft public-preview candidate", "a simple educational framework", "a reflection aid", "a starting point for careful learning"],
  whatThisIsNot: ["final curriculum", "philosophical authority", "language fluency guarantee", "religious authority", "legal advice", "medical advice", "financial advice", "verified Arabic or vocabulary content"],
  sections: [
    { title: "Simple body content", paragraphs: ["A word can start learning, but a word alone is not full understanding. Understanding grows when the learner asks what the word may mean, where it appears, what context changes it, and what responsible action may follow.", "Knowing a word is not the same as understanding a life."] },
    { title: "Basic framework", bullets: ["Word: The word is the starting point.", "Meaning: The learner asks what the word may mean. Some meanings are approximate and context-dependent.", "Context: The learner asks where, when, and how the word is being used.", "Reflection: The learner asks what the word helps them notice.", "Responsible Action: The learner chooses one small responsible step."] },
    { title: "Low-risk example: Learning", paragraphs: ["The word learning may mean more than receiving information. In one context, learning may mean reading. In another context, it may mean practicing, correcting, asking, remembering, or changing a small habit."] },
  ],
  claimReminder: "This page may offer a simple learning framework. It may not claim final truth, religious authority, legal authority, medical authority, financial authority, or verified vocabulary.",
  oneSmallAction: "Take the word Learning and write one context where it changes meaning.",
  relatedPages: [{ label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Language & Knowledge Hub Home", to: "/language-knowledge" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }, { label: "Error Log Template", to: "/language-knowledge/error-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge/words-to-understanding")({
  head: () => ({ meta: [{ title: "How Words Become Understanding - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview learning framework. Not final curriculum, not verified vocabulary, not authority, and not a live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "How Words Become Understanding - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview learning framework. Not final curriculum, not verified vocabulary, not authority, and not a live advanced meUus system." }] }),
  component: () => <LanguageKnowledgePreview page={page} />,
});
