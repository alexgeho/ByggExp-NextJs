import type { BlogPost } from '../../types/blog';
import { SITE_URL } from './site-url';

const PERSONALLIGGARE_HTML = `
<p>Personalliggare är ett lagkrav i byggbranschen – och att sköta den slarvigt kan bli dyrt. Ett oanmält besök från Skatteverket där personer saknas i liggaren kostar direkt i kontrollavgift. Här går vi igenom vem som måste ha personalliggare, vad som ska registreras, vad ett misstag kostar och hur du sköter den digitalt utan krångel.</p>
<figure class="article-diagram"><img src="/landing/diagrams/personalliggare.webp" alt="Diagram: personalliggare – vilka som ska registreras och Skatteverkets kontrollavgifter" width="720" height="380" loading="lazy"><figcaption>Alla på plats registreras – även UE och inhyrda. Vid brist: 12 500 kr plus 2 500 kr per oregistrerad person.</figcaption></figure>

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

const A_KONTROLLANSVARIG_NAR_BEHOVS_HTML = `
<p>En av de första frågorna som dyker upp när ett bygglovsprojekt drar igång är om det behövs en kontrollansvarig (KA) – och vad det i så fall landar på i kostnad. Kort svar: KA krävs vid de flesta lov- och anmälningspliktiga åtgärder, och att anlita en kostar oftast mellan 10 000 och 50 000 kr beroende på projektets storlek. Som hantverkare eller byggföretag är det du som får förklara detta för kunden, så det lönar sig att ha svaren klara redan i offertskedet.</p>

<p>Ett bra sätt att lägga grunden är att strukturera kontrollerna tidigt. Använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att dokumentera de kontroller som KA sedan ska följa upp mot kontrollplanen.</p>

<h2>Vad är en kontrollansvarig (KA)?</h2>
<p>En kontrollansvarig är en certifierad person som biträder byggherren under byggprocessen. Rollen regleras i plan- och bygglagen (PBL 10 kap. 9 §) och innebär att KA ska se till att bygget uppfyller gällande krav och att kontrollplanen följs. KA är alltså inte samma sak som en besiktningsman eller en projektledare – det är en oberoende funktion med lagstadgade uppgifter.</p>
<p>Enligt PBL 10 kap. 11 § ska KA bland annat:</p>
<ul>
<li>biträda byggherren med förslag till kontrollplan,</li>
<li>se till att kontrollplanen och gällande bestämmelser följs och att nödvändiga kontroller utförs,</li>
<li>meddela byggherren, och vid behov byggnadsnämnden, om avvikelser upptäcks,</li>
<li>närvara vid tekniskt samråd, besiktningar och slutsamråd,</li>
<li>lämna ett utlåtande till byggherren och nämnden inför slutbeskedet.</li>
</ul>
<p>Ett krav som ofta missas: KA måste ha en <strong>självständig ställning</strong> i förhållande till den som utför åtgärden (PBL 10 kap. 9 §). En KA kan alltså inte vara anställd hos entreprenören som bygger. Bygger ditt företag huset kan ni inte samtidigt vara kontrollansvariga för det – kunden måste anlita en oberoende KA.</p>

<h2>När behövs en kontrollansvarig?</h2>
<p>Huvudregeln är enkel att komma ihåg: kräver åtgärden en kontrollplan, så krävs det en kontrollansvarig. I praktiken innebär det att KA behövs vid de flesta lov- och anmälningspliktiga åtgärder. Konkret handlar det ofta om:</p>
<ul>
<li>nybyggnad,</li>
<li>större tillbyggnad,</li>
<li>ändring av bärande konstruktion,</li>
<li>väsentlig ändring av VA eller ventilation,</li>
<li>installation av eldstad eller rökkanal (i vissa fall),</li>
<li>rivning som kräver lov eller anmälan.</li>
</ul>
<p>Det är byggnadsnämnden i kommunen som avgör i varje enskilt fall om KA behövs. Utgångspunkten är dock tydlig: när ett projekt är så pass omfattande att det behöver följas upp mot en kontrollplan, ska en KA vara utsedd.</p>

<h2>När behövs INGEN kontrollansvarig?</h2>
<p>Det finns tydliga undantag. Grunden för dem finns i plan- och byggförordningen (PBF 2011:338, 7 kap. 5 §). KA krävs normalt inte för:</p>
<ul>
<li>åtgärder som varken kräver lov eller anmälan, till exempel en friggebod,</li>
<li>små ändringar av en- eller tvåbostadshus, om byggnadsnämnden inte beslutar annat.</li>
</ul>
<p>En vanlig missuppfattning gäller Attefallsåtgärder, som ett komplementbostadshus på max 30 kvm. Dessa är <strong>inte automatiskt undantagna</strong> – byggnadsnämnden kan besluta att KA ändå krävs. Utgå därför aldrig från att en Attefallsåtgärd är befriad från KA-kravet utan att ha stämt av med kommunen. Betona för kunden att det alltid är nämnden som gör bedömningen i det enskilda fallet.</p>
<p>Notera också att Boverkets nya byggregler gäller fullt ut från 1 juli 2026. Att lovplikten slopats för vissa åtgärder betyder inte att de tekniska kraven försvinner – även åtgärder utan bygglovsplikt måste uppfylla de nya reglerna, och ett eventuellt KA-krav påverkas inte av att lovplikten tagits bort.</p>

<h2>Vad kostar en kontrollansvarig 2026?</h2>
<p>Priset styrs framför allt av projektets komplexitet, antalet arbetsplatsbesök och restid. Som riktvärden för 2026 (exklusive moms) gäller:</p>
<ul>
<li><strong>Mindre projekt</strong> (garage, mindre tillbyggnad): ca 10 000–20 000 kr.</li>
<li><strong>Villa / medelstort projekt:</strong> ca 15 000–30 000 kr.</li>
<li><strong>Större eller kommersiella projekt:</strong> från ca 30 000 kr och uppåt – för riktigt stora byggen 50 000–200 000 kr eller mer.</li>
</ul>
<p>För en normal villa hamnar alltså kostnaden vanligen i intervallet 15 000–30 000 kr. Ett litet garagebygge kan klaras för runt 10 000–15 000 kr, medan ett flerbostadshus snabbt passerar 50 000 kr. Att KA behöver göra fler platsbesök, eller att objektet ligger långt bort, driver upp priset – be alltid om en offert som specificerar antal besök.</p>
<p>En sak att inte blanda ihop: att <em>själv</em> bli certifierad KA kostar ca 8 500–14 500 kr för utbildning plus ca 8 000–15 000 kr i certifieringsavgift (beroende på organ och nivå), samt ca 495 kr exkl. moms för ID-kort. Det är kostnaden för att bli KA – inte för att anlita en.</p>

<h2>N- eller K-behörighet – vilken KA behöver ditt projekt?</h2>
<p>Certifierade kontrollansvariga finns i två behörighetsnivåer, och det spelar roll att välja rätt:</p>
<ul>
<li><strong>N – normal art:</strong> täcker ny-, till- och ombyggnad samt rivning av en- och tvåbostadshus, och mindre projekt i övrigt. Det räcker för de allra flesta villaprojekt.</li>
<li><strong>K – komplicerad art:</strong> krävs för byggnader med fler än två våningar samt större och mer komplexa projekt.</li>
</ul>
<p>Att anlita en KA med fel behörighetsnivå kan försena bygglovet, eftersom nämnden inte godkänner en KA som saknar rätt behörighet för objektet. Kontrollera nivån innan avtal skrivs. Certifieringen utförs av ackrediterade certifieringsorgan – RISE, Kiwa och DNV – och gäller normalt i fem år. För förnyelse krävs dokumenterade KA-uppdrag och fortbildning, vilket är en indikation på att KA:n är aktiv i yrket.</p>

<h2>KA i bygglovsflödet steg för steg</h2>
<p>För att kunden ska förstå var KA kommer in, hjälper det att beskriva flödet:</p>
<ol>
<li>KA utses redan i samband med ansökan eller anmälan.</li>
<li>Tekniskt samråd hålls med byggnadsnämnden, där KA närvarar.</li>
<li>Nämnden ger startbesked – bygget får påbörjas.</li>
<li>Kontroller utförs löpande under bygget enligt kontrollplanen.</li>
<li>Slutsamråd hålls när bygget är klart.</li>
<li>KA lämnar sitt utlåtande till byggherren och nämnden.</li>
<li>Nämnden utfärdar slutbesked – då får byggnaden tas i bruk.</li>
</ol>
<p>KA:n är alltså med genom hela processen, från ansökan till slutbesked. Ju bättre de löpande kontrollerna dokumenteras, desto smidigare blir slutsamrådet.</p>

<h2>Så väljer du rätt KA</h2>
<ul>
<li><strong>Certifiering:</strong> kontrollera att personen är certifierad – kommunen har ofta listor att stämma av mot.</li>
<li><strong>Rätt behörighetsnivå:</strong> N eller K beroende på projektet.</li>
<li><strong>Oberoende:</strong> KA får inte vara knuten till entreprenören som utför åtgärden.</li>
<li><strong>Referenser:</strong> be om liknande genomförda projekt.</li>
<li><strong>Tydlig offert:</strong> antal platsbesök, restid och vad som ingår ska framgå.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte den kontrollansvariga – KA är en lagstadgad, oberoende roll. Men verktygen hjälper dig och kunden att hålla ordning på det som KA sedan följer upp. Med en strukturerad egenkontroll dokumenteras varje moment löpande, vilket ger KA ett bättre underlag inför tekniskt samråd och slutsamråd. Du kan samla foton, checklistor och avvikelser på ett ställe, så att kontrollplanens punkter blir enkla att bocka av. Det minskar risken för att kontroller saknas när slutbeskedet ska utfärdas – och gör att projektet flyter på utan onödiga förseningar.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag som byggföretag anlita en egen kontrollansvarig?</h3>
<p>Nej. Det är byggherren (oftast din kund) som ansvarar för att utse KA. Eftersom KA måste vara oberoende av den som utför bygget, kan ditt företag inte vara KA för ett projekt ni själva bygger. Däremot är det bra att kunna vägleda kunden om när KA behövs.</p>
<h3>Vad kostar det att anlita en kontrollansvarig 2026?</h3>
<p>För ett mindre projekt ca 10 000–20 000 kr, för en villa ca 15 000–30 000 kr och för större projekt från ca 30 000 kr och uppåt (exkl. moms). Priset styrs av antal arbetsplatsbesök och projektets komplexitet.</p>
<h3>Behövs KA för en Attefallsåtgärd?</h3>
<p>Inte automatiskt, men byggnadsnämnden kan besluta att KA ändå krävs. Attefallsåtgärder är inte undantagna på samma sätt som åtgärder helt utan lov eller anmälan. Stäm alltid av med kommunen i det enskilda fallet.</p>
<h3>Vad är skillnaden mellan N- och K-behörighet?</h3>
<p>N (normal art) täcker en- och tvåbostadshus samt mindre projekt. K (komplicerad art) krävs för byggnader med fler än två våningar och större, mer komplexa projekt. Fel behörighet kan försena bygglovet.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för en smidig kontrollprocess redan från start. Använd <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a> för att dokumentera kontrollerna löpande, så att KA har allt underlag som behövs inför slutbeskedet. Vill du se hur ByggExp kan hålla ihop dokumentationen i dina projekt? <a href="/sv/contact">Boka en demo</a> så visar vi hur det fungerar i praktiken.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när och hur</a>.</p>
`;

const A_KONTROLLANSVARIG_NAR_BEHOVS: BlogPost = {
  _id: "code-"+"kontrollansvarig-nar-behovs",
  title: "Kontrollansvarig – när behövs det och vad kostar det?", slug: "kontrollansvarig-nar-behovs", locale: "sv",
  excerpt: "En genomgång av när kontrollansvarig krävs, vad en KA kostar 2026 och skillnaden mellan N- och K-behörighet i bygglovsflödet.", tag: "Bygglov",
  coverImageUrl: "/landing/features/5planering.webp", contentHtml: A_KONTROLLANSVARIG_NAR_BEHOVS_HTML,
  seoTitle: "Kontrollansvarig när & kostnad | ByggExp", seoDescription: "När krävs kontrollansvarig, vad kostar en KA 2026 (10 000–50 000 kr) och skillnaden mellan N- och K-behörighet. Guide för hantverkare och byggföretag.",
  seoImageUrl: `${SITE_URL}/landing/features/5planering.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:18:00.000Z", createdAt: "2026-08-18T18:18:00.000Z", updatedAt: "2026-08-18T18:18:00.000Z",
};

const A_KONTROLLPLAN_MALL_BYGGLOV_HTML = `
<p>De flesta åtgärder som kräver bygglov eller anmälan kräver också en kontrollplan – nybyggnad, tillbyggnad, fasadändring, rivning och installation av eldstad, för att nämna några. Det är byggherren (fastighetsägaren) som enligt lag ansvarar för att en kontrollplan finns, inte kommunen. Den goda nyheten för dig som hantverkare: för enkla ärenden krävs ingen kontrollansvarig, och då kan du skriva kontrollplanen själv åt kunden. Det sparar KA-arvode och gör dig till en mer komplett leverantör. Utmaningen är att många mallar på nätet är gamla och vaga – och en generisk plan blir underkänd av byggnadsnämnden.</p>

<p>Med <a href="/sv/verktyg/egenkontroll-mall">vår gratis mall för egenkontroll och kontrollplan →</a> fyller du i uppgifterna och får en PBL-korrekt kontrollplan som PDF på minuter – klar att lämna in med bygglovsansökan.</p>
<p><a href="/sv/verktyg/kontrollplan-mall">Skapa en kontrollplan enligt PBL med vår gratis mall (PDF & Excel) -&gt;</a></p>

<h2>Vad är en kontrollplan – och vad kräver PBL?</h2>
<p>En kontrollplan är en kvalitetssäkrings-checklista för bygget. Den beskriver vad som ska kontrolleras, hur det ska ske och vem som ansvarar. Enligt plan- och bygglagen (PBL 10 kap.) ska en kontrollplan innehålla fyra saker:</p>
<ul>
<li><strong>Vilka kontroller som ska göras</strong> och mot vilka krav de kontrolleras (till exempel Boverkets byggregler, Eurokoderna, det beviljade bygglovet och ritningarna).</li>
<li><strong>Vem som utför varje kontroll och hur</strong> den genomförs.</li>
<li><strong>Vilka anmälningar</strong> som ska göras till byggnadsnämnden under arbetets gång.</li>
<li><strong>Vilka arbetsplatsbesök</strong> byggnadsnämnden bör göra och när.</li>
</ul>
<p>Varje kontroll ska dessutom dokumenteras och signeras. Godtagbar dokumentation är till exempel besiktningsprotokoll, kontrollintyg, provningsintyg, mätprotokoll och foton – och den ska verifieras med en signatur av den person som kontrollerat att kravet är uppfyllt. Kontrollplanen ska också ange i vilken omfattning varje kontroll görs som byggherrens dokumenterade egenkontroll eller av en sakkunnig.</p>

<h2>När behöver du INTE en kontrollansvarig?</h2>
<p>En kontrollansvarig (KA) krävs inte för enklare åtgärder. Det gäller exempelvis mindre tillbyggnader, attefallshus och byte av takbeklädnad. I dessa enkla ärenden skriver byggherren – eller den anlitade hantverkaren – kontrollplanen själv. Kommunerna kallar det ofta en <strong>enkel kontrollplan enligt PBL 10 kap. 6–8 §§</strong>.</p>
<p>För dig som hantverkare betyder det en konkret möjlighet. I stället för att kunden ska anlita en KA för ett enkelt jobb kan du leverera en korrekt kontrollplan som en del av uppdraget. Det höjer värdet på din offert och gör hela processen smidigare mot kommunen. Kravet är att planen faktiskt är anpassad till projektet – inte en tom standardmall. Fyll i <a href="/sv/verktyg/egenkontroll-mall">mallen och ladda ner planen som PDF →</a> med kontrollpunkter som passar just den åtgärd du utför.</p>

<h2>Nytt 2026: kontrollplan och avfallshanteringsplan är nu två dokument</h2>
<p>Från och med 1 juli 2026 har reglerna ändrats på en viktig punkt. Den gamla kontrollplanen har delats upp i två separata dokument: en <strong>kontrollplan</strong> och en fristående <strong>avfallshanteringsplan</strong>. Avfallshantering är alltså inte längre en sektion inuti kontrollplanen, utan ett eget dokument.</p>
<p>Reformen 2026 innebär också att vissa åtgärder får <strong>obligatorisk sakkunnigkontroll</strong>, och att byggnadsnämnden får ett nytt verktyg – <strong>kontrollföreläggande</strong> – för att kunna förelägga att kontroller genomförs. Det här är själva anledningen till att äldre mallar på nätet är föråldrade: de har fortfarande avfallshanteringen inbakad i kontrollplanen. Använd en uppdaterad mall så att du inte lämnar in en plan enligt gammalt regelverk.</p>

<h2>Så fyller du i kontrollplanen steg för steg</h2>
<p>En bra kontrollplan är byggd som en tabell med tydliga kolumner. För varje rad anger du:</p>
<ol>
<li><strong>Kontrollpunkt</strong> – vad som kontrolleras (till exempel grundläggning, fuktskydd, bärande konstruktion, brandskydd).</li>
<li><strong>Hur kontrolleras</strong> – metod, exempelvis okulär kontroll, mätning eller provning.</li>
<li><strong>Mot vilket krav</strong> – BBR, EKS/Eurokod, bygglovet eller ritningen.</li>
<li><strong>Vem</strong> – egenkontroll av byggherren/entreprenören eller sakkunnigkontroll.</li>
<li><strong>Resultat och signatur</strong> – utfallet och underskrift av den som kontrollerat.</li>
</ol>
<p>Så här kan några rader se ut för en typisk tillbyggnad:</p>
<ul>
<li><strong>Grundläggning</strong> – okulär kontroll och mätning mot konstruktionsritning (EKS) – egenkontroll – signatur.</li>
<li><strong>Fuktskydd mot mark</strong> – okulär kontroll mot BBR och ritning – egenkontroll – signatur.</li>
<li><strong>Bärande stomme</strong> – kontroll mot konstruktionsritning och EKS – egenkontroll eller sakkunnig beroende på risk – signatur.</li>
<li><strong>Lufttäthet och isolering</strong> – kontroll mot BBR – egenkontroll – signatur.</li>
</ul>
<p>Riskbedömningen avgör om en punkt kräver sakkunnigkontroll i stället för egenkontroll. Särskild hänsyn tas till risken för allvarlig personskada eller störning för samhälle och miljö om kravet inte uppfylls. Ta bara med kontrollpunkter som är relevanta för det aktuella projektet – vaga och generiska planer är den vanligaste orsaken till kompletteringskrav.</p>

<h2>Från ansökan till slutbesked – processen</h2>
<p>Ett förslag till kontrollplan ska lämnas in redan tillsammans med bygglovsansökan eller anmälan. Byggnadsnämnden fastställer sedan kontrollplanen i startbeskedet. Arbetet får inte påbörjas innan startbesked har utfärdats – att börja bygga för tidigt kan utlösa en byggsanktionsavgift.</p>
<p>När bygget är klart lämnar du in de dokumenterade och signerade kontrollerna till byggnadsnämnden. Slutbesked – tillståndet att ta byggnaden i bruk – förutsätter att den fastställda kontrollplanen har följts och att dokumentationen är komplett. Att flytta in eller ta byggnaden i bruk utan slutbesked kan också leda till sanktionsavgift.</p>

<h2>Vanliga misstag hantverkare gör</h2>
<ul>
<li>Använder en generisk mall med kontrollpunkter som inte passar projektet.</li>
<li>Skriver vaga punkter där det inte framgår vad, hur eller mot vilket krav.</li>
<li>Glömmer att signera och dokumentera varje utförd kontroll.</li>
<li>Lägger avfallshanteringen i kontrollplanen i stället för i den separata avfallshanteringsplanen (nytt krav 2026).</li>
<li>Påbörjar arbetet innan startbesked – och riskerar byggsanktionsavgift.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>I ByggExp fyller du i uppgifterna om åtgärden och får en strukturerad kontrollplan med rätt kolumner – kontrollpunkt, metod, krav, ansvarig och signatur. Mallen är uppdaterad efter 2026 års regler, så avfallshanteringen hålls som ett eget dokument och du slipper föråldrade nätmallar. Resultatet blir en färdig PDF som du kan lämna till kunden eller kommunen. Verktyget ersätter inte en kontrollansvarig där en KA krävs, men för enkla ärenden ger det dig en korrekt grund att utgå från. Du hittar det tillsammans med våra övriga <a href="/sv/verktyg">gratis verktyg för hantverkare</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag anlita en kontrollansvarig?</h3>
<p>Nej, inte för enkla åtgärder som mindre tillbyggnader, attefallshus och byte av takbeklädnad. Då kan byggherren eller den anlitade hantverkaren skriva en enkel kontrollplan själv enligt PBL 10 kap. 6–8 §§. För större och mer komplexa projekt krävs en KA.</p>
<h3>När ska kontrollplanen lämnas in?</h3>
<p>Ett förslag till kontrollplan ska lämnas in redan med bygglovsansökan eller anmälan. Byggnadsnämnden fastställer planen i startbeskedet, och arbetet får inte påbörjas innan startbesked har utfärdats.</p>
<h3>Vad är skillnaden efter regeländringen 2026?</h3>
<p>Sedan 1 juli 2026 delas den gamla kontrollplanen upp i två dokument: en kontrollplan och en separat avfallshanteringsplan. Dessutom införs obligatorisk sakkunnigkontroll för vissa åtgärder och ett nytt kontrollföreläggande för byggnadsnämnden.</p>
<h3>Vad händer om jag saknar kontrollplan eller startbesked?</h3>
<p>Slutbesked förutsätter att den fastställda kontrollplanen följts och att dokumenterade, signerade kontroller lämnats in. Att påbörja bygget utan startbesked eller ta byggnaden i bruk utan slutbesked kan utlösa en byggsanktionsavgift.</p>

<h2>Kom igång</h2>
<p>Skapa en PBL-korrekt kontrollplan direkt: den är anpassad efter 2026 års regler, kräver ingen kontrollansvarig för enkla ärenden och du får en färdig PDF att lämna till kommunen. Testa <a href="/sv/verktyg/egenkontroll-mall">vår mall för egenkontroll och kontrollplan →</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du får med kontrolldokumentationen i hela projektflödet.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt – så dokumenterar du rätt</a> och <a href="/sv/blog/arbetsmiljoplan">Arbetsmiljöplan – när krävs den och vad ska ingå</a>.</p>
`;

