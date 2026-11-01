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

// Wave 3 (2026-11-01). Skipped, see docs/TASKS.md: hms-system (no avvik module
// with saksgang/risk analysis in the product) and tilbudsprogram (offer and
// invoice PDFs are Swedish-only, invoice PDF prints SEK/Bankgiro).
const PAGES: FunksjonPageNb[] = [KS_SYSTEM];

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
