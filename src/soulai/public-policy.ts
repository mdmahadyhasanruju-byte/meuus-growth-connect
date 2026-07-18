export const SOULAI_ADULT_NOTICE_ENGLISH =
  "This experimental public pilot is intended for adults aged 18 and above.";
export const SOULAI_ADULT_NOTICE_BANGLA =
  "এই পরীক্ষামূলক public pilot শুধুমাত্র ১৮ বছর বা তার বেশি বয়সী প্রাপ্তবয়স্কদের জন্য।";

export const SOULAI_ADULT_CONFIRMATION_ENGLISH = "I confirm that I am 18 years of age or older.";
export const SOULAI_ADULT_CONFIRMATION_BANGLA = "আমি নিশ্চিত করছি যে আমার বয়স ১৮ বছর বা তার বেশি।";

export const SOULAI_PRIVACY_WARNING_ENGLISH =
  "Do not submit passwords, NID numbers, payment credentials, exact addresses, private account information, medical documents, or another person’s confidential information.";
export const SOULAI_PRIVACY_WARNING_BANGLA =
  "Password, NID number, payment credential, নির্দিষ্ট বাসার ঠিকানা, private account information, medical document অথবা অন্য কারও গোপনীয় তথ্য জমা দেবেন না।";

export const SOULAI_EMERGENCY_LIMITATION_ENGLISH =
  "This pilot is not monitored as an emergency service. If you or another person may be in immediate danger, contact the appropriate local emergency service or a trusted person nearby.";
export const SOULAI_EMERGENCY_LIMITATION_BANGLA =
  "এই pilot কোনো monitored emergency service নয়। আপনি বা অন্য কেউ তাৎক্ষণিক বিপদের মধ্যে থাকলে উপযুক্ত স্থানীয় জরুরি সেবা অথবা কাছের বিশ্বস্ত ব্যক্তির সঙ্গে যোগাযোগ করুন।";

export const SOULAI_CONSENT_PARAGRAPHS_ENGLISH = [
  "I understand that this is an experimental AI-guided reflection pilot intended for adults aged 18 and above.",
  "I understand that it is not professional, medical, therapeutic, legal, crisis, or emergency support. It does not provide diagnosis, validated DLAS assessment, crisis monitoring, or guaranteed human review.",
  "I agree that messages I voluntarily submit may be processed through meuus.org, the configured n8n workflow, the configured AI model provider, and the restricted pilot record system to operate the pilot and conduct limited safety and quality evaluation.",
  "A pseudonymous session ID and limited technical metadata may be processed. Pseudonymous does not mean anonymous.",
  "Pilot records stored in the restricted Google Sheet will be retained for no more than 30 days from the time each message is submitted, provided the approved deletion procedure is operational before publication.",
  "n8n execution records, AI-provider processing, technical logs, exports, and backups may follow separate retention rules. Their verified limits must be disclosed before publication, and deletion from every connected system cannot be guaranteed unless separately tested.",
  "I will not submit passwords, NID numbers, payment credentials, exact addresses, private account information, medical documents, or another person’s confidential information.",
  "I may withdraw by leaving the pilot before submitting a message. A message already submitted may already have been processed.",
  "For a deletion request, I should retain my pseudonymous Session Reference and approximate submission date and use the verified privacy-request channel displayed on the website.",
] as const;

export const SOULAI_ACTIVE_CONSENT_ENGLISH =
  "I have read the purpose, boundaries, privacy warning, emergency limitation, retention terms, and review model, and I actively consent to submit messages under these terms.";