const A_KONTROLLPLAN_MALL_BYGGLOV: BlogPost = {
  _id: "code-"+"kontrollplan-mall-bygglov",
  title: "Kontrollplan för bygglov – så gör du den själv (mall + PDF)", slug: "kontrollplan-mall-bygglov", locale: "sv",
  excerpt: "De flesta bygglov och anmälningar kräver en kontrollplan enligt PBL – för enkla ärenden kan du som hantverkare skriva den själv och lämna en färdig PDF till kommunen.", tag: "Bygglov",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_KONTROLLPLAN_MALL_BYGGLOV_HTML,
  seoTitle: "Kontrollplan mall bygglov | ByggExp", seoDescription: "De flesta bygglov kräver en kontrollplan enligt PBL. För enkla ärenden skriver du den själv – utan kontrollansvarig. Mall som ger en klar PDF till kommunen.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T18:33:00.000Z", createdAt: "2026-08-18T18:33:00.000Z", updatedAt: "2026-08-18T18:33:00.000Z",
};

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML = `
<p>Många beställare hör av sig med samma önskemål: "jag vill anlita ett företag med våtrumscertifikat". Problemet är att något sådant enskilt certifikat inte existerar i Sverige. I stället driver tre olika branschorgan – BKR, GVK och Säker Vatten – varsitt parallellt behörighetssystem, uppdelat efter vilket hantverk du utför. Väljer du fel behörighet, eller ingen alls, riskerar din kund att bli utan försäkringsersättning efter en vattenskada. Den här artikeln vänder sig till dig som är hantverkare, VVS-företagare eller plattsättare och funderar på vilken behörighet som är värd att investera i – och hur du använder den som säljargument i offerten.</p>

<p>Ett tydligt underlag börjar med en proffsig offert. Använd gärna <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a> för att lyfta fram företagets behörigheter redan i anbudet.</p>

<h2>Varför det inte finns ETT våtrumscertifikat</h2>
<p>Ett våtrum byggs av flera yrkesgrupper med helt olika ansvar. Rörinstallationen – tappvatten, avlopp och anslutningar – hanteras av VVS-montörer. Tätskiktet och ytskiktet – membran, plastmatta, kakel och klinker – hanteras av plattsättare och tätskiktsmontörer. Eftersom kraven skiljer sig åt mellan dessa moment finns tre skilda branschsystem: Säker Vatten för rörinstallationer, GVK för tätskikt och plastmatta, samt BKR (Byggkeramikrådet) för keramik. En central princip går igen i alla tre: <strong>auktorisationen ligger på företaget</strong>, medan den enskilde hantverkaren har en personlig behörighet eller branschlegitimation som är knuten till det auktoriserade företaget. Säker Vatten uttrycker det som att "en branschlegitimation är alltid kopplad till ett auktoriserat företag" – legitimationen gäller inte för arbete som utförs utanför en auktoriserad firma.</p>

<h2>Säker Vatten – för VVS och rörinstallationer</h2>
<p>Säker Vatten är systemet för dig som gör rörarbeten. För att företaget ska bli auktoriserat krävs en skriftlig förbindelse att följa branschreglerna Säker Vatteninstallation, giltig ansvarsförsäkring, registrering hos Bolagsverket samt svensk F-skatt och momsregistrering. Kraven ser olika ut för VVS-företag och konsultföretag.</p>
<p>Varje VVS-montör och lärling på företaget måste dessutom ha en egen branschlegitimation. Den kräver att man genomgått utbildningen "Säker Vatteninstallation för VVS-företag" plus ett av följande: dokumenterad yrkesutbildning med branschcertifikat, godkänd validering eller en tidigare godkänd särskild prövning. Sedan 1 januari 2020 erbjuds inte längre särskild prövning till montörer som saknar svenskt branschcertifikat. Legitimationen är giltig i fem år efter godkänd utbildning och är numera digital – den nås via BankID i Säker Vattens app, medan äldre ID06-kombinerade bevis gäller tills de går ut.</p>
<p>De aktuella reglerna är "Branschregler Säker Vatteninstallation 2026:1". Projekt som startats efter 1 januari 2026 ska utföras enligt 2026:1-versionen. När jobbet är klart lämnar det auktoriserade företaget ett "intyg om Säker Vatteninstallation" till kunden – beskrivet som en värdehandling vid försäljning eller vid reglering av en eventuell skada. I dag finns runt 2 234 auktoriserade VVS-företag och cirka 13 978 personer med branschlegitimation.</p>

<h2>GVK – tätskikt, plastmatta och keramik</h2>
<p>GVK (AB Svensk Våtrumskontroll) täcker tätskikt, plastmattebeläggning och även keramik. Systemet har tre separata behörigheter: Plastmatta, Keramik och Tätskikt under keramik. Montörer måste ha giltig GVK-behörighet för sitt område, och företaget ska ha minst en arbetsledare per tio anställda som klarat behörighetskursen Arbetsledare. Alla GVK-behörigheter gäller i fem år och kräver därefter fortbildning för förnyelse.</p>
<p>De gällande branschreglerna heter "Säkra Våtrum 2026" och trädde i kraft 1 januari 2026. Reglerna används som måttstock av försäkringsbolag och beställare – de kan jämföra ett utfört arbete mot branschreglerna för att avgöra om det håller.</p>
<p>Kostnadsmässigt (2026, exkl. moms) ligger registreringsavgiften på cirka 12 490 kr. Årsavgiften är 8 400 kr för Plast eller Keramik, 9 400 kr för båda, plus 0,27 promille av föregående års omsättning (minst 1 500 kr). Behörighetskurserna Plastmatta och Keramik kostar 3 800 kr styck, och Arbetsledarkursen 4 000 kr. Räkna alltså med både en engångskostnad och en löpande årlig utgift.</p>

<h2>BKR / BBV – kakel och klinker</h2>
<p>BKR är plattsättarnas system. Ett behörigt plattsättningsföretag måste ha minst en behörig arbetsledare och minst en behörig plattsättare. Utbildningspaketet består av en tvådagars tätskikts- och materialkurs (teori), en endags arbetsledarkurs som täcker auktorisation och entreprenadjuridik, en tre timmars praktisk tätskiktskurs, samt ett kunskapsprov i plattsättning om yrkesbevis saknas. En ensamföretagare måste gå samtliga kurser själv.</p>
<p>De aktuella våtrumsreglerna är "BBV 26:1" (Byggkeramikrådets branschregler för våtrum). BKR har gett ut branschregler sedan slutet av 1980-talet. Ett behörigt företag ska lämna kunden ett kvalitetsdokument för det färdiga jobbet. Auktorisationen gäller tills vidare men kräver årlig förnyelse och en obligatorisk återkurs vart femte år.</p>
<p>Årsavgiften är trappad efter antal anställda plattsättare och inkluderar PER-medlemskap: 5 100 kr för 1–2 plattsättare, 6 700 kr för 3–5, 10 000 kr för 6–10, 13 200 kr för 11–20 och 16 500 kr för 21 eller fler. Notera att GVK och BKR överlappar på keramik – en plattsättare väljer ett av systemen, inte båda.</p>

<h2>Vem behöver vilket – och varför kunden kräver det</h2>
<p>En enkel tumregel efter yrke: är du VVS-montör eller rörläggare behöver du Säker Vatten. Är du plattsättare eller tätskiktsmontör behöver du BKR eller GVK. En hel badrumsrenovering kräver i praktiken båda hantverken auktoriserade – en Säker Vatten-auktoriserad rörläggare plus en BKR- eller GVK-behörig plattsättare eller tätskiktsmontör.</p>
<p>Den kommersiella drivkraften är tydlig. Försäkringsbolag villkorar ersättning vid vattenskada mot att installationen följt branschreglerna. Kan kunden inte visa upp kvalitetsdokumentet eller intyget efter en läcka riskerar hen nedsatt eller helt indragen ersättning. Våtrum och rörinstallationer är den ledande källan till kostsamma vattenskador i svenska bostäder, och därför screenar seriösa beställare, BRF:er och byggföretag aktivt efter behörighet redan i upphandlingen. Att synas i branschorganens "hitta företag"-register blir en direkt källa till förfrågningar. Behörigheten är alltså inte bara en kostnad – den är ett säljargument och en förutsättning för att komma med i seriösa upphandlingar.</p>

<h2>Vanliga misstag</h2>
<ul>
<li>Att tro att en behörighet täcker hela våtrummet – rör och tätskikt kräver olika system.</li>
<li>Att låta legitimationen gälla för svartjobb eller uppdrag utanför det auktoriserade företaget – den är knuten till firman.</li>
<li>Att missa femårsgränsen för förnyelse och plötsligt stå utan giltig behörighet mitt i en upphandling.</li>
<li>Att glömma lämna kvalitetsdokument eller intyg till kunden – utan det tappar dokumentationen sitt värde vid en skada.</li>
<li>Att inte räkna in årsavgifter och obligatoriska återkurser i kalkylen.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp utfärdar inga behörigheter – det gör branschorganen. Men vi hjälper dig att använda behörigheten i säljet och att sköta den dokumentation som kunden och försäkringsbolaget kräver. I <a href="/sv/verktyg/offert-mall">offertmallen</a> lyfter du fram vilka behörigheter företaget har direkt i anbudet, vilket sänker tröskeln för beställare som screenar. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a> dokumenterar du utförandet löpande så att underlaget till kvalitetsdokument och intyg finns på plats när jobbet är klart. Målet är att göra det enkelt att bevisa att arbetet är fackmässigt – inte att ersätta branschreglerna.</p>

<h2>Vanliga frågor</h2>
<h3>Finns det ett gemensamt våtrumscertifikat i Sverige?</h3>
<p>Nej. Det finns tre separata system: Säker Vatten för rörinstallationer, GVK för tätskikt och plastmatta, samt BKR för keramik. Ett företag behöver det eller de system som matchar de hantverk det utför.</p>
<h3>Ligger behörigheten på företaget eller på personen?</h3>
<p>Auktorisationen ligger på företaget. Den enskilde hantverkaren har en personlig behörighet eller branschlegitimation som är knuten till det auktoriserade företaget och inte gäller för arbete utanför det.</p>
<h3>Hur länge gäller behörigheten?</h3>
<p>GVK-behörigheter och Säker Vattens branschlegitimation gäller i fem år och kräver därefter förnyelse. BKR-auktorisationen gäller tills vidare men kräver årlig förnyelse plus en obligatorisk återkurs vart femte år.</p>
<h3>Varför kräver kunden att jag är behörig?</h3>
<p>Försäkringsbolag villkorar ofta ersättning vid vattenskada mot att installationen följt branschreglerna. Utan behörigt utförande och rätt dokumentation riskerar kunden nedsatt eller indragen ersättning efter en läcka.</p>

<h2>Kom igång</h2>
<p>Rätt behörighet är en tillgång i säljet, inte bara en post i budgeten. Börja med att visa den tydligt i anbudet med <a href="/sv/verktyg/offert-mall">offertmallen</a> och dokumentera utförandet i <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a>. Vill du se hur ByggExp kan effektivisera din dokumentation från offert till färdigt intyg? Boka en <a href="/sv/contact">demo</a>. Verifiera alltid aktuella avgifter och kursdatum direkt hos BKR, GVK och Säker Vatten innan du budgeterar.</p>

<p>Relaterat: <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026 – vad som ändras</a>.</p>
`;

const A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK: BlogPost = {
  _id: "code-"+"vatrumscertifikat-behorighet-gvk",
  title: "Våtrumscertifikat och behörighet: BKR, GVK eller Säker Vatten?", slug: "vatrumscertifikat-behorighet-gvk", locale: "sv",
  excerpt: "Ingen myndighet utfärdar ett samlat våtrumscertifikat – här reder vi ut vad BKR, GVK och Säker Vatten faktiskt kräver och vilken behörighet ditt företag bör satsa på.", tag: "Behörighet",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK_HTML,
  seoTitle: "Våtrumscertifikat behörighet | ByggExp", seoDescription: "Det finns inget enda våtrumscertifikat. Så väljer ditt VVS- eller plattsättningsföretag rätt behörighet: BKR, GVK eller Säker Vatten – och varför kunden kräver det.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-18T19:30:00.000Z", createdAt: "2026-08-18T19:30:00.000Z", updatedAt: "2026-08-18T19:30:00.000Z",
};

const A_YRKESBEVIS_BYGG_LARLING_HTML = `
<p>Kompetensbristen i byggbranschen löser sig inte med annonser – den löser sig genom att företag utbildar sina egna. Att handleda en lärling fram till yrkesbevis ger dig en fullärd yrkesarbetare med bekräftad kompetens i ID06 kompetensdatabas, och samtidigt en person som redan kan era rutiner, kunder och arbetsplatser. Men reglerna för vägen dit har ändrats, och många företag jobbar fortfarande efter en gammal modell. Här går vi igenom vad som faktiskt gäller 2026, styrt av Byggbranschens Yrkesnämnd (BYN) och Yrkesutbildningsavtalet YUA 2020.</p>

<p>Under lärlingstiden behöver du dokumentera arbetad tid och uppföljning löpande – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall</a> för att hålla ordning på lärlingens timmar och arbetsmoment från dag ett.</p>

<h2>Timmar eller månader? Så fungerar kravet idag</h2>
<p>Först en viktig korrigering av en vanlig missuppfattning: den gamla pappersbaserade utbildningsboken där lärlingen loggade utbildningstimmar är utbytt. I dagens YUA 2020-modell mäts lärlingstiden som <strong>kvalificeringstid i månader</strong>, inte i antal loggade utbildningstimmar. Godkännandet sker på uppnådda praktiska läranderesultat – alltså vad lärlingen faktiskt kan – och rapporteringen görs digitalt i BYN:s Mina sidor (e-boken).</p>
<p>Notera också att BYN har bytt webbadress. Den gamla adressen byn.se leder numera vidare via en permanent omdirigering (301) – rätt sida är <strong>byggbranschensyrkesnamnd.se</strong>. Verifiera alltid aktuella krav och regler direkt hos BYN innan ni registrerar en lärling, eftersom detaljerna kan skilja mellan yrken.</p>

<h2>Kvalificeringstid per yrke</h2>
<p>Kvalificeringstiden varierar beroende på yrke. Huvudspåren ser ut så här:</p>
<ul>
<li><strong>36 månader:</strong> Bergarbetare, Beläggningsarbetare, Betongarbetare, Golvläggare, Murare, Träarbetare samt Väg- &amp; anläggningsarbetare.</li>
<li><strong>30 månader:</strong> Håltagare, Plattsättare, Takmontör, Undertaksmontör, Ställningsbyggare och Stenmontör.</li>
<li><strong>24 månader:</strong> Maskinförare – Anläggningsmaskiner, Grundläggning och Kranar.</li>
</ul>
<p>Kvalificeringstiden kan kortas beroende på tidigare skolgång eller validerad kompetens. Har lärlingen redan gått gymnasiets bygg- och anläggningsprogram eller genomfört vuxenutbildning hos en BYN-godkänd anordnare, räknas det av. Ett par yrken behåller fortfarande timkrav som undantag – anläggningsdykare har till exempel totalt 5 800 timmars utbildning, varav 3 200 timmar grundutbildning och minst 800 loggade dyktimmar, plus godkänd läkarundersökning enligt <strong>AFS 2023:15</strong> (Arbetsmiljöverkets föreskrifter om medicinska kontroller, gällande sedan 1 januari 2025). Det visar att enstaka specialyrken avviker även om huvudmodellen är månadsbaserad.</p>

<h2>Grundutbildning och distansutbildning</h2>
<p>Innan lärlingen går över i kvalificeringstid ska grundutbildningen – både teori och praktik – vara klar. Som företagslärling måste den delen vara avklarad inom <strong>max 12 månader</strong> (6 månader för maskinförare). Det är företaget som beställer och betalar den yrkesteoretiska distansutbildningen.</p>
<p>För en träarbetare kombineras den yrkesteoretiska distansutbildningen med en kvalificeringstid på 36 månader hos ett företag med kollektivavtal innan yrkesbeviset utfärdas. Kontrollera det exakta antalet teoritimmar och aktuell kursanordnare direkt hos BYN. Planera in distansstudierna tidigt – ligger teorin efter blir hela vägen till yrkesbevis försenad.</p>

<h2>Krav på företaget</h2>
<p>För att ni överhuvudtaget ska få utbilda lärlingar mot byggbranschens yrkesbevis krävs följande:</p>
<ul>
<li><strong>Kollektivavtal</strong> för bygg/anläggning är ett absolut krav – utan det kan företaget inte registrera lärlingar hos BYN.</li>
<li>Lärlingen är normalt <strong>minst 18 år</strong>. Dispens kan sökas hos BYN.</li>
<li>Ett <strong>skriftligt anställningsavtal</strong> (provanställning eller tillsvidare) måste finnas.</li>
<li>Registrering sker i <strong>Mina sidor</strong> med företagets organisationsnummer.</li>
</ul>
<p>Vid registreringen anger ni handledare, bifogar anställningsavtalet och dokumenterar lärlingens tidigare kvalifikationer med betyg, intyg eller valideringsintyg. Handledaren bekräftar handledarinstruktionerna i systemet.</p>

<h2>Handledarens roll</h2>
<p>Handledaren är den som gör att lärlingssystemet fungerar i praktiken. Kraven är tydliga:</p>
<ul>
<li>Handledaren måste ha <strong>yrkesbevis i samma yrke</strong> som lärlingen, eller motsvarande dokumenterad kompetens.</li>
<li>En handledare får ha <strong>högst tre lärlingar</strong> totalt. För ställningsbyggare gäller särskild regel: 1 lärling under grundutbildning och 3 under kvalificeringstid.</li>
<li>Handledaren godkänner och bekräftar läranderesultat och rapporter i e-boken (Mina sidor).</li>
</ul>
<p>Handledarutbildning rekommenderas starkt – det gör att bedömningen av läranderesultaten blir korrekt och att godkännandena i systemet inte fastnar. En handledare som förstår kraven undviker att lärlingen når slutet av kvalificeringstiden med luckor som borde ha åtgärdats i tid.</p>

<h2>Steg för steg – från anställning till yrkesbevis</h2>
<ol>
<li>Kontrollera att företaget har kollektivavtal och teckna skriftligt anställningsavtal med lärlingen.</li>
<li>Registrera lärlingen i Mina sidor med org.nr och tilldela en behörig handledare.</li>
<li>Dokumentera tidigare kvalifikationer så att eventuell avkortning av kvalificeringstiden räknas av.</li>
<li>Beställ och betala den yrkesteoretiska distansutbildningen – klar inom 12 månader (maskinförare 6).</li>
<li>Följ upp arbetsmoment och godkänn läranderesultat löpande i e-boken under kvalificeringstiden.</li>
<li>När kvalificeringstiden är genomförd och godkänd utfärdas yrkesbeviset digitalt via Mina sidor, registreras i ID06 kompetensdatabas och lärlingen får ett fysiskt plastkort plus certifieringsdokument.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp utfärdar inte yrkesbevis – det gör bara BYN. Men den löpande dokumentationen som handledningen kräver kan du sköta i ByggExp. Lägg upp lärlingens arbetade tid per projekt och arbetsmoment, så har du underlag när handledaren ska bekräfta läranderesultat i Mina sidor och överblick över hur kvalificeringstiden fortskrider. Samma tidrapportering ger dig dessutom korrekt underlag för lön och fakturering. Kort sagt: BYN äger vägen till yrkesbeviset, ByggExp håller ordning på timmarna och uppföljningen längs vägen.</p>

<h2>Vanliga frågor</h2>
<h3>Behöver lärlingen fortfarande fylla i en lärlingsbok med utbildningstimmar?</h3>
<p>Nej. Den gamla pappersbaserade utbildningsboken med timloggar är utbytt. I YUA 2020-modellen mäts tiden som kvalificeringstid i månader och godkännandet sker på uppnådda praktiska läranderesultat, som dokumenteras digitalt i BYN:s Mina sidor.</p>
<h3>Kan vårt företag utbilda lärlingar utan kollektivavtal?</h3>
<p>Nej. Kollektivavtal för bygg/anläggning är ett krav för att företaget ska få registrera och utbilda lärlingar mot byggbranschens yrkesbevis. Utan avtal kan ni inte gå vidare med registrering hos BYN.</p>
<h3>Hur lång är kvalificeringstiden?</h3>
<p>Den beror på yrket: 36 månader för bland annat träarbetare, betong, murare och golv, 30 månader för exempelvis platt-, sten-, tak- och undertaksmontör samt ställningsbyggare, och 24 månader för maskinförare. Tidigare skolgång eller validerad kompetens kan korta tiden.</p>
<h3>Hur många lärlingar får en handledare ha?</h3>
<p>Maximalt tre lärlingar totalt. För ställningsbyggare gäller en särskild regel med 1 lärling under grundutbildning och 3 under kvalificeringstid. Handledaren måste ha yrkesbevis i samma yrke som lärlingen.</p>

<h2>Kom igång</h2>
<p>Börja med att sätta rutinen för tidsdokumentation – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">tidrapport-mall</a> och koppla lärlingens timmar till rätt projekt och arbetsmoment. Vill du se hur ByggExp håller ihop tidrapportering, uppföljning och fakturering i ett flöde? <a href="/sv/contact">Boka en demo</a> så visar vi upplägget för ditt företag.</p>

<p>Relaterat: <a href="/sv/blog/anstalla-personal-byggforetag">Anställa personal i byggföretag</a> och <a href="/sv/blog/tidrapportering">Tidrapportering för byggföretag</a>.</p>
`;

