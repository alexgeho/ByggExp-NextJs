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

const ATA_HTML = `
<p>ÄTA-arbeten är där byggföretag tappar mest pengar helt i onödan. Jobbet blir gjort – men utan rätt papper och rätt underrättelse i tid uteblir betalningen. Här går vi igenom vad ÄTA är, skillnaden mellan föreskriven och likställd ÄTA, vad AB 04 kräver för att du ska få betalt, och hur du dokumenterar det rätt.</p>

<p><a href="/sv/verktyg/ata-mall">Skapa en ÄTA gratis med vår ÄTA-mall (PDF/Excel) →</a></p>

<h2>Vad är ÄTA-arbeten?</h2>
<p>ÄTA står för <strong>Ändrings-, Tilläggs- och Avgående arbeten</strong> – arbeten som tillkommer, ändras eller utgår jämfört med det ursprungliga kontraktet. De regleras i <strong>AB 04 kap 2</strong> (och motsvarande i ABT 06). Eftersom ÄTA påverkar både pris och tid är det just här de flesta tvister uppstår.</p>

<h2>Föreskriven och likställd ÄTA</h2>
<ul>
<li><strong>Föreskriven ÄTA (AB 04 kap 2 §3).</strong> Beställaren har rätt att beställa ändringar och tillägg. Det är en uttrycklig beställning – &quot;gör även detta&quot;.</li>
<li><strong>Likställd ÄTA (AB 04 kap 2 §4).</strong> Arbete som inte beställts uttryckligen men som <em>jämställs</em> med ÄTA, till exempel för att förhållandena på arbetsplatsen avviker från vad handlingarna angav. Det är ofta här pengar går förlorade.</li>
</ul>

<h2>Så får du betalt – underrättelse i tid</h2>
<p>Nyckeln till att få betalt för likställd ÄTA är att <strong>underrätta beställaren utan dröjsmål</strong>:</p>
<ul>
<li>Bedömer du att kostnaden överstiger <strong>gränsbeloppet</strong> (som utgångspunkt ett halvt prisbasbelopp om inget annat avtalats) ska du inhämta beställarens syn <em>innan</em> du utför arbetet.</li>
<li>Ligger kostnaden under gränsbeloppet får du påbörja arbetet direkt, men måste underrätta beställaren utan dröjsmål efteråt.</li>
<li><strong>Uteblir underrättelsen kan du förlora rätten till ersättning</strong> – även om arbetet faktiskt utförts.</li>
</ul>
<p>Viktigt: en signerad dagbok bevisar i sig inte att ett ÄTA-arbete är beställt och godkänt. Dagboken är ett bra stöd, men ÄTA behöver en tydlig underrättelse/beställning för sig.</p>

<h2>Vad en ÄTA ska innehålla</h2>
<ul>
<li><strong>Projekt och datum</strong></li>
<li><strong>Beskrivning</strong> av arbetet – vad, var och varför</li>
<li><strong>Typ</strong> – ändring, tillägg eller avgående, föreskriven eller likställd</li>
<li><strong>Mängd och à-pris</strong> eller uppskattad kostnad</li>
<li><strong>Påverkan på tidplanen</strong> (begär tidsförlängning när det behövs)</li>
<li><strong>Vem som beställt / underrättats</strong> och när</li>
<li><strong>Foton</strong> som styrker behovet</li>
</ul>

<h2>Exempel: en ifylld ÄTA</h2>
<ul>
<li><strong>Projekt:</strong> Nybyggnad villa, Bäckvägen 12 · 2026-05-14</li>
<li><strong>Typ:</strong> Tilläggsarbete (föreskriven ÄTA)</li>
<li><strong>Beskrivning:</strong> Extra eluttag i garage, 3 st, på beställarens begäran</li>
<li><strong>Mängd / à-pris:</strong> 3 st × 850 kr = 2 550 kr exkl. moms</li>
<li><strong>Tid:</strong> Ingen påverkan på tidplan</li>
<li><strong>Beställd av:</strong> beställaren via mejl 2026-05-14, ÄTA nr 4</li>
</ul>

<h2>Vanliga misstag som kostar pengar</h2>
<ul>
<li><strong>Muntliga beställningar.</strong> &quot;Fixa det där också&quot; räcker inte – få det skriftligt.</li>
<li><strong>Ingen underrättelse i tid.</strong> Vid likställd ÄTA är det just den uteblivna underrättelsen som fäller dig.</li>
<li><strong>Förlita sig på dagbokssignering.</strong> En signerad dagbok bevisar inte att ÄTA är godkänt.</li>
<li><strong>Glömma tidsförlängning.</strong> Kräv tid samtidigt som pengar när arbetet påverkar tidplanen.</li>
<li><strong>Fakturera ÄTA otydligt.</strong> Redovisa varje ÄTA som en egen, spårbar post.</li>
</ul>

<h2>Så hanterar du ÄTA i ByggExp</h2>
<ol>
<li>Notera ÄTA direkt i projektet när den uppstår – med beskrivning, mängd och pris.</li>
<li>Koppla foton och beställarens mejl/underrättelse som underlag.</li>
<li>För in det löpande i byggdagboken så du har en tidsstämplad historik.</li>
<li>Ta med godkända ÄTA på fakturan som tydliga, separata rader.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/ata-mall">Skapa en ÄTA med vår gratis ÄTA-mall</a> och ladda ner den som PDF eller Excel.</p>

<h2>Vanliga frågor</h2>
<h3>Vad betyder ÄTA?</h3>
<p>Ändrings-, Tilläggs- och Avgående arbeten – arbeten som ändras, tillkommer eller utgår jämfört med kontraktet. De regleras i AB 04 kap 2.</p>
<h3>Måste en ÄTA vara skriftlig?</h3>
<p>För din egen säkerhet: ja. Även om arbete avtalas under resans gång bör beställningen och underrättelsen dokumenteras skriftligt, annars blir det svårt att få betalt vid en tvist.</p>
<h3>Vad är skillnaden mellan föreskriven och likställd ÄTA?</h3>
<p>Föreskriven ÄTA (kap 2 §3) är en uttrycklig beställning från beställaren. Likställd ÄTA (kap 2 §4) är arbete som jämställs med ÄTA på grund av avvikande förhållanden, utan uttrycklig beställning.</p>
<h3>Kan jag förlora rätten till betalning för ÄTA?</h3>
<p>Ja. Vid likställd ÄTA kan utebliven underrättelse &quot;utan dröjsmål&quot; leda till att rätten till ersättning går förlorad – även om arbetet utförts.</p>

<h2>Kom igång</h2>
<p>Sluta jobba gratis. Dokumentera varje ÄTA skriftligt, underrätta i tid och ta med den på fakturan. <a href="/sv/verktyg/ata-mall">Ladda ner gratis ÄTA-mall</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> · <a href="/sv/blog/byggdagbok">Guide: byggdagbok</a> · <a href="/sv/verktyg/faktura-mall">Faktura-mall</a></p>
`.trim();

const ATA: BlogPost = {
  _id: 'code-ata-arbeten',
  title: 'ÄTA-arbeten – regler, exempel och hur du får betalt',
  slug: 'ata-arbeten',
  locale: 'sv',
  excerpt:
    'Vad ÄTA-arbeten är, skillnaden mellan föreskriven och likställd ÄTA enligt AB 04, hur du underrättar i tid för att få betalt – plus ifyllt exempel och vanliga misstag.',
  tag: 'ÄTA',
  coverImageUrl: '/landing/features/9ekonomi.webp',
  contentHtml: ATA_HTML,
  seoTitle: 'ÄTA-arbeten enligt AB 04 – regler, exempel & mall | ByggExp',
  seoDescription:
    'ÄTA-arbeten enligt AB 04 kap 2: föreskriven vs likställd ÄTA, underrättelse utan dröjsmål och hur du får betalt. Ifyllt exempel och vanliga misstag.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T11:00:00.000Z',
  createdAt: '2026-08-12T11:00:00.000Z',
  updatedAt: '2026-08-12T11:00:00.000Z',
};

