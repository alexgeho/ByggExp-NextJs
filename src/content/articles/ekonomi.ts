import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

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

const TIMPRIS_HTML = `
<p>&quot;Vad ska jag ta betalt i timmen?&quot; är en av de vanligaste – och dyraste – frågorna en hantverkare kan svara fel på. Sätter du priset för lågt jobbar du gratis åt kunden; sätter du det för högt utan att kunna motivera det tappar du jobb. Här går vi igenom marknadsläget 2026, hur du räknar fram <em>ditt</em> timpris utifrån dina egna kostnader, och varför debiteringsgraden ofta är det som avgör om det går ihop.</p>
<figure class="article-diagram"><img src="/landing/diagrams/timpris.webp" alt="Diagram: timpris byggs upp av lön, sociala avgifter och omkostnader samt påslag" width="720" height="380" loading="lazy"><figcaption>Timpriset byggs upp: lön + sociala avgifter och omkostnader + påslag. Debiteringsgraden avgör om det går ihop.</figcaption></figure>

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
  seoTitle: 'Timpris hantverkare 2026 – räkna rätt pris | ByggExp',
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

const OFFERT_HTML = `
<p>Offerten är det första kunden ser av ditt hantverk – och det dokument som avgör vem som får jobbet och vad som gäller om något blir dyrare. En tydlig offert vinner fler affärer och skyddar dig när diskussionen kommer. Här går vi igenom vad en offert måste innehålla, skillnaden mellan fast pris och löpande räkning, hur du hanterar ändringar (ÄTA) – och hur du gör en proffsig offert på minuter.</p>
<figure class="article-diagram"><img src="/landing/diagrams/offert.webp" alt="Diagram: vad en offert ska innehålla och fast pris vs löpande räkning" width="720" height="380" loading="lazy"><figcaption>En komplett offert: parter, omfattning, pris (fast eller löpande), ÄTA, giltighetstid och betalningsvillkor.</figcaption></figure>

<p><a href="/sv/verktyg/offert-mall">Skapa en gratis offert (PDF) direkt i vår offertmall →</a></p>

<h2>Vad en offert ska innehålla</h2>
<p>En offert är i praktiken ett anbud – accepterar kunden den blir den bindande. Ta därför med allt som behövs för att undvika oklarheter:</p>
<ul>
<li><strong>Ditt företag</strong> – namn, org.nr, kontakt och F-skatt</li>
<li><strong>Kund</strong> – namn och adress där arbetet ska utföras</li>
<li><strong>Vad som ingår</strong> – specificerade rader för arbete och material</li>
<li><strong>Pris</strong> – belopp exkl. och inkl. moms, samt arbetskostnad separat (viktigt för ROT)</li>
<li><strong>Pristyp</strong> – fast pris eller löpande räkning (à-pris)</li>
<li><strong>Vad som INTE ingår</strong> – lika viktigt som det som ingår</li>
<li><strong>Tidplan</strong> – ungefärlig start och tid för arbetet</li>
<li><strong>Betalningsvillkor</strong> – delbetalningar, förskott, betaltid</li>
<li><strong>Giltighetstid</strong> – hur länge offerten gäller</li>
<li><strong>Villkor</strong> – vilket standardavtal som gäller (t.ex. Hantverkarformuläret 17 för konsument)</li>
</ul>

<h2>Fast pris eller löpande räkning?</h2>
<p>De två vanligaste prismodellerna har olika risk:</p>
<ul>
<li><strong>Fast pris</strong> ger kunden trygghet men lägger risken på dig – blir jobbet krångligare än väntat får du stå för det. Kräver att du kan bedöma omfattningen väl, och att offerten tydligt anger vad som ingår.</li>
<li><strong>Löpande räkning</strong> (à-pris per timme + material) flyttar risken till kunden och passar när omfattningen är svår att förutse. Ange då timpris, ungefärlig tidsåtgång och hur material debiteras.</li>
</ul>
<p>Osäker på ditt timpris? Läs <a href="/sv/blog/timpris-hantverkare">guiden om vad du ska ta betalt per timme</a> och räkna i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>.</p>

<h2>ÄTA – skydda dig mot ändringar</h2>
<p>Nästan alla projekt ändras under vägen. Ändrings- och tilläggsarbeten (ÄTA) som beställs muntligt men aldrig dokumenteras är en av de vanligaste orsakerna till tvist. Skriv i offerten att ändringar hanteras som skriftliga ÄTA, och bekräfta varje ÄTA innan du utför den. Läs mer i <a href="/sv/blog/ata-arbeten">guiden om ÄTA-arbeten</a> och använd en <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>.</p>

<h2>ROT på offerten</h2>
<p>Ska privatkunden få ROT-avdrag måste <strong>arbetskostnaden vara tydligt specificerad</strong> – avdraget gäller bara arbete, inte material, resor eller maskiner. Visa gärna både pris före och efter ROT så att kunden ser vad hen faktiskt betalar. ROT är 30 % av arbetskostnaden 2026 (max 50 000 kr/person/år). Räkna i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a>.</p>

<h2>Så skriver du en offert som vinner</h2>
<ul>
<li><strong>Var snabb.</strong> Den som svarar först har ett övertag – många kunder tar den offert som kommer först och känns seriös.</li>
<li><strong>Var konkret.</strong> Specificera arbete och material på egna rader i stället för en klumpsumma. Det bygger förtroende och gör ROT rätt.</li>
<li><strong>Sätt en giltighetstid.</strong> Priser på material rör sig – bind dig inte för länge.</li>
<li><strong>Gör den snygg.</strong> En ren, tydlig PDF med ditt företagsnamn signalerar proffs.</li>
</ul>

<h2>Skapa offert gratis</h2>
<p>Med vår <a href="/sv/verktyg/offert-mall">offertmall</a> fyller du i rader, moms och ROT och laddar ner en färdig offert som PDF – direkt i webbläsaren, utan konto. Har du redan räknat material i någon av våra kalkylatorer kan du föra över raderna till offerten med ett klick.</p>

<h2>Från offert till faktura i ByggExp</h2>
<p>I ByggExp håller du ihop hela kedjan: offert, ÄTA, tidrapportering och faktura i samma system, kopplat till projektet.</p>
<ol>
<li>Skapa offerten med specificerat arbete och material, ROT uträknat automatiskt.</li>
<li>Bekräftade ändringar läggs till som ÄTA – inget faller mellan stolarna.</li>
<li>Nedlagd tid och material följer med från projektet till fakturan.</li>
<li>Fakturera med rätt ROT och moms utan att räkna om för hand.</li>
</ol>
<p>Vill du testa på papper först? <a href="/sv/verktyg/offert-mall">Skapa en gratis offert</a> eller <a href="/sv/verktyg/faktura-mall">faktura</a> som PDF.</p>

<h2>Vanliga frågor</h2>
<h3>Är en offert bindande?</h3>
<p>Ja. En offert är ett anbud, och när kunden accepterar den inom giltighetstiden uppstår ett bindande avtal enligt avtalslagen. Därför är det viktigt att offerten tydligt anger vad som ingår, priset och villkoren.</p>
<h3>Vad är skillnaden mellan offert och kostnadsförslag?</h3>
<p>En offert med fast pris är bindande. Ett kostnadsförslag (ungefärligt pris) är en uppskattning som får överskridas – men enligt konsumenttjänstlagen normalt med högst 15 % om inget annat avtalats. Var tydlig med vilket du lämnar.</p>
<h3>Måste arbetskostnaden specificeras för ROT?</h3>
<p>Ja. ROT-avdraget gäller bara arbetskostnaden, så den måste vara tydligt angiven och skild från material. Annars kan kunden inte få avdraget och du riskerar en jobbig efterhandsdiskussion.</p>
<h3>Hur länge ska en offert gälla?</h3>
<p>Det bestämmer du, men 14–30 dagar är vanligt. Sätt alltid en giltighetstid så att du inte är bunden till ett pris när materialkostnaderna hunnit ändras.</p>

<h2>Kom igång</h2>
<p>En tydlig offert vinner jobbet och skyddar dig. <a href="/sv/verktyg/offert-mall">Skapa en gratis offert (PDF)</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och håll ihop offert, ÄTA och faktura i ett flöde.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a> · <a href="/sv/blog/timpris-hantverkare">Timpris</a> · <a href="/sv/verktyg/offert-mall">Offertmall</a> · <a href="/sv/verktyg/faktura-mall">Fakturamall</a></p>
`.trim();

const OFFERT: BlogPost = {
  _id: 'code-offert',
  title: 'Så skriver du en offert som hantverkare – krav, tips och gratis mall',
  slug: 'skriva-offert',
  locale: 'sv',
  excerpt:
    'Vad en offert måste innehålla, fast pris vs löpande räkning, ÄTA och ROT – plus en gratis offertmall som ger dig en färdig PDF.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/verktyg/offert-preview.webp',
  contentHtml: OFFERT_HTML,
  seoTitle: 'Skriva offert som hantverkare – krav, mall & tips 2026 | ByggExp',
  seoDescription:
    'Vad ska en offert innehålla? Fast pris vs löpande räkning, ÄTA, ROT och betalningsvillkor – plus en gratis offertmall (PDF). Guide för hantverkare.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T10:00:00.000Z',
  createdAt: '2026-08-17T10:00:00.000Z',
  updatedAt: '2026-08-17T10:00:00.000Z',
};

const MOMS_HTML = `
<p>Moms är enkelt – ända tills du jobbar mellan byggföretag. Då gäller <strong>omvänd byggmoms</strong>, och plötsligt ska du fakturera utan moms och märka fakturan på rätt sätt. Fakturerar du fel riskerar du att stå för moms du aldrig fått betalt för. Här går vi igenom momssatsen för byggtjänster, hur omvänd skattskyldighet fungerar, moms på ROT-fakturor och vad du behöver ha koll på i redovisningen.</p>

<p><a href="/sv/verktyg/moms-kalkylator">Räkna ut moms fram och baklänges i vår gratis moms-kalkylator →</a></p>

<h2>Momssats på byggtjänster</h2>
<p>På de flesta byggtjänster är momsen <strong>25 %</strong>. Några varor och tjänster har lägre sats (12 % eller 6 %), men för vanligt snickeri, måleri, el och VVS gäller 25 %. Ska du lägga på eller räkna baklänges från ett pris inklusive moms hjälper <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a> – vid 25 % multiplicerar du med 1,25 för att lägga på, och med 0,8 för att räkna bort.</p>

<h2>Omvänd byggmoms – det här måste du kunna</h2>
<p>Omvänd skattskyldighet (omvänd byggmoms) innebär att det är <strong>köparen, inte säljaren, som redovisar och betalar momsen</strong>. Det är alltså inte momsfri försäljning – ansvaret för momsredovisningen flyttas bara till köparen. Reglerna finns för att motverka momsfusk i byggkedjan.</p>
<p><strong>När gäller det?</strong> Du ska använda omvänd byggmoms när du säljer <strong>byggtjänster i Sverige till ett annat företag som självt säljer byggtjänster</strong> (mer än tillfälligt). Är villkoren uppfyllda är det <strong>inte valfritt</strong> – du måste fakturera med omvänd moms.</p>
<p><strong>När gäller det INTE?</strong> Säljer du till en privatperson eller till ett företag som inte är verksamt inom byggsektorn fakturerar du som vanligt, med 25 % moms.</p>

<h2>Så fakturerar du med omvänd byggmoms</h2>
<p>När omvänd skattskyldighet gäller ska du:</p>
<ul>
<li><strong>Inte lägga på någon moms</strong> på fakturan.</li>
<li><strong>Märka fakturan</strong> tydligt med texten &quot;Omvänd skattskyldighet för byggtjänster gäller&quot;.</li>
<li><strong>Ange köparens momsregistreringsnummer.</strong></li>
</ul>
<p>Det räcker alltså inte att bara låta bli att lägga på moms – märkningen måste finnas med. Köparen redovisar sedan både utgående och ingående moms i sin momsdeklaration.</p>

<h2>Moms på ROT-fakturor</h2>
<p>Vid arbete åt privatperson med ROT gäller vanlig moms på 25 %. ROT-avdraget (30 % av arbetskostnaden 2026, max 50 000 kr/person och år) räknas på arbetskostnaden <strong>inklusive moms</strong>, och dras av direkt på fakturan. Du fakturerar alltså full arbetskostnad med moms, drar av ROT och begär tillbaka det från Skatteverket. Se hur det slår i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag kalkylatorn</a>.</p>

<h2>Redovisning och underlag</h2>
<p>Moms redovisas månadsvis, kvartalsvis eller årsvis beroende på företagets omsättning och val. Enligt bokföringslagen ska du spara allt underlag – fakturor, avtal, tidrapporter och ROT-underlag – i <strong>sju år</strong>. Ordning i underlaget gör både momsredovisning och en eventuell kontroll enkel.</p>

<h2>Så håller ByggExp koll på moms och ROT</h2>
<p>I ByggExp skapar du offert och faktura där moms och ROT räknas ut automatiskt, och du markerar enkelt när omvänd byggmoms gäller:</p>
<ol>
<li>Lägg upp arbete och material på specificerade rader.</li>
<li>Välj momssats – eller omvänd skattskyldighet för bygguppdrag mellan företag.</li>
<li>Markera ROT på arbetsraderna så räknas kundens del ut automatiskt.</li>
<li>Fakturan blir rätt märkt och underlaget stämmer mot Skatteverket.</li>
</ol>
<p>Vill du börja enkelt? <a href="/sv/verktyg/faktura-mall">Skapa en gratis faktura</a> eller <a href="/sv/verktyg/offert-mall">offert</a> som PDF.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är omvänd byggmoms?</h3>
<p>Det är när köparen i stället för säljaren redovisar och betalar momsen. Det gäller när du säljer byggtjänster till ett annat företag som självt säljer byggtjänster. Säljaren fakturerar då utan moms men måste märka fakturan med &quot;Omvänd skattskyldighet för byggtjänster gäller&quot; och ange köparens momsnummer.</p>
<h3>Är omvänd skattskyldighet valfri?</h3>
<p>Nej. Om villkoren är uppfyllda – du säljer byggtjänster till ett byggföretag i Sverige – måste omvänd skattskyldighet användas. Det är inte något du kan välja bort.</p>
<h3>Vilken momssats gäller för hantverkartjänster?</h3>
<p>25 % för de flesta byggtjänster. Vissa varor och tjänster har 12 % eller 6 %, men det är ovanligt inom vanligt bygg- och hantverksarbete.</p>
<h3>Hur länge ska jag spara momsunderlaget?</h3>
<p>Sju år enligt bokföringslagen. Det gäller fakturor, avtal, tidrapporter och ROT-underlag.</p>

<h2>Kom igång</h2>
<p>Fakturera med rätt moms – varje gång. <a href="/sv/verktyg/moms-kalkylator">Räkna moms gratis</a>, eller <a href="/sv/contact">boka en demo av ByggExp</a> och låt systemet hålla koll på moms, omvänd byggmoms och ROT åt dig.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Skriva offert</a> · <a href="/sv/verktyg/moms-kalkylator">Moms-kalkylator</a> · <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag</a> · <a href="/sv/verktyg/faktura-mall">Fakturamall</a></p>
`.trim();

const MOMS: BlogPost = {
  _id: 'code-moms-hantverkare',
  title: 'Moms för hantverkare – omvänd byggmoms, ROT och 25 %',
  slug: 'moms-hantverkare',
  locale: 'sv',
  excerpt:
    'Momssatsen på byggtjänster, hur omvänd byggmoms (omvänd skattskyldighet) fungerar och ska märkas, moms på ROT-fakturor och hur länge du sparar underlaget.',
  tag: 'Ekonomi',
  coverImageUrl: '/landing/verktyg/moms-preview.webp',
  contentHtml: MOMS_HTML,
  seoTitle: 'Moms för hantverkare 2026 – omvänd byggmoms & ROT | ByggExp',
  seoDescription:
    'Moms på byggtjänster: 25 %, omvänd byggmoms (när den gäller och hur fakturan märks), moms på ROT-fakturor och redovisning. Guide för hantverkare + gratis kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-17T11:00:00.000Z',
  createdAt: '2026-08-17T11:00:00.000Z',
  updatedAt: '2026-08-17T11:00:00.000Z',
};

const FAKTURA_HTML = `
<p>En slarvig faktura kostar mer än du tror. Saknas en obligatorisk uppgift kan Skatteverket underkänna din bokföring, och otydliga betalningsvillkor gör att pengarna dröjer långt efter att jobbet är klart. Som hantverkare eller byggföretag är fakturan både ditt betalningsanspråk och en bokföringsverifikation – den måste hålla på båda planen. Här går vi igenom exakt vad som krävs enligt lag 2026, och du får en checklista att bocka av före varje faktura.</p>

<p>Vill du komma igång direkt kan du skapa en korrekt faktura med rätt uppgifter från start i vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>.</p>

<h2>Vad en faktura MÅSTE innehålla enligt lag</h2>

<p>Enligt mervärdesskattelagen ska en fullständig faktura (belopp över 4 000 kr inklusive moms) innehålla samtliga följande uppgifter:</p>

<ul>
<li><strong>Fakturanummer</strong> – unikt och hämtat ur en obruten nummerserie</li>
<li><strong>Fakturadatum</strong></li>
<li><strong>Säljarens namn och adress</strong> samt <strong>momsregistreringsnummer</strong></li>
<li><strong>Köparens namn och adress</strong></li>
<li><strong>Leveransdatum</strong> – när tjänsten utfördes eller varan levererades</li>
<li><strong>Specificerad beskrivning</strong> av tjänsten eller varan med mängd och omfattning</li>
<li><strong>Pris per rad exklusive moms</strong></li>
<li><strong>Momssats och momsbelopp i kronor</strong>, samt beskattningsunderlaget per skattesats</li>
</ul>

<p>Var noga med beskrivningen. Att bara skriva <em>"byggtjänster"</em> räcker inte – fakturan ska vara detaljerad nog att fungera som bokföringsverifikation. Ange vad som gjorts, var och i vilken omfattning, till exempel "Rivning och montering av kök, arbete 24 tim" plus materialrader. En luddig faktura är den vanligaste orsaken till att både kund och revisor ställer frågor i efterhand.</p>

<h3>Fullständig vs förenklad faktura</h3>

<p>Ligger fakturabeloppet på högst 4 000 kr inklusive moms får du använda en <strong>förenklad faktura</strong>. Den behöver bara innehålla fakturadatum, säljarens namn och momsnummer, vad som sålts samt momsbeloppet (eller uppgifter för att räkna ut det). Över den gränsen gäller alltid den fullständiga listan ovan.</p>

<p>Är ditt företag godkänt för F-skatt bör du ange <strong>"Godkänd för F-skatt"</strong> på fakturan. Uppgiften har rättslig verkan: köparen kan då lita på den och behöver inte göra skatteavdrag eller betala arbetsgivaravgifter för dig. Privatkunder och byggföretag förväntar sig att se den.</p>

<h2>Omvänd byggmoms – när du INTE ska lägga på moms</h2>

<p>Säljer du en byggtjänst i Sverige till ett annat företag som självt säljer eller vidareförsäljer byggtjänster gäller <strong>omvänd skattskyldighet</strong>. Då fakturerar du <strong>0 kr moms</strong> och köparen redovisar momsen i stället. Fakturan måste märkas tydligt, till exempel <em>"Omvänd skattskyldighet för byggtjänster gäller"</em>, och den <strong>måste innehålla köparens momsregistreringsnummer</strong>.</p>

<p>Regeln gäller bara mellan byggföretag. Säljer du till en privatperson eller till ett företag som inte är verksamt inom byggsektorn lägger du på vanlig moms (25 % på byggtjänster). Är du osäker på beräkningen kan du dubbelkolla i vår <a href="/sv/verktyg/moms-kalkylator">moms-kalkylator</a> innan du skickar fakturan.</p>

<h2>ROT-faktura 2026 – fakturamodellen steg för steg</h2>

<p>Fakturerar du en privatperson kan kunden ha rätt till ROT-avdrag. För 2026 är avdraget <strong>30 % av arbetskostnaden</strong>, med ett tak på <strong>50 000 kr per person och år</strong>. Notera att nivån var tillfälligt höjd till 50 % under delar av 2025 men sänktes tillbaka till 30 % från 1 januari 2026 – räkna alltid på 30 %. Avdraget gäller <strong>enbart arbete</strong>, aldrig material, maskiner eller framkörning, och du som utförare måste vara godkänd för F-skatt.</p>

<p>Så här fungerar fakturamodellen:</p>

<ol>
<li>Dela upp fakturan så att <strong>arbetskostnaden tydligt skiljs</strong> från material och övriga kostnader.</li>
<li>Kunden betalar arbetskostnaden <strong>minus ROT-avdraget (30 %)</strong> plus fullt pris för material.</li>
<li>Du begär sedan ut det återstående ROT-beloppet <strong>från Skatteverket</strong>.</li>
</ol>

<p>Exempel: arbetskostnad 20 000 kr, material 8 000 kr. ROT-avdraget blir 30 % av 20 000 = 6 000 kr. Kunden betalar 14 000 kr för arbetet plus 8 000 kr för material, alltså 22 000 kr, och du får de resterande 6 000 kr utbetalda från Skatteverket. Räkna snabbt på kundens avdrag i vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdrag-kalkylator</a>.</p>

<h2>Betalningsvillkor och dröjsmålsränta</h2>

<p>Om inget annat avtalas är betalningstiden <strong>30 dagar</strong> enligt räntelagen. Mellan företag är villkoren fritt förhandlingsbara, men en betalningstid som överstiger <strong>60 dagar</strong> gäller bara om borgenären uttryckligen godtagit den – längre tider kan annars anses oskäliga. Skriv därför alltid ut förfallodatumet på fakturan.</p>

<p>Betalar kunden för sent har du rätt till <strong>dröjsmålsränta</strong>. Den är Riksbankens referensränta plus 8 procentenheter. För perioden 1 januari–30 juni 2026 är referensräntan 2 %, vilket ger en lagstadgad dröjsmålsränta på <strong>10 %</strong>. Rätten till dröjsmålsränta mellan företag följer direkt av räntelagen – du behöver inget särskilt avtal – och löper i regel från 30 dagar efter faktura eller påminnelse, om ni inte avtalat en tidigare förfallodag.</p>

<h2>När kunden inte betalar – påminnelse och inkasso</h2>

<p>Uteblir betalningen finns en tydlig trappa. Utöver dröjsmålsräntan får du ta ut lagstadgade avgifter:</p>

<ul>
<li><strong>Påminnelseavgift:</strong> 60 kr</li>
<li><strong>Inkassoavgift:</strong> 180 kr</li>
<li><strong>Förseningsersättning:</strong> 450 kr vid B2B- och offentliga fordringar – får tas ut direkt när fakturan förfaller, utan föregående påminnelse (och täcker in 60+180 kr om inte de faktiska indrivningskostnaderna är högre)</li>
</ul>

<p>Ordningen är: skicka en <strong>betalningspåminnelse</strong>, därefter ett <strong>inkassokrav</strong>, och om det inte hjälper ansöker du om <strong>betalningsföreläggande hos Kronofogden</strong>. Att fakturan från början uppfyller alla lagkrav är avgörande – en formellt korrekt faktura är mycket svårare att bestrida.</p>

<h2>Spara fakturan i 7 år</h2>

<p>Räkenskapsinformation – fakturor, kvitton, avtal med mera – ska enligt bokföringslagen arkiveras i <strong>7 år efter utgången av det kalenderår då räkenskapsåret avslutades</strong>, i ordnat och betryggande skick i Sverige. Sedan 1 juli 2024 får pappersunderlag <strong>slängas efter korrekt överföring till digital form</strong>; den tidigare regeln om att spara originalet i 3–4 år är borttagen. Digitalt fakturaflöde är alltså både tillåtet och praktiskt.</p>

<h2>Så gör du i ByggExp</h2>

<p>I ByggExp bygger du fakturan på jobbet i stället för att börja från ett tomt blad. Registrerad tid och material följer med in på fakturan, arbetskostnad och material hamnar på egna rader så att ROT-uppdelningen blir rätt, och fakturanumren löper i obruten serie automatiskt. Du kan märka fakturan för omvänd byggmoms när det behövs och lägga in förfallodatum och villkor från start. Underlagen sparas digitalt, vilket täcker arkiveringskravet. ByggExp lämnar däremot inte in din momsdeklaration eller ROT-ansökan åt dig – det gör du eller din redovisningskonsult, men underlaget blir korrekt och lätt att exportera.</p>

<h2>Vanliga frågor</h2>

<h3>Ska det framgå att jag har F-skatt?</h3>
<p>Ja, ange "Godkänd för F-skatt" på fakturan om företaget är godkänt. Uppgiften har rättslig verkan – köparen kan lita på den och behöver då inte göra skatteavdrag eller betala sociala avgifter för det arbete du utför.</p>

<h3>När ska jag använda omvänd byggmoms?</h3>
<p>När du säljer en byggtjänst i Sverige till ett annat företag som självt säljer eller vidareförsäljer byggtjänster. Då fakturerar du 0 kr moms, märker fakturan "Omvänd skattskyldighet för byggtjänster gäller" och anger köparens momsnummer. Till privatpersoner och företag utanför byggsektorn lägger du på vanlig moms.</p>

<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>ROT-avdraget är 30 % av arbetskostnaden, med ett tak på 50 000 kr per person och år. Det gäller bara arbete – aldrig material, maskiner eller framkörning – och du måste vara godkänd för F-skatt. Nivån sänktes från de tillfälliga 50 % under 2025 till 30 % från 1 januari 2026.</p>

<h3>Vad blir dröjsmålsräntan om kunden betalar sent?</h3>
<p>Dröjsmålsräntan är Riksbankens referensränta plus 8 procentenheter. Med referensräntan 2 % för första halvåret 2026 blir den 10 %. Rätten gäller automatiskt mellan företag enligt räntelagen och löper normalt från 30 dagar efter faktura eller påminnelse.</p>

<h2>Kom igång</h2>

<p>Skapa din nästa faktura med rätt uppgifter från start i vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du fakturerar hela jobbet – tid, material och ROT – utan att missa en lagkrävd uppgift.</p>

<p>Checklista före varje faktura: fakturanummer i obruten serie, faktura- och leveransdatum, säljarens momsnr, köparens uppgifter, specificerad tjänst, pris ex moms, rätt momssats (eller omvänd byggmoms-märkning), ROT-uppdelning vid privatkund, "Godkänd för F-skatt", samt förfallodatum och villkor.</p>

<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a>, <a href="/sv/blog/skriva-offert">Skriva offert som hantverkare</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`.trim();

const FAKTURA: BlogPost = {
  _id: "code-fakturera-som-hantverkare",
  title: "Fakturera som hantverkare – så gör du rätt enligt lag 2026",
  slug: "fakturera-som-hantverkare",
  locale: "sv",
  excerpt: "En komplett guide till hur du som hantverkare fakturerar rätt enligt lag 2026 – fakturakrav, ROT, omvänd byggmoms, betalningsvillkor och arkivering.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: FAKTURA_HTML,
  seoTitle: "Fakturera som hantverkare 2026 | ByggExp",
  seoDescription: "Vad en faktura måste innehålla enligt lag, ROT-faktura, omvänd byggmoms, betalningsvillkor och dröjsmålsränta. Komplett checklista för hantverkare 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-17T13:00:00.000Z",
  createdAt: "2026-08-17T13:00:00.000Z",
  updatedAt: "2026-08-17T13:00:00.000Z",
};

const PASLAG_HTML = `
<p>Att lägga påslag på materialet du köper in är inte fusk eller girighet — det är en av de viktigaste marginalerna du har som hantverkare, och det är fullt lagligt. Ändå tvekar många att ta betalt för det, delvis på grund av en seglivad myt om en påhittad &quot;15 %-regel&quot;. Efter den här artikeln vet du vilka påslagsnivåer som håller i praktiken, hur du räknar momsen rätt, vad ROT betyder för materialet och hur du dokumenterar påslaget så att en kund inte kan hålla inne pengarna i efterhand.</p>

<p>Vill du snabbt räkna fram rätt utpris och se skillnaden mellan påslag och marginal? Testa <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator &rarr;</a> medan du läser.</p>

<h2>Är materialpåslag ens lagligt?</h2>
<p>Ja. Den som tillhandahåller materialet — alltså du som köper in det, bär det hem, garanterar funktionen och hanterar eventuella reklamationer — har rätt att ta ett procentpåslag på inköpspriset. Påslaget ska täcka hantering, administration, garanti- och funktionsansvar, spill, kapitalbindning och den prisrisk du tar när du ligger ute med pengarna.</p>
<p>Det finns dock en nyans du måste ha koll på. Vid <strong>konsumentjobb</strong> är prissättningen inte helt fri: priset, inklusive påslaget, ska vara <em>skäligt</em> enligt konsumenttjänstlagen 36 §. Vid <strong>entreprenad mellan företag</strong> styr istället avtalet och eventuella standardvillkor som AB 04. Skälighetskravet betyder inte att du ska hålla igen — det betyder att du ska kunna motivera din nivå. Och det är enklare än många tror.</p>

<h2>Myten om &quot;15 %-regeln&quot;</h2>
<p>Här reder vi ut den vanligaste missuppfattningen i hela branschen. Många tror att materialpåslaget &quot;får vara max 15 %&quot; enligt konsumenttjänstlagen. Det är fel. 15 %-regeln i lagen handlar inte om påslag alls — den handlar om <strong>ungefärliga prisuppgifter</strong>.</p>
<p>Regeln säger att om du lämnat en ungefärlig prisuppgift till en konsument, får slutpriset inte överstiga det uppgivna priset med mer än 15 % (om ni inte avtalat ett annat pristak). Ett exempel:</p>
<ul>
<li>Du lämnar ungefärligt pris: <strong>4 500 kr</strong></li>
<li>Tak enligt 15 %-regeln: 4 500 &times; 1,15 = <strong>5 175 kr</strong></li>
</ul>
<p>Det här är alltså ett tak för hur mycket din <em>slutnota</em> får glida från en ungefärlig uppskattning — det säger ingenting om hur stort ditt materialpåslag får vara. Blanda inte ihop pristak med marginal. De är två helt olika saker.</p>

<h2>Vilka nivåer håller?</h2>
<p>Branschpraxis för materialpåslag ligger typiskt på <strong>5–20 % på inköpspriset</strong>. El- och VVS-installatörer ligger ofta högre, runt 20–30 %, eftersom deras material bär mer ansvar och risk. Så här kan du tänka kring nivåerna:</p>
<ul>
<li><strong>Självkostnad + 10–15 %:</strong> tryggt, vanligt och lätt att försvara i vilken diskussion som helst.</li>
<li><strong>20–25 %:</strong> vanligt förekommande och sällan ifrågasatt, särskilt för installatörsjobb.</li>
<li><strong>30–40 %:</strong> förekommer, men kräver en tydlig förklaring och helst ett skriftligt avtal med kunden.</li>
</ul>
<p>Koppla nivån till verkligheten: större risk, längre garanti och mer hantering motiverar högre påslag. Ett dyrt specialbeställt material du får ligga ute med i veckor och ansvara för i flera år tål ett annat påslag än en påse skruv. Linjen som installatörsbranschen själv driver är transparens — våga sätta din nivå, men var beredd att förklara den.</p>

<h2>Räkna rätt — moms och marginal</h2>
<p>Här tappar många pengar av ren slarv. Räkna alltid påslaget på <strong>nettopriset</strong>, alltså inköpspriset exklusive moms, och lägg på moms (25 %) allra sist. Så här ser rätt väg ut för ett material som kostar 1 000 kr exkl. moms med 15 % påslag:</p>
<ul>
<li>Nettopris: 1 000 kr</li>
<li>Påslag 15 %: +150 kr &rarr; 1 150 kr</li>
<li>Moms 25 %: +287,50 kr &rarr; <strong>1 437,50 kr att fakturera</strong></li>
</ul>
<p>Det vanligaste felet är att lägga moms på inköpet, sedan påslag, sedan moms igen — det blir dubbel moms och en faktura som inte håller. Rent matematiskt spelar ordningen ingen roll (1 000 &times; 1,15 &times; 1,25 blir samma som 1 000 &times; 1,25 &times; 1,15), men fakturan måste tydligt visa nettopris, påslag och moms var för sig.</p>
<p>En annan sak att hålla isär: <strong>påslag</strong> räknas på inköpspriset, <strong>marginal</strong> räknas på utpriset. 20 % påslag är inte samma sak som 20 % marginal. Räknar du fel här luras du själv på lönsamhet. Kalkylatorn ovan visar båda samtidigt så du ser vad du faktiskt tjänar.</p>

<h2>ROT 2026 och materialet — vad du MÅSTE veta</h2>
<p>ROT-avdraget är 2026 tillbaka på <strong>30 % av arbetskostnaden</strong>. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och är borta. Taket är 50 000 kr per person och år, och ROT och RUT tillsammans max 75 000 kr per år. Avgörande är betalningsdatumet — betalas fakturan 2026 gäller 30 %, oavsett när jobbet utfördes.</p>
<p>Det viktigaste för din prissättning: <strong>ROT gäller aldrig material</strong>, bara arbetskostnad. Ditt materialpåslag ger alltså aldrig något ROT-avdrag för kunden. På fakturan ska arbetskostnad och materialkostnad redovisas separat.</p>
<p>Frestelsen att &quot;flytta&quot; arbetskostnad in i materialpriset — eller tvärtom — för att pynta ROT-underlaget är otillåten och felaktig. Håll de två posterna rena. Ditt materialpåslag lönar sig helt på din sida av kalkylen ändå; det behöver inte gömmas.</p>

<h2>Skriftligt avtal = ditt viktigaste skydd</h2>
<p>Om en konsument bestrider ditt påslag som oskäligt får hen betala den skäliga delen och hålla inne resten tills saken är utredd. Skäligheten bedöms då mot vad materialet och tjänsten normalt kostar — jämförelseofferter blir bevis. Det enskilt viktigaste skyddet mot att hamna i den situationen är att <strong>avtala påslagets storlek skriftligt innan arbetet startar</strong>. Utan avtal hamnar du i en skälighetsdiskussion; med avtal har ni redan kommit överens.</p>
<p>Se till att din offert innehåller:</p>
<ul>
<li>Påslagets storlek i procent, tydligt angivet.</li>
<li>Om priset är <strong>fast</strong> eller en <strong>ungefärlig uppgift</strong> (kom ihåg 15 %-taket på det senare).</li>
<li>En prisjusteringsklausul om materialpriser stiger under jobbet — vid fast pris bär du annars risken själv och får inte ta mer betalt utan ett sådant förbehåll.</li>
<li>Separata rader för arbete och material inför ROT.</li>
</ul>
<p>En genomarbetad offert löser det mesta i förväg. Läs mer i vår guide om att <a href="/sv/blog/skriva-offert">skriva offert</a>.</p>

<h2>Entreprenad och B2B — kort om självkostnadsprincipen</h2>
<p>Jobbar du mot andra företag på löpande räkning enligt självkostnadsprincipen (AB 04 / ABT 06 kap 6 § 9) fungerar det annorlunda. Då ersätts dina faktiska kostnader — material, arbete, underentreprenörsfakturor — plus ett <strong>entreprenörarvode</strong>, ett procentpåslag för central administration och vinst. Storleken är inte fastslagen i AB 04 utan ska avtalas mellan parterna, och både huvud- och underentreprenör får lägga sitt eget påslag. Principen är densamma som i konsumentledet: påslaget är legitimt, men skriv ner nivån.</p>

<h2>Vanligaste misstagen</h2>
<ul>
<li>Att tro att påslaget &quot;måste vara 15 %&quot; — det är en myt.</li>
<li>Att räkna påslag på bruttopris och råka dubbelmomsa fakturan.</li>
<li>Att förväxla påslag med marginal och underprissätta sig själv.</li>
<li>Att lämna fast pris utan prisjusteringsklausul när materialpriserna rör sig.</li>
<li>Att inte skriva ner påslaget innan start — och sedan fastna i en skälighetstvist.</li>
<li>Att blanda arbete och material på fakturan och krångla till ROT.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med separata rader för arbete och material, så att påslag, moms och ROT-underlag hamnar rätt från början. Du sätter din påslagsnivå en gång och återanvänder den, skriver in prisjusteringsklausulen som standardtext och tar med kundens godkännande skriftligt — precis det som skyddar dig om ett pris ifrågasätts senare. När jobbet är klart går offerten vidare till faktura utan att du behöver räkna om något. Verktyget sätter inte din prisstrategi åt dig, men det ser till att siffrorna du bestämt faktiskt hamnar rätt hela vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Hur stort materialpåslag får jag ta?</h3>
<p>Det finns ingen fast lagstadgad gräns. Branschpraxis ligger på 5–20 %, installatörer ofta 20–30 %. Vid konsumentjobb ska priset vara skäligt, men påslag upp mot 20–25 % är i praktiken mycket svårt att få underkänt. Högre nivåer kräver tydlig motivering och helst avtal.</p>
<h3>Betyder 15 %-regeln att påslaget måste vara max 15 %?</h3>
<p>Nej. 15 %-regeln i konsumenttjänstlagen handlar om att ett slutpris inte får överstiga en <em>ungefärlig prisuppgift</em> med mer än 15 %. Den säger ingenting om hur stort materialpåslaget får vara.</p>
<h3>Ger materialpåslaget kunden ROT-avdrag?</h3>
<p>Nej. ROT gäller bara arbetskostnaden — 30 % 2026, max 50 000 kr per person och år. Material ger aldrig ROT, oavsett påslag. Redovisa alltid arbete och material separat på fakturan.</p>
<h3>Kan kunden vägra betala mitt påslag?</h3>
<p>En konsument kan hålla inne den del av priset som bedöms oskälig, men måste betala den skäliga delen. Har ni avtalat påslagets storlek skriftligt före start står du mycket starkare — då är nivån redan överenskommen.</p>

<h2>Kom igång</h2>
<p>Sätt rätt påslag och se din faktiska marginal med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a>, och skriv in nivån direkt i <a href="/sv/verktyg/offert-mall">vår offertmall</a>. Vill du se hur hela flödet från offert till faktura fungerar i praktiken? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a> &middot; <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a></p>
`.trim();

const PASLAG: BlogPost = {
  _id: "code-paslag-pa-material",
  title: "Materialpåslag för hantverkare — så sätter du ett lagligt och lönsamt påslag (2026)",
  slug: "paslag-pa-material",
  locale: "sv",
  excerpt: "Materialpåslag är din rätt och en av dina viktigaste marginaler — här är nivåerna som håller, momsen rätt räknad och avtalet som skyddar dig.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/paslag-preview.webp",
  contentHtml: PASLAG_HTML,
  seoTitle: "Materialpåslag hantverkare 2026 | ByggExp",
  seoDescription: "Så sätter du ett lagligt och lönsamt materialpåslag som hantverkare: branschnivåer 5–20 %, momsen rätt, ROT-fällan och avtalet som skyddar dig.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/paslag-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T09:00:00.000Z",
  createdAt: "2026-08-18T09:00:00.000Z",
  updatedAt: "2026-08-18T09:00:00.000Z",
};

const EFAKTURA_HTML = `
<p>Du har säkert läst rubriker om att e-faktura blir obligatorisk och undrar om det gäller ditt lilla byggföretag redan nu. Kort svar: för de flesta hantverkare är det <strong>inte</strong> ett krav idag att skicka e-faktura till andra företag eller privatpersoner. Men reglerna är på väg att förändras, och det finns ett viktigt undantag du redan måste följa. Den här guiden reder ut vad som faktiskt gäller, vad Peppol och ViDA betyder, och hur tidslinjen 2026-2030 ser ut för dig som är hantverkare eller driver byggföretag.</p>

<p>Vill du bara ha ordning på faktureringen här och nu? Börja med vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för hantverkare -&gt;</a> så har du en korrekt faktura klar på minuter.</p>

<h2>Vad gäller idag - måste jag skicka e-faktura?</h2>
<p>Per augusti 2026 finns det <strong>ingen generell skyldighet</strong> för ett svenskt byggföretag att skicka e-faktura till andra företag (B2B) eller till privatkunder. Du kan alltså fortsätta fakturera precis som vanligt mot din vanliga kundkrets - inklusive med PDF eller papper - utan att bryta mot någon lag.</p>
<p>Det enda existerande lagkravet på e-faktura riktar sig mot den offentliga sektorn. Sedan den 1 april 2019 måste alla leverantörer till stat, kommun och region skicka strukturerade e-fakturor enligt den europeiska standarden EN 16931 (lag 2018:1277 om elektroniska fakturor till följd av offentlig upphandling). Om du utför jobb åt en kommun, en region eller en statlig myndighet omfattas du alltså redan idag - oavsett hur litet ditt företag är.</p>

<h2>En PDF är inte en e-faktura</h2>
<p>Här faller många hantverkare i en fälla. En PDF som du mejlar är <em>inte</em> en e-faktura i lagens mening, även om den ser prydlig ut. En riktig e-faktura är strukturerad, maskinläsbar data - oftast XML - i ett standardiserat format som mottagarens system läser in och bokför automatiskt. En skannad bild eller ett PDF-dokument räknas inte, eftersom en människa fortfarande måste tolka det.</p>
<p>Det format som rekommenderas i Sverige heter <strong>Peppol BIS Billing 3</strong>. Tekniskt är det en anpassning (CIUS) av EN 16931-standarden. Peppol är samtidigt själva nätverket - infrastrukturen med accesspunkter - som fakturorna skickas genom mellan olika affärssystem. SFTI (SKR) rekommenderar Peppol BIS Billing 3 för att uppfylla lagkravet mot offentlig sektor.</p>

<h2>ViDA - EU-reformen som ändrar spelplanen</h2>
<p>Det som driver på utvecklingen är EU:s momspaket ViDA (VAT in the Digital Age), som formellt antogs av EU:s ministerråd den 11 mars 2025. ViDA innebär att e-faktura successivt blir standard för handel inom EU. För dig som hantverkare är två datum värda att känna till:</p>
<ul>
<li><strong>1 juli 2030:</strong> Gränsöverskridande B2B-handel mellan företag i olika EU-länder måste ske med strukturerad e-faktura enligt EN 16931, och rapporteras digitalt i nära realtid av både köpare och säljare. Kravet gäller alla momsregistrerade företag oavsett storlek - men bara vid handel över landsgränserna inom EU.</li>
<li><strong>1 januari 2035:</strong> De medlemsländer som redan har ett inhemskt realtidsrapporteringssystem måste harmonisera det med EU:s gränsöverskridande system. Den deadlinen låg ursprungligen på 2028 men har flyttats fram till 2035.</li>
</ul>
<p>Notera skillnaden: 2030-kravet handlar om <em>gränsöverskridande</em> handel. Om du bygger altaner i Skövde och aldrig fakturerar en utländsk kund berörs du inte automatiskt av 2030-datumet.</p>

<h2>Vad händer med rent svenska affärer?</h2>
<p>Frågan de flesta byggföretag ställer är: kommer jag tvingas skicka e-faktura även för helt inhemska jobb, hantverkare till hantverkare i Sverige? Det är ännu inte lag. Trycket började med en gemensam hemställan 2023 från Skatteverket, Bolagsverket och Digg till regeringen. Skatteverket är officiellt positivt till obligatorisk transaktionsbaserad rapportering mellan företag, med motiveringen att det motverkar momskarusellbedrägerier, organiserad brottslighet och penningtvätt.</p>
<p>Den 5 februari 2026 tillsatte regeringen en särskild utredare som ska analysera dels hur ViDA ska införas i svensk lag, dels <strong>om</strong> obligatorisk e-faktura och digital rapportering också ska gälla rent inhemska B2B-affärer. Utredningen ska lämna sitt betänkande senast den 30 november 2027. Ett eventuellt inhemskt krav skulle alltså komma först efter det - realistiskt sett i slutet av 2020-talet eller senare.</p>

<h2>Tidslinjen för en hantverkare - en snabböversikt</h2>
<ol>
<li><strong>Idag (2026):</strong> E-faktura krävs bara när du fakturerar offentlig sektor. Övrig fakturering är fri.</li>
<li><strong>1 juli 2030:</strong> E-faktura blir obligatorisk vid gränsöverskridande B2B-handel inom EU.</li>
<li><strong>Efter 2027 års utredning:</strong> Ett eventuellt krav på e-faktura även för rent svenska B2B-affärer - inte beslutat ännu.</li>
<li><strong>1 januari 2035:</strong> Full harmonisering av inhemska realtidssystem mot EU-systemet.</li>
</ol>
<p>Slutsats för de flesta små byggföretag: du behöver inte agera i panik, men det är klokt att lägga grunden nu så att övergången blir smärtfri när kravet kommer.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att hålla faktureringen strukturerad och korrekt oavsett vilket format kunden vill ha. Du skapar fakturor med rätt uppgifter - moms, ROT-avdrag på arbetskostnaden och, vid B2B mellan byggföretag, texten om omvänd byggmoms - och samlar all fakturahistorik på ett ställe. Eftersom svensk bokföringslag kräver att du sparar underlaget i sju år lagras dina fakturor ordnat och sökbart, vilket gör det enkelt att både följa reglerna idag och ställa om när e-fakturakrav träder i kraft. Vi lovar inte att lösa framtidens Peppol-krav åt dig i förväg, men vi ser till att din grunddata är i ordning den dagen det blir skarpt.</p>

<h2>Vanliga frågor</h2>
<h3>Måste mitt lilla byggföretag skicka e-faktura 2026?</h3>
<p>Nej, inte generellt. Det enda kravet idag är att du måste skicka strukturerad e-faktura när du fakturerar en kommun, region eller statlig myndighet. Fakturerar du bara andra företag och privatpersoner finns inget lagkrav i augusti 2026.</p>

<h3>Räcker det att jag mejlar en PDF-faktura?</h3>
<p>Mot vanliga privat- och företagskunder, ja. Men en PDF räknas inte som e-faktura enligt lagen. Fakturerar du offentlig sektor måste du använda ett strukturerat format som Peppol BIS Billing 3 - en mejlad PDF uppfyller inte kravet.</p>

<h3>Vad betyder ViDA för mig som hantverkare?</h3>
<p>ViDA är EU:s momsreform. Den viktigaste konsekvensen för dig kommer 1 juli 2030, då e-faktura blir obligatorisk vid gränsöverskridande B2B-handel inom EU. Gör du bara jobb åt svenska kunder berörs du inte direkt av det datumet.</p>

<h3>När blir e-faktura obligatorisk för svenska B2B-affärer?</h3>
<p>Det är inte beslutat. En statlig utredning ska lämna sitt förslag senast 30 november 2027, och först därefter kan ett inhemskt krav bli aktuellt. Räkna med slutet av 2020-talet som tidigast.</p>

<h2>Kom igång</h2>
<p>Vänta inte tills kravet är skarpt - se till att din fakturering är korrekt och strukturerad redan nu. Skapa en professionell faktura med vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur ByggExp håller ordning på hela fakturaflödet åt dig.</p>

<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare - komplett guide</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare: så gör du rätt</a>.</p>
`.trim();

const EFAKTURA: BlogPost = {
  _id: "code-e-faktura-obligatorisk-byggforetag",
  title: "E-faktura obligatorisk 2026? Så gäller reglerna för ditt byggföretag",
  slug: "e-faktura-obligatorisk-byggforetag",
  locale: "sv",
  excerpt: "Rubrikerna säger att e-faktura blir obligatorisk, men vad gäller egentligen för en liten hantverkare 2026? Här är läget, tidslinjen och vad du bör göra nu.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: EFAKTURA_HTML,
  seoTitle: "E-faktura obligatorisk 2026? | ByggExp",
  seoDescription: "Måste ditt lilla byggföretag skicka e-faktura 2026? Vi reder ut Peppol, ViDA och tidslinjen 2026-2030 för hantverkare - och vad som faktiskt gäller idag.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T10:00:00.000Z",
  createdAt: "2026-08-18T10:00:00.000Z",
  updatedAt: "2026-08-18T10:00:00.000Z",
};

const KUNDEN_HTML = `
<p>Obetalda fakturor är ett av de vanligaste kassaflödesproblemen för hantverkare och byggföretag. Du har gjort jobbet, materialet är betalt – men pengarna kommer inte in. Den goda nyheten är att det finns en tydlig trappa att gå uppför: från en vänlig påminnelse, via dröjsmålsränta och förseningsersättning, till Kronofogden och i sista hand tingsrätt. Reglerna skiljer sig beroende på om kunden är privatperson (konsument) eller företag, och det påverkar både vilka avgifter du får ta ut och hur en tvist prövas.</p>
<p><a href="/sv/verktyg/betalningspaminnelse-mall">Skapa en betalningspåminnelse med vår gratis mall (PDF & Excel) -&gt;</a></p>

<p>Grunden för att kunna driva in en fordran är att fakturan är rätt från början – med tydlig förfallodag, specifikation och korrekta uppgifter. Använd gärna <a href="/sv/verktyg/faktura-mall">vår gratis faktura-mall -&gt;</a> så att varje faktura innehåller det som krävs för att du ska kunna ta nästa steg om betalningen uteblir.</p>

<h2>Steg 1 – Betalningspåminnelse och dröjsmålsränta</h2>
<p>Första steget när förfallodagen passerat är en skriftlig betalningspåminnelse. Mot en konsument får du ta ut en lagstadgad påminnelseavgift på högst 60 kr per påminnelse – men bara om avgiften faktiskt uppstått och om det avtalats eller framgår tydligt. Avgiften är momsfri.</p>
<p>Du har också rätt till dröjsmålsränta. Enligt räntelagen är den lagstadgade dröjsmålsräntan Riksbankens referensränta plus 8 procentenheter. För första halvåret 2026 är referensräntan 2 %, vilket ger en dröjsmålsränta på 10 % per år. Referensräntan sätts om av Riksbanken den 1 januari och 1 juli varje år, så räntesatsen kan ändras mitt under ett projekt.</p>
<p>En viktig tidsregel: du får inte ta ut dröjsmålsränta förrän 30 dagar har gått från att fakturan skickades – om du inte har avtalat en förfallodag i förväg. Sätter du en tydlig förfallodag på fakturan börjar räntan löpa från den dagen. På fakturor till konsumenter måste det dessutom framgå tydligt att dröjsmålsränta tas ut. Passa på att sätta rätt betalvillkor redan i din <a href="/sv/verktyg/offert-mall">offert-mall</a>.</p>
<p>Ett ofta förbisett skäl att skicka en skriftlig påminnelse: den bryter preskriptionen. Ett skriftligt krav till gäldenären är ett preskriptionsavbrott som startar om preskriptionstiden.</p>

<h2>Steg 2 – Förseningsersättning och inkasso</h2>
<p>Är kunden ett företag (näringsidkare till näringsidkare, eller mot myndighet) har du en automatisk rätt till förseningsersättning på 450 kr per faktura i samma sekund som den förfaller. Det krävs inget avtal, ingen påminnelse och inget separat krav – förutsatt att fakturan hade minst 30 dagars betalningsvillkor. De 450 kronorna täcker dina påminnelse- och indrivningskostnader upp till det beloppet.</p>
<p>Hjälper inte påminnelserna kan du lämna ärendet till ett inkassobolag. Då tillkommer en lagstadgad inkassoavgift på 180 kr, och 170 kr om ni lägger upp en amorterings- eller avbetalningsplan. Även dessa avgifter är tak och momsfria – du får bara ta ut dem om de faktiskt uppstått. Inkasso lönar sig ofta eftersom ett inkassokrav har större tyngd än en vanlig påminnelse och signalerar att nästa steg är Kronofogden.</p>

<h2>Steg 3 – Betalningsföreläggande hos Kronofogden</h2>
<p>Betalar kunden fortfarande inte, och saknar en reell invändning, är betalningsföreläggande hos Kronofogden den enklaste vägen. Ansökningsavgiften är 300 kr och kan läggas på skulden. Om gäldenären inte bestrider inom fristen – vanligtvis omkring två veckor – meddelar Kronofogden ett utslag, som är ett verkställbart beslut du kan driva in med.</p>
<p>Tänk på att Kronofogden inte är en domstol och inte prövar om ditt krav är riktigt. Myndigheten kontrollerar bara om kunden invänder eller inte. Betalningsföreläggande passar därför bäst när kunden inte har någon egentlig invändning utan helt enkelt inte betalar.</p>

<h2>Steg 4 – När kunden bestrider fakturan</h2>
<p>Bestrider kunden betalningsföreläggandet måste Kronofogden släppa ärendet – de kan inte avgöra vem som har rätt. Ärendet stängs, eller så begär du överlämnande till tingsrätt för en vanlig civilprocess. Så länge gäldenären bestrider hela kravet får hen ingen betalningsanmärkning från Kronofogdens process.</p>
<p>Vanliga invändningar är fel i arbetet, att priset är för högt eller att arbetet inte var beställt – ofta gäller det tilläggsarbeten. Här avgör din dokumentation. En konsument har rätt att kräva en specificerad faktura som visar hur priset fördelar sig på timmar och material, vilket blir centralt när kunden bestrider på prisgrund. Löpande dokumentation, godkända ÄTA-arbeten och en tydlig specifikation är det som gör att du står stark i en tvist. Läs mer i vår guide om <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>

<h2>Steg 5 – ARN och tingsrätt</h2>
<p>Här är en missuppfattning värd att räta ut: du som hantverkare kan inte anmäla en kund till ARN (Allmänna reklamationsnämnden) för att få betalt. ARN prövar bara ärenden där konsumenten är den som klagar mot ett företag. ARN är alltså kundens väg mot dig, inte tvärtom – och besluten är icke-bindande rekommendationer. Din väg är i stället domstol.</p>
<p>Storleken på tvisten avgör kostnadsrisken. Är det omtvistade beloppet högst ett halvt prisbasbelopp – 29 600 kr år 2026 – hanteras det som ett förenklat tvistemål (FT-mål). Ansökningsavgiften vid tingsrätten är 900 kr och de ersättningsgilla rättegångskostnaderna är starkt begränsade, i praktiken avgiften plus ungefär en timmes juridisk rådgivning. Förlorarens kostnadsrisk är alltså liten.</p>
<p>Överstiger beloppet 29 600 kr blir det ett ordinärt tvistemål med fullt rättegångskostnadsansvar – den som förlorar betalar motpartens rättegångskostnader, som kan bli betydligt större än själva fakturan. Det är huvudskälet att hålla omtvistade summor väl dokumenterade och att överväga en förlikning när risken är stor.</p>

<h2>Förebygg problemet</h2>
<ul>
<li><strong>Tydligt avtal och offert.</strong> Skriftlig offert med pris, omfattning och betalvillkor minskar utrymmet för tvister.</li>
<li><strong>Delfakturering och a conto.</strong> Fakturera i etapper så att du aldrig ligger ute med hela beloppet.</li>
<li><strong>Kreditupplysning på nya kunder.</strong> Särskilt inför större jobb mot företag.</li>
<li><strong>Korta betalvillkor och tydlig förfallodag.</strong> Då börjar dröjsmålsräntan löpa direkt.</li>
<li><strong>Fakturera i tid.</strong> En fordran mot en konsument preskriberas efter 3 år, mot ett företag efter 10 år. Ett skriftligt krav bryter preskriptionen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga fakturaunderlaget som håller hela vägen. Tidrapportering och material knyts till projektet så att timmar och kostnader finns dokumenterade om kunden bestrider. Du skapar specificerade fakturor med förfallodag och betalvillkor direkt från underlaget, och ÄTA-arbeten kan godkännas löpande så att tilläggen inte blir en tvist i efterhand. ByggExp är inget inkasso- eller juristbolag – men ju bättre din dokumentation är, desto enklare blir varje steg i trappan ovan.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket dröjsmålsränta får jag ta ut?</h3>
<p>Den lagstadgade dröjsmålsräntan är Riksbankens referensränta plus 8 procentenheter. Under första halvåret 2026 är referensräntan 2 %, alltså 10 % per år. Räntan får normalt tas ut först 30 dagar efter att fakturan skickats, om ingen förfallodag avtalats i förväg.</p>
<h3>Kan jag anmäla en kund som inte betalar till ARN?</h3>
<p>Nej. ARN prövar bara ärenden där en konsument klagar på ett företag. Som hantverkare kan du inte använda ARN för att få betalt – din väg är betalningsföreläggande hos Kronofogden och därefter tingsrätt om kunden bestrider.</p>
<h3>Vad händer om kunden bestrider betalningsföreläggandet?</h3>
<p>Då måste Kronofogden släppa ärendet, eftersom myndigheten inte prövar om kravet är riktigt. Vill du driva saken vidare begär du överlämnande till tingsrätt för en civilprocess. Så länge kunden bestrider hela kravet får hen ingen betalningsanmärkning från processen.</p>
<h3>Har jag som företag rätt till ersättning direkt när fakturan förfaller?</h3>
<p>Ja. Mot ett annat företag eller en myndighet har du automatisk rätt till 450 kr i förseningsersättning så snart fakturan förfaller, förutsatt att den hade minst 30 dagars betalningsvillkor. Det krävs varken avtal, påminnelse eller separat krav.</p>

<h2>Kom igång</h2>
<p>Börja med grunden: en korrekt faktura med förfallodag och specifikation. Skapa din med <a href="/sv/verktyg/faktura-mall">vår gratis faktura-mall</a>, och sätt rätt betalvillkor redan i offerten med <a href="/sv/verktyg/offert-mall">offert-mallen</a>. Vill du se hur ByggExp knyter tid, material och ÄTA till ett fakturaunderlag som håller i en tvist? <a href="/sv/contact">Boka en demo här</a>.</p>
<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten</a>.</p>
`.trim();

const KUNDEN: BlogPost = {
  _id: "code-"+"kunden-betalar-inte-fakturan",
  title: "Kunden betalar inte fakturan – så driver du in pengarna som hantverkare",
  slug: "kunden-betalar-inte-fakturan",
  locale: "sv",
  excerpt: "En steg-för-steg-trappa från vänlig påminnelse till betalningsföreläggande och tingsrätt när kunden inte betalar din faktura.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: KUNDEN_HTML,
  seoTitle: "Kunden betalar inte fakturan | ByggExp",
  seoDescription: "Obetald eller bestriden faktura? Så går du från påminnelse och dröjsmålsränta till Kronofogden och tingsrätt – konkret handlingsplan för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false,
  isPublished: true,
  publishedAt: "2026-08-18T11:00:00.000Z",
  createdAt: "2026-08-18T11:00:00.000Z",
  updatedAt: "2026-08-18T11:00:00.000Z",
};

const BETVILLK_HTML = `
<p>De flesta byggföretag som får likviditetsproblem har inte för få jobb — de har för lång kredittid. Varje faktura med 30, 60 eller 90 dagars betalningstid är en räntefri lånefinansiering du ger din beställare, samtidigt som löner, material och underentreprenörer ska betalas i tid. Rätt betalningsvillkor är därför inte administrativt pyssel, det är kassaflödesskydd. Här går vi igenom vad lagen faktiskt kräver 2026 och hur du sätter villkor som håller pengarna i rörelse — mot både professionella beställare och privatpersoner.</p>

<p>Ett tydligt underlag börjar med rätt uppsatt faktura. Sätt villkoren en gång i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a> så att förfallodatum, dröjsmålsränta och avgifter finns med på varje utskick.</p>

<h2>Vad lagen faktiskt kräver 2026</h2>
<p>Botten under alla avtal är räntelagen (1975:635). Den ger dig rätt till <strong>dröjsmålsränta</strong> även om du inte skrivit ett ord om det på fakturan. Räntan är <strong>referensräntan + 8 procentenheter</strong> per år och gäller lika mot företag som mot privatpersoner. Under 2026 ligger referensräntan runt 2 procent, vilket ger en dröjsmålsränta på ungefär 10 procent per år.</p>
<p>När räntan börjar löpa beror på om ni avtalat ett förfallodatum. Har ni satt ett datum i förväg löper räntan automatiskt från förfallodagen — ingen påminnelse behövs (§ 3). Har ni inte avtalat något datum får du kräva ränta först 30 dagar efter att du skickat fakturan (§ 4), och gäldenären är inte skyldig ränta innan fakturan nått fram. Poängen: villkoren du glömmer skriva ut ger dig ändå lagens skydd — men de villkor du skriver ut ger dig kontrollen.</p>

<h2>B2B: beställare, generalentreprenör och offentlig köpare</h2>
<p>Mellan näringsidkare förfaller en faktura senast 30 dagar efter krav (§ 2 a). Det viktiga: en längre kredittid gäller bara om <strong>du som säljare uttryckligen har godkänt den</strong>. Villkor som ensidigt tvingar dig att vänta längre är ogiltiga. Det betyder att en generalentreprenör inte kan pressa in 60 eller 90 dagar i sina inköpsvillkor och göra det bindande utan att du aktivt accepterat — och du bör tänka två gånger innan du gör det.</p>
<p>Mot offentlig beställare — kommun, region eller stat — är taket ännu hårdare: <strong>max 30 dagars betalningstid</strong>, och den går inte att förlänga genom avtal. Ränta löper efter 30 dagar oavsett vad som står i upphandlingsunderlaget.</p>
<p>Långa kredittider är särskilt farliga i entreprenader där du ligger ute med material och lön i månader. Två motmedel: håll kredittiden kort (10–20 dagar där du kan) och fakturera löpande i stället för allt på slutet. <strong>A conto-fakturering eller delfakturering</strong> mot uppnådda etapper flyttar in pengarna i takt med att kostnaderna uppstår, i stället för att samla all risk i en slutfaktura.</p>

<h2>Privatperson: konsumentjobbet</h2>
<p>Jobb åt privatpersoner styrs av konsumenttjänstlagen (1985:716). Här finns ingen 30-dagarsspärr som i B2B — betalningsvillkoren är fritt avtalbara. Utnyttja det: sätt en <strong>kort kredittid på 10–15 dagar</strong>. Samma dröjsmålsränta (referensränta + 8 procentenheter) gäller mot konsument, men den lagstadgade <strong>förseningsersättningen på 450 kr kan du inte ta ut av en privatperson</strong> — den är bara för B2B och offentliga köpare.</p>
<p>Tänk också på att ROT-avdraget bara påverkar arbetskostnaden. ROT-avdrag är 30 procent av arbetskostnaden, max 50 000 kr per person och år — men material och den andra halvan av arbetet ska in på ditt konto snabbt, oavsett hur länge Skatteverket dröjer med utbetalningen. Räkna ut kundens del rätt direkt med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår ROT-avdragskalkylator &rarr;</a>. Fakturera dessutom <strong>direkt vid slutbesiktning eller godkänt arbete</strong> — inte en vecka senare när minnet av jobbet börjat blekna.</p>

<h2>Avgifter du får ta ut när betalning uteblir</h2>
<p>När kunden inte betalar finns flera lagstadgade avgifter att luta sig mot. Beloppen är tak — du kan inte avtala om högre, och klausuler som försöker ta bort gäldenärens ränteskyldighet eller höja avgifterna är ogiltiga i affärsförhållanden.</p>
<ul>
<li><strong>Förseningsersättning 450 kr</strong> — endast B2B och offentlig köpare. Får tas ut automatiskt, ingen påminnelse krävs. Gäller inte mot konsument.</li>
<li><strong>Påminnelseavgift 60 kr</strong> — får bara tas ut om det avtalades när skulden uppstod. Skriv därför in villkoret på fakturan.</li>
<li><strong>Inkassokrav 180 kr</strong> — den lagstadgade ersättningen för ett formellt inkassokrav.</li>
<li><strong>Amorteringsplan 170 kr</strong> — om ni kommer överens om avbetalning.</li>
</ul>

<h2>Påminnelserutin som skyddar kassan</h2>
<p>En förutsägbar rutin gör att du agerar innan skulden hinner bli gammal. Konkret tidslinje:</p>
<ol>
<li><strong>Dag 0:</strong> Faktura med tydligt förfallodatum, angiven kredittid och dröjsmålsränta.</li>
<li><strong>Dag +1 efter förfallodag:</strong> Vänlig påminnelse. Ofta räcker det — många missar bara datumet.</li>
<li><strong>Dag +8:</strong> Formellt inkassokrav med påminnelseavgift (60 kr om avtalat), inkassokostnad (180 kr) och upplupen dröjsmålsränta.</li>
<li><strong>Dag +15:</strong> Skicka till inkasso eller ansök om betalningsföreläggande hos Kronofogden.</li>
</ol>
<p>Det avgörande är att rutinen körs automatiskt, inte när du råkar komma ihåg det. Automatisera påminnelserna i faktureringssystemet och skriv villkoren direkt på fakturan — då blir varje steg juridiskt vattentätt utan extra arbete. Läs mer om nästa steg i <a href="/sv/blog/kunden-betalar-inte-fakturan">kunden betalar inte fakturan</a>.</p>

<h2>Checklista: villkor som hör hemma på varje faktura</h2>
<ul>
<li>Förfallodatum (ett faktiskt datum, inte bara "30 dagar")</li>
<li>Kredittid i antal dagar</li>
<li>Dröjsmålsränta: referensränta + 8 procentenheter</li>
<li>Påminnelseavgift 60 kr — avtalad redan här</li>
<li>Referens eller ordernummer från beställaren</li>
<li>ROT-uppdelning: arbetskostnad, kundens del efter avdrag, material</li>
<li>Organisationsnummer eller personnummer, momsnummer</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp sätter du upp dina standardvillkor en gång — kredittid, förfallodatum, dröjsmålsränta och påminnelseavgift — och de följer med på varje faktura du skapar. Systemet räknar ut ROT-uppdelningen åt dig och håller isär arbetskostnad och material så att kundens del blir rätt. Uteblir betalningen ligger påminnelserutinen redo att skickas i tur och ordning, och underlaget sparas i de sju år bokföringen kräver. Ingen magi — bara att villkoren blir konsekventa och att du slipper glömma stegen som faktiskt hämtar in pengarna.</p>

<h2>Vanliga frågor</h2>
<h3>Hur hög är dröjsmålsräntan 2026?</h3>
<p>Dröjsmålsräntan är referensräntan plus 8 procentenheter per år. Referensräntan ligger runt 2 procent under 2026, vilket ger en dröjsmålsränta på ungefär 10 procent per år. Samma nivå gäller mot både företag och privatpersoner.</p>
<h3>Kan en stor beställare tvinga på mig 60 dagars betalningstid?</h3>
<p>Nej, inte utan ditt samtycke. Mellan näringsidkare förfaller fakturan senast 30 dagar efter krav, och en längre kredittid gäller bara om du som säljare uttryckligen godkänt den. Mot kommun, region och stat är taket 30 dagar och kan inte förlängas alls.</p>
<h3>Får jag ta ut förseningsersättning av en privatperson?</h3>
<p>Nej. Den lagstadgade förseningsersättningen på 450 kr gäller bara i affärsförhållanden och mot offentliga köpare. Mot en privatperson får du ta ut dröjsmålsränta och lagstadgade påminnelse- och inkassoavgifter, men inte de 450 kronorna.</p>
<h3>Måste jag skicka en påminnelse innan räntan börjar löpa?</h3>
<p>Inte om ni avtalat ett förfallodatum i förväg — då löper räntan automatiskt från förfallodagen. Har ni inte avtalat något datum får du kräva ränta först 30 dagar efter att fakturan skickats.</p>

<h2>Kom igång</h2>
<p>Standardisera dina betalningsvillkor en gång så sparar du dagar av kredittid på varje jobb. Bygg din faktura med rätt villkor i <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur automatisk fakturering och påminnelserutin fungerar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> &middot; <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a></p>
`.trim();

const BETVILLK: BlogPost = {
  _id: "code-"+"betalningsvillkor-faktura-bygg",
  title: "Betalningsvillkor på fakturan: så skyddar du kassan mot beställare och privatperson",
  slug: "betalningsvillkor-faktura-bygg",
  locale: "sv",
  excerpt: "Så sätter du betalningsvillkor som håller pengarna i rörelse — kredittid, dröjsmålsränta och en påminnelserutin som fungerar mot både B2B-beställare och privatkunder.",
  tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp",
  contentHtml: BETVILLK_HTML,
  seoTitle: "Betalningsvillkor faktura bygg | ByggExp",
  seoDescription: "Rätt betalningsvillkor för hantverkare: kortare kredittid, dröjsmålsränta och påminnelserutin som skyddar likviditeten mot både beställare och privatperson.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`,
  canonicalUrl: "",
  noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T13:00:00.000Z", createdAt: "2026-08-18T13:00:00.000Z", updatedAt: "2026-08-18T13:00:00.000Z",
};

const VADKOST_HTML = `
<p>Vad kostar en anställd i ett byggföretag egentligen? Om du bara ser till månadslönen räknar du fel – och lägger anbud som äter upp din marginal. Den lön du betalar ut är toppen av ett isberg. Under ytan ligger arbetsgivaravgift, semester, tjänstepension, försäkringar och en rad byggspecifika kostnader som tillsammans kan mer än fördubbla siffran. Den här guiden visar hur du bygger upp den verkliga timkostnaden för en byggnadsarbetare 2026, så att du sätter rätt pris från början.</p>
<p><a href="/sv/verktyg/anstalld-kostnad-kalkylator">Räkna ut vad en anställd kostar med vår gratis kalkylator -&gt;</a></p>

<p>Vill du testa dina egna siffror direkt? Räkna fram din faktiska kostnad med vår gratis <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator &rarr;</a></p>

<h2>Lönen är bara startpunkten</h2>
<p>En byggnads- eller anläggningsarbetare tjänar i snitt runt 38 000–40 000 kr i månaden, eller ungefär 215–235 kr i timmen (SCB:s lönestrukturstatistik). Använd alltid din egen faktiska lön i kalkylen, inte snittet – men som exempel utgår vi från en grundlön på 215 kr/h. Det är den siffran många instinktivt lägger till grund för anbud. Problemet är att den bara beskriver vad den anställde får, inte vad hen kostar. Skillnaden mellan lön och full arbetskraftskostnad är hela poängen i det här räknandet.</p>

<h2>Arbetsgivaravgift 2026: 31,42 %</h2>
<p>Ovanpå bruttolönen betalar du arbetsgivaravgift. För 2026 är den fulla avgiften <strong>31,42 %</strong> på lön och förmåner för anställda födda 1959 eller senare. Den består av flera delar:</p>
<ul>
<li>Ålderspensionsavgift 10,21 %</li>
<li>Sjukförsäkringsavgift 3,55 %</li>
<li>Föräldraförsäkringsavgift 2,00 %</li>
<li>Efterlevandepensionsavgift 0,30 %</li>
<li>Arbetsmarknadsavgift 2,64 %</li>
<li>Arbetsskadeavgift 0,10 %</li>
<li>Allmän löneavgift 12,62 %</li>
</ul>
<p>Det finns undantag. För unga 19–23 år (födda 2003–2007) gäller en tillfälligt sänkt avgift på <strong>20,81 %</strong> på månadslön upp till 25 000 kr, och full avgift på beloppet däröver – reglerna är tidsbegränsade – kontrollera aktuell period och belopp hos Skatteverket. Anställda som fyllt 67 (födda 1938–1958) betalar bara ålderspensionsavgiften 10,21 %, och för födda 1937 eller tidigare är avgiften 0 %.</p>
<p>Räkneexempel på en månadslön om 40 000 kr: 40 000 &times; 31,42 % = <strong>12 568 kr</strong> i arbetsgivaravgift per månad. Redan här har du gått från 40 000 till 52 568 kr.</p>

<h2>Semester och arbetstidsförkortning</h2>
<p>Semesterlagen ger 25 semesterdagar per år. För arbetare tillämpas normalt procentregeln, där semesterlönen är minst 12 % av den intjänade lönen. Byggavtalet lägger historiskt på lite mer via semestertillägg, så att den effektiva kostnaden hamnar runt 12–13 % på den arbetade lönen.</p>
<p>Utöver det innehåller Byggavtalet ett arbetstidskonto (arbetstidsförkortning, ATF), där en del av lönesumman avsätts varje år – motsvarande drygt en veckas betald ledighet, ofta angivet kring 35–40 timmar per år. Poängen är dubbel: dessa poster kostar pengar <em>och</em> minskar antalet timmar den anställde faktiskt är på plats och kan debiteras. Tillsammans lägger semester och ATF på i storleksordningen 12–14 %.</p>

<h2>Tjänstepension och Fora-försäkringar</h2>
<p>Kollektivavtalet kräver tjänstepension. Avtalspension SAF-LO betalas av arbetsgivaren med <strong>4,5 %</strong> av bruttolönen upp till 7,5 inkomstbasbelopp och 30 % på lönedelar över den gränsen, administrerat via Fora. Detta är inte frivilligt – det är ett avtalskrav.</p>
<p>Ovanpå pensionen ingår Foras försäkringspaket för arbetare: AGS (sjukförsäkring), TFA (arbetsskada), TGL (livförsäkring), omställningsförsäkring, premiebefrielse och föräldrapenningtillägg. Dessa lägger på ungefär 1–1,5 % av lönesumman. Den totala Fora-kostnaden – pension plus försäkringar – landar vanligen kring <strong>6 %</strong> av lönesumman. Premierna sätts årsvis, så stäm av mot din aktuella Fora-faktura.</p>

<h2>Byggspecifika påslag som ofta glöms bort</h2>
<p>Här skiljer sig bygg från ett kontorsjobb. En hantverkare bär med sig utrustning och kringkostnader som måste in i timpriset:</p>
<ul>
<li>Verktyg och maskiner – inköp, slitage och underhåll</li>
<li>Servicebil eller skåpbil, drivmedel, försäkring och service</li>
<li>Arbetskläder och skyddsutrustning</li>
<li>ID06 och administration kring det</li>
<li>Yrkes- och ansvarsförsäkring</li>
<li>Utbildning och certifikat: heta arbeten, ställning, lift, fallskydd</li>
<li>Företagshälsovård och arbetsmiljöarbete</li>
</ul>
<p>Som tumregel motsvarar detta ofta <strong>40–80 kr per debiterbar timme</strong> eller mer, beroende på hur maskin- och fordonstung verksamheten är. Lägg också till sjuklön: du betalar cirka 80 % av lönen under sjuklöneperioden dag 1–14 (med karensavdrag), vilket både kostar och tar bort debiterbar tid.</p>

<h2>Från lön till verklig timkostnad – räkneexempel</h2>
<p>Nu bygger vi upp hela kedjan på vår exempellön 215 kr/h:</p>
<ol>
<li><strong>Grundlön:</strong> 215 kr/h</li>
<li><strong>+ arbetsgivaravgift 31,42 %:</strong> +68 kr &rarr; 283 kr/h</li>
<li><strong>+ semester och ATF ca 13 %:</strong> +28 kr &rarr; 311 kr/h</li>
<li><strong>+ pension och Fora-försäkringar ca 6 %:</strong> +13 kr &rarr; 324 kr/h</li>
<li><strong>+ byggpåslag ca 50 kr/h:</strong> +50 kr &rarr; <strong>374 kr/h laddad kostnad</strong></li>
</ol>
<p>Men 374 kr är din kostnad per <em>betald</em> timme, inte per <em>debiterbar</em> timme. En byggnadsarbetare har en debiteringsgrad på typiskt 60–75 % – resten av tiden går till semester, ATF, sjukdom, restid, väder, ställtid och administration. Den icke-debiterbara tiden måste bäras av de timmar du faktiskt fakturerar.</p>
<p>Räknar vi med 70 % debiteringsgrad: 374 / 0,70 = <strong>534 kr/h</strong> i ren självkostnad att ta ut i anbud. Vid 60 % blir det över 620 kr/h. Så blir en lön på 215 kr/h till 400–500+ kr/h innan du ens lagt på vinst och risk. Ovanpå självkostnaden behöver du ett påslag för vinstmarginal och för att bära risken i fastprisjobb – annars arbetar du utan buffert.</p>

<h2>2026: räkna om efter nytt avtal</h2>
<p>En viktig varning: Byggavtalet är inne i en aktiv avtalsrörelse under 2026. Det nuvarande avtalet löper ut och nya löner och villkor förhandlas fram. Det betyder att lönenivåer och avsättningar kan ändras mitt under året. Lägg du långa anbud nu – räkna om självkostnaden när det nya avtalet är klart, så att du inte låser fast dig vid siffror som inte längre gäller.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du lön, arbetade timmar och projekttid på ett ställe, så att du ser skillnaden mellan betald och debiterbar tid i praktiken. Med tidrapporteringen får du fram din faktiska debiteringsgrad per person och projekt i stället för att gissa – och det är den siffran som avgör om ett anbud håller. Kombinerat med kalkylverktygen kan du bygga upp timpriset lager för lager och lägga anbud på verkliga tal, inte på magkänsla. ByggExp räknar inte åt Skatteverket eller Fora åt dig, men det ger dig underlaget du behöver för att sätta rätt pris.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket dyrare än lönen blir en anställd totalt?</h3>
<p>Räkna med att den fulla arbetskraftskostnaden ligger kring 50–60 % över bruttolönen när du lagt på arbetsgivaravgift, semester, pension och försäkringar. Med byggspecifika påslag och låg debiteringsgrad kan den timme du fakturerar behöva vara mer än dubbelt så hög som grundlönen.</p>
<h3>Vad är arbetsgivaravgiften för bygg 2026?</h3>
<p>Den fulla arbetsgivaravgiften är 31,42 % för anställda födda 1959 eller senare. För unga 19–23 år gäller tillfälligt 20,81 % på månadslön upp till 25 000 kr under perioden april 2026 till september 2027, och för anställda som fyllt 67 är avgiften 10,21 %.</p>
<h3>Måste jag betala tjänstepension till mina byggarbetare?</h3>
<p>Ja, om du har kollektivavtal. Avtalspension SAF-LO med 4,5 % (30 % över 7,5 IBB) och Foras försäkringspaket är avtalskrav, inte frivilliga förmåner. Totalt landar Fora-kostnaden ofta kring 6 % av lönesumman.</p>
<h3>Varför räcker det inte att fakturera lönen plus arbetsgivaravgift?</h3>
<p>För att en byggnadsarbetare bara debiterar 60–75 % av sin arbetstid. All icke-fakturerbar tid samt fordon, verktyg, försäkringar och certifikat måste bäras av de timmar du faktiskt tar betalt för, vilket pressar upp anbudspriset rejält.</p>

<h2>Kom igång</h2>
<p>Sätt rätt siffra för ditt nästa anbud genom att räkna igenom din egen kostnad i vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator</a>. Vill du se hur ByggExp hjälper dig fånga verklig debiteringsgrad och kalkylera anbud på riktiga tal? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Så sätter du rätt timpris som hantverkare</a>, <a href="/sv/blog/tidrapportering">Tidrapportering i byggföretaget</a> och <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a>.</p>
`.trim();

const VADKOST: BlogPost = {
  _id: "code-"+"vad-kostar-en-anstalld-byggforetag",
  title: "Vad kostar en anställd i ett byggföretag? Verklig timkostnad 2026", slug: "vad-kostar-en-anstalld-byggforetag", locale: "sv",
  excerpt: "Så räknar du ut den verkliga timkostnaden för en byggnadsarbetare 2026 – från grundlön till den siffra du måste ta betalt för i anbudet.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/timpris-preview.webp", contentHtml: VADKOST_HTML,
  seoTitle: "Vad kostar en anställd? Bygg 2026 | ByggExp", seoDescription: "Lön är bara toppen. Se hur arbetsgivaravgift, semester, tjänstepension och byggpåslag gör 215 kr/h till 400–500+ kr/h i anbud. Räkneexempel för 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/timpris-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T15:30:00.000Z", createdAt: "2026-08-18T15:30:00.000Z", updatedAt: "2026-08-18T15:30:00.000Z",
};

const LIKVID_HTML = `
<p>Många byggföretag är lönsamma på pappret men får ändå slut på pengar på kontot. Orderboken är full, marginalen ser bra ut i bokslutet – men mitt i månaden räcker inte kassan till löner, skatt och materialinköp. Orsaken är sällan dålig lönsamhet. Det är timing. Pengarna kommer in för sent och betalas ut för tidigt. Tesen i den här artikeln är enkel: fakturera direkt vid avslut, håll korta betalningsvillkor och bevaka varje förfallodag.</p>

<p>Ett vanligt likviditetshål börjar redan i offerten, för ett ROT-jobb delar kundens betalning i två strömmar. Räkna på din del innan du lämnar pris med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator -&gt;</a> så vet du exakt hur mycket kunden betalar direkt och hur mycket du måste vänta på från Skatteverket.</p>

<h2>ROT-fällan för din kassa</h2>
<p>ROT-avdrag ger kunden skattereduktion på 30 % av arbetskostnaden – aldrig på material, resor eller utrustning. Med fakturamodellen drar du av ROT-beloppet direkt på fakturan. Kunden betalar den reducerade summan, och först när kunden har betalat kan du begära resterande belopp från Skatteverket via e-tjänsten Rot och rut. Det innebär att ROT-delen i praktiken är en kredit du ger kunden – och en väntan på myndighet.</p>
<p>Ett konkret exempel: ett badrumsjobb med 80 000 kr i arbetskostnad och 40 000 kr i material, plus 25 % moms.</p>
<ul>
<li>Arbetskostnad inkl. moms: 100 000 kr</li>
<li>ROT-avdrag 30 % av arbetskostnaden: 30 000 kr</li>
<li>Material inkl. moms: 50 000 kr</li>
<li>Kunden betalar dig direkt: 120 000 kr</li>
<li>Du begär från Skatteverket efteråt: 30 000 kr</li>
</ul>
<p>Trots att du redan lagt ut för allt material och betalat lön för arbetstimmarna sitter 30 000 kr fast tills kunden betalat och Skatteverket hunnit behandla din begäran. På flera parallella projekt växer det gapet snabbt. Kom också ihåg taket: ROT är max 50 000 kr per person och år, och ROT plus RUT ryms i ett gemensamt tak på 75 000 kr per person och år (2026). Är kundens utrymme redan förbrukat får du ingen utbetalning – då står du för hela beloppet.</p>

<h2>Fakturera direkt vid avslut</h2>
<p>Varje dag ett färdigt jobb ligger som osänd faktura är en dag längre till pengar. Gör en fast rutin: slutbesiktning eller avslut samma dag som fakturan går ut, senast inom 48 timmar. En vecka i fakturasläp plus 30 dagars betalningstid betyder att pengar du tjänade i mars inte når kontot förrän i maj.</p>
<p>På längre projekt binder materialinköp och löner kassan i veckor innan du får betalt. Lösningen är delfakturering, a-conto. Fakturera etappvis mot uppnådda milstolpar i stället för allt på slutet. Då matchar inbetalningarna dina utlägg och du slipper finansiera bygget ur egen ficka. Skriv a-conto-planen redan i avtalet så kunden vet vad som kommer.</p>

<h2>Begär ROT-utbetalning snabbt och rätt</h2>
<p>När kunden har betalat: begär utbetalningen samma vecka i e-tjänsten Rot och rut. Skatteverket betalar normalt ut inom cirka en vecka när begäran är komplett och korrekt. Men utbetalning förutsätter att kunden har ROT-utrymme kvar och att person- och fastighetsuppgifter stämmer – annars avslås eller fördröjs den, och du står för hela beloppet.</p>
<p>Minska risken med tre kontroller:</p>
<ol>
<li>Stäm av kundens ROT-utrymme <strong>innan</strong> du lämnar offert, inte efteråt.</li>
<li>Säkra rätt personnummer och fastighetsbeteckning (eller lägenhetsnummer för bostadsrätt).</li>
<li>Bekräfta att jobbet ger ROT: det gäller bara arbete på bostad kunden själv äger – nybyggnation och arbete åt annat företag eller en förenings gemensamma delar ger normalt inte ROT.</li>
</ol>
<p>Det datum kunden betalar styr dessutom vilket beskattningsår avdraget hör till, så håll koll på betaldatum nära årsskiftet.</p>

<h2>Korta betalningsvillkor är din rätt</h2>
<p>Mellan företag är den lagstadgade maximala betalningstiden 30 dagar. Längre kredit gäller bara om du som säljare uttryckligen har godkänt det – en beställare kan alltså inte ensidigt trycka på 60 dagar. Mot privatkund kan du sätta ännu kortare, förslagsvis 10–15 dagar. Skriv villkoren i avtalet och offerten, inte bara på fakturan, så finns de överenskomna innan jobbet ens börjat.</p>

<h2>Bevaka förfallet</h2>
<p>En faktura som passerar förfallodagen utan åtgärd är ränta du skänker bort. Vid sen betalning har du rätt till dröjsmålsränta enligt räntelagen – referensräntan plus 8 procentenheter – från förfallodagen. Är kunden ett företag har du dessutom laglig rätt till en förseningsersättning på 450 kr, utöver räntan och skäliga inkassokostnader. (Referensräntan sätts av Riksbanken 1 januari och 1 juli; kontrollera aktuellt värde på riksbanken.se.)</p>
<p>Bygg en fast rutin: automatisk påminnelse dagen efter förfall, sedan inkasso efter en bestämd tidsgräns. Automatisera bevakningen så att ingen faktura faller mellan stolarna när det är fullt på bygget.</p>

<h2>Glöm inte omvänd byggmoms</h2>
<p>När du säljer en byggtjänst till en köpare som själv, mer än tillfälligt, säljer byggtjänster gäller omvänd skattskyldighet. Då fakturerar du <strong>utan</strong> moms, märker fakturan med att omvänd skattskyldighet för byggtjänster gäller och anger köparens momsnummer – köparen redovisar momsen. Det påverkar kassaflödet direkt: du har ingen kundmoms att tillfälligt förfoga över. Vanligt fel är att fakturera med moms ändå, vilket ger felaktiga fakturor, tvister och betalningsdröjsmål. Ha koll på om varje kund är byggföretag eller inte redan i offertskedet.</p>

<h2>Bygg en buffert och enkla rutiner</h2>
<ul>
<li>Håll en rullande kassaprognos som visar in- och utbetalningar de kommande veckorna.</li>
<li>Sikta på en buffert som täcker löner, skatt och material 1–2 månader framåt.</li>
<li>Ge kunden kortare kredit än du själv får av dina leverantörer – då jobbar tiden för din kassa.</li>
<li>Följ upp ROT-utrymme per kund och begär utbetalning direkt efter betalning.</li>
<li>Spara underlag och fakturor i 7 år enligt bokföringsreglerna.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med rätt ROT-avdrag från början och gör om den till faktura när jobbet är klart – samma dag, utan att räkna om beloppen för hand. På längre projekt lägger du upp a-conto-fakturor mot etapper så inbetalningarna följer utläggen. Fakturorna får förfallodatum och betalningsstatus samlat, så du ser vilka som närmar sig förfall och vilka som passerat. Verktyget trollar inte fram pengar snabbare från Skatteverket eller kunden, men det tar bort fakturasläpet och gör att inget jobb blir liggande osänt.</p>

<h2>Vanliga frågor</h2>
<h3>Varför är mitt byggföretag lönsamt men har ändå tom kassa?</h3>
<p>Nästan alltid handlar det om timing, inte marginal. Du betalar löner och material innan kunden betalar dig, och på ROT-jobb väntar du dessutom på ROT-delen från Skatteverket. Fakturera direkt vid avslut, korta betalningsvillkoren och delfakturera längre projekt så matchar inbetalningarna dina utgifter bättre.</p>
<h3>När kan jag begära ROT-utbetalningen från Skatteverket?</h3>
<p>Först efter att kunden har betalat sin del av fakturan. Då begär du resterande ROT-belopp i e-tjänsten Rot och rut. Är begäran komplett och korrekt betalar Skatteverket normalt ut inom cirka en vecka, förutsatt att kunden har ROT-utrymme kvar och att uppgifterna stämmer.</p>
<h3>Hur långa betalningsvillkor får ett annat företag kräva?</h3>
<p>Mellan företag är max 30 dagar enligt lag. Längre kredittid gäller bara om du som säljare uttryckligen godkänner den. Du behöver alltså inte acceptera 60 dagar bara för att beställaren skriver så i sin beställning.</p>
<h3>Vad har jag rätt till om kunden betalar för sent?</h3>
<p>Dröjsmålsränta enligt räntelagen (referensräntan plus 8 procentenheter) från förfallodagen. Är kunden ett företag har du dessutom rätt till 450 kr i förseningsersättning samt skäliga inkassokostnader, utöver räntan.</p>

<h2>Kom igång</h2>
<p>Räkna ut ROT-delen och kundens faktiska betalning innan du lämnar pris med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>, och skapa en korrekt faktura med rätt villkor i <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>. Vill du se hur offert, ROT och fakturabevakning hänger ihop i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">ROT-avdrag – så fungerar fakturamodellen</a>, <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`.trim();

const LIKVID: BlogPost = {
  _id: "code-"+"likviditet-byggforetag",
  title: "Likviditet i byggföretag: undvik att ROT och långa betalningsvillkor sänker kassan", slug: "likviditet-byggforetag", locale: "sv",
  excerpt: "Så undviker du att ROT-förskott och långa betalningsvillkor tömmer kassan – fakturera direkt vid avslut, korta villkoren och bevaka förfallodagen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: LIKVID_HTML,
  seoTitle: "Likviditet byggföretag | ByggExp", seoDescription: "Lönsam på pappret men tom kassa? Så undviker du att ROT-förskott och långa betalningsvillkor sänker likviditeten – fakturera direkt och bevaka förfallet.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T16:00:00.000Z", createdAt: "2026-08-18T16:00:00.000Z", updatedAt: "2026-08-18T16:00:00.000Z",
};

const ENSKILD_HTML = `
<p>Att gå från anställd till eget är ett av de vanligaste stegen i byggbranschen — och en av de första frågorna som dyker upp är om du ska driva verksamheten som <strong>enskild firma</strong> eller <strong>aktiebolag</strong>. Valet handlar om tre saker: hur mycket personligt ansvar du tar, hur du beskattas och hur du får ut pengarna. För en hantverkare med dyra materialinköp, garantiåtaganden och kanske anställda får skillnaderna verkliga konsekvenser.</p>

<p>Innan du bestämmer dig: räkna på hur mycket du faktiskt behöver ta betalt för att gå runt i respektive form med vår gratis <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator →</a>. Ett realistiskt timpris avgör mer än bolagsformen om verksamheten bär sig.</p>

<h2>Snabbversionen</h2>
<ul>
<li><strong>Enskild firma:</strong> inget kapitalkrav, enkel att starta och sköta — men du är personligt ansvarig för alla skulder med din privata ekonomi.</li>
<li><strong>Aktiebolag:</strong> kräver 25 000 kr i aktiekapital, ger i princip begränsat ansvar och mer flexibelt uttag (lön + utdelning) — men mer administration och krav.</li>
<li><strong>Bytet lönar sig oftast</strong> när överskottet blir stabilt högt, när risken växer (större projekt, banklån, anställda) och när du vill kunna ta ut vinst som utdelning.</li>
<li>Oavsett form: konsultera en revisor för just din situation — brytpunkter och 3:12-regler ändras.</li>
</ul>

<h2>Ansvar och risk i byggbranschen</h2>
<p>Den största principiella skillnaden är juridisk. I en enskild firma finns ingen gräns mellan dig och företaget — du svarar personligt för alla företagets skulder med dina privata tillgångar. Går ett projekt snett, en kund inte betalar eller ett stort materialparti måste förskotteras, är det din privatekonomi som står som säkerhet.</p>
<p>Ett aktiebolag är en egen juridisk person. Din ekonomiska risk är i princip begränsad till det aktiekapital du satt in. Just i byggbranschen väger det tungt: du hanterar stora inköp, dyra maskiner, garanti- och felansvar för utfört arbete och ofta anställda. Ett enda tvistigt projekt kan bli dyrt, och då är skillnaden mellan begränsat och personligt ansvar avgörande.</p>
<p>Men skölden är inte total. Som företrädare för ett AB kan du drabbas av <strong>personligt betalningsansvar (företrädaransvar)</strong> för obetalda skatter och avgifter. Och när mer än halva det registrerade aktiekapitalet är förbrukat måste styrelsen agera på kapitalbrist och upprätta en kontrollbalansräkning — annars riskerar du personligt ansvar även i AB. Begränsat ansvar förutsätter alltså att du sköter bolaget korrekt.</p>

<h2>Skatten — så beskattas de olika</h2>
<p>Här skiljer sig formerna fundamentalt.</p>
<p>I en <strong>enskild firma</strong> beskattas du på <em>hela överskottet</em> som inkomst av näringsverksamhet — oavsett om du tar ut pengarna eller låter dem stå kvar. Du betalar kommunal och eventuell statlig inkomstskatt plus <strong>egenavgifter på cirka 28,97 %</strong> av överskottet. Ett schablonavdrag på 25 % görs i deklarationen innan slutlig skatt och egenavgifter beräknas. Du kan jämna ut resultatet mellan år med periodiseringsfond och expansionsfond, och balansera lön mot vinst med räntefördelning.</p>
<p>I ett <strong>aktiebolag</strong> betalar bolaget bolagsskatt på vinsten. Du som ägare tar ut en lön — på lönen betalar bolaget <strong>arbetsgivaravgifter på 31,42 % (2026, för anställda födda 1960 eller senare)</strong> — och/eller utdelning enligt 3:12-reglerna.</p>
<p>Den statliga skatten sätter ofta gränsen. För 2026 är skiktgränsen 643 000 kr och <strong>brytpunkten 660 400 kr</strong> (för dig under 66). Över brytpunkten tas 20 % statlig skatt ut på den beskattningsbara förvärvsinkomsten. En enskild firma-ägare beskattas för hela överskottet som förvärvsinkomst — passerar överskottet brytpunkten slår den statliga skatten till på överskjutande del. En AB-ägare kan i stället lägga lönen nära brytpunkten och ta ut ytterligare vinst som lägre beskattad utdelning.</p>

<h2>Uttag och 3:12 — så får du ut pengarna</h2>
<p>I en enskild firma finns ingen lön och inget separat beskattat uttag. Du gör ett <em>eget uttag</em> när du flyttar pengar till dig själv, men det påverkar inte skatten — du är redan beskattad på hela överskottet.</p>
<p>I ett AB är det här den stora fördelen vid högre vinster. Utdelning inom det årliga gränsbeloppet beskattas med <strong>20 %</strong> i kapital (2/3 av 30 %), medan belopp däröver beskattas som förvärvsinkomst. Med förenklingsregeln (schablonbeloppet) får du ett gränsbelopp motsvarande 2,75 × inkomstbasbeloppet året före — vilket för inkomståret 2026 landar på cirka <strong>221 650 kr</strong>. Det innebär att en betydande del av vinsten kan tas ut till 20 % skatt i stället för full förvärvsinkomstbeskattning.</p>
<p>Observera att 3:12-reglerna har varit under reform. Kontrollera aktuellt schablonbelopp och regelverk med din revisor innan du planerar uttag — siffrorna kan ha ändrats.</p>

<h2>När lönar det sig att byta från enskild firma till AB</h2>
<p>Det finns ingen exakt gräns, men tumreglerna brukar knytas till dessa faktorer:</p>
<ul>
<li><strong>Vinstnivå:</strong> när överskottet blir stabilt högt — och särskilt när det passerar brytpunkten — börjar kombinationen lön + utdelning i AB slå full förvärvsinkomstbeskattning i enskild firma.</li>
<li><strong>Riskexponering:</strong> tar du in anställda, större projekt eller banklån växer nyttan av begränsat ansvar snabbt.</li>
<li><strong>Uttagsvilja:</strong> vill du kunna spara vinst i bolaget och ta ut den som utdelning över tid talar det för AB.</li>
</ul>
<p>Verksamheten kan överlåtas eller ombildas till AB, men det finns skatteregler kring hur inkråm och inventarier överförs — ta hjälp av revisor så att bytet inte utlöser onödig beskattning.</p>

<h2>Så går bytet till i praktiken</h2>
<ol>
<li>Registrera aktiebolaget hos Bolagsverket och sätt in aktiekapitalet på 25 000 kr (e-tjänst via verksamt.se).</li>
<li>Ansök om ny F-skatt och momsregistrering för bolaget hos Skatteverket.</li>
<li>Se över och skriv om avtal, försäkringar och eventuella ramavtal så att de gäller bolaget.</li>
<li>Överlåt inkråm, inventarier och pågående uppdrag enligt gällande skatteregler.</li>
<li>Avregistrera den enskilda firman när allt är överfört.</li>
</ol>
<p>Har du anställda följer kollektivavtalsförpliktelser (Byggnads/Byggföretagen) av att du är arbetsgivare — de gäller oavsett bolagsform.</p>

<h2>Så gör du i ByggExp</h2>
<p>Oavsett om du kör enskild firma eller AB samlar ByggExp tidrapportering, projekt och fakturaunderlag på ett ställe. Du fakturerar med rätt moms — inklusive omvänd byggmoms mot andra byggföretag, där fakturan ställs utan moms och märks med att omvänd skattskyldighet gäller — och du sparar underlagen i minst 7 år som lagen kräver. Timmarna dina anställda rapporterar blir direkt till fakturaunderlag, så att du får ut rätt intäkt oavsett bolagsform. ByggExp ger däremot inte skatterådgivning — själva val av bolagsform tar du med din revisor.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha aktiekapital för att starta byggföretag?</h3>
<p>Nej, inte om du väljer enskild firma — där finns inget kapitalkrav. Vill du driva aktiebolag krävs minst 25 000 kr i aktiekapital för ett privat AB, en gräns som gällt sedan 2020.</p>
<h3>Vilken form ger lägst skatt?</h3>
<p>Det beror på vinstnivån. Vid lägre överskott är enskild firma ofta enklare och likvärdig, medan AB vid högre och stabila vinster kan sänka den samlade skatten genom lön upp mot brytpunkten och utdelning till 20 % inom gränsbeloppet. Räkna på ditt eget fall med en revisor.</p>
<h3>Behöver jag F-skatt oavsett form?</h3>
<p>Ja. Både enskild firma och AB behöver godkänd F-skatt för att fakturera som företag — i praktiken ett krav för att ta uppdrag som underentreprenör i bygg. Har du samtidigt anställning kan du som enskild näringsidkare ha FA-skatt.</p>
<h3>Kan jag byta form senare?</h3>
<p>Ja, du kan ombilda en enskild firma till aktiebolag när verksamheten växer. Det finns skatteregler för hur tillgångar överförs, så gör bytet tillsammans med revisor för att undvika onödig beskattning.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna hem ekonomin oavsett form: testa vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator →</a> och kontrollera momsen med <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn →</a>. Vill du se hur tidrapportering och fakturering hänger ihop i praktiken, <a href="/sv/contact">boka en demo →</a> så visar vi upplägget för just ditt byggföretag.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a> och <a href="/sv/blog/fakturera-som-hantverkare">Så fakturerar du som hantverkare</a>.</p>
`.trim();

const ENSKILD: BlogPost = {
  _id: "code-"+"enskild-firma-eller-aktiebolag-bygg",
  title: "Enskild firma eller aktiebolag för byggföretagaren? Så väljer du rätt 2026", slug: "enskild-firma-eller-aktiebolag-bygg", locale: "sv",
  excerpt: "Ansvar, skatt och uttag skiljer sig helt mellan enskild firma och aktiebolag — här är vad byggföretagaren behöver väga in 2026.", tag: "Företagande",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: ENSKILD_HTML,
  seoTitle: "Enskild firma eller AB för bygg | ByggExp", seoDescription: "Enskild firma eller aktiebolag för ditt byggföretag? Jämför ansvar, skatt, uttag och 3:12 — och se när det lönar sig att byta 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T17:00:00.000Z", createdAt: "2026-08-18T17:00:00.000Z", updatedAt: "2026-08-18T17:00:00.000Z",
};

const A_ANLITA_UNDERENTREPRENOR_HTML = `
<p>Att anlita en underentreprenör (UE) är vardag för de flesta byggföretag, men det är också ett av de moment där mest pengar kan gå förlorade om du slarvar. Fel avtalstyp, en UE utan F-skatt eller en dåligt formulerad faktura kan snabbt bli din kostnad – och sedan 2019 kan du dessutom bli betalningsansvarig för UE:ns anställdas löner. Här går vi igenom hela kedjan: skillnaden mot bemanning, kontrollerna du måste göra, vad UE-avtalet ska innehålla, entreprenörsansvaret och skattereglerna som gäller 2026.</p>

<p>Ett tydligt avtal är grunden för hela affären. Börja med ett komplett och strukturerat offertunderlag så att omfattning och pris är låsta redan innan arbetet startar – använd gärna vår gratis <a href="/sv/verktyg/offert-mall">offertmall &rarr;</a> som utgångspunkt.</p>

<h2>UE eller bemanning – vad är skillnaden?</h2>
<p>Skillnaden är avgörande och styr både arbetsmiljöansvar, moms och vilket avtal du ska skriva. En <strong>underentreprenör</strong> utför ett väl avskilt arbete med egen arbetsledning, eget material och egna maskiner – du köper ett resultat. <strong>Bemanning</strong> eller inhyrd personal är ren arbetskraft som hyrs in per timme, där du själv står för arbetsledning och utrustning – du köper arbetstid.</p>
<p>Konsekvenserna är konkreta: vid inhyrd personal bär du som inhyrare i princip hela arbetsmiljöansvaret, medan en UE ansvarar för sina egna medarbetare. Beslutsguiden är enkel – leder och utrustar leverantören själv sitt arbete och levererar ett avgränsat resultat är det en UE. Sitter deras folk under din arbetsledning med din utrustning är det bemanning, oavsett vad avtalet kallas.</p>

<h2>Kontrollera UE:n innan du skriver avtal</h2>
<p>Seriositetskontrollen är inte en formalitet – den skyddar dig mot både ekonomisk risk och dålig publicitet. Gå igenom följande både vid avtalstecknandet och löpande under uppdraget:</p>
<ul>
<li><strong>Godkänd för F-skatt</strong> – kontrollera i Skatteverkets tjänst "Hämta företagsinformation".</li>
<li><strong>Moms- och arbetsgivarregistrering</strong> samt beslutade arbetsgivaravgifter – visas i samma tjänst.</li>
<li><strong>Skatteskulder</strong> – kontrollera hos Kronofogden.</li>
<li><strong>Kollektivavtal eller hängavtal</strong> med Byggnads.</li>
<li><strong>Försäkringar</strong>, ID06-anslutning och referenser från tidigare uppdrag.</li>
</ul>
<p>En UE som inte är godkänd för F-skatt eller som har skatteskulder är en tydlig varningssignal. Dokumentera kontrollerna så att du kan visa att du gjort din del om något ifrågasätts i efterhand.</p>

<h2>UE-avtalet – vad ska stå i det?</h2>
<p>För underentreprenader finns färdiga standardavtal som "back-to-backar" huvudavtalets villkor nedåt i kedjan: <strong>AB-U 07</strong> används tillsammans med AB 04 i utförandeentreprenad, och <strong>ABT-U 07</strong> tillsammans med ABT 06 i totalentreprenad. Poängen är att UE:n binds till samma krav som du själv har mot din beställare, så att inte ett glapp uppstår i mitten. Läs mer om skillnaden mellan huvudavtalen i vår guide om <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06</a>.</p>
<p>Oavsett standardavtal ska följande vara reglerat i UE-kontraktet:</p>
<ul>
<li>Omfattning och tydlig gränsdragning mot andra entreprenörer.</li>
<li>Pris eller à-pris, betalningsplan och fakturavillkor.</li>
<li>Tider, delmål och eventuella viten vid försening.</li>
<li>Hantering av ÄTA-arbeten (ändrings-, tilläggs- och avgående arbeten).</li>
<li>Ansvar, försäkring och eventuell säkerhet.</li>
<li>Villkor för hävning.</li>
</ul>
<p>ÄTA är en av de vanligaste källorna till tvist. Fastställ redan i avtalet hur ändringar ska beställas och prissättas skriftligt – vår <a href="/sv/verktyg/ata-mall">ÄTA-mall &rarr;</a> ger dig ett spårbart underlag som håller genom hela kedjan.</p>

<h2>Entreprenörsansvar för lönefordringar – den dolda risken</h2>
<p>Detta är den risk många missar. Enligt <strong>Lag (2018:1472) om entreprenörsansvar för lönefordringar</strong>, i kraft sedan 1 januari 2019, kan du tvingas betala en UE-anställds lön om UE:n inte gör det. Lagen gäller bygg- och anläggningsverksamhet (uppförande, ombyggnad, underhåll, rivning) och ansvaret är subsidiärt i kedjan: kravet riktas först mot uppdragsgivaren – den entreprenör som anlitat arbetsgivaren – och därefter mot huvudentreprenören.</p>
<p>Fristerna är korta och värda att kunna:</p>
<ul>
<li>Betalningsansvaret inträder <strong>sju helgfria vardagar</strong> efter att entreprenören fått en skriftlig underrättelse om lönefordran (§10).</li>
<li>Uppdragsgivaren har <strong>fjorton helgfria vardagar</strong> på sig att betala; betalar den inte eller kan inte nås träder huvudentreprenörens ansvar in (§7–8).</li>
<li>Ansvaret omfattar inte fordringar som förfallit mer än <strong>tre månader</strong> före underrättelsen (§14).</li>
<li>En huvudentreprenör som fått krav måste inom <strong>sju helgfria vardagar</strong> skriftligen underrätta uppdragsgivaren för att behålla sin regressrätt (§17).</li>
</ul>
<p>Den som betalat har regressrätt mot arbetsgivaren, alltså UE:n – men du får ligga ute med pengarna och driva in dem själv. Skydda dig genom noggrann seriositetskontroll, korta betalningskedjor och avtalsvillkor som ger dig rätt att hålla inne betalning eller kräva ersättning om entreprenörsansvaret utlöses.</p>

<h2>Omvänd byggmoms mellan dig och UE:n</h2>
<p>Vid försäljning av byggtjänster mellan två byggföretag i Sverige gäller <strong>omvänd byggmoms</strong> när köparen mer än tillfälligt säljer byggtjänster (eller är s.k. mellanman). Typfallet är just en UE som fakturerar en huvudentreprenör. Då ska fakturan <strong>sakna moms</strong> och tydligt ange att omvänd skattskyldighet gäller, till exempel "Omvänd betalningsskyldighet gäller". Köparen redovisar och betalar momsen: inköpet tas upp i ruta 24 och den beräknade utgående momsen i ruta 30 i momsdeklarationen (säljaren/UE:n redovisar sin försäljning i ruta 41).</p>
<p>Vanliga fel är att UE:n felaktigt lägger på 25 % moms, eller att formuleringen om omvänd skattskyldighet saknas på fakturan. Kontrollera detta redan när du granskar UE:ns första faktura – rättar du det direkt slipper du krångliga korrigeringar senare.</p>

<h2>Anmälningsskyldighet, kollektivavtal och personalliggare</h2>
<p><strong>UE 2021</strong> är Byggföretagens och Byggnads avtalsvillkor för underentreprenörer och bemanningsföretag. Är UE:n bunden av Byggavtalet ska anlitandet anmälas till Byggnads via blankett UE2021. Är UE:n inte medlem i Byggföretagen, saknar hängavtal, inte är enmansföretag eller inte tillhör Maskinentreprenörerna, ska anlitandet i stället förhandlas med Byggnads enligt MBL §38–40.</p>
<p>På byggarbetsplatser krävs dessutom <strong>elektronisk personalliggare (ID06)</strong>. Varje entreprenör för sin egen del – egna anställda och egen inhyrd personal. Bristerna kostar: kontrollavgiften är 12 500 kr i grundavgift plus 2 500 kr per person som är verksam men saknas i liggaren. Har byggherren inte anmält byggstart och plats till Skatteverket blir avgiften 25 000 kr, och 12 500 kr om byggherren inte tillhandahållit utrustning för personalliggaren.</p>

<h2>Sammanfattning – 6 steg innan du anlitar en UE</h2>
<ol>
<li>Avgör om du behöver en UE eller bemanning – det styr avtal, moms och arbetsmiljöansvar.</li>
<li>Kontrollera F-skatt, moms- och arbetsgivarregistrering, skatteskulder och kollektivavtal.</li>
<li>Skriv UE-avtal (AB-U 07 eller ABT-U 07) som back-to-backar dina egna villkor.</li>
<li>Reglera ÄTA, betalningsplan, viten, försäkring och hävning skriftligt.</li>
<li>Ha koll på entreprenörsansvaret och bygg in skydd i avtalet.</li>
<li>Säkra rätt fakturering med omvänd byggmoms och sköt personalliggaren.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att strukturera UE-affären från offert till slutfaktura. Du skapar tydliga offertunderlag och UE-kontrakt med rätt omfattning, priser och tider, och håller ÄTA-arbeten spårbara så att inget faller mellan stolarna i kedjan. Alla underlag samlas per projekt, vilket gör det enkelt att dokumentera dina seriositetskontroller och behålla ordning på fakturor och avtal i minst sju år. ByggExp fattar inga beslut åt dig om F-skatt eller entreprenörsansvar – men ger dig strukturen som gör att du hinner göra kontrollerna rätt.</p>

<h2>Vanliga frågor</h2>
<h3>Måste en underentreprenör vara godkänd för F-skatt?</h3>
<p>Ja, du bör alltid kontrollera att UE:n är godkänd för F-skatt innan du skriver avtal. Det gör du i Skatteverkets tjänst "Hämta företagsinformation", som även visar moms- och arbetsgivarregistrering. Skatteskulder kontrollerar du hos Kronofogden. Gör kontrollen både vid start och löpande under uppdraget.</p>
<h3>Kan jag bli betalningsskyldig för underentreprenörens anställdas löner?</h3>
<p>Ja. Enligt Lag (2018:1472) om entreprenörsansvar för lönefordringar kan du som uppdragsgivare eller huvudentreprenör bli betalningsskyldig om UE:n inte betalar lön till sina anställda. Ansvaret inträder sju helgfria vardagar efter skriftlig underrättelse. Du har sedan regressrätt mot UE:n.</p>
<h3>Ska underentreprenören fakturera med moms?</h3>
<p>Nej, inte när omvänd byggmoms gäller. När en UE fakturerar en huvudentreprenör för byggtjänster och köparen mer än tillfälligt säljer byggtjänster ska fakturan sakna moms och ange att omvänd skattskyldighet gäller. Köparen redovisar inköpet i ruta 24 och den beräknade utgående momsen i ruta 30 (ruta 41 används av säljaren).</p>
<h3>Vad är skillnaden mellan underentreprenör och bemanning?</h3>
<p>En underentreprenör utför ett avgränsat arbete med egen arbetsledning, eget material och egna maskiner. Bemanning är inhyrd arbetskraft per timme där du själv leder arbetet och står för utrustningen. Vid inhyrd personal bär du i princip hela arbetsmiljöansvaret.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för en trygg UE-affär redan i offertskedet med vår <a href="/sv/verktyg/offert-mall">offertmall &rarr;</a>, och håll ändringar spårbara med <a href="/sv/verktyg/ata-mall">ÄTA-mallen &rarr;</a>. Vill du se hur ByggExp håller ihop offerter, UE-avtal och fakturor per projekt? <a href="/sv/contact">Boka en demo &rarr;</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – skillnaden mellan utförande- och totalentreprenad</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag – så gör du</a>.</p>
`;

const A_ANLITA_UNDERENTREPRENOR: BlogPost = {
  _id: "code-"+"anlita-underentreprenor",
  title: "Anlita underentreprenör – så gör du rätt (UE-avtal, entreprenörsansvar och skatteregler 2026)", slug: "anlita-underentreprenor", locale: "sv",
  excerpt: "Komplett guide för byggföretag som ska anlita underentreprenör – avtal, kontroller, entreprenörsansvar för lönefordringar och skatteregler enligt 2026 års regelverk.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ANLITA_UNDERENTREPRENOR_HTML,
  seoTitle: "Anlita underentreprenör 2026 | ByggExp", seoDescription: "Så anlitar du underentreprenör rätt: UE-avtal, entreprenörsansvar för lönefordringar, omvänd byggmoms och skillnaden UE vs bemanning. Checklista 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:00:00.000Z", createdAt: "2026-08-18T18:00:00.000Z", updatedAt: "2026-08-18T18:00:00.000Z",
};

const A_A_CONTO_FAKTURERING_BYGG_HTML = `
<p>Du betalar löner och material innan projektet ens är halvvägs, men din kund har 60 dagar på sig att betala en enda slutfaktura. Det är klassiska likviditetsfällan i entreprenad: pengarna ut i förskott, pengarna in långt senare. Lösningen heter à conto-fakturering — att fakturera löpande mot en betalningsplan under projektets gång i stället för att vänta på en stor slutfaktura. Rätt upplagd förvandlar den 60 dagars betaltid från ett kassaflödesproblem till ett förutsägbart intäktsflöde varje månad.</p>

<p>Vill du komma igång direkt kan du använda <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall -&gt;</a> och sätta upp dina à conto-poster med separata rader för arbete och material.</p>

<h2>Vad är à conto-fakturering?</h2>
<p>À conto betyder att kontraktssumman betalas i delbetalningar allt eftersom arbetet fortskrider, fakturerat mot avtalade delmål, med en slutavräkning vid godkänd slutbesiktning. Det är inte samma sak som förskott, där kunden betalar för arbete som ännu inte utförts. Vid à conto fakturerar du en del av det redan utförda arbetet, och den sista avstämningen görs när projektet är klart och besiktat.</p>
<p>Skillnaden mot en enda slutfaktura är enkel: i stället för att lägga ut hela kostnaden för arbete och material själv under hela byggtiden får du in betalning löpande. Det vanligaste upplägget i entreprenad är just en betalningsplan med delbetalning efter utförd del och slutavräkning vid godkänd slutbesiktning. À conto är alltså inte ett kryphål — det är standardpraxis i branschen.</p>

<h2>Varför à conto frigör kapital vid 60 dagars betaltid</h2>
<p>Ta ett projekt på tre månader. Med en enda slutfaktura plus 60 dagars betaltid får du in pengarna först ungefär fyra till fem månader efter att du började betala löner och leverantörer. Under hela den tiden binder du eget kapital — eller lånar dyrt — för att täcka kostnaderna.</p>
<p>Fakturerar du i stället à conto varje månad kommer pengar in med jämna mellanrum genom hela projektet. Även med 60 dagars betaltid på varje delfaktura krymper glappet mellan utlägg och inbetalning dramatiskt, eftersom du hela tiden har fakturor på väg in. Mellan näringsidkare är den lagstadgade betaltiden max 60 dagar om inget annat uttryckligen avtalats och det inte är grovt oskäligt mot borgenären. Grundregeln i räntelagen är annars 30 dagar. Entreprenad kör ofta 60–90 dagars villkor, vilket gör den löpande faktureringen ännu viktigare — ju längre betaltid, desto mer tjänar du på att fakturera tidigt och ofta.</p>

<h2>Reglerna i AB 04/ABT 06</h2>
<p>AB 04 och ABT 06 är standardavtalen i byggsektorn, och kapitel 6 styr betalningarna. En grundprincip är att arbete som anges på en faktura ska ha utförts, och en faktura ska betalas inom 30 dagar om inget annat avtalats.</p>
<p>Viktigt att känna till är reglerna om innehållen ersättning. Enligt AB 04 kap 6 §12 får beställaren hålla inne 10 % av värdet på utförda kontraktsarbeten som säkerhet — men bara när det <strong>inte</strong> finns någon betalningsplan. Det innehållna beloppet får aldrig överstiga 5 % av den totala kontraktssumman. Efter godkänd slutbesiktning får beställaren hålla inne 5 % av kontraktssumman till dess att fel är avhjälpta.</p>
<p>Den praktiska slutsatsen: avtala en skriftlig betalningsplan. Då slipper du huvudregeln om 10 % innehållande, och båda parter vet exakt när varje delbetalning ska ske. Håller beställaren inne betalning utan att ange skäl är denne dessutom skyldig att betala ränta på det innehållna beloppet från den dag det rätteligen skulle ha betalats.</p>

<h2>Moms: à conto vs fakturadatummetoden</h2>
<p>Bygg- och installationstjänster använder normalt fakturadatummetoden: den utgående momsen redovisas i den period fakturan utfärdas. Har tjänsten betalats innan den fakturerats redovisas momsen när betalning skedde, och har den varken fakturerats eller betalats senast andra kalendermånaden efter att tjänsten utfördes redovisas den då. En tjänst räknas som utförd när kunden godkänner den, vanligtvis vid godkänd slutbesiktning.</p>
<p>För à conto och förskott gäller en viktig avvikelse: säljaren ska redovisa utgående moms för den period då betalningen tas emot, även om à conto-fakturan utfärdats ett annat beskattningsår än när betalningen kommer in.</p>
<p>Säljer du byggtjänster till ett annat företag i byggsektorn gäller omvänd byggmoms — du lägger <strong>ingen</strong> moms på fakturan, utan köparen redovisar och betalar momsen. Normal momssats för byggtjänster är annars 25 %. En vanlig miss är att felaktigt lägga på 25 % moms på en à conto-faktura som omfattas av omvänd skattskyldighet. Kontrollera alltid vem köparen är innan du fakturerar. Omvänd byggmoms gäller inte vid försäljning till privatperson eller icke momsregistrerad köpare.</p>

<h2>ROT på à conto-fakturor för privatkunder</h2>
<p>Fakturerar du privatpersoner à conto kan ROT-avdraget appliceras redan på delfakturorna. Från 1 januari 2026 är ROT-avdraget 30 % av arbetskostnaden inklusive moms, tillbaka på ordinarie nivå efter den tillfälliga höjningen i maj 2025. Bara arbete kvalificerar — inte material, resor eller maskiner. Taket är 50 000 kr ROT per person och år, och ROT och RUT tillsammans max 75 000 kr per person och år.</p>
<p>På en ROT à conto-faktura måste kundens personnummer anges, och du begär ROT-utbetalningen från Skatteverket via e-tjänsten, normalt efter att fakturan är betald. Momsen beräknas på hela beloppet — själva skattereduktionen är en sak mellan kunden och staten, inte något du drar av på fakturans momsunderlag.</p>

<h2>Praktiska tips för din betalningsplan</h2>
<ul>
<li>Sätt realistiska delmål som matchar när dina faktiska kostnader uppstår — inte jämna klumpsummor, utan poster kopplade till utförda moment.</li>
<li>Skriv in betalningsplanen i avtalet, så att den ersätter huvudregeln om 10 % innehållande.</li>
<li>Håll separata rader för arbete och material på fakturan — särskilt viktigt vid ROT, där bara arbetskostnaden ger avdrag.</li>
<li>Fakturera direkt när ett delmål är klart. Varje dags fördröjning i din egen fakturering förlänger betaltiden i praktiken.</li>
<li>Använd dröjsmålsränta som påtryckningsmedel mot sena betalare. Enligt räntelagen är den referensräntan plus 8 procentenheter. Referensräntan för andra halvåret 2026 är 2,00 %, vilket ger 10,00 % i dröjsmålsränta.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>Med ByggExp bygger du fakturaunderlagen från det arbete som faktiskt utförts. Vår <a href="/sv/verktyg/faktura-mall">fakturamall</a> hjälper dig att lägga upp à conto-poster med separata rader för arbete och material, ange personnummer för ROT-kunder och markera omvänd skattskyldighet vid B2B-försäljning i byggsektorn. Poängen är enkel: gör det snabbt och korrekt att fakturera löpande genom projektet, så att betalningsplanen faktiskt följs i stället för att glömmas bort. ByggExp beslutar inte om skatt eller ROT åt dig — det gör Skatteverket — men verktyget minskar risken för de vanliga felen på à conto-fakturor.</p>

<h2>Vanliga frågor</h2>
<h3>Får man fakturera à conto i entreprenad?</h3>
<p>Ja. Det vanligaste upplägget i entreprenad är en betalningsplan med delbetalning efter utfört arbete och slutavräkning vid godkänd slutbesiktning. Enligt AB 04/ABT 06 kap 6 ska arbete som anges på en faktura vara utfört, och betalning ska ske inom 30 dagar om inget annat avtalats. Finns en skriftlig betalningsplan slipper du dessutom huvudregeln om 10 % innehållen ersättning.</p>
<h3>När redovisas momsen på à conto?</h3>
<p>För à conto och förskott ska den utgående momsen redovisas för den period då betalningen tas emot — även om fakturan utfärdats ett annat beskattningsår. Det skiljer sig från fakturadatummetoden som annars gäller för byggtjänster. Säljer du till ett annat byggföretag gäller omvänd byggmoms, och då lägger du ingen moms alls på fakturan.</p>
<h3>Kan man kombinera à conto med ROT-avdrag?</h3>
<p>Ja. ROT-avdraget kan appliceras på à conto-fakturor till privatpersoner. 2026 är avdraget 30 % av arbetskostnaden, med tak på 50 000 kr per person och år. Ange kundens personnummer på fakturan och begär utbetalningen från Skatteverket, normalt efter att fakturan är betald. Bara arbetskostnaden ger avdrag — inte material.</p>

<h2>Kom igång</h2>
<p>À conto-fakturering vänder 60 dagars betaltid från en likviditetsrisk till ett förutsägbart kassaflöde — förutsatt att du sätter en genomtänkt betalningsplan och fakturerar löpande. Börja med <a href="/sv/verktyg/faktura-mall">vår fakturamall</a> och sätt upp dina delposter redan i dag. Vill du se hur ByggExp kan effektivisera hela flödet från tidrapport till faktura? <a href="/sv/contact">Boka en demo här.</a></p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>, <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på fakturor i bygg</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_A_CONTO_FAKTURERING_BYGG: BlogPost = {
  _id: "code-"+"a-conto-fakturering-bygg",
  title: "À conto-fakturering i bygg: så frigör du kapital när betaltiden är 60 dagar", slug: "a-conto-fakturering-bygg", locale: "sv",
  excerpt: "À conto-fakturering vänder 60 dagars betaltid från en likviditetsrisk till förutsägbart kassaflöde — så gör du i praktiken med rätt betalningsplan, moms och ROT.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_A_CONTO_FAKTURERING_BYGG_HTML,
  seoTitle: "À conto-fakturering i bygg | ByggExp", seoDescription: "Så använder du à conto och betalningsplan för att frigöra kapital när B2B-betaltiden är 60 dagar. Regler i AB 04/ABT 06, moms och ROT förklarat.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:03:00.000Z", createdAt: "2026-08-18T18:03:00.000Z", updatedAt: "2026-08-18T18:03:00.000Z",
};

const A_ENTREPRENORSANSVAR_LON_HTML = `
<p>Du har handlat upp en underentreprenör i god tro, jobbet är utfört och fakturan betald. Sedan går UE:et i konkurs – eller struntar helt enkelt i att betala sina anställda. Plötsligt står montörernas löner obetalda, och kravet landar inte hos deras arbetsgivare utan hos <em>dig</em>, som anlitat kedjan. Det är kärnan i entreprenörsansvaret för lönefordringar. I den här guiden går vi igenom hur lagen fungerar, hur ansvaret vandrar uppåt i entreprenörskedjan och den avgörande 7-dagarsfristen som avgör om du blir betalningsskyldig.</p>

<p>Har du ordning på avtal och ÄTA-hantering i UE-ledet står du starkare den dag ett krav dyker upp – börja med vår gratis <a href="/sv/verktyg/ata-mall">ÄTA-mall</a> för att hålla dokumentationen på plats.</p>

<h2>Vad är entreprenörsansvar för lönefordringar?</h2>
<p>Reglerna finns i <strong>Lag (2018:1472) om entreprenörsansvar för lönefordringar</strong>, som trädde i kraft den 1 januari 2019. Bakgrunden är EU:s utstationeringsdirektiv från 2014, som ålägger medlemsstaterna att skydda arbetstagare i byggsektorn mot oseriösa arbetsgivare längre ner i kedjan.</p>
<p>Lagen gäller <strong>bygg- och anläggningsverksamhet</strong> i Sverige – uppförande, iståndsättning, underhåll, ombyggnad eller rivning. Poängen är enkel: en arbetstagare som inte får sin lön av sin egen arbetsgivare ska kunna vända sig uppåt i entreprenörskedjan och få betalt av någon som är solvent. För dig som huvudentreprenör betyder det att du kan tvingas betala för löner du aldrig avtalat om, till personer du kanske aldrig träffat.</p>

<h2>Kedjan – vem ansvarar för vad?</h2>
<p>Ansvaret är uppbyggt i två steg och följer entreprenörskedjan uppåt:</p>
<ol>
<li><strong>Arbetsgivaren</strong> – den som anställt arbetstagaren och i första hand ska betala lönen.</li>
<li><strong>Uppdragsgivaren</strong> – den entreprenör som anlitat arbetsgivaren som underentreprenör (§3). Hit vänder sig arbetstagaren i första hand om lönen uteblir.</li>
<li><strong>Huvudentreprenören</strong> – entreprenören närmast byggherren/beställaren. Denne har ett subsidiärt ansvar i andra hand om uppdragsgivaren inte betalar.</li>
</ol>
<p>Ett konkret exempel: Byggherren anlitar <strong>Huvud Bygg AB</strong> (huvudentreprenör). Huvud Bygg anlitar <strong>Mellan Montage AB</strong> (uppdragsgivare), som i sin tur anlitar <strong>Golv &amp; Spackel AB</strong> (arbetsgivare). Golvarna på Golv &amp; Spackel får ingen lön. De vänder sig först till Mellan Montage. Betalar inte Mellan Montage kan kravet gå vidare till Huvud Bygg – längst upp i kedjan. Ansvaret hoppar alltså inte över mellanledet direkt, men det landar till slut hos den som toppar kedjan.</p>

<h2>7-dagarsfristen och de andra tidsgränserna</h2>
<p>Hela systemet styrs av tidsfrister räknade i <strong>helgfria vardagar</strong> – inte kalenderdagar. Det är viktigt att hålla isär:</p>
<ul>
<li><strong>7 helgfria vardagar (§10):</strong> Uppdragsgivarens betalningsansvar inträder sju helgfria vardagar efter att uppdragsgivaren fått en skriftlig underrättelse om lönefordran. Detta är den centrala 7-dagarsfristen.</li>
<li><strong>14 helgfria vardagar (§8):</strong> Huvudentreprenörens subsidiära ansvar inträder om uppdragsgivaren inte betalat inom fjorton helgfria vardagar från det att uppdragsgivaren fått underrättelsen.</li>
<li><strong>5 helgfria vardagar (§18):</strong> Informationsplikten. En entreprenör måste senast fem helgfria vardagar efter en skriftlig begäran lämna ut kontaktuppgifter m.m. till en arbetstagare eller arbetstagarorganisation som efterfrågar dem.</li>
<li><strong>Tremånadersgränsen (§14):</strong> Ansvaret omfattar inte lönefordringar som förfallit till betalning mer än tre månader före det att den ansvarige fick underrättelsen. Gamla lönekrav faller alltså utanför.</li>
</ul>
<p>Att fristerna räknas i helgfria vardagar gör att en verklig ledtid ofta blir längre än siffran antyder – men det innebär också att du måste agera direkt när en underrättelse dyker upp. Ligg inte på den.</p>

<h2>Så går ett krav till i praktiken</h2>
<p>Kravet inleds med en <strong>skriftlig underrättelse</strong> om lönefordran. Den ska enligt §11–12 innehålla:</p>
<ul>
<li>Arbetstagarens namn</li>
<li>Lönebeloppet</li>
<li>Arbetsperioden fordran avser</li>
<li>Betalningsuppgifter</li>
</ul>
<p>Underrättelsens innehåll sätter ramen för vad du kan bli skyldig att betala – ansvaret styrs av vad som faktiskt står i den. Du är inte rättslös: du får framställa <strong>samma invändningar mot kravet som arbetsgivaren själv hade kunnat göra</strong>. Är lönen redan betald, är beloppet fel eller avser fordran en period utanför tremånadersgränsen, kan du invända mot det. Tvister prövas enligt reglerna om arbetstvister (lag 1974:371), §20.</p>

<h2>Regressrätt – kan du få tillbaka pengarna?</h2>
<p>Betalar du som huvudentreprenör en annans lön har du <strong>regressrätt</strong> mot både arbetsgivaren och uppdragsgivaren. Du kan alltså kräva tillbaka det utlagda beloppet. Problemet i praktiken är förstås att den som inte betalade lönen ofta är på obestånd – regressrätten är bara värd något om det finns pengar att hämta.</p>
<p>Ett handgripligt råd: en huvudentreprenör som blivit underrättad bör inom <strong>sju helgfria vardagar</strong> skriftligen meddela uppdragsgivaren om kravet, för att behålla regressmöjligheten mot denne. Missar du det steget kan du gå miste om rätten att kräva tillbaka pengarna från mellanledet. Ha en fast rutin för det.</p>

<h2>Byggavtalet gäller före lagen</h2>
<p>Är ditt företag bundet av <strong>Byggavtalet</strong> (Byggföretagen–Byggnads) gäller kollektivavtalets huvudentreprenörsansvar enligt <strong>Bilaga D</strong> i stället för lagen. Byggavtalets modell fredades när lagen infördes, och kan sträcka sig längre eller vara striktare än lagens tvåstegsmodell. Med andra ord: för många seriösa byggföretag är det kollektivavtalet – inte lagen – som styr det faktiska ansvaret. Kontrollera därför alltid vilket regelverk som gäller för just ert projekt innan ni bedömer er exponering.</p>

<h2>Så skyddar du dig som huvudentreprenör</h2>
<p>Ansvaret går inte att avtala bort, men risken går att minska rejält genom kontroll i UE-ledet. Checklista innan och under uppdraget:</p>
<ul>
<li>Kontrollera underentreprenören <strong>innan avtal</strong>: kollektivavtal, giltig F-skatt, registrering för moms och arbetsgivaravgifter.</li>
<li>Kräv <strong>ID06</strong> och håll koll på vilka som faktiskt jobbar på arbetsplatsen.</li>
<li>Teckna <strong>skriftliga avtal</strong> med varje led och dokumentera hela kedjan – vem har anlitat vem.</li>
<li>Håll <strong>kedjan kort</strong>. Ju fler led under dig, desto större risk att en oseriös aktör smyger in.</li>
<li>Ha en <strong>rutin för underrättelser</strong> så att en inkommen skriftlig begäran hanteras inom fristen och inte blir liggande.</li>
<li>Dokumentera ÄTA, tidrapporter och avtal löpande så att du snabbt kan bemöta ett krav med rätt underlag.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte juridisk rådgivning, men gör grundarbetet enklare. Med <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> håller du ordning på ändrings- och tilläggsarbeten mot varje UE, så att avtalskedjan är dokumenterad och spårbar. Samlad projekt- och tidrapporteringsdata gör att du snabbt kan ta fram underlag om ett lönekrav skulle dyka upp – och veta vilka som faktiskt arbetat, när och åt vem. Kort sagt: bättre dokumentation i UE-ledet gör dig snabbare och tryggare den dag en underrättelse landar på bordet.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag betala även om jag redan betalat UE:et fullt ut?</h3>
<p>Ja, entreprenörsansvaret är fristående från din betalning till underentreprenören. Att du betalat fakturan skyddar dig inte mot arbetstagarens lönekrav. Däremot har du regressrätt och kan kräva tillbaka beloppet av arbetsgivaren och uppdragsgivaren – förutsatt att det finns pengar att hämta.</p>
<h3>Vad räknas som helgfria vardagar?</h3>
<p>Helgfria vardagar är måndag till fredag exklusive helgdagar. Lördagar, söndagar och röda dagar räknas inte in i fristerna på 5, 7 och 14 dagar. Det innebär att den faktiska kalendertiden ofta blir längre än siffran, men du bör ändå agera omgående när en underrättelse kommer in.</p>
<h3>Kan jag bli ansvarig för gamla lönekrav?</h3>
<p>Nej. Enligt tremånadersgränsen (§14) omfattar ansvaret inte lönefordringar som förfallit till betalning mer än tre månader innan du fick underrättelsen. Krav som avser äldre perioder faller utanför ditt ansvar.</p>
<h3>Gäller lagen eller kollektivavtalet för mitt företag?</h3>
<p>Är ni bundna av Byggavtalet gäller kollektivavtalets huvudentreprenörsansvar (Bilaga D) i stället för Lag (2018:1472), och det kan vara striktare. Är ni inte kollektivavtalsbundna gäller lagens tvåstegsmodell. Kontrollera vilket regelverk som styr innan ni bedömer er risk i ett projekt.</p>

<h2>Kom igång</h2>
<p>Ansvaret följer med den som toppar entreprenörskedjan – och koll på UE-ledet är alltid billigare än att betala andras löner. Börja med att strukturera avtal och ändringsarbeten med vår <a href="/sv/verktyg/ata-mall">ÄTA-mall</a>, och boka en <a href="/sv/contact">demo</a> så visar vi hur du får ordning på dokumentationen i hela kedjan.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a> och <a href="/sv/blog/bemanning-och-personalplanering">Bemanning och personalplanering</a>.</p>
`;

const A_ENTREPRENORSANSVAR_LON: BlogPost = {
  _id: "code-"+"entreprenorsansvar-lon",
  title: "Entreprenörsansvar för lön – när huvudentreprenören betalar UE:s löner", slug: "entreprenorsansvar-lon", locale: "sv",
  excerpt: "När en underentreprenör struntar i lönerna kan kravet landa hos dig som toppar kedjan – så fungerar entreprenörsansvaret och den avgörande 7-dagarsfristen.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ENTREPRENORSANSVAR_LON_HTML,
  seoTitle: "Entreprenörsansvar lön | ByggExp", seoDescription: "Går din underentreprenör i konkurs kan lönekravet landa hos dig. Så fungerar kedjan, 7-dagarsfristen och hur du skyddar dig som huvudentreprenör.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:06:00.000Z", createdAt: "2026-08-18T18:06:00.000Z", updatedAt: "2026-08-18T18:06:00.000Z",
};

const A_FAST_PRIS_ELLER_LOPANDE_RAKNING_HTML = `
<p>Valet mellan fast pris och löpande räkning är inte en fråga om smak – det avgör vem som bär risken när jobbet drar iväg, och hur lätt du får betalt för det som tillkommer. Väljer du fel modell för fel projekt sitter du antingen med en fördyring du inte får ersättning för, eller en faktura kunden bestrider. Den här guiden ger dig ett konkret sätt att välja, och en rutin för att fakturera ÄTA separat utan att hamna i tvist.</p>

<p>Grunden i allt är ett tydligt avtal och en offert som anger prismodellen svart på vitt. Börja där – bygg din offert i <a href="/sv/verktyg/offert-mall">vår gratis offertmall →</a> så att ersättningsform, arvode och à-priser står skrivna redan innan spaden är i marken.</p>

<h2>De två prismodellerna i praktiken</h2>

<p><strong>Fast pris</strong> innebär att du lämnar ett förutbestämt totalbelopp för ett avtalat arbete. Blir det dyrare än du räknat bär du fördyringsrisken själv – kunden får förutsägbarhet, du får risken. Det passar när omfattningen är tydlig och du kan kalkylera mängder och tid med säkerhet.</p>

<p><strong>Löpande räkning</strong> innebär att du får betalt för verifierade självkostnader plus ett avtalat entreprenörarvode – ett procentuellt påslag. Här bär beställaren mängd- och tidsrisken. Du får betalt för det arbete som faktiskt utförs, förutsatt att du kan styrka kostnaderna.</p>

<p>Skillnaden i praktiken:</p>

<ul>
<li><strong>Risk:</strong> Fast pris – du bär fördyringen. Löpande räkning – kunden bär mängdrisken.</li>
<li><strong>Kassaflöde:</strong> Fast pris ger ofta betalning mot betalplan/etapper. Löpande räkning faktureras efterhand mot redovisad tid och material.</li>
<li><strong>Dokumentation:</strong> Fast pris kräver mindre löpande verifiering. Löpande räkning kräver att varje krona kan styrkas.</li>
</ul>

<h2>Självkostnadsprincipen som default</h2>

<p>Vid osäker omfattning är löpande räkning nästan alltid tryggast för dig som utförare. Modellen vilar på självkostnadsprincipen enligt AB 04 kap 6 §9 (motsvarande i ABT 06): du ersätts för verifierade självkostnader plus ett entreprenörarvode enligt 6:9 p. 8. Vad du får betalt för är i huvudsak arbetstid, material, underentreprenörer och maskiner – och ovanpå det ett procentuellt arvode. Det finns ingen lagstadgad procentsats; nivån avtalas och varierar med projektets komplexitet och risk. Skriv den siffran i offerten.</p>

<p>Baksidan av tryggheten är dokumentationsskyldigheten. Vid löpande räkning ska samtliga självkostnader kunna styrkas – tid, material och UE. Undantaget är det som täcks av det avtalade procentuella arvodet. Bristande redovisning är en av de vanligaste grunderna för att en beställare bestrider fakturan eller kräver pengar tillbaka. Regeln är enkel: ingen redovisning, ingen betalning. Logga tid löpande, spara underlag och specificera – varje dag, inte i efterhand.</p>

<p>Behöver du sätta en trovärdig timkostnad som täcker dina verkliga kostnader kan du räkna baklänges i <a href="/sv/verktyg/timpris-kalkylator">vår timpris-kalkylator →</a> innan du avtalar arvode och à-priser.</p>

<h2>Så väljer du prismodell – beslutsguide</h2>

<ul>
<li><strong>Välj fast pris</strong> när omfattningen är väl definierad, ritningar och mängder är klara, och kunden efterfrågar förutsägbarhet. Se bara till att din kalkyl har marginal – fördyringen är din.</li>
<li><strong>Välj löpande räkning</strong> när omfattningen är osäker: rivning, äldre hus, badrum där du inte vet vad som göms bakom kaklet, eller arbeten där dolda fel är sannolika.</li>
<li><strong>Mellanläge:</strong> takpris (löpande räkning med ett tak) eller en ungefärlig prisuppgift. Här lurar 15 %-fällan mot konsument – mer om den nedan.</li>
</ul>

<h2>Regelverket du inte får missa mot konsument</h2>

<p>Jobbar du mot privatperson gäller konsumenttjänstlagen (1985:716), och den sätter ramar du måste känna till.</p>

<p><strong>§36 – skäligt pris och 15 %-regeln.</strong> Har ni inte avtalat pris ska konsumenten betala vad som är skäligt med hänsyn till arbetets art och gängse pris. Har du lämnat en <em>ungefärlig prisuppgift</em> får den inte överskridas med mer än 15 %, om ni inte avtalat en annan gräns eller du har rätt till pristillägg enligt §38. Räkneexempel: en ungefärlig prisuppgift på 100 000 kr får sluta på högst 115 000 kr. Vill du ta mer måste merkostnaden ha stöd i tilläggsarbete eller ÄTA enligt §38.</p>

<p><strong>§40 – specificerad räkning.</strong> På konsumentens begäran ska du ställa ut en specificerad, kostnadsfri räkning. Är arbetet inte utfört till fast pris <em>måste</em> räkningen visa hur priset beräknats – timmar, à-pris och material. Vid fast pris behöver du inte visa kalkylen, men kunden har ändå rätt att se att avtalat arbete utförts.</p>

<p><strong>§8 och §38 – tilläggsarbete.</strong> Innan du utför tilläggsarbete ska du underrätta konsumenten och begära anvisningar. Utan kontakt får du utföra det bara om priset är obetydligt i förhållande till det avtalade, eller om särskilda skäl talar för att kunden ändå vill ha det gjort.</p>

<p>För konsumententreprenader använder du i praktiken Hantverkarformuläret 17 för mindre arbeten och ABS 18 för ny- och tillbyggnad av småhus. Det är branschgemensamma standardavtal framtagna av bland andra Konsumentverket, Villaägarna och Byggföretagen, och de reglerar pris, ÄTA och betalning på ett sätt som minskar tvistrisken.</p>

<h2>ÄTA – fakturera ändringar separat utan tvist</h2>

<p>ÄTA-arbeten (ändrings-, tilläggs- och avgående arbeten) förekommer även vid löpande räkning. Ersättningsformen anger bara <em>hur</em> entreprenaden ersätts, inte dess <em>omfattning</em>. ÄTA är ett av de vanligaste tvisteämnena i svensk entreprenadjuridik – under AB 04/ABT 06 ska ÄTA anmälas skriftligen utan dröjsmål, annars riskerar rätten till ersättning att falla bort och beställaren att bestrida fakturan. En muntligt godkänd ÄTA som inte dokumenterats räknas i praktiken som tvistig.</p>

<p>Checklista som håller ÄTA tvistfri:</p>

<ol>
<li>Anmäl skriftligt utan dröjsmål – innan arbetet startar.</li>
<li>Få skriftligt godkännande av kunden innan du sätter igång.</li>
<li>Fakturera ÄTA på egen orderrad eller separat faktura, med hänvisning till aktuell beställning.</li>
<li>Ange ersättningsform för just den posten: à-pris, löpande räkning eller fast pris.</li>
</ol>

<h2>ROT och fakturering 2026</h2>

<p>ROT-avdraget är 2026 tillbaka på 30 % av arbetskostnaden, max 50 000 kr per person och år. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och förlängdes inte. Rot och rut delar ett gemensamt tak på 75 000 kr per person och år, varav rot får utgöra högst 50 000 kr.</p>

<p>Praktiskt betyder det: håll koll på kundens årstak, särskilt vid löpande räkning där slutsumman inte är känd på förhand. Separera alltid arbetskostnad från material på fakturan – ROT beräknas bara på arbetet. En separat ÄTA-faktura gör dessutom ROT-administrationen enklare eftersom arbetskostnaden hålls isär.</p>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp hjälper dig sätta upp rutinen en gång och sedan följa den. Du skriver offert med vald prismodell, avtalat arvode och à-priser i <a href="/sv/verktyg/offert-mall">offertmallen</a>, räknar fram en hållbar timkostnad i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>, och dokumenterar varje ändring i <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a> så att godkännandet finns skriftligt innan arbetet börjar. Verktygen ersätter inte juridisk rådgivning eller standardavtalen, men de gör det enkelt att göra rätt: prismodell i avtalet, tid loggad löpande och ÄTA separerad från grunduppdraget.</p>

<h2>Vanliga frågor</h2>

<h3>Är löpande räkning dyrare för kunden?</h3>
<p>Inte nödvändigtvis. Vid fast pris lägger du in en riskmarginal för att täcka fördyringar du inte kan förutse. Vid löpande räkning betalar kunden bara för det som faktiskt utförs plus ditt arvode. Vid osäker omfattning blir löpande ofta rättvisare för båda parter – men kräver att du redovisar varje kostnad.</p>

<h3>Måste jag lämna fast pris om kunden kräver det?</h3>
<p>Nej. Prismodellen är en avtalsfråga ni kommer överens om. Är omfattningen osäker kan du föreslå löpande räkning med ett takpris, så får kunden ett tak att förhålla sig till utan att du tvingas bära hela fördyringsrisken.</p>

<h3>Vad händer om jag glömmer anmäla en ÄTA?</h3>
<p>Under AB 04/ABT 06 ska ÄTA anmälas skriftligen utan dröjsmål. Anmäler du för sent riskerar rätten till ersättning att falla bort eller preskriberas, och beställaren kan bestrida fakturan. En muntlig överenskommelse som inte dokumenterats räknas i praktiken som tvistig – därför ska godkännandet alltid vara skriftligt före start.</p>

<h3>Får jag överskrida offerten?</h3>
<p>Mot konsument får en ungefärlig prisuppgift överskridas med högst 15 % om ni inte avtalat annat, enligt konsumenttjänstlagen §36. Utöver det krävs stöd i tilläggsarbete eller pristillägg enligt §38. Ett avtalat fast pris ligger fast om det inte handlar om godkänd ÄTA.</p>

<h2>Kom igång</h2>

<p>Sammanfattningen är enkel: välj löpande räkning som default när omfattningen är osäker, dokumentera allt löpande och håll ÄTA separat och skriftligt. Sätt upp rutinen med <a href="/sv/verktyg/offert-mall">offertmallen</a> och <a href="/sv/verktyg/ata-mall">ÄTA-mallen</a>, eller <a href="/sv/contact">boka en demo →</a> så visar vi hur du får hela flödet från offert till ÄTA-faktura på plats.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så anmäler och fakturerar du rätt</a> och <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a>.</p>
`;

const A_FAST_PRIS_ELLER_LOPANDE_RAKNING: BlogPost = {
  _id: "code-"+"fast-pris-eller-lopande-rakning",
  title: "Fast pris eller löpande räkning – så väljer du rätt prismodell (och slipper ÄTA-tvisten)", slug: "fast-pris-eller-lopande-rakning", locale: "sv",
  excerpt: "Prismodellen avgör vem som bär risken och hur lätt du får betalt för ändringar – här är beslutsguiden och rutinen som håller ÄTA separat och tvistfri.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_FAST_PRIS_ELLER_LOPANDE_RAKNING_HTML,
  seoTitle: "Fast pris eller löpande räkning | ByggExp", seoDescription: "Så väljer du prismodell, fakturerar ÄTA separat utan tvist och använder självkostnadsprincipen som default. Beslutsguide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:09:00.000Z", createdAt: "2026-08-18T18:09:00.000Z", updatedAt: "2026-08-18T18:09:00.000Z",
};

const A_TACKNINGSBIDRAG_BYGGFORETAG_HTML = `
<p>Du har fullbokat i veckor, säger nej till jobb och kör kvällar för att hinna klart. Ändå är det tunt på kontot när momsen och lönerna dragits. För de allra flesta byggföretag är det inte ett arbetsfel – det är ett prissättningsfel. Och nästan alltid handlar det om samma sak: att påslag och marginal blandas ihop. Två procenttal som mäter samma vinst, men mot helt olika baser.</p>

<p>Vill du sluta gissa och se skillnaden i kronor på ditt eget jobb? Räkna om påslag till marginal och baklänges med <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslag- och marginalkalkylator -></a></p>

<h2>Två procenttal, en vinst – vad påslag och marginal faktiskt mäter</h2>
<p>Påslag och marginal beskriver samma vinst, men de räknas mot olika tal. <strong>Påslag (pålägg)</strong> räknas på inköps- eller självkostnaden: vinst delat på kostnad. Det är hur mycket du lägger ovanpå det du betalade. <strong>Marginal</strong> räknas på försäljningspriset: vinst delat på priset. Det är hur stor andel av det kunden betalar som faktiskt blir vinst.</p>
<p>Eftersom priset alltid är högre än kostnaden delar de två talen med olika stora nämnare. Följden är enkel men viktig: <strong>marginalprocenten är alltid lägre än påläggsprocenten</strong> för samma affär. Tror du att ett påslag på 25 procent betyder 25 procent i vinst av priset, har du redan räknat fel.</p>

<h2>Exakt felet: att blanda ihop baserna</h2>
<p>Ta ett konkret exempel. Du köper material för 400 kr och säljer det för 1 000 kr. Påslaget är 150 procent (600 kr vinst på 400 kr inköp), men marginalen är bara 60 procent (600 kr av 1 000 kr). Samma affär, två helt olika procenttal.</p>
<p>Ett mindre men vanligare fall: du köper för 200 kr och &quot;lägger på 50 procent&quot;. Priset blir 300 kr, vinsten 100 kr. Det är 50 procent i påslag – men bara 33,3 procent i marginal. Den som säger &quot;jag lägger på 20 procent&quot; och tror att 20 procent av fakturan är vinst har i själva verket cirka 17 procent marginal. På ett enskilt jobb känns skillnaden liten. På ett år, över hundratals fakturor, är det där pengarna försvinner.</p>

<h2>Formlerna du behöver (och en snabbtabell)</h2>
<p>Du behöver egentligen bara två formler för att aldrig råka fel igen:</p>
<ul>
<li><strong>Marginal = påslag ÷ (1 + påslag)</strong></li>
<li><strong>Påslag = marginal ÷ (1 − marginal)</strong></li>
</ul>
<p>Och den viktigaste av alla när du sätter timpris: <strong>Timpris = självkostnad ÷ (1 − önskad marginal)</strong>. Att dividera med (1 − marginal) ger rätt pris. Att i stället multiplicera med (1 + marginal) ger ett för lågt pris – det är själva kärnfelet i tusentals offerter.</p>
<p>En omvandlingstabell att fästa på väggen:</p>
<ul>
<li>15 % påslag = 13 % marginal</li>
<li>20 % påslag = 17 % marginal</li>
<li>25 % påslag = 20 % marginal</li>
<li>30 % påslag = 23 % marginal</li>
<li>50 % påslag = 33 % marginal</li>
</ul>
<p>Och åt andra hållet: vill du ha 40 procent marginal krävs 66,7 procent påslag. Marginalmålet är alltid brantare att nå än det ser ut.</p>

<h2>Från påslag till täckningsbidrag – kopplingen som ger lönsamhet</h2>
<p>Påslaget är verktyget. <strong>Täckningsbidraget (TB)</strong> är resultatet du är ute efter. TB är försäljningspriset minus de rörliga kostnaderna (särkostnaderna) för jobbet, uttryckt i kronor. <strong>Täckningsgraden (TG)</strong> är samma sak i procent: TB delat på försäljningspriset.</p>
<p>Poängen är att TB inte är din vinst. Täckningsbidraget ska först betala företagets fasta, gemensamma kostnader – lokal, bil, försäkringar, admin, all icke debiterbar tid – och det som blir kvar därefter är vinst. Sätter du påslaget för lågt räcker TB inte ens till samkostnaderna, och då jobbar du med förlust på fullbokad kalender. Att räkna i marginal och TG i stället för i löst tyckta påslag är det som gör lönsamheten synlig innan du skickar offerten.</p>

<h2>Byggföretagets självkostnad 2026 – räkna på rätt siffror</h2>
<p>Rätt marginal på fel självkostnad ger ändå fel pris. Bygg självkostnaden underifrån med 2026 års siffror:</p>
<ul>
<li><strong>Grundlön yrkesarbetare:</strong> 203 kr/tim enligt Byggavtalet från 1 maj 2026, motsvarande 35 322 kr/månad. Det är golvet.</li>
<li><strong>Arbetsgivaravgift:</strong> full avgift 31,42 procent ovanpå bruttolönen. Den är obligatorisk och måste ligga i självkostnaden innan du gör något påslag.</li>
<li><strong>Övriga omkostnader:</strong> försäkring, verktyg, transport, arbetskläder, admin.</li>
</ul>
<p>Det avgörande steget är att dela på <strong>debiterbara timmar</strong>, inte alla arbetstimmar. Restid, offertskrivning, inköp och garantibesök betalar ingen kund direkt. Just därför landar ett rimligt timpris ofta på 3–4 gånger yrkesarbetarens bruttolön, och marknaden 2026 ligger runt 560–1 200 kr/tim beroende på yrke. Trots det höga timpriset är den verkliga vinstmarginalen i praktiken ofta bara 10–15 procent – vilket visar hur lite utrymme det finns att räkna slarvigt.</p>

<h2>Material vs arbete – när påslag är rätt och när marginal är rätt</h2>
<p>Här sker en av branschens vanligaste sammanblandningar. De två delarna av en offert ska prissättas mot olika baser:</p>
<ul>
<li><strong>Material:</strong> ett påslag på 10–15 procent på inköpspriset är branschstandard och rätt bas. Det ska täcka tid för inköp, logistik, lagerhållning och garantiansvar. Påslag på inköp är helt korrekt här.</li>
<li><strong>Arbete:</strong> prissätts mot marginal av priset, eftersom timpriset ska bära en känd självkostnad plus vinst.</li>
</ul>
<p>Använder du samma logik rakt av på båda – till exempel &quot;20 procent på allt&quot; och tror det ger 20 procent vinst – underprissätter du systematiskt arbetet, som är den största posten i de flesta byggjobb.</p>

<h2>Så sätter du priset baklänges från önskad marginal</h2>
<p>Räkna alltid framåt från kostnaden och kontrollera i marginal. Ett exempel: självkostnaden för ett jobb är 60 000 kr (lön, avgifter, omkostnader, material). Du vill ha 25 procent marginal.</p>
<ol>
<li>Bestäm självkostnaden: 60 000 kr.</li>
<li>Bestäm mål-marginalen: 25 procent.</li>
<li>Dela med (1 − marginal): 60 000 ÷ 0,75 = <strong>80 000 kr</strong>.</li>
</ol>
<p>Hade du i stället multiplicerat 60 000 × 1,25 hade priset blivit 75 000 kr – och marginalen bara 20 procent, inte 25. En skillnad på 5 000 kr på ett enda jobb, i fel riktning. Kontrollräkna därför alltid den färdiga offerten i marginal (vinst ÷ pris), inte i påslag.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte bort räknandet – men gör det svårt att råka räkna fel. I offertmallen bygger du upp jobbet post för post med arbete och material var för sig, så att arbetet kan prissättas mot marginal och materialet mot påslag utan att baserna blandas ihop. Du ser täckningsbidraget i kronor och täckningsgraden i procent innan offerten går iväg, vilket gör det tydligt om ett jobb faktiskt bär sina kostnader. Kombinera det med kalkylatorn för att snabbt växla mellan påslag och marginal, så vet du att siffran i offerten betyder det du tror att den betyder.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan påslag och marginal?</h3>
<p>Påslag räknas på inköps- eller självkostnaden (vinst ÷ kostnad) och marginal räknas på försäljningspriset (vinst ÷ pris). De beskriver samma vinst men mot olika baser, och eftersom priset alltid är högre än kostnaden är marginalen alltid lägre än påslaget. 25 procent påslag motsvarar till exempel 20 procent marginal.</p>
<h3>Vad är täckningsbidrag för ett byggföretag?</h3>
<p>Täckningsbidrag (TB) är försäljningspriset minus de rörliga kostnaderna för jobbet, uttryckt i kronor. TB ska först täcka företagets fasta kostnader – lokal, bil, försäkring, admin och icke debiterbar tid – och det som blir kvar därefter är vinst. Täckningsgrad (TG) är samma sak i procent av priset.</p>
<h3>Hur räknar jag ut rätt timpris?</h3>
<p>Bygg först självkostnaden: lön (203 kr/tim enligt Byggavtalet 2026), plus 31,42 procent arbetsgivaravgift, plus omkostnader, delat på antalet debiterbara timmar. Sätt sedan priset med formeln självkostnad ÷ (1 − önskad marginal). Dividera – multiplicera inte med (1 + marginal), då blir priset för lågt.</p>
<h3>Vilket materialpåslag är rimligt?</h3>
<p>Ett påslag på 10–15 procent på inköpspriset är branschstandard och ska täcka tid för inköp, logistik, lager och garantiansvar. Materialet prissätts alltså mot inköp (påslag), medan arbetet prissätts mot pris (marginal) – två olika baser som inte bör blandas ihop.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna om dina egna påslag till verkliga marginaler i <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylatorn</a>, och bygg nästa jobb i <a href="/sv/verktyg/offert-mall">offertmallen</a> med arbete och material var för sig. Vill du se hur täckningsbidraget räknas ut automatiskt på dina offerter, <a href="/sv/contact">boka en demo</a> så visar vi.</p>
<p>Relaterat: <a href="/sv/blog/timpris-hantverkare">Så sätter du rätt timpris som hantverkare</a> och <a href="/sv/blog/paslag-pa-material">Påslag på material – vad som är rimligt och varför</a>.</p>
`;

const A_TACKNINGSBIDRAG_BYGGFORETAG: BlogPost = {
  _id: "code-"+"tackningsbidrag-byggforetag",
  title: "Täckningsbidrag för byggföretag: därför gör påslag/marginal-felet dig fattig på fullbokade dagar", slug: "tackningsbidrag-byggforetag", locale: "sv",
  excerpt: "Hantverkaren med fullbokad kalender och tomt konto har nästan alltid ett prissättningsfel – inte ett arbetsfel – och det bottnar i skillnaden mellan påslag och marginal.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_TACKNINGSBIDRAG_BYGGFORETAG_HTML,
  seoTitle: "Täckningsbidrag byggföretag | ByggExp", seoDescription: "Påslag på inköp, marginal på pris – blandar du ihop dem tappar du pengar på varje offert. Så räknar byggföretag rätt på täckningsbidrag 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:12:00.000Z", createdAt: "2026-08-18T18:12:00.000Z", updatedAt: "2026-08-18T18:12:00.000Z",
};

const A_DROJSMALSRANTA_2026_HTML = `
<p>En obetald faktura är inget du bara ska vänta ut. Som byggföretag har du enligt räntelagen rätt att ta ut dröjsmålsränta på sena betalningar – och för 2026 är den lagstadgade räntan 10,00 % per år. Räknat på ett par större byggfakturor blir det snabbt tusenlappar som du har rätt till, plus fasta avgifter för besväret. Här går vi igenom exakt hur du räknar, när du får ta ut räntan och hur du driver in pengarna.</p>

<p>Vill du komma igång direkt lägger du in korrekta betalningsvillkor och förfallodag redan när fakturan skapas – testa vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för byggföretag -&gt;</a> så att räntan börjar löpa automatiskt när kunden är sen.</p>
<p><a href="/sv/verktyg/drojsmalsranta-kalkylator">Räkna ut exakt dröjsmålsränta på en obetald faktura med vår gratis kalkylator -&gt;</a></p>

<h2>Snabbsvar: dröjsmålsränta 2026</h2>
<p><strong>Dröjsmålsräntan 2026 är 10,00 % per år.</strong> Den består av referensräntan 2,00 % plus 8 procentenheter enligt räntelagen (1975:635) 6 §. Siffran gäller hela 2026 – både första och andra halvåret – eftersom referensräntan ligger kvar på 2,00 % vid båda fastställelsetillfällena.</p>

<h2>Vad är dröjsmålsränta och referensränta?</h2>
<p>Dröjsmålsränta är den ränta du får ta ut när en kund betalar för sent. Grunden finns i räntelagen (1975:635). Enligt 6 § är den lagstadgade dröjsmålsräntan referensräntan enligt 9 § plus åtta procentenheter, om inget annat har avtalats.</p>
<p>Referensräntan sätts av Riksbanken två gånger per år, den 1 januari och den 1 juli. Den motsvarar styrräntan vid utgången av föregående halvår, avrundad uppåt till närmast högre halva procentenhet. Just nu har styrräntan legat på 1,75 % sedan oktober 2025, vilket avrundas upp till en referensränta på 2,00 % för hela 2026.</p>
<p>Blanda inte ihop dröjsmålsräntan med avkastningsränta. Avkastningsränta enligt 5 § (ränta innan en fordran förfallit) är referensräntan plus 2 procentenheter, alltså 4,00 % för 2026. Det är dröjsmålsräntan på 10,00 % du använder mot en sen kund.</p>

<h2>Dröjsmålsränta 2026 – och de senaste årens siffror</h2>
<p>Referensräntan har fallit de senaste åren, vilket också sänkt dröjsmålsräntan. Så här ser utvecklingen ut:</p>
<ul>
<li><strong>2024:</strong> referensränta 4,00 % → dröjsmålsränta 12,00 %</li>
<li><strong>H1 2025:</strong> referensränta 3,00 % → dröjsmålsränta 11,00 %</li>
<li><strong>H2 2025 och hela 2026:</strong> referensränta 2,00 % → dröjsmålsränta 10,00 %</li>
</ul>
<p>Att räntan är oförändrad båda halvåren 2026 gör din administration enklare: du använder samma räntesats, 10,00 %, oavsett om kunden blir sen i mars eller i november.</p>

<h2>När får du som byggföretag ta ut dröjsmålsränta?</h2>
<p>Mellan näringsidkare (B2B) gäller tydliga regler:</p>
<ul>
<li><strong>Avtalad förfallodag:</strong> har ni kommit överens om en förfallodag i förväg löper dröjsmålsräntan från den dagen (3 §).</li>
<li><strong>Ingen avtalad förfallodag:</strong> då får du ta ut ränta från 30 dagar efter att fakturan eller kravet skickades (4 §).</li>
<li><strong>Behöver inte stå på fakturan:</strong> mellan företag har du rätt till dröjsmålsränta även om det inte uttryckligen står angivet på fakturan att ränta tas ut.</li>
</ul>
<p>En vara eller tjänst ska enligt 2 a § betalas senast 30 dagar efter krav. Längre betalningstid mellan företag gäller bara om du som borgenär uttryckligen har godkänt det – avtalsvillkor som inskränker den rätten är utan verkan. Har du en myndighet eller offentlig aktör som kund gäller alltid 30 dagar.</p>

<h2>Så räknar du ut dröjsmålsräntan</h2>
<p>Formeln är enkel ränta, inte ränta-på-ränta:</p>
<p><strong>Dröjsmålsränta (kr) = fakturabelopp × (räntesats / 100) × (förseningsdagar / 365)</strong></p>
<p>Räntan beräknas på hela fakturabeloppet inklusive moms. Ett konkret exempel för 2026:</p>
<ul>
<li>Byggfaktura: 50 000 kr inkl. moms</li>
<li>Försening: 30 dagar</li>
<li>Räntesats: 10,00 %</li>
<li>Beräkning: 50 000 × 0,10 × 30/365 ≈ <strong>411 kr</strong></li>
</ul>
<p>Till detta lägger du 450 kr i förseningsersättning (se nedan). Kunden ska alltså betala cirka 861 kr utöver själva fakturabeloppet – och räntan fortsätter att ticka för varje dag betalningen dröjer.</p>

<h2>Utöver räntan – ta betalt för besväret</h2>
<p>Vid B2B-dröjsmål har du enligt lagen om ersättning för inkassokostnader (1981:739) automatiskt rätt till ersättning, helt utan påminnelse:</p>
<ul>
<li><strong>Förseningsersättning: 450 kr</strong> – automatiskt vid näringsidkares dröjsmål, ingen påminnelse krävs.</li>
<li>Betalningspåminnelse: högst 60 kr</li>
<li>Inkassokrav: 180 kr</li>
<li>Upprättande av amorteringsplan: 170 kr</li>
</ul>
<p>De 450 kronorna är särskilt värda att komma ihåg – många hantverkare missar dem helt trots att de utgår automatiskt.</p>

<h2>Kan du avtala om en högre ränta?</h2>
<p>Räntelagen är dispositiv mellan företag (1 §). Det betyder att du och din B2B-kund får avtala om en högre eller annan dröjsmålsränta än den lagstadgade. Standardavtal som AB 04 och ABT 06 hänvisar ofta till räntelagen och har egna betalningsvillkor – läs kontraktet innan du fakturerar så att du använder rätt sats.</p>
<p>Mot en privatperson gäller andra regler. Mot konsument är räntelagen tvingande till konsumentens förmån (8 §), och villkor som är till konsumentens nackdel är utan verkan. Du kan alltså inte avtala bort konsumentens skydd på samma sätt som mellan företag.</p>

<h2>Driva in en obetald faktura – steg för steg</h2>
<p>När en kund inte betalar i tid följer du en tydlig trappa:</p>
<ol>
<li><strong>Tydlig faktura:</strong> se till att förfallodag, betalningsvillkor och att dröjsmålsränta tas ut framgår redan från början.</li>
<li><strong>Betalningspåminnelse:</strong> skicka en påminnelse när förfallodagen passerats, med den upplupna räntan och påminnelseavgiften.</li>
<li><strong>Inkassokrav:</strong> går det fortfarande inte att få betalt skickar du (eller ett inkassobolag) ett inkassokrav.</li>
<li><strong>Betalningsföreläggande:</strong> som sista steg ansöker du om betalningsföreläggande hos Kronofogden.</li>
</ol>
<p>Tips: dokumentera allt. Med rätt underlag – avtal, faktura, förfallodag och tidsstämplade påminnelser – står du starkt hela vägen till Kronofogden.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att glömma de 450 kronorna i förseningsersättning som utgår automatiskt.</li>
<li>Att tro att räntan bara får tas ut om den står tryckt på fakturan – mellan företag gäller den ändå.</li>
<li>Att räkna ränta-på-ränta – dröjsmålsränta är enkel ränta.</li>
<li>Att räkna på beloppet exklusive moms – räntan beräknas på hela summan inkl. moms.</li>
<li>Att acceptera 60 eller 90 dagars betalningstid utan att uttryckligen ha godkänt det.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du fakturan med förfallodag och betalningsvillkor direkt, så att underlaget för dröjsmålsränta finns på plats från dag ett. Du har koll på vilka fakturor som passerat förfallodagen och kan agera i tid i stället för att upptäcka det månader senare. Systemet ersätter inte ett inkassobolag eller juridisk rådgivning – men det ger dig ordning på fakturor, förfallodagar och dokumentation, vilket är precis det du behöver för att kunna kräva rätt ränta och driva in obetalda pengar.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är dröjsmålsräntan 2026?</h3>
<p>Den lagstadgade dröjsmålsräntan för 2026 är 10,00 % per år. Den utgörs av referensräntan 2,00 % plus 8 procentenheter enligt räntelagen 6 §, och gäller hela året.</p>
<h3>Måste dröjsmålsränta stå på fakturan?</h3>
<p>Nej. Mellan företag (B2B) har du rätt till dröjsmålsränta även om det inte står angivet på fakturan att ränta tas ut. Räntan löper från avtalad förfallodag, eller annars 30 dagar efter att kravet skickats.</p>
<h3>Hur räknar man ut dröjsmålsränta?</h3>
<p>Använd formeln fakturabelopp × (räntesats / 100) × (förseningsdagar / 365). Det är enkel ränta och beräknas på hela beloppet inklusive moms. Exempel: 50 000 kr, 30 dagar sent, 10 % ≈ 411 kr.</p>
<h3>Får jag ta ut 450 kr förseningsersättning?</h3>
<p>Ja. Vid dröjsmål mellan företag har du automatiskt rätt till 450 kr i förseningsersättning enligt lagen om ersättning för inkassokostnader (1981:739), utan att först behöva skicka en påminnelse.</p>

<h2>Kom igång</h2>
<p>Skapa fakturor med rätt förfallodag och betalningsvillkor från start med vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall</a>, och utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp hjälper dig hålla koll på förfallna fakturor? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a> och <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a>.</p>
`;

const A_DROJSMALSRANTA_2026: BlogPost = {
  _id: "code-"+"drojsmalsranta-2026",
  title: "Dröjsmålsränta 2026 för byggföretag – räkna rätt och få betalt", slug: "drojsmalsranta-2026", locale: "sv",
  excerpt: "Dröjsmålsräntan 2026 är 10,00 % – så räknar du rätt enligt räntelagen, lägger på förseningsersättning och driver in obetalda byggfakturor.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_DROJSMALSRANTA_2026_HTML,
  seoTitle: "Dröjsmålsränta 2026 för bygg | ByggExp", seoDescription: "Dröjsmålsränta 2026 är 10,00 % (referensränta 2,00 % + 8 p.e.). Så räknar byggföretag rätt, tar ut 450 kr förseningsersättning och driver in obetalda fakturor.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:36:00.000Z", createdAt: "2026-08-18T18:36:00.000Z", updatedAt: "2026-08-18T18:36:00.000Z",
};

const A_BOKFORING_ENSKILD_FIRMA_BYGG_HTML = `
<p>Byggbranschen är en av de mest granskade av Skatteverket, och som hantverkare med enskild firma sitter du mitt i det: kontanthantering, personalliggare på arbetsplatsen och en momskedja där en enda felfakturerad byggtjänst kan dra igång en revision. Det handlar sällan om fusk – oftare om att omvänd byggmoms hamnat på fel faktura, eller att ROT-avdraget begärts trots att köparen inte ägde bostaden. Den här guiden går igenom grundkraven, momsen 2026 och den omvända byggmomsen så att du slipper strulet.</p>

<p>Ett tips på vägen: räkna ut och stäm av moms rätt varje gång med <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator -&gt;</a> innan du skickar fakturan.</p>

<h2>Grundkraven – från dag ett</h2>

<p>Det finns ingen omsättningsgräns som befriar dig från bokföring. Enligt bokföringslagen är alla enskilda firmor bokföringsskyldiga från och med registreringsdagen. Missförstå inte momsgränsen (mer om den nedan) som en bokföringsgräns – de har inget med varandra att göra.</p>

<ul>
<li><strong>F-skatt innan första fakturan.</strong> Utan godkänd F-skatt (eller FA-skatt om du också är anställd) måste din kund dra 30 % preliminär A-skatt på arbetsdelen av fakturan. I praktiken blockerar det normalt entreprenadarbete.</li>
<li><strong>Spara underlag i minst 7 år.</strong> Räknat från utgången av räkenskapsåret. Ett kvitto från januari 2026 ska alltså finnas kvar till och med 31 december 2033.</li>
<li><strong>Förenklat årsbokslut (K1) under 3 miljoner kr.</strong> Har firman en nettoomsättning på högst 3 000 000 kr får du använda de förenklade K1-reglerna och upprätta ett förenklat årsbokslut. Det sparas tillsammans med bokföringen men lämnas inte in till någon myndighet. Över 3 miljoner kr krävs ett fullständigt årsbokslut (K2/K3).</li>
</ul>

<p>Vinsten i en enskild firma beskattas som din egen inkomst. Du betalar debiterad preliminärskatt (F-skatt) månadsvis och egenavgifter på runt 29 % av nettovinsten, som stäms av i NE-bilagan i inkomstdeklarationen.</p>

<h2>Moms 101 för enskild firma 2026</h2>

<p>Sedan 1 januari 2025 behöver du inte momsregistrera dig om årsomsättningen (exklusive moms) är högst 120 000 kr – förutsatt att du även höll dig under gränsen de två föregående åren och är etablerad i Sverige. Passerar du 120 000 kr måste du registrera dig och ta ut 25 % moms på byggtjänster.</p>

<p>Hur ofta du deklarerar moms styrs av omsättningen:</p>

<ul>
<li><strong>Upp till 1 miljon kr:</strong> helår.</li>
<li><strong>1–40 miljoner kr:</strong> kvartal.</li>
<li><strong>Över 40 miljoner kr:</strong> månad.</li>
</ul>

<p>Du får frivilligt välja en kortare period. För många byggare är det smart att välja kvartal även med låg omsättning: ingående moms på material överstiger ofta utgående moms på fakturerad arbetstid, och då får du tillbaka pengar snabbare istället för att binda upp likviditet ett helt år. Helårsdeklarationen 2026 ska in senast 12 maj (utan EU-handel) eller 26 februari (med EU-handel); kvartalsdeklaration lämnas den 12:e i andra månaden efter kvartalets slut.</p>

<h2>Omvänd byggmoms utan strul</h2>

<p>Omvänd byggmoms (omvänd skattskyldighet) är inte momsfrihet – det är en förskjutning av <em>vem</em> som redovisar de 25 procenten, byggd för att stoppa momsfusk i entreprenadkedjor. Reglerna avgör om du som säljare ska fakturera med eller utan moms.</p>

<p><strong>Omvänd byggmoms gäller</strong> när du säljer en byggtjänst (eller hyr ut arbetskraft för sådan) till en köpare som är ett företag som själv säljer eller säljer vidare byggtjänster mer än tillfälligt. Då fakturerar du <strong>utan moms</strong>, och köparen redovisar både utgående och ingående moms.</p>

<p><strong>Omvänd byggmoms gäller INTE</strong> när du fakturerar en privatperson, eller en fastighetsägare/förvaltare som inte själv säljer byggtjänster vidare – då tar du ut normal 25 % moms. Den gäller inte heller ren varuförsäljning (till exempel att leverera och koppla in vitvaror) eller arbete på fordon och maskiner.</p>

<p>Fakturachecklista vid omvänd byggmoms:</p>

<ul>
<li>Ingen moms angiven på fakturan.</li>
<li>Köparens momsregistreringsnummer (VAT-nummer) ska finnas på fakturan.</li>
<li>Texten <strong>&quot;Omvänd betalningsskyldighet&quot;</strong> (eller &quot;Omvänd skattskyldighet för byggtjänster gäller&quot;) ska stå med.</li>
</ul>

<h2>Så bokför du det praktiskt</h2>

<p>Ett konkret exempel: du är underentreprenör och fakturerar en huvudentreprenör 40 000 kr för byggarbete med omvänd byggmoms.</p>

<ul>
<li><strong>Du som säljare</strong> bokför intäkten på konto 3231 (Försäljning byggsektorn, omvänd byggmoms) – ingen utgående moms.</li>
<li><strong>Köparen</strong> bokför 40 000 kr på 4610 (Byggtjänster), och beräknar 25 % moms i två poster: 2614 (Utgående moms omvänd skattskyldighet) och 2644 (Ingående moms omvänd skattskyldighet), här 10 000 kr på vardera. Är momsen fullt avdragsgill tar 2614 och 2644 ut varandra och kassaflödeseffekten blir noll.</li>
</ul>

<p>Har du en mall med rätt uppgifter förhandsifyllda blir det svårt att glömma momsnummer eller märkningstext. Använd gärna <a href="/sv/verktyg/faktura-mall">vår faktura-mall</a> som utgångspunkt.</p>

<h2>ROT-avdrag i praktiken</h2>

<p>ROT-avdraget är 30 % av <strong>arbetskostnaden</strong> – aldrig på material eller resor. Köparen måste dessutom äga och bo i (eller använda) bostaden som arbetet utförs på. Du drar av köparens del direkt på fakturan och begär sedan utbetalning av mellanskillnaden från Skatteverket via deras e-tjänst.</p>

<p>Takbeloppet per person och år har ändrats genom tillfälliga reformer under 2024–2025. <strong>Kontrollera aktuellt takbelopp direkt på skatteverket.se innan du utlovar en siffra till kunden</strong> – ett fel här ger avslag på utbetalningen och en missnöjd kund.</p>

<p>Notera samspelet: ROT gäller bara mot privatperson. Och mot en privatperson är det aldrig omvänd byggmoms – du tar alltid ut 25 % moms och drar av ROT på arbetsdelen. Blandar du ihop dessa två uppstår exakt den typ av fel som Skatteverket letar efter.</p>

<h2>Skatteverkets granskningsflaggor för bygg</h2>

<p>Det som oftast utlöser en fördjupad granskning eller revision i byggbranschen:</p>

<ul>
<li>Fel momshantering i entreprenadkedjan – moms utan omvänd skattskyldighet där den skulle gällt, eller tvärtom.</li>
<li>Saknad eller felaktig personalliggare på byggarbetsplatsen.</li>
<li>Kontantförsäljning som inte stämmer med redovisad omsättning.</li>
<li>Blandade privat- och företagsinköp där avdrag tagits för sådant som inte hör till verksamheten.</li>
</ul>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp hjälper dig hålla ordning på det löpande: du dokumenterar utfört arbete och timmar per projekt, skapar fakturaunderlag och skiljer arbetskostnad från material – vilket är precis den uppdelning både ROT och omvänd byggmoms bygger på. Det ersätter inte din bokföring eller en redovisningskonsult, men det gör att underlaget som går vidare till bokföringen redan är rätt uppdelat, så att momsen och ROT-avdraget blir enklare att få korrekt från början.</p>

<h2>Vanliga frågor</h2>

<h3>Måste jag momsregistrera min enskilda firma direkt?</h3>
<p>Nej, inte om årsomsättningen exklusive moms är högst 120 000 kr och du höll dig under gränsen de två föregående åren. Bokföringsskyldig är du däremot från dag ett, oavsett omsättning.</p>

<h3>När ska jag fakturera med omvänd byggmoms istället för 25 %?</h3>
<p>När köparen är ett företag som själv säljer byggtjänster mer än tillfälligt. Då fakturerar du utan moms, anger köparens momsnummer och skriver &quot;Omvänd betalningsskyldighet&quot;. Fakturerar du en privatperson eller en fastighetsägare som inte säljer byggtjänster vidare tar du ut normal 25 % moms.</p>

<h3>Kan jag använda ROT och omvänd byggmoms på samma faktura?</h3>
<p>Nej. ROT gäller bara arbete åt privatpersoner, och mot privatpersoner är det aldrig omvänd byggmoms. De två utesluter alltså varandra på samma jobb.</p>

<h3>Hur länge måste jag spara bokföringen?</h3>
<p>I minst 7 år räknat från utgången av räkenskapsåret. Ett underlag från 2026 ska alltså finnas kvar till och med 2033.</p>

<h2>Kom igång</h2>

<p>Bygg in en enkel månadsrutin: fakturera med rätt moms varje gång, spara kvitton digitalt löpande och stäm av ingående mot utgående moms innan deklarationen. Räkna momsen rätt med <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a> och sätt upp fakturorna med <a href="/sv/verktyg/faktura-mall">faktura-mallen</a>. Vill du se hur ByggExp håller projekt, timmar och underlag på plats? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare – så gör du rätt</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_BOKFORING_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"bokforing-enskild-firma-bygg",
  title: "Bokföring för hantverkare med enskild firma: moms, ROT och omvänd byggmoms utan strul", slug: "bokforing-enskild-firma-bygg", locale: "sv",
  excerpt: "En felfakturerad byggmoms kan räcka för att dra igång en granskning – så håller du bokföringen, momsen och ROT rätt i enskild firma.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_BOKFORING_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Bokföring enskild firma bygg | ByggExp", seoDescription: "Moms, ROT och omvänd byggmoms för hantverkare med enskild firma. Trösklar, fakturakrav och Skatteverkets granskningsflaggor – konkret guide för 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:42:00.000Z", createdAt: "2026-08-18T18:42:00.000Z", updatedAt: "2026-08-18T18:42:00.000Z",
};

const A_TRAKTAMENTE_BYGGNADSARBETARE_2026_HTML = `
<p>Många byggföretag betalar ut traktamente varje månad utan att veta att en stor del av det faktiskt är skattepliktig lön. Kollektivavtalets traktamente och Skatteverkets skattefria schablon är två helt olika saker – och när de inte överlappar hamnar mellanskillnaden som lön med arbetsgivaravgifter. För inkomstår 2026 är de skattefria beloppen 300 kr för hel dag, 150 kr för halv dag och 150 kr för natt, förutsatt att två grundvillkor är uppfyllda.</p>

<p>Ett korrekt traktamente bygger på korrekta underlag. Har du inte tidrapporter och reseuppgifter som visar övernattning och avstånd blir det omöjligt att styrka skattefriheten – börja därför med vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall -></a> för att få dokumentationen på plats.</p>

<h2>Skatteverkets skattefria belopp 2026 (inrikes)</h2>
<p>För tjänsteresor inom Sverige gäller följande schablonbelopp för inkomstår 2026, fastställda i Skatteverkets rättsliga vägledning:</p>
<ul>
<li><strong>Hel dag (helt maximibelopp): 300 kr.</strong></li>
<li><strong>Halv dag (halvt maximibelopp): 150 kr.</strong> Gäller avresedag om resan börjar efter kl 12 och hemkomstdag om du kommer hem före kl 19.</li>
<li><strong>Nattraktamente (schablon när arbetsgivaren inte betalar logi): 150 kr.</strong></li>
</ul>
<p>Vid längre förrättning på samma ort trappas det skattefria beloppet ned. Efter tre månader sänks det till <strong>210 kr per hel dag</strong> (70 % av maximibeloppet). Efter två år på samma ort sänks det ytterligare till <strong>150 kr per hel dag</strong> (50 % av maximibeloppet). Betalar företaget ut mer än så blir det överskjutande beloppet skattepliktigt.</p>

<h2>De två grundvillkoren – övernattning och 50-kmregeln</h2>
<p>För att traktamentet överhuvudtaget ska kunna betalas ut skattefritt måste båda dessa villkor vara uppfyllda:</p>
<ol>
<li><strong>Övernattning.</strong> Skatteverket är tydliga: "Du måste alltid övernatta minst en natt för att arbetsgivaren ska kunna betala ut ett skattefritt traktamente." En endagsförrättning kan alltså aldrig ge skattefritt traktamente.</li>
<li><strong>50-kmregeln.</strong> Tjänsteresan måste gå till en plats som ligger mer än 50 km från både bostaden och den vanliga arbetsplatsen (tjänstestället). Ligger arbetsplatsen närmare än så är villkoret inte uppfyllt.</li>
</ol>
<p>Detta är exakt där byggbranschen ofta faller. Mycket arbete sker på dagpendlingsavstånd och utan övernattning – och då finns ingen skattefri traktamentesgrund, oavsett vad kollektivavtalet säger.</p>

<h2>Vad är "tjänstestället" för en byggnadsarbetare?</h2>
<p>Tjänstestället avgör var en tjänsteresa börjar. För många yrken är tjänstestället kontoret, men för en byggnadsarbetare är det ofta själva byggarbetsplatsen där man utför arbetet under en period. Det får två konsekvenser:</p>
<ul>
<li>Resor <em>till och från</em> den arbetsplats som är tjänsteställe räknas som vanliga arbetsresor, inte tjänsteresor – och ger inte traktamente.</li>
<li>Först när arbetet sker på en annan plats, mer än 50 km bort och med övernattning, uppstår en tjänsteresa som kan ge skattefritt traktamente.</li>
</ul>
<p>Att fastställa tjänstestället rätt är alltså avgörande. Bedömer företaget det fel riskerar man att betala ut "skattefritt" traktamente som i själva verket är skattepliktigt.</p>

<h2>Byggavtalet vs Skatteverket – varför avtalstraktamentet ofta beskattas</h2>
<p>Byggnads kollektivavtal reglerar traktamente och reseersättning enligt avtalets egna villkor. De villkoren följer inte automatiskt Skatteverkets regler. Avtalet kan ge rätt till traktamente även vid endagsförrättning eller vid resor under 50 km – ersättningar som helt enkelt inte uppfyller Skatteverkets krav på övernattning och avstånd.</p>
<p>Skattemekanismen är enkel: traktamente som betalas utan övernattning eller för resa under 50 km uppfyller inte villkoren för skattefrihet och är då <strong>skattepliktig lön</strong>. Företaget ska ta upp beloppet som ersättning, dra skatt och betala arbetsgivaravgifter. Att kalla utbetalningen "traktamente" i avtalet ändrar inte den skattemässiga hanteringen.</p>

<h2>Räkneexempel: endagsförrättning respektive övernattning</h2>
<p><strong>Fall A – endagsförrättning, 40 km bort.</strong> Byggföretaget betalar 200 kr i avtalstraktamente. Ingen övernattning och under 50 km betyder att inget villkor är uppfyllt. Hela beloppet är skattepliktig lön: den anställde betalar inkomstskatt på 200 kr och företaget betalar arbetsgivaravgifter ovanpå. Nettot i handen blir klart lägre än 200 kr.</p>
<p><strong>Fall B – förrättning 90 km bort med övernattning.</strong> Företaget betalar 300 kr per hel dag. Båda villkoren är uppfyllda och betalar arbetsgivaren inte logi kan även 150 kr nattraktamente betalas skattefritt. Här går ersättningen ut skattefritt, utan skatteavdrag och utan arbetsgivaravgifter på schablonbeloppet – förutsatt att underlagen finns.</p>
<p>Skillnaden mellan fallen är inte beloppet på pappret, utan om övernattning och avstånd är dokumenterade.</p>

<h2>Måltidsavdrag och kostförmån</h2>
<p>Det skattefria traktamentet förutsätter att arbetsgivaren inte redan har betalat måltiderna. Ingår fri frukost, lunch eller middag – till exempel på arbetsplatsen eller via hotellet – ska ett måltidsavdrag göras som minskar det skattefria beloppet, och den fria måltiden kan dessutom bli en kostförmån. Betalar företaget ut fullt traktamente <em>och</em> bjuder på måltider utan avdrag betalas för mycket ut skattefritt, vilket kan slå tillbaka vid en granskning.</p>

<h2>Checklista för arbetsgivare och anställd 2026</h2>
<ul>
<li>Fastställ tjänstestället för varje anställd – är byggarbetsplatsen tjänsteställe eller inte?</li>
<li>Kontrollera att resan går mer än 50 km från både bostad och tjänsteställe.</li>
<li>Säkerställ och dokumentera minst en övernattning.</li>
<li>Upprätta reseräkning med datum, tider, ort och syfte.</li>
<li>Gör måltidsavdrag för fria måltider.</li>
<li>Håll isär avtalstraktamente och skattefritt schablonbelopp – hantera mellanskillnaden som lön.</li>
<li>Spara underlagen i sju år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte lönesystemet, men ger dig underlagen som avgör om ett traktamente kan betalas skattefritt eller inte. Med tidrapporteringen registrerar dina medarbetare arbetsplats, dagar och tider, vilket gör det enkelt att se när en förrättning faktiskt innehåller övernattning och sträcker sig utanför tjänstestället. Underlagen samlas per anställd och projekt, så att du eller din redovisningskonsult snabbt kan avgöra vilken del av avtalstraktamentet som är skattefri och vilken del som ska hanteras som lön. Beloppen och den skattemässiga bedömningen måste du alltid stämma av mot Skatteverket och ditt kollektivavtal – ByggExp levererar spårbarheten, inte skatterådgivningen.</p>

<h2>Vanliga frågor</h2>
<h3>Är Byggnads avtalstraktamente alltid skattefritt?</h3>
<p>Nej. Avtalstraktamente betalas enligt kollektivavtalet oavsett skattereglerna. Är det utbetalat utan övernattning eller för en resa under 50 km uppfyller det inte Skatteverkets villkor och är då skattepliktig lön med arbetsgivaravgifter.</p>
<h3>Hur mycket är skattefritt traktamente 2026?</h3>
<p>För inrikes tjänsteresor 2026 är hel dag 300 kr, halv dag 150 kr och natt 150 kr. Efter tre månader på samma ort sänks helt dagsbelopp till 210 kr och efter två år till 150 kr.</p>
<h3>Kan jag få traktamente utan att övernatta?</h3>
<p>Inte skattefritt. Skatteverket kräver minst en övernattning för att ett skattefritt traktamente ska kunna betalas ut. Endagsförrättningar ger inget skattefritt traktamente.</p>
<h3>Vad händer om vi bjuder på lunch under resan?</h3>
<p>Fria måltider ger ett måltidsavdrag som minskar det skattefria beloppet och kan innebära kostförmån. Betalar ni fullt traktamente utan avdrag blir för mycket utbetalt skattefritt.</p>

<h2>Kom igång</h2>
<p>Bygg rätt underlag från början med vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>, och se fler verktyg för byggföretag i vår <a href="/sv/verktyg">verktygslåda</a>. Vill du se hur spårbarheten fungerar i praktiken? <a href="/sv/contact">Boka en demo -></a></p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Så hanterar du frånvaro i byggföretag</a> och fler <a href="/sv/verktyg">gratis verktyg för hantverkare</a>.</p>
`;

const A_TRAKTAMENTE_BYGGNADSARBETARE_2026: BlogPost = {
  _id: "code-"+"traktamente-byggnadsarbetare-2026",
  title: "Traktamente för byggnadsarbetare 2026 – så mycket är skattefritt (och varför avtalstraktamentet ofta beskattas)", slug: "traktamente-byggnadsarbetare-2026", locale: "sv",
  excerpt: "Så mycket traktamente är skattefritt för byggnadsarbetare 2026 – och varför kollektivavtalets traktamente ofta blir skattepliktig lön.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_TRAKTAMENTE_BYGGNADSARBETARE_2026_HTML,
  seoTitle: "Traktamente byggnadsarbetare 2026 | ByggExp", seoDescription: "Skattefria traktamentsbelopp 2026 för byggnadsarbetare: 300/150/150 kr, 50-kmregeln och varför Byggnads avtalstraktamente ofta beskattas.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:48:00.000Z", createdAt: "2026-08-18T18:48:00.000Z", updatedAt: "2026-08-18T18:48:00.000Z",
};

const A_PERIODISERINGSFOND_BYGGBOLAG_HTML = `
<p>Byggbranschen är konjunkturkänslig på ett sätt som få andra branscher är. Ett år med fulla orderböcker och stora projektvinster följs ofta av ett magrare år där anbuden dröjer och marginalerna krymper. Ändå betalar många byggaktiebolag full bolagsskatt på toppåret och sitter sedan med tömd kassa när det vänder. Med en <strong>periodiseringsfond</strong> kan ditt aktiebolag flytta upp till 25 % av vinsten framåt och jämna ut skatten över konjunkturcykeln. Det här är en av de mest konkreta skatteplaneringsåtgärderna för ett byggbolag – men den kostar numera lite att använda, och reglerna kring återföring är strikta.</p>

<p>Vill du räkna på avsättning, återföring och schablonintäkt för ditt eget bolag hittar du fler kalkyler och underlag i <a href="/sv/verktyg">vår samling av gratis verktyg för byggföretag -&gt;</a>.</p>

<h2>Vad är en periodiseringsfond – kort och konkret</h2>
<p>En periodiseringsfond är skattemässig resultatutjämning. Du sätter av en del av årets vinst innan skatt och skjuter på beskattningen till ett senare år. I balansräkningen redovisas fonden som en <strong>obeskattad reserv</strong> och avsättningen bokas som en bokslutsdisposition i resultaträkningen. Det är viktigt att förstå vad det inte är: det är inte en avsättning i vanlig mening och det är inte skattefrihet. Det är <strong>uppskjuten skatt</strong>. Skatten på det avsatta beloppet betalas när fonden återförs. För aktiebolag och andra juridiska personer är maxbeloppet 25 % av den skattemässiga vinsten före avsättning. En vanlig förväxling är gränsen 30 % – den gäller enskild firma och delägare i handelsbolag, inte aktiebolag.</p>

<h2>Reglerna 2026 i siffror</h2>
<p>Så här ser ramverket ut för ett byggaktiebolag beskattningsåret 2026:</p>
<ul>
<li><strong>Avsättning:</strong> högst 25 % av den skattemässiga vinsten (resultatet före avsättning).</li>
<li><strong>Återföring:</strong> varje års avsättning måste tas upp till beskattning senast det sjätte beskattningsåret efter avsättningsåret. Ett bolag kan därför ha upp till sex fonder samtidigt.</li>
<li><strong>Bolagsskatt:</strong> 20,6 %. Avsättningen skjuter upp – inte eliminerar – skatt på 20,6 % av det avsatta beloppet.</li>
<li><strong>Schablonintäkt:</strong> juridiska personer betalar en årlig schablonintäkt på fonderna. Den beräknas som statslåneräntan den 30 november året före beskattningsåret gånger summan av fonderna vid beskattningsårets ingång. Räntan anses vara lägst 0,5 %.</li>
</ul>
<p>Statslåneräntan den 30 november 2025 var 2,55 %. Det är den ränta som styr schablonintäkten för beskattningsår 2026, och eftersom 2,55 % ligger över golvet på 0,5 % är det den procentsatsen som gäller. <strong>Ett räkneexempel:</strong> har ditt bolag 1 000 000 kr i fonder vid årets ingång blir schablonintäkten 25 500 kr. Den läggs till den skattepliktiga inkomsten och beskattas med 20,6 %, vilket ger en faktisk skattekostnad på ungefär 5 253 kr – alltså cirka 0,53 % av fondbeloppet det året. Kontrollera alltid aktuell statslåneränta mot Skatteverket innan du räknar skarpt, den ändras varje år.</p>

<h2>Så jämnar byggbolaget ut vinsten</h2>
<p>Poängen blir tydligast i ett praktiskt scenario. Säg att ditt bolag har ett starkt 2026 med flera stora ROT-projekt och en skattemässig vinst på 2 000 000 kr. Du sätter av 25 %, alltså 500 000 kr, till periodiseringsfond. Skatten på det beloppet – drygt 103 000 kr – skjuts upp, och pengarna stannar i bolaget som likviditet.</p>
<p>Kommer sedan ett mellanår där ett par upphandlingar går till konkurrenter och bolaget landar på nollresultat eller till och med förlust, kan du återföra fonden mot det svaga året. Återföringen höjer resultatet, men eftersom den möter en förlust eller ett lågt resultat blir skatten på den återförda fonden låg eller noll. Då har du inte bara skjutit upp skatten – du har jämnat ut den så att den totala skatten över de två åren blir lägre än om du betalat full skatt på toppåret. Det är i den här matchningen mellan ett fett år och ett magert år som den verkliga besparingen ligger.</p>
<p>Utöver skatten finns en effekt som byggföretagare ofta underskattar: en jämnare resultatkurva. Banker som ska bevilja projektfinansiering och beställare som granskar din ekonomiska ställning i en upphandling ser hellre stabila siffror än ett bolag som svänger vilt mellan rekordvinst och förlust. Att hålla likviditet och ett jämnt resultat stärker din position både i kreditförhandlingar och i anbud. Vill du fördjupa dig i själva kassaflödet har vi skrivit mer i <a href="/sv/blog/likviditet-byggforetag">vår guide om likviditet för byggföretag</a>.</p>

<h2>Kostnaden: schablonintäkten och räntemiljön</h2>
<p>Under de år då statslåneräntan låg nära noll var periodiseringsfonden i praktiken en gratis skattekredit. Så är det inte längre. Med schablonräntan 2,55 % för 2026 kostar det ungefär 0,53 % av fondbeloppet per år i faktisk skatt att sitta på fonderna. På 1 000 000 kr är det drygt 5 000 kr per år – fortfarande billigt jämfört med den uppskjutna skatten på över 100 000 kr, men inte gratis.</p>
<p>Riktningen är dessutom uppåt. Statslåneräntan hade den 14 augusti 2026 stigit till 2,87 %, vilket innebär att schablonintäkten för beskattningsår 2027 sannolikt blir högre än för 2026. Ju större fonder du håller och ju högre räntan blir, desto dyrare blir det att skjuta skatten framför sig. Tumregeln: fonden är lönsam när du har ett konkret återföringsår i sikte – en planerad investering eller ett förväntat svagt år – men blir en onödig löpande kostnad om du bara låter fonderna ligga utan plan.</p>

<h2>Bokföring, deklaration och tvingande återföring</h2>
<p>Periodiseringsfonden hanteras helt i bokslutet, inte hos Bolagsverket. Avsättningen bokförs som en bokslutsdisposition och fonden redovisas som obeskattad reserv i årsredovisningen. I inkomstdeklarationen (INK2) redovisas avsättningar och återföringar på avsedd bilaga. Det finns ingen registrering att göra externt – men det ställer krav på att bokslutet blir rätt och att du har koll på vilka fonder som närmar sig sexårsgränsen.</p>
<p>En sak att verkligen planera för är <strong>tvingande återföring</strong>. Om bolaget upphör med näringsverksamheten, träder i likvidation, går i konkurs eller ingår i vissa ombildningar och fusioner måste samtliga fonder återföras på en gång. Då kan hela den uppskjutna vinsten tas upp till beskattning ett enda år, med en oväntat hög skattesmäll som följd. Det gör att periodiseringsfonder måste vägas in när du planerar ägarskiften, exit eller en omstrukturering av bolaget.</p>

<h2>Checklista för byggföretagaren</h2>
<ul>
<li>Tajma avsättningarna till dina verkliga toppår – sätt av mest när vinsten är hög.</li>
<li>Håll ordning på sexårsgränsen så att ingen fond återförs oplanerat och tvingar upp skatten.</li>
<li>Matcha återföringar mot förlustår eller större investeringar för att maximera utjämningseffekten.</li>
<li>Väg den löpande schablonkostnaden mot nyttan – låt inte fonder ligga kvar utan plan när räntan stiger.</li>
<li>Ta höjd för tvingande återföring vid ägarskifte, likvidation eller ombildning.</li>
<li>Stäm alltid av strategin och aktuell statslåneränta med din redovisningskonsult före bokslutet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggföretagets system för projekt, tid och fakturering – inte en skattedeklaration. Men ett välskött löpande underlag är förutsättningen för att kunna fatta rätt beslut om periodiseringsfond. När tidrapporter, projektkostnader och fakturor är samlade och uppdaterade får du en tydlig bild av årets resultat i god tid före bokslutet, i stället för en överraskning i mars. Det ger dig och din redovisningskonsult ett bättre beslutsunderlag för hur mycket som bör sättas av och vilka fonder som bör återföras. Underlagen från ByggExp ersätter inte rådgivningen, men de gör den snabbare och mer träffsäker.</p>

<h2>Vanliga frågor</h2>
<h3>Får mitt aktiebolag sätta av 30 % till periodiseringsfond?</h3>
<p>Nej. Aktiebolag och andra juridiska personer får sätta av högst 25 % av den skattemässiga vinsten. Gränsen 30 % gäller enskild firma och delägare i handelsbolag – det är en vanlig förväxling.</p>
<h3>Måste jag betala schablonintäkt på fonderna?</h3>
<p>Ja, som aktiebolag betalar du en årlig schablonintäkt. För beskattningsår 2026 är den 2,55 % av fondernas ingående saldo, vilket med bolagsskatt 20,6 % motsvarar ungefär 0,53 % av fondbeloppet i faktisk skatt. Enskild firma betalar däremot ingen schablonintäkt.</p>
<h3>Vad händer om jag inte återför fonden i tid?</h3>
<p>Varje avsättning måste återföras senast det sjätte beskattningsåret efter avsättningsåret. Sker det inte frivilligt återförs den äldsta fonden ändå automatiskt vid tidsgränsen och tas upp till beskattning. Håll därför koll på vilket år varje fond förfaller.</p>
<h3>Kan jag lösa upp fonden i förtid?</h3>
<p>Ja, du kan återföra en fond helt eller delvis tidigare än sexårsgränsen, till exempel för att möta en förlust eller en stor investering. Vid likvidation, konkurs eller att verksamheten upphör sker återföringen dock tvingande och all fond tas upp på en gång.</p>

<h2>Kom igång</h2>
<p>Börja med att skaffa dig en tydlig bild av bolagets resultat i god tid före bokslutet – då blir beslutet om periodiseringsfond en strategi och inte en gissning. Utforska <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a> för att räkna på siffrorna, och <a href="/sv/contact">boka en demo av ByggExp</a> om du vill se hur samlade projekt- och ekonomiunderlag underlättar planeringen.</p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet</a>.</p>
`;

const A_PERIODISERINGSFOND_BYGGBOLAG: BlogPost = {
  _id: "code-"+"periodiseringsfond-byggbolag",
  title: "Periodiseringsfond för byggbolag: jämna ut vinsten mellan goda och magra år", slug: "periodiseringsfond-byggbolag", locale: "sv",
  excerpt: "Byggbranschen är cyklisk – periodiseringsfond låter ditt aktiebolag skjuta upp skatt på toppåren och möta de magra åren med jämnare resultat.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_PERIODISERINGSFOND_BYGGBOLAG_HTML,
  seoTitle: "Periodiseringsfond aktiebolag | ByggExp", seoDescription: "Så använder byggaktiebolag periodiseringsfond för att jämna ut vinsten: 25 % avsättning, återföring inom 6 år och schablonintäkt på 2,55 % för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:00:00.000Z", createdAt: "2026-08-18T19:00:00.000Z", updatedAt: "2026-08-18T19:00:00.000Z",
};

const A_ATA_HANTERING_MALL_HTML = `
<p>Varje år tappar svenska byggföretag stora belopp på extraarbeten som aldrig blir fakturerade – eller som faktureras men underkänns för att underlaget saknas. Fråga dig själv: har du verkligen fått betalt för allt extra du gjort i dina senaste projekt? Om svaret är osäkert är det nästan alltid ÄTA-hanteringen som brister. Det handlar sällan om att kunden vägrar betala av illvilja, utan om att beställningen var muntlig, dokumentationen tunn eller fakturan kom för sent.</p>

<p>Med en fast rutin och en enkel blankett stänger du de flesta läckorna. Använd gärna <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall -&gt;</a> som utgångspunkt så har du fälten på plats redan från början. Den här guiden fokuserar på <em>dokumentation och fakturering</em> – vill du ha reglerna (föreskriven vs likställd ÄTA, underrättelse, ersättning) läs <a href="/sv/blog/ata-arbeten">ÄTA-arbeten enligt AB 04</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/ata-flode.webp" alt="Diagram: ÄTA-flödet – ändring/tillägg, beställ skriftligt, pris (à-pris eller självkostnad), fakturera löpande" width="720" height="380" loading="lazy"><figcaption>ÄTA från ändring till betalt: dokumentera beställning och pris skriftligt innan arbetet utförs – muntlig ÄTA är svår att få betalt för.</figcaption></figure>

<h2>Vad är ÄTA-arbeten?</h2>
<p>ÄTA står för Ändrings-, Tilläggs- och Avgående arbeten – alltså arbete som tillkommer, ändras eller faller bort jämfört med det ursprungliga kontraktet. I praktiken uppstår extra jobb i så gott som varje projekt: en vägg visar sig vara rutten, marken bär inte, beställaren vill flytta ett uttag. Poängen är inte att undvika ÄTA, utan att hantera det rätt.</p>
<p>Man skiljer på två former. <strong>Beställd ÄTA</strong> är arbete som beställaren uttryckligen ber dig utföra. <strong>Likställd ÄTA</strong> är arbete som blir nödvändigt för att verkligheten avviker från kontraktshandlingarna – till exempel fel i beställarens uppgifter eller oförutsedda förhållanden. Båda ger i princip rätt till extra ersättning, men de kräver olika hantering, och det är just på den likställda ÄTA:n som flest pengar går förlorade.</p>

<h2>Vilka regler gäller 2026?</h2>
<p>Vilka regler som styr beror helt på vem beställaren är.</p>
<p>Vid <strong>näringsjobb</strong>, alltså mellan företag, gäller standardavtalen AB 04 (utförandeentreprenad) och ABT 06 (totalentreprenad), båda i kapitel 2. Det är oförändrat gällande branschstandard 2026 – dessa avtal ändras inte löpande. Ersättningen regleras i kapitel 6.</p>
<p>Vid <strong>konsumentjobb</strong>, där beställaren är privatperson, gäller i stället konsumenttjänstlagen (1985:716). Enligt 8 § måste du underrätta konsumenten och begära anvisningar innan du utför tilläggsarbete, med snäva undantag för arbete av mindre omfattning eller när det finns särskild anledning att anta att kunden vill ha det utfört. Har du lämnat en ungefärlig prisuppgift får den enligt 36 § inte överskridas med mer än 15 procent – den så kallade 15-procentsregeln – om inte annat avtalats. Att köra över takpriset utan att stämma av är en klassisk anledning till att hantverkare inte får betalt.</p>

<h2>Kravet som får dig att förlora pengarna – underrättelseskyldigheten</h2>
<p>Det här är den viktigaste punkten i hela artikeln. Vid likställd ÄTA måste du enligt AB 04/ABT 06 kap 2 <strong>utan dröjsmål</strong> underrätta beställaren så snart du inser, eller borde ha insett, att ett förhållande avviker från kontraktet. Missar du det kan rätten till ersättning gå helt förlorad – även om arbetet faktiskt var nödvändigt och korrekt utfört.</p>
<p>Vänta alltså inte tills nästa byggmöte eller till slutfakturan. Ser du att marken avviker, att en ritning inte stämmer eller att något oförutsett dyker upp: hör av dig samma dag, skriftligt. På konsumentsidan är logiken densamma – informera kunden och begär anvisningar innan du kör, inte efteråt.</p>

<h2>Skriftligt före utförande – varför muntliga ÄTA är en förlustaffär</h2>
<p>AB 04/ABT 06 kap 2 säger att ÄTA-arbeten ska beställas skriftligen. I praktiken kan även muntliga och underförstådda beställningar bli bindande, men då ligger bevisbördan på dig som entreprenör. Står ord mot ord vid slutbesiktningen är det du som ska bevisa att arbetet beställdes och till vilket pris – och den bevisningen är svår att föra utan papper.</p>
<p>Slutsatsen är enkel: skaffa beställarens skriftliga godkännande innan spaden går i marken. En signerad ÄTA-blankett eller ett bekräftande mejl räcker långt. Det tar fem minuter och är skillnaden mellan en betald ÄTA och en tvist.</p>

<h2>Din ÄTA-rutin steg för steg</h2>
<ol>
<li><strong>Upptäck avvikelsen</strong> – notera direkt när något avviker från kontraktet eller när beställaren vill ändra.</li>
<li><strong>Underrätta beställaren utan dröjsmål</strong> – skriftligt, samma dag.</li>
<li><strong>Prissätt arbetet</strong> – enligt à-pris, fast pris eller löpande räkning.</li>
<li><strong>Få skriftligt godkännande</strong> – innan du börjar utföra.</li>
<li><strong>Utför arbetet</strong>.</li>
<li><strong>Dokumentera löpande</strong> – i ÄTA-journal, dagbok och byggmötesprotokoll.</li>
<li><strong>Fakturera löpande</strong> – med tidsedlar, materialkvitton och specifikationer som underlag.</li>
</ol>

<h2>Så bör ÄTA-mallen se ut</h2>
<p>En användbar ÄTA-blankett behöver inte vara komplicerad, men följande fält bör alltid finnas med:</p>
<ul>
<li>Projekt/objekt och beställare</li>
<li>ÄTA-nummer och datum</li>
<li>Beskrivning av arbetet</li>
<li>Orsak och hänvisning till kontraktshandling eller ritning</li>
<li>Typ – beställd eller likställd ÄTA</li>
<li>Pris och prismodell (à-pris/fast/löpande)</li>
<li>Påverkan på tidplanen</li>
<li>Beställarens underskrift och datum</li>
</ul>
<p>Med underskriften på plats före utförandet har du säkrat både beställningen, priset och den eventuella tidsförskjutningen i ett enda dokument.</p>

<h2>Fakturera rätt</h2>
<p>Har inget à-pris eller fast pris avtalats ersätts ÄTA på näringssidan enligt självkostnadsprincipen, det vill säga löpande räkning. Det kräver verifierbara underlag – tidsedlar, materialkvitton och specifikationer. Utan dem blir det svårt att stå fast vid beloppet om beställaren ifrågasätter.</p>
<p>Lika viktigt: fakturera ÄTA löpande, inte i en klump vid projektets slut. Enligt AB 04/ABT 06 kap 6 ska ersättningskrav framställas i god tid, och krav som inte tagits med i slutfakturan efter godkänd slutbesiktning kan gå förlorade. Ta med alla ÄTA-krav <em>innan</em> slutbesiktning och slutfaktura. På konsumentjobb: håll dig inom prisuppgiften eller informera i tid om att den behöver överskridas.</p>

<h2>Vanliga misstag och hur du undviker dem</h2>
<ul>
<li><strong>Muntliga överenskommelser</strong> – begär alltid skriftligt godkännande före utförande.</li>
<li><strong>Sen underrättelse vid likställd ÄTA</strong> – hör av dig samma dag du upptäcker avvikelsen.</li>
<li><strong>Tunt underlag</strong> – spara tidsedlar och kvitton löpande, inte i efterhand.</li>
<li><strong>Allt faktureras vid slutet</strong> – fakturera ÄTA löpande så inget faller bort vid slutbesiktning.</li>
<li><strong>Bortglömd 15-procentsregel</strong> på konsumentjobb – stäm av innan du passerar takpriset.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp skapar du en ÄTA direkt i projektet med alla fält ifyllda enligt mallen ovan – nummer, typ, orsak, pris och tidspåverkan. Underlaget samlas på projektet så att du snabbt kan skicka det för beställarens godkännande och sedan koppla tidsedlar och kvitton till just den ÄTA:n. När det är dags att fakturera har du underlaget samlat, vilket gör det lättare att fakturera löpande i stället för att jaga papper vid slutbesiktningen. Systemet ersätter inte det juridiska ansvaret enligt AB 04 eller konsumenttjänstlagen, men det gör rutinen enkel nog att faktiskt följa varje gång.</p>

<h2>Vanliga frågor</h2>
<h3>Måste en ÄTA vara skriftlig för att gälla?</h3>
<p>Enligt AB 04/ABT 06 kap 2 ska ÄTA beställas skriftligen. Muntliga och underförstådda beställningar kan bli bindande, men då ligger bevisbördan på dig som entreprenör. Skriftligt godkännande före utförande är därför i praktiken avgörande.</p>
<h3>Vad händer om jag inte underrättar beställaren i tid?</h3>
<p>Vid likställd ÄTA gäller att du utan dröjsmål ska underrätta beställaren när du inser att verkligheten avviker från kontraktet. Underlåter du det kan rätten till ersättning gå helt förlorad, även om arbetet var nödvändigt.</p>
<h3>Hur ersätts ÄTA om vi inte avtalat något pris?</h3>
<p>På näringssidan ersätts ÄTA då enligt självkostnadsprincipen, alltså löpande räkning enligt AB 04/ABT 06 kap 6. Det kräver verifierbara underlag som tidsedlar, materialkvitton och specifikationer.</p>
<h3>Vad gäller för extraarbete åt en privatperson?</h3>
<p>Då styr konsumenttjänstlagen. Enligt 8 § ska du underrätta konsumenten och begära anvisningar innan tilläggsarbete utförs, och enligt 15-procentsregeln i 36 § får en ungefärlig prisuppgift inte överskridas med mer än 15 procent utan att annat avtalats.</p>

<h2>Kom igång</h2>
<p>Sätt en fast rutin och använd samma blankett i varje projekt. Ladda ner <a href="/sv/verktyg/ata-mall">vår gratis ÄTA-mall</a> och börja dokumentera redan i nästa avvikelse. Vill du se hur ÄTA-hanteringen fungerar samlat i ett projekt kan du <a href="/sv/contact">boka en demo</a> så visar vi hur rutinen ser ut i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – grunderna du behöver kunna</a> och <a href="/sv/blog/kunden-betalar-inte-fakturan">Kunden betalar inte fakturan – så gör du</a>.</p>
`;

const A_ATA_HANTERING_MALL: BlogPost = {
  _id: "code-"+"ata-hantering-mall",
  title: "ÄTA-hantering mall – så dokumenterar och fakturerar du ÄTA utan att förlora ersättningen", slug: "ata-hantering-mall", locale: "sv",
  excerpt: "En konkret rutin och mall för att dokumentera och fakturera ÄTA-arbeten så att du får betalt för allt extra du gör – utan tvist vid slutbesiktningen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/ata-mall-preview.webp", contentHtml: A_ATA_HANTERING_MALL_HTML,
  seoTitle: "ÄTA-mall & rutin – dokumentera och fakturera ÄTA | ByggExp", seoDescription: "Så dokumenterar och fakturerar du ÄTA i praktiken: en enkel rutin, en gratis ÄTA-mall och de misstag som gör att hantverkare tappar ersättningen. (Reglerna: se vår ÄTA-guide.)",
  seoImageUrl: `${SITE_URL}/landing/verktyg/ata-mall-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:09:00.000Z", createdAt: "2026-08-18T19:09:00.000Z", updatedAt: "2026-08-18T19:09:00.000Z",
};

const A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG_HTML = `
<p>När en yrkesarbetare blir sjuk eller behöver vabba uppstår genast en praktisk fråga på kontoret: vem betalar vad, och vilken dag? Kort svar för dig som driver byggföretag – du som arbetsgivare betalar <strong>sjuklön under de första 14 kalenderdagarna</strong>, Försäkringskassan tar över med <strong>sjukpenning från dag 15</strong>, och <strong>VAB (vård av barn) betalas alltid av Försäkringskassan</strong>, aldrig av dig. Däremellan finns ett karensavdrag, ett par rapporteringskrav och en kostnadsersättning som många mindre byggföretag missar.</p>

<p>Har du koll på frånvaron från dag ett blir både lönekörning och likviditetsplanering enklare – börja med att strukturera tid och frånvaro i vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall för byggföretag →</a>.</p>

<h2>Sjuklöneperioden dag 1–14: arbetsgivarens ansvar</h2>
<p>De första 14 kalenderdagarna av en sjukperiod kallas sjuklöneperioden. Under den betalar du som byggföretag <strong>sjuklön motsvarande 80 % av den lön och de anställningsförmåner</strong> som den anställde skulle ha fått om hen arbetat. Perioden räknas i kalenderdagar, inte arbetsdagar, men sjuklön betalas för de dagar den anställde faktiskt skulle ha jobbat. Den anställde ska sjukanmäla sig <strong>redan första dagen</strong> och lämna en skriftlig försäkran om att hen varit sjuk.</p>
<p>Räkneexempel: en byggnadsarbetare med timlön 230 kr och 40-timmarsvecka har en veckolön på 9 200 kr. Sjuklönen för en full sjukvecka blir 80 % av 9 200 = <strong>7 360 kr</strong>. Per sjuk arbetsdag (8 timmar) betalar du 8 × 230 × 0,8 = <strong>1 472 kr</strong> i sjuklön, före karensavdrag.</p>

<h2>Karensavdraget – inte längre en "karensdag"</h2>
<p>Sedan 2019 har karensdagen ersatts av ett <strong>karensavdrag</strong>. Avdraget är <strong>20 % av en genomsnittlig veckas sjuklön</strong> och är ett fast belopp. Poängen med reformen är att avdraget blir lika stort oavsett när på dagen den anställde insjuknar. Blir yrkesarbetaren sjuk mitt i ett arbetspass och går hem, dras ändå hela karensavdraget – men aldrig mer än 20 % av en veckas sjuklön även om personen är borta flera dagar.</p>
<p>Fortsätter vi exemplet ovan: veckans sjuklön är 7 360 kr, alltså blir karensavdraget 20 % × 7 360 = <strong>1 472 kr</strong>. Samma avdrag gäller vid deltidssjukskrivning. Ett vanligt lönekörningsfel är att dra ett helt dagsbelopp för varje ny sjukperiod utan att räkna på veckogenomsnittet, eller att ta karensavdrag två gånger vid återinsjuknande inom fem dagar (då ska ingen ny karens tas). Kontrollera alltid mot den anställdes faktiska schema.</p>

<h2>Från dag 15: Försäkringskassans sjukpenning</h2>
<p>Håller sjukskrivningen i sig tar Försäkringskassan över från och med dag 15 med <strong>sjukpenning</strong>. Den ligger på cirka 80 % av den sjukpenninggrundande inkomsten (SGI), men beräknas kalenderdagsvis med en faktor 0,97, vilket i praktiken ger runt <strong>77,6 % av SGI</strong>. Sjukpenning kan betalas på <strong>25, 50, 75 eller 100 procent</strong> beroende på hur mycket arbetsförmågan är nedsatt.</p>
<p>Det finns ett tak: SGI för sjukpenning beräknas på högst <strong>8 prisbasbelopp</strong>. Prisbasbeloppet fastställs årligen (2025 var det 58 800 kr) – stäm av aktuellt belopp hos Försäkringskassan innan du räknar på en specifik lön. Efter 364 dagar kan sjukpenningen övergå till fortsättningsnivå på <strong>75 %</strong>. Din uppgift som arbetsgivare är att rapportera sjukfrånvaron och lämna uppgifter till Försäkringskassan, samt att redovisa sjuklönekostnaden (se nedan).</p>

<h2>VAB: Försäkringskassan betalar – inte du</h2>
<p>Vård av sjukt barn (VAB) är <strong>tillfällig föräldrapenning</strong> och betalas i sin helhet av Försäkringskassan. Som arbetsgivare betalar du varken ersättningen eller ansöker om den – den anställde anmäler VAB själv till Försäkringskassan och ansöker i efterhand. Din enda praktiska uppgift är att registrera frånvaron och dra av lön för de dagar personen vabbar.</p>
<ul>
<li>Ersättning cirka <strong>80 % av SGI</strong> (kalenderdagsberäknad, faktor 0,97), utan karens.</li>
<li>Lägre inkomsttak än sjukpenning: SGI för VAB beräknas på högst <strong>7,5 prisbasbelopp</strong>.</li>
<li>Gäller normalt barn mellan <strong>8 månader och 12 år</strong> (till dagen före 12-årsdagen), och upp till 16 år om barnet behöver mer tillsyn än normalt.</li>
<li>Max <strong>120 dagar per barn och år</strong>.</li>
</ul>

<h2>Extra skydd via Byggavtalet och AGS</h2>
<p>Lagen anger golvet, men de flesta byggföretag omfattas av kollektivavtal (Byggavtalet mellan Byggnads och Byggföretagen med flera). Avtalet ger normalt påslag utöver den lagstadgade ersättningen – dels <strong>kompletterande sjuklön</strong> för lönedelar över SGI-taket, dels <strong>AGS (Avtalsgruppsjukförsäkring via Afa Försäkring)</strong> som betalar en dagsersättning som toppar upp sjukpenningen från ungefär dag 15. Exakt startdag, procentsats och maxantal dagar styrs av ditt specifika avtal, så kontrollera villkoren i gällande Byggavtal och hos Afa Försäkring innan du lovar en anställd en viss nivå.</p>

<h2>Så sänker byggföretaget sjuklönekostnaden</h2>
<p>Ett skydd som särskilt gynnar mindre byggföretag är <strong>ersättning för höga sjuklönekostnader</strong>. Du rapporterar sjuklönekostnaden i arbetsgivardeklarationen (AGI) varje månad, och Försäkringskassan ersätter automatiskt den del av kostnaden som överstiger en viss andel av din totala lönekostnad. Tröskeln följer en glidande skala efter lönesummans storlek, och ersättningen är maximerad till <strong>250 000 kr per år</strong>. Har du få anställda och en tung sjukperiod kan det här betyda mycket för likviditeten – men du får bara ersättning för kostnader du faktiskt redovisat korrekt i AGI.</p>

<h2>Vanliga misstag och en enkel checklista</h2>
<ul>
<li>Att räkna karensavdrag som en hel dag i stället för 20 % av en veckas sjuklön.</li>
<li>Att ta nytt karensavdrag vid återinsjuknande inom fem kalenderdagar.</li>
<li>Att glömma allmänt högriskskydd – en anställd kan få högst <strong>10 karensavdrag under en rullande tolvmånadersperiod</strong>, därefter tas inget nytt.</li>
<li>Att missa att redovisa sjuklönekostnaden i AGI och därmed gå miste om ersättning.</li>
<li>Att tro att arbetsgivaren betalar VAB – det gör Försäkringskassan.</li>
</ul>
<p>Steg för steg: <strong>Dag 1</strong> – den anställde sjukanmäler sig, du registrerar frånvaron och lägger karensavdraget. <strong>Dag 8</strong> – läkarintyg krävs normalt från och med den åttonde dagen; vid särskilda skäl kan du begära förstadagsintyg. <strong>Dag 15</strong> – sjuklöneperioden slutar, Försäkringskassan tar över och du redovisar sjuklönekostnaden i AGI.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte lönekörningen åt dig, men systemet ger dig underlaget som gör den rätt. Med digital tidrapportering ser du exakt vilka dagar och timmar varje anställd skulle ha jobbat – vilket är precis vad du behöver för att räkna korrekt sjuklön och karensavdrag i stället för att gissa. Frånvaro registreras per person och projekt, så att sjuk- och VAB-dagar inte råkar faktureras på ett bygge. När månaden är slut har du ett spårbart underlag för både lön och AGI-redovisning, sparat i sju år enligt bokföringskraven.</p>

<h2>Vanliga frågor</h2>
<h3>Måste arbetsgivaren betala något vid VAB?</h3>
<p>Nej. VAB är tillfällig föräldrapenning och betalas helt av Försäkringskassan. Du registrerar frånvaron och drar av lön för de dagar den anställde vabbar, men du varken betalar eller ansöker om ersättningen – det gör den anställde själv.</p>
<h3>Hur stort är karensavdraget?</h3>
<p>Karensavdraget är 20 % av en genomsnittlig veckas sjuklön och är ett fast belopp oavsett när på dagen den anställde blir sjuk. Det görs på den första sjukdagen och blir aldrig större än så, även om sjukperioden pågår i flera dagar.</p>
<h3>När tar Försäkringskassan över betalningen?</h3>
<p>Från och med dag 15 i sjukperioden. Dag 1–14 är arbetsgivarens sjuklöneperiod, därefter kan Försäkringskassan betala sjukpenning på 25, 50, 75 eller 100 procent beroende på arbetsförmågans nedsättning.</p>
<h3>Kan små byggföretag få tillbaka höga sjuklönekostnader?</h3>
<p>Ja. Via ersättningen för höga sjuklönekostnader betalar Försäkringskassan automatiskt tillbaka den del av din sjuklönekostnad som överstiger en tröskel kopplad till din lönesumma, upp till 250 000 kr per år. Förutsättningen är att du redovisar kostnaden i arbetsgivardeklarationen varje månad.</p>

<h2>Kom igång</h2>
<p>Rätt sjuklön och karensavdrag börjar med rätt tidunderlag. Ladda ner vår gratis <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och få ordning på arbetade timmar och frånvaro redan denna vecka. Vill du se hur digital tid- och frånvarohantering ser ut i praktiken? <a href="/sv/contact">Boka en demo →</a> så visar vi upplägget för ditt byggföretag.</p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag – så håller du koll</a> och vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a>.</p>
`;

const A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG: BlogPost = {
  _id: "code-"+"sjuklon-karensavdrag-vab-byggforetag",
  title: "Vem betalar vid sjukdom och VAB? Guide för byggföretag", slug: "sjuklon-karensavdrag-vab-byggforetag", locale: "sv",
  excerpt: "Byggföretaget betalar sjuklön dag 1–14, Försäkringskassan tar över från dag 15 och VAB betalas alltid av Försäkringskassan – här är hela kedjan med räkneexempel.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG_HTML,
  seoTitle: "Sjuklön, karensavdrag & VAB | ByggExp", seoDescription: "Vem betalar vid sjukdom och VAB i byggföretag? Sjuklön dag 1–14, karensavdrag, sjukpenning från dag 15 och VAB från Försäkringskassan – förklarat med exempel.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:18:00.000Z", createdAt: "2026-08-18T19:18:00.000Z", updatedAt: "2026-08-18T19:18:00.000Z",
};

const A_STARTA_BYGGFORETAG_2026_HTML = `
<p>Marknaden för bygg- och entreprenadtjänster fortsätter att efterfråga seriösa hantverkare, och tröskeln för att starta eget är låg – på pappret. I praktiken finns det däremot en enda sak som avgör om du överhuvudtaget kan ta ett entreprenaduppdrag: <strong>godkännande för F-skatt</strong>. Utan den kommer ingen professionell beställare eller generalentreprenör att anlita dig, oavsett hur skicklig du är. Den här guiden går igenom hela vägen från val av företagsform till fakturan på ditt första jobb, med fokus på de beslut som faktiskt kostar pengar om du gör fel.</p>

<p>Ett bra första steg innan du ens har org.nr är att öva på att sätta ihop ett proffsigt anbud – testa vår gratis <a href="/sv/verktyg/offert-mall">offertmall</a> så att du kan lämna ett trovärdigt pris redan från dag ett.</p>

<h2>Enskild firma eller aktiebolag för bygg?</h2>
<p>Valet av företagsform handlar om ansvar, kapital och trovärdighet. I en <strong>enskild firma</strong> (enskild näringsverksamhet) finns ingen gräns mellan dig och företaget – du är personligen och obegränsat ansvarig för alla skulder. Det krävs inget startkapital, och namnskyddet gäller bara inom länet. Det passar dig som startar ensam med begränsad risk och vill komma igång snabbt.</p>
<p>Ett <strong>aktiebolag</strong> kräver 25 000 kr i aktiekapital för privat AB, men begränsar ditt ansvar till det insatta kapitalet och ger namnskydd i hela landet. För bygg väger det tungt: entreprenaduppdrag innebär reklamationsrisk och garantiåtaganden i flera år, och ett fel kan bli dyrt. Många beställare uppfattar dessutom ett AB som mer stabilt, vilket underlättar när du konkurrerar om större jobb eller ska anställa.</p>
<p>Tumregeln: väljer du att ta på dig entreprenadrisk eller planerar att anställa, är AB oftast rätt. Startar du solo med små jobb kan enskild firma fungera i början – och du kan alltid ombilda senare. Vill du gräva djupare i skatt och ansvar, läs vår genomgång av <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">enskild firma eller aktiebolag för bygg</a>.</p>

<h2>F-skatt – i praktiken obligatoriskt för bygguppdrag</h2>
<p>F-skatt är ett godkännande från Skatteverket som visar att du själv sköter din preliminärskatt och dina socialavgifter. Formellt är det inte ett lagkrav för att driva företag – men för byggbranschen är det i realiteten obligatoriskt. Anledningen ligger i reglerna för den som betalar dig: om en beställare anlitar någon som <em>saknar</em> godkänd F-skatt, måste beställaren dra av 30 % preliminärskatt på ersättningen och dessutom betala arbetsgivaravgifter (cirka 31,42 %) ovanpå.</p>
<p>Ingen seriös byggkund eller generalentreprenör tar på sig det administrativa krånglet och den extra kostnaden. Konsekvensen är enkel: utan godkänd F-skatt får du inga entreprenaduppdrag. F-skatten är därför inte en formalitet du kan skjuta upp – den är förutsättningen för hela affären, och den krävs också för att du ska kunna erbjuda dina privatkunder ROT-avdrag.</p>
<p>Du ansöker om F-skatt via verksamt.se i samband med att du registrerar företaget. Har du samtidigt en anställning vid sidan av företaget ansöker du om <strong>FA-skatt</strong>, som kombinerar A-skatt på lönen med F-skatt på näringsverksamheten. Räkna med att godkännandet inte är omedelbart – ansök i god tid innan du planerar att fakturera ditt första jobb.</p>

<h2>Registrera företaget steg för steg</h2>
<p>Registreringen görs i praktiken hos två myndigheter: Bolagsverket och Skatteverket, samlat via e-tjänsten på verksamt.se.</p>
<ol>
<li><strong>Välj företagsform</strong> och registrera företaget. För AB upprättar du stiftelseurkund och bolagsordning, betalar in aktiekapitalet, får bankintyg, upprättar aktiebok och ansöker hos Bolagsverket. Ansökan måste lämnas inom sex månader från stiftelseurkunden.</li>
<li><strong>Ansök om F-skatt</strong> och registrera dig för <strong>moms</strong>. Standardmomsen är 25 %. Gränsen för momsbefrielse är 120 000 kr i omsättning per år, men de flesta byggföretag momsregistrerar sig ändå eftersom kunderna är företag.</li>
<li><strong>Registrera dig som arbetsgivare</strong> hos Skatteverket om du ska anställa.</li>
<li><strong>Anmäl verklig huvudman</strong> till Bolagsverket efter att AB:t fått organisationsnummer.</li>
</ol>
<p>Avgiften för att registrera ett nytt aktiebolag är 1 900 kr via e-tjänsten (2 200 kr på papper). Att registrera en enskild näringsidkares företagsnamn är frivilligt och kostar runt 1 200 kr. Kontrollera alltid aktuella avgifter hos Bolagsverket innan du betalar.</p>

<h2>ID06, personalliggare och kollektivavtal</h2>
<p><strong>ID06</strong> är byggbranschens system för legitimation och elektronisk närvaroregistrering. Kortet registrerar närvaro i den elektroniska personalliggaren, och nästan alla byggarbetsplatser och generalentreprenörer kräver ID06 av sina underentreprenörer. Du registrerar företaget via MittID06 genom en firmatecknare eller administratör och beställer sedan kort.</p>
<p>Elektronisk personalliggare är ett lagkrav på byggarbetsplatser där den totala kostnaden överstiger fyra prisbasbelopp exklusive moms – cirka 235 000 kr (prisbasbeloppet 2025 var 58 800 kr). Byggherren ska anmäla byggarbetsplatsen till Skatteverket innan arbetet påbörjas. Saknas eller är personalliggaren felaktig kan Skatteverket ta ut en kontrollavgift på 12 500 kr plus 2 500 kr per person som inte är registrerad. Verifiera aktuella belopp och 2026 års prisbasbelopp hos Skatteverket.</p>
<p><strong>Byggföretagen</strong> är branschens arbetsgivarorganisation med runt 4 000 medlemsföretag och part i Byggavtalet tillsammans med Byggnads. Kollektivavtal är inte lagstadgat, men krävs för medlemskap och efterfrågas ofta av stora offentliga och privata beställare. Medlemskapet ger dessutom juridisk rådgivning inom arbetsrätt, arbetsmiljö och entreprenadjuridik.</p>

<h2>Försäkringar du inte kan hoppa över</h2>
<p>Ingen generell företagsförsäkring är lagstadgad för ett litet byggföretag – men standardavtalen förutsätter att du har den. Kommersiella entreprenadavtal som <strong>AB 04</strong> och <strong>ABT 06</strong>, liksom konsumentavtalen <strong>ABS 18</strong> och hantverkarformuläret, utgår från att entreprenören håller en ansvars- och allriskförsäkring (entreprenadförsäkring). I praktiken kommer du inte igenom en avtalsförhandling utan den, och en oförsäkrad skada kan sänka hela företaget.</p>
<p>Så fort du anställer tillkommer avtalsförsäkringar via kollektivavtalet. Då blir arbetsskadeförsäkringen TFA och tjänstepensionen Avtalspension SAF-LO obligatoriska och tecknas via Fora. Se försäkringarna som en del av offertkalkylen, inte en frivillig utgift – de är ett faktiskt krav från både beställare och avtal.</p>

<h2>Ditt första uppdrag – offert, ROT och avtal</h2>
<p>Ditt första jobb avgör ditt rykte. Lämna en tydlig, specificerad offert där arbete och material redovisas var för sig, med giltighetstid och betalningsvillkor. Välj rätt standardavtal för uppdraget – AB 04/ABT 06 mot företag, ABS 18 eller hantverkarformuläret mot privatpersoner. Har du privatkunder kan du erbjuda <strong>ROT-avdrag</strong>: kunden får dra av 30 % av arbetskostnaden (inte materialet), och det förutsätter att ditt företag är godkänt för F-skatt. Räkna enkelt ut kundens nettopris med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a> innan du skickar offerten. Kontrollera aktuellt maxbelopp per person hos Skatteverket, eftersom ROT-taket har ändrats de senaste åren.</p>

<h2>Vanligaste misstagen när du startar byggföretag</h2>
<ul>
<li>Att börja fakturera innan F-skatten är godkänd – då tvingas beställaren dra 30 % preliminärskatt.</li>
<li>Att välja enskild firma utan att förstå det personliga och obegränsade ansvaret för skulder.</li>
<li>Att sakna ansvars-/entreprenadförsäkring som standardavtalen kräver.</li>
<li>Att strunta i ID06 och personalliggare – med kontrollavgifter på 12 500 kr plus 2 500 kr per person som följd.</li>
<li>Att lämna luddiga offerter utan specificerat arbete, material och betalningsvillkor.</li>
<li>Att glömma momsregistrering trots att i princip alla kunder är företag.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte över myndighetsregistreringen – F-skatt, moms och Bolagsverket sköter du hos Skatteverket och verksamt.se. Det vi hjälper dig med är allt runt själva uppdragen: skapa specificerade offerter med korrekt uppdelning av arbete och material, räkna ut ROT-avdraget åt kunden och hålla ordning på fakturor och betalningsvillkor. När du väl har org.nr och godkänd F-skatt är det de dagliga rutinerna som avgör lönsamheten – och där sparar du tid genom att jobba i mallar och kalkyler istället för lösa kalkylark. Bokföring och personalliggare hanterar du i separata system, men underlaget du behöver för att prissätta rätt bygger du enkelt hos oss.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha F-skatt för att starta byggföretag?</h3>
<p>Formellt är F-skatt inte ett lagkrav för att driva företag. I praktiken är det obligatoriskt för bygg: utan godkänd F-skatt måste din beställare dra 30 % preliminärskatt och betala arbetsgivaravgifter på din ersättning, vilket gör att ingen seriös kund anlitar dig.</p>
<h3>Enskild firma eller aktiebolag – vad passar bäst för bygg?</h3>
<p>AB begränsar ditt ansvar till aktiekapitalet på 25 000 kr och ger namnskydd i hela landet, vilket passar den som tar entreprenadrisk eller ska anställa. Enskild firma kräver inget kapital men innebär personligt och obegränsat ansvar för alla skulder.</p>
<h3>Behöver jag ID06 och personalliggare?</h3>
<p>ID06 krävs i praktiken av nästan alla byggarbetsplatser och generalentreprenörer. Elektronisk personalliggare är lagkrav när projektets totala kostnad överstiger cirka 235 000 kr, och saknad liggare ger kontrollavgift på 12 500 kr plus 2 500 kr per oregistrerad person.</p>
<h3>Måste jag ha försäkring för att ta uppdrag?</h3>
<p>Ingen försäkring är lagstadgad för ett litet byggföretag, men standardavtalen AB 04, ABT 06 och ABS 18 förutsätter att du har en ansvars- och entreprenadförsäkring. Har du anställda tillkommer avtalsförsäkringarna TFA och tjänstepension via Fora.</p>

<h2>Kom igång</h2>
<p>Börja med det som ger effekt direkt: sätt upp en proffsig offert med vår <a href="/sv/verktyg/offert-mall">offertmall</a> och visa kunden nettopriset med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur ByggExp hänger ihop offert, ROT och fakturering i ett flöde, <a href="/sv/contact">boka en demo</a> så går vi igenom det tillsammans.</p>
<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för bygg</a>, <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a> och <a href="/sv/blog/skriva-offert">Så skriver du en offert som vinner jobbet</a>.</p>
`;

const A_STARTA_BYGGFORETAG_2026: BlogPost = {
  _id: "code-"+"starta-byggforetag-2026",
  title: "Starta byggföretag 2026 – kompletta guiden från företagsform till första uppdraget", slug: "starta-byggforetag-2026", locale: "sv",
  excerpt: "Allt du behöver för att starta byggföretag 2026 – från val av företagsform och F-skatt till ID06, försäkring och ditt första entreprenaduppdrag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_STARTA_BYGGFORETAG_2026_HTML,
  seoTitle: "Starta byggföretag 2026 | ByggExp", seoDescription: "Så startar du byggföretag 2026: enskild firma eller AB, F-skatt, ID06, försäkring och första uppdraget. Konkret guide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:21:00.000Z", createdAt: "2026-08-18T19:21:00.000Z", updatedAt: "2026-08-18T19:21:00.000Z",
};

const A_FACTORING_BYGGFORETAG_HTML = `
<p>Byggbranschen betalar nästan alltid ut pengar innan de kommer in. Material köps och löner betalas veckovis, underentreprenörer ska ha sitt – men beställaren betalar först 30, ibland 60 dagar efter fakturadatum. Det glappet i kassan är inte ett tecken på dålig ekonomi, det är så branschen fungerar. Factoring är ett av verktygen för att överbrygga glappet, men säljsidorna berättar sällan hela kostnadsbilden. Här går vi igenom hur det faktiskt fungerar, oberoende och konkret.</p>

<p>Innan du ens funderar på factoring: se till att fakturorna är korrekta och går ut i tid. Fel förfallodatum, saknad momsmärkning eller otydliga rader gör att betalningen dröjer ännu längre. Använd gärna vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall för byggföretag →</a> så att grunden sitter.</p>

<h2>Vad är factoring – och vad är skillnaden mot ett lån?</h2>
<p>Factoring betyder att du använder dina obetalda kundfakturor för att få loss pengar direkt istället för att vänta på förfallodagen. Det handlar inte om ett nytt banklån mot säkerhet i fastigheter eller maskiner, utan om att frigöra det kapital som redan är bundet i dina kundfordringar. För ett byggbolag i tillväxt, med stora materialutlägg och långa betaltider, är det ofta just kundfordringarna som binder mest pengar.</p>
<p>Det finns två huvudvarianter, och de är viktiga att hålla isär:</p>
<ul>
<li><strong>Fakturaköp</strong> – du säljer fakturan till factoringbolaget, som tar över hela kreditrisken. Hos exempelvis Svea får du pengarna på kontot 1–2 dagar efter köpet. Avgiften beror på fakturans storlek, kundens kreditvärdighet, betalningsvillkor och om fakturan är internationell.</li>
<li><strong>Fakturabelåning</strong> – du lånar mot fakturorna. Factoringbolaget betalar ut en förskottsandel direkt (Svea anger 80–85 %, andra källor omkring 70 %) och resten när kunden betalar. Du behåller kreditrisken tills betalningen kommit in.</li>
</ul>

<h2>Med regress eller utan regress – vem bär risken?</h2>
<p>Den enskilt viktigaste frågan i ett factoringavtal är vem som står risken om beställaren inte betalar.</p>
<ul>
<li><strong>Med regress:</strong> obetalda fakturor återgår till dig efter en viss tid. Du bär alltså kreditrisken – factoringbolaget har bara förskotterat pengar. Detta är i praktiken samma sak som fakturabelåning.</li>
<li><strong>Utan regress:</strong> factoringbolaget tar över hela kreditrisken. Om kunden inte betalar är det deras förlust, inte din. Detta motsvarar ett äkta fakturaköp.</li>
</ul>
<p>Haken är att factoring utan regress i praktiken bara erbjuds mot kreditvärdiga lågriskkunder. Har du en beställare med svag ekonomi eller en privatkund på ROT-jobb, kommer du sällan bli av med risken helt – och det är just då du hade behövt det mest.</p>

<h2>Vad kostar factoring egentligen?</h2>
<p>Här skiljer sig marknadsföringen från verkligheten. En typisk månadsavgift eller ränta ligger på 0,8–1,5 % av fakturabeloppet. Men uttryckt som effektiv årsränta – med alla avgifter inräknade – kan kostnaden spänna från runt 6 % upp mot 50 %. Utöver själva räntan tillkommer ofta:</p>
<ul>
<li>Uppläggningsavgift</li>
<li>Aviavgift per faktura</li>
<li>Minimiavgift eller krav på årsvolym</li>
<li>Påminnelse- och inkassoavgifter</li>
</ul>
<p>Förskottsandelen ligger vanligen på 70–90 % och utbetalning sker inom 1–10 dagar.</p>
<h3>Räkneexempel på en byggfaktura</h3>
<p>Anta en faktura på 200 000 kr med 30 dagars kredittid, fakturabelåning med 85 % förskott och 1,2 % månadsavgift:</p>
<ul>
<li>Direkt utbetalt: 85 % × 200 000 = <strong>170 000 kr</strong></li>
<li>Avgift för en månad: 1,2 % × 200 000 = <strong>2 400 kr</strong></li>
<li>När kunden betalat får du resterande 30 000 kr minus eventuella avi- och tilläggsavgifter.</li>
</ul>
<p>2 400 kr för att få loss 170 000 kr en månad tidigare motsvarar en betydligt högre effektiv årsränta än siffran "1,2 %" antyder. Räkna alltid på hela året och alla avgifter, inte på månadssiffran isolerat.</p>

<h2>För- och nackdelar för byggföretag</h2>
<p><strong>Fördelar:</strong></p>
<ul>
<li>Snabb likviditet – pengar på kontot inom dagar istället för veckor.</li>
<li>Vid factoring utan regress: minskad eller borttagen kreditrisk.</li>
<li>Utlagd reskontra – factoringbolaget kan sköta påminnelser och inkasso.</li>
<li>Frigör bundet kapital utan att belasta bolaget med nytt banklån.</li>
</ul>
<p><strong>Nackdelar:</strong></p>
<ul>
<li>Det kostar marginal – på projekt med redan tunn vinst kan avgiften äta upp lönsamheten.</li>
<li>Bindningstider och volymkrav som gör det svårt att kliva av.</li>
<li>Vid öppen factoring måste kunden notifieras om att fakturan överlåtits eller pantsatts, vilket kan påverka kundrelationen.</li>
</ul>

<h2>Factoring vs checkkredit och företagslån</h2>
<p>Factoring är inte det enda sättet att hantera säsong och projekttoppar. En <strong>checkkredit</strong> ger en flexibel buffert du drar på vid behov och betalar ränta bara på utnyttjat belopp – bra för oregelbundna svackor. Ett <strong>företagslån</strong> passar större, planerade investeringar som en ny maskinpark. Factoring är starkast när problemet specifikt är att kapital fastnar i kundfordringar med långa betaltider, och när fakturavolymen är jämn nog att motivera avgifterna. Många byggbolag kombinerar en checkkredit för löpande svängningar med factoring på de största projektfakturorna.</p>

<h2>Regler och bokföring att hålla koll på</h2>
<p>Ett par saker är värda att känna till innan du skriver på:</p>
<ul>
<li><strong>Räntelagen (1975:635):</strong> en fordran mellan näringsidkare förfaller senast 30 dagar efter att du framställt krav. Längre betaltid B2B är tillåten bara om du uttryckligen godkänt den – det är därför byggföretag ofta lever med 30–60 dagars kredittid.</li>
<li><strong>Dröjsmålsränta:</strong> vid sen betalning B2B är räntan referensräntan + 8 procentenheter (räntelagen 6 §). Referensräntan låg kring 2 % under 2025/2026, vilket ger cirka 10 % dröjsmålsränta. Avtalsvillkor som fråntar dig rätten till dröjsmålsränta är ogiltiga (4 a §).</li>
<li><strong>Öppen vs dold factoring:</strong> fakturabelåning innebär vanligen öppen factoring – kunden notifieras och betalar till factoringbolaget, som sköter reskontra och påminnelser.</li>
<li><strong>Överlåtelseförbud:</strong> vissa entreprenadavtal förbjuder överlåtelse av fordran. Kolla avtalet innan du säljer eller belånar fakturan.</li>
<li><strong>ROT och moms:</strong> alla factoringbolag köper inte ROT-fakturor eller fakturor på löpande räkning. Momsen på factoringavgifterna ska bokföras korrekt, och grundreglerna gäller fortfarande – ROT-avdrag är 30 % av arbetskostnaden, max 50 000 kr per person och år, och mellan byggföretag gäller omvänd byggmoms.</li>
</ul>

<h2>Så väljer du factoringbolag – checklista</h2>
<ol>
<li>Be om <strong>effektiv årskostnad</strong> med alla avgifter, inte bara månadsräntan.</li>
<li>Kontrollera bindningstid och eventuella volymkrav.</li>
<li>Läs regressvillkoren noga – med eller utan regress avgör vem som bär risken.</li>
<li>Fråga om de köper dina fakturatyper (ROT, löpande räkning, offentliga beställare).</li>
<li>Räkna på om marginalen på dina projekt tål avgiften.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är inget factoringbolag och ger ingen finansiell rådgivning. Men mycket av likviditetsproblemet börjar i fakturaflödet – fakturor som går ut sent, saknar rätt uppgifter eller inte följs upp. I ByggExp skapar du korrekta byggfakturor med rätt momsmärkning och ROT-uppgifter, håller koll på förfallodatum och ser vilka fakturor som är obetalda. Ju stramare ditt eget fakturaflöde är, desto mindre behöver du luta dig på dyr extern finansiering – och desto bättre underlag har du om du väljer factoring. Behöver du bara komma igång snabbt hittar du fler verktyg i vår <a href="/sv/verktyg">samling av gratis byggverktyg →</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan fakturaköp och fakturabelåning?</h3>
<p>Vid fakturaköp säljer du fakturan och factoringbolaget tar över hela kreditrisken. Vid fakturabelåning lånar du mot fakturan, får ett förskott på 70–90 % och behåller kreditrisken tills kunden betalar.</p>
<h3>Vad kostar factoring för ett byggföretag?</h3>
<p>Månadsavgiften ligger typiskt på 0,8–1,5 % av fakturabeloppet, men effektiv årsränta med alla avgifter inräknade kan spänna från cirka 6 % till uppemot 50 %. Uppläggnings-, avi- och minimiavgifter tillkommer ofta.</p>
<h3>Kan jag använda factoring på ROT-fakturor?</h3>
<p>Ibland, men inte alla factoringbolag köper ROT-fakturor eller fakturor på löpande räkning. Fråga specifikt innan du tecknar avtal, och kontrollera att entreprenadavtalet inte förbjuder överlåtelse av fordran.</p>
<h3>Är factoring bättre än en checkkredit?</h3>
<p>Det beror på behovet. Factoring passar när kapital fastnar i kundfordringar med långa betaltider. En checkkredit är mer flexibel för oregelbundna svackor. Många byggbolag kombinerar båda.</p>

<h2>Kom igång</h2>
<p>Börja med att strama upp ditt eget fakturaflöde innan du betalar för extern finansiering. Skapa korrekta fakturor med vår <a href="/sv/verktyg/faktura-mall">gratis fakturamall →</a>, eller <a href="/sv/contact">boka en demo →</a> så visar vi hur ByggExp håller koll på förfallodatum och obetalda fakturor. Den här guiden är oberoende vägledning, inte finansiell rådgivning.</p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>.</p>
`;

const A_FACTORING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"factoring-byggforetag",
  title: "Factoring för byggföretag – frigör kapital utan att vänta 30–60 dagar", slug: "factoring-byggforetag", locale: "sv",
  excerpt: "En oberoende guide till factoring för byggföretag: skillnaden mellan fakturaköp och fakturabelåning, vad det faktiskt kostar och när det passar.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_FACTORING_BYGGFORETAG_HTML,
  seoTitle: "Factoring för byggföretag | ByggExp", seoDescription: "Oberoende guide till factoring för byggföretag 2026: fakturaköp vs belåning, för- och nackdelar, ungefärlig kostnad och räkneexempel.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:33:00.000Z", createdAt: "2026-08-18T19:33:00.000Z", updatedAt: "2026-08-18T19:33:00.000Z",
};

const A_ROTAVDRAG_2026_NYA_REGLER_FORETAG_HTML = `
<p>Den tillfälliga höjningen av rotavdraget till 50 % av arbetskostnaden gällde bara under 2025. Från och med 2026 är vi tillbaka på den ordinarie nivån: 30 % av arbetskostnaden. För dig som driver byggföretag betyder det att offerter, nettopriser och kassaflöde påverkas direkt – och att du inte får lova kunden fel siffra på ett jobb som betalas 2026.</p>

<p>Behöver du snabbt räkna ut kundens nettopris och företagets begäran om utbetalning? Testa vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator -&gt;</a> innan du skickar offerten.</p>

<h2>Det här gäller 2026 – siffrorna klart och tydligt</h2>
<p>Utgå från dessa nivåer när du prissätter ett ROT-jobb under 2026:</p>
<ul>
<li><strong>ROT: 30 % av arbetskostnaden.</strong> Det är den ordinarie nivån, som gäller igen efter den tillfälliga höjningen 2025.</li>
<li><strong>Endast arbete ger avdrag.</strong> Material, resekostnader och utrustning omfattas aldrig – de måste redovisas separat.</li>
<li><strong>Tak: 50 000 kr per person och år för ROT.</strong> ROT och RUT räknas dessutom ihop till maximalt 75 000 kr per person och år, där ROT-delen alltså aldrig får överstiga 50 000 kr.</li>
<li><strong>RUT: 50 % av arbetskostnaden</strong> (oförändrad ordinarie nivå). Skillnaden mot ROT gör att rätt kategorisering av arbetet påverkar kundens avdrag.</li>
</ul>
<p>Verifiera alltid det aktuella taket och gällande regler mot Skatteverket innan du binder dig i en offert.</p>

<h2>2025 var ett undantag – 12 maj till 31 december</h2>
<p>Under en avgränsad period 2025 höjdes ROT tillfälligt till 50 % av arbetskostnaden. Höjningen gällde enbart arbete som <strong>betalades mellan 12 maj och 31 december 2025</strong>. Den perioden är slut. Risken nu är att en kund minns "50 %" från förra året och förväntar sig samma avdrag på ett jobb du utför i år. Så är det inte – på arbete som betalas 2026 gäller 30 %. Var tydlig med det redan i offertskedet, annars sitter du med en missnöjd kund när slutfakturan inte ger det avdrag hen räknat med.</p>

<h2>Betalningsdatumet styr allt</h2>
<p>Det är inte fakturadatumet och inte när arbetet utfördes som avgör – det är <strong>datumet då kunden betalar fakturan</strong>. Betalningsdatumet bestämmer både vilket beskattningsår avdraget hamnar på och vilka procentregler som gäller.</p>
<p>Det blir extra viktigt runt årsskiftet. Ett arbete som är utfört i december 2025 men där kunden betalar fakturan den 2 januari 2026 omfattas av 2026 års regler – alltså 30 %, inte 50 %. Utförandedatumet spelar ingen roll för procentsatsen. Planera därför fakturering och betalningspåminnelser med detta i åtanke, och skriv aldrig in en avdragsnivå i avtalet utan att koppla den till betalningstidpunkten.</p>

<h2>Så räknar du och sätter priset rätt</h2>
<p>Ett räkneexempel på ett badrumsjobb som betalas under 2026:</p>
<ul>
<li>Arbetskostnad: 80 000 kr inkl. moms</li>
<li>Material: 40 000 kr inkl. moms (ger inget avdrag)</li>
<li>ROT-avdrag: 30 % av 80 000 kr = <strong>24 000 kr</strong></li>
<li>Kunden betalar: 80 000 − 24 000 + 40 000 = <strong>96 000 kr</strong></li>
<li>Företaget begär utbetalning från Skatteverket: <strong>24 000 kr</strong></li>
</ul>
<p>Separera alltid arbete och material på fakturan – annars kan Skatteverket ifrågasätta hur du fördelat kostnaden. Kontrollera också att kundens 30 %-avdrag ryms under taket på 50 000 kr, särskilt om hen redan gjort andra ROT-jobb under året. En tydlig faktura där posterna är uppdelade skapar du enkelt med vår <a href="/sv/verktyg/faktura-mall">fakturamall</a>, och du lägger in avdraget redan i anbudet med vår <a href="/sv/verktyg/offert-mall">offertmall</a>.</p>

<h2>Fakturamodellen steg för steg för utföraren</h2>
<p>Fakturamodellen är det vanligaste sättet att hantera ROT, och det är du som utförare som sköter administrationen:</p>
<ol>
<li><strong>Ha F-skatt.</strong> Endast företag med godkänd F-skatt får tillämpa avdraget.</li>
<li><strong>Dra av kundens preliminära ROT direkt på fakturan.</strong> Kunden betalar bara sin nettodel.</li>
<li><strong>Se till att kunden betalar elektroniskt.</strong> Kort, BankID, Swish eller kontoöverföring krävs sedan 1 januari 2020 – kontant betalning godkänns inte.</li>
<li><strong>Begär utbetalning från Skatteverket</strong> för resterande belopp. Du behöver kundens personnummer, fastighets- eller lägenhetsuppgifter samt arbetskostnaden.</li>
</ol>
<p>Kontrollera också grundkraven: kunden ska äga och bo i (eller ha nära anknytning till) bostaden som renoveras, ROT gäller inte hyresrätter, och arbetet får inte utföras av kundens eget företag eller någon närstående.</p>

<h2>När Skatteverket nekar – och du sitter med Svarte Petter</h2>
<p>ROT är en skattereduktion, inte ett kostnadsavdrag. Reduktionen kan aldrig överstiga kundens sammanlagda skatt (inkomstskatt, fastighetsskatt med mera). Skatteverket kan neka utbetalning om kundens tak redan är fullt, om kunden har för låg skatt, eller om arbetet kategoriserats fel. Då riskerar du att stå utan den del du redan dragit av på fakturan.</p>
<p>Skydda dig genom att skriva in en klausul i avtalet: om ROT-avdraget helt eller delvis uteblir, oavsett orsak, betalar kunden mellanskillnaden. Det är en enkel mening som kan spara dig tusenlappar per jobb.</p>

<h2>Checklista inför varje ROT-jobb 2026</h2>
<ul>
<li>Kontrollera att kundens ROT-tak (max 50 000 kr) inte redan är förbrukat.</li>
<li>Räkna med 30 %, inte 50 % – och koppla nivån till betalningsdatumet.</li>
<li>Dela upp arbete och material tydligt på fakturan.</li>
<li>Se till att kunden betalar elektroniskt.</li>
<li>Kontrollera bostadsform och ägande (inte hyresrätt, inte närstående).</li>
<li>Lägg in avtalsklausulen om att kunden betalar mellanskillnaden om avdraget uteblir.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med separata poster för arbete och material, så att ROT-underlaget blir rätt från start. Du lägger in det preliminära avdraget på fakturan, håller koll på betalningsdatum och samlar de uppgifter du behöver för begäran om utbetalning – personnummer, fastighets- eller lägenhetsuppgifter och arbetskostnad. Verktygen hjälper dig att jobba strukturerat, men du ansvarar själv för att kontrollera aktuella belopp och regler mot Skatteverket för varje enskilt jobb.</p>

<h2>Vanliga frågor</h2>
<h3>Är rotavdraget 30 % eller 50 % 2026?</h3>
<p>30 % av arbetskostnaden. Den tillfälliga höjningen till 50 % gällde enbart arbete som betalades mellan 12 maj och 31 december 2025 och gäller inte längre.</p>
<h3>Vilket datum avgör vilken ROT-nivå som gäller?</h3>
<p>Betalningsdatumet på fakturan – inte fakturadatumet och inte när arbetet utfördes. Ett jobb som betalas 2 januari 2026 ger 30 %, även om arbetet utfördes 2025.</p>
<h3>Hur mycket ROT kan en kund få per år?</h3>
<p>Högst 50 000 kr per person och år för ROT. ROT och RUT räknas ihop till maximalt 75 000 kr per person och år, där ROT-delen aldrig får överstiga 50 000 kr.</p>
<h3>Vad händer om Skatteverket nekar utbetalningen?</h3>
<p>Då riskerar du att stå utan den avdragna delen. Skriv därför in i avtalet att kunden betalar mellanskillnaden om avdraget uteblir, exempelvis på grund av fullt tak eller för låg skatt.</p>

<h2>Kom igång</h2>
<p>Räkna ut kundens nettopris och företagets utbetalning på sekunder med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>. Vill du se hur ByggExp kan effektivisera hela flödet från offert till betald faktura? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">Rotavdrag – så fungerar det</a>, <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_ROTAVDRAG_2026_NYA_REGLER_FORETAG: BlogPost = {
  _id: "code-"+"rotavdrag-2026-nya-regler-foretag",
  title: "Rotavdrag 2026 för företag – så prissätter och fakturerar du rätt", slug: "rotavdrag-2026-nya-regler-foretag", locale: "sv",
  excerpt: "Den tillfälliga 50 %-höjningen är slut – 2026 gäller 30 % ROT igen, och betalningsdatumet avgör allt när du offererar och fakturerar.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: A_ROTAVDRAG_2026_NYA_REGLER_FORETAG_HTML,
  seoTitle: "Rotavdrag 2026 företag | ByggExp", seoDescription: "ROT är 30 % av arbetskostnaden 2026 – den tillfälliga 50 %-nivån gällde bara 2025. Så prissätter, fakturerar och begär du utbetalning rätt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:36:00.000Z", createdAt: "2026-08-18T19:36:00.000Z", updatedAt: "2026-08-18T19:36:00.000Z",
};

const A_AVDRAG_ENSKILD_FIRMA_BYGG_HTML = `
<p>Som hantverkare i enskild firma sänker rätt avdrag skatten direkt på ditt överskott – det är beloppet du redovisar på NE-bilagan som beskattas, så varje avdragsgill krona du missar blir dyrare skatt. Många byggare drar av för lite på sådant de faktiskt har rätt till, och drar samtidigt av sådant Skatteverket underkänner vid kontroll. Här går vi igenom de vanligaste missarna med 2026 års regler och belopp.</p>

<p>Vill du räkna och dokumentera löpande i stället för att gissa i efterhand? Använd <a href="/sv/verktyg">våra gratis verktyg för byggföretagare -&gt;</a> för att hålla ordning på mil, offerter och underlag redan under året.</p>

<h2>Arbetsrum hemma – schablonavdraget de flesta glömmer</h2>
<p>Sköter du offerter, planering, beställningar och administration hemifrån kan du ha rätt till ett schablonavdrag för arbetsrum, även om rummet inte är särskilt inrättat. Beloppen för 2026 är:</p>
<ul>
<li><strong>2 000 kr/år</strong> om du bor i en fastighet som ägs av dig eller din make/maka, till exempel villa.</li>
<li><strong>4 000 kr/år</strong> om du bor i hyresrätt eller bostadsrätt.</li>
</ul>
<p>Förutsättningen är att du arbetar <strong>minst 800 timmar per år</strong> i bostaden för verksamheten. Offert- och planeringstid, materialbeställningar, bokföring och kundkontakt räknas – inte bara ren skrivbordstid. För en byggare som lägger kvällar på anbud och fakturering är 800 timmar ofta lättare att nå än man tror.</p>
<p>Är arbetsrummet i stället <em>särskilt inrättat</em> – klart avskilt och olämpligt för privat bruk – kan du i stället dra av faktisk merkostnad, som extra el, uppvärmning och städning. Kraven är dock stränga och uppfylls sällan i en vanlig bostad, så för de flesta är schablonen den realistiska vägen.</p>

<h2>Milersättning och körjournal – 25 kr/mil med egen bil</h2>
<p>Kör du din egen (eller privatleasade) bil i verksamheten får du ett schablonavdrag på <strong>25 kr/mil (2,50 kr/km)</strong> för både inkomstår 2025 och 2026. Det är ett schablonbelopp – du drar alltså inte av verkliga kostnader som drivmedel och service separat ovanpå det.</p>
<ul>
<li><strong>Egen/privatleasad bil:</strong> 25 kr/mil.</li>
<li><strong>Förmånsbil (diesel, bensin, hybrid):</strong> 12 kr/mil.</li>
<li><strong>Helt eldriven förmånsbil:</strong> 9,50 kr/mil.</li>
</ul>
<p>Den avgörande detaljen är <strong>körjournalen</strong>. Utan en löpande körjournal med datum, mätarställning, syfte och antal mil kan Skatteverket underkänna hela avdraget vid kontroll – och för byggare med många korta resor mellan hem, byggarbetsplatser och materialinköp blir det snabbt stora belopp. För journalen samma dag du kör, inte i efterhand vid deklarationen.</p>
<p><strong>Exempel:</strong> 3 500 affärsmil på ett år med egen bil ger 3 500 × 25 kr = <strong>87 500 kr</strong> i avdrag. Med bristfällig körjournal riskerar du att inte få dra av någonting alls.</p>

<h2>Verktyg och maskiner – direktavdrag eller avskrivning</h2>
<p>Inventarier av mindre värde får du dra av direkt året du köper dem om anskaffningsvärdet är mindre än ett halvt prisbasbelopp exklusive moms – <strong>29 600 kr för 2026</strong> (29 400 kr för 2025). Även <strong>korttidsinventarier</strong> med förväntad livslängd på högst tre år får dras av direkt, oavsett belopp.</p>
<p>Dyrare verktyg och maskiner över gränsen skrivs i stället av över tid genom värdeminskningsavdrag. För bygg innebär det i praktiken:</p>
<ul>
<li><strong>Direktavdrag:</strong> handverktyg, spikpistol, batteridrivna maskiner, mindre ställningsdelar och liknande som ligger under gränsen.</li>
<li><strong>Avskrivning:</strong> dyrare maskiner, komplett ställningssystem eller bilinredning som överstiger 29 600 kr och har längre livslängd.</li>
</ul>
<p>Tänk på att beloppsgränsen räknas <strong>exklusive moms</strong> – momsen hanterar du separat som ingående moms.</p>

<h2>Arbetskläder – skyddskläder ja, vanliga kläder nej</h2>
<p>Här missar många åt båda hållen. <strong>Skyddskläder och skyddsutrustning är avdragsgilla</strong>: skyddsskor, hjälm, hörselskydd, arbetshandskar, varselkläder och liknande skyddsutrustning. Det är kläder som skyddar dig i arbetet.</p>
<p>Däremot är <strong>vanliga kläder inte avdragsgilla</strong> – jeans, t-shirt, flanellskjorta, jacka eller byxor räknas som privat levnadskostnad även om du bara använder dem på jobbet. Gränsfallet är kläder med företagets logotyp: kan de rimligen inte bäras privat kan de vara avdragsgilla. En omärkt fritidsjacka du råkar ha på bygget är det alltså inte.</p>

<h2>Utbildning och certifieringar – fortbildning kontra ny kompetens</h2>
<p>Fortbildning som behåller eller uppdaterar kompetensen i din befintliga verksamhet är avdragsgill. För en byggare handlar det ofta om:</p>
<ul>
<li>Heta arbeten och certifikatförnyelser.</li>
<li>Ställningsbyggnad och fallskydd.</li>
<li>Lift- och truckkort.</li>
<li>Säkerhets- och regelverksuppdateringar.</li>
</ul>
<p>Grundutbildning som ger dig ett <strong>helt nytt yrke eller ny kompetens</strong> räknas däremot som privat levnadskostnad och är inte avdragsgill. Ett viktigt undantag: utbildningskostnader du haft under startåret och året innan kan under vissa förutsättningar dras av när du startar din enskilda näringsverksamhet.</p>

<h2>Snabb checklista – fler avdrag byggare ofta missar</h2>
<ul>
<li>Mobil och abonnemang – verksamhetsdelen.</li>
<li>Facklitteratur och branschtidningar.</li>
<li>Företagsförsäkringar.</li>
<li>Hemsida, domän och annonsering.</li>
<li>Ränta på företagslån.</li>
<li>Ingående moms på avdragsgilla inköp av verktyg och skyddskläder.</li>
</ul>

<h2>Så bokför och dokumenterar du rätt</h2>
<p>Avdragen står och faller med underlaget. Spara alla kvitton, för körjournalen löpande och håll en tydlig gräns mellan privat och verksamhet – blandar du ihop dem blir det svårt att styrka vid kontroll. Alla avdrag redovisas på NE-bilagan i deklarationen. Bokföring och underlag ska sparas i sju år. Är du osäker på om en kostnad är avdragsgill, stäm av mot Skatteverket eller din redovisningskonsult innan du drar av.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din bokföring, men gör underlaget lättare att få rätt. Med offerter, tidrapporter och order samlade på ett ställe blir det enklare att skilja verksamhetens kostnader från privata och att ta fram siffror inför deklarationen. Våra <a href="/sv/verktyg">gratis verktyg</a> hjälper dig att räkna och dokumentera redan under året, så att avdragen är styrkta när det är dags att fylla i NE-bilagan – inte något du försöker rekonstruera i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är milersättningen i enskild firma 2026?</h3>
<p>25 kr/mil (2,50 kr/km) för egen eller privatleasad bil, vilket gäller både inkomstår 2025 och 2026. För förmånsbil är avdraget 12 kr/mil, och 9,50 kr/mil för helt eldriven förmånsbil. Det är ett schablonavdrag, så du drar inte av verkliga bilkostnader separat.</p>
<h3>Får jag dra av verktyg direkt eller måste jag skriva av dem?</h3>
<p>Inventarier av mindre värde upp till 29 600 kr exklusive moms (2026) får du dra av direkt året du köper dem, liksom korttidsinventarier med livslängd på högst tre år oavsett belopp. Dyrare verktyg och maskiner över gränsen skrivs av över tid.</p>
<h3>Är arbetskläder avdragsgilla för byggare?</h3>
<p>Skyddskläder och skyddsutrustning som skyddsskor, hjälm, hörselskydd och varselkläder är avdragsgilla. Vanliga kläder som jeans, t-shirt och jacka är inte avdragsgilla, även om du bara använder dem på jobbet. Logotypkläder som inte rimligen kan bäras privat kan vara ett undantag.</p>
<h3>Kan jag dra av arbetsrum hemma?</h3>
<p>Ja, med ett schablonavdrag på 2 000 kr/år om du bor i egen villa/fastighet och 4 000 kr/år i hyres- eller bostadsrätt, förutsatt att du arbetar minst 800 timmar per år i bostaden för verksamheten. Offert-, planerings- och administrationstid räknas in.</p>

<h2>Kom igång</h2>
<p>Håll ordning på mil, verktyg och offerter redan under året med <a href="/sv/verktyg">våra gratis verktyg för byggföretagare</a>, så är underlaget klart när du ska deklarera. Vill du se hur ByggExp samlar order, tid och fakturaunderlag på ett ställe? <a href="/sv/contact">Boka en demo här</a>. Kom ihåg att beloppen ovan gäller inkomstår 2026 – dubbelkolla alltid aktuella schablonbelopp mot Skatteverket.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`;

const A_AVDRAG_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"avdrag-enskild-firma-bygg",
  title: "Avdrag i enskild firma för byggföretagare – de vanligaste missarna (2026)", slug: "avdrag-enskild-firma-bygg", locale: "sv",
  excerpt: "Rätt avdrag sänker skatten direkt på ditt överskott – här är avdragen byggföretagare i enskild firma oftast missar, med 2026 års belopp.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_AVDRAG_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Avdrag enskild firma bygg 2026 | ByggExp", seoDescription: "Avdragen byggare i enskild firma ofta missar: arbetsrum, milersättning, verktyg, arbetskläder och utbildning. 2026 års belopp och regler från Skatteverket.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:39:00.000Z", createdAt: "2026-08-18T19:39:00.000Z", updatedAt: "2026-08-18T19:39:00.000Z",
};

const A_AVDRAG_ARBETSKLADER_VERKTYG_HTML = `
<p>En vanlig missuppfattning bland hantverkare och byggföretag är att allt man använder på jobbet automatiskt är avdragsgillt. Så är det inte. Skatteverket drar en skarp gräns mellan skyddskläder, profilkläder med logga och vanliga kläder – och för verktyg avgör pris och livslängd om du får dra av hela kostnaden direkt eller måste skriva av den över flera år. Tar du fel riskerar du både uteblivet avdrag och förmånsbeskattning som utlöser arbetsgivaravgifter.</p>

<p>Vill du hålla ordning på inköp, kvitton och underlag för avdragen? Testa våra <a href="/sv/verktyg">gratis verktyg för byggföretag -></a> och samla dokumentationen på ett ställe.</p>

<h2>Skyddskläder och skyddsutrustning = fullt avdrag, ingen förmånsbeskattning</h2>
<p>Personlig skyddsutrustning är fullt avdragsgill för företaget och förmånsbeskattas inte hos den anställde. Skälet är enkelt: utrustningen är särskilt anpassad för arbetet och kan inte lämpligen användas privat. Hit hör bland annat:</p>
<ul>
<li>Hjälm och skyddsglasögon</li>
<li>Skyddsskor med tåhätta och spiktrampskydd</li>
<li>Hörselskydd och arbetshandskar</li>
<li>Väder- och kylskydd för utomhusarbete</li>
</ul>
<p>Det finns dessutom ett tydligt verksamhetssyfte som stärker avdragsrätten: enligt arbetsmiljöreglerna är arbetsgivaren skyldig att kostnadsfritt tillhandahålla den personliga skyddsutrustning som arbetet kräver. Reglerna återfinns i Arbetsmiljöverkets nya föreskriftsstruktur (AFS 2023-serien), som gäller från 1 januari 2025. Att du <em>måste</em> förse dina anställda med utrustningen gör kostnaden till en självklar driftkostnad.</p>

<h2>Profilkläder och uniform med logga – avdragsgillt om märkningen är tydlig och beständig</h2>
<p>Arbetskläder med arbetsgivarens namn eller logga är avdragsgilla för företaget och skattefria för den anställde, förutsatt att de bärs i tjänsten. Loggan gör plagget olämpligt för privat bruk, och det är precis den poängen som gör avdraget möjligt.</p>
<p>Två villkor måste vara uppfyllda:</p>
<ul>
<li>Företagsnamn eller logga ska vara <strong>tydligt och beständigt</strong> anbringat – tryckt, broderat eller på annat sätt fast på plagget.</li>
<li>Märkningen får <strong>inte vara löstagbar</strong>. Ett kardborreband eller en knäppbar patch som lätt tas bort räcker inte.</li>
</ul>
<p>Praktiskt tips: placera loggan väl synligt, till exempel på bröst och rygg, och använd tryck eller brodyr snarare än pins. Ju tydligare kopplingen till företaget är, desto svårare är det att ifrågasätta avdraget.</p>

<h2>Vanliga kläder = inget avdrag och risk för förmånsbeskattning</h2>
<p>Jeans, t-tröjor, jackor, kostymer och vanliga skor är inte avdragsgilla som arbetskläder – även om plaggen bara används på jobbet. Skatteverket ser dem som privata levnadskostnader.</p>
<p>Här skiljer sig konsekvensen mellan bolagsformerna:</p>
<ul>
<li><strong>Aktiebolag:</strong> betalar bolaget vanliga kläder åt en anställd uppstår en skattepliktig förmån. Det utlöser arbetsgivaravgifter och preliminärskatt – en dyr omväg.</li>
<li><strong>Enskild firma:</strong> det blir helt enkelt en privat levnadskostnad utan avdrag.</li>
</ul>
<p>Vill du fördjupa dig i hur bolagsformen påverkar just din situation, läs vår guide om <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">enskild firma eller aktiebolag för byggverksamhet</a>.</p>

<h2>Verktyg – direktavdrag eller inventarier?</h2>
<p>För verktyg finns det två vägar till direktavdrag, alltså att dra av hela kostnaden på inköpsåret:</p>
<ol>
<li><strong>Inventarier av mindre värde:</strong> anskaffningsvärdet exklusive moms understiger ett halvt prisbasbelopp. Prisbasbeloppet för 2026 är 59 200 kr, så gränsen ligger på <strong>29 600 kr exkl. moms</strong>.</li>
<li><strong>Korttidsinventarier:</strong> verktyg med en beräknad ekonomisk livslängd på högst 3 år får dras av direkt oavsett belopp. Detta är ett separat alternativ till mindre-värde-regeln.</li>
</ol>
<p>Uppfyller inköpet något av kriterierna bokför du det som förbrukningsinventarie och drar av hela summan direkt. De flesta handverktyg, mindre elverktyg och slitagedelar hamnar här.</p>

<h2>Dyra maskiner och verktyg – aktivera och skriv av</h2>
<p>Ett verktyg eller en maskin som både kostar över gränsen och har en nyttjandetid över 3 år ska aktiveras som inventarium och skrivas av över tid. Då fördelas kostnaden på flera år. Du har tre huvudmetoder:</p>
<ul>
<li><strong>Räkenskapsenlig avskrivning, huvudregeln:</strong> 30 % på restvärdet per år.</li>
<li><strong>Räkenskapsenlig avskrivning, kompletteringsregeln:</strong> 20 % linjärt, vilket ger full avskrivning på 5 år.</li>
<li><strong>Restvärdesavskrivning:</strong> 25 % per år – ett alternativ för enskild firma utan årsbokslut.</li>
</ul>
<p>Ett exempel: köper du en maskin för 60 000 kr och tillämpar huvudregeln drar du av 18 000 kr första året (30 % av 60 000), sedan 30 % av det kvarvarande restvärdet året därpå, och så vidare. Med kompletteringsregeln drar du istället av 12 000 kr per år i fem år.</p>

<h2>Moms och beloppsgränsen</h2>
<p>Momsregistrerade företag lyfter ingående moms på verktyg och skyddskläder separat. Därför bedöms beloppsgränsen för direktavdrag alltid mot beloppet <strong>exklusive moms</strong>. Ett verktyg som kostar 35 000 kr inkl. moms landar på 28 000 kr exkl. moms – alltså under 29 600 kr och därmed direktavdrag.</p>
<p>Var uppmärksam på inköp som hör ihop. Köper du flera inventarier med ett naturligt samband, till exempel en verktygssats eller flera delar som köps och används tillsammans, bedöms de som <strong>en enhet</strong> mot beloppsgränsen. Du får inte stycka upp fakturan för att pressa varje del under halvt prisbasbelopp.</p>

<h2>Snabb checklista för hantverksföretaget</h2>
<ul>
<li><strong>Dra av direkt:</strong> skyddsutrustning, profilkläder med fast logga, verktyg under 29 600 kr exkl. moms eller med livslängd högst 3 år.</li>
<li><strong>Måste märkas:</strong> profil- och arbetskläder – tydlig, beständig och icke löstagbar logga.</li>
<li><strong>Aldrig avdragsgillt:</strong> vanliga kläder utan logga (jeans, t-tröja, jacka, kostym, vanliga skor).</li>
<li><strong>Aktivera och skriv av:</strong> maskiner och verktyg över gränsen med livslängd över 3 år.</li>
<li><strong>Alltid:</strong> spara kvitton och dokumentera skyddsbehovet. Bokföring och underlag ska bevaras i 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på underlagen så att avdragen blir enkla att styrka. Du samlar kvitton, inköp och projektkostnader digitalt och slipper leta i pappershögar när det är dags för bokslut eller en eventuell fråga från Skatteverket. Vi gör inte din bokföring och ersätter inte din redovisningskonsult – men vi ser till att dokumentationen kring verktyg, skyddskläder och projekt finns samlad och sökbar. Det gör klassificeringen direktavdrag kontra inventarier lättare att göra rätt, och underlaget lättare att spara i de sju år som krävs.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag dra av arbetsskor?</h3>
<p>Ja, om det är skyddsskor med tåhätta eller spiktrampskydd. Då är de personlig skyddsutrustning och fullt avdragsgilla utan förmånsbeskattning. Vanliga skor utan skyddsfunktion är däremot inte avdragsgilla.</p>
<h3>Räcker en liten logga för att kläderna ska bli avdragsgilla?</h3>
<p>Det avgörande är att loggan är tydlig, beständig och fast anbringad, inte hur stor den är. En liten men väl synlig och icke löstagbar logga kan räcka. Använd tryck eller brodyr och placera märkningen synligt, exempelvis på bröst och rygg.</p>
<h3>Kan jag dra av arbetsbyxor utan logga?</h3>
<p>Nej. Vanliga arbetsbyxor utan skyddsfunktion och utan fast logga räknas som vanliga kläder och är inte avdragsgilla – även om de bara används på jobbet. Betalar bolaget dem blir det en skattepliktig förmån.</p>
<h3>Vad gäller för underställ och regnkläder?</h3>
<p>Väder- och kylskydd för utomhusarbete räknas som skyddsutrustning och är avdragsgilla när de behövs för arbetet. Regnkläder och funktionsunderställ som är avsedda för och används i utomhusarbetet faller normalt in under skyddskläder, medan plagg som lika gärna kan användas privat bedöms som vanliga kläder.</p>

<h2>Kom igång</h2>
<p>Samla kvitton, inköp och underlag för dina avdrag på ett ställe med våra <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp fungerar i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi hur du håller ordning på dokumentationen.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet</a> · <a href="/sv/verktyg">Verktyg för byggföretag</a></p>
`;

const A_AVDRAG_ARBETSKLADER_VERKTYG: BlogPost = {
  _id: "code-"+"avdrag-arbetsklader-verktyg",
  title: "Avdrag för arbetskläder och verktyg 2026 – vad Skatteverket faktiskt godkänner", slug: "avdrag-arbetsklader-verktyg", locale: "sv",
  excerpt: "Skatteverket skiljer skarpt på skyddskläder, profilkläder med logga och vanliga kläder – och på verktyg som direktavdrag kontra avskrivning. Så gör byggföretaget rätt 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_AVDRAG_ARBETSKLADER_VERKTYG_HTML,
  seoTitle: "Avdrag arbetskläder & verktyg | ByggExp", seoDescription: "Skyddskläder och profilkläder med logga = avdrag, vanliga kläder = inte. Verktyg: direktavdrag under 29 600 kr eller inventarier. Så gör byggföretaget rätt 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:42:00.000Z", createdAt: "2026-08-18T19:42:00.000Z", updatedAt: "2026-08-18T19:42:00.000Z",
};

const A_REPRESENTATIONSAVDRAG_2026_HTML = `
<p>Representation är ett av de mest missförstådda avdragen i byggbranschen. Många tror fortfarande att en kundlunch är avdragsgill fullt ut, andra vågar inte dra av ens momsen av rädsla för Skatteverket. Sanningen ligger någonstans mittemellan: sedan 2017 ger själva maten inget inkomstskatteavdrag alls, men du får fortfarande dra momsen på ett underlag om högst 300 kr per person. Här går vi igenom exakt vilka belopp som gäller 2026 och hur du räknar rätt.</p>

<p>Vill du hålla koll på avdrag, moms och kvitton löpande hittar du våra gratis verktyg samlade i <a href="/sv/verktyg">vår verktygslåda -&gt;</a>.</p>

<h2>Vad räknas som representation?</h2>
<p>Representation delas in i extern och intern. Extern representation riktas mot kunder, leverantörer eller andra affärskontakter, till exempel en lunch med beställaren för att inleda eller upprätthålla en affärsförbindelse. Intern representation riktas mot din egen personal, som en personalfest efter avslutat projekt eller ett internt planeringsmöte.</p>
<p>Grundkravet är detsamma oavsett typ: representationen ska ha ett <strong>omedelbart samband med verksamheten</strong>. En kundlunch i anslutning till ett avtalsmöte på bygget godkänns. En middag som mer handlar om personlig gästfrihet eller allmän trevnad gör det inte. Sällskapsdryck och privat värdskap ger aldrig avdrag.</p>

<h2>Måltidsavdraget som försvann 2017</h2>
<p>Den 1 januari 2017 togs det inkomstskattemässiga avdraget för representationsmåltider bort helt, både för extern och intern representation. Det innebär att lunch, middag och supé ger <strong>0 kr i avdrag mot resultatet</strong>. Reglerna är oförändrade 2026 och inga nya beloppsändringar har införts.</p>
<p>Det du fortfarande får göra är att dra av momsen. Avdragsunderlaget är högst 300 kr per person exklusive moms. På det beloppet drar du 12 % moms på mat och 25 % moms på alkohol som vin och sprit. Momsavdraget gäller oavsett hur mycket dyrare notan faktiskt blev, momsen beräknas bara på de första 300 kronorna per person, inte på hela beloppet.</p>

<h2>När notan överstiger 300 kr: schablonen på 46 kr</h2>
<p>Blir måltiden dyrare än 300 kr per person och innehåller både mat och alkohol får du använda ett schablonmässigt momsavdrag på <strong>högst 46 kr per person</strong>. Det är Skatteverkets schablon och den ligger fast 2026.</p>
<p>Ett exempel: du bjuder beställaren på middag för 600 kr per person, inklusive vin. Du får inget inkomstskatteavdrag för maten. Momsavdraget blir schablonens 46 kr per person, inte momsen på hela 600-kronorsnotan. Bjuder du fyra personer landar det avdragsgilla momsbeloppet på 4 x 46 = 184 kr.</p>

<h2>Enklare förtäring: 60 kr per person som faktiskt är avdragsgill</h2>
<p>Det finns ett undantag som är värt att känna till. Enklare förtäring som inte utgör en måltid, till exempel kaffe, te, bulle, smörgås, frukt eller kaka, är avdragsgill både inkomstskattemässigt och momsmässigt med <strong>högst 60 kr per person och tillfälle</strong>.</p>
<p>Det gör att fikat på byggmötet eller kaffet på uppstarten faktiskt ger fullt avdrag, till skillnad från lunchen. Gränsen går vid vad som är en måltid. Serverar du något som ersätter lunch eller middag räknas det som måltidsrepresentation igen, med bara momsavdrag på 300-kronorsunderlaget.</p>

<h2>Personalfest 2026: 180 kr i kringkostnader plus moms på maten</h2>
<p>Vid personalfest är kringkostnader som lokalhyra, musik, underhållning och transport avdragsgilla med <strong>högst 180 kr per person och tillfälle</strong>. Själva måltiden ger som vanligt bara momsavdrag på underlaget 300 kr per person. Avdrag medges normalt för högst två personalfester per år.</p>
<p>Ta en byggfirma med tio anställda som ordnar en sommarfest. Lokalhyra, band och busstransport på 180 kr per person ger 10 x 180 = 1 800 kr i avdragsgilla kringkostnader. Maten ger inget resultatavdrag men momsen på upp till 300 kr per person är avdragsgill.</p>

<h2>Representations- och reklamgåvor: 300 kr exklusive moms</h2>
<p>Både representationsgåvor och reklamgåvor är avdragsgilla med <strong>högst 300 kr exklusive moms per person</strong>. En julklapp till en trogen kund är en representationsgåva, medan en enklare artikel med ditt firmanamn som du delar ut brett är en reklamgåva. Håll dig under 300 kr exklusive moms så är gränsdragningen enklare och avdraget tryggt.</p>

<h2>Dokumentationskraven Skatteverket ställer</h2>
<p>Den vanligaste orsaken till underkänt representationsavdrag är bristande underlag. Kvittot i sig räcker inte. Underlaget måste visa:</p>
<ul>
<li><strong>Syftet</strong> med representationen (till exempel avtalsmöte eller uppstart av projekt)</li>
<li><strong>Datum</strong> för tillfället</li>
<li><strong>Deltagarnas namn</strong> och vilket företag var och en representerar</li>
</ul>
<p>Ett digitalt kvitto fungerar lika bra som ett papperskvitto så länge uppgifterna finns med. Notera deltagare och syfte direkt när det händer, i efterhand är det lätt att glömma vem som var med. Spara underlaget i sju år enligt bokföringsreglerna.</p>

<h2>Räkneexempel för en byggfirma</h2>
<p>Så här kan ett år se ut för en mindre byggfirma:</p>
<ul>
<li><strong>Kundlunch 250 kr per person, 2 personer:</strong> under 300 kr. Inget resultatavdrag på maten, men momsen (12 %) på hela beloppet är avdragsgill.</li>
<li><strong>Kundmiddag 600 kr per person med vin, 4 personer:</strong> över 300 kr med alkohol. Schablon 46 kr per person ger 184 kr i avdragsgill moms. Inget resultatavdrag.</li>
<li><strong>Personalfest, 10 anställda:</strong> 180 kr per person i kringkostnader = 1 800 kr i avdrag, plus momsavdrag på maten upp till 300 kr per person.</li>
<li><strong>Fika på byggmöte, 5 personer x 40 kr:</strong> enklare förtäring under 60 kr. Fullt avdrag både för resultat och moms.</li>
</ul>

<h2>Checklista och vanliga misstag att undvika</h2>
<ol>
<li>Räkna inte med resultatavdrag för lunch och middag, det försvann 2017.</li>
<li>Dra bara moms på högst 300 kr per person, inte på hela notan.</li>
<li>Använd schablonen 46 kr per person när dyra måltider innehåller alkohol.</li>
<li>Skilj på fika (60 kr, fullt avdrag) och måltid (bara moms).</li>
<li>Notera alltid syfte, datum och deltagare direkt på kvittot.</li>
<li>Håll dig till max två personalfester per år.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din bokföring, men gör förarbetet enklare. Med kvitton och underlag samlade digitalt är det lätt att notera syfte och deltagare direkt vid utgiften, så att din redovisningsbyrå kan bedöma avdragsrätten korrekt. Du slipper leta efter lösa kvitton i slutet av året och minskar risken för underkända avdrag på grund av bristande dokumentation.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag dra av kundlunchen 2026?</h3>
<p>Inte inkomstskattemässigt. Sedan 2017 ger representationsmåltider inget resultatavdrag. Du får dock dra momsen på ett underlag om högst 300 kr per person exklusive moms.</p>
<h3>Hur mycket moms får jag dra på en dyr middag med vin?</h3>
<p>Om måltiden överstiger 300 kr per person och innehåller både mat och alkohol får du använda Skatteverkets schablon på högst 46 kr per person i momsavdrag.</p>
<h3>Är fika på byggmötet avdragsgillt?</h3>
<p>Ja. Enklare förtäring som kaffe, smörgås och bulle är avdragsgill både för resultat och moms med högst 60 kr per person och tillfälle, så länge det inte utgör en måltid.</p>
<h3>Hur många personalfester får jag dra av per år?</h3>
<p>Normalt medges avdrag för högst två personalfester per år, med 180 kr per person i kringkostnader plus momsavdrag på maten.</p>

<h2>Kom igång</h2>
<p>Samla kvitton, syfte och deltagare löpande så blir representationsavdraget rätt utan stress vid deklarationen. Utforska <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller ordning på ekonomin i vardagen.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare: så funkar 25 %, omvänd byggmoms och ROT</a></p>
`;

const A_REPRESENTATIONSAVDRAG_2026: BlogPost = {
  _id: "code-"+"representationsavdrag-2026",
  title: "Representationsavdrag 2026: kundlunch, personalfest och moms för byggföretag", slug: "representationsavdrag-2026", locale: "sv",
  excerpt: "Så funkar representationsavdraget 2026 för byggföretag: vilka belopp som gäller för kundlunch, fika, personalfest och gåvor, och hur du räknar rätt momsavdrag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_REPRESENTATIONSAVDRAG_2026_HTML,
  seoTitle: "Representationsavdrag 2026 | ByggExp", seoDescription: "Kundlunch, personalfest och momsavdrag på representation 2026. Exakta belopp (300/60/180 kr) och räkneexempel för dig i byggbranschen.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:45:00.000Z", createdAt: "2026-08-18T19:45:00.000Z", updatedAt: "2026-08-18T19:45:00.000Z",
};

const A_SERVICEBIL_ELLER_FORMANSBIL_HTML = `
<p>Snickaren tar servicebilen hem efter jobbet, svänger förbi bygghandeln på lördagen och hämtar barnen på vägen. Harmlöst? I Skatteverkets ögon kan just de resorna förvandla en skattefri servicebil till en fullt beskattad förmånsbil – för hela året. Frågan <strong>servicebil eller förmånsbil</strong> avgörs inte av vad du kallar bilen, utan av hur den faktiskt används. Här får du det konkreta svaret, den avgörande gränsen på högst 10 tillfällen och 100 mil privat körning per år, och en checklista för att hålla bilen på rätt sida.</p>

<p>Vill du räkna på vad valet betyder för just din firma? Använd <a href="/sv/verktyg">våra gratis verktyg för hantverkare och byggföretag -&gt;</a> som utgångspunkt innan du stämmer av de exakta 2026-talen med Skatteverket.</p>

<h2>Servicebil vs förmånsbil – vad är skillnaden?</h2>
<p>Juridiskt är detta två helt olika saker. En <strong>förmånsbil</strong> är en bil som företaget äger eller leasar och som den anställda får använda privat. Den privata dispositionen är en skattepliktig löneförmån. En <strong>tjänstebil eller servicebil</strong> används enbart i tjänsten – klassiska exempel är post-, polis- och ambulansfordon.</p>
<p>Det viktiga: det är den faktiska – och även den <em>möjliga</em> – privata användningen som styr. Redan rätten att köra bilen privat (dispositionsrätten) kan utlösa bilförmån. En skåpbil full av verktyg blir alltså inte automatiskt en skattefri servicebil bara för att den är utrustad för arbete. Om du kan använda den privat och inte kan bevisa motsatsen, kan förmånen tas ut.</p>

<h2>Skatteverkets gräns – ringa privat körning</h2>
<p>Det finns en säkerhetsventil: privat körning i <strong>ringa omfattning</strong> utlöser ingen bilförmån. Men gränsen är snäv och består av två villkor som båda måste hållas samtidigt:</p>
<ul>
<li>Högst <strong>10 tillfällen</strong> privat körning per år, <em>och</em></li>
<li>Högst <strong>100 mil</strong> (1 000 km) privat körning per år.</li>
</ul>
<p>Överskrids <em>något</em> av de två – till exempel 12 korta ärenden eller en enda längre semesterresa på 120 mil – beskattas hela förmånsvärdet för hela året. Det finns ingen proportionering. Regeln är väl etablerad praxis (med grund i RÅ 2001 ref. 22) och gäller oförändrat 2026. Kom ihåg att gränsen handlar om faktisk körning, men att själva dispositionsrätten är utgångspunkten – kan du inte visa att du håller dig under gränserna, presumerar Skatteverket förmån.</p>

<h2>Körjournal – din enda bevisning</h2>
<p>Bevisbördan ligger på dig och företaget, inte på Skatteverket. För att visa att den privata körningen stannade inom ringa omfattning – eller var noll – måste du föra en trovärdig <strong>körjournal</strong>. Den ska för varje resa ange:</p>
<ul>
<li>Datum</li>
<li>Syfte (tjänst eller privat, och vilken kund/uppdrag)</li>
<li>Från och till (adress eller plats)</li>
<li>Mätarställning vid start och slut</li>
</ul>
<p>Utan en löpande och detaljerad körjournal kan Skatteverket påföra full bilförmån även för en bil som i praktiken bara använts i tjänsten – helt enkelt för att den privata användningen inte kan uteslutas. En digital körjournal som loggar automatiskt via GPS sparar tid och ger starkare bevisning än handskrivna anteckningar i efterhand.</p>

<h2>Så räknas förmånsvärdet om bilen blir förmånsbil</h2>
<p>Om bilen bedöms som förmånsbil beskattas du på ett schablonvärde – oavsett hur lite du faktiskt kört privat. För bilar registrerade från 1 juli 2021 byggs förmånsvärdet av fyra delar:</p>
<ul>
<li>Ett <strong>fast belopp</strong> (0,29 × prisbasbeloppet)</li>
<li>Ett <strong>ränterelaterat belopp</strong> (statslåneräntan 30 november året innan plus en procentenhet, som lägst 0,5 %, gånger nybilspriset)</li>
<li>Ett <strong>prisrelaterat belopp</strong> (13 % av nybilspriset)</li>
<li>Ett <strong>lyxbilstillägg</strong> på 20 % för den del av nybilspriset som överstiger 7,5 prisbasbelopp</li>
</ul>
<p>Två justeringar är särskilt viktiga för hantverkare med hög körsträcka: körs bilen minst <strong>3 000 mil (30 000 km) i tjänsten</strong> under året sätts förmånsvärdet ned till 75 %. Betalar arbetsgivaren dessutom drivmedel för din privata körning beskattas det som <strong>drivmedelsförmån</strong> med 1,2 × marknadsvärdet av det privat förbrukade bränslet – ovanpå bilförmånen. Exakta koefficienter, prisbasbelopp och statslåneränta för 2026 hämtar du hos Skatteverket innan du räknar i kronor.</p>

<h2>Vanlig fälla – resan hem räknas som privat</h2>
<p>En klassisk missuppfattning: arbetsresor mellan bostad och arbetsplats är <strong>privat körning</strong>, inte tjänstekörning. Kör du firmabilen hem varje kväll räknas det alltså in i den privata omfattningen och äter snabbt upp både tillfällena och milen.</p>
<p>Undantaget räddar många hantverkare: om din <strong>tjänsteställe är bostaden</strong> – vilket är vanligt när arbetsplatsen växlar dagligen mellan olika kunder och byggen – kan resan hemifrån till dagens första arbetsplats räknas som en tjänsteresa. Om bostaden verkligen är tjänsteställe avgörs från fall till fall, så dokumentera hur ditt arbete ser ut.</p>

<h2>Servicebil eller förmånsbil – vad lönar sig?</h2>
<p>Det finns tre huvudspår, och rätt val beror på hur mycket du kör privat kontra i tjänsten:</p>
<ol>
<li><strong>Ren servicebil / lätt lastbil.</strong> Ingen förmånsskatt så länge du håller dig inom ringa privat körning. Företaget drar av driftskostnader och – för lätt lastbil – momsen. Nackdel: du behöver en egen privatbil vid sidan om.</li>
<li><strong>Förmånsbil.</strong> Alla bilkostnader samlas hos arbetsgivaren och du slipper äga privat. Nackdel: du inkomstbeskattas på hela förmånsvärdet (marginalskatt cirka 32–52 %) oavsett hur lite du kör privat. För en personbil får företaget dessutom inte lyfta momsen på inköpet.</li>
<li><strong>Egen bil plus milersättning.</strong> Kör du bara ibland i tjänsten kan skattefri bilersättning för egen bil, 25 kr/mil (2,50 kr/km), vara både enklast och billigast. Ingen förmån att bevaka.</li>
</ol>
<p>Tumregeln: mycket tjänstekörning och lite privat talar för servicebil eller lätt lastbil; mycket blandad körning talar för förmånsbil; sällan i tjänsten talar för egen bil med milersättning.</p>

<h2>Checklista – håll servicebilen skattefri</h2>
<ul>
<li>Skriv en tydlig policy om förbud mot eller starkt begränsat privat nyttjande.</li>
<li>För körjournal varje dag – datum, syfte, från/till och mätarställning.</li>
<li>Håll dig under både 10 tillfällen och 100 mil privat per år.</li>
<li>Parkera bilen vid arbetsplatsen, inte hemma, när det går.</li>
<li>Dokumentera om bostaden är ditt tjänsteställe.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte Skatteverkets bedömning, men gör underlaget enklare. När du registrerar var dagens jobb utförs och kopplar resor till rätt kund och projekt får du en tydlig historik över var bilen faktiskt varit – ett stöd när du ska visa att körningen var i tjänsten. Tid, uppdrag och adresser samlas på ett ställe, så att din redovisningskonsult snabbt kan bedöma om bilen håller sig inom ringa omfattning. Notera att appen inte är en godkänd körjournal i sig – för bevisning behöver du fortfarande en körjournal som loggar mätarställning per resa.</p>

<h2>Vanliga frågor</h2>
<h3>När blir en servicebil en förmånsbil?</h3>
<p>När den privata körningen överstiger ringa omfattning, alltså mer än 10 tillfällen eller mer än 100 mil per år. Redan möjligheten att köra privat kan utlösa förmån om du inte kan bevisa motsatsen med körjournal.</p>
<h3>Räknas resan mellan hemmet och jobbet som privat?</h3>
<p>Ja, arbetsresor bostad–arbetsplats är privat körning. Undantag gäller om bostaden är ditt tjänsteställe, vilket är vanligt för hantverkare med växlande arbetsplatser – då kan första resan bli en tjänsteresa.</p>
<h3>Måste jag föra körjournal för en servicebil?</h3>
<p>I praktiken ja. Bevisbördan ligger på dig, och utan trovärdig körjournal kan Skatteverket påföra full bilförmån även om bilen bara använts i tjänsten.</p>
<h3>Sänks förmånsvärdet om jag kör mycket i tjänsten?</h3>
<p>Ja. Kör du minst 3 000 mil i tjänsten under året sätts förmånsvärdet ned till 75 %. Det gör förmånsbil mer intressant för hantverkare med hög årlig körsträcka.</p>

<h2>Kom igång</h2>
<p>Bestäm dig utifrån din körning: mycket tjänst och lite privat pekar mot servicebil, blandat mot förmånsbil, sällan mot egen bil och milersättning. Räkna på alternativen med <a href="/sv/verktyg">våra gratis verktyg</a> och stäm av de exakta 2026-talen med Skatteverket eller din redovisningskonsult. Vill du se hur ByggExp håller ordning på tid, uppdrag och resor? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag – vad ska du välja?</a></p>
`;

const A_SERVICEBIL_ELLER_FORMANSBIL: BlogPost = {
  _id: "code-"+"servicebil-eller-formansbil",
  title: "Servicebil eller förmånsbil? Så avgör du vad som lönar sig 2026", slug: "servicebil-eller-formansbil", locale: "sv",
  excerpt: "Kör du firmabilen hem eller till bygghandeln kan servicebilen bli en skattepliktig förmånsbil – här är gränsen och vad som lönar sig 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_SERVICEBIL_ELLER_FORMANSBIL_HTML,
  seoTitle: "Servicebil eller förmånsbil 2026 | ByggExp", seoDescription: "Servicebil eller förmånsbil? Så håller du firmabilen skattefri – Skatteverkets gräns 10 tillfällen och 100 mil privat körning per år förklarad.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:48:00.000Z", createdAt: "2026-08-18T19:48:00.000Z", updatedAt: "2026-08-18T19:48:00.000Z",
};

const A_DEBITERA_SERVICEBIL_ROT_HTML = `
<p>Frågan dyker upp hos i stort sett varje servicebolag och hantverkare som jobbar med ROT-berättigade uppdrag: kan jag lägga in kostnaden för servicebilen, framkörningen och restiden i mitt ROT-timpris så att kunden får dra av mer? Lockelsen är förståelig – ju högre arbetskostnad, desto större ROT-avdrag för kunden och desto lättare att stänga affären. Men svaret är nej, och att göra fel kan bli dyrt för dig som utförare. Här går vi igenom regelverket 2026 och hur du särredovisar fordons- och materialkostnad korrekt på fakturan.</p>

<p>Vill du snabbt räkna på hur mycket ROT som faktiskt landar på arbetskostnaden i ett uppdrag? Testa vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator -&gt;</a> innan du sätter ihop offerten.</p>

<h2>Så funkar ROT-avdraget 2026 – snabbfakta</h2>
<p>ROT-avdraget 2026 är 30 % av arbetskostnaden (inklusive moms), med ett tak på 50 000 kr per person och år. Den tillfälliga förstärkningen under 2025, då avdraget höjdes till 50 % från mitten av maj till årsskiftet 2025, har upphört. Från 2026 gäller alltså återigen den ordinarie nivån på 30 % – räkna aldrig med 50 % i dina offerter.</p>
<p>Avdraget hanteras via fakturamodellen. Det innebär att du som utförare drar av kundens ROT-del direkt på fakturan och sedan begär utbetalning av mellanskillnaden från Skatteverket. Kunden betalar bara sin reducerade del. Det här är viktigt att förstå, för det är också du som bär ansvaret om något blir fel.</p>

<h2>Grundregeln: ROT ges bara på arbetskostnaden</h2>
<p>ROT-avdraget ges enbart på arbetskostnaden för arbete som utförs i eller i nära anslutning till bostaden. Allt annat faller utanför. Följande kostnader är uttryckligen <strong>inte</strong> ROT-grundande:</p>
<ul>
<li><strong>Material</strong> – virke, spik, färg, komponenter och förbrukningsvaror.</li>
<li><strong>Maskinhyra och utrustning</strong> – hyrd lift, ställning, verktyg och maskiner.</li>
<li><strong>Resor och transport</strong> – till och från arbetsplatsen.</li>
<li><strong>Framkörning och leverans</strong> – utkörningsavgift, framkörningsavgift.</li>
<li><strong>Restid och körtid</strong> – tid du tillbringar i bilen på väg till kunden.</li>
<li><strong>Arkitektarbete</strong> – ritning och projektering.</li>
</ul>
<p>Eftersom bara faktiskt arbete på plats är avdragsgillt är det här listan du måste hålla i huvudet varje gång du prissätter ett ROT-uppdrag.</p>

<h2>Därför kan du inte baka in servicebilen i ROT-timmen</h2>
<p>ROT-timmen ska spegla verkligt arbete som utförts hos kunden – ingenting annat. När du lägger på ett dolt påslag för servicebil, framkörning eller material i timpriset blåser du artificiellt upp arbetskostnaden. Den delen av timpriset motsvarar inget faktiskt arbete på plats och är därmed inte avdragsgill. Konsekvensen blir att du redovisat ett för högt ROT-underlag, och Skatteverket granskar just den här typen av oproportionerlig fördelning mellan arbete och material. Att dölja bil- eller materialkostnad i timpriset för att öka avdraget accepteras inte.</p>
<p>Det handlar alltså inte om en gråzon där man kan tänja lite. Fordons- och servicebilskostnad, framkörning och körtid till kunden ska särredovisas och är inte avdragsgilla för kunden – oavsett hur du väljer att formulera raden på fakturan.</p>

<h2>Så särredovisar du rätt på fakturan</h2>
<p>Lösningen är enkel: dela upp fakturan i tydliga rader så att ROT-grundande arbete står för sig självt. Så här kan en korrekt uppdelning se ut:</p>
<ol>
<li><strong>Arbetskostnad på plats</strong> – ROT-grundande. Endast tid som lagts på faktiskt arbete i bostaden.</li>
<li><strong>Framkörning / körtid</strong> – egen rad, ej ROT.</li>
<li><strong>Material</strong> – egen rad, ej ROT.</li>
<li><strong>Maskinhyra</strong> – egen rad, ej ROT.</li>
</ol>
<p>Ett räkneexempel. Anta att du utfört 20 timmars arbete på plats à 700 kr inkl. moms, tagit ut en framkörningsavgift på 800 kr, förbrukat material för 4 000 kr och hyrt en maskin för 1 200 kr:</p>
<ul>
<li>Arbetskostnad på plats: 20 × 700 = 14 000 kr (ROT-grundande).</li>
<li>ROT-avdrag: 30 % × 14 000 = 4 200 kr som dras av på fakturan.</li>
<li>Framkörning 800 kr + material 4 000 kr + maskinhyra 1 200 kr = 6 000 kr utan avdrag.</li>
</ul>
<p>Kunden betalar då 14 000 − 4 200 + 6 000 = 15 800 kr, och du begär de 4 200 kronorna från Skatteverket. Hade du i stället gömt de 6 000 kronorna i timpriset hade underlaget blivit felaktigt uppblåst – och avdraget stått på lös grund.</p>

<h2>Vem bär risken? Du som utförare</h2>
<p>Det här är kärnan i varför frestelsen inte är värd det. Skatteverket betalar ut ROT-beloppet till dig som utförare, inte till kunden. Om villkoren inte är uppfyllda – till exempel för att arbetskostnaden blåsts upp med dolda bil- eller materialpåslag – återkräver Skatteverket beloppet av företaget. Kunden går fri, men du sitter med återbetalningskravet och den administrativa smällen. Ett par tusenlappar i extra ROT per uppdrag väger lätt mot risken att behöva betala tillbaka i efterhand.</p>

<h2>Praktiska tips för servicebolag</h2>
<ul>
<li>Sätt ett korrekt timpris som speglar det faktiska arbetet på plats – inte dina fasta kostnader.</li>
<li>Prissätt framkörning och utkörning separat och öppet, som en egen rad.</li>
<li>Var transparent mot kunden om vad som är avdragsgillt och inte. Det bygger förtroende och undviker efterdiskussioner.</li>
<li>Dokumentera arbetstiden på plats noggrant, så att du kan visa vad ROT-underlaget bygger på om det granskas.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp kan du bygga fakturor där arbetskostnad, material, framkörning och maskinhyra ligger på separata rader från start, så att bara det ROT-grundande arbetet räknas in i avdraget. ROT-delen beräknas på arbetsraderna och du slipper räkna manuellt. Vill du testa uppdelningen först kan du använda vår enkla <a href="/sv/verktyg/faktura-mall">fakturamall</a> och vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>. Verktygen ersätter inte din egen bedömning av vad som är avdragsgillt, men de gör det svårare att råka blanda ihop raderna.</p>

<h2>Vanliga frågor</h2>
<h3>Får restid räknas som ROT-arbete?</h3>
<p>Nej. Restid och körtid till och från kunden är inte arbete som utförts i bostaden och är därför inte ROT-grundande. Den tiden ska hållas utanför ROT-timmarna.</p>
<h3>Får jag ta ut en framkörningsavgift?</h3>
<p>Ja, du får självklart debitera framkörning. Men den ska ligga på en egen rad utan ROT-avdrag – den kan inte gömmas i arbetskostnaden.</p>
<h3>Vad händer om jag redovisat ROT felaktigt?</h3>
<p>Skatteverket återkräver det utbetalda beloppet av företaget, inte av kunden. Du som utförare bär hela risken, plus den administrativa hanteringen.</p>
<h3>Räknas maskinhyra som ROT?</h3>
<p>Nej. Maskinhyra och utrustning är uttryckligen undantaget och ska särredovisas som en egen rad utan avdrag.</p>

<h2>Kom igång</h2>
<p>Grundprincipen är enkel att följa när du väl har raderna på plats: särredovisa alltid arbete, material, framkörning och maskinhyra – och låt bara arbetet bära ROT. Räkna på ditt nästa uppdrag med vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du sätter upp korrekta ROT-fakturor från början.</p>

<p>Relaterat: <a href="/sv/blog/rot-avdrag">Så fungerar ROT-avdraget för hantverkare</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare – guide</a>.</p>
`;

const A_DEBITERA_SERVICEBIL_ROT: BlogPost = {
  _id: "code-"+"debitera-servicebil-rot",
  title: "Får du baka in bilkostnaden i ROT-timdebiteringen?", slug: "debitera-servicebil-rot", locale: "sv",
  excerpt: "Att gömma servicebil, framkörning och restid i ROT-timpriset lockar – men det är inte avdragsgillt och kan leda till återkrav. Så gör du rätt 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: A_DEBITERA_SERVICEBIL_ROT_HTML,
  seoTitle: "Debitera servicebil i ROT? | ByggExp", seoDescription: "Får du baka in servicebil, framkörning och restid i ROT-timpriset? Kort svar: nej. Så särredovisar du fordons- och materialkostnad rätt på ROT-fakturan 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:51:00.000Z", createdAt: "2026-08-18T19:51:00.000Z", updatedAt: "2026-08-18T19:51:00.000Z",
};

const A_LEVERANTORSFAKTURA_BYGG_PROJEKT_HTML = `
<p>De pengar ett byggföretag tappar syns sällan i bokslutet — de försvinner en leverantörsfaktura i taget. Ett materialinköp som aldrig knyts till ett projekt, en maskinhyra som ingen kommer ihåg att vidarefakturera, en underentreprenörsfaktura som bokförs på fel jobb. Var för sig är beloppen små. Sammantaget är det skillnaden mellan svart och rött på projektet. Lösningen är en enkel rutin utan luckor: faktura in → konteras per projekt → attesteras → kommer med på kundens faktura.</p>

<p>Ett bra sätt att räkna hem varje inköp med rätt påslag är att använda <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator →</a> innan du sätter priset på kundfakturan.</p>

<h2>Vad är en leverantörsfaktura i ett byggprojekt?</h2>
<p>En leverantörsfaktura är en kostnad som kommer in till ditt företag: material från grossisten, en underentreprenör, maskinhyra, transport eller container. Det är motsatsen till kundfakturan, som är det du skickar ut. Poängen i projektredovisning är att varje krona som kommer in måste ha ett projekt-ID redan från beställningen. Utan projektmärkning vet du inte vad jobbet faktiskt kostade — och då kan du varken fakturera rätt på löpande räkning eller mäta täckningsgraden på ett fastprisjobb.</p>

<h2>Obligatoriska uppgifter på fakturan du tar emot</h2>
<p>Innan du bokför bör du kontrollera att leverantörsfakturan uppfyller kraven i 17 kap. mervärdesskattelagen (2023:200). En felaktig faktura kan sänka din avdragsrätt för moms. Kontrollera att den innehåller:</p>
<ul>
<li>Fakturadatum</li>
<li>Ett unikt löpnummer</li>
<li>Säljarens organisations-/momsregistreringsnummer</li>
<li>Köparens momsnummer när omvänd betalningsskyldighet eller EU-handel gäller</li>
<li>Säljarens och köparens namn och adress</li>
<li>Mängd och art på varorna eller omfattningen av tjänsten</li>
<li>Leveransdatum</li>
<li>Beskattningsunderlaget per momssats</li>
<li>Momssatsen och momsbeloppet</li>
</ul>
<p>För småbelopp upp till 4 000 kr inklusive moms räcker en förenklad faktura med färre uppgifter — bra att veta för kvitton på skruv och förbrukningsmaterial från bygghandeln.</p>

<h2>Omvänd byggmoms — den vanligaste fällan på leverantörsfakturan</h2>
<p>Omvänd betalningsskyldighet (omvänd byggmoms) betyder att det är du som köpare, inte säljaren, som redovisar momsen. Reglerna finns i 16 kap. mervärdesskattelagen. Det gäller när tjänsten är en byggtjänst och köparen är en näringsidkare som själv säljer byggtjänster mer än tillfälligt. Då fakturerar säljaren <strong>utan moms</strong>.</p>
<p>En sådan faktura ska ange köparens momsnummer, texten <em>omvänd betalningsskyldighet</em> och 0 kr i moms. Kommer det in en faktura från en underentreprenör med 25 % moms påslagen fast omvänd moms borde gällt — då är den fel och du bör begära en rättad faktura. I bokföringen redovisar du själv både utgående och ingående moms på samma 25-procentiga underlag. När inköpet är fullt avdragsgillt nettar det till noll, men det måste ändå redovisas i momsdeklarationen. Att få projektets material- och underentreprenörskostnad rätt hänger alltså ihop med att bokföra den omvända momsen korrekt — inte bara nettobeloppet.</p>

<h2>Kontering per projekt — koppla kostnaden dit den hör hemma</h2>
<p>Att kontera betyder att du kodar kostnaden på rätt konto <strong>och</strong> rätt projekt eller kostnadsställe. Det andra ledet är det som avgör din vinst. På löpande räkning är projektkonteringen direkt grunden för vad du får fakturera vidare. På fast pris är den grunden för att mäta täckningsgraden — ligger de verkliga inköpen över kalkylen äter de upp marginalen utan att du ser det förrän jobbet är klart.</p>
<p>I ByggExp konteras varje inköp direkt på projektet så det syns i projektets självkostnad medan jobbet pågår, inte i efterhand. Då kan du fånga en avvikelse medan du fortfarande kan göra något åt den.</p>

<h2>Attest — vem godkänner vad, och varför det inte bara är byråkrati</h2>
<p>Ett attestflöde delas ofta i två steg: sakattest (stämmer inköpet — har vi fått varan, är priset rätt?) och beslutsattest (får kostnaden belasta det här projektet?). Det handlar inte om pappersflytt. Bokföringslagen (1999:1078) kräver att varje affärshändelse stöds av en verifikation (5 kap.) och att det finns en verifieringskedja — en spårbar väg från faktura till bokföring. Ett attestflöde är den interna kontrollen som gör att inget bokförs på projektet utan att någon faktiskt sett och godkänt det. Digitalt går det på minuter; i pärm blir det den bunt som ligger kvar tills momsdeklarationen närmar sig.</p>

<h2>Från leverantörsfaktura till kundfaktura — så kommer alla kostnader med</h2>
<p>Hela poängen är att inget inköp ska falla mellan stolarna på vägen till kundfakturan. Rutinen ser ut så här:</p>
<ol>
<li>Inköpet märks med projekt redan vid beställningen.</li>
<li>Fakturan konteras per projekt och attesteras.</li>
<li>Kostnaden vidarefaktureras med påslag (löpande räkning) eller ingår i fastpriskalkylen.</li>
<li>Utfallet stäms av mot budget.</li>
</ol>
<p>Ett exempel: du köper material för 40 000 kr netto till ett löpanderäkningsjobb. Med 15 % påslag blir det du fakturerar kunden 46 000 kr netto, och mellanskillnaden på 6 000 kr täcker hantering och risk. Missar du bara ett enda materialinköp på 8 000 kr i konteringen faktureras det aldrig vidare — du tappar både inköpet och påslaget, alltså 9 200 kr, rakt av. Det är därför projektmärkningen måste ske vid beställningen och inte när fakturan väl ligger i högen.</p>

<h2>Digital hantering och arkivering (2026-reglerna)</h2>
<p>Leverantörsfakturor är räkenskapsinformation och verifikationer. Enligt 7 kap. 2 § bokföringslagen ska de arkiveras till utgången av det sjunde året efter det kalenderår då räkenskapsåret avslutades. Nytt sedan 1 juli 2024 (SFS 2024:342) är att kravet på att spara pappersoriginalet i ursprungligt skick har tagits bort. Du får skanna eller fotografera en pappersfaktura och kasta originalet direkt — förutsatt att den digitala räkenskapsinformationen bevaras hela arkiveringstiden på sju år. Det är precis det som gör en app-baserad rutin ute på bygget möjlig: montören fotar kvittot, det konteras på projektet, papperet slängs.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fångar du leverantörsfakturan digitalt, konterar den per projekt och skickar den vidare i attestflödet. Eftersom varje inköp ligger på sitt projekt syns den samlade självkostnaden löpande, och kostnaderna finns kvar att vidarefakturera när det är dags att skicka kundfakturan. Systemet ersätter inte din bokföring eller ditt ansvar för momsredovisningen — men det gör att inga inköp ramlar bort mellan bygget och kontoret, och att du ser täckningsgraden medan projektet pågår.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag spara pappersfakturan i original?</h3>
<p>Nej. Sedan 1 juli 2024 (SFS 2024:342) får du digitalisera en pappersfaktura och slänga originalet direkt, så länge den digitala kopian bevaras hela arkiveringstiden på sju år enligt 7 kap. 2 § bokföringslagen.</p>
<h3>När gäller omvänd byggmoms på en leverantörsfaktura?</h3>
<p>När tjänsten är en byggtjänst och du som köpare själv säljer byggtjänster mer än tillfälligt. Då fakturerar leverantören utan moms, anger ditt momsnummer och texten omvänd betalningsskyldighet, och du redovisar momsen själv i deklarationen (16 kap. mervärdesskattelagen).</p>
<h3>Hur vet jag att alla kostnader kommit med på kundfakturan?</h3>
<p>Genom projektredovisning. När varje inköp är konterat på projektet kan du stämma av projektets samlade självkostnad mot det du fakturerat. Ligger något okonterat är det inte vidarefakturerat — och det är där pengarna läcker.</p>
<h3>Hur länge måste jag spara leverantörsfakturorna?</h3>
<p>Till utgången av det sjunde året efter det kalenderår då räkenskapsåret avslutades. De är verifikationer som ska ingå i en spårbar verifieringskedja enligt bokföringslagen.</p>

<h2>Kom igång</h2>
<p>Sätt rätt pris på det du vidarefakturerar med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn →</a>, och vill du se hur kontering och attest per projekt fungerar i praktiken kan du <a href="/sv/contact">boka en demo</a> så visar vi flödet på ett riktigt projekt.</p>

<p>Relaterat: <a href="/sv/blog/attestering">Attestering av fakturor i byggföretag</a> och <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>.</p>
`;

const A_LEVERANTORSFAKTURA_BYGG_PROJEKT: BlogPost = {
  _id: "code-"+"leverantorsfaktura-bygg-projekt",
  title: "Så kopplar du leverantörsfakturor och materialinköp till rätt byggprojekt", slug: "leverantorsfaktura-bygg-projekt", locale: "sv",
  excerpt: "Okonterade leverantörsfakturor är där byggföretag läcker pengar — så bygger du en rutin där varje inköp märks med projekt, attesteras och kommer med på kundens faktura.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_LEVERANTORSFAKTURA_BYGG_PROJEKT_HTML,
  seoTitle: "Leverantörsfaktura per projekt | ByggExp", seoDescription: "Kontera leverantörsfakturor och materialinköp per byggprojekt så alla kostnader kommer med på kundfakturan. Rutin, omvänd byggmoms och attest förklarat.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:54:00.000Z", createdAt: "2026-08-18T19:54:00.000Z", updatedAt: "2026-08-18T19:54:00.000Z",
};

const A_FONSTER_U_VARDE_2026_HTML = `
<p>Ett fönsterbyte står och faller med en enda siffra – u-värdet. Problemet är att de flesta offerter du får in jämför fel siffra, och att kunden ofta tror att det finns ett bestämt "BBR-krav för fönster" som avgör saken. Båda missförstånden kostar pengar och trovärdighet. Här går vi igenom Uw-mot-Ug-fällan, vad Boverket faktiskt kräver 2026 och hur du räknar hem ett fönsterbyte utan att lova orimlig återbetalningstid.</p>
<p><a href="/sv/verktyg/u-varde-kalkylator">Räkna ut U-värdet för din konstruktion med vår gratis kalkylator -&gt;</a></p>

<p>Vill du snabbt uppskatta värmeförlust och besparing på ett projekt kan du börja i vår <a href="/sv/verktyg/isolering-kalkylator">gratis isolerings- och u-värdeskalkylator -&gt;</a> och sedan lägga siffrorna i en offert.</p>

<h2>Uw vs Ug: vad siffran faktiskt mäter</h2>
<p>Det finns två helt olika u-värden på ett fönster, och de mäter inte samma sak:</p>
<ul>
<li><strong>Ug</strong> (g = glas) mäter <em>bara</em> mitten av glaset – centre-of-glass. Det är den snällaste siffran.</li>
<li><strong>Uw</strong> (w = window) mäter <em>hela fönstret</em>: glas + karm/båge + distanslist i glaskanten, enligt EN 14351-1 / EN ISO 10077.</li>
</ul>
<p>Uw är alltid lika med eller högre (sämre) än Ug. Anledningen är att karm, båge och glaskant isolerar sämre än själva glaspaketet – de blir köldbryggor. Ett fönster kan ha ett lysande Ug och ändå ett medelmåttigt Uw om karmen är klen. Regeln är enkel: <strong>jämför bara Uw mot Uw</strong>. Allt annat är att jämföra äpplen med päron.</p>

<h2>Fällan i offerten: när säljaren visar Ug</h2>
<p>En annons som skriker "U-värde 0,5" avser nästan alltid Ug – glaset, inte fönstret. Samma fönster kan mycket väl landa på ett Uw runt 1,0 W/m²K när karm och kant räknas in. Det är ingen bluff i teknisk mening, men det är den bättre siffran som marknadsförs medan det är den sämre siffran som styr värmeförlusten och energiberäkningen.</p>
<p>Två saker att alltid begära av leverantören innan du prissätter:</p>
<ul>
<li><strong>Uw enligt EN 14351-1</strong> – uttryckligen hela fönstret, inte Ug.</li>
<li><strong>Karmyttermått</strong> för den aktuella storleken. Uw varierar med fönsterstorlek: ett litet fönster har proportionellt mer karm och därmed ofta sämre Uw än ett stort med samma konstruktion.</li>
</ul>

<h2>Vad kräver BBR/Boverket egentligen 2026?</h2>
<p>Här sitter myten djupt: det finns <strong>inget krav på ett visst Uw per fönster</strong> i de svenska byggreglerna. Den nationella regleringen ligger på hela byggnaden:</p>
<ul>
<li><strong>Primärenergital (EP_pet)</strong> – riktvärdet är cirka 90 kWh/m²·år för bostäder och 70 kWh/m²·år för lokaler, sedan justerat per kommun med en geografisk justeringsfaktor. Justerade småhusvärden hamnar i praktiken ofta runt 95–130 beroende på klimatzon.</li>
<li><strong>Genomsnittligt Um</strong> för hela klimatskalet får inte överstiga 0,40 W/m²K för en ny bostad.</li>
</ul>
<p>Fönstren regleras alltså bara indirekt, via de här två talen. Um är det närmaste man kommer en fönstergräns – men det är ett medelvärde över hela skalet, inte en siffra per fönster. Vid ändring/renovering handlar det om vad som är skäligt att energieffektivisera, inte om ett fast Uw-tak. Boverket är dessutom på väg in i nya, funktionsbaserade byggregler, men energikravet uttrycks fortfarande som primärenergital och genomsnittligt Um – ingen föreskriven per-fönster-siffra tillkommer. Så när en kund frågar "klarar fönstret BBR?" är det korrekta svaret att räkna på hela huset, inte att peka på ett enskilt Uw.</p>

<h2>U-värden i praktiken: gammalt vs nytt</h2>
<p>Typiska Uw-intervall för hela fönstret:</p>
<ul>
<li><strong>Enkelglas:</strong> ca 4,5–5,8 W/m²K</li>
<li><strong>Äldre kopplat 2-glas:</strong> ca 2,7–3,0</li>
<li><strong>Äldre 3-glas:</strong> ca 1,8–2,0</li>
<li><strong>Moderna energifönster (3-glas):</strong> ca 0,7–1,0</li>
</ul>
<p>Att byta ett 2,8-fönster mot ett på ca 0,9 tredubblar i grova drag fönstrets isolerförmåga. Den gamla frivilliga energiklassningen satte Uw ≤ 1,2 W/m²K som gräns för "energieffektivt" – men dagens bättre fönster når 0,7–0,9. Se därför 1,2 som en golvnivå för dugligt, inte som ett mål för en ny investering.</p>
<p>Glöm inte andra halvan av ekvationen: <strong>g-värdet (solvärmefaktorn)</strong>. Ett mycket lågt g släpper in mindre gratis solvärme på vintern och kan höja uppvärmningsbehovet, medan ett högt g ökar risken för övertemperatur på sommaren. Paybackkalkyl enbart på Uw är ofullständig.</p>

<h2>Räkna hem fönsterbytet: en enkel modell</h2>
<p>Värmeförlusten genom ett fönster kan uppskattas som:</p>
<p><strong>kWh/år ≈ U × area × gradtimmar / 1000</strong></p>
<p>Gradtimmar (Kh/år) beror på ort och innetemperatur; ett riktvärde för svenskt klimat ligger runt 100 000 Kh/år. Exempel för 12 m² fönster:</p>
<ul>
<li>Före (Uw 2,8): 2,8 × 12 × 100 000 / 1000 ≈ <strong>3 360 kWh/år</strong></li>
<li>Efter (Uw 0,9): 0,9 × 12 × 100 000 / 1000 ≈ <strong>1 080 kWh/år</strong></li>
<li>Besparing: ca <strong>2 280 kWh/år</strong> → vid elpris 2 kr/kWh ungefär <strong>4 560 kr/år</strong></li>
</ul>
<p>Var ärlig i kalkylen: fönster står typiskt för 15–20 % av husets totala värmeförlust, och gradtimmarna varierar med ort. Sälj inte in en orimlig återbetalningstid – en trovärdig siffra bygger förtroende och skyddar dig mot missnöje i efterhand.</p>

<h2>ROT-avdrag 2026 på fönsterbyte</h2>
<p>För 2026 gäller ROT-avdrag på <strong>30 % av arbetskostnaden</strong>, max 50 000 kr/person/år, inom ett gemensamt ROT+RUT-tak på 75 000 kr/person/år. Viktigt: avdraget gäller <strong>endast montage/arbete</strong> – fönstren och glaset är inte avdragsgilla. Den tillfälliga höjningen till 50 % gällde bara betalningar 12 maj–31 december 2025 och upphörde vid årsskiftet. Att offerera 50 % på ett fönsterjobb 2026 är alltså fel.</p>
<p>Dela därför upp fakturan korrekt: specificera arbetskostnad separat från material, så att ROT beräknas på rätt underlag och kunden inte överskattar avdraget. Ett tydligt underlag gör också att Skatteverkets begäran om ROT går smidigare.</p>

<h2>Checklista innan du skriver på</h2>
<ul>
<li>Begär <strong>Uw enligt EN 14351-1</strong> för den faktiska storleken – inte Ug.</li>
<li>Kontrollera <strong>karmyttermått</strong>, eftersom Uw varierar med format.</li>
<li>Fråga efter <strong>g-värde (solvärmefaktor)</strong> – väg vinter mot sommar.</li>
<li>Klargör <strong>montage/drevning</strong> och att köldbryggan vid infästning hanteras.</li>
<li>Kontrollera <strong>emissivitet och kondensrisk</strong> på glaset.</li>
<li>Läs <strong>garantivillkoren</strong> på både produkt och montage.</li>
<li>Dela <strong>arbete och material</strong> rätt på fakturan för ROT 2026.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig ta siffrorna hela vägen från beräkning till kund. Med <a href="/sv/verktyg/isolering-kalkylator">u-värdeskalkylatorn</a> uppskattar du värmeförlust och besparing per fönsterparti, och i <a href="/sv/verktyg/offert-mall">offertmallen</a> lägger du in Uw, storlek och en korrekt uppdelning av arbete och material så att ROT-avdraget räknas på rätt underlag. Vi lovar ingen exakt payback – klimat, elpris och husets övriga skal påverkar – men du får ett tydligt, spårbart underlag som håller vid en kundfråga.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det ett BBR-krav på u-värde för fönster 2026?</h3>
<p>Nej. Byggreglerna ställer inget krav på ett visst Uw per fönster. Kravet ligger på hela byggnadens primärenergital (riktvärde ca 90 kWh/m²·år för bostäder, geografiskt justerat) och på ett genomsnittligt Um ≤ 0,40 W/m²K för klimatskalet. Fönstren regleras bara indirekt via de talen.</p>
<h3>Vad är skillnaden mellan Uw och Ug?</h3>
<p>Ug mäter bara mitten av glaset, medan Uw mäter hela fönstret – glas, karm/båge och glaskant enligt EN 14351-1. Uw är alltid lika med eller sämre än Ug. Det är Uw som styr värmeförlust och energiberäkning, så jämför alltid Uw mot Uw.</p>
<h3>Hur mycket är ROT-avdraget på fönsterbyte 2026?</h3>
<p>30 % av arbetskostnaden, max 50 000 kr per person och år, inom ett gemensamt ROT+RUT-tak på 75 000 kr. Bara montage/arbete är avdragsgillt – inte fönstren. Den tillfälliga 50 %-nivån gällde enbart 2025 och gäller inte längre.</p>
<h3>Vilket u-värde bör jag sikta på vid nyinvestering?</h3>
<p>Den gamla energiklassningens gräns på Uw ≤ 1,2 är idag ett golv för dugligt. Moderna energifönster når 0,7–1,0 W/m²K, så vid en ny investering är det rimligt att sikta lägre än 1,2. Väg samtidigt in g-värdet så att du inte tappar för mycket gratis solvärme på vintern.</p>

<h2>Kom igång</h2>
<p>Räkna på ditt nästa fönsterbyte i <a href="/sv/verktyg/isolering-kalkylator">u-värdeskalkylatorn</a> och skapa ett tydligt underlag i <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur det fungerar i praktiken? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/berakna-u-varde-isolering">Beräkna u-värde för isolering</a></p>
`;

const A_FONSTER_U_VARDE_2026: BlogPost = {
  _id: "code-"+"fonster-u-varde-2026",
  title: "Fönster u-värde 2026: Uw eller Ug – siffran som avgör om bytet lönar sig", slug: "fonster-u-varde-2026", locale: "sv",
  excerpt: "De flesta fönsterofferter jämför fel siffra – så skiljer du Uw från Ug, tolkar BBR-kravet 2026 och räknar hem bytet på riktigt.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/isolering-preview.webp", contentHtml: A_FONSTER_U_VARDE_2026_HTML,
  seoTitle: "Fönster u-värde 2026: Uw vs Ug | ByggExp", seoDescription: "Uw eller Ug? Så läser du fönsteroffertens u-värde rätt 2026, vad BBR faktiskt kräver och hur du räknar hem fönsterbytet med ROT.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/isolering-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T20:03:00.000Z", createdAt: "2026-08-18T20:03:00.000Z", updatedAt: "2026-08-18T20:03:00.000Z",
};

const A_MILERSATTNING_2026_HTML = `
<p>Hantverkare kör ofta flera mil om dagen mellan byggen, materialleverantörer och kontoret – men många byggföretag tar inte ut den milersättning de har rätt till, eller betalar ut den på ett sätt som utlöser onödig skatt. Rätt hanterad är milersättningen skattefri för både företag och anställd. Fel hanterad blir den skattepliktig lön med arbetsgivaravgifter ovanpå. Här går vi igenom vad som gäller för 2026, inklusive reglerna för reseavdrag och beloppsgränsen (golvet).</p>

<p>För att räkna på ersättning, avstånd och underlag samlat kan du använda <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a> och slippa räkna för hand vid varje löneutbetalning.</p>

<h2>Skattefri milersättning 2026 – beloppen du ska hålla dig till</h2>
<p>Schablonbeloppen för skattefri bilersättning är oförändrade 2026 jämfört med de senaste åren – de höjdes senast 2023 från 18,50 kr/mil till dagens nivå. Betalar du ut inom schablonen redovisas ersättningen inte som lön, det utgår ingen moms och inga arbetsgivaravgifter.</p>
<ul>
<li><strong>Egen bil i tjänsten:</strong> 25 kr/mil (2,50 kr/km).</li>
<li><strong>Förmånsbil, diesel/bensin/laddhybrid:</strong> 12 kr/mil.</li>
<li><strong>Förmånsbil som drivs helt på el:</strong> 9,50 kr/mil.</li>
</ul>
<p>Skillnaden beror på att den som kör egen bil själv står för slitage och löpande kostnader, medan förmånsbilsföraren bara ersätts för drivmedlet – bilen betalas ju redan av arbetsgivaren.</p>

<h2>Tjänsteresa eller arbetsresa? Skillnaden som avgör vad du får ersättning för</h2>
<p>Det här är den vanligaste källan till fel i byggbranschen. Reglerna skiljer på två typer av resor:</p>
<ul>
<li><strong>Tjänsteresa:</strong> resor mellan olika arbetsplatser under arbetsdagen – till exempel från ett bygge till nästa. Här får den anställde skattefri milersättning.</li>
<li><strong>Arbetsresa:</strong> resan hemifrån till den första eller fasta arbetsplatsen och tillbaka hem. Det hanteras som reseavdrag i deklarationen, med ett golv (se nedan), inte som milersättning från arbetsgivaren.</li>
</ul>
<p>Typexempel: en snickare kör hemifrån direkt till bygge A på morgonen. Den resan är en arbetsresa. Mitt på dagen kör hen vidare till bygge B och senare till materialbutiken – de resorna är tjänsteresor med skattefri milersättning. Har företaget ingen fast arbetsplats och den anställde åker till växlande byggen kan även den första resan räknas som tjänsteresa, men bedömningen görs från fall till fall.</p>

<h2>Vad händer om företaget betalar mer än 25 kr/mil?</h2>
<p>Ni får betala mer internt – till exempel om ett kollektivavtal reglerar en högre ersättning – men allt över schablonbeloppet är skattepliktigt. Den överskjutande delen behandlas som lön: den anställde betalar inkomstskatt och företaget betalar arbetsgivaravgifter på den.</p>
<p>Räkneexempel: en anställd kör 200 mil i tjänsten på ett år och får 30 kr/mil, alltså 6 000 kr. Av det är 25 kr/mil (5 000 kr) skattefritt. De återstående 5 kr/mil, totalt 1 000 kr, är skattepliktig lön som ska tas upp och beläggas med arbetsgivaravgifter. Att betala mer är alltså inte olagligt – men det ökar kostnaden och kräver att lönesystemet hanterar delningen rätt.</p>

<h2>Körjournalen – ditt viktigaste bevis vid en granskning</h2>
<p>Det finns inget lagstadgat krav på körjournal, men den är det starkaste bevismedlet du har om Skatteverket ifrågasätter tjänstekörningen eller förmånsbilen. Vid bristande dokumentation är det vanligt att utbetald ersättning underkänns och beskattas i efterhand. En användbar körjournal bör innehålla:</p>
<ul>
<li>Datum för resan.</li>
<li>Mätarställning vid start och slut.</li>
<li>Antal kilometer/mil.</li>
<li>Resans syfte.</li>
<li>Start- och slutdestination.</li>
<li>Markering om resan var privat eller i tjänsten.</li>
</ul>
<p>En digital körjournal som loggar automatiskt sparar tid och gör underlaget svårare att ifrågasätta än handskrivna lappar. Poängen är att varje utbetald mil ska kunna kopplas till en dokumenterad resa.</p>

<h2>Förmånsbil och &quot;ringa omfattning&quot; – så undviker du att beskattas för privat körning</h2>
<p>Har en anställd tillgång till företagets bil uppstår bilförmån om bilen används privat i mer än ringa omfattning. Ringa omfattning är definierat som <strong>högst 10 tillfällen och högst 100 mil (1 000 km) privat körning per år</strong>. Överskrids någon av gränserna beskattas full bilförmån – det räcker alltså inte att hålla sig under milgränsen om antalet tillfällen blir för många.</p>
<p>Här är körjournalen avgörande: den är beviset för att den privata körningen håller sig inom gränserna och att resten är tjänstekörning. Utan journal blir det svårt att freda sig mot en förmånsbeskattning.</p>

<h2>Reseavdrag 2026 – beloppsgränsen (golvet) du måste komma över</h2>
<p>För pendlande byggarbetare finns en beloppsgräns att hålla koll på. Reseavdraget för resor till och från arbetet med egen bil är 25 kr/mil, men bara den del av kostnaderna som överstiger en beloppsgräns (ett golv) är avdragsgill. Golvet har sedan länge legat på 11 000 kr, och någon höjning för inkomstår 2026 är inte bekräftad – utgå därför från 11 000 kr tills Skatteverket meddelar annat. I praktiken innebär golvet att det främst är den som pendlar långt som kommer över gränsen och får avdrag.</p>
<p>Dessutom krävs för bilavdraget att avståndet mellan bostad och arbetsplats är <strong>minst 5 km</strong> och att bilen ger en tidsvinst på <strong>minst 2 timmar per dag</strong> jämfört med kollektivtrafik. Reseavdraget är den anställdes avdrag i deklarationen och ska inte blandas ihop med milersättning som företaget betalar för tjänstekörning.</p>

<h2>Egenföretagare och enskild firma: så drar du av bilkörningen</h2>
<p>Driver du enskild näringsverksamhet gäller egna regler. Kör du i verksamheten med en privatägd bil får du göra avdrag med 25 kr/mil – samma schablon som anställda. Är bilen däremot en tillgång i firman drar du i stället av de faktiska kostnaderna för bilen. Oavsett vilket krävs dokumentation, och en körjournal som skiljer närings- från privatkörning är även här det underlag som håller vid en granskning.</p>

<h2>Checklista: så gör du milersättningen rätt 2026</h2>
<ul>
<li>Betala ut inom schablonen: 25 kr/mil för egen bil, 12 respektive 9,50 kr/mil för förmånsbil.</li>
<li>För körjournal för varje resa – datum, mätarställning, mil, syfte och destination.</li>
<li>Separera tjänsteresor från arbetsresor och privat körning.</li>
<li>Spara underlag i minst 7 år.</li>
<li>Betalar ni över schablon: se till att lönesystemet hanterar den skattepliktiga delen.</li>
<li>Stäm av er interna policy mot eventuellt kollektivavtal.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp registrerar dina medarbetare tid och resor kopplat till rätt projekt, så att underlaget för milersättning byggs upp löpande i stället för att pusslas ihop i efterhand. Du får en samlad bild av vem som kört vad, på vilket bygge och när – vilket gör lönehanteringen enklare och underlaget lättare att stå för vid en granskning. ByggExp ersätter inte en juridisk bedömning av vad som är tjänste- respektive arbetsresa, men det ger dig ett spårbart underlag att grunda besluten på.</p>

<h2>Vanliga frågor</h2>
<h3>Höjs milersättningen 2026?</h3>
<p>Nej. Den skattefria milersättningen för egen bil ligger kvar på 25 kr/mil 2026, oförändrad sedan höjningen 2023. Reseavdraget har fortsatt sin beloppsgräns (golv) på 11 000 kr, där bara kostnader däröver är avdragsgilla.</p>
<h3>Måste jag ha körjournal?</h3>
<p>Det finns inget lagkrav på körjournal, men den är det starkaste beviset vid tjänstekörning och förmånsbil. Utan journal riskerar utbetald ersättning att underkännas och beskattas i efterhand, så i praktiken bör du alltid föra en.</p>
<h3>Får jag milersättning hemifrån till bygget?</h3>
<p>Resan hemifrån till den första eller fasta arbetsplatsen räknas normalt som en arbetsresa, som hanteras med reseavdrag och golv – inte som skattefri milersättning. Resor mellan olika arbetsplatser under dagen är däremot tjänsteresor med skattefri milersättning.</p>
<h3>Kan företaget betala 30 kr/mil?</h3>
<p>Ja, men bara 25 kr/mil är skattefritt. De 5 kr/mil som överstiger schablonen blir skattepliktig lön, med inkomstskatt för den anställde och arbetsgivaravgifter för företaget.</p>

<h2>Kom igång</h2>
<p>Börja med att samla resor och underlag på ett ställe med <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a>. Vill du se hur tid, projekt och reseunderlag hänger ihop i praktiken kan du <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag – så håller du koll på tid och ledighet</a>.</p>
`;

const A_MILERSATTNING_2026: BlogPost = {
  _id: "code-"+"milersattning-2026",
  title: "Milersättning 2026: skattefri bilersättning, körjournal och reseavdrag", slug: "milersattning-2026", locale: "sv",
  excerpt: "Betala ut milersättning rätt 2026 – skattefria schablonbelopp, körjournal, skillnaden mellan tjänste- och arbetsresa samt reseavdragets golv.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_MILERSATTNING_2026_HTML,
  seoTitle: "Milersättning 2026 – skattefritt & reseavdrag | ByggExp", seoDescription: "Så håller du milersättningen skattefri 2026: 25 kr/mil för egen bil, körjournal, tjänste- vs arbetsresa och reseavdragets beloppsgräns för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:18:00.000Z", createdAt: "2026-08-19T05:18:00.000Z", updatedAt: "2026-08-19T05:18:00.000Z",
};

const A_BYGGFAKTURA_CHECKLISTA_ROT_HTML = `
<p>Fel på ROT-fakturan kostar dig pengar direkt. Om arbetskostnaden inte är särskild, personnumret saknas eller fastighetsbeteckningen är fel, stoppas utbetalningen från Skatteverket – och du sitter med en kund som redan bara betalat 70 procent. Den här artikeln ger dig en komplett checklista för vad en faktura ska innehålla för att ge ROT enligt 2026 års regler, så att du får rätt betalt utan att jaga någon.</p>

<p>Vill du slippa hålla ordning på alla obligatoriska fält själv? Skapa korrekta underlag direkt i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a> som redan har fälten för ROT på plats.</p>

<h2>ROT-avdraget 2026 i korthet</h2>
<p>För 2026 gäller åter standardnivån: ROT-avdraget är 30 procent av arbetskostnaden (inklusive moms), med ett tak på 50 000 kr per person och år. Den tillfälligt förhöjda ROT-nivån (50 procent) som gällde under delar av 2025 löpte ut vid årsskiftet och förlängdes inte. ROT tillämpas via fakturamodellen – du drar av 30 procent direkt på fakturan, kunden betalar 70 procent av arbetskostnaden, och du begär resten som utbetalning från Skatteverket när arbetet är klart och betalt.</p>
<p>ROT och RUT delar ett gemensamt tak på 75 000 kr per person och år. ROT-delen kan vara högst 50 000 kr av detta.</p>
<ul>
<li><strong>ROT:</strong> 30 % av arbetskostnaden, max 50 000 kr/person/år.</li>
<li><strong>RUT:</strong> 50 % av arbetskostnaden, kan ensamt nå upp till 75 000 kr/person/år.</li>
<li><strong>Gemensamt tak:</strong> 75 000 kr – du kan alltså inte få 50 000 kr ROT och 75 000 kr RUT samtidigt.</li>
</ul>

<h2>Grundläggande fakturauppgifter</h2>
<p>Innan vi kommer till det ROT-specifika måste fakturan uppfylla de vanliga kraven i bokförings- och mervärdesskattelagen. Utan dessa är fakturan inte giltig oavsett ROT:</p>
<ul>
<li>Unikt fakturanummer och fakturadatum.</li>
<li>Ditt företagsnamn, adress och organisationsnummer.</li>
<li>Uppgift om att du är godkänd för <strong>F-skatt</strong> – ett grundkrav för att arbetet överhuvudtaget ska ge ROT.</li>
<li>Köparens namn och adress.</li>
<li>Momsuppgifter: momssats (25 % för byggtjänster till privatperson) och momsbelopp.</li>
</ul>
<p>Observera att omvänd byggmoms bara gäller mellan byggföretag (B2B). En ROT-faktura går till en privatperson, så här debiterar du vanlig moms. Spara fakturaunderlaget i minst sju år.</p>

<h2>Separera arbetskostnad från material</h2>
<p>Detta är den vanligaste felkällan. Endast arbetskostnaden ger ROT-avdrag. Följande poster är inte avdragsgilla och måste redovisas separat på fakturan:</p>
<ul>
<li>Material och förbrukningsvaror</li>
<li>Rese- och transportkostnader</li>
<li>Maskin- och utrustningshyra</li>
<li>Frakt</li>
<li>Administration och projektering</li>
</ul>
<p>Ange antal arbetstimmar och timpris så att arbetskostnaden går att följa. Skatteverket kan begära underlag, och en klumpsumma där arbete och material blandas ihop riskerar att underkännas.</p>

<h2>Rätt identitetsuppgifter</h2>
<p>För att kunna begära utbetalning måste du redovisa köparens personnummer till Skatteverket. Utnyttjar flera delägare avdraget – till exempel två makar som äger bostaden tillsammans – ska personnumret för var och en som tar del av avdraget framgå, tillsammans med hur beloppet fördelas. Arbetet får inte utföras av köparen själv eller närstående, och en kund kan inte köpa ROT-arbete av sitt eget bolag.</p>

<h2>Villa eller bostadsrätt – olika krav</h2>
<p>Vilka fastighetsuppgifter du behöver beror på bostadstypen:</p>
<ul>
<li><strong>Villa/småhus:</strong> ange <strong>fastighetsbeteckningen</strong> (t.ex. Kommun Del 1:23).</li>
<li><strong>Bostadsrätt:</strong> ange i stället bostadsrättsföreningens <strong>organisationsnummer</strong> samt lägenhetens beteckning (lägenhetsnummer).</li>
</ul>
<p>ROT gäller bara reparation, underhåll samt om- och tillbyggnad av befintlig bostad som köparen äger och bor i eller använder som fritidsbostad. Nyproduktion och hyresrätt ger inte ROT – kontrollera detta innan du lämnar offert.</p>

<h2>Så räknar du ut ROT-beloppet på fakturan</h2>
<p>Ett konkret exempel. Arbetskostnaden är 20 000 kr inklusive moms:</p>
<ol>
<li>ROT-avdrag: 30 % av 20 000 kr = <strong>6 000 kr</strong>.</li>
<li>Kunden betalar: 20 000 − 6 000 = <strong>14 000 kr</strong> för arbetet.</li>
<li>Lägg till material (ej ROT), t.ex. 8 000 kr inkl. moms.</li>
<li>Kundens totala fakturabelopp: 14 000 + 8 000 = <strong>22 000 kr</strong>.</li>
<li>Du begär de resterande <strong>6 000 kr</strong> från Skatteverket.</li>
</ol>
<p>Vill du testa siffrorna för ett specifikt jobb, använd <a href="/sv/verktyg/rot-avdrag-kalkylator">vår ROT-avdragskalkylator &rarr;</a> så ser du direkt vad kunden ska betala och vad du får tillbaka.</p>

<h2>Betalning och begäran om utbetalning</h2>
<p>Betalningen måste ske elektroniskt och spårbart – kort, banköverföring, BankID eller Swish. Sedan 1 januari 2020 ger kontant betalning inte rätt till ROT. Du kan först begära utbetalning från Skatteverket när arbetet är klart och kunden har betalat sin del. Skattereduktionen är preliminär och stäms slutligen av i kundens deklaration, så kontrollera att kunden faktiskt har avdragsutrymme kvar innan du gör avdrag på fakturan.</p>

<h2>Färdig checklista att bocka av</h2>
<ul>
<li>Fakturanummer, datum och dina företagsuppgifter</li>
<li>Uppgift om godkänd F-skatt</li>
<li>Köparens namn, adress och personnummer (alla som utnyttjar avdraget)</li>
<li>Arbetskostnad separerad från material och övriga poster</li>
<li>Antal timmar och timpris</li>
<li>ROT-avdrag angivet (30 %, max 50 000 kr/person)</li>
<li>Fastighetsbeteckning (villa) eller BRF-org.nr + lägenhetsnummer (bostadsrätt)</li>
<li>Momssats och momsbelopp</li>
<li>Belopp kunden ska betala efter ROT-avdrag</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du ROT-fakturan från tidrapporterna, så att arbetstimmarna följer med automatiskt och hålls åtskilda från material. Mallen har färdiga fält för personnummer, fastighetsbeteckning respektive BRF-organisationsnummer, och ROT-avdraget räknas ut på arbetskostnaden. Du får ett komplett underlag att stämma av mot checklistan ovan – men den slutliga kontrollen av kundens avdragsutrymme och att uppgifterna stämmer ligger alltid hos dig.</p>

<h2>Vanliga frågor</h2>
<h3>Vad ska en faktura innehålla för att ge ROT?</h3>
<p>Utöver de vanliga fakturauppgifterna krävs: köparens personnummer, en särskild redovisad arbetskostnad, ROT-avdragets storlek (30 %) samt fastighetsbeteckning för villa eller BRF-organisationsnummer och lägenhetsnummer för bostadsrätt.</p>
<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>30 procent av arbetskostnaden inklusive moms, med ett tak på 50 000 kr per person och år. ROT delar ett gemensamt tak på 75 000 kr per person och år med RUT.</p>
<h3>Vad händer om kundens ROT-utrymme är slut?</h3>
<p>Då nekar Skatteverket utbetalningen och kunden blir betalningsskyldig för hela arbetskostnaden. Eftersom reduktionen är preliminär bör du be kunden bekräfta att utrymme finns innan du drar av ROT på fakturan.</p>
<h3>Kan två personer dela på samma ROT-faktura?</h3>
<p>Ja, om flera äger bostaden kan avdraget fördelas mellan dem. Ange då varje persons personnummer och hur beloppet fördelas – var och en har sitt eget tak på 50 000 kr per år.</p>

<h2>Kom igång</h2>
<p>Skapa en korrekt ROT-faktura direkt i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a>, eller räkna på avdraget med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur hela flödet från tidrapport till ROT-faktura fungerar i praktiken? <a href="/sv/contact">Boka en demo &rarr;</a></p>

<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a>, <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> och <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>.</p>
`;

const A_BYGGFAKTURA_CHECKLISTA_ROT: BlogPost = {
  _id: "code-"+"byggfaktura-checklista-rot",
  title: "Byggfaktura med ROT: komplett checklista för 2026", slug: "byggfaktura-checklista-rot", locale: "sv",
  excerpt: "En komplett checklista för vad en faktura måste innehålla för att ge ROT enligt 2026 års regler – så att utbetalningen från Skatteverket inte stoppas.", tag: "ROT-avdrag",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp", contentHtml: A_BYGGFAKTURA_CHECKLISTA_ROT_HTML,
  seoTitle: "ROT-faktura checklista 2026 | ByggExp", seoDescription: "Så skriver du en korrekt ROT-faktura 2026: alla obligatoriska fält, hur du separerar arbetskostnad och räknar ut avdraget. Färdig checklista att bocka av.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:27:00.000Z", createdAt: "2026-08-19T05:27:00.000Z", updatedAt: "2026-08-19T05:27:00.000Z",
};

const A_JUSTERAT_FORMANSVARDE_SERVICEBIL_HTML = `
<p>Har du en fast inredd skåpbil som står på firman men beskattas som en vanlig förmånsbil? Då betalar du och företaget nästan säkert mer i skatt och arbetsgivaravgifter än ni behöver. Schablonvärdet är byggt för en personbil, inte för en lätt lastbil full av verkstadsinredning – och för den typiska servicebilen finns det tre separata, lagliga vägar att sänka värdet eller slippa förmånen helt.</p>

<p>I den här guiden reder vi ut begreppen och visar hur du räknar. Behöver du hålla ordning på körjournal, tjänstekörning och underlag inför en jämkning använder du <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a>.</p>

<h2>Servicebil, förmånsbil eller arbetsredskap? Reda ut begreppen</h2>
<p>Först det viktigaste: <strong>"servicebil" är inget skattebegrepp</strong>. Skatteverket bryr sig inte om att bilen är registrerad som lätt lastbil (totalvikt högst 3 500 kg). En lätt lastbil beskattas som bilförmån så snart den är <em>tillgänglig för privat bruk</em> – oavsett skåp, dekaler eller att det står "service" på dörren. Att bilen är en lastbil sänker alltså inte automatiskt något.</p>
<p>Det som faktiskt påverkar skatten är bilens lämplighet för privat körning och hur den faktiskt används. Bedömningen görs i tre steg, i tur och ordning:</p>
<ul>
<li><strong>Test 1 – Finns en förmån alls?</strong> Är bilen tillgänglig för privat bruk uppstår förmån (61 kap. inkomstskattelagen).</li>
<li><strong>Test 2 – Är den ett arbetsredskap?</strong> Är bilen så inredd att privat användning är olämplig kan värdet jämkas eller falla bort.</li>
<li><strong>Test 3 – Körs den minst 3 000 mil i tjänsten?</strong> Då sätts värdet till 75 procent.</li>
</ul>
<p>Vägarna kan staplas. En arbetsredskaps-jämkning behöver till exempel inte vila på 3 000-mil-regeln.</p>

<h2>Väg 1 – Slipp förmånen helt: ringa omfattning</h2>
<p>Den starkaste vägen är att ingen förmån alls beskattas. Det gäller om bilen körs privat bara "vid ett fåtal tillfällen och i ringa omfattning". Skatteverkets etablerade tolkning sätter två gränser:</p>
<ul>
<li>Högst <strong>10 tillfällen</strong> per år, <strong>och</strong></li>
<li>Högst <strong>100 mil</strong> (1 000 km) privat körning per år.</li>
</ul>
<p>Observera ordet <strong>och</strong>. Båda gränserna måste hållas samtidigt. Kör du privat vid 8 tillfällen men sammanlagt 120 mil är undantaget borta – då beskattas <em>hela årets</em> fulla förmånsvärde, inte bara det som ligger över gränsen. En enda längre privattur kan alltså välta hela året.</p>
<p>Detta är en smal nålsögon och passar företag där servicebilen i praktiken bara används i jobbet. För att över huvud taget kunna åberopa undantaget krävs en <strong>körjournal</strong> som visar att både antal tillfällen och antal mil ligger under gränserna. Utan dokumentation faller invändningen direkt vid en granskning.</p>

<h2>Väg 2 – Arbetsredskap: nedsatt förmånsvärde för fast inredning</h2>
<p>Den vanligaste vägen för en hantverkare är att bilen är ett <em>arbetsredskap</em>. Skatteverket får enligt lagen "under synnerliga skäl" sätta ett annat värde än schablonen (61 kap. 18–19 §§ inkomstskattelagen). Är lastutrymmet fyllt av fast inredning som gör privat användning opraktisk, kan förmånsvärdet jämkas nedåt.</p>
<p>Det finns ingen fast procentsats här – nedsättningen bedöms individuellt utifrån hur mycket den privata nyttan faktiskt är begränsad. Följande stärker ditt fall:</p>
<ul>
<li><strong>Fast monterad hyll- och verkstadsinredning</strong> som upptar lastutrymmet och inte enkelt kan tas bort.</li>
<li><strong>Smutsig eller skrymmande utrustning</strong> permanent i bilen – ställningsdelar, kablar, oljor, maskiner.</li>
<li><strong>Avsaknad av baksäte</strong> och att bilen bara har plats för föraren och en passagerare.</li>
<li><strong>Dekaler och firmalogotyp</strong> – stödjande, men aldrig ensamt avgörande.</li>
</ul>
<p>Ju mer bilen liknar en rullande verkstad och ju sämre den lämpar sig för familjeutflykter, desto större blir nedsättningen. Fotografera inredningen och spara kvitton på ombyggnaden – det är den bevisningen Skatteverket vill se.</p>

<h2>Väg 3 – 3 000-mil-regeln: 25 procent lägre värde</h2>
<p>Den här vägen står tydligt i lagen och kräver ingen skönsmässig bedömning. Körs bilen minst <strong>3 000 mil (30 000 km) i tjänsten</strong> under beskattningsåret sätts förmånsvärdet till 75 procent av det värde som annars skulle gälla – en säker rabatt på 25 procent (61 kap. 18–19 §§ inkomstskattelagen).</p>
<p>Viktigt: det är <em>tjänstekörning</em> som räknas, inte pendling mellan hem och den vanliga arbetsplatsen. Kör du mellan arbetsplatser, till kunder och byggen under dagen räknas det – men den dagliga rutten hemifrån till fasta kontoret gör det normalt inte. För en montör eller servicetekniker som är ute på uppdrag hela dagarna är 3 000 mil ofta lätt att nå.</p>
<p>Beviset är återigen <strong>körjournalen</strong>. Kan du inte visa att minst 3 000 mil kördes i tjänsten faller rabatten. Skatteverket underkänner rutinmässigt nedsättningar där tjänste- och privatkörning inte kan styrkas.</p>

<h2>Så ansöker du om jämkning hos Skatteverket</h2>
<p>Nedsättningen sker inte automatiskt. För att det lägre värdet ska slå igenom redan under året ansöker <strong>arbetsgivaren</strong> om justering (jämkning) hos Skatteverket. Då beräknas arbetsgivaravgifter och preliminärskatt på det lägre värdet direkt i lönekörningen.</p>
<p>Rutinen ser ut så här:</p>
<ol>
<li>Arbetsgivaren fyller i Skatteverkets blankett/e-tjänst för justering av förmånsvärde.</li>
<li>Bifoga underlag: körjournal, bilder på inredningen, beskrivning av användningen.</li>
<li>Vänta på <strong>beslut</strong> – utan ett beslut måste arbetsgivaren rapportera det ordinarie schablonvärdet.</li>
</ol>
<p>Missar ni att ansöka i tid kan den anställde i stället yrka justeringen i efterhand i sin inkomstdeklaration, men då har för mycket redan dragits under året. Ansök alltså före lönekörningen. Kontrollera aktuellt blankettnummer och e-tjänst på skatteverket.se innan ni skickar in – Skatteverket uppdaterar formulären löpande.</p>

<h2>Räkneexempel: skåpbil med verkstadsinredning</h2>
<p>Tänk dig en dieseldriven skåpbil med fast hyllinredning som en snickare kör i tjänsten hela året. Anta att schablonens förmånsvärde landar på 60 000 kr för året (den exakta siffran byggs av en ränterelaterad del knuten till statslåneräntan, en prisrelaterad del av nybilspriset, ett prisbasbeloppsbelopp och full fordonsskatt – hämta 2026 års tal från Skatteverkets kalkyl).</p>
<ul>
<li><strong>3 000-mil-regeln:</strong> värdet sätts till 75 procent, alltså 45 000 kr. Det är 15 000 kr lägre beskattat värde.</li>
<li><strong>Arbetsredskaps-jämkning:</strong> antas Skatteverket sätta ned värdet med exempelvis hälften blir det beskattade värdet 30 000 kr.</li>
</ul>
<p>På 30 000 kr lägre förmånsvärde sparar företaget arbetsgivaravgifter och den anställde inkomstskatt på hela mellanskillnaden – flera tusenlappar per år. Notera att en miljöbilsnedsättning är en helt annan regel och inte gäller en diesel- eller bensinskåpbil; för den typiska servicebilen är det 3 000-mil-regeln och arbetsredskaps-jämkningen som är hävstängerna. Räkna alltid på det faktiska schablonvärdet med Skatteverkets verktyg "Räkna ut bilförmånsvärde".</p>

<h2>Vanliga misstag som kostar hantverkare pengar</h2>
<p>Det dyraste felet är att <strong>anta att en lastbil är skattefri</strong> – den är den inte. Det näst dyraste är att köra utan körjournal och sedan hävda nedsättning i efterhand; utan underlag underkänns yrkandet. Andra klassiker: att blanda ihop pendling med tjänstekörning i 3 000-milsräkningen, att tro att ringa omfattning gäller trots en enda längre privattur (den välter hela året), och att skjuta upp jämkningsansökan så att fullt värde dras under hela året. Att inte fotografera inredningen innan bilen byggs om gör dessutom arbetsredskapsargumentet svagare.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte din skattedeklaration åt dig, men verktygen ger dig underlaget som en jämkning står och faller med. Du håller ordning på tjänstekörning och kan följa dina mil mot 3 000-milsgränsen, samla dokumentation om servicebilen och hålla kvitton och underlag samlade i sju år som bokföringen kräver. Med spårbara uppgifter blir det enkelt att fylla i Skatteverkets blankett och att stå stadigt om en granskning kommer. Själva beslutet om nedsatt förmånsvärde fattar dock alltid Skatteverket.</p>

<h2>Vanliga frågor</h2>
<h3>Är en lätt lastbil automatiskt befriad från förmånsvärde?</h3>
<p>Nej. En lätt lastbil (totalvikt högst 3 500 kg) beskattas som bilförmån om den är tillgänglig för privat bruk. Det som sänker eller tar bort värdet är att bilen är olämplig för privat användning eller körmönstret – inte att den är registrerad som lastbil.</p>
<h3>Hur mycket sänks förmånsvärdet för en inredd servicebil?</h3>
<p>3 000-mil-regeln ger en fast nedsättning till 75 procent av värdet. Arbetsredskaps-jämkningen har ingen fast procentsats utan bedöms individuellt av Skatteverket utifrån hur mycket den fasta inredningen begränsar privat nytta.</p>
<h3>Måste jag ha körjournal?</h3>
<p>I praktiken ja. För att åberopa ringa omfattning, styrka 3 000 mil i tjänsten eller försvara en arbetsredskaps-jämkning behöver du en körjournal. Skatteverket underkänner rutinmässigt nedsättningar där körningen inte kan dokumenteras.</p>
<h3>Vem ansöker om jämkningen – jag eller arbetsgivaren?</h3>
<p>Arbetsgivaren ansöker hos Skatteverket så att avgifter och preliminärskatt beräknas på det lägre värdet redan under året. Saknas beslut måste ordinarie schablonvärde rapporteras, och den anställde får i stället begära justeringen i sin inkomstdeklaration.</p>

<h2>Kom igång</h2>
<p>Börja med att föra körjournal och samla underlag redan i dag – det avgör vad du kan få igenom. Använd <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a> för att hålla ordning på tjänstekörning och dokumentation, och kontrollera alltid aktuella siffror och blanketter på skatteverket.se. Vill du se hur ByggExp stöttar hela ekonomiflödet i firman? <a href="/sv/contact">Boka en demo här</a>.</p>

<p><em>Relaterat:</em> <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_JUSTERAT_FORMANSVARDE_SERVICEBIL: BlogPost = {
  _id: "code-"+"justerat-formansvarde-servicebil",
  title: "Justerat förmånsvärde för servicebil: tre lagliga vägar att sänka skatten", slug: "justerat-formansvarde-servicebil", locale: "sv",
  excerpt: "En fast inredd skåpbil beskattas ofta som en vanlig förmånsbil. Här är de tre lagliga vägarna att sänka förmånsvärdet – och hur du ansöker om jämkning hos Skatteverket.", tag: "Skatt",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_JUSTERAT_FORMANSVARDE_SERVICEBIL_HTML,
  seoTitle: "Justerat förmånsvärde servicebil | ByggExp", seoDescription: "Din inredda servicebil beskattas ofta som personbil. Så sänker du förmånsvärdet lagligt via ringa omfattning, arbetsredskap och 3 000-mil-regeln.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:30:00.000Z", createdAt: "2026-08-19T05:30:00.000Z", updatedAt: "2026-08-19T05:30:00.000Z",
};

const A_NYA_3_12_REGLER_2026_HTML = `
<p>En ny, gemensam 3:12-modell för dig som äger ett byggföretag i aktiebolagsform är nu <strong>beslutad och gällande lag</strong>. Riksdagen beslutade den 26 november 2025 (SFS 2025:1361) och reglerna trädde i kraft <strong>1 januari 2026</strong>. Grundbeloppet höjs kraftigt, det tidigare kravet på eget löneuttag slopas och den så kallade 4-procentsspärren försvinner – men det tillkommer också nya begränsningar. Nedan går vi igenom beloppen och räknar på vad de betyder för en typisk byggfirma.</p>

<p>Vill du snabbt kalkylera lön och utdelning för ditt bolag? Använd verktygen i <a href="/sv/verktyg">vår kostnadsfria verktygslåda för byggföretag -&gt;</a> som stöd innan du stämmer av med din redovisningskonsult.</p>

<h2>Vad är 3:12-reglerna – snabbrepetition för byggföretagaren</h2>
<p>3:12-reglerna styr hur du som delägare i ett fåmansföretag beskattas när du tar utdelning eller säljer dina aktier. Kärnan är ett <strong>gränsbelopp</strong>: den del av utdelningen som ryms inom gränsbeloppet beskattas med 20 procent i inkomstslaget kapital, medan överskjutande belopp beskattas som lön (tjänst) upp till ett tak. Skillnaden är stor – tjänstebeskattning kan landa på över 50 procent på marginalen. För en byggfirma som gått med bra vinst är det därför helt centralt att veta hur stort gränsbelopp du kan bygga upp varje år.</p>

<h2>Det stora skiftet – en modell istället för två</h2>
<p>Tidigare fick du välja mellan förenklingsregeln (ett schablonbelopp) och huvudregeln (löneunderlagsberäkning). Nu slås dessa ihop till <strong>en gemensam beräkning</strong>: gränsbeloppet består av ett grundbelopp plus ett lönebaserat utrymme. Du behöver alltså inte längre välja metod – alla räknar på samma sätt.</p>
<p>Reglerna gäller för beskattningsår som påbörjas efter den 31 december 2025. Det innebär att de nya reglerna syns första gången på den K10 du lämnar våren 2027, tillsammans med inkomstdeklarationen 2027.</p>

<h2>Höjt grundbelopp – 322 400 kr (4 IBB)</h2>
<p>Grundbeloppet höjs från 2,75 till 4 inkomstbasbelopp. Gränsbeloppet för utdelning 2026 beräknas på inkomstbasbeloppet (IBB) för 2025, som är 80 600 kr. Det motsvarar <strong>322 400 kr</strong> (4 × 80 600). Notera att IBB för 2026 (83 400 kr) styr först gränsbeloppet för 2027.</p>
<p>Viktigt att förstå: beloppet gäller <em>samtliga aktier i företaget</em> och fördelas efter ägarandel. Är du ensam ägare får du hela grundbeloppet. Äger du och en kompanjon 50 procent var får ni 161 200 kr var. Detta är en tydlig förändring jämfört med den tidigare schablonen och gynnar särskilt ensamägare och mindre byggbolag.</p>

<h2>Slopat löneuttagskrav och slopad 4-procentsspärr</h2>
<p>Det tidigare kravet på eget löneuttag (6 IBB plus 5 procent av totala löner, alternativt 9,6 IBB) slopas. Du behöver alltså inte längre ta ut en viss minimilön för att få räkna med det lönebaserade utrymmet. Även 4-procentsspärren – kravet att äga minst 4 procent av kapitalet – försvinner.</p>
<p>För hantverkaren som historiskt tagit låg lön låter detta som en ren förenkling. Men som vi ser nedan finns det fortfarande starka skäl att köra lön genom bolaget.</p>

<h2>Nytt lönebaserat utrymme – 50 % över 8 IBB</h2>
<p>Det lönebaserade utrymmet beräknas som <strong>50 procent av den del av din andel av lönesumman som överstiger 8 IBB</strong> (8 × 80 600 = 644 800 kr för 2026). Detta schablonavdrag om 8 IBB ersätter det gamla löneuttagskravet. Formeln blir:</p>
<ul>
<li>Lönebaserat utrymme = 50 % × (din andel av bolagets kontanta löner − 644 800 kr)</li>
</ul>
<p>Ett tak kvarstår: det lönebaserade utrymmet får aldrig överstiga <strong>50 gånger din egen (eller en närståendes) kontanta lön</strong>. Tar du själv ut för låg lön begränsar det alltså hur mycket löneutrymme du kan bygga, oavsett hur stora de totala lönerna är.</p>

<h2>Räkneexempel: så mycket kan en byggföretagare ta i lågbeskattad utdelning</h2>
<p><strong>Exempel 1 – enmansföretag utan anställda.</strong> Du äger 100 procent och har inga anställda utöver dig själv. Ditt gränsbelopp blir grundbeloppet: 322 400 kr. Utdelning upp till det beloppet beskattas med 20 procent, det vill säga 64 480 kr i skatt. Enkelt och förutsägbart.</p>
<p><strong>Exempel 2 – byggbolag med anställda.</strong> Du äger 100 procent av ett bolag med fem anställda och en total kontant lönesumma på 3 500 000 kr. Lönebaserat utrymme = 50 % × (3 500 000 − 644 800) = 50 % × 2 855 200 = <strong>1 427 600 kr</strong>. Lägg till grundbeloppet 322 400 kr så blir det totala gränsbeloppet omkring <strong>1 750 000 kr</strong>.</p>
<p>Kontrollera bara 50×-taket: tar du själv ut exempelvis 700 000 kr i lön är taket 35 000 000 kr, alltså inget hinder här. Tar du däremot bara 20 000 kr i lön blir taket 1 000 000 kr och begränsar då ditt lönebaserade utrymme. Det är just därför lönenivån fortfarande spelar roll.</p>

<h2>Skattenivåerna: 20 %, tjänst och 30 % över taket</h2>
<p>Utdelning eller kapitalvinst inom gränsbeloppet beskattas med 20 procent (tekniskt sett tas två tredjedelar upp och beskattas med 30 procent i kapital). Belopp <em>över</em> gränsbeloppet beskattas som tjänst upp till ett takbelopp. Takbeloppet är 90 IBB för utdelning och 100 IBB för kapitalvinst – överstigande belopp beskattas med platt 30 procent i kapital i stället för som tjänst.</p>
<p>Har du sedan tidigare ett sparat utdelningsutrymme följer det med in i det nya systemet. Observera dock en viktig förändring: den årliga <strong>ränteuppräkningen av det sparade utrymmet slopas</strong>. Du förlorar alltså inte tidigare uppbyggt utrymme vid övergången, men det växer inte längre med ränta.</p>

<h2>Detta bör du hålla koll på</h2>
<ul>
<li>Se över din egen lönenivå – 8 IBB-avdraget i formeln och 50×-taket gör att lön fortfarande är relevant trots slopat löneuttagskrav.</li>
<li>Planera utdelningen utifrån bolagets resultat och ditt totala gränsbelopp.</li>
<li>Håll underlaget till din K10 uppdaterat så att du har rätt siffror när du deklarerar våren 2027.</li>
<li>Kom ihåg att karenstiden vid bedömning av kvalificerade andelar förkortas från fem till fyra år, med verkan för beskattningsår som börjar efter den 31 december 2026.</li>
<li>Stäm av med din redovisningskonsult innan du fastställer lön och utdelning.</li>
</ul>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att tro att lön blivit ointressant. Löneuttagskravet slopas, men 50×-taket och 8 IBB-avdraget gör att en rimlig egen lön ofta lönar sig ändå.</li>
<li>Att räkna grundbeloppet per person i stället för per bolag – grundbeloppet (322 400 kr) fördelas efter ägarandel.</li>
<li>Att tro att det sparade utdelningsutrymmet fortsätter räknas upp med ränta – den uppräkningen är slopad.</li>
<li>Att glömma bort sparat utdelningsutrymme från tidigare år vid övergången.</li>
<li>Att fatta stora utdelningsbeslut utan att först kontrollera bolagets utdelningsbara medel och likviditet.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisningskonsult, men ger dig ordning på underlaget som besluten vilar på. I verktygslådan kan du räkna på lön kontra utdelning, och genom att hålla tidrapportering, projekt och fakturering samlade får du ett tydligare grepp om lönesumma och resultat – de siffror som direkt påverkar ditt gränsbelopp enligt de nya 3:12-reglerna. Bättre löpande koll gör det enklare att planera uttag i tid i stället för i efterhand.</p>

<h2>Vanliga frågor</h2>
<h3>Vad blir grundbeloppet enligt de nya 3:12-reglerna?</h3>
<p>Grundbeloppet höjs till 4 inkomstbasbelopp. Gränsbeloppet för 2026 beräknas på IBB för 2025 (80 600 kr), vilket ger 322 400 kr. Beloppet gäller samtliga aktier i bolaget och fördelas efter ägarandel. IBB för 2026 (83 400 kr) styr först gränsbeloppet för 2027.</p>
<h3>Måste jag ta ut lön för att använda det lönebaserade utrymmet?</h3>
<p>Nej, det formella löneuttagskravet är slopat. Men eftersom det lönebaserade utrymmet begränsas till 50 gånger din egen lön finns det i praktiken fortfarande skäl att ta ut en rimlig lön.</p>
<h3>När började de nya 3:12-reglerna gälla?</h3>
<p>Reglerna beslutades av riksdagen den 26 november 2025 (SFS 2025:1361) och trädde i kraft den 1 januari 2026. De gäller beskattningsår som påbörjas efter den 31 december 2025, vilket innebär att de syns första gången på K10 våren 2027.</p>
<h3>Vilken skatt betalar jag på utdelning inom gränsbeloppet?</h3>
<p>Utdelning inom gränsbeloppet beskattas med 20 procent. Belopp över gränsbeloppet beskattas som tjänst upp till takbeloppet, och däröver med 30 procent i kapital.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på lön och utdelning i <a href="/sv/verktyg">ByggExps kostnadsfria verktygslåda</a>, och <a href="/sv/contact">boka en demo</a> om du vill se hur du får bättre koll på lönesumma och resultat i ett samlat system. Observera att detta är generell information om de nya 3:12-reglerna och inte skatterådgivning – stäm alltid av dina egna siffror med en redovisningskonsult.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag – vad lönar sig?</a></p>
`;

const A_NYA_3_12_REGLER_2026: BlogPost = {
  _id: "code-"+"nya-3-12-regler-2026",
  title: "Nya 3:12-reglerna 2026 för byggföretag – så påverkas din utdelning", slug: "nya-3-12-regler-2026", locale: "sv",
  excerpt: "De nya 3:12-reglerna är beslutade och gäller från 1 januari 2026. Här är grundbeloppet på 322 400 kr, det slopade löneuttagskravet och det nya lönebaserade utrymmet – med räkneexempel för byggföretag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_NYA_3_12_REGLER_2026_HTML,
  seoTitle: "Nya 3:12-reglerna 2026 för byggföretag | ByggExp", seoDescription: "De nya 3:12-reglerna gäller från 1 januari 2026 (SFS 2025:1361). Grundbelopp 322 400 kr, slopat löneuttagskrav och nytt lönebaserat utrymme – så räknar byggföretaget.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T06:00:00.000Z", createdAt: "2026-08-19T06:00:00.000Z", updatedAt: "2026-08-19T06:00:00.000Z",
};

const A_K10_BLANKETT_2026_HTML = `
<p>Driver du bygg genom ett eget aktiebolag är K10 en av de viktigaste blanketterna du lämnar – det är här du räknar ut hur mycket du kan ta ut som lågbeskattad utdelning. En sak förvirrar många direkt: <strong>K10-blanketten som lämnas i inkomstdeklarationen 2026 avser utdelning under inkomstår 2025</strong>. Planerar du i stället utdelning under 2026 gäller helt nya 3:12-regler – riksdagen beslutade om reformen den 26 november 2025 (SFS 2025:1361) och den trädde i kraft 1 januari 2026 – och den K10:an lämnar du våren 2027. Den här guiden reder ut begreppen och tar dig igenom blanketten steg för steg.</p>

<p>Vill du snabbt räkna på lön, moms och marginaler i bolaget hittar du fler kalkylatorer och mallar i <a href="/sv/verktyg">vår gratis verktygslåda för byggföretag →</a>.</p>

<h2>Vad är K10 och när måste du lämna den?</h2>
<p>K10 lämnas av dig som äger <strong>kvalificerade andelar</strong> i ett fåmansföretag. Andelarna är kvalificerade om du eller någon närstående är <em>verksam i betydande omfattning</em> i bolaget – vilket i praktiken alltid gäller en hantverkare som jobbar i sitt eget AB. Blanketten styr fördelningen mellan kapitalbeskattad utdelning (20 %) och tjänstebeskattad utdelning enligt de så kallade 3:12-reglerna.</p>
<p>Är du en helt passiv ägare, utan att vara aktiv i verksamheten, är andelarna i stället okvalificerade. Då redovisar du på K12 och beskattas med 25 % (5/6 av 30 %). För den aktiva byggföretagaren är det alltså K10 som gäller.</p>
<p>Viktigt: lämna K10 <strong>även de år du inte tar någon utdelning</strong>. Annars förlorar du möjligheten att spara outnyttjat utrymme till kommande år – mer om det längre ner.</p>

<h2>Gränsbeloppet – hjärtat i K10</h2>
<p>Gränsbeloppet är det belopp du kan dela ut till bara 20 % skatt (kvoterat till 2/3 av den vanliga kapitalskatten på 30 %). Utdelning över gränsbeloppet beskattas i inkomstslaget tjänst upp till takbeloppet på 90 inkomstbasbelopp, och därutöver som kapital med 30 %. Kapitalvinst vid en framtida försäljning har ett eget tak på 100 inkomstbasbelopp.</p>
<p>Gränsbeloppet beräknas <strong>vid ingången av beskattningsåret (1 januari)</strong> och tillgodoräknas den som äger aktierna då. Köper du ett bolag under året får du inget gränsbelopp för det året – något att tänka på vid ägarskiften. För den K10 du lämnar 2026 räknar du fram gränsbeloppet på ett av två sätt: förenklingsregeln eller huvudregeln.</p>

<h2>Förenklingsregeln steg för steg</h2>
<p>Förenklingsregeln ger ett schablonbelopp på <strong>2,75 × inkomstbasbeloppet för året före beskattningsåret</strong>. För den K10 du lämnar 2026 – alltså utdelning under inkomstår 2025 – blir schablonbeloppet <strong>209 550 kr</strong> (2,75 × inkomstbasbeloppet för 2024).</p>
<p><strong>Viktigt inför 2026:</strong> De nya 3:12-reglerna (SFS 2025:1361) gäller sedan 1 januari 2026 och ändrar både modell och belopp för utdelning under inkomstår 2026 och framåt – se avsnittet längre ner. För den K10 du lämnar 2026 (utdelning inkomstår 2025) gäller dock fortfarande förenklings- och huvudregeln som beskrivs här.</p>
<p>Två regler är avgörande: du får bara använda förenklingsregeln i <strong>ett</strong> bolag per år, och beloppet fördelas efter din ägda andel av aktierna. Äger du halva bolaget får du halva schablonbeloppet. Regeln passar särskilt soloföretagaren med låg lön, eftersom du får ett rejält gränsbelopp utan att behöva uppfylla något löneuttagskrav.</p>

<h2>Huvudregeln steg för steg</h2>
<p>Huvudregeln kan ge betydligt högre gränsbelopp om bolaget har anställda och betalar ut löner. Gränsbeloppet består av två delar:</p>
<ol>
<li><strong>Omkostnadsbelopp × (statslåneräntan 30 nov året före + 9 procentenheter)</strong> – en avkastning på ditt satsade kapital.</li>
<li><strong>Lönebaserat utrymme</strong> = 50 % av samtliga kontanta löner i bolaget (och dotterbolag) året före. Observera: bara kontant ersättning räknas, inte förmåner.</li>
</ol>
<p>För att få använda det lönebaserade utrymmet måste du eller en närstående ha tagit ut tillräcklig lön året före – det så kallade <strong>löneuttagskravet</strong>. Kravlönen är det lägsta av 6 IBB + 5 % av totala kontanta löner, eller 9,6 IBB. För den K10 du lämnar 2026 (utdelning inkomstår 2025, baserat på löner 2024) gäller:</p>
<ul>
<li><strong>Utdelning inkomstår 2025</strong> (löner 2024): lägst av 457 200 kr + 5 % av totala kontanta löner, eller 731 520 kr.</li>
</ul>
<p>Missar du kravlönen med en enda krona faller hela det lönebaserade utrymmet – kolla därför ditt eget löneuttag i god tid före årsskiftet. Observera att detta löneuttagskrav bara gäller de äldre reglerna. För utdelning inkomstår 2026 och framåt är löneuttagskravet slopat – se avsnittet om de nya reglerna nedan.</p>

<h2>Förenkling vs huvudregel – vilken väljer du?</h2>
<p>Du får inte kombinera reglerna samma år för samma bolag – du väljer den som ger högst gränsbelopp. En enkel tumregel:</p>
<ul>
<li><strong>Ensam hantverkare med låg lön</strong> → förenklingsregeln ger oftast mest.</li>
<li><strong>Bolag med anställda där du tar ut kravlön</strong> → huvudregeln lönar sig ofta, eftersom det lönebaserade utrymmet kan bli stort.</li>
</ul>
<p><strong>Räkneexempel (inkomstår 2025):</strong> Ett hantverkar-AB betalade under 2024 ut totalt 2 000 000 kr i kontanta löner. Ägaren tog själv ut 700 000 kr och klarar därmed kravlönen (lägst av 457 200 + 5 % av 2 000 000 = 557 200 kr, eller 731 520 kr → kravet är 557 200 kr). Det lönebaserade utrymmet blir 50 % × 2 000 000 = 1 000 000 kr, långt över förenklingsregelns 209 550 kr. Här vinner huvudregeln stort. En ensam ägare utan anställda och med 300 000 kr i lön klarar inte kravlönen alls – då är förenklingsregeln rätt val. Observera att denna två-regel-modell bara gäller till och med inkomstår 2025. För utdelning inkomstår 2026 och framåt har uppdelningen ersatts av en enhetlig beräkning – ett grundbelopp på fyra inkomstbasbelopp plus ett lönebaserat utrymme utan löneuttagskrav.</p>

<h2>Nya 3:12-regler från inkomstår 2026</h2>
<p>Riksdagen beslutade den 26 november 2025 om en genomgripande reform av 3:12-reglerna (SFS 2025:1361). Reglerna trädde i kraft 1 januari 2026 och tillämpas första gången för beskattningsår som börjar efter den 31 december 2025 – alltså utdelning under inkomstår 2026, som du deklarerar våren 2027. Det här ändras:</p>
<ul>
<li><strong>Ett enhetligt grundbelopp</strong> på fyra inkomstbasbelopp ersätter uppdelningen i förenklings- och huvudregel – <strong>322 400 kr för 2026</strong> (baserat på inkomstbasbeloppet för 2025, 80 600 kr; inkomstbasbeloppet för 2026, 83 400 kr, styr först 2027). Beloppet fördelas efter ägarandel och du får sammanlagt högst fyra inkomstbasbelopp även om du äger flera bolag.</li>
<li><strong>Löneuttagskravet (spärrlönen) slopas</strong> – du behöver inte längre ta ut en viss egen lön för att få räkna lönebaserat utrymme.</li>
<li><strong>Lönebaserat utrymme</strong> beräknas som 50 % av din andel av löneunderlaget minus ett schablonavdrag på 8 inkomstbasbelopp (644 800 kr för 2026). Taket på 50 gånger din egen (eller närståendes) kontanta årslön står kvar.</li>
<li><strong>4 %-kapitalandelskravet slopas</strong> – även den som äger under 4 % får tillgodoräkna sig lönebaserat utrymme.</li>
<li><strong>Ränteuppräkningen av sparat utdelningsutrymme slopas.</strong></li>
<li><strong>Karenstiden kortas från fem till fyra år</strong>, med tillämpning första beskattningsåret som börjar efter den 31 december 2026.</li>
</ul>

<h2>Sparat utdelningsutrymme</h2>
<p>Utnyttjar du inte hela gränsbeloppet ett år sparas resten som <strong>sparat utdelningsutrymme</strong>. Det rullar vidare och räknas för inkomstår 2025 årligen upp med statslåneräntan (30 nov året före) + 3 procentenheter. Utrymmet är knutet till aktierna och följer med vid till exempel arv eller gåva. Det är precis därför du ska lämna K10 varje år, även utan utdelning – annars byggs inget utrymme upp och du kan gå miste om lågbeskattad utdelning längre fram. Notera att ränteuppräkningen slopas i de nya reglerna: från och med beskattningsår 2026 räknas det sparade utrymmet inte längre upp med ränta.</p>

<h2>Vanliga fallgropar och checklista</h2>
<ul>
<li>Blanda ihop utdelningsår och deklarationsår – dubbelkolla vilket inkomstår din utdelning avser.</li>
<li>Räkna schablonbeloppet på fel inkomstbasbelopp (det ska vara året <em>före</em> beskattningsåret).</li>
<li>Missa kravlönen och tappa hela det lönebaserade utrymmet.</li>
<li>Ta med förmåner i löneunderlaget – bara kontant lön räknas.</li>
<li>Hoppa över K10 ett år utan utdelning och därmed slarva bort sparat utrymme.</li>
<li>Utgå från 2025 års regler och belopp för utdelning under 2026 – nya 3:12-regler gäller sedan 1 januari 2026 (SFS 2025:1361).</li>
</ul>
<p><strong>Checklista innan du fyller i:</strong> fastställ ägarandel per 1 januari, samla ihop bolagets kontanta löner året före, kontrollera ditt eget löneuttag mot kravlönen, hämta rätt statslåneränta och räkna båda reglerna – välj sedan den som ger högst gränsbelopp.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggd för att hålla ordning på det underlag K10 vilar på: bolagets löneutbetalningar, ditt eget uttag och resultatet över tid. När du fakturerar, tidrapporterar och följer marginalerna löpande i systemet har du siffrorna framme när det är dags att räkna gränsbelopp och stämma av löneunderlaget – i stället för att leta i pärmar vid deklarationen. Vår <a href="/sv/verktyg">verktygslåda</a> hjälper dig räkna på lön och moms, men själva K10-blanketten fyller du i via Skatteverket och tar din revisor eller redovisningskonsult till hjälp när det behövs.</p>

<h2>Vanliga frågor</h2>
<h3>Avser K10 blankett 2026 utdelning 2025 eller 2026?</h3>
<p>K10 som lämnas i inkomstdeklarationen 2026 avser utdelning under inkomstår 2025, med ett schablonbelopp på 209 550 kr enligt förenklingsregeln. Utdelning som beslutas under 2026 redovisas i stället på K10 våren 2027 och omfattas då av de nya 3:12-reglerna, som riksdagen beslutade den 26 november 2025 (SFS 2025:1361) och som trädde i kraft 1 januari 2026.</p>
<h3>Måste jag lämna K10 om jag inte tar någon utdelning?</h3>
<p>Ja, det bör du. Lämnar du K10 även utan utdelning byggs och bevaras ditt sparade utdelningsutrymme. Hoppar du över blanketten riskerar du att förlora lågbeskattat utrymme som du kunnat använda senare. Tänk på att ränteuppräkningen av det sparade utrymmet slopas från och med beskattningsår 2026.</p>
<h3>Vilken regel ger högst gränsbelopp – förenkling eller huvudregeln?</h3>
<p>För inkomstår 2025 beror det på bolaget. En ensam hantverkare med låg lön får oftast mest genom förenklingsregeln. Har bolaget anställda och du tar ut kravlön kan huvudregelns lönebaserade utrymme (50 % av kontanta löner) ge betydligt mer. Räkna alltid båda och välj den högre. Från inkomstår 2026 har de nya 3:12-reglerna ersatt uppdelningen med en enhetlig beräkning – ett grundbelopp på fyra inkomstbasbelopp plus ett lönebaserat utrymme utan löneuttagskrav.</p>
<h3>Vad händer med utdelning över gränsbeloppet?</h3>
<p>Inom gränsbeloppet beskattas utdelningen med 20 %. Belopp däröver beskattas i tjänst upp till takbeloppet på 90 inkomstbasbelopp, och därutöver som kapital med 30 %.</p>

<h2>Kom igång</h2>
<p>Börja med att samla underlaget och räkna igenom reglerna som gäller ditt utdelningsår – och verifiera alltid årets exakta belopp och statslåneränta direkt hos Skatteverket. Håll särskilt koll på de nya 3:12-reglerna (SFS 2025:1361) som trädde i kraft 1 januari 2026 och som slopar uppdelningen i förenklings- och huvudregel till förmån för ett enhetligt grundbelopp på fyra inkomstbasbelopp. De tillämpas första gången för utdelning under inkomstår 2026, som du deklarerar våren 2027. Räkna på lön och marginaler i <a href="/sv/verktyg">vår verktygslåda</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller bolagets siffror i ordning inför deklarationen.</p>
<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag?</a></p>
`;

const A_K10_BLANKETT_2026: BlogPost = {
  _id: "code-"+"k10-blankett-2026",
  title: "K10-blankett 2026: gränsbelopp och nya 3:12-regler", slug: "k10-blankett-2026", locale: "sv",
  excerpt: "K10 avgör din lågbeskattade utdelning. Guiden tar dig genom gränsbelopp, förenklings- och huvudregel för inkomstår 2025 och de nya 3:12-regler som trädde i kraft 1 januari 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_K10_BLANKETT_2026_HTML,
  seoTitle: "K10-blankett 2026 | ByggExp", seoDescription: "Så fyller du i K10 för bygg-AB: gränsbelopp, förenklings- och huvudregel för inkomstår 2025 – plus de nya 3:12-reglerna (SFS 2025:1361) som gäller från 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T06:03:00.000Z", createdAt: "2026-08-19T06:03:00.000Z", updatedAt: "2026-08-19T06:03:00.000Z",
};

const A_DEBITERINGSGRAD_BYGG_HTML = `
<p>"Jag jobbar jämt men tjänar inget." Nästan alla hantverkare och byggföretagare känner igen känslan: schemat är fullt, telefonen ringer, men när året summeras finns ingen vinst. Förklaringen är sällan att du jobbar för lite. Den ligger i ett enda nyckeltal som få räknar på men alla påverkas av – <strong>debiteringsgraden</strong>. Den mäter hur stor del av din arbetade tid som faktiskt hamnar på en faktura, och den är den direkta länken mellan slitet och lönen.</p>

<p>Vill du se hur debiteringsgraden slår mot ditt timpris kan du räkna direkt i <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator -></a> innan du läser vidare.</p>

<h2>Vad är debiteringsgrad?</h2>
<p>Debiteringsgrad är ett verksamhetsmått för tjänste- och hantverksföretag som visar hur stor andel av arbetstiden som faktiskt faktureras kund. Formeln är enkel:</p>
<p><strong>Debiteringsgrad = debiterbar (fakturerbar) tid ÷ total arbetad/tillgänglig tid × 100.</strong></p>
<p>Ett räkneexempel: har du 3 400 tillgängliga timmar på ett år och fakturerar 2 600 av dem blir debiteringsgraden 2 600 ÷ 3 400 = 0,765 = <strong>76,5 %</strong>. Med 2 000 debiterade av 2 500 landar du på 80 %. Begreppet blandas ibland ihop med faktureringsgrad (i praktiken samma sak) och beläggningsgrad – men beläggning handlar om hur fullt schemat är, medan debiteringsgraden handlar om hur mycket av den tiden som blir betald. Ett fullbokat schema med låg debiteringsgrad är precis den fälla som gör att man jobbar jämt men inte tjänar.</p>

<h2>Räkneexemplet som gör ont</h2>
<p>En normal arbetsmånad har cirka 160 arbetstimmar. Problemet är att långt ifrån alla blir fakturerade. Titta på var timmarna faktiskt tar vägen:</p>
<ul>
<li>Offert- och säljtid – tid du lägger på jobb du kanske inte ens får.</li>
<li>Restid mellan arbetsplatser, som ofta inte betalas fullt ut.</li>
<li>Bokföring, fakturering och annan administration.</li>
<li>Deklaration, marknadsföring och kundkontakt.</li>
<li>Verkstadsbesök, materialhämtning och bilstrul.</li>
<li>Garantiåtgärder och omtag utan betalning.</li>
<li>Väntetid och dötid mellan jobb.</li>
</ul>
<p>När allt detta dras bort återstår i ett typiskt fall 120–140 fakturerbara timmar av 160. Räknar vi med 120 debiterade timmar blir debiteringsgraden 120 ÷ 160 = <strong>75 %</strong>. Det är inte lathet – det är verklighet. Poängen är att de 40 icke-debiterbara timmarna ändå kostar dig lön, arbetsgivaravgift och overhead.</p>

<h2>Kopplingen till timpriset och vinsten</h2>
<p>Här blir det konkret. Timkostnadskalkylen ser förenklat ut så här:</p>
<p><strong>Timpris ≈ (lön + arbetsgivaravgift + overhead) ÷ debiterbara timmar × (1 + vinstmarginal).</strong></p>
<p>Den lagstadgade arbetsgivaravgiften 2026 är 31,42 % på bruttolönen – en fast post du inte kommer runt. Med en snickarlön på runt 36 200 kr i månaden tillkommer alltså drygt 11 000 kr bara i avgift, innan overhead. Alla dessa kostnader ska slås ut på de <em>debiterbara</em> timmarna, inte på de arbetade.</p>
<p>Det är därför debiteringsgraden är så avgörande. Sänker du den från 75 % till 60 % har du plötsligt betydligt färre timmar att fördela samma kostnader på. Antingen måste timpriset upp, eller så äts vinsten upp. Räkna på det i <a href="/sv/verktyg/paslag-marginal-kalkylator">vår påslags- och marginalkalkylator</a> och se hur snabbt marginalen försvinner. Det här är hela förklaringen till "jag jobbar jämt men tjänar inget": arbetstiden är full, men debiteringsgraden är för låg för att bära kostnaderna.</p>

<h2>Riktmärken för byggföretag</h2>
<p>Vad är då en rimlig nivå? För personalintensiva tjänsteföretag kalkylerar man oftast i spannet 60–80 %. För bygg och hantverk är 100 % helt orealistiskt – ett vanligt snitt ligger runt två tredjedelar, alltså cirka 67 %. Använd dessa hållpunkter:</p>
<ul>
<li><strong>Under 65 %</strong> – för lågt. För mycket icke-debiterbar internverksamhet urholkar lönsamheten.</li>
<li><strong>75–85 %</strong> – sunt och optimalt för de flesta tjänsteföretag.</li>
<li><strong>Över 90 %</strong> – ohållbart på sikt och en tydlig utbrändhetsrisk; ingen tid finns kvar för offerter, planering eller återhämtning.</li>
</ul>
<p>Målet är inte högsta möjliga siffra, utan en <em>realistisk och stabil</em> nivå som din kalkyl faktiskt bygger på.</p>

<h2>Så gör tidrapportering debiteringsgraden mätbar</h2>
<p>Du kan inte förbättra det du inte mäter. Och de flesta byggföretag mäter aldrig sin debiteringsgrad – de gissar. Här är en viktig nyans: den <strong>elektroniska personalliggaren</strong> registrerar närvaro på arbetsplatsen för att motverka svartarbete. Den säger ingenting om vad tiden lades på. Den skiljer inte debiterbar tid från offertskrivande, restid eller garantijobb.</p>
<p>För att göra debiteringsgraden mätbar krävs egen <strong>tidrapportering per projekt och kund</strong>. En bra tidrapport ska fånga vem som jobbade, hur länge, på vilket projekt och – avgörande – om timmen var debiterbar eller inte. Först då kan du räkna ut din verkliga debiteringsgrad per anställd och per jobb, i stället för att undra vart timmarna tog vägen. En enkel start är <a href="/sv/verktyg/tidrapport-mall">vår tidrapport-mall</a>.</p>

<h2>Lagkraven du ändå måste ha koll på</h2>
<p>Även om personalliggaren inte mäter debiteringsgrad är den ett lagkrav du inte kommer runt. Elektronisk personalliggare krävs på byggarbetsplats när projektets totala kostnad överstiger fyra prisbasbelopp. Med prisbasbeloppet 2026 fastställt till 59 200 kr går gränsen vid <strong>236 800 kr</strong> – över det krävs liggare från första arbetsdagen, och pappersliggare godkänns inte.</p>
<p>Byggherren ansvarar för att anmäla byggarbetsplatsen till Skatteverket innan bygget påbörjas (ansvaret kan överlåtas på entreprenören), och varje person registrerar sig vid ankomst och avgång. Brister straffar sig: kontrollavgiften är 12 500 kr om liggaren saknas eller har brister, plus 2 500 kr per oregistrerad person, och 25 000 kr om byggarbetsplatsen inte anmälts. Skatteverket får göra oanmälda kontrollbesök. Bryggan är enkel: har du redan digital tidregistrering på plats är steget till en mätbar debiteringsgrad litet.</p>

<h2>Praktiska åtgärder för att höja debiteringsgraden</h2>
<ol>
<li>Fakturera restid och offertarbete där avtalet medger det – tid är tid.</li>
<li>Minska administrationen med digitala verktyg så fler timmar kan gå till betalt arbete.</li>
<li>Planera bort dötiden mellan jobb; luckor i schemat är ren förlust.</li>
<li>Mät per anställd och per projekt så du ser var läckaget finns.</li>
<li>Sätt ett realistiskt debiteringsgradsmål i kalkylen – och prissätt utifrån det, inte utifrån en dröm om 100 %.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp låter dig tidrapportera per projekt och kund direkt i mobilen ute på jobbet, och markera vad som är debiterbart. Timmarna kopplas till projektet och blir underlag både för fakturering och för att följa upp debiteringsgraden per anställd. Du ser var den icke-debiterbara tiden faktiskt hamnar i stället för att gissa. ByggExp räknar inte din lönsamhet åt dig automatiskt – men den ger dig de mätdata du behöver för att räkna rätt och prissätta utifrån verkligheten.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är en bra debiteringsgrad i byggbranschen?</h3>
<p>För bygg och hantverk är cirka 67 % ett vanligt snitt, och 75–85 % räknas som optimalt för de flesta tjänsteföretag. Under 65 % blir det svårt att gå med vinst, och över 90 % är ohållbart över tid.</p>
<h3>Skillnaden mellan personalliggare och tidrapportering?</h3>
<p>Personalliggaren registrerar närvaro på arbetsplatsen och är ett lagkrav för att motverka svartarbete. Tidrapportering per projekt visar vad tiden lades på och skiljer debiterbar från icke-debiterbar tid – det är den som gör debiteringsgraden mätbar.</p>
<h3>Hur påverkar debiteringsgraden mitt timpris?</h3>
<p>Alla kostnader – lön, 31,42 % arbetsgivaravgift och overhead – ska slås ut på de debiterbara timmarna. Sjunker debiteringsgraden får du färre timmar att fördela kostnaderna på, och timpriset måste höjas för att vinsten inte ska försvinna.</p>
<h3>Går det att nå 100 % debiteringsgrad?</h3>
<p>Nej. Offerter, restid, administration, garantijobb och väntetid är ofrånkomliga och sällan fakturerbara. Ett fullt schema motsvarar därför aldrig fullt fakturerade timmar – därför känns det som att man jobbar jämt utan att tjäna.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på ditt verkliga timpris i <a href="/sv/verktyg/timpris-kalkylator">vår timpris-kalkylator</a> och sätt ett realistiskt debiteringsgradsmål. Vill du se hur mätbar tidrapportering per projekt fungerar i praktiken kan du <a href="/sv/contact">boka en demo av ByggExp</a>.</p>

<p>Relaterat: <a href="/sv/blog/tackningsbidrag-byggforetag">Täckningsbidrag för byggföretag</a>, <a href="/sv/blog/timpris-hantverkare">Sätta timpris som hantverkare</a> och <a href="/sv/blog/tidrapportering">Tidrapportering i byggbranschen</a>.</p>
`;

const A_DEBITERINGSGRAD_BYGG: BlogPost = {
  _id: "code-"+"debiteringsgrad-bygg",
  title: "Debiteringsgrad i bygg: nyckeltalet bakom \"jag jobbar jämt men tjänar inget\"", slug: "debiteringsgrad-bygg", locale: "sv",
  excerpt: "Debiteringsgraden – inte antalet arbetade timmar – avgör lönsamheten, och tidrapportering per projekt är det som gör den mätbar.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/2uppgift.webp", contentHtml: A_DEBITERINGSGRAD_BYGG_HTML,
  seoTitle: "Debiteringsgrad bygg – förklarat | ByggExp", seoDescription: "Debiteringsgrad bygg förklarar varför fullt schema inte blir full lön. Se formeln, riktvärden och hur tidrapportering gör nyckeltalet mätbart.",
  seoImageUrl: `${SITE_URL}/landing/features/2uppgift.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:00:00.000Z", createdAt: "2026-08-19T07:00:00.000Z", updatedAt: "2026-08-19T07:00:00.000Z",
};

const A_OMVAND_BYGGMOMS_UNDERENTREPRENOR_HTML = `
<p>Fakturerar du en annan byggfirma med 25 % moms fast du borde ha fakturerat utan? Då väntar krångel: kreditfaktura, ändringsfaktura och en köpare som inte får dra av momsen du felaktigt debiterat. Fel åt andra hållet – att glömma momsen mot en slutkund – är minst lika dyrt. Reglerna kring omvänd byggmoms är tvingande, inte valfria, och de missförstås ofta i ledet av underentreprenörer. Här får du ett konkret svar: när du fakturerar utan moms, exakt vilken text fakturan ska innehålla, och hur både du och köparen redovisar. Reglerna är verifierade mot Skatteverket 2026.</p>

<p>Vill du ha ett underlag som redan är rätt uppställt? Använd <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall -&gt;</a> och fyll i köparens momsnummer och rätt hänvisningstext direkt.</p>

<h2>Vad omvänd betalningsskyldighet betyder (och varför namnet bytte 2023)</h2>
<p>Omvänd betalningsskyldighet inom byggsektorn innebär att det är <strong>köparen</strong>, inte du som säljare, som deklarerar och betalar in momsen till staten. Du fakturerar helt utan moms, och köparen redovisar den i sin egen momsdeklaration. Syftet är att motverka momsbedrägerier i kedjor av underentreprenörer, där moms tidigare kunde debiteras och dras av utan att någonsin betalas in.</p>
<p>Sedan den 1 juli 2023, i och med nya mervärdesskattelagen (SFS 2023:200), heter det <strong>omvänd betalningsskyldighet</strong> i stället för det tidigare <em>omvänd skattskyldighet</em>. Innehållet i reglerna är i sak oförändrat – bara terminologin har uppdaterats. Ser du fortfarande gamla mallar med "omvänd skattskyldighet" är principen densamma, men använd den nya formuleringen på nya fakturor.</p>

<h2>De två villkoren – när MÅSTE du fakturera utan moms</h2>
<p>Omvänd betalningsskyldighet ska tillämpas när <strong>båda</strong> dessa villkor är uppfyllda samtidigt:</p>
<ul>
<li>Du säljer angivna byggtjänster, byggstädning eller hyr ut arbetskraft för sådana tjänster i Sverige.</li>
<li>Köparen är en beskattningsbar person som <strong>mer än tillfälligt</strong> själv säljer sådana byggtjänster – eller är en mellanman som förmedlar dem.</li>
</ul>
<p>Observera att köparens huvudsakliga verksamhet saknar helt betydelse. Det avgörande är enbart om köparen mer än tillfälligt själv säljer byggtjänster. Ett företag som bara tillfälligtvis råkar utföra en byggtjänst omfattas alltså inte. Och när villkoren är uppfyllda är regeln tvingande – du får inte välja att ändå debitera moms.</p>

<h2>Så kollar du att köparen verkligen är ett byggföretag</h2>
<p>Eftersom kravet hänger på köparens status behöver du säkra ett par saker innan du skickar fakturan:</p>
<ul>
<li>Fråga uttryckligen om köparen mer än tillfälligt säljer byggtjänster, och dokumentera svaret skriftligt (mejl räcker).</li>
<li>Kontrollera köparens momsregistreringsnummer mot Skatteverket eller VIES.</li>
<li>Kom ihåg mellanman-regeln: även en köpare som själv inte utför arbetet men förmedlar byggtjänster vidare omfattas.</li>
</ul>
<p>Har du dokumenterat att du i god tro utgått från köparens uppgifter står du starkare om köparen lämnat felaktig information om sin status. Underlaget är också en del av din bokföring – spara det i 7 år tillsammans med fakturan.</p>

<h2>Exakt så ska fakturan se ut</h2>
<p>En faktura med omvänd betalningsskyldighet måste uppfylla tre krav:</p>
<ol>
<li><strong>0 % moms på alla rader</strong> – inget momsbelopp får påföras.</li>
<li><strong>Köparens momsregistreringsnummer</strong> ska anges på fakturan.</li>
<li>En särskild hänvisning med texten <strong>omvänd betalningsskyldighet</strong>.</li>
</ol>
<p>Ett förenklat exempel på hur raderna kan se ut:</p>
<ul>
<li>Rivning och bortforsling, 40 tim á 650 kr – 26 000 kr</li>
<li>Material (ingår i tjänsten) – 8 000 kr</li>
<li>Moms 0 % – 0 kr</li>
<li><strong>Summa att betala: 34 000 kr</strong></li>
<li>Hänvisning: "Omvänd betalningsskyldighet för byggtjänster gäller." + köparens momsnr</li>
</ul>
<p>Notera materialet: om en byggtjänst innehåller material räknas allt – inklusive materialet – som en byggtjänst, och hela fakturan omfattas av omvänd betalningsskyldighet. Du bryter alltså inte ut materialet och momsbelägger det separat.</p>

<h2>Vilka tjänster omfattas – och vilka gör det inte</h2>
<p>Omfattas av omvänd betalningsskyldighet:</p>
<ul>
<li>Mark- och grundarbeten</li>
<li>Bygg- och anläggningsarbeten</li>
<li>Bygginstallationer (el, VVS, ventilation)</li>
<li>Slutbehandling av byggnader (måleri, golv, plattsättning)</li>
<li>Byggstädning</li>
<li>Uthyrning av bygg- och anläggningsmaskiner <strong>med</strong> förare</li>
</ul>
<p>Omfattas <strong>inte</strong> (fakturera med vanlig moms 25 %):</p>
<ul>
<li>Uthyrning av byggmaskiner <strong>utan</strong> förare</li>
<li>Arkitektverksamhet</li>
<li>Byggkonsult och projektledning</li>
<li>Fastighetsskötsel på uppdrag, inklusive mindre reparationer</li>
<li>Plantering och skötsel av grönytor</li>
<li>Ren varuförsäljning där monteringsarbetet är försumbart</li>
</ul>
<p>Är du osäker på momssatsen på en enskild rad kan <a href="/sv/verktyg/moms-kalkylator">vår moms-kalkylator</a> hjälpa dig räkna baklänges och framlänges.</p>

<h2>Hur du och köparen redovisar i momsdeklarationen</h2>
<p>Du som säljare redovisar din försäljning i <strong>ruta 41</strong> och redovisar ingen utgående moms alls.</p>
<p>Köparen gör tre saker: redovisar inköpet i <strong>ruta 24</strong>, beräknar och redovisar utgående moms 25 % på det fakturerade beloppet i <strong>ruta 30</strong>, och drar av samma belopp som ingående moms i <strong>ruta 48</strong> om avdragsrätt finns. Har köparen full avdragsrätt blir nettoeffekten noll – utgående och ingående moms tar ut varandra. Momsen "passerar" alltså bara genom köparens deklaration.</p>

<h2>Vanliga misstag som kostar pengar</h2>
<ul>
<li><strong>Moms på fakturan trots att omvänd byggmoms gäller.</strong> Då måste du ställa ut en ändringsfaktura (kreditfaktura) för den felaktigt debiterade momsen – och köparen har inte avdragsrätt för den.</li>
<li><strong>Glömt köparens momsnummer eller hänvisningstexten.</strong> Fakturan uppfyller inte formkraven och kan behöva göras om.</li>
<li><strong>Brutit ut material och momsbelagt det separat.</strong> Ingår materialet i byggtjänsten ska hela fakturan vara momsfri.</li>
<li><strong>Antagit köparens status utan att fråga.</strong> Dokumentera alltid att köparen mer än tillfälligt säljer byggtjänster.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du fakturan från en mall som redan har fälten för köparens momsnummer och en hänvisningsrad, så att du kan sätta momsen till 0 % och lägga in texten "Omvänd betalningsskyldighet för byggtjänster gäller" utan att missa ett formkrav. Du samlar dessutom köparens uppgifter och din dokumentation på samma ställe, vilket gör det lätt att spara underlaget i 7 år. ByggExp fattar inga skattebeslut åt dig – bedömningen av om villkoren är uppfyllda gör du själv – men verktyget hjälper dig att få fakturan formellt rätt varje gång.</p>

<h2>Vanliga frågor</h2>
<h3>Vilken text måste stå på fakturan vid omvänd byggmoms?</h3>
<p>Fakturan ska innehålla en särskild hänvisning med texten "omvänd betalningsskyldighet", köparens momsregistreringsnummer och 0 % moms på alla rader utan något momsbelopp påfört.</p>
<h3>Ska jag bryta ut materialet och lägga moms på det?</h3>
<p>Nej. Om materialet ingår i en byggtjänst räknas hela leveransen som en byggtjänst och hela fakturan omfattas av omvänd betalningsskyldighet. Materialet momsbeläggs inte separat.</p>
<h3>Vad gör jag om jag råkat fakturera med moms?</h3>
<p>Ställ ut en ändringsfaktura (kreditfaktura) för den felaktigt debiterade momsen. Köparen har inte avdragsrätt för moms som debiterats felaktigt, så det är viktigt att rätta.</p>
<h3>Gäller reglerna även mellan underentreprenörer i en kedja?</h3>
<p>Ja. När en underentreprenör säljer till en huvudentreprenör eller annat byggföretag som i sin tur säljer byggtjänster vidare gäller omvänd betalningsskyldighet i varje led där villkoren är uppfyllda.</p>

<h2>Kom igång</h2>
<p>Repetera de tre kraven innan du skickar: 0 % moms på alla rader, köparens momsnummer, och hänvisningen "Omvänd betalningsskyldighet". Kom igång direkt med <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>, kontrollera momssatser i <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a>, och stäm alltid av mot Skatteverkets vägledning vid tveksamhet. Vill du se hur det fungerar i praktiken? <a href="/sv/contact">Boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>, <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> och <a href="/sv/blog/anlita-underentreprenor">Anlita underentreprenör</a>.</p>
`;

const A_OMVAND_BYGGMOMS_UNDERENTREPRENOR: BlogPost = {
  _id: "code-"+"omvand-byggmoms-underentreprenor",
  title: "Omvänd byggmoms till underentreprenör – så fakturerar du rätt", slug: "omvand-byggmoms-underentreprenor", locale: "sv",
  excerpt: "Guiden som visar när du fakturerar utan moms till en UE eller huvudentreprenör – och exakt hur fakturaraden med omvänd betalningsskyldighet ska se ut.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_OMVAND_BYGGMOMS_UNDERENTREPRENOR_HTML,
  seoTitle: "Omvänd byggmoms till UE | ByggExp", seoDescription: "Så fakturerar du utan moms till en underentreprenör eller huvudentreprenör – exakt fakturatext, de två villkoren och redovisning. Verifierat mot Skatteverket.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:03:00.000Z", createdAt: "2026-08-19T07:03:00.000Z", updatedAt: "2026-08-19T07:03:00.000Z",
};

const A_OFFERT_TILL_BETALD_FAKTURA_FLODE_HTML = `
<p>Lönsamheten i ett byggprojekt avgörs sällan av priset i offerten. Den avgörs av flödet — hur pengarna rör sig från första offert till betald slutfaktura, och hur väl varje steg täcker det föregående juridiskt. En bra kalkyl kan ätas upp av en luddig offert, ett saknat avtal, en försenad à conto-faktura eller ett ROT-avdrag som Skatteverket nekar i efterhand. Den här guiden går igenom hela kedjan offert &rarr; avtal &rarr; delfaktura &rarr; ROT &rarr; slutfaktura som en praktisk arbetsordning för 2026.</p>

<p>Vill du komma igång direkt med grunden? Börja i vår <a href="/sv/verktyg/offert-mall">gratis offertmall &rarr;</a> och bygg vidare därifrån.</p>

<h2>Steg 1 — Offerten som håller juridiskt</h2>
<p>Offerten är inte bara ett pris, den är utgångspunkten för hela ekonomikedjan. Redan här bestämmer du hur mycket du kan fakturera senare och hur enkelt ROT-avdraget blir.</p>
<p>Skilj på <strong>fast pris</strong> och <strong>ungefärligt pris</strong>. Enligt konsumenttjänstlagen får ett avtalat fast pris aldrig överskridas. Anger du i stället ett ungefärligt pris får slutsumman bli högst 15 % högre än det uppgivna, om ni inte avtalat annat. Väljer du fast pris måste marginalen finnas i kalkylen — inte i förhoppningen.</p>
<p>Specificera alltid <strong>arbetskostnaden separat från material, maskiner och resor</strong>. Det är inte bara god ordning, det är en förutsättning för ROT senare: avdraget gäller enbart arbetskostnaden, och en faktura som blandar ihop posterna kan underkännas. Ta med giltighetstid på offerten och tydliga villkor för ÄTA-arbeten (ändringar och tillägg), så att extraarbete inte blir en gratistjänst eller en konflikt.</p>

<h2>Steg 2 — Avtalet: skriv aldrig bara på offerten</h2>
<p>En signerad offert är inte ett fullständigt avtal. För konsumententreprenader finns <strong>Hantverkarformuläret 17</strong>, framtaget av Konsumentverket, Byggföretagen och Villaägarnas Riksförbund. Versionen från 2017 gäller fortfarande 2026 och laddas ner gratis. Den reglerar det offerten inte täcker: betalningsplan, tidplan, hantering av ÄTA och ansvar vid fel.</p>
<p>Reklamationsansvaret är värt att förstå innan du skriver på. För arbete på fast egendom — byggnad eller mark — är reklamationsfristen enligt 17 § konsumenttjänstlagen <strong>10 år</strong>, mot normalt 3 år för annat arbete. Kunden måste reklamera inom skälig tid; en reklamation inom två månader från att felet upptäcktes räknas alltid som i rätt tid.</p>
<p>Jobbar du B2B mot ett annat byggföretag gäller andra regler. Kontrollera om <strong>omvänd skattskyldighet för byggtjänster</strong> (omvänd byggmoms) ska tillämpas — då fakturerar du utan moms och köparen redovisar den. Mer om det i steg 5.</p>

<h2>Steg 3 — Delfaktura och à conto under projektets gång</h2>
<p>Långa projekt får aldrig finansieras ur egen ficka. Koppla delbetalningarna till betalningsplanen i avtalet och fakturera mot <strong>verklig färdigställandegrad</strong> — inte mot kalendern och inte i förskott på arbete som inte är utfört.</p>
<p>Använd 30 dagar netto som betalningsvillkor; det är räntelagens huvudregel. Betalar kunden för sent gäller <strong>dröjsmålsränta</strong> automatiskt, utan att det behöver stå i avtalet: referensräntan plus 8 procentenheter. För perioden 1 januari–30 juni 2026 är referensräntan 2 %, vilket ger 10 % dröjsmålsränta. Regelbundna à conto-fakturor håller likviditeten uppe och gör slutfakturan mindre — vilket sänker risken för tvist på slutet.</p>

<h2>Steg 4 — ROT-avdraget rätt 2026</h2>
<p>Här ändrades förutsättningarna vid årsskiftet. Från och med <strong>1 januari 2026 är ROT-avdraget 30 %</strong> av arbetskostnaden. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och har upphört. Avgörande är alltid <strong>kundens betalningsdatum</strong> — det styr vilket år och vilken procentsats som gäller, vilket är särskilt viktigt kring årsskiften.</p>
<p>Taket är <strong>50 000 kr per person och år</strong>. ROT och RUT delar ett gemensamt tak på 75 000 kr per person, varav högst 50 000 kr får vara ROT. Äger två personer samma bostad kan de nyttja 50 000 kr var, alltså upp till 100 000 kr ROT för samma bostad.</p>
<p>Fakturamodellen steg för steg:</p>
<ol>
<li>Företaget måste vara godkänt för <strong>F-skatt</strong>.</li>
<li>Dela tydligt upp <strong>arbetskostnad och material</strong> på fakturan — ROT gäller aldrig material, maskiner eller resor.</li>
<li>Dra kundens ROT-del direkt på fakturan.</li>
<li>Kunden ska ha <strong>betalat sin del fullt ut</strong> innan du begär utbetalning från Skatteverket.</li>
<li>Skicka begäran senast <strong>31 januari året efter</strong> att kunden betalade.</li>
</ol>
<p>Vill du räkna ut avdraget innan du fakturerar? Testa vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator &rarr;</a>.</p>

<h2>Steg 5 — Slutfaktura och avslut</h2>
<p>Slutfakturan skickas efter slutbesiktning och när eventuella kvarstående ÄTA är avstämda och prissatta. Fakturan måste uppfylla kraven i både mervärdesskattelagen och bokföringslagen: säljarens namn och organisationsnummer, uppgift om F-skatt, momsregistreringsnummer, fakturanummer, datum, tydlig specifikation, belopp och moms. Momsen på byggtjänster är 25 %. En beskrivning som bara lyder ”byggtjänster” underkänns som verifikation — specificera vad som utförts. Förenklad faktura är tillåten upp till 4 000 kr inklusive moms.</p>
<p>Gäller omvänd byggmoms ska fakturan sakna moms, märkas <strong>”Omvänd skattskyldighet för byggtjänster gäller”</strong> och innehålla köparens momsregistreringsnummer. Och kom ihåg regeln från steg 4: begär inte ROT-utbetalning förrän kunden har betalat sin del av slutfakturan fullt ut. Spara underlaget i minst 7 år.</p>

<h2>Checklista — kontrollpunkter i varje steg</h2>
<ul>
<li><strong>Offert:</strong> fast eller ungefärligt pris (max +15 %), arbetskostnad separat från material, giltighetstid, ÄTA-villkor.</li>
<li><strong>Avtal:</strong> Hantverkarformuläret 17, betalningsplan, tidplan, reklamationsansvar (10 år på fast egendom), B2B-koll på omvänd byggmoms.</li>
<li><strong>Delfaktura:</strong> mot färdigställandegrad, 30 dagar netto, dröjsmålsränta 10 % (H1 2026).</li>
<li><strong>ROT:</strong> F-skatt, uppdelad arbetskostnad, 30 % upp till 50 000 kr/person, kundens betaldatum styr året, begäran senast 31 januari.</li>
<li><strong>Slutfaktura:</strong> korrekt fakturainnehåll, rätt moms eller omvänd byggmoms, ROT begärs först efter full betalning, spara 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp binder ihop stegen så att uppgifterna följer med genom hela kedjan. Du lägger upp offerten med arbete och material på separata rader, omvandlar den till avtal och betalningsplan, och skapar à conto-fakturor mot färdigställandegraden utan att skriva om samma uppgifter flera gånger. När det är dags för slutfaktura ligger ROT-uppdelningen redan rätt, och fakturan får de fält som moms- och bokföringslagen kräver. Verktyget räknar inte åt Skatteverket åt dig — men det gör det svårare att tappa arbetskostnaden på vägen och lättare att skicka begäran i tid.</p>

<h2>Vanliga frågor</h2>
<h3>Är ROT-avdraget 30 eller 50 procent 2026?</h3>
<p>30 % av arbetskostnaden. Höjningen till 50 % var tillfällig och gällde bara 12 maj–31 december 2025. Det är kundens betalningsdatum som avgör vilken procentsats som gäller, så betalningar in i 2026 omfattas av 30 %.</p>
<h3>Får jag överskrida priset i offerten?</h3>
<p>Ett avtalat fast pris får inte överskridas. Har du angett ett ungefärligt pris får slutsumman bli högst 15 % högre, om ni inte avtalat annat. ÄTA-arbeten som kunden beställt utöver det ursprungliga uppdraget hanteras separat enligt avtalet.</p>
<h3>När måste jag begära ROT-utbetalning från Skatteverket?</h3>
<p>Senast 31 januari året efter att kunden betalade sin del av fakturan. Kunden måste ha betalat sin del fullt ut innan du skickar begäran, och företaget måste vara godkänt för F-skatt.</p>
<h3>Vad är dröjsmålsräntan om kunden betalar för sent?</h3>
<p>Referensräntan plus 8 procentenheter, automatiskt enligt räntelagen även utan avtal. För 1 januari–30 juni 2026 är referensräntan 2 %, vilket ger 10 % dröjsmålsränta. Huvudregeln för betalningstid är 30 dagar netto.</p>

<h2>Kom igång</h2>
<p>Sätt upp flödet en gång så sköter det sig i varje projekt. Börja med <a href="/sv/verktyg/offert-mall">offertmallen</a> och <a href="/sv/verktyg/faktura-mall">fakturamallen</a>, kontrollera avdraget i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur hela kedjan hänger ihop i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Skriva offert som håller</a>, <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a> och <a href="/sv/blog/a-conto-fakturering-bygg">À conto-fakturering i bygg</a>.</p>
`;

const A_OFFERT_TILL_BETALD_FAKTURA_FLODE: BlogPost = {
  _id: "code-"+"offert-till-betald-faktura-flode",
  title: "Från offert till betald faktura — hela ekonomikedjan i ett byggprojekt (2026)", slug: "offert-till-betald-faktura-flode", locale: "sv",
  excerpt: "En praktisk väg genom hela ekonomikedjan — offert, avtal, delfaktura, ROT och slutfaktura — så att lönsamheten inte läcker mellan stegen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/offert-preview.webp", contentHtml: A_OFFERT_TILL_BETALD_FAKTURA_FLODE_HTML,
  seoTitle: "Offert till faktura bygg 2026 | ByggExp", seoDescription: "Så bygger du ett tätt ekonomiflöde: offert, avtal, à conto, ROT 30 % och slutfaktura. Praktisk guide för hantverkare och byggföretag 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:06:00.000Z", createdAt: "2026-08-19T07:06:00.000Z", updatedAt: "2026-08-19T07:06:00.000Z",
};

const A_ANSVARSFORSAKRING_BYGGFORETAG_HTML = `
<p>Allt fler beställare och offentliga upphandlingar kräver dokumenterat försäkringsskydd innan kontraktet skrivs på. För dig som driver byggföretag räcker det inte längre att ha "en försäkring" – anbudsunderlaget pekar ofta ut vilka moment och vilka belopp som krävs. Här reder vi ut skillnaden mellan ansvarsförsäkring, allriskförsäkring och entreprenadförsäkring, och vilka nivåer som gäller för 2026.</p>

<p>Ska du snart lämna anbud? Se till att offertunderlaget är komplett med rätt villkor och referenser – bygg strukturen enkelt med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a>.</p>

<h2>De tre försäkringarna – och varför de inte är samma sak</h2>
<p>Ett vanligt och dyrt missförstånd är att en enda försäkring täcker allt. Den vanligaste förväxlingen sker mellan ansvar och allrisk, som täcker helt olika saker.</p>
<ul>
<li><strong>Ansvarsförsäkring</strong> täcker skadeståndskrav för person- och sakskada som drabbar tredje man eller beställarens egendom. Om ni orsakar en vattenskada hos grannen eller skadar beställarens befintliga byggnad är det ansvarsdelen som gäller.</li>
<li><strong>Allriskförsäkring</strong> täcker skada på själva entreprenaden – material och nedlagt arbete i det egna projektet. Brinner det pågående bygget eller förstörs monterat material är det allriskdelen som ersätter.</li>
<li><strong>Entreprenadförsäkring</strong> är i praktiken ett branschpaket. Försäkringsbolagen buntar oftast ihop allrisk, ansvar och egendomsskydd för pågående arbeten i en produkt, anpassad efter AB 04, ABT 06 och NLM 10.</li>
</ul>
<p>Poängen: ansvar och allrisk skyddar mot olika typer av skador. Ett rent ansvarsskydd ersätter inte ditt eget brunna virke, och en ren allrisk ersätter inte skadeståndet till tredje man. Som byggföretag behöver du typiskt båda momenten – vilket är just därför paketlösningarna finns.</p>

<h2>Vad AB 04 och ABT 06 faktiskt kräver (kap 5 § 22)</h2>
<p>Försäkringsplikten i AB 04 och ABT 06 kap 5 § 22 är en <em>avtalad</em> skyldighet, inte en lagregel. Men eftersom de allra flesta entreprenadkontrakt bygger på dessa standardvillkor gäller den i praktiken nästan alltid. Enligt § 22 ska entreprenören teckna både allriskförsäkring och ansvarsförsäkring.</p>
<ul>
<li><strong>Ansvarsförsäkringen</strong> får enligt minimiomfattningen inte understiga 200 prisbasbelopp. Prisbasbeloppet för 2026 är fastställt till 59 200 kr, vilket ger ett lägsta försäkringsbelopp på 200 × 59 200 = <strong>11 840 000 kr</strong>.</li>
<li><strong>Allriskförsäkringen</strong> ska motsvara entreprenadens återanskaffningsvärde plus kostnaden för arbete som beställaren tillhandahåller. Beloppet är alltså projektberoende, inte ett fast tal.</li>
<li><strong>Självrisken</strong> för både allrisk och ansvar får enligt BKK:s minimiomfattning inte överstiga 3 prisbasbelopp, det vill säga 3 × 59 200 = <strong>177 600 kr</strong> för 2026.</li>
<li><strong>Giltighetstid:</strong> försäkringarna ska gälla under hela entreprenadtiden och därtill i minst två år efter godkänd entreprenad, för skador du ansvarar för under garantitiden.</li>
</ul>
<p>Beställaren blir dessutom medförsäkrad på allriskförsäkringen i egenskap av byggherre. Minimiomfattningen aktiveras normalt när administrativa föreskrifter upprättats enligt AMA AF och parterna åberopat koderna AFC.54 eller AFD.54.</p>

<h2>Därför dyker försäkringskraven upp i upphandlingar</h2>
<p>Beställare – särskilt offentliga enligt LOU och större privata aktörer – begär allt oftare försäkringsbevis eller intyg. Det förekommer som ska-krav i anbudsunderlaget eller som villkor innan kontrakt får tecknas. Kraven speglar i regel AB- och ABT-nivåerna ovan, ibland med högre belopp för större projekt.</p>
<p>Konsekvensen är konkret: saknar du giltigt bevis riskerar du att diskvalificeras i utvärderingen eller att inte få påbörja arbetet, även om anbudet i övrigt håller. Ett tips är att be försäkringsbolaget om ett försäkringsbevis som uttryckligen anger anpassning till AB 04 och ABT 06 – då slipper upphandlaren tolka om din generella företagsförsäkring uppfyller entreprenadvillkoren.</p>

<h2>Beloppen 2026 – snabb översikt</h2>
<ul>
<li>Prisbasbelopp 2026: <strong>59 200 kr</strong> (förhöjt prisbasbelopp 60 500 kr).</li>
<li>Ansvarsförsäkring, lägsta belopp: <strong>11 840 000 kr</strong> (200 prisbasbelopp).</li>
<li>Självrisk, högsta tillåtna: <strong>177 600 kr</strong> (3 prisbasbelopp).</li>
<li>Allriskförsäkring: entreprenadens återanskaffningsvärde plus beställarens arbete – räknas per projekt.</li>
</ul>
<p>Notera att beloppen räknas om varje gång prisbasbeloppet ändras. En policy som anger ett fast kronbelopp kan bli för låg när prisbasbeloppet stiger – kontrollera att villkoren är kopplade till antal prisbasbelopp och inte till ett fruset tal.</p>

<h2>Byggföretagen-medlemskap och andra krav</h2>
<p>Gällande ansvarsförsäkring är inte bara ett upphandlingskrav utan också ett av villkoren för medlemskap i Byggföretagen. För medlemskap krävs bland annat godkänd F-skatt i Sverige, tillämpning av Byggföretagens kollektivavtal, ID06 på arbetsplatserna samt en gällande ansvarsförsäkring för det arbete som utförs.</p>
<p>Det finns medlemsanpassade försäkringslösningar, men du är fri att välja försäkringsbolag. Det viktiga är att skyddet uppfyller kraven i det avtal du arbetar under, inte var du köper det.</p>

<h2>Checklista innan du lämnar anbud</h2>
<ol>
<li>Se till att du har både ansvars- och allriskskydd – inte bara det ena.</li>
<li>Kontrollera att ansvarsbeloppet minst matchar 200 prisbasbelopp (11,84 Mkr för 2026).</li>
<li>Stäm av att självrisken ligger under taket på 3 prisbasbelopp (177 600 kr).</li>
<li>Verifiera att efterskyddet på minst två år efter godkänd entreprenad finns.</li>
<li>Skaffa ett uppdaterat försäkringsbevis som anger AB 04/ABT 06-anpassning.</li>
<li>Läs upphandlingens AF-del och kontrollera koderna AFC.54/AFD.54.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tecknar inga försäkringar åt dig – det gör ditt försäkringsbolag. Men vi hjälper dig att hålla ordning på det som ska bifogas ett anbud. Med offertmallen bygger du snabbt ett strukturerat underlag där du kan referera till att gällande ansvars- och allriskförsäkring finns enligt AB 04/ABT 06. Du samlar projektuppgifter, villkor och referenser på ett ställe, så att försäkringsbeviset blir en självklar del av anbudsprocessen i stället för något du letar efter i sista minuten.</p>

<h2>Vanliga frågor</h2>
<h3>Räcker en vanlig företagsförsäkring för att lämna anbud?</h3>
<p>Inte alltid. En allmän företagsförsäkring täcker ofta inte hela försäkringsplikten i AB 04/ABT 06, särskilt inte allriskmomentet och rätt belopp. Kontrollera att villkoren uttryckligen matchar entreprenadens krav.</p>
<h3>Vad är skillnaden mellan ansvars- och allriskförsäkring?</h3>
<p>Ansvarsförsäkringen täcker skadestånd för person- och sakskada mot tredje man eller beställaren. Allriskförsäkringen täcker skada på själva det egna arbetet och materialet i projektet. Du behöver normalt båda.</p>
<h3>Hur högt måste ansvarsbeloppet vara 2026?</h3>
<p>Enligt minimiomfattningen i AB 04/ABT 06 minst 200 prisbasbelopp. Med prisbasbeloppet 59 200 kr för 2026 blir det 11 840 000 kr. Kontrollera att din policy anger antal prisbasbelopp, inte ett fast belopp.</p>
<h3>Hur länge måste försäkringen gälla efter att bygget är klart?</h3>
<p>Skyddet ska gälla under entreprenadtiden och därtill i minst två år efter godkänd entreprenad, för skador du ansvarar för under garantitiden.</p>

<h2>Kom igång</h2>
<p>Rätt försäkring är både ett avtalskrav och en konkurrensfördel i anbud. Stäm av din policy mot 2026 års belopp och samla underlaget i <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur ByggExp håller ihop anbud, kalkyl och dokumentation? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a> och <a href="/sv/blog/entreprenorsansvar-lon">Entreprenörsansvar för lön</a>.</p>
`;

const A_ANSVARSFORSAKRING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"ansvarsforsakring-byggforetag",
  title: "Ansvarsförsäkring för byggföretag 2026 – vad du faktiskt behöver", slug: "ansvarsforsakring-byggforetag", locale: "sv",
  excerpt: "Reder ut skillnaden mellan ansvars-, entreprenad- och allriskförsäkring, vilka belopp som gäller enligt AB 04/ABT 06 för 2026 och varför kraven dyker upp i upphandlingar.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_ANSVARSFORSAKRING_BYGGFORETAG_HTML,
  seoTitle: "Ansvarsförsäkring byggföretag | ByggExp", seoDescription: "Ansvars-, allrisk- eller entreprenadförsäkring? Så skiljer de sig, vilka belopp som gäller 2026 och vad upphandlarna kräver av byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:12:00.000Z", createdAt: "2026-08-19T07:12:00.000Z", updatedAt: "2026-08-19T07:12:00.000Z",
};

const A_FORSKOTT_HANDPENNING_BYGG_HTML = `
<p>Ett byggföretag som fakturerar allt i efterhand ger i praktiken sina kunder en räntefri kredit – ofta i veckor eller månader. Material, löner och maskinhyra betalas medan pengarna från kunden dröjer. Förskott och handpenning är verktyg för att vända på det, men de är också minerade av regler. Tar du förskott av fel kund, på fel sätt, kan du bryta mot tvingande lag och tvingas betala tillbaka. Den här guiden reder ut vad du får kräva, av vem, och hur du gör det utan att förlora affären.</p>

<p>Grunden till allt är ett tydligt skriftligt avtal där betalningsvillkoren står svart på vitt – börja med <a href="/sv/verktyg/offert-mall">vår gratis offert- och avtalsmall →</a> och bygg in betalningsplanen redan i offerten.</p>

<h2>Förskott, handpenning och a conto – kalla det rätt sak</h2>
<p>Begreppen blandas ihop, men skillnaden är juridiskt viktig och avgör hur du bokför och vad du får kräva:</p>
<ul>
<li><strong>Förskott</strong> – betalning som sker <em>innan</em> arbetet är utfört. Ett rent förskott är inte kopplat till någon prestation ännu.</li>
<li><strong>Handpenning</strong> – en form av förskott som kopplas till att avtalet ingås, ofta runt 10 %. Nivån är en marknadskonvention, inte ett lagkrav; det finns ingen lag som fastställer hur stor en handpenning ska vara. Om den ska vara återbetalningsbar eller inte måste regleras i avtalet.</li>
<li><strong>A conto / delfaktura</strong> – betalning kopplad till faktiskt utfört arbete eller en uppnådd milstolpe. Detta är inte förskott i egentlig mening, eftersom du fakturerar mot en levererad prestation.</li>
</ul>
<p>Poängen: kalla det du gör för rätt sak i avtalet. En delfaktura mot en färdig stomme är något helt annat – juridiskt och likviditetsmässigt – än en blank förskottsbegäran innan spaden är i marken.</p>

<h2>Vad du får – och inte får – kräva av en konsument</h2>
<p>Anlitas ditt företag av en privatperson gäller konsumenttjänstlagen (1985:716). Den är tvingande till konsumentens fördel, vilket betyder att du inte kan avtala bort den ens om kunden går med på det. Huvudregeln (41 §) är glasklar: konsumenten är inte skyldig att betala förrän tjänsten är utförd. Betalning mot faktura efter utfört arbete är alltså utgångspunkten.</p>
<p>Det finns ingen laglig skyldighet för en konsument att betala förskott. Både Hallå konsument (Konsumentverket) och Byggföretagen avråder uttryckligen privatpersoner från att betala i förskott för arbete som inte är gjort. Du får <em>fråga</em> om förskott, men du kan aldrig tvinga fram det.</p>
<p>Vid småhusentreprenad – ny- eller tillbyggnad av en- eller tvåbostadshus enligt 51–61 §§ – är skyddet som starkast. Där kan parterna <strong>inte ens med bindande verkan avtala om förskott</strong>. Konsumenten är inte skyldig att betala för annat än utfört arbete, och ska slutbesiktning göras har kunden dessutom rätt att hålla inne 10 % av priset tills entreprenaden är godkänd. Förskott är i praktiken uteslutet för dessa jobb.</p>
<p>Kom också ihåg: vid fel i tjänsten får konsumenten hålla inne så mycket av betalningen som krävs som säkerhet för sitt krav (prisavdrag, avhjälpande eller skadestånd). Det gäller även efter att du delfakturerat. Den verkliga risken med att ha tagit förskott är att pengarna kan behöva betalas tillbaka.</p>
<p>Konkret checklista mot konsument:</p>
<ul>
<li>Kräv aldrig förskott som villkor – be, och acceptera ett nej.</li>
<li>Ta aldrig förskott alls vid småhusentreprenad.</li>
<li>Behöver du täcka en stor materialinköp, be om ett separat och tydligt specificerat materialförskott istället för en klumpsumma.</li>
<li>Räkna med att kunden kan hålla inne betalning om något är fel – ha aldrig dragit ut för mycket i förväg.</li>
</ul>

<h2>B2B är en annan värld – här råder avtalsfrihet</h2>
<p>Mot en företagskund gäller inte konsumenttjänstlagen. Här har ni full avtalsfrihet om förskott, betalningsplaner och milstolpar. Det är därför delfakturering och a conto enligt milstolpar är en etablerad och fullt laglig metod i B2B-byggprojekt för att skydda kassaflödet och sänka kreditrisken.</p>
<p>Ett vanligt upplägg är en betalningsplan i tre steg:</p>
<ul>
<li><strong>25 % vid start</strong> – täcker inköp av material och etablering.</li>
<li><strong>50 % vid halvtid</strong> – exempelvis vid färdig stomme eller godkänd deletapp.</li>
<li><strong>25 % vid slutförande</strong> – efter godkänd leverans.</li>
</ul>
<p>Räntelagen ger dig dessutom hävstång mot sena betalare. Huvudregeln är att en fordran förfaller senast 30 dagar efter fakturan; längre kredittid (60 eller 90 dagar) kräver att du uttryckligen godkänt den. Betalar företagskunden för sent har du rätt till dröjsmålsränta motsvarande Riksbankens referensränta plus 8 procentenheter – med referensräntan på 2,00 % under andra halvåret 2026 blir det 10 % per år – plus en lagstadgad förseningsersättning på 450 kr.</p>

<h2>Skydda likviditeten utan att skrämma kunden</h2>
<p>Motståndet mot delbetalningar handlar sällan om pengarna i sig, utan om otrygghet. Så bygger du förtroende istället för friktion:</p>
<ul>
<li><strong>Koppla varje betalning till en synlig milstolpe.</strong> "50 % när stommen står" är lättare att acceptera än "50 % i förskott".</li>
<li><strong>Separera materialförskott.</strong> Att be om täckning för en konkret materialleverans känns rimligt; en rund summa "för säkerhets skull" gör det inte.</li>
<li><strong>Var transparent om varför.</strong> Förklara att delbetalningarna följer arbetets gång – det signalerar ordning och reda, inte desperation.</li>
<li><strong>Sätt allt på pränt.</strong> En skriftlig betalningsplan i avtalet tar bort tolkningsutrymmet och tvisterna.</li>
</ul>

<h2>Moms- och ROT-fällan vid förskott och a conto</h2>
<p>Tajmingen på betalningen styr mer än du tror. För förskott och a conto är det <strong>betalningen</strong> som avgör momsen, inte fakturametoden – utgående moms ska redovisas när förskottet tas emot. För bygg- och anläggningstjänster gäller normalt fakturadatummetoden, men om du får betalt enligt en betalningsplan utan faktura redovisas momsen när betalningen tas emot. En viktig lättnad: momsen på förskott och a conto får senareläggas till senast två månader efter godkänd slutbesiktning.</p>
<p>Ett mottaget förskott är dessutom inte en skattepliktig intäkt när det kommer in. Det bokförs som en skuld till kunden (konto 2420 Förskott från kunder) tills arbetet är levererat – intäkten uppstår först när prestationen är utförd.</p>
<p>ROT-avdraget kräver särskild vaksamhet kring årsskiften. Från 1 januari 2026 är ROT åter 30 % av arbetskostnaden (den tillfälliga höjningen till 50 % gällde bara maj–december 2025). Maxbeloppet är 50 000 kr per person och år, och ROT delar ett gemensamt tak på 75 000 kr per person och år med RUT. Avdraget gäller endast arbetskostnad – inte material, resor eller adminavgifter. Avgörande: det är <strong>betalningsdatumet</strong>, inte offert-, boknings- eller fakturadatum, som bestämmer vilket år och vilken avdragsnivå som gäller. Arbetet måste vara betalt senast 31 december 2026 och du måste skicka utbetalningsansökan till Skatteverket senast 31 januari 2027. Vid årsskiftesnära delbetalningar kan alltså tajmingen ensam avgöra om kunden får rätt avdrag.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig få struktur på det som annars glider isär mellan offert, avtal och faktura. Du bygger betalningsplanen redan i offerten, kopplar delbetalningar till milstolpar och för över dem till fakturor utan att skriva om allt manuellt. På fakturan hanterar du ROT-avdrag och omvänd byggmoms mot företagskunder, och du håller ihop underlagen så att du enkelt ser vad som är fakturerat och vad som återstår. ByggExp ger inte skatterådgivning och kan inte garantera hur Skatteverket bedömer ett enskilt fall – men verktyget gör det lätt att dokumentera villkoren korrekt och i tid, vilket är halva jobbet.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag ta förskott av en privatperson?</h3>
<p>Du får fråga, men aldrig tvinga fram det. Konsumenttjänstlagens huvudregel är betalning efter utfört arbete, och lagen är tvingande till kundens fördel. Vid småhusentreprenad kan förskott inte ens avtalas med bindande verkan.</p>
<h3>Hur stor får en handpenning vara?</h3>
<p>Det finns ingen lagstadgad nivå. De cirka 10 % som ofta nämns är en marknadskonvention. I tjänsteköp är handpenning juridiskt en förskottsbetalning, så belopp och om den är återbetalningsbar måste framgå av det skriftliga avtalet.</p>
<h3>När ska jag redovisa moms på ett förskott?</h3>
<p>Utgående moms redovisas när förskottet eller a conto-betalningen tas emot – här styr betalningen, inte fakturametoden. För byggtjänster får momsen på förskott och a conto senareläggas till senast två månader efter godkänd slutbesiktning.</p>
<h3>Vad avgör vilket år ROT-avdraget hamnar på?</h3>
<p>Betalningsdatumet, inte faktura- eller bokningsdatum. Delbetalningar runt ett årsskifte kan hamna på olika år och därmed olika villkor, så planera betalningsplanen med det i åtanke.</p>

<h2>Kom igång</h2>
<p>Lägg grunden i avtalet: skapa offert med tydlig betalningsplan i <a href="/sv/verktyg/offert-mall">offert- och avtalsmallen</a>, och för över delbetalningarna till <a href="/sv/verktyg/faktura-mall">fakturamallen</a> när milstolparna nås. Vill du se hur ByggExp knyter ihop offert, betalningsplan och faktura i praktiken? <a href="/sv/contact">Boka en demo →</a></p>

<p>Relaterat: <a href="/sv/blog/a-conto-fakturering-bygg">A conto-fakturering i byggprojekt</a>, <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturan</a>.</p>
`;

const A_FORSKOTT_HANDPENNING_BYGG: BlogPost = {
  _id: "code-"+"forskott-handpenning-bygg",
  title: "Förskott och handpenning i byggbranschen: så skyddar du likviditeten utan att skrämma kunden", slug: "forskott-handpenning-bygg", locale: "sv",
  excerpt: "Rätt hanterat förskott skyddar kassaflödet – men reglerna skiljer sig helt mellan konsument- och företagsjobb, och tajmingen på betalningen avgör både moms och ROT.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_FORSKOTT_HANDPENNING_BYGG_HTML,
  seoTitle: "Förskott hantverkare: guide 2026 | ByggExp", seoDescription: "Så tar du förskott och handpenning som hantverkare utan att bryta mot konsumentskyddet. Regler för konsument vs B2B, moms, ROT-tajming och betalningsplan.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:24:00.000Z", createdAt: "2026-08-19T07:24:00.000Z", updatedAt: "2026-08-19T07:24:00.000Z",
};

const A_F_SKATT_HANTVERKARE_ANSOKAN_HTML = `
<p>Utan godkännande för F-skatt måste din uppdragsgivare göra skatteavdrag på 30 % av det du fakturerar och dessutom betala arbetsgivaravgifter på beloppet. I praktiken betyder det att få byggföretag anlitar dig – F-skatten är din biljett till uppdragen. Den här guiden går igenom hur du ansöker steg för steg, de tre kraven Skatteverket prövar (självständighet, varaktighet, vinstsyfte), vad du gör om ansökan avslås, och hur du undviker den dyra fällan när gränsen mellan egenföretagare och anställd ifrågasätts.</p>

<p>Räkna på hur ROT-avdraget påverkar din arbetskostnad och prissättning med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator -&gt;</a> innan du sätter offertpriserna som din preliminära inkomstdeklaration ska bygga på.</p>

<h2>Vad F-skatt faktiskt innebär för dig som hantverkare</h2>
<p>Godkännande för F-skatt betyder att du själv ansvarar för att betala din preliminärskatt och dina egenavgifter (sociala avgifter). När du fakturerar med F-skatt slipper uppdragsgivaren göra skatteavdrag och betala arbetsgivaravgifter – ansvaret flyttas helt till dig. Det är därför beställare i byggbranschen nästan alltid kräver att underentreprenörer är godkända för F-skatt.</p>
<p>För en enskild firma under 65 år är egenavgifterna normalt cirka 28,97 % av överskottet (10,21 % för dig som fyllt 67 vid årets ingång). Både din preliminärskatt och egenavgifterna ingår i den debiterade preliminärskatt som Skatteverket beslutar om och som du betalar in månadsvis till skattekontot.</p>
<p>Är du både anställd och driver eget vid sidan om får du automatiskt FA-skatt. Du ansöker om F-skatt som vanligt – Skatteverket tilldelar FA-skatt utifrån din inkomstsituation, du behöver alltså inte ansöka separat. Med FA-skatt gäller F-skatten bara näringsinkomsten, medan din arbetsgivare fortsatt drar A-skatt på lönen.</p>

<h2>De tre kraven Skatteverket prövar – näringsverksamhet</h2>
<p>För att bli godkänd måste du bedriva, eller ha för avsikt att bedriva, näringsverksamhet. Den måste uppfylla tre krav samtidigt:</p>
<ul>
<li><strong>Självständighet</strong> – du styr själv hur och när arbetet utförs, har egna verktyg och kan ha, eller åtminstone möjlighet att ha, flera kunder. En snickare som tar egna uppdrag åt olika beställare, lämnar egna offerter och står för sin egen tid är självständig. Den som varje dag tar emot order av en enda beställare på samma sätt som en anställd är det inte.</li>
<li><strong>Varaktighet</strong> – verksamheten ska bedrivas regelbundet och över tid, inte bara vara ett par enstaka jobb. Ett fåtal helguppdrag räcker sällan; en löpande verksamhet med återkommande kunder gör det.</li>
<li><strong>Vinstsyfte</strong> – du ska ha för avsikt att gå med vinst. Du behöver inte faktiskt visa vinst från start, men verksamheten ska vara upplagd för att tjäna pengar, inte drivas som hobby.</li>
</ul>
<p>Alla tre krav måste vara uppfyllda. Just självständigheten är det som oftast fäller avgörandet för hantverkare, och det är samma bedömning som återkommer när gränsen mot anställning prövas.</p>

<h2>Så ansöker du steg för steg</h2>
<p>Ansökan är kostnadsfri. Så här går det till:</p>
<ol>
<li>Logga in på verksamt.se med BankID eller annan e-legitimation. Har du inte e-legitimation kan du använda pappersblanketten Företagsregistrering SKV 4620.</li>
<li>Beskriv din verksamhet – vilken typ av byggtjänster du utför och hur du driver arbetet.</li>
<li>Lämna en preliminär inkomstdeklaration med uppskattad omsättning och överskott. Sätt en realistisk siffra – det är den som avgör din debiterade preliminärskatt varje månad. För lågt gissat ger en obehaglig kvarskatt, för högt binder onödig likviditet.</li>
<li>Skicka in och vänta på beslutet. Handläggningen tar vanligen några veckor; olika källor anger allt från 1–2 upp till 3–6 veckor. Skatteverket skickar registreringsbeviset per post.</li>
</ol>
<p>Viktigt: fakturera aldrig med F-skatt förrän godkännandet är på plats. Skriver du "godkänd för F-skatt" på en faktura innan beslutet finns riskerar både du och beställaren problem, eftersom uppdragsgivaren annars är skyldig att göra skatteavdrag.</p>

<h2>Om ansökan avslås – vad gör du</h2>
<p>Skatteverket nekar eller återkallar F-skatt om du har skatteskulder, har låtit bli att deklarera, redovisa eller betala skatt, har näringsförbud, är i konkurs, tidigare har missbrukat ett F-skattegodkännande, eller har obetalda återkrav för ROT/RUT eller grön teknik. Har du bott i Sverige kortare tid än två år måste du dessutom kunna styrka att du saknar skatteskulder i ditt tidigare hemland.</p>
<p>Får du avslag: börja med att åtgärda bristen. Betala skatteskulden, lämna in de deklarationer som saknas, eller skaffa intyg om skattefrihet från tidigare land. När hindret är borta är det oftast snabbast att lämna in en ny, korrigerad ansökan i stället för att formellt överklaga – handläggningen går fortare den vägen.</p>
<p>Är du oense om själva beslutet kan du begära omprövning eller överklaga till förvaltningsrätten. Tänk på att ett avslag inte tvingar dig att lägga ner verksamheten – men utan F-skatt beskattas du som anställd hos dina uppdragsgivare, och de måste dra 30 % skatt och betala sociala avgifter, vilket i praktiken stänger dörren till uppdragen. Åtgärda därför bristen snarast och ansök på nytt.</p>

<h2>Gränsen F-skatt vs anställd – falskt egenföretagande-fällan</h2>
<p>Även med godkänd F-skatt kan Skatteverket i efterhand pröva om ett uppdrag egentligen är en anställning. Bedömningen är en helhetsbedömning av din självständighet: vad parterna avtalat, hur beroende du är av en enda kund, om uppdraget är personligt, hur inordnad du är i beställarens verksamhet, vem som håller med verktyg, hur många kunder du har och hur risk och ansvar fördelas.</p>
<p>Att hyra ut sig själv under långa perioder för att ersätta beställarens ordinarie anställda räknas normalt inte som näringsverksamhet – även om båda parter kallar det för anlitande av egenföretagare. Detta kallas <em>falskt egenföretagande</em>: du är formellt godkänd för F-skatt men jobbar under anställningsliknande, ekonomiskt beroende villkor.</p>
<p>Om Skatteverket omklassificerar relationen beskattas din inkomst som tjänst, och beställaren kan bli skyldig att göra skatteavdrag och betala arbetsgivaravgifter – i värsta fall retroaktivt. Byggbranschen är särskilt i myndigheternas och fackets fokus här. Skydda dig genom att verkligen agera som företagare: ha flera kunder, egna verktyg, egen ekonomisk risk, och skriv tydliga avtal och offerter som beskriver ett avgränsat uppdrag snarare än löpande arbete på beställarens villkor.</p>

<h2>Behåll din F-skatt</h2>
<p>Godkännandet är inte permanent – det kan återkallas om förutsättningarna brister. Så håller du det rent:</p>
<ul>
<li>Deklarera och betala moms, preliminärskatt och egenavgifter i tid – ett städat skattekonto är grunden.</li>
<li>Ha flera kunder, eller åtminstone en reell möjlighet till det, så att självständigheten står sig.</li>
<li>Skriv tydliga avtal och offerter för varje uppdrag.</li>
<li>Fakturera med korrekta uppgifter, inklusive ditt momsregistreringsnummer och märkning om omvänd byggmoms när du fakturerar andra byggföretag.</li>
</ul>
<p>Kom ihåg: en återkallad F-skatt betyder att du beskattas som anställd hos dina uppdragsgivare och att de måste hantera skatteavdrag och avgifter – i praktiken ett uppdragsstopp.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att agera som ett riktigt företag, vilket är precis det självständighetskravet handlar om. Du skriver tydliga offerter och avtal per uppdrag, fakturerar med rätt uppgifter (momsnummer, ROT och omvänd byggmoms) och håller ordning på flera kunder samtidigt. Underlagen blir spårbara och lätta att visa upp om ett uppdrag skulle ifrågasättas. ByggExp ansöker inte om F-skatt åt dig – det gör du på verksamt.se – men verktyget gör det enkelt att driva verksamheten på ett sätt som håller för Skatteverkets helhetsbedömning.</p>

<h2>Vanliga frågor</h2>
<h3>Hur lång tid tar det att få F-skatt?</h3>
<p>Handläggningen tar vanligtvis några veckor. Olika källor anger 1–2 veckor upp till 3–6 veckor. Beslutet med registreringsbevis skickas per post, och du bör inte fakturera med F-skatt förrän godkännandet finns på plats.</p>
<h3>Vad kostar det att ansöka om F-skatt?</h3>
<p>Ingenting. Ansökan är kostnadsfri och görs på verksamt.se med BankID, eller på pappersblanketten SKV 4620. Kostnaden kommer i stället löpande, i form av den preliminärskatt och de egenavgifter du betalar månadsvis.</p>
<h3>Kan jag ha F-skatt och samtidigt vara anställd?</h3>
<p>Ja. Då tilldelar Skatteverket automatiskt FA-skatt när du ansöker om F-skatt – du ansöker inte separat. F-skatten gäller din näringsinkomst, medan arbetsgivaren fortsätter dra A-skatt på din lön.</p>
<h3>Vad händer om min F-skatt återkallas?</h3>
<p>Verksamheten behöver inte läggas ner, men du beskattas som anställd hos dina uppdragsgivare. Det innebär att de måste göra skatteavdrag på 30 % och betala arbetsgivaravgifter, vilket i praktiken gör det svårt att få uppdrag. Åtgärda orsaken och ansök på nytt.</p>

<h2>Kom igång</h2>
<p>Sätt en realistisk omsättning innan du lämnar din preliminära inkomstdeklaration – räkna på arbetskostnad och ROT med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur offerter, avtal och fakturor kan hänga ihop och stärka din självständighet? <a href="/sv/contact">Boka en demo av ByggExp</a> så visar vi hur du får ordning på underlagen från första uppdraget.</p>

<p>Relaterat: <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>, <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för bygg</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_F_SKATT_HANTVERKARE_ANSOKAN: BlogPost = {
  _id: "code-"+"f-skatt-hantverkare-ansokan",
  title: "F-skatt för hantverkare – så ansöker du (och vad du gör om ansökan avslås)", slug: "f-skatt-hantverkare-ansokan", locale: "sv",
  excerpt: "Komplett guide till F-skatt för hantverkare: ansökan steg för steg, näringskriterierna, avslagshantering och gränsen mot anställd.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_F_SKATT_HANTVERKARE_ANSOKAN_HTML,
  seoTitle: "F-skatt hantverkare: ansökan | ByggExp", seoDescription: "Så ansöker du om F-skatt som hantverkare, de tre kraven Skatteverket prövar, vad du gör vid avslag och hur du undviker falskt egenföretagande.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:27:00.000Z", createdAt: "2026-08-19T07:27:00.000Z", updatedAt: "2026-08-19T07:27:00.000Z",
};

const A_A_PRISER_BYGG_HTML = `
<p>Att gå från löpande räkning till fast pris är steget där många hantverkare tjänar – eller förlorar – sin marginal. Skillnaden mellan att gissa en klumpsumma och att räkna hem den ligger nästan alltid i ett enda begrepp: á-priset. Har du koll på dina egna enhetspriser kan du lämna fasta anbud med öppna ögon. Har du det inte, tar du en risk du inte har prissatt.</p>

<p>Vill du snabbt räkna baklänges från din kostnad till ett enhetspris med rätt marginal? Testa <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator -&gt;</a> innan du sätter din nästa á-prislista.</p>

<h2>Vad ett á-pris faktiskt är</h2>
<p>Ett á-pris (à-pris) är ett enhetspris: priset exklusive moms för <strong>en färdig enhet av utfört arbete</strong>. Det kan vara per kvadratmeter lagt golv, per löpmeter list, per styck monterad dörr eller per kubikmeter schakt. Á-priset är byggkalkylens minsta byggsten – det du multiplicerar med en mängd för att få en delsumma, och summerar till en anbudssumma.</p>
<p>Notera att á-pris <em>inte</em> betyder ungefärligt pris, även om orden låter lika. Ett á-pris är ett exakt enhetspris. Sammanblandningen ställer till problem i offerter, så håll isär de tre begreppen nedan.</p>

<h2>Á-pris, ungefärligt pris och fast pris – tre olika saker</h2>
<ul>
<li><strong>Á-pris</strong> = pris per enhet (m², lpm, st, tim). Byggstenen i kalkylen.</li>
<li><strong>Ungefärligt pris</strong> = ett konsumentbegrepp. Enligt konsumenttjänstlagen 36 § får ett ungefärligt pris överskridas med högst 15 % om inget annat avtalats.</li>
<li><strong>Fast pris</strong> = en totalsumma som inte får överskridas alls.</li>
</ul>
<p>Poängen: du bygger ett fast pris genom att lägga ihop dina á-priser gånger uppmätta mängder, plus gemensamma kostnader, risk och vinst. Á-prislistan är verktyget som gör den summan till något du kan stå för i stället för en magkänsla.</p>

<h2>Löpande räkning kontra fast pris – vem tar risken</h2>
<p>Vid löpande räkning i kommersiella entreprenader (AB 04/ABT 06) gäller självkostnadsprincipen: du får ersättning enligt kostnadsposterna i AB 04 kap 6 § 9 plus entreprenörsarvode (procentpåslag för central administration och vinst). Risken för mängd och tid ligger då i praktiken hos beställaren – blir det mer jobb, betalar kunden mer.</p>
<p>Vid fast pris flyttar den risken till dig. Räknar du fel på tidsåtgång eller spill äter du kostnaden själv. Á-prislistan är bryggan mellan lägena: den bygger på verklig data från dina löpande jobb, så att det fasta priset vilar på siffror du redan mätt in.</p>

<h2>Så bygger du upp ett á-pris steg för steg</h2>
<ol>
<li><strong>Tidsåtgång per enhet.</strong> Hur många minuter tar en färdig m² eller lpm, inklusive rigg och städ?</li>
<li><strong>Timkostnad.</strong> Lön + arbetsgivaravgift (31,42 % för 2026) + semester + eventuellt OB. Det är din interna kostnad per arbetstimme, inte ditt debiteringspris.</li>
<li><strong>Materialåtgång + spill.</strong> Nettomängd plus realistiskt spillpåslag.</li>
<li><strong>Omkostnader och maskiner.</strong> Förbrukning, verktygsslitage, hyrd utrustning fördelat per enhet.</li>
<li><strong>Risk- och vinstpåslag.</strong> Din marginal ovanpå självkostnaden.</li>
</ol>
<p><strong>Räkneexempel, golvläggning per m²:</strong> Säg 0,25 tim/m² i tidsåtgång. Med en timkostnad på 450 kr blir arbetet 112,50 kr/m². Material med spill 180 kr/m². Omkostnader 20 kr/m². Summa självkostnad 312,50 kr/m². Med 25 % påslag landar á-priset på cirka 390 kr/m² exklusive moms. Den sista siffran är det du för in i din prislista och sedan multiplicerar med kvadratmetrarna i nästa anbud.</p>
<p>Är du osäker på din interna timkostnad – börja i <a href="/sv/verktyg/timpris-kalkylator">vår timpriskalkylator</a> och för in resultatet som timraden i uträkningen ovan.</p>

<h2>Från egna kostnadsdata till en levande á-prislista</h2>
<p>Det bästa underlaget för dina á-priser är dina egna avslutade löpande-jobb. Tidrapporterna visar hur lång tid en färdig enhet faktiskt tog – inte hur lång tid du hoppades att den skulle ta. Mät verklig tidsåtgång per enhet på några jobb, räkna fram á-priset och kalibrera mot marknadsläget.</p>
<p>Som riktvärde 2026 ligger snickares timpris vanligen mellan 500 och 1 000 kr/tim, ofta 750–1 100 kr inklusive moms för standarduppdrag, och i Stockholm och andra storstäder 15–25 % högre än riksgenomsnittet. Hamnar dina á-priser långt under den nivån när du räknar tillbaka till timmar, har du troligen missat en kostnadspost. Håll listan levande och justera när löner, material eller maskinhyror ändras.</p>

<h2>Från á-priser till fast pris i praktiken</h2>
<p>När listan sitter blir det fasta anbudet mekaniskt: gör mängdavtagning från ritning, multiplicera varje mängd med sitt á-pris, lägg på gemensamma kostnader (etablering, ställning, projektledning), risk och vinst. En mellanväg är mängdkontrakt: beställaren anger uppskattade (fiktiva) mängder, du prissätter varje post med ett á-pris, och slutlig ersättning regleras i efterhand mot uppmätt verklig mängd. Då slipper du ta hela mängdrisken samtidigt som kunden får förutsägbara enhetspriser.</p>
<p>Värt att hålla ögonen på: de nya standardavtalen AB 25 och ABPU 25 väntas ersätta AB 04 och ABT 06 och väntas tidigast 2027 enligt BKK. De innehåller tydligare reglering av á-priser och mängdbestämmelser än dagens avtal, vilket gör en välskött á-prislista än mer användbar.</p>

<h2>Att prissätta mot konsument</h2>
<p>Jobbar du mot privatkund gäller andra spelregler. ROT-avdraget 2026 är 30 % av arbetskostnaden (sänkt från den tillfälliga 50 %-satsen 2025), med tak 50 000 kr per person och år och ett nytt gemensamt tak för ROT+RUT på 75 000 kr per person och år. Avdraget gäller enbart arbetskostnaden – material, resor och administration räknas inte in. Momsen på byggtjänster är 25 %. Á-priser anges normalt exklusive moms i kalkyl och anbud; moms läggs på vid fakturering, och ROT beräknas på arbetskostnaden inklusive moms.</p>
<p>Anger du ett ungefärligt pris mot konsument, kom ihåg 15 %-regeln. Vill du undvika tolkningstvister: lämna fast pris eller specificera tydligt vad som ingår och vilka á-priser som gäller för tillkommande arbete.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp samlar du dina á-priser på ett ställe och kopplar dem till offerten, så att ett fast anbud byggs av samma enhetspriser varje gång i stället för att räknas om från grunden. Tidrapporterna från dina löpande jobb ger dig underlaget att mäta verklig tidsåtgång per enhet och stämma av mot á-priset. På fakturan hanteras moms och ROT-avdrag på arbetskostnaden, och ÄTA-arbete kan prissättas mot dina fasta á-priser. Verktyget räknar åt dig – men á-priserna och antagandena är dina.</p>

<h2>Vanliga frågor</h2>
<h3>Är á-pris och ungefärligt pris samma sak?</h3>
<p>Nej. Ett á-pris är ett exakt enhetspris per färdig enhet arbete. Ungefärligt pris är ett konsumentbegrepp som enligt konsumenttjänstlagen 36 § får överskridas med högst 15 %. Blanda inte ihop dem i offerten.</p>
<h3>Ska á-priser anges med eller utan moms?</h3>
<p>Á-priser anges normalt exklusive moms i kalkyl och anbud. Momsen (25 % på byggtjänster) läggs på vid fakturering. Mot konsument beräknas ROT på arbetskostnaden inklusive moms.</p>
<h3>Hur får jag fram tidsåtgången per enhet?</h3>
<p>Använd tidrapporter från tidigare löpande-jobb. Dela nedlagd arbetstid med antalet färdiga enheter (m², lpm, st) så får du en verklig tidsåtgång att bygga á-priset på – mycket säkrare än en gissning.</p>
<h3>Kan jag använda á-priser även vid löpande räkning?</h3>
<p>Ja. Vid löpande räkning ersätts du enligt självkostnadsprincipen, men en fast á-prislista för vanliga moment gör dina fakturor tydligare och ger dig data att successivt gå över till fast pris.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna fram rätt påslag i <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a>, för in enhetspriserna i <a href="/sv/verktyg/offert-mall">offertmallen</a> och bygg ditt första fasta anbud på riktig data. Vill du se hur á-prislista, offert och tidrapport hänger ihop i praktiken – <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/paslag-pa-material">Påslag på material</a>, <a href="/sv/blog/fast-pris-eller-lopande-rakning">Fast pris eller löpande räkning</a> och <a href="/sv/blog/timpris-hantverkare">Timpris för hantverkare</a>.</p>
`;

const A_A_PRISER_BYGG: BlogPost = {
  _id: "code-"+"a-priser-bygg",
  title: "Á-priser i bygg: så sätter du enhetspriser och går från löpande till fast pris", slug: "a-priser-bygg", locale: "sv",
  excerpt: "Ett á-pris är ett enhetspris per färdig enhet arbete – och nyckeln till att gå från löpande räkning till fast pris utan att äta upp marginalen.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_A_PRISER_BYGG_HTML,
  seoTitle: "Á-priser bygg: så sätter du dina egna | ByggExp", seoDescription: "Vad ett á-pris är, hur du bygger upp det från din egen timkostnad och materialåtgång, och hur du summerar á-priser till ett tryggt fast pris.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T07:30:00.000Z", createdAt: "2026-08-19T07:30:00.000Z", updatedAt: "2026-08-19T07:30:00.000Z",
};

const A_ACKORDSLON_BYGG_HTML = `
<p>Ackord är byggbranschens klassiska prestationslön: laget får betalt för utfört arbete i stället för nedlagd tid, och tar samtidigt större ansvar för planering och produktionsflöde. Rätt använt driver det produktivitet och ger en förutsägbar styckkostnad – men Byggavtalet ställer formella krav på överenskommelse, redovisning och granskning som du som arbetsgivare måste hålla ordning på.</p>

<p>Grunden i allt ackord är dokumenterade mängder och tydliga underlag. Håll koll på arbetade timmar och utförda moment redan från start med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -&gt;</a> så att slutavräkningen bygger på fakta, inte minnesbilder. Vill du räkna ut ackordsöverskottet? Testa vår gratis <a href="/sv/verktyg/ackord-kalkylator">ackordskalkylator</a>.</p>

<h2>Vad är ackordslön?</h2>
<p>Vid ackord (prestationslön) följer lönen produktionen, inte klockan. Skillnaden mot tim- och månadslön är att arbetslaget får betalt för de mängder de faktiskt utför, och därmed också delar ansvaret för att planera arbetet och hålla flödet uppe. Ackord ger normalt högre lön än tim- eller resultatlön, just eftersom laget bär mer av risken och styrningen.</p>
<p>Reglerna finns i Byggavtalet, sektorns kollektivavtal mellan Byggnads och Byggföretagen. Den aktuella avtalsperioden löper 1 maj 2025–30 april 2027 och omfattar runt 100 000 yrkesarbetare. Som arbetsgivare är det Byggavtalets mätnings- och ackordsregler du har att förhålla dig till – ackord är inte en fri intern lönemodell utan ett reglerat system.</p>

<h2>Lönegolvet du måste hålla</h2>
<p>Ackord fritar dig inte från avtalade lägstanivåer. Grundlönen för yrkesarbetare angavs vid 2025 års revision till 196 kr/tim, alternativt 34 104 kr/mån. Den utgående (individuella) lönen räknades då upp med 7,54 kr/tim, motsvarande 1 312 kr/mån.</p>
<p>Löneökningen är totalt 6,4 % över två år: 3,4 % från 1 maj 2025 och 3,0 % från 1 maj 2026. Vid andra årets revision höjs utgående lön med 6,85 kr/tim, ungefär 1 192 kr/mån. Poängen för dig som räknar ackord: överenskommelsen måste utformas så att lönen aldrig underskrider avtalad lägstanivå, oavsett hur mängderna faller ut.</p>

<h2>Ackordssedeln och ackordsöverenskommelsen</h2>
<p>Ackord ska regleras <strong>före</strong> arbetet påbörjas. Ackordsöverenskommelsen (ackordssedeln) är det dokument som binder parterna, och den bör innehålla åtminstone:</p>
<ul>
<li>Vilken prislista/ackordslista som gäller – den ska båda parter vara överens om.</li>
<li>Arbetets omfattning och avgränsning – vad som ingår i ackordet.</li>
<li>Nivå för löpande förskott under arbetets gång.</li>
<li>Hur mängder ska mätas och dokumenteras.</li>
</ul>
<p>Byggnads rekommenderar att ackordslönen räknas fram med en ackordslista/prislista som båda parter godkänt, så att resultatet blir rättvist och transparent för både laget och företaget. En skriftlig överenskommelse skyddar dig mot tvist när slutsedeln ska stämmas av – utan godkänd prislista blir slutavräkningen en förhandling i efterhand.</p>

<h2>Så räknas ackordet – prislista, förskott och slutavräkning</h2>
<p>Processen följer ett fast mönster:</p>
<ol>
<li><strong>Ackordssedel tecknas</strong> innan arbetet startar.</li>
<li><strong>Förskott betalas löpande</strong> via förskottssedlar medan arbetet pågår.</li>
<li><strong>Slutavräkning görs vid avslut</strong> (slutsedel): ackordssumman räknas fram utifrån utförda mängder och prislistan, tidigare utbetalda förskott dras av, och ackordsöverskottet fördelas i laget via en fördelningslista.</li>
</ol>
<p>Ett förenklat exempel: laget utför mängder som enligt prislistan ger en ackordssumma på 900 000 kr. Under perioden har 780 000 kr betalats ut i förskott. Vid slutavräkning återstår då 120 000 kr att fördela som ackordsöverskott enligt fördelningslistan. Byggnads tillhandahåller en ackordsberäknare för lagbasar som räknar ackordet enligt de överenskomna listorna – ett stöd som gör det lättare att stämma av era egna siffror mot lagets.</p>

<h2>Granskning och granskningsarvode</h2>
<p>Vid ackord anses granskning ha skett genom att lokalavdelningen tar del av löneunderlaget – ackordsöverenskommelse, ackordslöneuppgifter, fördelningslistor med mera. Som arbetsgivare är du skyldig att lämna ackordsunderlaget i tid; det är en avtalsförpliktelse, inte något frivilligt. Om underlaget dröjer kan facket driva på med sanktion/strafflön för att skynda på redovisningen.</p>
<p>Granskningsarvodet är 1,5 % av arbetarens ackordssumma vid ackord (och 1,5 % av lönen vid timlön). På byggavtalets område dras arvodet från arbetarens lön, medan arbetsgivaren betalar det på anläggningsavtalet. Oavsett vilket är det du som håller inne beloppet och redovisar det till fackets mätningskontor. Sammantaget kan mätnings- och granskningsarvode uppgå till som mest omkring 2 % av lönesummorna, räknat på både fasta och rörliga delar i ackordet.</p>

<h2>Ackord ur arbetsgivarperspektiv – fördelar och risker</h2>
<p>Fördelarna är tydliga: högre produktivitet, ett lag som själv driver flödet och en styckkostnad du kan kalkylera mot i anbud. Riskerna ligger i baksidan av samma mynt. Hög produktionstakt får inte gå ut över kvalitet eller arbetsmiljö, och underlaget måste vara korrekt och likabehandlande i hela laget – felaktiga eller sena fördelningslistor blir snabbt en tvist. Ackord kräver alltså mer administration och dokumentation än vanlig timlön, inte mindre.</p>

<h2>Checklista innan ni sätter ackord</h2>
<ul>
<li>Skriftlig ackordsöverenskommelse tecknad före start.</li>
<li>Prislista/ackordslista som båda parter godkänt.</li>
<li>Överenskommen förskottsnivå och rutin för förskottssedlar.</li>
<li>Dokumenterade mängder och timmar under hela arbetet.</li>
<li>Rutin för att lämna ackordsunderlag till lokalavdelningen i tid.</li>
<li>Kontroll att ackordsutfallet inte underskrider avtalad lägstalön.</li>
<li>Hantering av granskningsarvode (avdrag på bygg, arbetsgivaren betalar på anläggning) och redovisning till mätningskontoret.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte ackordsberäkning eller fackets mätningskontor, men vi hjälper dig med underlaget som allt ackord vilar på. Med strukturerad tidrapportering och mängddokumentation samlar du timmar och utförda moment löpande, så att slutsedeln och fördelningslistan bygger på spårbara siffror. Det gör det enklare att lämna korrekt ackordsunderlag i tid och att undvika efterhandsdiskussioner om vad som faktiskt utförts. Sätt ackordsvillkoren i överenskommelsen som vanligt – använd ByggExp för att hålla ordning på det som ligger till grund för avräkningen.</p>

<h2>Vanliga frågor</h2>
<h3>Får ackordslönen bli lägre än avtalad lägstalön?</h3>
<p>Nej. Ackord är en prestationslön ovanpå de avtalade nivåerna, och utfallet får inte underskrida Byggavtalets lägstanivå. Utforma överenskommelsen så att lönegolvet alltid hålls.</p>
<h3>Vem betalar granskningsarvodet?</h3>
<p>Arvodet är 1,5 % av ackordssumman. På byggavtalets område dras det från arbetarens lön, på anläggningsavtalet betalar arbetsgivaren det. I båda fallen är det arbetsgivaren som håller inne beloppet och redovisar det till fackets mätningskontor.</p>
<h3>Vad händer om vi lämnar ackordsunderlaget för sent?</h3>
<p>Att ta fram ackordsunderlag är en avtalsförpliktelse. Om underlaget dröjer kan facket driva på med sanktion eller strafflön för att skynda på redovisningen, så rutinen bör vara på plats innan arbetet startar.</p>
<h3>Behöver ackordsöverenskommelsen vara skriftlig?</h3>
<p>Ackord ska regleras före arbetet påbörjas, och en skriftlig ackordssedel med godkänd prislista skyddar båda parter när slutsedeln ska stämmas av. Muntliga upplägg gör slutavräkningen till en förhandling i efterhand.</p>

<h2>Kom igång</h2>
<p>Börja med att få ordning på timmar och mängder från dag ett – det är underlaget som avgör hur smidig slutavräkningen blir. Testa <a href="/sv/verktyg/tidrapport-mall">vår tidrapport-mall</a> och boka en <a href="/sv/contact">demo</a> så visar vi hur du samlar spårbara underlag för ackord och granskning.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a>, <a href="/sv/blog/arbetstidslagen-bygg">Arbetstidslagen i bygg</a>, <a href="/sv/blog/yrkesbevis-bygg-larling">Yrkesbevis och lärling i bygg</a>.</p>
`;

const A_ACKORDSLON_BYGG: BlogPost = {
  _id: "code-"+"ackordslon-bygg",
  title: "Ackordslön i bygg – så fungerar det (arbetsgivarens guide 2026)", slug: "ackordslon-bygg", locale: "sv",
  excerpt: "En konkret genomgång av ackordslön, ackordssedel och granskningsarvode ur arbetsgivarens perspektiv, i linje med Byggavtalet 2025–2027.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_ACKORDSLON_BYGG_HTML,
  seoTitle: "Ackordslön i bygg – så fungerar det | ByggExp", seoDescription: "Så fungerar ackord, ackordssedel, slutavräkning och granskningsarvode enligt Byggavtalet – en praktisk guide för byggföretag som arbetsgivare 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:00:00.000Z", createdAt: "2026-08-19T08:00:00.000Z", updatedAt: "2026-08-19T08:00:00.000Z",
};

const A_OFFENTLIG_UPPHANDLING_BYGG_LOU_HTML = `
<p>Offentlig sektor är byggbranschens största enskilda beställare, och myten att upphandlingar bara är till för de stora koncernerna stämmer inte. En stor andel av de vinnande anbuden lämnas av små och medelstora företag. Men det kräver att du förstår spelreglerna – vilken typ av upphandling du står inför, hur du tar dig förbi kvalificeringskraven och hur du prissätter utan att jobba med förlust. Den här guiden är skriven för dig som driver en mindre byggfirma utan egen upphandlingsavdelning.</p>

<p>Ett anbud börjar alltid med en tydlig, kalkylerad offert. Sätt upp en professionell mall en gång och återanvänd den – börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och anpassa den efter varje förfrågningsunderlag.</p>

<h2>Vilken typ av upphandling gäller?</h2>
<p>Reglerna i lagen om offentlig upphandling (LOU) skiljer sig kraftigt beroende på hur stort kontraktet är. Det är helt avgörande att veta vilken nivå du befinner dig på, eftersom byråkratin ser helt olika ut. För byggentreprenader 2026 gäller tre nivåer:</p>
<ul>
<li><strong>Direktupphandling – under 700 000 kr (exkl. moms).</strong> Understiger upphandlingens totala värde direktupphandlingsgränsen får myndigheten handla direkt utan annonsering. Överstiger värdet 100 000 kr måste upphandlingen dokumenteras, men under det finns ingen formell dokumentationsplikt. Gränsen på 700 000 kr står i lagen, gäller lika för varor, tjänster och byggentreprenader och ändras inte med tröskelvärdena.</li>
<li><strong>Annonspliktig upphandling enligt 19 kap. – mellan 700 000 kr och tröskelvärdet.</strong> Här måste myndigheten annonsera, men reglerna är förenklade. Sedan 1 februari 2022 regleras dessa upphandlingar i egna kapitel i LOU (19 kap. och 19 a kap. för direktupphandling), och kravet på ett specifikt förfarande är borttaget. Myndigheten utformar processen fritt så länge de grundläggande principerna – icke-diskriminering, likabehandling, proportionalitet, öppenhet (transparens) och ömsesidigt erkännande – följs.</li>
<li><strong>EU-direktivstyrd upphandling – över 61 340 804 kr (exkl. moms).</strong> Först över detta tröskelvärde gäller de fulla EU-reglerna med ESPD, fasta tidsfrister och obligatoriska uteslutningsgrunder.</li>
</ul>
<p>Poängen: nästan alla byggjobb ett litet företag lämnar anbud på ligger i det icke-direktivstyrda spannet mellan 700 000 kr och 61,3 mkr. Det är alltså det förenklade regelverket du oftast möter – betydligt mindre krångel än många tror.</p>

<h2>Var hittar du jobben – och kom igång</h2>
<p>Jobben annonseras på upphandlingsdatabaser och annonsplattformar. Registrera dig och lägg upp bevakningar på dina byggkategorier och ditt geografiska område. Bevaka särskilt din egen kommun, regionen och de kommunala bostadsbolagen – de handlar upp entreprenader och ramavtal löpande.</p>
<p>Börja litet. Ett ramavtal för mindre reparationer, en avgränsad entreprenad eller en roll som underleverantör till en större aktör är enklare att vinna och bygger den meritlista du behöver för nästa upphandling. Läs alltid <strong>hela</strong> förfrågningsunderlaget innan du börjar räkna, och utnyttja frågeportalen: är något oklart i kravställningen kan du ställa frågor före sista anbudsdag, och svaren går ut till alla anbudsgivare.</p>

<h2>Kvalificeringskraven – så tar du dig förbi trösklarna</h2>
<p>Kraven du måste passera delas upp i tre delar, och det är viktigt att hålla isär dem:</p>
<ul>
<li><strong>Uteslutningsgrunder.</strong> Obetalda skatter och socialförsäkringsavgifter kan leda till att du utesluts, och över tröskelvärdet är myndigheten skyldig att utesluta leverantörer som dömts för allvarliga brott som mutbrott eller organiserad brottslighet. Sedan mars 2019 lämnar Skatteverket inte längre ut uppgift om skatteskuld via den gamla blanketten – myndigheten hämtar bevis på annat sätt. Praktisk konsekvens: håll skattekontot rent och se till att F-skatt, moms och arbetsgivaravgifter är à jour innan du lämnar anbud.</li>
<li><strong>Ekonomisk ställning.</strong> Krav på minsta omsättning eller kreditvärdighet. Här faller mindre och nystartade företag lätt ifrån om de bedöms enbart på egen historik.</li>
<li><strong>Teknisk och yrkesmässig kapacitet.</strong> Referensuppdrag, kompetens och resurser för att klara jobbet.</li>
</ul>
<p>Nyckelknepet för små företag: du får uppfylla kvalificeringskraven genom att åberopa ett annat företags kapacitet – en underleverantör eller samarbetspartner – förutsatt att den aktören faktiskt utför den del av kontraktet som kapaciteten avser. Klarar du inte omsättnings- eller referenskravet ensam kan du alltså gå ihop med en partner. Är du dessutom nystartad kan du uppfylla krav på tidigare uppdrag genom att visa projekt där dina företrädare eller din nyckelpersonal hade en viktig roll – det är inte bara bolagets historik som räknas. Referenskraven ska vara proportionerliga; oskäligt hårda krav på antal år eller uppdrag kritiseras just för att de stänger ute småföretag.</p>

<h2>Referenser som håller</h2>
<p>Referenser är ofta det som avgör om ett litet företag kvalificerar sig. Bygg en referensbank medvetet:</p>
<ol>
<li>Dokumentera varje avslutat projekt löpande – typ av entreprenad, omfattning, kontraktsvärde och årtal.</li>
<li>Fråga nöjda beställare direkt efter slutfört jobb om de vill stå som referens, medan intrycket är färskt.</li>
<li>Matcha referenserna mot exakt det som efterfrågas. Söker de en referens på ombyggnad av flerbostadshus av viss volym senaste tre åren, plocka fram just det – inte ditt största jobb i största allmänhet.</li>
<li>Säkra att kontaktpersonerna faktiskt svarar när beställaren ringer. En referens som inte går att nå är ingen referens.</li>
</ol>

<h2>Prissättning – vinn utan att förlora pengar</h2>
<p>Lägsta pris är inte alltid tilldelningsgrunden. Andelen som tycker att det läggs för mycket fokus på lägsta pris har minskat, och bara omkring 16 procent upplever prisfokus vid tilldelning som för stort. Allt oftare avgörs upphandlingen på pris och kvalitet tillsammans. Det gynnar seriösa småföretag.</p>
<p>Räkna på dina faktiska självkostnader plus ett rimligt påslag – inte på vad du tror krävs för att "ta jobbet". Ett anbud vunnet på förlust är ingen vinst. Läs utvärderingsmodellen noga: en mervärdesmodell eller ett prisavdrag för kvalitet kan betyda att ett något högre pris ändå vinner om du levererar mervärde. Ta också höjd för de arbetsrättsliga villkoren. I upphandlingar över tröskelvärdet ska myndigheten enligt 17 kap. LOU ställa krav på lön, arbetstid och semester enligt tillämpligt centralt kollektivavtal om det finns risk för oskäliga villkor. Du måste kunna visa att du lever upp till sådana villkor även utan eget avtal – myndigheten får dock inte kräva att du har tecknat kollektivavtal. Se till att dessa kostnader ligger i kalkylen.</p>

<h2>Vanliga anbudsmissar</h2>
<ul>
<li>Att missa ett obligatoriskt "ska-krav" – då förkastas anbudet oavsett hur bra priset är.</li>
<li>Att inte svara på precis det som efterfrågas, i det format och den struktur underlaget kräver.</li>
<li>Att lämna in för sent eller på fel plattform. Tidsfristen är absolut.</li>
<li>Att prissätta för lågt för att vinna och sedan tappa pengar under kontraktstiden.</li>
<li>Att slarva med skattekonto och F-skatt så att du fastnar på uteslutningsgrunderna.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig i det praktiska arbetet runt anbudet. Med offertmallen bygger du ett prydligt, kalkylerat prisunderlag som du kan återanvända och anpassa per upphandling, så att du snabbt får fram ett anbud med konsekvent struktur. När du kör dina projekt i ByggExp samlas uppgifter om utförda jobb på ett ställe – underlag som du senare kan använda för att bygga din referensbank och visa relevant erfarenhet. Verktyget lämnar inte in anbudet åt dig och ersätter inte en juridisk granskning av förfrågningsunderlaget, men det tar bort mycket av det manuella pappersarbetet så att du kan lägga tiden på själva innehållet.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag ha kollektivavtal för att vinna en offentlig upphandling?</h3>
<p>Nej. Myndigheten får inte ställa ett generellt krav på att du ska ha tecknat kollektivavtal. Däremot kan den i upphandlingar över tröskelvärdet kräva att du erbjuder lön, arbetstid och semester i nivå med tillämpligt centralt kollektivavtal. Du måste alltså kunna visa att dina villkor motsvarar det – men inte att du har ett eget avtal.</p>
<h3>Kan ett nystartat byggföretag utan referenser lämna anbud?</h3>
<p>Ja. Du kan uppfylla krav på tidigare uppdrag genom att visa projekt där dina företrädare eller din nyckelpersonal hade en viktig roll. Du får också åberopa ett annat företags kapacitet, till exempel en samarbetspartner eller underleverantör, förutsatt att den aktören faktiskt utför den aktuella delen av kontraktet.</p>
<h3>Vad gör jag om jag förlorar en upphandling jag borde ha vunnit?</h3>
<p>Begär tilldelningsbeslutet och utvärderingen och be om återkoppling för att lära inför nästa gång. Anser du att något gått formellt fel kan du ansöka om överprövning i förvaltningsrätt inom avtalsspärren – som vid elektronisk kommunikation normalt är minst tio dagar från tilldelningsbeslutet. Överklaga dock inte i onödan; antalet överprövningsmål minskar och de flesta förluster beror på affärsmässiga skäl, inte formfel.</p>
<h3>Hur stort får ett jobb vara innan de fulla EU-reglerna slår till?</h3>
<p>För byggentreprenader ligger tröskelvärdet 2026 på 61 340 804 kr exklusive moms. Först över det beloppet gäller de EU-direktivstyrda reglerna med ESPD och obligatoriska uteslutningsgrunder. Nästan alla anbud ett litet byggföretag lämnar hamnar i det förenklade spannet under den nivån.</p>

<h2>Kom igång</h2>
<p>Börja med ett litet, avgränsat anbud, leverera väl, bygg din referensbank och återkom med större jobb. Sätt upp ett tydligt prisunderlag med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, och vill du se hur ByggExp kan förenkla offerter, projekt och underlag i din firma? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som vinner jobbet</a>, <a href="/sv/blog/hitta-kunder-byggfirma">Hitta kunder till din byggfirma</a> och <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>.</p>
`;

const A_OFFENTLIG_UPPHANDLING_BYGG_LOU: BlogPost = {
  _id: "code-"+"offentlig-upphandling-bygg-lou",
  title: "Så vinner du offentliga byggjobb som litet företag – anbud enligt LOU 2026", slug: "offentlig-upphandling-bygg-lou", locale: "sv",
  excerpt: "Offentlig sektor är byggbranschens största beställare – så tar sig ett litet byggföretag förbi kvalificeringskraven och skriver ett anbud som håller enligt LOU 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_OFFENTLIG_UPPHANDLING_BYGG_LOU_HTML,
  seoTitle: "Offentlig upphandling bygg (LOU) | ByggExp", seoDescription: "Så skriver ditt lilla byggföretag ett vinnande anbud enligt LOU 2026: kvalificeringskrav, referenser och prissättning. 3 av 4 vinnande anbud kommer från SMF.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:09:00.000Z", createdAt: "2026-08-19T08:09:00.000Z", updatedAt: "2026-08-19T08:09:00.000Z",
};

const A_OMVAND_BYGGMOMS_BOKFORA_HTML = `
<p>Omvänd byggmoms är en av de vanligaste källorna till fel i byggföretags momsdeklarationer. Grundprincipen låter enkel: köparen redovisar och betalar momsen, säljaren fakturerar utan moms. Men i praktiken hamnar beloppen i fel ruta, momskonton berörs som inte ska beröras, och plötsligt stämmer inte deklarationen mot bokföringen. Den här guiden går igenom exakt vilka rutor och konton som gäller – för både säljaren och köparen.</p>

<p>Behöver du snabbt räkna ut moms fram och tillbaka på ett belopp? Använd <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator -&gt;</a> så slipper du slarvfel innan du bokför.</p>

<h2>Vad är omvänd byggmoms?</h2>
<p>Omvänd byggmoms – formellt <strong>omvänd betalningsskyldighet</strong> – innebär att det är köparen, inte säljaren, som redovisar och betalar utgående moms till staten. Säljaren ställer ut fakturan helt utan moms, och köparen räknar själv fram momsen och redovisar den i sin egen momsdeklaration.</p>
<p>Sedan den nya mervärdesskattelagen (2023:200) trädde i kraft den 1 juli 2023 använder Skatteverket termen "omvänd betalningsskyldighet" i stället för "omvänd skattskyldighet". Innebörden är exakt densamma – "omvänd byggmoms" är bara vardagsnamnet. Många kontoplaner och fakturamallar använder fortfarande den äldre formuleringen, vilket är helt i sin ordning så länge hänvisningen finns med.</p>

<h2>När gäller reglerna?</h2>
<p>Två villkor måste vara uppfyllda samtidigt för att omvänd byggmoms ska tillämpas:</p>
<ol>
<li>Du säljer en <strong>särskilt angiven bygg- eller anläggningstjänst</strong>, byggstädning eller hyr ut arbetskraft för sådana tjänster i Sverige.</li>
<li>Köparen är en <strong>beskattningsbar person</strong> som (under vissa förutsättningar) själv säljer byggtjänster – alltså ett annat byggföretag, även vid ren vidareförsäljning.</li>
</ol>
<p>Är bara det ena villkoret uppfyllt gäller vanlig moms med 25 procent. Säljer du direkt till en slutkund eller beställare som inte själv säljer byggtjänster – till exempel en privatperson, en bostadsrättsförening eller en fastighetsägare som bara förvaltar – ska du fakturera med vanlig utgående moms. Det är kombinationen av rätt tjänst och rätt typ av köpare som avgör.</p>

<h2>Så deklarerar säljaren – ruta 41</h2>
<p>Som säljare får du <strong>inte debitera någon moms</strong> på fakturan. Försäljningsbeloppet redovisar du i <strong>ruta 41</strong> (Försäljning när köparen är skattskyldig i Sverige). Du redovisar ingen utgående moms alls på den här försäljningen.</p>
<p>Fakturan måste, utöver vanliga fakturauppgifter, innehålla:</p>
<ul>
<li>Köparens momsregistreringsnummer.</li>
<li>Hänvisningen "Omvänd betalningsskyldighet" (tidigare "Omvänd skattskyldighet").</li>
<li>Inget momsbelopp – bara nettobeloppet.</li>
</ul>
<p>I bokföringen bokför du intäkten på konto <strong>3231</strong> "Försäljning inom byggsektorn, omvänd skattskyldighet, Sverige". Inget momskonto berörs på säljarsidan.</p>

<h2>Så deklarerar köparen – ruta 24, 30 och 48</h2>
<p>Köparen gör det tunga jobbet. Du som köper tjänsten ska:</p>
<ul>
<li>Redovisa inköpet i <strong>ruta 24</strong> (Inköp av tjänster i Sverige).</li>
<li>Beräkna 25 procent utgående moms på fakturabeloppet och redovisa den i <strong>ruta 30</strong>.</li>
<li>Dra av samma belopp som ingående moms i <strong>ruta 48</strong> – helt eller delvis beroende på din avdragsrätt.</li>
</ul>
<p>Vid full avdragsrätt tar den utgående momsen (ruta 30) och den ingående momsen (ruta 48) ut varandra. Nettoeffekten på momsen blir noll – du betalar alltså ingenting extra, men momsen måste ändå redovisas i rätt rutor. Att hoppa över redovisningen "eftersom det ändå blir noll" är ett vanligt och onödigt fel.</p>

<h2>Konteringsexempel steg för steg</h2>
<p>Anta att du som byggföretag köper en byggtjänst för <strong>20 000 kr</strong> med 25 procent moms (5 000 kr) under omvänd betalningsskyldighet.</p>
<h3>Köparens bokföring</h3>
<ul>
<li><strong>Debet 4425</strong> Inköpta tjänster i Sverige, omvänd skattskyldighet: 20 000 kr</li>
<li><strong>Debet 2645</strong> Ingående moms omvänd: 5 000 kr</li>
<li><strong>Kredit 2614</strong> Utgående moms omvänd byggtjänster 25 %: 5 000 kr</li>
<li><strong>Kredit 2440</strong> Leverantörsskuld: 20 000 kr</li>
</ul>
<p>Lägg märke till att både 2614 och 2645 bokförs med 5 000 kr – de speglar varandra, precis som ruta 30 och ruta 48 gör i deklarationen.</p>
<h3>Säljarens bokföring</h3>
<ul>
<li><strong>Debet 1510</strong> Kundfordran: 20 000 kr</li>
<li><strong>Kredit 3231</strong> Försäljning inom byggsektorn, omvänd skattskyldighet, Sverige: 20 000 kr</li>
</ul>
<p>Inget momskonto berörs hos säljaren – hela poängen med regeln är att momsen flyttas över till köparen.</p>

<h2>Redovisningstidpunkt – fakturametoden vs bokslutsmetoden</h2>
<p>När momsen ska tas upp beror på vilken metod du använder. Med <strong>fakturametoden</strong> redovisar du i den period fakturan utfärdas, oavsett när betalningen sker. Med <strong>bokslutsmetoden</strong> redovisar du vid betalning, men obetalda fakturor tas med i den sista redovisningsperioden på räkenskapsåret. Kontrollera att köparens och säljarens redovisning hamnar i jämförbara perioder – annars kan Skatteverkets avstämningar flagga avvikelser.</p>

<h2>Vanliga fel att undvika</h2>
<ul>
<li>Säljaren debiterar moms trots att omvänd byggmoms gäller.</li>
<li>Köparen glömmer redovisa i ruta 30 och 48 "eftersom det blir noll".</li>
<li>Momsregistreringsnummer eller hänvisningstexten saknas på fakturan.</li>
<li>Fakturabeloppet hamnar i ruta 20 (unionsinternt) i stället för ruta 24.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp kan du sätta upp fakturor för omvänd byggmoms så att rätt uppgifter kommer med automatiskt: köparens momsregistreringsnummer, hänvisningstexten "Omvänd betalningsskyldighet" och ett nettobelopp utan momsrad. Det minskar risken för att en faktura går ut med felaktigt debiterad moms. Själva momsdeklarationen och konteringen sköter du i ditt bokföringsprogram – ByggExp hjälper dig få underlaget rätt från början, men ersätter inte din revisor eller bokföringssystemet. Är du osäker på hur en enskild affär ska hanteras, stäm alltid av mot Skatteverket och BAS-kontoplanen.</p>

<h2>Vanliga frågor</h2>
<h3>Vad gör jag om säljaren felaktigt debiterat moms?</h3>
<p>Be säljaren utfärda en kreditfaktura och en ny, korrekt faktura utan moms och med hänvisningen "Omvänd betalningsskyldighet". Du har som köpare inte avdragsrätt för moms som felaktigt debiterats – du måste ändå redovisa inköpet enligt reglerna för omvänd byggmoms.</p>
<h3>Gäller omvänd byggmoms även material?</h3>
<p>Reglerna gäller själva byggtjänsten, byggstädning eller uthyrd arbetskraft. Material som ingår som en del i en byggtjänst följer tjänsten. Ren försäljning av enbart material, utan att en byggtjänst utförs, omfattas normalt inte utan faktureras med vanlig moms.</p>
<h3>Hur länge ska jag spara underlagen?</h3>
<p>Bokföring och fakturor ska sparas i minst sju år. Det gäller både säljarens fakturakopior och köparens underlag för den redovisade momsen.</p>
<h3>Blir det någon momskostnad för köparen vid full avdragsrätt?</h3>
<p>Nej. Vid full avdragsrätt tar utgående moms i ruta 30 och ingående moms i ruta 48 ut varandra, så nettoeffekten blir noll. Momsen måste ändå redovisas i rätt rutor.</p>

<h2>Kom igång</h2>
<p>Räkna ut moms snabbt och säkert med <a href="/sv/verktyg/moms-kalkylator">vår moms-kalkylator</a>, och skapa korrekta fakturor med rätt hänvisning i <a href="/sv/verktyg/faktura-mall">vår faktura-mall</a>. Vill du se hur ByggExp kan effektivisera fakturering och underlag för hela byggföretaget? <a href="/sv/contact">Boka en demo här -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>, <a href="/sv/blog/bokforing-enskild-firma-bygg">Bokföring för enskild firma inom bygg</a> och <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare</a>.</p>
`;

const A_OMVAND_BYGGMOMS_BOKFORA: BlogPost = {
  _id: "code-"+"omvand-byggmoms-bokfora",
  title: "Omvänd byggmoms – så bokför och momsdeklarerar du rätt", slug: "omvand-byggmoms-bokfora", locale: "sv",
  excerpt: "Guide för hantverkare och byggföretag: rätt momsrutor och BAS-konton för omvänd byggmoms – hos både säljaren och köparen.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_OMVAND_BYGGMOMS_BOKFORA_HTML,
  seoTitle: "Omvänd byggmoms bokföra | ByggExp", seoDescription: "Bokför och momsdeklarera omvänd byggmoms rätt: ruta 41 för säljaren, ruta 24, 30 och 48 för köparen, plus konteringsexempel med BAS-konton.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:15:00.000Z", createdAt: "2026-08-19T08:15:00.000Z", updatedAt: "2026-08-19T08:15:00.000Z",
};

const A_VERKTYG_DIREKTAVDRAG_ELLER_AVSKRIVNING_HTML = `
<p>En borrmaskin på 4 000 kr och en minidumper på 180 000 kr behandlas helt olika i bokföringen. Borrmaskinen kostnadsför du direkt året du köper den. Minidumpern måste du ta upp som anläggningstillgång och skriva av över flera år. Väljer du fel drar du antingen av för mycket för tidigt – med risk vid en granskning – eller binder upp likviditet i avskrivningar som du hade fått ta direkt. För inkomståret 2026 går den avgörande gränsen vid 29 600 kr exkl. moms.</p>

<p>Eftersom momsen avgör om du hamnar över eller under gränsen är det värt att räkna rätt på beloppen från början – testa <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator -&gt;</a> när du ska skilja pris exkl. och inkl. moms på ett verktygsinköp.</p>

<h2>Två sätt att dra av verktyg – direktavdrag vs värdeminskningsavdrag</h2>
<p>Skattereglerna ger dig två vägar att dra av kostnaden för verktyg och maskiner. Med <strong>direktavdrag</strong> kostnadsför du hela beloppet det år du anskaffar inventariet – det syns direkt som en kostnad i resultaträkningen och sänker årets skattemässiga resultat med hela summan. Med <strong>värdeminskningsavdrag</strong> (avskrivning) fördelar du kostnaden över flera år eftersom tillgången beräknas ge nytta under lång tid.</p>
<p>Vilken väg som gäller styrs inte av vad som är bekvämt utan av två saker: inventariets värde och dess ekonomiska livslängd i företaget. Det finns två skattemässiga regler som öppnar för direktavdrag – beloppsgränsen och 3-årsregeln. Uppfyller inköpet ingen av dem ska det skrivas av.</p>

<h2>Regel 1 – Inventarier av mindre värde</h2>
<p>Så kallade <strong>inventarier av mindre värde</strong> får du dra av direkt anskaffningsåret. Gränsen är ett halvt prisbasbelopp. Prisbasbeloppet för 2026 är 59 200 kr (höjt från 58 800 kr för 2025), vilket ger en gräns på <strong>29 600 kr exkl. moms</strong> (59 200 / 2). Motsvarande gräns för 2025 var 29 400 kr. Understiger anskaffningsvärdet gränsen får du direktavdrag.</p>
<p>Att beloppet ändras varje år är själva poängen att hålla koll på – ett inköp på 29 500 kr som var ett gränsfall 2025 ligger tryggt under gränsen 2026. Kontrollera alltid aktuellt prisbasbelopp mot Skatteverket innan du avgör hur en dyrare post ska bokföras.</p>

<h2>Regel 2 – Korttidsinventarier (3-årsregeln)</h2>
<p>Den andra vägen till direktavdrag handlar om livslängd, inte pris. <strong>Korttidsinventarier</strong> – inventarier med en beräknad ekonomisk livslängd i företaget på högst 3 år – får dras av direkt <em>oavsett</em> anskaffningsvärde. Även ett dyrt verktyg får alltså direktavdrag om du kan visa att det inte håller längre än tre år i din verksamhet.</p>
<p>För ett byggföretag kan det handla om utrustning med hög förslitning eller viss elektronik och mätutrustning som i praktiken byts ut inom ett par år. Det är den verkliga användningstiden i just ditt företag som räknas, och du bör kunna motivera bedömningen om Skatteverket frågar.</p>

<h2>Momsen och den vanliga fällan att dela upp inköp</h2>
<p>Gränsen på 29 600 kr räknas normalt på beloppet <strong>exkl. moms</strong>. Har du rätt att lyfta ingående moms är det nettobeloppet du jämför med gränsen. Bara om företaget varken har rätt att lyfta moms eller rätt till återbetalning får du höja beloppsgränsen med momsbeloppet – för de flesta byggföretag med momspliktig verksamhet gäller alltså beloppet exkl. moms.</p>
<p>Den vanligaste fällan är att försöka dela upp ett dyrt köp i flera små fakturor för att komma under gränsen. Det stoppas av <strong>naturligt-samband-regeln</strong>: om flera inventarier har ett naturligt samband, eller köps som ett led i en större anskaffning, är det det <em>sammanlagda</em> anskaffningsvärdet som ska understiga ett halvt prisbasbelopp. Köper du ett verktygsset eller en maskin med tillbehör som hör ihop bedöms hela köpet som en enhet – du kan inte splittra det i småposter för att tvinga fram direktavdrag.</p>

<h2>Så skrivs dyrare maskiner av</h2>
<p>Ligger inköpet över gränsen och har en livslängd över tre år ska det tas upp som anläggningstillgång och skrivas av över tid. Skattemässigt görs det oftast med <strong>räkenskapsenlig avskrivning</strong>, som har två regler du får kombinera och byta mellan år för att ta ut störst avdrag:</p>
<ul>
<li><strong>Huvudregeln (30-regeln):</strong> avdrag med högst 30 % av avskrivningsunderlaget, det vill säga bokfört värde vid årets ingång plus årets anskaffningar.</li>
<li><strong>Kompletteringsregeln (20-regeln):</strong> 20 % per år på anskaffningsvärdet, vilket ger full avskrivning på exakt 5 år.</li>
</ul>
<p>Ett villkor gäller: det skattemässiga värdet måste stämma överens med det bokförda – bokföringen ska följa den skattemässiga avskrivningen. Är det kravet inte uppfyllt får du i stället använda <strong>restvärdesavskrivning</strong>, max 25 % per år av restvärdet. Där får bokfört och skattemässigt värde skilja sig åt, men det ger ett lägre årligt avdrag än 30-regeln.</p>

<h3>Räkneexempel: minidumper 180 000 kr</h3>
<p>Med huvudregeln får du år ett skriva av 30 % av 180 000 kr = 54 000 kr, kvar 126 000 kr. År två 30 % av 126 000 kr = 37 800 kr, och så vidare – avdraget minskar varje år men tar aldrig helt slut. Med kompletteringsregeln skriver du av 36 000 kr per år (20 % av 180 000 kr) i fem år och når då noll. Ett vanligt upplägg är att köra huvudregeln i början när avdraget är störst och byta till kompletteringsregeln mot slutet.</p>

<h2>Förbrukningsinventarier i bokföringen</h2>
<p>För dig som bokför själv motsvaras skattereglerna av två olika kontogrupper. Ett verktyg som får direktavdrag bokförs som <strong>förbrukningsinventarie</strong> på konto 5410 och blir en kostnad direkt i resultaträkningen. Ett inventarium som ska skrivas av bokförs i stället som anläggningstillgång på konto 1220 och kostnadsförs successivt via avskrivningar. Bokföringsvalet är alltså den praktiska motsvarigheten till skattereglernas direktavdrag kontra avskrivning – de hänger ihop.</p>

<h2>Checklista: 4 frågor innan du bokför verktyget</h2>
<ol>
<li>Kostar det <strong>under 29 600 kr exkl. moms</strong> (gränsen 2026)? Om ja – direktavdrag.</li>
<li>Har det en ekonomisk livslängd på <strong>högst 3 år</strong> i företaget? Om ja – direktavdrag oavsett pris.</li>
<li>Är det <strong>en del av ett större köp</strong> med naturligt samband? Räkna då på det sammanlagda beloppet.</li>
<li>Har företaget <strong>momsavdrag</strong>? Om ja – jämför beloppet exkl. moms mot gränsen.</li>
</ol>
<p>Svarar du nej på fråga 1 och 2 är det en anläggningstillgång som ska skrivas av.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din bokföring, men hjälper dig fånga rätt underlag redan när verktyget köps in. Fota och lägg kvittot direkt på rätt projekt, så har du anskaffningsvärde och datum samlat när det är dags att avgöra direktavdrag eller avskrivning – och när du märker en faktura med omvänd byggmoms mot en annan byggfirma. Med moms-kalkylatorn räknar du snabbt om mellan pris exkl. och inkl. moms så att du jämför rätt belopp mot gränsen. Själva avdraget och avskrivningsplanen sätter du och din redovisningskonsult, men underlaget finns redo.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är gränsen för direktavdrag på verktyg 2026?</h3>
<p>Ett halvt prisbasbelopp, vilket för inkomståret 2026 är 29 600 kr exkl. moms (prisbasbeloppet är 59 200 kr). Understiger anskaffningsvärdet gränsen får du dra av hela beloppet direkt. För 2025 var gränsen 29 400 kr, så kontrollera alltid aktuellt belopp mot Skatteverket.</p>
<h3>Kan jag dela upp ett dyrt maskinköp för att komma under gränsen?</h3>
<p>Nej. Har flera inventarier ett naturligt samband, eller köps som ett led i en större anskaffning, är det det sammanlagda anskaffningsvärdet som ska understiga ett halvt prisbasbelopp. Ett verktygsset eller en maskin med tillhörande delar bedöms som en enhet.</p>
<h3>Får dyra verktyg någonsin direktavdrag?</h3>
<p>Ja, om den ekonomiska livslängden i företaget är högst tre år. Sådana korttidsinventarier får dras av direkt oavsett pris. Du bör kunna motivera den korta livslängden om Skatteverket frågar.</p>
<h3>Vad är skillnaden mellan huvudregeln och kompletteringsregeln?</h3>
<p>Huvudregeln (30-regeln) ger avdrag med högst 30 % av avskrivningsunderlaget per år. Kompletteringsregeln (20-regeln) ger 20 % av anskaffningsvärdet per år och full avskrivning på fem år. Du får kombinera dem och välja den som ger störst avdrag.</p>

<h2>Kom igång</h2>
<p>Räkna rätt på belopp exkl. och inkl. moms innan du avgör hur verktyget ska bokföras med <a href="/sv/verktyg/moms-kalkylator">vår moms-kalkylator</a>. Vill du se hur ByggExp samlar kvitton och projektunderlag åt hela laget? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi upplägget. Kom ihåg att beloppsgränsen ändras varje år – stäm av mot Skatteverket.</p>

<p>Relaterat: <a href="/sv/blog/avdrag-arbetsklader-verktyg">Avdrag för arbetskläder och verktyg</a>, <a href="/sv/blog/avdrag-enskild-firma-bygg">Avdrag i enskild firma för byggföretag</a>, <a href="/sv/blog/periodiseringsfond-byggbolag">Periodiseringsfond för byggbolag</a>.</p>
`;

const A_VERKTYG_DIREKTAVDRAG_ELLER_AVSKRIVNING: BlogPost = {
  _id: "code-"+"verktyg-direktavdrag-eller-avskrivning",
  title: "Verktyg och maskiner – direktavdrag eller avskrivning? Så gör byggföretaget rätt 2026", slug: "verktyg-direktavdrag-eller-avskrivning", locale: "sv",
  excerpt: "Gränsen för direktavdrag på verktyg är 29 600 kr exkl. moms 2026 – så skiljer du på inventarier av mindre värde, korttidsinventarier och maskiner som ska skrivas av.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_VERKTYG_DIREKTAVDRAG_ELLER_AVSKRIVNING_HTML,
  seoTitle: "Direktavdrag eller avskrivning verktyg | ByggExp", seoDescription: "Borrmaskinen dras av direkt, minidumpern skrivs av. Gränsen 2026 är 29 600 kr exkl. moms. Så väljer byggföretaget rätt mellan direktavdrag och avskrivning.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:21:00.000Z", createdAt: "2026-08-19T08:21:00.000Z", updatedAt: "2026-08-19T08:21:00.000Z",
};

const A_KALKYLERA_FONSTERBYTE_OFFERT_HTML = `
<p>Fönsterbyte-offerter läcker sällan pengar på materialet – det prissätts oftast korrekt mot leverantörens lista. Marginalen försvinner i montagetiden, ställtiden och den slarviga ROT-hanteringen. Räknar du timmarna för lågt och slår ihop arbete och material i en klumpsumma, blir det du själv som betalar mellanskillnaden. Här är en räknemodell för att kalkylera fönsterbyte som håller hela vägen från avtalslön till kundpris 2026.</p>

<p>Enklaste sättet att bygga en offert som separerar arbete och material korrekt är att utgå från en färdig struktur – testa vår gratis <a href="/sv/verktyg/offert-mall">offertmall för hantverkare -&gt;</a> och fyll i posterna nedan.</p>

<h2>Bryt ner priset i tre delar – material, arbete, påslag</h2>
<p>Både Skatteverket och kunden vill se arbetskostnaden separat. Skatteverket, eftersom ROT-avdraget <strong>bara</strong> gäller arbetet – material, resor, maskiner, frakt och administrativ avgift ger inget avdrag. Kunden, eftersom det är arbetskostnaden ROT räknas på och alltså det som avgör hur stort avdraget blir. En offert med bara ett totalpris tvingar dig att i efterhand bevisa hur mycket som var arbete.</p>
<p>Rikttal 2026: ett fönsterbyte ligger typiskt på 5 000–18 000 kr per fönster inklusive material och montage, och upp mot ~21 500 kr för större eller specialanpassade fönster. En villa med 12–14 fönster landar därmed på ungefär 95 000–175 000 kr före ROT. Använd de siffrorna som rimlighetskontroll – inte som prislista. Ditt pris ska byggas underifrån, från timmar och självkostnad.</p>

<h2>Räkna rätt på montagetiden</h2>
<p>Ett standardfönster tar cirka 1,5–2,5 timmar att byta när karmen är hel och kan återanvändas. Så fort det tillkommer moment stiger tiden snabbt:</p>
<ul>
<li>Karmbyte i stället för enbart bågbyte</li>
<li>Rivning och bortforsling av gammalt fönster</li>
<li>Drev, tätning och fuktspärr</li>
<li>Invändig och utvändig list samt plåtavtäckning</li>
<li>Ställning eller skylift vid övervåning</li>
</ul>
<p>Lägg dessutom in etableringstid, ställtid och resor som egna rader. De är verklig arbetstid du betalar lön för, men de är <strong>inte</strong> ROT-grundande arbete och ska därför ligga utanför arbetskostnaden i offerten. Missar du den uppdelningen riskerar du antingen att rapportera fel ROT-underlag eller att bjuda på timmarna.</p>

<h2>Lönekostnad, inte timlön – bygg upp självkostnaden</h2>
<p>Timlönen är bara startpunkten. Byggavtalet (Byggnads) löper 1 maj 2025–30 april 2027 med ett totalt avtalsvärde på 6,4 % över två år. Grundlönen för yrkesarbetare är omkring 203 kr/tim (lägstalönen är högre, ca 1,24× grundlönen), och avtalshöjningen 2026 är cirka 6,85 kr/tim (~1 192 kr/mån) från 1 maj 2026. På den lönen tillkommer sociala avgifter på omkring 42 %. Kalkylkedjan ser ut ungefär så här:</p>
<ol>
<li>Avtalslön ~203 kr/tim</li>
<li>+ lönekostnadspåslag ~42 % (varav lagstadgad arbetsgivaravgift 31,42 %) → ca 288 kr/tim ren lönekostnad</li>
<li>+ oproduktiv tid, semester, sjukfrånvaro, verktyg och garanti</li>
<li>+ omkostnadspåslag och vinst</li>
</ol>
<p>Resultatet blir ett kundtimpris på ungefär 550–750 kr/tim (inklusive moms, exklusive ROT) beroende på ort. Sätter du kundpriset direkt utifrån timlönen 203 kr utan att bygga upp självkostnaden är offerten olönsam redan innan första fönstret är lyft.</p>

<h2>U-värdeskravet påverkar både pris och produktval</h2>
<p>Energikraven styr vilka fönster du får montera – och därmed materialkostnaden. Sikta på ett U-värde på högst 1,2 W/m²K vid utbyte; moderna 3-glasfönster når ofta 0,9–1,0 W/m²K. Boverkets nya funktionsbaserade byggregler gäller från 1 juli 2025. Under övergångsperioden till och med 30 juni 2026 får byggherren välja mellan gamla BBR/EKS och de nya reglerna – men inte blanda dem i samma ärende. Från 1 juli 2026 kan bara de nya reglerna tillämpas i nya ärenden.</p>
<p>Dokumentera valt fönstersystem och dess U-värde i offerten. Det skyddar dig om kunden i efterhand ifrågasätter produktvalet, och du kan snabbt kontrollräkna med vår <a href="/sv/verktyg/u-varde-kalkylator">U-värdeskalkylator -&gt;</a>. Läs mer i <a href="/sv/blog/fonster-u-varde-2026">Fönster och U-värde 2026</a>.</p>

<h2>ROT 30 % 2026 – så hanterar du det i offerten</h2>
<p>Från 1 januari 2026 är ROT-avdraget tillbaka på <strong>30 % av arbetskostnaden</strong>. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och är slut. Bygg alltså offerten på 30 %.</p>
<p>Takbeloppet 2026 är max 50 000 kr ROT per person och år, men ROT och RUT delar nu ett gemensamt tak på 75 000 kr per person och år (varav högst 50 000 kr får vara ROT). Äger två personer bostaden kan taket dubblas. Vid ett fast paketpris där fönster och montage ingår godtar Skatteverket branschschablonen att arbetskostnaden får beräknas till 35 % av totalpriset – är den högre måste du kunna visa hur den räknats fram.</p>
<p>Specificera arbetskostnad och ROT-belopp tydligt på fakturan. Vill du kontrollera avdraget innan du skickar offerten, använd vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylator -&gt;</a>. Detaljerna om regeländringen finns i <a href="/sv/blog/rotavdrag-2026-nya-regler-foretag">Rotavdrag 2026 – nya regler för företag</a>.</p>

<h2>Vanliga fel som äter din marginal</h2>
<ul>
<li><strong>BRF-fönster utan avdragsrätt.</strong> För bostadsrätt ger fönsterbyte oftast inte ROT, eftersom fönster och yttre skal är föreningens ansvar. Varna BRF-boende kunder redan i offerten.</li>
<li><strong>Taket redan förbrukat.</strong> Kunden måste äga bostaden och ha tillräcklig skatt att kvitta mot. Är ROT-utrymmet slut för året betalar kunden hela beloppet.</li>
<li><strong>Kontantbetalning.</strong> Betalningen måste vara spårbar. Kontant eller felrapportering kan göra att avdraget nekas – och då blir det du som står utan de 30 %.</li>
<li><strong>Glömd etableringstid.</strong> Ställning, rivning och transport bjuds ofta bort av misstag när de inte finns med som egna rader.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offerten med separata rader för material, ROT-grundande arbetskostnad och övrigt (ej ROT) redan från start, så uppdelningen finns på plats innan du skickar. Du kan lägga in ditt kundtimpris och montagetiden per fönster, låta systemet räkna ut ROT-avdraget på arbetsdelen och visa "att betala" för kunden. När jobbet är klart följer offerten med som underlag för faktura och ROT-rapportering, så att arbetskostnaden du offererade är samma siffra du begär utbetalning på. ByggExp beräknar inte åt Skatteverket – du ansvarar fortfarande för att uppgifterna stämmer – men strukturen gör det svårare att missa en post.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är ROT-avdraget för fönsterbyte 2026?</h3>
<p>30 % av arbetskostnaden, med tak på 50 000 kr ROT per person och år inom ett gemensamt ROT+RUT-tak på 75 000 kr per person och år. Vid fast paketpris får arbetskostnaden schablonmässigt sättas till 35 % av totalpriset.</p>
<h3>Hur räknar jag arbetskostnaden vid ett fast paketpris?</h3>
<p>Skatteverket godtar att du beräknar arbetskostnaden till 35 % av totalpriset vid fasta paketpriser där fönster och montage ingår. Sätter du den högre måste du kunna visa hur beräkningen gjorts.</p>
<h3>Får en kund i bostadsrätt ROT för fönsterbyte?</h3>
<p>Oftast inte. Fönster och byggnadens yttre skal är normalt föreningens ansvar, och då saknas avdragsrätt för den enskilde bostadsrättshavaren. Ta upp detta i offerten till BRF-boende innan du räknar med avdrag.</p>
<h3>Vilket U-värde ska nya fönster ha?</h3>
<p>Sikta på högst 1,2 W/m²K vid utbyte. Moderna 3-glasfönster når ofta 0,9–1,0 W/m²K. Under övergången till och med 30 juni 2026 får du välja gamla BBR/EKS eller de nya funktionsbaserade reglerna, men inte blanda dem.</p>

<h2>Kom igång</h2>
<p>Börja med en tydlig struktur och räkna arbetet separat från materialet. Skapa din nästa offert med vår <a href="/sv/verktyg/offert-mall">offertmall</a> och kontrollräkna avdraget i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>. Vill du se hur hela flödet från offert till ROT-rapportering fungerar i praktiken? <a href="/sv/contact">Boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/fonster-u-varde-2026">Fönster och U-värde 2026</a>, <a href="/sv/blog/rotavdrag-2026-nya-regler-foretag">Rotavdrag 2026 – nya regler för företag</a>, <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a>.</p>
`;

const A_KALKYLERA_FONSTERBYTE_OFFERT: BlogPost = {
  _id: "code-"+"kalkylera-fonsterbyte-offert",
  title: "Kalkylera fönsterbyte – så prissätter du offerten rätt 2026", slug: "kalkylera-fonsterbyte-offert", locale: "sv",
  excerpt: "En konkret räknemodell för fönsterbyte-offerter 2026 – montagetid, självkostnad och ROT 30 % separerat så du inte tappar marginal.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/isolering-preview.webp", contentHtml: A_KALKYLERA_FONSTERBYTE_OFFERT_HTML,
  seoTitle: "Kalkylera fönsterbyte 2026 | ByggExp", seoDescription: "Så prissätter du ett fönsterbyte 2026: montagetid, U-värdeskrav och ROT 30 % rätt i offerten. Räknemodell från avtalslön till kundpris.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/isolering-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:30:00.000Z", createdAt: "2026-08-19T08:30:00.000Z", updatedAt: "2026-08-19T08:30:00.000Z",
};

const A_KREDITFORSAKRING_BYGGFORETAG_HTML = `
<p>En enda obetald storfaktura i en entreprenad kan slå ut marginalen från flera lyckade projekt. När kunden går i konkurs mitt i bygget står du kvar med nedlagt material, betalda underentreprenörer och löner – men ingen betalning. Byggbranschen toppar dessutom konkursstatistiken i Sverige: 2025 gick cirka 1 700 byggbolag i konkurs, vilket motsvarar runt 16 procent av alla företagskonkurser, och sektorn ligger fortsatt högt under 2026. Kundförlust är alltså inte en osannolik otur, utan en risk du bör prissätta och skydda dig mot innan du skriver på det stora kontraktet.</p>

<p>Innan du lämnar anbud – räkna hem jobbet och sätt tydliga betalningsvillkor redan i offerten med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a>. En proffsig offert med rätt villkor är första steget i att skydda din likviditet.</p>

<h2>Varför byggföretag är extra utsatta för kundförluster</h2>
<p>Bygg skiljer sig från de flesta branscher på flera sätt som var för sig ökar kreditrisken – och tillsammans gör den betydande:</p>
<ul>
<li><strong>Långa projekt.</strong> En entreprenad löper ofta över många månader. Din kunds ekonomi kan förändras helt från kontraktsdag till slutfaktura.</li>
<li><strong>Långa UE-kedjor.</strong> Som underentreprenör är du beroende av att generalentreprenören får betalt av beställaren. En konkurs högt upp i kedjan drar med sig alla under.</li>
<li><strong>Stora enskilda fakturor.</strong> Ett fåtal kunder kan stå för en stor del av omsättningen. Faller en av dem faller mycket på en gång.</li>
<li><strong>Låga marginaler.</strong> När nettomarginalen ligger på några få procent krävs det enormt många lyckade projekt för att täcka en enda större kreditförlust.</li>
</ul>
<p>Konkursvågen 2024–2026 har pressat hela sektorn. Under 2026 har det totala antalet företagskonkurser visserligen minskat (runt 6 procent), men byggbranschen går mot strömmen: byggkonkurserna har ökat igen (kring 6–7 procent i juni och juli jämfört med året innan) och bygg toppar fortfarande konkurslistan. Månadssiffrorna är volatila och det ekonomiska läget fortsatt tufft. Att lita på att just din kund klarar sig är ingen strategi.</p>

<h2>Kreditkoll först – innan du tar det stora jobbet</h2>
<p>Det billigaste skyddet mot kundförlust är att göra en kreditupplysning innan du binder upp dig. De ledande aktörerna för kreditkoll på företag i Sverige är UC, Creditsafe och Dun &amp; Bradstreet (tidigare Bisnode). De hämtar data från Skatteverket, Bolagsverket och andra offentliga register.</p>
<p>I en företagsupplysning läser du bland annat:</p>
<ul>
<li><strong>Rating/kreditvärdighet</strong> och rekommenderad kreditlimit.</li>
<li><strong>Betalningsanmärkningar</strong> och eventuella skuldsaldon hos Kronofogden.</li>
<li><strong>Årsredovisning</strong> – omsättning, resultat och soliditet över tid.</li>
<li><strong>Styrelse, firmateckning och moderbolag</strong> – vem tecknar avtalet och vem står bakom?</li>
</ul>
<p>En praktisk detalj: UC-förfrågningar registreras och kan i sig påverka omdömet om ett bolag får många på kort tid, medan Creditsafe-upplysningar normalt inte registreras på samma sätt. Komplettera alltid med att kontrollera <strong>F-skatt och momsregistrering</strong> via Skatteverket samt <strong>bolagsstatus och firmateckning</strong> via Bolagsverket. Är kunden ett nystartat AB utan historik – behandla det därefter, begär förskott eller garanti.</p>

<h2>Sätt rätt betalningsvillkor och a-conto-plan</h2>
<p>Huvudregeln mellan företag enligt räntelagen är att en faktura förfaller senast 30 dagar efter att den skickats eller mottagits. Längre betalningstid som 60 eller 90 dagar gäller bara om du som säljare uttryckligen har godkänt det – en beställare kan inte ensidigt förlänga fristen. Dröjsmålsränta får du ta ut från 30 dagar även om ingen förfallodag avtalats.</p>
<p>I entreprenad ligger den stora poängen i att inte ligga ute med hela beloppet:</p>
<ul>
<li><strong>A conto / delfakturering</strong> enligt en betalningsplan kopplad till färdigställda moment.</li>
<li><strong>Förskott</strong> vid materialtunga jobb eller osäkra kunder.</li>
<li><strong>Stopprätt</strong> enligt AB/ABT – rätten att hålla inne prestation vid utebliven betalning.</li>
<li><strong>Bankgaranti eller förskottsgaranti</strong> vid större kontrakt.</li>
</ul>
<p>Ju mindre av totalen du har ute som obetald fordran vid varje given tidpunkt, desto mindre blir smällen om kunden fallerar.</p>

<h2>När kunden ändå inte betalar – lagens verktyg 2026</h2>
<p>Betalar företagskunden för sent har du flera lagstadgade verktyg. För andra halvåret 2026 är dröjsmålsräntan mellan företag <strong>10 procent per år</strong> (Riksbankens referensränta 2,00 procent plus 8 procentenheter). Utöver räntan har du mot en företagskund alltid rätt till en lagstadgad <strong>förseningsersättning på 450 kr</strong> enligt lagen om ersättning för inkassokostnader.</p>
<p>Viktigt att veta: de 450 kronorna är en schablon som täcker – och ersätter – rätten till separat påminnelseavgift (60 kr) och inkassokostnad (180 kr). Du kan alltså inte stapla 450 + 60 + 180 kr på varandra; förseningsersättningen konsumerar de avgifterna. Bara om dina faktiska indrivningskostnader överstiger 450 kr kan du kräva det överskjutande beloppet. Går ärendet vidare skickar du ett inkassokrav, som normalt ger 8–14 dagars betalningsfrist. Betalar kunden ändå inte kan du ansöka om betalningsföreläggande hos Kronofogden.</p>
<p>Men här är den obekväma sanningen: allt detta hjälper föga om kunden är på obestånd. Du kan ha rätt, dröjsmålsränta och ett utslag från Kronofogden – och ändå aldrig se pengarna om bolaget saknar tillgångar och går i konkurs. Det är precis den situationen en kreditförsäkring är byggd för.</p>

<h2>Så fungerar en kreditförsäkring för byggföretag</h2>
<p>En kreditförsäkring (kundkreditförsäkring) täcker den förlust som uppstår när en kund inte kan betala på grund av insolvens eller långvarigt dröjsmål. Typiskt ersätter försäkringen upp till omkring <strong>90 procent</strong> av förlusten, och inkassohantering av både svenska och utländska fordringar ingår ofta. Försäkringsbolaget sätter en kreditlimit per kund och bevakar kundstocken löpande – en tidig varningssignal du själv sällan hinner fånga.</p>
<p>Premien anges av marknadsaktörer ofta ligga i storleksordningen <strong>0,1–0,5 procent av den försäkrade omsättningen</strong>. Det är en indikativ branschsiffra – faktisk premie sätts individuellt utifrån bransch, kundstock och riskexponering, så begär alltid en egen offert. Ledande aktörer på den svenska marknaden är Allianz Trade (tidigare Euler Hermes), Atradius och Coface, samt breda försäkringsbolag som Trygg-Hansa.</p>

<h2>Kreditförsäkring vs factoring vs bankgaranti</h2>
<p>De tre vanligaste skydden löser olika problem och fungerar bäst tillsammans:</p>
<ul>
<li><strong>Factoring/fakturaköp</strong> ger dig <em>likviditet</em> – du får betalt direkt i stället för att vänta på förfallodagen. Men köpet sker ibland med regress, vilket innebär att du bär kreditrisken om kunden inte betalar.</li>
<li><strong>Bankgaranti/förskottsgaranti</strong> säkrar <em>fullgörande</em> – att åtagandet i kontraktet fullföljs.</li>
<li><strong>Kreditförsäkring</strong> täcker själva <em>förlusten</em> när kunden blir insolvent.</li>
</ul>
<p>Vill du ta bort kreditrisken helt kombinerar du gärna factoring utan regress med en kreditförsäkring.</p>

<h2>Checklista innan du skriver på det stora kontraktet</h2>
<ol>
<li>Gör en kreditupplysning via UC, Creditsafe eller Dun &amp; Bradstreet.</li>
<li>Kontrollera F-skatt och moms via Skatteverket.</li>
<li>Kontrollera bolagsstatus och firmateckning via Bolagsverket.</li>
<li>Sätt en rimlig kreditlimit per kund utifrån ratingen.</li>
<li>Skriv alltid avtal med tydliga betalningsvillkor och a-conto-plan.</li>
<li>Begär förskott eller garanti vid osäker kund eller materialtungt jobb.</li>
<li>Använd stopprätten enligt AB/ABT om betalning uteblir.</li>
<li>Bevaka kundens ekonomi löpande under hela projektet.</li>
<li>Överväg kreditförsäkring för dina största exponeringar.</li>
<li>Agera dag 1 vid dröjsmål – påminnelse, dröjsmålsränta och förseningsersättning direkt.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga in kreditskyddet i själva affärsflödet i stället för att hantera det i efterhand. Du sätter tydliga betalningsvillkor och a-conto-planer redan i offerten, så att villkoren följer med hela vägen till faktura. Du får samlad koll på vilka kunder som har utestående belopp och hur mycket du ligger ute med per projekt, vilket gör det lättare att sätta rimliga limiter och agera tidigt vid dröjsmål. Själva kreditupplysningen och kreditförsäkringen tecknar du hos UC, Creditsafe respektive försäkringsbolagen – ByggExp ersätter inte dem, men ger dig underlaget och strukturen som gör riskbedömningen enkel att göra varje gång.</p>

<h2>Vanliga frågor</h2>
<h3>Vad kostar en kreditförsäkring för ett byggföretag?</h3>
<p>Marknadsaktörer anger ofta en indikativ premie på 0,1–0,5 procent av den försäkrade omsättningen. Den faktiska premien sätts individuellt utifrån bransch, kundstock och riskexponering, så begär alltid en egen offert från exempelvis Allianz Trade, Atradius, Coface eller Trygg-Hansa.</p>
<h3>Hur mycket ersätter försäkringen om kunden går i konkurs?</h3>
<p>En kundkreditförsäkring ersätter typiskt upp till omkring 90 procent av förlusten vid kundens insolvens eller utebliven betalning. Inkassohantering av svenska och utländska fordringar ingår ofta, och en självrisk tillämpas.</p>
<h3>Vilken dröjsmålsränta får jag ta ut mot en företagskund 2026?</h3>
<p>För andra halvåret 2026 är den lagstadgade dröjsmålsräntan mellan företag 10 procent per år, baserat på Riksbankens referensränta på 2,00 procent plus 8 procentenheter. Ni kan avtala om högre ränta, men aldrig lägre än lagens nivå mellan näringsidkare.</p>
<h3>Kan jag lägga påminnelseavgift och inkassokostnad ovanpå förseningsersättningen på 450 kr?</h3>
<p>Nej. Mot en företagskund är de 450 kronorna en schablon som täcker och ersätter både påminnelseavgiften (60 kr) och inkassokostnaden (180 kr). Du kan alltså inte kräva 450 + 60 + 180 kr – bara faktiska indrivningskostnader som överstiger 450 kr kan läggas till.</p>
<h3>Räcker det inte med kreditkoll i stället för försäkring?</h3>
<p>Kreditkoll minskar risken men eliminerar den inte – ett bolag med god rating kan förändras under ett långt entreprenadprojekt. Kreditkoll och kreditförsäkring kompletterar varandra: kollen sållar bort de uppenbara riskerna, försäkringen fångar upp de förluster du inte kunde förutse.</p>

<h2>Kom igång</h2>
<p>Börja med grunden: sätt tydliga betalningsvillkor och en a-conto-plan redan i anbudet med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>. Vill du se hur ByggExp hjälper dig hålla koll på utestående belopp och kreditrisk per kund? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>, <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a> och <a href="/sv/blog/factoring-byggforetag">Factoring för byggföretag</a>.</p>
`;

const A_KREDITFORSAKRING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"kreditforsakring-byggforetag",
  title: "Kreditförsäkring för byggföretag – skydda dig mot kundförluster", slug: "kreditforsakring-byggforetag", locale: "sv",
  excerpt: "En obetald storfaktura kan slå ut marginalen från flera projekt. Så skyddar du byggföretaget mot kundförluster 2026 – kreditkoll, betalningsvillkor och kreditförsäkring.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_KREDITFORSAKRING_BYGGFORETAG_HTML,
  seoTitle: "Kreditförsäkring byggföretag | ByggExp", seoDescription: "Så skyddar du ditt byggföretag mot kundförluster 2026: kreditkoll, betalningsvillkor, lagens verktyg och kreditförsäkring. Praktisk guide för hantverkare och entreprenörer.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:00:00.000Z", createdAt: "2026-08-19T09:00:00.000Z", updatedAt: "2026-08-19T09:00:00.000Z",
};

const A_VAD_SKA_FAKTURA_INNEHALLA_BYGG_HTML = `
<p>En faktura som saknar rätt uppgifter är inte bara ett skönhetsfel. Skatteverket kan underkänna den som underlag för momsavdrag, ROT-utbetalningen kan stoppas och köparen kan hålla inne betalningen tills du rättar. För byggföretag med omvänd byggmoms och ROT-jobb är riskerna extra stora eftersom det finns fler obligatoriska fält än i vanliga branscher.</p>

<p>Vill du ha ett underlag som redan har alla lagkravsfält på plats? Använd <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a> och bocka av checklistan nedan innan du skickar.</p>

<h2>Lagen bakom fakturan</h2>
<p>Reglerna för vad en faktura ska innehålla finns i mervärdesskattelagen (2023:200), kapitel 17. Den nya lagen trädde i kraft 1 juli 2023 och ersatte den gamla ML (1994:200). För dig som byggföretagare betyder det två saker: kraven på innehåll är i praktiken desamma som tidigare, men laghänvisningarna och de fasta textformuleringarna på din fakturamall behöver uppdateras till den nya lagen. Har du en mall som fortfarande hänvisar till 1994 års lag eller använder gamla momstexter bör du se över den.</p>
<p>Poängen är enkel: om ett obligatoriskt fält saknas kan Skatteverket vägra köparen avdrag för den ingående momsen. Då blir din faktura en belastning för kunden i stället för ett korrekt underlag – och det är sällan bra för affärsrelationen.</p>

<h2>Obligatoriska fält på en fullständig faktura</h2>
<p>En fullständig faktura (fullständig faktura) måste enligt momslagen innehålla minst följande uppgifter:</p>
<ul>
<li><strong>Fakturadatum</strong> – det datum fakturan utfärdas.</li>
<li><strong>Ett unikt fakturanummer</strong> – ett löpnummer i en obruten nummerserie, så att varje faktura kan identifieras entydigt.</li>
<li><strong>Säljarens momsregistreringsnummer</strong> – ditt momsreg.nr (och i praktiken även organisationsnummer).</li>
<li><strong>Säljarens och köparens namn och adress</strong>.</li>
<li><strong>Mängd och omfattning</strong> av de varor eller tjänster som sålts – vad du faktiskt levererat.</li>
<li><strong>Leverans- eller utförandedatum</strong> – när tjänsten utfördes eller varorna levererades, om det skiljer sig från fakturadatumet.</li>
<li><strong>Beskattningsunderlag per momssats</strong> – belopp exklusive moms, uppdelat om du har flera momssatser.</li>
<li><strong>Momssatsen</strong> – för byggtjänster normalt 25 %.</li>
<li><strong>Momsbeloppet</strong> som ska betalas.</li>
</ul>
<p>Saknas något av dessa fält är fakturan formellt bristfällig. Det är värt att kontrollera varje gång, eftersom det är billigare att rätta innan utskick än att hantera en underkänd faktura i efterhand.</p>

<h2>Förenklad faktura – när räcker den?</h2>
<p>En förenklad faktura (förenklad faktura) får bara användas när totalbeloppet inklusive moms inte överstiger 4 000 kr. Då räcker det med fakturadatum, säljarens namn och momsnummer, vad som sålts, samt momsbeloppet eller uppgifter för att räkna ut det. Detaljreglerna finns i Skatteverkets föreskrifter SKVFS 2024:16.</p>
<p>Fällan är beloppsgränsen. Är fakturan över 4 000 kr inklusive moms krävs en fullständig faktura – annars förlorar köparen rätten att dra av den ingående momsen. För de flesta byggjobb ligger beloppen långt över gränsen, så förenklad faktura passar mest för mindre tillägg eller enstaka materialposter.</p>

<h2>Omvänd byggmoms på fakturan</h2>
<p>Säljer du byggtjänster till ett annat företag som i sin tur säljer byggtjänster gäller omvänd byggmoms. Då lägger du <strong>ingen moms</strong> på fakturan – i stället redovisar köparen både utgående och ingående moms. Två saker är avgörande för att fakturan ska bli korrekt:</p>
<ul>
<li><strong>Köparens momsregistreringsnummer</strong> måste anges på fakturan.</li>
<li>Fakturan måste uttryckligen ange att omvänd betalningsskyldighet gäller. Den nya momslagen bytte formuleringen från &quot;omvänd skattskyldighet&quot; till <strong>&quot;omvänd betalningsskyldighet&quot;</strong>. Även engelskans &quot;reverse charge&quot; godtas. Att bara utelämna momsen utan text räcker inte.</li>
</ul>
<p>Tänk också på materialregeln: om en tjänst innehåller material räknas hela leveransen som en byggtjänst, och omvänd betalningsskyldighet gäller för hela beloppet – inte bara arbetsdelen.</p>

<h2>ROT-avdrag på fakturan 2026</h2>
<p>Från 1 januari 2026 är ROT-avdraget 30 % av arbetskostnaden, efter att den tillfälliga nivån på 50 % som gällde i slutet av 2025 tagits bort. Taket är 50 000 kr per person och år, och ROT och RUT delar på ett gemensamt tak på 75 000 kr per person och år.</p>
<p>För att en ROT-faktura ska gå igenom hos Skatteverket måste du samla in och ange:</p>
<ul>
<li><strong>Kundens fullständiga personnummer</strong> (ÅÅÅÅMMDD-XXXX).</li>
<li><strong>Fastighetsbeteckningen</strong> för villa/hus, eller bostadsrättsföreningens <strong>organisationsnummer plus lägenhetsnummer</strong> för en bostadsrätt.</li>
<li><strong>Arbetskostnad och materialkostnad tydligt separerade</strong> som egna radsummor, eftersom bara arbetskostnaden ger ROT.</li>
</ul>
<p>Blandar du ihop arbete och material i en klumpsumma kan hela avdraget stoppas. Separera alltid posterna redan när du skriver fakturan.</p>

<h2>Betalningsvillkor, förfallodatum och dröjsmålsränta</h2>
<p>I näringsverksamhet mellan företag är huvudregeln enligt räntelagen att en fordran förfaller senast 30 dagar efter att fakturan skickats. Längre kredittid kräver att köparen uttryckligen går med på det. Sätt därför ut ett tydligt förfallodatum på fakturan.</p>
<p>Betalar kunden för sent har du rätt till dröjsmålsränta motsvarande Riksbankens referensränta plus 8 procentenheter. För perioden 1 januari–30 juni 2026 blir det 2 % + 8 % = <strong>10 %</strong>. Det räcker att skriva &quot;dröjsmålsränta enligt räntelagen&quot; på fakturan. Vid sen betalning mellan företag får du dessutom ta ut en lagstadgad förseningsersättning på <strong>450 kr</strong> direkt när fakturan förfaller, utan påminnelse eller föregående avtal. Den ersätter påminnelse- och inkassoavgifter upp till det beloppet.</p>

<h2>Komplett fakturachecklista för byggföretag</h2>
<p>Bocka av innan du skickar:</p>
<ul>
<li>Fakturadatum och unikt fakturanummer</li>
<li>Säljarens namn, adress, org.nr och momsreg.nr</li>
<li>Köparens namn och adress (och momsreg.nr vid omvänd byggmoms)</li>
<li>Mängd/omfattning och utförandedatum</li>
<li>Beskattningsunderlag, momssats och momsbelopp per rad</li>
<li>Vid omvänd byggmoms: texten &quot;omvänd betalningsskyldighet&quot; och ingen moms</li>
<li>Vid ROT: personnummer, fastighetsbeteckning eller BRF-org.nr + lägenhetsnummer, samt separerad arbets- och materialkostnad</li>
<li>Förfallodatum, betalningsuppgifter och hänvisning till dröjsmålsränta enligt räntelagen</li>
</ul>

<h2>Vanliga misstag och hur du undviker dem</h2>
<p>De återkommande felen är få men dyra: gammal laghänvisning på mallen, moms som utelämnas vid omvänd byggmoms utan rätt text, klumpad arbets- och materialkostnad på ROT-jobb, och hoppande fakturanummer som bryter nummerserien. Alla går att bygga bort med en mall som tvingar fram rätt fält.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att få med rätt uppgifter från början. Fakturamallen har fält för momsreg.nr, fakturanummer och förfallodatum, och stödjer uppdelning av arbets- och materialkostnad så att ROT-underlaget blir korrekt. Du väljer själv om fakturan ska sättas upp för omvänd byggmoms med rätt text. Målet är att du ska slippa efterrätta fakturor – men det formella ansvaret för att uppgifterna stämmer ligger alltid hos dig som utfärdar fakturan, så stäm av mot checklistan ovan.</p>

<h2>Vanliga frågor</h2>
<h3>Vad ska en faktura minst innehålla enligt lag?</h3>
<p>En fullständig faktura ska innehålla fakturadatum, unikt fakturanummer, säljarens momsreg.nr, säljarens och köparens namn och adress, mängd/omfattning, utförandedatum, beskattningsunderlag per momssats, momssatsen och momsbeloppet. Saknas ett fält kan Skatteverket underkänna fakturan som underlag för momsavdrag.</p>
<h3>När får jag använda en förenklad faktura?</h3>
<p>När totalbeloppet inklusive moms är högst 4 000 kr. Då räcker fakturadatum, säljarens namn och momsnummer, vad som sålts och momsbeloppet. Över 4 000 kr krävs en fullständig faktura, annars kan köparen förlora sitt momsavdrag.</p>
<h3>Vilken text ska stå på fakturan vid omvänd byggmoms?</h3>
<p>Du lägger ingen moms på fakturan och skriver &quot;omvänd betalningsskyldighet&quot; enligt nya momslagen (även &quot;reverse charge&quot; godtas). Köparens momsregistreringsnummer måste också anges. Att bara utelämna momsen utan text räcker inte.</p>
<h3>Vad krävs på en ROT-faktura 2026?</h3>
<p>Kundens personnummer, fastighetsbeteckning för hus eller BRF:ens org.nr plus lägenhetsnummer för bostadsrätt, samt tydligt separerad arbets- och materialkostnad. Avdraget är 30 % av arbetskostnaden, max 50 000 kr per person och år.</p>

<h2>Kom igång</h2>
<p>Skapa en korrekt faktura direkt med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a>, eller <a href="/sv/contact">boka en demo</a> om du vill se hur ByggExp håller ordning på fakturor, ROT-underlag och betalningsvillkor i ett flöde.</p>

<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a>, <a href="/sv/blog/fakturera-som-hantverkare">Fakturera som hantverkare – så gör du rätt</a> och <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a>.</p>
`;

const A_VAD_SKA_FAKTURA_INNEHALLA_BYGG: BlogPost = {
  _id: "code-"+"vad-ska-faktura-innehalla-bygg",
  title: "Vad ska en faktura innehålla? Fakturakrav för byggföretag 2026", slug: "vad-ska-faktura-innehalla-bygg", locale: "sv",
  excerpt: "En felaktig faktura kan underkännas av Skatteverket, stoppa ROT-utbetalningen och kosta dig momsavdraget – här är alla lagkrav i en checklista.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/faktura-preview.webp", contentHtml: A_VAD_SKA_FAKTURA_INNEHALLA_BYGG_HTML,
  seoTitle: "Vad ska en faktura innehålla? | ByggExp", seoDescription: "Komplett checklista över fakturakrav för byggföretag 2026: momsreg.nr, fakturanummer, förfallodatum, ROT och omvänd byggmoms enligt mervärdesskattelagen.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/faktura-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:20:00.000Z", createdAt: "2026-08-19T09:20:00.000Z", updatedAt: "2026-08-19T09:20:00.000Z",
};

const A_EGENAVGIFTER_ENSKILD_FIRMA_BYGG_HTML = `
<p>Du fakturerar 500 000 kr på ett år, drar av material, verktyg och bilen – men hur mycket har du egentligen kvar när egenavgifter och skatt är betalda? För dig som driver enskild firma på bygget är egenavgifterna en av de största posterna, och de missförstås ofta. De tas inte ut på det du fakturerar och inte på det du plockar ut privat, utan på överskottet. Här går vi igenom 2026 års procentsatser, schablonavdraget och ett konkret räkneexempel så att du kan planera likviditeten i stället för att bli överraskad av slutskatten.</p>

<p>Vill du snabbt se hur moms och omvänd byggmoms slår på fakturan medan du läser? Testa <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator -&gt;</a> så får du siffrorna svart på vitt.</p>

<h2>Vad egenavgifter är – och vad de inte är</h2>
<p>Egenavgifter är din motsvarighet till de arbetsgivaravgifter en anställd betalas in för. Skillnaden är att du betalar dem själv på företagets överskott. Avgifterna finansierar din pension, sjukförsäkring och föräldrapenning – de är alltså inte bortkastade pengar, utan bygger upp ditt sociala skydd som egenföretagare.</p>
<p>Två saker är viktiga att ha klart för sig. Egenavgifterna beräknas på <strong>överskottet</strong>, det vill säga intäkter minus avdragsgilla kostnader, inte på omsättningen och inte på hur mycket du tar ut privat. Dessutom är egenavgifterna själva avdragsgilla och sänker underlaget för både kommunal och statlig inkomstskatt. Understiger överskottet 1 000 kr tas inga egenavgifter eller särskild löneskatt ut alls.</p>

<h2>2026 års procentsatser (verifierat mot Skatteverket)</h2>
<p>Full egenavgift för aktiv näringsverksamhet är <strong>28,97 %</strong> av överskottet 2026. Totalnivån är oförändrad jämfört med 2025, men Skatteverket har justerat de interna delposterna. Med standardvalet 7 karensdagar ser uppställningen ut så här:</p>
<ul>
<li>Ålderspensionsavgift: 10,21 %</li>
<li>Sjukförsäkringsavgift: 3,64 %</li>
<li>Föräldraförsäkringsavgift: 2,00 % (sänkt från 2,60)</li>
<li>Efterlevandepensionsavgift: 0,30 % (sänkt från 0,60)</li>
<li>Arbetsmarknadsavgift: 0,10 %</li>
<li>Arbetsskadeavgift: 0,10 % (sänkt från 0,20)</li>
<li>Allmän löneavgift: 12,62 % (höjd från 11,62)</li>
</ul>
<p>Summan blir 28,97 %. En förändring att känna till: från och med 1 januari 2026 höjs åldersgränsen för sänkta egenavgifter. Du måste ha fyllt 67 år vid årets ingång (utöver de äldre årskullarna födda 1938–1958) för att bara betala ålderspensionsavgiften 10,21 %. Är du född 1959 eller senare och under gränsen gäller full avgift.</p>

<h2>Schablonavdraget – varför avgiften inte blir hela 28,97 % direkt</h2>
<p>I deklarationen får du göra ett schablonavdrag för beräknade egenavgifter innan skatten räknas fram. För aktiv näringsverksamhet är avdraget <strong>högst 25 %</strong> av underlaget. Året efter stäms schablonen av mot de faktiska egenavgifterna, och en eventuell differens rättas då. Det gör att den effektiva belastningen av just egenavgifterna landar lägre än 28,97 % räknat på det ursprungliga överskottet.</p>
<p>Bedriver du verksamhet du aktivt arbetar i – vilket byggarbete så gott som alltid är – räknas den som aktiv. Passiv näringsverksamhet betalar i stället särskild löneskatt 24,26 % och får bara 20 % i schablonavdrag, men det är sällan aktuellt för en byggare som är ute på jobb.</p>

<h2>Karensval och sjukförsäkring</h2>
<p>Sjukförsäkringsavgiftens storlek beror på hur många karensdagar du valt. Gör du inget aktivt val gäller 7 karensdagar. Du kan välja 1, 14, 30, 60 eller 90 dagar – fler karensdagar ger lägre avgift men innebär att du står utan sjukpenning längre om du blir skadad eller sjuk. För en soloföretagare på bygget, där kroppen är verktyget, är det en reell avvägning mellan lägre avgift och snabbare skydd. Tänk också på att du efter fyllda 55 år inte längre kan byta till en kortare karenstid.</p>

<h2>Allmän nedsättning – 7,5 %, max 15 000 kr</h2>
<p>Det finns kvar en allmän nedsättning (särskilt avdrag) på egenavgifterna även 2026: 7,5 % av avgiftsunderlaget, dock högst 15 000 kr per år. För att få den krävs att du betalar full egenavgift och har ett överskott av aktiv näringsverksamhet över 40 000 kr. För många byggare med en solid firma är det här en avdragspost som ger full effekt.</p>

<h2>Räkneexempel: så mycket blir kvar netto</h2>
<p>Siffrorna nedan är avrundade och ska ses som en ungefärlig illustration – din egen kommunalskatt och dina avdrag avgör utfallet.</p>
<ul>
<li>Fakturerat under året (exkl. moms): 500 000 kr</li>
<li>Avdrag för material, verktyg, bil, försäkring och telefon: cirka 150 000 kr</li>
<li>Överskott före schablonavdrag: cirka 350 000 kr</li>
<li>Schablonavdrag 25 %: cirka 87 500 kr → underlag cirka 262 500 kr</li>
<li>Egenavgifter 28,97 % på underlaget, minus allmän nedsättning på 15 000 kr: grovt räknat cirka 61 000 kr</li>
<li>Kvar för inkomstskatt (kommunal, ca 32 %): skatt cirka 84 000 kr</li>
</ul>
<p>Med de här antagandena hamnar den totala belastningen – egenavgifter plus inkomstskatt – på grovt 40–50 % av överskottet. Ligger din beskattningsbara förvärvsinkomst över skiktgränsen tillkommer statlig inkomstskatt på 20 % på den överskjutande delen (skiktgränsen var 625 800 kr för 2025 – kontrollera 2026 års nivå separat). Poängen: räkna aldrig med att fakturerad summa är samma som lön.</p>

<h2>Momsen du måste ha koll på</h2>
<p>Momsregistreringsgränsen är 120 000 kr i årsomsättning (gäller sedan 2025). Under gränsen är registrering frivillig, men inom bygg är det oftast ändå fördelaktigt att momsregistrera eftersom du då kan lyfta ingående moms på material och verktyg.</p>
<p>Extra viktigt för byggare är <strong>omvänd byggmoms</strong>. Säljer du byggtjänster till ett företag som självt säljer byggtjänster fakturerar du utan moms – köparen redovisar då den utgående momsen. Fakturan ska innehålla köparens momsregistreringsnummer och texten &quot;Omvänd betalningsskyldighet&quot;. Ingår material i byggtjänsten räknas allt som byggtjänst. Reglerna gäller inte försäljning till privatperson eller till en köpare som inte är momsregistrerad. Omvänd byggmoms påverkar din likviditet – du får inte in momsen att röra dig med – men inte ditt nettoresultat.</p>

<h2>Sätt av rätt varje månad</h2>
<p>Egenavgifter och slutskatt betalas inte automatiskt i takt med att pengarna kommer in. Du betalar preliminär F-skatt varje månad, och en tumregel är att lägga undan runt 40–50 % av varje faktura (exklusive moms) på ett separat konto tills du vet ditt faktiska överskott. Då slipper du bli tagen på sängen av slutskatten. Ligger din preliminärskatt fel jämfört med verkligt resultat kan du begära jämkning hos Skatteverket.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att tro att egenavgifterna tas ut på fakturerad summa i stället för på överskottet.</li>
<li>Att glömma bort schablonavdraget och överskatta hur mycket avgifter man faktiskt betalar.</li>
<li>Att inte sätta av pengar löpande och stå utan buffert när slutskatten kommer.</li>
<li>Att fakturera med moms till ett annat byggföretag där omvänd byggmoms egentligen gäller.</li>
<li>Att missa den allmänna nedsättningen på max 15 000 kr trots att kraven är uppfyllda.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på det underlag som avgör din skatt. Genom att fakturera, tidrapportera och samla dina projektkostnader på ett ställe får du en tydlig bild av överskottet löpande – inte först i bokslutet. Med moms-kalkylatorn räknar du snabbt ut både vanlig moms och hur omvänd byggmoms slår på en faktura mot ett annat byggföretag. ByggExp beräknar inte dina egenavgifter åt dig och ersätter inte din bokföring eller revisor, men ett strukturerat underlag gör att du och din redovisningskonsult kan planera skatten i stället för att gissa.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket är egenavgifterna 2026?</h3>
<p>Full egenavgift för aktiv näringsverksamhet är 28,97 % av överskottet 2026. Totalnivån är oförändrad mot 2025, men delposterna har justerats. Inga avgifter tas ut om överskottet understiger 1 000 kr.</p>
<h3>Betalar jag egenavgifter på det jag tar ut privat?</h3>
<p>Nej. Egenavgifterna beräknas på företagets överskott – intäkter minus avdragsgilla kostnader – oavsett hur mycket du plockar ut privat. Privata uttag ur en enskild firma påverkar inte underlaget.</p>
<h3>Vad är schablonavdraget för egenavgifter?</h3>
<p>Det är ett avdrag i deklarationen på högst 25 % av underlaget för aktiv näringsverksamhet, avsett att täcka de beräknade egenavgifterna. Året efter stäms schablonen av mot de faktiska avgifterna.</p>
<h3>Måste jag momsregistrera min byggfirma?</h3>
<p>Först vid en årsomsättning över 120 000 kr är det obligatoriskt. Under gränsen är det frivilligt, men inom bygg är det ofta ändå fördelaktigt eftersom du då kan lyfta ingående moms på material och verktyg.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på dina fakturor och din moms i <a href="/sv/verktyg/moms-kalkylator">vår gratis moms-kalkylator</a>, så ser du direkt hur omvänd byggmoms och likviditet hänger ihop. Vill du se hur ByggExp samlar fakturor, tid och kostnader så att skatteunderlaget blir enkelt att följa? Boka en <a href="/sv/contact">demo</a> så visar vi upplägget. Kom ihåg att alltid kontrollera aktuella procentsatser och gränsvärden hos Skatteverket – den här artikeln ger vägledning men ersätter inte skatterådgivning.</p>

<p>Relaterat: <a href="/sv/blog/avdrag-enskild-firma-bygg">Avdrag i enskild firma för byggare</a>, <a href="/sv/blog/bokforing-enskild-firma-bygg">Bokföring i enskild firma för byggare</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet?</a></p>
`;

const A_EGENAVGIFTER_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"egenavgifter-enskild-firma-bygg",
  title: "Egenavgifter i enskild firma för byggare 2026 – så räknar du ut vad som blir kvar netto", slug: "egenavgifter-enskild-firma-bygg", locale: "sv",
  excerpt: "Så fungerar egenavgifter, schablonavdrag och skattekilen 2026 för dig som driver enskild firma i byggbranschen – med ett konkret räkneexempel.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_EGENAVGIFTER_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Egenavgifter enskild firma bygg 2026 | ByggExp", seoDescription: "Egenavgifter enskild firma bygg 2026: full avgift 28,97 %, schablonavdrag 25 % och ett räkneexempel som visar vad som faktiskt blir kvar netto.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:46:00.000Z", createdAt: "2026-08-19T09:46:00.000Z", updatedAt: "2026-08-19T09:46:00.000Z",
};

const A_KORJOURNAL_KRAV_SKATTEVERKET_BYGG_HTML = `
<p>För dig som driver byggföretag är körjournalen ofta det enda som står mellan firmabilen och en dyr efterbeskattning. Många hantverkare tror att en servicebil eller lätt lastbil automatiskt är fredad – men om du haft möjlighet att köra bilen privat är det <strong>du</strong>, inte Skatteverket, som måste kunna bevisa motsatsen. Och det beviset heter körjournal.</p>
<p><a href="/sv/verktyg/korjournal-mall">Ladda ner en färdig körjournal med vår gratis mall (PDF & Excel) -&gt;</a></p>

<p>Håll ordning på tjänsteresorna redan från början – planera och dokumentera dagens körningar tillsammans med arbetstiden i <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -></a> så att underlaget finns när deklarationen eller en granskning kommer.</p>

<h2>Så funkar förmånsbeskattningen – 100 mil- och 10-tillfällensgränsen</h2>

<p>Utgångspunkten är enkel: kör du firmabilen privat mer än i ringa omfattning ska du förmånsbeskattas. Skatteverket definierar ringa omfattning som privat körning på <strong>högst 100 mil OCH högst 10 tillfällen per år</strong>. Båda villkoren måste vara uppfyllda samtidigt. Överskrider du något av dem – till exempel 11 korta privatresor även om du bara kört 40 mil – beskattas hela bilförmånen.</p>

<p>Vad kostar det då att missa gränsen? Förmånsvärdet för en bil tagen i trafik från och med 1 juli 2021 beräknas 2026 så här, med prisbasbeloppet 59 200 kr:</p>

<ul>
<li>Ett prisbasbeloppsrelaterat belopp: 0,29 × 59 200 kr = <strong>17 168 kr</strong></li>
<li>En räntedel: 2,785 % av nybilspriset (baserat på statslåneräntan 2,55 %)</li>
<li>13 % av nybilspriset</li>
<li>Plus bilens fordonsskatt</li>
</ul>

<p>För en miljöbil sätts nybilspriset ned innan beräkningen: 350 000 kr för el- eller vätgasbil, 140 000 kr för laddhybrid och 100 000 kr för gasbil – dock högst 50 % av nybilspriset. Är bilen äldre än sex år får nybilspriset inte sättas lägre än fyra prisbasbelopp. Poängen är tydlig: ett fullt förmånsvärde kostar tiotusentals kronor per år i beskattad inkomst. En noggrant förd körjournal är billig i jämförelse.</p>

<h2>Dispositionsrätten och bevisbördan</h2>

<p>Här snubblar många byggföretagare. Det räcker att du haft <strong>möjlighet</strong> att använda bilen privat – dispositionsrätt – för att Skatteverket ska kunna presumera att förmån uppstått. Du behöver alltså inte ens ha kört privat; det räcker att du kunnat. Presumtionen bryts normalt bara med en mycket noggrant förd körjournal som visar att den privata körningen hållit sig under ringa omfattning.</p>

<p>Detta gäller inte bara personbilar. Även servicebilar, lätta lastbilar och till synes otympliga arbetsfordon kan förmånsbeskattas om körjournalen är bristfällig och du haft privat dispositionsrätt. Det har prövats i praxis. Att bilen är full av verktyg och inte direkt lämpar sig för semesterresan är alltså inget säkert skydd – dokumentationen är det som avgör. Osäker på om ditt fordon räknas som service- eller förmånsbil? Vi går igenom skillnaden i <a href="/sv/blog/servicebil-eller-formansbil">servicebil eller förmånsbil</a>.</p>

<h2>Vad en körjournal måste innehålla enligt Skatteverket</h2>

<p>Det finns inga uttryckliga lagregler om exakt vad en körjournal ska innehålla – Skatteverket ger rekommendationer. Men kraven i praktiken är höga, och en godtagbar körjournal bör innehålla:</p>

<ul>
<li>Bilens registreringsnummer</li>
<li>Aktuellt år</li>
<li>Mätarställning vid årets början och vid årets slut</li>
<li>För varje resa: datum</li>
<li>Mätarställning vid start och vid slut</li>
<li>Antal körda mil eller kilometer</li>
<li>Startadress och slutadress</li>
<li>Ärendets syfte</li>
<li>Vilka platser, företag eller kontakter som besökts</li>
</ul>

<p>Det sista är särskilt viktigt för byggbranschen. En rad med bara ort och millantal räcker sällan – ange kunden, byggarbetsplatsen eller leverantören så att resan går att verifiera mot fakturor, arbetsordrar och tidrapporter.</p>

<h2>Så för du den så att den håller vid granskning</h2>

<p>Skatteverket vill att körjournalen förs löpande, i nära anslutning till resorna. Veckovis uppdatering accepteras, men daglig registrering rekommenderas – och är i praktiken det som väger tyngst om journalen ifrågasätts. Tänk på följande:</p>

<ul>
<li><strong>Notera även privatkörningen.</strong> Det är avsaknaden av privata poster som gör en journal otrovärdig. Redovisar du dina fåtal privatresor öppet ser Skatteverket att du har koll och håller dig under gränsen.</li>
<li><strong>Anteckna tankningar.</strong> Skriv upp antal liter och pris vid tankning – det underlättar beräkningen av privat körning och styrker att förbrukningen matchar de redovisade milen.</li>
<li><strong>Förklara det oregelbundna.</strong> Långa resor, körningar mellan flera byggarbetsplatser på en dag eller avstickare för materialhämtning bör ha en tydlig ärendebeskrivning så att de inte ser ut som privatresor.</li>
</ul>

<p>Ett kort exempel på en godtagbar rad: <em>2026-03-12, start 42 180 mil, slut 42 214 mil, 34 mil, Verkstan Kungälv → Villa Ekhagen, Partille, montage yttertak kund Nilsson.</em> Den raden går att verifiera – vagt formulerade poster gör det inte.</p>

<h2>Drivmedel och milersättning 2026</h2>

<p>Körjournalen påverkar även hur drivmedel beskattas. Betalar arbetsgivaren för privat bränsle värderas drivmedelsförmånen till marknadsvärdet av det privata bränslet × 1,2 vid inkomstbeskattningen (arbetsgivaravgifter beräknas dock på marknadsvärdet utan uppräkning). Kan du <strong>inte</strong> visa hur bilen använts – alltså ingen körjournal – beskattas du för allt drivmedel som förbrukats under året. Där blir avsaknaden av dokumentation direkt dyr.</p>

<p>Åt andra hållet krävs körjournal för att du ska få ut skattefri milersättning. För 2026 gäller (oförändrat mot 2025) 25 kr/mil för egen privat bil i tjänsten, 12 kr/mil för förmånsbil som drivs med diesel, bensin, etanol eller hybrid inklusive laddhybrid, och 9,50 kr/mil för helt eldriven förmånsbil. Ersättning över dessa belopp beskattas som lön. Körjournalen är underlaget som styrker tjänstemilen. Vi går igenom nivåerna i detalj i <a href="/sv/blog/milersattning-2026">milersättning 2026</a>.</p>

<p>Vill du dessutom visa att du kör mer än 3 000 mil i tjänsten per år med förmånsbil – vilket kan ge jämkning av förmånsvärdet – krävs också dokumentation via körjournal. Hur jämkningen räknas hem tar vi upp i <a href="/sv/blog/justerat-formansvarde-servicebil">justerat förmånsvärde för servicebil</a>.</p>

<h2>Papper, app eller GPS?</h2>

<p>En pappersjournal i handskfacket fungerar, men risken för luckor och efterhandskonstruktion är stor – och en journal som uppenbart fyllts i i efterhand tappar bevisvärde. En elektronisk körjournal, till exempel en app eller GPS-baserad lösning, registrerar resorna automatiskt och minskar risken för glömda poster. Bra att veta: en elektronisk körjournal påverkar inte bilens förmånsvärde – den räknas inte som extrautrustning. Du kan alltså installera den utan att förmånsvärdet höjs.</p>

<h2>Checklista före deklarationen och vid en revision</h2>

<ul>
<li>Mätarställning vid årets ingång och utgång noterad</li>
<li>Alla tjänsteresor med datum, adresser, mil och ärende</li>
<li>Privatresorna redovisade – under 100 mil och 10 tillfällen?</li>
<li>Tankningar med liter och pris antecknade</li>
<li>Körjournalen stämmer mot fakturor, arbetsordrar och tidrapporter</li>
<li>Sparad tillsammans med övrigt bokföringsunderlag i sju år</li>
</ul>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp ersätter inte en dedikerad körjournalstjänst, men verktyget ger dig underlaget som gör körjournalen trovärdig. När du tidrapporterar per projekt och kund byggs det upp en spårbar logg över var dina montörer varit och vilka arbetsplatser som besökts – exakt den information som en granskad körjournal behöver kunna verifieras mot. Kopplar du ihop tidrapport, projekt och fakturaunderlag blir det svårt för Skatteverket att ifrågasätta att en resa var i tjänsten, eftersom arbetet på plats finns dokumenterat samma dag. Vår tidrapport-mall är en enkel start; för löpande drift finns projektöversikten i systemet.</p>

<h2>Vanliga frågor</h2>

<h3>Måste jag föra körjournal om jag har servicebil?</h3>
<p>Ja, om du haft privat dispositionsrätt. Även servicebilar och lätta lastbilar kan förmånsbeskattas när körjournalen är bristfällig, vilket prövats i praxis. Att bilen är ett arbetsfordon ger inget automatiskt skydd – dokumentationen avgör.</p>

<h3>Hur ofta måste körjournalen fyllas i?</h3>
<p>Löpande, i nära anslutning till resorna. Veckovis uppdatering accepteras av Skatteverket, men daglig registrering rekommenderas och väger tyngst om journalen ifrågasätts. En journal som fyllts i långt i efterhand tappar bevisvärde.</p>

<h3>Vad händer om jag kör 101 mil privat?</h3>
<p>Då är gränsen för ringa omfattning överskriden och hela bilförmånen beskattas. Gränsen går vid högst 100 mil och högst 10 tillfällen per år – båda villkoren måste hållas samtidigt.</p>

<h3>Räknas elektronisk körjournal som extrautrustning?</h3>
<p>Nej. En elektronisk körjournal påverkar inte bilens förmånsvärde och räknas inte som extrautrustning. Den minskar dessutom risken för luckor och efterhandskonstruktion jämfört med en pappersjournal.</p>

<h2>Kom igång</h2>

<p>Börja med att strukturera dina tjänsteresor och arbetstider på ett spårbart sätt med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall</a>. Vill du se hur tidrapport, projekt och fakturaunderlag hänger ihop och stärker din körjournal? <a href="/sv/contact">Boka en demo här -></a></p>

<p>Relaterat: <a href="/sv/blog/milersattning-2026">Milersättning 2026</a>, <a href="/sv/blog/servicebil-eller-formansbil">Servicebil eller förmånsbil?</a>, <a href="/sv/blog/justerat-formansvarde-servicebil">Justerat förmånsvärde för servicebil</a>.</p>
`;

const A_KORJOURNAL_KRAV_SKATTEVERKET_BYGG: BlogPost = {
  _id: "code-"+"korjournal-krav-skatteverket-bygg",
  title: "Körjournal: Skatteverkets krav och hur du slipper förmånsbeskattning på firmabilen", slug: "korjournal-krav-skatteverket-bygg", locale: "sv",
  excerpt: "Bevisbördan för att firmabilen inte körts privat ligger på dig – inte på Skatteverket. Så för du en körjournal som håller vid granskning.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/tidrapport-preview.webp", contentHtml: A_KORJOURNAL_KRAV_SKATTEVERKET_BYGG_HTML,
  seoTitle: "Körjournal – krav från Skatteverket | ByggExp", seoDescription: "Så för du en körjournal som håller vid Skatteverkets granskning. Innehållskrav, ringa omfattning och hur du undviker förmånsbeskattning på firmabilen 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/tidrapport-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:03:00.000Z", createdAt: "2026-08-19T10:03:00.000Z", updatedAt: "2026-08-19T10:03:00.000Z",
};

const A_SANK_ARBETSGIVARAVGIFT_UNGA_VAXA_STOD_2026_HTML = `
<p>Hur mycket billigare blir en lärling eller första anställd i ett byggföretag 2026? Frågan är högst konkret, för det finns just nu två parallella spår som båda handlar om <strong>sänkt arbetsgivaravgift för unga 2026 i bygg</strong>: den nya tillfälliga ungdomsnedsättningen på 20,81 % och det utvidgade Växa-stödet på 10,21 %. Båda mäts mot den fulla avgiften på 31,42 %, men de fungerar helt olika – och en av dem har fått en byråkratisk ändring 2026 som lurar många småföretagare. Nedan reder vi ut reglerna och räknar på kronor per månad och år för en typisk lärling.</p>

<p>Vill du snabbt se vad en anställd kostar per debiterbar timme när avgiften ändras? Testa <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator</a> och lägg in olika avgiftssatser för att se hur marginalen påverkas.</p>

<h2>Så ser arbetsgivaravgiften ut 2026 (baslinjen)</h2>
<p>Den fulla arbetsgivaravgiften är oförändrad 2026 och ligger på <strong>31,42 %</strong> av bruttolönen. Av den utgör ålderspensionsavgiften 10,21 %, och resten är ett antal andra avgifter (sjukförsäkring, föräldraförsäkring, arbetsmarknadsavgift med flera). Det här är den siffra alla rabatter räknas ifrån – tänk på den som listpriset.</p>
<ul>
<li><strong>Full avgift:</strong> 31,42 % – standard för de flesta anställda.</li>
<li><strong>Ungdomsnedsättning:</strong> 20,81 % – tillfällig, på lön upp till 25 000 kr/mån.</li>
<li><strong>Växa-stöd:</strong> 10,21 % – endast ålderspensionsavgiften, på lön upp till 35 000 kr/mån.</li>
</ul>

<h2>Ungdomsnedsättningen 2026: vem, hur mycket och när</h2>
<p>Från och med 2026 införs en tillfällig nedsättning för unga. För anställda som vid årets ingång har fyllt 18 men inte 23 – alltså födda 2003–2007 för 2026 – sänks arbetsgivaravgiften till <strong>20,81 %</strong> på månadslön upp till 25 000 kr. På den del av lönen som överstiger 25 000 kr betalar du full avgift, 31,42 %.</p>
<p>Nedsättningen gäller ersättning som betalas ut under perioden <strong>1 april 2026–30 september 2027</strong> och tillämpas automatiskt i arbetsgivardeklarationen – du behöver inte ansöka. En viktig reservation: det här är en politiskt tidsbegränsad åtgärd, och både slutdatum och procentsats kan justeras. Kontrollera alltid aktuell sats hos Skatteverket innan du budgeterar långsiktigt.</p>

<h2>Växa-stödet 2026: 10,21 % i upp till 24 månader</h2>
<p>Växa-stödet är betydligt mer generöst. Det sänker arbetsgivaravgiften till bara ålderspensionsavgiften, <strong>10,21 %</strong>, på lön upp till 35 000 kr per kalendermånad, i upp till 24 sammanhängande månader. Sedan 1 januari 2025 kan stödet omfatta både den första och den andra anställde – tidigare bara en. För två anställda över två år kan besparingen bli 350 000 kr eller mer.</p>
<p>Villkoren är dock strikta. I korthet gäller att:</p>
<ul>
<li>Företaget är en enskild firma eller ett aktiebolag utan anställda, eller med högst en anställd sedan 1 januari 2024 (handelsbolag: max två delägare).</li>
<li>Anställningen har startat efter 30 april 2024 (den högre gränsen 35 000 kr gäller anställningar efter det datumet).</li>
<li>Anställningen pågår minst tre sammanhängande månader och omfattar minst 20 timmar per vecka.</li>
<li>Personen får inte ha varit anställd i verksamheten de senaste tre åren, och det finns begränsningar för att anställa nära familj.</li>
</ul>
<p>Bygg är faktiskt den enskilt största mottagaren av Växa-stöd – ungefär 15 % av utbetalningarna går till byggsektorn, just för att så många byggföretag startar som enmansbolag och sedan tar in sin första yrkesarbetare.</p>

<h2>Nyheten som lurar många: från 2026 måste du ansöka om återbetalning</h2>
<p>Här kommer den stora procedurändringen. Från och med redovisningsperioden januari 2026 markeras nedsättningen inte längre direkt på individuppgiften i arbetsgivardeklarationen. Istället måste du <strong>betala in full arbetsgivaravgift först</strong> och sedan ansöka om <strong>återbetalning</strong> av den nedsatta delen, senast ett år efter den månad du begär stöd för.</p>
<p>Själva pengabeloppet är oförändrat – men kassaflödet och administrationen förändras. Du ligger ute med mellanskillnaden tills återbetalningen kommer, vilket för ett litet byggföretag med tight likviditet kan spela roll. Bakgrunden är att Växa-stödet nu formellt klassas som stöd av mindre betydelse (de minimis) enligt EU:s regler, med ett tak på 300 000 euro över en treårsperiod per företag.</p>

<h2>Räkneexempel: vad kostar en lärling på 30 000 kr/mån 2026?</h2>
<p>Ta en lärling eller första anställd med 30 000 kr i månadslön. Så här skiljer sig avgiften:</p>
<ul>
<li><strong>Full avgift (31,42 %):</strong> 9 426 kr/mån, ca 113 100 kr/år.</li>
<li><strong>Växa-stöd (10,21 %):</strong> 3 063 kr/mån, ca 36 800 kr/år. Besparing ca <strong>6 363 kr/mån</strong> eller ca 76 400 kr/år.</li>
<li><strong>Ungdomsnedsättning (20,81 % upp till 25 000 kr):</strong> 25 000 × 20,81 % = 5 203 kr plus 5 000 × 31,42 % = 1 571 kr, totalt ca 6 774 kr/mån. Besparing ca <strong>2 652 kr/mån</strong> eller ca 31 800 kr/år.</li>
</ul>
<p>Slutsatsen är tydlig: för en ung förstaanställd slår Växa-stödet ungdomsnedsättningen med bred marginal, eftersom 10,21 % är lägre än 20,81 % och gäller på högre lönetak. Vill du se hur besparingen slår igenom på ditt påslag och din marginal? Räkna vidare i <a href="/sv/verktyg/paslag-marginal-kalkylator">vår påslags- och marginalkalkylator</a>.</p>

<h2>Ungdomsnedsättning eller Växa-stöd – vad ska byggföretaget välja?</h2>
<p>Beslutslogiken är enklare än den ser ut:</p>
<ol>
<li>Är det din <strong>första eller andra anställd</strong> och uppfyller du Växa-stödets villkor? Använd Växa-stödet – det är mest generöst.</li>
<li>Är den anställde ung men utöver de första två anställningarna, eller har de 24 Växa-månaderna tagit slut? Då blir <strong>ungdomsnedsättningen</strong> relevant, förutsatt att personen är född 2003–2007 och lönen ligger runt eller under 25 000 kr.</li>
</ol>
<p>De två nedsättningarna kan inte tillämpas på samma avgiftsbas samtidigt, så det handlar om att välja rätt spår per anställd – inte att stapla dem på samma lön.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att tro att man fortfarande markerar stödet direkt i deklarationen – från 2026 krävs ansökan om återbetalning.</li>
<li>Att missa ettårsgränsen för att söka återbetalning.</li>
<li>Att räkna med Växa-stöd trots att man haft mer än en anställd sedan 1 januari 2024.</li>
<li>Att anställa nära familj och sedan få avslag på Växa-stödet.</li>
<li>Att budgetera ungdomsnedsättningen som permanent – den gäller bara 1 april 2026–30 september 2027.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp räknar inte åt Skatteverket, men verktyget hjälper dig att se konsekvensen av olika avgiftssatser i din egen prissättning. När du lägger in en anställds lön och avgift i timpris-kalkylatorn ser du direkt hur mycket den debiterbara timmen sjunker när Växa-stödet eller ungdomsnedsättningen slår till – och hur din marginal förändras. Det gör det enklare att sätta rätt timpris på en lärling som är billigare i avgift men mindre produktiv i början. Verktygen ersätter inte rådgivning från din redovisningskonsult, men de ger dig ett snabbt underlag att fatta beslut på.</p>

<h2>Vanliga frågor</h2>
<h3>Kan jag kombinera ungdomsnedsättningen och Växa-stödet?</h3>
<p>Inte på samma avgiftsbas för samma lön. Du väljer det stöd som passar per anställd. Eftersom Växa-stödet ger 10,21 % mot ungdomsnedsättningens 20,81 % är Växa-stödet nästan alltid bättre för en förstaanställd som uppfyller villkoren.</p>
<h3>Gäller stöden inhyrd personal eller underentreprenörer?</h3>
<p>Nej. Båda nedsättningarna gäller din egen anställda personal där du betalar arbetsgivaravgift. Inhyrd personal och underentreprenörer fakturerar dig – där gäller i stället momsreglerna, ofta omvänd byggmoms mellan byggföretag.</p>
<h3>Måste jag ansöka om stödet 2026?</h3>
<p>Ungdomsnedsättningen tillämpas automatiskt i arbetsgivardeklarationen. Växa-stödet måste du däremot från januari 2026 ansöka om som återbetalning – du betalar full avgift först och begär tillbaka den nedsatta delen senast ett år efter aktuell månad.</p>
<h3>Kan procentsatserna ändras under året?</h3>
<p>Ungdomsnedsättningen är en tidsbegränsad politisk åtgärd, så både sats och slutdatum kan justeras. Kontrollera alltid aktuella satser och villkor hos Skatteverket innan du budgeterar eller lämnar anbud.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på vad din nästa lärling faktiskt kostar per timme med olika avgiftssatser i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>. Vill du se hur ByggExp kan hjälpa hela ditt byggföretag med tid, priser och underlag? <a href="/sv/contact">Boka en demo här</a> så visar vi hur det funkar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/vad-kostar-en-anstalld-byggforetag">Vad kostar en anställd i ett byggföretag?</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag – så gör du steg för steg</a>.</p>
`;

const A_SANK_ARBETSGIVARAVGIFT_UNGA_VAXA_STOD_2026: BlogPost = {
  _id: "code-"+"sank-arbetsgivaravgift-unga-vaxa-stod-2026",
  title: "Sänkt arbetsgivaravgift för unga och Växa-stöd 2026 – så mycket billigare blir lärlingen", slug: "sank-arbetsgivaravgift-unga-vaxa-stod-2026", locale: "sv",
  excerpt: "Två spår sänker arbetsgivaravgiften 2026 – den nya ungdomsnedsättningen och Växa-stödet. Vi räknar på vad en lärling faktiskt kostar och vilket stöd som lönar sig.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_SANK_ARBETSGIVARAVGIFT_UNGA_VAXA_STOD_2026_HTML,
  seoTitle: "Sänkt arbetsgivaravgift unga 2026 | ByggExp", seoDescription: "Så mycket billigare blir en lärling eller första anställd 2026 med ungdomsnedsättningen (20,81 %) och Växa-stödet (10,21 %). Räkneexempel för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:06:00.000Z", createdAt: "2026-08-19T10:06:00.000Z", updatedAt: "2026-08-19T10:06:00.000Z",
};

const A_KOSTNADSKONTROLL_BYGGPROJEKT_MARGINAL_HTML = `
<p>Marginalen fanns där när anbudet lämnades. Ändå är den borta när slutfakturan är skickad. Det är en av de vanligaste frustrationerna i byggföretag – och orsaken är sällan ett dåligt räknat anbud. Problemet är att leverantörsfakturor, material och ÄTA inte följs upp per projekt i realtid, utan först syns när bokslutet är klart och pengarna redan är spenderade. God <strong>kostnadskontroll i byggprojekt</strong> handlar därför inte om att räkna bättre en gång, utan om att mäta utfallet löpande mot kalkylen.</p>

<p>Börja med att lägga en realistisk kalkyl med rätt påslag – testa vår gratis <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator →</a> innan du sätter anbudspriset.</p>

<h2>Varför marginalen urholkas – de fyra läckorna</h2>
<p>Nästan all marginalförlust mellan anbud och slutfaktura går att härleda till fyra konkreta läckor:</p>
<ul>
<li><strong>Materialpriser stiger efter anbud.</strong> Ett fastprisanbud lämnat i mars byggs kanske i oktober. Utan indexreglering bär du hela prisökningen själv.</li>
<li><strong>ÄTA görs men debiteras aldrig.</strong> Beställaren ber om en ändring, arbetet utförs – men det skrivs aldrig ned formellt och hamnar inte på fakturan. Ren gratistid.</li>
<li><strong>Leverantörsfakturor konteras inte mot rätt projekt.</strong> Fakturan bokförs på ett samlingskonto, och ingen ser att just det här bygget redan sprängt materialbudgeten.</li>
<li><strong>Löneökningar äter fastpriset.</strong> Byggavtalet mellan Byggnads och Byggföretagen löper 1 maj 2025–30 april 2027 och följer märket på 6,4 % över perioden (3,4 % år ett, 3,0 % år två), varav 0,1 procentenhet per år avser höjd pensionsavsättning. Lönekostnaden stiger alltså mitt under byggtiden – en direkt marginalrisk i fleråriga fastprisprojekt utan indexklausul.</li>
</ul>

<h2>Kontera varje inköp per projekt – grunden för realtidskontroll</h2>
<p>Bokföringslagen kräver ändå att varje verifikation kan knytas till affärshändelsen (BFL 5 kap.). Ta det ett steg längre och kontera varje leverantörsfaktura och kvitto på ett projekt eller kostnadsställe. Då får du två saker samtidigt: lagenlig spårbarhet och realtidsuppföljning av projektets faktiska materialkostnad mot förkalkyl.</p>
<p>Skillnaden är avgörande. Utan projektkontering ser du materialkostnaden först vid bokslut – då är projektet slut och felet är gjort. Med kontering per projekt ser du redan i vecka tre att spillet ligger 15 % över kalkyl och kan agera medan bygget pågår. Det är denna kontering per projekt som ByggExp bygger på.</p>

<h2>ÄTA – den vanligaste marginalläckan</h2>
<p>Ändrings-, tilläggs- och avgående arbeten (ÄTA) regleras i standardavtalen AB 04 och ABT 06, och här förloras mest pengar av ren formalia. Två regler måste sitta:</p>
<ul>
<li><strong>Skriftlighetskravet (AB 04 kap 2 § 6).</strong> ÄTA ska beställas skriftligen. Kravet anses uppfyllt även om beställaren lämnar en ritning eller handling som i sig innefattar en ändring – men muntliga tillrop i bodarna räcker inte.</li>
<li><strong>Underrättelse utan dröjsmål (AB 04 kap 2 § 9).</strong> Entreprenören måste underrätta beställaren utan dröjsmål om att ett arbete är att betrakta som ÄTA. Görs det för sent riskerar du att helt förlora rätten till ersättning.</li>
</ul>
<p>ÄTA på löpande räkning ersätts enligt självkostnadsprincipen (AB 04 kap 6 §§ 9–10). Ersättningsgilla poster är bland annat material, arbetsledning, arbetare, hjälpmedel, underentreprenader, försäkringar och övriga kostnader – plus entreprenörarvode, som beräknas som ett procentpåslag på självkostnaden. Beställaren har rätt att granska originalverifikationer, och underlaget struktureras ofta via blankett LR06. Slutsatsen är enkel: koppla varje ÄTA till projektet direkt, med skriftlig beställning och underlag, annars försvinner både arbetet och betalningen.</p>

<h2>Fakturera rätt – omvänd byggmoms 2026</h2>
<p>Säljer du byggtjänster till ett annat företag inom byggsektorn – eller till någon som säljer tjänsten vidare – gäller omvänd betalningsskyldighet även 2026. Du lägger ingen moms på fakturan; köparen redovisar och betalar momsen själv. Fakturan måste innehålla en tydlig hänvisning till omvänd betalningsskyldighet samt köparens VAT-nummer.</p>
<p>Fel här kostar inte marginal direkt, men det ger rättelser, försenad betalning och skadad trovärdighet – och likviditetstapp om du felaktigt fakturerat med 25 % moms som måste krediteras. Bygg fakturamallen rätt från början med vår <a href="/sv/verktyg/faktura-mall">fakturamall →</a>.</p>

<h2>ROT 2026 – nya nivån påverkar arbetskostnaden du säljer</h2>
<p>Från 1 januari 2026 är ROT-avdraget tillbaka på 30 % av arbetskostnaden. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och är nu borta. Taket ligger kvar på 50 000 kr per person och år, och det gemensamma ROT+RUT-taket är 75 000 kr per år. RUT är oförändrat 50 %.</p>
<p>För dig som fakturerar privatkund betyder det att kundens nettopris stiger jämfört med 2025. Var därför tydlig i både offert och faktura om vad som är avdragsgill arbetskostnad kontra material – felaktig fördelning ger avslag på ROT och en missnöjd kund som får en oväntad restsumma att betala.</p>

<h2>Förkalkyl mot efterkalkyl – stäng loopen</h2>
<p>Marginalkontroll bygger på att förkalkylen (anbudskalkylen innan beslut) jämförs med efterkalkylen (verkligt utfall efter projektet). Nyckeltalen är täckningsbidrag (TB = särintäkt − särkostnad) och täckningsgrad (TB delat med särintäkt). Ett projekt utan efterkalkyl är ett projekt vars fel du upprepar – felprissättningen följer rakt in i nästa anbud.</p>
<p>Gör det till rutin att efterkalkylera varje avslutat projekt och mata tillbaka lärdomen: låg täckningsgrad på badrum betyder att timpriset eller materialpåslaget behöver justeras nästa gång, inte att du bjuder samma anbud igen och hoppas.</p>

<h2>Praktisk checklista</h2>
<ol>
<li>Stäm av leverantörsfakturor mot projekt varje vecka – inte varje kvartal.</li>
<li>För en ÄTA-logg med skriftlig beställning och underlag för varje ändring.</li>
<li>Uppdatera prognosen på slutkostnad löpande och jämför med anbudet.</li>
<li>Kontrollera att fakturor till byggföretag har omvänd moms och köparens VAT-nummer.</li>
<li>Efterkalkylera vid projektavslut och för in resultatet i nästa anbud.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggt kring kontering per projekt. Varje inköp och leverantörsfaktura konteras mot rätt projekt, så att den faktiska materialkostnaden följs mot kalkylen medan bygget pågår – inte först vid bokslut. ÄTA och material knyts till projektet så att inget arbete försvinner mellan bodarna och fakturan, och du ser täckningsbidraget växa fram i realtid. Det ersätter inte ett skriftligt ÄTA-avtal eller din revisor, men det gör att marginalen blir synlig medan du fortfarande kan påverka den.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är kostnadskontroll i ett byggprojekt?</h3>
<p>Det är att löpande mäta projektets faktiska kostnader – material, arbete, underentreprenader och ÄTA – mot förkalkylen medan bygget pågår, i stället för att upptäcka avvikelsen först i efterhand. Grunden är att kontera varje inköp per projekt.</p>
<h3>Varför förlorar man rätten till betalt för ÄTA?</h3>
<p>Enligt AB 04 kap 2 § 9 ska entreprenören underrätta beställaren utan dröjsmål om att ett arbete är ÄTA, och enligt kap 2 § 6 ska det beställas skriftligen. Missar du underrättelsen eller saknar skriftligt underlag riskerar du att helt förlora rätten till ersättning.</p>
<h3>Ska jag lägga moms på fakturan till ett annat byggföretag?</h3>
<p>Nej. Omvänd betalningsskyldighet gäller när du säljer byggtjänster till ett företag inom byggsektorn. Du fakturerar utan moms, hänvisar tydligt till omvänd betalningsskyldighet och anger köparens VAT-nummer. Köparen redovisar momsen.</p>
<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>30 % av arbetskostnaden, med tak på 50 000 kr per person och år. Det gemensamma ROT+RUT-taket är 75 000 kr per år. Den tillfälliga nivån på 50 % gällde endast delar av 2025.</p>

<h2>Kom igång</h2>
<p>Sätt rätt påslag redan i anbudet med vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator →</a> och fakturera korrekt med rätt momshantering via vår <a href="/sv/verktyg/faktura-mall">fakturamall →</a>. Vill du se hur inköp konteras per projekt och marginalen följs i realtid? <a href="/sv/contact">Boka en demo →</a></p>

<p>Relaterat: <a href="/sv/blog/leverantorsfaktura-bygg-projekt">Leverantörsfaktura per projekt i bygg</a>, <a href="/sv/blog/tackningsbidrag-byggforetag">Täckningsbidrag för byggföretag</a> och <a href="/sv/blog/attestering">Attestering av fakturor</a>.</p>
`;

const A_KOSTNADSKONTROLL_BYGGPROJEKT_MARGINAL: BlogPost = {
  _id: "code-"+"kostnadskontroll-byggprojekt-marginal",
  title: "Kostnadskontroll i byggprojekt – så håller du marginalen mellan anbud och slutfaktura", slug: "kostnadskontroll-byggprojekt-marginal", locale: "sv",
  excerpt: "Marginalen i anbudet försvinner ofta innan slutfakturan – här är de fyra läckorna och hur du täpper till dem med kostnadskontroll per projekt.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_KOSTNADSKONTROLL_BYGGPROJEKT_MARGINAL_HTML,
  seoTitle: "Kostnadskontroll byggprojekt | ByggExp", seoDescription: "Så håller du marginalen mellan anbud och slutfaktura: kontera inköp per projekt, debitera all ÄTA och stäng loopen med efterkalkyl. Praktisk guide för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:12:00.000Z", createdAt: "2026-08-19T10:12:00.000Z", updatedAt: "2026-08-19T10:12:00.000Z",
};

const A_MOMSAVDRAG_LATT_LASTBIL_PERSONBIL_BYGG_HTML = `
<p>Två skåpbilar står bredvid varandra hos återförsäljaren. Samma pris, samma totalvikt, båda registrerade som lätt lastbil. På den ena får du lyfta hela momsen vid köp – på den andra noll kronor. Skillnaden kan vara tiotusentals kronor, och den avgörs inte av registreringsbeviset utan av en luftspalt mellan förarhytt och lastutrymme. Det är den detaljen som skiljer en byggare som maxar momsavdraget från en som betalar full moms i onödan.</p>

<p>Innan du bokar in bilköpet, räkna på momsen på köp, leasing och drift med vår gratis <a href="/sv/verktyg/moms-kalkylator">moms-kalkylator -&gt;</a> så ser du svart på vitt vad valet av fordon kostar dig.</p>

<h2>Grundregeln: därför får du inte lyfta moms på personbilen</h2>
<p>I mervärdesskattelagen finns ett rakt avdragsförbud: moms får inte dras av vid köp av personbil. Det spelar ingen roll att bilen används i din momspliktiga byggverksamhet – huvudregeln säger nej. Full avdragsrätt vid köp gäller bara i ett fåtal verksamheter: återförsäljning (bilhandel), uthyrning, taxitrafik, transport av avlidna och körkortsutbildning. Driver du inte någon av dessa är personbilsmomsen spärrad.</p>
<p>Detta är utgångspunkten du måste ha klar för dig. Frågan för byggaren är därför inte <em>om</em> bilen används i jobbet, utan om fordonet momsmässigt räknas som personbil eller som en riktig lätt lastbil.</p>

<h2>Full avdragsrätt på riktig lätt lastbil</h2>
<p>Räknas fordonet som lätt lastbil i momslagen får du dra av hela momsen – både vid köp och vid leasing – så länge bilen används i momspliktig verksamhet. Två fordonstyper ger den fulla rätten:</p>
<ul>
<li>Pickup med öppet lastflak.</li>
<li>Skåpbil där förarhytten är en separat karosserienhet, skild från lastutrymmet med en luftspalt.</li>
</ul>
<p>Räkneexempel: en skåpbil med separat hytt kostar 400 000 kr plus moms. Momsen på 25 % blir 100 000 kr. Uppfyller bilen kriterierna och används i din momspliktiga verksamhet lyfter du hela det beloppet. Samma bil utan separat hytt – noll i avdrag vid köp. Det är där skillnaden på tiotusentals kronor uppstår.</p>

<h2>Fällan: skåpbilen som momsmässigt är en personbil</h2>
<p>Här sitter den vanligaste och dyraste missuppfattningen. I momslagen räknas nämligen en lastbil med skåpkarosseri och totalvikt högst 3 500 kg som <strong>personbil</strong> – och omfattas därmed av avdragsförbudet – utom om förarhytten utgör en separat karosserienhet.</p>
<p>Det avgörande tekniska kriteriet är luftspalten (luftspannet) mellan hytt och skåp. Finns en diagonal luftspalt som gör hytten till en egen enhet: full avdragsrätt. Saknas luftspalten och skåpet sitter ihop med hytten: personbilsreglerna gäller, oavsett att bilen står registrerad som lätt lastbil i trafikregistret.</p>
<p>Konsekvensen är att en helt vanlig skåpbil under 3,5 ton utan separat hytt ger <strong>0 % momsavdrag vid köp och bara 50 % vid leasing</strong>. Som det uttryckts i pressen: ett pappersark avgör om företagaren kan köpa rätt bil. Kontrollera alltså konstruktionen fysiskt innan du skriver på – ta inte registreringen som bevis på momsstatus.</p>

<h2>Leasing: 50 %-spärren på personbil och 100 mil-kravet</h2>
<p>Väljer du att leasa i stället för att köpa gäller andra siffror. På en personbil – och alltså på skåpbilen utan separat hytt – får du dra av högst 50 % av momsen på leasingavgiften. Två villkor måste vara uppfyllda:</p>
<ul>
<li>Bilen används i mer än ringa omfattning i momspliktig verksamhet, vilket i praktiken betyder mer än 100 mil per år.</li>
<li>100 mil-kravet måste vara uppfyllt <strong>varje beskattningsår</strong> – det räcker inte att det stämmer ett enstaka år.</li>
</ul>
<p>Kontrasten mot en riktig lätt lastbil är tydlig: där lyfter du hela momsen på leasingavgiften, inte halva. Skillnaden mellan 50 % och 100 % återkommer varje månad så länge kontraktet löper, vilket gör fordonsvalet ännu viktigare vid leasing än vid kontantköp.</p>

<h2>Driftskostnader – här får alla lyfta hela momsen</h2>
<p>En del av regelverket missas ofta, och den gäller till din fördel. På driftskostnader får du dra av <strong>hela momsen</strong> även för en personbil – förutsatt att bilen används, om än bara delvis, i momspliktig verksamhet. Det gäller alltså även skåpbilen som annars omfattas av avdragsförbudet vid köp. Till driftskostnaderna räknas bland annat:</p>
<ul>
<li>Drivmedel</li>
<li>Service och reparation</li>
<li>Underhåll</li>
<li>Besiktning och test</li>
</ul>
<p>Många byggföretag drar bara halva driftsmomsen av gammal vana eller för att man blandar ihop reglerna med leasingavgiften. Spara alla kvitton och underlag – här finns pengar att hämta oavsett hur bilen är momsklassad.</p>

<h2>På gång 2026: Förenklingsrådets förslag om alla lätta lastbilar</h2>
<p>Regelläget kan komma att förändras. Förenklingsrådet lämnade den 11 mars 2025 förslaget FR 2025-7 om att slopa kravet på separat förarhytt, så att <em>alla</em> lätta lastbilar under 3 500 kg – inklusive vanliga skåpbilar utan luftspalt – skulle ge full avdragsrätt. Föreslaget ikraftträdande var 1 januari 2026 och den uppskattade besparingen för företagen cirka 1,4 miljarder kronor per år. Bygg, service, installation, städ, fastighet och skogsbruk pekades ut som särskilt gynnade branscher.</p>
<p>Viktig brasklapp: detta är fortfarande ett <strong>förslag, inte beslutad lag</strong>. Per augusti 2026 finns inga verifierbara källor som bekräftar att förslaget antagits. Till dess att en proposition eller lagändring faktiskt trätt i kraft gäller personbilsreglerna för skåpbil utan separat hytt. Planerar du ett bilköp där utfallet hänger på den här reformen – kontrollera aktuellt läge direkt hos Skatteverket innan du bestämmer dig.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp fattar inga skattebeslut åt dig, men gör underlaget rätt från början. I moms-kalkylatorn räknar du snabbt fram momsbeloppet på köp, leasingavgift och drift så att du ser vad ett fordonsval faktiskt betyder i kronor innan du signerar. I den löpande faktureringen och bokföringen håller du isär in- och utgående moms, och du samlar kvitton på drivmedel, service och reparationer på ett ställe – redo när du ska lyfta hela driftsmomsen. Underlagen sparas strukturerat så att du klarar kravet på sju års arkivering utan pärmletande.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag lyfta momsen på en skåpbil under 3,5 ton?</h3>
<p>Bara om förarhytten är en separat karosserienhet med luftspalt mot lastutrymmet. Saknas luftspalten räknas skåpbilen som personbil i momslagen och du får 0 % avdrag vid köp och 50 % vid leasing, trots att den är registrerad som lätt lastbil.</p>

<h3>Räcker det att bilen står som lätt lastbil i registreringsbeviset?</h3>
<p>Nej. Registreringen i trafikregistret styr inte momsen. Det är fordonets konstruktion – separat hytt och luftspalt – som avgör om momsreglerna för lätt lastbil eller personbil gäller. Kontrollera fysiskt eller fråga återförsäljaren innan köp.</p>

<h3>Kan jag dra av momsen på bensin och service för en personbil?</h3>
<p>Ja. Hela momsen på driftskostnader som drivmedel, service, reparation, underhåll och besiktning är avdragsgill så länge bilen används i din momspliktiga verksamhet – även om bilen omfattas av avdragsförbudet vid köp.</p>

<h3>Betyder full momsavdragsrätt att bilen är skattefri privat?</h3>
<p>Nej. Momskategoriseringen styr bara momsen. Förmånsvärde och inkomstbeskattning är ett separat regelverk, och en lätt lastbil som används privat kan förmånsbeskattas även om den ger full moms.</p>

<h2>Kom igång</h2>
<p>Räkna på momsen innan du binder upp firman i ett bilköp eller leasingavtal med vår <a href="/sv/verktyg/moms-kalkylator">moms-kalkylator -&gt;</a>. Vill du se hur ByggExp hanterar moms, fakturering och kvittohantering i din vardag? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi upplägget för ditt byggföretag.</p>

<p>Relaterat: <a href="/sv/blog/servicebil-eller-formansbil">Servicebil eller förmånsbil</a>, <a href="/sv/blog/moms-hantverkare">Moms för hantverkare</a>, <a href="/sv/blog/debitera-servicebil-rot">Debitera servicebil och ROT</a>.</p>
`;

const A_MOMSAVDRAG_LATT_LASTBIL_PERSONBIL_BYGG: BlogPost = {
  _id: "code-"+"momsavdrag-latt-lastbil-personbil-bygg",
  title: "Momsavdrag på firmabilen: lätt lastbil vs personbil (2026)", slug: "momsavdrag-latt-lastbil-personbil-bygg", locale: "sv",
  excerpt: "Registreringen som lätt lastbil räcker inte – det är luftspalten mellan förarhytt och skåp som avgör om du lyfter hela momsen på firmabilen eller ingen alls.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/moms-preview.webp", contentHtml: A_MOMSAVDRAG_LATT_LASTBIL_PERSONBIL_BYGG_HTML,
  seoTitle: "Momsavdrag firmabil 2026 | ByggExp", seoDescription: "Lätt lastbil eller personbil momsmässigt? Luftspalten mellan hytt och skåp avgör om du lyfter 100 % eller 0 % moms på bygg-firmabilen. Så maxar du avdraget.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/moms-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:18:00.000Z", createdAt: "2026-08-19T10:18:00.000Z", updatedAt: "2026-08-19T10:18:00.000Z",
};

const A_VILKA_FORSAKRINGAR_BEHOVER_BYGGFORETAG_HTML = `
<p>Många byggföretagare tror att det finns <em>ett</em> lagkrav på företagsförsäkring. Det stämmer inte. I stället uppstår kraven från flera olika håll samtidigt: kollektivavtal, standardavtal som AB 04 och ABT 06, samt beställarnas egna upphandlingsvillkor. Resultatet blir att en byggfirma i praktiken måste ha flera försäkringar – men få kan rada upp exakt vilka. Den här artikeln ger dig en konkret checklista för 2026, med beloppen hållna generella så att den håller över tid.</p>

<p>Ska du samtidigt se över hur du prissätter och villkorar dina jobb? Börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> så att försäkrings- och ansvarsvillkoren följer med redan i offerten.</p>

<h2>Ansvarsförsäkring – grundskyddet mot skadeståndskrav</h2>
<p>Ansvarsförsäkringen är det första en byggfirma bör ha. Den träder in när ditt företag blir skadeståndsskyldigt för person- eller sakskada mot tredje man – exempelvis om en granne får sin egendom skadad eller någon utomstående skadas på arbetsplatsen. Utan den kan ett enda krav bli existenshotande.</p>
<p>När du arbetar enligt AB 04 eller ABT 06 räcker det inte med vilken nivå som helst. Standardavtalen kräver att ansvarsförsäkringen uppgår till minst 200 prisbasbelopp. Prisbasbeloppet för 2026 är fastställt till 59 200 kr, vilket innebär att kravet motsvarar cirka 11,8 MSEK. Försäkringen ska dessutom gälla i minst två år efter godkänd slutbesiktning. Notera att detta är ett avtalskrav och inte ett lagkrav – men i de flesta entreprenader är AB/ABT en förutsättning för att över huvud taget få uppdraget.</p>

<h2>Entreprenad- och allriskförsäkring – skydd för själva bygget</h2>
<p>Ansvarsförsäkringen skyddar mot krav utifrån. Entreprenad- eller allriskförsäkringen skyddar bygget i sig. Den täcker skador på arbeten, material, maskiner och verktyg under byggtiden – till exempel om en brand, storm eller vattenskada förstör det du redan uppfört. Skyddet gäller dessutom ytterligare två år efter godkänd besiktning för de skador du ansvarar för under garantitiden.</p>
<p>Enligt AB 04 (kap 5 § 22) och ABT 06 (kap 5 § 23) är entreprenören skyldig att teckna både allrisk- och ansvarsförsäkring. Byggherren blir automatiskt medförsäkrad. BKK (Byggandets Kontraktskommitté) har fastställt en minimiomfattning för dessa försäkringar i en bilaga till AMA AF, och de minimikraven gäller om parterna hänvisar till AMA AF i de administrativa föreskrifterna. Läs alltså kontraktshandlingarna innan du tecknar – omfattningen kan vara bestämd åt dig.</p>

<h2>Rättsskyddsförsäkring – hjälp vid tvister</h2>
<p>Tvister hör tyvärr till branschen. En rättsskyddsförsäkring täcker ombuds- och rättegångskostnader när du hamnar i konflikt med en beställare, leverantör, kund eller anställd. Den ingår ofta som en del av företagets grundskydd, men nästan alltid med ett kostnadstak och en rad undantag – vissa typer av tvister omfattas inte alls. Kontrollera taket och undantagen mot storleken på de projekt du normalt driver, så att skyddet räcker till en verklig process och inte bara ett inledande brevväxlande.</p>

<h2>Egendoms- och avbrottsförsäkring – skydda lokaler, lager och maskiner</h2>
<p>Har du egen verkstad, förråd eller ett lager av material och maskiner behöver du en egendomsförsäkring. Den ersätter skador från brand, inbrott och vattenläckor på det du äger. Kopplat till den finns avbrottsförsäkringen, som täcker intäktsbortfall om verksamheten tvingas stå still efter en skada – exempelvis om verkstaden brinner och du inte kan ta nya jobb under återuppbyggnaden. För firmor med betydande eget kapital i lokaler och utrustning är detta en central del av skyddet, inte ett tillägg att skjuta på.</p>

<h2>Krav via kollektivavtal – avtalsförsäkringar</h2>
<p>Har ditt företag kollektivavtal, som Byggavtalet mellan Byggföretagen och Byggnads, är du som arbetsgivare skyldig att teckna avtalsförsäkringarna inom avtalsområdet. Dessa administreras av AFA Försäkring, som ägs av LO, Svenskt Näringsliv och PTK, och omfattar bland annat TFA (trygghetsförsäkring vid arbetsskada) samt sjuk- och tjänstepensionslösningar. Detta är obligatoriskt för arbetsgivare med kollektivavtal och något helt annat än företagsförsäkringen – de två ersätter inte varandra.</p>

<h2>Lagkrav vid konsumententreprenad – färdigställandeskydd</h2>
<p>Här finns ett faktiskt lagkrav. När en konsument anlitar dig för att bygga nytt småhus – eller för vissa till- och ombyggnader – krävs ett färdigställandeskydd enligt PBL. Det kan vara antingen en försäkring eller en bankgaranti och ska säkra att bygget kan färdigställas även om något går fel. Vid till- och ombyggnad är det byggnadsnämnden som avgör om skydd krävs. Skyddet behövs inte när byggherren utför arbetet själv. Den tidigare byggfelsförsäkringen med tio års skydd mot dolda fel är däremot inte längre obligatorisk sedan 2014 – den är frivillig och kan tecknas separat.</p>

<h2>Checklista – så bör en byggfirma vara försäkrad 2026</h2>
<ul>
<li><strong>Ansvarsförsäkring</strong> – minst 200 prisbasbelopp och två års efterskydd om du jobbar enligt AB/ABT.</li>
<li><strong>Entreprenad-/allriskförsäkring</strong> – avtalsplikt enligt AB 04 (5:22) och ABT 06 (5:23), byggherren medförsäkrad.</li>
<li><strong>Rättsskyddsförsäkring</strong> – kontrollera tak och undantag mot dina projektstorlekar.</li>
<li><strong>Egendoms- och avbrottsförsäkring</strong> – för lokaler, lager, maskiner och intäktsbortfall.</li>
<li><strong>Avtalsförsäkringar hos AFA</strong> – obligatoriskt om du har kollektivavtal.</li>
<li><strong>Färdigställandeskydd (enligt lagen om färdigställandeskydd)</strong> – lagkrav vid konsumentbygge av småhus.</li>
<li><strong>Tillägg efter behov</strong> – maskin-, transport- och cyberförsäkring.</li>
</ul>

<h2>Vanliga misstag och råd</h2>
<p>Det vanligaste felet är underförsäkring – att belopp och omfattning inte hängt med när företaget vuxit. Ett annat är att aldrig läsa villkoren förrän en skada inträffar, och då upptäcka undantag eller självrisker som gör ersättningen mager. Självrisknivåerna i entreprenad- och färdigställandesammanhang kan vara betydande och kopplas ofta till prisbasbeloppet, så håll koll på vad just ditt bolag har avtalat. Stäm alltid av beställarens försäkringskrav innan du skriver kontrakt, och gå igenom försäkringsbrevet minst en gång per år.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tecknar inte dina försäkringar – det gör din mäklare eller ditt försäkringsbolag. Men ByggExp hjälper dig att få ordning på det som avgör vilket skydd du behöver: vilka avtal du jobbar under, vilka belopp dina projekt omfattar och vilka villkor du lovat beställaren. När offerter, avtal och underlag ligger samlat blir det enkelt att visa försäkringsgivaren rätt omsättning och riskbild, och att kontrollera att beställarens krav på ansvars- och entreprenadförsäkring faktiskt är uppfyllda innan du signerar. Du slipper leta i mejl när villkoren ska förnyas.</p>

<h2>Vanliga frågor</h2>
<h3>Är företagsförsäkring ett lagkrav för byggföretag?</h3>
<p>Nej, det finns inget generellt lagkrav på företagsförsäkring i Sverige. Kraven uppstår i stället via kollektivavtal, standardavtal som AB 04/ABT 06 och beställarnas upphandlingskrav. I praktiken kräver byggbranschen ändå ansvarsförsäkring för att du ska få uppdrag.</p>
<h3>Hur hög måste ansvarsförsäkringen vara?</h3>
<p>Enligt AB 04 och ABT 06 ska ansvarsförsäkringen uppgå till minst 200 prisbasbelopp, vilket för 2026 motsvarar cirka 11,8 MSEK, och gälla minst två år efter godkänd slutbesiktning. Exakta villkor varierar mellan bolag.</p>
<h3>När krävs färdigställandeskydd?</h3>
<p>Färdigställandeskydd är ett lagkrav enligt PBL när en konsument anlitar dig för nybyggnad av småhus, och för vissa till- och ombyggnader. Vid om- och tillbyggnad avgör byggnadsnämnden. Det krävs inte när byggherren bygger själv.</p>
<h3>Måste jag teckna avtalsförsäkringar?</h3>
<p>Om ditt företag har kollektivavtal, som Byggavtalet, är du skyldig att teckna avtalsförsäkringarna hos AFA Försäkring, däribland TFA vid arbetsskada. Detta gäller utöver den vanliga företagsförsäkringen.</p>

<h2>Kom igång</h2>
<p>Se till att försäkrings- och ansvarsvillkoren följer med redan när du lämnar pris – börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>. Vill du se hur ByggExp samlar avtal, offerter och projektunderlag på ett ställe? Boka en <a href="/sv/contact">demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/ansvarsforsakring-byggforetag">Ansvarsförsäkring för byggföretag</a>, <a href="/sv/blog/kreditforsakring-byggforetag">Kreditförsäkring för byggföretag</a>, <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>.</p>
`;

const A_VILKA_FORSAKRINGAR_BEHOVER_BYGGFORETAG: BlogPost = {
  _id: "code-"+"vilka-forsakringar-behover-byggforetag",
  title: "Vilka försäkringar behöver ett byggföretag? Komplett checklista för 2026", slug: "vilka-forsakringar-behover-byggforetag", locale: "sv",
  excerpt: "En konkret checklista över de försäkringar en svensk byggfirma bör ha 2026 – från ansvars- och entreprenadförsäkring till avtalsförsäkringar och färdigställandeskydd.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_VILKA_FORSAKRINGAR_BEHOVER_BYGGFORETAG_HTML,
  seoTitle: "Försäkringar byggföretag 2026 | ByggExp", seoDescription: "Vilka försäkringar behöver ett byggföretag? Komplett checklista 2026: ansvars-, entreprenad-, rättsskydds- och egendomsförsäkring – vad du faktiskt måste ha.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:21:00.000Z", createdAt: "2026-08-19T10:21:00.000Z", updatedAt: "2026-08-19T10:21:00.000Z",
};

const A_SKATTEVERKET_NEKAR_ROTAVDRAG_FORBEHALL_HTML = `
<p>Du har utfört jobbet, dragit av 30 % ROT direkt på fakturan och fått betalt av kunden för dennes del. Sedan kommer beskedet: Skatteverket nekar utbetalningen. Pengarna du redan räknat med kommer aldrig. Frågan blir plötsligt brännande – kan du kräva kunden på mellanskillnaden, eller får du stå för hela förlusten själv? Svaret avgörs nästan alltid av en enda sak: vad som står i ditt avtal. Är avtalet tyst om detta blir det du som utförare som förlorar pengarna, oavsett hur oskyldig du är i sammanhanget.</p>

<p>Innan du skriver nästa offert – räkna ut kundens verkliga arbetskostnad och ROT-belopp med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator -&gt;</a> så att både underlag och förbehåll blir rätt från början.</p>

<h2>Så fungerar fakturamodellen 2026</h2>
<p>Från 1 januari 2026 är ROT-avdraget åter 30 % av arbetskostnaden (inklusive moms), med ett tak på 50 000 kr per person och år. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och förlängdes inte i budgeten för 2026. Räknar du fortfarande med 50 % bygger du hela offerten på en felaktig siffra.</p>
<p>ROT och RUT delar på ett gemensamt tak 2026: sammanlagt högst 75 000 kr i skattereduktion per person och år, varav ROT får utgöra högst 50 000 kr. RUT beräknas som 50 % av arbetskostnaden. Använder kunden en del av utrymmet på RUT-arbeten minskar det som finns kvar för ROT – det finns alltså inget separat RUT-tak ovanpå ROT, utan posterna räknas ihop mot samma 75 000 kr.</p>
<p>I fakturamodellen drar ditt företag – som ska ha F-skatt – av ROT-beloppet direkt på fakturan mot kunden. Resten begär du från Skatteverket via e-tjänsten "Rot och rut – företag". Arbetet måste vara utfört och betalt av kunden, och betalningen ska vara elektronisk och spårbar, innan du ansöker. Ansökan om utbetalning ska lämnas senast 31 januari året efter att kunden betalade. Kom ihåg att endast arbetskostnaden är avdragsgill – material och resor räknas aldrig in.</p>

<h2>Huvudregeln: risken ligger på dig som utförare</h2>
<p>Det här är kärnan i hela problemet. Risken för att en ansökan om skattereduktion inte beviljas ligger enligt lagstiftaren på utföraren av arbetet. Det framgår av förarbetena och är en uttrycklig vilja – motiverat av att det är du som kontrollerar underlaget för avdraget. Du ansvarar för att förutsättningarna är uppfyllda.</p>
<p>Konsekvensen är obehaglig: om ditt avtal är tyst om vad som händer när ROT nekas, kan du inte i efterhand kräva kunden på det belopp som Skatteverket vägrade betala. För att över huvud taget ha rätt att fakturera mellanskillnaden måste du <strong>genom avtal förbehålla dig rätten</strong> att kräva köparen på ytterligare betalning om skattereduktionen uteblir. Och förbehållet måste finnas på plats redan vid avtalets ingående – text som du lägger till ensidigt på fakturan i efterhand binder inte en konsument.</p>

<h2>Därför nekar Skatteverket utbetalning</h2>
<p>Nekade utbetalningar beror sällan på slarv från din sida – oftast handlar det om kundens situation. De vanligaste orsakerna:</p>
<ul>
<li>Kunden äger inte bostaden när arbetet utförs.</li>
<li>Kunden har redan förbrukat sitt ROT-tak för året.</li>
<li>Kunden har för lågt skatteutrymme att reducera mot.</li>
<li>Betalningen skedde inte elektroniskt och spårbart.</li>
<li>Underlaget är felaktigt eller ofullständigt.</li>
</ul>
<p>Kunden ser själv sitt kvarvarande utrymme och saldo på "Mina sidor" hos Skatteverket. Problemet är att du sällan har insyn i kundens övriga ROT-jobb under året – någon annan hantverkare kan redan ha ätit upp taket.</p>

<h2>Rättsfallet som borde skrämma dig</h2>
<p>Ett mål i Svea hovrätt illustrerar vad som står på spel. En utförare hade räknat med att ROT-subventionen skulle täcka en del av entreprenaden och dragit av beloppet direkt på fakturan. Skatteverket återkrävde subventionen, och när utföraren vände sig till kunden för mellanskillnaden fann domstolen att avtalstexten var för otydlig om utförarens rätt till tilläggsbetalning. Resultatet: utföraren blev utan pengarna – en betydande del av entreprenaden, förlorad på ett par meningar i avtalet.</p>

<h2>Så skriver du en ROT-förbehållsklausul som håller</h2>
<p>En hållbar klausul uppfyller tre krav. Den ska finnas i avtalet vid avtalets ingående, den ska vara tydlig med att kunden betalar fullt pris om skattereduktionen nekas, och den ska koppla mellanskillnaden till dina ordinarie betalningsvillkor och förfallodag.</p>
<p>Ett exempel på formulering du kan utgå från:</p>
<p><em>"Det avtalade priset förutsätter att köparen beviljas skattereduktion (ROT) för arbetskostnaden. Om Skatteverket helt eller delvis nekar utbetalning av ROT-beloppet, oavsett orsak, förbinder sig köparen att betala motsvarande belopp direkt till utföraren. Sådan tilläggsbetalning förfaller 30 dagar efter fakturadatum enligt avtalets ordinarie betalningsvillkor."</em></p>
<p>Lägg in klausulen i offerten och entreprenadavtalet – inte först på slutfakturan. Det är vid avtalets ingående kunden ska förstå och acceptera risken.</p>

<h2>Checklista innan du drar ROT på fakturan</h2>
<ol>
<li>Stäm av kundens kvarvarande ROT-utrymme – be kunden kontrollera saldot på Mina sidor.</li>
<li>Verifiera att kunden äger bostaden där arbetet utförs – folkbokföring krävs inte, även ett fritidshus som kunden äger ger rätt till ROT.</li>
<li>Dokumentera arbetskostnaden separat från material och resor.</li>
<li>Säkerställ att kunden betalar elektroniskt och spårbart.</li>
<li>Skriv skriftligt avtal med ROT-förbehåll innan arbetet startar.</li>
</ol>
<p>Byggföretagen tillhandahåller dessutom en checklista, "Inför ett ROT-arbete", som stöd för att säkra förutsättningar och avtalsvillkor innan du sätter spaden i marken.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du offert och entreprenadavtal där ROT-förbehållet finns med redan från start, så att villkoret följer med hela vägen till fakturan i stället för att dyka upp för sent. Med <a href="/sv/verktyg/offert-mall">offertmallen</a> lägger du in förbehållsklausulen i det underlag kunden faktiskt godkänner, och med <a href="/sv/verktyg/faktura-mall">fakturamallen</a> håller du isär arbetskostnad och material så att ROT-underlaget blir korrekt. ROT-kalkylatorn räknar ut avdraget på rätt procentsats för 2026. ByggExp fattar inga beslut åt Skatteverket – men verktygen gör det svårare att missa förbehållet och underlaget som avgör om du får betalt.</p>

<h2>Vanliga frågor</h2>
<h3>Kan jag lägga till förbehållet på fakturan i efterhand?</h3>
<p>Nej. Ett förbehåll som du ensidigt lägger till på fakturan efter att avtalet ingåtts binder inte en konsument. Klausulen måste finnas i avtalet vid avtalets ingående, alltså i offert eller entreprenadavtal som kunden godkänner innan arbetet börjar.</p>
<h3>Vad händer om kunden vägrar betala mellanskillnaden?</h3>
<p>Har du ett tydligt förbehåll i avtalet har du en avtalsrättslig grund att kräva beloppet, ytterst via inkasso eller Kronofogden. Saknas förbehållet, eller är det otydligt, står du själv för förlusten – precis som i Svea hovrätt-målet.</p>
<h3>Gäller detta även RUT?</h3>
<p>Ja, samma riskfördelning gäller RUT-arbeten. Skillnaden är procentsatsen: RUT är 50 % av arbetskostnaden. ROT och RUT delar dessutom på samma gemensamma tak, sammanlagt 75 000 kr per person och år (varav ROT högst 50 000 kr) – RUT har alltså inget eget tak ovanpå ROT. Förbehållsklausulen bör täcka både ROT och RUT.</p>
<h3>Måste jag kolla kundens skatteutrymme?</h3>
<p>Du kan inte se det själv, men du bör be kunden kontrollera sitt kvarvarande utrymme och saldo på Mina sidor innan du drar av ROT. Förbehållsklausulen är din försäkring för de fall där utrymmet ändå inte räcker.</p>

<h2>Kom igång</h2>
<p>Skriv aldrig ett ROT-jobb utan förbehållsklausul. Börja med att räkna rätt i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a> och lägg in förbehållet i din <a href="/sv/verktyg/offert-mall">offertmall</a>. Vill du se hur ByggExp binder ihop offert, avtal och faktura med ROT-underlaget? <a href="/sv/contact">Boka en demo -&gt;</a></p>
<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – så gör du</a>, <a href="/sv/blog/rotavdrag-2026-nya-regler-foretag">ROT-avdraget 2026 – nya regler för företag</a>, <a href="/sv/blog/byggfaktura-checklista-rot">Byggfaktura med ROT – checklista</a>.</p>
`;

const A_SKATTEVERKET_NEKAR_ROTAVDRAG_FORBEHALL: BlogPost = {
  _id: "code-"+"skatteverket-nekar-rotavdrag-forbehall",
  title: "Skatteverket nekar rotavdraget – så skyddar du dig med förbehåll", slug: "skatteverket-nekar-rotavdrag-forbehall", locale: "sv",
  excerpt: "Nekar Skatteverket ROT-utbetalningen står utföraren för förlusten om avtalet är tyst. Så skriver du en förbehållsklausul som håller – plus reglerna för 2026.", tag: "ROT-avdrag",
  coverImageUrl: "/landing/verktyg/rot-avdrag-preview.webp", contentHtml: A_SKATTEVERKET_NEKAR_ROTAVDRAG_FORBEHALL_HTML,
  seoTitle: "Skatteverket nekar ROT? Skydda dig med förbehåll | ByggExp", seoDescription: "Nekar Skatteverket ROT-utbetalningen står du för förlusten – om avtalet är tyst. Så skriver du en förbehållsklausul som håller. Reglerna för 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/rot-avdrag-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:30:00.000Z", createdAt: "2026-08-19T10:30:00.000Z", updatedAt: "2026-08-19T10:30:00.000Z",
};

const A_EFTERKALKYL_BYGG_KALKYLUPPFOLJNING_HTML = `
<p>I en bransch med rörelsemarginaler på bara några få procent avgörs vinsten inte i anbudet — utan i uppföljningen. Under 2025 gick 1 719 byggföretag i konkurs enligt Creditsafe, en minskning med cirka 5 procent mot 2024, och trenden pekar mot fortsatt färre konkurser under 2026. Men för de flesta som ändå går omkull handlar det inte om för få jobb utan om jobb som räknades fel. Efterkalkylen är verktyget som visar var pengarna faktiskt tog vägen, så att nästa anbud bygger på verkligt utfall i stället för optimistiska antaganden.</p>
<p><a href="/sv/verktyg/efterkalkyl-mall">Ladda ner en färdig efterkalkyl-mall (PDF & Excel) -&gt;</a></p>

<p>Grunden i all uppföljning är en korrekt kostnad per timme och ett tydligt påslag. Börja med <a href="/sv/verktyg/paslag-marginal-kalkylator">vår gratis påslags- och marginalkalkylator -></a> för att lägga fast självkostnad och marginal innan du jämför mot utfallet.</p>

<h2>Vad är efterkalkyl — och skillnaden mot förkalkyl?</h2>
<p>Förkalkylen är den kalkyl du bygger anbudet på: uppskattade timmar, material, underentreprenörer och omkostnader. Efterkalkylen är samma poster fast med de siffror som verkligheten levererade. Kalkyluppföljning är att lägga dessa två bredvid varandra — inte som en engångsavstämning vid årsbokslutet, utan löpande under projektet så att du hinner reagera.</p>
<p>Fyra jämförelsevariabler bär hela analysen:</p>
<ul>
<li><strong>Timmar</strong> — budgeterade mot registrerade.</li>
<li><strong>Material</strong> — kalkylpris mot fakturerat.</li>
<li><strong>ÄTA</strong> — fakturerat mot ofakturerat.</li>
<li><strong>Självkostnad per timme</strong> — den timkostnad du faktiskt hade, inte den du antog.</li>
</ul>

<h2>Räkna rätt på timkostnaden först</h2>
<p>Den vanligaste feltänken är att räkna med en "ren" timlön. En verklig kostnad per arbetad timme byggs i lager. Utgå från avtalslönen — snittlönen i bygg ligger runt 39 775 kr/månad, och från löneperioden efter 30 april 2026 höjs lönerna med 6,85 kr/timme (cirka 1 192 kr/månad) enligt Byggavtalet. Ett anbud som prissatts på fjolårets lön underskattar kostnaden så snart jobbet löper förbi 1 maj.</p>
<p>Ovanpå lönen lägger du:</p>
<ul>
<li><strong>Arbetsgivaravgifter 31,42 %</strong> (full nivå 2026). Detta är det största dolda påslaget när en timlön ska bli en riktig timkostnad.</li>
<li><strong>Semesterlön minst 12 %</strong> enligt lag — men 13–13,2 % enligt Byggnads kollektivavtal.</li>
<li><strong>Verktyg, kringtid och restid</strong> som inte är fakturerbar men ändå kostar.</li>
</ul>
<p>Först när alla lager ligger på plats vet du vad en debiterad timme faktiskt måste täcka. Det är den siffran efterkalkylen ska jämföra mot — inte lönebeskedet.</p>

<h2>Datakällorna du redan har</h2>
<p>Du behöver sällan samla in ny data; du behöver koppla den du redan producerar till rätt projekt.</p>
<ul>
<li><strong>Personalliggaren</strong> är lagkrav när projektets totalkostnad överstiger 4 prisbasbelopp. Med prisbasbeloppet 59 200 kr för 2026 går gränsen vid 236 800 kr. Utöver att undvika Skatteverkets kontrollavgifter (2 500 / 12 500 / 25 000 kr) är in- och uttiderna en pålitlig källa till faktiska timmar per person och projekt.</li>
<li><strong>Leverantörsfakturor</strong> ger det verkliga materialutfallet — förutsatt att varje faktura konteras mot rätt projekt.</li>
<li><strong>ÄTA-loggen</strong> ger tilläggen som annars försvinner i marginalen.</li>
</ul>

<h2>Metoden steg för steg</h2>
<ol>
<li><strong>Lås förkalkylen.</strong> Spara anbudets antaganden oförändrade — den blir din mätsticka.</li>
<li><strong>Tidsregistrera per projekt och moment.</strong> Timmar utan moment går inte att analysera.</li>
<li><strong>Stäm av löpande.</strong> Vänta inte till slutbesiktning; en avvikelse i vecka tre är fortfarande möjlig att styra.</li>
<li><strong>Räkna avvikelsen i både kronor och procent</strong> per post. Procent visar var det svider mest relativt, kronor visar var det svider mest i plånboken.</li>
<li><strong>Dokumentera orsaken.</strong> En siffra utan förklaring hjälper inte nästa anbud.</li>
<li><strong>Mata tillbaka nyckeltalen</strong> — kr/kvm, timmar/moment, påslag — in i nästa förkalkyl.</li>
</ol>

<h2>Skilj marginal från kassaflöde</h2>
<p>Två saker förväxlas ofta med vinst i efterkalkylen, men rör bara likviditet och fakturaflöde:</p>
<p><strong>Omvänd byggmoms.</strong> När du säljer byggtjänster B2B till ett annat företag i byggsektorn är det köparen, inte du, som redovisar och betalar momsen. Fakturan bär ingen moms och ska hänvisa till omvänd skattskyldighet (markera "Omvänd skattskyldighet för byggtjänster gäller" samt köparens momsnummer). Det påverkar din kassa — inte din marginal.</p>
<p><strong>ROT-avdrag.</strong> Sedan 1 januari 2026 är ROT åter 30 % av arbetskostnaden (den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025). Maxbeloppet är 50 000 kr per person och år, inom ett gemensamt ROT+RUT-tak på 75 000 kr. ROT täcker enbart arbete — inte material, resor eller administration — och betalningsdatumet avgör vilket år som gäller. Även detta är en flödes- och fakturafråga, inte en post i den verkliga vinsten. Blanda inte ihop dem i efterkalkylen.</p>

<h2>ÄTA — det vanligaste marginalläckaget</h2>
<p>Ofakturerade ändrings- och tilläggsarbeten är oftast den enskilt största posten som efterkalkylen avslöjar. ÄTA regleras av standardavtalen AB 04 och ABT 06 och kräver skriftlig beställning samt separat ekonomisk reglering. Entreprenörens krav på ersättning ska framställas "utan oskäligt dröjsmål", med slutlig reglering vid slutbesiktning. Arbete som utförs på muntlig begäran och aldrig faktureras är ren förlust — och den syns tydligt först när du lägger utfört mot fakturerat i uppföljningen.</p>

<h2>Bygg en kalkyldatabas över tid</h2>
<p>Ett enskilt projekt visar var det gick fel en gång. Tio projekt visar mönster. Räkenskapsinformation ska bevaras i 7 år efter utgången av det kalenderår då räkenskapsåret avslutades, och sedan moderniseringen 2024 får den sparas i annat format än originalet (till exempel digitaliserade kvitton). Spara både för- och efterkalkyl systematiskt och använd de historiska nyckeltalen för att kalibrera påslag och timåtgång inför nästa anbud.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp samlar tid, leverantörsfakturor och ÄTA per projekt så att förkalkyl och utfall står bredvid varandra utan manuell hopsamling i kalkylark. Du registrerar timmar per moment, konterar fakturor mot rätt projekt och ser avvikelsen löpande — inte först vid bokslut. Verktyget räknar inte jobbet åt dig, men det gör datan du redan producerar användbar, så att nästa anbud vilar på egna nyckeltal i stället för magkänsla.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan förkalkyl och efterkalkyl?</h3>
<p>Förkalkylen är den beräkning du prissätter anbudet på — uppskattade timmar, material och omkostnader. Efterkalkylen är samma poster med verkligt utfall. Jämförelsen mellan dem, kalkyluppföljning, visar var marginalen läckte och vad du behöver justera nästa gång.</p>
<h3>Varför räcker det inte att titta på timlönen?</h3>
<p>En timlön blir en verklig timkostnad först när du lägger på arbetsgivaravgifter (31,42 % 2026), semesterlön (13–13,2 % enligt Byggavtalet) samt verktyg och kringtid. Räknar du på ren lön underskattar du kostnaden med ungefär hälften och tappar marginalen redan i anbudet.</p>
<h3>Påverkar ROT och omvänd byggmoms vinsten i efterkalkylen?</h3>
<p>Nej. Både ROT-avdraget (30 % av arbetskostnaden 2026) och omvänd byggmoms rör likviditet och fakturaflöde, inte den verkliga vinsten. De ska hanteras separat och inte blandas in i marginalanalysen.</p>
<h3>Var hittar jag de faktiska timmarna för uppföljningen?</h3>
<p>Personalliggaren, som är lagkrav över 236 800 kr (4 prisbasbelopp 2026), loggar in- och uttider per person och dag och är en pålitlig källa till verklig arbetstid på plats. Kombinerat med tidsregistrering per moment ger den underlaget du behöver.</p>

<h2>Kom igång</h2>
<p>Börja enkelt: lås förkalkylen på nästa jobb, registrera timmar per moment och räkna ut din verkliga självkostnad med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a>. Vill du se hur för- och efterkalkyl kan följas löpande i ett verktyg, <a href="/sv/contact">boka en demo</a> så visar vi upplägget på ett riktigt projekt.</p>

<p>Relaterat: <a href="/sv/blog/tackningsbidrag-byggforetag">Täckningsbidrag för byggföretag</a> och <a href="/sv/blog/leverantorsfaktura-bygg-projekt">Leverantörsfakturor i byggprojekt</a>.</p>
`;

const A_EFTERKALKYL_BYGG_KALKYLUPPFOLJNING: BlogPost = {
  _id: "code-"+"efterkalkyl-bygg-kalkyluppfoljning",
  title: "Efterkalkyl i bygg: så följer du upp kalkylen och räddar marginalen", slug: "efterkalkyl-bygg-kalkyluppfoljning", locale: "sv",
  excerpt: "Vinsten avgörs i uppföljningen, inte i anbudet. Så bygger du en efterkalkyl som jämför förkalkyl mot verkligt utfall på timmar, material och ÄTA — och kalibrerar nästa anbud.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_EFTERKALKYL_BYGG_KALKYLUPPFOLJNING_HTML,
  seoTitle: "Efterkalkyl bygg: kalkyluppföljning | ByggExp", seoDescription: "Så gör du efterkalkyl och kalkyluppföljning i byggföretaget: jämför förkalkyl mot utfall på timmar, material och ÄTA — och räkna rätt på timkostnaden.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:33:00.000Z", createdAt: "2026-08-19T10:33:00.000Z", updatedAt: "2026-08-19T10:33:00.000Z",
};

const A_RANTEFORDELNING_ENSKILD_FIRMA_BYGG_HTML = `
<p>Du driver en enskild byggfirma med hyggligt eget kapital i verksamheten – verktyg, en skåpbil, lite lager och pengar på kontot. Vinsten rullar in och du betalar egenavgifter på nästan 29 % plus kommunal skatt, kanske statlig skatt ovanpå det. Samtidigt finns en regel som varje år låter dig flytta en schablonmässig ränta på ditt egna kapital till kapitalbeskattning på platta 30 %. Den heter räntefördelning, och den är en av de mest bortglömda skattevinsterna för hantverkare med enskild firma.</p>

<p>Innan du sätter dig i deklarationen: räkna på hur mycket din vinst faktiskt tål. Testa vår gratis <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylator -&gt;</a> för att se vad som blir kvar efter kostnader – det är den vinsten räntefördelningen sedan hjälper dig beskatta smartare.</p>

<h2>Vad räntefördelning är – kort</h2>
<p>Räntefördelning är ett sätt att låta en del av näringsinkomsten beskattas som inkomst av kapital i stället för näring. Tanken är att du ska likställas med någon som i stället lagt sitt kapital i banken eller i aktier och fått avkastning beskattad med 30 %. Systemet har två sidor:</p>
<ul>
<li><strong>Positiv räntefördelning</strong> – frivillig. Har du positivt eget kapital i firman får du flytta en schablonränta på det kapitalet från näring (egenavgifter + progressiv skatt) till kapital (platt 30 %).</li>
<li><strong>Negativ räntefördelning</strong> – tvingande. Har du kraftigt negativt kapital, till exempel för att du tagit ut mer än du satt in, måste en del i stället beskattas hårdare.</li>
</ul>
<p>För de flesta byggare med ordning på ekonomin är det den positiva sidan som är intressant.</p>

<h2>Siffrorna för 2026 (verifierat mot Skatteverket och Riksgälden)</h2>
<p>Fördelningssatsen bygger på statslåneräntan den 30 november året före beskattningsåret. Riksgälden fastställde statslåneräntan den 30 november 2025 till <strong>2,55 %</strong>. Det ger för beskattningsåret 2026 (deklareras 2027):</p>
<ul>
<li><strong>Positiv räntefördelning: 8,55 %</strong> (statslåneräntan 2,55 % + 6 procentenheter).</li>
<li><strong>Negativ räntefördelning: 3,55 %</strong> (statslåneräntan 2,55 % + 1 procentenhet).</li>
</ul>
<p>Det finns golvregler: vid positiv räntefördelning anses statslåneräntan vara lägst 0 % (lägsta möjliga sats blir därmed 6 %), och vid negativ lägst 0,5 %. Som jämförelse var satserna för 2025 lägre – 7,96 % positiv och 2,96 % negativ – eftersom statslåneräntan då var 1,96 %. Kontrollera alltid aktuell sats mot Skatteverket innan du fyller i deklarationen, eftersom den ändras varje år.</p>

<h2>Nyheterna 2025 som gör det mer värt för hantverkare</h2>
<p>Från och med 1 januari 2025 blev reglerna märkbart mer generösa:</p>
<ul>
<li><strong>Beloppsgränsen på 50 000 kr för positiv räntefördelning är slopad.</strong> Tidigare fick du bara göra positiv räntefördelning om fördelningsbeloppet översteg 50 000 kr. Nu får du göra det så snart kapitalunderlaget är noll eller positivt – från första kronan.</li>
<li><strong>Gränsen för tvingande negativ räntefördelning höjdes från −50 000 kr till −500 000 kr.</strong> Det skyddar dig som lånefinansierat maskiner, bil eller större inköp och därför tillfälligt har lågt eller negativt bokfört kapital.</li>
</ul>
<p>Sammantaget betyder det att betydligt fler enskilda byggfirmor kan – och bör – använda positiv räntefördelning.</p>

<h2>Så räknas kapitalunderlaget i en byggverksamhet</h2>
<p>Fördelningsbeloppet är kapitalunderlaget gånger fördelningssatsen. Kapitalunderlaget är det justerade egna kapitalet i näringsverksamheten vid utgången av föregående räkenskapsår. Förenklat:</p>
<ul>
<li><strong>Plus:</strong> tillgångar som verktyg, maskiner, inventarier, lager, kassa och kundfordringar.</li>
<li><strong>Minus:</strong> skulder som banklån, billån och leverantörsskulder.</li>
<li><strong>Skattemässiga justeringar:</strong> återläggning av outnyttjat underskott, avdrag för tillfälliga kapitaltillskott, tillägg av sparat fördelningsbelopp och eventuell övergångspost (från 1995).</li>
</ul>
<p>En viktig poäng för byggare: ett lånefinansierat inventarie höjer inte underlaget netto. Köper du en grävmaskin för 300 000 kr på lån ökar både tillgångar och skulder lika mycket – det egna kapitalet står still. Det är kapital du själv skjutit till, eller vinst du låtit stå kvar i firman, som bygger underlaget.</p>

<h2>Konkret räkneexempel – bygg-egenföretagare</h2>
<p>Säg att du gjort en vinst på 500 000 kr och har ett justerat eget kapital på 350 000 kr vid förra bokslutet. Positiv räntefördelning för 2026:</p>
<ul>
<li>350 000 kr × 8,55 % = <strong>29 925 kr</strong> som flyttas från näring till kapital.</li>
<li>På den delen betalar du 30 % kapitalskatt = cirka 8 978 kr.</li>
<li>Hade samma 29 925 kr i stället beskattats som näring hade du betalat fulla egenavgifter (28,97 % för 2026) plus kommunal skatt – en marginal på ungefär 45–48 % vid den här inkomstnivån. Passerar din beskattningsbara förvärvsinkomst dessutom skiktgränsen på 643 000 kr (inkomstår 2026) tillkommer 20 % statlig skatt, och då landar marginalen en bit över 50 %.</li>
</ul>
<p>Skillnaden mellan runt 45–48 % marginal (eller över 50 % om du passerar skiktgränsen) och platta 30 % på nästan 30 000 kr blir flera tusen kronor i sänkt skatt – varje år, för ett par minuters extra arbete i deklarationen. Vill du se hur din timdebitering och vinst påverkar underlaget kan du testa vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator -&gt;</a>.</p>

<h2>Sparat fördelningsbelopp – vänta till bättre år</h2>
<p>Positiv räntefördelning är frivillig, och det du inte utnyttjar ett år får sparas som sparat fördelningsbelopp och användas senare. Det är guld värt i byggbranschen med ojämna år. Gör du ett förlustår eller ett lågår med låg marginalskatt finns det liten poäng att flytta inkomst till kapital – spara i stället beloppet och plocka fram det ett år när vinsten och marginalskatten är höga. Då blir varje krona du flyttar mer värd.</p>

<h2>Baksidan – vad du förlorar</h2>
<p>Det finns en avvägning. Inkomst som kapitalbeskattas via räntefördelning är <strong>inte pensions- eller sjukpenninggrundande</strong>. Den räknas alltså inte in i din PGI eller SGI. För en äldre företagare med redan intjänad pension spelar det liten roll. För dig som är ung, bygger pension och vill ha ett skydd vid sjukdom kan det vara värt att flytta mindre – eller inget alls vissa år. Väg den kortsiktiga skattevinsten mot det långsiktiga sociala skyddet.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är inte ett deklarationsprogram och räknar inte ut ditt kapitalunderlag åt dig – det gör din bokföring och din revisor. Men verktyget hjälper dig med det som avgör hur stor vinsten faktiskt blir: rätt priser, kontroll på marginalen och underlag som är lätta att stämma av. Med korrekt prissättning och tydlig uppföljning av vinst per projekt får du ett rättvisande resultat att bygga räntefördelningen på. Ju bättre koll på siffrorna under året, desto enklare blir det att fatta rätt beslut om positiv räntefördelning när deklarationen väl ska göras.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag använda positiv räntefördelning?</h3>
<p>Nej. Positiv räntefördelning är frivillig. Du kan välja att inte använda den ett visst år och i stället spara fördelningsbeloppet till ett år med högre vinst och marginalskatt. Negativ räntefördelning är däremot tvingande om ditt kapital är tillräckligt negativt.</p>

<h3>Vad är fördelningssatsen för 2026?</h3>
<p>Positiv räntefördelning är 8,55 % (statslåneräntan 2,55 % den 30 november 2025 plus 6 procentenheter). Negativ är 3,55 % (2,55 % plus 1 procentenhet). Satsen ändras varje år – kontrollera alltid aktuell sats mot Skatteverket.</p>

<h3>Lönar det sig alltid?</h3>
<p>Nästan alltid rent skattemässigt om du har positivt kapital och en vinst som beskattas högre än 30 % på marginalen. Men eftersom den kapitalbeskattade delen inte är pensions- eller sjukpenninggrundande kan yngre företagare vilja begränsa hur mycket de flyttar.</p>

<h3>Var i deklarationen gör jag räntefördelningen?</h3>
<p>Beräkningen görs i anslutning till NE-bilagan, och underlaget hanteras på räntefördelningsblanketten. De flesta bokföringsprogram och revisorer räknar fram kapitalunderlaget automatiskt – din uppgift är att kontrollera att det stämmer och att jämföra vinsten mot egenavgifterna.</p>

<h2>Kom igång</h2>
<p>Börja med att få rätt på vinsten – det är den räntefördelningen sedan optimerar. Räkna på dina priser i vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslag- och marginalkalkylator</a> och stäm av din timdebitering. Vill du se hur ByggExp kan ge dig löpande koll på vinst per projekt så att deklarationen blir enkel? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi hur det fungerar.</p>

<p>Relaterat: <a href="/sv/blog/egenavgifter-enskild-firma-bygg">Egenavgifter i enskild byggfirma</a>, <a href="/sv/blog/avdrag-enskild-firma-bygg">Avdrag i enskild firma för byggare</a> och <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggverksamhet?</a></p>
`;

const A_RANTEFORDELNING_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"rantefordelning-enskild-firma-bygg",
  title: "Räntefördelning i enskild byggfirma – sänk skatten 2026", slug: "rantefordelning-enskild-firma-bygg", locale: "sv",
  excerpt: "Räntefördelning är en av de mest bortglömda skattevinsterna för enskild byggfirma. Så funkar positiv räntefördelning 2026 – med sats, kapitalunderlag och räkneexempel.", tag: "Skatt",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_RANTEFORDELNING_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Räntefördelning enskild byggfirma 2026 | ByggExp", seoDescription: "Positiv räntefördelning låter dig beskatta en del av byggvinsten till 30 % i stället för egenavgifter. Se satsen 8,55 % för 2026 och ett räkneexempel.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T10:39:00.000Z", createdAt: "2026-08-19T10:39:00.000Z", updatedAt: "2026-08-19T10:39:00.000Z",
};

const A_KAKEL_KLINKER_ATGANG_VATRUM_HTML = `
<p>Att köpa för lite kakel är ett dyrare misstag än att köpa lite för mycket. Stillestånd på bygget medan du väntar på efterleverans, extra frakt och – värst av allt – en ny batch med synlig nyansskillnad kan äta upp hela marginalen på ett badrumsjobb. För dig som lämnar anbud handlar rätt materialåtgång inte om att gissa, utan om att räkna nettoyta, lägga på rätt spill och avrunda till hel kartong innan du sätter pris.</p>

<p>Räkna ytorna snabbt och rätt med <a href="/sv/verktyg/kvadratmeter-kalkylator">vår gratis kvadratmeter-kalkylator -&gt;</a> så har du nettoytan klar innan du börjar lägga på spill.</p>

<h2>Börja med nettoytan – mät varje vägg och golv för sig</h2>
<p>Nettoytan är den yta som faktiskt ska kaklas eller klinkras. Räkna varje vägg för sig som höjd × bredd och dra av dörr, fönster och ytor som inte ska kaklas. Golvet räknar du som längd × bredd. Har rummet en oregelbunden form delar du upp det i rektanglar och summerar – det ger ett säkrare underlag än att uppskatta hela ytan på en gång.</p>
<p>Separera alltid vägg och golv i beräkningen. Kaklet på väggen och klinkern på golvet har oftast olika format, och därmed olika spill. Ett storformat på golvet och ett mindre kakel på väggen kan inte slås ihop till en klumpsumma utan att du tappar precision där det kostar mest.</p>

<h2>Lägg på rätt spill – 10–15 % som standard, upp mot 20 %</h2>
<p>Spillet läggs på <strong>ovanpå nettoytan</strong>, aldrig på bruttoytan. Standardpåslaget för kakel och klinker i badrum är 10–15 %, och absolut minimum bör vara 10 %. Vid storformat, diagonalsättning eller mycket mönster ökar spillet mot 20 %.</p>
<p>Spillet uppstår framför allt vid:</p>
<ul>
<li>Kapning i hörn och vid övergångar mellan vägg och golv.</li>
<li>Håltagning för rör, blandare och avstängningsventiler.</li>
<li>Anpassning runt nischer, bänkar och golvbrunn.</li>
</ul>
<p>Formatet styr valet. Små plattor ger mindre spill per kap, men fler kap runt rör och hörn. Storformat ger färre kap men kasserar mer yta för varje snitt – därför behöver stora plattor och diagonalsättning en större marginal. Väljer du storformat på ett litet badrum med många genomföringar bör du lägga dig i det övre spannet direkt.</p>

<h2>Batch och nyans – därför beställer du allt på en gång</h2>
<p>Färgton och exakt mått avgörs av bränningen, alltså batchen. Beställer du hela mängden inklusive spill i samma order får du plattor från samma batch. En efterbeställning kommer nästan alltid från en annan bränning, med nyansskillnad och små måttavvikelser som syns i en färdig vägg.</p>
<p>Därför ska du alltid ha reservplattor kvar när jobbet är klart – kunden behöver dem för framtida reparationer, och de ska matcha resten av väggen. Ta med reservplattorna i anbudet så att de inte blir en kostnad du får bära själv i efterhand. Att räkna för snålt sparar inget; det flyttar bara risken till slutfasen där den blir dyrast.</p>

<h2>Åtgången påverkas av 2026 års våtrumsregler</h2>
<p>Branschreglerna inom Säkra Våtrum (BBV och GVK) uppdaterades 2026 och tillämpas på installationer som <strong>påbörjas efter 1 januari 2026</strong>. Reglerna påverkar direkt hur mycket golvklinker du behöver kapa och passa.</p>
<ul>
<li>Golvfall mot golvbrunn i duschplats och våtzon ska vara mellan 7 mm/m och 30 mm/m – det gäller både underlag och färdigt ytskikt. Övrigt golv ska ha minst 2 mm/m fall mot brunnen.</li>
<li>Avståndet mellan rörgenomföring och tak, vägg eller golv (tätskikt) ska vara minst 60 mm, och centrumavståndet minst 60 mm för rör upp till 32 mm.</li>
<li>Hela golvytan räknas som våtzon 1, och vägg inom 1 meter från dusch eller bad är våtzon 1.</li>
</ul>
<p>Fallet gör att fler golvplattor måste kapas och passas in mot brunnen, särskilt med storformat där en stor platta inte följer fallet lika lätt. Planera plattlayout och kap efter fallet – inte tvärtom – och lägg på spill därefter. Vill du fördjupa dig i regelverket, läs vår genomgång av <a href="/sv/blog/bbv-eller-gvk-vatrum">BBV eller GVK i våtrum</a>.</p>

<h2>Så bygger du materialposten i anbudet</h2>
<p>Ta ett konkret exempel: ett badrum med 6 m² golv och 20 m² vägg.</p>
<ul>
<li><strong>Golv:</strong> 6 m² netto + 15 % spill (storformat, fall mot brunn) = 6,9 m². Avrunda uppåt till hel kartong.</li>
<li><strong>Vägg:</strong> 20 m² netto + 10 % spill (mindre kakel, färre svåra kap) = 22 m². Avrunda uppåt till hel kartong.</li>
</ul>
<p>Avrundningen till hel kartong sker alltid uppåt – du kan inte köpa en halv kartong, och överskottet blir dina reservplattor. Ange spillprocenten öppet mot kund i anbudet så att materialposten är transparent, och separera alltid material och arbete. Behöver du dubbelkolla golvytan och kartongantalet använder du <a href="/sv/verktyg/golv-kalkylator">golv-kalkylatorn</a>. Vill du förstå spillpåslag mer i detalj finns en fördjupning i <a href="/sv/blog/spillprocent-bygg-material">spillprocent för byggmaterial</a>.</p>

<h2>ROT påverkar bara arbetet – inte kaklet</h2>
<p>ROT-avdraget 2026 är 30 % av arbetskostnaden, med tak på 50 000 kr per person och år. ROT och RUT delar ett gemensamt tak på 75 000 kr per person och år. Den tillfälliga höjningen till 50 % gällde bara 12 maj–31 december 2025 och är avslutad.</p>
<p>Viktigast för materialposten: ROT gäller <strong>enbart arbetskostnaden</strong>. Kakel, klinker, fix, tätskikt och fog är aldrig ROT-grundande utan betalas fullt av kunden. Ett fel i materialåtgången subventioneras alltså inte av något avdrag – det slår direkt mot kundens plånbok eller mot din marginal. Just därför är precisionen i kakelberäkningen en ren lönsamhetsfråga, inte en detalj.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du materialposten som separata rader – kakel, klinker, fix, tätskikt och fog – med kvantitet och pris, tydligt åtskilda från arbetskostnaden. Det gör att ROT-underlaget bara räknas på arbetet och att kunden ser materialkostnaden öppet. Du kan spara badrumsjobbet som mall och återanvända samma poststruktur nästa gång, så att spillpåslag och reservplattor aldrig glöms bort i stressen. Beräkningen av ytorna gör du i verktygen; ByggExp håller ihop anbudet, offerten och underlaget så att siffrorna följer med hela vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket spill ska jag räkna på kakel och klinker i badrum?</h3>
<p>Standard är 10–15 % ovanpå nettoytan, med 10 % som absolut minimum. Vid storformat, diagonalsättning eller mycket mönster och kapning ökar du mot 20 %.</p>
<h3>Varför ska jag beställa allt kakel på en gång?</h3>
<p>Färgton och mått bestäms av bränningen, alltså batchen. En efterbeställning kommer nästan alltid från en annan batch och ger synlig nyansskillnad. Beställ hela mängden inklusive spill i samma order och behåll reservplattor åt kunden.</p>
<h3>Är kakel och klinker ROT-grundande?</h3>
<p>Nej. ROT gäller enbart arbetskostnaden, 30 % med tak 50 000 kr per person och år 2026. Material som kakel, klinker, fix och tätskikt betalas fullt av kunden.</p>
<h3>Hur påverkar golvfallet materialåtgången?</h3>
<p>Fallet på 7–30 mm/m mot brunnen i duschzonen gör att fler golvplattor måste kapas och passas, särskilt med storformat. Planera layout och kap efter fallet och lägg spillpåslaget därefter.</p>

<h2>Kom igång</h2>
<p>Räkna nettoytan i <a href="/sv/verktyg/kvadratmeter-kalkylator">kvadratmeter-kalkylatorn</a>, lägg på 10–20 % spill, avrunda till hel kartong och separera material från arbete i anbudet. Vill du se hur materialposten och ROT-underlaget hänger ihop i ett skarpt badrumsanbud? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/spillprocent-bygg-material">Spillprocent för byggmaterial</a>, <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget</a>, <a href="/sv/blog/bbv-eller-gvk-vatrum">BBV eller GVK i våtrum</a>.</p>
`;

const A_KAKEL_KLINKER_ATGANG_VATRUM: BlogPost = {
  _id: "code-"+"kakel-klinker-atgang-vatrum",
  title: "Räkna rätt på kakel och klinker per m² – så prickar du badrumsanbudet", slug: "kakel-klinker-atgang-vatrum", locale: "sv",
  excerpt: "Så räknar du åtgång av kakel och klinker per m² med rätt spillpåslag, batchtänk och 2026 års våtrumsregler – utan att köpa för lite.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/golv-preview.webp", contentHtml: A_KAKEL_KLINKER_ATGANG_VATRUM_HTML,
  seoTitle: "Kakel & klinker åtgång i våtrum | ByggExp", seoDescription: "Räkna kakel och klinker per m² inklusive spill och kapning för badrumsanbudet. Undvik att köpa för lite – och tappa marginal på fel batch.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/golv-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:03:00.000Z", createdAt: "2026-08-19T11:03:00.000Z", updatedAt: "2026-08-19T11:03:00.000Z",
};

const A_ENTREPRENADFORSAKRING_ALLRISK_VAD_TACKER_HTML = `
<p>"Jag har ju en företagsförsäkring." Det är den vanligaste missuppfattningen bland svenska hantverkare och byggföretag – och den kan bli dyr. En ansvarsförsäkring ensam skyddar inte själva bygget om det brinner, blåser omkull eller blir bestulet. Två helt olika försäkringar behövs: en <strong>allriskförsäkring</strong> som skyddar entreprenaden, och en <strong>ansvarsförsäkring</strong> som skyddar er mot skadeståndskrav. Och enligt de vanligaste standardavtalen, AB 04 och ABT 06, är ni skyldiga att ha båda. Den här guiden reder ut vad entreprenadförsäkringen faktiskt täcker under pågående bygge, var luckorna sitter och vad kontraktet kräver 2026.</p>

<p>Ska du lämna anbud och vill ha ordning på försäkringsvillkoren redan i offerten? Börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -></a> så att rätt förutsättningar står svart på vitt från start.</p>

<h2>Entreprenadförsäkring vs ansvarsförsäkring – den avgörande skillnaden</h2>
<p>Skillnaden handlar om vad som skadas och vem som drabbas. Allriskförsäkringen är en <strong>egendomsförsäkring</strong>: den ersätter plötslig och oförutsedd fysisk skada på själva bygget, det monterade materialet och era hjälpmedel under byggtiden – oavsett vem som vållat skadan. Ansvarsförsäkringen är en <strong>skadeståndsförsäkring</strong>: den täcker person- och sakskada som drabbar tredje man, alltså utomstående, och som ni blir skadeståndsskyldiga för.</p>
<ul>
<li><strong>Allrisk (egendom):</strong> skada på det ni bygger och det ni bygger med. Exempel: en storm river ner en halvfärdig takstomme.</li>
<li><strong>Ansvar (skadestånd):</strong> skada ni orsakar utomstående. Exempel: en byggställning faller och skadar en parkerad bil på gatan.</li>
</ul>
<p>Gränsen går alltså vid vems egendom som skadas. Blir bygget självt förstört är det allrisken som gäller. Skadar ni någon annans person eller egendom är det ansvarsförsäkringen. Därför räcker inte den ena utan den andra – och en ren ansvarsförsäkring uppfyller inte försäkringsplikten enligt standardavtalen, eftersom den inte täcker bygget i sig.</p>

<h2>Vad täcker allriskförsäkringen under pågående bygge?</h2>
<p>Allriskförsäkringen skyddar entreprenaden mot plötsliga och oförutsedda händelser under byggtiden. Typiskt omfattas:</p>
<ul>
<li>Brand, storm, vatten och översvämning</li>
<li>Stöld och vandalism på arbetsområdet</li>
<li>Ras och sättningar</li>
<li>Handhavandefel och olyckshändelser under montage</li>
</ul>
<p>Skyddet gäller det monterade arbetet, byggmaterial som finns på arbetsområdet samt hjälpmedel och verktyg. Försäkringsbeloppet ska motsvara entreprenadens <strong>återanskaffningsvärde</strong> plus det arbete och material som beställaren tillhandahåller – underskatta inte den summan, för är beloppet för lågt riskerar ni underförsäkring vid en storskada.</p>
<p>Lika viktigt är att känna till undantagen. Allrisken ersätter normalt <em>inte</em> rena felaktigheter i det utförda arbetet eller kostnaden för att göra om ett felaktigt moment (omgörning), gradvis fukt- och mögelskada, eller förslitning. Den täcker den plötsliga, oförutsedda händelsen – inte konsekvensen av bristande utförande. Det är en viktig distinktion när ni bedömer om en skada verkligen är försäkringsbar eller om det handlar om ett kvalitetsfel ni själva ansvarar för.</p>

<h2>Ansvarsförsäkring – skyddet mot skadeståndskrav</h2>
<p>Ansvarsförsäkringen träder in när ert arbete orsakar person- eller sakskada på tredje man och ni blir skadeståndsskyldiga. Två klassiska exempel:</p>
<ul>
<li>Ett tappat verktyg från ett tak skadar en förbipasserande.</li>
<li>En vattenläcka under arbetet sprider sig till grannens lägenhet.</li>
</ul>
<p>Enligt AB 04 och ABT 06 får ansvarsförsäkringen inte understiga <strong>200 prisbasbelopp</strong> och ska gälla i minst två år efter godkänd entreprenad. Observera att ansvarsförsäkringen skiljer sig från skyddet för beställarens befintliga egendom – det är en vanlig men kostsam förväxling, som vi tar upp härnäst.</p>

<h2>Befintlig egendom / ROT-försäkring – den vanligaste luckan</h2>
<p>Här sitter den lucka som fäller flest byggföretag vid renovering och ombyggnad. Skada på den del av beställarens hus som <em>inte</em> ingår i ert jobb – till exempel resten av villan när ni bara byter ett badrum – täcks <strong>inte</strong> automatiskt av grundallrisken. Det kräver ett särskilt moment: "befintlig egendom" eller ROT-försäkring.</p>
<p>Flera bolags villkor går ett steg längre: de kräver att ni <strong>skriftligen i kontraktet</strong> åtagit er att försäkra beställarens befintliga egendom för att momentet överhuvudtaget ska gälla för projektet. Bakgrunden är att entreprenörens skadeståndsansvar för befintlig egendom enligt standardavtalen är begränsat till en schablon på 15 % av kontraktssumman, om inte högre försäkringsbelopp finns. Just därför behöver momentet tecknas separat och skrivas in i kontraktet. Extra kritiskt är detta vid ROT-arbeten i bebodda fastigheter, där en vattenskada snabbt kan spridas långt utanför själva arbetsområdet.</p>

<h2>När krävs försäkringen i kontraktet? AB 04 och ABT 06</h2>
<p>Försäkringsplikten är inte frivillig – den följer direkt av kap. 5 § 22 i både AB 04 och ABT 06. Där framgår att entreprenören <strong>ska</strong> ha både allriskförsäkring och ansvarsförsäkring. Det gör försäkringen till ett kontraktskrav i de vanligaste svenska standardavtalen.</p>
<ul>
<li><strong>Giltighetstid:</strong> Allrisken ska gälla under hela entreprenadtiden och i minst två år efter att entreprenaden godkänts. Ansvarsförsäkringen ska gälla i minst två år efter godkänd entreprenad.</li>
<li><strong>Belopp:</strong> Ansvarsförsäkringen får inte understiga minst 200 prisbasbelopp. Med 2026 års prisbasbelopp på 59 200 kr motsvarar det drygt 11,8 miljoner kronor – men skriv gärna "minst 200 prisbasbelopp" i era handlingar så att beloppet inte blir inaktuellt nästa år.</li>
<li><strong>Självrisk:</strong> Självrisken får inte överstiga 3 prisbasbelopp, vilket 2026 innebär ett tak på 177 600 kr, för vare sig allrisk eller ansvar. Marknadens standardsjälvrisker ligger ofta lägre, men avtalet sätter taket.</li>
<li><strong>Medförsäkring:</strong> Beställaren och huvudentreprenören är normalt automatiskt medförsäkrade i entreprenörens allrisk. Underentreprenörer omfattas endast om det uttryckligen åtagits skriftligt – annars måste varje UE ha egen försäkring.</li>
</ul>
<p>Beställare begär dessutom ofta in försäkringsbevis före byggstart. Kan ni visa upp rätt belopp och rätt moment redan vid anbud stärker det er trovärdighet.</p>

<h2>Vanliga misstag – och en snabb checklista</h2>
<p>De dyraste felen vi ser återkommer:</p>
<ul>
<li>Att tro att en ansvarsförsäkring täcker bygget – det gör den inte.</li>
<li>För lågt allriskbelopp, vilket ger underförsäkring vid storskada.</li>
<li>Att glömma momentet för befintlig egendom vid ROT – och att inte skriva in åtagandet i kontraktet.</li>
<li>Att förutsätta att UE är medförsäkrade när de inte är det skriftligt.</li>
<li>Att missa att skyddet ska gälla i två år efter godkänd entreprenad.</li>
</ul>
<p>Checklista inför nästa projekt: kontrollera (1) försäkringsbeloppen, (2) självrisken mot avtalets tak, (3) att momentet befintlig egendom finns och är inskrivet i kontraktet, (4) UE-täckningen, och (5) att giltigheten sträcker sig minst två år efter godkännande.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tecknar inte försäkringar – men vi hjälper er få ordning på handlingarna där försäkringskraven ska synas. I offerten kan ni tydligt ange vilka avtalsvillkor och försäkringskrav som gäller, och i kontraktet skriva in åtagandet om befintlig egendom så att momentet faktiskt gäller för projektet. Med samlade offerter, kontrakt och projekt på ett ställe blir det enkelt att visa upp rätt underlag för beställaren före byggstart. Läs alltid det specifika försäkringsbeviset – ByggExp strukturerar dokumenten, försäkringsbolaget avgör villkoren.</p>

<h2>Vanliga frågor</h2>
<h3>Räcker min företagsförsäkring för att uppfylla AB 04/ABT 06?</h3>
<p>Inte nödvändigtvis. Standardavtalen kräver både allrisk- och ansvarsförsäkring med bestämda belopp och giltighetstider. En grundläggande företagsförsäkring innehåller inte alltid allrisk på entreprenaden. Kontrollera försäkringsbeviset mot avtalets krav.</p>
<h3>Vad är skillnaden mellan allrisk och ansvarsförsäkring?</h3>
<p>Allrisken är en egendomsförsäkring som ersätter fysisk skada på själva bygget och materialet under byggtiden. Ansvarsförsäkringen är en skadeståndsförsäkring som täcker skador ni orsakar tredje man. Ni behöver båda.</p>
<h3>Täcks skador på beställarens befintliga hus?</h3>
<p>Inte automatiskt. Skada på den del av fastigheten som inte ingår i jobbet kräver ett särskilt moment – befintlig egendom eller ROT-försäkring – och flera bolag kräver att åtagandet skrivits in skriftligt i kontraktet.</p>
<h3>Hur länge måste försäkringen gälla?</h3>
<p>Allrisken ska gälla under hela entreprenadtiden och minst två år efter godkännande. Ansvarsförsäkringen ska gälla i minst två år efter godkänd entreprenad enligt AB 04 och ABT 06.</p>

<h2>Kom igång</h2>
<p>Rätt försäkring är både ett kontraktskrav och en konkurrensfördel när ni lämnar anbud. Se till att belopp, självrisk och moment stämmer redan i offerten med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, och boka en <a href="/sv/contact">demo</a> om ni vill se hur ByggExp håller ihop offert, kontrakt och projektdokumentation. Villkoren skiljer sig mellan bolag – läs alltid försäkringsbeviset och det specifika kontraktet innan ni skriver på.</p>

<p>Relaterat: <a href="/sv/blog/ansvarsforsakring-byggforetag">Ansvarsförsäkring för byggföretag</a>, <a href="/sv/blog/kreditforsakring-byggforetag">Kreditförsäkring för byggföretag</a> och <a href="/sv/blog/entreprenadkontrakt-mall">Entreprenadkontrakt – mall och guide</a>.</p>
`;

const A_ENTREPRENADFORSAKRING_ALLRISK_VAD_TACKER: BlogPost = {
  _id: "code-"+"entreprenadforsakring-allrisk-vad-tacker",
  title: "Entreprenadförsäkring – vad täcker den egentligen? Guide 2026 för byggföretag", slug: "entreprenadforsakring-allrisk-vad-tacker", locale: "sv",
  excerpt: "Många hantverkare tror att företagsförsäkringen räcker – men allrisk och ansvar är två olika skydd, och standardavtalen kräver båda.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_ENTREPRENADFORSAKRING_ALLRISK_VAD_TACKER_HTML,
  seoTitle: "Entreprenadförsäkring vad täcker | ByggExp", seoDescription: "Allrisk skyddar bygget, ansvar skyddar mot skadestånd – och AB 04/ABT 06 kräver båda. Så vet du vad din entreprenadförsäkring täcker 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:12:00.000Z", createdAt: "2026-08-19T11:12:00.000Z", updatedAt: "2026-08-19T11:12:00.000Z",
};

const A_KOLLEKTIVAVTALADE_FORSAKRINGAR_BYGG_HTML = `
<p>När ditt byggföretag tecknar kollektivavtal får du inte bara reglerad lön och arbetstid – du utlöser samtidigt ett helt paket av försäkringar och en tjänstepension för dina anställda. Många byggföretagare vet att de betalar in till Fora varje månad, men få kan svara på vad de faktiskt betalar för, vad medarbetarna får ut och var det går snett. Här går vi igenom systemet bakom Byggavtalet 2026: AFA Försäkring, Fora och de sex delar som följer med avtalet.</p>

<p>Vill du räkna på vad försäkringarna och pensionen lägger ovanpå lönen i din totala arbetsgivarkostnad? Använd <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator -&gt;</a> för att se hur påslagen slår per fakturerad timme.</p>

<h2>Systemet i korthet – AFA, Fora och Byggavtalet</h2>
<p>Det är lätt att blanda ihop aktörerna. Försäkringarna är tecknade av arbetsmarknadens parter – LO, Svenskt Näringsliv och PTK – som tillsammans äger <strong>AFA Försäkring</strong>, bolaget som står för själva försäkringsutbetalningarna. <strong>Fora</strong> är administratören och förmedlaren: det är hos Fora du som arbetsgivare tecknar ett enda försäkringsavtal, och det avtalet utlöser i sin tur samtliga försäkringar plus tjänstepensionen. Du behöver alltså inte teckna varje del för sig.</p>
<p>Ett byggföretag blir bundet på ett av två sätt: antingen genom medlemskap i Byggföretagen, som binder dig till Byggavtalet, eller genom att teckna ett <em>hängavtal</em> direkt med Byggnads. I båda fallen registreras försäkringsavtalet hos Fora, och du blir skyldig att varje år rapportera de faktiska lönerna (lönerapportering) så att premierna beräknas rätt.</p>

<h2>De sex delarna som ingår</h2>
<p>För arbetare omfattar paketet under Byggavtalet följande:</p>
<ul>
<li><strong>Avtalspension SAF-LO</strong> – tjänstepensionen, den enskilt största posten. Byggs upp under hela arbetslivet och betalas ut som pension.</li>
<li><strong>TFA</strong> – Trygghetsförsäkring vid arbetsskada. Ersätter personskada som inträffar på jobbet eller på resan till och från arbetet, och kan betala utöver den lagstadgade arbetsskadeförsäkringen.</li>
<li><strong>TGL</strong> – Tjänstegrupplivförsäkring. Ett skattefritt engångsbelopp till efterlevande om den anställde avlider före pension.</li>
<li><strong>AGS</strong> – Avtalsgruppsjukförsäkring. Fyller på sjukpenningen vid längre sjukdom.</li>
<li><strong>AGB</strong> – Avgångsbidrag vid uppsägning på grund av arbetsbrist.</li>
<li><strong>FPT</strong> – Föräldrapenningtillägg vid föräldraledighet, samt omställningsstöd via Trygghetsfonden (TSL) om anställningen upphör.</li>
</ul>

<h2>Vad det kostar dig 2026</h2>
<p>För 2026 är den totala premien för arbetare <strong>4,85 % av lönesumman</strong> på lön upp till 52 125 kr/månad. Så här fördelar den sig:</p>
<ul>
<li>Avtalspension SAF-LO: 4,50 %</li>
<li>Omställningsstöd (Trygghetsfonden): 0,34 %</li>
<li>TGL: 0,10 %</li>
<li>TFA: 0,01 %</li>
<li>Premiereduktion: -0,10 %</li>
<li>AGS, AGB, FPT och premiebefrielseförsäkring: 0 %</li>
</ul>
<p>Att flera AFA-premier står på 0 % beror på att AFA Försäkring har stark ekonomi – <strong>försäkringarna gäller fortfarande fullt ut</strong>, det är bara premien som är nollställd det här året. Det är ett återkommande mönster, inte ett permanent slopande, så räkna inte med noll för all framtid.</p>
<p>Brytpunkten går vid 7,5 inkomstbasbelopp, det vill säga 625 500 kr/år (inkomstbasbelopp 2026 = 83 400 kr), ungefär 52 125 kr/månad. På lönedelen <em>över</em> den nivån hoppar pensionspremien upp till 30 %, så totalpremien blir 30,01 % på den överskjutande delen. Två saker till att lägga på kalkylen: Fora drar en <strong>förmedlingsavgift på 1,5 %</strong> (inkl. moms) från pensionspremien, och på tjänstepensionen betalar du dessutom <strong>särskild löneskatt på 24,26 %</strong> ovanpå själva premien.</p>

<h2>Vad dina anställda faktiskt får</h2>
<p>Premierna blir mer begripliga när man ser vad de köper. Konkret för 2026:</p>
<ul>
<li><strong>TGL</strong>: ett skattefritt grundbelopp på 6 prisbasbelopp = 355 200 kr till efterlevande om den anställde avlider före pension, plus begravningshjälp på ca 0,5 prisbasbelopp (29 600 kr). Fullt skydd kräver minst 16 timmar/vecka; reducerat skydd gäller från 8 timmar/vecka.</li>
<li><strong>AGS</strong>: från dag 15 i sjukskrivningen läggs ungefär 10 % ovanpå Försäkringskassans sjukpenning (ca 80 %), på inkomst upp till 10 prisbasbelopp (592 000 kr). Observera – den anställde måste själv ansöka hos AFA, den betalas inte ut automatiskt.</li>
<li><strong>TFA</strong>: ersättning vid personskada i arbetet eller på resan till och från jobbet. Även här måste den skadade själv göra en anmälan till AFA.</li>
</ul>
<p>En viktig förändring: från 1 januari 2026 höjdes åldersgränsen i flera av avtalsförsäkringarna från 66 till 67 år, i takt med de höjda pensions- och LAS-åldrarna.</p>

<h2>Vanliga misstag byggföretag gör</h2>
<ul>
<li><strong>Slarv med lönerapporteringen</strong> – rapporterar du inte faktiska löner till Fora varje år blir premierna fel och pensionen underbetald.</li>
<li><strong>Tro att ersättning kommer automatiskt</strong> – AGS och TFA kräver att den anställde själv anmäler sjukdom respektive skada till AFA. Informerar du inte dem går de miste om pengar de har rätt till.</li>
<li><strong>Blanda ihop kollektiv</strong> – arbetare har SAF-LO via Fora, medan tjänstemän har ITP via Collectum. Det är två olika system som måste tecknas var för sig.</li>
<li><strong>Glömma sig själv som ägare</strong> – driver du som egenföretagare utan kollektivavtal omfattas du inte, och står helt utan detta skydd om du inte tecknar egna försäkringar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tecknar inte dina försäkringar åt dig – det gör du hos Fora – men vi hjälper dig att få kontroll på kostnaden. I <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a> kan du lägga in lön och sociala påslag och se hur avtalsförsäkringar, tjänstepension och särskild löneskatt påverkar vad varje timme faktiskt måste kosta för att gå ihop. Det gör det enklare att sätta rätt timpris och offert, i stället för att gissa på påslaget. Med korrekt löneunderlag i systemet blir det också lättare att stämma av mot den lönerapportering du ändå ska lämna till Fora.</p>

<h2>Vanliga frågor</h2>
<h3>Vilka försäkringar ingår i Byggavtalet?</h3>
<p>För arbetare ingår Avtalspension SAF-LO, TFA (arbetsskada), TGL (grupplivförsäkring), AGS (sjukförsäkring), AGB (avgångsbidrag) och FPT (föräldrapenningtillägg), plus omställningsstöd via Trygghetsfonden. Alla utlöses av ett enda försäkringsavtal hos Fora.</p>
<h3>Vad kostar de kollektivavtalade försäkringarna 2026?</h3>
<p>Totalt 4,85 % av lönesumman upp till 52 125 kr/månad, varav pensionen står för 4,50 %. På lönedelen över den nivån är pensionspremien 30 %. Utöver premien tillkommer särskild löneskatt på 24,26 % på pensionen och en förmedlingsavgift på 1,5 % till Fora.</p>
<h3>Varför står flera premier på 0 % 2026?</h3>
<p>AGS, AGB, FPT och premiebefrielseförsäkringen har premie 0 % för 2026 eftersom AFA Försäkring har stark ekonomi. Försäkringarna gäller fullt ut ändå – det är bara premien som är tillfälligt nollställd, och det kan ändras kommande år.</p>
<h3>Måste den anställde själv ansöka om ersättning?</h3>
<p>Ja. Både AGS vid sjukdom och TFA vid arbetsskada kräver att den anställde själv gör en anmälan till AFA Försäkring. Pengarna betalas inte ut automatiskt, så informera dina medarbetare om att anmäla i tid.</p>

<h2>Kom igång</h2>
<p>Se till att ditt försäkringsavtal med Fora är på plats, att du lönerapporterar varje år och att dina anställda vet att de själva anmäler skada och sjukdom till AFA. Räkna sedan igenom vad påslagen betyder för din prissättning i <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>. Vill du se hur ByggExp håller ihop löneunderlag, tid och offert? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Måste man ha kollektivavtal i byggbranschen?</a> och <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag – så gör du rätt</a>.</p>
`;

const A_KOLLEKTIVAVTALADE_FORSAKRINGAR_BYGG: BlogPost = {
  _id: "code-"+"kollektivavtalade-forsakringar-bygg",
  title: "Kollektivavtalade försäkringar i bygg – vad följer med Byggavtalet 2026", slug: "kollektivavtalade-forsakringar-bygg", locale: "sv",
  excerpt: "Byggavtalet utlöser ett helt försäkrings- och pensionspaket via AFA och Fora – här är de sex delarna, vad de kostar dig 2026 och de misstag som kostar mest.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/12salary.webp", contentHtml: A_KOLLEKTIVAVTALADE_FORSAKRINGAR_BYGG_HTML,
  seoTitle: "Kollektivavtalade försäkringar bygg | ByggExp", seoDescription: "AFA, TFA, TGL och avtalspension via Byggavtalet 2026: vilka försäkringar ingår, vad de kostar (4,85 %) och vad dina anställda faktiskt får.",
  seoImageUrl: `${SITE_URL}/landing/features/12salary.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:21:00.000Z", createdAt: "2026-08-19T11:21:00.000Z", updatedAt: "2026-08-19T11:21:00.000Z",
};

const A_REPARATION_VS_FORBATTRING_AVDRAG_BYGG_HTML = `
<p>För ett fastighetsägande byggbolag är gränsen mellan reparation och förbättring en av de största skattefrågorna på hela året. Landar en åtgärd i "reparation" får du dra av hela kostnaden direkt, samma beskattningsår. Landar den i "ombyggnad" ska den i stället aktiveras och skrivas av med kanske 2–4 procent per år — i praktiken över 25 till 50 år. Ett direktavdrag i år är alltid värt mer än samma avdrag utspritt på decennier, både för skatten och för likviditeten. Här går vi igenom hur du drar gränsen rätt och delar upp en blandad renovering så att årets avdrag blir så stort som lagen tillåter.</p>

<p>Behöver du snabbt räkna på moms, avdrag och nettokostnad per åtgärd hittar du våra kostnadsfria räknesnurror i <a href="/sv/verktyg">vår verktygslåda för byggföretag →</a>.</p>

<h2>Grundregeln: direktavdrag eller avskrivning</h2>
<p>Utgångspunkten finns i 19 kap. 2 § inkomstskattelagen (IL). Utgifter för <strong>reparation och underhåll</strong> av en byggnad får dras av omedelbart — direktavdrag samma år. Utgifter för <strong>ny-, till- och ombyggnad</strong> ska däremot aktiveras, läggas till byggnadens avskrivningsunderlag och dras av över tid genom värdeminskningsavdrag.</p>
<p>En viktig poäng som många missar: den skattemässiga hanteringen får skilja sig från bokföringen. Även om du i redovisningen fördelar en reparationsutgift över flera år genom avskrivning, får du enligt IL ändå yrka hela direktavdraget skattemässigt. Bokföring och beskattning är två olika spår, och det är det skattemässiga som avgör årets avdrag.</p>

<h2>Vad räknas som reparation och underhåll?</h2>
<p>Med reparation och underhåll avses arbeten som <strong>återställer byggnaden till dess ursprungliga skick</strong>, eller det skick byggnaden hade vid den senaste om- eller tillbyggnaden. Byte till motsvarande standard ger direktavdrag. Nyckelordet är samma standard som tidigare.</p>
<ul>
<li>Måla om fasad eller väggar i samma utförande.</li>
<li>Byta trasiga fönster mot likvärdiga fönster.</li>
<li>Lägga nytt tak av samma typ som det gamla.</li>
<li>Byta ut slitna golv, tätningar och installationer mot motsvarande.</li>
</ul>
<p>Så länge du återställer och inte höjer standarden är hela utgiften direktavdragsgill det år arbetet utförs.</p>

<h2>Fällan: värdehöjande standardförbättring</h2>
<p>Byter du upp till dyrare material eller högre standard i samband med en reparation delas kostnaden. Endast den del som motsvarar ett tänkt utbyte till <strong>ursprungsstandard</strong> är direktavdragsgill. Mellanskillnaden — själva standardhöjningen — räknas som förbättring och ska aktiveras och skrivas av.</p>
<p>Ett konkret exempel: du river ett slitet plastmattegolv och lägger in ekparkett i stället. Ett likvärdigt nytt plastmattegolv hade kostat 60 000 kr. Parketten kostar 150 000 kr. Då får du direktavdrag för 60 000 kr (återställande till ursprungsstandard) medan de 90 000 kr som utgör standardhöjningen ska aktiveras och skrivas av. Att göra den här uppdelningen medvetet och dokumenterat är helt avgörande — gör du det inte riskerar du att hela beloppet aktiveras.</p>

<h2>Det utvidgade reparationsbegreppet — byggbolagets bästa vän</h2>
<p>Här ligger den största avdragspotentialen. Enligt 19 kap. 2 § andra stycket IL finns det <strong>utvidgade reparationsbegreppet</strong>: ändringsarbeten som kan anses <em>normala i den skattskyldiges näringsverksamhet</em> behandlas som reparation och får direktavdras — trots att de rent tekniskt har ombyggnadskaraktär.</p>
<p>Skatteverket ger konkreta exempel på vad som omfattas:</p>
<ul>
<li>Flytta och omdisponera innerväggar för att anpassa en lokal till en ny hyresgäst.</li>
<li>Ta upp eller sätta igen fönster och dörrar vid en verksamhetsanpassning.</li>
<li>Anpassa lokalen till nya rutiner eller ny utrustning och maskiner.</li>
</ul>
<p>Villkoret är dubbelt: åtgärden ska vara normal i verksamheten <strong>och</strong> den får inte innebära en väsentlig förändring av byggnaden. Är båda uppfyllda får du direktavdrag även för det som annars hade varit ombyggnad.</p>

<h2>Var går gränsen — väsentlig förändring</h2>
<p>Undantaget från det utvidgade reparationsbegreppet är åtgärder som innebär en <strong>väsentlig förändring</strong> av byggnaden. De omfattas inte och får inte direktavdras. Det tydligaste exemplet är att byta byggnadens användningsområde — att göra om en industrilokal till kontor eller bostäder.</p>
<p>Bedömningen görs utifrån verksamhetens art samt arbetets karaktär och omfattning. Ändrad användning, större omdisponeringar och nybyggnadsliknande projekt faller utanför och måste aktiveras. Är fallet osäkert är det värt att stämma av mot Skatteverkets rättsliga vägledning och praxis innan du bokför — gränsdragningen är beloppsmässigt stor och prövas regelbundet.</p>

<h2>Glöm inte byggnadsinventarier</h2>
<p>Ett tredje spår som ofta glöms bort: <strong>byggnadsinventarier</strong>. Det är installationer och utrustning som direkt tjänar den verksamhet som bedrivs, inte byggnaden som sådan. De dras av som inventarier — räkenskapsenlig avskrivning med huvudregeln 30 procent eller kompletteringsregeln 20 procent linjärt — vilket är väsentligt snabbare än byggnadens 2–4 procent.</p>
<p>Att korrekt bryta ut byggnadsinventarier ur ett ombyggnadsprojekt tidigarelägger alltså avdragen rejält. En del av ett projekt som annars hade skrivits av över 25–50 år kan i stället skrivas av på några få år. Det förutsätter att du redan i projektet identifierar och särredovisar dessa poster.</p>

<h2>Avskrivningssatser och primäravdrag i korthet</h2>
<p>För den del som ändå ska aktiveras beräknas värdeminskningsavdrag enligt en avskrivningsplan med en procentsats per år, bestämd efter byggnadens ekonomiska livslängd. Enligt Skatteverkets allmänna råd SKV A 2005:5 är riktvärdet ungefär:</p>
<ul>
<li>Industribyggnad: cirka 4 procent per år.</li>
<li>Bostäder och småhus: cirka 2 procent per år.</li>
<li>Kontors-, förvaltnings- och liknande byggnader: normalt lägre än industri, runt 2 procent.</li>
</ul>
<p>För hyreshus finns dessutom <strong>primäravdrag</strong>: ett extra värdeminskningsavdrag på 2 procent per år under de första sex åren på utgifter för ny-, till- eller ombyggnad. Reglerna infördes den 1 januari 2019 och gäller utgifter för hyreshus som färdigställs från och med den 1 januari 2017.</p>

<h2>Så bokför du för att maxa avdraget i år</h2>
<p>Nyckeln vid en blandad renovering är att dela upp kostnaden per åtgärd. Praktisk checklista:</p>
<ol>
<li>Be entreprenören specificera fakturan per åtgärd i stället för en klumpsumma.</li>
<li>Dokumentera skicket före och efter — foton och beskrivning styrker att det rör återställande till ursprungsstandard.</li>
<li>Fördela varje post: reparation och underhåll samt ändringsarbeten enligt utvidgade reparationsbegreppet = direktavdrag; standardhöjning och till-/ombyggnad = aktiveras; installationer som tjänar verksamheten = byggnadsinventarier.</li>
<li>Bokför konsekvent — reparation av lokal på ett kostnadskonto (BAS 5170-serien) mot aktivering på anläggningstillgång (BAS 111x).</li>
<li>Spara underlagen. Räkenskapsinformation ska bevaras i 7 år.</li>
</ol>
<p>Det är den genomarbetade fördelningen per åtgärd — inte en efterhandsgissning — som maximerar årets avdrag och håller vid en granskning. Observera att de säljningsrelaterade reglerna om reparationer (femårsregeln) gäller privat bostadsförsäljning i inkomstslaget kapital och inte löpande näringsverksamhet, där reparationer dras av det beskattningsår utgiften uppkommer. Blanda inte ihop dem.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på underlaget medan projektet pågår. Du samlar kostnader, fakturaunderlag och foton per projekt och åtgärd, så att uppdelningen mellan direktavdrag, aktivering och byggnadsinventarier bygger på verklig dokumentation i stället för minne. När du sedan sätter momsen rätt på fakturan använder du <a href="/sv/verktyg/moms-kalkylator">vår moms-kalkylator</a> — särskilt viktigt vid omvänd byggmoms mellan byggföretag, där fakturan ställs ut utan moms och märks "Omvänd skattskyldighet för byggtjänster gäller" tillsammans med köparens momsnummer. ByggExp ersätter inte din redovisningskonsult, men gör att underlaget finns på plats när avdraget ska yrkas.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag direktavdrag om jag byter till bättre material?</h3>
<p>Bara delvis. Du får direktavdrag för den del som motsvarar ett tänkt utbyte till ursprungsstandard. Mellanskillnaden upp till den högre standarden räknas som värdehöjande förbättring och ska aktiveras och skrivas av. Dela därför upp kostnaden i fakturan.</p>

<h3>Vad menas med det utvidgade reparationsbegreppet?</h3>
<p>Enligt 19 kap. 2 § andra stycket IL får ändringsarbeten som är normala i din verksamhet — som att flytta innerväggar eller anpassa en lokal till ny hyresgäst — direktavdras trots att de har ombyggnadskaraktär. Undantaget är åtgärder som innebär en väsentlig förändring, till exempel att ändra byggnadens användningsområde.</p>

<h3>Kan skatt och bokföring skilja sig åt?</h3>
<p>Ja. Även om du i redovisningen skriver av en reparationsutgift över flera år får du enligt IL ändå yrka hela direktavdraget skattemässigt. Det är beskattningen som styr årets avdrag, inte hur posten hanteras i bokföringen.</p>

<h3>Varför lönar det sig att bryta ut byggnadsinventarier?</h3>
<p>Byggnadsinventarier skrivs av som inventarier, med huvudregeln 30 procent eller kompletteringsregeln 20 procent linjärt, i stället för byggnadens 2–4 procent. Att identifiera dem i projektet tidigarelägger avdragen rejält.</p>

<h2>Kom igång</h2>
<p>Börja med att specificera nästa renoveringsprojekt per åtgärd och räkna på moms och nettokostnad i <a href="/sv/verktyg">vår verktygslåda</a> och <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a>. Vill du se hur ByggExp håller ihop projektunderlag, kostnader och avdrag i praktiken? <a href="/sv/contact">Boka en demo →</a>. Den här artikeln är en översikt och ersätter inte Skatteverkets rättsliga vägledning eller individuell skatterådgivning — stäm alltid av osäkra gränsfall.</p>

<p>Relaterat: <a href="/sv/blog/verktyg-direktavdrag-eller-avskrivning">Direktavdrag eller avskrivning på verktyg och inventarier</a>, <a href="/sv/blog/avdrag-enskild-firma-bygg">Avdrag i enskild firma för byggföretag</a> och <a href="/sv/blog/bokforing-enskild-firma-bygg">Bokföring för enskild firma i byggbranschen</a>.</p>
`;

const A_REPARATION_VS_FORBATTRING_AVDRAG_BYGG: BlogPost = {
  _id: "code-"+"reparation-vs-forbattring-avdrag-bygg",
  title: "Reparation eller förbättring? Så maxar byggbolaget avdraget i år", slug: "reparation-vs-forbattring-avdrag-bygg", locale: "sv",
  excerpt: "Gränsen mellan reparation och förbättring avgör om byggbolaget får direktavdrag i år eller skriver av över decennier — så gör du fördelningen rätt.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_REPARATION_VS_FORBATTRING_AVDRAG_BYGG_HTML,
  seoTitle: "Reparation vs förbättring avdrag | ByggExp", seoDescription: "Direktavdrag för reparation eller avskrivning på förbättring? Så bokför byggbolaget rätt, utnyttjar utvidgade reparationsbegreppet och maxar årets avdrag.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:09:00.000Z", createdAt: "2026-08-19T13:09:00.000Z", updatedAt: "2026-08-19T13:09:00.000Z",
};

const A_PAMINNELSE_INKASSO_AVGIFT_BYGG_HTML = `
<p>Sena betalningar är vardag för hantverkare och byggföretag — och det kostar dig i både likviditet och tid. Det du inte alltid vet är att du <strong>har rätt till ersättning</strong> när kunden betalar för sent. Men beloppen är lagreglerade, och de skiljer sig beroende på om kunden är en privatperson (konsument) eller ett annat företag. Tre nyckelbelopp är värda att lära sig utantill: 60 kr, 180 kr och 450 kr. Här går vi igenom exakt vad du får ta ut 2026, i vilken ordning, och vad som krävs för att avgifterna ska hålla juridiskt.</p>

<p>Grunden för att kunna ta ut avgifterna är en korrekt faktura med tydliga betalningsvillkor och förfallodag — bygg en sådan med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall &rarr;</a>.</p>

<h2>De lagstadgade beloppen i klartext</h2>
<p>Rätten till ersättning för indrivningskostnader regleras i <strong>Lag (1981:739) om ersättning för inkassokostnader m.m.</strong> De exakta kronbeloppen fastställs däremot i <strong>Förordning (1981:1057)</strong>, inte i lagen själv. För 2026 gäller:</p>
<ul>
<li><strong>Påminnelseavgift: 60 kr per fordran.</strong> Endast <em>en</em> avgift per fordran — oavsett hur många påminnelser du skickar.</li>
<li><strong>Inkassokrav: 180 kr.</strong> Får tas ut när ett formellt skriftligt inkassokrav enligt inkassolagen skickats.</li>
<li><strong>Avbetalningsplan: 170 kr</strong> om gäldenären beviljas en uppgjord avbetalningsplan.</li>
<li><strong>Förseningsersättning (endast B2B): 450 kr</strong> enligt 4 a § — en schablon mot företag och myndigheter.</li>
</ul>

<h2>Privatperson (konsument): avgiften måste vara avtalad</h2>
<p>Mot en privatkund gäller strikta villkor. Du får bara ta ut <strong>påminnelseavgiften på 60 kr om den avtalats i förväg</strong> — kunden måste ha informerats om avgiften innan avtalet ingicks, till exempel i offerten, i dina allmänna villkor eller på fakturan före förfallodagen. Har du inte informerat om avgiften får du inte ta ut den.</p>
<p>Dessutom måste kravet faktiskt ha skickats. En <strong>skriftlig påminnelse respektive ett skriftligt inkassokrav måste ha gått iväg till kunden</strong> — du kan inte ta ut avgift för ett krav som aldrig sänts. Inkassokravet ska innehålla uppgift om borgenär, skuldbelopp och grunden för fordran.</p>
<p>Dröjsmålsränta mot konsument får tas ut <strong>tidigast 30 dagar efter att fakturan eller betalningskravet skickats</strong> (4 § räntelagen), om ni inte avtalat en förfallodag i förväg.</p>

<h2>Företag (B2B): förseningsersättning 450 kr</h2>
<p>Mellan näringsidkare — till exempel en underentreprenad-faktura mellan två byggföretag — gäller enklare regler till din fördel. Du har rätt till en <strong>förseningsersättning på 450 kr enligt 4 a § Lag (1981:739)</strong>. Den kräver <em>ingen</em> föravtalad avgift och <em>ingen</em> skickad påminnelse. Villkoret är att du har rätt till dröjsmålsränta, vilket du har när minst 30 dagars förfallotid passerat.</p>
<p>Viktigt är <strong>avräkningsregeln</strong>: tar du ut 450 kr i förseningsersättning kan du inte samtidigt ta ut 60 kr påminnelse + 180 kr inkasso + 170 kr avbetalningsplan för samma försening. Schablonen på 450 kr täcker indrivningskostnaderna upp till det beloppet. Överstiger dina <em>faktiska</em> kostnader 450 kr kan du dock kräva det överskjutande utöver schablonen.</p>

<h2>Dröjsmålsränta 2026</h2>
<p>Utöver avgifterna löper dröjsmålsränta. Enligt <strong>6 § räntelagen (1975:635)</strong> är räntan <strong>referensränta + 8 procentenheter</strong> om inget annat avtalats. Riksbankens referensränta för både första och andra halvåret 2026 är <strong>2,00 %</strong>, vilket ger en <strong>dröjsmålsränta på 10,00 % per år</strong>. Referensräntan fastställs två gånger per år, den 1 januari och den 1 juli, så satsen kan ändras varje halvår.</p>
<p><strong>Räkneexempel:</strong> En byggfaktura på 50 000 kr betalas 45 dagar för sent. Räntan blir 50 000 &times; 0,10 &times; (45/365) &asymp; <strong>616 kr</strong>. Är kunden ett företag lägger du dessutom till 450 kr i förseningsersättning. Räntan slutar inte löpa vid inkasso — den fortsätter genom inkassoärendet och vidare hos Kronofogden tills skulden är betald.</p>

<h2>Rätt ordning i praktiken</h2>
<p>För att avgifterna ska hålla — särskilt mot privatpersoner — behöver du följa en tydlig ordning:</p>
<ol>
<li>Skriv in betalningsvillkor, förfallotid och eventuell påminnelseavgift redan i <strong>offert och avtal</strong>.</li>
<li>Skicka en korrekt <strong>faktura med förfallodag</strong>.</li>
<li>Skicka en <strong>skriftlig påminnelse</strong> (60 kr om avgiften är avtalad med en konsument).</li>
<li>Skicka <strong>inkassokrav</strong> (180 kr) eller lämna ärendet till inkasso.</li>
<li>Ansök om <strong>betalningsföreläggande hos Kronofogden</strong> om kravet fortfarande inte betalas.</li>
</ol>
<p>Notera att ett <strong>ROT-jobb inte ändrar dessa regler</strong> — avgifter och ränta beräknas på den obetalda fordran precis som vid andra fakturor.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att lägga grunden så att avgifterna faktiskt håller. I <a href="/sv/verktyg/faktura-mall">fakturamallen</a> får du med förfallodag och betalningsvillkor från start, och du kan skriva in dina avgiftsvillkor så att kunden informerats i förväg — kravet för att en påminnelseavgift ska gälla mot en privatperson. Med tydliga underlag blir det enkelt att belägga när fordran förfallit, vilket du behöver om ärendet går vidare till inkasso eller Kronofogden. ByggExp driver inte in dina skulder åt dig, men ger dig dokumentationen som gör indrivningen möjlig. Fler mallar och kalkylatorer för din administration hittar du i <a href="/sv/verktyg">verktygslådan</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket får jag ta ut i påminnelseavgift 2026?</h3>
<p>Max 60 kr per fordran mot en konsument, och endast en avgift oavsett hur många påminnelser du skickar. Beloppet fastställs i Förordning (1981:1057). Avgiften får bara tas ut om den avtalats i förväg och en skriftlig påminnelse faktiskt skickats.</p>
<h3>Vad är skillnaden mellan påminnelseavgift och förseningsersättning?</h3>
<p>Påminnelseavgiften (60 kr) och inkassoavgiften (180 kr) används i första hand mot konsumenter och kräver att avgiften avtalats och att kravet skickats. Förseningsersättningen (450 kr) gäller mellan företag, kräver varken föravtal eller påminnelse, men kan inte kombineras med de itemiserade avgifterna för samma försening.</p>
<h3>Vad är dröjsmålsräntan för byggföretag 2026?</h3>
<p>10,00 % per år. Den beräknas som referensräntan (2,00 % under 2026) plus 8 procentenheter enligt 6 § räntelagen, om ni inte avtalat en annan sats. Riksbanken sätter referensräntan den 1 januari och den 1 juli varje år.</p>
<h3>Kan jag ta ut både 450 kr och inkassoavgift mot ett företag?</h3>
<p>Nej, inte för samma försening. Förseningsersättningen på 450 kr är en schablon som täcker indrivningskostnaderna upp till det beloppet. Överstiger dina faktiska kostnader 450 kr kan du dock kräva det som ligger utöver.</p>

<h2>Kom igång</h2>
<p>Skriv in avgiftsvillkor och förfallodag i avtalet redan från början — det är där rätten till ersättning avgörs. Kom igång med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall</a> eller boka en <a href="/sv/contact">demo</a> så visar vi hur du får ordning på underlagen inför inkasso.</p>

<p>Relaterat: <a href="/sv/blog/drojsmalsranta-2026">Dröjsmålsränta 2026</a>, <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>, <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a>.</p>
`;

const A_PAMINNELSE_INKASSO_AVGIFT_BYGG: BlogPost = {
  _id: "code-"+"paminnelse-inkasso-avgift-bygg",
  title: "Påminnelseavgift, inkassoavgift och dröjsmålsränta i byggbranschen — vad får du ta ut 2026?", slug: "paminnelse-inkasso-avgift-bygg", locale: "sv",
  excerpt: "Exakta lagstadgade belopp för påminnelseavgift, inkassokrav och dröjsmålsränta 2026 — och när de gäller mot privatperson respektive företag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_PAMINNELSE_INKASSO_AVGIFT_BYGG_HTML,
  seoTitle: "Påminnelseavgift & inkasso bygg 2026 | ByggExp", seoDescription: "Sen betalning? Så mycket får du ta ut 2026: påminnelseavgift 60 kr, inkasso 180 kr och förseningsersättning 450 kr — med skillnaden företag vs privatperson.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T13:12:00.000Z", createdAt: "2026-08-19T13:12:00.000Z", updatedAt: "2026-08-19T13:12:00.000Z",
};

const A_MOMSREGISTRERING_ARBETSGIVARREGISTRERING_BYGGFORETAG_HTML = `
<p>Innan din byggfirma kan skicka första fakturan eller betala ut första lönen måste ett antal anmälningar vara på plats hos Skatteverket. Fel eller försening här får konkreta följder: fakturan fastnar för att F-skatten inte är klar, momsen redovisas fel, eller så saknas arbetsgivarregistreringen den dag du betalar ut lön. Den här guiden går igenom registreringarna i rätt ordning – med de siffror och gränser som gäller 2026.</p>

<p>Innan du börjar kan det vara värt att räkna på moms och priser i lugn och ro med <a href="/sv/verktyg">våra gratis verktyg för byggföretag –&gt;</a> så att du vet hur omvänd byggmoms och ingående moms påverkar dina kalkyler.</p>

<h2>Grundregistreringen – F-skatt och företagsregistrering</h2>
<p>F-skatt, moms och arbetsgivarregistrering söker du i samma e-tjänst, "Registrera företag", på verksamt.se med BankID. Har du inte möjlighet att använda e-tjänsten går det också att skicka in blankett SKV 4620 (Skatte- och avgiftsanmälan) på papper. Det är alltså en enda anmälan där du kryssar i vilka delar som gäller dig.</p>
<p>Räkna med att Skatteverkets handläggning av F-skatt normalt tar 2–6 veckor, ofta 2–3 veckor för ett nystartat aktiebolag utan komplikationer. Skatteverkets registrering är avgiftsfri. Registrerar du aktiebolag hos Bolagsverket via e-tjänst kostar det däremot 1 900 kr (oförändrat 2026). Poängen är enkel: ansök i god tid före första uppdraget, så att F-skatten finns på plats när det är dags att fakturera. Vill du ha hela startprocessen i ordning har vi en separat guide om <a href="/sv/blog/starta-byggforetag-2026">att starta byggföretag 2026</a> och en om <a href="/sv/blog/f-skatt-hantverkare-ansokan">F-skatt och ansökan för hantverkare</a>.</p>

<h2>Ska byggfirman momsregistrera sig?</h2>
<p>Momsregistrering är obligatorisk först när den momspliktiga årsomsättningen överstiger 120 000 kr. Gränsen höjdes från 80 000 till 120 000 kr den 1 januari 2025 och gäller oförändrad 2026. Undantaget kräver dessutom att omsättningen inte har passerat 120 000 kr något av de två föregående kalenderåren.</p>
<p>I praktiken är detta sällan relevant för en byggfirma. Säljer du till andra företag väljer du normalt frivillig momsregistrering direkt från start – annars får du inte dra av ingående moms på verktyg, material, bil och andra inköp. Den avdragsrätten väger tungt i en verksamhet med stora materialkostnader. Behöver du snabbt kontrollera hur mycket moms som ligger på ett belopp använder du <a href="/sv/verktyg/moms-kalkylator">vår moms-kalkylator</a>.</p>
<p>Hur ofta du redovisar moms styrs av omsättningen: årsvis är tillåtet upp till 1 mkr, kvartalsvis vid 1–40 mkr, och månadsvis är obligatoriskt över 40 mkr. Byggföretag som ofta har överskott av ingående moms (se omvänd byggmoms nedan) kan medvetet välja kortare period för att få tillbaka momsen snabbare.</p>

<h2>Omvänd byggmoms – det som gör byggbranschen speciell</h2>
<p>Omvänd betalningsskyldighet, "omvänd byggmoms", är den regel som skiljer byggsektorn från de flesta andra branscher. Den är tvingande – inte valfri – när du säljer angivna byggtjänster, byggstädning eller uthyrning av arbetskraft i Sverige till en köpare som själv (mer än tillfälligt) säljer sådana byggtjänster. Då är det köparen, inte du, som redovisar och betalar momsen.</p>
<p>På fakturan anger du köparens momsregistreringsnummer plus texten "omvänd betalningsskyldighet". Det vanligaste missförståndet är att du därför inte behöver momsregistrera dig – fel. Du måste ändå vara momsregistrerad, både för att redovisa den omvända momsen korrekt och för att dra av din egen ingående moms på inköp.</p>

<h2>Arbetsgivarregistrering – innan första lönen</h2>
<p>Arbetsgivarregistrering krävs innan du betalar ut ersättning för arbete till någon som inte har godkänd F-skatt. Det gäller inte bara anställda utan även underentreprenörer och inhyrd arbetskraft som saknar F-skatt – anlitar du en sådan är du skyldig att göra skatteavdrag och betala arbetsgivaravgifter, vilket i praktiken förutsätter att du är registrerad som arbetsgivare. Kontrollera därför alltid motpartens F-skatt innan du skriver avtal.</p>
<p>Efter registrering ska du lämna arbetsgivardeklaration (AGI) varje månad, på individnivå, med redovisad lön, avdragen skatt och arbetsgivaravgifter. Full arbetsgivaravgift 2026 är 31,42 % (för personer födda 1959 eller senare).</p>
<p>Det finns två nedsättningar värda att känna till:</p>
<ul>
<li><strong>Ungdomsnedsättning:</strong> En tillfällig sänkning gäller från 1 april 2026 till 30 september 2027. För anställda som fyllt 18 men inte 23 år vid årets ingång (födda 2003–2007 under 2026) är avgiften 20,81 % på lön upp till 25 000 kr/mån; på belopp däröver gäller full avgift 31,42 %.</li>
<li><strong>Växa-stöd:</strong> Sänker avgiften till 10,21 % (endast ålderspensionsavgift) på lön upp till 35 000 kr/mån, i upp till 24 sammanhängande månader, för upp till två anställda vars anställning påbörjats efter 30 april 2024. Nytt från januari 2026: stödet rapporteras inte längre i lönekörningen/AGI utan söks retroaktivt – du betalar full avgift först och ansöker sedan om återbetalning hos Skatteverket. Stödet gäller inte den förste anställde i eget aktiebolag, det vill säga ägaren själv.</li>
</ul>
<p>Behöver du en bredare genomgång av vad det innebär att bli arbetsgivare har vi en separat artikel om <a href="/sv/blog/anstalla-personal-byggforetag">att anställa personal i byggföretag</a>.</p>

<h2>Personalliggare och ID06 – kraven på byggarbetsplatsen</h2>
<p>Elektronisk personalliggare krävs på byggarbetsplatser där byggverksamhetens totala kostnad överstiger 4 prisbasbelopp. Prisbasbeloppet 2026 är 59 200 kr, vilket ger gränsen 236 800 kr. Över den ska liggaren föras elektroniskt från första arbetsdagen. Byggherren anmäler byggarbetsplatsen till Skatteverket och ansvarar för utrustningen, medan entreprenören ansvarar för att liggaren förs.</p>
<p>Skatteverket får göra oanmälda kontrollbesök, och bristerna är dyra:</p>
<ul>
<li>12 500 kr i grundavgift plus 2 500 kr per person som är verksam men inte antecknad i liggaren.</li>
<li>25 000 kr om byggherren inte anmält att och var byggverksamheten ska bedrivas.</li>
<li>12 500 kr om byggherren inte tillhandahållit utrustning för att föra elektronisk personalliggare.</li>
</ul>
<p>ID06 är vanligt förekommande som system för identifiering och närvaroregistrering, men det är en branschstandard – inte ett lagkrav i sig. Lagkravet gäller själva personalliggaren.</p>

<h2>Kollektivavtal och försäkringar – inte Skatteverket, men lika viktigt</h2>
<p>Kollektivavtal är inte ett lagkrav men en stark branschnorm, och krävs ofta i upphandlingar. Byggavtalet mellan Byggföretagen och Byggnads gäller 2025–2027 med löneökningar på 6,4 % över perioden. Från 1 januari 2026 är traktamentet 450 kr/dag, och arbetstidsförkortningen ökar från 5 till 6 dagar per år efter 1 april 2026. Avtal tecknas antingen genom medlemskap i Byggföretagen eller via hängavtal direkt med Byggnads, och medför avtalsförsäkringar via Fora.</p>

<h2>Checklista i rätt ordning</h2>
<ol>
<li>Registrera bolaget eller den enskilda firman (aktiebolag via Bolagsverket, 1 900 kr).</li>
<li>Ansök om F-skatt och momsregistrering i e-tjänsten "Registrera företag" på verksamt.se.</li>
<li>Arbetsgivarregistrera dig innan första lönen – och innan du anlitar UE utan F-skatt.</li>
<li>Sätt upp rutin för momsredovisning och månatlig AGI.</li>
<li>Teckna kollektivavtal och avtalsförsäkringar (Byggföretagen eller hängavtal + Fora).</li>
<li>Ordna personalliggare och eventuellt ID06 före byggstart på arbetsplatser över 236 800 kr.</li>
</ol>
<p>De vanligaste misstagen är att fakturera innan F-skatten är klar, att tro att omvänd byggmoms gör momsregistrering onödig, och att betala ut ersättning till någon utan F-skatt utan att vara arbetsgivarregistrerad. Är du osäker på gränsdragningarna – ta en tidig kontakt med en redovisningskonsult, det är billigare än en kontrollavgift.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp sköter inte själva registreringen hos Skatteverket åt dig – det gör du i verksamt.e-tjänsten. Men när registreringarna är på plats hjälper ByggExp dig att hålla ordning på det som följer av dem: fakturor med korrekt momshantering och rätt text vid omvänd byggmoms, samlade underlag för moms- och arbetsgivardeklaration, och tidrapporter per projekt som ger dig kontroll på arbetskostnaden. Verktygen under <a href="/sv/verktyg">/sv/verktyg</a> är gratis att använda direkt, utan konto, så att du kan räkna på moms och priser redan innan bolaget är registrerat.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag momsregistrera mig om jag bara fakturerar andra byggföretag med omvänd byggmoms?</h3>
<p>Ja. Även när köparen redovisar momsen enligt omvänd betalningsskyldighet måste du som säljare vara momsregistrerad – dels för att redovisa korrekt, dels för att kunna dra av ingående moms på dina egna inköp av material, verktyg och bil.</p>
<h3>När måste byggfirman arbetsgivarregistrera sig?</h3>
<p>Innan du betalar ut ersättning för arbete till någon som saknar godkänd F-skatt. Det gäller både anställda och underentreprenörer eller inhyrd personal utan F-skatt. Efter registrering lämnar du arbetsgivardeklaration (AGI) på individnivå varje månad.</p>
<h3>Vad är arbetsgivaravgiften för byggföretag 2026?</h3>
<p>Full avgift är 31,42 % för personer födda 1959 eller senare. För anställda 18–22 år gäller 20,81 % på lön upp till 25 000 kr/mån från 1 april 2026, och Växa-stödet sänker avgiften till 10,21 % upp till 35 000 kr/mån i högst 24 månader för upp till två anställda – men söks retroaktivt från 2026 och gäller inte ägaren i eget AB.</p>
<h3>När krävs elektronisk personalliggare på bygget?</h3>
<p>När byggverksamhetens totala kostnad överstiger 4 prisbasbelopp, vilket 2026 är 236 800 kr. Då ska liggaren föras elektroniskt från första arbetsdagen. Byggherren anmäler arbetsplatsen och ansvarar för utrustningen; entreprenören för själva liggaren.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna igenom din moms och prissättning i <a href="/sv/verktyg">våra gratis byggverktyg</a> och testa <a href="/sv/verktyg/moms-kalkylator">moms-kalkylatorn</a> innan du sätter upp fakturarutinerna. Vill du se hur ByggExp kan hålla ihop fakturor, moms och tidrapporter för din firma? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>, <a href="/sv/blog/f-skatt-hantverkare-ansokan">F-skatt för hantverkare – så ansöker du</a>, <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a>.</p>
`;

const A_MOMSREGISTRERING_ARBETSGIVARREGISTRERING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"momsregistrering-arbetsgivarregistrering-byggforetag",
  title: "Momsregistrering och arbetsgivarregistrering för byggföretag – steg för steg 2026", slug: "momsregistrering-arbetsgivarregistrering-byggforetag", locale: "sv",
  excerpt: "En konkret genomgång av vilka registreringar byggfirman måste ha på plats hos Skatteverket innan första jobbet och första anställningen – i rätt ordning.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_MOMSREGISTRERING_ARBETSGIVARREGISTRERING_BYGGFORETAG_HTML,
  seoTitle: "Moms & arbetsgivare byggföretag | ByggExp", seoDescription: "Så registrerar byggfirman moms, F-skatt och arbetsgivare hos Skatteverket – checklista, omvänd byggmoms, arbetsgivaravgift 2026 och personalliggare.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T15:09:00.000Z", createdAt: "2026-08-19T15:09:00.000Z", updatedAt: "2026-08-19T15:09:00.000Z",
};

const A_FARDIGSTALLANDEGRAD_VINSTAVRAKNING_BYGGPROJEKT_HTML = `
<p>Ett byggbolag som drar igång ett fastprisuppdrag i november och slutför det i mars måste bestämma sig: ska hela vinsten redovisas det år projektet blir klart, eller ska den fördelas över de månader arbetet faktiskt pågår? Valet mellan successiv vinstavräkning och färdigställandemetoden avgör om resultatet hoppar kraftigt mellan åren eller jämnas ut. Fel metod – eller rätt metod fel tillämpad – ger en missvisande årsredovisning, fel periodiserad skatt och obekväma frågor vid revision och bankfinansiering. Reglerna styrs av K2 och K3 från Bokföringsnämnden, och en viktig nyhet gäller för räkenskapsår som inleds efter den 31 december 2025.</p>

<p>Innan du väljer metod behöver du ha ordning på kalkylen för varje projekt – testa vår gratis <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator</a> för att sätta rätt totalpris och beräknad totalkostnad, som är själva grunden i färdigställandegraden.</p>

<h2>Två metoder för pågående arbeten till fast pris</h2>
<p>För uppdrag till fast pris finns två vägar. <strong>Huvudregeln</strong> är successiv vinstavräkning (percentage-of-completion): intäkter och kostnader redovisas löpande i takt med färdigställandegraden på balansdagen. <strong>Alternativregeln</strong> är färdigställandemetoden (completed-contract): hela vinsten tas först när uppdraget är väsentligen färdigt.</p>
<ul>
<li><strong>När intäkten redovisas:</strong> Successiv vinstavräkning – löpande under projektet. Färdigställandemetoden – först vid färdigställandet.</li>
<li><strong>Resultateffekt:</strong> Successiv vinstavräkning jämnar ut resultatet mellan åren. Färdigställandemetoden ger hopp – noll under arbetet, hela vinsten på slutåret.</li>
<li><strong>Komplexitet:</strong> Successiv vinstavräkning kräver löpande projektuppföljning och tillförlitliga kalkyler. Färdigställandemetoden är enklare att administrera.</li>
</ul>
<p>Uppdrag på <strong>löpande räkning</strong> är en annan sak – de redovisas alltid enligt huvudregeln i takt med utfört arbete, inklusive ofakturerad upparbetad tid på balansdagen. Det förutsätter ett avtalat pris per tidsenhet. Den gamla fakturametoden för löpande räkning är sedan tidigare borttagen ur K2 och K3.</p>

<h2>Så räknar du färdigställandegrad</h2>
<p>Färdigställandegraden beräknas normalt som nedlagda utgifter på balansdagen dividerat med totalt beräknade utgifter för hela uppdraget. Andelen multipliceras sedan med avtalad total intäkt för att få periodens redovisade intäkt.</p>
<p>Ett konkret exempel: ett projekt har ett avtalspris på 5 mkr och en beräknad total kostnad på 4 mkr. På balansdagen har du lagt ned 3 mkr i faktiska kostnader.</p>
<ul>
<li>Färdigställandegrad: 3 mkr / 4 mkr = <strong>75 %</strong></li>
<li>Redovisad intäkt: 75 % × 5 mkr = <strong>3,75 mkr</strong></li>
<li>Redovisat resultat hittills: 3,75 mkr − 3 mkr = <strong>0,75 mkr</strong></li>
</ul>
<p>En vanlig och kostsam felkälla: bara <strong>faktiskt förbrukade resurser</strong> ska räknas in i nedlagda utgifter. Material som köpts in och ligger kvar ostört på bygget hör inte hit – att räkna med det blåser upp färdigställandegraden och tidigarelägger intäkt som ännu inte är intjänad.</p>

<h2>Villkoret &quot;tillförlitligt sätt&quot;</h2>
<p>Successiv vinstavräkning får bara tillämpas om uppdragets ekonomiska utfall kan beräknas på ett tillförlitligt sätt. Det kräver intern ekonomisk rapportering, budgetering och en fungerande projektuppföljning – du måste kunna svara på vad projektet kostar totalt och hur mycket som är kvar.</p>
<p>Kan utfallet inte beräknas tillförlitligt ska intäkten redovisas motsvarande nedlagda utgifter, alltså med <strong>nollresultat</strong>, tills tillförlitlighet uppnås. Det skyddar mot att du redovisar en vinst som senare visar sig vara luft.</p>

<h2>K2 eller K3 – vad får ditt byggbolag välja?</h2>
<p>Vilket regelverk du hamnar i beror på storlek. Ett <strong>mindre företag</strong> överskrider högst ett av dessa kriterier två år i rad: fler än 50 anställda, mer än 40 mkr i balansomslutning eller mer än 80 mkr i nettoomsättning. Överskrids fler blir företaget större och ska tillämpa K3.</p>
<ul>
<li><strong>K2:</strong> Fastprisuppdrag får redovisas enligt huvudregeln eller alternativregeln i juridisk person – men alternativregeln får inte användas i koncernredovisning.</li>
<li><strong>K3:</strong> I juridisk person får du välja metod, men i <strong>koncernredovisning är endast successiv vinstavräkning tillåten</strong>. Färdigställandemetoden är inte tillåten där.</li>
</ul>
<p>Två 2026-begränsningar är viktiga för bygg- och fastighetsbolag: företag där en byggnad genererar minst 75 % av nettoomsättningen får inte längre tillämpa K2, och bostadsrättsföreningar får oavsett storlek inte använda K2 utan ska tillämpa K3 med komponentavskrivning.</p>

<h2>Nyheten 2026 – slut på nettoredovisning under alternativregeln</h2>
<p>De uppdaterade K2- och K3-regelverken (beslut 16 juni 2025) tillämpas på räkenskapsår som inleds efter den 31 december 2025. En central förändring: fastprisuppdrag som redovisas enligt alternativregeln med både positiva och negativa saldon får <strong>inte längre nettoredovisas</strong> i balansräkningen. De ska bruttoredovisas – positiva saldon som tillgång och negativa saldon som skuld, var för sig.</p>
<p>Praktiskt betyder det att balansomslutningen ofta blir högre än tidigare, vilket kan påverka nyckeltal, mallar och till och med gränsvärdena för mindre/större företag. Se över dina bokslutsmallar innan det första berörda årets bokslut.</p>

<h2>Befarad förlust ska tas direkt</h2>
<p>En vanlig miss: så snart du <strong>förväntar</strong> dig en förlust på ett uppdrag ska hela den befarade förlusten kostnadsföras omedelbart. Det gäller oavsett vilken metod du använder och oavsett om arbetet är påbörjat eller inte. Ett projekt som kalkylmässigt redan är underbudgeterat får alltså inte skjuta förlusten framför sig till färdigställandet.</p>

<h2>Skatten följer redovisningen – med undantag</h2>
<p>Är räkenskaperna upprättade enligt god redovisningssed ska den metod du använder i bokföringen även följas vid beskattningen. Väljer du frivilligt successiv vinstavräkning tidigarelägger du därmed skatten, eftersom vinsten beskattas löpande i stället för på slutåret.</p>
<p>Vid färdigställandemetoden gäller att pågående arbete till fast pris inte får tas upp lägre än det lägsta av anskaffningsvärde och nettoförsäljningsvärde (lägsta värdets princip). Alternativt får det värderas till <strong>97 % av anskaffningsvärdet</strong> – den så kallade 97 %-regeln, som ger en liten skattekredit. Observera att 97 %-regeln inte gäller konsultverksamhet.</p>

<h2>Bokföring i praktiken</h2>
<p>Nedlagda kostnader för ej avslutade projekt samlas bokföringsmässigt på konto <strong>1470 Pågående arbeten</strong>, med konto <strong>4970 Förändring av pågående arbeten</strong> som motkonto vid bokslutsperiodiseringen. Dokumentera vilket metodval du gjort och tillämpa det konsekvent mellan åren – att byta metod fram och tillbaka mellan projekt och år försämrar jämförbarheten och väcker frågor vid revision.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisning eller revisor, men ger dig underlaget metoderna vilar på. Med löpande projektkalkyler håller du reda på avtalat pris och beräknad totalkostnad per projekt – de två talen som färdigställandegraden bygger på. Genom att samla nedlagda timmar, material och leverantörsfakturor på rätt projekt får du fram de faktiska nedlagda utgifterna på balansdagen, så att din redovisningskonsult kan räkna färdigställandegrad på verkliga siffror i stället för uppskattningar. Ju bättre projektuppföljning, desto lättare uppfyller du kravet på tillförlitligt utfall.</p>

<h2>Vanliga frågor</h2>
<h3>Måste byggbolaget använda successiv vinstavräkning?</h3>
<p>Nej. I juridisk person får både K2- och K3-företag välja mellan huvudregeln (successiv vinstavräkning) och alternativregeln (färdigställandemetoden) för fastprisuppdrag. Undantaget är koncernredovisning enligt K2 och K3, där endast successiv vinstavräkning är tillåten.</p>
<h3>Hur beräknas färdigställandegraden?</h3>
<p>Normalt som nedlagda utgifter på balansdagen dividerat med totalt beräknade utgifter för hela uppdraget. Andelen multipliceras med avtalad total intäkt. Har du lagt ned 3 mkr av 4 mkr beräknade kostnader är graden 75 %, vilket på ett avtalspris på 5 mkr ger 3,75 mkr redovisad intäkt.</p>
<h3>Vad händer om jag inte kan beräkna projektets utfall tillförlitligt?</h3>
<p>Då får du inte tillämpa successiv vinstavräkning fullt ut. I stället redovisas intäkt motsvarande nedlagda utgifter, alltså med nollresultat, tills utfallet kan beräknas på ett tillförlitligt sätt. Det kräver att du har budget och löpande ekonomisk rapportering på plats.</p>
<h3>Vad är nyheten om bruttoredovisning från 2026?</h3>
<p>För räkenskapsår som inleds efter den 31 december 2025 får fastprisuppdrag under alternativregeln inte längre nettoredovisas i balansräkningen. Positiva saldon redovisas som tillgång och negativa som skuld var för sig, vilket ofta höjer balansomslutningen och kan påverka nyckeltal.</p>

<h2>Kom igång</h2>
<p>Successiv vinstavräkning ger en mer rättvisande bild och jämnar ut resultatet mellan åren, men den kräver att du har ordning på kalkyler och projektuppföljning – annars faller kravet på tillförlitligt utfall. Sätt rätt total- och marginaltal per projekt med vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator</a>, utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a> och stäm alltid av metodvalet med din revisor eller redovisningskonsult. Vill du se hur projektuppföljningen fungerar i praktiken, <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/tackningsbidrag-byggforetag">Täckningsbidrag för byggföretag</a>, <a href="/sv/blog/leverantorsfaktura-bygg-projekt">Leverantörsfakturor per byggprojekt</a> och <a href="/sv/blog/bokforing-enskild-firma-bygg">Bokföring för enskild firma i bygg</a>.</p>
`;

const A_FARDIGSTALLANDEGRAD_VINSTAVRAKNING_BYGGPROJEKT: BlogPost = {
  _id: "code-"+"fardigstallandegrad-vinstavrakning-byggprojekt",
  title: "Färdigställandegrad och successiv vinstavräkning – så redovisar byggbolaget pågående projekt rätt 2026", slug: "fardigstallandegrad-vinstavrakning-byggprojekt", locale: "sv",
  excerpt: "Metodvalet avgör om resultatet hoppar mellan åren eller jämnas ut – så räknar du färdigställandegrad och redovisar pågående fastprisprojekt rätt enligt K2 och K3.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_FARDIGSTALLANDEGRAD_VINSTAVRAKNING_BYGGPROJEKT_HTML,
  seoTitle: "Successiv vinstavräkning bygg | ByggExp", seoDescription: "Successiv vinstavräkning eller färdigställandemetoden? Så räknar byggbolaget färdigställandegrad, jämnar ut resultatet och redovisar pågående projekt rätt enligt K2/K3 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T15:12:00.000Z", createdAt: "2026-08-19T15:12:00.000Z", updatedAt: "2026-08-19T15:12:00.000Z",
};

const A_HEMMAKONTOR_AVDRAG_ENSKILD_FIRMA_BYGG_HTML = `
<p>Du har jobbet ute hos kund, men offerterna skrivs vid köksbordet, fakturorna skickas från hemmakontoret och en del verktyg och material ligger i garaget. Det är verklighet för de flesta hantverkare med enskild firma – och det finns pengar att spara på det arbete du gör hemma. Problemet är att reglerna för avdrag för arbetsrum är bland de snårigaste Skatteverket har, och många drar antingen för lite eller för mycket.</p>

<p>Vill du samtidigt räkna på vad din tid faktiskt är värd innan du sätter priset på nästa jobb? Testa <a href="/sv/verktyg">våra gratis verktyg för hantverkare -&gt;</a> och koll särskilt på timpris-kalkylatorn.</p>

<h2>Två helt olika spår – schablon eller verklig kostnad</h2>
<p>Det första du måste förstå är att det finns två skilda spår, och du väljer <strong>ett</strong> av dem. Antingen tar du ett fast schablonavdrag för merkostnaden av att arbeta hemma, eller så drar du av en del av dina verkliga bostadskostnader. Vilket spår du får använda avgörs helt av en enda fråga: har du ett <strong>särskilt inrättat arbetsrum</strong> eller inte?</p>
<p>Har du inget separat rum – du sitter i vardagsrummet eller vid köksbordet – är schablonen din enda väg. Har du ett rum som verkligen bara används för verksamheten öppnar sig möjligheten till verklig kostnad. Blanda aldrig ihop spåren, och kombinera dem inte.</p>

<h2>Schablonavdraget – enkelt men litet</h2>
<p>Schablonen är merkostnadsavdraget för dig som arbetar hemma utan särskilt inrättat arbetsrum. Beloppen enligt Skatteverket, oförändrade in i 2026, är:</p>
<ul>
<li><strong>2 000 kr/år</strong> om du arbetar i en bostad som du eller din maka/make äger – alltså villa eller radhus.</li>
<li><strong>4 000 kr/år</strong> om du bor i hyresrätt eller bostadsrätt (lägenhet).</li>
</ul>
<p>För att få avdraget gäller <strong>800-timmarsregeln</strong>: du ska ha arbetat i bostaden minst 800 timmar under året i näringsverksamheten. Det motsvarar ungefär fyra timmar per arbetsdag och är inte alltid självklart för en hantverkare som mest är ute på uppdrag – räkna ärligt. Dessutom ska hemarbetet vara motiverat, det vill säga det ska finnas ett faktiskt behov, till exempel att du inte har tillgång till någon annan lokal för administrationen.</p>
<p>Fördelen med schablonen är att den inte kräver eget rum, inte kräver kvitton och inte kräver någon proportionering. Den täcker just den extra kostnaden för el, värme och vatten som hemarbetet drar. Den är låg, men riskfri – och för de allra flesta hantverkare med enskild firma är den rätt val.</p>

<h2>Verklig kostnad – kräver särskilt inrättat arbetsrum</h2>
<p>Vill du dra av mer än schablonen måste rummet vara <strong>särskilt inrättat</strong>. Kravet är hårt: rummet ska med hänsyn till läge, inredning eller användning inte gå att använda som bostad. Ett rum med säng, tv eller privata prylar diskvalificerar sig direkt – används rummet också som gästrum, hobbyrum eller förvaring av privata saker räknas det inte.</p>
<p>Uppfyller du kravet får du dra av en skälig del av dina verkliga kostnader, proportionellt mot ytan. Räkneexempel: har du ett arbetsrum på 10 kvm i en bostad på 100 kvm, kan du dra av <strong>10 %</strong> av uppvärmnings- och vattenkostnaden.</p>
<p>El behandlas i två steg. Är rummet särskilt inrättat <strong>och</strong> det finns en separat elmätare för verksamheten får du dra av den el som faktiskt förbrukas i näringen. Saknas egen mätare förlorar du inte avdraget – då gör du i stället en <strong>skälig proportionering utifrån bostadens totala elkostnad</strong>, på samma sätt som för värme och vatten. Kravet på egen mätare gäller alltså bara det verkliga, uppmätta förbrukningsspåret, inte rätten till elavdrag i sig.</p>
<p>En separat ingång är inget lagkrav, men den stärker din bevisning om att rummet är särskilt inrättat och inte kan användas som bostad. Vid en kontroll är det den typen av konkreta omständigheter som avgör.</p>

<h2>Villafällan – räntan dras i kapital, inte i firman</h2>
<p>Här går många villaägare vilse. Bor du i villa får du <strong>inte</strong> dra av ränteutgifter i näringsverksamheten – räntan drar du i inkomstslaget kapital, precis som vanligt. Företagsavdraget begränsas därför till övriga driftskostnader som vatten, el och värme.</p>
<p>Konsekvensen är att den stora posten, räntan, redan ligger utanför firman. Kvar blir bara en liten andel av driftskostnaderna. Det är därför villaägaren nästan alltid landar på schablonens 2 000 kr – den verkliga kostnaden efter proportionering blir sällan högre, och den är dessutom betydligt krångligare att belägga.</p>

<h2>Förrådet – att förvara verktyg och material hemma</h2>
<p>För hantverkaren är förrådet ofta mer relevant än skrivbordet. Ett garage eller förråd som <strong>enbart</strong> används för verksamheten – verktyg, material, maskiner – kan behandlas som en särskilt inrättad yta på samma grund som arbetsrummet, med proportionellt avdrag för de kostnader som hör till.</p>
<p>Men samma fälla gäller: blandad användning slår ut avdraget. Står bilen, gräsklipparen och julpyntet i samma garage är det inte längre särskilt inrättat. Ska du hävda förrådsavdrag behöver du kunna visa att ytan är avgränsad och att den bara används i näringen. Dokumentera – foton, en skiss över ytan och en notering om vad som förvaras där gör stor skillnad om Skatteverket frågar.</p>

<h2>Enskild firma vs aktiebolag – blanda inte ihop reglerna</h2>
<p>Allt ovan gäller enskild firma. Har du aktiebolag fungerar det på ett helt annat sätt: då hyr du i stället ut ett arbetsrum eller en lokal i din privatbostad till bolaget mot marknadsmässig hyra, och hyresintäkten beskattas i inkomstslaget kapital. Den modellen har egna krav och egna beloppsgränser och ska inte förväxlas med den enskilde näringsidkarens avdrag. Kör du enskild firma – håll dig till schablonen eller den verkliga kostnaden.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp gör inte din deklaration åt dig, men hjälper dig med underlaget som avgör vilket spår som lönar sig. I systemet tidrapporterar du löpande på jobb och administration, vilket ger dig en faktisk logg att luta dig mot när du ska bedöma om du når 800-timmarsregeln – i stället för att gissa i efterhand. Kalkyl- och prisunderlaget hjälper dig samtidigt att se hur mycket administrativ tid företaget faktiskt binder hemma. Sedan lämnar du siffrorna vidare till din bokföring och deklaration som vanligt.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket får jag dra av för hemmakontor i enskild firma?</h3>
<p>Utan särskilt inrättat arbetsrum är schablonen 2 000 kr/år om du äger din villa eller radhus, och 4 000 kr/år om du bor i hyresrätt eller bostadsrätt. Med ett genuint särskilt inrättat rum kan du i stället dra av en proportionell del av de verkliga driftskostnaderna.</p>
<h3>Måste jobbet vara mitt enda och rummet mitt enda arbetsställe?</h3>
<p>Nej, men hemarbetet ska vara motiverat – det ska finnas ett faktiskt behov, exempelvis att du inte har tillgång till annan lokal för administrationen. För schablonen krävs dessutom minst 800 arbetade timmar i bostaden under året.</p>
<h3>Kan jag dra av elen för verktyg och laddning hemma?</h3>
<p>Ja, om rummet är särskilt inrättat. Finns en separat elmätare för verksamheten drar du av den el som faktiskt förbrukas i näringen. Saknas egen mätare får du i stället göra en skälig proportionering av bostadens totala elkostnad efter arbetsrummets andel av ytan – avdraget försvinner alltså inte utan mätare. Har du inget särskilt inrättat rum täcker schablonen i stället merkostnaden schablonmässigt.</p>
<h3>Jag bor i villa – lönar sig verklig kostnad?</h3>
<p>Sällan. Räntan drar du i kapital och ingår inte i näringsavdraget, så bara en liten andel av driftskostnaderna återstår att proportionera. För de flesta villaägande hantverkare blir schablonens 2 000 kr både enklare och minst lika bra.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på din tid och ditt pris i <a href="/sv/verktyg/timpris-kalkylator">vår gratis timpris-kalkylator</a>, och för in din administrativa tid löpande så att du vet var du landar mot 800-timmarsregeln. Vill du se hur tidrapportering och kalkyl hänger ihop i praktiken? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget för just din firma.</p>

<p>Relaterat: <a href="/sv/blog/avdrag-enskild-firma-bygg">Avdrag i enskild firma för byggföretag</a>, <a href="/sv/blog/egenavgifter-enskild-firma-bygg">Egenavgifter i enskild firma</a> och <a href="/sv/blog/bokforing-enskild-firma-bygg">Bokföring för enskild firma i bygg</a>.</p>
`;

const A_HEMMAKONTOR_AVDRAG_ENSKILD_FIRMA_BYGG: BlogPost = {
  _id: "code-"+"hemmakontor-avdrag-enskild-firma-bygg",
  title: "Hemmakontor och arbetsrum – avdrag i enskild firma för hantverkare", slug: "hemmakontor-avdrag-enskild-firma-bygg", locale: "sv",
  excerpt: "Schablon eller verklig kostnad för hemmakontoret? Så drar du av rätt för arbetsrum, förråd och el i enskild firma – utan att dra för lite eller för mycket.", tag: "Skatt & avdrag",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_HEMMAKONTOR_AVDRAG_ENSKILD_FIRMA_BYGG_HTML,
  seoTitle: "Avdrag hemmakontor enskild firma | ByggExp", seoDescription: "Schablon eller verklig kostnad för arbetsrum hemma? Så drar du av rätt i enskild firma som hantverkare – regler, elavdrag, 800-timmarsregeln och villafällan.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T17:00:00.000Z", createdAt: "2026-08-19T17:00:00.000Z", updatedAt: "2026-08-19T17:00:00.000Z",
};

const A_JAMKA_PRELIMINARSKATT_F_SKATT_BYGGFORETAG_HTML = `
<p>Bygg är projektdrivet, och den debiterade F-skatten är satt i förväg. Ett stort projekt som kommer in i tredje kvartalet, eller en order som glider över till nästa år, svänger resultatet snabbt — men skatten fortsätter dras med samma belopp varje månad. Antingen byggs det upp en kvarskatt som slår till efter årsskiftet, eller så binds likviditet hos Skatteverket helt i onödan. Lösningen heter jämkning, och den kan göras flera gånger per år.</p>

<p>I den här guiden går vi igenom exakt hur och när du justerar preliminärskatten så att den följer projektåret. Räkna på marginalerna i dina projekt med <a href="/sv/verktyg">våra gratis kalkyl- och mallverktyg för byggföretag -&gt;</a> innan du sätter din resultatprognos.</p>

<h2>Vad är debiterad preliminärskatt (F-skatt) och hur sätts den?</h2>
<p>Ett aktiebolag betalar F-skatt löpande på sitt <strong>beräknade överskott</strong> — inte på det faktiska resultatet, utan på en prognos. Beloppet delas upp i lika stora månadsbetalningar till skattekontot, normalt med förfall den 12:e varje månad (januari och augusti avviker). När bolaget är nytt sätts skatten utifrån den registrerade prognosen; därefter räknar Skatteverket normalt fram nästa års F-skatt på fjolårets resultat plus ett schablonpåslag.</p>
<p>Problemet är uppenbart för en byggfirma: fjolårets resultat säger inte mycket om ett år där orderboken kan fördubblas eller halveras på ett kvartal. För 2026 är bolagsskatten <strong>20,6 %</strong> (oförändrad sedan 2021). En framförd motion om att sänka den till 20 % är <em>inte</em> genomförd för beskattningsåret 2026 — planera preliminärskatten runt 20,6 %.</p>
<p>I en enskild firma fungerar det annorlunda. Där beskattas överskottet hos ägaren (kommunal och eventuell statlig inkomstskatt plus egenavgifter), så jämkningen ändrar ägarens debiterade F- eller FA-skatt. Jämkar du för lågt i en enskild firma landar det som privat kvarskatt hos dig själv.</p>

<h2>Vad betyder att "jämka" F-skatten — och den vanliga begreppsförvirringen</h2>
<p>För ett företag är jämkning inte en särskild "jämkningsansökan". Du lämnar helt enkelt en <strong>ny preliminär inkomstdeklaration</strong> (PID) till Skatteverket — via e-tjänsten eller blankett SKV 4313 för aktiebolag (SKV 4314 för enskild firma). Den nya PID:en <em>är</em> justeringsmekanismen. Du anger en uppdaterad resultatprognos, och Skatteverket räknar om den debiterade F-skatten.</p>
<p>Den får lämnas <strong>flera gånger per år</strong>, ända fram till sex månader efter beskattningsårets slut. Det finns ingen låsning till en gång om året — en byggfirma kan jämka om varje gång pipelinen ändras.</p>
<p>Här görs ett vanligt misstag: datumet <strong>9 november</strong> gäller jämkning av <em>lön</em> (A-skatt/avdragen skatt), så att ändringen ska gälla från januari. Det har inget med bolagets F-skatt att göra. Företagets F-skatt ändras via PID när som helst, upp till sex månader efter årets slut. Blanda inte ihop dem.</p>

<h2>När projektåret svänger uppåt: undvik kvarskatt och kostnadsränta</h2>
<p>Vinner du ett stort projekt mitt under året stiger det förväntade överskottet — och den F-skatt som redan dragits räcker inte. Lämna en ny PID så snart prognosen ändras. Viktigt: en jämkning gäller från <strong>månaden efter</strong> Skatteverkets beslut. Redan debiterade månader räknas inte om retroaktivt; bara de återstående månaderna justeras. Ju senare på året du jämkar, desto färre månader ska absorbera hela korrigeringen — och desto större blir den enskilda månadssmällen.</p>
<p><strong>Räkneexempel:</strong> Ett byggbolag budgeterade 600 000 kr i överskott, vilket ger cirka 123 600 kr i årlig F-skatt (10 300 kr/månad). I augusti tecknas ett projekt som lyfter det förväntade överskottet till 1 200 000 kr — skatten borde vara cirka 247 200 kr. Jämkar bolaget så att beslutet gäller från september finns fyra månader kvar. De extra 123 600 kr fördelas på fyra månader, alltså drygt 30 900 kr utöver ordinarie 10 300 kr — cirka 41 200 kr per månad resten av året. Väntar bolaget till november är det bara två månader kvar att fördela på, och månadsbeloppet nästan fördubblas igen. Slutsatsen: jämka tidigt när det svänger uppåt, så blir kassaflödet jämnare och du slipper kvarskatt.</p>

<h2>När projektåret svänger nedåt: bind inte likviditet i onödan</h2>
<p>Motsatsen är lika viktig. Viker orderboken, eller glider ett projekt över till nästa år, är den debiterade F-skatten satt för högt. Då betalar du in mer skatt varje månad än vad resultatet motiverar — och binder rörelsekapital som byggföretaget behöver för löner, material och maskiner.</p>
<p>Sänk F-skatten via en ny PID i stället för att vänta på återbäringen efter deklarationen. Intäktsräntan på skattekontot är låg — <strong>1,125 % för 2026</strong> (45 % av basräntan) — så pengarna gör mer nytta i rörelsen än parkerade hos Skatteverket. Skattekontot är ingen sparbössa.</p>

<h2>Skattekontots räntor 2026 — de exakta siffrorna</h2>
<p>För 2026 är <strong>basräntan 2,5 %</strong> (kopplad till Riksbankens styrränta). Det ger:</p>
<ul>
<li><strong>Låg kostnadsränta:</strong> 2,5 % (= basräntan).</li>
<li><strong>Hög kostnadsränta:</strong> 17,5 % (basräntan + 15 procentenheter).</li>
<li><strong>Intäktsränta:</strong> 1,125 % (45 % av basräntan) och skattefri — låg, men inte noll.</li>
</ul>
<p>Om jämkningen ändå inte räcker och du får ett underskott finns gränsen på <strong>30 000 kr</strong>. Är underskottet <em>större</em> än 30 000 kr måste en extra inbetalning vara bokförd på skattekontot senast den <strong>12 februari 2026</strong> (för kalenderåret 2025) för att undvika kostnadsränta — låg kostnadsränta löper annars från 13 februari. Är underskottet <strong>30 000 kr eller mindre</strong> räcker det att betala så att det är bokfört senast den <strong>4 maj 2026</strong>; kostnadsränta löper annars från 5 maj. Räkna med bankdagar och helger, eftersom pengarna måste vara registrerade på Skatteverkets bankgiro i tid. Extra inbetalning är ett bra komplement till jämkning när du upptäcker svängningen sent på året.</p>

<h2>Bygg-specifika fallgropar</h2>
<ul>
<li><strong>Omvänd byggmoms döljer läget.</strong> B2B-byggtjänster faktureras utan utgående moms (omvänd skattskyldighet), samtidigt som du drar ingående moms på inköp. Många byggföretag sitter därför i ett återkommande momsöverskott på skattekontot — det kan maskera hur den verkliga F-skatteställningen ser ut. Läs av F-skatten separat, inte som ett saldo klumpat med momsen.</li>
<li><strong>Retention och ROT förskjuter kassaflödet.</strong> Innehållna medel och ROT-avdrag (30 % av arbetskostnaden, max 50 000 kr per person och år) betalas ut senare än fakturan bokförs — resultatet kan se starkt ut medan kassan är tunn.</li>
<li><strong>Säsong och väder.</strong> Ett tappat kvartal på grund av tjäle eller vinter ändrar årsprognosen — fånga det i en ny PID.</li>
<li><strong>Blanda inte bolagets resultat med ägarlön och utdelning.</strong> F-skatten avser bolagets vinst; din privata skatt på lön och utdelning (3:12) är en separat kalkyl.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla resultatprognosen uppdaterad så att jämkningen bygger på rätt siffror. När du kalkylerar projekt med <a href="/sv/verktyg/paslag-marginal-kalkylator">vår kalkylator för påslag och marginal</a> ser du vilket överskott varje projekt faktiskt bidrar med — underlaget du behöver för att avgöra om F-skatten ska upp eller ner. Vi lämnar inte in deklarationen åt dig och ger inte skatterådgivning, men vi gör det enkelt att se när prognosen har glidit ifrån den debiterade skatten så att du kan agera i tid.</p>

<h2>Vanliga frågor</h2>
<h3>Hur ofta får jag jämka F-skatten?</h3>
<p>Så ofta det behövs. Du kan lämna en ny preliminär inkomstdeklaration flera gånger per år, ända fram till sex månader efter beskattningsårets slut. Det finns ingen årlig låsning — jämka om varje gång orderboken svänger.</p>
<h3>Gäller den 9 november även för mitt byggbolags F-skatt?</h3>
<p>Nej. Den 9 november är deadline för jämkning av <em>lön</em> (A-skatt) så att den ska gälla från januari. Bolagets F-skatt ändras via en ny PID när som helst under året, upp till sex månader efter årets slut.</p>
<h3>Från när gäller en jämkning?</h3>
<p>Från månaden efter Skatteverkets beslut. Redan debiterade månader räknas inte om — bara de återstående. Därför blir månadsbeloppet större ju senare på året du jämkar, eftersom färre månader delar på korrigeringen.</p>
<h3>Vad kostar det att ha kvarskatt över 30 000 kr?</h3>
<p>Är underskottet över 30 000 kr måste en extra inbetalning vara bokförd senast 12 februari 2026 för att undvika kostnadsränta. Låg kostnadsränta är 2,5 % för 2026; ligger skulden kvar längre tillkommer hög kostnadsränta på 17,5 %.</p>

<h2>Kom igång</h2>
<p>Stäm av prognosen mot den debiterade F-skatten varje kvartal, jämka proaktivt via en ny PID, håll en buffert på högst 30 000 kr och lägg in kalenderpåminnelser för februari- och maj-datumen. Börja med att räkna hem marginalen i dina projekt med <a href="/sv/verktyg/paslag-marginal-kalkylator">kalkylatorn för påslag och marginal</a>, eller utforska hela <a href="/sv/verktyg">verktygslådan för byggföretag</a>. Vill du se hur ByggExp håller din resultatprognos aktuell? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/f-skatt-hantverkare-ansokan">F-skatt för hantverkare — så ansöker du</a>, <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a> och <a href="/sv/blog/periodiseringsfond-byggbolag">Periodiseringsfond för byggbolag</a>.</p>
`;

const A_JAMKA_PRELIMINARSKATT_F_SKATT_BYGGFORETAG: BlogPost = {
  _id: "code-"+"jamka-preliminarskatt-f-skatt-byggforetag",
  title: "Jämka preliminärskatten (F-skatt) i byggföretag", slug: "jamka-preliminarskatt-f-skatt-byggforetag", locale: "sv",
  excerpt: "Bygg är projektdrivet och F-skatten är satt i förväg. Så jämkar du preliminärskatten via en ny PID när orderboken svänger — med rätt blanketter, datum och räntor för 2026.", tag: "Skatt",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_JAMKA_PRELIMINARSKATT_F_SKATT_BYGGFORETAG_HTML,
  seoTitle: "Jämka F-skatt i byggföretag 2026 | ByggExp", seoDescription: "Så jämkar du den debiterade F-skatten när projektåret svänger — undvik kvarskatt och bind inte likviditet i onödan. PID, datum och räntor för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T17:03:00.000Z", createdAt: "2026-08-19T17:03:00.000Z", updatedAt: "2026-08-19T17:03:00.000Z",
};

const A_KREDITUPPLYSNING_KOLLA_KUND_INNAN_JOBB_BYGG_HTML = `
<p>En obetald slutfaktura kan äta upp hela marginalen på ett projekt du redan lagt veckor på. I bygg ligger du dessutom ute med material och löner långt innan pengarna kommer in — du är i praktiken kreditgivare åt din kund, oavsett om du tänker på det så eller inte. Den billigaste försäkringen mot det är en kreditkontroll på 20 minuter innan du skriver under. Här går vi igenom hur du gör den rätt, vad reglerna säger, och var många byggföretag trampar fel.</p>

<p>Bygg din kontroll till en fast rutin i säljprocessen med hjälp av <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a> — så blir kollen ett standardsteg före varje avtal i stället för något du gör i efterhand när det redan skavit.</p>

<h2>Varför kreditrisken är särskilt hög i bygg</h2>
<p>Byggprojekt har flera egenskaper som gör dem känsligare än de flesta andra branscher:</p>
<ul>
<li><strong>Långa projekt.</strong> Från avtal till slutfaktura kan det gå månader. Kundens ekonomi hinner förändras under tiden.</li>
<li><strong>Stora materialinköp.</strong> Du köper in och ligger ute med kapital innan du får betalt, ofta med korta leverantörskrediter i ryggen.</li>
<li><strong>À-conto- och slutfakturamodellen.</strong> Den sista fakturan — där hela din vinst ofta ligger — är den som betalas sist och bestrids oftast.</li>
<li><strong>UE-ledet.</strong> Anlitar du underentreprenörer blir din kunds betalningsproblem snabbt ditt problem, eftersom du ska betala dina UE oavsett om du själv fått betalt.</li>
</ul>
<p>Poängen är enkel: du lämnar kredit varje gång du påbörjar ett jobb. Då bör du bedöma kredittagaren precis som en bank skulle göra.</p>

<h2>Företag eller privatperson — reglerna skiljer sig</h2>
<p>Vilka regler som gäller beror helt på vem kunden är juridiskt.</p>
<p>På ett <strong>aktiebolag</strong> (en juridisk person) krävs inget särskilt skäl. Du får ta en företagsupplysning fritt, och ingen omfrågekopia skickas till bolaget — de får aldrig veta att du kollat.</p>
<p>På en <strong>privatperson</strong> gäller kreditupplysningslagen (1973:1173). Enligt 9 § krävs ett <strong>legitimt behov</strong>: du måste ha ingått eller stå i begrepp att ingå ett kreditavtal med personen, eller på annat sätt ha anledning att göra en ekonomisk riskbedömning. Dessutom skickas alltid en omfrågekopia till den du kollat — i första hand via e-post, annars SMS eller brev.</p>
<p>Det viktiga för bygg: en <strong>enskild firma</strong> (samt handels- och kommanditbolag) behandlas som en privatperson i det här avseendet. Samma krav på legitimt behov, och en omfrågekopia skickas varje gång. Eftersom väldigt många småkunder och UE i branschen är enskilda firmor gäller alltså privatpersonsreglerna oftare än man tror.</p>

<h2>Vad räknas som legitimt behov — och vad du inte får göra</h2>
<p>Du har legitimt behov när du faktiskt står i begrepp att ingå avtal eller lämna kredit — till exempel när en privatkund har begärt offert och ni är på väg att skriva kontrakt. Då är kontrollen tillåten.</p>
<p>Vad du <strong>inte</strong> får göra är att rutinmässigt fiska upplysningar på alla som hör av sig, eller kolla någon av ren nyfikenhet. Att ta upplysningar utan legitimt behov är ett brott mot kreditupplysningslagen och kan ge böter eller fängelse i upp till ett år, skadestånd, samt anmälan till Integritetsskyddsmyndigheten (IMY). Formellt är det kreditupplysningsföretaget som ansvarar för att behov finns — men det är du som beställare som pekas ut i en anmälan. Ta därför bara upplysning på privatpersoner och enskilda firmor när en affär är på gång.</p>

<h2>Vad du faktiskt läser av i en kreditupplysning</h2>
<p>En företagsupplysning innehåller betydligt mer än ett betyg. Det här är de uppgifter du vill titta på:</p>
<ul>
<li><strong>Riskklass 1–5.</strong> Hos UC betyder 1 högst risk och 5 lägst risk att företaget blir insolvent eller går i konkurs inom tolv månader. Prognosen bygger på officiella källor: Kronofogden, Bolagsverket och Skatteverket.</li>
<li><strong>Betalningsanmärkningar.</strong> Antal och storlek säger mycket om betalningsviljan.</li>
<li><strong>Skulder hos Kronofogden.</strong> En tydlig varningsflagga.</li>
<li><strong>Bokslut och omsättning.</strong> Matchar storleken det projekt kunden vill beställa?</li>
</ul>
<p>Tänk på gallringstiderna: en betalningsanmärkning tas bort efter <strong>3 år</strong> för privatpersoner <em>och enskilda firmor</em> — anmärkningen ligger på ägarens personnummer och gallras enligt privatpersonsregeln. För <strong>aktiebolag och andra juridiska personer</strong> finns ingen lagstadgad gallringstid, men i praktiken tas anmärkningen bort först efter omkring 5 år. En anmärkning kan alltså synas betydligt längre på ett aktiebolag än på en privatperson eller enskild firma — läs därför också hur gammal den är.</p>
<p>Upplysningar levereras av bland andra UC, Creditsafe och Dun &amp; Bradstreet. Styckpris ligger typiskt runt 39–159 kr per upplysning exkl. moms, eller som fastpris via abonnemang om du kollar många. En struken slutfaktura kostar tusenfalt mer.</p>

<h2>Extra kontroller när kunden eller UE är ett företag</h2>
<p>Kreditbetyget är en pusselbit, men gör också en gratis koll hos Skatteverket. Via e-tjänsten <strong>Hämta företagsinformation</strong> anger du organisationsnummer (eller personnummer för enskild firma) och din egen e-postadress, så skickas uppgifterna till dig. Du ser om företaget är godkänt för F-skatt samt registrerat för moms och som arbetsgivare. Skatteverket är enda instansen med realtidsdata över svenska bolags skattestatus.</p>
<p>F-skattekontrollen är inte en formalitet. Anlitar du som företag någon som <strong>inte</strong> är godkänd för F-skatt är du som köpare skyldig att göra skatteavdrag på 30 % och redovisa det till Skatteverket — och är leverantören en fysisk person (till exempel en enskild firma) ska du dessutom betala arbetsgivaravgifter. För dig som driver näringsverksamhet gäller det här redan från 1 000 kr i ersättning för arbete under året; tiotusenkronorsgränsen som ofta nämns gäller bara när det är en privatperson som betalar ut. Att missa kollen kan alltså bli oväntat dyrt — och den tar två minuter.</p>

<h2>Riskbedöm din UE som Skatteverket rekommenderar</h2>
<p>Skatteverkets vägledning (2026) för att riskbedöma en leverantör bygger på fem kontroller:</p>
<ol>
<li><strong>Registreringar</strong> — F-skatt, moms och arbetsgivare.</li>
<li><strong>Arbetsgivaravgifter mot rimliga löner</strong> — multiplicera de beslutade avgifterna med cirka 3 för att uppskatta bruttolönerna. Stämmer det med antalet arbetare de säger sig ha?</li>
<li><strong>Skulder hos Kronofogden.</strong></li>
<li><strong>Årsredovisning utan anmärkning</strong> från revisorn.</li>
<li><strong>Stabil styrelse, företagsnamn och adress.</strong></li>
</ol>
<p>Tumregeln: 0 avvikelser innebär låg risk, medan 1–4 avvikelser betyder att du bör utreda djupare innan avtal. Varningssignaler som Skatteverket och Ekobrottsmyndigheten lyfter fram är täta byten av styrelse, namn eller adress, dolda underentreprenörer eller bemanningsföretag, arbetsgivaravgifter som inte matchar antalet arbetare, och övertagna så kallade historikbolag. Byggföretagen har dessutom en egen vägledning, Råd och tips vid anlitande av underentreprenör, som är värd att läsa igenom.</p>

<h2>Så bygger du in kontrollen i säljprocessen</h2>
<p>Det som skiljer företag som drabbas av kreditförluster från dem som slipper är sällan tur — det är rutin. Gör kollen till ett fast steg:</p>
<ul>
<li>Kör kreditupplysning och Skatteverkskoll innan offert övergår i avtal.</li>
<li>Vid svag kreditvärdighet: skriv in <strong>förskott eller tätare delbetalningar</strong>, <strong>äganderättsförbehåll</strong> på material och <strong>stopprätt</strong> i avtalet.</li>
<li>Dokumentera offert och faktura ordentligt så att kravet håller om det går till inkasso. Spara underlaget i sju år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp tar inte kreditupplysningar åt dig — det gör UC, Creditsafe eller Skatteverkets e-tjänst. Men ByggExp hjälper dig att göra resultatet av kontrollen till en affärsrutin. Du samlar offert, avtal och fakturor på samma kund, kan skriva in förskott och delbetalningar direkt i underlaget, och håller ordning på vilka kunder och UE du redan kontrollerat. När du väl bestämt villkoren skapar du en korrekt faktura — med rätt momshantering och tydligt betalningsvillkor — så att kravet står stadigt om betalningen dröjer. Behöver du fakturera en annan byggfirma hanterar du omvänd byggmoms direkt i mallen.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag ta en kreditupplysning på min privatkund?</h3>
<p>Ja, men bara när du har legitimt behov — det vill säga när ni är på väg att ingå avtal eller du ska lämna kredit. Kunden får alltid en omfrågekopia. Att kolla utan att en affär är på gång är ett brott mot kreditupplysningslagen.</p>
<h3>Skickas det en kopia till kunden när jag kollar?</h3>
<p>På privatpersoner och enskilda firmor: ja, alltid — i första hand via e-post, annars SMS eller brev. På aktiebolag skickas ingen omfrågekopia, så bolaget får aldrig veta att du gjort kontrollen.</p>
<h3>Varför spelar F-skatt så stor roll?</h3>
<p>Anlitar du som företag någon utan godkänd F-skatt ska du göra skatteavdrag på 30 % och redovisa det till Skatteverket — och om leverantören är en fysisk person även betala arbetsgivaravgifter. För en näringsidkare gäller det redan från 1 000 kr i ersättning för arbete under året (10 000-kronorsgränsen gäller bara privatpersoner som betalar ut). Kontrollen är gratis hos Skatteverket och tar ett par minuter.</p>
<h3>Vad betyder riskklass 1 respektive 5?</h3>
<p>Hos UC är 1 högst risk och 5 lägst risk att företaget går i konkurs inom tolv månader. Prognosen bygger på uppgifter från Kronofogden, Bolagsverket och Skatteverket. Ju lägre siffra, desto större skäl att kräva förskott eller avstå.</p>

<h2>Kom igång</h2>
<p>Gör kreditkollen till ett standardsteg och fånga upp villkoren i underlaget direkt. Börja med <a href="/sv/verktyg">våra gratis byggverktyg</a> och skapa ett korrekt kravunderlag i vår <a href="/sv/verktyg/faktura-mall">fakturamall</a>. Vill du se hur hela flödet — från offert och kreditvillkor till betald faktura — hänger ihop i ett system? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>, <a href="/sv/blog/kreditforsakring-byggforetag">Kreditförsäkring för byggföretag</a> och <a href="/sv/blog/likviditet-byggforetag">Så stärker du likviditeten i byggföretaget</a>.</p>
`;

const A_KREDITUPPLYSNING_KOLLA_KUND_INNAN_JOBB_BYGG: BlogPost = {
  _id: "code-"+"kreditupplysning-kolla-kund-innan-jobb-bygg",
  title: "Kreditupplysning: kolla kunden innan du tar bygguppdraget", slug: "kreditupplysning-kolla-kund-innan-jobb-bygg", locale: "sv",
  excerpt: "En kreditkontroll på 20 minuter är den billigaste försäkringen mot obetalda slutfakturor. Så gör du den rätt — regler, F-skattekoll och gallringstider.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_KREDITUPPLYSNING_KOLLA_KUND_INNAN_JOBB_BYGG_HTML,
  seoTitle: "Kreditupplysning på kund i bygg | ByggExp", seoDescription: "Så gör du en korrekt kreditupplysning på kund och UE innan du skriver avtal — regler, F-skattekoll, gallringstider och riskbedömning för byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T17:09:00.000Z", createdAt: "2026-08-19T17:09:00.000Z", updatedAt: "2026-08-19T17:09:00.000Z",
};

const A_OMBILDA_ENSKILD_FIRMA_TILL_AB_BYGG_HTML = `
<p>Allt fler hantverkare byter från enskild firma till aktiebolag när omsättningen växer. Skälen är begränsat personligt ansvar, bättre kreditvärdighet mot leverantörer och beställare, och från 2026 en ny 3:12-modell som ändrar spelplanen för lågbeskattad utdelning. Men en ombildning är inte en ommärkning av samma firma: du startar ett <strong>nytt</strong> aktiebolag med nytt organisationsnummer och flyttar över verksamheten dit. Gör du det i rätt ordning slipper du uttagsbeskattning, återförda fonder och en oväntad momsräkning. Gör du fel blir det dyrt. Här är de sex praktiska stegen för byggföretagaren.</p>

<p>Innan du börjar räkna på om bytet lönar sig – testa dina täckningsbidrag i <a href="/sv/verktyg">våra gratis byggverktyg</a> och räkna på marginalen så du vet vilken vinstnivå du faktiskt ligger på.</p>

<h2>Steg 1 – Bilda och registrera aktiebolaget först</h2>
<p>Aktiebolaget måste finnas och vara registrerat hos Bolagsverket innan något flyttas över. Minsta aktiekapital för ett privat AB är <strong>25 000 kr</strong> (aktiebolagslagen 2005:551). Du kan skjuta in kapitalet kontant, men du kan också bilda bolaget med <strong>apportegendom</strong> – till exempel maskiner, ställningar eller servicebil. Apporten måste vara till nytta för bolaget, värderas till minst 25 000 kr, beskrivas i stiftelseurkunden och granskas i ett yttrande av auktoriserad eller godkänd revisor. För en byggare med dyr utrustning kan apport vara ett smidigt sätt att kapitalisera bolaget utan att låsa upp likvida medel.</p>

<h2>Steg 2 – Underprisöverlåtelse: flytta inventarier till skattemässigt värde</h2>
<p>När bolaget finns kan du föra över inventarierna. Normalt skulle en överlåtelse under marknadsvärde utlösa <strong>uttagsbeskattning</strong>, men reglerna om <strong>underprisöverlåtelse</strong> låter dig överföra tillgångarna till skattemässigt restvärde utan sådan beskattning. Fyra villkor måste vara uppfyllda:</p>
<ul>
<li>Hela verksamheten eller en hel verksamhetsgren övergår.</li>
<li>Aktiebolaget är skattskyldigt i Sverige.</li>
<li>Andelarna i bolaget är kvalificerade.</li>
<li>Bolaget har inte underskott från tidigare år.</li>
</ul>
<p>Konkret för byggaren: verktyg, byggställningar och servicebilen som står bokförda till exempelvis 180 000 kr i restvärde förs över för just det värdet – inte till vad de skulle kosta på begagnatmarknaden. Ingen vinst tas upp till beskattning i firman, och bolaget skriver av vidare på restvärdet.</p>

<h2>Steg 3 – Periodiseringsfond och expansionsfond utan beskattning</h2>
<p>Har du avsatt till fonder i firman kan de följa med – men bara på rätt villkor.</p>
<p><strong>Periodiseringsfond</strong> kan föras över utan återföring och beskattning om du (a) tar över hela näringsverksamheten och (b) tillskjuter ett belopp till bolaget lika stort som den överförda fonden. Tillskottet får <strong>inte</strong> räknas som anskaffningsutgift för aktierna. Bolaget lämnar blankett N7.</p>
<p><strong>Expansionsfond</strong> upphör utan beskattning om alla reala tillgångar förs över. Kravet är att du tillskjuter <strong>79,4 %</strong> av expansionsfonden till bolaget (100 % minus bolagsskatten 20,6 %). Även här gäller att beloppet inte får räknas som anskaffningsutgift för aktierna, och begäran om att fonden inte ska återföras lämnas i inkomstdeklarationen.</p>

<h2>Steg 4 – Moms, jämkning och F-skatt</h2>
<p>Själva ombildningen är en verksamhetsöverlåtelse och utlöser <strong>ingen moms</strong>. Men bolaget övertar <strong>jämkningsskyldigheten</strong> för moms som firman dragit av. Det gäller inventarier och anläggningstillgångar köpta de senaste 5 åren (från 50 000 kr) och byggkostnader de senaste 10 åren (minst 100 000 kr per år). För en byggare med nyinköpta maskiner eller en nyrenoverad verkstadslokal kan detta röra stora belopp – kartlägg det innan överlåtelsen.</p>
<p>Tänk också på att <strong>F-skatt och moms inte följer med automatiskt</strong>. Aktiebolaget måste registreras på nytt på verksamt.se för F-skatt, moms och eventuellt som arbetsgivare. Den enskilda firman avregistreras från F-skatt, moms och arbetsgivare när verksamheten är överförd. Missar du detta kan du stå utan giltig F-skatt när du fakturerar från det nya bolaget.</p>

<h2>Steg 5 – Avtal, kunder och ROT</h2>
<p>Avtal övergår inte automatiskt. Kund-, leverantörs-, leasing-, försäkrings- och hyresavtal måste hanteras aktivt. Vissa räcker det att meddela motparten om, andra kräver motpartens <strong>godkännande</strong> – särskilt ramavtal, leasing av maskiner och hyra av lokal. Upprätta ett skriftligt överlåtelseavtal mellan firman och aktiebolaget som listar vad som förs över och till vilka värden.</p>
<p>För ROT-jobb gäller att avdraget alltid är <strong>30 % av arbetskostnaden</strong>, max 50 000 kr per kund och år – det påverkas inte av bolagsformen, men ansökningar till Skatteverket ska gå på det nya organisationsnumret. Se också över byggarbetsplats-ID och personalliggare: de knyts till rätt org.nr så att du inte råkar registrera personal på en firma som håller på att avvecklas.</p>

<h2>Steg 6 – Anställda och kollektivavtal</h2>
<p>Har du anställda övergår de enligt reglerna om <strong>verksamhetsövergång</strong> (LAS 6 b §) med bibehållna anställningsvillkor. Men kollektivavtalet – Byggavtalet via Byggföretagen/Byggnads eller ett hängavtal – följer inte automatiskt med. Aktiebolaget är en ny arbetsgivare och kan behöva teckna nytt avtal. Samma sak gäller tjänstepension och avtalsförsäkringar, som måste flyttas till det nya bolaget.</p>

<h2>Nya 3:12-reglerna 2026 – vad byggaren tjänar</h2>
<p>Från 1 januari 2026 slås förenklingsregeln och huvudregeln ihop till en modell (påverkar inkomståret 2026, deklaration 2027). Det viktigaste:</p>
<ul>
<li>Nytt <strong>grundbelopp</strong> = 4 inkomstbasbelopp = <strong>322 400 kr</strong> per bolag, upp från tidigare cirka 221 650 kr.</li>
<li>Lönebaserat utrymme: (total kontant lönesumma × ägarandel − 8 IBB) × 50 %, där 8 IBB = 644 800 kr. Både kravet på eget löneuttag (spärrlön) och 4 %-spärren är slopade.</li>
<li>Uppräkning av sparat utdelningsutrymme med ränta är borttagen, och karenstiden är kortad från 5 till 4 år.</li>
</ul>
<p>Enkelt räkneexempel: en enmansbyggare utan anställda får schablonmässigt utrymme upp till grundbeloppet 322 400 kr att ta ut som lågbeskattad utdelning – oavsett hur mycket lön som tagits ut. Det gör bolagsformen mer attraktiv för den som bygger upp vinst i bolaget.</p>

<h2>Vanliga fallgropar</h2>
<ul>
<li>Att flytta över tillgångar innan bolaget är registrerat.</li>
<li>Att glömma att tillskott för fonder inte får bli anskaffningsutgift för aktierna.</li>
<li>Att missa jämkningsansvaret för moms på maskiner och lokal.</li>
<li>Att fakturera med F-skatt innan bolaget är registrerat för det.</li>
<li>Att anta att leasing-, hyres- och ramavtal automatiskt gäller för AB:t.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisningskonsult, men verktygen hjälper dig fatta beslutet på rätt underlag. Med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a> räknar du ut din faktiska vinstnivå per jobb, så du ser om du närmar dig den nivå där ett AB börjar löna sig. I <a href="/sv/verktyg">verktygslådan</a> hittar du fler kalkyler för offert, timpris och ROT. När bolaget väl är på plats håller du offert, tidrapportering och fakturering samlat på det nya organisationsnumret.</p>

<h2>Vanliga frågor</h2>
<h3>Behåller jag samma organisationsnummer när jag ombildar?</h3>
<p>Nej. Aktiebolaget är en ny juridisk person med ett nytt organisationsnummer. Den enskilda firmans nummer försvinner när firman avregistreras. Allt – F-skatt, moms, avtal, personalliggare – knyts till det nya numret.</p>
<h3>Vid vilken vinstnivå lönar det sig att byta till AB?</h3>
<p>En tumregel som branschen använder är en vinst kring 500 000–600 000 kr per år, eftersom bolagsskatt på 20,6 % och möjligheten till lågbeskattad utdelning då kan väga upp mot egenavgifterna i en enskild firma. Det är dock ingen lagregel utan beror på din situation – stäm av med en redovisningskonsult.</p>
<h3>Måste jag skjuta in 25 000 kr i kontanter?</h3>
<p>Nej. Du kan bilda bolaget med apportegendom, till exempel maskiner eller bil, om egendomen är till nytta för bolaget, värderas till minst 25 000 kr, beskrivs i stiftelseurkunden och granskas av en revisor i ett särskilt yttrande.</p>
<h3>Följer mina anställdas kollektivavtal med automatiskt?</h3>
<p>Anställningarna övergår enligt reglerna om verksamhetsövergång (LAS 6 b §), men kollektivavtalet gör det inte per automatik. Aktiebolaget är en ny arbetsgivare och kan behöva teckna nytt avtal med Byggnads/Byggföretagen samt flytta över tjänstepension och försäkringar.</p>

<h2>Kom igång</h2>
<p>Kartlägg dina inventarier, fonder och avtal, bilda bolaget först och flytta sedan över i rätt ordning – och räkna på din vinstnivå med <a href="/sv/verktyg/paslag-marginal-kalkylator">marginalkalkylatorn</a> innan du bestämmer dig. Vill du se hur ByggExp håller ihop offert, tid och fakturering i det nya bolaget? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/enskild-firma-eller-aktiebolag-bygg">Enskild firma eller aktiebolag för byggföretag</a>, <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>, <a href="/sv/blog/f-skatt-hantverkare-ansokan">F-skatt för hantverkare – så ansöker du</a>.</p>
`;

const A_OMBILDA_ENSKILD_FIRMA_TILL_AB_BYGG: BlogPost = {
  _id: "code-"+"ombilda-enskild-firma-till-ab-bygg",
  title: "Ombilda enskild firma till aktiebolag – så flyttar du byggverksamheten utan skattesmäll (2026)", slug: "ombilda-enskild-firma-till-ab-bygg", locale: "sv",
  excerpt: "Praktisk steg-för-steg-guide för hantverkaren som byter från enskild firma till AB 2026 – utan att utlösa uttagsbeskattning eller momssmäll.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_OMBILDA_ENSKILD_FIRMA_TILL_AB_BYGG_HTML,
  seoTitle: "Ombilda enskild firma till AB bygg | ByggExp", seoDescription: "Så flyttar hantverkaren verksamhet, maskiner och avtal från enskild firma till aktiebolag 2026 – underprisöverlåtelse, fonder, moms och nya 3:12.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T18:03:00.000Z", createdAt: "2026-08-19T18:03:00.000Z", updatedAt: "2026-08-19T18:03:00.000Z",
};

const A_KORTTIDSARBETE_PERMITTERING_BYGGFORETAG_HTML = `
<p>När orderstocken tunnas ut vill de flesta byggföretag undvika det dyraste av allt: att säga upp erfaren personal och sedan tvingas rekrytera och lära upp nytt folk när konjunkturen vänder. Två verktyg gör det möjligt att sänka personalkostnaden tillfälligt utan uppsägning – <strong>korttidsarbete</strong> och <strong>permittering</strong>. De blandas ständigt ihop, men de bygger på helt olika regelverk, kostar olika mycket och kräver olika beslutsvägar. Den här guiden reder ut skillnaden och ger dig en handlingsordning för orderbristen.</p>

<p>När du väl har valt spår behöver du dessutom hålla koll på arbetad tid, minskad tid och löneunderlag per anställd. Ladda ner <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -&gt;</a> och använd den som underlag både för avstämningen mot Skatteverket och för dialogen med Byggnads.</p>

<h2>Korttidsarbete vs permittering – två helt olika verktyg</h2>
<p>Det första du måste göra är att sluta använda orden som synonymer. Skillnaden avgör vem som betalar och vem som beslutar.</p>
<ul>
<li><strong>Korttidsarbete</strong> vilar på lag (2013:948) om stöd vid korttidsarbete. Staten subventionerar en del av arbetstidsminskningen, stödet handläggs av Skatteverket och det krävs ett <strong>lokalt kollektivavtal med Byggnads</strong> om vilka som ska korttidsarbeta.</li>
<li><strong>Permittering</strong> är en kollektivavtalsreglerad åtgärd enligt Byggavtalet. Här finns <strong>inget statligt stöd</strong>. Arbetsgivaren beslutar själv efter varsel till facket och betalar en lägre grundlön enligt avtalet under permitteringstiden.</li>
</ul>
<p>Kort sagt: korttidsarbete delar kostnaden med staten men kräver att du förhandlar fram ett lokalt avtal, medan permittering är ett internt arbetsgivarbeslut utan subvention. Vilket som passar beror på hur djup och tillfällig svackan är.</p>

<h2>Så fungerar korttidsarbete (statligt stöd)</h2>
<p>I det ordinarie systemet minskas arbetstiden i tre fasta nivåer, med en betydligt mindre lönesänkning för den anställde:</p>
<ul>
<li>20 % kortare arbetstid ger 12 % lägre lön</li>
<li>40 % kortare arbetstid ger 16 % lägre lön</li>
<li>60 % kortare arbetstid ger 20 % lägre lön</li>
</ul>
<p>Staten bär ungefär en tredjedel av kostnaden för arbetstidsminskningen, medan arbetsgivare och anställd delar på resten. Stödet beräknas på ordinarie lön <strong>upp till ett lönetak på 44 000 kr per månad</strong> – lön över taket bekostar du helt själv.</p>
<p>En varning som är lätt att gå på: de generösare siffror många minns från pandemin (lönesänkning på 4, 6 och 7,5 procent, en 80-procentsnivå och en statlig andel på runt 75 procent) gäller <strong>inte</strong> 2026. Det stödet administrerades av Tillväxtverket 2020–2021. Sedan 1 april 2022 handläggs det ordinarie stödet av Skatteverket, och räkna med nivåerna 12/16/20 ovan. Läs på hos Skatteverket och lita inte blint på äldre FAQ-texter som fortfarande refererar till pandemireglerna.</p>

<h2>När får du stöd – och när får du inte det</h2>
<p>Här faller många ansökningar. Ordinarie korttidsstöd beviljas bara vid <strong>tillfälliga och allvarliga ekonomiska svårigheter</strong> som ligger utanför arbetsgivarens kontroll och som inte rimligen kunnat förutses eller undvikas. En vanlig, planerbar konjunktursvängning eller normal orderbrist som du borde ha kunnat räkna med kvalificerar alltså inte automatiskt. Du behöver kunna visa att svårigheten är akut och yttre.</p>
<p>Tidsgränserna är också viktiga att planera efter:</p>
<ul>
<li>Stöd lämnas i upp till <strong>6 kalendermånader</strong>, med möjlig förlängning i 3 månader.</li>
<li>Högst <strong>24 månaders stöd under en 36-månadersperiod</strong>, därefter karens.</li>
</ul>
<p>Du ansöker och gör därefter avstämning hos Skatteverket, och där behöver du ha ordning på faktiskt arbetad och minskad tid per anställd – ett skäl till att ha tidrapporteringen på plats från dag ett.</p>

<h2>Förhandlingen med Byggnads steg för steg</h2>
<p>Korttidsarbete går inte att införa ensidigt. Det krävs ett <strong>lokalt kollektivavtal med Byggnads</strong> om vilka arbetstagare som ska korttidsarbeta. Gör så här:</p>
<ol>
<li>Kalla till lokal förhandling och lägg fram det ekonomiska underlaget som visar de tillfälliga svårigheterna.</li>
<li>Använd <strong>Byggföretagens och Byggnads särskilda mall/blankett</strong> i Arbetsgivarguiden – den ska användas, egna varianter håller inte.</li>
<li>Kom överens om vilka som omfattas och på vilken nivå (20/40/60 %). Observera att de vanliga turordningsreglerna <strong>inte</strong> styr korttidsavtalet – urvalet bestäms i den lokala överenskommelsen.</li>
<li>Dokumentera avtalet noggrant; det är grunden både för Byggnads och för Skatteverkets avstämning.</li>
</ol>
<p>Gällande avtal är Byggavtalet mellan Byggföretagen och Byggnads med avtalsperiod 2025-05-01 till 2027-04-30. Centrala korttidsöverenskommelser finns även med Seko och tjänstemannafacken (Unionen, Ledarna, Sveriges Ingenjörer), så glöm inte tjänstemännen om de berörs.</p>

<h2>Permittering enligt Byggavtalet – när korttidsstöd inte är aktuellt</h2>
<p>Kvalificerar inte svackan för statligt stöd, eller behöver du agera snabbt? Då är permittering enligt Byggavtalet alternativet. Här beslutar arbetsgivaren – efter att ha varslat/underrättat facket genom det förenklade förfarandet – vilka som permitteras. Under permitteringstiden betalar du en <strong>lägre grundlön enligt avtalet</strong>, men <strong>pension och semesterförmåner ska fortsätta att betalas</strong>. Något statligt stöd utgår inte.</p>
<p>Varsel om permittering ska normalt lämnas i god tid, med riktmärket <strong>minst två veckor i förväg</strong> enligt kollektivavtalets ordning. Planera alltså med marginal – du kan inte permittera med verkan från imorgon.</p>

<h2>När det ändå blir arbetsbrist och uppsägning</h2>
<p>Korttidsarbete och permittering är avsedda för tillfälliga svackor där anställningen består. Är nedgången varaktig handlar det istället om arbetsbrist och uppsägning – en annan process. Då krävs <strong>MBL 11 §-förhandling med Byggnads före beslut</strong>. Förhandlingen ska omfatta arbetsbristens omfattning, antal berörda och möjligheten till omplacering, och uppsägningen ska vara skriftlig. Arbetsbrist utgör saklig grund, men bara om omplacering inte är möjlig. Vi går igenom det i detalj i vår guide om <a href="/sv/blog/uppsagning-arbetsbrist-bygg">uppsägning vid arbetsbrist i byggbranschen</a>.</p>

<h2>Håll kvar personalen – praktisk checklista</h2>
<p>Grundtanken bakom korttidsarbete är att slippa säga upp folk och behålla kompetensen genom en tillfällig svacka – anställningen består och den anställde återgår till full tid när stödet upphör. Så maxar du chansen att lyckas:</p>
<ul>
<li><strong>Kommunicera tidigt.</strong> Ta dialogen med både anställda och fack innan besluten är fattade, inte efteråt.</li>
<li><strong>Välj verktyg efter hur tillfällig svackan är.</strong> Kort och yttre orsak – pröva korttidsstöd. Behöver du agera snabbt eller kvalificerar inte stödet – permittering. Varaktig nedgång – då är det arbetsbrist.</li>
<li><strong>Kombinera med kompetensutveckling.</strong> Ledig tid kan användas till utbildning och certifieringar som stärker laget inför uppgången.</li>
<li><strong>Undvik fusk-fällorna.</strong> Låt ingen jobba mer än den avtalade minskningen medger, håll tidrapporteringen exakt och spara underlagen – felaktiga uppgifter kan leda till återbetalning.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte den juridiska förhandlingen, men löser den del som ofta blir rörig i praktiken: att hålla reda på arbetad och minskad tid per anställd under korttidsarbete eller permittering. Med tidrapportering per person och projekt får du ett underlag som du kan använda både i den lokala förhandlingen med Byggnads och i avstämningen mot Skatteverket. Vill du ha en enkel start använder du <a href="/sv/verktyg/tidrapport-mall">tidrapport-mallen</a>, och behöver du löpande koll hittar du fler verktyg i <a href="/sv/verktyg">verktygslådan</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan korttidsarbete och permittering?</h3>
<p>Korttidsarbete är statligt subventionerad arbetstidsminskning enligt lag (2013:948), handläggs av Skatteverket och kräver lokalt kollektivavtal med Byggnads. Permittering är en avtalsreglerad åtgärd enligt Byggavtalet utan statligt stöd, där arbetsgivaren beslutar efter varsel och betalar en lägre grundlön.</p>
<h3>Hur mycket sänks lönen vid korttidsarbete 2026?</h3>
<p>I det ordinarie systemet är arbetstidsminskningen 20, 40 eller 60 procent och lönesänkningen 12, 16 respektive 20 procent. Pandemins lägre siffror (4/6/7,5 procent) gäller inte. Staten bär ungefär en tredjedel av kostnaden, och stödet beräknas på lön upp till 44 000 kr per månad.</p>
<h3>Räcker vanlig orderbrist för att få korttidsstöd?</h3>
<p>Inte automatiskt. Stödet kräver tillfälliga och allvarliga ekonomiska svårigheter utanför arbetsgivarens kontroll som inte rimligen kunnat förutses. En planerbar konjunktursvängning kvalificerar oftast inte – du måste kunna visa att svårigheten är akut och yttre.</p>
<h3>Måste jag varsla facket före permittering?</h3>
<p>Ja. Varsel om permittering ska normalt lämnas i god tid, med riktmärket minst två veckor i förväg enligt kollektivavtalets ordning. Du kan alltså inte permittera med omedelbar verkan.</p>

<h2>Kom igång</h2>
<p>Bestäm om svackan är tillfällig eller varaktig, kontrollera aktiveringskravet hos Skatteverket, ta stöd av Byggföretagens Arbetsgivarguide och Byggnads – och ta juridisk eller avtalsmässig hjälp innan du fattar beslut. Håll samtidigt underlaget i ordning med <a href="/sv/verktyg/tidrapport-mall">tidrapport-mallen</a>. Vill du se hur ByggExp håller ihop tid, projekt och personal? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/uppsagning-arbetsbrist-bygg">Uppsägning vid arbetsbrist i bygg</a>, <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Kollektivavtal i byggbranschen</a>, <a href="/sv/blog/franvaro-i-byggforetag">Frånvaro i byggföretag</a>.</p>
`;

const A_KORTTIDSARBETE_PERMITTERING_BYGGFORETAG: BlogPost = {
  _id: "code-"+"korttidsarbete-permittering-byggforetag",
  title: "Korttidsarbete eller permittering vid orderbrist – så behåller byggföretaget personalen", slug: "korttidsarbete-permittering-byggforetag", locale: "sv",
  excerpt: "Reder ut skillnaden mellan statligt korttidsarbete och avtalsreglerad permittering – och ger dig en handlingsordning för att behålla personalen under en svacka.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_KORTTIDSARBETE_PERMITTERING_BYGGFORETAG_HTML,
  seoTitle: "Korttidsarbete & permittering | ByggExp", seoDescription: "Korttidsarbete eller permittering i byggföretaget? Skillnaden, det statliga stödet, förhandling med Byggnads och hur du håller kvar kompetensen.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T18:12:00.000Z", createdAt: "2026-08-19T18:12:00.000Z", updatedAt: "2026-08-19T18:12:00.000Z",
};

const A_FRISKVARDSBIDRAG_BYGGFORETAG_AVDRAG_HTML = `
<p>Bygg är ett fysiskt tungt yrke. Tunga lyft, monotona rörelser och arbete i utsatta ställningar gör att belastningsskador och sjukfrånvaro kostar byggföretag stora pengar varje år. Friskvårdsbidrag är en av de billigaste personalförmånerna du kan erbjuda för att motverka detta – och rätt hanterat är det helt skatte- och avgiftsfritt både för dig som arbetsgivare och för dina anställda.</p>

<p>Innan vi går in på reglerna: räkna gärna på vad en förmån faktiskt kostar och vad du fakturerar per timme med <a href="/sv/verktyg">våra gratis verktyg för byggföretag -&gt;</a>. En frisk montör som slipper sjukskrivas tjänar in bidraget många gånger om.</p>

<h2>Så mycket är skattefritt 2026 – 5 000 kr-gränsen och cliff-regeln</h2>
<p>Det skattefria maxbeloppet för friskvårdsbidrag 2026 är <strong>5 000 kr per anställd och år, inklusive moms</strong>. Beloppet är oförändrat sedan tidigare år. Du bestämmer själv om du vill erbjuda hela beloppet eller en lägre summa.</p>
<p>Här finns en viktig fälla. Skatteverkets gräns fungerar som en så kallad cliff-regel: om du betalar ut <em>mer</em> än 5 000 kr blir <strong>hela beloppet</strong> en skattepliktig förmån – inte bara den överskjutande delen. Betalar du ut 5 200 kr förmånsbeskattas alltså den anställde för alla 5 200 kr, och du får betala arbetsgivaravgifter på summan. Håll dig därför strikt inom taket och ha koll på om den anställde redan fått bidrag tidigare under året.</p>

<h2>Motion vs. övrig friskvård – 1 000 kr-taket per tillfälle</h2>
<p>Reglerna skiljer på ren motion och annan friskvård:</p>
<ul>
<li><strong>Ren motion</strong> (gym, styrketräning, simning, motionslopp) kan kosta mer per tillfälle, så länge du inte överskrider årsbeloppet på 5 000 kr. Ett dyrare årskort på gymmet är alltså inget problem i sig.</li>
<li><strong>Aktiviteter utan inslag av motion</strong> – till exempel massage, akupunktur eller kostrådgivning – får inte kosta mer än <strong>1 000 kr per tillfälle</strong> för att vara skattefria. En massage för 850 kr är okej; en behandling för 1 200 kr är det inte.</li>
</ul>
<p>För byggpersonal är massage inom 1 000 kr-taket ofta det mest uppskattade – det avlastar rygg, axlar och nacke som sliter hårt på arbetsplatsen.</p>

<h2>Vad byggpersonal får använda bidraget till – och vad som inte är godkänt</h2>
<p>Sedan årsskiftet 2021/2022 publicerar Skatteverket inte längre någon lista över godkända aktiviteter. Det är numera <strong>du som arbetsgivare</strong> som avgör vilka aktiviteter som godkänns. Kravet är att aktiviteten är av enklare slag och mindre värde med inslag av motion eller annan friskvård.</p>
<p><strong>Vanligtvis godkänt:</strong></p>
<ul>
<li>Gymkort, styrketräning och funktionell träning</li>
<li>Simning och simhallskort</li>
<li>Anmälningsavgift till motionslopp och gruppträning</li>
<li>Massage, akupressur och liknande inom 1 000 kr per tillfälle</li>
</ul>
<p><strong>Inte godkänt / inte skattefritt:</strong></p>
<ul>
<li>Köp eller hyra av utrustning – skor, cykel, träningskläder</li>
<li>Medlemsavgifter, licenser och anmälningsavgift till en klubb</li>
<li>Hälsovård, sjukvård och skönhetsvård – exempelvis kiropraktor som ren sjukvård</li>
</ul>
<p>Tänk på att arbetskläder och skyddsskor är en helt annan post – de hanteras som arbetskläder och verktyg, inte som friskvård. Läs mer i vår guide om <a href="/sv/blog/avdrag-arbetsklader-verktyg">avdrag för arbetskläder och verktyg</a>.</p>

<h2>Kravet på lika villkor – alla anställda, inklusive lärlingar och deltid</h2>
<p>Friskvårdsbidrag är en <strong>personalvårdsförmån</strong>. För att vara skattefri måste förmånen rikta sig till <strong>alla anställda på lika villkor och med samma belopp</strong>. Erbjuder du bidraget bara till vissa – till exempel snickarna men inte kontorspersonalen – blir det skattepliktigt för alla.</p>
<p>Det innebär att även lärlingar, visstidsanställda och deltidsanställda ska omfattas. För deltid och visstid får du dock <strong>proportionera (jämka) beloppet</strong> efter anställningstid eller arbetstid utan att skattefriheten går förlorad. En halvtidsanställd kan alltså erbjudas halva bidraget.</p>

<h2>Ägarens situation – aktiebolag vs enskild firma</h2>
<p>Hur du som ägare kan ta del av bidraget beror på företagsformen:</p>
<ul>
<li><strong>Aktiebolag:</strong> ägaren räknas som anställd och kan själv ta emot skattefritt friskvårdsbidrag på samma villkor som övriga anställda.</li>
<li><strong>Enskild firma:</strong> en egenföretagare är inte anställd i juridisk mening och kan därför <strong>inte</strong> ge sig själv skattefritt friskvårdsbidrag. Har du anställda i den enskilda firman kan du däremot erbjuda dem bidraget skattefritt.</li>
</ul>

<h2>Så bokför du friskvårdsbidrag skattefritt</h2>
<p>Friskvårdsbidraget är skatte- och avgiftsfritt för dig som arbetsgivare – inga arbetsgivaravgifter och ingen förmånsbeskattning på den anställde, förutsatt att villkoren uppfylls.</p>
<p>Bokföringen är enkel:</p>
<ul>
<li>Kostnaden bokförs normalt på konto <strong>7699 Övriga personalkostnader</strong> (alternativt 7690).</li>
<li>Betalar du ut mot den anställdes kvitto krediteras <strong>1930 Företagskonto</strong>. Går ersättningen via lönen används i stället 2890.</li>
</ul>
<p><strong>Viktigt om momsen:</strong> vid friskvårdsbidrag mot den anställdes kvitto är kvittot ställt till den anställde – inte till företaget. Då är momsen normalt <strong>inte avdragsgill</strong>, och hela beloppet inklusive moms kostnadsförs på 7699. Ingående moms får du bara lyfta när fakturan är ställd till företaget, till exempel vid ett företagsabonnemang på gymmet.</p>

<h2>Praktisk checklista för byggföretaget</h2>
<ol>
<li>Skriv en enkel, skriftlig friskvårdspolicy som gäller alla anställda.</li>
<li>Sätt ett årsbelopp per person, max 5 000 kr, och informera hela personalen.</li>
<li>Kräv originalkvitto för varje ersättning och spara underlaget.</li>
<li>Kontrollera 1 000 kr-taket per tillfälle för massage och liknande.</li>
<li>Jämka beloppet för deltid och visstid vid behov.</li>
<li>Bokför löpande på 7699 och hantera utbetalning via bank eller lönesystem.</li>
<li>Spara all dokumentation i minst 7 år enligt bokföringsreglerna.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggt för att hålla ordning på personal, tid och kostnader på byggföretaget. Friskvårdsbidraget bokför du i ditt vanliga ekonomisystem, men ByggExp hjälper dig att se helheten: du samlar personaluppgifter, håller koll på anställningsformer och får underlag för vad varje anställd faktiskt kostar – förmåner inräknat. Det gör det lättare att avgöra vilken nivå på friskvårdsbidrag ditt företag har råd med och att sätta ett hållbart timpris som täcker de verkliga personalkostnaderna.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket friskvårdsbidrag är skattefritt 2026?</h3>
<p>Maxbeloppet är 5 000 kr per anställd och år, inklusive moms. Betalar arbetsgivaren ut mer blir hela beloppet en skattepliktig förmån.</p>
<h3>Kan jag ge friskvårdsbidrag bara till byggarbetarna?</h3>
<p>Nej. Förmånen måste erbjudas alla anställda på lika villkor och med samma belopp för att vara skattefri. Riktas den bara till vissa blir den skattepliktig. Deltid och visstid får dock proportioneras.</p>
<h3>Får montören köpa träningsskor för bidraget?</h3>
<p>Nej. Köp eller hyra av utrustning som skor, cykel och träningskläder är inte godkänt. Bidraget ska gå till själva aktiviteten, till exempel gymkort eller massage.</p>
<h3>Kan jag som ägare av enskild firma ta friskvårdsbidrag?</h3>
<p>Nej, inte skattefritt till dig själv, eftersom du inte räknas som anställd. I aktiebolag räknas ägaren som anställd och kan ta del av bidraget. Anställda i den enskilda firman kan däremot få det skattefritt.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på vad din personal kostar och vad du behöver ta betalt med vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator</a>, och utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp håller ihop personal och kostnader i vardagen? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/vad-kostar-en-anstalld-byggforetag">Vad kostar en anställd i byggföretag?</a> och <a href="/sv/blog/avdrag-arbetsklader-verktyg">Avdrag för arbetskläder och verktyg</a>.</p>
`;

const A_FRISKVARDSBIDRAG_BYGGFORETAG_AVDRAG: BlogPost = {
  _id: "code-"+"friskvardsbidrag-byggforetag-avdrag",
  title: "Friskvårdsbidrag i byggföretag – så drar du av rätt 2026", slug: "friskvardsbidrag-byggforetag-avdrag", locale: "sv",
  excerpt: "Skattefritt friskvårdsbidrag är en billig personalförmån som motverkar belastningsskador i bygg. Här är reglerna för 2026 – belopp, villkor och bokföring.", tag: "Ekonomi &amp; skatt",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_FRISKVARDSBIDRAG_BYGGFORETAG_AVDRAG_HTML,
  seoTitle: "Friskvårdsbidrag byggföretag 2026 | ByggExp", seoDescription: "Så fungerar skattefritt friskvårdsbidrag i byggföretag 2026: 5 000 kr-gränsen, 1 000 kr-taket, lika villkor, ägarens situation och bokföring. Praktisk guide.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:12:00.000Z", createdAt: "2026-08-19T19:12:00.000Z", updatedAt: "2026-08-19T19:12:00.000Z",
};

const A_VIRKESATGANG_ALTAN_TRALLDACK_HTML = `
<p>Inför säsongens altanjobb sitter marginalen i beräkningen. Räknar du för snålt får du hämta virke mitt i monteringen och äter upp vinsten på restid. Räknar du för brett binder du kapital i en trave som blir liggande. Den som kan sin virkesåtgång per m² – trall, reglar och bärlinor – lägger en offert som håller och slipper obehagliga överraskningar när brädorna väl ligger på plintarna.</p>

<p>Vill du hoppa direkt till siffrorna? Mata in altanens mått i <a href="/sv/verktyg/trall-kalkylator">vår gratis trall-kalkylator -&gt;</a> så får du löpmeter trall, spillpåslag och antal brädor på sekunder.</p>

<h2>Stommen på 30 sekunder</h2>
<p>En altan byggs i tydliga lager, och varje lager har sin egen åtgångslogik:</p>
<ul>
<li><strong>Plintar</strong> i mark bär hela konstruktionen.</li>
<li><strong>Bärlinor</strong> (ofta 45x170 mm) vilar på plintarna och tar upp lasten tvärs altanen.</li>
<li><strong>Reglar</strong> (ofta 45x145 mm) läggs vinkelrätt mot bärlinorna och bär trallen.</li>
<li><strong>Trall</strong> (standard 28x120 mm) skruvas på reglarna – det synliga golvet.</li>
</ul>
<p>Dimensionerna ovan är en beprövad stomme för en fristående altan i normal höjd. Grövre spännvidder eller tak över altanen kräver egen dimensionering, men för de flesta uterum är 45x145 reglar och 45x170 bärlina en trygg utgångspunkt.</p>

<h2>cc-avståndet styr allt</h2>
<p>Centrumavståndet mellan reglarna (cc) avgör både hur mycket virke som går åt och hur golvet känns att gå på. Svenskt Trä och TräGuiden anger maximalt cc utifrån trallens tjocklek:</p>
<ul>
<li><strong>22 mm trä:</strong> cc högst 400 mm</li>
<li><strong>26 mm värmebehandlat:</strong> cc högst 450 mm</li>
<li><strong>28 mm (standardtrall):</strong> cc högst 600 mm</li>
<li><strong>34 mm:</strong> cc högst 800 mm</li>
</ul>
<p>Standardtrallen 28x120 mm klarar alltså cc 600. Men många proffs väljer ändå cc 400 – golvet blir styvare, fjädrar mindre och känns påtagligt gediget under foten. Skillnaden kostar mer regelvirke men höjer den upplevda kvaliteten, vilket ofta är värt det på synliga uterum. Bygger du i komposit gäller alltid tillverkarens anvisning framför trätabellen.</p>

<h2>Räkna trall i löpmeter per m²</h2>
<p>Trallåtgången beror på brädans bredd plus monteringsspalten. Grundformeln är enkel:</p>
<p><strong>Löpmeter trall per m² = 1000 / (brädbredd + spalt)</strong></p>
<p>Räkneexempel för 120 mm bräda med 6 mm spalt: modulen blir 126 mm, och 1000 / 126 = cirka 7,94 lm/m². En rak altan på 40 m² kräver då cirka 318 lm trall – före spillpåslag. Byter du brädbredd ändras åtgången direkt:</p>
<ul>
<li><strong>95 mm bräda + 6 mm spalt:</strong> ca 9,9 lm/m²</li>
<li><strong>120 mm bräda + 6 mm spalt:</strong> ca 7,94 lm/m²</li>
<li><strong>145 mm bräda + 6 mm spalt:</strong> ca 6,62 lm/m²</li>
</ul>
<p>När du har löpmetern, anpassa mot lagerlängderna (3,6–5,4 m). Rita altanen i skala och lägg brädlängderna så att kapet minimeras – det är här du sparar både virke och tid.</p>

<h2>Räkna reglar och bärlinor</h2>
<p>Reglarna räknas per m² golvyta med formeln <strong>1 / cc</strong>:</p>
<ul>
<li><strong>cc 400 mm:</strong> 2,5 lm regel/m²</li>
<li><strong>cc 600 mm:</strong> 1,67 lm regel/m²</li>
</ul>
<p>Lägg till kantreglar runt ytterkanten samt eventuella extra reglar vid skarvar. För 40 m² med cc 400 blir det 100 lm regelvirke plus kantreglar. Bärlinorna räknas i stället efter hur många linor som behövs tvärs altanen: spännvidden mellan plintar hålls typiskt 1,5–2,0 m beroende på last och dimension. Antalet bärlinor gånger altanens bredd ger löpmetern, och antalet plintar följer av spännvidden längs varje lina. Behöver du snabbt slå fast regelåtgång och plintantal, ta <a href="/sv/verktyg/reglar-kalkylator">reglar-kalkylatorn</a> till hjälp.</p>

<h2>Spill, kap och spalt – de tre som spräcker kalkylen</h2>
<p>Tre detaljer avgör om din materiallista håller:</p>
<ol>
<li><strong>Spill:</strong> räkna 10–15 % påslag på trallen som branschtumregel. Rak, enkel altan klarar sig på 5–10 %; vinklar, mönster och diagonalläggning kräver mer.</li>
<li><strong>Spalt:</strong> trall får aldrig monteras utan springa. Använd 4–6 mm monteringsspalt för ny tryckimpregnerad trall som rör sig och krymper. I det färdiga golvet bör fogsprånget inte överstiga 3 mm.</li>
<li><strong>Infästning och skydd:</strong> brädor bredare än 70 mm ska dubbelskruvas med 30 mm kantavstånd, smalare brädor (45–70 mm) får en centrerad skruv. Utomhus krävs korrosionsskydd lägst klass C4 – varmförzinkat eller rostfritt A2/A4 – och C5 vid kust.</li>
</ol>
<p>Skruvhuvudet ska ligga exakt i nivå med träytan, aldrig försänkt, så att vatten inte samlas i skallen.</p>

<h2>Skruv- och infästningsåtgång</h2>
<p>På breda brädor sätts två skruv per regelkorsning. Antalet korsningar per m² beror på både brädbredd och cc, så åtgången varierar – men på en standardaltan med 120 mm trall och cc 400 landar du grovt kring 30–40 skruv per m². Använd skruv med minst 4,2 mm ytterdiameter; längden anpassas efter trallen: cirka 45 mm för 22 mm trall, 55 mm för 28 mm och 75 mm för 34 mm. Köp med marginal – tappade och feldragna skruv är oundvikligt på ett altangolv.</p>

<h2>Offert och ROT 2026 – dela material och arbete rätt</h2>
<p>Bygger du en altan eller ett trädäck sammanbyggt med ett småhus ger ROT-avdrag på <strong>arbetet</strong> – aldrig på material, maskinhyra eller resor. ROT 2026 är 30 % av arbetskostnaden med tak 50 000 kr per person och år (gemensamt tak med RUT på 75 000 kr). För dig som hantverkare betyder det att offerten måste särredovisa arbete och material tydligt, annars tappar kunden avdraget och du får diskussionen efteråt. Sätt en ärlig arbetsandel, håll materiallistan separat och spara underlaget – bokföring och underlag ska bevaras i sju år.</p>

<h2>Snabb checklista + kalkylexempel för 40 m² altan</h2>
<p>En rak altan på 40 m², trall 28x120 mm med 6 mm spalt, reglar cc 400:</p>
<ul>
<li><strong>Trall:</strong> 40 × 7,94 = ca 318 lm, plus 12 % spill = ca 356 lm</li>
<li><strong>Reglar 45x145:</strong> 40 × 2,5 = 100 lm plus kantreglar</li>
<li><strong>Bärlina 45x170:</strong> efter spännvidd 1,5–2,0 m och antal linor tvärs ytan</li>
<li><strong>Skruv:</strong> ca 30–40 st/m², dvs 1200–1600 st, C4-skydd, längd 55 mm</li>
<li><strong>Plintar:</strong> enligt bärlinans spännvidd</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp lägger du upp altanjobbet som ett projekt och bygger materiallistan från kalkylatorernas siffror direkt i offerten. Du separerar arbete och material så att ROT-underlaget blir rätt från början, och samlar mängder, spillpåslag och skruvåtgång på ett ställe. När kunden godkänner har du en mängdförteckning att beställa virke efter – och en offert som stämmer med det du faktiskt bygger. Verktyget räknar inte åt dig i fält, men det håller kalkyl, offert och underlag i ordning så att marginalen inte läcker mellan Excel-ark.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket trall går åt per m²?</h3>
<p>Använd formeln 1000 / (brädbredd + spalt). En 120 mm bräda med 6 mm spalt ger cirka 7,94 lm/m². Lägg sedan på 10–15 % spill för kap och anpassning mot lagerlängder.</p>

<h3>Vilket cc-avstånd ska reglarna ha?</h3>
<p>Standardtrall på 28 mm klarar max cc 600 mm enligt TräGuiden, men många väljer cc 400 för ett styvare golv. Tunnare trall kräver tätare cc: 22 mm högst 400 mm.</p>

<h3>Hur stor spalt ska jag ha mellan trallbrädorna?</h3>
<p>Trall ska alltid monteras med springa. Använd 4–6 mm monteringsspalt för ny tryckimpregnerad trall som krymper. I det färdiga golvet bör fogsprånget inte överstiga 3 mm.</p>

<h3>Får kunden ROT-avdrag på altanbygget?</h3>
<p>Ja, om altanen byggs samman med ett småhus ger ROT 30 % på arbetskostnaden, tak 50 000 kr per person 2026. Avdraget gäller bara arbetet – aldrig material, maskinhyra eller resor.</p>

<h2>Kom igång</h2>
<p>Räkna fram hela materiallistan för nästa altan i <a href="/sv/verktyg/trall-kalkylator">trall-kalkylatorn</a> och komplettera med <a href="/sv/verktyg/reglar-kalkylator">reglar-kalkylatorn</a>. Vill du se hur kalkyl, offert och ROT-uppdelning hänger ihop i ett projekt? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rakna-material-till-bygget">Räkna material till bygget</a>, <a href="/sv/blog/spillprocent-bygg-material">Spillprocent på byggmaterial</a> och <a href="/sv/blog/mangdforteckning-bygg">Mängdförteckning i bygget</a>.</p>
`;

const A_VIRKESATGANG_ALTAN_TRALLDACK: BlogPost = {
  _id: "code-"+"virkesatgang-altan-tralldack",
  title: "Virkesåtgång för altan: räkna trall, reglar och bärlinor per m²", slug: "virkesatgang-altan-tralldack", locale: "sv",
  excerpt: "Så räknar du exakt virkesåtgång för altanen – trall, reglar, bärlinor och skruv per m² med rätt cc-avstånd och spillpåslag.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/trall-preview.webp", contentHtml: A_VIRKESATGANG_ALTAN_TRALLDACK_HTML,
  seoTitle: "Virkesåtgång altan trall per m² | ByggExp", seoDescription: "Räkna trall, reglar och bärlinor per m² altan. Formler för löpmeter, cc-avstånd, spill och skruv – plus ROT 2026 för din offert.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/trall-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T20:09:00.000Z", createdAt: "2026-08-19T20:09:00.000Z", updatedAt: "2026-08-19T20:09:00.000Z",
};

const A_ROT_FORDELA_MAKAR_TAK_2026_HTML = `
<p>ROT-taket ser ut som ett kundproblem, men i fakturamodellen är det ni som bär risken. Ni drar av kundens skattereduktion direkt på fakturan, kunden betalar bara sin del, och sedan begär ni resten från Skatteverket. Om kundens tak redan är fyllt – eller om två makar delar ett hushåll och bara den ena står på beställningen – kan Skatteverket neka utbetalningen. Då står byggföretaget med ett hål i kassan för ett arbete som redan är utfört och betalat i material. Att förstå hur taket fördelas mellan flera ägare och flera hantverkare är därför en likviditetsfråga, inte en detalj i deklarationen.</p>

<p>Räkna igenom kundens utrymme innan ni fakturerar med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator -&gt;</a> så ser ni direkt hur mycket avdrag arbetskostnaden faktiskt ger per person.</p>

<h2>ROT-reglerna 2026 i korthet</h2>
<p>Från 1 januari 2026 är ROT-avdraget tillbaka på ordinarie <strong>30 % av arbetskostnaden</strong>. Den tillfälligt höjda nivån på 50 % gällde bara mellan 12 maj och 31 december 2025 – räkna aldrig med 50 % på arbeten som betalas under 2026.</p>
<ul>
<li><strong>Takets storlek:</strong> högst 50 000 kr i ROT-avdrag per person och år.</li>
<li><strong>Gemensamt tak:</strong> ROT och RUT delar ett tak på 75 000 kr per person och år. Av dessa 75 000 kr får högst 50 000 kr vara ROT. RUT kan ensamt fylla hela 75 000 kr, med 50 % avdrag.</li>
<li><strong>Bara arbetskostnad:</strong> avdraget gäller enbart arbetet – aldrig material, maskiner, resor eller administrationsavgifter. Fakturan måste specificera arbetskostnaden separat.</li>
</ul>
<p>Ett samboende par kan alltså som mest nå <strong>150 000 kr i sammanlagd skattereduktion</strong> samma år: 2 × 75 000 kr i gemensamt ROT- och RUT-tak. Av det får ROT-delen vara högst 2 × 50 000 = 100 000 kr; resten upp till taket kan fyllas med RUT. Men det förutsätter att båda personerna kan utnyttja sitt utrymme – och det är där fördelningen avgör om ni får betalt.</p>

<h2>Flera ägare, dubbelt tak</h2>
<p>För att två personer ska få var sitt tak räcker det inte att de bor tillsammans. Tre krav måste vara uppfyllda:</p>
<ol>
<li>Båda ska <strong>äga bostaden</strong>.</li>
<li>Båda ska stå på <strong>avtalet/beställningen</strong>.</li>
<li>Kostnaden ska <strong>fördelas formellt</strong> – separata fakturor eller en delad faktura med tydlig andel per person.</li>
</ol>
<p>Räkneexempel: en köksrenovering med 300 000 kr i ren arbetskostnad, beställd av två makar som äger bostaden 50/50. Fördelas kostnaden lika blir det 150 000 kr arbetskostnad per person. ROT ger 30 % = 45 000 kr per person, alltså under takets 50 000 kr. Båda ryms med marginal och företaget kan begära totalt 90 000 kr i utbetalning. Hade hela fakturan ställts till en person hade avdraget kapats vid 50 000 kr – och mellanskillnaden fått betalas av kunden eller fastnat hos er.</p>

<h2>Så fördelar hantverkaren fakturan rätt</h2>
<p>Fördelningen görs i fakturan, och den behöver innehålla köparuppgifter per person. Se till att ha med:</p>
<ul>
<li>Personnummer och andel (procent eller belopp) för varje köpare.</li>
<li>Arbetskostnaden specificerad separat från material och övrigt.</li>
<li>Fastighetsbeteckning, eller lägenhetsnummer och BRF:ens organisationsnummer vid bostadsrätt.</li>
<li>Begärt ROT-belopp per person, avdraget direkt på fakturan.</li>
</ul>
<p>Använd gärna en mall som redan har fälten på plats – <a href="/sv/verktyg/faktura-mall">vår fakturamall</a> gör det enklare att hålla arbetskostnad och köparandelar åtskilda så att inget faller bort i granskningen.</p>

<h2>När flera hantverkare jobbar hos samma kund</h2>
<p>Varje företag begär sin del mot <strong>samma gemensamma tak</strong>. Om kunden anlitar en snickare, en elektriker och en golvläggare under samma år konkurrerar ni alla om samma 50 000 kr per person. Den som hinner begära utbetalning först fyller utrymmet – och nästa aktör kan få avslag när taket tagit slut, trots att ni inte i förväg kunde se hur mycket de andra redan begärt.</p>
<p>Praktisk konsekvens: fråga kunden om andra ROT-arbeten är på gång under året, och begär utbetalning så snart kunden betalat sin del. Vänta inte till årsskiftet.</p>

<h2>Fakturamodellen steg för steg</h2>
<ol>
<li>Företaget måste vara godkänt för <strong>F-skatt</strong>.</li>
<li>Skattereduktionen dras av direkt på fakturan – kunden betalar sin del.</li>
<li>Företaget begär resten från Skatteverket via e-tjänsten <em>Rot och rut</em>.</li>
<li>Begäran om utbetalning ska vara inne <strong>senast 31 januari året efter</strong> att kunden betalat.</li>
</ol>

<h2>Skydda kassaflödet</h2>
<p>Företaget bär risken. Om kundens tak redan är fyllt eller kundens slutliga skatt inte räcker, kan Skatteverket avslå eller kräva tillbaka utbetalt belopp. Skydda er med några enkla rutiner:</p>
<ul>
<li>Be kunden kontrollera sitt utrymme på Skatteverkets <strong>Mina sidor</strong>. Där syns preliminärt utnyttjat (begärt av entreprenör, ej utbetalt), beviljat (utbetalt) och kvarvarande utrymme. Summan av preliminärt plus beviljat räknas mot taket.</li>
<li>Begär en kopia av kundens uppgift om utnyttjat ROT-utrymme innan ni sätter avdraget.</li>
<li>Skriv in en klausul i avtalet om att kunden betalar hela beloppet om Skatteverket säger nej.</li>
<li>Håll likviditet för väntetiden mellan fakturering och utbetalning.</li>
</ul>
<p>Kom ihåg att kraven ligger på köparen: personen ska äga och bo i den bostad där ROT-arbetet utförs, ha fyllt 18 år, vara obegränsat skattskyldig i Sverige och ha betalat tillräckligt med slutlig skatt samma år. Överskrids taket kan Skatteverket kräva tillbaka beloppet och, om felaktiga uppgifter lämnats, dessutom ta ut skattetillägg (upp till 40 %).</p>

<h2>Omfördelning mellan makar i deklarationen</h2>
<p>Om det visar sig att den enes slutliga skatt inte räcker kan avdraget ofta räddas. Makar och sambor med gemensamt hushåll får omfördela ROT- och RUT-avdrag mellan sig i deklarationen: via e-tjänsten under <em>Ändra</em> -&gt; <em>Skattereduktioner rotarbete eller rutarbete</em> (ange belopp och personnummer), eller på pappersblankett under <em>Övriga upplysningar</em> med kryss för omfördelning. Den som tar över avdraget måste själv uppfylla villkoren. Det här är kundens åtgärd, men det är bra att kunna tipsa om den när en utbetalning riskerar att fastna.</p>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du fakturan med arbetskostnaden specificerad för sig och köparandelar per person, så att underlaget till Skatteverket blir rätt från start. Du kan dela en beställning på flera ägare och hålla reda på vilka arbeten som fakturerats vilken kund under året – ett stöd när flera hantverkare rör sig mot samma tak. ByggExp kan inte se kundens kvarvarande utrymme åt dig (den uppgiften ligger hos Skatteverket), men systemet gör det svårare att missa fälten som annars leder till avslag.</p>

<h2>Vanliga frågor</h2>
<h3>Är ROT-avdraget 30 eller 50 procent 2026?</h3>
<p>30 % av arbetskostnaden. De 50 % som gällde under 2025 var tillfälliga och slutade den 31 december 2025.</p>
<h3>Hur mycket kan ett par sammanlagt få i ROT och RUT samma år?</h3>
<p>Som mest 150 000 kr i sammanlagd skattereduktion: 2 × 75 000 kr i det gemensamma ROT- och RUT-taket, varav ROT-delen får vara högst 2 × 50 000 = 100 000 kr. Det förutsätter att båda äger bostaden, står på beställningen och har tillräcklig slutlig skatt.</p>
<h3>Vad händer om kundens tak redan är fyllt när vi begär utbetalning?</h3>
<p>Skatteverket kan avslå eller kräva tillbaka beloppet. I fakturamodellen är det företaget som bär risken, därför bör ni kontrollera kundens utrymme och avtala om att kunden betalar fullt vid avslag.</p>
<h3>Kan makar flytta ROT-avdraget mellan sig efteråt?</h3>
<p>Ja. Makar och sambor med gemensamt hushåll kan omfördela avdraget i deklarationen via <em>Ändra</em> -&gt; <em>Skattereduktioner rotarbete eller rutarbete</em>. Den som tar över måste själv uppfylla villkoren.</p>

<h2>Kom igång</h2>
<p>Räkna ut avdraget per person innan ni fakturerar med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a> och ställ fakturan i <a href="/sv/verktyg/faktura-mall">fakturamallen</a> med arbetskostnad och andelar rätt uppdelade. Vill ni se hur ByggExp hanterar delade beställningar i praktiken? <a href="/sv/contact">Boka en demo här -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a>, <a href="/sv/blog/rotavdrag-2026-nya-regler-foretag">ROT-avdrag 2026 – nya regler för företag</a>, <a href="/sv/blog/rot-avdrag">Så fungerar ROT-avdraget för byggföretag</a>.</p>
`;

const A_ROT_FORDELA_MAKAR_TAK_2026: BlogPost = {
  _id: "code-"+"rot-fordela-makar-tak-2026",
  title: "ROT-taket 2026: så fördelar ni avdraget mellan makar och hantverkare", slug: "rot-fordela-makar-tak-2026", locale: "sv",
  excerpt: "I fakturamodellen bär byggföretaget risken när ROT-taket är fyllt. Så fördelar ni avdraget rätt mellan makar och flera hantverkare 2026 – och skyddar kassaflödet.", tag: "ROT-avdrag",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_ROT_FORDELA_MAKAR_TAK_2026_HTML,
  seoTitle: "ROT-taket 2026: fördela avdrag rätt | ByggExp", seoDescription: "Så fördelar byggföretag ROT-avdraget mellan makar och flera hantverkare 2026 – gemensamt tak 75 000 kr/person, ROT max 50 000 kr. Skydda kassaflödet.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T21:00:00.000Z", createdAt: "2026-08-19T21:00:00.000Z", updatedAt: "2026-08-19T21:00:00.000Z",
};

const A_PRESKRIPTION_FAKTURA_BYGG_SLUTFAKTURA_HTML = `
<p>Du har utfört jobbet, men slutfakturan blev liggande. Kunden hör inte av sig, projektet rullade vidare och plötsligt har det gått ett par år. Frågan är enkel men dyr: hur länge kan du egentligen vänta innan rätten till betalning försvinner? Svaret styrs av preskriptionslagen (1981:130) – tre år mot en privatperson och tio år mot ett företag – men entreprenadavtal som AB 04 och ABT 06 kan korta ner fristen dramatiskt.</p>

<p>Ett rent underlag och rätt datum minskar risken att en faktura glöms bort. Bygg din slutfaktura i <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall -&gt;</a> så att beställning, ÄTA och belopp är dokumenterade från början.</p>

<h2>Vad preskription betyder i praktiken</h2>
<p>Preskription innebär att en fordran slutar vara indrivbar. När preskriptionstiden löpt ut utan avbrott förlorar du enligt 8 § preskriptionslagen rätten att kräva betalning – och rätten att använda fordran till kvittning. Arbetet är utfört, men pengarna är förlorade. Det finns ingen ångerknapp.</p>
<p>En vanlig missuppfattning är att tiden börjar räknas från fakturadatum. Så är det inte. Preskriptionstiden räknas från fordringens tillkomst, alltså normalt när tjänsten är fullgjord. Du kan därför inte förlänga fristen bara genom att skjuta upp faktureringen – tvärtom bränner varje månad du väntar av den tid du har på dig.</p>

<h2>Tre år mot privatperson (konsument)</h2>
<p>Enligt 2 § andra stycket preskriberas en fordran på tre år när den avser en vara, tjänst eller annan nyttighet som en näringsidkare tillhandahållit en konsument för huvudsakligen enskilt bruk. Ett byggföretag som renoverat ett badrum åt en privatperson har alltså tre år på sig att få sitt betalningskrav framme.</p>
<p>Konsumentverket är tydligt: det finns inget lagkrav på hur snabbt ett företag måste skicka fakturan efter utfört arbete. Men betalningskravet måste nå kunden inom treårsfristen för att vara giltigt. Väntar du för länge blir fakturan bara ett papper utan rättslig verkan.</p>

<h2>Tio år mot företag (B2B)</h2>
<p>Huvudregeln i 2 § första stycket säger att en fordran preskriberas tio år efter tillkomsten om preskriptionen inte avbryts. Denna längre frist gäller mellan företag – till exempel när du som underentreprenör fakturerar en beställare som är näringsidkare. Tio år är gott om tid, men se upp: den regeln gäller bara om inget annat avtalats. Och i byggbranschen är något annat mycket ofta avtalat.</p>

<h2>Fällan: entreprenadavtalet krymper fristen</h2>
<p>Arbetar du under AB 04 eller ABT 06 gäller inte tioårsregeln. Enligt 6 kap. 19 § preskriberas parternas fordringar som är hänförliga till entreprenaden om de inte framställs inom sex månader från entreprenadens godkännande (godkänd slutbesiktning). Undantaget är fordran som avser kontraktssumman eller mervärdesskatt – där gäller två år från godkänd slutbesiktning.</p>
<p>Det är här pengar försvinner i praktiken. Sexmånadersfristen träffar särskilt ÄTA-arbeten och andra tilläggskrav. Har du utfört extraarbeten men inte framställt kravet inom sex månader efter slutbesiktningen kan ersättningen vara förlorad – även om själva kontraktssumman fortfarande kan krävas i två år.</p>
<p>Lägg till att beställaren enligt 6 kap. 15 § har rätt att hålla inne fem procent av kontraktssumman (plus ett betryggande belopp för besiktningsanmärkningar) tills fel avhjälpts. Slutfakturan kan alltså vara giltig men ändå inte betalas ut i sin helhet direkt. Håll koll på både avtalade frister och innehållna belopp.</p>

<h2>Preskriptionsavbrott – så håller du fordran vid liv</h2>
<p>Preskriptionen är inte ödesbestämd. Enligt 5 § avbryts den på tre sätt:</p>
<ul>
<li>Gäldenären betalar, betalar ränta eller på annat sätt erkänner fordringen (till exempel en delbetalning eller ett skriftligt medgivande).</li>
<li>Du som borgenär skickar ett skriftligt krav eller en skriftlig påminnelse.</li>
<li>Du väcker talan – hos domstol, Kronofogden eller genom skiljeförfarande.</li>
</ul>
<p>Efter ett avbrott börjar enligt 6 § en helt ny preskriptionstid av samma längd löpa från dagen för avbrottet. En treårig konsumentfordran kan alltså hållas vid liv förbi tre år genom upprepade skriftliga påminnelser eller ett erkännande. Har avbrottet skett genom rättslig åtgärd räknas den nya fristen enligt 7 § istället från den dag dom eller slutligt beslut meddelas.</p>
<p>Poängen: skriftlighet är allt. En muntlig påminnelse på bygget räknas i teorin men lämnar dig utan bevis. Skicka skriftligt och spara kopian.</p>

<h2>Checklista: så undviker du att förlora betalning</h2>
<ol>
<li>Fakturera i tid – helst direkt efter avslutat arbete eller godkänd slutbesiktning.</li>
<li>Dokumentera beställning och alla ÄTA skriftligt, med datum.</li>
<li>Håll koll på AB 04/ABT 06-fristerna: sex månader för de flesta krav, två år för kontraktssumma och moms.</li>
<li>Skicka skriftliga påminnelser i tid – varje påminnelse startar en ny frist.</li>
<li>Spara bevis på att kravet skickats (utskick, e-post, mottagningskvitto).</li>
<li>Ansök om betalningsföreläggande hos Kronofogden innan fristen löper ut om kunden inte betalar.</li>
</ol>

<h2>Vanliga missförstånd</h2>
<p><strong>"Jag har tio år på mig."</strong> Bara mot företag. Mot en privatperson är fristen tre år, och under AB 04/ABT 06 ofta bara sex månader för ÄTA.</p>
<p><strong>"Preskriptionen börjar när jag fakturerar."</strong> Nej – den börjar vid fordringens tillkomst, alltså när tjänsten fullgjordes. Att vänta med fakturan förlänger inget.</p>
<p><strong>"En muntlig påminnelse räcker."</strong> Rättsligt kanske, men bevisläget är hopplöst. Skriftligt krav gäller.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på tidslinjen från offert till slutfaktura. När du bygger anbudet i <a href="/sv/verktyg/offert-mall">offertmallen</a> och sedan fakturerar via <a href="/sv/verktyg/faktura-mall">fakturamallen</a> får varje post ett tydligt datum och en spårbar koppling till beställningen – underlag som är guld värt om ett krav senare ifrågasätts. Verktygen räknar inte åt Kronofogden och de ersätter inte juridisk rådgivning, men de gör det svårare för en faktura att bli liggande tills det är för sent. Behöver du bevisa när arbetet fullgjordes eller när ett krav framställdes har du dokumentationen samlad på ett ställe.</p>

<h2>Vanliga frågor</h2>
<h3>Hur länge kan ett byggföretag vänta med att skicka fakturan?</h3>
<p>Det finns inget lagkrav på hur snabbt fakturan måste skickas. Men betalningskravet måste nå kunden inom preskriptionstiden – tre år mot en privatperson och tio år mot ett företag – annars förlorar du rätten till betalning. Under AB 04/ABT 06 gäller kortare avtalade frister.</p>
<h3>Från vilket datum räknas preskriptionstiden?</h3>
<p>Från fordringens tillkomst, alltså normalt när tjänsten är fullgjord – inte från fakturadatum. Du kan därför inte förlänga tiden genom att skjuta upp faktureringen.</p>
<h3>Kan jag rädda en fordran som snart preskriberas?</h3>
<p>Ja. Enligt 5 § avbryts preskriptionen genom ett skriftligt krav eller en påminnelse, genom att kunden erkänner skulden eller delbetalar, eller genom rättslig åtgärd. Efter avbrottet löper en ny preskriptionstid av samma längd (6 §).</p>
<h3>Vad händer med ÄTA-arbeten i en entreprenad?</h3>
<p>Under AB 04/ABT 06 preskriberas de flesta entreprenadfordringar, inklusive ÄTA, om de inte framställs inom sex månader från godkänd slutbesiktning. Kontraktssumman och momsen har två år. Framställ ÄTA-kraven skriftligt i god tid.</p>

<h2>Kom igång</h2>
<p>En fast rutin för slutfakturering skyddar kassaflödet bättre än någon påminnelseavgift. Sätt upp din nästa faktura i <a href="/sv/verktyg/faktura-mall">fakturamallen</a> med korrekta datum och dokumenterat underlag. Vill du se hur ByggExp håller ihop offert, ÄTA och slutfaktura i ett flöde? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>, <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturor</a> och <a href="/sv/blog/fakturera-som-hantverkare">Så fakturerar du som hantverkare</a>.</p>
`;

const A_PRESKRIPTION_FAKTURA_BYGG_SLUTFAKTURA: BlogPost = {
  _id: "code-"+"preskription-faktura-bygg-slutfaktura",
  title: "Preskription av byggfakturor: så länge kan du vänta med slutfakturan", slug: "preskription-faktura-bygg-slutfaktura", locale: "sv",
  excerpt: "En byggfordran preskriberas efter 3 år mot konsument och 10 år mot företag – men entreprenadavtal kan krympa fristen till 6 månader. Så undviker du att förlora betalningen.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_PRESKRIPTION_FAKTURA_BYGG_SLUTFAKTURA_HTML,
  seoTitle: "Preskription byggfaktura & slutfaktura | ByggExp", seoDescription: "3 år mot privatperson, 10 år mot företag. Så länge kan du vänta med slutfakturan innan fordran preskriberas – och så håller du den vid liv.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:00:00.000Z", createdAt: "2026-08-19T22:00:00.000Z", updatedAt: "2026-08-19T22:00:00.000Z",
};

const A_FABRIKSBETONG_ELLER_BLANDA_SJALV_HTML = `
<p>Kort svar först: för byggarens grund- och plattjobb är fabriksbetong nästan alltid rätt så snart volymen passerar ungefär 1–2 m³. Säck- och torrbetong lönar sig bara på riktigt små gjutningar, plintar och lagningar. Ändå tar diskussionen ny fart på varje bygge, för säck känns billigt i butiken – tills man räknar in antalet säckar och mantimmarna. Den här guiden ger dig mängd- och kostnadsräkningen som avgör valet, riktad till hantverkare och byggföretag, inte gör-det-självaren.</p>

<p>Vill du snabbt översätta area och tjocklek till kubik, antal säckar och kronor? Räkna direkt i vår gratis <a href="/sv/verktyg/betong-kalkylator">betongkalkylator -></a> innan du bestämmer dig.</p>

<h2>De två alternativen i korthet</h2>
<p>Fabriksbetong (färdigbetong) levereras med roterbil och gjuts direkt eller via pump. Du beställer hållfasthetsklass, till exempel C25/30, och får en dokumenterad produkt. Minsta leverans är oftast 4–6 m³ – beställer du mindre betalar du ändå för minimivolymen. Kapaciteten styr framkomligheten: en 3-axlad bil lastar 5,5–6 m³, en 4-axlad upp till 7,5 m³ och en trailerbil upp till 11 m³. Betong väger cirka 2 400 kg/m³, så bilen blir tung på mjuk mark.</p>
<p>Säck- eller torrbetong köps som 25 kg-säckar. En säck ger cirka 12,5 liter färdig massa, vilket innebär runt 80 säckar per kubikmeter (72–88 beroende på packning). Byggmax Grovbetong Basic är C20/25 och Finja Grovbetong C32/40 enligt EN 206. Massan blandas för hand, med tombola eller tvångsblandare – och det är där arbetstiden gömmer sig.</p>

<h2>Så räknar du mängden</h2>
<p>Grundformeln är enkel: volym = area × tjocklek. Lägg på 5–10 % för spill och ojämn undergrund.</p>
<ul>
<li><strong>Exempel 1:</strong> 20 m² platta × 0,10 m = 2 m³.</li>
<li><strong>Exempel 2:</strong> 40 m² platta × 0,10 m = 4 m³.</li>
</ul>
<p>Ska du översätta till säck multiplicerar du kubiken med 80. Alltså: 2 m³ = cirka 160 säckar och 4 m³ = cirka 320 säckar. Redan här börjar bilden klarna – 320 säckar är fyra pallar som ska bäras, öppnas, blandas och tömmas innan betongen börjar binda. Mer om spillpåslag finns i vår guide om <a href="/sv/blog/spillprocent-bygg-material">spillprocent för byggmaterial</a>.</p>

<h2>Kostnadsjämförelse per m³</h2>
<p>Råvarupriset ab fabrik för C25/30 ligger på cirka 900–1 100 kr/m³ exkl. moms, C30/37 eller starkare på 1 000–1 300 kr/m³ och special (fiber, lätt) på 1 100–1 800 kr/m³. Levererat och beställt via betongbil hamnar totalpriset ofta på 1 500–3 500 kr/m³ inkl. transport, och en minorder på 4–6 m³ landar på cirka 10 000–25 000 kr totalt.</p>
<p>Pump är ett tillägg på 5 000–15 000 kr: standardräckvidd upp till cirka 20 m kostar 5 000–10 000 kr, längre räckvidd 10 000–15 000 kr. Räkna även med prispåslag för snabbhårdnande (+500–1 500 kr/m³), fiber (+300–800 kr/m³) och frostbeständig (+500–1 000 kr/m³). Kväll och helg ger +10–30 %.</p>
<p>Säckbetong ser billig ut per säck men inte per kubik: 80 säckar × 33–45 kr = cirka 2 600–3 600 kr/m³ i enbart material. Det är alltså klart dyrare per kubik än fabriksbetongens råvara – och då har vi inte lagt till en enda arbetstimme. Poängen är tydlig: så snart volymen blir märkbar är säck dyrare i både material och arbete.</p>

<h2>Räkneexempel byggaren känner igen</h2>
<p><strong>(a) 15 m² garageplatta, 0,10 m ≈ 1,5 m³.</strong> Med säck: cirka 120 säckar × 40 kr = 4 800 kr i material. Med fabriksbetong slår minimivolymen och eventuell etablering till, vilket kan äta upp fördelen. Här kan säck försvaras, särskilt om åtkomsten är dålig och du ändå har folk på plats.</p>
<p><strong>(b) 40 m² husgrund, 0,10 m ≈ 4–5 m³.</strong> Med säck: 320–400 säckar. Bara att blanda och tömma det för hand är flera fulla arbetsdagar för ett lag, och kvaliteten blir svår att hålla jämn. Med fabriksbetong plus pump är gjutningen klar på några timmar. Räknar du yrkeslön på 380–520 kr/tim blir mantimmarna dyrare än hela pumpkostnaden. Fabriksbetong vinner klart på både kronor och tid.</p>

<h2>Brytpunkten och tidsfaktorn</h2>
<p>Yrkesfolk sätter den praktiska gränsen för handblandning vid cirka 1–2 m³. En 9 m²-platta krävde 64 säckar och var mycket tung för en person. Över ungefär 1 m³ hinner betongen börja binda medan du blandar nästa sats, jämn vct och ordentlig vibrering blir svårt att hålla, och du behöver realistiskt tre man. Arbetstiden är den dolda kostnaden – räkna alltid in den när du jämför, precis som du gör i din efterkalkyl. Vill du säkra att marginalen håller när du prissätter jobbet? Testa vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator -></a>.</p>

<h2>Kvalitet, hållfasthet och dokumentation</h2>
<p>Fabriksbetong levereras med deklarerad hållfasthets- och exponeringsklass enligt EN 206 samt följesedel. Det är avgörande för bärande grund och när jobbet ska besiktigas eller omfattas av garanti. Säckbetong (C20/25–C32/40) räcker gott till plintar och enkla plattor, men jämnheten hänger helt på din blandning – fel vattenmängd sänker hållfastheten snabbt. Vid bärande konstruktion väger dokumentationen ofta tyngre än några tusenlappar i prisskillnad.</p>

<h2>Regler, moms och ROT</h2>
<p>Momsen är 25 % på både material och arbete. ROT-avdraget 2026 är 30 % av arbetskostnaden med tak på 50 000 kr per person och år (gemensamt ROT- och RUT-tak 75 000 kr). Viktigt: ROT gäller inte nybyggnation eller ny grund, bara renovering och ombyggnad av befintlig bostad äldre än cirka fem år – och aldrig B2B-jobb mot företag. Gjuter du en ny platta kan kunden alltså sällan dra av. Arbetsmiljön väger också in: våt betong är starkt frätande (pH cirka 13) och klassas som hälsofarlig, EU kräver kromreducerad cement enligt REACH, och Arbetsmiljöverket varnar för upprepade tunga lyft – 25 kg-säckar överstiger riktvärdena för återkommande manuell hantering.</p>

<h2>Checklista och beslutsträd</h2>
<ul>
<li><strong>Under 1 m³ eller svår framkomlighet:</strong> säck, blanda på plats.</li>
<li><strong>1–4 m³:</strong> räkna – ofta fabriksbetong utan pump.</li>
<li><strong>Över 4 m³ eller bärande grund:</strong> fabriksbetong, boka pump vid dålig åtkomst, beställ rätt klass.</li>
<li><strong>Alltid vid gjutning över 1–2 m³:</strong> planera minst tre man oavsett metod.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte betongleverantören, men tar bort gissningarna före beställning. I betongkalkylatorn matar du in area och tjocklek och får ut kubik, antal säckar och en materialkostnad du kan lägga rakt in i offerten. Kombinerar du det med påslags- och marginalkalkylatorn ser du direkt hur pump, spill och mantimmar påverkar täckningsbidraget innan du lämnar pris. Underlaget blir spårbart, så att efterkalkyl och nästa anbud bygger på verkliga siffror i stället för magkänsla.</p>

<h2>Vanliga frågor</h2>
<h3>När lönar sig fabriksbetong framför säck?</h3>
<p>Grovt över 1–2 m³. Då blir säckbetongens materialkostnad (cirka 2 600–3 600 kr/m³) plus arbetstiden dyrare än en betongbil, och kvaliteten blir dessutom lättare att hålla jämn med fabriksbetong.</p>
<h3>Hur många säckar går det åt per kubikmeter?</h3>
<p>Cirka 80 säckar à 25 kg per m³, eftersom en säck ger runt 12,5 liter färdig massa. Spannet ligger på 72–88 säckar beroende på packning. En 40 m²-platta på 0,10 m kräver alltså omkring 320 säckar.</p>
<h3>Måste jag beställa en minimivolym fabriksbetong?</h3>
<p>Ja, oftast 4–6 m³. Beställer du mindre får du ändå betala för minimivolymen genom småmängds- eller underlasttillägg. Det är en av anledningarna till att riktigt små jobb kan vara billigare med säck.</p>
<h3>Kan kunden få ROT-avdrag på gjutning?</h3>
<p>Bara på arbetskostnaden och bara vid renovering eller ombyggnad av befintlig bostad äldre än cirka fem år – 30 % upp till 50 000 kr per person och år. Ny grund, nybyggnation och alla B2B-jobb faller utanför.</p>

<h2>Kom igång</h2>
<p>Räkna igenom ditt nästa jobb i <a href="/sv/verktyg/betong-kalkylator">betongkalkylatorn</a> och lägg resultatet i offerten på minuter. Vill du se hur ByggExp knyter ihop mängd, kostnad och marginal i din verksamhet? Boka en <a href="/sv/contact">demo</a> så visar vi upplägget.</p>

<p>Relaterat: <a href="/sv/blog/berakna-betongatgang-platta">Beräkna betongåtgång för platta</a>, <a href="/sv/blog/spillprocent-bygg-material">Spillprocent på byggmaterial</a>, <a href="/sv/blog/kostnadskontroll-byggprojekt-marginal">Kostnadskontroll och marginal i byggprojekt</a>.</p>
`;

const A_FABRIKSBETONG_ELLER_BLANDA_SJALV: BlogPost = {
  _id: "code-"+"fabriksbetong-eller-blanda-sjalv",
  title: "Fabriksbetong eller blanda själv? Beslutsguide för grund- och plattjobb", slug: "fabriksbetong-eller-blanda-sjalv", locale: "sv",
  excerpt: "Praktisk brytpunkt, mängdräkning och kostnadsjämförelse som visar när betongbil slår säck på både kronor och mantimmar.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/betong-preview.webp", contentHtml: A_FABRIKSBETONG_ELLER_BLANDA_SJALV_HTML,
  seoTitle: "Fabriksbetong eller blanda själv | ByggExp", seoDescription: "Beslutsguide för byggare: när lönar sig fabriksbetong med pump vs säckbetong på grund- och plattjobb? Mängd- och kostnadsräkning med tydlig brytpunkt.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/betong-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:03:00.000Z", createdAt: "2026-08-19T22:03:00.000Z", updatedAt: "2026-08-19T22:03:00.000Z",
};

const A_LEASA_ELLER_KOPA_MASKINER_BYGGFORETAG_HTML = `
<p>Ska ni binda kapital i en ny grävmaskin eller sprida ut kostnaden på en leasingavgift? Frågan avgör inte bara kassaflödet den närmaste månaden – den påverkar låneutrymme, avdrag och den totala kostnaden över maskinens hela livslängd. Rätt svar beror på tre saker: hur ert kassaflöde ser ut, hur länge ni tänker använda maskinen och vilket redovisningsregelverk (K2 eller K3) ni tillämpar. Den här guiden går igenom besluten steg för steg med 2026 års siffror.</p>

<p>Räkna på marginal och kapitalbindning innan du bestämmer dig – använd <a href="/sv/verktyg">våra gratis kalkylverktyg för byggföretag →</a> för att testa hur olika upplägg slår på likviditeten.</p>

<h2>Snabbguiden – när passar leasing och när passar köp?</h2>
<p>Innan detaljerna, en tumregel att utgå från:</p>
<ul>
<li><strong>Leasing passar</strong> när du vill bevara likviditet och låneutrymme, vill ha en jämn och förutsägbar månadskostnad, byter maskiner ofta för att ha senaste tekniken, eller driver ett växande företag där kapitalet gör mer nytta i pågående projekt.</li>
<li><strong>Köp passar</strong> när du använder maskinen länge (5 år eller mer), vill ha lägst total kostnad, vill äga en tillgång du kan sälja vidare, och har kassaflöde nog att bära anskaffningen utan att strypa driften.</li>
</ul>

<h2>Så påverkar valet likviditeten och låneutrymmet</h2>
<p>Vid köp binder du kapital direkt. En maskin för 400 000 kr tar 400 000 kr ur kassan (momsen får du visserligen tillbaka, men själva kostnaden ligger kvar som bunden tillgång). Finansierar du köpet med lån minskar du i stället ditt låneutrymme och belastar balansräkningen med en skuld.</p>
<p>Vid leasing sprids kostnaden ut på en löpande avgift, ofta över 3–5 år. Du binder inte kapital och sparar checkkrediten och låneutrymmet till andra projekt – ett tungt vägande argument för entreprenörer som ofta ligger ute med pengar innan slutfakturan betalas. Baksidan är att leasing är ett bindande avtal och att maskinen förblir leasegivarens egendom under hela perioden. Vill du läsa mer om hur kassaflödet styr besluten har vi en separat guide om <a href="/sv/blog/likviditet-byggforetag">likviditet i byggföretag</a>.</p>

<h2>Skatt och avdrag vid köp</h2>
<p>Hur ett köp behandlas skattemässigt beror på maskinens värde och livslängd.</p>
<ul>
<li><strong>Inventarier av mindre värde</strong> får kostnadsföras direkt samma år om anskaffningsvärdet är under ett halvt prisbasbelopp. För 2026 är prisbasbeloppet 59 200 kr, vilket ger en gräns på <strong>29 600 kr exklusive moms</strong>. Handverktyg och mindre maskiner hamnar ofta här.</li>
<li><strong>Korttidsinventarier</strong> – inventarier med en ekonomisk livslängd på högst 3 år – får alltid dras av direkt, oavsett pris.</li>
<li><strong>Dyrare maskiner</strong> som ska aktiveras skrivs av över tid. Vid räkenskapsenlig avskrivning kombinerar du huvudregeln (30-procentsregeln), där restvärdet får tas upp till lägst 70 % av föregående restvärde plus årets inköp minus försäljningar, med kompletteringsregeln (20-procentsregeln), som ger linjär avskrivning på 20 % per år och full avskrivning på 5 år. Du får välja den mest fördelaktiga metoden per år.</li>
</ul>
<p>Räkenskapsenlig avskrivning kräver ordnad bokföring som avslutas med årsbokslut, och att de skattemässiga avskrivningarna stämmer med bokföringen. Uppfylls inte det hänvisas du till restvärdesavskrivning på 25 %. Momsen på maskiner och verktyg (ej personbil) är normalt fullt avdragsgill och lyfts direkt vid köpet, och ränta på finansieringen är avdragsgill. Gränsdragningen mellan direktavdrag och avskrivning går vi igenom i detalj i guiden om <a href="/sv/blog/verktyg-direktavdrag-eller-avskrivning">direktavdrag eller avskrivning på verktyg</a>.</p>

<h2>Skatt och avdrag vid leasing</h2>
<p>Vid leasing gör du inga avskrivningar. Hela leasingavgiften kostnadsförs löpande och är i sin helhet avdragsgill enligt huvudregeln i 16 kap. 1 § inkomstskattelagen – utgifter för att förvärva och bibehålla inkomster. Momsen dras löpande på varje avgift; vid finansiell leasing, som Skatteverket ser som ett slags kreditköp, faktureras momsen ofta redan vid avtalets start.</p>
<p>Redovisningsmässigt är skillnaden viktig. Företag som tillämpar <strong>K2</strong> (och K1) ska alltid redovisa leasing som operationell leasing – tillgången hamnar aldrig i balansräkningen utan avgiften bokförs som en kostnad, i BAS-kontogrupp 52 (hyra av anläggningstillgångar). Företag som tillämpar <strong>K3</strong> kan, och för finansiella leasingavtal ska, redovisa avtalet som om maskinen vore köpt, med både tillgång och leasingskuld i balansräkningen. Vilket regelverk ni följer avgör alltså om leasingen syns på eller utanför balansräkningen.</p>

<h2>Totalkostnad över tid – ett räkneexempel</h2>
<p>Tänk dig en verktygspark eller mindre maskin med ett listpris på 300 000 kr och en användningstid på 5 år:</p>
<ul>
<li><strong>Köp:</strong> lägst total kostnad. Du betalar priset plus eventuell ränta på finansiering, och äger sedan en tillgång med ett restvärde du kan sälja.</li>
<li><strong>Finansiell leasing:</strong> dyrare totalt, eftersom finansiärens ränta, påslag och vinst ligger inbakade i avgiften.</li>
<li><strong>Operationell leasing med serviceavtal:</strong> normalt dyrast, men ger en jämn och förutsägbar månadskostnad där service ingår.</li>
</ul>
<p>Poängen: över maskinens hela livslängd är köp och leasing skattemässigt neutrala – det totala avdraget blir detsamma. Leasing blir alltså sällan billigare, utan du betalar en premie för förutsägbarhet och bevarad likviditet. När du prissätter jobb där maskinkostnaden ska bäras, testa hur avgiften slår på marginalen med vår <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylator</a>.</p>

<h2>Beslutsmatris – fem frågor att ställa</h2>
<ol>
<li><strong>Hur länge ska maskinen användas?</strong> Länge (5 år+) talar för köp; korta bytescykler för leasing.</li>
<li><strong>Hur ser kassaflödet ut?</strong> Ansträngt kassaflöde talar för leasing; god likviditet gör köp möjligt.</li>
<li><strong>Behöver ni senaste tekniken?</strong> Ja talar för leasing med regelbundna byten.</li>
<li><strong>Vilket K-regelverk tillämpar ni?</strong> K2 håller leasing utanför balansräkningen; K3 kan tvinga in finansiell leasing i balansräkningen.</li>
<li><strong>Ingår service?</strong> Behöver ni driftsäkerhet utan egna verkstadskostnader kan operationell leasing med serviceavtal löna sig trots högre pris.</li>
</ol>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att bara jämföra månadskostnad mot inköpspris utan att räkna på hela livslängden.</li>
<li>Att glömma att leasingavtalet är bindande i 3–5 år även om projekten sinar.</li>
<li>Att missa direktavdraget för maskiner under 29 600 kr och i onödan aktivera dem.</li>
<li>Att blanda ihop maskinbeslutet med rena förbrukningsavdrag – se hur <a href="/sv/blog/avdrag-arbetsklader-verktyg">avdrag för arbetskläder och verktyg</a> fungerar separat.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisningskonsult, men ger dig underlaget för att fatta beslutet. Med kalkylverktygen räknar du på hur en maskinkostnad – köpt eller leasad – påverkar marginalen på de jobb där den ska bäras, och du får ett grepp om kapitalbindning innan du binder dig. Du samlar kostnader och prissättning på ett ställe, så att beslutet vilar på siffror från din egen verksamhet i stället för känsla. Den skattemässiga bedömningen stämmer du av med din redovisningskonsult.</p>

<h2>Vanliga frågor</h2>
<h3>Är det alltid billigare att köpa än att leasa?</h3>
<p>Över hela livslängden är köp normalt billigast, eftersom leasegivarens ränta, påslag och vinst ligger inbakade i avgiften. Skattemässigt är alternativen dock neutrala – det totala avdraget blir detsamma. Du betalar alltså en premie för leasingens förutsägbarhet och bevarade likviditet.</p>
<h3>Vad är gränsen för att dra av en maskin direkt 2026?</h3>
<p>Inventarier av mindre värde får dras av direkt om anskaffningsvärdet är under ett halvt prisbasbelopp, vilket för 2026 är 29 600 kr exklusive moms. Dessutom får korttidsinventarier med en livslängd på högst 3 år alltid dras av direkt, oavsett pris.</p>
<h3>Hamnar leasade maskiner i balansräkningen?</h3>
<p>Det beror på regelverket. Tillämpar ni K2 redovisas all leasing som operationell och tillgången hamnar aldrig i balansräkningen. Tillämpar ni K3 ska finansiella leasingavtal redovisas som om maskinen vore köpt, med både tillgång och leasingskuld i balansen.</p>
<h3>Får jag dra av momsen på en leasad maskin?</h3>
<p>Ja, momsen på maskiner och verktyg (ej personbil) är normalt fullt avdragsgill. Vid köp lyfts hela ingående momsen direkt, och vid leasing dras momsen löpande på varje avgift – vid finansiell leasing faktureras den dock ofta redan vid avtalets start.</p>

<h2>Kom igång</h2>
<p>Räkna på ditt eget upplägg innan du bestämmer dig – testa <a href="/sv/verktyg">ByggExps gratis kalkylverktyg</a> och se hur maskinkostnaden slår på marginalen med <a href="/sv/verktyg/paslag-marginal-kalkylator">påslags- och marginalkalkylatorn</a>. Vill du se hur ByggExp samlar kalkyl och kostnader för hela verksamheten, <a href="/sv/contact">boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/verktyg-direktavdrag-eller-avskrivning">Verktyg – direktavdrag eller avskrivning?</a>, <a href="/sv/blog/likviditet-byggforetag">Likviditet i byggföretag</a>, <a href="/sv/blog/avdrag-arbetsklader-verktyg">Avdrag för arbetskläder och verktyg</a>.</p>
`;

const A_LEASA_ELLER_KOPA_MASKINER_BYGGFORETAG: BlogPost = {
  _id: "code-"+"leasa-eller-kopa-maskiner-byggforetag",
  title: "Leasa eller köpa maskiner i byggföretaget? Beslutsguide 2026", slug: "leasa-eller-kopa-maskiner-byggforetag", locale: "sv",
  excerpt: "En konkret beslutsguide för byggföretag som ska välja mellan att leasa eller köpa maskiner och verktyg – med fokus på likviditet, avdrag och totalkostnad.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_LEASA_ELLER_KOPA_MASKINER_BYGGFORETAG_HTML,
  seoTitle: "Leasa eller köpa maskiner? Guide | ByggExp", seoDescription: "Leasa eller köpa byggmaskiner 2026? Beslutsguide om likviditet, avskrivning, moms och totalkostnad för byggföretag. Med räkneexempel och beslutsmatris.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:06:00.000Z", createdAt: "2026-08-19T22:06:00.000Z", updatedAt: "2026-08-19T22:06:00.000Z",
};

const A_RESTIDSERSATTNING_BYGGAVTALET_HTML = `
<p>Fyra ersättningar blandas ihop varje månad på byggföretagens lönebesked: restidsersättning, reskostnadsersättning, milersättning och traktamente. De styrs av olika logiker och delvis av olika regelverk - kollektivavtalet styr vad du <em>betalar ut</em>, Skatteverket styr vad som är <em>skattefritt</em>. Räknar du fel blir det antingen dyrt (för mycket utbetalt, eller skatteplikt du missat) eller en tvist med Byggnads (för lite utbetalt). Den här guiden reder ut vad varje post faktiskt ersätter och var skattegränsen går 2026.</p>

<p>Vill du snabbt räkna ut ersättningen? Använd vår gratis <a href="/sv/verktyg/restidsersattning-kalkylator">restids- och reseersättningskalkylator</a>. För att hålla ordning på restid, resväg och arbetstimmar per projekt kan du använda <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall -&gt;</a> som underlag till reseräkning och lönekörning.</p>

<h2>Fyra begrepp, fyra logiker</h2>
<p>Det första steget är att sluta behandla posterna som samma sak. De ersätter olika saker:</p>
<ul>
<li><strong>Restidsersättning</strong> - betalning för själva <em>tiden</em> den anställde lägger på att resa till och från arbetsplatsen eller förrättningen. Det är en tidsersättning, inte en kostnadsersättning.</li>
<li><strong>Reskostnadsersättning</strong> - ersättning för <em>resvägen/kostnaden</em> mellan bostad och arbetsplats. Här ligger körningen med egen bil, samåkning och kollektivtrafik.</li>
<li><strong>Milersättning</strong> - inte en egen post, utan <em>km-satsen inuti</em> reskostnadsersättningen när den anställde kör egen bil.</li>
<li><strong>Traktamente</strong> - ersättning för <em>mat och logi</em> vid tjänsteresa med övernattning. En helt separat värld med egna skatteregler.</li>
</ul>
<p>Ihopblandning är dyr åt båda hållen: betalar du traktamente som om det vore skattefri milersättning missar du arbetsgivaravgifter, och betalar du bara reskostnad när avtalet också kräver restidsersättning ligger du under kollektivavtalet.</p>

<h2>Reskostnadsersättning för daglig resa hem&harr;arbetsplats</h2>
<p>Detta är den vanligaste posten - den dagliga resan mellan bostad och arbetsplats. Enligt Byggavtalet gäller följande huvudlinjer:</p>
<ul>
<li>Ersättning utgår när <strong>enkel resväg överstiger 2 km</strong>.</li>
<li><strong>Egen bil: 2,50 kr/km (25 kr/mil).</strong></li>
<li><strong>Samåkning:</strong> föraren får 2,50 kr/km plus 0,85 kr/km per passagerare; passageraren får 0,85 kr/km.</li>
<li><strong>Kollektivtrafik</strong> ersätts mot uppvisat kvitto.</li>
<li>Ersättningen betalas <strong>per arbetsdag</strong> och är <strong>capad vid avtalets traktamentesnivå</strong> - den dagliga reskostnaden kan alltså inte överstiga dagsbeloppet för traktamente.</li>
</ul>
<p>Notera att detta är avtalssatser som revideras 1 maj varje avtalsår. Kontrollera alltid gällande belopp mot Byggavtalet innan lönekörning - satserna ovan speglar 2025-utgåvan.</p>

<h2>Restidsersättning - betalning för själva restiden</h2>
<p>Restidsersättning träder in när resan går utanför den fria zonen eller till en förrättning, och den ersätter den <em>tid</em> den anställde reser - inte kilometrarna. Det innebär två saker i praktiken:</p>
<ul>
<li>Restidsersättning och reskostnadsersättning <strong>kan kombineras</strong> för samma resa: den ena betalar timmarna, den andra bilen.</li>
<li>Beloppet är en tidsbaserad avtalssats som är <strong>avtalsberoende och revideras</strong> - kontrollera aktuell restidssats i gällande avtalstext innan du lägger in den i lönesystemet.</li>
</ul>
<p>En vanlig felkälla är att blanda restidsersättning med milsatser från andra avtal. Det förekommer siffror i omlopp (exempelvis restidsersättning uttryckt i kr/mil) som i själva verket hör hemma i plåt-, ventilations- eller VVS-avtalen - inte i Byggavtalet. Använd aldrig en sats du inte kunnat verifiera mot Byggavtalets egen text.</p>

<h2>Traktamente och förrättningstillägg vid övernattning</h2>
<p>Vid tjänsteresa med övernattning tillkommer traktamente. Här möts två regelverk som inte är samma sak:</p>
<ul>
<li><strong>Byggavtalets traktamente</strong> ligger i 2025-utgåvan på cirka 435 kr/dygn - alltså <em>över</em> Skatteverkets skattefria gräns. Mellanskillnaden är skattepliktig lön. Beloppet reduceras med 55% om arbetsgivaren står för maten och 35% om arbetsgivaren står för boendet. Exakt kronbelopp är avtalsberoende och revideras.</li>
<li><strong>Skatteverkets skattefria traktamente inrikes 2026:</strong> helt maximibelopp 300 kr/heldag (halvdag 150 kr, natt 150 kr). Efter tre månader på samma ort sänks skattefritt belopp till 210 kr, efter två år till 150 kr. Från 2026 gäller nya, striktare allmänna råd.</li>
<li><strong>50-km- och övernattningskravet:</strong> skattefritt traktamente förutsätter tjänsteresa med övernattning mer än 50 km från både bostad och den vanliga verksamhetsorten.</li>
</ul>
<p>Utöver traktamentet finns <strong>förrättningstillägg</strong> vid eget boende på annan ort: 35% av traktamentesbeloppet de första 90 dagarna, därefter 20%. Detta tillägg är <strong>helt skattepliktigt</strong>, till skillnad från den skattefria delen av traktamentet.</p>

<h2>Skatt - skiljelinjen som ställer till det</h2>
<p>Den avgörande insikten: <strong>kollektivavtalet styr utbetalningen, Skatteverket styr skatten.</strong> De sammanfaller inte.</p>
<ul>
<li>Skattefri milersättning för egen bil är <strong>25 kr/mil (2,50 kr/km)</strong> enligt Skatteverket 2026 - oförändrat sedan 2024. Det är ett tak för skattefrihet, inte en avtalsnivå.</li>
<li>Allt avtalet betalar <em>över</em> den skattefria nivån blir <strong>skattepliktig lön med arbetsgivaravgifter</strong>. Det gäller traktamentets överskjutande del och hela förrättningstillägget.</li>
<li>Byggnadsarbetares reseersättning styrs av kollektivavtalet, inte av reseavdraget i deklarationen, eftersom de typiskt saknar fast arbetsplats. Att blanda ihop avtalets reseersättning med deklarationens reseavdrag är en klassisk felkälla.</li>
</ul>

<h2>Räkneexempel (B2B)</h2>
<p>En montör kör egen bil 6 mil tur och retur till ett projekt utanför fri zon och övernattar en vecka. Så här bör posterna redovisas <em>separat</em> på lönebeskedet (använd aktuella avtalssatser - beloppen nedan är ca-värden för att visa strukturen):</p>
<ol>
<li><strong>Reskostnadsersättning:</strong> 6 mil &times; 25 kr/mil = ca 150 kr för resdagen. Skattefri upp till Skatteverkets milgräns.</li>
<li><strong>Restidsersättning:</strong> antal restimmar &times; gällande avtalssats. Ersätter tiden, redovisas som egen rad. Skattepliktig som lön.</li>
<li><strong>Traktamente:</strong> avtalets dygnsbelopp (ca 435 kr) - varav 300 kr skattefritt och resterande del skattepliktig. Reduceras om arbetsgivaren står för mat eller boende.</li>
</ol>
<p>Poängen är inte kronorna utan uppdelningen: tre olika rader, med rätt skattefri/skattepliktig hantering på varje. Hänvisa alltid till aktuell avtalstext för de exakta beloppen.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp löser inte lönekörningen åt dig, men det ger dig underlaget som gör den korrekt. Med tidrapportering per projekt får du timmar, restid och resväg registrerade på rätt kostnadsställe redan när jobbet utförs - istället för att rekonstruera dem i efterhand ur minnet. Det ger dig ett spårbart underlag till reseräkning, lönesystem och eventuell granskning från Byggnads, och gör det enklare att hålla restidsersättning, reskostnad och traktamente på separata rader. Beloppen och avtalssatserna lägger du in enligt gällande Byggavtal - ByggExp håller ordning på tiden och platsen, du håller ordning på satserna.</p>

<h2>Vanliga frågor</h2>
<h3>Är restidsersättning och reskostnadsersättning samma sak?</h3>
<p>Nej. Restidsersättning betalar för den tid resan tar, reskostnadsersättning betalar för resvägen/kostnaden (bil, samåkning eller kollektivtrafik). De kan utgå samtidigt för samma resa - den ena för timmarna, den andra för kilometrarna.</p>
<h3>Vilken milersättning gäller för byggnadsarbetare 2026?</h3>
<p>Reskostnaden vid egen bil enligt Byggavtalet är 2,50 kr/km (25 kr/mil) i 2025-utgåvan. Skatteverkets skattefria milersättning är också 25 kr/mil 2026. Betalar arbetsgivaren mer än den skattefria nivån blir överskjutande del skattepliktig lön. Kontrollera aktuell avtalssats, som revideras 1 maj.</p>
<h3>Måste traktamentet över 300 kr beskattas?</h3>
<p>Ja. Skatteverkets skattefria maximibelopp inrikes 2026 är 300 kr/heldag. Byggavtalets traktamente ligger över det, och mellanskillnaden är skattepliktig lön med arbetsgivaravgifter. Efter tre månader på samma ort sänks den skattefria gränsen till 210 kr, efter två år till 150 kr.</p>
<h3>Gäller Skatteverkets reseavdrag för byggnadsarbetare?</h3>
<p>Nej, inte automatiskt. Byggnadsarbetares reseersättning styrs av kollektivavtalet eftersom de typiskt saknar fast arbetsplats - inte av reseavdraget i deklarationen. Att blanda ihop de två är en vanlig felkälla.</p>

<h2>Kom igång</h2>
<p>Bygg ett spårbart reseunderlag redan när jobbet utförs med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapport-mall</a>, och håll restid, reskostnad och traktamente på separata rader. Vill du se hur tidrapportering per projekt kan koppla ihop tid, resväg och lönesunderlag i din verksamhet? <a href="/sv/contact">Boka en demo</a>. Använd Byggavtalet 2025-2027 och Skatteverkets belopp för 2026 som dina primärkällor för de exakta satserna.</p>

<p>Relaterat: <a href="/sv/blog/traktamente-byggnadsarbetare-2026">Traktamente för byggnadsarbetare 2026</a>, <a href="/sv/blog/ob-overtid-byggavtalet-rakna">OB och övertid enligt Byggavtalet - så räknar du</a>, <a href="/sv/blog/maste-ha-kollektivavtal-bygg">Kollektivavtal i byggbranschen</a>.</p>
`;

const A_RESTIDSERSATTNING_BYGGAVTALET: BlogPost = {
  _id: "code-"+"restidsersattning-byggavtalet",
  title: "Restidsersättning och reskostnad enligt Byggavtalet - så räknar arbetsgivaren rätt 2026", slug: "restidsersattning-byggavtalet", locale: "sv",
  excerpt: "Restid, reskostnad, milersättning och traktamente blandas ihop dagligen - här är den tydliga uppdelningen enligt Byggavtalet, med skattegränsen som ställer till det.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_RESTIDSERSATTNING_BYGGAVTALET_HTML,
  seoTitle: "Restidsersättning Byggavtalet 2026 | ByggExp", seoDescription: "Så skiljer arbetsgivaren restidsersättning, reskostnad, milersättning och traktamente enligt Byggavtalet 2026 - med skatteperspektiv och räkneexempel.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:09:00.000Z", createdAt: "2026-08-19T22:09:00.000Z", updatedAt: "2026-08-19T22:09:00.000Z",
};

const A_KONTROLLERA_KUNDENS_ROTUTRYMME_HTML = `
<p>Som byggföretag lägger du ut ROT-rabatten först och får den tillbaka sist. Under fakturamodellen ger du kunden 30 % avdrag på arbetskostnaden direkt på fakturan, och begär sedan utbetalningen från Skatteverket efter att kunden betalat sin del. Godkänner Skatteverket inte avdraget är det du – inte kunden – som står för förlusten. Två saker avgör om du faktiskt får betalt: att kundens avdragsutrymme räcker, och att avtalet innehåller ett förbehåll som gör kunden betalningsskyldig om det inte gör det.</p>

<p>Innan du lämnar offert kan du räkna ut exakt hur mycket ROT som gäller på jobbet med <a href="/sv/verktyg/rot-avdrag-kalkylator">vår gratis ROT-avdragskalkylator</a> – den delar upp arbetskostnad och material så du ser avdraget och kundens nettopris direkt.</p>

<h2>Så fungerar ROT 2026 i korthet</h2>
<p>Från och med 1 januari 2026 är ROT-avdraget tillbaka på 30 % av arbetskostnaden. Kunden betalar 70 % och avdraget täcker 30 %. Material, resor, utrustning och administrativa avgifter ger aldrig avdrag – bara själva arbetet.</p>
<p>Taken 2026 ser ut så här:</p>
<ul>
<li>ROT och RUT delar ett gemensamt tak på 75 000 kr per person och år.</li>
<li>ROT har dessutom ett eget innertak på 50 000 kr per person och år.</li>
<li>En kund kan alltså aldrig få mer än 50 000 kr i ROT, även om RUT är helt oanvänt.</li>
</ul>
<p>Eftersom utrymmet räknas per person har ett par som båda äger bostaden två separata tak på 50 000 kr. Det kan vara skillnaden mellan att ett större jobb ryms eller inte – men bara om båda står som ägare och båda har tillräckligt med skatt att reducera.</p>

<h2>Varför du kan fastna med ROT-delen</h2>
<p>Det finns i praktiken tre sätt att bli utan utbetalningen:</p>
<ol>
<li><strong>Utrymmet är förbrukat.</strong> Kunden har redan använt ROT hos andra utförare under året och nått innertaket på 50 000 kr.</li>
<li><strong>Kunden har för lite skatt.</strong> ROT är en skattereduktion – finns det inte tillräckligt med svensk skatt att reducera under året, kortas avdraget ned eller uteblir.</li>
<li><strong>Kunden eller objektet är inte avdragsberättigat.</strong> Fel typ av bostad, kunden äger eller bor inte i den, är under 18, eller huset är nybyggt (ROT gäller normalt inte på bostäder yngre än cirka fem år).</li>
</ol>
<p>Ett extra riskmoment 2026 är eftersläpningen från 2025. Den tillfälliga 50-procentssatsen gällde bara fakturor som kunden <em>betalade</em> mellan 12 maj och 31 december 2025 – betaldatumet, inte jobbdatumet, avgjorde satsen. Kunder som maxade ut sitt utrymme under den perioden kan ha mindre kvar än de tror när de bokar in nästa jobb hos dig.</p>

<h2>Kontrollera kundens avdragsutrymme INNAN jobbet</h2>
<p>Gissa aldrig på utrymmet – kontrollera det. Det finns två vägar:</p>
<ul>
<li>Du som utförare använder Skatteverkets e-tjänst <strong>"Mina skattereduktioner för rot, rut och grön teknik"</strong>.</li>
<li>Kunden loggar in på Mina sidor under "Rot och rut – mina avdrag" och visar sitt saldo för dig.</li>
</ul>
<p>Vyn visar tre siffror du behöver förstå:</p>
<ul>
<li><strong>Preliminärt</strong> – begärt men ännu inte utbetalt till andra företag.</li>
<li><strong>Beviljat</strong> – redan utbetalt.</li>
<li><strong>Kvarvarande</strong> – det som finns kvar att använda.</li>
</ul>
<p>Både preliminärt och beviljat räknas mot taket. Ett vanligt misstag är att bara titta på beviljat och missa att ett annat pågående jobb redan lagt beslag på utrymmet. Är kunden ett par – kontrollera båda personerna var för sig. Och kontrollera på nytt strax innan du sätter igång stora eller sena höstjobb, eftersom saldot ändras löpande under året.</p>

<h2>Skriv rätt förbehåll i avtalet</h2>
<p>Kontrollen minskar risken men eliminerar den inte. Nekar eller återkräver Skatteverket avdraget i efterhand kan du bara kräva mellanskillnaden av kunden om det skriftliga avtalet innehåller ett tydligt förbehåll om det. Domstolar har prövat detta: i ett fall förlorade entreprenören för att klausulen var för vagt formulerad, i ett annat vann entreprenören för att avtalet uttryckligen angav att fullt pris gällde om ROT inte godkändes.</p>
<p>Slutsatsen är enkel. Formuleringar i stil med "ROT tillkommer" eller "vid ev. avslag" räcker inte. Skriv i stället en klar mening om att kunden är skyldig att betala den återstående arbetskostnaden – till fullt pris – om Skatteverket nekar eller senare återkräver avdraget. Samma logik gäller vid återkrav: passa på att låta förbehållet uttryckligen täcka både avslag och återkrav.</p>
<p>Använd ett skriftligt avtal – Hantverkarformuläret eller Byggföretagens standardavtal – och lägg in förbehållet där, inte muntligt vid sidan av. Fakturan ska sedan spegla avtalet: dela upp arbete och material tydligt, för bara det ROT ska räknas på är arbetskostnaden. Med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall</a> får du en uppställning som redan skiljer arbete från material och gör ROT-raden spårbar.</p>

<h2>Praktisk checklista före, under och efter jobbet</h2>
<ul>
<li><strong>Före:</strong> kontrollera kvarvarande utrymme (per person), bekräfta ägande, ålder på bostaden och att kunden har skatt att reducera.</li>
<li><strong>Före:</strong> teckna skriftligt avtal med tydligt förbehåll om fullt pris vid avslag eller återkrav.</li>
<li><strong>Under:</strong> dokumentera faktiska arbetade timmar löpande – det är underlaget om avdraget ifrågasätts.</li>
<li><strong>Faktura:</strong> dela arbete och material, sätt ROT bara på arbetskostnaden och håll dig inom takens ram.</li>
<li><strong>Efter:</strong> begär utbetalning från Skatteverket direkt när kunden betalat, och håll koll på betaltidpunkten vid årsskiften.</li>
</ul>
<p>Att överskrida det gemensamma taket på 75 000 kr utlöser dessutom ett skattetillägg på 40 % för kunden och återbetalningskrav – ännu ett skäl att kontrollera utrymmet innan du fakturerar, inte efteråt.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att göra ROT-hanteringen till rutin i stället för en risk. Du räknar arbetskostnad och avdrag redan i offerten, för över samma uppdelning till avtal och faktura, och tidrapporterar timmarna som blir ditt underlag om Skatteverket ställer frågor. Förbehållet kan ligga som standardtext i din avtalsmall så att det aldrig glöms bort. ByggExp gör inte kontrollen mot Skatteverket åt dig – den gör du fortfarande i deras e-tjänst – men allt underlag samlas på ett ställe så att arbete och material alltid är åtskilda och spårbara.</p>

<h2>Vanliga frågor</h2>
<h3>Vem betalar om Skatteverket nekar ROT-avdraget?</h3>
<p>Risken ligger på dig som utförare. Du har redan gett rabatten och Skatteverket betalar inte ut den. Du kan bara kräva mellanskillnaden av kunden om ert skriftliga avtal har ett tydligt förbehåll om det.</p>
<h3>Hur mycket ROT kan en kund få 2026?</h3>
<p>Högst 50 000 kr per person och år i ROT, inom ett gemensamt ROT- och RUT-tak på 75 000 kr per person och år. Avdraget är 30 % av arbetskostnaden. Ett par som båda äger bostaden har två separata tak.</p>
<h3>Hur ser jag hur mycket avdragsutrymme kunden har kvar?</h3>
<p>Använd Skatteverkets e-tjänst "Mina skattereduktioner för rot, rut och grön teknik", eller be kunden visa saldot på Mina sidor. Titta på kvarvarande utrymme och kom ihåg att både preliminärt begärda och redan beviljade belopp räknas mot taket.</p>
<h3>Räcker det att skriva "ROT tillkommer" i offerten?</h3>
<p>Nej. Domstolar har underkänt vaga formuleringar. Skriv uttryckligen att kunden ska betala full arbetskostnad om Skatteverket nekar eller återkräver avdraget, i ett skriftligt avtal.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna avdrag och nettopris redan i offertläget med <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>, och bygg fakturan på <a href="/sv/verktyg/faktura-mall">fakturamallen</a> som skiljer arbete från material. Vill du se hur offert, avtal med förbehåll och tidrapport hänger ihop i ett flöde? <a href="/sv/contact">Boka en demo av ByggExp</a>.</p>
<p>Relaterat: <a href="/sv/blog/faktura-med-rotavdrag">Faktura med rotavdrag – exempel &amp; mall</a>, <a href="/sv/blog/skatteverket-nekar-rotavdrag-forbehall">Skatteverket nekar ROT – så skyddar förbehållet dig</a>, <a href="/sv/blog/byggfaktura-checklista-rot">Byggfaktura med ROT – checklista</a>.</p>
`;

const A_KONTROLLERA_KUNDENS_ROTUTRYMME: BlogPost = {
  _id: "code-"+"kontrollera-kundens-rotutrymme",
  title: "Kontrollera kundens ROT-utrymme innan jobbet – så slipper du fastna med avdraget", slug: "kontrollera-kundens-rotutrymme", locale: "sv",
  excerpt: "Du ligger ute med 30 % av arbetskostnaden tills Skatteverket godkänner – här är hur du kontrollerar kundens ROT-utrymme och skriver förbehållet som gör dig betald.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_KONTROLLERA_KUNDENS_ROTUTRYMME_HTML,
  seoTitle: "Kontrollera kundens ROT-utrymme | ByggExp", seoDescription: "Så minskar byggföretaget risken med ROT 2026: kolla kundens avdragsutrymme och skriv rätt förbehåll i avtalet innan jobbet startar. Konkret checklista.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T22:12:00.000Z", createdAt: "2026-08-19T22:12:00.000Z", updatedAt: "2026-08-19T22:12:00.000Z",
};

const A_LON_ELLER_UTDELNING_BYGGBOLAG_2026_HTML = `
<p>Driver du ett fåmansbygg-AB och undrar hur mycket lön du ska ta ut kontra hur mycket du kan plocka som lågbeskattad utdelning? Från och med 2026 gäller helt nya 3:12-regler – och de vänder upp och ner på den gamla tumregeln. Riksdagen beslutade reglerna den 26 november 2025 (SFS 2025:1361) och de trädde i kraft 1 januari 2026. Det här är alltså gällande lag, inte något förslag. Den viktigaste nyheten för dig: det gamla kravet på att ta ut en hög spärrlön är slopat – men det betyder inte att du ska sluta ta ut lön.</p>

<p>Vill du snabbt räkna på din egen situation? Använd <a href="/sv/verktyg">våra gratis kalkylatorer för byggföretag -&gt;</a> och stäm sedan av utfallet mot din redovisningskonsult.</p>

<h2>Det här är nytt 2026 för dig med bygg-AB</h2>
<p>Reformen ersätter både den gamla huvudregeln och förenklingsregeln med en enda gemensam beräkningsregel. I korthet:</p>
<ul>
<li><strong>Gränsbeloppet för 2026 räknas på inkomstbasbeloppet (IBB) för 2025 = 80 600 kr.</strong> Precis som tidigare bygger årets gränsbelopp på föregående års IBB. (IBB för 2026 är 83 400 kr och styr först gränsbeloppet för 2027.)</li>
<li><strong>Grundbelopp: 4 IBB = 322 400 kr</strong> (höjt från tidigare 2,75 IBB), fördelat lika på andelarna.</li>
<li><strong>Lönebaserat utrymme: 50 %</strong> av din andel av löneunderlaget minus ett schabloniserat löneavdrag på <strong>8 IBB = 644 800 kr</strong>.</li>
<li><strong>Löneuttagskravet är slopat.</strong> Du behöver inte längre ta ut en viss spärrlön för att få tillgodoräkna lönebaserat utrymme.</li>
<li><strong>4 %-spärren (kapitalandelskravet) är slopad</strong> – även ägare med under 4 % får lönebaserat utrymme.</li>
<li><strong>Karenstiden för trädabolag sänks från 5 till 4 kalenderår</strong> – men den förändringen tillämpas först för beskattningsår som börjar efter 31 december 2026, det vill säga i praktiken från 2027.</li>
<li><strong>Ränteuppräkningen av sparat utdelningsutrymme slopas</strong> – sparat utrymme växer inte längre av sig självt.</li>
</ul>

<h2>Så beräknas ditt gränsbelopp nu – en formel istället för två regler</h2>
<p>Gränsbeloppet är det belopp du kan ta ut som lågbeskattad utdelning (20 %). Den nya beräkningen är enkel att ställa upp:</p>
<p><strong>Gränsbelopp = grundbelopp (322 400 kr) + 50 % × (din andel av löneunderlaget − 644 800 kr)</strong></p>
<p>Löneunderlaget är samtliga kontanta bruttolöner i bolaget under föregående år – lönerna till dina anställda hantverkare <em>och</em> din egen lön räknas in. Ju större lönesumma bolaget har, desto större lönebaserat utrymme. För dig som har flera anställda på plats är det här ofta den stora hävstången.</p>

<h2>Måste du fortfarande ta ut lön? Ja – men av andra skäl</h2>
<p>Eftersom spärrlönen är borta kan man frestas att skruva ned den egna lönen till noll. Det är oftast ett misstag, av två skäl.</p>
<p>För det första kvarstår <strong>50-gånger-taket</strong>: det lönebaserade utrymmet kan aldrig bli större än 50 gånger din egen (eller en närståendes) kontanta <em>årslön</em>. Nollar du lönen faller utrymmet till noll. I praktiken är taket dock en låg tröskel för ett bolag med stor lönesumma (se räkneexemplet nedan) – men någon lön måste ändå tas ut.</p>
<p>För det andra ger personlig lön <strong>pension, sjukpenning (SGI) och föräldrapenning</strong>. Det gör utdelning aldrig. Att nolla lönen kan därför kosta mer i förlorad trygghet än det ger i skatt.</p>

<h2>Räkneexempel: bygg-AB med fyra anställda hantverkare</h2>
<p>Anta att du är ensam ägare och att bolaget har en total lönesumma på <strong>3 000 000 kr</strong> under 2025 (dina fyra hantverkare plus din egen lön). Utdelning som du tar under 2026 beräknas med de nya reglerna men på 2025 års löneunderlag.</p>
<ul>
<li>Lönebaserat utrymme = 50 % × (3 000 000 − 644 800) = <strong>1 177 600 kr</strong></li>
<li>Grundbelopp = <strong>322 400 kr</strong></li>
<li>Totalt gränsbelopp ≈ <strong>1 500 000 kr</strong> lågbeskattat utrymme</li>
</ul>
<p>Men 50x-taket sätter en undre gräns för lönen, och det räknas på <em>årslön</em>: det lönebaserade utrymmet får vara högst 50 gånger din egen kontanta årslön. För att inte kapa utrymmet på 1 177 600 kr behöver din årslön alltså vara minst 1 177 600 / 50 = <strong>23 552 kr/år</strong>, det vill säga runt <strong>1 960 kr/mån</strong>. Det är en låg tröskel som nästan varje ägare passerar. Den verkliga frågan är därför inte hur lite lön du kan komma undan med, utan hur mycket du <em>bör</em> ta ut för pension, SGI och för att optimera skatten mot brytpunkten.</p>

<h2>Lön eller utdelning – var går brytpunkten 2026?</h2>
<p>Jämför den effektiva skatten. Utdelning inom gränsbeloppet beskattas totalt med cirka <strong>36,5 %</strong> (bolagsskatt 20,6 % plus 20 % på det som delas ut). Lön belastas med arbetsgivaravgift 31,42 % plus marginalskatt – men under den statliga brytpunkten sänker jobbskatteavdraget din faktiska skatt rejält, och du tjänar in pension.</p>
<p>Skiktgränsen för statlig skatt 2026 är 643 000 kr och brytpunkten (efter grundavdrag) 660 400 kr, motsvarande cirka <strong>55 000 kr/mån</strong>. Över den nivån tillkommer 20 % statlig skatt på lönen, och då blir lågbeskattad utdelning nästan alltid billigare.</p>
<p><strong>Tumregel:</strong> ta ut lön upp till den statliga brytpunkten (cirka 55 000 kr/mån) och lyft överskottet som utdelning inom gränsbeloppet. Vill du sätta rätt debiteringsgrad så att bolaget faktiskt bär den lönen kan du räkna baklänges med vår <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylator</a>.</p>

<h2>Vanliga tankefel i byggbranschen</h2>
<ul>
<li><strong>Att tro att 2025 års spärrlön fortfarande gäller.</strong> Kravet på 6 IBB + 5 % (eller 9,6 IBB) är borta. Sikta i stället på pension, SGI och brytpunkten – och håll koll på 50x-taket.</li>
<li><strong>Att blanda ihop vilket års regler som styr.</strong> Utdelning tagen under 2025 följer de gamla reglerna (K10 i vår 2026). Utdelning under 2026 följer de nya (K10 våren 2027).</li>
<li><strong>Att vänta med sparat utrymme.</strong> Ränteuppräkningen är slopad – sparat utdelningsutrymme växer inte längre av sig självt.</li>
</ul>

<h2>Checklista inför årsskiftet 2026/2027</h2>
<ol>
<li>Stäm av din egen årslön mot 50x-taket så att du inte kapar det lönebaserade utrymmet.</li>
<li>Kontrollera att lönen minst når den statliga brytpunkten om skatteutfallet pekar dit – annars väg mot pension och SGI.</li>
<li>Säkerställ att bolaget har utdelningsbara medel och att försiktighetsregeln i ABL är uppfylld.</li>
<li>Äg andelarna den 1 januari – gränsbeloppet bestäms vid ingången av året.</li>
<li>Fatta formellt beslut om utdelning på bolagsstämma.</li>
<li>Se över sparat utdelningsutrymme och planera uttag – ingen ränteuppräkning längre.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp är byggt för hantverkare och byggföretag, inte för skattekonsulter – men rätt underlag gör lön-mot-utdelning-beslutet enklare. I ByggExp håller du ordning på tidrapporter, fakturor och projektekonomi så att du snabbt ser bolagets faktiska lönesumma och resultat, vilket är exakt de siffror gränsbeloppet vilar på. Med korrekt bokförd arbetskostnad och löneunderlag blir avstämningen med din redovisningskonsult en kontroll i stället för ett detektivarbete. Vi ger inte skatterådgivning – men vi ger dig siffrorna som beslutet bygger på.</p>

<h2>Vanliga frågor</h2>
<h3>Är de nya 3:12-reglerna verkligen beslutade?</h3>
<p>Ja. Riksdagen beslutade dem 26 november 2025 (SFS 2025:1361) och de gäller från 1 januari 2026. De tillämpas första gången för beskattningsår som börjar efter 31 december 2025, det vill säga för utdelning under 2026 som deklareras på K10 våren 2027. Den kortare karenstiden (4 år) är ett undantag – den tillämpas först för beskattningsår som börjar efter 31 december 2026.</p>
<h3>Måste jag ta ut lön nu när löneuttagskravet är slopat?</h3>
<p>Du är inte tvingad, men det lönar sig oftast. 50x-taket innebär att det lönebaserade utrymmet aldrig kan bli större än 50 gånger din egen kontanta årslön – i praktiken en låg tröskel, men noll lön ger noll utrymme. Framför allt ger lön pension, sjukpenning och föräldrapenning som utdelning aldrig ger, och du kan optimera skatten mot brytpunkten.</p>
<h3>Vilket års löner styr min utdelning 2026?</h3>
<p>Gränsbeloppet för utdelning under 2026 beräknas med de nya reglerna men på löneunderlaget från 2025. Du måste också äga andelarna vid ingången av 2026 för att få tillgodoräkna årets gränsbelopp.</p>
<h3>Hur mycket lön ska jag ta ut om jag vill optimera skatten?</h3>
<p>En vanlig tumregel 2026 är lön upp till den statliga brytpunkten, cirka 55 000 kr/mån, och överskottet som lågbeskattad utdelning inom gränsbeloppet. Kontrollera samtidigt att årslönen räcker för att inte kapa det lönebaserade utrymmet via 50x-taket. Exakt nivå beror på din lönesumma – stäm av med din konsult.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på ditt bolags siffror i <a href="/sv/verktyg">våra gratis verktyg för byggföretag</a>, och sätt rätt timpris för att bära den lön du planerar att ta ut. Vill du se hur ByggExp ger dig underlagen för lön- och utdelningsbeslutet i praktiken? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/nya-3-12-regler-2026">Nya 3:12-reglerna 2026 – så påverkas ditt bygg-AB</a>, <a href="/sv/blog/k10-blankett-2026">K10-blanketten 2026 steg för steg</a> och <a href="/sv/blog/periodiseringsfond-byggbolag">Periodiseringsfond för byggbolag</a>.</p>

<p><em>Den här artikeln är generell information och inte skatterådgivning. Stäm alltid av din situation med din redovisningskonsult eller skatterådgivare.</em></p>
`;

const A_LON_ELLER_UTDELNING_BYGGBOLAG_2026: BlogPost = {
  _id: "code-"+"lon-eller-utdelning-byggbolag-2026",
  title: "Lön eller utdelning i bygg-AB 2026 – nya 3:12-reglerna", slug: "lon-eller-utdelning-byggbolag-2026", locale: "sv",
  excerpt: "De nya 3:12-reglerna 2026 slopar löneuttagskravet – men lön lönar sig fortfarande. Så beräknas gränsbeloppet, så fungerar 50x-taket och här går brytpunkten.", tag: "Skatt",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_LON_ELLER_UTDELNING_BYGGBOLAG_2026_HTML,
  seoTitle: "Lön eller utdelning bygg-AB 2026 | ByggExp", seoDescription: "Nya 3:12-reglerna 2026 för fåmans-bygg-AB: så beräknas gränsbeloppet, hur 50x-taket räknas på årslön och var brytpunkten mellan lön och utdelning går.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T23:00:00.000Z", createdAt: "2026-08-19T23:00:00.000Z", updatedAt: "2026-08-19T23:00:00.000Z",
};

const A_SERVICEAVTAL_UNDERHALLSAVTAL_BYGGFORETAG_HTML = `
<p>De flesta byggföretag lever på projekt: en topp när ordern rullar in, ett hål när den är klar. Löpande service- och underhållsavtal löser precis det problemet. De ger återkommande intäkter (recurring revenue), jämnare beläggning mellan de stora jobben och en kundrelation som återkommer år efter år i stället för att ta slut vid slutbesiktning. Men ett serviceavtal som är slarvigt prissatt eller vagt skrivet blir snabbt en förlustaffär som binder resurser utan att ge marginal.</p>

<p>Grunden i ett bra serviceavtal är samma sak som i ett bra projekt: en tydlig offert. Börja i <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och bygg vidare med de avtalspunkter och prismodeller vi går igenom nedan.</p>

<h2>Vad ett serviceavtal faktiskt är — och inte är</h2>
<p>Ett enstaka reparationsuppdrag löser ett problem en gång. Ett serviceavtal förbinder dig i stället att upprätthålla en funktion över tid genom återkommande arbete: planerade underhållsronder, tillsyn, akuta åtgärder inom en viss inställelsetid. Kunden köper trygghet och tillgänglighet, inte en enskild insats.</p>
<p>Typiska motparter är bostadsrättsföreningar, fastighetsägare, förvaltningsbolag och företag med egna lokaler — men även villaägare som vill ha ett fast underhållsprogram. Skillnaden i avtalet är att omfattningen definieras framåt i tiden, inte som ett avgränsat leveransobjekt.</p>

<h2>Rätt avtalsgrund: ABFF och Aff-konceptet</h2>
<p>För projekt använder branschen AB, ABT och ABK. Motsvarigheten för återkommande drift, underhåll och service är <strong>ABFF</strong> (Allmänna bestämmelser för entreprenader inom fastighetsförvaltning och service) inom Aff-konceptet. Det är standardavtalsstrukturen för just den här typen av löpande tjänster.</p>
<p>Viktigt: ABFF gäller inte automatiskt som lag. Det måste <strong>åberopas uttryckligen</strong> i avtalet för att bli en del av det. Oavsett vilken avtalsgrund du väljer ska du reglera:</p>
<ul>
<li><strong>Omfattning</strong> — vad ingår i det fasta åtagandet och vad är tilläggsarbete.</li>
<li><strong>SLA och inställelsetider</strong> — hur snabbt du ska vara på plats vid fel, och när.</li>
<li><strong>Gränsdragning</strong> — planerat underhåll vs. akuta åtgärder, material vs. arbete.</li>
<li><strong>Uppsägning och avtalstid</strong> — löptid, förnyelse och uppsägningsvillkor.</li>
</ul>

<h2>Prismodeller för återkommande intäkter</h2>
<p>Vanliga ersättningsformer är fast pris, löpande räkning, takpris och budgetpris. För serviceavtal fungerar sällan en enda modell. Den vanligaste och mest robusta lösningen är en kombination:</p>
<ul>
<li><strong>Fast abonnemang</strong> (månads-, kvartals- eller årsretainer) som täcker beredskap och planerat underhåll — det är detta som ger dig den förutsägbara intäkten.</li>
<li><strong>Löpande räkning</strong> för akuta åtgärder och tillkommande arbete utanför programmet. Löpande räkning är den mer riskneutrala formen: du får betalt för nedlagt arbete och havda kostnader.</li>
<li><strong>Takpris</strong> där kunden vill ha ett kostnadstak men du ändå debiterar faktisk tid upp till taket.</li>
</ul>
<p>Glöm inte att kalkylera in <strong>restid och beredskap</strong> i det fasta abonnemanget. Ett åtagande om två timmars inställelsetid har ett värde även de månader inget händer — det är kapacitet du reserverar.</p>

<h2>Så sätter du priset</h2>
<p>Utgå från din verkliga timkostnad plus påslag. Räkna ut vad en debiterbar timme faktiskt måste ge med <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>, lägg ovanpå det ett underhållsprogram fördelat över året, och sätt marginal och riskpåslag utifrån hur bunden du blir.</p>
<p>Ett förenklat räkneexempel för en BRF-kund:</p>
<ol>
<li>Planerat underhåll: 4 ronder/år á 6 timmar = 24 timmar.</li>
<li>Beredskap och akutåtgärder (uppskattat snitt): 12 timmar/år.</li>
<li>Totalt ca 36 timmar/år á debiterbart timpris + påslag för restid.</li>
<li>Dela på 12 månader → en fast månadsavgift som täcker programmet, plus löpande räkning för allt utöver.</li>
</ol>
<p>För avtal som löper längre än 12 månader ska du <strong>bygga in indexreglering</strong> så att inflation och stigande lönekostnad inte äter upp marginalen. Använd KPI, byggkostnadsindex (BKI) eller entreprenadindex. En prisjusteringsklausul anger grundpriset (anbudspriset) och det slutliga priset (grundpris plus indexpåslag). Utan indexklausul är ett treårigt fastprisavtal en tickande förlust.</p>

<h2>Moms och skatt du måste ha rätt</h2>
<p>Här gör många fel — och fel i momsen på ett löpande avtal upprepas varje faktura.</p>
<ul>
<li><strong>Omvänd byggmoms är tvingande.</strong> Säljer du byggtjänster — inklusive reparation och underhåll av fastighet — till en köpare som själv säljer byggtjänster, ska du fakturera utan moms, ange köparens momsnummer och märka fakturan &quot;Omvänd skattskyldighet för byggtjänster gäller&quot;. Regeln är inte valfri. Vid uppdrag med flera tjänster styr huvudtjänsten: omfattas den av omvänd moms gäller det hela uppdraget. Ordinarie byggmoms är annars 25 %.</li>
<li><strong>ROT-avdrag gäller bara privatbostäder.</strong> Från 1 januari 2026 är ROT 30 % av arbetskostnaden med tak 50 000 kr per person och år. Avdraget gäller endast arbetskostnad — aldrig material, resor eller utrustning — och hanteras via fakturamodellen. Företaget måste vara godkänt för F-skatt, och ansökan om utbetalning ska ha kommit in till Skatteverket senast 31 januari året efter att kunden betalade.</li>
<li><strong>ROT och RUT delar ett gemensamt tak.</strong> Rot och rut räknas ihop och är tillsammans högst 75 000 kr per person och år, varav rot får uppgå till högst 50 000 kr (rut ger 50 % av arbetskostnaden). Det är alltså inte två separata tak: har kunden redan använt t.ex. 40 000 kr i rut återstår bara 35 000 kr för rot samma år. Dubbelkolla kundens kvarvarande utrymme mot Skatteverket innan du utlovar något.</li>
</ul>

<h2>Kassaflöde och betalningsvillkor</h2>
<p>Ett återkommande avtal är en kassaflödesmaskin — om du sätter villkoren rätt. <strong>Fakturera abonnemanget i förskott</strong>, håll korta betalningsvillkor och reglera dröjsmålsräntan. Enligt räntelagen är dröjsmålsräntan referensräntan plus 8 procentenheter om inget annat avtalats. Riksbankens referensränta är 2,00 % för första halvåret 2026, vilket ger 10 % dröjsmålsränta. Vid B2B får du dessutom ta ut en förseningsersättning på 450 kr utan särskilt krav.</p>
<p>För de löpande delarna av avtalet kan pågående arbeten intäktsföras genom successiv vinstavräkning, så att intäkten matchar nedlagt arbete över tid.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ihop hela serviceavtalskedjan: du bygger offerten och avtalsunderlaget från mallen, kalkylerar timpriset så att det fasta abonnemanget faktiskt bär sina kostnader, och håller koll på nedlagd tid per kund så att gränsen mellan fast åtagande och löpande tilläggsarbete blir spårbar. Underlagen sparas samlat, vilket underlättar när du ska fakturera återkommande, tillämpa rätt momshantering och behålla dokumentation. Kom ihåg att räkenskapsinformation ska sparas i 7 år. Verktyget skriver inte avtalet åt dig och ersätter inte juridisk rådgivning — det ger dig struktur och siffror som håller.</p>

<h2>Vanliga frågor</h2>
<h3>Ska serviceavtal med ett annat byggföretag faktureras med eller utan moms?</h3>
<p>Utan moms. Säljer du underhålls- eller reparationstjänster på fastighet till en köpare som själv säljer byggtjänster gäller omvänd skattskyldighet. Fakturera utan moms, ange köparens momsnummer och märk fakturan med att omvänd skattskyldighet gäller. Regeln är tvingande.</p>
<h3>Kan en BRF-kund använda ROT-avdrag på ett serviceavtal?</h3>
<p>Nej. ROT gäller arbete i privatbostäder för fysiska personer. En bostadsrättsförening är en juridisk person och får inte ROT-avdrag. Enskilda medlemmar kan ha rätt till ROT för arbete inne i den egna lägenheten under vissa förutsättningar, men inte föreningen för gemensamma ytor.</p>
<h3>Hur hindrar jag att inflationen äter upp marginalen på ett flerårigt avtal?</h3>
<p>Skriv in en indexklausul. För avtal längre än 12 månader kopplar du priset till KPI, byggkostnadsindex eller entreprenadindex. Klausulen anger grundpris och slutligt pris (grundpris plus indexpåslag) så att kostnadsökningen fördelas mellan dig och kunden.</p>
<h3>Fast pris eller löpande räkning för serviceavtal?</h3>
<p>Kombinera. Lägg det planerbara underhållet och beredskapen som ett fast abonnemang — det ger den återkommande intäkten — och fakturera akuta åtgärder på löpande räkning. Då slipper du ta risken för oförutsägbara insatser samtidigt som kunden får ett förutsägbart baspris.</p>

<h2>Kom igång</h2>
<p>Börja med att bygga ditt serviceavtalsunderlag i <a href="/sv/verktyg/offert-mall">offertmallen</a> och kontrollera att timpriset bär abonnemanget med <a href="/sv/verktyg/timpris-kalkylator">timpris-kalkylatorn</a>. Vill du se hur ByggExp håller ihop återkommande fakturering och tidsuppföljning? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/skriva-offert">Så skriver du en offert som håller</a>, <a href="/sv/blog/timpris-hantverkare">Rätt timpris för hantverkare</a> och <a href="/sv/blog/tackningsbidrag-byggforetag">Täckningsbidrag för byggföretag</a>.</p>
`;

const A_SERVICEAVTAL_UNDERHALLSAVTAL_BYGGFORETAG: BlogPost = {
  _id: "code-"+"serviceavtal-underhallsavtal-byggforetag",
  title: "Serviceavtal och underhållsavtal för byggföretag", slug: "serviceavtal-underhallsavtal-byggforetag", locale: "sv",
  excerpt: "Löpande service- och underhållsavtal ger byggföretag återkommande intäkter och jämnare beläggning. Så sätter du pris, avtalsgrund och moms rätt.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_SERVICEAVTAL_UNDERHALLSAVTAL_BYGGFORETAG_HTML,
  seoTitle: "Serviceavtal för byggföretag | ByggExp", seoDescription: "Så bygger du lönsamma service- och underhållsavtal: rätt avtalsgrund (ABFF), prismodeller, indexklausul, omvänd byggmoms och korrekt rot-hantering 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T23:06:00.000Z", createdAt: "2026-08-19T23:06:00.000Z", updatedAt: "2026-08-19T23:06:00.000Z",
};

const A_ARBETSRESA_TJANSTERESA_BYGG_AVDRAG_HTML = `
<p>En resa till bygget kan vara två helt olika saker i skattelagens ögon. Är den en <strong>arbetsresa</strong> är den en privatresa som firman inte får betala skattefritt. Är den en <strong>tjänsteresa</strong> öppnar sig avdragen: milersättning och traktamente utan skatt. Skillnaden avgörs av ett enda begrepp – tjänstestället – och just på växlande byggarbetsplatser gör många fel som kan sluta i förmånsbeskattning och skattetillägg.</p>

<p>Vill du räkna på mil, traktamente och restid för ett faktiskt jobb? Använd <a href="/sv/verktyg">våra gratis kalkylatorer och mallar för bygg -&gt;</a> för att få siffrorna rätt innan du fakturerar eller lönekör.</p>

<h2>Nyckelbegreppet: tjänstestället</h2>
<p>Allt hänger på var den anställdas tjänsteställe ligger. Skatteverket har tre regler i tur och ordning. <strong>Huvudregeln</strong> säger att tjänstestället är platsen där man utför huvuddelen av arbetet. Det passar dåligt för bygg, där arbetet flyttar mellan objekt. Då gäller <strong>alternativregeln</strong>: tjänstestället blir den plats där den anställda hämtar och lämnar material, verktyg eller förbereder och avslutar arbetet – typiskt en depå, verkstad eller ett kontor. Först om ingen av dessa passar träder <strong>undantagsregeln</strong> in, och då blir bostaden tjänsteställe. Det gäller när arbetsplatserna är spridda och den anställda sällan besöker arbetsgivarens lokal. För byggföretag hamnar bedömningen därför nästan alltid i alternativ- eller undantagsregeln – sällan i huvudregeln.</p>

<h2>Var ligger byggarbetarens tjänsteställe?</h2>
<p>Skatteverket har en tydlig tumregel. Besöker den anställda arbetsgivarens lokal, depå eller kontor i genomsnitt <strong>mer än en gång per vecka</strong>, blir den platsen tjänsteställe. Sker besöken bara 2–3 gånger i månaden trots att byggarbetsplatserna växlar, blir <strong>bostaden</strong> tjänsteställe enligt undantagsregeln. Bedömningen görs över en längre period – ungefär två år vid tillsvidareanställning – så en enstaka avvikande vecka ändrar inget.</p>
<p>Det är arbetsgivaren som ansvarar för bedömningen, och den styr hela lönehanteringen. Har snickaren sitt tjänsteställe i firmans depå är resan hemifrån dit en arbetsresa, medan resan från depån ut till objektet är en tjänsteresa. Är bostaden tjänsteställe blir i stället resan hemifrån direkt till bygget en tjänsteresa från första metern. Två anställda på samma firma kan alltså ha olika utfall beroende på hur ofta de faktiskt kör in till depån.</p>

<h2>Arbetsresa = privatresa</h2>
<p>En resa mellan bostad och tjänsteställe är en arbetsresa och räknas skattemässigt som en privatresa. Betalar firman den – kontant, med drivmedelskort eller genom att bekosta pendlingen – uppstår en <strong>skattepliktig förmån</strong> värderad till marknadsvärdet. Arbetsgivaren ska då göra skatteavdrag och betala arbetsgivaravgifter på beloppet. Det finns med andra ord ingen skattefri väg att betala den anställdas väg hemifrån till tjänstestället. Den anställda kan i sin tur göra reseavdrag i deklarationen, men bara för den del av kostnaden som överstiger 15 000 kr per år (inkomstår 2026), och bil kräver normalt minst 5 km avstånd och minst 2 timmars tidsvinst mot kollektivtrafik.</p>

<h2>Tjänsteresa: nu öppnar avdragen</h2>
<p>En tjänsteresa är en resa från tjänstestället till en tillfällig arbetsplats. Först då får firman betala ut ersättning skattefritt. <strong>Skattefri milersättning 2026</strong> är oförändrad: 25 kr/mil (2,50 kr/km) med egen bil, 12 kr/mil för förmånsbil som drivs med bensin, diesel eller etanol, och 9,50 kr/mil för elförmånsbil. Betalar firman mer än schablonen beskattas den överskjutande delen som lön. Vid tjänsteresa med övernattning kan dessutom traktamente betalas ut skattefritt. Det är hela poängen med gränsdragningen: samma bilresa kan vara en icke avdragsgill privatresa eller en skattefri tjänsteresa, beroende på var tjänstestället placerats.</p>

<h2>Traktamente 2026 i praktiken</h2>
<p>De skattefria schablonbeloppen inrikes höjdes 2026. Ett <strong>helt dygn ger 450 kr</strong> när firman inte betalar för boendet – heldagstraktamentet är 300 kr, halvdag 150 kr och nattraktamente 150 kr (upp från 290/145/145 kr året innan). Två villkor måste vara uppfyllda: tjänsteresan ska innebära <strong>minst en övernattning</strong>, och resmålet ska ligga <strong>minst 50 km från både bostaden och tjänstestället</strong>. Bjuds den anställda på fria måltider reduceras traktamentet – för en inrikes heldag med minus 60 kr för frukost, minus 105 kr för lunch och minus 105 kr för middag. Är alla tre måltiderna fria reduceras traktamentet med 270 kr, det vill säga cirka 90 procent av maximibeloppet – bara knappt 10 procent (30 kr) återstår skattefritt för småutgifter. En dagsresa utan övernattning ger alltså inget skattefritt traktamente alls, oavsett hur långt bort bygget ligger.</p>

<h2>Tremånadersregeln och de nya 2026-reglerna</h2>
<p>Drar en tjänsteresa ut på tiden trappas det skattefria traktamentet ner. Efter <strong>tre månader</strong> på samma ort sänks det till 70 procent, alltså 210 kr per heldag. Efter <strong>två år</strong> sänks det till 50 procent, 150 kr per heldag. Ett viktigt undantag gäller den som arbetar under ständig förflyttning med rörlig arbetsplats – då börjar treperioden aldrig löpa.</p>
<p>Genom Skatteverkets allmänna råd SKV A 2025:5 skärptes reglerna. Avbrott kortare än fyra veckor samt semester och sjukdom <strong>förlänger</strong> treperioden i stället för att bryta den, men förlängning sker bara under tid den anställda skulle ha arbetat – helger räknas inte för den som jobbar måndag till fredag. Samtidigt höjdes dokumentationskraven: datum, syfte, avrese- och hemkomsttid samt resmål måste framgå för varje resa. Slarv med underlaget är den vanligaste orsaken till att skattefriheten ifrågasätts i efterhand.</p>

<h2>Kollektivavtalet vs skattereglerna</h2>
<p>Byggavtalet mellan Byggföretagen och Byggnads (2025-05-01 till 2027-04-30) har egna ersättningar som inte alltid matchar skattereglerna. Resekostnadsersättningen med egen bil är <strong>2,50 kr/km, alltså 25 kr/mil</strong> – samma nivå som den skattefria schablonen, vilket innebär att avtalets milersättning ryms inom det skattefria beloppet. Avtalstraktamentet är enligt Byggnads 390 kr per dygn och förutsätter mer än 70 km mellan bostad och arbetsplats samt övernattning; betalar arbetsgivaren för boendet reduceras beloppet med 35 procent. Poängen är ändå principiell: en ersättning kan vara avtalsenlig utan att vara skattefri. Betalar firman mer än de skattefria schablonerna – 25 kr/mil för milersättning eller maximibeloppet för traktamente – ska den <strong>överskjutande delen alltid lönebeskattas</strong>, även om den följer kollektivavtal. Avtalsenligt är inte samma sak som skattefritt.</p>

<h2>Checklista</h2>
<ul>
<li>Fastställ varje anställds tjänsteställe enligt huvud-, alternativ- eller undantagsregeln – och dokumentera bedömningen.</li>
<li>Räkna besöken i depån: mer än en gång per vecka i snitt = depån är tjänsteställe; annars ofta bostaden.</li>
<li>Behandla resa bostad–tjänsteställe som arbetsresa (privat) och betala den aldrig skattefritt.</li>
<li>Betala mil och traktamente skattefritt endast för tjänsteresor från tjänstestället till tillfälliga objekt.</li>
<li>Kontrollera 50-km-gränsen och övernattningskravet innan du betalar traktamente.</li>
<li>Bevaka tremånadersregeln och notera avbrott – kortare än fyra veckor förlänger perioden.</li>
<li>Skilj på avtalsersättning och skattefri schablon; lönebeskatta den överskjutande delen.</li>
<li>Spara reseunderlag med datum, syfte, tider och resmål i 7 år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper firman att hålla ordning på underlaget som skattereglerna kräver. Tidrapporteringen kopplar restid och körningar till rätt projekt, så att du i efterhand kan visa vilka resor som var tjänsteresor och vilka som var arbetsresor. Uppgifterna – datum, projekt och sträckor – samlas per anställd och blir ett spårbart underlag för lön och deklaration. ByggExp gör inte den skattemässiga bedömningen av tjänsteställe åt dig, men systemet ger dig den dokumentation som behövs för att bedömningen ska hålla vid en granskning, och som är enkel att spara de sju år du är skyldig att bevara den.</p>

<h2>Vanliga frågor</h2>
<h3>Är resan till bygget avdragsgill för firman?</h3>
<p>Det beror på var tjänstestället ligger. Är resan en tjänsteresa från tjänstestället till en tillfällig arbetsplats får firman betala milersättning och traktamente skattefritt. Är den en arbetsresa mellan bostad och tjänsteställe är den en privatresa som blir en skattepliktig förmån om firman betalar den.</p>
<h3>Vad innebär 50-kilometersgränsen?</h3>
<p>För skattefritt traktamente måste resmålet ligga minst 50 km från både bostaden och tjänstestället, och resan måste omfatta minst en övernattning. Uppfylls inte båda villkoren får inget skattefritt traktamente betalas ut.</p>
<h3>Räknas restiden till bygget som arbetstid?</h3>
<p>Skattereglerna avgör vad som är skattefritt, inte om restiden är betald. Byggavtalet har egna regler om restids- och reseersättning för längre resor, men de följer inte automatiskt skattereglerna för mil och traktamente. En ersättning kan alltså vara avtalsenlig och ändå skattepliktig om den överstiger de skattefria schablonerna.</p>
<h3>Kan bostaden vara tjänsteställe för en byggarbetare?</h3>
<p>Ja, enligt undantagsregeln. Om arbetsplatserna är spridda och den anställda bara besöker arbetsgivarens depå eller kontor 2–3 gånger i månaden blir bostaden tjänsteställe. Då blir resan hemifrån direkt till bygget en tjänsteresa.</p>

<h2>Kom igång</h2>
<p>Börja med att räkna på ett faktiskt jobb i <a href="/sv/verktyg">våra gratis bygg-kalkylatorer</a> och sätt rätt siffror på mil, traktamente och restid. Vill du se hur ByggExp samlar reseunderlaget automatiskt per projekt och anställd? <a href="/sv/contact">Boka en demo -&gt;</a> så visar vi upplägget för din firma.</p>

<p>Relaterat: <a href="/sv/blog/milersattning-2026">Milersättning 2026</a>, <a href="/sv/blog/traktamente-byggnadsarbetare-2026">Traktamente för byggnadsarbetare 2026</a> och <a href="/sv/blog/korjournal-krav-skatteverket-bygg">Körjournal – Skatteverkets krav för bygg</a>.</p>
`;

const A_ARBETSRESA_TJANSTERESA_BYGG_AVDRAG: BlogPost = {
  _id: "code-"+"arbetsresa-tjansteresa-bygg-avdrag",
  title: "Arbetsresa eller tjänsteresa – avdrag för byggföretag", slug: "arbetsresa-tjansteresa-bygg-avdrag", locale: "sv",
  excerpt: "Tjänstestället avgör om resan till bygget är en privat arbetsresa eller en avdragsgill tjänsteresa. Så sätter du milersättning och traktamente rätt 2026.", tag: "Skatt",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_ARBETSRESA_TJANSTERESA_BYGG_AVDRAG_HTML,
  seoTitle: "Arbetsresa vs tjänsteresa i bygg | ByggExp", seoDescription: "Arbetsresa eller tjänsteresa? Tjänstestället avgör om byggfirman får betala milersättning och traktamente skattefritt. 2026 års belopp och regler.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T23:09:00.000Z", createdAt: "2026-08-19T23:09:00.000Z", updatedAt: "2026-08-19T23:09:00.000Z",
};

const A_ENTREPRENADGARANTI_SAKERHET_AB04_HTML = `
<p>När en beställare handlar upp en utförandeentreprenad står ofta stora belopp på spel, och risken att motparten går i konkurs mitt i projektet är verklig. Därför ger AB 04 beställaren rätt att kräva en <strong>säkerhet</strong> av entreprenören – ett ekonomiskt skydd som täcker extrakostnader vid konkurs, fel som inte avhjälps och avbrott i produktionen. Reglerna finns i kapitel 6 §§ 21–23, och två nyckeltal styr det hela: säkerheten uppgår som huvudregel till <strong>10 % av kontraktssumman under entreprenadtiden</strong> och <strong>5 % under garantitiden</strong>. Förstår du hur de här nivåerna fungerar – och skillnaden mellan säkerhetstid och garantitid – slipper du både obehagliga överraskningar och felprissatta anbud.</p>

<p>Ska du räkna hem säkerhetskostnaden i ditt nästa anbud? Använd <a href="/sv/verktyg">våra gratis verktyg för byggföretag -></a> för kalkyler, mallar och checklistor.</p>

<h2>Vad säger AB 04 kap 6 om säkerhet?</h2>
<p>AB 04 är standardavtalet för utförandeentreprenad, framtaget av Byggandets Kontraktskommitté (BKK). Säkerhetsreglerna gäller bara när AB 04 faktiskt är inarbetat i kontraktshandlingarna – annars finns ingen automatisk rätt till säkerhet. I §§ 21–23 slås default-nivåerna fast: <strong>10 % av kontraktssumman under entreprenadtiden</strong> och <strong>5 % under garantitiden</strong>. Säkerheten ställs av entreprenören till förmån för beställaren.</p>
<p>En viktig detalj: nivåerna gäller "om inte annat föreskrivits". Både procentsatserna och tiderna är alltså förhandlingsbara och kan ändras i kontraktshandlingarna – till exempel i de administrativa föreskrifterna (AF-delen). Läser du inte AF-delen noga vet du inte vilken säkerhet som faktiskt är avtalad.</p>

<h2>Fullgörandesäkerhet och garantitidssäkerhet – två faser</h2>
<p>Säkerheten löper i två faser med olika belopp. Under byggets gång – entreprenadtiden – gäller den högre nivån på 10 %. Det kallas ibland fullgörandesäkerhet och ska täcka beställarens merkostnad om entreprenören inte fullgör sitt åtagande, exempelvis att ta in en ersättningsentreprenör.</p>
<p>Vid godkänd slutbesiktning sker en <strong>nedtrappning</strong> från 10 % till 5 %. Här ligger en klassisk fälla: enligt kap 6 § 21 löper 5 %-säkerheten som default bara i <strong>2 år efter godkännande</strong> – eller, om ett fel noterats vid besiktning inom den tiden, tills felet är avhjälpt. Garantitiden i AB 04 är däremot <strong>5 år för entreprenörens arbetsprestation</strong> och 2 år för material och varor. Säkerhetstiden och garantitiden är alltså två olika klockor. Vill beställaren ha säkerhet under hela den femåriga garantitiden måste det avtalas särskilt – det sker inte automatiskt.</p>

<h2>Bankgaranti eller fullgörandeförsäkring?</h2>
<p>Säkerheten kan ställas på två sätt, och båda är accepterade former enligt AB 04: en <strong>bankgaranti</strong> från entreprenörens bank, eller en <strong>fullgörandeförsäkring</strong> (garantiförsäkring) från ett försäkringsbolag eller garantibolag. Skillnaden i kostnad och likviditetspåverkan är betydande:</p>
<ul>
<li><strong>Kostnad:</strong> En fullgörandeförsäkring kostar grovt räknat runt 1 % av kontraktsvärdet. En bankgaranti kostar typiskt 2–3 % i avgifter och ränta.</li>
<li><strong>Motsäkerhet:</strong> Banken kräver normalt motsäkerhet, medan försäkringen oftast inte gör det.</li>
<li><strong>Likviditet:</strong> Bankgarantin låser företagets kreditutrymme och rörelsekapital under hela projektet inklusive garantitiden. Försäkringen binder inte kreditlinan och lämnar likviditeten fri.</li>
</ul>
<p>För mindre entreprenörer, som behöver varje krona av kreditutrymmet till löner och material, är fullgörandeförsäkringen ofta det billigare och smidigare valet. Räkna igenom vad som passar just din likviditetssituation – valet påverkar hur mycket du binder upp under projektets gång.</p>

<h2>Så ordnar du säkerheten i praktiken</h2>
<ol>
<li><strong>Läs kontraktshandlingarna och AF-delen</strong> – kontrollera vilken säkerhet, vilka nivåer och vilken varaktighet som faktiskt är avtalade. Utgå aldrig från att default gäller.</li>
<li><strong>Kontakta bank eller försäkringsförmedlare/garantibolag i god tid.</strong> Både bankgaranti och försäkring kräver kreditprövning och har ledtid – börja innan kontraktet ska undertecknas.</li>
<li><strong>Räkna in kostnaden i anbudet.</strong> 1–3 % av kontraktssumman är en reell kostnad som ska ligga i priset, inte ätas ur marginalen.</li>
<li><strong>Se till att säkerheten är på plats innan entreprenaden startar.</strong> Beställaren förväntas verifiera att avtalad säkerhet faktiskt är ställd före byggstart.</li>
</ol>

<h2>Vad kan beställaren kräva om säkerhet saknas?</h2>
<p>Beställaren bör kontrollera att säkerheten är ställd <em>innan</em> arbetet påbörjas – inte i efterhand. Ställer en part inte den avtalade säkerheten kan det, beroende på omständigheterna, ge grund för att <strong>innehålla betalning</strong> eller till och med <strong>häva avtalet</strong>. Säkerheten skyddar beställaren mot att entreprenören inte fullgör sina åtaganden, exempelvis vid insolvens och konkurs, och kan tas i anspråk för merkostnaden att anlita en ersättningsentreprenör, avhjälpa fel och täcka kostnader för stillestånd och försening.</p>
<p>Kopplingen till besiktning är central: noteras ett fel vid besiktning inom säkerhetstiden förlängs säkerheten tills felet är avhjälpt. Efter garantitiden övergår ansvaret i entreprenörens <strong>ansvarstid</strong>, som löper i 10 år från godkännande och inleds med garantitiden. Efter garantitidens utgång måste beställaren i regel bevisa väsentligt fel orsakat av entreprenörens vårdslöshet.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att tro att 5 %-säkerheten automatiskt täcker hela garantitiden på 5 år – den löper som default bara 2 år.</li>
<li>Att blanda ihop säkerhetstid, garantitid och ansvarstid – tre olika klockor.</li>
<li>Att glömma säkerhetskostnaden i anbudskalkylen och tappa marginal.</li>
<li>Att inte verifiera att säkerheten faktiskt är ställd innan byggstart.</li>
<li>Att låsa bankkrediten i onödan när en försäkringslösning hade varit billigare.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ordning på de ekonomiska villkoren i entreprenaden. I <a href="/sv/verktyg/offert-mall">vår offertmall</a> kan du strukturera anbudet så att säkerhetskostnaden och de avtalade villkoren blir tydliga redan från början – vilket minskar risken för missförstånd om vad som gäller kring säkerhet, garantitid och ansvarstid. Vi ger dig verktyg och underlag, men ersätter inte juridisk rådgivning: vid komplexa entreprenader bör du alltid stämma av kontraktshandlingarna med en jurist.</p>

<h2>Vanliga frågor</h2>
<h3>Hur stor säkerhet kan beställaren kräva enligt AB 04?</h3>
<p>Som huvudregel 10 % av kontraktssumman under entreprenadtiden och 5 % under garantitiden. Nivåerna gäller "om inte annat föreskrivits" och kan ändras i kontraktshandlingarna.</p>
<h3>Hur länge löper säkerheten?</h3>
<p>Den lägre säkerheten på 5 % löper som default i 2 år efter godkänd slutbesiktning – eller tills ett fel som noterats vid besiktning inom den tiden är avhjälpt. Det är kortare än garantitiden på 5 år för arbetsprestation, om parterna inte avtalat annat.</p>
<h3>Bankgaranti eller fullgörandeförsäkring – vad är billigast?</h3>
<p>En fullgörandeförsäkring kostar grovt runt 1 % av kontraktsvärdet och binder normalt inte kreditlinan. En bankgaranti kostar typiskt 2–3 % och låser företagets kreditutrymme, ofta mot motsäkerhet.</p>
<h3>Vad händer om entreprenören inte ställer avtalad säkerhet?</h3>
<p>Beställaren bör verifiera att säkerheten är ställd innan byggstart. Uteblir den kan det beroende på omständigheterna ge grund för att innehålla betalning eller häva avtalet.</p>

<h2>Kom igång</h2>
<p>Sammanfattat: 10 % under entreprenadtiden, 5 % under garantitiden, 2 år default säkerhetstid – och garantitid respektive ansvarstid som separata klockor. Kom igång med <a href="/sv/verktyg/offert-mall">vår offertmall</a> och räkna in säkerhetskostnaden i ditt nästa anbud. Vill du se hur ByggExp fungerar i din verksamhet? <a href="/sv/contact">Boka en demo här -></a>.</p>

<p>Relaterat: <a href="/sv/blog/garantitid-ansvarstid-ab-04">Garantitid och ansvarstid enligt AB 04</a>, <a href="/sv/blog/ab-04-och-abt-06">Skillnaden mellan AB 04 och ABT 06</a> och <a href="/sv/blog/entreprenadforsakring-allrisk-vad-tacker">Entreprenadförsäkring och allrisk – vad täcker den?</a>.</p>
`;

const A_ENTREPRENADGARANTI_SAKERHET_AB04: BlogPost = {
  _id: "code-"+"entreprenadgaranti-sakerhet-ab04",
  title: "Entreprenadgaranti och säkerhet enligt AB 04 – vad beställaren kan kräva", slug: "entreprenadgaranti-sakerhet-ab04", locale: "sv",
  excerpt: "AB 04 kap 6 ger beställaren rätt till säkerhet – 10 % under entreprenadtiden och 5 % under garantitiden. Här reder vi ut reglerna och valet mellan bankgaranti och försäkring.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_ENTREPRENADGARANTI_SAKERHET_AB04_HTML,
  seoTitle: "Säkerhet enligt AB 04 kap 6 | ByggExp", seoDescription: "Så fungerar entreprenadgaranti och säkerhet enligt AB 04 kap 6: 10 % under entreprenadtiden, 5 % under garantitiden, bankgaranti eller fullgörandeförsäkring.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:06:00.000Z", createdAt: "2026-08-20T08:06:00.000Z", updatedAt: "2026-08-20T08:06:00.000Z",
};

const A_FAKTURERINGSAVGIFT_HANTVERKARE_TILLATEN_HTML = `
<p>Frågan dyker upp i varje byggföretag förr eller senare: får vi lägga på en faktureringsavgift, och vad får vi ta betalt när kunden inte betalar i tid? Svaret handlar om att skilja på två helt olika saker. Dels avgifter du själv hittar på och lägger på fakturan (faktura- eller expeditionsavgift), dels de lagstadgade avgifterna som utlöses vid sen betalning (påminnelse, inkasso, dröjsmålsränta och förseningsersättning). En regel avgör allt i den första kategorin: avtal plus skälighet. Utan avtal, ingen rätt att ta betalt.</p>

<p>Vill du ha villkoren och beloppen på plats i själva underlaget kan du använda <a href="/sv/verktyg/faktura-mall">vår gratis faktura-mall -&gt;</a> där förfallodag, dröjsmålsränta och avgifter redan har en given plats.</p>

<h2>Faktureringsavgift: bara om den är avtalad i förväg</h2>
<p>En faktureringsavgift är ingen lagstadgad rättighet. Det finns ingen paragraf som ger dig rätt att ta ut den. Den vilar helt på avtalet mellan dig och kunden enligt avtalslagen (1915:218). Har ni kommit överens om avgiften står den sig - annars inte.</p>
<p>Den praktiska konsekvensen är enkel: avgiften måste finnas med i offert, avtal eller dina allmänna villkor <strong>innan</strong> jobbet börjar. En avgift som dyker upp först på fakturan, utan att kunden accepterat den i förväg, är inte något kunden är skyldig att betala. Det gäller oavsett om kunden är ett företag eller en privatperson. Mot företag är utrymmet större - två näringsidkare får i princip avtala fritt - men avtalskravet är detsamma. Skriv det, annars gäller det inte.</p>

<h2>Extra skydd när kunden är konsument</h2>
<p>Mot en privatperson räcker det inte att avgiften är avtalad. Den måste dessutom vara <strong>skälig</strong> och spegla din faktiska administrativa kostnad. En oskälig avgift kan angripas som ett otillbörligt villkor enligt avtalsvillkorslagen (1994:1512).</p>
<p>Här finns en fälla många missar: om fakturering är ditt enda eller normala betalsätt kan avgiften inte läggas på separat. Kostnaden anses då redan ingå i priset. Att bara erbjuda en faktura-med-avgift till en kund som saknar avgiftsfritt alternativ kan bedömas som oskäligt. Dessutom är konsumenttjänstlagen (1985:716) tvingande till konsumentens fördel vid bygg- och hantverkstjänster - du kan inte avtala bort skyddet till kundens nackdel.</p>
<p>Det praktiska rådet: baka in administrationskostnaden i timpriset eller materialpåslaget i stället för att ta ut en synlig faktureringsavgift mot privatpersoner. Vill du ändå ha en avgift, erbjud alltid en avgiftsfri betalväg vid sidan om.</p>

<h2>Vid sen betalning: de lagstadgade avgifterna</h2>
<p>När kunden inte betalar i tid öppnar sig ett annat regelverk. Här är beloppen fasta och styrda av lag (1981:739) om ersättning för inkassokostnader m.m., med belopp i förordning (1981:1057):</p>
<ul>
<li><strong>Påminnelseavgift - max 60 kr.</strong> Kräver att en påminnelseavgift avtalats med kunden i förväg. Endast <strong>en</strong> avgift per fordran, oavsett hur många påminnelser du skickar.</li>
<li><strong>Inkassoavgift (inkassokrav) - max 180 kr.</strong> Kräver inget föregående avtal - den är en lagstadgad rätt så snart skulden är förfallen, förutsatt att inkassokravet uppfyller inkassolagens (1974:182) formkrav. Max en per fordran.</li>
<li><strong>Avgift för amorteringsplan - max 170 kr.</strong> Om ni upprättar en betalningsplan.</li>
</ul>
<p>Notera skillnaden: påminnelseavgiften kräver avtal, inkassoavgiften gör det inte. Just därför är det extra viktigt att skriva in påminnelseavgiften i dina villkor - annars förlorar du den.</p>

<h2>Dröjsmålsränta enligt räntelagen</h2>
<p>Utöver avgifterna får du ta ut dröjsmålsränta enligt räntelagen (1975:635). Räntan är Riksbankens referensränta plus 8 procentenheter. För första halvåret 2026 (1 januari-30 juni) är referensräntan 2 procent, vilket ger en dröjsmålsränta på <strong>10 procent</strong>. Referensräntan sätts om av Riksbanken den 1 januari och 1 juli varje år, så kontrollera aktuell nivå inför varje halvår.</p>
<p>Räntan börjar löpa från den avtalade förfallodagen om ni satt en sådan. Har ni ingen avtalad förfallodag löper räntan först 30 dagar efter att du skickat fakturan eller kravet (räntelagen 4 §). Mot konsument är 30-dagarsregeln i praktiken tvingande. Dröjsmålsräntan måste framgå på fakturan eller påminnelsen för att fungera smidigt i praktiken.</p>

<h2>B2B-bonusen: förseningsersättning 450 kr</h2>
<p>Är kunden ett företag - även enskild firma - eller en myndighet får du dessutom ta ut en fast förseningsersättning på <strong>450 kr</strong>. Den gäller inte mot konsument. Det fina är att den inte kräver vare sig avtal eller påminnelse. Den blir tillämplig så snart fakturan är förfallen och ersätter påminnelse- och inkassoavgift upp till beloppet 450 kr (du staplar alltså inte 60 + 180 ovanpå).</p>
<p>Kom också ihåg förfalloreglerna mellan företag: en fordran mellan näringsidkare förfaller senast 30 dagar efter att fakturan skickats. En längre betalningstid gäller bara om du som säljare uttryckligen accepterat den. Offentliga beställare måste alltid betala inom 30 dagar och den tiden går inte att avtala bort (prop. 2012/13:36 Snabbare betalningar).</p>

<h2>Så villkorar du det rätt - checklista</h2>
<ol>
<li>Skriv in faktureringsavgift och påminnelseavgift i offert och allmänna villkor - innan jobbet startar.</li>
<li>Ange förfallodag och dröjsmålsränta på varje faktura.</li>
<li>Separera villkoren för konsument respektive företag - de har olika golv och tak.</li>
<li>Mot konsument: baka hellre in administrationen i priset, eller erbjud en avgiftsfri betalväg.</li>
<li>En påminnelse räcker - avgiften är max 60 kr per fordran oavsett antal utskick.</li>
<li>Mot företag: glöm inte de 450 kr i förseningsersättning som inte kräver avtal.</li>
<li>Dokumentera överenskommelsen så du kan visa att avgiften var avtalad.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp bygger du fakturor och underlag där förfallodag, dröjsmålsränta och avtalade avgifter finns med från start, så att inget läggs på i efterhand. Du kan hålla isär villkorsuppsättningar för konsument- och företagskunder och återanvända dem i offert och faktura, vilket gör det enklare att uppfylla avtalskravet. ByggExp ger däremot inte individuell juridisk rådgivning - verktyget hjälper dig strukturera underlagen korrekt, men ansvaret för vilka avgifter du tar ut är ditt.</p>

<h2>Vanliga frågor</h2>
<h3>Är en faktureringsavgift laglig mot hantverkarens kund?</h3>
<p>Ja, om den avtalats i förväg. Faktureringsavgiften är ingen lagstadgad avgift utan vilar på avtalslagen. Mot konsument måste den dessutom vara skälig och spegla faktisk kostnad, och den får inte tas ut om fakturering är ditt enda betalsätt.</p>
<h3>Måste vi ha avtal för att ta ut påminnelseavgift?</h3>
<p>Ja. Påminnelseavgiften på max 60 kr kräver att den avtalats med kunden i förväg, och du får bara ta en per fordran. Inkassoavgiften på 180 kr kräver däremot inget avtal - den är en lagstadgad rätt när skulden är förfallen och inkassokravet uppfyller formkraven.</p>
<h3>Hur hög är dröjsmålsräntan 2026?</h3>
<p>Första halvåret 2026 är dröjsmålsräntan 10 procent, eftersom Riksbankens referensränta är 2 procent och räntelagen lägger till 8 procentenheter. Referensräntan justeras 1 januari och 1 juli, så kontrollera nivån varje halvår.</p>
<h3>Får vi ta ut de 450 kronorna även mot privatpersoner?</h3>
<p>Nej. Förseningsersättningen på 450 kr gäller bara när kunden är ett företag eller en myndighet. Mot konsument får du använda påminnelseavgift (om avtalad), inkassoavgift, avgift för amorteringsplan och dröjsmålsränta.</p>

<h2>Kom igång</h2>
<p>Lägg avgifter, förfallodag och dröjsmålsränta på rätt plats direkt i <a href="/sv/verktyg/faktura-mall">faktura-mallen</a>, eller utforska fler underlag bland <a href="/sv/verktyg">våra gratis verktyg</a>. Vill du se hur det fungerar i praktiken, <a href="/sv/contact">boka en demo</a>. Detta är allmän information och inte individuell juridisk rådgivning.</p>

<p>Relaterat: <a href="/sv/blog/vad-ska-faktura-innehalla-bygg">Vad ska en byggfaktura innehålla?</a>, <a href="/sv/blog/paminnelse-inkasso-avgift-bygg">Påminnelse och inkassoavgift i byggbranschen</a>, <a href="/sv/blog/betalningsvillkor-faktura-bygg">Betalningsvillkor på byggfakturan</a>.</p>
`;

const A_FAKTURERINGSAVGIFT_HANTVERKARE_TILLATEN: BlogPost = {
  _id: "code-"+"faktureringsavgift-hantverkare-tillaten",
  title: "Får byggföretaget ta ut faktureringsavgift och påminnelseavgift? Så gör du det lagligt (2026)", slug: "faktureringsavgift-hantverkare-tillaten", locale: "sv",
  excerpt: "Så avgör avtal och skälighet vilka avgifter ditt byggföretag lagligt får lägga på fakturan - och vad som gäller mot konsument respektive företag 2026.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_FAKTURERINGSAVGIFT_HANTVERKARE_TILLATEN_HTML,
  seoTitle: "Faktureringsavgift hantverkare tillåten? | ByggExp", seoDescription: "Får du som byggföretag ta ut faktura-, påminnelse- och inkassoavgift? Så villkorar du avgifterna lagligt 2026 - mot både konsument och företag.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:09:00.000Z", createdAt: "2026-08-20T08:09:00.000Z", updatedAt: "2026-08-20T08:09:00.000Z",
};

const A_BESTRIDEN_FAKTURA_BYGG_TVIST_HTML = `
<p>Att en kund bestrider fakturan är vanligt i byggbranschen – ofta handlar det om ÄTA-arbeten som ingen skrev ner, eller en slutsumma som blev högre än kunden väntade sig. Det farliga är inte bestridandet i sig, utan hur många byggföretag reagerar. Skickar du en tvistig faktura till inkasso eller Kronofogden kan du både bryta mot god inkassosed och försämra ditt eget läge när saken väl prövas. Här går vi igenom hur du som byggföretag agerar rätt från första invändningen.</p>

<p>Grunden i allt är att kravet vilar på ett tydligt underlag. Har du en specificerad faktura med avtalsreferens och tydliga poster står du starkare redan från start – bygg dina fakturor med <a href="/sv/verktyg/faktura-mall">vår gratis fakturamall -&gt;</a> så att varje krav går att försvara.</p>

<h2>Steg 1 – Ta emot bestridandet rätt</h2>
<p>Be alltid om ett skriftligt bestridande. Kunden ska ange exakt vad hen invänder mot och varför: är det priset, en påstådd brist, ett ÄTA-arbete som inte beställts, eller att arbetet inte anses utfört? Ett vagt "jag tänker inte betala" är inte samma sak som ett sakligt bestridande – och du behöver veta skillnaden för att kunna svara.</p>
<p>Avgör också vilket regelverk som gäller, för det styr hela din strategi:</p>
<ul>
<li><strong>Konsument:</strong> tvingande konsumenttjänstlagen gäller, ofta i kombination med standardavtal som ABS 18 eller Hantverkarformuläret 17. Kunden kan vända sig till ARN.</li>
<li><strong>Företagskund (B2B):</strong> dispositiva köplagen och normalt entreprenadstandardavtalen AB 04 eller ABT 06 gäller. Här styr avtalet i högre grad vad som krävs för att kravet ska hålla.</li>
</ul>

<h2>Steg 2 – Dokumentationen avgör tvisten</h2>
<p>Bevisbördan ligger på den som påstår att en fordran finns – alltså på dig. Det är byggföretaget som måste kunna visa att det finns ett avtal, att arbetet är utfört och att beloppet är rätt beräknat. Kan du inte det, spelar det ingen roll hur rimligt kravet känns.</p>
<p>Samla därför ihop allt underlag direkt när bestridandet kommer:</p>
<ul>
<li>Avtal, offert eller orderbekräftelse med prisform</li>
<li>Skriftliga ÄTA-beställningar</li>
<li>Byggdagbok med löpande anteckningar</li>
<li>Tidsedlar och materialåtgång</li>
<li>Foton före, under och efter</li>
<li>Egenkontroller och besiktningsunderlag</li>
<li>Mejl, sms och annan kommunikation</li>
</ul>
<p>Den absolut vanligaste svagheten är muntliga tilläggsbeställningar. "Kan du fixa det här också medan du ändå är här" känns självklart på plats – men utan en skriftlig ÄTA blir det ord mot ord i en tvist. En löpande <a href="/sv/verktyg/byggdagbok-mall">byggdagbok</a> där ändringar noteras med datum är ofta det som fäller avgörandet.</p>

<h2>Steg 3 – Gör INTE detta</h2>
<p>Lämna aldrig en bestriden faktura till inkasso, och driv den inte vidare mot en betalningsanmärkning. En tvistig fordran får enligt god inkassosed inte drivas via inkasso – inkassolagen övervakas av IMY, och invänder gäldenären på sakliga grunder ska du i stället väcka talan i domstol, inte pressa fram betalning.</p>
<p>Samma sak gäller Kronofogden. Kronofogden är ingen dömande instans. Bestrider kunden ett betalningsföreläggande i tid kan Kronofogden inte pröva kravet – de lämnar helt enkelt tillbaka ärendet, och du står med valet att begära överlämnande till tingsrätten eller återkalla. Så länge kunden bestrider i tid får hen dessutom ingen betalningsanmärkning. Att köra på med betalningsföreläggande vid en genuin tvist är alltså både verkningslöst och tidsödande.</p>

<h2>Steg 4 – Säkra delbetalning av det ostridiga beloppet</h2>
<p>Sällan är hela fakturan omtvistad. Kanske ifrågasätts två ÄTA-poster medan grundentreprenaden är oomtvistad. Uppmana då kunden att betala den ostridiga delen och bara bestrida resten. Det är den korrekta hanteringen vid en delvis tvist – och den skyddar din likviditet samtidigt som du isolerar konflikten till den faktiska stridsfrågan.</p>
<p>Vid småhusentreprenad mot konsument är kunden enligt konsumenttjänstlagen 52 § inte skyldig att betala för mer än den del av arbetet som faktiskt utförts. Var därför tydlig i din begäran: specificera vad som är avslutat och ostridigt, och be om betalning av just det beloppet nu.</p>

<h2>Steg 5 – Ränta, påminnelse och prisregler</h2>
<p>Du har rätt att ta ut dröjsmålsränta enligt räntelagen: Riksbankens referensränta plus 8 procentenheter. Med referensräntan fastställd till 2,00 % för andra halvåret 2026 blir den lagstadgade dröjsmålsräntan <strong>10,00 %</strong>. Räntan löper från förfallodagen om en sådan angetts på fakturan, annars 30 dagar efter att kravet framställts skriftligen. En påminnelseavgift får läggas på – men kom ihåg att detta bara gäller den ostridiga delen. På det belopp som är genuint tvistigt driver du inte in ränta via påtryckning, utan får det prövat.</p>
<p>Mot konsument tillkommer prisreglerna. Har du lämnat en <em>ungefärlig</em> prisuppgift får slutpriset överstiga den med högst 15 % enligt konsumenttjänstlagen 36 §, om inte annan prisgräns avtalats eller du har rätt till pristillägg. Ett fast pris eller en bindande offert håller. Och tilläggsarbeten kräver att du först samråder med konsumenten – ÄTA utan samråd är svårt att få betalt för.</p>

<h2>Steg 6 – Vägen framåt när dialogen inte räcker</h2>
<p>Börja alltid med förhandling och försök till förlikning. En saklig genomgång av dokumentationen löser många tvister, och en förlikning där ni möts på halva vägen är ofta billigare än en process.</p>
<p>Räcker inte det står valet mellan betalningsföreläggande och stämning. Vid en verklig tvist är betalningsföreläggande meningslöst – Kronofogden lämnar tillbaka det så fort kunden bestrider. Då är stämning i tingsrätten rätt väg. Mot konsument kan ärendet också hamna hos ARN. Håll koll på preskriptionstiden: 3 år mot konsument och 10 år mot företagskund. Preskriptionsavbrott sker bland annat genom en skriftlig påminnelse eller genom att kunden erkänner skulden – då börjar en ny preskriptionstid löpa.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig bygga underlaget innan tvisten uppstår. Du skapar specificerade fakturor med tydlig prisform och avtalsreferens, och du för byggdagbok där ÄTA-arbeten, avvikelser och beslut noteras löpande med datum. När ett bestridande kommer har du historiken samlad i stället för utspridd i mejl och sms. ByggExp fattar inga juridiska beslut åt dig och ersätter inte ett juridiskt ombud – men verktyget gör att du kan ta fram avtal, dagbok, tidsedlar och fakturaspecifikation snabbt och sammanhängande när det verkligen gäller.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag skicka en bestriden faktura till inkasso?</h3>
<p>Nej. En tvistig fordran får enligt god inkassosed inte drivas via inkasso. Har kunden invänt på sakliga grunder ska kravet i stället prövas i tingsrätten. Att ändå gå till inkasso kan strida mot inkassolagen, som övervakas av IMY.</p>
<h3>Får kunden en betalningsanmärkning om jag går till Kronofogden?</h3>
<p>Inte så länge kunden bestrider betalningsföreläggandet i tid. Då kan Kronofogden inte pröva kravet utan lämnar tillbaka det, och du får välja mellan att begära överlämnande till tingsrätten eller återkalla. Bestridandet i sig ger ingen anmärkning.</p>
<h3>Vad gör jag om bara en del av fakturan är omtvistad?</h3>
<p>Be kunden betala den ostridiga delen omgående och bestrida enbart resten. Det skyddar din likviditet och isolerar tvisten. Vid småhusentreprenad mot konsument gäller dessutom att kunden bara behöver betala för arbete som faktiskt utförts.</p>
<h3>Vem har bevisbördan i en fakturatvist?</h3>
<p>Du som byggföretag. Det är den som påstår att en fordran finns som måste visa att avtal finns, att arbetet är utfört och att beloppet är rätt. Därför är avtal, skriftliga ÄTA, dagbok, tidsedlar och foton avgörande.</p>

<h2>Kom igång</h2>
<p>Förebygg nästa tvist med tydliga underlag: skriftliga avtal med rätt prisform, skriftlig ÄTA-hantering, delfakturering mot avstämda etapper och specificerade fakturor. Skapa en tydlig faktura med <a href="/sv/verktyg/faktura-mall">vår fakturamall</a>, för löpande <a href="/sv/verktyg/byggdagbok-mall">byggdagbok</a> – och vill du se hur ByggExp samlar allt på ett ställe, boka en <a href="/sv/contact">demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/kunden-betalar-inte-fakturan">När kunden inte betalar fakturan</a>, <a href="/sv/blog/paminnelse-inkasso-avgift-bygg">Påminnelse, inkasso och avgifter i bygg</a>, <a href="/sv/blog/entreprenadtvist-undvika-dokumentation">Undvik entreprenadtvist med rätt dokumentation</a>.</p>
`;

const A_BESTRIDEN_FAKTURA_BYGG_TVIST: BlogPost = {
  _id: "code-"+"bestriden-faktura-bygg-tvist",
  title: "Kunden bestrider fakturan – så agerar byggföretaget rätt", slug: "bestriden-faktura-bygg-tvist", locale: "sv",
  excerpt: "En steg-för-steg-guide för byggföretag när kunden bestrider fakturan – dokumentation, delbetalning och vägen förbi Kronofogden till tingsrätt.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/8fakturor.webp", contentHtml: A_BESTRIDEN_FAKTURA_BYGG_TVIST_HTML,
  seoTitle: "Bestriden faktura bygg | ByggExp", seoDescription: "Kunden bestrider fakturan? Så säkrar byggföretaget dokumentationen, kräver delbetalning av ostridigt belopp och tar tvisten rätt väg – inte till inkasso.",
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:12:00.000Z", createdAt: "2026-08-20T08:12:00.000Z", updatedAt: "2026-08-20T08:12:00.000Z",
};

const A_GDPR_KUNDREGISTER_BYGGFORETAG_HTML = `
<p>Ett byggföretag sitter på tre register fyllda med personuppgifter: kunder med namn och kontaktuppgifter, personal med personnummer, och leverantörskontakter. GDPR gäller alla tre - oavsett om du är ensam hantverkare eller har trettio anställda. Poängen är inte att sluta samla data, utan att ha rätt rättslig grund, rätt lagringstid och rätt dokumentation. Sköter du det slarvigt kan en allvarlig överträdelse kosta upp till 20 miljoner euro eller 4 % av årsomsättningen. Sköter du det rätt är det en eftermiddags jobb en gång per år.</p>

<p>Behöver du mallar och underlag för att komma igång? Utgå från <a href="/sv/verktyg">våra gratis verktyg och mallar för byggföretag -&gt;</a></p>

<h2>Börja med rättslig grund - inte samtycke</h2>
<p>GDPR vilar på sex rättsliga grunder (Art. 6): samtycke, avtal, rättslig förpliktelse, skydd av grundläggande intressen, allmänt intresse och berättigat intresse. Ett register är fullt lagligt så länge du har en av dessa grunder, följer principerna och informerar de registrerade. Missförståndet är att man alltid måste be om samtycke - det stämmer sällan.</p>
<p>För ett byggföretags <strong>kundregister</strong> är grunden nästan alltid <strong>avtal</strong> (att fullgöra offert eller entreprenad) eller <strong>berättigat intresse</strong>. <strong>Personalregistret</strong> vilar på avtal (anställningen) plus rättslig förpliktelse (skatt och arbetsmiljö). <strong>Leverantörskontakter</strong> hanteras oftast på berättigat intresse. Samtycke är faktiskt den svagaste grunden - den kan återkallas när som helst - och behövs sällan i en B2B-relation. Spara samtycket till renodlad marknadsföring, som nyhetsbrev och utskick.</p>

<h2>Personalliggaren - ett lagkrav som också är GDPR-data</h2>
<p>Elektronisk personalliggare krävs på byggarbetsplatsen när den samlade kostnaden för byggverksamheten förväntas överstiga fyra prisbasbelopp. Prisbasbeloppet för 2026 är fastställt till 59 200 kr, vilket ger en gräns på <strong>236 800 kr</strong>. I byggbranschen måste liggaren vara elektronisk - papper godtas inte.</p>
<p>Liggaren innehåller namn och personnummer på alla som är verksamma på platsen, alltså tydlig personuppgiftshantering. Den rättsliga grunden är rättslig förpliktelse enligt skatteförfarandelagen (SFL 39 kap). Här finns en nyckelpoäng som många missar: uppgifterna får <strong>endast</strong> användas för Skatteverkets kontroll. Det är olagligt att återanvända liggardatan till lön, tidrapportering eller schemaläggning - även om det vore praktiskt. Vill du ha tidrapportering behöver du samla den datan separat, på egen grund.</p>
<p>Uppgifterna ska bevaras i två år efter utgången av det kalenderår då räkenskapsåret eller byggverksamheten avslutades. Saknas eller brister liggaren vid Skatteverkets besök blir kontrollavgiften 12 500 kr, plus 2 500 kr per person som inte är dokumenterad. Och eftersom liggaren oftast är en molntjänst behöver du ett personuppgiftsbiträdesavtal (PUB-avtal) med leverantören.</p>

<h2>Hur länge får du spara? Lagringstider som krockar</h2>
<p>GDPR:s princip om lagringsminimering säger att data ska raderas när ändamålet upphört. Men den principen vägs mot rättslig förpliktelse - och flera lagar tvingar fram längre lagring än du kanske vill.</p>
<p><strong>Bokföringslagen</strong> kräver att räkenskapsinformation - fakturor, verifikationer och avtal med bokföringsvärde - bevaras i <strong>7 år</strong> efter utgången av det kalenderår då räkenskapsåret avslutades. Sedan 1 juli 2024 behöver materialet inte längre sparas i fysisk form, så länge det kan tillgängliggöras elektroniskt under hela arkiveringstiden. <strong>Personalliggaren</strong>: 2 år. <strong>Marknadsföringssamtycke</strong>: radera när kunden tackar nej.</p>
<p>Det praktiska knepet är att <strong>separera ändamål</strong>. Att du måste spara en faktura i 7 år betyder inte att hela CRM-posten med säljanteckningar, telefonlogg och gamla offertutkast ska ligga kvar lika länge. Fakturan sparas för bokföringsändamålet; resten gallras när kundrelationen är avslutad. Sätt en gallringsrutin per registertyp - inte en gemensam "vi sparar allt i sju år".</p>

<h2>Dokumentationen IMY faktiskt frågar efter</h2>
<p>Vid en granskning är det första dokumentet Integritetsskyddsmyndigheten (IMY) oftast begär din <strong>registerförteckning</strong> - ett internt register över behandlingar. Där listar du vilka personuppgifter du behandlar, för vilket ändamål, hur länge och med vilken rättslig grund. Har du inget att visa upp ser det illa ut från start.</p>
<p>Utöver den behöver du:</p>
<ul>
<li><strong>Integritetspolicy</strong> - informationen till de registrerade om hur du hanterar deras uppgifter.</li>
<li><strong>PUB-avtal</strong> med alla leverantörer som behandlar personuppgifter åt dig: bokföringsbyrå, CRM eller molntjänst, lönesystem och leverantör av digital personalliggare.</li>
<li><strong>Rutin för registerutdrag och radering</strong> - vem svarar och hur.</li>
<li><strong>Tekniska och organisatoriska skyddsåtgärder</strong> - åtkomststyrning så att inte alla ser allt, och kryptering.</li>
</ul>

<h2>Kamerabevakning på byggarbetsplatsen</h2>
<p>Sedan april 2025 krävs inget tillstånd från IMY för företagets kameror. Men det betyder inte fritt fram: du måste själv ha en dokumenterad <strong>intresseavvägning</strong> (berättigat intresse, Art. 6.1 f) som visar att behovet av bevakning väger tyngre än de bevakades integritet. Motivera med stöld- och skadegörelseskydd, rikta kamerorna så att du minimerar att fånga förbipasserande, och skylta tydligt. Intresseavvägningen och en förteckning över pågående bevakning ska bevaras i minst fem år.</p>

<h2>De registrerades rättigheter</h2>
<p>Kunder, anställda och leverantörskontakter har rätt till information, registerutdrag (tillgång), rättelse och radering. Uppgifter ska raderas när ändamålet och den rättsliga grunden upphört. Ha en utpekad person eller rutin som kan hantera en sådan begäran och svara inom en månad - det är inget du vill improvisera fram när en tidigare anställd hör av sig.</p>

<h2>Checklista - kom igång på en eftermiddag</h2>
<ol>
<li>Inventera alla register - kund, personal, leverantör, liggare, kamera.</li>
<li>Sätt rättslig grund per register (avtal, rättslig förpliktelse eller berättigat intresse).</li>
<li>Skriv registerförteckningen.</li>
<li>Sätt lagringstider och en gallringsrutin per registertyp.</li>
<li>Teckna PUB-avtal med bokföringsbyrå, CRM, lönesystem och liggarleverantör.</li>
<li>Publicera integritetspolicyn.</li>
<li>Säkra åtkomst och kryptering.</li>
<li>Dokumentera eventuell kamerabevakning med intresseavvägning.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig samla kund-, projekt- och leverantörsuppgifter på ett ställe med tydlig åtkomststyrning, så att inte alla anställda kommer åt allt. Du får en struktur där tidrapportering hålls skild från personalliggarens Skatteverksdata, och där avtal och underlag kan arkiveras elektroniskt genom hela bokföringens sjuårsperiod. Verktyget ersätter inte ditt juridiska ansvar - registerförteckning, integritetspolicy och PUB-avtal måste du fortfarande upprätta - men det gör det enklare att hålla data ordnad, gallringsbar och spårbar.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag be kunderna om samtycke för att spara deras uppgifter?</h3>
<p>Nej, oftast inte. För kundregister är den rättsliga grunden nästan alltid avtal (att fullgöra offert eller entreprenad) eller berättigat intresse. Samtycke behövs främst för renodlad marknadsföring, som nyhetsbrev, och är dessutom den svagaste grunden eftersom det kan återkallas när som helst.</p>
<h3>Får jag använda personalliggaren till tidrapportering?</h3>
<p>Nej. Uppgifterna i personalliggaren får enligt lag endast användas för Skatteverkets kontroll. Att återanvända dem till lön, tidrapportering eller schemaläggning är olagligt. Vill du ha tidrapportering måste du samla in den datan separat, på en egen rättslig grund.</p>
<h3>Hur länge ska jag spara kunduppgifter?</h3>
<p>Det beror på ändamålet. Fakturor och avtal med bokföringsvärde ska sparas i 7 år enligt bokföringslagen. Övriga uppgifter, som säljanteckningar och kontaktlogg, ska gallras när ändamålet upphört - alltså när kundrelationen är avslutad. Separera ändamålen istället för att spara allt lika länge.</p>
<h3>Vad är en registerförteckning och behöver mitt lilla byggföretag en?</h3>
<p>Ja. Registerförteckningen är intern dokumentation över vilka personuppgifter du behandlar, för vilket ändamål, hur länge och med vilken rättslig grund. Den gäller oavsett företagsstorlek och är oftast det första dokument IMY begär vid en granskning.</p>

<h2>Kom igång</h2>
<p>GDPR är fullt hanterbart för ett byggföretag när du bryter ner det i tre delar: rätt grund, rätt lagringstid och rätt dokumentation. Börja med mallar och underlag bland <a href="/sv/verktyg">våra gratis verktyg</a>, och vill du se hur du håller registren ordnade i praktiken kan du <a href="/sv/contact">boka en demo</a>.</p>

<p>Relaterat: <a href="/sv/blog/digitalisera-byggforetag-projektstyrning">Digitalisera byggföretaget med projektstyrning</a>, <a href="/sv/blog/hitta-kunder-byggfirma">Hitta kunder till byggfirman</a>, <a href="/sv/blog/starta-byggforetag-2026">Starta byggföretag 2026</a>.</p>
`;

const A_GDPR_KUNDREGISTER_BYGGFORETAG: BlogPost = {
  _id: "code-"+"gdpr-kundregister-byggforetag",
  title: "GDPR för byggföretag: så håller du kund-, personal- och leverantörsregistret lagligt (2026)", slug: "gdpr-kundregister-byggforetag", locale: "sv",
  excerpt: "Så sätter du rätt rättslig grund, rätt lagringstid och rätt dokumentation för byggföretagets tre register - och undviker sanktionsavgifter enligt GDPR.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_GDPR_KUNDREGISTER_BYGGFORETAG_HTML,
  seoTitle: "GDPR kundregister byggföretag | ByggExp", seoDescription: "Rättslig grund, lagringstider och dokumentation som gör byggföretagets kund-, personal- och leverantörsregister lagligt enligt GDPR 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:00:00.000Z", createdAt: "2026-08-20T09:00:00.000Z", updatedAt: "2026-08-20T09:00:00.000Z",
};

const A_LEADPLATTFORMAR_OFFERTA_SERVICEFINDER_BYGGFIRMA_HTML = `
<p>Dyra förfrågningar, delade leads som fem andra firmor också får och en vinstfrekvens som känns lägre än utlovat – många byggföretag är osäkra på om leadplattformar som Offerta och Servicefinder verkligen betalar sig. Frågan är berättigad, men svaret är inte ett enkelt ja eller nej. Det handlar om att räkna på kostnad per <em>vunnet jobb</em> i stället för per lead, och att veta vad du kan påverka. Exakta priser sätts individuellt och varierar kraftigt med bransch, geografi och konkurrens, så räkna alltid på din egen situation.</p>

<p>Innan du köper en enda lead: se till att du kan skicka en snygg, komplett offert på minuten. Använd <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> så att svaret är redo när förfrågan trillar in – snabbhet är en av de starkaste konverteringsdrivarna.</p>

<h2>Så fungerar plattformarna – matchning kontra kreditmodell</h2>
<p>Plattformarna tar betalt på olika sätt, och det påverkar din kalkyl direkt.</p>
<ul>
<li><strong>Offerta</strong> använder en kreditbaserad modell utan fast månadsavgift. Du köper kreditpaket och betalar per uppdrag du väljer att svara på. Offerta anger själva en kostnad på ungefär 300–2 500 kr per uppdrag beroende på bransch.</li>
<li><strong>Servicefinder</strong> bygger på matchning: kunden beskriver projektet och matchas med upp till tre verifierade företag. Du betalar per lead, och leaden kan vara delad (flera firmor får samma) eller exklusiv.</li>
<li><strong>BraByggare</strong> och <strong>BYGG.se</strong> är ytterligare alternativ som är värda att jämföra innan du binder dig till en kanal.</li>
</ul>
<p>En vanlig missuppfattning: Byggmentor är inte en leadsäljare utan en konsumentupplysningssajt med guider, till exempel om konsumenttjänstlagen när en privatperson anlitar hantverkare. Den skickar alltså inga betalförfrågningar till din firma.</p>

<h2>Vad kostar en lead 2026?</h2>
<p>För vanliga bygg- och renoveringsjobb ligger leadkostnaden typiskt på <strong>600–1 600 kr per förfrågan</strong>. För mer specialiserade tjänster som el och ventilation kan en enskild lead nå upp mot cirka 2 200 kr. Offertas spann på 300–2 500 kr per uppdrag ligger i linje med detta.</p>
<p>Priset varierar mest med tre faktorer: bransch, geografi (dyrast i storstad, särskilt Stockholm) och hur många firmor som konkurrerar om samma jobbtyp. Be alltid om en aktuell prislista för just din kategori och ditt område innan du skriver på – det pris en kollega i en annan region nämner säger lite om vad du kommer att betala.</p>

<h2>Räkna hem det – kostnad per vunnet jobb, inte per lead</h2>
<p>Leadpriset i sig säger ingenting om lönsamheten. Det som avgör är hur många leads du behöver för att vinna ett jobb. Använd en enkel formel:</p>
<p><strong>Kostnad per vunnet jobb = leadkostnad ÷ vinstfrekvens</strong></p>
<p>Offerta uppger en vinstfrekvens på ungefär 10 procent av lämnade offerter första året, ofta stigande år 2–3. Vid 10 procent krävs alltså cirka tio leads per vunnet jobb. Ett räkneexempel (dina siffror kan avvika):</p>
<ul>
<li>10 leads × 1 000 kr = 10 000 kr i leadkostnad per vunnet jobb.</li>
<li>Klarar jobbet ett täckningsbidrag på 25 000 kr täcker det leadkostnaden med god marginal.</li>
<li>Ligger täckningsbidraget på 8 000 kr går affären back innan du ens har hållit i verktygen.</li>
</ul>
<p>Sätt exemplet i relation till timpriset. Snickare ligger 2026 ofta på 560–850 kr i timmen och el/VVS på 750–1 100 kr. Ett litet jobb på några timmar bär sällan en leadkostnad på 10 000 kr, medan ett större projekt gör det med marginal. Slutsats: leadplattformar lönar sig främst på jobb med tillräckligt täckningsbidrag – räkna innan du svarar.</p>

<h2>Delade kontra exklusiva leads – frågor att ställa</h2>
<p>Detaljerna i avtalet avgör din verkliga vinstfrekvens. Ställ minst dessa frågor innan du skriver på:</p>
<ol>
<li>Vad kostar en lead i min kategori och mitt område – aktuell prislista?</li>
<li>Är leaden delad eller exklusiv, och med hur många firmor delas den?</li>
<li>Hur snävt kan jag styra kategori och geografi så jag slipper irrelevanta förfrågningar?</li>
<li>Hur krediteras felaktiga eller döda leads (fel nummer, redan bokat, utanför mitt område)?</li>
<li>Finns bindningstid, och vad kostar det att pausa eller säga upp?</li>
</ol>
<p>En exklusiv lead är dyrare men konverterar normalt bättre eftersom du inte tävlar mot tre andra offerter i kundens inkorg. Räkna på båda alternativen med formeln ovan innan du bestämmer dig.</p>

<h2>Så vinner du fler jobb från dina leads</h2>
<p>Vinstfrekvensen är inte ödesbestämd – den går att höja. Det som skiljer firmor som tjänar pengar på leads från dem som inte gör det:</p>
<ul>
<li><strong>Svara snabbt.</strong> Den som ringer eller mejlar först ligger ofta bäst till. Ha en mall redo så att du kan svara inom minuter, inte dagar.</li>
<li><strong>Skicka en komplett offert</strong> med tydlig specifikation, ROT-beräkning där det är relevant och möjlighet att signera med BankID. Ett proffsigt intryck väger tungt mot ett hastigt sms.</li>
<li><strong>Visa upp recensioner och en genomarbetad profil.</strong> Social bevisning sänker kundens risk och höjer din hit rate.</li>
<li><strong>Följ upp.</strong> Många affärer vinns på det andra samtalet, inte det första.</li>
</ul>

<h2>ROT-avdraget 2026 – ha koll i offerten</h2>
<p>Från 1 januari 2026 är ROT-avdraget tillbaka på ordinarie nivå: <strong>30 procent av arbetskostnaden</strong>. Den tillfälliga höjningen till 50 procent gällde bara 12 maj–31 december 2025 och är borta. Det påverkar kundens betalningsvilja, så räkna på rätt nivå i offerten.</p>
<ul>
<li>Maxbeloppet för ROT är 50 000 kr per person och år.</li>
<li>Nytt 2026: ett gemensamt tak för ROT + RUT på totalt 75 000 kr per person och år.</li>
<li>ROT gäller endast arbetskostnad – material, resekostnad/framkörning, maskinhyra och administrativa avgifter ger inget avdrag.</li>
<li>Företaget som utför arbetet måste vara godkänt för F-skatt, och betalning ska ske elektroniskt (kort/BankID) för att avdraget ska godkännas.</li>
</ul>
<p>Separera alltid arbete och material tydligt i offerten så att kunden ser sin verkliga kostnad efter avdrag – det gör ja-beslutet enklare och höjer din konvertering.</p>

<h2>När lönar sig leadplattformar – och när inte</h2>
<p>Leadköp passar bäst för nystartade firmor som behöver bygga upp ett flöde, för att fylla luckor i kalendern och för volymjobb med rimligt täckningsbidrag. Det lönar sig sämre när leadpriset är högt samtidigt som marginalen är låg, eller på smala nischjobb där få förfrågningar matchar.</p>
<p>Se plattformarna som en kanal bland flera, inte som hela din marknadsföring. På sikt är egen synlighet ofta billigare per jobb: en stark Google-företagsprofil, lokal SEO och ett stadigt flöde av recensioner ger leads du inte betalar styckepris för.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte leadplattformarna, men gör att varje köpt lead konverterar bättre och blir mer lönsam. Med <a href="/sv/verktyg/offert-mall">offertmallen</a> skickar du en komplett, professionell offert direkt när förfrågan kommer in – med arbete och material uppdelat och ROT tydligt beräknat. Snabbt svar och proffsigt intryck är precis det som lyfter din vinstfrekvens, och därmed sänker din kostnad per vunnet jobb. I <a href="/sv/verktyg">verktygslådan</a> hittar du fler kalkyler och mallar för att räkna på marginal och pris innan du svarar på ett uppdrag.</p>

<h2>Vanliga frågor</h2>
<h3>Vad kostar en bygglead 2026?</h3>
<p>För vanliga bygg- och renoveringsjobb typiskt 600–1 600 kr per förfrågan, och upp mot cirka 2 200 kr för specialiserade tjänster som el och ventilation. Offerta anger 300–2 500 kr per uppdrag. Priset varierar med bransch, geografi och konkurrens – begär alltid aktuell prislista för din kategori.</p>
<h3>Hur räknar jag ut om en lead lönar sig?</h3>
<p>Dela leadkostnaden med din vinstfrekvens för att få kostnad per vunnet jobb. Vid cirka 10 procents vinstfrekvens och 1 000 kr per lead blir det ungefär 10 000 kr per vunnet jobb. Jämför den summan med jobbets täckningsbidrag – lönsamt främst när marginalen är tillräckligt stor.</p>
<h3>Är delade eller exklusiva leads bäst?</h3>
<p>Exklusiva leads kostar mer men konverterar normalt bättre eftersom du inte tävlar mot flera andra offerter samtidigt. Delade leads är billigare men kräver högre svarstempo. Räkna på båda med kostnad per vunnet jobb innan du väljer.</p>
<h3>Hur mycket är ROT-avdraget 2026?</h3>
<p>30 procent av arbetskostnaden, max 50 000 kr per person och år, med ett nytt gemensamt tak för ROT och RUT på 75 000 kr per person och år. Avdraget gäller bara arbete, kräver att företaget är godkänt för F-skatt och att kunden betalar elektroniskt.</p>

<h2>Kom igång</h2>
<p>Räkna på din egen kostnad per vunnet jobb innan du köper nästa lead, och se till att svaret går ut snabbt och komplett. Börja med <a href="/sv/verktyg/offert-mall">offertmallen</a> och de övriga <a href="/sv/verktyg">gratisverktygen</a>. Vill du se hur ByggExp knyter ihop offert, ROT och uppföljning i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi konkret.</p>

<p>Relaterat: <a href="/sv/blog/hitta-kunder-byggfirma">Hitta kunder till byggfirman</a>, <a href="/sv/blog/google-foretagsprofil-lokal-seo-byggfirma">Google-företagsprofil och lokal SEO för byggfirmor</a>, <a href="/sv/blog/skaffa-recensioner-omdomen-byggfirma">Så skaffar du fler recensioner och omdömen</a>.</p>
`;

const A_LEADPLATTFORMAR_OFFERTA_SERVICEFINDER_BYGGFIRMA: BlogPost = {
  _id: "code-"+"leadplattformar-offerta-servicefinder-byggfirma",
  title: "Lönar sig leadplattformar för byggfirman 2026? Kostnad per lead och ROI", slug: "leadplattformar-offerta-servicefinder-byggfirma", locale: "sv",
  excerpt: "Vad en byggförfrågan faktiskt kostar 2026, hur du räknar kostnad per vunnet jobb och vad som avgör om Offerta, Servicefinder och liknande plattformar lönar sig.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_LEADPLATTFORMAR_OFFERTA_SERVICEFINDER_BYGGFIRMA_HTML,
  seoTitle: "Leadplattformar byggfirma 2026 | ByggExp", seoDescription: "Lönar sig Offerta och Servicefinder för byggfirman? Vad en lead kostar 2026, hur du räknar ROI och vinner fler jobb. Konkret guide för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:03:00.000Z", createdAt: "2026-08-20T09:03:00.000Z", updatedAt: "2026-08-20T09:03:00.000Z",
};

const A_OPPEN_BOK_RIKTKOSTNAD_ENTREPRENAD_HTML = `
<p>I större byggprojekt räcker inte alltid valet mellan fast pris och löpande räkning. Fast pris lägger hela osäkerheten på entreprenören och driver upp riskpåslag, medan ren löpande räkning ger beställaren dålig kostnadskontroll. Öppen bok kombinerat med riktkostnad och incitament är svaret många beställare och entreprenörer landar i när omfattningen är osäker men båda parter vill ha kontroll på ekonomin. Modellen är kärnan i samverkansentreprenad och partnering, och den hör hemma i B2B-sammanhang — inte mot konsument.</p>

<p>Innan du räknar på ett incitamentsupplägg, bygg upp din kalkyl och dina underlag i <a href="/sv/verktyg">våra gratis verktyg för bygg -&gt;</a> så att siffrorna tål granskning från första mötet.</p>

<h2>Vad betyder öppen bok?</h2>
<p>Öppen bok (open book) innebär att beställaren har rätt att granska samtliga kalkyler, fakturor och underlag som entreprenören bygger sin riktkostnad och sina avräkningar på. Det är den fulla kostnadstransparensen som gör att självkostnadsdebitering och incitamentsdelning över huvud taget går att revidera och lita på. Utan öppna böcker blir en riktkostnad bara en siffra utan förankring.</p>
<p>Grunden är självkostnadsprincipen i AB 04 och ABT 06 kap 6 §§ 9–10. Enligt 6:9 ersätts entreprenören för sina faktiska kostnader inom de uppräknade kostnadsslagen, plus ett entreprenörarvode som täcker vinst och centrala omkostnader. Öppen bok är den praktiska mekanismen som gör den principen transparent — beställaren ser vad som faktiskt debiteras och kan stämma av det mot avtalet och mot Byggherrarnas vägledning om tillämpning av självkostnadsprincipen.</p>

<h2>Riktkostnad, målpris och entreprenörarvode</h2>
<p>Det är lätt att förväxla riktkostnad med fast pris. Det är det inte. Riktkostnaden är en gemensamt framtagen uppskattning — en budget — av vad projektet väntas kosta. Den är varken ett tak eller en garanti. Under riktkostnaden ligger löpande räkning som verklig ersättningsform, och riktkostnaden läggs ovanpå som referenspunkt för incitamenten.</p>
<p>Begreppen används lite olika i branschen. Riktkostnad och riktpris syftar oftast på den beräknade självkostnaden, medan målpris ibland används om samma referensnivå inklusive arvode. Oavsett ordval är poängen densamma: det är baslinjen som utfallet mäts mot.</p>
<p>Entreprenörarvodet — där vinsten ligger — kan hanteras på två sätt. Antingen som ett procentpåslag på kostnaderna enligt 6:9 punkt 8, ofta runt 10 procent, eller som ett fast belopp. Den vanliga och kloka konstruktionen är att låsa arvodet till ett fast belopp. Då kan entreprenören inte höja sin egen vinst genom att driva upp kostnaderna, och intressena mellan parterna hålls raka. Var kostnadsgränserna går är dessutom rättsligt omtvistat — exempelvis om påslag får läggas på underentreprenörers påslag — vilket gör en tydlig definition av kostnadsslagen i öppna boken helt avgörande.</p>

<h2>Incitament — delning av över- och underskott</h2>
<p>Här sitter kärnmekaniken. Blir självkostnaden lägre än riktkostnaden uppstår ett överskott (vinst), blir den högre uppstår ett underskott (förlust). Parterna delar på mellanskillnaden enligt en förhandlad fördelningsnyckel. Därmed tjänar båda på att hålla kostnaderna nere och båda bär en del av risken om det spricker.</p>
<p>Fördelningen är fri att avtala. En 50/50-delning är en vanlig utgångspunkt men inget lagkrav. Nyckeln kan också vara asymmetrisk — beställaren tar en större andel av överskottet, eller entreprenörens andel av förlusten begränsas med ett tak. Många avtal sätter både ett golv och ett tak på entreprenörens risk så att en enskild avvikelse inte blir förödande.</p>
<p>Ett räkneexempel med 50/50-delning:</p>
<ul>
<li>Riktkostnad: 20 000 000 kr</li>
<li>Faktisk självkostnad (utfall): 18 800 000 kr</li>
<li>Överskott: 1 200 000 kr</li>
<li>Delning 50/50: 600 000 kr vardera till beställare och entreprenör</li>
</ul>
<p>Blev utfallet i stället 21 000 000 kr uppstår ett underskott på 1 000 000 kr, och parterna bär 500 000 kr var — om inte ett avtalat tak begränsar entreprenörens del. Entreprenörarvodet ligger vid sidan av denna delning och påverkas inte om det är låst till fast belopp.</p>

<h2>Kopplingen till samverkansentreprenad och partnering</h2>
<p>Samverkansentreprenad och partnering är ingen egen juridisk kontraktsform. Upplägget byggs på de vanliga standardavtalen — AB 04 eller ABT 06 — kompletterade med ett samverkansavtal som reglerar arbetssätt, organisation och just den ekonomiska modellen med öppen bok och riktkostnad.</p>
<p>Projekten körs typiskt i två faser. Fas 1 är tidig samverkan där projektering, kalkyl och riktkostnad tas fram gemensamt, ofta under konsultvillkoren i ABK 09. Fas 2 är utförandet, som i praktiken ofta läggs som en totalentreprenad under ABT 06. Öppen bok och riktkostnad är den ekonomiska motorn som håller ihop de två faserna: det som räknas fram i fas 1 blir baslinjen som incitamenten i fas 2 mäts mot. Modellen förutsätter alltså att båda parter kan och vill arbeta transparent redan från projekteringen.</p>

<h2>När kan riktkostnaden justeras? ÄTA och programändringar</h2>
<p>Riktkostnaden är reglerbar. Eftersom den är en uppskattning och inte ett tak är det vanligt — och klokt — att avtala om att den får revideras vid större programändringar och vid mer omfattande ÄTA-arbeten (ändrings-, tilläggs- och avgående arbeten). Annars mäts utfallet mot en baslinje som inte längre motsvarar uppdraget.</p>
<p>En seglivad missuppfattning är att ÄTA inte existerar i partnering. Det stämmer inte. ÄTA-arbeten finns och tillämpas även i samverkansentreprenad — skillnaden är att de hanteras inom den gemensamma ekonomiska ramen och kan utlösa en justering av riktkostnaden i stället för att bara faktureras löpande vid sidan om. Det avgörande är tydliga spelregler: vad som räknas som en programändring, vilken storlek på ÄTA som flyttar baslinjen och hur den nya riktkostnaden räknas fram. Utan det underminerar första större ändringen hela incitamentslogiken.</p>

<h2>När passar modellen — och när inte</h2>
<p>Öppen bok och riktkostnad lämpar sig för stora, komplexa projekt med osäker omfattning, där ett fast pris antingen blir orimligt dyrt av riskpåslag eller helt enkelt inte går att sätta. Incitamentsavtal rekommenderas för större projekt och kräver att parterna har förtroende och mognad att arbeta transparent.</p>
<p>Modellen rekommenderas inte mot konsument. Konsumentuppdrag styrs av konsumenttjänstlagen och inte av AB eller ABT, så öppen bok och riktkostnad med incitament hör hemma i den professionella, entreprenadrättsliga kontexten mellan byggföretag och beställare.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att bygga upp och hålla ordning på det underlag som en öppen bok kräver. Du kan strukturera din kalkyl per kostnadsslag så att den går att granska mot självkostnadsprincipen, och koppla den till en tydlig offert eller avtalsbilaga där riktkostnad, arvode och fördelningsnyckel framgår. Använd <a href="/sv/verktyg/offert-mall">vår offertmall</a> som utgångspunkt för att beskriva ersättningsformen och incitamentsupplägget skriftligt redan i anbudsskedet. ByggExp fattar inga juridiska beslut åt dig och ersätter inte en genomgången avtalsjurist — verktygen ger dig strukturen och spårbarheten så att siffrorna tål den granskning som öppna böcker innebär.</p>

<h2>Vanliga frågor</h2>
<h3>Är riktkostnad samma sak som fast pris?</h3>
<p>Nej. Riktkostnaden är en gemensamt uppskattad budget, inte ett fast pris och inte ett tak. Den verkliga ersättningsformen är löpande räkning enligt självkostnadsprincipen, och riktkostnaden fungerar som referenspunkt för att dela på över- eller underskott.</p>
<h3>Måste incitamenten delas 50/50?</h3>
<p>Nej. Fördelningsnyckeln förhandlas fritt per projekt. 50/50 är en vanlig utgångspunkt men inget lagkrav — den kan vara asymmetrisk, och entreprenörens risk kan begränsas med tak och golv.</p>
<h3>Finns ÄTA-arbeten i partnering?</h3>
<p>Ja. ÄTA existerar och tillämpas även i samverkansentreprenad. Riktkostnaden är dessutom reglerbar och justeras ofta vid större programändringar och omfattande ÄTA, förutsatt att avtalet anger tydliga regler för när baslinjen flyttas.</p>
<h3>Passar modellen för privatpersoner?</h3>
<p>Nej. Incitamentsavtal rekommenderas inte gentemot konsument. Konsumentuppdrag regleras av konsumenttjänstlagen, medan öppen bok och riktkostnad hör hemma i B2B-projekt under AB 04 eller ABT 06.</p>

<h2>Kom igång</h2>
<p>Öppen bok och riktkostnad flyttar fokus från lägsta pris till gemensam kostnadskontroll — men modellen är bara så bra som avtalet och underlaget bakom den. Börja med att räkna och dokumentera i <a href="/sv/verktyg">våra gratis byggverktyg</a> och sätt ord på ersättningsformen med <a href="/sv/verktyg/offert-mall">offertmallen</a>. Vill du se hur ByggExp kan hålla ihop kalkyl, offert och kostnadsuppföljning i ett flöde? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/fast-pris-eller-lopande-rakning">Fast pris eller löpande räkning</a>, <a href="/sv/blog/kalkylprogram-bygg">Kalkylprogram för bygg</a>, <a href="/sv/blog/kostnadskontroll-byggprojekt-marginal">Kostnadskontroll och marginal i byggprojekt</a>.</p>
`;

const A_OPPEN_BOK_RIKTKOSTNAD_ENTREPRENAD: BlogPost = {
  _id: "code-"+"oppen-bok-riktkostnad-entreprenad",
  title: "Öppen bok och riktkostnad i entreprenad — så fungerar incitamentsmodellen", slug: "oppen-bok-riktkostnad-entreprenad", locale: "sv",
  excerpt: "En genomgång av hur öppen bok och riktkostnad med incitament fungerar i entreprenad — och när modellen passar ditt byggföretag.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/11costs.webp", contentHtml: A_OPPEN_BOK_RIKTKOSTNAD_ENTREPRENAD_HTML,
  seoTitle: "Öppen bok & riktkostnad | ByggExp", seoDescription: "Så fungerar öppen bok och riktkostnad med incitament i entreprenad: målpris, delning av över-/underskott och kopplingen till partnering. Guide för byggföretag 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/11costs.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:09:00.000Z", createdAt: "2026-08-20T09:09:00.000Z", updatedAt: "2026-08-20T09:09:00.000Z",
};

const A_SKATTEFRI_LADDEL_ARBETSPLATS_2026_HTML = `
<p>Har byggföretaget elbilar eller laddhybrider i bilparken finns en regel du vill ha koll på: den tillfälliga skattefriheten för förmån av laddel på arbetsplatsen blir <strong>permanent från och med 1 juli 2026</strong>. Det betyder att du kan ladda firmans service- och förmånsbilar på gården, vid lagret eller utanför kontoret utan att det utlöser en skattepliktig förmån för föraren. Men villkoren är snäva, och gränsdragningen mot hemmaladdning fäller många.</p>

<p>Ska du samtidigt få ordning på bilkostnader, milersättning och underlag inför lönekörningen? Börja i <a href="/sv/verktyg">vår samling av gratis verktyg för byggföretag -></a> och läs vidare för vad de nya reglerna faktiskt innebär i praktiken.</p>

<h2>Vad ändras 1 juli 2026?</h2>
<p>Skattefriheten för laddel på arbetsplatsen infördes som en <em>tillfällig</em> regel och gällde 1 juli 2023–30 juni 2026. Nu görs den permanent och gäller tills vidare, utan någon övergångsperiod. Den som laddar på jobbet 30 juni respektive 1 juli 2026 möter alltså samma regel – skillnaden är att den inte längre har något slutdatum.</p>
<p>Beslutet bygger på regeringens proposition 2025/26:80, "Permanent skattefrihet för förmån av laddel på arbetsplatsen och utvidgad rätt till avdrag för drivmedelsutgifter", som lämnades i december 2025 och antogs av riksdagen. Syftet är att gynna omställningen till en fossilfri fordonsflotta och göra det mer attraktivt att köra arbetsresor med laddbara fordon. Statsfinansiellt beräknas skattefriheten minska skatteintäkterna med 130 miljoner kronor 2026 och 260 miljoner kronor per år från och med 2027.</p>

<h2>Villkoren – laddningen måste ske "i anslutning till arbetsplatsen"</h2>
<p>Kärnan i regeln är enkel men avgörande: laddningen ska ske vid en <strong>laddningspunkt eller ett eluttag som arbetsgivaren tillhandahåller i anslutning till arbetsplatsen</strong>. Är det uppfyllt är laddelen skattefri – oavsett om det handlar om en förmånsbil, en ren tjänstebil eller den anställdes privata elbil.</p>
<p>Skattefriheten omfattar el för att ladda ett brett spann av fordon:</p>
<ul>
<li>Personbil klass I</li>
<li>Lätt lastbil</li>
<li>Motorcykel och moped</li>
<li>Cykel och elsparkcykel/elcykel</li>
</ul>
<p>För ett byggföretag betyder det att laddstolpen vid lagret täcker både servicebilarna och montörens elcykel utan skattekonsekvenser. Viktigt att komma ihåg: skattefriheten gäller bara <em>elen</em>. Själva bilförmånen beräknas separat och påverkas inte av att laddningen är gratis.</p>

<h2>Gränsdragningen som fäller många – hemmaladdning är inte skattefri</h2>
<p>Här går den skarpaste linjen. <strong>Hemmaladdning omfattas inte</strong> av skattefriheten. Betalar arbetsgivaren för laddning i den anställdes bostad är det en skattepliktig drivmedelsförmån. Privat körning värderas då till marknadsvärdet av elförbrukningen multiplicerat med 1,2. Skatteverket godtar en genomsnittlig kostnad för laddning i den anställdes privatbostad som marknadsvärde.</p>
<p>Alternativet till att betala hemmaladdning som förmån är att hålla isär det: föraren står för sin egen hemmaladdning och får i stället skattefri milersättning för tjänsteresor. Schablonen 2026 är <strong>9,50 kr per mil för helt elbil</strong> och 12 kr per mil (120 öre/km) för övriga drivmedel. Läs mer om nivåerna i vår genomgång av <a href="/sv/blog/milersattning-2026">milersättning 2026</a>.</p>

<h2>Nyheten för laddhybrider som förmånsbil</h2>
<p>Propositionen innehåller även en utvidgad rätt till drivmedelsavdrag som är särskilt relevant för firmor med laddhybrider. Tidigare gick det inte att betala skattefri drivmedelsersättning för tjänsteresor när bilen laddats kostnadsfritt med arbetsgivarens el på arbetsplatsen. Från 1 juli 2026 får en anställd med laddhybrid som förmånsbil rätt till skattefri ersättning för tjänsteresor <strong>även när bilen har laddats gratis på jobbet</strong> – 12 kr per mil för bränsledelen. Den utvidgade avdragsrätten bedöms inte påverka skatteintäkterna.</p>

<h2>Så här gör byggföretaget rätt – checklista</h2>
<ol>
<li>Installera laddpunkt eller eluttag vid kontor, lager eller arbetsplats så att laddningen faktiskt sker "i anslutning till arbetsplatsen".</li>
<li>Dokumentera var laddning sker – jobbladdning (skattefri) respektive hemmaladdning (skattepliktig) måste kunna skiljas åt.</li>
<li>Bestäm rutin för hemmaladdning: antingen som drivmedelsförmån (marknadsvärde × 1,2) eller att föraren själv bekostar den och tar skattefri milersättning.</li>
<li>Håll körjournal för tjänsteresor så att underlaget för milersättning håller vid en granskning.</li>
<li>Stäm av upplägget med redovisningskonsulten innan lönekörning – reglerna skiljer sig mellan elbil och laddhybrid.</li>
</ol>

<h2>Räkneexempel – snickarfirma med tre servicebilar</h2>
<p>En snickarfirma har tre servicebilar: två elbilar och en laddhybrid. Firman sätter upp en laddstolpe på gården vid verkstaden.</p>
<ul>
<li><strong>Laddning på gården:</strong> All el för de tre bilarna är skattefri för förarna – oavsett förmånsbil eller tjänstebil. Ingen förmån att beskatta.</li>
<li><strong>Montören som laddar hemma:</strong> Betalar firman elräkningen för hemmaladdningen blir det en drivmedelsförmån värderad till marknadsvärdet av elen × 1,2. Låter firman i stället montören stå för hemmaelen kan tjänsteresorna ersättas skattefritt med 9,50 kr/mil (elbil).</li>
<li><strong>Laddhybriden:</strong> Efter 1 juli 2026 kan föraren ladda gratis på gården och ändå få 12 kr/mil skattefritt för bränsledelen vid tjänsteresor.</li>
</ul>
<p>Poängen: samma bil kan ge helt olika skatteutfall beroende på var den laddas. Att styra laddningen till arbetsplatsen är oftast den enklaste vägen till en ren hantering.</p>

<h2>Vanliga misstag och kontrollrisker</h2>
<p>De vanligaste felen är att blanda ihop jobb- och hemmaladdning, att betala hemmaladdning utan att förmånsbeskatta den, och att tro att skattefri laddel sänker själva bilförmånen (det gör den inte). Ett annat vanligt fel är att inte skilja på ren tjänstebil och förmånsbil – gränsdragningen påverkar hur ersättningar och förmåner ska hanteras. Se vår genomgång av <a href="/sv/blog/servicebil-eller-formansbil">servicebil eller förmånsbil</a> och hur du kan sänka värdet i <a href="/sv/blog/justerat-formansvarde-servicebil">justerat förmånsvärde för servicebil</a>.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte din redovisningskonsult, men vi hjälper dig samla underlaget som gör hanteringen enkel. I plattformen kan du dokumentera körningar och tjänsteresor, hålla ordning på fordon och koppla kostnader till rätt projekt – så att milersättning och förmånsunderlag finns samlat när det är dags för lön och bokslut. Verktygen på <a href="/sv/verktyg">/sv/verktyg</a> ger dig snabba beräkningar utan inloggning.</p>

<h2>Vanliga frågor</h2>
<h3>När blir skattefriheten för laddel på arbetsplatsen permanent?</h3>
<p>Från och med 1 juli 2026. Den tidigare tillfälliga regeln gällde 1 juli 2023–30 juni 2026 och görs nu permanent utan övergångsperiod, med stöd av proposition 2025/26:80.</p>
<h3>Gäller skattefriheten även den anställdes privata elbil?</h3>
<p>Ja. Villkoret är att laddningen sker vid en laddpunkt eller ett eluttag som arbetsgivaren tillhandahåller i anslutning till arbetsplatsen. Det gäller oavsett om det är förmånsbil, tjänstebil eller den anställdes privata fordon.</p>
<h3>Är hemmaladdning som firman betalar skattefri?</h3>
<p>Nej. Hemmaladdning omfattas inte. Betalar arbetsgivaren för laddning i den anställdes bostad blir det en skattepliktig drivmedelsförmån där privat körning värderas till marknadsvärdet av elförbrukningen × 1,2.</p>
<h3>Påverkar skattefri laddel förmånsvärdet för bilen?</h3>
<p>Nej. Bilförmånen beräknas separat. Skattefriheten gäller bara elen/drivmedlet, inte värdet av själva förmånsbilen.</p>

<h2>Kom igång</h2>
<p>Räkna på firmans bilkostnader och milersättning direkt i <a href="/sv/verktyg">våra gratis verktyg</a>, och boka en <a href="/sv/contact">demo</a> om du vill se hur ByggExp samlar underlaget för fordon, körningar och projekt på ett ställe.</p>

<p>Relaterat: <a href="/sv/blog/servicebil-eller-formansbil">Servicebil eller förmånsbil</a>, <a href="/sv/blog/justerat-formansvarde-servicebil">Justerat förmånsvärde för servicebil</a> och <a href="/sv/blog/milersattning-2026">Milersättning 2026</a>.</p>
`;

const A_SKATTEFRI_LADDEL_ARBETSPLATS_2026: BlogPost = {
  _id: "code-"+"skattefri-laddel-arbetsplats-2026",
  title: "Skattefri laddel på arbetsplatsen 2026 – vad gäller för firmans service- och förmånsbilar", slug: "skattefri-laddel-arbetsplats-2026", locale: "sv",
  excerpt: "Från 1 juli 2026 blir skattefriheten för elbilsladdning på arbetsplatsen permanent – här är villkoren och fällorna för byggföretag med service- och förmånsbilar.", tag: "Ekonomi",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_SKATTEFRI_LADDEL_ARBETSPLATS_2026_HTML,
  seoTitle: "Skattefri laddel arbetsplats 2026 | ByggExp", seoDescription: "Den tillfälliga skattefriheten för laddel på jobbet blir permanent 1 juli 2026. Så gäller reglerna för byggföretagets service- och förmånsbilar.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T09:12:00.000Z", createdAt: "2026-08-20T09:12:00.000Z", updatedAt: "2026-08-20T09:12:00.000Z",
};

const A_OFFERTPROGRAM_BYGGFORETAG_HTML = `
<p>Ett offertprogram ska göra en sak riktigt bra: hjälpa dig skicka proffsiga, rätt räknade offerter snabbt – och sedan förvandla dem till order och faktura utan dubbelarbete. Här går vi igenom vad ett offertprogram för byggföretag bör klara, vad du ska titta på när du väljer, och hur du kommer igång gratis idag.</p>

<p><a href="/sv/verktyg/offert-mall">Skapa en offert direkt med vår gratis offert-mall →</a></p>

<figure class="web-shot"><img src="/features-content/skapa-offert-i-byggexp-web.webp" alt="Offertprogram för byggföretag: skapa offert i webbadmin med rader, material, arbete och ROT-avdrag" width="1000" height="548" loading="lazy"><figcaption>Skapa offert i webbadmin – rader, material och arbete med ROT uträknat, redo att skicka som PDF.</figcaption></figure>

<h2>Vad är ett offertprogram?</h2>
<p>Ett offertprogram är ett verktyg för att skapa, skicka och följa upp offerter. I stället för att skriva varje offert från ett tomt Word-dokument får du mallar, sparade rader och priser, automatisk summering och en tydlig lucka mellan &quot;skickad&quot; och &quot;accepterad&quot;. För byggföretag är det ofta första steget i en kedja: <a href="/sv/blog/offert-till-betald-faktura-flode">offert → order → faktura</a>.</p>

<h2>Vad ska ett offertprogram för bygg klara?</h2>
<ul>
<li><strong>Snabba mallar och prislistor</strong> – återanvänd rader, material och timpriser i stället för att räkna om varje gång.</li>
<li><strong>Rätt kalkyl i botten</strong> – tydlig uppdelning av material, arbete och <a href="/sv/blog/paslag-pa-material">påslag/marginal</a> så att offerten faktiskt är lönsam.</li>
<li><strong>ROT-hantering</strong> – räkna och visa <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdraget</a> så att kunden ser vad hen betalar.</li>
<li><strong>Proffsig PDF</strong> med företagslogga, villkor och giltighetstid.</li>
<li><strong>Uppföljning</strong> – se vilka offerter som ligger ute och påminn i tid.</li>
<li><strong>Koppling vidare</strong> – gör en accepterad offert till order och faktura utan att skriva om allt.</li>
</ul>

<h2>Offertprogram, mall eller Excel – vad ska du välja?</h2>
<p>Det beror på hur ofta du offererar:</p>
<ul>
<li><strong>Enstaka offerter</strong> – en bra <a href="/sv/verktyg/offert-mall">offert-mall</a> räcker långt och är gratis att börja med.</li>
<li><strong>Offerter varje vecka</strong> – ett offertprogram sparar tid genom sparade priser, uppföljning och koppling till faktura, och minskar räknefel.</li>
</ul>
<p>Grunden är densamma oavsett verktyg: en genomtänkt kalkyl. Läs mer om att <a href="/sv/blog/skriva-offert">skriva offert</a> som håller.</p>

<h2>Så kommer du igång</h2>
<p>Du behöver inte köpa ett system för att börja skicka bättre offerter idag. <a href="/sv/verktyg/offert-mall">Offert-mallen</a> ger dig en färdig PDF gratis, och när volymen växer är steget till ett offertprogram – där offert, tid och faktura hänger ihop – litet. <a href="/sv/contact">Boka en demo av ByggExp</a> om du vill se hela flödet från offert till betald faktura.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Snygg offert, svag kalkyl.</strong> Ett fint program hjälper inte om påslaget är fel – börja i kalkylen.</li>
<li><strong>Ingen uppföljning.</strong> Offerter som ingen påminner om rinner ut i sanden.</li>
<li><strong>Dubbelarbete mot fakturan.</strong> Om offerten inte kan bli faktura skriver du allt två gånger.</li>
</ul>

<p>Rätt offertprogram sparar tid och höjer träffsäkerheten – men börja i kalkylen och ett tydligt flöde. Testa gratis med mallen, väx in i ett system när volymen kräver det.</p>

<h2>Relaterade guider</h2>
<ul>
<li><a href="/sv/blog/skapa-offert-i-byggexp">Skapa offert i ByggExp</a> – steg för steg med rader, ROT och PDF.</li>
<li><a href="/sv/blog/offert-till-betald-faktura-flode">Från offert till betald faktura</a> – hela flödet utan dubbelarbete.</li>
<li><a href="/sv/blog/faktureringsprogram-bygg">Faktureringsprogram för bygg</a> – gör offerten till faktura med ROT.</li>
<li><a href="/sv/blog/kalkylprogram-bygg">Kalkylprogram för bygg</a> – rätt kalkyl i botten på offerten.</li>
</ul>

<h2>Vanliga frågor</h2>
<h3>Vad är ett offertprogram för byggföretag?</h3>
<p>Ett verktyg för att skapa, skicka och följa upp offerter med mallar, sparade priser, ROT-hantering och proffsig PDF – och som låter en accepterad offert bli order och faktura utan att skrivas om.</p>
<h3>Vad ska ett offertprogram för bygg klara?</h3>
<p>Snabba mallar och prislistor, en tydlig kalkyl med rätt påslag, ROT-avdrag, proffsig PDF med logga och villkor, uppföljning av utestående offerter och koppling vidare till faktura.</p>
<h3>Behöver jag ett offertprogram eller räcker en mall?</h3>
<p>Offererar du enstaka jobb räcker en gratis <a href="/sv/verktyg/offert-mall">offert-mall</a>. Skickar du offerter varje vecka sparar ett offertprogram tid genom sparade priser, uppföljning och koppling till faktura – och minskar räknefel.</p>
<h3>Hanterar ett offertprogram ROT-avdrag?</h3>
<p>Ett bra offertprogram för bygg räknar och visar ROT-avdraget så att kunden ser vad hen betalar efter avdrag. Du kan räkna det direkt i vår <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a>.</p>
`;

const A_OFFERTPROGRAM_BYGGFORETAG: BlogPost = {
  _id: "code-"+"offertprogram-byggforetag",
  title: "Offertprogram för byggföretag – vad du ska titta på (2026)", slug: "offertprogram-byggforetag", locale: "sv",
  excerpt: "Vad ett offertprogram för bygg bör klara – mallar, kalkyl, ROT, PDF, uppföljning och koppling till faktura – och när mall räcker vs. system. Kom igång gratis.", tag: "Ekonomi",
  coverImageUrl: "/landing/verktyg/offert-preview.webp", contentHtml: A_OFFERTPROGRAM_BYGGFORETAG_HTML,
  seoTitle: "Offertprogram för byggföretag – så väljer du 2026 | ByggExp", seoDescription: "Vad ett offertprogram för bygg ska klara: mallar, kalkyl med rätt påslag, ROT, proffsig PDF och koppling till faktura. När mall räcker vs. system – gratis.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/offert-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T16:05:00.000Z", createdAt: "2026-08-20T16:05:00.000Z", updatedAt: "2026-08-20T16:05:00.000Z",
};

// --- ROT-avdrag consumer long-tail (funnels to ROT pillar + kalkylator) ------

const R_ROT_PENSIONAR_HTML = `
<p>Som pensionär har du precis samma rätt till ROT-avdrag som alla andra – det avgörande är att du äger bostaden och betalar tillräckligt med skatt att dra avdraget mot, inte din ålder. Här går vi igenom vad som gäller för ROT-avdrag för pensionärer, och hur du snabbt ser hur mycket du kan få.</p>
<p>Vill du räkna direkt? Använd vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a>, eller läs hela guiden om <a href="/sv/blog/rot-avdrag">ROT-avdrag</a>.</p>

<h2>Har pensionärer rätt till ROT-avdrag?</h2>
<p>Ja. ROT-avdraget är kopplat till att du äger bostaden och har skatt att räkna av mot – inte till om du arbetar eller är pensionerad. Har du inkomst (pension räknas) och äger bostaden, kan du använda ROT som vanligt.</p>

<h2>Villkoret som är extra viktigt som pensionär</h2>
<p>ROT-avdraget dras mot din slutliga skatt. Har du låg skatt ett visst år kan du inte få mer avdrag än den skatt du faktiskt betalar. Det är värt att kontrollera din beräknade skatt innan ett stort arbete, så att hela avdraget ryms. Exakta belopp och regler finns hos Skatteverket.</p>

<h2>Så mycket kan du få</h2>
<p>ROT ger avdrag på arbetskostnaden (inte material) upp till ett tak per person och år. Se aktuell procentsats och maxbelopp hos <a href="/sv/blog/rot-avdrag">vår ROT-guide</a> och räkna ut ditt fall i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Får pensionärer ROT-avdrag?</h3>
<p>Ja. Rätten till ROT beror på att du äger bostaden och har skatt att dra avdraget mot, inte på din ålder. Pension räknas som inkomst.</p>
<h3>Kan låg skatt påverka ROT-avdraget för en pensionär?</h3>
<p>Ja. Avdraget kan aldrig bli större än den slutliga skatt du betalar det året. Har du låg skatt kan hela avdraget inte alltid utnyttjas – kontrollera din beräknade skatt innan ett stort arbete.</p>
<h3>Gäller ROT även för makar som är pensionärer?</h3>
<p>Ja, avdraget är per person, så två ägare kan ofta dela på det. Se vår artikel om att fördela ROT mellan makar.</p>
`.trim();

const R_ROT_PENSIONAR: BlogPost = {
  _id: 'code-rotavdrag-pensionar', title: 'ROT-avdrag för pensionärer – vad gäller?', slug: 'rotavdrag-pensionar', locale: 'sv',
  excerpt: 'ROT-avdrag för pensionärer: du har samma rätt som alla andra – det avgörande är att du äger bostaden och har skatt att dra av mot. Så mycket kan du få.', tag: 'ROT',
  coverImageUrl: '/landing/features/9ekonomi.webp', contentHtml: R_ROT_PENSIONAR_HTML,
  seoTitle: 'ROT-avdrag för pensionärer 2026 – vad gäller? | ByggExp', seoDescription: 'ROT-avdrag för pensionärer: samma rätt som alla, kopplat till att du äger bostaden och har skatt att dra av mot. Så mycket kan du få – räkna med vår ROT-kalkylator.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T13:00:00.000Z', createdAt: '2026-08-22T13:00:00.000Z', updatedAt: '2026-08-22T13:00:00.000Z',
};

const R_ROT_BOSTADSRATT_HTML = `
<p>Du kan använda ROT-avdrag även om du bor i bostadsrätt – men reglerna skiljer sig från när du äger ett hus, eftersom du äger själva lägenheten men inte fastigheten. Här går vi igenom vad som gäller för ROT-avdrag i bostadsrätt och vilka arbeten som räknas.</p>
<p>Räkna ut ditt avdrag i vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a> eller läs hela <a href="/sv/blog/rot-avdrag">ROT-guiden</a>.</p>

<h2>Gäller ROT-avdrag i bostadsrätt?</h2>
<p>Ja, men bara för arbete inne i din egen lägenhet – det du som bostadsrättshavare ansvarar för. Arbete i föreningens gemensamma delar eller på fastighetens yttre ger inte dig personligt ROT-avdrag; det är föreningens ansvar.</p>

<h2>Vilka arbeten räknas?</h2>
<ul>
<li>Renovering av kök och badrum inne i lägenheten.</li>
<li>Snickeri, el och VVS inom lägenhetens ”inre underhåll”.</li>
<li>Inte arbete i trapphus, fasad eller andra gemensamma ytor.</li>
</ul>
<p>Kontrollera alltid gränsdragningen mot föreningens ansvar och aktuella regler hos Skatteverket.</p>

<h2>Vanliga frågor</h2>
<h3>Kan man få ROT-avdrag i bostadsrätt?</h3>
<p>Ja, för arbete inne i din egen lägenhet som du ansvarar för som bostadsrättshavare. Gemensamma ytor omfattas inte.</p>
<h3>Får jag ROT för badrumsrenovering i bostadsrätt?</h3>
<p>Ja, om renoveringen sker i din egen lägenhet och avser sådant du ansvarar för. Kontrollera mot föreningens stadgar och Skatteverkets regler.</p>
`.trim();

const R_ROT_BOSTADSRATT: BlogPost = {
  _id: 'code-rotavdrag-bostadsratt', title: 'ROT-avdrag i bostadsrätt – vad gäller?', slug: 'rotavdrag-bostadsratt', locale: 'sv',
  excerpt: 'ROT-avdrag i bostadsrätt: du får avdrag för arbete inne i din egen lägenhet, inte i föreningens gemensamma delar. Vilka arbeten som räknas.', tag: 'ROT',
  coverImageUrl: '/landing/features/9ekonomi.webp', contentHtml: R_ROT_BOSTADSRATT_HTML,
  seoTitle: 'ROT-avdrag i bostadsrätt – vad gäller 2026? | ByggExp', seoDescription: 'ROT-avdrag i bostadsrätt: avdrag för arbete inne i din egen lägenhet (kök, bad, el, VVS), inte gemensamma ytor. Så fungerar det – räkna med ROT-kalkylatorn.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T13:05:00.000Z', createdAt: '2026-08-22T13:05:00.000Z', updatedAt: '2026-08-22T13:05:00.000Z',
};

const R_ROT_FRITIDSHUS_HTML = `
<p>ROT-avdrag går att använda även på fritidshus – förutsatt att du äger huset och att det inte hyrs ut som näringsverksamhet. Här går vi igenom vad som gäller för ROT-avdrag på fritidshus och vad du bör tänka på.</p>
<p>Räkna ut avdraget i vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a> eller läs <a href="/sv/blog/rot-avdrag">ROT-guiden</a>.</p>

<h2>Gäller ROT-avdrag på fritidshus?</h2>
<p>Ja. ROT gäller för småhus och ägarlägenheter som du äger och använder, och ett fritidshus räknas dit. Det avgörande är att du äger huset och har skatt att dra avdraget mot – samma grundvillkor som för permanentbostaden.</p>

<h2>Att tänka på</h2>
<ul>
<li>Du kan inte få ROT för hus som ägs av någon annan eller drivs som uthyrningsverksamhet.</li>
<li>Avdraget delar samma årliga tak per person som ditt övriga ROT.</li>
<li>Endast arbetskostnad ger avdrag, inte material.</li>
</ul>
<p>Kontrollera aktuella belopp och villkor hos Skatteverket.</p>

<h2>Vanliga frågor</h2>
<h3>Kan man använda ROT-avdrag på fritidshus?</h3>
<p>Ja, om du äger fritidshuset och har skatt att dra avdraget mot. Det räknas som småhus. Hus som hyrs ut som näringsverksamhet omfattas inte.</p>
<h3>Delar fritidshuset samma ROT-tak som mitt vanliga hus?</h3>
<p>Ja, ROT-avdraget är per person och år oavsett hur många bostäder du äger. Se aktuellt maxbelopp hos Skatteverket.</p>
`.trim();

const R_ROT_FRITIDSHUS: BlogPost = {
  _id: 'code-rotavdrag-fritidshus', title: 'ROT-avdrag på fritidshus – vad gäller?', slug: 'rotavdrag-fritidshus', locale: 'sv',
  excerpt: 'ROT-avdrag på fritidshus: går att använda om du äger huset och har skatt att dra av mot. Vad som gäller och vad du bör tänka på.', tag: 'ROT',
  coverImageUrl: '/landing/features/9ekonomi.webp', contentHtml: R_ROT_FRITIDSHUS_HTML,
  seoTitle: 'ROT-avdrag på fritidshus 2026 – vad gäller? | ByggExp', seoDescription: 'ROT-avdrag på fritidshus: möjligt om du äger huset och har skatt att dra av mot, räknas som småhus. Så fungerar det – räkna med ROT-kalkylatorn.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T13:10:00.000Z', createdAt: '2026-08-22T13:10:00.000Z', updatedAt: '2026-08-22T13:10:00.000Z',
};

const R_ROT_ELLER_RUT_HTML = `
<p>ROT och RUT är två olika skattereduktioner som ofta blandas ihop. Kort sagt: ROT är för byggnadsarbete på din bostad, RUT är för hushållsnära tjänster som städ och trädgård. Här går vi igenom skillnaden så du vet vilket avdrag som gäller för ditt arbete.</p>
<p>Ska du räkna på ett byggarbete? Använd vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a>.</p>

<h2>Skillnaden mellan ROT och RUT</h2>
<ul>
<li><strong>ROT</strong> – Reparation, Ombyggnad, Tillbyggnad. Snickeri, el, VVS, kakel, målning inomhus m.m.</li>
<li><strong>RUT</strong> – hushållsnära tjänster: städning, fönsterputs, trädgårdsarbete, flytt, viss montering.</li>
</ul>
<p>Trädgårdsarbete och gräsklippning är alltså oftast RUT, inte ROT – en vanlig förväxling.</p>

<h2>Gemensamt tak</h2>
<p>ROT och RUT delar ett gemensamt tak per person och år, men med olika procentsatser för arbetskostnaden. Se aktuella belopp hos Skatteverket.</p>

<h2>Vanliga frågor</h2>
<h3>Vad är skillnaden mellan ROT och RUT?</h3>
<p>ROT gäller byggnadsarbete på bostaden (reparation, ombyggnad, tillbyggnad), RUT gäller hushållsnära tjänster som städ, fönsterputs och trädgård.</p>
<h3>Är trädgårdsarbete ROT eller RUT?</h3>
<p>Trädgårdsarbete räknas normalt som RUT, inte ROT. Byggnadsarbete på huset är ROT.</p>
<h3>Har ROT och RUT samma tak?</h3>
<p>De delar ett gemensamt tak per person och år, men procentsatsen på arbetskostnaden skiljer sig. Kontrollera aktuella belopp hos Skatteverket.</p>
`.trim();

const R_ROT_ELLER_RUT: BlogPost = {
  _id: 'code-rot-eller-rut', title: 'ROT eller RUT – vad är skillnaden?', slug: 'rot-eller-rut', locale: 'sv',
  excerpt: 'ROT eller RUT? ROT är byggnadsarbete på bostaden, RUT är hushållsnära tjänster som städ och trädgård. Så vet du vilket avdrag som gäller.', tag: 'ROT',
  coverImageUrl: '/landing/features/9ekonomi.webp', contentHtml: R_ROT_ELLER_RUT_HTML,
  seoTitle: 'ROT eller RUT – skillnaden förklarad 2026 | ByggExp', seoDescription: 'ROT eller RUT? ROT = byggnadsarbete på bostaden, RUT = hushållsnära tjänster (städ, trädgård). Skillnad, gemensamt tak och vanliga förväxlingar.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T13:15:00.000Z', createdAt: '2026-08-22T13:15:00.000Z', updatedAt: '2026-08-22T13:15:00.000Z',
};

const R_ROT_HUR_MYCKET_HTML = `
<p>Hur mycket ROT-avdrag kan man få? Avdraget gäller arbetskostnaden (inte material), ges per person och år upp till ett tak, och kan aldrig bli större än den skatt du betalar. Här går vi igenom hur du räknar – och hur du snabbt ser ditt eget belopp.</p>
<p>Enklast: fyll i arbetskostnaden i vår gratis <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylator</a> så räknar den ut din del direkt.</p>

<h2>Hur mycket ROT-avdrag per person?</h2>
<p>ROT ges per person och år upp till ett maxbelopp, och som en procentsats av arbetskostnaden. Äger ni bostaden tillsammans kan ni ofta dubbla avdraget genom att fördela det mellan er. Se aktuell procentsats och maxbelopp hos Skatteverket, eller läs vår <a href="/sv/blog/rot-avdrag">ROT-guide</a>.</p>

<h2>Så räknar du</h2>
<ol>
<li>Ta arbetskostnaden (material räknas inte).</li>
<li>Multiplicera med ROT-procentsatsen för året.</li>
<li>Jämför mot maxbeloppet per person och din skatt.</li>
</ol>
<p>Kalkylatorn gör det åt dig och visar kundens del efter avdrag.</p>

<h2>Vanliga frågor</h2>
<h3>Hur mycket ROT-avdrag kan jag få per år?</h3>
<p>Upp till ett maxbelopp per person och år, som en procentsats av arbetskostnaden, och aldrig mer än den skatt du betalar. Aktuella belopp finns hos Skatteverket.</p>
<h3>Kan makar dubbla ROT-avdraget?</h3>
<p>Ofta ja – avdraget är per person, så två ägare kan fördela det mellan sig och tillsammans få mer.</p>
<h3>Räknas material in i ROT-avdraget?</h3>
<p>Nej. Endast arbetskostnaden ger ROT-avdrag, inte material eller resekostnader.</p>
`.trim();

const R_ROT_HUR_MYCKET: BlogPost = {
  _id: 'code-rotavdrag-hur-mycket', title: 'Hur mycket ROT-avdrag kan man få?', slug: 'rotavdrag-hur-mycket', locale: 'sv',
  excerpt: 'Hur mycket ROT-avdrag? Avdraget gäller arbetskostnaden per person och år upp till ett tak, aldrig mer än din skatt. Så räknar du – och dubblar med makar.', tag: 'ROT',
  coverImageUrl: '/landing/features/9ekonomi.webp', contentHtml: R_ROT_HUR_MYCKET_HTML,
  seoTitle: 'Hur mycket ROT-avdrag per person 2026? | ByggExp', seoDescription: 'Hur mycket ROT-avdrag kan man få? Per person och år upp till ett tak, procent av arbetskostnaden, aldrig mer än din skatt. Räkna ditt belopp med ROT-kalkylatorn.',
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-22T13:20:00.000Z', createdAt: '2026-08-22T13:20:00.000Z', updatedAt: '2026-08-22T13:20:00.000Z',
};

const R_FAKTURA_MED_ROTAVDRAG_HTML = `
<p>Att fakturera med rotavdrag är enkelt när du väl vet hur det räknas och vad Skatteverket kräver på fakturan. Kort: du drar av kundens ROT-del direkt på fakturan, kunden betalar resten, och du begär tillbaka avdraget från Skatteverket. Här går vi igenom hur du gör en faktura med rotavdrag steg för steg – med ett konkret räkneexempel och en gratis mall.</p>
<p>Vill du hoppa direkt till görandet? Ladda ner vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall</a> eller räkna ut avdraget i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-avdragskalkylatorn</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/faktura-rotavdrag.webp" alt="Diagram: faktura med rotavdrag – arbetskostnad 25 000 kr, ROT 30 % = 7 500 kr, kunden betalar 27 500 kr och Skatteverket betalar dig 7 500 kr" width="720" height="380" loading="lazy"><figcaption>Fakturamodellen: du drar av ROT direkt på fakturan, kunden betalar totalsumman minus avdraget och du begär resten från Skatteverket.</figcaption></figure>

<h2>Vad är rotavdrag på fakturan?</h2>
<p>ROT-avdrag är en skattereduktion för kunden på <strong>arbetskostnaden</strong> vid renovering, om- och tillbyggnad. Grundreglerna: avdraget är <strong>30 % av arbetskostnaden (inklusive moms)</strong>, <strong>max 50 000 kr per person och år</strong>, och gäller aldrig mer än den skatt kunden betalar. Material, resor och maskiner ger inget avdrag. (Aktuella belopp och tak fastställs av Skatteverket – kontrollera årets nivå.)</p>
<p>Som utförare tillämpar du avdraget direkt på fakturan (den så kallade fakturamodellen): kunden betalar sin del, och du begär resten från Skatteverket.</p>

<h2>Vem har rätt till rotavdrag?</h2>
<p>ROT-avdraget är kopplat till kunden, inte till dig som utförare. För att avdraget ska gälla behöver kunden uppfylla några grundvillkor:</p>
<ul>
<li><strong>Äga bostaden</strong> där arbetet utförs – småhus, ägarlägenhet eller bostadsrätt. Hyresrätt ger inte ROT.</li>
<li><strong>Bo eller ha bostaden till sitt förfogande</strong> (även fritidshus och förälders bostad kan ge rätt i vissa fall).</li>
<li><strong>Ha betalat tillräckligt med skatt</strong> under året – avdraget kan aldrig bli större än kundens skatt.</li>
<li><strong>Ha kvar ROT-utrymme</strong> för året (taket är per person). Kolla i förväg – se <a href="/sv/blog/kontrollera-kundens-rotutrymme">kontrollera kundens ROT-utrymme</a>.</li>
</ul>
<p>Äger två personer bostaden kan de fördela avdraget mellan sig och tillsammans få mer – se <a href="/sv/blog/rot-fordela-makar-tak-2026">fördela ROT mellan makar</a>.</p>

<h2>Vilka arbeten ger rotavdrag – och vilka gör det inte?</h2>
<p>ROT gäller reparation, underhåll samt om- och tillbyggnad av bostad. Ett vanligt misstag är att ta med arbete som inte är ROT-berättigat – då nekas avdraget.</p>
<div class="article-table"><table>
<thead><tr><th>Ger ROT-avdrag</th><th>Ger INTE ROT-avdrag</th></tr></thead>
<tbody>
<tr><td>Badrums- och köksrenovering</td><td>Nybyggnad (och oftast de 5 första åren i nytt hus)</td></tr>
<tr><td>Golv, målning, snickerier</td><td>Material, maskiner och resekostnader</td></tr>
<tr><td>El, VVS, värme (arbetet)</td><td>Städning och trädgård (det är RUT)</td></tr>
<tr><td>Om- och tillbyggnad</td><td>Ritning, projektering och besiktning</td></tr>
</tbody>
</table></div>
<p>Är du osäker på om ett arbete är ROT-berättigat gäller Skatteverkets bedömning – dokumentera vad som utförts så att arbetskostnaden går att styrka.</p>

<h2>Så räknar du rotavdrag på fakturan – exempel</h2>
<p>Ett badrumsjobb där arbete och material specificeras var för sig:</p>
<div class="article-table"><table>
<thead><tr><th>Post</th><th>Belopp (inkl. moms)</th></tr></thead>
<tbody>
<tr><td>Arbetskostnad</td><td>25 000 kr</td></tr>
<tr><td>Material</td><td>10 000 kr</td></tr>
<tr><td><strong>Fakturans totalsumma</strong></td><td><strong>35 000 kr</strong></td></tr>
<tr><td>ROT-avdrag (30 % × 25 000)</td><td>−7 500 kr</td></tr>
<tr><td><strong>Kunden betalar</strong></td><td><strong>27 500 kr</strong></td></tr>
<tr><td>Du begär från Skatteverket</td><td>7 500 kr</td></tr>
</tbody>
</table></div>
<p>Avdraget räknas alltså bara på arbetskostnaden – materialets 10 000 kr påverkas inte. Vill du testa med dina egna siffror? Använd <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>.</p>

<h2>Delfakturor och löpande räkning</h2>
<p>Vid större jobb fakturerar du ofta i etapper. Då drar du ROT på arbetskostnaden i <em>varje</em> delfaktura – men håll koll på kundens totala tak för året, så att den sista fakturan inte spränger 50 000-gränsen. Ett exempel med tre delfakturor:</p>
<div class="article-table"><table>
<thead><tr><th>Delfaktura</th><th>Arbetskostnad</th><th>ROT (30 %)</th></tr></thead>
<tbody>
<tr><td>1 – rivning &amp; stomme</td><td>60 000 kr</td><td>18 000 kr</td></tr>
<tr><td>2 – el &amp; VVS</td><td>70 000 kr</td><td>21 000 kr (ackumulerat 39 000 kr)</td></tr>
<tr><td>3 – ytskikt &amp; slutförande</td><td>60 000 kr</td><td>18 000 kr → men bara 11 000 kr ryms under taket</td></tr>
</tbody>
</table></div>
<p>Kundens tak är 50 000 kr ROT per person och år. Efter delfaktura 1–2 är 39 000 kr använt. Delfaktura 3 skulle ge 18 000 kr till, men bara 11 000 kr ryms under taket (50 000 − 39 000). Överskjutande arbetskostnad faktureras utan avdrag, eller fördelas på två ägare om båda har utrymme. Stäm av utrymmet innan du lovar kunden ett avdrag.</p>

<h2>ROT eller RUT på fakturan?</h2>
<p>ROT och RUT fungerar likadant på fakturan (avdrag på arbetet, du begär resten från Skatteverket) men gäller olika arbeten och kan ha olika procentsats och tak:</p>
<div class="article-table"><table>
<thead><tr><th>&nbsp;</th><th>ROT</th><th>RUT</th></tr></thead>
<tbody>
<tr><td>Gäller</td><td>Renovering, om-/tillbyggnad</td><td>Hushållsnära tjänster (städning, flytt, trädgård)</td></tr>
<tr><td>På fakturan</td><td>Avdrag på arbetskostnaden</td><td>Avdrag på arbetskostnaden</td></tr>
<tr><td>Procent &amp; tak</td><td colspan="2">Kontrollera årets nivå hos Skatteverket – reglerna har justerats flera år i rad</td></tr>
</tbody>
</table></div>
<p>Blandar ett jobb både ROT- och RUT-arbete särredovisar du dem, eftersom de hanteras var för sig i din begäran.</p>

<h2>Vad fakturan måste innehålla för att ROT ska godkännas</h2>
<p>För att Skatteverket ska betala ut avdraget måste fakturan och din begäran innehålla:</p>
<ul>
<li><strong>Arbetskostnaden särredovisad</strong> från material – ROT gäller bara arbetet.</li>
<li><strong>Antal arbetade timmar</strong> och vad arbetet avsett.</li>
<li><strong>Kundens personnummer</strong> (den som får avdraget).</li>
<li><strong>Fastighetsbeteckning</strong> – eller lägenhetsnummer och bostadsrättsföreningens organisationsnummer för bostadsrätt.</li>
<li><strong>Utfört ROT-berättigat arbete</strong> – att åtgärden faktiskt ger rätt till avdrag.</li>
</ul>
<p>Se hela listan i vår <a href="/sv/blog/byggfaktura-checklista-rot">checklista för byggfakturor med ROT</a> och grunderna i <a href="/sv/blog/vad-ska-faktura-innehalla-bygg">vad en byggfaktura ska innehålla</a>.</p>

<h2>Så begär du utbetalning från Skatteverket</h2>
<p>När kunden betalat sin del begär du resten via Skatteverkets e-tjänst för ROT/RUT. Du anger utfört arbete, arbetskostnad, kundens personnummer och fastighetsuppgifter. Kontrollera i förväg att kunden har utrymme kvar för året – annars kan avdraget nekas och du blir stående med mellanskillnaden. Läs om hur du <a href="/sv/blog/kontrollera-kundens-rotutrymme">kontrollerar kundens ROT-utrymme</a> och vad du gör om <a href="/sv/blog/skatteverket-nekar-rotavdrag-forbehall">Skatteverket nekar avdraget</a>.</p>

<h2>Vanliga misstag</h2>
<ul>
<li><strong>Räkna ROT på hela fakturan.</strong> Avdraget gäller bara arbetskostnaden, inte material.</li>
<li><strong>Glömma särredovisa arbetet.</strong> Utan tydlig arbetskostnad godkänns inte avdraget.</li>
<li><strong>Inte kolla kundens utrymme.</strong> Är taket redan använt blir du utan pengarna.</li>
<li><strong>Sakna fastighetsuppgifter.</strong> Personnummer räcker inte – fastighetsbeteckning eller BRF-uppgifter krävs.</li>
</ul>

<h2>Mall och verktyg</h2>
<p>Gör det enkelt: skapa fakturan med rotavdrag och ladda ner som PDF i vår gratis <a href="/sv/verktyg/faktura-mall">fakturamall</a>, och räkna avdraget i <a href="/sv/verktyg/rot-avdrag-kalkylator">ROT-kalkylatorn</a>. Vill du se hela flödet från offert till betald faktura? Läs <a href="/sv/blog/offert-till-betald-faktura-flode">offert till betald faktura</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Hur räknar jag rotavdrag på en faktura?</h3>
<p>Ta arbetskostnaden inklusive moms och multiplicera med 30 %. Det beloppet drar du av på fakturan (upp till 50 000 kr per person och år). Kunden betalar totalsumman minus avdraget, och du begär avdraget från Skatteverket. Material räknas inte in.</p>
<h3>Räknas material in i rotavdraget på fakturan?</h3>
<p>Nej. Endast arbetskostnaden ger ROT-avdrag. Därför måste arbete och material särredovisas på fakturan.</p>
<h3>Vad måste stå på en faktura med rotavdrag?</h3>
<p>Särredovisad arbetskostnad och antal timmar, kundens personnummer samt fastighetsbeteckning (eller lägenhetsnummer och BRF:s organisationsnummer). Annars kan Skatteverket neka utbetalningen.</p>
<h3>Vem betalar ut rotavdraget till mig?</h3>
<p>Skatteverket. Kunden betalar sin del av fakturan, och du som utförare begär resten via Skatteverkets e-tjänst för ROT.</p>
<h3>Vem har rätt till rotavdrag?</h3>
<p>Kunden som äger och bor i bostaden (småhus, ägarlägenhet eller bostadsrätt) och har betalat tillräckligt med skatt. Hyresrätt och nybyggnad ger normalt inte ROT. Avdraget är per person, så två ägare kan fördela det.</p>
<h3>Kan jag dra ROT på varje delfaktura?</h3>
<p>Ja. Vid löpande räkning drar du ROT på arbetskostnaden i varje delfaktura, men håll koll på kundens totala tak för året så att sista fakturan inte överstiger gränsen.</p>
<h3>Vad händer om Skatteverket nekar utbetalningen?</h3>
<p>Då blir du utan mellanskillnaden om du redan gett kunden avdraget. Kontrollera därför utrymme och rätt till avdrag i förväg. Läs mer om vad du gör om <a href="/sv/blog/skatteverket-nekar-rotavdrag-forbehall">Skatteverket nekar rotavdraget</a>.</p>
<h3>Finns det en mall för faktura med rotavdrag?</h3>
<p>Ja. Med ByggExps gratis fakturamall skapar du en faktura med rotavdrag och laddar ner den som PDF – avdraget räknas ut åt dig.</p>
`.trim();

const R_FAKTURA_MED_ROTAVDRAG: BlogPost = {
  _id: 'code-faktura-med-rotavdrag', title: 'Faktura med rotavdrag – så gör du + exempel och mall', slug: 'faktura-med-rotavdrag', locale: 'sv',
  excerpt: 'Så gör du en faktura med rotavdrag: räkna 30 % på arbetskostnaden, dra av kundens del och begär resten från Skatteverket. Konkret räkneexempel + gratis mall.', tag: 'ROT',
  coverImageUrl: '/landing/features/8fakturor.webp', contentHtml: R_FAKTURA_MED_ROTAVDRAG_HTML,
  seoTitle: 'Faktura med rotavdrag – exempel + gratis mall | ByggExp', seoDescription: 'Faktura med rotavdrag steg för steg: räkna 30 % på arbetskostnaden, exempel med belopp, vad Skatteverket kräver och hur du begär utbetalning. Gratis fakturamall.',
  seoImageUrl: `${SITE_URL}/landing/features/8fakturor.webp`, canonicalUrl: '', noIndex: false, isPublished: true,
  publishedAt: '2026-08-25T10:00:00.000Z', createdAt: '2026-08-25T10:00:00.000Z', updatedAt: '2026-08-25T10:00:00.000Z',
};

export const EKONOMI_ARTICLES: BlogPost[] = [
  R_FAKTURA_MED_ROTAVDRAG,
  R_ROT_PENSIONAR,
  R_ROT_BOSTADSRATT,
  R_ROT_FRITIDSHUS,
  R_ROT_ELLER_RUT,
  R_ROT_HUR_MYCKET,
  ROT,
  ATTESTERING,
  TIMPRIS,
  OFFERT,
  MOMS,
  FAKTURA,
  PASLAG,
  EFAKTURA,
  KUNDEN,
  BETVILLK,
  VADKOST,
  LIKVID,
  ENSKILD,
  A_ANLITA_UNDERENTREPRENOR,
  A_A_CONTO_FAKTURERING_BYGG,
  A_ENTREPRENORSANSVAR_LON,
  A_FAST_PRIS_ELLER_LOPANDE_RAKNING,
  A_TACKNINGSBIDRAG_BYGGFORETAG,
  A_DROJSMALSRANTA_2026,
  A_BOKFORING_ENSKILD_FIRMA_BYGG,
  A_TRAKTAMENTE_BYGGNADSARBETARE_2026,
  A_PERIODISERINGSFOND_BYGGBOLAG,
  A_ATA_HANTERING_MALL,
  A_SJUKLON_KARENSAVDRAG_VAB_BYGGFORETAG,
  A_STARTA_BYGGFORETAG_2026,
  A_FACTORING_BYGGFORETAG,
  A_ROTAVDRAG_2026_NYA_REGLER_FORETAG,
  A_AVDRAG_ENSKILD_FIRMA_BYGG,
  A_AVDRAG_ARBETSKLADER_VERKTYG,
  A_REPRESENTATIONSAVDRAG_2026,
  A_SERVICEBIL_ELLER_FORMANSBIL,
  A_DEBITERA_SERVICEBIL_ROT,
  A_LEVERANTORSFAKTURA_BYGG_PROJEKT,
  A_FONSTER_U_VARDE_2026,
  A_MILERSATTNING_2026,
  A_BYGGFAKTURA_CHECKLISTA_ROT,
  A_JUSTERAT_FORMANSVARDE_SERVICEBIL,
  A_NYA_3_12_REGLER_2026,
  A_K10_BLANKETT_2026,
  A_DEBITERINGSGRAD_BYGG,
  A_OMVAND_BYGGMOMS_UNDERENTREPRENOR,
  A_OFFERT_TILL_BETALD_FAKTURA_FLODE,
  A_ANSVARSFORSAKRING_BYGGFORETAG,
  A_FORSKOTT_HANDPENNING_BYGG,
  A_F_SKATT_HANTVERKARE_ANSOKAN,
  A_A_PRISER_BYGG,
  A_ACKORDSLON_BYGG,
  A_OFFENTLIG_UPPHANDLING_BYGG_LOU,
  A_OMVAND_BYGGMOMS_BOKFORA,
  A_VERKTYG_DIREKTAVDRAG_ELLER_AVSKRIVNING,
  A_KALKYLERA_FONSTERBYTE_OFFERT,
  A_KREDITFORSAKRING_BYGGFORETAG,
  A_VAD_SKA_FAKTURA_INNEHALLA_BYGG,
  A_EGENAVGIFTER_ENSKILD_FIRMA_BYGG,
  A_KORJOURNAL_KRAV_SKATTEVERKET_BYGG,
  A_SANK_ARBETSGIVARAVGIFT_UNGA_VAXA_STOD_2026,
  A_KOSTNADSKONTROLL_BYGGPROJEKT_MARGINAL,
  A_MOMSAVDRAG_LATT_LASTBIL_PERSONBIL_BYGG,
  A_VILKA_FORSAKRINGAR_BEHOVER_BYGGFORETAG,
  A_SKATTEVERKET_NEKAR_ROTAVDRAG_FORBEHALL,
  A_EFTERKALKYL_BYGG_KALKYLUPPFOLJNING,
  A_RANTEFORDELNING_ENSKILD_FIRMA_BYGG,
  A_KAKEL_KLINKER_ATGANG_VATRUM,
  A_ENTREPRENADFORSAKRING_ALLRISK_VAD_TACKER,
  A_KOLLEKTIVAVTALADE_FORSAKRINGAR_BYGG,
  A_REPARATION_VS_FORBATTRING_AVDRAG_BYGG,
  A_PAMINNELSE_INKASSO_AVGIFT_BYGG,
  A_MOMSREGISTRERING_ARBETSGIVARREGISTRERING_BYGGFORETAG,
  A_FARDIGSTALLANDEGRAD_VINSTAVRAKNING_BYGGPROJEKT,
  A_HEMMAKONTOR_AVDRAG_ENSKILD_FIRMA_BYGG,
  A_JAMKA_PRELIMINARSKATT_F_SKATT_BYGGFORETAG,
  A_KREDITUPPLYSNING_KOLLA_KUND_INNAN_JOBB_BYGG,
  A_OMBILDA_ENSKILD_FIRMA_TILL_AB_BYGG,
  A_KORTTIDSARBETE_PERMITTERING_BYGGFORETAG,
  A_FRISKVARDSBIDRAG_BYGGFORETAG_AVDRAG,
  A_VIRKESATGANG_ALTAN_TRALLDACK,
  A_ROT_FORDELA_MAKAR_TAK_2026,
  A_PRESKRIPTION_FAKTURA_BYGG_SLUTFAKTURA,
  A_FABRIKSBETONG_ELLER_BLANDA_SJALV,
  A_LEASA_ELLER_KOPA_MASKINER_BYGGFORETAG,
  A_RESTIDSERSATTNING_BYGGAVTALET,
  A_KONTROLLERA_KUNDENS_ROTUTRYMME,
  A_LON_ELLER_UTDELNING_BYGGBOLAG_2026,
  A_SERVICEAVTAL_UNDERHALLSAVTAL_BYGGFORETAG,
  A_ARBETSRESA_TJANSTERESA_BYGG_AVDRAG,
  A_ENTREPRENADGARANTI_SAKERHET_AB04,
  A_FAKTURERINGSAVGIFT_HANTVERKARE_TILLATEN,
  A_BESTRIDEN_FAKTURA_BYGG_TVIST,
  A_GDPR_KUNDREGISTER_BYGGFORETAG,
  A_LEADPLATTFORMAR_OFFERTA_SERVICEFINDER_BYGGFIRMA,
  A_OPPEN_BOK_RIKTKOSTNAD_ENTREPRENAD,
  A_SKATTEFRI_LADDEL_ARBETSPLATS_2026,
  A_OFFERTPROGRAM_BYGGFORETAG,
];