const A_YRKESBEVIS_BYGG_LARLING: BlogPost = {
  _id: "code-"+"yrkesbevis-bygg-larling",
  title: "Yrkesbevis i bygg: så handleder du en lärling 2026", slug: "yrkesbevis-bygg-larling", locale: "sv",
  excerpt: "Vad som faktiskt gäller 2026 när du utbildar en lärling till yrkesbevis – kvalificeringstid i månader, krav på företag och handledare, och vägen via BYN:s Mina sidor.", tag: "Kompetens",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_YRKESBEVIS_BYGG_LARLING_HTML,
  seoTitle: "Yrkesbevis och lärling i bygg 2026 | ByggExp", seoDescription: "Så handleder du en lärling till yrkesbevis 2026 enligt BYN och YUA 2020: kvalificeringstid i månader, krav på företag och handledare, steg för steg.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:21:00.000Z", createdAt: "2026-08-19T05:21:00.000Z", updatedAt: "2026-08-19T05:21:00.000Z",
};

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML = `
<p>Den 1 juli 2025 ersatte Boverkets nya bygg- och konstruktionsregler de gamla byggreglerna (BBR) och konstruktionsreglerna (EKS). Reformen beskrivs ofta som den största förändringen av regelverket på 30 år. För dig som är entreprenör eller driver byggföretag är det inte bara ett nytt regelverk att läsa – det är en övergångsperiod som stängs 30 juni 2026, och en förskjutning av ansvar som direkt träffar hur du dokumenterar din egenkontroll.</p>

<p>Vill du komma igång direkt med att uppdatera dina rutiner mot funktionskraven? Börja i vår gratis egenkontrollmall -&gt; <a href="/sv/verktyg/egenkontroll-mall">/sv/verktyg/egenkontroll-mall</a>.</p>

<h2>Vad har egentligen ändrats?</h2>
<p>De gamla reglerna var detaljstyrda: BBR angav ofta konkreta värden och hänvisade till standarder som du kunde följa rakt av. De nya reglerna är i stället funktions- och kravbaserade. Boverket anger vilka funktioner och egenskaper en byggnad ska uppnå – men inte längre hur du ska uppfylla dem. Stora delar av de allmänna råden och hänvisningarna till standarder har tagits bort.</p>
<p>I praktiken flyttar det ansvaret nedåt i kedjan. Byggherren och entreprenören måste själva välja en lösning och kunna visa att den uppfyller funktionskravet. Det gäller att kunna verifiera och dokumentera varje val, i stället för att luta sig mot en tabell i en föreskrift. Reformen är dessutom uppdelad i flera separata författningar i BFS 2024-serien i stället för det gamla samlade BBR/EKS – kontrollera de exakta BFS-numren direkt i Boverkets författningssamling innan du hänvisar till dem i ett projekt.</p>

<h2>Övergångsperioden och slutdatumet 30 juni 2026</h2>
<p>Mellan 1 juli 2025 och 30 juni 2026 gäller en ettårig övergångsperiod. Under den får byggherren välja att följa antingen de gamla reglerna (BBR/EKS) i sin helhet eller de nya reglerna i sin helhet. Det du absolut inte får göra är att blanda regelverken i samma projekt – välj ett spår och håll dig till det hela vägen.</p>
<p>Det avgörande för vilket regelverk som gäller är i praktiken vilket datum ansökan om lov eller anmälan kom in (inkom) till byggnadsnämnden. Kort sammanfattat:</p>
<ul>
<li><strong>Inkom före 1 juli 2025:</strong> gamla BBR/EKS gäller.</li>
<li><strong>Inkom 1 juli 2025–30 juni 2026:</strong> byggherren väljer gammalt eller nytt – men inte en blandning.</li>
<li><strong>Inkom efter 30 juni 2026:</strong> enbart Boverkets nya bygg- och konstruktionsregler gäller.</li>
</ul>
<p>Pågående projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser. Den exakta lydelsen bör du dubbelkolla mot Boverkets övergångsbestämmelser för just ditt ärende. En separat tidpunkt som rapporterats är att energikraven flyttas ut ur BBR till en egen energiregel, uppgivet omkring 1 oktober 2026 – det datumet är ännu obekräftat och bör verifieras separat mot Boverket.</p>

<h2>Myten om en ny kontrollplan – så ligger det till</h2>
<p>En vanlig missuppfattning är att den nya regelreformen tvingar fram en helt ny sorts kontrollplan. Det stämmer inte. Kontrollplan och egenkontroll regleras av plan- och bygglagen (PBL, 10 kap.), inte av BBR eller byggreglerna. Själva reformen ändrar alltså inte de formella PBL-kraven på kontrollplanen.</p>
<p>Kraven i sig står kvar: en kontrollplan krävs för de flesta lov- och anmälningspliktiga bygg-, rivnings- och markåtgärder, och för de flesta sådana projekt krävs en certifierad kontrollansvarig (KA). Byggherren är fortsatt ansvarig för att kraven uppfylls och för att det finns en kontrollplan. Kontrollerna kan utföras som byggherrens egenkontroll eller av certifierad sakkunnig. Det som ändras är inte formen – utan innehållet du måste fylla den med.</p>

<h2>Så påverkas din egenkontroll i praktiken</h2>
<p>När detaljvärden och standardhänvisningar försvinner räcker det inte längre att bocka av att en kontroll är utförd. Din egenkontroll måste tydligare visa <em>hur</em> den valda lösningen uppfyller funktionskravet – alltså själva verifieringen. Det höjer i praktiken kraven på dokumentation som knyts till kontrollplanen, även om kontrollplanens PBL-krav i sig är oförändrade.</p>
<p>Konkret betyder det att varje kontrollpunkt bör kopplas till tre saker: vilket funktionskrav den svarar mot, vilken metod eller lösning du valt, och vilket underlag som styrker att kravet är uppfyllt (mätning, provning, produktdokumentation eller motsvarande). Kopplingen mellan egenkontroll, kontrollplan och startbesked blir viktigare – kontrollansvarig ska kunna följa hur du kommit fram till att ett krav är uppfyllt, inte bara att någon skrivit sina initialer i en ruta.</p>
<p>Rollfördelningen är densamma men skärps i praktiken: byggherren äger ansvaret, KA granskar och följer kontrollplanen, och du som entreprenör levererar verifieringen. Ju svagare din dokumentation är, desto mer sårbar blir hela kedjan vid slutbesked.</p>

<h2>Checklista: förbered dig innan 30 juni 2026</h2>
<ul>
<li><strong>Bestäm regelval per projekt.</strong> Avgör tidigt om projektet ska följa gamla eller nya reglerna, och notera datumet då ansökan/anmälan inkom.</li>
<li><strong>Uppdatera egenkontrollmallarna mot funktionskraven.</strong> Byt ut avbockningar mot punkter som beskriver vald lösning och verifiering.</li>
<li><strong>Dokumentera verifieringsmetoden.</strong> Bestäm i förväg hur varje funktionskrav ska styrkas – mätning, provning eller produktunderlag.</li>
<li><strong>Stäm av med kontrollansvarig.</strong> Säkerställ att kontrollplan och egenkontroll hänger ihop mot startbesked.</li>
<li><strong>Bevaka energiregeln.</strong> Håll koll på den separata energiregelns ikraftträdande och kontrollera BFS-numren mot Boverkets författningssamling.</li>
<li><strong>Spara underlagen under hela ansvarstiden.</strong> Verifieringsdokumentationen är ditt skydd om ett projekt ifrågasätts i efterhand – för arbete på byggnader kan fel enligt konsumenttjänstlagen reklameras i upp till tio år, och entreprenadavtalens ansvarstid enligt AB 04/ABT 06 är normalt tio år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig att strukturera egenkontrollen så att den håller för det funktionsbaserade regelverket. I stället för lösa pappersblanketter samlar du kontrollpunkter, valda lösningar och verifieringsunderlag på ett ställe – med foton och noteringar kopplade till rätt moment. Det gör det enklare att visa <em>hur</em> ett krav uppfyllts och att ta fram dokumentationen när kontrollansvarig eller byggnadsnämnden frågar. ByggExp ersätter inte kontrollansvarig eller kontrollplanen enligt PBL, och tar inte över byggherrens ansvar – men det gör det betydligt lättare att hålla ordning på underlaget och att spara det under den tid det kan behövas, till exempel under den tioåriga reklamations- och ansvarstiden.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag använda de nya reglerna redan nu?</h3>
<p>Nej. Under övergångsperioden 1 juli 2025–30 juni 2026 får byggherren välja gamla eller nya reglerna, så länge du inte blandar dem i samma projekt. För ärenden där ansökan eller anmälan inkommer efter 30 juni 2026 gäller enbart de nya reglerna.</p>
<h3>Vad händer med pågående bygglov?</h3>
<p>Vilket regelverk som gäller styrs i praktiken av datumet då ansökan eller anmälan inkom till byggnadsnämnden. Projekt som startats under övergångsperioden enligt äldre regler kan omfattas av övergångsbestämmelser – kontrollera lydelsen för ditt specifika ärende mot Boverket.</p>
<h3>Ändras kontrollplanen av de nya byggreglerna?</h3>
<p>De formella kraven på kontrollplan och egenkontroll styrs av PBL (10 kap.) och ändras inte av regelreformen. Men eftersom funktionskrav ersätter detaljvärden behöver innehållet i din egenkontroll bli mer verifierande och bättre dokumenterat.</p>
<h3>Hur länge bör jag spara egenkontroll och verifieringsunderlag?</h3>
<p>Det finns ingen särskild lagstadgad arkiveringstid för egenkontroll i PBL, men underlaget kan behövas långt efter slutbesked. Fel i arbete på byggnader kan enligt konsumenttjänstlagen reklameras i upp till tio år, och ansvarstiden i AB 04/ABT 06 är normalt tio år efter godkänd slutbesiktning – spara därför verifieringsdokumentationen så länge den kan bli aktuell.</p>
<h3>Vad gäller efter 30 juni 2026?</h3>
<p>Då är valfriheten borta. Ärenden som påbörjas eller ansöks efter det datumet ska följa Boverkets nya bygg- och konstruktionsregler fullt ut. Se därför över mallar och rutiner i god tid före sommaren 2026.</p>

<h2>Kom igång</h2>
<p>Börja med att se över dina egenkontrollrutiner mot funktionskraven med vår gratis <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmall</a>. Vill du se hur ByggExp samlar egenkontroll och verifieringsunderlag i ett flöde? Boka en demo via <a href="/sv/contact">/sv/contact</a>.</p>

<p>Relaterat: <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a> och <a href="/sv/blog/nya-vatrumsregler-2026">Nya våtrumsregler 2026</a>.</p>
`;

const A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN: BlogPost = {
  _id: "code-"+"boverkets-nya-byggregler-2026-kontrollplan",
  title: "Boverkets nya byggregler 2026: så påverkas din kontrollplan och egenkontroll", slug: "boverkets-nya-byggregler-2026-kontrollplan", locale: "sv",
  excerpt: "Boverkets funktionsbaserade byggregler flyttar ansvaret till dig som entreprenör. Så påverkas egenkontroll och kontrollplan – och så förbereder du dig före 30 juni 2026.", tag: "Regelverk",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN_HTML,
  seoTitle: "Nya byggregler 2026: kontrollplan | ByggExp", seoDescription: "Boverkets nya bygg- och konstruktionsregler ändrar hur du dokumenterar egenkontroll. Så förbereder du dig och kontrollplanen före 30 juni 2026.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:39:00.000Z", createdAt: "2026-08-19T05:39:00.000Z", updatedAt: "2026-08-19T05:39:00.000Z",
};

const A_NYA_BYGGREGLER_2026_ENTREPRENAD_HTML = `
<p>2026 är ett skarpt år för dig som driver byggföretag eller arbetar som hantverkare. Boverkets nya byggregler blir det enda gällande regelverket för nya projekt, konstruktionsreglerna har helt ersatt EKS, och Arbetsmiljöverkets nya struktur har satt sig. Samtidigt ligger fokus i PBL på att tillämpa kontrollsystemet rätt. Den här artikeln ger dig överblicken – men den ersätter inte primärkällorna. Kontrollera alltid exakta datum och paragrafer hos Boverket och Arbetsmiljöverket innan du binder dig i avtal eller kontrollplan.</p>

<p>Ett konkret första steg är att se över de dokument du skickar ut i varje projekt. Uppdatera dina avtalsmallar så att de hänvisar till rätt regelverk – börja med <a href="/sv/verktyg/offert-mall">vår gratis offertmall -&gt;</a> och byt ut föråldrade referenser till BBR och EKS.</p>

<h2>Boverkets nya bygg- och konstruktionsregler – övergångsperioden är slut</h2>
<p>Boverkets nya byggregler är inte en enda författning, utan nio nya grundförfattningar: BFS 2024:4 (aktsamhet vid bygg-, rivnings- och markåtgärder), 2024:6 (bärförmåga, stadga och beständighet – konstruktionsreglerna), 2024:7 (brand), 2024:8 (hygien, hälsa och miljö), 2024:9 (säkerhet vid användning), 2024:10 (buller), 2024:11 (bostäders lämplighet), 2024:12 (tillgänglighet) och 2024:13 (tomter). De har ersatt motsvarande regler i BBR och EKS.</p>
<p>Författningarna trädde i kraft under 2025. Under en övergångsperiod gick det att fortsätta tillämpa de äldre reglerna i BBR och EKS, men den möjligheten upphörde den 1 juli 2026. Från och med då gäller de nya reglerna för nya projekt. EKS (BFS 2011:10, eurokoderna) är upphävt i sin helhet genom BFS 2024:6, eftersom konstruktionsreglerna fullt ut ersatte EKS.</p>
<p>En viktig nyansering: BBR (BFS 2011:6) är inte helt upphävt ännu. Reglerna om energihushållning ligger kvar i BBR 31 (senaste ändring BFS 2024:14). En ny grundförfattning om energihushållning, samordnad med EU:s direktiv om byggnaders energiprestanda (EPBD), träder i kraft den 1 oktober 2026. Först då är samtliga BBR-regler ersatta.</p>

<h2>Från detaljregler till funktionskrav – vad det betyder i praktiken</h2>
<p>Den största principiella förändringen är att de nya reglerna bygger på funktionskrav. De innehåller i huvudsak inte längre några allmänna råd eller hänvisningar till specifika standarder. Boverket anger vad som ska uppnås, inte hur. Byggherren väljer lösning, men ska på vetenskaplig grund kunna visa att kraven uppfylls – med fackmässighet i projektering, utförande och kontroll.</p>
<p>För dig som entreprenör innebär det större frihet men också ett tydligare ansvar. Du kan inte längre luta dig mot att en viss standard automatiskt uppfyller kraven. Dokumentation, kompetens och spårbarhet blir avgörande. Kan du inte visa hur och varför en lösning uppfyller funktionskravet, står du svagt om något ifrågasätts.</p>

<h2>Kontroll enligt de nya reglerna</h2>
<p>Konstruktionsreglerna (BFS 2024:6) skärper synen på kontroll. Kontroll får inte göras i färdig byggnad – den måste ske under projektering och utförande. För byggnader i säkerhetsklass 2 eller 3 krävs dimensioneringskontroll: någon annan än den som gjort dimensioneringen ska kontrollera den, för att eliminera grova fel.</p>
<p>Det här hänger ihop med PBL-nivån. Kontrollplanen ska bygga på en projektspecifik riskbedömning med tydliga riskmoment – inte en lång lista generella kontrollpunkter som klickas av på slutet. Egenkontroller och kontrollplan behöver alltså vara riskbaserade och kopplade till det enskilda projektet.</p>

<h2>PBL, kontrollplan och kontrollansvarig – vad gäller 2026</h2>
<p>På PBL-nivå ligger tyngdpunkten 2025–2026 på korrekt tillämpning av det befintliga kontrollsystemet. Boverket driver stödet ”Förebygg fel, brister och skador / Korrekt tillämpning av kontrollsystemet i PBL” (publicerat 10 oktober 2025). Budskapet är att kontrollplanen ska vara riskbaserad och projektspecifik, och att kontrollansvarig (KA) faktiskt ska fylla sin roll.</p>
<p>En bredare reform av byggkontrollen och kontrollansvarig-rollen – samt arbetet mot en ny plan- och bygglag – pågår. Men den saknar bekräftat ikraftträdande 2026. Slå inte fast osäkra datum i offerter eller planering. Bevaka status hos Boverket och regeringen.</p>

<h2>Arbetsmiljöverkets nya regelstruktur</h2>
<p>Arbetsmiljöverket har omstrukturerat hela sitt regelverk. Cirka 2 700 regler har omarbetats och samlats i en ny struktur med ett femtontal nya föreskriftshäften i AFS 2023-serien. Den nya regelstrukturen trädde i kraft den 1 januari 2025 – kontrollera exakt tillämpning hos Arbetsmiljöverket.</p>
<p>För bygg är den centrala nya föreskriften AFS 2023:3 Projektering och byggarbetsmiljösamordning – grundläggande skyldigheter, som reglerar byggherrens, projektörernas och byggarbetsmiljösamordnarnas (Bas-P och Bas-U) ansvar. Angränsande föreskrifter är AFS 2023:1 (systematiskt arbetsmiljöarbete), 2023:2 (planering och organisering) och 2023:12 (utformning av arbetsplatser). Innehållskraven är i stort desamma som tidigare, men numrering, struktur och hänvisningar är nya. Uppdatera därför interna rutiner och mallar så att de pekar på rätt AFS-nummer.</p>

<h2>Checklista: så förbereder sig entreprenören 2026</h2>
<ul>
<li>Uppdatera mallar och egenkontroller mot rätt BFS- och AFS-nummer.</li>
<li>Säkerställ dokumentation och fackmässighet – kunna visa hur funktionskrav uppfylls.</li>
<li>Se över behovet av dimensioneringskontroll i säkerhetsklass 2 och 3.</li>
<li>Gör om kontrollplansmallar till ett riskbaserat, projektspecifikt upplägg.</li>
<li>Utbilda personal i den nya strukturen och principskiftet till funktionskrav.</li>
<li>Byt ut referenser i avtal och AMA-hänvisningar från BBR/EKS till nya författningar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ändrar inte reglerna åt dig, men verktygen gör det enklare att hålla dokumentationen aktuell och konsekvent. Med våra mallar för offert och ÄTA får du ett gemensamt underlag där du själv styr vilka regelhänvisningar och kontrollpunkter som ska med. När du uppdaterar en formulering behöver du bara göra det på ett ställe, i stället för i lösa Word-dokument per projekt. Se <a href="/sv/verktyg/ata-mall">vår ÄTA-mall</a> för att hålla ordning på ändrings- och tilläggsarbeten, och samla alla verktyg via <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Gäller gamla BBR fortfarande?</h3>
<p>Möjligheten att tillämpa äldre BBR och EKS på nya projekt upphörde den 1 juli 2026. Reglerna om energihushållning ligger dock kvar i BBR 31 tills den nya energiförfattningen träder i kraft den 1 oktober 2026. Kontrollera aktuellt läge hos Boverket.</p>
<h3>Måste jag följa svensk standard?</h3>
<p>De nya reglerna är funktionskrav och innehåller i huvudsak inte längre hänvisningar till specifika standarder. Du väljer lösning, men ska på vetenskaplig grund kunna visa att kraven uppfylls. En standard kan fortfarande vara ett bra sätt att visa det.</p>
<h3>Vad hände med EKS?</h3>
<p>EKS (BFS 2011:10) är upphävt i sin helhet genom de nya konstruktionsreglerna i BFS 2024:6, som fullt ut ersätter EKS.</p>
<h3>När kommer de nya energireglerna?</h3>
<p>En ny grundförfattning om energihushållning, samordnad med EU:s EPBD-direktiv, träder i kraft den 1 oktober 2026. Först då är samtliga BBR-regler ersatta. Bekräfta datum hos Boverket.</p>

<h2>Kom igång</h2>
<p>Börja med att uppdatera dina projektdokument så att de speglar 2026 års regelverk. Skapa ett rent underlag med <a href="/sv/verktyg/offert-mall">vår gratis offertmall</a>, och boka en <a href="/sv/contact">demo</a> om du vill se hur ByggExp kan hålla mallar och dokumentation samlade. Kom ihåg: exakta datum och paragrafer kan ändras – bevaka alltid Boverkets och Arbetsmiljöverkets sidor.</p>

<p>Relaterat: <a href="/sv/blog/ab-04-och-abt-06">AB 04 och ABT 06 – så väljer du rätt standardavtal</a> och <a href="/sv/blog/ata-arbeten">ÄTA-arbeten – så hanterar du ändringar och tillägg</a>.</p>
`;

