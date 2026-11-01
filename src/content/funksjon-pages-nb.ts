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
// - Bokføringsforskriften kap. 5-1 (salgsdokument: § 5-1-1 innhold, § 5-1-2
//   org.nr + «MVA» / «Foretaksregisteret», § 5-1-5 mva summert per sats):
//   https://lovdata.no/forskrift/2004-12-01-1558

import {
  EXTRA_USER_PRICE,
  FAKTURA_PRICE,
  KOMPLETT_PRICE,
  PROJEKT_PRICE,
} from '../components/Pricing/Pricing';
import { localeOrigin } from '../lib/seo';
import { ext, illu, labelTables, type FunktionPage } from './funktion-pages';


const LOV_AML = 'https://lovdata.no/lov/2005-06-17-62';
const LOV_IK = 'https://lovdata.no/forskrift/1996-12-06-1127';
const LOV_SAK10 = 'https://lovdata.no/forskrift/2010-03-26-488';
const LOV_BF = 'https://lovdata.no/forskrift/2004-12-01-1558';

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
<p>KS er ikke det samme som HMS. HMS handler om helse, miljø og sikkerhet for dem som jobber, og følger av arbeidsmiljøloven og ${ext(LOV_IK, 'internkontrollforskriften')}. Mange firma kaller det samlet for et HMS- og KS-system, og vernerunden kan fint gjennomføres som en egen sjekkliste.</p>

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
        'Nei. KS handler om at bygget blir riktig, HMS om sikkerheten og helsen til dem som jobber. Mange firma samler dem i ett system. I ByggExp kan for eksempel en vernerunde kjøres som en egen sjekkliste.',
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
    'Timeregistreringsapp for byggefirma: stemple inn med GPS, timer per prosjekt, attest og eksport til PDF, Excel og lønn. Alle funksjoner gratis i 14 dager.',
  name: 'Timeregistreringsapp',
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
      bullets: ['Timeliste som PDF og Excel', 'Lønnsgrunnlag som CSV', 'Faktura fra timene (Full kontroll)'],
      img: '/landing/features/3personal-1200.webp',
      alt: 'Oversikt i ByggExp over hvem som er på jobb nå, per prosjekt',
    },
  ],
  body: `
<p>En timeregistreringsapp for bygg skal få riktige timer inn på riktig prosjekt, uten at noen sitter og fører over lapper på fredag. I ByggExp stempler de ansatte inn og ut i mobilen, timetypen velges på økten, og arbeidslederen attesterer i webadmin. Etterpå går grunnlaget videre til lønn, faktura og prosjektøkonomi. Her ser du hvordan flyten fungerer, hva loven krever av timeføringen, og hva du bør sjekke før du velger app.</p>

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
<p>${ext(LOV_AML, 'Arbeidsmiljøloven')} § 10-7 krever at det finnes en oversikt over hvor mye den enkelte arbeidstaker har arbeidet. Oversikten skal være tilgjengelig for Arbeidstilsynet og arbeidstakernes tillitsvalgte. En timeliste på papir oppfyller kravet i teorien, men bare hvis den faktisk blir fylt ut, samlet inn og tatt vare på.</p>
<p>Overtid har egne grenser. Etter § 10-6 kan overtid som hovedregel ikke overstige ti timer i løpet av sju dager, 25 timer i fire sammenhengende uker og 200 timer innenfor en periode på 52 uker, og det skal betales et tillegg på minst 40 prosent. Tariffavtalen dere følger kan ha egne regler for overtid og ubekvem arbeidstid, så sjekk alltid den gjeldende avtalen.</p>
<p>I ByggExp velger den ansatte timetype for hver økt. Systemet regner ikke ut tariffavtalens regler automatisk. Det betyr at dere selv avgjør hva som er overtid, for eksempel når arbeidslederen har pålagt den, og at attesten blir kontrollpunktet. Når timetypen ligger på hver økt, ser du raskt hvem som nærmer seg grensene.</p>

${illu('tidrapporteringssystem-kvallsgjutning', 'Betongbil støper en plate i kveldslys under en arbeidslampe, en bygningsarbeider trekker av betongen og en arbeidsleder ser på mobilen')}

<h2>GPS eller manuelt – dere velger</h2>
<p>GPS gir arbeidslederen trygghet for at innstemplingen skjer på bygget og ikke hjemme. Samtidig er posisjon en personopplysning, og de ansatte skal vite hva som registreres og hvorfor. I ByggExp brukes posisjonen ved inn- og utstempling og for å sette økten på pause når noen forlater prosjektområdet. Vil en ansatt ikke dele posisjon, fører vedkommende timene manuelt i appen.</p>
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
<thead><tr><th>Behov</th><th>Timeliste i Excel</th><th>Timeregistreringsapp</th></tr></thead>
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

<h2>Hva koster en timeregistreringsapp?</h2>
<p>Timeregistrering, attest og eksport er med i pakken Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva., med 10 brukere inkludert. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. Vil du også fakturere timene og se prosjektøkonomien, velger du Full kontroll for ${KOMPLETT_PRICE} NOK. Du prøver alle funksjoner gratis i 14 dager, uten oppstartsavgift og uten bindingstid.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er en timeregistreringsapp?',
      answer:
        'En app der de ansatte registrerer arbeidstid i mobilen ved å sjekke inn og ut på bygget. Timene havner på riktig prosjekt og blir, når de er attestert, grunnlag for lønn og faktura.',
    },
    {
      question: 'Finnes det en gratis timeregistreringsapp?',
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
<p>Det er her prosjektstyringen blir konkret. Timene de ansatte fører i <a href="/nb/funksjoner/timeregistrering-app">timeregistreringsappen</a> havner på prosjektet. På prosjektets økonomiside angir du kostpris og timepris til kunden, og ByggExp regner ut:</p>
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
<li><strong>Inntektssiden.</strong> Tabeller for inntekter.</li>
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
<li><strong>Sett timepriser</strong> på prosjektets økonomiside: kostpris og timepris til kunden.</li>
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

/* ------------------------------------------------------------------------- */
/* 2. Bemanningsplan                                                          */
/* ------------------------------------------------------------------------- */
// Claims: product-facts "Planering / Bemanning" + NO section (Gantt by person or
// project, 2 uker/måned/egendefinert, endringslogg; Bemanning grid click-to-assign,
// approved leave shown, >8 h/day warning). NOT: machines, subcontractors,
// drag-and-drop, worker seeing the Bemanning plan in the app.

const BEMANNINGSPLAN: FunksjonPageNb = {
  slug: 'bemanningsplan',
  svPair: 'resursplanering',
  plan: 'projekt',
  priceIncluded: 'Planlegging og bemanning er inkludert',
  heroCheck: 'Fravær rett i planen',
  title: 'Bemanningsplan for bygg – Gantt og ressurser | ByggExp',
  description:
    'Bemanningsplan for byggefirma: Gantt per ansatt eller prosjekt, bemanning dag for dag, fravær i planen og varsel ved overbooking. Prøv gratis i 14 dager.',
  name: 'Bemanningsplan',
  h1: 'Bemanningsplan for bygg.',
  h1Accent: 'Riktig lag på riktig bygg.',
  lead: 'Alle prosjekter og hele laget i én plan.',
  hero: {
    name: 'resursplanering-bemanning',
    alt: 'Planlegger plasserer en arbeider med hjelm i en rute på en stor bemanningstavle med ansatte og dager',
  },
  stepsHeading: ['Planlegg', 'og følg opp'],
  steps: [
    {
      title: 'Bemanning dag for dag',
      text: 'Klikk i en rute og sett folk på et prosjekt.',
      bullets: ['Ansatte mot dager', 'Godkjent fravær vises', 'Varsel over 8 timer per dag'],
      img: '/landing/funktioner/screen-bemanning-1200.webp',
      alt: 'Bemanning i ByggExp: ansatte mot dager med prosjekt i hver rute og fravær markert',
    },
    {
      title: 'Planlegging i Gantt',
      text: 'Per ansatt eller per prosjekt, to uker, en måned eller egen periode.',
      img: '/landing/features/5planering-1200.webp',
      alt: 'Planlegging i ByggExp: Gantt-skjema med prosjekter og ansatte over flere uker',
    },
    {
      title: 'Fravær i samme plan',
      text: 'Ferie og sykdom registreres som fravær og vises når det er godkjent.',
      img: '/landing/funktioner/screen-franvaro-1200.webp',
      alt: 'Fravær i ByggExp: søknader om ferie og fri med status',
    },
  ],
  body: `
