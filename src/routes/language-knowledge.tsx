import { Outlet, createFileRoute, useLocation } from "@tanstack/react-router";
import { LanguageKnowledgePreview, type LanguageKnowledgePreviewPage } from "@/components/site/LanguageKnowledgePreview";

const page: LanguageKnowledgePreviewPage = {
  eyebrow: "Draft public preview",
  title: "Language & Knowledge Hub",
  subtitle: "A proposed learning and reflection gateway only, not a complete curriculum or live advanced system.",
  shortPurpose: "This page introduces the Language & Knowledge Hub as a proposed learning and reflection gateway only.",
  whatThisIs: ["an internal draft public-preview candidate", "a proposed learning/reflection gateway", "a beginner-friendly introduction to words, meaning, understanding, reflection, and responsible action", "a starting point for future reviewed learning paths"],
  whatThisIsNot: ["a complete curriculum", "a verified trilingual dictionary", "a language fluency program", "religious, legal, clinical, financial, or professional authority", "a certification pathway", "an AI pronunciation tool", "a live account system", "a production page"],
  sections: [
    { title: "Simple body content", paragraphs: ["Language can help a person slow down and understand more carefully. A word may begin as a sound or symbol, but with care it can become meaning, then understanding, then reflection, then one responsible action.", "The Language & Knowledge Hub is a proposed learning/reflection gateway. It is still a draft. It is not a complete curriculum, and its vocabulary is not verified unless separately reviewed."] },
    { title: "Basic framework", paragraphs: ["word -> meaning -> understanding -> reflection -> responsible action"] },
    { title: "Learning directions", bullets: ["Bangla Path may become a learning direction for clear, plain-language understanding. This is not a complete or verified curriculum yet.", "English Path may become a learning direction for practical communication and public learning. This is not a complete or verified curriculum yet.", "Arabic Path is future-sensitive and review-needed. Arabic vocabulary, pronunciation, transliteration, and Quran/Seerah-related content require Arabic review, source/provenance review, and religious-boundary review before public authority is implied.", "Knowledge Lessons may later introduce low-risk words such as learning, responsibility, and action.", "Learning Logs may help learners record what they studied, what confused them, and what they will practice next. These are not live account, dashboard, or storage features."] },
  ],
  claimReminder: "This page may introduce the hub as a draft learning idea. It may not claim that the curriculum is complete, vocabulary is verified, features are live, or outcomes are guaranteed.",
  oneSmallAction: "Choose one word and write what you think it means before checking any lesson.",
  relatedPages: [{ label: "Public Status and Review Boundary", to: "/language-knowledge/status" }, { label: "Start With One Word", to: "/language-knowledge/start-with-one-word" }, { label: "How Words Become Understanding", to: "/language-knowledge/words-to-understanding" }, { label: "Daily Learning Log", to: "/language-knowledge/daily-learning-log" }],
  nextInternalStep: "Review corrected v0.2 Language & Knowledge Hub public page drafts.",
};

export const Route = createFileRoute("/language-knowledge")({
  head: () => ({ meta: [{ title: "Language & Knowledge Hub - Draft Public Preview" }, { name: "description", content: "Internal draft public-preview candidate for learning support only. Not published, not canonical, not production-ready, and not a live advanced meUus system." }, { name: "robots", content: "noindex,nofollow" }, { property: "og:title", content: "Language & Knowledge Hub - Draft Public Preview" }, { property: "og:description", content: "Internal draft public-preview candidate for learning support only. Not published, not canonical, not production-ready, and not a live advanced meUus system." }] }),
  component: LanguageKnowledgeRoute,
});

function LanguageKnowledgeRoute() {
  const location = useLocation();

  if (location.pathname !== "/language-knowledge" && location.pathname !== "/language-knowledge/") {
    return <Outlet />;
  }

  return <LanguageKnowledgePreview page={page} />;
}