const A_NYA_BYGGREGLER_2026_ENTREPRENAD: BlogPost = {
  _id: "code-"+"nya-byggregler-2026-entreprenad",
  title: "Nya byggregler 2026 för entreprenörer – detta ändras och vad du bör göra nu", slug: "nya-byggregler-2026-entreprenad", locale: "sv",
  excerpt: "En översikt av vad som ändras för entreprenörer 2026: Boverkets nya byggregler, riskbaserade kontrollplaner och Arbetsmiljöverkets omstrukturerade föreskrifter.", tag: "Regelverk",
  coverImageUrl: "/landing/features/7offerter.webp", contentHtml: A_NYA_BYGGREGLER_2026_ENTREPRENAD_HTML,
  seoTitle: "Nya byggregler 2026 entreprenad | ByggExp", seoDescription: "Boverkets nya byggregler, PBL-kontrollplan och Arbetsmiljöverkets nya AFS 2023-serie – en översikt för entreprenörer 2026, med checklista och primärkällor.",
  seoImageUrl: `${SITE_URL}/landing/features/7offerter.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T05:42:00.000Z", createdAt: "2026-08-19T05:42:00.000Z", updatedAt: "2026-08-19T05:42:00.000Z",
};

const A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG_HTML = `
<p>I Sverige är förvånansvärt få hantverksbehörigheter faktiskt lagkrav. Det betyder inte att de är valfria. Beställare, försäkringsbolag och offentlig upphandling avgör i praktiken vilka behörigheter som krävs för att du ens ska få lämna anbud – och utan rätt dokumentation kan ett vattenskadejobb sluta med att försäkringen inte betalar en krona. Den här artikeln är en checklista över de behörigheter som faktiskt vinner jobb 2026, och vilka du kan lägga mindre krut på.</p>

<p>Oavsett behörighet är dokumenterad egenkontroll det som knyter ihop kvalitet och försäkringsersättning – ladda ner <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a> och koppla den till varje uppdrag.</p>

<h2>Våtrumsbehörighet – GVK, BKR, Säker Vatten och MVK</h2>
<p>Till skillnad från el och VVS finns det inget lagkrav på att vara certifierad för att renovera ett våtrum. I praktiken är det ändå avgörande. GVK, Byggkeramikrådet (BKR) och Säker Vatten har blivit de facto-standard, och det är just dessa branschregler som försäkringsbolag och beställare kräver. Utan behörigt utfört tätskikt och tillhörande kvalitetsdokument kan försäkringsersättningen vid en vattenskada helt utebli.</p>
<p>Behörigheterna delar upp arbetet efter moment:</p>
<ul>
<li><strong>GVK</strong> – tätskikt, golv och plastmatta.</li>
<li><strong>BKR</strong> – kakel och klinker (byggkeramik).</li>
<li><strong>Säker Vatten</strong> – rör och VVS-installationer.</li>
<li><strong>MVK</strong> – måleri i våtrum.</li>
</ul>
<p>Poängen: ett vanligt badrumsjobb kräver ofta flera behörigheter samtidigt. En komplett badrumsrenovering rör tätskikt, kakel och rör – tre olika regelverk. En sak som ofta blandas ihop: auktorisationerna (GVK, BKR, Säker Vatten) gäller företaget, medan branschlegitimation och personcertifikat gäller den enskilde montören. Du behöver alltså både ett auktoriserat företag och behörig personal på plats.</p>
<p>BKR-behörighet kräver till exempel att företaget alltid har minst en behörig arbetsledare och en behörig plattsättare anställd, klarar en kreditkontroll och omcertifierar vart femte år. Saknar plattsättaren yrkesbevis måste kompetensen valideras via ett anvisat utbildningsföretag.</p>

<h2>Nyheterna 2026 – Säkra Våtrum 2026 och Säker Vatten 2026:1</h2>
<p>De uppdaterade branschreglerna <strong>Säkra Våtrum 2026</strong> är samordnade mellan GVK, BKR, MVK och Säker Vatten och tillämpas på installationer som startar efter 1 januari 2026. Övergångsregel: tätskikt får utföras enligt de äldre reglerna (2021:1) om bygglov beviljats före 1 januari 2026.</p>
<p>Konkreta ändringar att ha koll på:</p>
<ul>
<li>Tillåten golvlutning mot golvbrunn i duschplats ändras till <strong>minst 7 mm/m och max 30 mm/m</strong> (tidigare 7–20 mm/m).</li>
<li>Minsta avstånd mellan rörgenomföring och tak sänks från 100 mm till <strong>60 mm</strong>.</li>
<li>Förtydliganden kring dörröppning och våtzoner.</li>
</ul>
<p>Parallellt gäller <strong>Säker Vatteninstallation 2026:1</strong> från 1 januari 2026. Ett auktoriserat VVS-företag ska ha minst en heltidsanställd montör med certifikat eller validering, personalen ska ha branschlegitimation, och ett digitalt intyg ska lämnas till beställaren inom fyra veckor efter avslutat arbete. Det digitala intyget är inte byråkrati för sakens skull – det är beviset beställaren behöver om något går fel.</p>

<h2>Heta Arbeten – behörigheten som avgör om försäkringen betalar</h2>
<p>Heta Arbeten är inte ett lagkrav, utan ett försäkringskrav – och det gör den minst lika viktig. Försäkringsbolagens villkor kräver giltigt certifikat för alla som utför brandfarliga heta arbeten på tillfällig arbetsplats: svetsning, skärande bearbetning, lödning, torkning, uppvärmning och rondellarbete. Kravet gäller även brandvakten och den tillståndsansvarige.</p>
<p>Utbildningen är en endagsutbildning i Brandskyddsföreningens säkerhetsregler och kostar typiskt runt 2 500–2 900 kr per person. Certifikatet är giltigt i 5 år och går ut sista dagen i angiven månad. Saknas giltigt certifikat vid en brand minskas försäkringsersättningen markant. Med tanke på kostnaden – runt 2 500 kr mot potentiellt hela ersättningen vid en brand – är detta en av de mest lönsamma behörigheterna att hålla aktuell.</p>

<h2>Kontrollansvarig (KA) enligt PBL – N och K</h2>
<p>Kontrollansvarig krävs enligt plan- och bygglagen för de flesta åtgärder som kräver bygglov, rivningslov, marklov eller anmälan. Byggnadsnämnden kan göra undantag för enklare projekt. En KA måste vara certifierad av ett ackrediterat organ – RISE eller Kiwa, båda ackrediterade av Swedac – och certifieringen är giltig i 5 år förutsatt att en årlig rapport lämnas in.</p>
<p>Det finns två behörighetsnivåer:</p>
<ul>
<li><strong>N (normal art)</strong> – bland annat en- och tvåbostadshus och byggnader med högst två våningar. Kräver minst 3 års erfarenhet av projektering, arbetsledning eller besiktning samt teknisk utbildning, till exempel högskoleingenjörsexamen (120 hp) eller motsvarande äldre utbildning.</li>
<li><strong>K (komplicerad art)</strong> – flerbostadshus, industri och avancerade tekniska lösningar.</li>
</ul>
<p>Viktigt: en KA ska vara självständig gentemot den som utför arbetet. Du kan alltså inte vara kontrollansvarig för ditt eget bygge – rollen bygger på oberoende.</p>

<h2>Checklista – välj rätt behörighet för uppdraget</h2>
<p>Matcha behörighet mot uppdragstyp:</p>
<ol>
<li><strong>Badrumsrenovering</strong> – GVK och/eller BKR för tätskikt och kakel, Säker Vatten för rör.</li>
<li><strong>Stambyte / VVS</strong> – Säker Vatten (företag) plus branschlegitimation (montör).</li>
<li><strong>Svets, tak eller tätskikt med låga</strong> – Heta Arbeten för utförare, brandvakt och tillståndsansvarig.</li>
<li><strong>Nybyggnad / tillbyggnad med bygglov</strong> – kontrollansvarig, nivå N eller K beroende på projekt.</li>
<li><strong>Grundkrav på i princip varje bygge</strong> – ID06 och F-skatt. Utan dem kommer du varken in på arbetsplatsen eller vinner offentliga anbud.</li>
</ol>

<h2>Vanliga misstag som kostar jobb och pengar</h2>
<p>Tre återkommande misstag är värda att undvika. Det första är att blanda ihop företagsauktorisation och personcertifikat – du behöver båda, inte det ena eller det andra. Det andra är att missa 5-årscyklerna: både Heta Arbeten, KA-certifiering och BKR-omcertifiering löper ut efter fem år, och ett utgånget certifikat är lika illa som inget alls den dag försäkringsbolaget frågar. Det tredje är att utföra tätskikt utan att dokumentera egenkontrollen – arbetet kan vara korrekt utfört, men utan papper på det står du svag när ersättningen ska prövas.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte själva behörigheten – den utfärdas alltid av branschorganet eller certifieringsorganet. Det ByggExp gör är att hålla ihop dokumentationen som behörigheten kräver. Du kopplar egenkontroll till varje uppdrag, samlar foton och intyg på ett ställe och kan visa beställaren och försäkringsbolaget att arbetet är utfört enligt gällande branschregler. På så sätt blir behörigheten värd något även efteråt, när ersättningsfrågan avgörs, i stället för att kvitton och kontrollpunkter ligger utspridda i telefonen och mejlkorgen.</p>

<h2>Vanliga frågor</h2>
<h3>Måste jag vara certifierad för att renovera våtrum?</h3>
<p>Nej, det finns inget lagkrav – till skillnad från el och VVS. Men GVK, BKR och Säker Vatten är de facto-standard som försäkringsbolag och beställare kräver. Utan behörigt utfört och dokumenterat tätskikt kan ersättningen vid vattenskada helt utebli.</p>
<h3>Hur länge gäller ett Heta Arbeten-certifikat?</h3>
<p>Certifikatet är giltigt i 5 år från godkänd certifiering och går ut sista dagen i angiven månad. Utbildningen är en endagskurs i Brandskyddsföreningens säkerhetsregler och kostar typiskt runt 2 500–2 900 kr per person.</p>
<h3>Vad är skillnaden mellan behörighet N och K för kontrollansvarig?</h3>
<p>N (normal art) gäller bland annat en- och tvåbostadshus och byggnader med högst två våningar och kräver minst 3 års erfarenhet plus teknisk utbildning. K (komplicerad art) gäller flerbostadshus, industri och avancerade tekniska lösningar. Certifieringen görs av RISE eller Kiwa och gäller i 5 år.</p>
<h3>Gäller behörigheten företaget eller personen?</h3>
<p>Båda delar finns. Auktorisationerna GVK, BKR och Säker Vatten gäller företaget, medan branschlegitimation och personcertifikat gäller den enskilde montören. Det är två separata saker som ofta blandas ihop – och du behöver oftast båda.</p>

<h2>Kom igång</h2>
<p>Behörighet är både en konkurrensfördel och en förutsättning för att försäkringen ska betala. Håll koll på 5-årscyklerna och se till att dokumentationen finns när den efterfrågas. Börja med att strukturera din egenkontroll i <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall</a>, eller boka en <a href="/sv/contact">demo</a> så visar vi hur du kopplar behörighet och dokumentation till varje uppdrag.</p>
<p>Relaterat: <a href="/sv/blog/vatrumscertifikat-behorighet-gvk">Våtrumscertifikat och GVK-behörighet</a>, <a href="/sv/blog/heta-arbeten">Heta Arbeten – så funkar det</a>, <a href="/sv/blog/kontrollansvarig-nar-behovs">Kontrollansvarig – när behövs det?</a></p>
`;

const A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG: BlogPost = {
  _id: "code-"+"behorigheter-certifieringar-lonar-sig",
  title: "Behörigheter och certifieringar som faktiskt vinner jobb 2026 – och vilka du kan skippa", slug: "behorigheter-certifieringar-lonar-sig", locale: "sv",
  excerpt: "Få hantverksbehörigheter är lagkrav i Sverige – men beställare och försäkringsbolag styr vilka som vinner anbud. Här är checklistan för 2026.", tag: "Behörigheter",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG_HTML,
  seoTitle: "Behörigheter som vinner jobb 2026 | ByggExp", seoDescription: "Våtrumsbehörighet, Heta Arbeten och kontrollansvarig – vilka behörigheter beställare och försäkringsbolag faktiskt kräver 2026. Checklista för hantverkare.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:03:00.000Z", createdAt: "2026-08-19T08:03:00.000Z", updatedAt: "2026-08-19T08:03:00.000Z",
};

const A_ID06_BESTALLA_KORT_STEG_FOR_STEG_HTML = `
<p>Ska ditt företag ta sitt första uppdrag som underentreprenör hos en generalentreprenör (GE)? Då kommer ID06-kort och giltig arbetsmiljöutbildning att vara en förutsättning för att du och dina anställda överhuvudtaget ska släppas in på arbetsplatsen. GE:n behöver kunna registrera alla som arbetar på plats i den elektroniska personalliggaren, och ID06-kortet är det praktiska verktyget för det. Den här guiden går igenom hela flödet steg för steg – förutsättningarna för företaget, det viktiga nya identifieringskravet som gäller från 28 januari 2026, hur du beställer och validerar kortet, samt vad kompetensdatabasen faktiskt kräver.</p>

<p>Innan ni är igång med kort och närvaroregistrering underlättar det att ha rutiner för tid och närvaro på plats – ladda ner vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall -&gt;</a> och koppla ihop den med personalliggaren från dag ett.</p>

<h2>Vad är ID06 och varför krävs det på byggarbetsplatsen</h2>
<p>ID06 är ett branschgemensamt system för att styrka identitet och närvaro på byggarbetsplatser. Kravet hänger ihop med den elektroniska personalliggaren, som är obligatorisk på de flesta byggarbetsplatser sedan 1 januari 2016 enligt skatteförfarandelagen. För 2026 är prisbasbeloppet 59 200 kr, vilket ger tröskeln 4 × pbb = 236 800 kr i sammanlagd byggkostnad. Överstiger projektet det beloppet krävs personalliggare redan från första arbetsdagen.</p>
<p>Skatteverket gör oanmälda kontroller och tar ut kontrollavgifter om liggaren inte sköts. Avgiften är 12 500 kr om personalliggaren inte förs korrekt, plus 2 500 kr per person som är på plats men inte registrerad. Har byggherren dessutom missat att anmäla till Skatteverket var och när byggarbetet startar blir avgiften 25 000 kr. Det handlar alltså inte bara om formalia – utan om sund konkurrens och om att undvika kännbara avgifter som ofta hamnar hos GE:n och därmed på deras krav mot dig.</p>

<h2>Innan du beställer – förutsättningar för företaget</h2>
<p>Kort beställs alltid via företaget, inte av privatpersonen. Innan du kan ansluta och beställa behöver ditt bolag uppfylla följande:</p>
<ul>
<li>Företaget har <strong>F-skatt</strong>.</li>
<li>Företaget är <strong>registrerat som arbetsgivare</strong> hos Skatteverket.</li>
<li>Företaget är <strong>inte på obestånd</strong> (ekonomiska svårigheter).</li>
<li>Företaget är <strong>anslutet till ID06-systemet</strong> via en kortutgivare.</li>
</ul>
<p>En viktig begränsning: du får bara beställa och registrera ID06-kort till <strong>egen lönesatt personal</strong> – anställda som företaget betalar lön och lagstadgade arbetsgivaravgifter för. Det är så systemet verifierar anställningsförhållandet. Du kan alltså inte lösa kort åt en inhyrd konsult eller en annan UE:s personal.</p>

<h2>Nya identifieringskravet från 28 januari 2026</h2>
<p>Detta är den enskilt viktigaste förändringen att känna till just nu. Från och med 28 januari 2026 gäller ett skärpt säkerhetskrav: kortinnehavaren måste identifiera sig och godkänna beställningen med ett <strong>giltigt pass eller nationellt ID-kort</strong> som godtas som resehandling inom EU.</p>
<p>Det innebär att <strong>BankID/e-legitimation, körkort och personbevis inte längre räcker</strong> för att godkänna en kortbeställning. Identiteten valideras genom att pass eller nationellt ID-kort skannas via ID06:s mobilapp eller hos en auktoriserad skanningspartner. Tredjelandsmedborgare (utanför EU/EES) ska dessutom, precis som tidigare, skanna sitt <strong>uppehållstillståndskort</strong>.</p>
<p>Rådet från ID06 är att inventera de anställdas ID-handlingar i god tid. Även omregistreringar och förnyelser kommer att omfattas, så säkerställ att varje medarbetare – både ny och befintlig – har en giltig handling innan ni behöver beställa eller förnya kort.</p>

<h2>Beställa ID06-kort steg för steg</h2>
<ol>
<li><strong>Anslut företaget till ID06.</strong> Administratören tecknar anslutning via en kortutgivare. Anslutningen förutsätter F-skatt, arbetsgivarregistrering och att bolaget inte är på obestånd.</li>
<li><strong>Skapa kortbeställningen.</strong> Företagets administratör lägger en beställning för den anställde hos kortutgivaren.</li>
<li><strong>Validera identiteten.</strong> Den anställde skannar sitt pass eller nationella ID-kort i ID06-appen eller hos en skanningspartner. Tredjelandsmedborgare skannar även uppehållstillståndskortet.</li>
<li><strong>Godkänn beställningen.</strong> Innehavaren godkänner ordern i samband med skanningen – från 28 januari 2026 med pass/nationellt ID, inte BankID.</li>
<li><strong>Kortet tillverkas och skickas.</strong> Kortet produceras och skickas till angiven adress (inrikes frakt ingår).</li>
<li><strong>Aktivera kortet.</strong> När kortet kommit aktiveras det med tillhörande PIN-kod, varefter det kan användas för in- och utcheckning i personalliggaren.</li>
</ol>

<h2>Kompetensdatabasen och Safe Construction Training</h2>
<p>Ett giltigt kort är sällan tillräckligt – de flesta svenska generalentreprenörer kräver att UE:ns personal har genomfört <strong>Safe Construction Training</strong>, Byggföretagens obligatoriska och kostnadsfria arbetsmiljöutbildning som krävts på medlemmarnas arbetsplatser sedan 1 juli 2021. Ett godkänt resultat är giltigt i 5 år och registreras gratis i <strong>ID06 Kompetensdatabas</strong>.</p>
<p>Sedan 30 september 2025 hanteras kompetensdatabasen utan individens samtycke – den rättsliga grunden är numera en intresseavvägning, och utbildningsleverantörer registrerar intyg utan samtyckeshantering. Undantag gäller för utbildningar kopplade till fackligt uppdrag eller skyddsombud, där individens godkännande fortfarande krävs för att intyget ska visas för arbetsgivare. Utöver Safe Construction Training kan uppdraget kräva andra behörigheter som Heta arbeten eller ställningsbyggnad – kontrollera GE:ns leverantörskrav i förväg.</p>

<h2>Kostnader och giltighetstid</h2>
<ul>
<li><strong>Kortpris:</strong> 280 kr/st vid köp, vilket inkluderar anslutningsavgiften och inrikes frakt. Från år två tillkommer en årlig kortavgift på 80 kr/st så länge kortet är aktivt.</li>
<li><strong>Anslutningsavgift (företag):</strong> trappas efter antal kort per år – 500 kr (0–10 kort), 1 000 kr (11–50), 2 000 kr (51–100), 3 000 kr (101–250), 5 000 kr (251–1 000) och 10 000 kr (fler än 1 000).</li>
<li><strong>Giltighetstid:</strong> max 5 år, anpassad till personens rätt att arbeta i Sverige. Svenska medborgare får som regel upp till 5 år, EU/EES-medborgare som betalar skatt i hemlandet ofta 6 månader, och tredjelandsmedborgare typiskt 3 månader kopplat till uppehålls- och arbetstillstånd.</li>
</ul>

<h2>Vanliga misstag att undvika</h2>
<ul>
<li>Att vänta med att kontrollera pass/nationellt ID – utan giltig handling går beställningen inte igenom efter 28 januari 2026.</li>
<li>Att tro att BankID räcker för att godkänna ordern. Det gör det inte längre.</li>
<li>Att beställa kort till personal du inte betalar lön och arbetsgivaravgifter för.</li>
<li>Att missa Safe Construction Training – kortet i sig öppnar inte grinden om utbildningen saknas i kompetensdatabasen.</li>
<li>Att inte planera för korta giltighetstider för utländsk arbetskraft, vilket kan stoppa personal mitt i ett projekt.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp beställer inte ID06-kort åt dig – det gör du via en kortutgivare. Men när korten väl finns på plats hjälper ByggExp dig att hålla ordning på det som händer runt kortet: tidrapportering, närvaro och underlag som stämmer överens med personalliggaren. Med strukturerad tidrapportering blir det enklare att stämma av att alla som varit på plats också är registrerade, vilket minskar risken för kontrollavgifter och missförstånd med generalentreprenören. Du samlar timmar, projekt och personal på ett ställe och får ett rent underlag för fakturering och uppföljning.</p>

<h2>Vanliga frågor</h2>
<h3>Vad kostar ett ID06-kort?</h3>
<p>Ett kort kostar 280 kr/st vid köp, inklusive anslutningsavgift och inrikes frakt. Från och med år två tillkommer en årlig avgift på 80 kr/st så länge kortet är aktivt. Företaget betalar dessutom en anslutningsavgift som trappas efter antal beställda kort per år, från 500 kr till 10 000 kr.</p>
<h3>Räcker BankID för att beställa ID06 2026?</h3>
<p>Nej. Från 28 januari 2026 måste innehavaren identifiera sig och godkänna beställningen med giltigt pass eller nationellt ID-kort som godtas som resehandling inom EU. BankID, körkort och personbevis accepteras inte längre för att godkänna ordern.</p>
<h3>Hur lång giltighetstid har kortet?</h3>
<p>Högst 5 år, men tiden anpassas efter personens rätt att arbeta i Sverige. Svenska medborgare får ofta upp till 5 år, EU/EES-medborgare som betalar skatt i hemlandet typiskt 6 månader och tredjelandsmedborgare omkring 3 månader, kopplat till uppehålls- och arbetstillstånd.</p>
<h3>Måste jag ha Safe Construction Training?</h3>
<p>De flesta generalentreprenörer kräver det. Utbildningen är gratis, giltig i 5 år och registreras kostnadsfritt i ID06 Kompetensdatabas. Kontrollera alltid GE:ns leverantörskrav i förväg, eftersom även andra behörigheter kan krävas.</p>

<h2>Kom igång</h2>
<p>Beställ ID06-kort via din kortutgivare, säkerställ att alla har giltigt pass eller nationellt ID och att Safe Construction Training finns registrerad i kompetensdatabasen. När korten är på plats håller du enkelt ordning på tid och närvaro med vår <a href="/sv/verktyg/tidrapport-mall">gratis tidrapport-mall</a>. Vill du se hur ByggExp knyter ihop tidrapportering med personalliggaren inför uppdraget? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/id06">ID06 – så fungerar systemet</a>, <a href="/sv/blog/personalliggare">Personalliggare i byggbranschen</a> och <a href="/sv/blog/kontrollavgift-personalliggare">Kontrollavgift för personalliggare</a>.</p>
`;

const A_ID06_BESTALLA_KORT_STEG_FOR_STEG: BlogPost = {
  _id: "code-"+"id06-bestalla-kort-steg-for-steg",
  title: "Så beställer du ID06-kort steg för steg inför ditt första uppdrag hos en generalentreprenör", slug: "id06-bestalla-kort-steg-for-steg", locale: "sv",
  excerpt: "Komplett guide för hantverkare och byggföretag: från företagets förutsättningar och det nya identifieringskravet 2026 till validering, kostnader och Safe Construction Training.", tag: "Personalliggare",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ID06_BESTALLA_KORT_STEG_FOR_STEG_HTML,
  seoTitle: "ID06 beställa kort steg för steg | ByggExp", seoDescription: "Så beställer du ID06-kort steg för steg 2026: krav på företaget, nya pass-kravet från 28 januari, Safe Construction Training och kompetensdatabasen.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T08:24:00.000Z", createdAt: "2026-08-19T08:24:00.000Z", updatedAt: "2026-08-19T08:24:00.000Z",
};

const A_STARTBESKED_BYGGLOV_PROCESS_2026_HTML = `
<p>Att ha bygglovet i handen är inte samma sak som att få börja bygga. Den missuppfattningen är dyr: startar du byggnadsarbetet utan ett separat <strong>startbesked</strong> väntar en byggsanktionsavgift som kan landa på miljonbelopp. Bygglov och startbesked är två helt olika beslut – och som byggföretag, entreprenör eller byggherre behöver du hålla ordningen på plats innan spaden går i marken. Här går vi igenom den lagstadgade processen enligt plan- och bygglagen (PBL), steg för steg, med de regler som gäller under 2026.</p>

<p>En fastställd kontrollplan är en av grundstenarna för att över huvud taget få startbesked – börja med att strukturera din i vår <a href="/sv/verktyg/kontrollplan-mall">gratis kontrollplansmall -></a>.</p>

<h2>Den lagstadgade ordningen steg för steg</h2>
<p>Byggprocessen enligt PBL följer en fast ordning som byggnadsnämnden håller i. Den ser ut så här:</p>
<ol>
<li>Ansökan om bygglov</li>
<li>Beslut om bygglov</li>
<li>Tekniskt samråd (vid behov)</li>
<li>Startbesked</li>
<li>Byggstart</li>
<li>Arbetsplatsbesök</li>
<li>Slutsamråd</li>
<li>Slutbesked</li>
</ol>
<p>Notera att <strong>bygglov (steg 2)</strong> och <strong>startbesked (steg 4)</strong> är två separata beslut med olika syften. Det ena avgör om du får bygga något över huvud taget; det andra avgör om du får börja bygga just nu. Att förväxla dem är det vanligaste – och kostsammaste – felet i hela processen.</p>

<h2>Bygglov ≠ startbesked – den dyra missuppfattningen</h2>
<p>Bygglovet prövar <em>lokaliseringen och utformningen</em>: passar byggnaden på tomten, stämmer den med detaljplanen, är den lämplig för sitt ändamål? Startbeskedet prövar i stället de <em>tekniska egenskapskraven</em> – konstruktion, brand, energi, fukt – och ger själva klartecknet att sätta i gång.</p>
<p>Lagen är uttrycklig: enligt 10 kap. 3 § PBL får en åtgärd som kräver bygglov, rivningslov, marklov eller anmälan inte påbörjas innan byggnadsnämnden har gett startbesked. Ett bygglov är alltså inte grönt ljus. Först när startbeskedet ligger på bordet – och lovet har börjat gälla, mer om det nedan – får arbetet börja.</p>

<h2>Tekniskt samråd – vad händer på mötet</h2>
<p>Om ärendet kräver en kontrollansvarig (KA) ska byggnadsnämnden utan dröjsmål kalla till tekniskt samråd, om det inte är uppenbart obehövligt eller byggherren själv begär det. Detta regleras i 10 kap. 14 § PBL. Kravet på KA gäller i ärenden som kräver lov eller anmälan och där tekniskt samråd ska hållas (10 kap. 9 §).</p>
<p>På samrådet går nämnden, byggherren och den kontrollansvarige tillsammans igenom bland annat:</p>
<ul>
<li>kontrollplanen och hur kontrollerna ska genomföras</li>
<li>den kontrollansvariges roll och uppgifter</li>
<li>arbetets planering och organisation</li>
<li>behovet av eventuell riskbedömning och tekniskt underlag</li>
</ul>
<p>Behövs inget tekniskt samråd ska nämnden i stället ge startbesked i samband med lovbeslutet eller snarast därefter. Osäker på om ditt projekt kräver en KA? Läs vår genomgång av <a href="/sv/blog/kontrollansvarig-nar-behovs">när kontrollansvarig behövs</a>.</p>

<h2>Vad krävs för att få startbesked</h2>
<p>För att få startbesked måste byggherren visa att åtgärden kan antas uppfylla kraven i PBL med föreskrifter (10 kap. 23 §). I praktiken handlar det om:</p>
<ul>
<li>en fastställd kontrollplan</li>
<li>utsedd kontrollansvarig där sådan krävs</li>
<li>tekniskt underlag – konstruktionshandlingar, brandskydd, energiberäkning där det är relevant</li>
</ul>
<p>Innan startbeskedet får du göra vissa förberedelser: sätta upp byggstängsel, ansöka om schakttillstånd, göra enklare markmätning. Men själva byggnadsarbetet får inte påbörjas. Gränsen går vid det som faktiskt förändrar byggnaden eller marken enligt lovet. En tydlig egenkontroll underlättar dokumentationen – strukturera den i vår <a href="/sv/verktyg/egenkontroll-mall">egenkontrollsmall</a>.</p>

<h2>När lovet börjar gälla och den nya kungörelsen från 1 december 2025</h2>
<p>Här kommer den stora nyheten för 2026. Genom Lag 2025:974, som trädde i kraft den 1 december 2025, gäller ett nytt regelverk för bygglov. För ärenden som kommit in från och med den 1 december 2025 gäller ett beslut om bygglov, rivningslov eller marklov <strong>omedelbart</strong>, även om det inte har fått laga kraft (9 kap. 114 § PBL). Den tidigare regeln – att bygget normalt inte fick påbörjas förrän fyra veckor efter att lovbeslutet kungjorts – är alltså borttagen för nya ärenden.</p>
<p>Det finns ett viktigt undantag: byggnadsnämnden ska bestämma att lovet gäller först när det har fått laga kraft om det finns risk för att åtgärden medför skador som inte kan återställas på natur- eller kulturvärden, eller på totalförsvarets intressen. I de fallen måste du vänta på laga kraft innan bygget får starta – även om du har startbesked. För äldre ärenden, inkomna före den 1 december 2025, gäller fortfarande de tidigare bestämmelserna.</p>
<p>Samtidigt har kravet att kungöra lovbeslut i Post- och Inrikes Tidningar (PoIT) tagits bort. För ärenden som kommit in från 1 december 2025 kungörs grannehörande och lovbeslut i stället på kommunens digitala anslagstavla. Det är där lovet tillkännages, vilket styr när överklagandetiden löper och när beslutet kan få laga kraft. Äldre ärenden kungörs fortfarande via PoIT. Praktisk konsekvens: håll koll på kommunens anslagstavla, inte PoIT.</p>

<h2>Vad det kostar att börja för tidigt – byggsanktionsavgift 2026</h2>
<p>Startar du byggnadsarbete utan startbesked tar nämnden ut en byggsanktionsavgift. Avgifterna beräknas som andelar av prisbasbeloppet utifrån åtgärdens art och area (formeln finns i plan- och byggförordningen, PBF 9 kap.) och kan maximalt uppgå till 50 prisbasbelopp.</p>
<p>Prisbasbeloppet för 2026 är fastställt till <strong>59 200 kr</strong> (en höjning med 0,7 % jämfört med 2025). Taket blir därmed 50 × 59 200 = <strong>2 960 000 kr</strong>. Avgiften tas ut även om felet var oavsiktligt, och nämnden har begränsat utrymme att sätta ned den. Att "bara gräva lite" innan pappren är klara kan alltså bli mycket dyrt.</p>

<h2>Tidslinje och avgiftsreduktion – vad du kan kräva av kommunen</h2>
<p>Processen är inte enkelriktad – nämnden har tidsfrister att hålla. Byggnadsnämnden ska handlägga bygglov skyndsamt och besluta inom tio veckor från komplett ansökan (9 kap. 99 § PBL), med möjlighet till förlängning en gång med högst tio veckor (9 kap. 99 § andra stycket).</p>
<p>Överskrids fristen reduceras handläggningsavgiften med en femtedel per påbörjad vecka. Avgiftsreduktionen finns i 12 kap. 8 a § PBL; genom Lag 2025:974 uppdaterades bestämmelsens hänvisning så att den nu utgår från tidsfristen i 9 kap. 99 §. Tänk också på giltighetstiden: bygglovet upphör att gälla om åtgärden inte påbörjats inom två år och avslutats inom fem år från det att beslutet vann laga kraft (9 kap. 115 §). Ett startbesked för en anmälningspliktig åtgärd gäller i två år.</p>

<h2>Vanliga misstag som stoppar bygget</h2>
<ul>
<li>Att tolka bygglovet som klartecken och börja bygga innan startbesked getts.</li>
<li>Att börja bygga trots att nämnden bestämt att lovet gäller först vid laga kraft (undantaget för natur-, kultur- eller totalförsvarsvärden).</li>
<li>Att leta kungörelse i PoIT för nya ärenden i stället för på kommunens digitala anslagstavla.</li>
<li>Att komma till tekniskt samråd utan fastställd kontrollplan – vilket försenar startbeskedet.</li>
<li>Att låta lovet förfalla genom att inte påbörja inom två år.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte byggnadsnämnden, men vi hjälper dig att komma dit med rätt underlag. I plattformen bygger du kontrollplaner och egenkontroller efter mall, samlar dokumentationen per projekt och håller den tillgänglig för den kontrollansvarige inför tekniskt samråd. Med allt strukturerat på ett ställe minskar risken att startbeskedet fastnar på en ofullständig kontrollplan – och du har ordning på handlingarna om nämnden gör arbetsplatsbesök. All dokumentation håller du samlad enligt kravet att spara underlag i sju år.</p>

<h2>Vanliga frågor</h2>
<h3>Får jag börja bygga så fort jag fått bygglov?</h3>
<p>Nej. Bygglov och startbesked är två separata beslut. Enligt 10 kap. 3 § PBL får du inte påbörja en lov- eller anmälningspliktig åtgärd innan byggnadsnämnden gett startbesked. Bygglovet prövar lokalisering och utformning; startbeskedet ger klartecknet att börja bygga.</p>
<h3>Måste jag alltid ha ett tekniskt samråd innan startbesked?</h3>
<p>Nej. Tekniskt samråd hålls om ärendet kräver kontrollansvarig, om det inte är uppenbart obehövligt eller om byggherren begär det (10 kap. 14 § PBL). Behövs inget samråd ska nämnden ge startbesked i samband med lovbeslutet eller snarast därefter.</p>
<h3>Vad händer om jag börjar bygga utan startbesked?</h3>
<p>Då tas en byggsanktionsavgift ut. Den beräknas som andelar av prisbasbeloppet utifrån åtgärd och area och kan för 2026 maximalt uppgå till 50 prisbasbelopp, det vill säga 2 960 000 kr. Avgiften tas ut även om överträdelsen var oavsiktlig.</p>
<h3>Räcker startbeskedet, eller måste jag vänta ytterligare?</h3>
<p>För ärenden inkomna från 1 december 2025 gäller lovet omedelbart, även utan laga kraft (9 kap. 114 § PBL) – den tidigare fyraveckorsfristen efter kungörelse är borttagen. Har nämnden däremot bedömt att åtgärden kan medföra skador som inte kan återställas på natur-, kultur- eller totalförsvarsvärden, ska den bestämma att lovet gäller först vid laga kraft, och då måste du vänta. Kungörelsen sker numera på kommunens digitala anslagstavla.</p>

<h2>Kom igång</h2>
<p>Lägg grunden för ett smidigt startbesked genom att ha kontrollplanen klar i god tid inför det tekniska samrådet. Kom i gång direkt med vår <a href="/sv/verktyg/kontrollplan-mall">kontrollplansmall</a>, eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller dokumentationen samlad genom hela byggprocessen.</p>

<p>Relaterat: <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/kontrollplan-mall-bygglov">Kontrollplan och mall för bygglov</a>, <a href="/sv/blog/kontrollansvarig-nar-behovs">Kontrollansvarig – när behövs det?</a></p>
`;

const A_STARTBESKED_BYGGLOV_PROCESS_2026: BlogPost = {
  _id: "code-"+"startbesked-bygglov-process-2026",
  title: "Startbesked och bygglov: PBL-processen steg för steg 2026", slug: "startbesked-bygglov-process-2026", locale: "sv",
  excerpt: "Bygglov och startbesked är två olika beslut. Här är hela PBL-processen 2026 – med de nya reglerna om när ett lov börjar gälla efter Lag 2025:974.", tag: "Bygglov",
  coverImageUrl: "/landing/verktyg/egenkontroll-preview.webp", contentHtml: A_STARTBESKED_BYGGLOV_PROCESS_2026_HTML,
  seoTitle: "Startbesked & bygglov 2026 | ByggExp", seoDescription: "Bygglov är inte startbesked. Så fungerar PBL-processen 2026: startbesked, tekniskt samråd, nya verkställbarhetsregler (Lag 2025:974) och byggsanktionsavgifter.",
  seoImageUrl: `${SITE_URL}/landing/verktyg/egenkontroll-preview.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T09:40:00.000Z", createdAt: "2026-08-19T09:40:00.000Z", updatedAt: "2026-08-19T09:40:00.000Z",
};