<p>En bemanningsplan viser hvem som skal jobbe på hvilket prosjekt, hvilke dager. For et byggefirma er det planen som avgjør om laget står klart når betongen kommer, og om du har folk nok til å si ja til neste jobb. I ByggExp planlegger du alle prosjekter og alle ansatte i ett Gantt-skjema og fordeler laget dag for dag i Bemanning. Godkjent fravær ligger i samme plan, og du får varsel når noen er booket for mye. Her går vi gjennom hvordan du lager en bemanningsplan, hvordan den henger sammen med fremdriftsplanen, og når Excel ikke lenger holder.</p>

<h2>Hva er en bemanningsplan?</h2>
<p>En bemanningsplan er fordelingen av personell på arbeidsoppgaver over tid. Den svarer på tre spørsmål:</p>
<ul>
<li><strong>Hvem</strong> er på hvilket bygg i morgen og neste uke?</li>
<li><strong>Har vi nok folk</strong> til prosjektene vi allerede har sagt ja til?</li>
<li><strong>Hvor er det hull</strong> – og hvor er noen booket dobbelt?</li>
</ul>
<p>Ressursplanlegging er det samme sett lenger frem: uker og måneder i stedet for dager. I ByggExp tilsvarer det Planlegging (Gantt over tid) og Bemanning (dag for dag).</p>

