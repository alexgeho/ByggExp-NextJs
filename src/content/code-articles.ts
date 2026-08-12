import type { BlogLocale, BlogPost } from '../types/blog';

// Real, indexable SEO articles served from code (not the CMS). Used for
// Swedish-market articles we publish without the CMS. Unlike blog-mock.ts
// (noIndex demo content shown only when the CMS is empty), these are always
// live, indexable, listed in /blog and included in the sitemap.
//
// Currently Swedish-only. getCodeArticles(locale) returns [] for en/ru so no
// hreflang-to-404 is created (byggdagbok is also in SV_ONLY_ARTICLE_SLUGS).

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';

const BYGGDAGBOK_HTML = `
<p>En byggdagbok är ett av de enklaste sätten att skydda sig när något går snett i ett projekt. Ändå förs den ofta på lösa lappar eller inte alls. Här går vi igenom vad en byggdagbok är, vad den ska innehålla, vad AB 04 säger – och hur du för den på några minuter om dagen.</p>

<p><a href="/sv/verktyg/byggdagbok-mall">Ladda ner en gratis byggdagbok-mall (PDF) →</a></p>

<h2>Vad är en byggdagbok?</h2>
<p>En byggdagbok är en löpande dagbok där du dokumenterar &quot;omständigheter av betydelse&quot; på arbetsplatsen – dag för dag. Syftet är att hålla beställaren informerad om hur arbetet fortskrider och att skapa ett tidsstämplat underlag om det senare uppstår diskussioner om tid, ÄTA-arbeten, hinder eller kostnader. Dagboken är ofta det enda samlade beviset på vad som faktiskt hände på bygget, och när.</p>

<h2>Vad säger lagen och avtalen?</h2>
<p>Det finns ingen generell lag som tvingar alla att föra byggdagbok. Kravet följer i stället av standardavtalen:</p>
<ul>
<li>I <strong>AB 04</strong> och <strong>ABT 06</strong> (entreprenader där beställaren är ett företag) framgår av <strong>kap 3 § 13</strong> att entreprenören ska föra dagbok.</li>
<li>I standardavtalen för konsumententreprenader – <strong>ABS 18</strong> och <strong>Hantverkarformuläret 17</strong> – finns inget motsvarande krav. Där behöver dagbok bara föras om beställaren och entreprenören avtalat om det.</li>
</ul>
<p>Vill du veta mer i detalj regleras dagbokens innehåll även i <strong>AMA AF under kod AFC.37</strong>, som räknar upp vad den bör omfatta. Oavsett om det är ett formellt krav eller inte är en förd dagbok nästan alltid till entreprenörens fördel om en tvist uppstår.</p>

<h2>Vad ska en byggdagbok innehålla?</h2>
<p>Kärnan är alltid <strong>utfört arbete</strong>. Utöver det förs dagboken &quot;i tillämpliga delar&quot; med de uppgifter som har betydelse för projektet:</p>
<ul>
<li><strong>Datum</strong> och vilket projekt/arbetsplats noteringen gäller</li>
<li><strong>Väder och temperatur</strong> – viktigt vid gjutning, målning och andra temperaturkänsliga moment</li>
<li><strong>Bemanning</strong> – antal personer och vilka yrkesgrupper som varit på plats</li>
<li><strong>Utfört arbete</strong> – vad som gjorts under dagen</li>
<li><strong>Material och leveranser</strong> – vad som levererats eller saknats</li>
<li><strong>Utförda kontroller</strong> och egenkontroller</li>
<li><strong>ÄTA-arbeten</strong> och beställarens direktiv</li>
<li><strong>Avvikande förutsättningar, hinder och störningar</strong> som påverkat tidplanen</li>
<li><strong>Besök</strong> på arbetsplatsen (beställare, besiktningsman, myndighet)</li>
<li><strong>Olycksfall och tillbud</strong></li>
<li><strong>Foton</strong> som styrker läget på plats</li>
</ul>
<p>Du behöver inte fylla i allt varje dag – men det som är av betydelse för just den dagen ska med.</p>

<h2>Så för du byggdagbok i ByggExp</h2>
<p>I ByggExp för du dagboken direkt i mobilen, kopplad till rätt projekt, så att inget skrivs av på lappar i efterhand:</p>
<ol>
<li>Öppna projektet och lägg till en ny dagboksnotering för dagens datum.</li>
<li>Fyll i väder och temperatur, bemanning och antal personer på plats.</li>
<li>Beskriv utfört arbete, eventuella avvikelser samt material och leveranser.</li>
<li>Lägg till foton från arbetsplatsen direkt i noteringen.</li>
<li>Allt sparas tidsstämplat i projektet – hela teamet ser samma underlag och du kan exportera det när det behövs.</li>
</ol>
<p>Vill du börja på papper eller Excel först? <a href="/sv/verktyg/byggdagbok-mall">Ladda ner vår gratis byggdagbok-mall</a> och fyll i den online – du får en färdig PDF att spara eller skriva ut.</p>

<h2>Vanliga frågor</h2>
<h3>Är byggdagbok ett lagkrav?</h3>
<p>Nej, det finns ingen generell lag. Men i AB 04 och ABT 06 (kap 3 § 13) ska entreprenören föra dagbok. Vid konsumententreprenader (ABS 18, Hantverkarformuläret 17) krävs det bara om parterna avtalat om det.</p>
<h3>Vad är skillnaden mellan byggdagbok och egenkontroll?</h3>
<p>Byggdagboken beskriver vad som hände på arbetsplatsen dag för dag. Egenkontrollen dokumenterar att specifika moment utförts och kontrollerats enligt krav. De kompletterar varandra – många för båda i samma system.</p>
<h3>Hur länge ska en byggdagbok sparas?</h3>
<p>Spara dagboken så länge det kan uppstå ansvars- eller garantifrågor i projektet. Eftersom dagboken kan bli avgörande vid en tvist är rekommendationen att spara den väl efter slutbesiktning.</p>
<h3>Vem ska föra byggdagboken?</h3>
<p>Normalt entreprenören, ofta genom platschef eller arbetsledare. Det viktiga är att den förs löpande och samlat – inte i efterhand.</p>

<h2>Kom igång</h2>
<p>Sluta jaga uppgifter i efterhand. För byggdagbok direkt på plats, koppla den till projektet och ha allt samlat när det gäller. <a href="/sv/verktyg/byggdagbok-mall">Ladda ner gratis byggdagbok-mall (PDF)</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterade mallar: <a href="/sv/verktyg/tidrapport-mall">Tidrapport-mall</a> · <a href="/sv/verktyg/egenkontroll-mall">Egenkontroll-mall</a></p>
`.trim();

