import type { BlogPost } from '../../types/blog';
import { NO_SITE_URL } from './site-url';

// Norwegian (nb) articles for byggexp.no. Small market — keyword data (Aug 2026)
// shows the demand concentrated on a few terms: "timeregistrering app" (500),
// "timeregistrering app gratis" (500), "stemplingsur" (500); everything else ~50.
// So a lean cluster: one pillar + two supporting, all self-canonical on .no.
// Note: Norwegians search "timeregistrering", NOT "timeføring" (no data).

const P_TIMEREGISTRERING_APP_BYGG_HTML = `
<p>Papirlapper, timer som skrives ned fredag ettermiddag og en administrasjon som jager underlag – manuell timeregistrering koster byggefirmaer både penger og tid. En timeregistrering-app løser det: de ansatte stempler inn og ut på mobilen, timene havner automatisk på riktig prosjekt, og du får ferdig underlag til lønn og faktura uten etterarbeid. Her går vi gjennom hva en timeregistrering-app for bygg bør klare – og hvorfor de fleste velger en enkel løsning i mobilen.</p>
<p>Vil du se hvordan det fungerer? <a href="/nb/blog/gratis-timeregistrering-app">Les om gratis timeregistrering-app</a> eller <a href="/nb/contact">bestill en demo</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-timeregistrering-flyt.webp" alt="Diagram: digital timeregistrering – stemple inn, timer på prosjekt, gjennomgå, eksport til lønn og faktura" width="720" height="380" loading="lazy"><figcaption>Flyten: stemple inn på bygget, timene havner på riktig prosjekt, gjennomgå i webadmin og eksporter til lønn og faktura.</figcaption></figure>

<h2>Hvorfor en timeregistrering-app for byggefirmaer</h2>
<p>På bygg er de ansatte spredt på ulike arbeidsplasser, bytter prosjekt i løpet av dagen og sitter sjelden ved en PC. Derfor må timeregistreringen skje i mobilen – der jobben gjøres. En app gir deg:</p>
<ul>
<li><strong>Riktige timer på riktig prosjekt</strong> – ingen gjetting i etterkant.</li>
<li><strong>Mindre administrasjon</strong> – underlaget lages automatisk.</li>
<li><strong>Raskere fakturering og lønn</strong> – timene er allerede strukturert.</li>
<li><strong>Bedre kontroll på prosjektøkonomien</strong> – timer mot budsjett i sanntid.</li>
</ul>

<h2>Slik fungerer digital timeregistrering i mobilen</h2>
<ol>
<li>Administratoren oppretter prosjektet og de ansatte i webadmin.</li>
<li>Teamet laster ned appen og sjekker inn på bygget – GPS bekrefter at de er på plass.</li>
<li>Ved arbeidsdagens slutt sjekker de ut, og timene bokføres automatisk på prosjektet.</li>
<li>På kontoret gjennomgås og eksporteres timene til lønn eller faktura.</li>
</ol>
<p>Samme app fungerer på både iPhone og Android.</p>

<h2>Enkelt nok til at hele laget bruker det</h2>
<p>Det mest avanserte systemet er verdiløst hvis laget ikke gidder å bruke det. En enkel timeregistrering-app – der man bare sjekker inn og ut – gir høy etterlevelse, og det er etterlevelsen som avgjør om tallene stemmer.</p>

<h2>Fra timer til lønn og faktura</h2>
<p>Verdien kommer når timene brukes: i ByggExp blir de registrerte timene automatisk grunnlag for både lønnsunderlag og fakturalinjer, og regnes inn i prosjektets økonomi. Registrer én gang, bruk overalt.</p>

<h2>Kom i gang</h2>
<p>Vil du se en timeregistrering-app for byggefirmaet ditt? <a href="/nb/blog/gratis-timeregistrering-app">Les om gratis timeregistrering</a>, <a href="/nb/blog/timeliste-app-bygg">digital timeliste</a>, <a href="/nb/blog/stemplingsur-app">stemplingsur-app med GPS</a> eller <a href="/nb/contact">bestill en demo av ByggExp</a>.</p>
<p>Trenger du også oversikt over hvem som er på plassen? Se <a href="/nb/blog/mannskapsliste-byggeplass">mannskapsliste og elektronisk oversiktsliste</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hva er en timeregistrering-app?</h3>
<p>En app der de ansatte registrerer arbeidstid direkte i mobilen – sjekker inn og ut på bygget – slik at timene automatisk havner på riktig prosjekt og blir grunnlag for lønn og faktura, uten papirlapper.</p>
<h3>Fungerer timeregistrering i mobilen på både iPhone og Android?</h3>
<p>Ja. ByggExp-appen finnes for både iPhone og Android, så hele laget kan registrere timer uansett telefon.</p>
<h3>Kan timeregistreringen kobles til lønn og faktura?</h3>
<p>Ja. I ByggExp blir registrerte timer automatisk grunnlag for både lønnsunderlag og fakturalinjer, så du slipper å taste inn de samme tallene flere ganger.</p>
<h3>Finnes det en gratis timeregistrering-app?</h3>
<p>Du kan komme i gang uten kostnad og bestille en gratis demo. Les mer på siden om <a href="/nb/blog/gratis-timeregistrering-app">gratis timeregistrering-app</a>.</p>
`.trim();