<h2>Bemanningsplan og fremdriftsplan</h2>
<p>Fremdriftsplanen viser aktivitetene i prosjektet, rekkefølgen og når de skal være ferdige. Bemanningsplanen viser hvem som skal gjøre dem. De to må henge sammen: flytter støpingen seg en uke, flytter laget seg også. Les hvordan du setter opp <a href="/nb/blog/framdriftsplan">en fremdriftsplan for byggeprosjekt</a>, og bruk den som utgangspunkt for bemanningen.</p>
<p>Start med aktivitetene som krever flest folk eller bestemte fag, for eksempel forskaling, støp og tett bygg. Regn ut hvor mange personer hver aktivitet trenger per dag, trekk fra kjent fravær, og fordel laget uke for uke. Følg opp hver uke mot timene som faktisk er ført.</p>

${illu('resursplanering-gantt', 'Planlegger peker på en stor tavle med et Gantt-skjema med blå søyler, en hjelm på gulvet')}

<h2>Slik lager du bemanningsplanen i ByggExp</h2>
<ol>
<li><strong>Legg inn prosjekter og ansatte.</strong> Pågående prosjekter og hele laget inn i webadmin. Vi hjelper dere gratis med å flytte over data fra det gamle systemet.</li>
<li><strong>Planlegg i Gantt.</strong> Velg visning per ansatt eller per prosjekt, og periode: to uker, måned eller egendefinert.</li>
<li><strong>Fordel dag for dag i Bemanning.</strong> Du klikker i ruten for en ansatt og en dag og velger prosjekt. Er noen booket over 8 timer på en dag, vises et varsel.</li>
<li><strong>Registrer fravær.</strong> Ferie, sykdom og fri legges inn som fravær. Når det er godkjent, vises det i bemanningen, så du ikke planlegger med folk som ikke er der.</li>
<li><strong>Se hva som er endret.</strong> Endringsloggen viser hva som ble flyttet og når.</li>
<li><strong>Sammenlign med faktiske timer.</strong> Timene laget fører i <a href="/nb/funksjoner/timeregistrering-app">timeregistreringsappen</a> ligger i samme system, så du ser om planen holdt.</li>
</ol>

${illu('resursplanering-franvaro', 'Prosjektleder ved skrivebordet foran en stor kalender, en kollega går på ferie med koffert og en annen med hjelm kommer inn')}

<h2>Fravær, overbooking og endringer</h2>
<p>De fleste bemanningsplaner sprekker på tre ting: noen er borte, noen er booket to steder, eller planen er endret uten at noen vet det.</p>
<ul>
<li><strong>Fravær.</strong> Når ferie og sykdom ligger i et eget ark, blir det glemt i planen. I ByggExp vises godkjent fravær direkte i bemanningsvisningen.</li>
<li><strong>Overbooking.</strong> Ruten markeres når en ansatt har mer enn 8 timer på en dag, så du ser dobbeltbooking før laget gjør det.</li>
<li><strong>Endringer.</strong> Endringsloggen viser hva som er endret, så flere prosjektledere kan planlegge i samme plan uten å overskrive hverandre i blinde.</li>
</ul>
<p>Planen er et verktøy for den som planlegger, i webadmin. De ansatte ser oppgavene sine og prosjektets tidsplan i appen, men selve bemanningsrutenettet brukes på kontoret.</p>

<h2>Bemanningsplan som mal eller i system?</h2>
<p>En bemanningsplan i Excel er et greit sted å starte: én rad per ansatt, én kolonne per dag og prosjektnavnet i rutene. Malen svikter når den skal deles. Fraværet må føres to steder, ingen ser hvem som endret sist, og planen stemmer sjelden med timene som faktisk ble ført. Bruker du allerede vår <a href="/nb/blog/timeliste-mal">timeliste-mal</a>, er det samme poeng: når planen og timene ligger i samme system, ser du avviket uten å sammenligne to filer.</p>

<h2>Hva du planlegger – og ikke planlegger – i ByggExp</h2>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Personell på tvers av alle prosjekter</strong></td><td>Ja, i Planlegging og Bemanning</td></tr>
<tr><td><strong>Visning per ansatt og per prosjekt</strong></td><td>Ja</td></tr>
<tr><td><strong>Dag for dag</strong></td><td>Ja, i Bemanning</td></tr>
<tr><td><strong>Godkjent fravær i planen</strong></td><td>Ja</td></tr>
<tr><td><strong>Varsel ved overbooking</strong></td><td>Ja, over 8 timer per dag</td></tr>
<tr><td><strong>Endringslogg</strong></td><td>Ja</td></tr>
<tr><td><strong>Oppfølging mot førte timer</strong></td><td>Ja, timeregistreringen ligger i samme system</td></tr>
<tr><td><strong>Maskiner og utstyr i planen</strong></td><td>Nei. Verktøy og utstyr registreres i Verktøy med status, hvem som har det og prosjekt</td></tr>
<tr><td><strong>Underentreprenører i planen</strong></td><td>Nei</td></tr>
<tr><td><strong>Dra og slipp</strong></td><td>Nei, du klikker i ruten og velger prosjekt</td></tr>
</tbody>
</table></div>
<p>Planlegger dere kraner og gravemaskiner like nøye som folk, kan en enkel bookingliste ved siden av være nok.</p>

${illu('schemalaggning-lag', 'Tre smilende bygningsarbeidere med hjelm, en med drill, en med en stor mobil med blå søyler og en med vater')}

