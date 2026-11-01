// Norwegian (nb) commercial feature pages for byggexp.no, /nb/funksjoner/<slug>.
// Rendered by src/pages/[lang]/funksjoner/[slug].tsx with the same template as
// /sv/funktioner/<slug> (components/FunktionPage/FunktionPageView.tsx).
//
// Keywords: docs/seo/keywords-norway-funksjoner-2026-11.md (Keyword Planner, NO).
// Claims ONLY from docs/seo/product-facts-verified.md incl. the section
// "Verified for NO feature pages (2026-11-01)" (code-checked file:line).
// Never on these pages: Swedish-only things (ROT, AGI, SIE4, Fortnox/Visma,
// Skatteverket, ID06, traktamente, personalliggare, omvänd byggmoms), any
// Norwegian integration (none exist), mannskapsliste/HMS-kort reader (not
// shipped), offline mode, digital signing of offers, competitor names.
// Prices: same numbers as Pricing.tsx, in NOK (owner 2026-11-01).
//
// Regulation links (all opened and checked 2026-11-01):
// - Arbeidsmiljøloven kap. 10 (§ 10-7 oversikt over arbeidstid, § 10-6 overtid):
//   https://lovdata.no/lov/2005-06-17-62
// - Internkontrollforskriften § 5 (systematisk HMS-arbeid, skriftlig dokumentasjon):
//   https://lovdata.no/forskrift/1996-12-06-1127
// - SAK10 § 10-1 (kvalitetssikringsrutiner, bokstav d: identifisere, behandle og
//   lukke avvik) og § 12-4 (ansvarlig utførende: utførelsen kvalitetssikret):
//   https://lovdata.no/forskrift/2010-03-26-488
// - TEK17 (tekniske krav som egenkontrollen dokumenterer):
//   https://lovdata.no/forskrift/2017-06-19-840

import { PROJEKT_PRICE } from '../components/Pricing/Pricing';
import { localeOrigin } from '../lib/seo';
import { ext, illu, labelTables, type FunktionPage } from './funktion-pages';

const KOMPLETT_PRICE = 990;
const EXTRA_USER_PRICE = 69;

const LOV_AML = 'https://lovdata.no/lov/2005-06-17-62';
const LOV_IK = 'https://lovdata.no/forskrift/1996-12-06-1127';
const LOV_SAK10 = 'https://lovdata.no/forskrift/2010-03-26-488';

export type FunksjonPageNb = FunktionPage & {
  /** sv feature page with the same intent → reciprocal hreflang sv ↔ nb. */
  svPair?: string;
};

/* ------------------------------------------------------------------------- */
/* 4. KS-system (egenkontroll, sjekklister, dagbok)                           */
/* ------------------------------------------------------------------------- */
// Claims code-checked 2026-11-01, see product-facts-verified.md "Verified for NO
// feature pages": own checklist templates (control point + reference), category,
// per-point result Godkjent/Anmerkning/Ikke aktuelt, photos per point, method/
// requirement/measured value, anmerkning → tiltak with done date (app), comment
// + date per point (web), signing with name + date only when every point is
// answered, signed = locked; dagbok with avvik field (web); project documents.
// NOT claimed: Norwegian PDF/print (checklist PDF is Swedish-only), sending to
// customer, standalone avvik module with assignee/status, risk analysis/SJA,
// HMS-kort reader, mannskapsliste, AI drafting from contract, starter templates
// (their texts are Swedish), GPS/EXIF on photos.
// Regulation: SAK10 § 10-1 (rutiner for kvalitetssikring, inkl. avvik) and
// § 12-4 (ansvarlig utførende) – lovdata.no/forskrift/2010-03-26-488;
// internkontrollforskriften § 5 – lovdata.no/forskrift/1996-12-06-1127.

