// meuus.org Worker – Phase 2 P2-03 VERIFIED – fe44edf → P2-03
// Source: governance 5b885b6 Phase 1 P1 CLOSED 27 files + app 26a3877 ACTIVE 4-domain + 269457e P2-02 GameHub 6 games + e08bc47 P2-01 Learning 105 concepts
// Claim ≤ Evidence: CTA linking to verified meuus.app builds – no live API, no payments, privacy-first offline

export interface Env {
  ASSETS: { fetch: typeof fetch };
}

const VERIFIED_BUILD = {
  governance: '5b885b6 Phase 1 P1 CLOSED 27 files',
  app: '26a3877 ecosystem ACTIVE f70528c 8f26d6b fe44edf 82c2f64 + e08bc47 P2-01 + 269457e P2-02',
  meuus_app: '269457e P2-02 6 verified games – 1561 modules – 576.32 kB',
  learning: 'e08bc47 P2-01 dimensionProgress 105 concepts + 60 capabilities + DLAS Full-100',
  meuussoul: '8f26d6b main fixed P1-10 + P1-13 origin/HEAD → main',
  meuus_org: 'fe44edf → P2-03 VERIFIED CTA',
  rujbel: '82c2f64 founder archive',
  build: '1561 modules transformed',
};

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    
    // Verified CTA routes – Phase 2 P2-03
    if (url.pathname === '/api/verified') {
      return new Response(JSON.stringify({
        phase: 'Phase 2 P2-03 VERIFIED',
        source: VERIFIED_BUILD,
        ctas: [
          { titleEn: 'Book Zero – 105 Concepts', titleBn: 'বুক জিরো – ১০৫ ধারণা', href: 'https://meuus.app/books/book-zero', source: 'BOOK_ZERO_CONCEPT_REGISTER 105 – 5b885b6' },
          { titleEn: 'Learning Progress – VERIFIED_BASELINE 5/8', titleBn: 'শেখার অগ্রগতি – যাচাইকৃত ৫/৮', href: 'https://meuus.app/education/progress', source: 'LearningProgressStub e08bc47' },
          { titleEn: 'Game Hub – 6 Verified Games', titleBn: 'গেম হাব – ৬ যাচাইকৃত গেম', href: 'https://meuus.app/games', source: 'GameHub 269457e – 220+/193- – build 576.32 kB' },
          { titleEn: 'Ecosystem – 4 Domain ACTIVE', titleBn: 'ইকোসিস্টেম – ৪ ডোমেইন ACTIVE', href: 'https://meuus.app/ecosystem', source: '26a3877 ACTIVE f70528c 8f26d6b fe44edf 82c2f64' },
          { titleEn: 'Soul – meuussoul.com', titleBn: 'আত্মা – meuussoul.com', href: 'https://meuussoul.com', source: '8f26d6b main fixed P1-10/P1-13' },
          { titleEn: 'Founder Archive – rujbel.org', titleBn: 'প্রতিষ্ঠাতা আর্কাইভ – rujbel.org', href: 'https://rujbel.org', source: '82c2f64 founder' },
        ],
        claim: 'Claim ≤ Evidence: local CTAs, no live API, no payments, privacy-first offline',
      }, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
    }

    // Root – Verified Landing with CTA
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>meuus.org – Phase 2 P2-03 VERIFIED – 105 concepts + 6 games</title>
<meta name="description" content="Verified from governance 5b885b6 Phase 1 P1 CLOSED 27 files + app 26a3877 + 269457e P2-02 6 games + e08bc47 P2-01 105 concepts – claim ≤ evidence"/>
<style>body{font-family:system-ui,sans-serif;max-width:900px;margin:0 auto;padding:24px;line-height:1.6} .badge{display:inline-block;background:#dcfce7;color:#166534;border:1px solid #bbf7d0;border-radius:999px;padding:2px 10px;font-size:12px;font-weight:600} .card{border:1px solid #e5e7eb;border-radius:16px;padding:16px;margin:12px 0} .cta{display:inline-block;background:#111827;color:#fff;padding:8px 14px;border-radius:10px;text-decoration:none;font-size:14px;margin:4px} .cta.secondary{background:#fff;color:#111827;border:1px solid #e5e7eb} small{color:#6b7280}</style>
</head>
<body>
<p class="badge">MES · Phase 2 P2-03 VERIFIED · 5b885b6 + 26a3877 + e08bc47 + 269457e · fe44edf → P2-03</p>
<h1>meuus.org – Verified Foundation</h1>
<p><small>Source: governance 5b885b6 Phase 1 P1 CLOSED 27 files · app 26a3877 ACTIVE 4-domain (f70528c books + 8f26d6b soul + fe44edf org + 82c2f64 rujbel + e08bc47 learning + 269457e games) · Build 1561 modules · 576.32 kB</small></p>

<div class="card" style="background:#f0fdf4;border-color:#bbf7d0">
<strong>✅ Verified Baseline – P2-01 + P2-02 DONE</strong><br/>
LearningProgressStub: education/LearningProgressStub.tsx e08bc47 83+/27- VERIFIED_BASELINE 5/8 – 105 concepts + 60 capabilities + DLAS Full-100 + 17 files 4909 + 27 files P1 CLOSED<br/>
GameHub: games/GameHub.tsx 269457e 220+/193- 6 verified games – Book Zero 105, Capability 60, DLAS Full-100, Phase1 P1 27 files, Vocab 10 pairs, Pillars 5 questions<br/>
Build: vite v5.4.21 1561 modules transformed → dist/assets/App-BlDiGL7F.js 576.32 kB gzip 155.99 kB – PASS
</div>

<h2>Book Zero – 105 Concepts (Verified 5b885b6)</h2>
<p>Verified from BOOK_ZERO_CONCEPT_REGISTER.md 105 concepts – governance 5b885b6 → meuus.app/books/book-zero</p>
<a class="cta" href="https://meuus.app/books/book-zero">Open Book Zero – 105 concepts</a>
<a class="cta secondary" href="https://meuus.app/books/book-zero?lang=bn">বুক জিরো খুলুন – ১০৫ ধারণা</a>

<h2>Learning Pathway Progress – VERIFIED_BASELINE 5/8 (Verified e08bc47)</h2>
<p>dimensionProgress from DlasFull100Studio readOnly – 5 verified baseline + 3 knowledge paths – self-mark resets on reload, verified persists – privacy-first offline</p>
<a class="cta" href="https://meuus.app/education/progress">Open Learning Progress – Verified</a>

<h2>Game Hub – 6 Verified Games (Verified 269457e)</h2>
<p>Book Zero 105, Capability 60, DLAS Full-100, Phase1 P1 27 files, Vocab 10 pairs (Truth সত্য, Light আলো, Heart হৃদয়, Knowledge জ্ঞান, Growth বিকাশ, Soul আত্মা, Purpose উদ্দেশ্য, Unity একতা, Service সেবা, Evidence প্রমাণ), Pillars 5 questions – local session only – no leaderboard, no payments</p>
<a class="cta" href="https://meuus.app/games">Play 6 Verified Games – 269457e</a>
<a class="cta secondary" href="/api/verified">View /api/verified JSON – 5b885b6 + 269457e</a>

<h2>Ecosystem – 4 Domain ACTIVE (Verified 26a3877)</h2>
<p>26a3877 ecosystem ACTIVE: f70528c books PREVIEW_ONLY, 8f26d6b meuussoul.com main fixed P1-10 + P1-13 origin/HEAD → main, fe44edf meuus.org → P2-03, 82c2f64 rujbel.org founder</p>
<a class="cta" href="https://meuussoul.com">meuussoul.com – 8f26d6b main fixed</a>
<a class="cta" href="https://rujbel.org">rujbel.org – 82c2f64 founder archive</a>
<a class="cta" href="https://meuus.app">meuus.app – 269457e P2-02</a>

<hr/>
<small>Phase 2 Verified P2-03 – Claim ≤ Evidence: CTAs are links to verified builds – no live API, no server submission, no payments – privacy-first offline – source chain: 33e3387 Gate CLOSED → 5b885b6 Phase1 P1 CLOSED 27 files → 26a3877 ecosystem ACTIVE → e08bc47 P2-01 → 269457e P2-02 → fe44edf → P2-03 VERIFIED – build 1561</small>
</body>
</html>`;

    return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'public, max-age=600' } });
  },
};