const A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG_HTML = `
<p>Bristen på yrkesarbetare gör det frestande att ta in utländsk arbetskraft eller en utländsk underentreprenör när kalendern är full. Problemet är att utstationering hör till det hårdast reglerade i branschen, och missar kostar snabbt tiotusentals kronor i sanktionsavgifter – utöver risken att åka ur en offentlig upphandling. Den här guiden är en konkret B2B-checklista för att göra det lagligt under 2026. Redan i inledningen är det viktigt att skilja på tre olika vägar: (a) utstationering från ett EU/EES-företag som skickar sin egen personal hit, (b) att anställa en enskild tredjelandsmedborgare på arbetstillstånd, och (c) att köpa en tjänst av en utländsk underentreprenör. Reglerna skiljer sig mellan spåren, och att blanda ihop dem är själva grundfelet.</p>

<p>Ett bra sätt att hålla ordning på arbetsmiljö- och kontrolldokumentationen är att strukturera den från start med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontroll-mall -&gt;</a>, så att anmälningsbevis, A1-intyg och ID06-loggning samlas på ett ställe.</p>

<h2>Vad räknas som utstationering?</h2>
<p>Utstationering innebär att en utländsk arbetsgivare tillfälligt skickar sina egna anställda för att arbeta i Sverige, medan anställningen fortsatt ligger kvar i hemlandet. Det är alltså inte samma sak som att du själv anställer en person, och inte heller samma sak som att du köper en färdig tjänst av ett utländskt bolag. För arbetstagare från EU/EES gäller fri rörlighet – de behöver inget arbetstillstånd. För tredjelandsmedborgare krävs däremot arbetstillstånd från Migrationsverket, oavsett om de kommer via utstationering eller anställs direkt. Att avgöra vilken kategori arbetet faller in under är avgörande, eftersom det styr vilka anmälningar, intyg och skatteregler som blir aktuella. Fastnar du i fel spår riskerar du både fel dokumentation och fel skattehantering.</p>

<h2>Utstationeringsanmälan till Arbetsmiljöverket</h2>
<p>Kärnplikten ligger hos den utländska arbetsgivaren. Företaget måste registrera utstationeringen och en kontaktperson i Sverige i Arbetsmiljöverkets e-tjänst "Anmäl utstationering" senast den dag arbetet påbörjas i Sverige. Missas det är sanktionsavgiften 20 000 kr, plus upp till ytterligare 20 000 kr om obligatoriska uppgifter saknas. Anmälan ska uppdateras vid tolv månader, och arbetsgivaren kan förlänga tröskeln till 18 månader genom att anmäla en motivering till Arbetsmiljöverket före tolvmånadersgränsen.</p>
<p>Men glöm inte din egen spegelplikt som tjänstemottagare. Du ska ha fått dokumentation på att anmälan gjorts senast den dag arbetet börjar. Får du inte det måste du själv anmäla till Arbetsmiljöverket inom tre dagar från arbetsstart – annars riskerar du en egen sanktionsavgift på 20 000 kr. Undantaget gäller bara privatpersoner som anlitar för eget bruk, inte företag. Praktiskt tips: skriv in att anmälningsbeviset ska lämnas som villkor för första betalningen i kontraktet, så tvingar du fram dokumentationen i rätt tid.</p>

<h2>A1-intyg och socialförsäkring</h2>
<p>A1-intyget avgör vilket lands sociala avgifter som ska betalas. Ett giltigt A1 visar att den utstationerade arbetstagaren fortsatt omfattas av – och betalar avgifter i – hemlandets socialförsäkringssystem, så att avgifterna inte ska betalas två gånger. Intyget utfärdas av hemlandets socialförsäkringsmyndighet, motsvarigheten till Försäkringskassan. Saknas ett giltigt A1 kan svenska arbetsgivaravgifter komma att krävas. Samla därför alltid in ett A1 för varje utstationerad arbetstagare innan arbetet startar, och kontrollera att intygets giltighetstid täcker hela utstationeringsperioden. Ett intyg som löper ut mitt i projektet är en risk du inte vill upptäcka i efterhand.</p>

<h2>Skatt: ekonomisk arbetsgivare, F-skatt och omvänd byggmoms</h2>
<p>Här finns tre skattefällor som lätt förbises. Den första är reglerna om ekonomisk arbetsgivare, som gäller sedan 1 januari 2021. Vid uthyrning av personal gäller inte längre 183-dagarsregeln: en utländsk arbetstagare som hyrs ut till en svensk uppdragsgivare som leder arbetet beskattas i Sverige från dag ett. Det finns ett smalt undantag för arbete på högst 15 sammanhängande dagar och högst 45 dagar totalt per kalenderår – räkna med beskattningen i din kalkyl.</p>
<p>Den andra fällan är F-skatt. Kontrollera att en utländsk underentreprenör har svensk F-skatt och är momsregistrerad där det krävs. Ett utländskt bolag utan F-skatt kan göra dig som betalare skyldig att innehålla preliminärskatt på fakturan. Den tredje är omvänd byggmoms: mellan byggföretag är det du som köpare som redovisar och betalar momsen. Fakturan ska ställas ut utan moms, ange ditt momsnummer och en text i stil med "Omvänd skattskyldighet för byggtjänster gäller". Regeln förutsätter att du som köpare är momsregistrerad.</p>

<h2>Arbetsmiljöansvar och personalliggare på bygget</h2>
<p>Oavsett vem som är formell arbetsgivare behåller det svenska arbetsstället – via byggarbetsmiljösamordnaren och arbetsgivaren på plats – arbetsmiljöansvaret för alla som arbetar på bygget. Det ställer krav på att skyddsinstruktioner faktiskt förstås, vilket i praktiken betyder att språkfrågan måste hanteras aktivt när personalen kommer utifrån.</p>
<p>Elektronisk personalliggare via ID06 är obligatorisk på byggarbetsplatser, och varje person ska loggas – inklusive utländska underentreprenörers anställda. Skatteverkets kontrollavgift är 12 500 kr plus 2 500 kr per person som är på plats men inte registrerad, och 25 000 kr om byggherren inte har anmält byggstart och plats. Från och med första kvartalet 2026 skärps dessutom ID06: den som godkänner en kortbeställning måste legitimera sig med pass eller ett EU-godkänt nationellt id-kort. Se till att era rutiner klarar det innan korten ska förnyas.</p>

<h2>Entreprenörsansvar – din risk för underleverantörens löner</h2>
<p>Sedan 1 januari 2019 finns ett entreprenörsansvar för lönefordringar i bygg- och anläggningsbranschen. Det innebär att du kan bli ansvarig för en underleverantörs obetalda löner. Arbetstagarens direkta uppdragsgivare är ansvarig i första hand; betalar den inte inom 14 helgfria vardagar eller inte går att nå, kan huvudentreprenören hållas ansvarig. Arbetstagaren måste anmäla sitt krav inom sex månader, och ansvaret omfattar även utstationerade arbetstagare. Skydda dig med skriftliga garantier om lön på kollektivavtalsnivå, innehållandeklausuler och löpande dokumentation av att UE faktiskt betalar sina anställda.</p>

<h2>Tredjelandsmedborgare: arbetstillstånd 2026</h2>
<p>Är arbetstagaren medborgare utanför EU/EES krävs arbetstillstånd från Migrationsverket. Från 1 juni 2026 måste lönen vara minst 90 procent av svensk medianlön (75 procent för vissa undantagna grupper), och lönen ska dessutom motsvara kollektivavtal eller praxis i branschen. En sexmånaders övergång fram till 1 december 2026 håller kvar den tidigare nivån på 80 procent av medianlönen för förlängningar som beviljas enligt gamla regler. Att anlita personal utan giltigt tillstånd kan leda till sanktioner mot arbetsgivaren – kontrollera tillståndet innan arbetet börjar.</p>

<h2>Checklista: så gör du lagligt</h2>
<ul>
<li>Verifiera att utstationeringsanmälan är gjord – begär in beviset.</li>
<li>Samla in giltigt A1-intyg för varje arbetstagare, med rätt giltighetstid.</li>
<li>Kontrollera UE:s F-skatt och momsregistrering.</li>
<li>Logga alla på bygget i ID06 – även UE:s personal.</li>
<li>Säkra entreprenörsansvaret med löne- och innehållandeklausuler.</li>
<li>Bekräfta arbetstillstånd om arbetstagaren är tredjelandsmedborgare.</li>
<li>Kontrollera att lönen ligger på kollektivavtalsnivå.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en anmälan till Arbetsmiljöverket eller ett A1-intyg, men vi hjälper dig att hålla ordning på dokumentationen som gör kontrollerna smärtfria. Samla anmälningsbevis, A1-intyg, F-skattekontroll och kollektivavtalsvillkor per projekt och underentreprenör, så att allt går att ta fram vid en granskning. Med strukturerad egenkontroll och tydliga rutiner för vilka handlingar som ska finnas innan arbetet startar minskar du risken för sanktionsavgifter och för att fastna på entreprenörsansvaret. Verktygen ger dig spårbarhet – inte juridisk rådgivning – men det är ofta just spårbarheten som saknas när det brister.</p>

<h2>Vanliga frågor</h2>
<h3>Vem ansvarar för utstationeringsanmälan?</h3>
<p>Den utländska arbetsgivaren gör själva anmälan senast den dag arbetet börjar. Du som svensk tjänstemottagare ska ta emot dokumentation på att den gjorts, och om du inte får det måste du själv anmäla till Arbetsmiljöverket inom tre dagar för att undvika en egen sanktionsavgift på 20 000 kr.</p>
<h3>Måste alla utstationerade ha A1-intyg?</h3>
<p>Ja. A1-intyget visar att arbetstagaren omfattas av hemlandets socialförsäkring, så att sociala avgifter inte betalas dubbelt. Utan ett giltigt A1 kan svenska arbetsgivaravgifter krävas, så samla in intyget innan arbetet startar och kontrollera att giltighetstiden täcker hela perioden.</p>
<h3>Kan jag bli ansvarig för en utländsk UE:s obetalda löner?</h3>
<p>Ja. Entreprenörsansvaret för lönefordringar omfattar även utstationerade arbetstagare. Uppdragsgivaren är ansvarig först, men betalar den inte inom 14 helgfria vardagar kan huvudentreprenören hållas ansvarig. Arbetstagaren har sex månader på sig att anmäla kravet.</p>
<h3>Gäller 183-dagarsregeln för inhyrd utländsk personal?</h3>
<p>Nej. Sedan reglerna om ekonomisk arbetsgivare infördes 2021 beskattas uthyrd personal i Sverige från dag ett när den svenska uppdragsgivaren leder arbetet. Undantaget gäller bara arbete på högst 15 sammanhängande dagar och högst 45 dagar totalt per kalenderår.</p>

<h2>Kom igång</h2>
<p>Att göra rätt skyddar dig mot sanktionsavgifter, löneansvar och att svartlistas i offentlig upphandling. Börja med att strukturera dokumentationen i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a>, och vill du se hur ByggExp samlar projekt, UE-handlingar och kontroller på ett ställe kan du <a href="/sv/contact">boka en demo här</a>. Reglerna ändras – stäm alltid av aktuella krav med Arbetsmiljöverket, Skatteverket och Migrationsverket innan du sätter igång.</p>

<p>Relaterat: <a href="/sv/blog/inhyrd-personal-regler">Regler för inhyrd personal</a>, <a href="/sv/blog/anlita-underentreprenor">Anlita underentreprenör – så gör du rätt</a>, <a href="/sv/blog/entreprenorsansvar-lon">Entreprenörsansvar för löner</a>.</p>
`;

