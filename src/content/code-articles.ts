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

<h2>Exempel: en ifylld byggdagbok</h2>
<p>Så här kan en tydlig notering se ut för en dag – kort, men med rätt saker:</p>
<ul>
<li><strong>Datum:</strong> 2026-05-14 · Projekt: Nybyggnad villa, Bäckvägen 12</li>
<li><strong>Väder:</strong> Molnigt, 9 °C, uppehåll</li>
<li><strong>Bemanning:</strong> 3 snickare + 1 lärling (kl 07–16)</li>
<li><strong>Utfört arbete:</strong> Rest ytterväggar plan 2, monterat takstolar sektion A–C</li>
<li><strong>Leveranser:</strong> Takstolar (28 st) kl 08:30 – 2 st skadade, reklamerade</li>
<li><strong>Hinder:</strong> Kranbil försenad 2 h → takmontage flyttat till eftermiddag</li>
<li><strong>ÄTA:</strong> Beställaren beställde extra eluttag i garage (ÄTA nr 4)</li>
<li><strong>Kontroller:</strong> Egenkontroll infästning takstolar godkänd</li>
<li><strong>Foton:</strong> 4 bilder på monterade takstolar</li>
</ul>
<p>Poängen är inte att skriva långt – utan att skriva rätt. En utomstående ska kunna förstå dagen i efterhand.</p>

<h2>Vanliga misstag som gör dagboken svag</h2>
<ul>
<li><strong>Skriva i efterhand.</strong> En dagbok som förs veckor senare väger lätt vid en tvist – för den löpande, samma dag.</li>
<li><strong>För vaga noteringar.</strong> &quot;Jobbat på taket&quot; säger inget. Skriv vad, var och hur mycket.</li>
<li><strong>Glömma hinder och ÄTA.</strong> Det är förseningar, störningar och ändringar som kostar pengar – de måste med.</li>
<li><strong>Lösa lappar.</strong> De försvinner. Håll allt samlat, tidsstämplat och kopplat till projektet.</li>
<li><strong>Inga foton.</strong> En bild styrker läget bättre än en mening.</li>
</ul>

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