const P_TIMEREGISTRERING_APP_BYGG: BlogPost = {
  _id: 'code-nb-timeregistrering-app-bygg',
  title: 'Timeregistrering app for bygg – slik fungerer det',
  slug: 'timeregistrering-app-bygg',
  locale: 'nb',
  excerpt:
    'Timeregistrering-app for bygg: de ansatte stempler inn og ut på mobilen, timene havner på riktig prosjekt og blir grunnlag for lønn og faktura. Slik fungerer digital timeregistrering.',
  tag: 'Digitalisering',
  coverImageUrl: '/landing/features/1arbetspass.webp',
  contentHtml: P_TIMEREGISTRERING_APP_BYGG_HTML,
  seoTitle: 'Timeregistrering app for bygg – GPS, mobil & eksport | ByggExp',
  seoDescription:
    'Timeregistrering-app for byggefirmaer: inn- og utstempling i mobilen med GPS, timer på riktig prosjekt, eksport til lønn og faktura. Enkelt for håndverkere og entreprenører.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/1arbetspass.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-22T12:00:00.000Z',
  createdAt: '2026-08-22T12:00:00.000Z',
  updatedAt: '2026-08-22T12:00:00.000Z',
};

const S_GRATIS_TIMEREGISTRERING_APP_HTML = `
<p>Leter du etter en gratis timeregistrering-app til byggefirmaet? Da er det verdt å vite hva "gratis" faktisk betyr – og hva du bør se etter for at appen skal spare tid i stedet for å bli enda et system som ikke brukes. Her går vi gjennom gratis timeregistrering for bygg og hva du får.</p>
<p>Se hele bildet i vår guide om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-timeregistrering-flyt.webp" alt="Diagram: timeregistrering fra stempling til lønn og faktura" width="720" height="380" loading="lazy"><figcaption>Uansett pris: verdien kommer når timene blir ferdig underlag for lønn og faktura.</figcaption></figure>

<h2>Hva betyr en gratis timeregistrering-app?</h2>
<p>Noen apper er gratis for et lite antall brukere, andre gir en prøveperiode eller demo så du kan teste før du bestemmer deg. Det viktigste er ikke prisen alene, men om appen faktisk gir deg ferdig underlag til lønn og faktura – ellers flytter du bare papirarbeidet.</p>

<h2>Hva du bør se etter</h2>
<ul>
<li>Enkel inn- og utstempling i mobilen (iPhone og Android).</li>
<li>GPS som bekrefter arbeidsplassen.</li>
<li>Kobling til prosjekt, så timene havner riktig.</li>
<li>Eksport til lønn og faktura.</li>
</ul>

<h2>Gratis å teste</h2>
<p>Med ByggExp kan du komme i gang og bestille en gratis demo for å se hvordan timeregistreringen fungerer for firmaet ditt, før du bestemmer deg.</p>

<h2>Kom i gang</h2>
<p>Les om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a> eller <a href="/nb/contact">bestill en gratis demo</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Finnes det en helt gratis timeregistrering-app for bygg?</h3>
<p>Noen løsninger er gratis for få brukere eller i en prøveperiode. Det viktigste er at appen gir ferdig underlag til lønn og faktura – test gjerne med en gratis demo først.</p>
<h3>Hva bør en gratis timeregistrering-app minst klare?</h3>
<p>Enkel inn- og utstempling i mobilen, GPS, kobling til prosjekt og eksport til lønn og faktura.</p>
`.trim();