const BYGGDAGBOK: BlogPost = {
  _id: 'code-byggdagbok',
  title: 'Byggdagbok – vad den ska innehålla och hur du för den rätt',
  slug: 'byggdagbok',
  locale: 'sv',
  excerpt:
    'Vad en byggdagbok ska innehålla, vad AB 04 kräver och hur du för den utan krångel – plus en gratis mall att ladda ner.',
  tag: 'Byggdagbok',
  coverImageUrl: '/landing/verktyg/byggdagbok-preview.webp',
  contentHtml: BYGGDAGBOK_HTML,
  seoTitle: 'Byggdagbok – krav, innehåll och gratis mall | ByggExp',
  seoDescription:
    'Vad är en byggdagbok, vad säger AB 04 och vad ska den innehålla? Ladda ner en gratis byggdagbok-mall (PDF) och för dagbok enkelt i ByggExp.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/byggdagbok-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T09:00:00.000Z',
  createdAt: '2026-08-12T09:00:00.000Z',
  updatedAt: '2026-08-12T09:00:00.000Z',
};

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: [BYGGDAGBOK],
  en: [],
  ru: [],
};

export function getCodeArticles(locale: BlogLocale): BlogPost[] {
  return CODE_ARTICLES[locale] ?? [];
}

export function getCodeArticle(
  locale: BlogLocale,
  slug: string,
): BlogPost | null {
  return getCodeArticles(locale).find((post) => post.slug === slug) ?? null;
}

export function isCodeArticleSlug(slug: string): boolean {
  return Object.values(CODE_ARTICLES).some((posts) =>
    posts.some((post) => post.slug === slug),
  );
}