<h2>Eksempel: bemanningsplan for tre prosjekter</h2>
<p>La oss si at firmaet har åtte tømrere og tre prosjekter de neste fire ukene: et tilbygg som skal tettes, et bad som skal rehabiliteres og en garasje som skal starte i uke tre. Slik kan planen bygges opp:</p>
<ol>
<li><strong>Tilbygget</strong> trenger fire mann i to uker til tett bygg, deretter to mann til innvendig arbeid.</li>
<li><strong>Badet</strong> trenger to mann i tre uker, med pause de dagene rørleggeren og flisleggeren er der.</li>
<li><strong>Garasjen</strong> trenger tre mann fra uke tre, når tilbygget er tett og folk blir ledige.</li>
<li><strong>Fraværet</strong> trekkes fra: én har ferie i uke to, og en annen har fri en fredag.</li>
</ol>
<p>Lagt inn i Gantt ser du at uke to er trang: fire på tilbygget, to på badet og én på ferie gir ingen buffer. I Bemanning ser du dag for dag hvem som står hvor, og flytter én fra badet de dagene underentreprenørene jobber der. Når uke tre starter, er garasjelaget allerede klart fra tilbygget, og ingen er booket to steder.</p>
<p>Etter fire uker sammenligner du planen med førte timer. Brukte tilbygget flere timer enn planlagt, tar du det med i neste kalkyle og neste plan.</p>

<h2>Fem tips for en bemanningsplan som holder</h2>
<ol>
<li><strong>Planlegg med buffer.</strong> En plan der alle er booket hver dag sprekker ved første sykdom.</li>
<li><strong>Legg inn fravær tidlig.</strong> Ferie som er kjent i mars, hører hjemme i planen i mars.</li>
<li><strong>Én som eier planen.</strong> Flere kan endre, men én person har ansvaret for at den er oppdatert.</li>
<li><strong>Del den på morgenmøtet.</strong> Laget skal vite hvor de skal i morgen uten å ringe rundt.</li>
<li><strong>Sammenlign med timene.</strong> Planlagte timer mot førte timer viser om dere planlegger realistisk.</li>
</ol>

<h2>Fra Excel til bemanningsplan i system</h2>
<p>En bemanningsplan i Excel fungerer så lenge én person planlegger og laget er lite. Det blir vanskelig når flere prosjektledere endrer i samme fil, når fraværet ligger et annet sted, og når ingen ser hvem som endret sist. Slik kommer du i gang:</p>
<ul>
<li><strong>Begynn med to uker.</strong> Planlegg bare den nærmeste perioden i Bemanning, og bygg ut Gantt-planen når rutinen sitter.</li>
<li><strong>Flytt fraværet inn.</strong> Registrer ferie og fri som fravær i stedet for i en egen liste.</li>
<li><strong>La laget stemple inn.</strong> Først når timene kommer inn, ser du om planen stemmer med virkeligheten.</li>
<li><strong>Gå gjennom planen på det ukentlige møtet.</strong> Da blir den et felles verktøy og ikke bare prosjektlederens ark.</li>
</ul>
<p>Planlegging av prosjekter og ansatte er med i pakken Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva. med 10 brukere, og du prøver gratis i 14 dager.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er en bemanningsplan?',
      answer:
        'En oversikt over hvilke ansatte som skal jobbe på hvilke prosjekter, hvilke dager. Den viser om dere har folk nok, og hvor noen er booket dobbelt.',
    },
    {
      question: 'Hvordan lager man en bemanningsplan for et byggeprosjekt?',
      answer:
        'Ta utgangspunkt i fremdriftsplanen, regn ut hvor mange personer hver aktivitet trenger, trekk fra kjent fravær og fordel laget uke for uke. Følg opp planen hver uke mot førte timer.',
    },
    {
      question: 'Hva er forskjellen på ressursplanlegging og bemanningsplan?',
      answer:
        'Ressursplanleggingen ser uker og måneder frem og svarer på om dere har kapasitet til prosjektene. Bemanningsplanen er den daglige fordelingen: hvem som er på hvilket bygg i morgen. I ByggExp tilsvarer det Planlegging og Bemanning.',
    },
    {
      question: 'Finnes det en mal for bemanningsplan i Excel?',
      answer:
        'En enkel bemanningsplan i Excel er én rad per ansatt og én kolonne per dag. Den fungerer for ett lag, men fravær og endringer blir vanskelige å holde oppdatert når flere planlegger i samme fil.',
    },
    {
      question: 'Vises ferie og sykdom i planen?',
      answer:
        'Ja. Fravær registreres i Fravær, og når det er godkjent, vises det i bemanningsvisningen.',
    },
    {
      question: 'Kan flere prosjektledere planlegge i samme plan?',
      answer:
        'Ja. Alle med tilgang planlegger i samme Gantt og samme bemanning, og endringsloggen viser hva som er endret og når.',
    },
    {
      question: 'Kan jeg planlegge maskiner og underentreprenører?',
      answer:
        'Nei, planleggingen gjelder egne ansatte. Verktøy og utstyr registreres i Verktøy med status, hvem som har det og prosjekt.',
    },
    {
      question: 'Ser de ansatte bemanningsplanen i mobilen?',
      answer:
        'I appen ser de ansatte oppgavene sine og prosjektets tidsplan. Bemanningsrutenettet brukes i webadmin av den som planlegger.',
    },
    {
      question: 'Hva koster bemanningsplanlegging i ByggExp?',
      answer: `Planlegging og bemanning er med i Kontroll på jobben for ${PROJEKT_PRICE} NOK per måned eks. mva., med 10 brukere og timeregistrering. Ekstra brukere koster ${EXTRA_USER_PRICE} NOK per måned. Du prøver gratis i 14 dager.`,
    },
  ],
  related: [
    { href: '/nb/blog/framdriftsplan', label: 'Slik lager du en fremdriftsplan' },
    { href: '/nb/blog/timeliste-mal', label: 'Gratis timeliste-mal i Excel' },
    { href: '/nb/blog/dagsplanering-och-planeringsmoten', label: 'Dagsplanlegging og planleggingsmøter' },
    { href: '/nb/blog/hantera-uppgifter-i-byggprojekt', label: 'Oppgaver i byggeprosjekter' },
    { href: '/nb/funksjoner/timeregistrering-app', label: 'Timeregistreringsapp' },
    { href: '/nb/funksjoner/prosjektstyringsverktoy', label: 'Prosjektstyringsverktøy for bygg' },
  ],
};