const S_GRATIS_TIMEREGISTRERING_APP: BlogPost = {
  _id: 'code-nb-gratis-timeregistrering-app',
  title: 'Gratis timeregistrering app for bygg – hva du får',
  slug: 'gratis-timeregistrering-app',
  locale: 'nb',
  excerpt:
    'Gratis timeregistrering-app for bygg: hva "gratis" betyr, hva du bør se etter, og hvordan du tester med en gratis demo før du bestemmer deg.',
  tag: 'Digitalisering',
  coverImageUrl: '/landing/features/1arbetspass.webp',
  contentHtml: S_GRATIS_TIMEREGISTRERING_APP_HTML,
  seoTitle: 'Gratis timeregistrering app for bygg | ByggExp',
  seoDescription:
    'Gratis timeregistrering-app for byggefirmaer: hva du får, hva du bør se etter (GPS, prosjekt, eksport til lønn og faktura) og hvordan du tester med en gratis demo.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/1arbetspass.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-22T12:10:00.000Z',
  createdAt: '2026-08-22T12:10:00.000Z',
  updatedAt: '2026-08-22T12:10:00.000Z',
};

const S_STEMPLINGSUR_APP_HTML = `
<p>Et stemplingsur på veggen fungerer dårlig når de ansatte er ute på ulike bygg. Et stemplingsur som app løser det samme i mobilen: den ansatte stempler inn og ut direkte på arbeidsplassen, og GPS bekrefter at det skjer der jobben gjøres. Her går vi gjennom hvordan et stemplingsur-app med GPS fungerer for byggefirmaer.</p>
<p>Se hele bildet i vår guide om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-stemplingsur-gps.webp" alt="Diagram: stemplingsur-app med GPS – stemple inn i mobilen, GPS bekrefter arbeidsplassen, oppmøte registrert" width="720" height="380" loading="lazy"><figcaption>Stemple inn i mobilen, GPS bekrefter arbeidsplassen og oppmøtet registreres – på både Android og iPhone.</figcaption></figure>

<h2>Hva er et stemplingsur-app?</h2>
<p>Et stemplingsur-app erstatter det fysiske stemplingsuret med mobilen. I stedet for å dra et kort ved en terminal trykker den ansatte "Stemple inn" når arbeidsdagen begynner og "Stemple ut" når den slutter. Tiden registreres automatisk og kobles til riktig prosjekt.</p>

<h2>Hvorfor GPS på stemplingsuret</h2>
<p>GPS-funksjonen bekrefter at innstemplingen skjer på arbeidsplassen, ikke hjemme fra sofaen. Det gir arbeidslederen trygghet for at timene stemmer, og den ansatte en enkel måte å vise oppmøte på. For firmaer med folk på flere prosjekter er GPS det som gjør mobilstempling pålitelig.</p>

<h2>Stemplingsur-app for Android og iPhone</h2>
<p>Et byggelag har sjelden samme telefon. Derfor bør stemplingsuret finnes for både Android og iPhone, med samme funksjon. ByggExp-appen fungerer på begge.</p>

<h2>Fra stempling til lønn og faktura</h2>
<p>Et stemplingsur er bare halve jobben – verdien kommer når timene brukes. I ByggExp blir de stemplede timene automatisk grunnlag for lønn og faktura, og regnes inn i prosjektøkonomien.</p>

<h2>Kom i gang</h2>
<p>Les om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a> eller <a href="/nb/contact">bestill en demo av ByggExp</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hva er et stemplingsur-app?</h3>
<p>En app som erstatter det fysiske stemplingsuret – den ansatte stempler inn og ut i mobilen, og tiden registreres automatisk på riktig prosjekt.</p>
<h3>Hvordan fungerer GPS i et stemplingsur-app?</h3>
<p>Når den ansatte stempler inn, bekrefter GPS-posisjonen at det skjer på arbeidsplassen. Det gjør mobilstempling pålitelig og reduserer diskusjoner om timer i etterkant.</p>
<h3>Finnes stemplingsur-app for både Android og iPhone?</h3>
<p>Ja. ByggExp-appen finnes for både Android og iPhone med samme funksjon.</p>
`.trim();

const S_STEMPLINGSUR_APP: BlogPost = {
  _id: 'code-nb-stemplingsur-app',
  title: 'Stemplingsur app med GPS for byggefirmaer',
  slug: 'stemplingsur-app',
  locale: 'nb',
  excerpt:
    'Stemplingsur som app: de ansatte stempler inn og ut i mobilen, og GPS bekrefter oppmøtet på arbeidsplassen. For både Android og iPhone.',
  tag: 'Digitalisering',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: S_STEMPLINGSUR_APP_HTML,
  seoTitle: 'Stemplingsur app med GPS for bygg (Android & iPhone) | ByggExp',
  seoDescription:
    'Stemplingsur som app med GPS for byggefirmaer: inn- og utstempling i mobilen, oppmøte bekreftet på arbeidsplassen, for Android og iPhone. Timene blir lønn og faktura.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-22T12:20:00.000Z',
  createdAt: '2026-08-22T12:20:00.000Z',
  updatedAt: '2026-08-22T12:20:00.000Z',
};