const PERSONALLIGGARE_HTML = `
<p>Personalliggare är ett lagkrav i byggbranschen – och att sköta den slarvigt kan bli dyrt. Ett oanmält besök från Skatteverket där personer saknas i liggaren kostar direkt i kontrollavgift. Här går vi igenom vem som måste ha personalliggare, vad som ska registreras, vad ett misstag kostar och hur du sköter den digitalt utan krångel.</p>

<h2>Vad är en personalliggare?</h2>
<p>En personalliggare är en förteckning över vilka som är och har varit verksamma på arbetsplatsen, och när. I byggbranschen ska den vara <strong>elektronisk</strong> och kunna visas för Skatteverket vid ett besök. Syftet är att motverka svartarbete – liggaren visar vem som faktiskt var på plats en viss dag och tid.</p>

<h2>Vem måste ha personalliggare?</h2>
<p>Kravet gäller flera branscher (bygg, fordonsservice, skönhet/kroppsvård, restaurang, livsmedels- och tobaksgrossist samt tvätteri). I <strong>byggbranschen</strong> krävs elektronisk personalliggare när byggverksamheten bedrivs yrkesmässigt och den totala kostnaden på byggarbetsplatsen kan antas <strong>överstiga fyra prisbasbelopp</strong>. För 2026 är prisbasbeloppet 59 200 kr, vilket ger en gräns på <strong>236 800 kr</strong>.</p>

<h2>Undantag</h2>
<ul>
<li>Bygge där den totala byggkostnaden på arbetsplatsen inte förväntas överstiga fyra prisbasbelopp.</li>
<li>När byggherren är en privatperson som inte bedriver bygg-, rivnings- eller markarbete yrkesmässigt.</li>
</ul>

<h2>Vem ansvarar – byggherre eller entreprenör?</h2>
<p><strong>Byggherren</strong> ansvarar för att anmäla till Skatteverket när och var byggarbetet påbörjas, att tillhandahålla utrustning så att en elektronisk personalliggare kan föras, och för att en samlad liggare finns på arbetsplatsen. <strong>Varje entreprenör</strong> ansvarar i sin tur för att föra och hålla sin del av liggaren tillgänglig – sina egna och sin inhyrda personal. Byggherren kan överlåta hela ansvaret till en självständig uppdragstagare, till exempel huvudentreprenören.</p>

<h2>Måste man ha ID06?</h2>
<p>Nej. Det finns inget lagkrav på att använda just ID06-kort. Kravet är att personalliggaren är elektronisk och visar vem som är och har varit på plats. ID06 är en vanlig teknisk lösning för att uppfylla kravet, men du kan använda andra system som gör samma sak.</p>

<h2>Vad ska registreras?</h2>
<ul>
<li>Identitetsuppgifter för var och en som är verksam på arbetsplatsen (namn och personnummer/samordningsnummer)</li>
<li>När varje person påbörjar och avslutar ett arbetspass</li>
<li>Uppgifterna ska registreras löpande och kunna visas för Skatteverket direkt vid ett besök</li>
</ul>

<h2>Vad kostar det att missa personalliggaren?</h2>
<p>Skatteverket får göra oannonserade kontrollbesök och ta ut <strong>kontrollavgift</strong>:</p>
<ul>
<li><strong>12 500 kr</strong> om personalliggare saknas eller inte kan visas.</li>
<li><strong>+ 2 500 kr</strong> för varje person som är verksam men inte är antecknad i liggaren.</li>
<li><strong>25 000 kr</strong> om byggherren inte har anmält byggstart och plats till Skatteverket.</li>
</ul>
<p>Avgifterna kan tas ut vid upprepade besök – slarv blir snabbt dyrt.</p>

<h2>Personalliggare och byggdagbok – inte samma sak</h2>
<p>Personalliggaren visar <em>vem</em> som var på plats (närvaro), medan <a href="/sv/blog/byggdagbok">byggdagboken</a> dokumenterar <em>vad</em> som gjordes (arbete, väder, avvikelser, ÄTA). Du behöver oftast båda – de fyller olika syften och ersätter inte varandra.</p>

<h2>Så sköter du personalliggare digitalt i ByggExp</h2>
<p>I ByggExp checkar medarbetarna in och ut på plats, kopplat till rätt projekt, så att närvaron registreras löpande och alltid kan visas upp. Du ser i realtid vilka som är på arbetsplatsen, slipper papperslistor och har underlaget redo om Skatteverket dyker upp. Eftersom närvaro, tid, dagbok och ekonomi ligger i samma app hänger allt ihop – <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">läs mer om närvaro och incheckning</a>.</p>

<h2>Vanliga frågor</h2>
<h3>När krävs personalliggare på ett bygge?</h3>
<p>När byggverksamheten bedrivs yrkesmässigt och den totala byggkostnaden på arbetsplatsen kan antas överstiga fyra prisbasbelopp (236 800 kr för 2026).</p>
<h3>Vem ansvarar för personalliggaren?</h3>
<p>Byggherren ansvarar för anmälan, utrustning och en samlad liggare, medan varje entreprenör för sin egen del. Byggherren kan överlåta ansvaret till huvudentreprenören.</p>
<h3>Måste jag använda ID06?</h3>
<p>Nej. Kravet är en elektronisk personalliggare som visar närvaro – ID06 är en vanlig lösning men inte ett lagkrav.</p>
<h3>Vad blir kontrollavgiften om liggaren saknas?</h3>
<p>12 500 kr, plus 2 500 kr för varje person som är verksam men inte antecknad. Saknas anmälan om byggstart är avgiften 25 000 kr.</p>

<h2>Kom igång</h2>
<p>Slipp papperslistor och kontrollavgifter. Registrera närvaron digitalt, kopplad till projektet, och ha allt redo för Skatteverket. <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Se hur närvaro fungerar i ByggExp</a> eller <a href="/sv/contact">boka en demo</a>.</p>
`.trim();

const PERSONALLIGGARE: BlogPost = {
  _id: 'code-personalliggare',
  title: 'Personalliggare i byggbranschen – krav, ansvar och avgifter',
  slug: 'personalliggare',
  locale: 'sv',
  excerpt:
    'Vem måste ha personalliggare, vad ska registreras, vad kostar en kontrollavgift och behövs ID06? Allt om personalliggare i byggbranschen 2026 – och hur du sköter den digitalt.',
  tag: 'Personalliggare',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: PERSONALLIGGARE_HTML,
  seoTitle: 'Personalliggare bygg – krav, ansvar & avgifter 2026 | ByggExp',
  seoDescription:
    'Personalliggare i byggbranschen: vem måste ha den, beloppsgränsen (4 prisbasbelopp), ansvar byggherre/entreprenör, ID06 och kontrollavgift. Guide för 2026.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T12:00:00.000Z',
  createdAt: '2026-08-12T12:00:00.000Z',
  updatedAt: '2026-08-12T12:00:00.000Z',
};

const ROT_HTML = `
<p>ROT-avdraget är ett av de starkaste säljargumenten ett byggföretag har – kunden betalar mindre, du får jobbet. Men reglerna ändrades vid årsskiftet, och det är lätt att räkna fel. Här är vad som gäller för ROT-avdrag 2026, hur du räknar ut det och hur du fakturerar rätt.</p>

<p><a href="/sv/verktyg/rot-avdrag-kalkylator">Räkna ut ROT-avdraget direkt i vår gratis kalkylator →</a></p>

<h2>Vad är ROT-avdrag?</h2>
<p>ROT-avdrag är en skattereduktion för privatpersoner som anlitar hjälp för <strong>reparation, underhåll, om- och tillbyggnad</strong> av sin bostad. Avdraget gäller bara <strong>arbetskostnaden</strong> – inte material, resor eller maskiner. I praktiken drar företaget av ROT direkt på fakturan och begär sedan resten från Skatteverket.</p>

<h2>ROT-avdrag 2026 – procent och tak</h2>
<ul>
<li><strong>30 % av arbetskostnaden.</strong> Den tillfälliga höjningen till 50 % förlängdes inte – från 1 januari 2026 gäller åter 30 %.</li>
<li><strong>Max 50 000 kr per person och år.</strong> Äger två personer bostaden kan de dela på avdraget.</li>
<li><strong>Gemensamt tak med RUT: 75 000 kr per person och år</strong>, varav högst 50 000 kr får vara ROT.</li>
</ul>

<h2>Vem har rätt till ROT-avdrag?</h2>
<p>Den som söker avdraget ska <strong>äga och bo i</strong> bostaden och ha betalat tillräckligt med skatt att räkna av mot. Avdraget gäller inte nybyggnation – ett nybyggt småhus medges ROT först efter fem år. Det är kundens avdrag, men det är du som utförare som administrerar det på fakturan.</p>

<h2>Exempel: så räknas ROT ut</h2>
<ul>
<li><strong>Arbetskostnad:</strong> 40 000 kr</li>
<li><strong>ROT-avdrag (30 %):</strong> 12 000 kr</li>
<li><strong>Kunden betalar:</strong> arbetskostnad 28 000 kr + material</li>
<li><strong>Du begär</strong> resterande 12 000 kr från Skatteverket</li>
</ul>
<p>Vill du testa dina egna siffror? <a href="/sv/verktyg/rot-avdrag-kalkylator">Använd ROT-kalkylatorn</a> – den visar avdrag och vad kunden betalar direkt.</p>

<h2>Så fakturerar du med ROT</h2>
<ol>
<li>Dela upp fakturan i arbetskostnad och material – ROT gäller bara arbetet.</li>
<li>Dra av 30 % av arbetskostnaden (upp till kundens tak) direkt på fakturan.</li>
<li>Kunden betalar resten; du begär ROT-beloppet från Skatteverket.</li>
<li>Ange kundens personnummer och fastighets-/lägenhetsuppgifter i begäran.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Räkna ROT på hela fakturan.</strong> Endast arbetskostnaden ger avdrag – inte material.</li>
<li><strong>Glömma kundens tak.</strong> Har kunden redan använt ROT i år kan utrymmet vara slut.</li>
<li><strong>Blanda ihop ROT och RUT.</strong> De delar tak men gäller olika arbeten.</li>
<li><strong>Otydlig faktura.</strong> Separera arbete och material tydligt så avdraget håller.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är ROT-avdrag 2026?</h3>
<p>30 % av arbetskostnaden, max 50 000 kr per person och år. ROT och RUT delar ett gemensamt tak på 75 000 kr, varav högst 50 000 kr får vara ROT.</p>
<h3>Vad gäller ROT-avdraget för?</h3>
<p>Reparation, underhåll, om- och tillbyggnad av bostad du äger och bor i. Endast arbetskostnaden – inte material, resor eller maskiner.</p>
<h3>Gäller ROT vid nybyggnation?</h3>
<p>Nej. ROT gäller inte nybyggnad; för ett nybyggt småhus medges avdrag först efter fem år.</p>

<h2>Kom igång</h2>
<p>Räkna rätt varje gång och visa kunden vad de sparar. <a href="/sv/verktyg/rot-avdrag-kalkylator">Testa ROT-kalkylatorn</a>, skapa offert och faktura med ROT i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/verktyg/offert-mall">Offert-mall</a> · <a href="/sv/verktyg/faktura-mall">Faktura-mall</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a></p>
`.trim();