const KS_SYSTEM: FunksjonPageNb = {
  slug: 'ks-system',
  plan: 'projekt',
  priceIncluded: 'Egenkontroll, sjekklister og dagbok er inkludert',
  heroCheck: 'Sjekklister i appen',
  title: 'KS-system for bygg – egenkontroll og sjekklister | ByggExp',
  description:
    'KS-system for byggefirma: egne sjekklister, egenkontroll med bilder per punkt, anmerkninger med tiltak, signering og byggedagbok. Prøv gratis i 14 dager.',
  name: 'KS-system',
  h1: 'KS-system for bygg.',
  h1Accent: 'Egenkontroll med bilder, rett fra bygget.',
  lead: 'Sjekklister i appen, bilder per punkt og signert kontroll per prosjekt.',
  hero: {
    name: 'resursplanering-egenkontroll',
    alt: 'Bygningsarbeider med hjelm holder et nettbrett med haker foran en åpen bindingsverksvegg mens en kollega bærer frem en gipsplate',
  },
  stepsHeading: ['Dokumenter', 'kvaliteten'],
  steps: [
    {
      title: 'Bilder fra bygget',
      text: 'Bildene tas i appen og havner på prosjektet med dato og person.',
      img: '/landing/features/4foto-1200.webp',
      alt: 'Bilder i ByggExp: bilder fra byggeplassen samlet per prosjekt i webadmin og i mobilappen',
    },
    {
      title: 'Byggedagbok',
      text: 'Utført arbeid, mannskap, vær, avvik og bilder per dag.',
      img: '/landing/funktioner/screen-dagbok-1200.webp',
      alt: 'Dagbok i ByggExp: dagens notat med vær, mannskap, utført arbeid og avvik',
    },
    {
      title: 'Tiltak med frist',
      text: 'Oppgaver med ansvarlig, frist og påminnelser til de er lukket.',
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Ny oppgave i ByggExp med ansvarlig, frist og påminnelse i webadmin og i mobilappen',
    },
  ],
  body: `
<p>Et KS-system for bygg er rutinene og verktøyet som viser at jobben er gjort riktig: hva som skulle kontrolleres, hvem som kontrollerte, hva som ble funnet og hva som ble gjort med det. I ByggExp lager du egne sjekklister for egenkontroll, fyller dem ut i appen på byggeplassen med bilder per punkt, og signerer kontrollen når alle punktene er besvart. Byggedagboken, bildene og dokumentene ligger på samme prosjekt. Her går vi gjennom hva regelverket krever, hvordan egenkontrollen fungerer i ByggExp, og hva systemet ikke gjør.</p>

<h2>Hva er et KS-system i byggebransjen?</h2>
<p>KS står for kvalitetssikring. I byggesaker følger kravet av ${ext(LOV_SAK10, 'byggesaksforskriften (SAK10)')} § 10-1: et foretak med ansvarsrett skal ha rutiner som sikrer at kravene i plan- og bygningsloven blir oppfylt. Rutinene skal blant annet omfatte å identifisere og dokumentere at relevante krav er oppfylt, og å identifisere, behandle og lukke avvik. Etter § 12-4 har ansvarlig utførende ansvar for at utførelsen er kvalitetssikret og i samsvar med produksjonsunderlaget.</p>
<p>I praksis betyr det tre ting for et byggefirma:</p>
<ul>
<li><strong>Sjekklister</strong> for arbeidet dere utfører, med kontrollpunkter og hvilke krav de bygger på.</li>
<li><strong>Egenkontroll</strong> underveis: punktene sjekkes av, med dato, navn og gjerne bilde.</li>
<li><strong>Avvik</strong> som blir registrert og fulgt opp til de er lukket.</li>
</ul>
<p>KS er ikke det samme som HMS. HMS handler om helse, miljø og sikkerhet for de som jobber, og følger av arbeidsmiljøloven og ${ext(LOV_IK, 'internkontrollforskriften')}. Mange firma kaller det samlet for et HMS- og KS-system, og vernerunden kan fint gjennomføres som en egen sjekkliste.</p>

${illu('feat-uppgifter-morgonmote', 'Tre bygningsarbeidere med hjelm står ved en stor sjekkliste med haker mens en av dem peker på listen')}

<h2>Slik fungerer egenkontrollen i ByggExp</h2>
<ol>
<li><strong>Lag sjekklistemalen.</strong> I webadmin bygger du en mal med kontrollpunkter. Hvert punkt har en tekst og en referanse, for eksempel kravet i TEK17 eller produsentens monteringsanvisning. Malen får en kategori: kvalitet, miljø, arbeidsmiljø eller annet.</li>
<li><strong>Start egenkontrollen på prosjektet.</strong> Kontrollen knyttes til et prosjekt, med tittel og adresse.</li>
<li><strong>Sjekk punktene på bygget.</strong> I appen får hvert punkt resultatet godkjent, anmerkning eller ikke aktuelt. Du kan føre metode, krav, måleverdi med enhet og hvem som kontrollerte og når.</li>
<li><strong>Ta bilde per punkt.</strong> Bildet legges på kontrollpunktet, slik at det er lett å vise hvordan det så ut før det ble lukket inne.</li>
<li><strong>Følg opp anmerkningene.</strong> Får et punkt anmerkning, skriver du tiltaket og datoen det ble utført. En anmerkning uten utført tiltak står som åpen.</li>
<li><strong>Signer kontrollen.</strong> Når alle punktene er besvart, signerer administrator eller prosjektadministrator med navn og dato. En signert kontroll kan ikke endres.</li>
</ol>
<p>Kontrollen kan også fylles ut i webadmin, med dato og kommentar per punkt. Webadmin og appen finnes på norsk.</p>

<h2>Sjekkliste for bygg: hva bør den inneholde?</h2>
<p>En god sjekkliste er kort nok til å bli brukt og konkret nok til å bevise noe. Bruk gjerne denne strukturen:</p>
<div class="article-table"><table>
<thead><tr><th>Felt</th><th>Hvorfor</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Kontrollpunkt</strong></td><td>Hva som skal sjekkes, én ting per punkt</td><td>Tekst per punkt i malen</td></tr>
<tr><td><strong>Referanse</strong></td><td>Hvilket krav punktet bygger på</td><td>Referanse per punkt</td></tr>
<tr><td><strong>Resultat</strong></td><td>Godkjent eller ikke – uten tolkning</td><td>Godkjent, anmerkning eller ikke aktuelt</td></tr>
<tr><td><strong>Måleverdi</strong></td><td>Fall, avstand, fuktighet og lignende</td><td>Måleverdi med enhet i appen</td></tr>
<tr><td><strong>Bilde</strong></td><td>Bevis for det som blir skjult</td><td>Bilder per punkt</td></tr>
<tr><td><strong>Tiltak</strong></td><td>Hva som ble gjort med anmerkningen</td><td>Tiltak og utført-dato</td></tr>
<tr><td><strong>Signatur</strong></td><td>Hvem som står for kontrollen</td><td>Navn og dato, låst etter signering</td></tr>
</tbody>
</table></div>
<p>Start med de fagene og arbeidene der feil koster mest å rette: våtrom, tetthet, brann og alt som lukkes inne. En sjekkliste per arbeidsoperasjon er bedre enn én lang liste for hele bygget.</p>

${illu('byggdagbok-foto', 'Bygningsarbeider med hjelm fotograferer en vegg av blokker med mobilen')}

<h2>Eksempel: egenkontroll for bad</h2>
<p>Et bad er et typisk arbeid der feil blir dyre, fordi det meste lukkes inne. En egenkontroll kan ha punkter som disse, med referanse til produsentens monteringsanvisning og kravene i prosjektet:</p>
<ul>
<li>Underlaget er rett, rent og tørt før membranen legges – måleverdi for fukt der det er relevant.</li>
<li>Fall mot sluk er kontrollert – måleverdi i millimeter per meter.</li>
<li>Sluk og mansjett er montert etter anvisningen – bilde før flislegging.</li>
<li>Rørgjennomføringer er tettet – bilde av hver gjennomføring.</li>
<li>Membranen har riktig tykkelse og overlapp – bilde og eventuell måling.</li>
<li>Tid for tørk og herding er overholdt – dato.</li>
</ul>
<p>Med bilde på hvert punkt kan du vise hvordan badet så ut under flisene, også flere år etter. Får et punkt anmerkning, skriver du tiltaket og datoen det ble rettet, før neste fag starter.</p>

<h2>Fem vanlige feil i egenkontrollen</h2>
<ol>
<li><strong>Kontrollen fylles ut etterpå.</strong> En sjekkliste som krysses av på kontoret når bygget er ferdig, beviser lite. Fyll den ut på bygget mens arbeidet er synlig.</li>
<li><strong>Punktene er for generelle.</strong> «Arbeidet utført iht. krav» kan ikke kontrolleres. Skriv hva som skal sjekkes, og hva som er godt nok.</li>
<li><strong>Ingen bilder av det som skjules.</strong> Membran, isolasjon og gjennomføringer er borte når neste fag er ferdig. Ta bildet før.</li>
<li><strong>Anmerkninger blir liggende.</strong> En anmerkning uten tiltak og dato er et åpent avvik. Gå gjennom de åpne hver uke.</li>
<li><strong>Malen blir aldri bedre.</strong> Når samme feil dukker opp på to prosjekter, legg inn et nytt kontrollpunkt i malen.</li>
</ol>

<h2>Hvem gjør hva</h2>
<ul>
<li><strong>Fagarbeideren</strong> fyller ut egenkontrollen i appen mens arbeidet pågår, og tar bildene.</li>
<li><strong>Arbeidslederen</strong> går gjennom anmerkningene, følger opp tiltakene og fører dagboken.</li>
<li><strong>Prosjektlederen eller daglig leder</strong> signerer kontrollen når alle punktene er besvart, og forbedrer malene.</li>
</ul>

<h2>Byggedagbok som en del av KS</h2>
<p>Sjekklisten viser at et bestemt arbeid er kontrollert. Dagboken viser hva som skjedde på bygget hver dag. I ByggExp fører du dagboken per prosjekt og dag i webadmin, med vær og temperatur, antall på jobb, utført arbeid, avvik, materiell, notater og bilder. Feltet for avvik er fritekst: skriv hva som ble oppdaget, og opprett en oppgave med ansvarlig og frist for tiltaket.</p>
<p>Oppgavene får påminnelser til de er gjort, og forfalte oppgaver kan sendes videre til sjefen. Slik blir avviket fulgt opp i stedet for å bli liggende i en notatbok.</p>

<h2>Dokumentasjon på ett sted</h2>
<p>Når kunden, byggherren eller kommunen spør, skal dokumentasjonen være lett å finne. I ByggExp ligger dette på prosjektet:</p>
<ul>
<li><strong>Egenkontroller</strong> med resultat, bilder og signatur.</li>
<li><strong>Bilder</strong> fra appen, med dato og hvem som tok dem.</li>
<li><strong>Dagbok</strong> dag for dag.</li>
<li><strong>Dokumenter og tegninger</strong>, lastet opp i webadmin eller fra appen.</li>
</ul>

<h2>Hva som er med – og ikke med – i ByggExp</h2>
<p>Det er bedre å vite det før dere starter:</p>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Egne sjekklister og egenkontroll</strong></td><td>Ja, i webadmin og appen, på norsk</td></tr>
<tr><td><strong>Bilder per kontrollpunkt</strong></td><td>Ja</td></tr>
<tr><td><strong>Anmerkning med tiltak og dato</strong></td><td>Ja</td></tr>
<tr><td><strong>Signering og låsing</strong></td><td>Ja, med navn og dato</td></tr>
<tr><td><strong>Byggedagbok med avvik</strong></td><td>Ja, i webadmin</td></tr>
<tr><td><strong>Egen avviksmodul med saksgang</strong></td><td>Nei. Avvik følges opp som anmerkning, i dagboken og som oppgaver</td></tr>
<tr><td><strong>Risikovurdering og SJA</strong></td><td>Nei. Bruk vår gratis <a href="/nb/blog/sikker-jobb-analyse">mal for sikker jobb-analyse</a></td></tr>
<tr><td><strong>Utskrift av kontrollen på norsk</strong></td><td>Ikke ennå. PDF-utskriften er foreløpig ikke oversatt</td></tr>
<tr><td><strong>HMS-kortleser og mannskapsliste</strong></td><td>Nei. Les om kravene i guiden om <a href="/nb/blog/mannskapsliste-byggeplass">mannskapsliste og oversiktsliste</a></td></tr>
</tbody>
</table></div>

${illu('projekthantering-overlamning', 'Prosjektleder med hjelm gir nøklene til et glad par foran et nybygd hvitt hus')}

<h2>Kom i gang med et enkelt KS-system</h2>
<p>Et KS-system trenger ikke være en tykk perm. Det viktigste er at kontrollen faktisk blir gjort mens arbeidet pågår:</p>
<ol>
<li><strong>Lag tre maler</strong> for arbeidene dere gjør oftest.</li>
<li><strong>Kjør én egenkontroll per arbeidsoperasjon</strong> på neste prosjekt, med bilde på punktene som lukkes inne.</li>
<li><strong>Gå gjennom anmerkningene ukentlig</strong> og lukk dem med tiltak og dato.</li>
<li><strong>Signer kontrollen</strong> når arbeidet er ferdig, og forbedre malen med det dere lærte.</li>
</ol>
<p>Egenkontroll, sjekklister og dagbok er med i pakken Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva. med 10 brukere, sammen med timeregistrering og planlegging. Du prøver alle funksjoner gratis i 14 dager. Ta også en titt på vår <a href="/nb/blog/sha-plan">guide til SHA-plan</a> og <a href="/nb/maler/sha-plan-sjekkliste.html" target="_blank" rel="noopener">gratis SHA-sjekkliste</a>.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er et KS-system?',
      answer:
        'Rutinene og verktøyet et byggefirma bruker for å sikre og dokumentere at arbeidet oppfyller kravene: sjekklister, egenkontroll og oppfølging av avvik. Kravet følger av byggesaksforskriften § 10-1 for foretak med ansvarsrett.',
    },
    {
      question: 'Hva er egenkontroll i bygg?',
      answer:
        'At den som utfører arbeidet selv kontrollerer det mot kravene og dokumenterer resultatet, typisk med en sjekkliste, bilder og signatur. I ByggExp fyller du ut egenkontrollen i appen på byggeplassen.',
    },
    {
      question: 'Kan jeg lage egne sjekklister?',
      answer:
        'Ja. Du lager maler med kontrollpunkter og referanse i webadmin, og bruker dem på hvert prosjekt.',
    },
    {
      question: 'Kan jeg legge ved bilder i sjekklisten?',
      answer:
        'Ja. Bilder tas i appen og legges på det enkelte kontrollpunktet.',
    },
    {
      question: 'Hvordan håndteres avvik?',
      answer:
        'Et punkt med anmerkning får et tiltak og en utført-dato. Uten utført tiltak står anmerkningen som åpen. Avvik kan også føres i dagboken og følges opp som oppgaver med frist. Det finnes ingen egen avviksmodul med saksgang.',
    },
    {
      question: 'Kan egenkontrollen endres etter at den er signert?',
      answer:
        'Nei. En signert egenkontroll er låst. Signering er bare mulig når alle punktene er besvart med godkjent, anmerkning eller ikke aktuelt.',
    },
    {
      question: 'Kan fagarbeiderne fylle ut sjekklisten i mobilen?',
      answer:
        'Ja. Egenkontrollen fylles ut i appen på iPhone og Android, med resultat, måleverdi og bilder per punkt. Appen finnes på norsk.',
    },
    {
      question: 'Er KS og HMS det samme?',
      answer:
        'Nei. KS handler om at bygget blir riktig, HMS om sikkerheten og helsen til de som jobber. Mange firma samler dem i ett system. I ByggExp kan for eksempel en vernerunde kjøres som en egen sjekkliste.',
    },
    {
      question: 'Hva koster KS-systemet i ByggExp?',
      answer: `Egenkontroll, sjekklister og dagbok er med i Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva. med 10 brukere. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. Du prøver gratis i 14 dager.`,
    },
  ],
  related: [
    { href: '/nb/blog/dokumentera-med-foton-pa-bygget', label: 'Dokumenter med bilder på byggeplassen' },
    { href: '/nb/blog/sha-plan', label: 'SHA-plan' },
    { href: '/nb/blog/sikker-jobb-analyse', label: 'Sikker jobb-analyse (SJA)' },
    { href: '/nb/blog/byggherreforskriften', label: 'Byggherreforskriften' },
    { href: '/nb/blog/hantera-uppgifter-i-byggprojekt', label: 'Oppgaver i byggeprosjekter' },
    { href: '/nb/funksjoner/prosjektstyringsverktoy', label: 'Prosjektstyringsverktøy for bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 1. Timeregistrering app                                                    */
/* ------------------------------------------------------------------------- */
// Replaces /nb/blog/timeregistrering-app-bygg (301, next.config.mjs). Claims:
// product-facts "Tidrapportering / Arbetspass" (GPS, geofence pause, hour type,
// attest, PDF/Excel, payroll CSV). Not claimed: AGI, SIE4, traktamente,
// personalliggare, ID06, offline, automatic overtime calculation.

const TIMEREGISTRERING: FunksjonPageNb = {
  slug: 'timeregistrering-app',
  svPair: 'tidrapporteringssystem-bygg',
  plan: 'projekt',
  priceIncluded: 'Timeregistrering og attest er inkludert',
  heroCheck: 'iPhone og Android',
  title: 'Timeregistrering app for bygg – GPS og attest | ByggExp',
  description:
    'Timeregistrering-app for byggefirma: stemple inn med GPS, timer per prosjekt, attest og eksport til PDF, Excel og lønn. Alle funksjoner gratis i 14 dager.',
  name: 'Timeregistrering-app',
  h1: 'Timeregistrering app for bygg.',
  h1Accent: 'Fra stempling til lønn.',
  lead: 'Riktige timer på riktig prosjekt, attestert og klare for lønn og faktura.',
  hero: {
    name: 'tidrapporteringssystem-incheckning',
    alt: 'Bygningsarbeider med hjelm sjekker inn med mobilen ved en byggeplass med stillas og en kartmarkør',
  },
  stepsHeading: ['Tre steg', 'til lønn'],
  steps: [
    {
      title: 'Stemple inn på bygget',
      text: 'Innsjekk med GPS i appen. Økten settes på pause når man forlater arbeidsplassen.',
      bullets: ['Timer per prosjekt', 'Normal, overtid eller ubekvem tid', 'Reisetid i kilometer og minutter'],
      img: '/landing/features/1arbetspass-1200.webp',
      alt: 'Arbeidsøkter i ByggExp: timer per ansatt og dag i webadmin og i mobilappen',
    },
    {
      title: 'Gå gjennom timene',
      text: 'Planlagt, GPS og manuelt – per ansatt og dag.',
      img: '/landing/funktioner/screen-tidrapport-1200.webp',
      alt: 'Timeoversikt i ByggExp: timer per ansatt og dag for to uker, filtrert på planlagt, GPS og manuelt',
    },
    {
      title: 'Attester og eksporter',
      text: 'Godkjenn øktene og ta ut grunnlaget.',
      bullets: ['Timeliste som PDF og Excel', 'Lønnsgrunnlag som CSV', 'Faktura fra timene'],
      img: '/landing/features/3personal-1200.webp',
      alt: 'Oversikt i ByggExp over hvem som er på jobb nå, per prosjekt',
    },
  ],
  body: `
<p>En timeregistrering-app for bygg skal få riktige timer inn på riktig prosjekt, uten at noen sitter og fører over lapper på fredag. I ByggExp stempler de ansatte inn og ut i mobilen, timetypen velges på økten, og arbeidslederen attesterer i webadmin. Etterpå går grunnlaget videre til lønn, faktura og prosjektøkonomi. Her ser du hvordan flyten fungerer, hva loven krever av timeføringen, og hva du bør sjekke før du velger app.</p>

<h2>Slik fungerer timeregistreringen i ByggExp</h2>
<ol>
<li><strong>Du legger inn prosjekter og ansatte.</strong> I webadmin oppretter du prosjektene med adresse og legger inn de ansatte. Hver av dem laster ned appen til iPhone eller Android.</li>
<li><strong>Den ansatte stempler inn på arbeidsplassen.</strong> Innsjekken skjer med GPS. Forlater den ansatte prosjektområdet, settes økten automatisk på pause, slik at turen til byggevarehuset ikke blir arbeidstid på feil prosjekt.</li>
<li><strong>Eller fører timene manuelt.</strong> Ikke alle vil dele posisjonen sin, og det trenger de ikke. Timene kan føres manuelt per prosjekt og dag, og havner i samme oversikt som GPS-timene.</li>
<li><strong>Økten får riktig timetype.</strong> På hver økt velges normal tid, overtid eller ubekvem arbeidstid. Reisetid legges til i kilometer og minutter.</li>
<li><strong>Arbeidslederen attesterer.</strong> Administrator eller prosjektadministrator går gjennom øktene og godkjenner dem.</li>
<li><strong>Grunnlaget går videre.</strong> Timelisten eksporteres som PDF eller Excel, og lønnsgrunnlaget som CSV til lønnssystemet dere bruker.</li>
</ol>
<p>Den ansatte trenger altså bare å gjøre to ting: sjekke inn når dagen starter og velge riktig timetype. Resten skjer i webadmin hos den som har ansvar for lønn og prosjekter.</p>

${illu('stampelklocka-projektbyte', 'Bygningsarbeider med hjelm går ut av en servicebil ved et hus med stillas og ser på mobilen, med en blå kartmarkør over')}

<h2>Hva loven krever av timeføringen</h2>
<p>${ext(LOV_AML, 'Arbeidsmiljøloven')} § 10-7 krever at det finnes en oversikt over hvor mye den enkelte arbeidstaker har arbeidet. Oversikten skal være tilgjengelig for arbeidstakeren, verneombudet og Arbeidstilsynet. En timeliste på papir oppfyller kravet i teorien, men bare hvis den faktisk blir fylt ut, samlet inn og tatt vare på.</p>
<p>Overtid har egne grenser. Etter § 10-6 kan overtid som hovedregel ikke overstige 10 timer per uke, 25 timer over fire uker og 200 timer i løpet av et år, og det skal betales et tillegg på minst 40 prosent. Tariffavtalen dere følger kan ha egne regler for overtid og ubekvem arbeidstid, så sjekk alltid den gjeldende avtalen.</p>
<p>I ByggExp velger den ansatte timetype for hver økt. Systemet regner ikke ut tariffavtalens regler automatisk. Det betyr at dere selv avgjør hva som er overtid, for eksempel når arbeidslederen har pålagt den, og at attesten blir kontrollpunktet. Når timetypen ligger på hver økt, ser du raskt hvem som nærmer seg grensene.</p>

${illu('tidrapporteringssystem-kvallsgjutning', 'Betongbil støper en plate i kveldslys under en arbeidslampe, en bygningsarbeider trekker av betongen og en arbeidsleder ser på mobilen')}

<h2>GPS eller manuelt – dere velger</h2>
<p>GPS gir arbeidslederen trygghet for at innstemplingen skjer på bygget og ikke hjemme. Samtidig er posisjon en personopplysning, og de ansatte skal vite hva som registreres og hvorfor. I ByggExp brukes posisjonen ved inn- og utstempling og for å sette økten på pause når noen forlater prosjektområdet. Vil en ansatt ikke dele posisjon, fører han timene manuelt i appen.</p>
<p>I timeoversikten ser du planlagte timer, GPS-timer og manuelle timer side om side for hver ansatt og dag. Avvik mellom plan og faktisk tid blir tydelige før du attesterer, ikke når lønnen allerede er utbetalt.</p>

${illu('tidrapporteringssystem-attest', 'Kvinne ved skrivebordet arbeider på en datamaskin som viser en ukeplan og en klokke')}

<h2>Fra timer til lønn, faktura og prosjektøkonomi</h2>
<p>Verdien av timeregistreringen kommer når timene brukes. I ByggExp registreres hver time én gang og brukes videre tre steder:</p>
<ul>
<li><strong>Lønn.</strong> De attesterte timene per ansatt og timetype eksporteres som CSV, klare for lønnssystemet.</li>
<li><strong>Faktura.</strong> I timeoversikten sender du timene for et prosjekt og en periode rett over til en faktura, så du slipper å taste dem inn på nytt. Fakturering er med i pakken Full kontroll.</li>
<li><strong>Prosjektøkonomi.</strong> Timene havner på prosjektet, og i Full kontroll ser du hva arbeidet koster mot budsjettet mens prosjektet pågår. Les mer om <a href="/nb/funksjoner/prosjektstyringsverktoy">prosjektstyringsverktøyet</a>.</li>
</ul>

<h2>Timeliste i Excel eller app?</h2>
<p>Mange starter med en timeliste i Excel, og for to–tre personer på ett prosjekt kan det holde. Det blir tungt når flere lag jobber på flere bygg samtidig:</p>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>Timeliste i Excel</th><th>Timeregistrering-app</th></tr></thead>
<tbody>
<tr><td><strong>Timer på riktig prosjekt</strong></td><td>Fylles ut i etterkant, ofte etter hukommelsen</td><td>Registreres når økten starter</td></tr>
<tr><td><strong>Innsamling</strong></td><td>Ark og bilder i SMS hver uke</td><td>Timene ligger i systemet med en gang</td></tr>
<tr><td><strong>Overtid og ubekvem tid</strong></td><td>Egen kolonne som ofte glemmes</td><td>Timetype på hver økt</td></tr>
<tr><td><strong>Godkjenning</strong></td><td>Signatur på papir eller ingen</td><td>Attest i webadmin</td></tr>
<tr><td><strong>Lønn og faktura</strong></td><td>Tastes inn på nytt</td><td>Eksport og faktura fra timene</td></tr>
</tbody>
</table></div>
<p>Vil du starte enkelt? Last ned vår <a href="/nb/blog/timeliste-mal">gratis timeliste-mal i Excel</a>. Når du er lei av å samle inn ark, flytter du over til appen.</p>

<h2>Timeregistrering for ansatte – slik får du alle med</h2>
<p>Et enkelt system som hele laget bruker gir riktigere tall enn et avansert system som halve laget hopper over. Dette fungerer i praksis:</p>
<ul>
<li><strong>Start med ett prosjekt.</strong> La ett lag bruke appen i to uker før resten følger etter.</li>
<li><strong>Forklar GPS-en.</strong> Fortell hva som registreres, når, og at manuell føring er et alternativ.</li>
<li><strong>Attester hver uke.</strong> Når arbeidslederen går gjennom timene fast, blir feil rettet mens alle husker hva som skjedde.</li>
<li><strong>Bruk timetypen fra dag én.</strong> Da slipper du å rekonstruere overtid ved månedsslutt.</li>
</ul>
<p>Vi hjelper dere gratis med å flytte over prosjekter og ansatte fra systemet dere bruker i dag.</p>

<h2>Slik ser uken ut for arbeidslederen</h2>
<p>Med timene i appen blir oppfølgingen en fast rutine i stedet for en jakt på lapper. Mandag ser arbeidslederen hvem som er sjekket inn på hvilket prosjekt. I løpet av uken dukker avvikene opp i timeoversikten: en som har glemt å stemple ut, en dag med uvanlig mange timer, overtid som ikke var avtalt. De rettes mens folk husker hva som skjedde. Fredag går arbeidslederen gjennom uken per ansatt og dag og attesterer. Ved månedsslutt er timene allerede godkjent, og lønnsgrunnlaget kan tas ut med en gang.</p>

<h2>Dette bør du sjekke før du velger app</h2>
<p>Det finnes mange apper for timeregistrering, og de fleste kan registrere en time. Forskjellen ligger i hva som skjer før og etter. Gå gjennom disse punktene, gjerne med en av dem som skal bruke appen hver dag:</p>
<ol>
<li><strong>Hvor raskt går inn- og utstemplingen?</strong> Tar det mer enn noen sekunder, blir det gjort i etterkant – og da er du tilbake til hukommelsen.</li>
<li><strong>Kan timene føres uten GPS?</strong> Noen ansatte vil ikke dele posisjon. Da må det finnes en manuell vei som havner i samme oversikt.</li>
<li><strong>Hvordan håndteres overtid og ubekvem tid?</strong> Timetypen bør ligge på økten, ikke i en kommentar.</li>
<li><strong>Hvem godkjenner, og hvor?</strong> Attesten bør skje på ett sted, med oversikt per ansatt og dag.</li>
<li><strong>Hva kan du ta ut?</strong> Timeliste som PDF eller Excel og lønnsgrunnlag som fil er et minimum.</li>
<li><strong>Henger timene sammen med resten?</strong> Planlegging, faktura og prosjektøkonomi i samme system sparer deg for dobbeltføring.</li>
</ol>
<p>Test appen på et ekte prosjekt i prøveperioden, ikke på et demoprosjekt. Først da ser du om laget faktisk bruker den.</p>

<h2>Timeregistrering for små bedrifter</h2>
<p>For et firma med tre–fem ansatte er gevinsten ofte størst. Det er gjerne daglig leder som både jobber på bygget, samler inn timelister og lager lønn og faktura. Når timene ligger i systemet med en gang, blir fredagen kortere: du går gjennom uken, attesterer og tar ut grunnlaget. Kontroll på jobben dekker 10 brukere, så de fleste små firma betaler bare grunnprisen.</p>

<h2>Hva koster en timeregistrering-app?</h2>
<p>Timeregistrering, attest og eksport er med i pakken Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva., med 10 brukere inkludert. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. Vil du også fakturere timene og se prosjektøkonomien, velger du Full kontroll for ${KOMPLETT_PRICE} NOK. Du prøver alle funksjoner gratis i 14 dager, uten oppstartsavgift og uten bindingstid.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er en timeregistrering-app?',
      answer:
        'En app der de ansatte registrerer arbeidstid i mobilen ved å sjekke inn og ut på bygget. Timene havner på riktig prosjekt og blir, når de er attestert, grunnlag for lønn og faktura.',
    },
    {
      question: 'Finnes det en gratis timeregistrering-app?',
      answer:
        'Du kan prøve ByggExp med alle funksjoner gratis i 14 dager, uten startavgift og uten bindingstid. Vil du heller bruke papir eller Excel, er timeliste-malen vår gratis.',
    },
    {
      question: 'Må de ansatte dele posisjonen sin?',
      answer:
        'Nei. GPS brukes ved inn- og utstempling, men den som ikke vil dele posisjon kan føre timene manuelt per prosjekt og dag i appen.',
    },
    {
      question: 'Regner appen ut overtid automatisk?',
      answer:
        'Nei. Den ansatte velger timetype for hver økt: normal, overtid eller ubekvem arbeidstid. Arbeidslederen kontrollerer valget når timene attesteres.',
    },
    {
      question: 'Kan timene eksporteres til lønn?',
      answer:
        'Ja. Timelisten eksporteres som PDF eller Excel, og lønnsgrunnlaget som CSV per ansatt og timetype.',
    },
    {
      question: 'Kan de ansatte føre timer på flere prosjekter samme dag?',
      answer:
        'Ja. Den ansatte stempler ut på ett prosjekt og inn på det neste, eller fører timene manuelt per prosjekt og dag.',
    },
    {
      question: 'Fungerer appen uten nett?',
      answer:
        'Appen trenger nettforbindelse når du stempler inn og ut. Er dekningen dårlig, kan timene føres manuelt i etterkant.',
    },
    {
      question: 'Hva koster timeregistrering i ByggExp?',
      answer: `Kontroll på jobben koster ${PROJEKT_PRICE} NOK per måned eks. mva. med 10 brukere og timeregistrering, attest og planlegging. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. De første 14 dagene er gratis.`,
    },
  ],
  related: [
    { href: '/nb/blog/timeliste-app-bygg', label: 'Digital timeliste for bygg' },
    { href: '/nb/blog/timeliste-mal', label: 'Gratis timeliste-mal i Excel' },
    { href: '/nb/blog/automatisk-tidrapportering-och-export', label: 'Slik eksporterer du timer' },
    { href: '/nb/blog/timepris-snekker', label: 'Timepris for snekker' },
    { href: '/nb/verktyg/timpris-kalkylator', label: 'Timepriskalkulator' },
    { href: '/nb/funksjoner/bemanningsplan', label: 'Bemanningsplan' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 3. Prosjektstyringsverktøy                                                 */
/* ------------------------------------------------------------------------- */
// Replaces /nb/blog/prosjektstyring-bygg (301): that post's title/meta already
// targeted "prosjektstyring system / prosjektstyringsverktøy" (commercial intent),
// so keeping both would split the same query (architecture rule A).
// Economy (budget, prosjektøkonomi, prosjektkalkyle, lønnsomhet) is in Kontroll
// på pengene / Full kontroll; Gantt + Bemanning in Kontroll på jobben / Full
// kontroll → plan 'komplett'. Not claimed: Norwegian PDFs, offer → project,
// integrations, machines in the plan.

const PROSJEKTSTYRING: FunksjonPageNb = {
  slug: 'prosjektstyringsverktoy',
  plan: 'komplett',
  priceIncluded: 'Plan, timer, kalkyle og prosjektøkonomi i én pakke',
  heroCheck: 'Margin per prosjekt',
  title: 'Prosjektstyringsverktøy for bygg – plan og margin | ByggExp',
  description:
    'Prosjektstyringsverktøy for bygg: Gantt, oppgaver med frister, timer på prosjektet, prosjektkalkyle og etterkalkyle med margin. Prøv gratis i 14 dager.',
  name: 'Prosjektstyringsverktøy',
  h1: 'Prosjektstyringsverktøy for bygg.',
  h1Accent: 'Plan, timer og margin samlet.',
  lead: 'Se hvor prosjektet står – og om det tjener penger – mens det pågår.',
  hero: {
    name: 'projekthantering-oversikt',
    alt: 'Prosjektleder står ved en stor oversiktstavle med kort og diagrammer foran et hus under oppføring med stillas',
  },
  stepsHeading: ['Plan, oppgaver', 'og økonomi'],
  steps: [
    {
      title: 'Planlegg prosjektet',
      text: 'Gantt per prosjekt eller per ansatt, med endringslogg.',
      bullets: ['To uker, måned eller egen periode', 'Bemanning dag for dag', 'Varsel ved overbooking'],
      img: '/landing/features/5planering-1200.webp',
      alt: 'Planlegging i ByggExp: Gantt-skjema med prosjekter og ansatte over flere uker',
    },
    {
      title: 'Følg opp oppgavene',
      text: 'Oppgaver med ansvarlig, frist og påminnelser.',
      bullets: ['Prioritet og gjentakelse', 'Påminnelse til det er gjort', 'Bilder og dokumenter på prosjektet'],
      img: '/landing/features/2uppgift-1200.webp',
      alt: 'Ny oppgave i ByggExp med ansvarlig, frist og påminnelse i webadmin og i mobilappen',
    },
    {
      title: 'Se marginen',
      text: 'Timer, materiell, kostnader og fakturert per prosjekt.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Prosjektøkonomi i ByggExp: timer, kostnader, materiell, fakturert og margin mot budsjett',
    },
  ],
  body: `
<p>Et prosjektstyringsverktøy for bygg samler planen, oppgavene, timene og økonomien i ett system, slik at du vet hvor prosjektet står før det skjærer seg. I ByggExp planlegger du i Gantt, fordeler laget dag for dag, følger opp oppgaver med frister og ser timer, materiell og fakturert mot budsjettet per prosjekt. Prosjektkalkylen lager du før jobben, og samme kalkyle viser de faktiske tallene etterpå. Her går vi gjennom hva et prosjektstyringssystem for byggefirma bør klare, og hvordan du bruker det fra kalkyle til etterkalkyle.</p>

<h2>Hva bør et prosjektstyringsverktøy for bygg klare?</h2>
<p>Generelle prosjektverktøy er laget for kontorprosjekter med oppgaver og frister. Et byggeprosjekt har i tillegg folk på flere arbeidsplasser, timer som skal på riktig prosjekt, materiell, tillegg og en margin som kan forsvinne underveis. Se etter dette:</p>
<ul>
<li><strong>Planlegging</strong> – tidsplan i Gantt, per prosjekt og per ansatt.</li>
<li><strong>Bemanning</strong> – hvem er på hvilket bygg hver dag, med fravær og varsel ved overbooking.</li>
<li><strong>Oppgaver og frister</strong> – ansvarlig, frist og påminnelser til oppgaven er gjort.</li>
<li><strong>Timer på prosjektet</strong> – timene laget fører i mobilen havner på riktig prosjekt.</li>
<li><strong>Dokumentasjon</strong> – bilder, tegninger og dokumenter samlet på prosjektet.</li>
<li><strong>Økonomi</strong> – kalkyle, budsjett, kostnader og margin per prosjekt, mens det pågår.</li>
</ul>
<p>Mangler én av disse, ender det ofte med et regneark ved siden av, og da er det regnearket som blir sannheten.</p>

${illu('projekthantering-ritning', 'Prosjektleder og bygningsarbeider med hjelm ser sammen på en blå tegning på et arbeidsbord på byggeplassen')}

<h2>Plan og oppgaver</h2>
<p>I Planlegging legger du opp prosjektene i Gantt, med visning per prosjekt eller per ansatt og periode på to uker, en måned eller egendefinert. Endringsloggen viser hva som er flyttet. I Bemanning fordeler du laget dag for dag; godkjent fravær vises, og du får varsel når noen har mer enn 8 timer på en dag. Mer om dette på siden om <a href="/nb/funksjoner/bemanningsplan">bemanningsplan</a>, og om hvordan du setter opp <a href="/nb/blog/framdriftsplan">en fremdriftsplan</a>.</p>
<p>Oppgaver opprettes per prosjekt med ansvarlig, frist og prioritet. Oppgaven kan gjentas, for eksempel hver dag eller hver ukedag, og appen minner den ansvarlige på til den er gjort. Forfalte oppgaver kan sendes videre til sjefen. De ansatte ser oppgavene sine og prosjektets tidsplan i appen, og legger bilder og dokumenter rett på prosjektet.</p>

<h2>Fra timer til prosjektøkonomi</h2>
<p>Det er her prosjektstyringen blir konkret. Timene de ansatte fører i <a href="/nb/funksjoner/timeregistrering-app">timeregistrering-appen</a> havner på prosjektet. På prosjektets økonomiside angir du kostpris og utfakturert pris per time, og ByggExp regner ut:</p>
<ul>
<li><strong>Arbeid</strong> – førte timer × kostpris, timer × fakturert pris og margin på arbeidet.</li>
<li><strong>Kostnader</strong> – materiell, bestilt materiell, leverandørfakturaer, utlegg og godkjente tillegg.</li>
<li><strong>Resultat</strong> – fakturert minus total kostnad, i kroner og prosent.</li>
</ul>
<p>Kvitteringer som de ansatte skanner med mobilkameraet, og inngående fakturaer, havner på prosjektet. Les mer om <a href="/nb/blog/fota-kvitton-och-hantera-utlagg">kvitteringshåndtering for byggefirma</a>.</p>

${illu('feat-ekonomi-veckoavstamning', 'Bygningsarbeider med hjelm står foran et husskjelett med et nettbrett med søylediagram, ved siden av en kasse med gullmynter')}

<h2>Kalkyleprogram for bygg: prosjektkalkylen</h2>
<p>Prosjektkalkylen er et regneark laget for byggefirma. Du setter inntekter mot kostnader og ser med en gang hva som blir igjen:</p>
<ol>
<li><strong>Inntektssiden.</strong> Tabeller for inntekter, med MVA per tabell eller rad.</li>
<li><strong>Kostnadssiden.</strong> Tabeller for materiell, lønn og andre kostnader, med de kolonnene du selv vil ha.</li>
<li><strong>Sammendraget.</strong> Kostnader mot fortjeneste og margin i prosent.</li>
</ol>
<p>Kalkylen kan knyttes til et prosjekt, lagres som mal og brukes igjen neste gang du regner på en lignende jobb. Den eksporteres til Excel, og har du allerede regnet i Excel, leser du inn filen. Skal en kollega eller regnskapsføreren se tallene, lager du en lenke som bare kan leses. Vil du sjekke timeprisen eller påslaget, bruk <a href="/nb/verktyg/timpris-kalkylator">timepriskalkulatoren</a> og <a href="/nb/verktyg/paslag-marginal-kalkylator">påslag- og marginkalkulatoren</a>.</p>

<h3>Regneeksempel: påslag eller margin?</h3>
<p>Et bad koster 88 900 kroner i materiell, arbeid og underentreprenør. Vil du ha 20 % margin på prisen, deler du kostnaden på 0,8 og får 111 125 kroner eks. mva. Legger du i stedet 20 % påslag på kostnaden, blir prisen 106 680 kroner og marginen knapt 17 %. Forskjellen mellom påslag og margin er en av de vanligste regnefeilene i byggkalkyler.</p>

<h2>Etterkalkyle: lær av hvert prosjekt</h2>
<p>Kalkylen er en prognose. Først når jobben er ferdig vet du om den holdt. Når prosjektkalkylen er knyttet til et prosjekt, henter den inn prosjektets faktiske inntekter (sendte og betalte fakturaer) og kostnader (leverandørfakturaer, godkjente utlegg og lønn) og viser dem ved siden av det du kalkulerte. Det er etterkalkylen, uten at noen må lage den i et eget ark.</p>
<p>Still tre spørsmål etter hvert større prosjekt:</p>
<ol>
<li><strong>Holdt timene?</strong> Regnet dere med 70 timer og brukte 90, trenger neste kalkyle et annet timeantall for samme jobb.</li>
<li><strong>Holdt materiellet?</strong> Svinn, prisøkninger og ekstra innkjøp vises først i etterkant.</li>
<li><strong>Hva ble ikke fakturert?</strong> Tilleggsarbeid som aldri ble registrert, er tapte penger.</li>
</ol>
<p>Lagre så den oppdaterte kalkylen som mal. I Lønnsomhet sammenligner du fakturert, materiell, arbeid og margin mellom prosjektene, og i Budsjett følger du plan mot faktisk resultat måned for måned.</p>

${illu('offert-kalkyl-marginal', 'Person ved et skrivebord foran en skjerm med et sektordiagram og en stigende pil')}

<h2>Prosjektregnskap uten dobbeltarbeid</h2>
<p>Prosjektregnskap betyr at inntekter og kostnader føres per prosjekt, slik at du ser resultatet for hver jobb og ikke bare for firmaet. ByggExp er ikke et regnskapsprogram, men samler grunnlaget per prosjekt: timer, kvitteringer, leverandørfakturaer, fakturaer og lønn. Regnskapsføreren fører regnskapet som før, og du får et prosjektregnskap å styre etter mens jobben pågår.</p>

<h2>Slik setter du opp et prosjekt</h2>
<ol>
<li><strong>Lag prosjektkalkylen.</strong> Regn på inntekter og kostnader, og lagre den som mal hvis jobben ligner på tidligere jobber.</li>
<li><strong>Opprett prosjektet</strong> med kunde og adresse, og knytt kalkylen til det.</li>
<li><strong>Sett timepriser</strong> på prosjektets økonomiside: kostpris og utfakturert pris per time.</li>
<li><strong>Planlegg i Gantt</strong> og fordel laget i Bemanning.</li>
<li><strong>Opprett oppgavene</strong> med ansvarlig og frist, og last opp tegninger og dokumenter.</li>
<li><strong>La laget føre timer og ta bilder</strong> i appen fra første dag.</li>
<li><strong>Følg opp hver uke:</strong> timer mot plan, kostnader mot kalkyle og åpne oppgaver.</li>
</ol>

<h2>Dette bør du sjekke før du velger verktøy</h2>
<ul>
<li><strong>Bruker laget det?</strong> Et verktøy som bare prosjektlederen bruker, gir planer uten timer og økonomi uten fakta.</li>
<li><strong>Ser du marginen underveis?</strong> Får du bare tallene når regnskapet er ført, er det for sent å gjøre noe med dem.</li>
<li><strong>Går timene rett inn?</strong> Timer som tastes inn på nytt fra timelister, blir feil og kommer sent.</li>
<li><strong>Hva koster det per bruker?</strong> Sjekk hvor mange brukere som er inkludert før du sammenligner priser.</li>
</ul>

<h2>Tegn på at prosjektet går mot tap</h2>
<p>Marginen forsvinner sjelden på én dag. Den lekker gjennom små ting som først blir synlige når de summeres. Se etter disse tegnene i prosjektøkonomien:</p>
<ul>
<li><strong>Timene løper fra kalkylen.</strong> Er halve kalkulerte timer brukt før halve jobben er gjort, er det nå du må gjøre noe.</li>
<li><strong>Materiell utenom bestillingen.</strong> Mange små kjøp i byggevarehuset tyder på dårlig planlegging eller endringer som ikke er avtalt.</li>
<li><strong>Tilleggsarbeid som ikke er registrert.</strong> Det kunden ba om på stedet, må føres og faktureres – ellers blir det gratis.</li>
<li><strong>Fakturering som henger etter.</strong> Store kostnader og lite fakturert gir dårlig likviditet, selv om prosjektet til slutt går i pluss.</li>
</ul>

<h2>Passer for mindre byggefirma</h2>
<p>Mindre byggefirma trenger sjelden tunge systemer. Poenget er å samle det viktigste – plan, oppgaver, timer og økonomi – på ett sted, uten at det blir en jobb i seg selv å holde det oppdatert. Laget fører timer og tar bilder i appen; prosjektlederen planlegger og følger opp i webadmin.</p>
<p>Plan, timer, prosjektkalkyle og prosjektøkonomi er samlet i Full kontroll for ${KOMPLETT_PRICE} NOK per måned eks. mva. med 10 brukere. Trenger dere bare plan, timer og oppgaver, holder Kontroll på jobben for ${PROJEKT_PRICE} NOK. Du prøver alle funksjoner gratis i 14 dager, og vi flytter over dataene fra det gamle systemet uten kostnad.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er et prosjektstyringsverktøy for bygg?',
      answer:
        'Et system der du planlegger arbeidet, fordeler folk og oppgaver, fører timer på prosjektet og følger økonomien, fra kalkyle til ferdig prosjekt. I ByggExp ligger plan, timer og margin i samme løsning.',
    },
    {
      question: 'Hva er forskjellen på prosjektstyring og prosjektregnskap?',
      answer:
        'Prosjektstyring er å planlegge og følge opp arbeidet. Prosjektregnskap er inntekter og kostnader ført per prosjekt. I ByggExp ser du begge deler: planen og oppgavene, og timer, kostnader, fakturert og margin per prosjekt.',
    },
    {
      question: 'Kan jeg lage kalkyle og etterkalkyle i ByggExp?',
      answer:
        'Ja. Prosjektkalkylen setter inntekter mot kostnader og viser marginen. Knyttet til et prosjekt viser den også faktiske inntekter og kostnader, slik at du ser om kalkylen holdt.',
    },
    {
      question: 'Erstatter ByggExp regnskapsprogrammet?',
      answer:
        'Nei. ByggExp samler grunnlaget per prosjekt – timer, kvitteringer, fakturaer og lønn – mens regnskapet føres som før.',
    },
    {
      question: 'Hvordan lager jeg en etterkalkyle?',
      answer:
        'Knytt prosjektkalkylen til prosjektet. Da vises de faktiske inntektene og kostnadene ved siden av det du kalkulerte, og du ser hvor avviket oppstod: timer, materiell eller tillegg som ikke ble fakturert.',
    },
    {
      question: 'Kan de ansatte se planen i mobilen?',
      answer:
        'De ansatte ser oppgavene sine og prosjektets tidsplan i appen, og legger inn timer, bilder og dokumenter der. Bemanningsrutenettet brukes i webadmin.',
    },
    {
      question: 'Passer det for små byggefirma?',
      answer:
        'Ja. Laget trenger bare appen for timer, oppgaver og bilder. Plan og økonomi følges opp i webadmin av den som har ansvaret.',
    },
    {
      question: 'Hva koster prosjektstyring i ByggExp?',
      answer: `Full kontroll med plan, timer, prosjektkalkyle og prosjektøkonomi koster ${KOMPLETT_PRICE} NOK per måned eks. mva. med 10 brukere. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. Du prøver gratis i 14 dager.`,
    },
  ],
  related: [
    { href: '/nb/blog/framdriftsplan', label: 'Slik lager du en fremdriftsplan' },
    { href: '/nb/blog/projektekonomi-och-lonsamhet', label: 'Prosjektøkonomi og lønnsomhet' },
    { href: '/nb/blog/fota-kvitton-och-hantera-utlagg', label: 'Kvitteringshåndtering' },
    { href: '/nb/blog/byggekontrakt', label: 'Byggekontrakt' },
    { href: '/nb/verktyg/paslag-marginal-kalkylator', label: 'Påslag- og marginkalkulator' },
    { href: '/nb/funksjoner/bemanningsplan', label: 'Bemanningsplan' },
  ],
};

// Wave 3 (2026-11-01). Skipped, see docs/TASKS.md: hms-system (no avvik module
// with saksgang/risk analysis in the product) and tilbudsprogram (offer and
// invoice PDFs are Swedish-only, invoice PDF prints SEK/Bankgiro).
const PAGES: FunksjonPageNb[] = [KS_SYSTEM, TIMEREGISTRERING, PROSJEKTSTYRING];

export const FUNKSJON_PAGES_NB: FunksjonPageNb[] = PAGES.map((page) => ({
  ...page,
  body: labelTables(page.body),
}));

export const FUNKSJON_PAGE_SLUGS_NB = FUNKSJON_PAGES_NB.map((p) => p.slug);

export function getFunksjonPageNb(slug: string): FunksjonPageNb | undefined {
  return FUNKSJON_PAGES_NB.find((p) => p.slug === slug);
}

/** hreflang alternates (incl. self) for a feature page, sv ↔ nb pairs only. */
export function funksjonHreflang(
  lang: string,
  slug: string,
): { hrefLang: string; href: string }[] {
  const nb =
    lang === 'nb'
      ? getFunksjonPageNb(slug)
      : FUNKSJON_PAGES_NB.find((p) => p.svPair === slug);
  if (!nb?.svPair) return [];
  return [
    { hrefLang: 'sv', href: `${localeOrigin('sv')}/sv/funktioner/${nb.svPair}` },
    { hrefLang: 'nb', href: `${localeOrigin('nb')}/nb/funksjoner/${nb.slug}` },
  ];
}