const F_FAKTURERINGSPROGRAM_BYGG_HTML = `
<p>For et byggefirma henger fakturering tett sammen med timene og prosjektet: du vil fakturere loggede timer, materiell og tillegg – med riktig MVA og forfallsdato – uten å taste inn alt på nytt. Et faktureringsprogram for bygg gjør nettopp det. Her går vi gjennom hva et faktureringsprogram for byggefirmaer bør klare.</p>
<p>Grunnlaget er registrert tid – se <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>.</p>

<h2>Hva et faktureringsprogram for bygg bør klare</h2>
<ul>
<li>Fakturere loggede timer og materiell direkte fra prosjektet.</li>
<li>Riktig <strong>MVA</strong> (standardsats 25 % i Norge) og forfallsdato.</li>
<li>KID-nummer og kontonummer for enkel betaling.</li>
<li>Oversikt over ubetalte og betalte fakturaer.</li>
</ul>
<p>Sjekk alltid aktuelle MVA-satser og fakturakrav hos Skatteetaten.</p>

<h2>Fra time til faktura</h2>
<p>Poenget er å slippe dobbeltarbeid: timene teamet stempler blir automatisk fakturalinjer, og fakturaen henger sammen med prosjektets økonomi. Registrer én gang, bruk overalt.</p>

<h2>Kom i gang</h2>
<p>Vil du se hvordan tid blir faktura i ByggExp? <a href="/nb/blog/timeregistrering-app-bygg">Les om timeregistrering</a> eller <a href="/nb/contact">bestill en demo</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hva bør et faktureringsprogram for byggefirma klare?</h3>
<p>Fakturere loggede timer og materiell fra prosjektet, med riktig MVA (25 %), forfallsdato, KID og kontonummer, samt oversikt over ubetalte fakturaer.</p>
<h3>Hvilken MVA-sats gjelder for byggetjenester i Norge?</h3>
<p>Standard MVA-sats er 25 %. Sjekk alltid aktuelle satser og regler hos Skatteetaten.</p>
<h3>Kan fakturaen bygge på timene teamet registrerer?</h3>
<p>Ja. I ByggExp blir loggede timer automatisk fakturalinjer, så du slipper å taste inn tallene på nytt.</p>
`.trim();

const F_FAKTURERINGSPROGRAM_BYGG: BlogPost = {
  _id: 'code-nb-faktureringsprogram-bygg',
  title: 'Faktureringsprogram for bygg – faktura fra timer og MVA',
  slug: 'faktureringsprogram-bygg',
  locale: 'nb',
  excerpt:
    'Faktureringsprogram for byggefirmaer: fakturer loggede timer og materiell fra prosjektet, med riktig MVA (25 %), KID og forfallsdato. Slik velger du rett.',
  tag: 'Digitalisering',
  coverImageUrl: '/landing/features/8fakturor.webp',
  contentHtml: F_FAKTURERINGSPROGRAM_BYGG_HTML,
  seoTitle: 'Faktureringsprogram for bygg – faktura fra timer & MVA | ByggExp',
  seoDescription:
    'Faktureringsprogram for byggefirmaer: fakturer loggede timer og materiell direkte fra prosjektet, med riktig MVA (25 %), KID og forfallsdato. Fra time til faktura.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/8fakturor.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-08-22T12:30:00.000Z',
  createdAt: '2026-08-22T12:30:00.000Z',
  updatedAt: '2026-08-22T12:30:00.000Z',
};

// --- Cluster 2: mannskapsliste / oversiktsliste (byggherreforskriften § 15) ---
// Norway's equivalent of the Swedish personalliggare. Regulatory topic written
// from a Norwegian source (Arbeidstilsynet / byggherreforskriften), NOT translated
// from the sv personalliggare article. Honest product framing: ByggExp documents
// attendance (GPS innsjekk), it is not marketed as a certified HMS-kort reader.