const ROT: BlogPost = {
  _id: 'code-rot-avdrag',
  title: 'ROT-avdrag 2026 – regler, belopp och hur du räknar rätt',
  slug: 'rot-avdrag',
  locale: 'sv',
  excerpt:
    'ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr och gemensamt tak med RUT. Så räknar du ut det, vem som har rätt och hur du fakturerar rätt – med gratis kalkylator.',
  tag: 'ROT-avdrag',
  coverImageUrl: '/landing/features/8fakturor.webp',
  contentHtml: ROT_HTML,
  seoTitle: 'ROT-avdrag 2026 – regler, belopp & kalkylator | ByggExp',
  seoDescription:
    'ROT-avdrag 2026: 30 % av arbetskostnaden, max 50 000 kr, gemensamt tak 75 000 kr med RUT. Räkna ut ROT, se vem som har rätt och hur du fakturerar – gratis kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T13:00:00.000Z',
  createdAt: '2026-08-12T13:00:00.000Z',
  updatedAt: '2026-08-12T13:00:00.000Z',
};

const ID06_HTML = `
<p>Nästan alla på ett bygge har ett ID06-kort i fickan – men få vet exakt vad det är, vad det krävs för och om det ens är ett lagkrav. Här reder vi ut vad ID06 är, vad det används till och hur det hänger ihop med personalliggaren.</p>

<h2>Vad är ID06?</h2>
<p>ID06 är byggbranschens system för <strong>identifikation, närvaroregistrering och kompetens</strong>. Kortet knyter en person till rätt identitet och används bland annat för att registrera vem som är på arbetsplatsen och för att samla individens utbildningar och intyg i ID06 Kompetensdatabas. Syftet är en säkrare arbetsplats och sundare konkurrens – att alla som vistas på bygget är behöriga och identitetskontrollerade.</p>

<h2>Vad används ID06 till?</h2>
<ul>
<li><strong>Identitetskontroll</strong> – säkerställer vem personen är.</li>
<li><strong>Elektronisk personalliggare</strong> – registrerar närvaro (in- och utcheckning).</li>
<li><strong>Access</strong> – styr in- och utpassering, ofta via kortläsare eller vändkors.</li>
<li><strong>Kompetens</strong> – utbildningar och certifikat registreras på individen i ID06 Kompetensdatabas.</li>
</ul>

<h2>Är ID06 ett lagkrav?</h2>
<p>Nej – inte i sig. Sedan den 1 januari 2016 är <strong>elektronisk personalliggare</strong> obligatorisk på de flesta byggarbetsplatser (där byggherren inte är en privatperson). Lagen kräver att liggaren är elektronisk och visar vem som är och har varit på plats – men den kräver inte specifikt ID06. ID06 är den vanligaste tekniska lösningen för att uppfylla kravet, och många beställare ställer krav på ID06 i sina avtal. Läs mer om <a href="/sv/blog/personalliggare">personalliggare och reglerna</a>.</p>

<h2>ID06 och kompetensdatabasen</h2>
<p>I ID06 Kompetensdatabas registreras utbildningar och intyg – som heta arbeten, arbete på väg eller säkerhetsutbildningar – kopplat till individen. Det gör att arbetsledaren snabbt kan verifiera att rätt person har rätt behörighet, och att intygen finns samlade på ett ställe i stället för i pärmar.</p>

<h2>Så funkar det i praktiken</h2>
<ol>
<li>Medarbetaren har ett giltigt ID06-kort kopplat till sin identitet.</li>
<li>Vid in- och utcheckning registreras närvaron i personalliggaren.</li>
<li>Behörigheter och utbildningar finns tillgängliga via kompetensdatabasen.</li>
<li>Byggherren/entreprenören kan visa en samlad, aktuell liggare för Skatteverket.</li>
</ol>

<h2>Vanliga frågor</h2>
<h3>Är ID06 obligatoriskt?</h3>
<p>ID06 i sig är inte lagstadgat, men elektronisk personalliggare är obligatorisk på de flesta byggarbetsplatser sedan 2016. Många beställare kräver dessutom ID06 i avtal.</p>
<h3>Vad är skillnaden mellan ID06 och personalliggare?</h3>
<p>Personalliggaren är själva närvaroregistret (lagkravet). ID06 är ett system som bland annat sköter identitet och närvaro och ofta används för att föra liggaren.</p>
<h3>Vad är ID06 Kompetensdatabas?</h3>
<p>En databas där individens utbildningar och intyg registreras, så att behörigheter enkelt kan verifieras på arbetsplatsen.</p>

<h2>Kom igång</h2>
<p>Oavsett kortlösning behöver du en elektronisk närvaroregistrering som håller. I ByggExp checkar laget in och ut kopplat till projektet – du ser vilka som är på plats och har liggaren redo. <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Se hur närvaro fungerar</a> eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/personalliggare">Guide: personalliggare</a> · <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Närvaro och incheckning</a></p>
`.trim();

const ID06: BlogPost = {
  _id: 'code-id06',
  title: 'ID06 – vad det är, vad det krävs för och lagkraven',
  slug: 'id06',
  locale: 'sv',
  excerpt:
    'Vad är ID06, vad används kortet till och är det ett lagkrav? Så hänger ID06 ihop med elektronisk personalliggare, kompetensdatabasen och närvaro på bygget.',
  tag: 'ID06',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: ID06_HTML,
  seoTitle: 'ID06 – vad det är, krav och personalliggare | ByggExp',
  seoDescription:
    'Vad är ID06 och är det ett lagkrav? Så används ID06 för identitet, elektronisk personalliggare, access och kompetens i byggbranschen – och skillnaden mot personalliggaren.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T13:30:00.000Z',
  createdAt: '2026-08-12T13:30:00.000Z',
  updatedAt: '2026-08-12T13:30:00.000Z',
};