export const SOULAI_CONSENT_PARAGRAPHS_BANGLA = [
  "আমি বুঝতে পারছি যে এটি ১৮ বছর বা তার বেশি বয়সী প্রাপ্তবয়স্কদের জন্য একটি পরীক্ষামূলক AI-নির্দেশিত reflection pilot।",
  "আমি বুঝতে পারছি যে এটি পেশাগত, চিকিৎসা, থেরাপি, আইনগত, সংকটকালীন বা জরুরি সহায়তা নয়। এটি রোগ নির্ণয়, validated DLAS assessment, crisis monitoring অথবা নিশ্চিত মানব পর্যালোচনা প্রদান করে না।",
  "আমি সম্মতি দিচ্ছি যে আমার স্বেচ্ছায় পাঠানো বার্তাগুলো pilot পরিচালনা এবং সীমিত safety ও quality evaluation-এর জন্য meuus.org, configured n8n workflow, configured AI model provider এবং সীমিত pilot record system-এর মাধ্যমে process করা হতে পারে।",
  "একটি pseudonymous session ID এবং সীমিত technical metadata process করা হতে পারে। Pseudonymous মানে anonymous নয়।",
  "Restricted Google Sheet-এ সংরক্ষিত pilot records প্রতিটি message জমা দেওয়ার সময় থেকে সর্বোচ্চ ৩০ দিন রাখা হবে—তবে public publication-এর আগে approved deletion procedure বাস্তবে চালু ও verified হতে হবে।",
  "n8n execution records, AI-provider processing, technical logs, exports এবং backups-এর retention নিয়ম আলাদা হতে পারে। Publication-এর আগে তাদের verified সীমা প্রকাশ করতে হবে। আলাদাভাবে পরীক্ষা না করা পর্যন্ত সব connected system থেকে deletion নিশ্চিত করা যাবে না।",
  "আমি password, NID number, payment credential, নির্দিষ্ট বাসার ঠিকানা, private account information, medical document অথবা অন্য কারও গোপনীয় তথ্য জমা দেব না।",
  "Message পাঠানোর আগে pilot থেকে বের হয়ে আমি consent প্রত্যাহার করতে পারি। ইতিমধ্যে পাঠানো message connected services-এর মাধ্যমে process হয়ে থাকতে পারে।",
  "Deletion request করার জন্য আমাকে আমার pseudonymous Session Reference এবং আনুমানিক submission date সংরক্ষণ করতে হবে এবং website-এ প্রদর্শিত verified privacy-request channel ব্যবহার করতে হবে।",
] as const;

export const SOULAI_ACTIVE_CONSENT_BANGLA =
  "আমি pilot-এর উদ্দেশ্য, সীমাবদ্ধতা, privacy warning, emergency limitation, retention terms এবং review model পড়েছি ও বুঝেছি এবং এই শর্তে message জমা দেওয়ার জন্য সক্রিয়ভাবে সম্মতি দিচ্ছি।";

export const SOULAI_MESSAGE_LIMIT_ENGLISH =
  "Free pilot: maximum 5 user messages per conversation. This is a browser-side UI limit, not server-side rate limiting.";
export const SOULAI_MESSAGE_LIMIT_BANGLA =
  "Free pilot: প্রতি conversation-এ সর্বোচ্চ ৫টি user message। এটি browser-side UI limit; secure server-side rate limiting নয়।";

export const SOULAI_CLOSING_BANGLA =
  "আপনার জীবনের একটি অংশ এই ছোট পরীক্ষার সঙ্গে ভাগ করে নেওয়ার জন্য ধন্যবাদ। আজই সবকিছু সমাধান করতে হবে না।";
export const SOULAI_NEXT_STEP_BANGLA =
  "একটি সম্ভাব্য পরবর্তী পদক্ষেপ: এই reflection থেকে একটি ছোট ও পরিবর্তনযোগ্য কাজ বেছে নিন এবং কখন সেটি চেষ্টা করবেন তা নির্ধারণ করুন।";
export const SOULAI_AUTONOMY_BANGLA =
  "চূড়ান্ত সিদ্ধান্ত আপনার। এই suggestion রাখুন, পরিবর্তন করুন অথবা প্রত্যাখ্যান করুন।";

export const SOULAI_SHEET_RETENTION_DAYS = 30;
export const SOULAI_REVIEW_MODEL =
  "Selected, limited safety/quality review by Ruju only—no routine reading of every conversation, no continuous monitoring and no guaranteed human response.";
export const SOULAI_REVIEW_LIMIT =
  "Up to 10% of weekly sessions or 10 sessions per week, whichever is lower, plus approved harmful-output, security, deletion-request, or technical-incident review.";

export const SOULAI_PROPOSED_DELETION_CHANNEL = "privacy@meuus.org";
export const SOULAI_DELETION_CHANNEL_OPERATIONAL = false;
export const SOULAI_SESSION_REFERENCE_LABEL = "Your Session Reference";
export const SOULAI_SESSION_REFERENCE_HELP =
  "Copy this reference if you may later request deletion.";