const M_MANNSKAPSLISTE_BYGGEPLASS_HTML = `
<p>På norske bygge- og anleggsplasser er det krav om en <strong>elektronisk oversiktsliste</strong> over alle som utfører arbeid – i praksis kalt en mannskapsliste. Kravet følger av byggherreforskriften, og ansvaret ligger hos byggherren. Her går vi gjennom hva en mannskapsliste er, hva den skal inneholde, når kravet gjelder og hvordan digital oppmøteregistrering hjelper deg å holde oversikt.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-mannskapsliste-krav.webp" alt="Diagram: elektronisk oversiktsliste – hva som registreres (navn, fødselsdato, arbeidsgiver, HMS-kort-nummer) og krav etter § 15" width="720" height="380" loading="lazy"><figcaption>Elektronisk oversiktsliste etter byggherreforskriften § 15: hva som registreres og hvilke krav som gjelder.</figcaption></figure>

<h2>Hva er en mannskapsliste?</h2>
<p>En mannskapsliste er en oversikt over hvem som utfører arbeid på en bygge- eller anleggsplass. Mange i bransjen sier «mannskapsliste» eller «elektronisk mannskapsliste», mens byggherreforskriften bruker begrepet <strong>oversiktsliste</strong>. Det er samme sak: en løpende oversikt over personene på plassen.</p>

<h2>Kravet i byggherreforskriften § 15</h2>
<p>Etter byggherreforskriften § 15 skal byggherren sørge for at det føres en oversiktsliste over alle som utfører arbeid på bygge- eller anleggsplassen. Kravene i korte trekk:</p>
<ul>
<li><strong>Elektronisk</strong> – listen skal føres elektronisk.</li>
<li><strong>Oppdateres daglig</strong> – kontrolleres og holdes à jour hver dag.</li>
<li><strong>Byggherrens ansvar</strong> – byggherren skal sørge for at listen føres (oppgaven kan settes bort, men ansvaret består).</li>
<li><strong>Alle på plassen</strong> – også underentreprenører og innleide.</li>
</ul>
<p>Sjekk alltid gjeldende ordlyd og krav hos <a href="https://www.arbeidstilsynet.no" rel="nofollow noopener" target="_blank">Arbeidstilsynet</a>, siden regelverket kan endres.</p>

<h2>Hva skal oversiktslisten inneholde?</h2>
<p>Listen skal identifisere hvem som er på plassen og for hvem de jobber. Typisk registreres:</p>
<ul>
<li>Navn og fødselsdato.</li>
<li>Arbeidsgiver (virksomheten personen jobber for).</li>
<li><strong>HMS-kort-nummer</strong> – knytter personen til riktig virksomhet.</li>
<li>Opplysninger om selve bygge- eller anleggsplassen og byggherren.</li>
</ul>
<p>For å bli registrert kreves et gyldig HMS-kort, som utstedes på grunnlag av en arbeidskontrakt. Les mer i vår guide om <a href="/nb/blog/hms-kort-bygg">HMS-kort for byggeplass</a>.</p>

<h2>Når gjelder kravet?</h2>
<p>Kravet om elektronisk oversiktsliste gjelder på bygge- og anleggsplasser der det utføres arbeid som krever byggetillatelse eller sentral godkjenning, og hvor minst én virksomhet utfører arbeid som næring. Er du i tvil om et konkret prosjekt omfattes, sjekk kravene hos Arbeidstilsynet.</p>

<h2>Digital oppmøteregistrering gir deg oversikt</h2>
<p>Uansett hvordan den formelle oversiktslisten føres, trenger du å vite hvem som faktisk er på plassen og når. Med ByggExp sjekker de ansatte inn og ut på bygget i mobilen, og GPS bekrefter oppmøtet. Da får du en digital, tidsstemplet oversikt over hvem som var på jobb og hvor – god dokumentasjon å ha i bunn.</p>
<p>Merk: ByggExp er et verktøy for timeregistrering og oppmøte, ikke en sertifisert HMS-kort-leser. For den lovpålagte elektroniske oversiktslisten etter § 15 – med HMS-kort-registrering – må du kontrollere kravene hos Arbeidstilsynet og velge en løsning som oppfyller dem.</p>

<h2>Kom i gang</h2>
<p>Vil du ha digital oversikt over oppmøte og timer på bygget? Les om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>, <a href="/nb/blog/hms-kort-bygg">HMS-kort</a> eller <a href="/nb/contact">bestill en demo av ByggExp</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hva er forskjellen på mannskapsliste og oversiktsliste?</h3>
<p>Det er samme sak. «Mannskapsliste» er bransjens dagligtale, mens byggherreforskriften bruker begrepet «oversiktsliste» om den lovpålagte oversikten over alle som arbeider på plassen.</p>
<h3>Hvem har ansvaret for oversiktslisten?</h3>
<p>Byggherren skal sørge for at listen føres elektronisk, kontrolleres og oppdateres daglig. Selve føringen kan settes bort til andre, men ansvaret ligger hos byggherren.</p>
<h3>Hva må registreres i mannskapslisten?</h3>
<p>Blant annet navn, fødselsdato, arbeidsgiver og HMS-kort-nummer for alle som utfører arbeid på plassen – også underentreprenører og innleide.</p>
<h3>Gjelder kravet for små byggeplasser?</h3>
<p>Kravet gjelder bygge- og anleggsplasser der det utføres arbeid som krever byggetillatelse eller sentral godkjenning, og hvor minst én virksomhet arbeider som næring. Sjekk det konkrete prosjektet mot kravene hos Arbeidstilsynet.</p>
`.trim();