const BEMANNING_HTML = `
<p>Rätt person, på rätt plats, vid rätt tid – låter enkelt, men bemanning är ofta det som gör eller stjälper marginalen i ett byggföretag. En sjukanmälan på fel dag eller en dubbelbokad snickare kan välta hela veckans plan. Här går vi igenom hur du planerar bemanningen så att projekten flyter.</p>

<h2>Vad är bemanning och personalplanering i bygg?</h2>
<p>Bemanning handlar om att fördela rätt personal och kompetens över projekt och dagar. Personalplanering är den löpande pusslet: vem jobbar var, vilka pass gäller, vem är ledig eller sjuk, och räcker kompetensen för det som ska göras. Målet är hög beläggning utan att någon blir överbelastad – och utan luckor som kostar tid.</p>

<h2>Varför bemanning är svårt</h2>
<ul>
<li><strong>Flera projekt samtidigt.</strong> Personal ska delas mellan arbetsplatser utan krockar.</li>
<li><strong>Frånvaro dyker upp.</strong> Sjukdom, VAB och semester rubbar planen med kort varsel.</li>
<li><strong>Rätt kompetens.</strong> Vissa moment kräver behörighet – fel person på plats stoppar jobbet.</li>
<li><strong>Överblick saknas.</strong> Planeras det i huvudet eller i spridda kalkylark blir det lätt fel.</li>
</ul>

<h2>Så planerar du bemanningen steg för steg</h2>
<ol>
<li>Lägg in alla projekt och deras behov – antal personer och kompetens per period.</li>
<li>Fördela personalen på pass och projekt med en tydlig, delad översikt.</li>
<li>Markera frånvaro (sjuk, VAB, semester) så att luckor syns direkt.</li>
<li>Justera löpande när något ändras – och låt laget se sitt schema.</li>
<li>Följ upp beläggning mot plan för att hitta över- och underbeläggning.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Planera i huvudet.</strong> Utan en delad plan uppstår dubbelbokningar och luckor.</li>
<li><strong>Glömma kompetenskravet.</strong> Rätt antal personer räcker inte om behörigheten saknas.</li>
<li><strong>Ingen frånvaroöversikt.</strong> Frånvaro som inte syns i planen ställer till det på plats.</li>
<li><strong>Sena besked till laget.</strong> Oklara scheman skapar spilltid och irritation.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp planerar du bemanningen visuellt: fördela personal på projekt och pass, se frånvaro och beläggning i en delad vy, och låt medarbetarna se sitt schema i mobilen. Eftersom bemanning, närvaro, tid och ekonomi ligger i samma app hänger planen ihop med verkligheten – planerade timmar följer med hela vägen till <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlaget</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan bemanning och schemaläggning?</h3>
<p>Bemanning handlar om att fördela rätt personal och kompetens över projekt; schemaläggning är att lägga de konkreta passen. I praktiken hänger de ihop.</p>
<h3>Hur hanterar jag frånvaro i planeringen?</h3>
<p>Markera sjuk, VAB och semester i planen så att luckor syns direkt och kan täckas i tid. Se även <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">närvaro och incheckning</a>.</p>
<h3>Behöver jag ett verktyg för bemanning?</h3>
<p>Vid ett projekt går det i huvudet – vid flera blir en delad, digital plan snabbt nödvändig för att undvika krockar och spilltid.</p>

<h2>Kom igång</h2>
<p>Sluta pussla i huvudet. Planera bemanningen i en delad vy, se frånvaro direkt och koppla planen till tid och lön. <a href="/sv/blog/dagsplanering-och-planeringsmoten">Läs om dagsplanering</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/dagsplanering-och-planeringsmoten">Dagsplanering och planeringsmöten</a> · <a href="/sv/blog/narvaro-och-incheckning-pa-bygget">Närvaro och incheckning</a></p>
`.trim();

const BEMANNING: BlogPost = {
  _id: 'code-bemanning',
  title: 'Bemanning och personalplanering i bygg – så gör du rätt',
  slug: 'bemanning-och-personalplanering',
  locale: 'sv',
  excerpt:
    'Rätt person på rätt plats vid rätt tid. Så planerar du bemanning över flera projekt, hanterar frånvaro och kompetens – steg för steg, med vanliga misstag att undvika.',
  tag: 'Bemanning',
  coverImageUrl: '/landing/features/5planering.webp',
  contentHtml: BEMANNING_HTML,
  seoTitle: 'Bemanning & personalplanering i bygg – guide | ByggExp',
  seoDescription:
    'Så planerar du bemanning och personal i byggföretag: fördela rätt kompetens över flera projekt, hantera frånvaro och undvik dubbelbokningar. Steg för steg.',
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T14:00:00.000Z',
  createdAt: '2026-08-12T14:00:00.000Z',
  updatedAt: '2026-08-12T14:00:00.000Z',
};

const AB04_HTML = `
<p>AB 04 och ABT 06 är de standardavtal som styr de flesta byggprojekt i Sverige. Väljer du fel – eller missar hur ansvaret fördelas – kan det bli dyrt. Här är skillnaden mellan avtalen, vad de reglerar och det du behöver ha koll på om ÄTA, dagbok, garantitid och besiktning.</p>

<h2>Vad är AB 04 och ABT 06?</h2>
<p>Det är <strong>allmänna bestämmelser</strong> – färdiga avtalsvillkor framtagna av bygg- och installationsbranschen – som parterna hänvisar till i entreprenadkontraktet. De reglerar rättigheter och skyldigheter mellan beställare och entreprenör: pris, tid, ändringar (ÄTA), ansvar, besiktning och garantier.</p>

<h2>Skillnaden mellan AB 04 och ABT 06</h2>
<p>Den avgörande skillnaden är <strong>vem som ansvarar för projekteringen</strong>:</p>
<ul>
<li><strong>AB 04 – utförandeentreprenad.</strong> Beställaren projekterar och tar fram handlingarna; entreprenören utför enligt dem.</li>
<li><strong>ABT 06 – totalentreprenad.</strong> Entreprenören ansvarar för både projektering och utförande. Beställaren sätter funktionskrav och entreprenören levererar en färdig lösning som uppfyller dem.</li>
</ul>
<p>Kort sagt: med AB 04 följer entreprenören beställarens ritningar, med ABT 06 tar entreprenören helhetsansvaret.</p>

<h2>ÄTA-arbeten</h2>
<p>Ändrings-, tilläggs- och avgående arbeten (ÄTA) regleras i kap 2. Det är här mest pengar tvistas om – rätt hantering och underrättelse i tid avgör om du får betalt. Läs mer i vår <a href="/sv/blog/ata-arbeten">guide om ÄTA-arbeten</a>.</p>

<h2>Dagbok och dokumentation</h2>
<p>Enligt AB 04 kap 3 §13 ska entreprenören föra dagbok och löpande delge beställaren innehållet. En väl förd <a href="/sv/blog/byggdagbok">byggdagbok</a> blir ett viktigt bevisunderlag om tidplan, ÄTA eller ansvar ifrågasätts.</p>

<h2>Garantitid och ansvarstid</h2>
<ul>
<li><strong>AB 04:</strong> garantitid 5 år för entreprenörens arbetsprestation och 2 år för material och varor.</li>
<li><strong>ABT 06:</strong> garantitid 5 år för entreprenaden.</li>
<li><strong>Ansvarstid:</strong> 10 år från det att entreprenaden godkänts, och inleds med garantitiden. Under ansvarstiden kan entreprenören bli ansvarig för väsentliga fel som beror på vårdslöshet.</li>
</ul>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Otydligt kontrakt.</strong> Hänvisa uttryckligen till AB 04 eller ABT 06 – annars gäller dispositiv rätt.</li>
<li><strong>Slarv med ÄTA.</strong> Muntliga beställningar och utebliven underrättelse kostar pengar.</li>
<li><strong>Ingen dagbok.</strong> Utan löpande dokumentation står du svagt vid en tvist.</li>
<li><strong>Missa besiktning och tider.</strong> Håll koll på slutbesiktning och när garantitiden börjar löpa.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan AB 04 och ABT 06?</h3>
<p>AB 04 gäller utförandeentreprenad där beställaren projekterar. ABT 06 gäller totalentreprenad där entreprenören ansvarar för både projektering och utförande.</p>
<h3>Hur lång är garantitiden?</h3>
<p>Fem år för entreprenörens arbete (två år för material enligt AB 04). Ansvarstiden är tio år från godkänd entreprenad.</p>
<h3>Var regleras ÄTA?</h3>
<p>I kap 2 i AB 04 och ABT 06. Se vår <a href="/sv/blog/ata-arbeten">ÄTA-guide</a> för hur du får betalt.</p>

<h2>Kom igång</h2>
<p>Håll koll på kontrakt, ÄTA, dagbok och ekonomi på ett ställe. <a href="/sv/blog/ata-arbeten">Läs om ÄTA</a>, skapa offert och faktura i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> · <a href="/sv/blog/byggdagbok">Byggdagbok</a> · <a href="/sv/blog/egenkontroll">Egenkontroll</a></p>
`.trim();

const AB04: BlogPost = {
  _id: 'code-ab-04-abt-06',
  title: 'AB 04 och ABT 06 – skillnaden och vad du behöver veta',
  slug: 'ab-04-och-abt-06',
  locale: 'sv',
  excerpt:
    'Skillnaden mellan AB 04 (utförandeentreprenad) och ABT 06 (totalentreprenad), samt vad avtalen säger om ÄTA, dagbok, garantitid och ansvarstid.',
  tag: 'Entreprenadjuridik',
  coverImageUrl: '/landing/features/7offerter.webp',
  contentHtml: AB04_HTML,
  seoTitle: 'AB 04 och ABT 06 – skillnad, garantitid & ÄTA | ByggExp',
  seoDescription:
    'AB 04 vs ABT 06: utförande- eller totalentreprenad, vem projekterar, ÄTA (kap 2), dagbok (kap 3 §13), garantitid 5 år och ansvarstid 10 år. Komplett guide.',
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T15:00:00.000Z',
  createdAt: '2026-08-12T15:00:00.000Z',
  updatedAt: '2026-08-12T15:00:00.000Z',
};

