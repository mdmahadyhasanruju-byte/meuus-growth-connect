// meuus.org – Phase 2 P2-03 VERIFIED REACT – fe44edf → P2-03 – for src/ React app
// Source: governance 5b885b6 Phase 1 P1 CLOSED 27 files + app 26a3877 + 269457e P2-02 + e08bc47 P2-01 + 8f26d6b + 82c2f64
// Claim ≤ Evidence: CTA component linking to verified meuus.app builds – privacy-first offline

export const VERIFIED_BUILD = {
  governance: '5b885b6 Phase 1 P1 CLOSED 27 files',
  app: '269457e P2-02 6 verified games – 1561 modules – 576.32 kB',
  learning: 'e08bc47 P2-01 dimensionProgress 105+60+DLAS VERIFIED_BASELINE 5/8',
  ecosystem: '26a3877 ACTIVE f70528c 8f26d6b fe44edf 82c2f64',
  soul: '8f26d6b main fixed P1-10 + P1-13 origin/HEAD → main',
  org: 'fe44edf → P2-03 VERIFIED',
  rujbel: '82c2f64 founder',
};

export const VERIFIED_CTAS = [
  { id: 'book-zero-105', titleEn: 'Book Zero – 105 Concepts (Verified 5b885b6)', titleBn: 'বুক জিরো – ১০৫ ধারণা (যাচাইকৃত ৫b৮৮৫b৬)', href: 'https://meuus.app/books/book-zero', source: 'BOOK_ZERO_CONCEPT_REGISTER 105 – 5b885b6 Phase 1 P1 CLOSED 27 files', badge: '5b885b6' },
  { id: 'learning-p2-01', titleEn: 'Learning Progress – VERIFIED_BASELINE 5/8 (e08bc47)', titleBn: 'শেখার অগ্রগতি – যাচাইকৃত ৫/৮ (e০৮bc৪৭)', href: 'https://meuus.app/education/progress', source: 'LearningProgressStub e08bc47 83+/27- 105+60+DLAS Full-100', badge: 'e08bc47' },
  { id: 'game-p2-02', titleEn: 'Game Hub – 6 Verified Games – Build 576.32 kB (269457e)', titleBn: 'গেম হাব – ৬ যাচাইকৃত গেম – বিল্ড ৫৭৬.৩২ kB (২৬৯৪৫৭e)', href: 'https://meuus.app/games', source: 'GameHub 269457e 220+/193- 6 games – Book Zero 105 + Capability 60 + DLAS + Vocab 10 + Pillars 5', badge: '269457e' },
  { id: 'ecosystem-26a3877', titleEn: 'Ecosystem – 4 Domain ACTIVE – 17 files 4909 + 27 files (26a3877)', titleBn: 'ইকোসিস্টেম – ৪ ডোমেইন ACTIVE', href: 'https://meuus.app/ecosystem', source: 'ECOSYSTEM_RELEASE_MANIFEST 17 files 4909 + PHASE_1_P1_CLOSED 27 files 26a3877', badge: '26a3877' },
  { id: 'soul-8f26d6b', titleEn: 'Soul – meuussoul.com – main fixed P1-13 (8f26d6b)', titleBn: 'আত্মা – meuussoul.com – main fixed', href: 'https://meuussoul.com', source: '8f26d6b main creation P1-10 + P1-13 symbolic-ref origin/HEAD → main', badge: '8f26d6b' },
  { id: 'founder-82c2f64', titleEn: 'Founder – rujbel.org – 82c2f64 → P2-04', titleBn: 'প্রতিষ্ঠাতা – rujbel.org', href: 'https://rujbel.org', source: '82c2f64 founder archive → P2-04 verified runtime linking', badge: '82c2f64' },
];

export function VerifiedFoundationCTA({ lang = 'en' as 'en' | 'bn' }) {
  const bn = lang === 'bn';
  return (
    <section className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 space-y-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">meuus.org · Phase 2 P2-03 VERIFIED · fe44edf → P2-03 · 5b885b6 + 26a3877 + e08bc47 + 269457e</p>
      <h2 className="text-xl font-bold">{bn ? 'যাচাইকৃত ফাউন্ডেশন – ১০৫ ধারণা + ৬ গেম' : 'Verified Foundation – 105 Concepts + 6 Games'}</h2>
      <p className="text-xs text-slate-600">Source: governance 5b885b6 Phase 1 P1 CLOSED 27 files · app 26a3877 ACTIVE 4-domain + e08bc47 P2-01 105+60+DLAS VERIFIED_BASELINE 5/8 + 269457e P2-02 6 games 1561 modules 576.32 kB · Build PASS · Claim ≤ Evidence · privacy-first offline</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {VERIFIED_CTAS.map(cta => (
          <a key={cta.id} href={cta.href} target="_blank" rel="noreferrer" className="rounded-xl border bg-white p-4 hover:bg-slate-50 flex flex-col gap-1">
            <span className="w-fit rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 border border-emerald-200">{cta.badge} · VERIFIED</span>
            <span className="font-semibold text-sm text-slate-900">{bn ? cta.titleBn : cta.titleEn}</span>
            <span className="text-[11px] text-slate-500">{cta.source}</span>
            <span className="text-[11px] text-blue-600">{cta.href}</span>
          </a>
        ))}
      </div>
      <p className="text-[11px] text-emerald-800">Phase 2 Verified P2-03 – CTAs are links to verified builds – no live API, no server submission, no payments – privacy-first offline – chain: 33e3387 Gate CLOSED → 5b885b6 P1 CLOSED 27 files → 26a3877 ecosystem ACTIVE → e08bc47 P2-01 → 269457e P2-02 → fe44edf → P2-03 VERIFIED</p>
    </section>
  );
}