const M_MANNSKAPSLISTE_BYGGEPLASS: BlogPost = {
  _id: 'code-nb-mannskapsliste-byggeplass',
  title: 'Mannskapsliste på byggeplass – krav og elektronisk oversiktsliste',
  slug: 'mannskapsliste-byggeplass',
  locale: 'nb',
  excerpt:
    'Mannskapsliste (elektronisk oversiktsliste) på byggeplass: krav etter byggherreforskriften § 15, hva den skal inneholde, HMS-kort og hvem som har ansvaret.',
  tag: 'Regelverk',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: M_MANNSKAPSLISTE_BYGGEPLASS_HTML,
  seoTitle: 'Mannskapsliste på byggeplass – oversiktsliste (§ 15) | ByggExp',
  seoDescription:
    'Mannskapsliste / elektronisk oversiktsliste på byggeplass: krav etter byggherreforskriften § 15, innhold (navn, fødselsdato, arbeidsgiver, HMS-kort), ansvar og når kravet gjelder.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-09-07T12:00:00.000Z',
  createdAt: '2026-09-07T12:00:00.000Z',
  updatedAt: '2026-09-07T12:00:00.000Z',
};

const H_HMS_KORT_BYGG_HTML = `
<p>Et HMS-kort er det personlige ID-kortet alle som jobber på norske bygge- og anleggsplasser skal ha. Kortet viser hvem du er og hvilken virksomhet du jobber for, og kreves blant annet for å bli registrert i mannskapslisten (oversiktslisten). Her forklarer vi hva et HMS-kort er, hvordan du får det, og hvordan det henger sammen med oversiktslisten på plassen.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-hms-kort.webp" alt="Diagram: HMS-kort – fra arbeidskontrakt til utstedt kort, registrering i oversiktslisten og adgang til byggeplassen" width="720" height="380" loading="lazy"><figcaption>HMS-kortet utstedes på grunnlag av en arbeidskontrakt og kreves for å stå på oversiktslisten.</figcaption></figure>

<h2>Hva er et HMS-kort?</h2>
<p>HMS-kortet (tidligere kalt byggekort/ID-kort) er et personlig kort som identifiserer arbeidstakeren og arbeidsgiveren på bygge- og anleggsplasser. Formålet er å gjøre det enkelt å se hvem som er på plassen og for hvem de jobber – både av hensyn til sikkerhet og for å motvirke useriøse aktører.</p>

<h2>Hvordan får du HMS-kort?</h2>
<p>HMS-kort bestilles av arbeidsgiveren og utstedes på grunnlag av et gyldig ansettelsesforhold. Kort forklart:</p>
<ol>
<li>Arbeidstakeren har en <strong>arbeidskontrakt</strong> hos en registrert virksomhet.</li>
<li>Arbeidsgiveren bestiller HMS-kortet gjennom den offisielle ordningen.</li>
<li>Kortet <strong>utstedes</strong> til den ansatte og er personlig.</li>
<li>Med gyldig kort kan personen <strong>registreres i oversiktslisten</strong> og få adgang til plassen.</li>
</ol>
<p>Sjekk den offisielle søknadsprosessen og gjeldende krav hos <a href="https://www.arbeidstilsynet.no" rel="nofollow noopener" target="_blank">Arbeidstilsynet</a>.</p>

<h2>HMS-kort og mannskapsliste henger sammen</h2>
<p>HMS-kort-nummeret er en av opplysningene som skal registreres i den elektroniske oversiktslisten. Uten gyldig HMS-kort kan ikke personen føres på listen – derfor er kortet en forutsetning for lovlig arbeid på plassen. Les mer om <a href="/nb/blog/mannskapsliste-byggeplass">mannskapsliste og elektronisk oversiktsliste</a>.</p>

<h2>Digital oversikt på plassen</h2>
<p>Selve HMS-kortet dokumenterer identitet og arbeidsgiver, mens du fortsatt trenger å vite hvem som faktisk er på jobb og hvor lenge. Med ByggExp sjekker de ansatte inn og ut i mobilen, med GPS-bekreftelse, slik at du får en tidsstemplet oversikt over oppmøtet – og timene blir samtidig grunnlag for lønn og faktura. ByggExp erstatter ikke selve HMS-kortet, men gir deg den daglige oversikten over mannskapet.</p>

<h2>Kom i gang</h2>
<p>Vil du ha digital oppmøte- og timeoversikt på bygget? Les om <a href="/nb/blog/mannskapsliste-byggeplass">mannskapsliste</a>, <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a> eller <a href="/nb/contact">bestill en demo</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hvem må ha HMS-kort?</h3>
<p>Alle som utfører arbeid på bygge- og anleggsplasser skal ha personlig HMS-kort som viser identitet og arbeidsgiver.</p>
<h3>Hvordan søker man om HMS-kort?</h3>
<p>Arbeidsgiveren bestiller kortet gjennom den offisielle ordningen, basert på et gyldig ansettelsesforhold. Se Arbeidstilsynet for oppdatert søknadsprosess.</p>
<h3>Hva har HMS-kort med mannskapslisten å gjøre?</h3>
<p>HMS-kort-nummeret registreres i den elektroniske oversiktslisten (mannskapslisten). Uten gyldig kort kan ikke personen føres på listen.</p>
`.trim();