const AMP_HTML = `
<p>En arbetsmiljöplan (AMP) är inte bara en pärm som ska finnas – den är ofta ett lagkrav, och saknas den när Arbetsmiljöverket kommer på besök kan det bli sanktionsavgift. Här är när en AMP krävs, vad den ska innehålla och vem som ansvarar (byggherre, BAS-P och BAS-U).</p>

<h2>Vad är en arbetsmiljöplan (AMP)?</h2>
<p>En arbetsmiljöplan är ett dokument som beskriver hur arbetsmiljön ska hanteras på en byggarbetsplats: vilka risker som finns, vilka regler som gäller och vilka åtgärder som ska vidtas. Reglerna finns i Arbetsmiljöverkets föreskrifter <strong>AFS 2023:3</strong> (som ersatt den tidigare strukturen).</p>

<h2>När krävs en arbetsmiljöplan?</h2>
<p>En AMP krävs i två situationer:</p>
<ul>
<li><strong>Arbete med särskild risk</strong> enligt kap 11 §12 i AFS 2023:3 – till exempel risk för fall från höjd, arbete i schakt, rivning av bärande konstruktioner eller arbete med asbest. Då krävs en AMP <strong>från dag ett</strong>, oavsett projektets storlek.</li>
<li><strong>När förhandsanmälan krävs</strong> – arbete som pågår längre än 30 arbetsdagar med fler än 20 personer samtidigt, eller mer än 500 persondagar totalt.</li>
</ul>
<p>Som tumregel bör en arbetsmiljöplan finnas på plats innan bygget startar.</p>

<h2>Vem ansvarar – byggherre, BAS-P och BAS-U?</h2>
<ul>
<li><strong>Byggherren</strong> har det övergripande ansvaret och utser byggarbetsmiljösamordnare.</li>
<li><strong>BAS-P</strong> (samordnare för planering och projektering) ansvarar för att upprätta arbetsmiljöplanen.</li>
<li><strong>BAS-U</strong> (samordnare för utförande) ansvarar för att AMP:n hålls aktuell och uppdateras under byggets gång.</li>
</ul>

<h2>Vad ska en arbetsmiljöplan innehålla?</h2>
<ul>
<li>De regler som ska tillämpas på arbetsplatsen</li>
<li>Beskrivning av arbeten med särskild risk och åtgärder för dem</li>
<li>Hur arbetsmiljöarbetet organiseras (ansvar, rutiner)</li>
<li>Gemensamma skyddsåtgärder, ordning och tillträde</li>
<li>Uppdateras löpande när nya risker eller moment tillkommer</li>
</ul>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Skapa AMP:n och glömma den.</strong> Den ska hållas aktuell under hela projektet – det är BAS-U:s ansvar.</li>
<li><strong>Generisk mall utan projektets risker.</strong> Planen ska spegla de faktiska riskerna på just den arbetsplatsen.</li>
<li><strong>Otydliga roller.</strong> BAS-P och BAS-U ska vara utsedda och kända.</li>
<li><strong>Ingen koppling till egenkontroll.</strong> Kontroller och åtgärder bör dokumenteras löpande – se <a href="/sv/blog/egenkontroll">egenkontroll</a>.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>När måste man ha en arbetsmiljöplan?</h3>
<p>Vid arbete med särskild risk (kap 11 §12 AFS 2023:3) krävs den från dag ett, och när förhandsanmälan krävs (över 30 dagar med fler än 20 personer, eller över 500 persondagar).</p>
<h3>Vem upprättar arbetsmiljöplanen?</h3>
<p>BAS-P upprättar planen; BAS-U håller den aktuell under utförandet. Byggherren har det övergripande ansvaret.</p>
<h3>Vad är skillnaden mellan BAS-P och BAS-U?</h3>
<p>BAS-P samordnar arbetsmiljön i planering och projektering; BAS-U samordnar under utförandet på plats.</p>

<h2>Kom igång</h2>
<p>Håll arbetsmiljön, kontroller och dokumentation samlat och aktuellt. <a href="/sv/blog/egenkontroll">Läs om egenkontroll och KMA</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll och KMA</a> · <a href="/sv/blog/personalliggare">Personalliggare</a></p>
`.trim();

const AMP: BlogPost = {
  _id: 'code-arbetsmiljoplan',
  title: 'Arbetsmiljöplan (AMP) – när krävs den och vem ansvarar',
  slug: 'arbetsmiljoplan',
  locale: 'sv',
  excerpt:
    'När krävs en arbetsmiljöplan, vad ska den innehålla och vem ansvarar (byggherre, BAS-P, BAS-U)? Guide enligt AFS 2023:3 – med särskild risk och förhandsanmälan.',
  tag: 'Arbetsmiljö',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: AMP_HTML,
  seoTitle: 'Arbetsmiljöplan (AMP) – krav, BAS-P & BAS-U | ByggExp',
  seoDescription:
    'När krävs en arbetsmiljöplan (AMP) enligt AFS 2023:3? Särskild risk, förhandsanmälan, vad den ska innehålla och ansvar för byggherre, BAS-P och BAS-U.',
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T15:30:00.000Z',
  createdAt: '2026-08-12T15:30:00.000Z',
  updatedAt: '2026-08-12T15:30:00.000Z',
};

const ATTESTERING_HTML = `
<p>Attestering låter byråkratiskt, men det är i praktiken din kontroll över vad företaget betalar och betalar ut. Utan ett tydligt attestflöde smyger sig fel fakturor och felaktiga timmar igenom – rakt in i resultatet. Här är hur du sätter upp attestering för fakturor och tid i ett byggföretag.</p>

<h2>Vad är attestering?</h2>
<p>Attestering är att någon behörig <strong>godkänner</strong> en kostnad eller ett underlag innan det betalas eller förs vidare – till exempel en leverantörsfaktura innan betalning, eller rapporterade timmar innan de blir löneunderlag. Attesten är beviset på att någon kontrollerat att uppgiften stämmer och hör till rätt projekt.</p>

<h2>Vad attesteras i ett byggföretag?</h2>
<ul>
<li><strong>Leverantörsfakturor</strong> – stämmer beloppet, är varan levererad, rätt projekt?</li>
<li><strong>Rapporterad tid</strong> – innan den blir <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlag</a>.</li>
<li><strong>Utlägg och kvitton</strong> – rätt kostnad, rätt projekt.</li>
<li><strong>ÄTA och tilläggsarbeten</strong> – godkända innan de faktureras vidare.</li>
</ul>

<h2>Så sätter du upp ett attestflöde</h2>
<ol>
<li>Bestäm <strong>attestordning</strong> – vem får godkänna vad och upp till vilka belopp.</li>
<li>Koppla varje faktura och tidpost till <strong>rätt projekt</strong> så kostnaden hamnar rätt.</li>
<li>Låt rätt person granska och attestera – gärna enligt tvåhandsprincipen för större belopp.</li>
<li>Betala/för vidare först efter attest – och spara vem som godkände och när.</li>
</ol>

<h2>Varför det är värt besväret</h2>
<p>Ett tydligt attestflöde ger <strong>kostnadskontroll per projekt</strong>, mindre risk för fel och dubbelbetalningar, och ett spårbart underlag om något ifrågasätts. Framför allt ser du marginalen i realtid i stället för först vid bokslutet – se <a href="/sv/blog/projektekonomi-och-lonsamhet">projektekonomi och lönsamhet</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Ingen tydlig attestordning.</strong> Otydligt vem som får godkänna vad leder till flaskhalsar eller slarv.</li>
<li><strong>Fakturor utan projekt.</strong> Kostnader som inte kopplas till projekt gör lönsamheten omöjlig att följa.</li>
<li><strong>Attestera på autopilot.</strong> Poängen är kontrollen – granska innan du godkänner.</li>
<li><strong>Papper och mejl.</strong> Spårbarheten försvinner; håll attesten digitalt och kopplad till underlaget.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vad betyder att attestera en faktura?</h3>
<p>Att en behörig person godkänner att fakturan är korrekt och hör till rätt projekt innan den betalas.</p>
<h3>Vad är en attestordning?</h3>
<p>En regel för vem som får godkänna vilka kostnader och upp till vilka belopp – grunden i ett attestflöde.</p>
<h3>Varför koppla attest till projekt?</h3>
<p>För att få kostnadskontroll och kunna följa lönsamheten per projekt i realtid.</p>

<h2>Kom igång</h2>
<p>Få kontroll på vad som betalas – och se marginalen medan projektet pågår. <a href="/sv/blog/projektekonomi-och-lonsamhet">Läs om projektekonomi</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/projektekonomi-och-lonsamhet">Projektekonomi och lönsamhet</a> · <a href="/sv/blog/fota-kvitton-och-hantera-utlagg">Fota kvitton och hantera utlägg</a> · <a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a></p>
`.trim();