/* ------------------------------------------------------------------------- */
/* 5. Tilbudsprogram (tilbud, faktura, kunderegister)                         */
/* ------------------------------------------------------------------------- */
// Claims code-checked 2026-11-01 after the Norwegian PDFs went live, see
// product-facts-verified.md "Tilbud / faktura on nb (live)": bokmål tilbud and
// faktura PDF with logo, NOK, mva 25/15/12/0 summed per rate, org.nr + MVA,
// «Foretaksregisteret», kontonummer (MOD11-checked), KID MOD10/MOD11,
// Leveringssted, kreditnota (whole or partial), PDF on e-mail, offer → invoice
// draft with the same rows, invoice from hours (Full kontroll: hours module is
// not in Kontroll på pengene), customer + article register, PDF download.
// NOT claimed: purring/payment reminders (off for NO), any accounting
// integration or file export (SIE is Swedish), EHF/e-faktura, digital offer
// acceptance, offer → project, invoicing in the mobile app for NO companies
// (app not yet adapted), ROT/omvendt avgiftsplikt.
// Regulation: bokføringsforskriften kap. 5-1 (salgsdokument) –
// https://lovdata.no/forskrift/2004-12-01-1558 (§ 5-1-1, § 5-1-2, § 5-1-5).

const TILBUDSPROGRAM: FunksjonPageNb = {
  slug: 'tilbudsprogram',
  plan: 'faktura',
  priceIncluded: 'Tilbud, faktura og kunderegister er inkludert',
  heroCheck: 'Tilbud og faktura på norsk',
  title: 'Tilbudsprogram – fra tilbud til faktura | ByggExp',
  description:
    'Tilbudsprogram for håndverkere og små bedrifter: tilbud og faktura som PDF på norsk med mva, KID og kontonummer, sendt på e-post. Prøv gratis i 14 dager.',
  name: 'Tilbudsprogram',
  h1: 'Tilbudsprogram for håndverkere.',
  h1Accent: 'Fra tilbud til faktura i samme system.',
  lead: 'Tilbud og faktura på norsk, med riktig mva, KID og kontonummer.',
  hero: {
    name: 'offert-kalkyl-hero',
    alt: 'Håndverker med caps sitter ved en bærbar PC og skriver, ved siden av et ark med et hus bak et stillas og en penn',
  },
  stepsHeading: ['Tilbud, faktura', 'og oppfølging'],
  steps: [
    {
      title: 'Lag tilbudet',
      text: 'Rader med antall, enhet og enhetspris. Gyldig til-dato og forbehold.',
      bullets: ['PDF med logo, på norsk', 'Sendes til kunden på e-post', 'Blir faktura med de samme radene'],
      img: '/landing/features/7offerter-1200.webp',
      alt: 'Nytt tilbud i ByggExp med tilbudsnummer, status, gyldig til-dato og kunde i webadmin og i mobilappen',
    },
    {
      title: 'Fakturer timene',
      text: 'Timene for et prosjekt og en periode blir en fakturalinje. Med i Full kontroll.',
      img: '/landing/funktioner/screen-tidrapport-1200.webp',
      alt: 'Timeoversikt i ByggExp: timer per ansatt og dag for to uker, filtrert på planlagt, GPS og manuelt',
    },
    {
      title: 'Følg pengene',
      text: 'Fakturert, kostnader og margin per prosjekt.',
      img: '/landing/features/9ekonomi-1200.webp',
      alt: 'Prosjektøkonomi i ByggExp: timer, kostnader, materiell, fakturert og margin mot budsjett',
    },
  ],
  body: `
<p>Et tilbudsprogram skal gjøre det raskt å sende et ryddig tilbud, og enda raskere å fakturere når kunden har sagt ja. I ByggExp lager du tilbudet med rader fra artikkelregisteret ditt, sender det som PDF på e-post og gjør det om til en faktura med de samme radene. Fakturaen skrives ut på norsk, i kroner, med mva per sats, kontonummer og KID. Her går vi gjennom flyten, hva et tilbud og en faktura bør inneholde, og hva programmet ikke gjør.</p>

<h2>Hva er et tilbudsprogram?</h2>
<p>Et tilbudsprogram er et verktøy for å lage, sende og følge opp tilbud. De fleste programmene for små bedrifter er egentlig fakturaprogram der tilbudet er et ekstra skjema. For en håndverker eller et byggefirma henger tingene tettere sammen: tilbudet blir til en jobb, jobben gir timer, og timene skal bli en faktura. Da sparer du mest når alt ligger i samme system:</p>
<ul>
<li><strong>Kunderegister</strong> – kunden legges inn én gang og hentes inn på tilbud og faktura.</li>
<li><strong>Artikler</strong> – faste priser og enheter, så radene blir like hver gang.</li>
<li><strong>Tilbud</strong> – beskrivelse, rader, gyldighet og forbehold, som PDF.</li>
<li><strong>Faktura</strong> – fra tilbudet, fra timene eller fra bunnen av, med det loven krever.</li>
<li><strong>Oversikt</strong> – hva som er sendt, akseptert, fakturert og betalt.</li>
</ul>

${illu('offert-kalkyl-matning', 'Håndverker med hjelm måler et baderomsgulv med målebånd mens kunden står ved siden av med et nettbrett, med fliser og en bøtte på gulvet')}

<h2>Slik fungerer det i ByggExp</h2>
<ol>
<li><strong>Legg inn kunden.</strong> I kunderegisteret lagrer du bedrifter og privatpersoner med kundenummer, adresse, e-post, telefon og org.nr.</li>
<li><strong>Lag tilbudet.</strong> Velg kunden, skriv en beskrivelse og legg inn rader med antall, enhet og enhetspris. Velger du en artikkel, fylles tekst, pris, enhet og mva-sats inn. Sett en gyldig til-dato og skriv forbehold og avklaringer.</li>
<li><strong>Send det på e-post.</strong> Tilbudet går som PDF med logoen din, og et utkast får status sendt. Du kan også forhåndsvise og laste ned PDF-en.</li>
<li><strong>Merk utfallet.</strong> Når kunden svarer, setter du status akseptert eller avvist.</li>
<li><strong>Gjør tilbudet om til faktura.</strong> Ett klikk gir et fakturautkast med kunden, radene og tilbudsnummeret som referanse.</li>
<li><strong>Send fakturaen.</strong> Fakturaen går som PDF på e-post, og utkastet får status sendt. Når pengene er kommet, merker du den som betalt.</li>
</ol>
<p>Tilbud og faktura lages i webadmin, som finnes på norsk.</p>

<h2>Tilbudsmal: hva et tilbud bør inneholde</h2>
<p>Et godt tilbud er lett å si ja til og vanskelig å misforstå. Bruk gjerne denne strukturen, enten du skriver i en tilbudsmal i Word eller Excel eller i et program:</p>
<div class="article-table"><table>
<thead><tr><th>Felt</th><th>Hvorfor</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Tilbudsnummer og dato</strong></td><td>Så begge parter vet hvilket tilbud det gjelder</td><td>Fortløpende nummer og dato</td></tr>
<tr><td><strong>Kunde og kontaktperson</strong></td><td>Hvem tilbudet er til, og hvem som svarer</td><td>Fra kunderegisteret, med kontaktpersoner</td></tr>
<tr><td><strong>Beskrivelse</strong></td><td>Hva som skal gjøres, med ord kunden forstår</td><td>Fritekst</td></tr>
<tr><td><strong>Rader</strong></td><td>Hva prisen består av</td><td>Antall, enhet, enhetspris og beløp</td></tr>
<tr><td><strong>Mva og totalpris</strong></td><td>Privatkunder vil se hva de faktisk skal betale</td><td>Sum eks. mva, mva og totalt inkl. mva</td></tr>
<tr><td><strong>Gyldig til</strong></td><td>Materialpriser endrer seg</td><td>Egen dato på tilbudet</td></tr>
<tr><td><strong>Forbehold og avklaringer</strong></td><td>Hva som ikke er med, og hva prisen forutsetter</td><td>Eget felt i PDF-en</td></tr>
</tbody>
</table></div>
<p>Skriv forbeholdene konkret: «rivning av eksisterende flis er ikke med», ikke «forbehold om uforutsette forhold». Det er forbeholdene som sparer deg for diskusjonen når fakturaen kommer.</p>

<h2>Hva en faktura må inneholde i Norge</h2>
<p>Kravene til en faktura står i ${ext(LOV_BF, 'bokføringsforskriften')} kapittel 5-1 om salgsdokument. Kort fortalt skal fakturaen ha:</p>
<ul>
<li><strong>Nummer og dato</strong> – fakturanummer i fortløpende serie og fakturadato.</li>
<li><strong>Partene</strong> – selgers navn, adresse og org.nr., med «MVA» etter nummeret når selger er mva-registrert. Aksjeselskap og NUF skal også ha ordet «Foretaksregisteret». Kjøpers navn og adresse.</li>
<li><strong>Hva som er levert</strong> – ytelsens art og omfang.</li>
<li><strong>Når og hvor</strong> – tidspunkt og sted for leveringen.</li>
<li><strong>Pris og forfall</strong> – vederlaget og når det skal betales.</li>
<li><strong>Merverdiavgift</strong> – oppgitt i norske kroner, og salg med ulike satser summert hver for seg.</li>
</ul>
<p>I ByggExp fyller du inn org.nr., kontonummer og om foretaket er mva-registrert og i Foretaksregisteret én gang i firmainnstillingene. Deretter kommer det riktig på hver faktura. Leveringsstedet hentes fra fakturaen, prosjektet eller kundens adresse.</p>

${illu('offert-kalkyl-skicka', 'Et dokument flyr som et papirfly fra en bærbar PC til en person som står i et hus og ser på mobilen')}

<h2>Norske detaljer som er på plass</h2>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Språk og valuta</strong></td><td>Tilbud og faktura på bokmål, beløp i NOK</td></tr>
<tr><td><strong>Mva-satser</strong></td><td>25, 15, 12 og 0 % per rad, summert per sats</td></tr>
<tr><td><strong>Org.nr.</strong></td><td>Med «MVA» når foretaket er mva-registrert</td></tr>
<tr><td><strong>Kontonummer</strong></td><td>Kontrolleres ved registrering, så et feiltastet nummer stoppes</td></tr>
<tr><td><strong>KID</strong></td><td>Lages fra fakturanummeret med MOD10 eller MOD11, eller slås av</td></tr>
<tr><td><strong>Leveringssted og -dato</strong></td><td>På hver faktura</td></tr>
<tr><td><strong>Kreditnota</strong></td><td>For hele fakturaen eller et beløp, med henvisning til fakturaen</td></tr>
</tbody>
</table></div>
<p>En sendt faktura endres ikke. Er noe feil, lager du en kreditnota. Lar du beløpet stå tomt, krediteres hele fakturaen; skriver du et beløp eks. mva, krediteres bare den delen.</p>

<h2>Fra timer til faktura</h2>
<p>For et byggefirma er timene ofte den største delen av fakturaen. Med pakken Full kontroll velger du prosjekt og periode i timeoversikten og sender timene rett til et fakturautkast. Timene summeres til én linje med prosjektnavn og periode, og du skriver timeprisen. Gjelder timene ett prosjekt, fylles prosjektets kunde inn. Interne timer blir ikke med. Timene kommer fra <a href="/nb/funksjoner/timeregistrering-app">timeregistreringsappen</a>, der de ansatte stempler inn på prosjektet. Lurer du på hva timen bør koste, se guiden om <a href="/nb/blog/timepris-snekker">timepris for snekker</a>.</p>

<h2>Tilbudsmal i Word eller tilbudsprogram?</h2>
<p>Mange starter med en tilbudsmal og en fakturamal i Word eller Excel, og for noen få jobber i måneden kan det holde. Forskjellen merkes når volumet øker:</p>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>Mal i Word eller Excel</th><th>Tilbudsprogram</th></tr></thead>
<tbody>
<tr><td><strong>Nummerering</strong></td><td>Holdes styr på manuelt</td><td>Fortløpende nummer</td></tr>
<tr><td><strong>Mva per sats</strong></td><td>Formler som kan bli feil</td><td>Regnes ut per rad og sats</td></tr>
<tr><td><strong>Fra tilbud til faktura</strong></td><td>Kopier og lim inn</td><td>Ett klikk, samme rader</td></tr>
<tr><td><strong>KID</strong></td><td>Regnes ut for hånd</td><td>Lages automatisk</td></tr>
<tr><td><strong>Oversikt</strong></td><td>Filer i mapper</td><td>Status per tilbud og faktura</td></tr>
</tbody>
</table></div>
<p>Vil du heller starte enkelt, har vi en gratis <a href="/nb/blog/fakturamal">fakturamal</a> med alle feltene en faktura skal ha.</p>

<h2>Fakturaprogram for små bedrifter</h2>
<p>Driver du alene eller med en partner, er det gjerne du som både jobber, skriver tilbud og fakturerer om kvelden. Pakken Kontroll på pengene er laget for dette: tilbud, faktura, kunderegister og prosjektøkonomi for opptil 2 brukere. Den dekker opptil 30 utgående fakturaer i måneden. Har dere ansatte som fører timer, gir Full kontroll både timeregistrering og faktura fra timene.</p>

${illu('fakturering-arkiv', 'Person med hjelm legger et ark i en stor blå mappe med et husikon')}

<h2>Hva som er med – og ikke med</h2>
<p>Det er bedre å vite det før dere starter:</p>
<div class="article-table"><table>
<thead><tr><th>Behov</th><th>I ByggExp</th></tr></thead>
<tbody>
<tr><td><strong>Tilbud og faktura som PDF på norsk</strong></td><td>Ja, med logo, sendt på e-post</td></tr>
<tr><td><strong>Tilbud til faktura</strong></td><td>Ja, med de samme radene</td></tr>
<tr><td><strong>Faktura fra timene</strong></td><td>Ja, i Full kontroll</td></tr>
<tr><td><strong>Kunde- og artikkelregister</strong></td><td>Ja</td></tr>
<tr><td><strong>Kunden aksepterer tilbudet digitalt</strong></td><td>Nei. Du setter status akseptert eller avvist selv</td></tr>
<tr><td><strong>Purring og betalingspåminnelse</strong></td><td>Nei, ikke for norske firma</td></tr>
<tr><td><strong>Integrasjon med regnskapsprogram</strong></td><td>Nei. Fakturaene lastes ned som PDF til regnskapsføreren</td></tr>
<tr><td><strong>EHF og e-faktura</strong></td><td>Nei</td></tr>
<tr><td><strong>Tilbud og faktura i mobilappen</strong></td><td>Ikke tilpasset norske firma ennå. Bruk webadmin</td></tr>
</tbody>
</table></div>

<h2>Kom i gang</h2>
<ol>
<li><strong>Fyll inn firmaopplysningene</strong> – logo, org.nr., kontonummer og KID.</li>
<li><strong>Legg inn de faste kundene og artiklene.</strong> Vi hjelper dere gratis å flytte dem over fra systemet dere bruker i dag.</li>
<li><strong>Send neste tilbud fra ByggExp</strong> og gjør det om til faktura når kunden sier ja.</li>
</ol>
<p>Tilbud og faktura er med i Kontroll på pengene for ${FAKTURA_PRICE} NOK per måned eks. mva. Med timeregistrering og faktura fra timene velger du Full kontroll for ${KOMPLETT_PRICE} NOK med 10 brukere. Du prøver alle funksjoner gratis i 14 dager, uten oppstartsavgift og uten bindingstid.</p>
`.trim(),
  faq: [
    {
      question: 'Hva er et tilbudsprogram?',
      answer:
        'Et program for å lage, sende og følge opp tilbud. I ByggExp blir tilbudet en PDF med logo som sendes på e-post, og et akseptert tilbud blir faktura med ett klikk.',
    },
    {
      question: 'Kommer tilbud og faktura på norsk?',
      answer:
        'Ja. For norske firma skrives tilbud og faktura på bokmål, med beløp i NOK, mva per sats, org.nr. med MVA, kontonummer og KID.',
    },
    {
      question: 'Hvilke mva-satser kan jeg bruke?',
      answer:
        'Du velger 25, 15, 12 eller 0 % per rad. På fakturaen summeres mva og grunnlag for hver sats for seg.',
    },
    {
      question: 'Lager programmet KID?',
      answer:
        'Ja. KID lages fra fakturanummeret med kontrollsiffer etter MOD10 eller MOD11. Du kan også slå KID av.',
    },
    {
      question: 'Kan jeg fakturere timene de ansatte har ført?',
      answer:
        'Ja, i pakken Full kontroll. I timeoversikten sender du timene for et prosjekt og en periode til et fakturautkast, og skriver timeprisen.',
    },
    {
      question: 'Hvordan retter jeg en sendt faktura?',
      answer:
        'Med en kreditnota. Du krediterer hele fakturaen eller et beløp eks. mva, og kreditnotaen viser hvilken faktura den gjelder.',
    },
    {
      question: 'Sender ByggExp purring?',
      answer:
        'Nei. Betalingspåminnelser er ikke tilgjengelige for norske firma. Du ser hvilke fakturaer som er forfalt, og merker dem som betalt.',
    },
    {
      question: 'Kan ByggExp kobles til regnskapsprogrammet?',
      answer:
        'Nei, det finnes ingen integrasjon med norske regnskapsprogram. Fakturaene lastes ned som PDF og sendes til regnskapsføreren.',
    },
    {
      question: 'Hva koster tilbudsprogrammet?',
      answer: `Tilbud og faktura er med i Kontroll på pengene for ${FAKTURA_PRICE} NOK per måned eks. mva., for opptil 2 brukere. Full kontroll med timeregistrering og faktura fra timene koster ${KOMPLETT_PRICE} NOK med 10 brukere. Du prøver gratis i 14 dager.`,
    },
  ],
  related: [
    { href: '/nb/blog/fakturamal', label: 'Gratis fakturamal' },
    { href: '/nb/blog/faktureringsprogram-bygg', label: 'Faktureringsprogram for bygg' },
    { href: '/nb/blog/timepris-snekker', label: 'Timepris for snekker' },
    { href: '/nb/blog/byggekontrakt', label: 'Byggekontrakt' },
    { href: '/nb/funksjoner/timeregistrering-app', label: 'Timeregistreringsapp' },
    { href: '/nb/funksjoner/prosjektstyringsverktoy', label: 'Prosjektstyringsverktøy for bygg' },
  ],
};

// Wave 3 (2026-11-01). Skipped, see docs/TASKS.md: hms-system (no avvik module
// with saksgang/risk analysis in the product). Wave 4: tilbudsprogram, built
// once the Norwegian offer/invoice PDFs went live.
const PAGES: FunksjonPageNb[] = [
  KS_SYSTEM,
  TIMEREGISTRERING,
  PROSJEKTSTYRING,
  BEMANNINGSPLAN,
  TILBUDSPROGRAM,
];

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
