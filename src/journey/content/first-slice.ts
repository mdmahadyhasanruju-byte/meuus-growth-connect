import type { JourneyLanguage, QuestId } from "../domain/types";

type Copy = Record<JourneyLanguage, string>;

export const journeyCopy = {
  title: {
    en: "Knowledge Before Action",
    bn: "কাজের আগে বোঝাপড়া",
  },
  boundary: {
    en: "This prototype helps you pause, learn, reflect, and choose responsibly. It is private, local, and not a diagnosis.",
    bn: "এই প্রোটোটাইপ আপনাকে থামতে, শিখতে, ভাবতে এবং দায়িত্ব নিয়ে বেছে নিতে সাহায্য করে। এটি ব্যক্তিগত, লোকাল, এবং কোনো রোগনির্ণয় নয়।",
  },
  orientationTitle: {
    en: "Orientation",
    bn: "পরিচিতি",
  },
  orientationBody: {
    en: "Move slowly. Learn first, then reflect privately or in writing. No written text is required.",
    bn: "ধীরে এগোন। আগে শিখুন, তারপর ব্যক্তিগতভাবে বা লিখে ভাবুন। লিখিত উত্তর বাধ্যতামূলক নয়।",
  },
  orientationCta: {
    en: "Continue to quest",
    bn: "প্রশ্নে এগিয়ে যান",
  },
  checkpoint: {
    en: "First slice checkpoint reached. The complete journey is intentionally locked for now.",
    bn: "প্রথম স্লাইস চেকপয়েন্টে পৌঁছেছেন। সম্পূর্ণ যাত্রা আপাতত ইচ্ছাকৃতভাবে বন্ধ রাখা হয়েছে।",
  },
} satisfies Record<string, Copy>;

export const firstSliceQuest: {
  id: QuestId;
  title: Copy;
  prompt: Copy;
} = {
  id: "KBA-LQ-001",
  title: {
    en: "Name what you understand before acting",
    bn: "কাজের আগে আপনি কী বুঝেছেন তা নাম দিন",
  },
  prompt: {
    en: "What is one fact, one risk, and one human impact you should understand before taking action?",
    bn: "কাজের আগে একটি তথ্য, একটি ঝুঁকি, এবং একটি মানবিক প্রভাব কী বোঝা দরকার?",
  },
};