const ATTESTERING: BlogPost = {
  _id: 'code-attestering',
  title: 'Attestering i byggföretag – attestflöde för fakturor och tid',
  slug: 'attestering',
  locale: 'sv',
  excerpt:
    'Vad attestering är och hur du sätter upp ett attestflöde för leverantörsfakturor, tid och utlägg – med attestordning, projektkoppling och kostnadskontroll.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/features/11costs.webp',
  contentHtml: ATTESTERING_HTML,
  seoTitle: 'Attestering i byggföretag – attestflöde & kontroll | ByggExp',
  seoDescription:
    'Så sätter du upp attestering för leverantörsfakturor och tid i ett byggföretag: attestordning, projektkoppling, tvåhandsprincip och kostnadskontroll per projekt.',
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T16:00:00.000Z',
  createdAt: '2026-08-12T16:00:00.000Z',
  updatedAt: '2026-08-12T16:00:00.000Z',
};

const FRANVARO_HTML = `
<p>Frånvaro är oundvikligt – sjukdom, vård av barn och semester kommer alltid. Det som skiljer är hur snabbt du ser det och hur rätt det landar i planeringen och lönen. Här går vi igenom de vanligaste frånvarotyperna, vad som gäller kring sjuklön och karensavdrag, och hur du håller ordning på frånvaron i ett byggföretag.</p>

<h2>Vanliga typer av frånvaro</h2>
<ul>
<li><strong>Sjukfrånvaro</strong> – den anställde är sjuk och kan inte arbeta.</li>
<li><strong>VAB</strong> – vård av sjukt barn (tillfällig föräldrapenning).</li>
<li><strong>Semester</strong> – betald ledighet enligt semesterlagen.</li>
<li><strong>Föräldraledighet</strong> och annan lagstadgad ledighet.</li>
</ul>

<h2>Sjuklön och karensavdrag – så funkar det</h2>
<ul>
<li>Arbetsgivaren betalar <strong>sjuklön under de första 14 dagarna</strong> (sjuklöneperioden). Sjuklönen är 80 % av lönen.</li>
<li>Ett <strong>karensavdrag</strong> görs – 20 % av en genomsnittlig veckolön – en gång per sjukperiod.</li>
<li>Insjuknar den anställde igen inom <strong>fem kalenderdagar</strong> räknas det som samma sjukperiod, så inget nytt karensavdrag görs.</li>
<li>Genom det allmänna högriskskyddet kan karensavdrag göras högst tio gånger under en tolvmånadersperiod.</li>
<li><strong>Från dag 15</strong> anmäler arbetsgivaren sjukfallet till Försäkringskassan, som betalar sjukpenning.</li>
</ul>

<h2>VAB och semester</h2>
<p>Vid <strong>VAB</strong> betalar Försäkringskassan tillfällig föräldrapenning efter anmälan från den anställde – det är alltså inte arbetsgivaren som betalar. <strong>Semester</strong> regleras av semesterlagen; det viktiga för dig som arbetsgivare är att planera uttaget så att det inte krockar med bemanningen i projekten.</p>

<h2>Varför frånvaro måste synas direkt</h2>
<p>På ett bygge får frånvaro omedelbara konsekvenser: en lucka i <a href="/sv/blog/bemanning-och-personalplanering">bemanningen</a> måste täckas, och timmarna ska bli rätt i <a href="/sv/blog/loneunderlag-for-byggforetag">löneunderlaget</a>. Om frånvaron rapporteras sent eller på lappar blir både planen och lönen fel.</p>

<h2>Så håller du ordning på frånvaron i ByggExp</h2>
<ol>
<li>Medarbetaren anmäler frånvaro direkt i appen – sjuk, VAB eller ledig.</li>
<li>Frånvaron syns direkt i planeringen så luckor kan täckas i tid.</li>
<li>Rätt avdrag och ersättning följer med till löneunderlaget – utan handpåläggning.</li>
<li>Du får överblick över frånvaro per person och projekt.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Frånvaro på lappar och sms.</strong> Det försvinner och blir fel i lön och plan.</li>
<li><strong>Fel karensavdrag.</strong> Missa inte femdagarsregeln vid återinsjuknande.</li>
<li><strong>Ingen koppling till bemanning.</strong> Frånvaro som inte syns i planen ställer till det på plats.</li>
<li><strong>Sen anmälan till Försäkringskassan.</strong> Håll koll på dag 15-gränsen vid längre sjukdom.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur länge betalar arbetsgivaren sjuklön?</h3>
<p>Under de första 14 dagarna av sjukperioden (sjuklöneperioden), med 80 % av lönen efter ett karensavdrag. Från dag 15 tar Försäkringskassan över med sjukpenning.</p>
<h3>Vem betalar vid VAB?</h3>
<p>Försäkringskassan betalar tillfällig föräldrapenning vid VAB, efter anmälan från den anställde.</p>
<h3>Hur stort är karensavdraget?</h3>
<p>20 % av en genomsnittlig veckolön, och görs en gång per sjukperiod.</p>

<h2>Kom igång</h2>
<p>Håll frånvaron samlad, kopplad till plan och lön. <a href="/sv/blog/bemanning-och-personalplanering">Läs om bemanning</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a> · <a href="/sv/blog/loneunderlag-for-byggforetag">Löneunderlag</a></p>
`.trim();

const FRANVARO: BlogPost = {
  _id: 'code-franvaro',
  title: 'Frånvaro i byggföretag – sjuk, VAB, semester och sjuklön',
  slug: 'franvaro-i-byggforetag',
  locale: 'sv',
  excerpt:
    'Frånvarotyper, sjuklön och karensavdrag, VAB via Försäkringskassan och hur du håller ordning på frånvaron så att bemanning och löneunderlag blir rätt.',
  tag: 'Personal',
  coverImageUrl: '/landing/features/12salary.webp',
  contentHtml: FRANVARO_HTML,
  seoTitle: 'Frånvaro i byggföretag – sjuklön, karensavdrag & VAB | ByggExp',
  seoDescription:
    'Sjuklön dag 1–14, karensavdrag 20 %, femdagarsregeln, VAB via Försäkringskassan och semester. Så håller du ordning på frånvaron i ett byggföretag.',
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T17:00:00.000Z',
  createdAt: '2026-08-12T17:00:00.000Z',
  updatedAt: '2026-08-12T17:00:00.000Z',
};

const HETA_ARBETEN_HTML = `
<p>Heta arbeten är en av de vanligaste orsakerna till bränder på arbetsplatser – och ett moment där försäkringsbolagen ställer hårda krav. Saknas rätt certifikat eller brandvakt kan försäkringen sättas ur spel. Här är vad heta arbeten är, vilka roller som krävs och vad som gäller kring certifikat och tillstånd.</p>

<h2>Vad är heta arbeten?</h2>
<p>Heta arbeten är tillfälliga arbeten som utförs på en tillfällig arbetsplats och som medför brandfara – till exempel svetsning, skärning, lödning, arbete med rondell eller andra verktyg som alstrar värme eller gnistor. Eftersom risken för brand är påtaglig finns särskilda säkerhetsregler och krav på behörighet.</p>

<h2>Certifikat och försäkringskrav</h2>
<ul>
<li>Ett certifikat <strong>Heta Arbeten®</strong> är giltigt i <strong>5 år</strong> från godkänd certifiering.</li>
<li>Försäkringsbolagen kräver att den som utför heta arbeten, är brandvakt eller utfärdar tillstånd har <strong>giltigt certifikat</strong>.</li>
<li>Certifikaten ska kunna styrkas <strong>innan arbetet påbörjas</strong>.</li>
</ul>

<h2>Rollerna: tillståndsansvarig, hetarbetare och brandvakt</h2>
<ul>
<li><strong>Tillståndsansvarig</strong> – utfärdar tillstånd, bedömer risken och ställer krav på skyddsåtgärder. Behöver utbildning och praktisk erfarenhet av brandskydd.</li>
<li><strong>Hetarbetare (utförare)</strong> – den som utför det heta arbetet.</li>
<li><strong>Brandvakt</strong> – bevakar brandrisken under och efter arbetet.</li>
</ul>
<p>Samtliga ska ha giltigt certifikat. Det finns ett undantag: den som är tillståndsansvarig vid högst tre tillfällen under en tolvmånadersperiod kan undantas från kravet på personcertifikat.</p>

<h2>Så går det till i praktiken</h2>
<ol>
<li>Tillståndsansvarig bedömer risken och utfärdar ett skriftligt tillstånd med villkor.</li>
<li>Skyddsåtgärder ordnas – släckutrustning, rensning av brännbart material, m.m.</li>
<li>Hetarbetaren utför arbetet, brandvakten bevakar.</li>
<li>Efterbevakning görs enligt tillståndet innan platsen lämnas.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Ogiltigt certifikat.</strong> Kolla giltigheten (5 år) innan arbetet – annars kan försäkringen falla.</li>
<li><strong>Ingen brandvakt.</strong> Bevakning under och efter arbetet är ett krav, inte en formalitet.</li>
<li><strong>Muntligt tillstånd.</strong> Tillståndet ska vara skriftligt med tydliga villkor.</li>
<li><strong>Ingen efterbevakning.</strong> Många bränder startar efter att arbetet avslutats.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Hur länge gäller ett Heta Arbeten-certifikat?</h3>
<p>Fem år från godkänd certifiering. Därefter behöver det förnyas.</p>
<h3>Vilka behöver certifikat?</h3>
<p>Tillståndsansvarig, hetarbetare och brandvakt ska ha giltigt certifikat, och det ska kunna styrkas innan arbetet börjar.</p>
<h3>Måste tillståndet vara skriftligt?</h3>
<p>Ja. Tillståndsansvarig utfärdar ett skriftligt tillstånd med villkor och skyddsåtgärder.</p>

<h2>Kom igång</h2>
<p>Håll koll på behörigheter, tillstånd och arbetsmiljö på ett ställe. <a href="/sv/blog/arbetsmiljoplan">Läs om arbetsmiljöplan</a> eller <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan (AMP)</a> · <a href="/sv/blog/egenkontroll">Egenkontroll och KMA</a></p>
`.trim();