const A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG: BlogPost = {
  _id: "code-"+"utstationering-utlandsk-arbetskraft-bygg",
  title: "Utstationering och utländsk arbetskraft i bygg – så anlitar du lagligt 2026", slug: "utstationering-utlandsk-arbetskraft-bygg", locale: "sv",
  excerpt: "En steg-för-steg-guide för byggföretag som anlitar utstationerad eller utländsk arbetskraft lagligt – från anmälan och A1-intyg till skatt, personalliggare och entreprenörsansvar.", tag: "Regelverk",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG_HTML,
  seoTitle: "Utstationering utländsk arbetskraft | ByggExp", seoDescription: "Anlita utländsk arbetskraft eller UE lagligt: utstationeringsanmälan, A1-intyg, F-skatt, personalliggare och entreprenörsansvar. B2B-checklista för 2026.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T11:18:00.000Z", createdAt: "2026-08-19T11:18:00.000Z", updatedAt: "2026-08-19T11:18:00.000Z",
};

const A_KLIMATDEKLARATION_BYGGNAD_KRAV_HTML = `
<p>Sedan 2022 måste de flesta nya byggnader i Sverige klimatdeklareras innan projektet kan avslutas. För byggföretag är detta inte en frivillig hållbarhetsövning utan ett hårt myndighetskrav som är kopplat direkt till slutbesked. Och kraven skärps: fram mot 2028 och 2030 breddas deklarationen till hela livscykeln och binds till gränsvärden som avgör vad du över huvud taget får bygga. Här går vi igenom vad som gäller idag och hur du förbereder företaget för det som kommer.</p>

<p>Bygg in klimatdeklarationen som en rutin i varje projekt redan från bygglov. Samla dina mallar och checklistor bland <a href="/sv/verktyg">våra gratis verktyg för byggföretag →</a> så att inget faller mellan stolarna när slutbeskedet ska ut.</p>

<h2>Vad är en klimatdeklaration och varför den finns</h2>
<p>En klimatdeklaration redovisar en byggnads klimatpåverkan från byggskedet. Kravet är obligatoriskt sedan den 1 januari 2022 enligt Lag (2021:787) om klimatdeklaration för byggnader och gäller byggnader där bygglovsansökan lämnades in till byggnadsnämnden den 1 januari 2022 eller senare. Syftet är att synliggöra byggandets utsläpp och skapa ett underlag för att styra branschen mot lägre klimatpåverkan.</p>
<p>Poängen att ta med sig är att detta är ett compliance-krav, inte en marknadsföringsfråga. Klimatdeklarationen lämnas till Boverket, som också är tillsynsmyndighet, och den knyter ihop bygglovet med slutbeskedet.</p>

<h2>Vem ansvarar? Byggherrens ansvar i praktiken</h2>
<p>Det är byggherren som enligt lag ansvarar för att ta fram och lämna in klimatdeklarationen. Byggherren registrerar och skickar in deklarationen till Boverket, och det är också Boverket som utövar tillsyn.</p>
<p>I praktiken utför ofta en entreprenör eller konsult själva LCA-beräkningen, men det juridiska ansvaret stannar hos byggherren. Är du totalentreprenör och samtidigt byggherre bär du hela ansvaret. Är du underentreprenör bör du ändå säkra att materialdata och produktinformation levereras i tid, eftersom byggherren är beroende av dina underlag för att kunna deklarera korrekt.</p>

<h2>Vilka byggnader omfattas – och undantagen</h2>
<p>Huvudregeln är enkel: omfattas gör nya byggnader där bygglov söktes den 1 januari 2022 eller senare. Men ett antal byggnadstyper är undantagna. Kontrollera alltid mot Boverkets aktuella lista, men i korthet slipper följande krav idag:</p>
<ul>
<li>Byggnader med högst 100 m² bruttoarea (BTA).</li>
<li>Tillfälliga byggnader som ska användas i högst 2 år.</li>
<li>Byggnader som inte kräver bygglov.</li>
<li>Byggnader för industri- eller verkstadsändamål.</li>
<li>Ekonomibyggnader för jord- och skogsbruk.</li>
<li>Byggnader för försvar och nationell säkerhet.</li>
<li>Privatpersoner som bygger utanför näringsverksamhet.</li>
</ul>
<p>För dig som bygger åt privatperson är detta viktigt: bygger denne utanför näringsverksamhet finns inget krav, men i de allra flesta yrkesmässiga nybyggnadsprojekt gäller kravet fullt ut.</p>

<h2>Vad ska redovisas idag</h2>
<p>Dagens klimatdeklaration omfattar enbart byggskedet, det vill säga modulerna A1–A5 enligt EN 15978. A1–A3 är produktskedet (råvaror, transport och tillverkning), A4 är transport till byggarbetsplatsen och A5 är själva bygg- och installationsprocessen.</p>
<p>De byggdelar som ska redovisas är bärande konstruktion, klimatskärm och innerväggar. Tillsammans fångar de ungefär 80–90 procent av klimatpåverkan i A1–A3, vilket är skälet till att just dessa delar valts ut. Byggnadens driftenergi under användningstiden ingår däremot inte i dagens krav.</p>
<p>Som dataunderlag används miljövarudeklarationer (EPD) för produkterna samt Boverkets klimatdatabas med generiska värden när specifik produktdata saknas. Ju mer specifik EPD-data du samlar in tidigt, desto mer rättvisande blir resultatet.</p>

<h2>Kopplingen till slutbesked och påföljder</h2>
<p>Här ligger den skarpa spärren. Byggnadsnämnden får inte utfärda slutbesked förrän byggherren har visat att en klimatdeklaration har lämnats in, eller gjort sannolikt att någon skyldighet att deklarera inte finns. Det är den primära kontrollmekanismen.</p>
<p>Någon direkt byggsanktionsavgift för en utebliven eller försenad klimatdeklaration finns däremot inte i dagens regelverk – den sanktionsavgift som klimatdeklarationslagen innehåller träffar enbart oriktiga uppgifter i en redan inlämnad deklaration. En byggsanktionsavgift enligt plan- och bygglagen kan dock bli aktuell indirekt, om byggnaden tas i bruk utan slutbesked. Den praktiska risken är minst lika allvarlig: projektet kan helt enkelt inte avslutas. Ett saknat eller försenat underlag betyder utebliven slutbesiktning, försenad inflyttning och bundet kapital. Behandla klimatdeklarationen som en leverabel med samma dignitet som kontrollplanen, inte som en efterhandsformalitet.</p>

<h2>Det stora skiftet: EPBD, utökad deklaration och gränsvärden 2028–2030</h2>
<p>Nu kommer förändringen. En EU-delegerad förordning som ändrar bilaga III i det omarbetade energiprestandadirektivet (EPBD) antogs av EU-kommissionen den 16 december 2025 och väntas träda i kraft under 2026 efter granskningsperioden i rådet och Europaparlamentet. Den anger hur en byggnads livscykel-GWP ska beräknas.</p>
<p>Enligt det omarbetade EPBD ska livscykel-GWP beräknas och redovisas i byggnadens energideklaration från den 1 januari 2028 för alla nya byggnader större än 1 000 m², och från den 1 januari 2030 för samtliga nya byggnader. Efter ett regeringsuppdrag från december 2024 levererade Boverket sina lagförslag i Rapport 2026:16 till deadline den 1 juni 2026. Förslaget innebär en utökad klimatdeklaration i kraft från januari 2028 och bindande gränsvärden från januari 2030.</p>
<p>Regelverket föreslås flyttas in i plan- och bygglagen. Den nuvarande fristående Lag (2021:787) om klimatdeklaration föreslås upphävas i slutet av mars 2027, då de nya PBL-baserade reglerna är tänkta att träda i kraft den 1 april 2027, och ersättas av det EPBD-baserade systemet. Den utökade deklarationen breddar dessutom omfattningen till hela livscykeln, med både användnings- och slutskede samt fler byggdelar som installationer och tekniska system, jämfört med dagens byggskede A1–A5.</p>

<h2>Gränsvärdena som skärps – vad byggföretaget bör räkna med</h2>
<p>Det som verkligen förändrar spelplanen är att gränsvärden blir bindande. Boverkets rapport 2026 föreslår gränsvärden på ungefär 150–250 kg CO2e/m² BTA för byggnadskategorier som har referensvärden, och omkring 295 kg CO2e/m² BTA för kategorin övriga byggnader utan referensvärden. Detta är förslag, ännu inte antagen lag.</p>
<p>Som jämförelse föreslog det tidigare, nu pausade, 2023-förslaget ett gränsvärde på 375 kg CO2e/m² BTA (modulerna A1–A5) för flerbostadshus, med start 2025/2027 och successiva skärpningar mot Sveriges nettonollmål 2045. Den tidplanen sköts upp och har ersatts av EPBD-schemat 2028/2030. Referensvärdena som Boverket publicerar är den grund som de kommande gränsvärdena kalibreras mot, och de används redan i klimatkriterier vid offentlig upphandling. Bygger du åt offentlig beställare möter du alltså klimatkraven redan idag i anbudsskedet.</p>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte en LCA-beräkning eller Boverkets inlämningstjänst, men verktyget hjälper dig att inte tappa kravet på vägen. I ByggExp bygger du in klimatdeklarationen som ett obligatoriskt steg i projektets gång, från bygglov till slutbesked, med ansvarig person och deadline kopplad till varje projekt.</p>
<p>Du samlar EPD:er, produktdata och underlag på ett ställe så att den som gör beräkningen har allt tillgängligt, och du dokumenterar egenkontrollen med en tydlig struktur. Använd <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> för att koppla klimatdeklarationens moment till din övriga kvalitetsdokumentation, så att inget krav hamnar mellan bygglov och slutbesiktning.</p>

<h2>Vanliga frågor</h2>
<h3>Vem ansvarar för klimatdeklarationen?</h3>
<p>Byggherren ansvarar enligt lag för att ta fram och lämna in klimatdeklarationen till Boverket. En entreprenör eller konsult kan utföra beräkningen, men det juridiska ansvaret stannar hos byggherren.</p>
<h3>Vad händer om klimatdeklarationen inte lämnas in?</h3>
<p>Byggnadsnämnden får inte utfärda slutbesked förrän byggherren visat att deklarationen är inlämnad, eller gjort sannolikt att skyldighet saknas. Det är den huvudsakliga påföljden – någon direkt byggsanktionsavgift för en utebliven deklaration finns inte, men en sådan kan bli aktuell indirekt om byggnaden tas i bruk utan slutbesked.</p>
<h3>Vad ska redovisas i dagens klimatdeklaration?</h3>
<p>Idag redovisas byggskedet, modulerna A1–A5, för bärande konstruktion, klimatskärm och innerväggar. Driftenergi under användningstiden ingår inte. Underlaget bygger på EPD-data och Boverkets klimatdatabas.</p>
<h3>När börjar gränsvärden och livscykel-GWP gälla?</h3>
<p>Enligt EPBD ska livscykel-GWP redovisas från 1 januari 2028 för byggnader över 1 000 m² och från 1 januari 2030 för alla nya byggnader. Boverket föreslår bindande gränsvärden från 2030. Beloppen är fortfarande förslag.</p>

<h2>Kom igång</h2>
<p>Kravet på klimatdeklaration gäller redan idag och spärrar slutbeskedet om det missas, samtidigt som skiftet mot livscykel-GWP och gränsvärden 2028–2030 kräver att du börjar planera för låg klimatpåverkan nu. Bygg in rutinen i varje projekt, samla underlagen tidigt och följ remissarbetet genom 2026–2027. Börja med <a href="/sv/verktyg">våra gratis verktyg</a> eller <a href="/sv/contact">boka en demo</a> så visar vi hur du håller ordning på kravet från bygglov till slutbesked.</p>

<p>Relaterat: <a href="/sv/blog/nya-byggregler-2026-energi-isolering">Nya byggregler 2026 – energi och isolering</a>, <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/startbesked-bygglov-process-2026">Startbesked och bygglovsprocessen 2026</a>.</p>
`;