const EGENKONTROLL_HTML = `
<p>Egenkontroll är det som styrker att jobbet är gjort rätt – och det som räddar dig när någon i efterhand ifrågasätter kvaliteten. Men ordet betyder faktiskt två olika saker, och det är här många går vilse. Här reder vi ut vad en egenkontroll är, vad den ska innehålla, hur den hänger ihop med KMA – och hur du gör den utan pappersstrul.</p>

<p><a href="/sv/verktyg/egenkontroll-mall">Ladda ner en gratis egenkontroll-mall (PDF) →</a></p>

<h2>Vad är en egenkontroll?</h2>
<p>En egenkontroll är din egen dokumenterade kontroll av att arbetet uppfyller kraven – ritningar, Boverkets byggregler (BBR) och gällande branschregler. Den ska innehålla tillräckligt för att någon annan ska kunna följa <em>vad</em> som kontrollerades, <em>mot vilket krav</em> och <em>med vilket resultat</em>. Egenkontrollen är ofta det enda beviset på att ett dolt moment – till exempel tätskikt eller infästning – faktiskt utfördes korrekt.</p>

<h2>Två olika &quot;egenkontroll&quot; – blanda inte ihop dem</h2>
<p>Detta är den vanligaste förvirringen, och Boverket varnar själva för den:</p>
<ul>
<li><strong>Entreprenörens egenkontroll (avtalsrätt).</strong> Din kontroll av att det du bygger uppfyller kontraktshandlingar och regler. Det är den här du gör dagligen på bygget.</li>
<li><strong>Byggherrens egenkontroll enligt PBL (offentlig rätt).</strong> En del av <strong>kontrollplanen enligt plan- och bygglagen (PBL) 10 kap</strong>. Ansvaret ligger på byggherren, med stöd av en <strong>kontrollansvarig (KA)</strong>, och handlar om att styrka kraven mot samhället i bygglovsprocessen.</li>
</ul>
<p>Samma ord, olika syfte. I praktiken används ofta entreprenörens egenkontroller som den metod som anges i kontrollplanen för att styrka att kraven är uppfyllda.</p>

<h2>Vad ska en egenkontroll innehålla?</h2>
<p>En användbar egenkontroll har alltid dessa delar per kontrollpunkt:</p>
<ul>
<li><strong>Kontrollpunkt</strong> – vad som kontrolleras (t.ex. infästning, fall mot brunn, fuktkvot)</li>
<li><strong>Krav / mot vad</strong> – ritning, BBR, monteringsanvisning eller branschregel</li>
<li><strong>Kontrollmetod</strong> – mätning, okulär kontroll, protokoll</li>
<li><strong>Resultat</strong> – godkänd / ej godkänd (gärna med värde, t.ex. &quot;fuktkvot 8 %&quot;)</li>
<li><strong>Avvikelse och åtgärd</strong> – om något inte höll måttet, vad gjordes</li>
<li><strong>Datum och signatur</strong> – vem kontrollerade och när</li>
<li><strong>Foto</strong> – särskilt viktigt för moment som byggs in och inte syns sedan</li>
</ul>

<h2>Exempel: en ifylld egenkontroll</h2>
<p>Så här kan en rad i en egenkontroll se ut:</p>
<ul>
<li><strong>Kontrollpunkt:</strong> Tätskikt i våtrum, golv</li>
<li><strong>Krav:</strong> BBR + tillverkarens monteringsanvisning, GVK</li>
<li><strong>Metod:</strong> Okulär + kontroll av skikttjocklek och uppvik</li>
<li><strong>Resultat:</strong> Godkänd – uppvik 150 mm, inga blåsor</li>
<li><strong>Avvikelse:</strong> Ingen</li>
<li><strong>Datum / sign:</strong> 2026-05-14 / A. Nilsson</li>
<li><strong>Foto:</strong> 2 bilder på färdigt tätskikt före plattsättning</li>
</ul>

<h2>Egenkontroll och KMA</h2>
<p><strong>KMA</strong> står för <strong>Kvalitet, Miljö och Arbetsmiljö</strong>. Egenkontrollen är kvalitetsdelen i praktiken – det är så du visar att arbetet håller måttet. Skilj på nivåerna: en <strong>KMA-handbok</strong> beskriver hur företaget arbetar med KMA övergripande, medan en <strong>KMA-plan</strong> beskriver hur KMA hanteras i ett specifikt projekt. Egenkontroller, riskbedömningar och avvikelsehantering är verktygen som fyller planen med innehåll.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Kryssa &quot;godkänd&quot; utan krav.</strong> En bock utan referens till ritning eller BBR bevisar ingenting.</li>
<li><strong>Fylla i i efterhand.</strong> Egenkontroll som skrivs vid slutbesiktning tappar sitt värde – gör den när momentet utförs.</li>
<li><strong>Inga foton på dolda moment.</strong> Tätskikt, armering och infästningar byggs in – utan bild finns inget bevis.</li>
<li><strong>Blanda ihop med kontrollplanen enligt PBL.</strong> De hänger ihop men har olika ansvar och syfte.</li>
<li><strong>Samma mall till allt.</strong> Kontrollpunkterna ska matcha det aktuella momentet, inte en generisk lista.</li>
</ul>

<h2>Så gör du egenkontroll i ByggExp</h2>
<ol>
<li>Välj projekt och lägg till en egenkontroll för aktuellt moment.</li>
<li>Använd färdiga kontrollpunkter eller lägg till egna med krav och metod.</li>
<li>Markera resultat, notera eventuell avvikelse och åtgärd.</li>
<li>Lägg till foton direkt – särskilt på det som byggs in.</li>
<li>Signera och spara – allt ligger tidsstämplat i projektet och kan exporteras som underlag.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/egenkontroll-mall">Ladda ner vår gratis egenkontroll-mall</a> och fyll i den online – du får en färdig PDF.</p>

<h2>Vanliga frågor</h2>
<h3>Är egenkontroll ett lagkrav?</h3>
<p>För åtgärder som kräver en kontrollplan enligt PBL är egenkontroll normalt den metod som anges för att styrka kraven. I entreprenader regleras egenkontroll dessutom ofta i kontraktshandlingarna. Oavsett är den din bästa försäkring om kvaliteten ifrågasätts.</p>
<h3>Vad är skillnaden mellan egenkontroll och kontrollplan?</h3>
<p>Kontrollplanen enligt PBL är byggherrens övergripande plan för vilka kontroller som ska göras i projektet. Egenkontrollerna är de faktiska, dokumenterade kontrollerna som ofta utförs av entreprenören och som styrker punkterna i planen.</p>
<h3>Vem ska skriva egenkontrollen?</h3>
<p>Den som utför arbetet ansvarar för sin egenkontroll. På bygget är det oftast hantverkaren eller arbetsledaren för respektive moment.</p>
<h3>Vad är skillnaden mellan egenkontroll och KMA?</h3>
<p>KMA är helheten – kvalitet, miljö och arbetsmiljö. Egenkontrollen är ett av verktygen inom kvalitetsdelen, det du använder för att dokumentera att kraven är uppfyllda.</p>

<h2>Kom igång</h2>
<p>Gör egenkontrollen där arbetet sker, med foto och signatur, kopplad till projektet. <a href="/sv/verktyg/egenkontroll-mall">Ladda ner gratis egenkontroll-mall (PDF)</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterade mallar: <a href="/sv/verktyg/byggdagbok-mall">Byggdagbok-mall</a> · <a href="/sv/blog/byggdagbok">Guide: byggdagbok</a></p>
`.trim();

const EGENKONTROLL: BlogPost = {
  _id: 'code-egenkontroll',
  title: 'Egenkontroll i bygg – vad den ska innehålla, mall och exempel',
  slug: 'egenkontroll',
  locale: 'sv',
  excerpt:
    'Vad en egenkontroll ska innehålla, de två betydelserna av ordet, kopplingen till KMA och kontrollplan enligt PBL – plus ifyllt exempel och gratis mall.',
  tag: 'Egenkontroll',
  coverImageUrl: '/landing/verktyg/egenkontroll-preview.webp',
  contentHtml: EGENKONTROLL_HTML,
  seoTitle: 'Egenkontroll bygg – innehåll, mall och exempel | ByggExp',
  seoDescription:
    'Vad ska en egenkontroll innehålla? Skillnaden mot kontrollplan enligt PBL och KMA, ett ifyllt exempel och en gratis egenkontroll-mall (PDF).',
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T10:00:00.000Z',
  createdAt: '2026-08-12T10:00:00.000Z',
  updatedAt: '2026-08-12T10:00:00.000Z',
};

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: [BYGGDAGBOK, EGENKONTROLL],
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