const HETA_ARBETEN: BlogPost = {
  _id: 'code-heta-arbeten',
  title: 'Heta arbeten – certifikat, tillståndsansvarig och brandvakt',
  slug: 'heta-arbeten',
  locale: 'sv',
  excerpt:
    'Vad heta arbeten är, försäkringskraven, certifikatets giltighet (5 år) och rollerna tillståndsansvarig, hetarbetare och brandvakt – plus vanliga misstag.',
  tag: 'Arbetsmiljö',
  coverImageUrl: '/landing/features/6verktyg.webp',
  contentHtml: HETA_ARBETEN_HTML,
  seoTitle: 'Heta arbeten – certifikat, tillstånd & brandvakt | ByggExp',
  seoDescription:
    'Heta arbeten: certifikat Heta Arbeten® (5 år), försäkringskrav, rollerna tillståndsansvarig, hetarbetare och brandvakt, skriftligt tillstånd och efterbevakning.',
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T17:30:00.000Z',
  createdAt: '2026-08-12T17:30:00.000Z',
  updatedAt: '2026-08-12T17:30:00.000Z',
};

const SLUTBESIKTNING_HTML = `
<p>Slutbesiktningen är målsnöret i ett byggprojekt – det är här entreprenaden godkänns, ansvaret går över och garantitiden börjar ticka. Går den fel kan betalning hållas inne och tvister uppstå. Här är hur en slutbesiktning enligt AB 04 går till och vad du behöver ha ordning på.</p>

<h2>Vad är en slutbesiktning?</h2>
<p>En slutbesiktning är en oberoende kontroll av att entreprenaden är utförd enligt kontraktet. Den utförs av en <strong>besiktningsman</strong> som ska vara oberoende i förhållande till båda parter och ha dokumenterad sakkunskap om entreprenadjuridik och byggteknik. Besiktningen regleras i <strong>AB 04 kap 7</strong> (och motsvarande i ABT 06).</p>

<h2>Godkänd eller inte?</h2>
<p>Enligt <strong>AB 04 kap 7 §12</strong> ska entreprenaden godkännas vid slutbesiktning om det inte föreligger fel. <strong>Fel av mindre betydelse som förekommer i begränsad omfattning hindrar dock inte godkännande</strong> – de noteras i stället för åtgärd. Vid slutsammanträdet meddelar besiktningsmannen om entreprenaden är godkänd eller inte.</p>

<h2>Vad händer när entreprenaden godkänns?</h2>
<ul>
<li>Entreprenaden anses <strong>avlämnad</strong> och ansvaret går i huvudsak över till beställaren.</li>
<li><strong>Garantitiden börjar löpa</strong> – fem år för entreprenörens arbetsprestation och två år för material och varor enligt AB 04.</li>
<li><strong>Ansvarstiden</strong> är tio år från godkännandet och inleds med garantitiden.</li>
<li>Noterade fel ska åtgärdas inom överenskommen tid.</li>
</ul>

<h2>Så förbereder du dig inför slutbesiktningen</h2>
<ol>
<li>Se till att egenkontroller är gjorda och dokumenterade – <a href="/sv/blog/egenkontroll">egenkontroll</a> är ofta det som styrker kvaliteten.</li>
<li>Ha <a href="/sv/blog/byggdagbok">byggdagboken</a> och ÄTA-underlag i ordning.</li>
<li>Åtgärda kända brister innan besiktningen.</li>
<li>Samla ritningar, intyg och provningsprotokoll som ska visas.</li>
</ol>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Bristfällig dokumentation.</strong> Utan egenkontroller och dagbok blir det svårt att styrka utförandet.</li>
<li><strong>Oåtgärdade brister.</strong> Många små fel kan sänka intrycket även om de inte hindrar godkännande.</li>
<li><strong>Otydligt om garantitiden.</strong> Ha koll på när den börjar och vad som gäller vid garantibesiktning.</li>
<li><strong>Glömma ÄTA.</strong> Se till att godkända ÄTA är dokumenterade och fakturerade.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vem utför slutbesiktningen?</h3>
<p>En oberoende besiktningsman med sakkunskap om entreprenadjuridik och byggteknik.</p>
<h3>Vad händer om det finns fel?</h3>
<p>Fel av mindre betydelse i begränsad omfattning hindrar inte godkännande – de noteras för åtgärd. Väsentliga fel kan leda till att entreprenaden inte godkänns.</p>
<h3>När börjar garantitiden?</h3>
<p>När entreprenaden godkänns vid slutbesiktningen. Enligt AB 04 är den fem år för arbetet och två år för material; ansvarstiden är tio år.</p>

<h2>Kom igång</h2>
<p>Gå in i slutbesiktningen med ordning på dokumentationen. <a href="/sv/blog/egenkontroll">Läs om egenkontroll</a>, för <a href="/sv/blog/byggdagbok">byggdagbok</a> i ByggExp eller <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a> · <a href="/sv/blog/egenkontroll">Egenkontroll</a> · <a href="/sv/blog/byggdagbok">Byggdagbok</a></p>
`.trim();

const SLUTBESIKTNING: BlogPost = {
  _id: 'code-slutbesiktning',
  title: 'Slutbesiktning enligt AB 04 – så går den till',
  slug: 'slutbesiktning',
  locale: 'sv',
  excerpt:
    'Hur en slutbesiktning enligt AB 04 kap 7 går till: besiktningsmannens roll, när entreprenaden godkänns, när garantitiden börjar och hur du förbereder dig.',
  tag: 'Entreprenadjuridik',
  coverImageUrl: '/landing/features/2uppgift.webp',
  contentHtml: SLUTBESIKTNING_HTML,
  seoTitle: 'Slutbesiktning enligt AB 04 – godkännande & garantitid | ByggExp',
  seoDescription:
    'Slutbesiktning enligt AB 04 kap 7: besiktningsman, godkännande (fel av mindre betydelse hindrar inte), när garantitiden börjar och hur du förbereder dig.',
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-12T18:00:00.000Z',
  createdAt: '2026-08-12T18:00:00.000Z',
  updatedAt: '2026-08-12T18:00:00.000Z',
};