const H_HMS_KORT_BYGG: BlogPost = {
  _id: 'code-nb-hms-kort-bygg',
  title: 'HMS-kort for byggeplass – hva det er og hvordan du får det',
  slug: 'hms-kort-bygg',
  locale: 'nb',
  excerpt:
    'HMS-kort for byggeplass: hva kortet er, hvordan du får det, og hvordan det henger sammen med mannskapslisten (den elektroniske oversiktslisten).',
  tag: 'Regelverk',
  coverImageUrl: '/landing/features/3personal.webp',
  contentHtml: H_HMS_KORT_BYGG_HTML,
  seoTitle: 'HMS-kort for bygg – krav, søknad og oversiktsliste | ByggExp',
  seoDescription:
    'HMS-kort for byggeplass: hva det er, hvordan arbeidsgiveren søker, og hvordan HMS-kort-nummeret henger sammen med mannskapslisten / elektronisk oversiktsliste (§ 15).',
  seoImageUrl: `${NO_SITE_URL}/landing/features/3personal.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-09-07T12:10:00.000Z',
  createdAt: '2026-09-07T12:10:00.000Z',
  updatedAt: '2026-09-07T12:10:00.000Z',
};

const T_TIMELISTE_APP_BYGG_HTML = `
<p>Timeliste på papir – utfylt på slutten av uka etter hukommelsen – gir upresise timer og mye etterarbeid. En timeliste-app løser det: de ansatte fører timene direkte i mobilen mens de er på bygget, og du får ferdig underlag til lønn og faktura. Her går vi gjennom hva en god timeliste-app for bygg bør klare.</p>
<p>Timeliste og timeregistrering er to ord for det samme – se også vår guide om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>.</p>
<figure class="article-diagram"><img src="/landing/diagrams/nb-timeregistrering-flyt.webp" alt="Diagram: digital timeliste – stemple inn, timer på prosjekt, gjennomgå, eksport til lønn og faktura" width="720" height="380" loading="lazy"><figcaption>Digital timeliste: timene føres i mobilen, havner på riktig prosjekt og blir grunnlag for lønn og faktura.</figcaption></figure>

<h2>Hvorfor digital timeliste for bygg?</h2>
<p>På bygg er folk ute på ulike plasser og bytter prosjekt i løpet av dagen. En papirtimeliste blir lett unøyaktig og forsinket. En timeliste-app gir deg:</p>
<ul>
<li><strong>Riktige timer på riktig prosjekt</strong> – ført der og da, ikke etter hukommelsen.</li>
<li><strong>Mindre administrasjon</strong> – underlaget lages automatisk.</li>
<li><strong>Raskere lønn og fakturering</strong> – timene er allerede strukturert.</li>
<li><strong>Kontroll på prosjektøkonomien</strong> – timer mot budsjett i sanntid.</li>
</ul>

<h2>Timeliste-app vs. timeliste-mal (PDF)</h2>
<p>En gratis timeliste-mal i PDF eller Excel er et greit utgangspunkt for helt små firmaer, men den må fylles ut manuelt, samles inn og tastes videre til lønn. En app fjerner det dobbeltarbeidet: timene registreres én gang og brukes overalt. Vokser firmaet, blir appen fort mer lønnsom enn malen.</p>

<h2>Slik fungerer det</h2>
<ol>
<li>Administratoren oppretter prosjektene og de ansatte i webadmin.</li>
<li>Teamet fører timer i appen – sjekker inn og ut på bygget, med GPS-bekreftelse.</li>
<li>Timene bokføres automatisk på riktig prosjekt.</li>
<li>På kontoret gjennomgås og eksporteres timelisten til lønn og faktura.</li>
</ol>
<p>Samme app fungerer på både iPhone og Android.</p>

<h2>Fra timeliste til lønn og faktura</h2>
<p>Verdien kommer når timene brukes: i ByggExp blir den registrerte timelisten automatisk grunnlag for både lønnsunderlag og fakturalinjer, og regnes inn i prosjektets økonomi. Registrer én gang, bruk overalt.</p>

<h2>Kom i gang</h2>
<p>Vil du bytte papirtimelisten med en app? Les om <a href="/nb/blog/timeregistrering-app-bygg">timeregistrering-app for bygg</a>, <a href="/nb/blog/stemplingsur-app">stemplingsur-app med GPS</a> eller <a href="/nb/contact">bestill en gratis demo av ByggExp</a>.</p>

<h2>Vanlige spørsmål</h2>
<h3>Hva er en timeliste-app?</h3>
<p>En app der de ansatte fører arbeidstimene sine direkte i mobilen mens de er på bygget, slik at timene automatisk havner på riktig prosjekt og blir grunnlag for lønn og faktura – uten papirtimelister.</p>
<h3>Er timeliste og timeregistrering det samme?</h3>
<p>Ja, i praksis. «Timeliste» er den daglige oversikten over timene, mens «timeregistrering» beskriver selve det å registrere dem. En timeliste-app gjør begge deler.</p>
<h3>Bør jeg bruke en gratis timeliste-mal eller en app?</h3>
<p>En mal (PDF/Excel) kan holde for de aller minste, men krever manuell innsamling og inntasting. En app fjerner dobbeltarbeidet og gir ferdig underlag til lønn og faktura.</p>
<h3>Fungerer timeliste-appen på både iPhone og Android?</h3>
<p>Ja. ByggExp-appen finnes for både iPhone og Android, så hele laget kan føre timer uansett telefon.</p>
`.trim();

const T_TIMELISTE_APP_BYGG: BlogPost = {
  _id: 'code-nb-timeliste-app-bygg',
  title: 'Timeliste app for bygg – digital timeliste i mobilen',
  slug: 'timeliste-app-bygg',
  locale: 'nb',
  excerpt:
    'Timeliste-app for bygg: de ansatte fører timene i mobilen på riktig prosjekt, og du får ferdig underlag til lønn og faktura. Timeliste-app vs. gratis mal.',
  tag: 'Digitalisering',
  coverImageUrl: '/landing/features/1arbetspass.webp',
  contentHtml: T_TIMELISTE_APP_BYGG_HTML,
  seoTitle: 'Timeliste app for bygg – digital timeliste i mobilen | ByggExp',
  seoDescription:
    'Timeliste-app for byggefirmaer: før timene i mobilen på riktig prosjekt, med GPS, og få ferdig underlag til lønn og faktura. Timeliste-app vs. gratis timeliste-mal.',
  seoImageUrl: `${NO_SITE_URL}/landing/features/1arbetspass.webp`,
  canonicalUrl: '',
  noIndex: false,
  isPublished: true,
  publishedAt: '2026-09-07T12:20:00.000Z',
  createdAt: '2026-09-07T12:20:00.000Z',
  updatedAt: '2026-09-07T12:20:00.000Z',
};

export const NB_ARTICLES: BlogPost[] = [
  P_TIMEREGISTRERING_APP_BYGG,
  S_GRATIS_TIMEREGISTRERING_APP,
  S_STEMPLINGSUR_APP,
  F_FAKTURERINGSPROGRAM_BYGG,
  M_MANNSKAPSLISTE_BYGGEPLASS,
  H_HMS_KORT_BYGG,
  T_TIMELISTE_APP_BYGG,
];