const A_KLIMATDEKLARATION_BYGGNAD_KRAV: BlogPost = {
  _id: "code-"+"klimatdeklaration-byggnad-krav",
  title: "Klimatdeklaration för byggnader – krav och regler 2026", slug: "klimatdeklaration-byggnad-krav", locale: "sv",
  excerpt: "Klimatdeklarationen är kopplad direkt till slutbeskedet – och kraven breddas mot livscykel-GWP och bindande gränsvärden 2028–2030. Så förbereder du företaget.", tag: "Regelverk",
  coverImageUrl: "/landing/features/9ekonomi.webp", contentHtml: A_KLIMATDEKLARATION_BYGGNAD_KRAV_HTML,
  seoTitle: "Klimatdeklaration byggnad – krav 2026 | ByggExp", seoDescription: "Klimatdeklaration är obligatorisk för nya byggnader och spärrar slutbeskedet. Se vem som ansvarar, vad som redovisas och hur kraven skärps mot 2028–2030.",
  seoImageUrl: `${SITE_URL}/landing/features/9ekonomi.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T16:03:00.000Z", createdAt: "2026-08-19T16:03:00.000Z", updatedAt: "2026-08-19T16:03:00.000Z",
};

const A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG_HTML = `
<p>Sedan 1 augusti 2020 måste alla som producerar bygg- och rivningsavfall sortera ut minst sex materialslag redan på arbetsplatsen. Kraven i avfallsförordningen (2020:614) gäller 2026, och den kommunala tillsynen har skärpts. Observera att 3 kap. i förordningen omnumrerades den 1 oktober 2025 – paragrafhänvisningarna nedan följer den gällande lydelsen. Blandar du fraktionerna utan giltigt undantag riskerar du föreläggande, vite och i grova fall åtal. Den här guiden går igenom vad som ska sorteras, hur du dokumenterar det och var ansvaret ligger.</p>

<p>Bygg in avfallshanteringen i din egenkontroll från start – börja med vår <a href="/sv/verktyg/egenkontroll-mall">gratis mall för egenkontroll -&gt;</a> och lägg till sorteringspunkterna nedan i den.</p>

<h2>De sex fraktionerna du måste sortera ut på plats</h2>
<p>Enligt avfallsförordningen 3 kap. 19 § ska följande sex materialslag sorteras ut var för sig och förvaras åtskilda från varandra och från övrigt avfall:</p>
<ul>
<li><strong>Trä</strong> – rent virke, reglar, formmaterial (obehandlat).</li>
<li><strong>Mineral</strong> – betong, tegel, klinker, keramik eller sten i en fraktion.</li>
<li><strong>Metall</strong> – armering, plåt, rör, beslag.</li>
<li><strong>Glas</strong> – planglas, rutor.</li>
<li><strong>Plast</strong> – emballage, rör, profiler.</li>
<li><strong>Gips</strong> – gipsskivor och gipsrester.</li>
</ul>
<p>Det avgörande är att sorteringen sker <strong>vid källan</strong> – på den plats där avfallet uppstår, alltså din bygg- eller rivningsplats. Du får alltså inte samla allt blandat i en container och skicka det vidare till en central sorteringsanläggning. Den som samlar in de utsorterade fraktionerna måste dessutom hålla dem åtskilda genom hela insamlingen så att materialet kan återanvändas eller materialåtervinnas (3 kap. 25 §). Syftet är kopplat till etappmålet att 70 viktprocent av det icke-farliga bygg- och rivningsavfallet ska förberedas för återanvändning eller materialåtervinnas.</p>

<h2>Utöver de sex – farligt avfall och brännbart</h2>
<p>Sex fraktioner är golvet, inte taket. Farligt avfall ska alltid sorteras ut och hållas separat (3 kap. 2 §), och olika slag av farligt avfall får aldrig blandas med varandra. I rivning handlar det typiskt om:</p>
<ul>
<li><strong>Asbest</strong> – eternit, rörisolering, mattlim.</li>
<li><strong>PCB</strong> – fogmassor och isolerrutor i byggnader från 1956–1973.</li>
<li><strong>Tryckimpregnerat trä</strong> och andra behandlade träslag.</li>
<li><strong>Förorenade massor</strong> och avfall med farliga ämnen.</li>
</ul>
<p>Dessutom ska brännbart avfall sorteras ut enligt avfallsförordningen 3 kap. Ordningen är alltså: farligt avfall först, sedan de sex materialslagen, därefter brännbart – och först det som blir kvar kan hanteras som blandat restavfall.</p>

<h2>Dokumentation och rapportering – vad tillsynen frågar efter</h2>
<p>För farligt avfall gäller anteckningsskyldighet: du ska föra anteckningar om avfallets typ, mängd, ursprung och mottagare. Sedan 1 november 2020 ska uppgifterna också rapporteras till Naturvårdsverkets avfallsregister, senast två arbetsdagar efter att anteckningen ska göras (enligt avfallsförordningen). Själva anteckningsskyldighetens innehåll regleras i Naturvårdsverkets föreskrifter NFS 2020:5. Missad rapportering är en av de vanligaste bristerna vid tillsyn.</p>
<p>En central fråga i rivning är <strong>vem som är avfallsproducent</strong> och därmed bär anteckning- och rapporteringsskyldigheten – rivningsentreprenören eller fastighetsägaren/beställaren. Enligt Naturvårdsverkets vägledning är det vid större arbeten som underhåll, ROT, byggande och rivning normalt den anlitade entreprenören som betraktas som avfallsproducent, eftersom entreprenören har mest rådighet över avfallet. Ett undantag är om avtalet fråntar entreprenören rådigheten över avfallet – då kan byggherren eller huvudentreprenören i stället vara producent. Reglera ansvaret tydligt i entreprenadavtalet så att ingen part utgår från att den andra rapporterar.</p>
<p>Lutar du dig mot ett undantag från sorteringskravet ska du dokumentera din bedömning och kunna visa upp den för miljöförvaltningen på begäran. Det är i praktiken ditt bevis på att du följer reglerna.</p>

<h2>Undantag och dispens – när får du blanda?</h2>
<p>Det finns två generella undantag som inte kräver någon ansökan. Sedan omregleringen den 1 oktober 2025 finns de direkt i avfallsförordningen 3 kap. 19 § (tidigare i Naturvårdsverkets föreskrifter NFS 2020:7, som upphävts):</p>
<ul>
<li>Material är så sammanfogat i konstruktionen att det inte är tekniskt genomförbart att separera det.</li>
<li>Avfallet är så förorenat att en separering skulle försämra kvaliteten på behandlingen eller återvinningen.</li>
</ul>
<p>Vill du samla avfallet blandat utan att omfattas av ett generellt undantag måste du söka <strong>dispens</strong> hos tillsynsmyndigheten i förväg (3 kap. 33 §) – i praktiken oftast den kommunala miljönämnden. Dispens kan ges om separat insamling inte är tekniskt genomförbar, inte ger någon miljönytta som överväger nackdelarna, eller medför orimliga kostnader. Räkna med handläggningstid – planera dispensfrågan innan rivningen startar, inte när containern redan står full.</p>

<h2>Sanktioner om du blandar – föreläggande, vite och miljöbrott</h2>
<p>Tillsynen sköts av den kommunala miljönämnden. Vid brister kan nämnden utfärda ett föreläggande om rättelse, ofta förenat med vite – ett förutbestämt belopp du tvingas betala om du inte åtgärdar felet. Allvarliga överträdelser kan bedömas som otillåten avfallshantering eller nedskräpning enligt miljöbalken 29 kap., vilket är straffsanktionerat.</p>
<p>En viktig nyansering: det finns <strong>ingen fast schablon-miljösanktionsavgift med ett bestämt kronbelopp</strong> specifikt för att låta bli att sortera de sex fraktionerna. Sprids påståenden om exakta bötesbelopp bör du vara skeptisk – kontrollera alltid mot avfallsförordningen och din lokala miljöförvaltning innan du citerar en siffra.</p>

<h2>Checklista för din arbetsplats</h2>
<ul>
<li>En container eller behållare per fraktion – trä, mineral, metall, glas, plast, gips.</li>
<li>Tydlig skyltning vid varje kärl så att alla på plats sorterar rätt.</li>
<li>Materialinventering före rivning som identifierar farligt avfall.</li>
<li>Kvitton och mottagningsbevis från godkänd mottagare. Anteckningar om farligt avfall ska enligt NFS 2020:5 sparas i minst 3 år (transportörer minst 12 månader); tänk på att bokföringslagen kräver 7 år för kvitton och verifikationer.</li>
<li>Dokumenterad bedömning om du åberopar ett undantag.</li>
<li>Registrering av farligt avfall i avfallsregistret inom två arbetsdagar.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp ersätter inte myndighetsrapporteringen till avfallsregistret, men gör det enkelt att bevisa att rutinen finns och följs. Du bygger in sorteringspunkterna i din egenkontroll så att varje projekt får en spårbar avstämning – vem som ansvarar, vilka fraktioner som hanteras och var mottagningsbevisen finns. Undantagsbedömningar och foton kan sparas på projektet, så att du snabbt kan visa upp underlaget om miljöförvaltningen gör tillsyn. Fler mallar och kalkylatorer hittar du samlat i <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>
<h3>Vilka fraktioner måste sorteras ut på byggarbetsplatsen?</h3>
<p>Minst sex: trä, mineral (betong, tegel, klinker, keramik eller sten), metall, glas, plast och gips. Dessutom ska farligt avfall och brännbart avfall sorteras ut separat enligt avfallsförordningen 3 kap.</p>
<h3>Kan jag samla allt blandat och sortera på en central anläggning?</h3>
<p>Nej. Sorteringen ska ske vid källan, alltså på platsen där avfallet uppstår. Undantag kräver antingen ett av de två generella undantagen i avfallsförordningen 3 kap. 19 § eller en dispens som du söker i förväg hos tillsynsmyndigheten – i praktiken oftast den kommunala miljönämnden.</p>
<h3>Vem ansvarar för att rapportera farligt avfall vid rivning?</h3>
<p>Ansvaret ligger på den som är avfallsproducent. Vid större arbeten som underhåll, ROT, byggande och rivning betraktar Naturvårdsverket normalt den anlitade entreprenören som avfallsproducent, eftersom entreprenören har mest rådighet över avfallet. Om avtalet fråntar entreprenören rådigheten kan byggherren eller huvudentreprenören i stället vara producent. Reglera ansvaret i avtalet och rapportera till avfallsregistret inom två arbetsdagar.</p>
<h3>Hur stor blir böterna om jag inte sorterar?</h3>
<p>Det finns ingen fast miljösanktionsavgift med ett bestämt belopp för själva sorteringsbrottet. Miljönämnden kan i stället utfärda föreläggande förenat med vite, och grova fall kan bli otillåten avfallshantering enligt miljöbalken 29 kap.</p>

<h2>Kom igång</h2>
<p>Lägg avfallssorteringen i din projektrutin redan idag med vår <a href="/sv/verktyg/egenkontroll-mall">mall för egenkontroll</a>, och stäm alltid av mot avfallsförordningen och din lokala miljöförvaltning. Vill du se hur ByggExp håller ihop egenkontroll och dokumentation i skarpa projekt? <a href="/sv/contact">Boka en demo -&gt;</a></p>

<p>Relaterat: <a href="/sv/blog/boverkets-nya-byggregler-2026-kontrollplan">Boverkets nya byggregler 2026 och kontrollplanen</a>, <a href="/sv/blog/kontrollplan-mall-bygglov">Kontrollplan-mall för bygglov</a>, <a href="/sv/blog/egenkontroll">Egenkontroll i byggprojekt</a>.</p>
`;

const A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG: BlogPost = {
  _id: "code-"+"rivningsavfall-sorteringskrav-bygg",
  title: "Sorteringskrav för bygg- och rivningsavfall 2026", slug: "rivningsavfall-sorteringskrav-bygg", locale: "sv",
  excerpt: "Sedan 2020 måste bygg- och rivningsavfall sorteras i minst sex fraktioner vid källan. Guiden går igenom kraven i avfallsförordningen 2026, dokumentation, undantag och sanktioner.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG_HTML,
  seoTitle: "Sorteringskrav rivningsavfall 2026 | ByggExp", seoDescription: "Så sorterar du bygg- och rivningsavfall i sex fraktioner enligt avfallsförordningen 2026: dokumentation, farligt avfall, undantag, dispens och sanktioner.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T19:06:00.000Z", createdAt: "2026-08-19T19:06:00.000Z", updatedAt: "2026-08-19T19:06:00.000Z",
};

const A_ID06_NYA_KRAV_2026_LEGITIMERING_HTML = `
<p>Den 28 januari 2026 skärps kraven för att beställa och förnya ID06-kort. Från den dagen räcker det inte längre med BankID eller körkort – den som ska ha ett kort måste styrka både sin identitet och sitt medborgarskap med pass eller nationellt ID-kort. För varje byggföretag som håller elektronisk personalliggare betyder det en konkret sak: personal utan giltigt ID06-kort kan inte checka in, och då riskerar ni kontrollavgift vid Skatteverkets oanmälda besök. Verifiera alltid det senaste mot ID06.se, men här är vad som gäller och hur ni förbereder er.</p>

<p>Rätt rutiner för in- och utcheckning börjar med rätt underlag. I <a href="/sv/verktyg">vår samling av gratis verktyg för byggföretag</a> hittar du bland annat en tidrapportmall som hjälper dig hålla ordning på arbetad tid parallellt med den lagstadgade personalliggaren.</p>

<h2>Vad ändras den 28 januari 2026?</h2>
<p>Kärnan i förändringen är att ID06 inför ett nytt säkerhetskrav vid kortbeställning och förnyelse. Den som beställer ett kort måste identifiera sig och godkänna beställningen med ett pass eller ett nationellt ID-kort som gäller som resehandling inom EU/EES. Syftet är att verifiera varje persons identitet <strong>och</strong> medborgarskap, så att rätt person kopplas till kortet och så att den som saknar rätt att arbeta i Sverige inte kan få ett.</p>
<p>Det innebär att BankID, körkort och e-legitimation inte längre godtas vid beställning eller förnyelse, eftersom de inte styrker medborgarskap. Bakgrunden är omfattande: det finns cirka 700 000 aktiva ID06-kort, 1 500–2 000 nya beställs varje dag och korten innehas av personer från 129 länder. Skärpningen ska göra det svårare att missbruka systemet.</p>

<h2>Så identifierar sig personalen</h2>
<p>Identifieringen kan göras på två sätt. Det kostnadsfria alternativet är den nya mobilappen ID06 Identify, där personen skannar sitt pass eller nationella ID-kort direkt i telefonen. Alternativt görs identifieringen manuellt på ett skanningscenter mot en avgift.</p>
<p>Vid en ny beställning eller förnyelse blir flödet i praktiken:</p>
<ol>
<li>Ladda ner ID06 Identify och skanna pass eller nationellt ID-kort i appen – eller boka tid på ett skanningscenter.</li>
<li>Godkänn kortbeställningen med den verifierade identiteten.</li>
<li>Arbetsgivaren kopplar kortet till anställningen som vanligt i ID06-portalen.</li>
</ol>
<p>Eftersom appen är gratis och görs på telefonen är den det snabbaste sättet för de flesta. Planera ändå för att en del i personalen behöver hjälp första gången.</p>

<h2>Olika regler för olika grupper</h2>
<p>Kraven slår lite olika beroende på personens status:</p>
<ul>
<li><strong>Svenska medborgare och EU/EES-medborgare</strong> identifierar sig med pass eller nationellt ID-kort som gäller som resehandling. EU-medborgare med svenskt personnummer kan få kort med fem års giltighet.</li>
<li><strong>Tredjelandsmedborgare</strong> (utanför EU/EES) ska dessutom skanna sitt EU-uppehållstillståndskort på samma sätt som tidigare, utöver identitetshandlingen.</li>
</ul>
<p>Poängen är densamma för alla grupper: både vem personen är och rätten att arbeta ska kunna verifieras innan kortet utfärdas.</p>

<h2>Vad händer med befintliga kort?</h2>
<p>Redan giltiga ID06-kort fortsätter att gälla. Det nya kravet slår till först när kortet ska förnyas efter att giltighetstiden löpt ut. Ni behöver alltså inte förnya allt på en gång den 28 januari – men ni bör ha koll på när korten går ut. Ett kort som löper ut mitt i ett projekt kan i värsta fall lämna en medarbetare utan möjlighet att checka in tills det nya kortet är på plats. Planera förnyelser i god tid för att undvika sådana glapp.</p>

<h2>Kopplingen till personalliggaren</h2>
<p>Elektronisk personalliggare krävs enligt skatteförfarandelagen på byggarbetsplatser där den sammanlagda byggkostnaden överstiger fyra prisbasbelopp. Prisbasbeloppet 2026 är 59 200 kr, vilket ger en gräns på 236 800 kr. Privatpersoner som bygger för eget bruk omfattas inte.</p>
<p>Byggherren ska anmäla till Skatteverket när och var byggverksamheten påbörjas, samt tillhandahålla utrustning för elektronisk personalliggare. Uppgifterna – namn, personnummer och tider för in- och utcheckning – ska registreras dagligen, kunna visas vid oanmält kontrollbesök och sparas i två år. Värt att veta: Skatteverket kräver elektronisk registrering, men kräver inte ID06 specifikt – även andra system som uppfyller lagkraven godtas. I praktiken bygger dock de flesta byggarbetsplatser sin incheckning på just ID06-kort, och därför blir de nya identifieringskraven direkt relevanta för att liggaren ska fungera.</p>

<h2>Kontrollavgifter och risker</h2>
<p>Brister i personalliggaren kostar. Kontrollavgiften är 12 500 kr i grundavgift plus 2 500 kr per person som påträffas arbetande men inte finns i liggaren. Har byggherren inte anmält byggstart och plats till Skatteverket är avgiften 25 000 kr. Kopplingen till de nya ID06-reglerna är tydlig: om en medarbetare inte hinner förnya sitt kort och därför inte kan checka in, men ändå arbetar på platsen, är risken att personen saknas i liggaren vid ett kontrollbesök – med avgift som följd.</p>

<h2>Checklista – så förbereder firman sig före 28 januari 2026</h2>
<ul>
<li>Inventera samtliga ID06-korts giltighetstid och notera vilka som löper ut de närmaste månaderna.</li>
<li>Informera personalen om de nya kraven i god tid – att BankID och körkort inte längre räcker.</li>
<li>Säkerställ att alla har ett giltigt pass eller nationellt ID-kort; tredjelandsmedborgare även EU-uppehållstillståndskort.</li>
<li>Be personalen ladda ner ID06 Identify och testa skanningen innan de behöver förnya.</li>
<li>Boka skanningscenter för dem som inte kan använda appen.</li>
<li>Kontrollera att er rutin för anmälan till Skatteverket och daglig incheckning är på plats.</li>
</ul>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp håller ordning på tid och underlag runt personalliggaren – inte på själva ID06-beställningen, som sköts hos ID06. Med ByggExp samlar du arbetad tid per medarbetare och projekt, så att uppgifterna är enkla att stämma av mot liggaren och spara i föreskrivna två år. När ni har koll på vilka som är på plats och hur länge blir det både lättare att fakturera rätt och tryggare att möta ett oanmält kontrollbesök. Vill du komma igång med tidsdelen kan du börja med <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapportmall</a> och sedan digitalisera flödet.</p>

<h2>Vanliga frågor</h2>
<h3>Måste alla förnya sina ID06-kort den 28 januari 2026?</h3>
<p>Nej. Redan giltiga kort fortsätter att gälla. De nya kraven med pass eller nationellt ID gäller vid ny beställning och vid förnyelse efter att kortets giltighetstid har löpt ut. Ha ändå koll på utgångsdatum så att ingen blir utan kort mitt i ett projekt.</p>
<h3>Duger BankID eller körkort för att beställa ID06-kort efter 28 januari 2026?</h3>
<p>Nej. Från och med den 28 januari 2026 godtas inte längre BankID, körkort eller e-legitimation vid beställning eller förnyelse, eftersom de inte styrker medborgarskap. Det krävs pass eller nationellt ID-kort som gäller som resehandling inom EU/EES.</p>
<h3>Kostar den nya identifieringen något?</h3>
<p>Identifieringen är kostnadsfri om den görs i mobilappen ID06 Identify, där man skannar sitt pass eller nationella ID direkt i telefonen. Görs identifieringen i stället manuellt på ett skanningscenter tillkommer en avgift.</p>
<h3>Vad gäller för anställda som inte är EU-medborgare?</h3>
<p>Tredjelandsmedborgare, alltså personer från länder utanför EU/EES, ska utöver pass eller nationellt ID även skanna sitt EU-uppehållstillståndskort på samma sätt som tidigare. Både identitet och rätten att arbeta i Sverige verifieras.</p>

<h2>Kom igång</h2>
<p>Börja med att inventera kortens giltighet och trimma rutinen kring personalliggaren. Ladda ner <a href="/sv/verktyg/tidrapport-mall">vår gratis tidrapportmall</a> eller utforska <a href="/sv/verktyg">alla verktyg för byggföretag</a>. Vill du se hur ByggExp håller ihop tid, projekt och underlag? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/id06">ID06 – vad det är och varför det krävs</a>, <a href="/sv/blog/id06-bestalla-kort-steg-for-steg">Beställa ID06-kort steg för steg</a> och <a href="/sv/blog/personalliggare">Personalliggare på byggarbetsplatsen</a>.</p>
`;

const A_ID06_NYA_KRAV_2026_LEGITIMERING: BlogPost = {
  _id: "code-"+"id06-nya-krav-2026-legitimering",
  title: "ID06 – nya krav 2026: pass och medborgarskapsverifiering vid kortbeställning", slug: "id06-nya-krav-2026-legitimering", locale: "sv",
  excerpt: "Från 28 januari 2026 måste den som beställer eller förnyar ett ID06-kort styrka både identitet och medborgarskap med pass eller nationellt ID – så förbereder firman personalliggaren.", tag: "Personalliggare",
  coverImageUrl: "/landing/features/3personal.webp", contentHtml: A_ID06_NYA_KRAV_2026_LEGITIMERING_HTML,
  seoTitle: "ID06 nya krav 2026: legitimering | ByggExp", seoDescription: "Från 28 januari 2026 krävs pass eller nationellt ID vid ID06-beställning. Så förbereder du firman och personalliggaren – checklista och regler per grupp.",
  seoImageUrl: `${SITE_URL}/landing/features/3personal.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T20:18:00.000Z", createdAt: "2026-08-19T20:18:00.000Z", updatedAt: "2026-08-19T20:18:00.000Z",
};