const TIMPRIS_HTML = `
<p>&quot;Vad ska jag ta betalt i timmen?&quot; är en av de vanligaste – och dyraste – frågorna en hantverkare kan svara fel på. Sätter du priset för lågt jobbar du gratis åt kunden; sätter du det för högt utan att kunna motivera det tappar du jobb. Här går vi igenom marknadsläget 2026, hur du räknar fram <em>ditt</em> timpris utifrån dina egna kostnader, och varför debiteringsgraden ofta är det som avgör om det går ihop.</p>

<p><a href="/sv/verktyg/timpris-kalkylator">Räkna ut ditt timpris direkt i vår gratis timpris-kalkylator →</a></p>

<h2>Marknadspriser för hantverkare 2026</h2>
<p>Timpriset varierar kraftigt mellan yrkesgrupper, erfarenhet och region. Som riktvärden ligger marknaden 2026 ungefär så här, <strong>inklusive moms och före ROT-avdrag</strong>:</p>
<ul>
<li><strong>Snickare:</strong> ca 450–850 kr/timme</li>
<li><strong>Målare:</strong> ca 400–650 kr/timme</li>
<li><strong>Elektriker:</strong> ca 550–1 100 kr/timme</li>
<li><strong>Rörmokare (VVS):</strong> ca 550–1 100 kr/timme</li>
<li><strong>Plattsättare:</strong> ca 500–800 kr/timme</li>
</ul>
<p>I Stockholm och övriga storstäder ligger priserna ofta 15–25 % över riksgenomsnittet. Men marknadspriset säger bara vad andra tar – inte vad <em>du</em> behöver ta för att gå med vinst.</p>

<h2>Marknadspris ≠ ditt timpris</h2>
<p>Det vanligaste misstaget är att sätta timpriset efter vad grannfirman tar. Problemet är att du inte känner deras kostnader, deras debiteringsgrad eller deras marginal. Ett timpris som fungerar för en enmansfirma med billig verkstad kan gå back för dig med anställda, bil och lokal. Räkna alltid nerifrån och upp – från dina egna kostnader.</p>

<h2>Så räknar du fram ditt timpris</h2>
<p>Grunden är enkel: alla dina kostnader ska täckas av de timmar du faktiskt kan fakturera, plus en vinst. Formeln ser ut så här:</p>
<p><strong>Timpris (exkl. moms) = (arbetsgivarkostnad + omkostnader) ÷ debiterbara timmar × (1 + vinstpåslag)</strong></p>
<p>De fyra delarna:</p>
<ul>
<li><strong>Arbetsgivarkostnad</strong> – inte bara lönen. Lägg på arbetsgivaravgifter (ca 31,42 %), semester, pension och försäkringar. En bruttolön på 35 000 kr/mån kostar dig ofta runt 52 000 kr/mån.</li>
<li><strong>Omkostnader</strong> – bil och drivmedel, verktyg och maskiner, försäkringar, telefon, admin, bokföring, eventuell lokal och marknadsföring. Slå ut dem per debiterbar timme.</li>
<li><strong>Debiterbara timmar</strong> – nyckeltalet de flesta missar. Av en 8-timmars dag blir sällan mer än 5–6 timmar fakturerbara. Restid, offerter, inköp, admin och ställtid går inte att debitera.</li>
<li><strong>Vinstpåslag</strong> – företaget ska tjäna pengar utöver din lön. 10–20 % är vanligt.</li>
</ul>

<h2>Exempel: från lön till timpris</h2>
<p>Säg att du har en anställd snickare:</p>
<ul>
<li>Arbetsgivarkostnad: <strong>52 000 kr/mån</strong></li>
<li>Omkostnader (bil, verktyg, försäkring, admin): <strong>+ 14 000 kr/mån</strong> → 66 000 kr totalt</li>
<li>Debiterbara timmar: 6 h/dag × 20 dagar = <strong>120 h/mån</strong> (debiteringsgrad 75 %)</li>
<li>Självkostnad per timme: 66 000 ÷ 120 = <strong>550 kr</strong></li>
<li>Vinstpåslag 15 %: 550 × 1,15 ≈ <strong>630 kr/timme exkl. moms</strong></li>
<li>Med 25 % moms: ≈ <strong>790 kr/timme</strong> som kunden ser</li>
</ul>
<p>Sänker du debiteringsgraden till 60 % (bara 4,8 debiterbara timmar/dag) stiger självkostnaden till ca 690 kr – nästan 25 % högre för exakt samma lön. Det är därför debiteringsgraden är så avgörande. <a href="/sv/verktyg/timpris-kalkylator">Testa dina egna siffror i timpris-kalkylatorn</a>.</p>

<h2>Glöm inte påslaget på material</h2>
<p>Timpriset täcker arbetet – men hanterar du material åt kunden ska du ta betalt för inköp, spill, transport och risk. Ett påslag på 10–20 % på materialet är rimligt. <a href="/sv/verktyg/paslag-marginal-kalkylator">Räkna påslag vs marginal här</a> så att du inte blandar ihop de två (ett påslag på 20 % ger inte 20 % marginal).</p>

<h2>ROT och moms – så påverkar de priset kunden ser</h2>
<p>För privatkunder dras <strong>ROT-avdrag på 30 % av arbetskostnaden</strong> (2026, max 50 000 kr per person och år). Du fakturerar hela arbetskostnaden inkl. moms och drar av ROT direkt på fakturan – kunden betalar mindre på en gång och du begär tillbaka resten från Skatteverket. Momsen på hantverkartjänster är 25 %. Se hur det slår i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a> och <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a>.</p>

<h2>Så håller du koll på debiteringsgraden i ByggExp</h2>
<p>Du kan bara prissätta rätt om du vet hur många timmar som faktiskt blir fakturerbara. I ByggExp registrerar teamet tid direkt i mobilen, kopplad till rätt projekt:</p>
<ol>
<li>Alla stämplar tid per projekt och moment – arbete, restid och ställtid.</li>
<li>Du ser i efterhand hur stor andel av tiden som gick att debitera – din verkliga debiteringsgrad.</li>
<li>Med rätt siffra kan du sätta ett timpris som håller, i stället för att gissa.</li>
<li>Tiden blir direkt underlag för offert och faktura, med ROT uträknat automatiskt.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/tidrapport-mall">Ladda ner en gratis tidrapport-mall</a> och börja mät din tid redan i veckan.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är ett normalt timpris för en hantverkare 2026?</h3>
<p>Som riktvärde ligger snickare på ca 450–850 kr/timme, målare 400–650 kr, och elektriker och rörmokare ofta 550–1 100 kr – allt inklusive moms och före ROT-avdrag. I storstäder är priserna 15–25 % högre. Ditt eget timpris bör dock alltid räknas fram från dina kostnader, inte från marknadsgenomsnittet.</p>
<h3>Vad är debiteringsgrad och varför är den viktig?</h3>
<p>Debiteringsgrad är andelen av arbetstiden som du faktiskt kan fakturera. Restid, offerter, inköp och admin är sällan debiterbara, så av en 8-timmars dag blir ofta bara 5–6 timmar fakturerbara. Ju lägre debiteringsgrad, desto högre måste timpriset vara för att täcka kostnaderna.</p>
<h3>Hur mycket vinstpåslag ska jag lägga på?</h3>
<p>Utöver att din lön ska täckas ska företaget gå med vinst. Ett vinstpåslag på 10–20 % på självkostnaden är vanligt. Under det riskerar företaget att inte klara oförutsedda kostnader eller investeringar.</p>
<h3>Ska jag ta betalt för restid?</h3>
<p>Restid är en kostnad oavsett om du debiterar den separat eller inte. Antingen fakturerar du restiden explicit, eller så måste den räknas in i timpriset via en lägre debiteringsgrad. Det viktiga är att den inte &quot;försvinner&quot;.</p>

<h2>Kom igång</h2>
<p>Sätt timpriset utifrån dina egna kostnader – inte grannens. <a href="/sv/verktyg/timpris-kalkylator">Räkna ut ditt timpris gratis</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och se hur tidrapporteringen ger dig den debiteringsgrad du behöver för att prissätta rätt.</p>

<p>Relaterade verktyg: <a href="/sv/verktyg/timpris-kalkylator">Timpris-kalkylator</a> · <a href="/sv/verktyg/paslag-marginal-kalkylator">Påslag &amp; marginal</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag</a> · <a href="/sv/verktyg/tidrapport-mall">Tidrapport-mall</a></p>
`.trim();

const TIMPRIS: BlogPost = {
  _id: 'code-timpris',
  title: 'Vad ska du ta betalt per timme? Räkna ut ditt timpris 2026',
  slug: 'timpris-hantverkare',
  locale: 'sv',
  excerpt:
    'Marknadspriser 2026 och hur du räknar fram ditt eget timpris utifrån arbetsgivarkostnad, omkostnader, debiteringsgrad och vinst – med ett räkneexempel och gratis kalkylator.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/features/2uppgift.webp',
  contentHtml: TIMPRIS_HTML,
  seoTitle: 'Timpris hantverkare 2026 – så räknar du ut vad du ska ta betalt | ByggExp',
  seoDescription:
    'Vad ska du ta betalt i timmen? Marknadspriser 2026 och hur du räknar fram ditt timpris från kostnader, debiteringsgrad och vinst. Gratis timpris-kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T09:00:00.000Z',
  createdAt: '2026-08-17T09:00:00.000Z',
  updatedAt: '2026-08-17T09:00:00.000Z',
};

// Keyed by locale — Swedish-market articles only exist on sv.
const CODE_ARTICLES: Record<BlogLocale, BlogPost[]> = {
  sv: [
    TIMPRIS,
    BYGGDAGBOK,
    EGENKONTROLL,
    ATA,
    PERSONALLIGGARE,
    ROT,
    ID06,
    BEMANNING,
    AB04,
    AMP,
    ATTESTERING,
    FRANVARO,
    HETA_ARBETEN,
    SLUTBESIKTNING,
  ],
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