const A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG_HTML = `
<p>Rivning är sällan &quot;bara att köra igång&quot;. I nästan alla fall krävs antingen rivningslov eller rivningsanmälan – och oavsett vilket får spaden inte sättas i väggen förrän byggnadsnämnden har gett startbesked. Ovanpå det skärptes asbestreglerna den 19 december 2025, vilket flyttar ännu mer ansvar på det byggföretag som utför rivningen. Missar du ett steg riskerar du byggsanktionsavgift och stoppad arbetsplats. Här går vi igenom vad som faktiskt gäller innan rivningen påbörjas.</p>

<p>Grunden för en trygg rivning är dokumentation – kontrollplan, materialinventering och egenkontroll. Bygg upp den strukturerat med <a href="/sv/verktyg/egenkontroll-mall">vår gratis egenkontrollmall -&gt;</a>.</p>

<h2>Rivningslov – när det krävs (PBL 9 kap. 10 §)</h2>
<p>Inom detaljplan krävs som huvudregel rivningslov för att riva en byggnad eller en del av en byggnad. Det gäller även anläggningar och byggnader som omfattas av rivningsförbud i detaljplanen, samt sådant som är särskilt värdefullt.</p>
<p>Utanför detaljplan är utgångspunkten den motsatta: rivningslov krävs bara i särskilda fall.</p>
<ul>
<li>Inom detaljplan: rivningslov för byggnad eller del av byggnad, samt vid rivningsförbud.</li>
<li>Utanför detaljplan: endast om områdesbestämmelser kräver det.</li>
<li>Alltid extra försiktighet vid byggnader med historiskt, kulturhistoriskt, miljömässigt eller konstnärligt värde, eller i särskilt värdefulla bebyggelseområden.</li>
</ul>
<p>Är du osäker på vilken kategori objektet hamnar i, kontrollera detaljplan och eventuella områdesbestämmelser hos kommunen innan du lämnar anbud – det påverkar både tidplan och kostnad.</p>

<h2>Rivningsanmälan – gränsen vid 50 m² (PBF 6 kap.)</h2>
<p>Även när rivningslov inte krävs kan du behöva göra en rivningsanmälan till byggnadsnämnden. Anmälningsplikt gäller när du river en byggnad eller byggnadsdel med en byggnadsarea över 50,0 m². Anmälningsplikten följer av plan- och bygglagen 9 kap. 16 §, och åtgärderna räknas upp i plan- och byggförordningen 6 kap. 1 §.</p>
<p>Vissa åtgärder är undantagna, exempelvis rivning av vissa komplementbyggnader och ekonomibyggnader för jord- och skogsbruk. Skillnaden mellan lov och anmälan i praktiken är att lovet innebär en formell prövning mot planbestämmelser, medan anmälan i första hand handlar om att nämnden ska kunna säkra att rivningen sker kontrollerat och att avfallet tas om hand rätt. Oavsett vilket spår gäller samma sak i nästa steg: du behöver startbesked.</p>

<h2>Ingen rivning utan startbesked (PBL 10 kap.)</h2>
<p>Rivning får inte påbörjas förrän byggnadsnämnden har gett startbesked. I startbeskedet fastställs kontrollplanen. Det gäller både lovpliktig och anmälningspliktig rivning – att lov eller anmälan är inlämnad räcker alltså inte.</p>
<p>Byggnadsnämnden har enligt PBL 9 kap. 27 § tio veckor på sig att handlägga rivningslov. Överskrids tiden ska avgiften reduceras med en femtedel per påbörjad vecka. Tänk också på att avgifterna för lov och anmälan sätts av varje kommun i en egen bygglovstaxa som revideras vid olika tidpunkter – kontrollera därför aktuell taxa hos berörd kommun innan du lämnar anbud. Kontrollansvarig krävs normalt inte vid anmälningspliktig rivning, men nämnden kan besluta att KA behövs om åtgärden är komplicerad (PBL 10 kap. 9–10 §).</p>

<h2>Rivningsplan och kontrollplan – vad dokumentet måste innehålla</h2>
<p>Kontrollplanen är navet i rivningen. Den ska bland annat redovisa hur farligt avfall och övrigt rivningsavfall tas om hand. En genomtänkt plan innehåller:</p>
<ul>
<li>Kontrollpunkter kopplade till varje kritiskt moment i rivningen.</li>
<li>Vem som är ansvarig för respektive kontroll.</li>
<li>Hur farligt avfall identifieras, separeras och transporteras.</li>
<li>Principer för selektiv rivning så att material kan sorteras för återbruk och återvinning.</li>
<li>Materialinventeringen som bilaga, som underlag för avfallsflödena.</li>
</ul>
<p>Selektiv rivning är inte bara en miljöfråga utan direkt kopplad till <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">sorteringskraven för rivningsavfall</a> – planera för det redan i kontrollplanen.</p>

<h2>Materialinventering och miljöinventering före rivning</h2>
<p>Innan rivning bör en material- och miljöinventering göras. Syftet är att kartlägga farliga ämnen med mängd och läge så att de kan hanteras rätt. Typiska poster:</p>
<ul>
<li>Asbest (isolering, eternit, fix och fog, ventilationskanaler).</li>
<li>PCB (fogmassor, isolerglas, golv).</li>
<li>Bly och kvicksilver.</li>
<li>Impregnerat trä.</li>
<li>Elavfall och andra farliga fraktioner.</li>
</ul>
<p>Inventeringen är särskilt viktig i byggnader uppförda före 1982, eftersom asbestförbudet infördes i Sverige det året. Själva inventeringen och kontrollplanen bör bevaras i minst fem år som underlag för avfallsflödena. Observera dock att register över asbestexponerade arbetstagare och tillhörande medicinska kontroller omfattas av särskilda regler och ska sparas betydligt längre – minst 40 år efter att exponeringen upphört enligt Arbetsmiljöverkets föreskrifter. Blanda alltså inte ihop dessa arkiveringstider. En slarvig inventering är den vanligaste orsaken till dyra stopp mitt i rivningen.</p>

<h2>Nya asbestregler från 19 december 2025 – detta gäller byggföretaget</h2>
<p>Den 19 december 2025 trädde skärpta, EU-drivna asbestregler i kraft. Det hygieniska gränsvärdet sänktes från 0,1 till 0,01 fibrer per kubikcentimeter luft – en tiofaldig skärpning. Reglerna finns numera i Arbetsmiljöverkets omstrukturerade regelverk (AFS 2023-serien i kraft 1 januari 2025), ändrade genom bland annat AFS 2025:6.</p>
<p>Utbildningskravet har utökats till fler yrkesgrupper som kan exponeras, exempelvis fastighetsskötare, rörläggare, elektriker, byggarbetare och arbetsledare. Undantaget från läkarundersökning under viss exponeringstid har tagits bort. Rivning och sanering av asbest kräver tillstånd från Arbetsmiljöverket och får bara utföras av behöriga – och asbestarbete ska anmälas till Arbetsmiljöverket i förväg. Tillstånd som beslutats före 19 december 2025 fortsätter gälla. Läs mer i vår genomgång av <a href="/sv/blog/nya-asbestregler-2026">de nya asbestreglerna 2026</a>.</p>

<h2>Vad kostar det att strunta i reglerna</h2>
<p>Att påbörja rivning utan startbesked eller lov ger byggsanktionsavgift. Som exempel landar rivning av ett enbostadshus på 160 m² BTA utan startbesked på ungefär 76 368 kr, räknat på 2026 års prisbasbelopp om 59 200 kr. Maxtaket för en byggsanktionsavgift är 50 prisbasbelopp, vilket för 2026 motsvarar 2 960 000 kr. Utöver det kan nämnden besluta om rivningsföreläggande. Ansvaret ligger på byggherren och entreprenören – det är alltså sällan lönt att chansa.</p>

<h2>Checklista innan byggföretaget river</h2>
<ol>
<li>Kontrollera detaljplan, områdesbestämmelser och eventuellt kulturvärde.</li>
<li>Sök rivningslov eller lämna rivningsanmälan (gränsen 50 m²).</li>
<li>Gör material- och miljöinventering, särskilt för hus byggda före 1982.</li>
<li>Utred asbest och beställ tillstånd/förhandsanmälan till Arbetsmiljöverket vid behov.</li>
<li>Upprätta kontrollplan med avfallshantering och selektiv rivning.</li>
<li>Invänta startbesked innan rivningen påbörjas.</li>
<li>Anlita behörig, utbildad personal för asbestsanering.</li>
<li>Hantera avfall och farligt avfall enligt sorteringskraven.</li>
<li>Begär slutbesked när rivningen är klar.</li>
</ol>

<h2>Så gör du i ByggExp</h2>
<p>ByggExp hjälper dig hålla ihop rivningens dokumentation. Med egenkontrollmallen bygger du kontrollpunkter för varje moment, kopplar ansvarig person och dokumenterar avvikelser – underlag som passar rakt in i kontrollplanen och som du enkelt kan arkivera i minst fem år. Material- och miljöinventeringen kan struktureras på samma sätt, med mängd och läge per fraktion. ByggExp fattar inga myndighetsbeslut och ersätter inte kommunens prövning eller Arbetsmiljöverkets tillstånd – men verktyget ser till att din egen dokumentation är komplett, spårbar och lätt att visa upp vid tillsyn.</p>

<h2>Vanliga frågor</h2>
<h3>Krävs alltid rivningslov för att riva en byggnad?</h3>
<p>Nej. Inom detaljplan krävs oftast rivningslov, men utanför detaljplan krävs det bara om områdesbestämmelser säger det eller om byggnaden är särskilt värdefull. När lov inte krävs kan rivningsanmälan ändå behövas om byggnadsarean överstiger 50 m².</p>
<h3>Kan vi börja riva så snart anmälan är inlämnad?</h3>
<p>Nej. Rivning får inte påbörjas förrän byggnadsnämnden har gett startbesked, oavsett om åtgärden är lov- eller anmälningspliktig. I startbeskedet fastställs kontrollplanen.</p>
<h3>Behövs kontrollansvarig vid rivning?</h3>
<p>Vid anmälningspliktig rivning krävs normalt ingen kontrollansvarig. Byggnadsnämnden kan dock besluta att KA behövs om åtgärden bedöms som komplicerad (PBL 10 kap. 9–10 §).</p>
<h3>Vad innebär de nya asbestreglerna för rivningen?</h3>
<p>Från 19 december 2025 är det hygieniska gränsvärdet sänkt till 0,01 fibrer per kubikcentimeter, utbildningskravet omfattar fler yrkesgrupper och undantaget från läkarundersökning har tagits bort. Asbestsanering kräver tillstånd och förhandsanmälan till Arbetsmiljöverket.</p>

<h2>Kom igång</h2>
<p>Planera lov eller anmälan och inventeringen tidigt – det är där tid och pengar vinns. Sätt upp din dokumentation med <a href="/sv/verktyg/egenkontroll-mall">egenkontrollmallen</a> eller utforska fler <a href="/sv/verktyg">gratis verktyg för byggföretag</a>. Vill du se hur ByggExp fungerar i skarpt läge? <a href="/sv/contact">Boka en demo här</a>.</p>

<p>Relaterat: <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">Sorteringskrav för rivningsavfall</a>, <a href="/sv/blog/nya-asbestregler-2026">Nya asbestregler 2026</a>, <a href="/sv/blog/startbesked-bygglov-process-2026">Startbesked och bygglovsprocessen 2026</a>.</p>
`;

const A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG: BlogPost = {
  _id: "code-"+"rivningslov-rivningsanmalan-bygg",
  title: "Rivningslov och rivningsanmälan – så gör byggföretaget rätt", slug: "rivningslov-rivningsanmalan-bygg", locale: "sv",
  excerpt: "Rivningslov eller rivningsanmälan – och alltid startbesked innan spaden sätts i väggen. Så håller byggföretaget ihop lov, kontrollplan och asbestkrav.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG_HTML,
  seoTitle: "Rivningslov och rivningsanmälan | ByggExp", seoDescription: "Rivningslov eller rivningsanmälan? Så vet byggföretaget vad som gäller vid 50 m²-gränsen, startbesked, kontrollplan och de nya asbestreglerna 2025/2026.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-19T23:12:00.000Z", createdAt: "2026-08-19T23:12:00.000Z", updatedAt: "2026-08-19T23:12:00.000Z",
};

const A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG_HTML = `
<p>En målare river ut en gammal fasadpanel, kapar impregnerat virke och slänger färgburkar i en container. Ingen stor rivning, ingen fabrik – bara ett vanligt jobb. Ändå har firman i samma stund blivit skyldig att anteckna det farliga avfallet och rapportera det till Naturvårdsverkets avfallsregister. Anteckningsskyldigheten har ingen nedre gräns, och det är just den detaljen som gör att många hantverksfirmor missar den.</p>

<p>Ett strukturerat sätt att fånga de farliga fraktionerna redan på plats är att lägga in dem i din löpande dokumentation – använd gärna <a href="/sv/verktyg/egenkontroll-mall">vår gratis mall för egenkontroll -&gt;</a> för att koppla varje hämtning till rätt avfallskod och rapport.</p>

<h2>Vad är anteckningsskyldighet – och vem omfattas?</h2>

<p>Anteckningsskyldigheten gäller alla som yrkesmässigt producerar, transporterar, samlar in, mäklar, handlar med eller behandlar farligt avfall. Det finns ingen nedre gräns i mängd eller omsättning. En enmansfirma som byter ut ett tryckimpregnerat trädäck likställs juridiskt med en stor totalentreprenör – båda producerar farligt avfall och båda ska anteckna det.</p>

<p>På byggarbetsplatsen är det ofta fler fraktioner än man tror. Mineraliskt bygg- och rivningsavfall är en av de största farligt-avfall-strömmarna i Sverige, cirka 261 000 ton per år. Typiska farliga fraktioner du stöter på:</p>

<ul>
<li><strong>Asbest</strong> – i eternitplattor, kitt, isolering och äldre golvmattor.</li>
<li><strong>Impregnerat och tryckimpregnerat virke</strong> – altaner, syllar, staket.</li>
<li><strong>Färg-, lack- och oljerester</strong> – burkar, trasor, spillolja.</li>
<li><strong>PCB-haltigt material</strong> – fogmassor och isolerrutor i hus byggda ca 1956–1973.</li>
<li><strong>Förorenade massor</strong> – jord och fyllnadsmaterial vid mark- och saneringsarbete.</li>
</ul>

<p>Var och en av dessa har sin egen avfallskod och ska hanteras var för sig – det går inte att slå ihop dem i en post.</p>

<h2>Anteckna innan avfallet lämnar bygget</h2>

<p>Tidpunkten är avgörande. Anteckningen ska föras <em>innan</em> avfallet transporteras bort eller behandlas – alltså i god tid före hämtning, inte i efterhand när containern redan är körd. Det tvingar dig att klassificera avfallet medan det fortfarande finns på plats.</p>

<p>För varje typ av farligt avfall ska en avfallsproducent anteckna:</p>

<ul>
<li><strong>Avfallskod</strong> – den sexställiga EWC-koden enligt klassificeringen i avfallsförordningens bilaga.</li>
<li><strong>Var avfallet producerats</strong> – adress eller plats, till exempel byggarbetsplatsens CFAR-nummer.</li>
<li><strong>Vikt i kilogram.</strong></li>
<li><strong>Datum</strong> för transporten.</li>
<li><strong>Transportsätt</strong> och <strong>vem som ska transportera</strong> avfallet.</li>
<li><strong>Mottagare</strong> och den plats där avfallet ska hanteras.</li>
</ul>

<p>De detaljerade kraven finns i avfallsförordningen (2020:614) och i Naturvårdsverkets föreskrifter NFS 2020:5. En viktig varning: avfallsförordningen ändrades den 1 oktober 2025, då bland annat 3 och 4 kap. ersattes och paragrafer numrerades om. Slå därför inte fast exakta paragrafnummer i era rutiner – hänvisa hellre till förordningen och NFS 2020:5 som helhet, så slipper ni bygga in hänvisningar som redan är inaktuella.</p>

<h2>Rapportera till Naturvårdsverkets avfallsregister</h2>

<p>Är avfallet farligt räcker det inte att anteckna internt – uppgifterna ska även rapporteras elektroniskt till Naturvårdsverkets nationella avfallsregister. Registret är en del av Sveriges spårbarhetssystem och underlag för tillsyn, statistik och EU-rapportering.</p>

<p>Fristen är snäv: rapporteringen ska ske <strong>senast två arbetsdagar</strong> från det datum då anteckningen ska vara förd. Rapporteringen görs i Naturvårdsverkets e-tjänst med inloggning via e-legitimation (BankID eller eIDAS-ansluten lösning). Verksamheter som rapporterar ofta kan i stället ansluta sina administrativa system till Naturvårdsverkets API och slippa manuell inmatning vid varje hämtning.</p>

<p>Anteckningarna ska sparas i minst tre år. För den som antecknar i egenskap av transportör är kravet ett år.</p>

<h2>Vem gör vad i kedjan – producent, transportör, mottagare</h2>

<p>Varje aktör i avfallskedjan har sin egen antecknings- och rapporteringsskyldighet. Ta ett konkret fall: en byggfirma river asbest, anlitar en åkare som kör materialet till en godkänd mottagningsanläggning.</p>

<ol>
<li><strong>Byggfirman (producent)</strong> antecknar och rapporterar att avfallet uppstått, med kod, vikt och plats.</li>
<li><strong>Åkaren (transportör)</strong> rapporterar sin del av transporten.</li>
<li><strong>Mottagningsanläggningen</strong> rapporterar mottagandet.</li>
</ol>

<p>Alla tre rapporterar var för sig sina egna uppgifter. Att en underentreprenör eller åkare ordnar bortforslingen befriar alltså inte byggfirman från sin egen producentrapportering. Se också till att transporten utförs av en transportör med rätt tillstånd och att transportdokumentet stämmer med det ni antecknat.</p>

<h2>Vad kostar det att missa?</h2>

<p>Att lämna uppgifter för sent till avfallsregistret ger en miljösanktionsavgift på 5 000 kr, enligt förordningen (2012:259) om miljösanktionsavgifter. Avgiften har gällt sedan 1 januari 2022 och tas ut per försummelse, oavsett om förseningen var avsiktlig eller inte.</p>

<p>Utöver avgiften ökar kostnaden på andra sätt: kommunernas miljötillsyn genomför riktade tillsynskampanjer mot just farligt avfall, och bristande avfallsdokumentation kan slå igenom vid entreprenadbesiktning och i upphandlingar där beställaren ställer spårbarhetskrav. En obruten dokumentationskedja är alltså både en regelfråga och ett konkurrensargument.</p>

<h2>Så bygger du en rutin som håller</h2>

<ol>
<li><strong>Identifiera</strong> de farliga fraktionerna tidigt – i rivnings- eller miljöinventeringen, innan arbetet startar.</li>
<li><strong>Tilldela avfallskod</strong> (EWC) per fraktion redan i planeringen.</li>
<li><strong>Väg och dokumentera</strong> vid varje hämtning – kod, vikt, plats, datum, transportör, mottagare.</li>
<li><strong>Rapportera inom två arbetsdagar</strong> i avfallsregistret.</li>
<li><strong>Arkivera</strong> anteckningarna i minst tre år.</li>
<li><strong>Utse en ansvarig</strong> per projekt så att inget faller mellan stolarna.</li>
<li><strong>Överväg API- eller systemstöd</strong> om ni har många hämtningar.</li>
</ol>

<h2>Så gör du i ByggExp</h2>

<p>ByggExp ersätter inte Naturvårdsverkets e-tjänst – rapporteringen sker fortfarande där. Men verktygen hjälper dig att ha ordning på underlaget som rapporteringen bygger på. Med <a href="/sv/verktyg/egenkontroll-mall">egenkontroll-mallen</a> kopplar du varje hämtning till projekt, avfallskod och ansvarig person, så att uppgifterna finns samlade när tvådagarsfristen börjar ticka. Fler stöd för byggdokumentation hittar du bland <a href="/sv/verktyg">våra gratis verktyg</a>.</p>

<h2>Vanliga frågor</h2>

<h3>Gäller anteckningsplikten även små jobb?</h3>
<p>Ja. Det finns ingen nedre gräns. Så snart din firma yrkesmässigt producerar farligt avfall – oavsett mängd – gäller både anteckningsskyldighet och rapportering till avfallsregistret.</p>

<h3>Räcker transportdokumentet som dokumentation?</h3>
<p>Nej. Transportdokumentet är en del av kedjan, men det ersätter varken din egen anteckning eller den elektroniska rapporteringen till avfallsregistret. De är separata krav.</p>

<h3>Vem rapporterar om entreprenören ordnar allt?</h3>
<p>Varje aktör rapporterar sina egna uppgifter. Att en entreprenör eller åkare sköter bortforslingen tar inte bort din skyldighet som producent att anteckna och rapportera att avfallet uppstått hos dig.</p>

<h3>Vad ändrades den 1 oktober 2025?</h3>
<p>Avfallsförordningen ändrades då bland annat 3 och 4 kap. ersattes och paragrafer numrerades om. Själva skyldigheten att anteckna och rapportera farligt avfall består – men undvik att låsa era rutiner till gamla paragrafnummer.</p>

<h2>Kom igång</h2>

<p>Börja med att lägga in de farliga fraktionerna i <a href="/sv/verktyg/egenkontroll-mall">vår egenkontroll-mall</a> och bygg en rutin som håller hela vägen till avfallsregistret. Vill du se hur det fungerar i ett skarpt projekt? <a href="/sv/contact">Boka en demo</a> så visar vi.</p>

<p>Relaterat: <a href="/sv/blog/rivningsavfall-sorteringskrav-bygg">Rivningsavfall och sorteringskrav</a>, <a href="/sv/blog/nya-asbestregler-2026">Nya asbestregler 2026</a>, <a href="/sv/blog/klimatdeklaration-byggnad-krav">Klimatdeklaration för byggnad – krav</a>.</p>
`;

const A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG: BlogPost = {
  _id: "code-"+"farligt-avfall-anteckningsskyldighet-bygg",
  title: "Farligt avfall och anteckningsskyldighet – vad byggföretaget måste göra 2026", slug: "farligt-avfall-anteckningsskyldighet-bygg", locale: "sv",
  excerpt: "Så uppfyller byggföretaget anteckningsplikten och rapporteringen av farligt avfall till Naturvårdsverkets avfallsregister – från EWC-kod till tvådagarsfristen.", tag: "Regelverk",
  coverImageUrl: "/landing/features/6verktyg.webp", contentHtml: A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG_HTML,
  seoTitle: "Farligt avfall: anteckningsplikt | ByggExp", seoDescription: "Anteckna och rapportera farligt avfall till avfallsregistret – krav, tidsfrister och rutin för byggföretag 2026. Undvik miljösanktionsavgift på 5 000 kr.",
  seoImageUrl: `${SITE_URL}/landing/features/6verktyg.webp`, canonicalUrl: "", noIndex: false, isPublished: true,
  publishedAt: "2026-08-20T08:15:00.000Z", createdAt: "2026-08-20T08:15:00.000Z", updatedAt: "2026-08-20T08:15:00.000Z",
};

export const REGELVERK_ARTICLES: BlogPost[] = [
  PERSONALLIGGARE,
  ID06,
  A_KONTROLLANSVARIG_NAR_BEHOVS,
  A_KONTROLLPLAN_MALL_BYGGLOV,
  A_VATRUMSCERTIFIKAT_BEHORIGHET_GVK,
  A_YRKESBEVIS_BYGG_LARLING,
  A_BOVERKETS_NYA_BYGGREGLER_2026_KONTROLLPLAN,
  A_NYA_BYGGREGLER_2026_ENTREPRENAD,
  A_BEHORIGHETER_CERTIFIERINGAR_LONAR_SIG,
  A_ID06_BESTALLA_KORT_STEG_FOR_STEG,
  A_STARTBESKED_BYGGLOV_PROCESS_2026,
  A_UTSTATIONERING_UTLANDSK_ARBETSKRAFT_BYGG,
  A_KLIMATDEKLARATION_BYGGNAD_KRAV,
  A_RIVNINGSAVFALL_SORTERINGSKRAV_BYGG,
  A_ID06_NYA_KRAV_2026_LEGITIMERING,
  A_RIVNINGSLOV_RIVNINGSANMALAN_BYGG,
  A_FARLIGT_AVFALL_ANTECKNINGSSKYLDIGHET_BYGG,
];
