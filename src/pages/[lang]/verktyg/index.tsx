import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';
import { calcLocaleEnabled, type CalcLocale } from '../../../lib/locale';
import { localeOrigin } from '../../../lib/seo';

type Tool = { slug: string; title: string; description: string };
type Group = { heading: string; tools: Tool[] };
type Content = {
  seoTitle: string;
  seoDescription: string;
  badge: string;
  h1: string;
  intro: string;
  groups: Group[];
};

// The hub is served per ccTLD: sv on byggexp.se, nb on byggexp.no. Only tools
// that actually serve the locale are listed — the Swedish-law tools (ROT, moms,
// AB 04 templates) are sv-only, so nb lists just the locale-agnostic calculators
// + PDF utilities that are translated.
const CONTENT: Record<CalcLocale, Content> = {
  sv: {
    seoTitle: 'Byggkalkylatorer & gratis verktyg för byggföretag | ByggExp',
    seoDescription:
      'Gratis byggkalkylatorer och verktyg: ROT, moms och timpris, materialkalkylatorer (gips, betong, tak, golv), mallar (offert, tidrapport) och PDF-verktyg. Utan konto.',
    badge: 'Gratis verktyg',
    h1: 'Gratis byggkalkylatorer och verktyg för byggföretag',
    intro:
      'Räkna ut material, priser och avdrag – och skapa offert, faktura och tidrapport direkt. Allt gratis och utan konto. Från en materialkalkyl kan du skapa en färdig offert med ett klick. PDF-verktygen körs i din webbläsare – filerna laddas aldrig upp.',
    groups: [
      {
        heading: 'Kalkylatorer',
        tools: [
          { slug: 'rot-avdrag-kalkylator', title: 'ROT-avdrag kalkylator', description: 'Räkna ut ROT-avdraget och vad kunden betalar (2026).' },
          { slug: 'moms-kalkylator', title: 'Momskalkylator', description: 'Lägg på eller räkna baklänges från moms (25/12/6 %).' },
          { slug: 'timpris-kalkylator', title: 'Timpris-kalkylator', description: 'Vad du behöver ta betalt per timme utifrån lön och kostnader.' },
          { slug: 'paslag-marginal-kalkylator', title: 'Påslag & marginal', description: 'Räkna pris från självkostnad – påslag vs marginal.' },
        ],
      },
      {
        heading: 'Byggkalkylatorer',
        tools: [
          { slug: 'betong-kalkylator', title: 'Betongberäknare', description: 'Volym och antal säckar för platta, grund och gjutning.' },
          { slug: 'tak-kalkylator', title: 'Takberäknare', description: 'Takyta för sadeltak och antal takpannor.' },
          { slug: 'farg-kalkylator', title: 'Färgåtgång', description: 'Hur många liter färg du behöver.' },
          { slug: 'kvadratmeter-kalkylator', title: 'Kvadratmeter', description: 'Räkna ut ytan för ett eller flera rum.' },
          { slug: 'golv-kalkylator', title: 'Golv & kakel', description: 'Material och antal förpackningar för golv och kakel.' },
          { slug: 'tapet-kalkylator', title: 'Tapet', description: 'Hur många rullar tapet du behöver.' },
          { slug: 'reglar-kalkylator', title: 'Reglar & virke', description: 'Antal reglar och löpmeter utifrån c/c.' },
          { slug: 'grus-kalkylator', title: 'Grus & makadam', description: 'Volym i m³ och vikt i ton.' },
          { slug: 'gips-kalkylator', title: 'Gips', description: 'Antal gipsskivor utifrån väggyta och lager.' },
          { slug: 'isolering-kalkylator', title: 'Isolering', description: 'Antal förpackningar isolering.' },
          { slug: 'trappa-kalkylator', title: 'Trappa', description: 'Antal steg, steghöjd och stegdjup.' },
          { slug: 'fall-kalkylator', title: 'Fall & lutning', description: 'Höjdskillnad, procent och 1:X.' },
          { slug: 'golvvarme-kalkylator', title: 'Golvvärme', description: 'Slinglängd och antal slingor.' },
          { slug: 'trall-kalkylator', title: 'Trall & altan', description: 'Löpmeter och antal trallbrädor.' },
          { slug: 'staket-kalkylator', title: 'Staket', description: 'Antal stolpar och sektioner.' },
          { slug: 'takstolar-kalkylator', title: 'Beräkna takstolar', description: 'Antal takstolar utifrån c/c.' },
        ],
      },
      {
        heading: 'Mallar',
        tools: [
          { slug: 'offert-mall', title: 'Offertmall', description: 'Skapa offert med rader, moms och ROT – ladda ner som PDF.' },
          { slug: 'faktura-mall', title: 'Fakturamall', description: 'Skapa faktura med nummer, datum, moms och ROT – som PDF.' },
          { slug: 'byggdagbok-mall', title: 'Byggdagbok', description: 'Fyll i dagens arbete och ladda ner som PDF eller Excel.' },
          { slug: 'ata-mall', title: 'ÄTA-mall', description: 'Skapa en tydlig ÄTA-beställning enligt AB 04 – PDF eller Excel.' },
          { slug: 'tidrapport-mall', title: 'Tidrapport', description: 'Timmar per dag, vecka eller månad – PDF eller Excel.' },
          { slug: 'egenkontroll-mall', title: 'Egenkontroll', description: 'Färdiga checklistor för el, VVS, bygg och skyddsrond – PDF eller Excel.' },
          { slug: 'egenkontroll-el-mall', title: 'Egenkontroll el', description: 'Färdig el-checklista: jordfelsbrytare, isolationsmätning, märkning – PDF.' },
          { slug: 'arbetsberedning-mall', title: 'Arbetsberedning', description: 'Planera arbetsmomentet – arbetsgång, risker, kvalitet och resurser – som PDF.' },
        ],
      },
      {
        heading: 'PDF-verktyg',
        tools: [
          { slug: 'sla-ihop-pdf', title: 'Slå ihop PDF', description: 'Kombinera flera PDF:er och bilder till en fil.' },
          { slug: 'dela-pdf', title: 'Dela PDF', description: 'Plocka ut valfria sidor till en ny PDF.' },
          { slug: 'bild-till-pdf', title: 'Bild till PDF', description: 'Gör en PDF av JPG- och PNG-bilder.' },
          { slug: 'pdf-till-jpg', title: 'PDF till JPG', description: 'Konvertera varje sida till en bild.' },
          { slug: 'rotera-pdf', title: 'Rotera PDF', description: 'Vrid sidorna 90, 180 eller 270 grader.' },
          { slug: 'ta-bort-sidor-pdf', title: 'Ta bort sidor', description: 'Ta bort sidor och behåll resten.' },
          { slug: 'vattenstampel-pdf', title: 'Vattenstämpel', description: 'Lägg UTKAST, KOPIA m.m. på alla sidor.' },
          { slug: 'signera-pdf', title: 'Signera PDF', description: 'Rita din signatur och placera den i PDF:en.' },
        ],
      },
    ],
  },
  nb: {
    seoTitle: 'Byggkalkulatorer & gratis verktøy for byggefirmaer | ByggExp',
    seoDescription:
      'Gratis byggkalkulatorer og verktøy: timepris, materialkalkulatorer (gips, betong, tak, gulv) og PDF-verktøy. Rett i nettleseren, uten konto.',
    badge: 'Gratis verktøy',
    h1: 'Gratis byggkalkulatorer og verktøy for byggefirmaer',
    intro:
      'Regn ut material og priser på sekunder – helt gratis og uten konto. Materialkalkulatorene hjelper deg å bestille riktig mengde, og PDF-verktøyene kjører i nettleseren din, så filene lastes aldri opp.',
    groups: [
      {
        heading: 'Kalkulatorer',
        tools: [
          { slug: 'timpris-kalkylator', title: 'Timepris-kalkulator', description: 'Hva du må ta betalt per time ut fra lønn og kostnader.' },
          { slug: 'paslag-marginal-kalkylator', title: 'Påslag & margin', description: 'Regn pris fra selvkost – påslag vs. margin.' },
        ],
      },
      {
        heading: 'Byggkalkulatorer',
        tools: [
          { slug: 'betong-kalkylator', title: 'Betongkalkulator', description: 'Volum og antall sekker for plate, grunn og støp.' },
          { slug: 'tak-kalkylator', title: 'Takkalkulator', description: 'Takflate for saltak og antall takstein.' },
          { slug: 'farg-kalkylator', title: 'Malingsforbruk', description: 'Hvor mange liter maling du trenger.' },
          { slug: 'kvadratmeter-kalkylator', title: 'Kvadratmeter', description: 'Regn ut arealet for ett eller flere rom.' },
          { slug: 'golv-kalkylator', title: 'Gulv & flis', description: 'Materiale og antall pakker for gulv og flis.' },
          { slug: 'tapet-kalkylator', title: 'Tapet', description: 'Hvor mange ruller tapet du trenger.' },
          { slug: 'reglar-kalkylator', title: 'Stendere & trelast', description: 'Antall stendere og løpemeter ut fra cc.' },
          { slug: 'grus-kalkylator', title: 'Grus & pukk', description: 'Volum i m³ og vekt i tonn.' },
          { slug: 'gips-kalkylator', title: 'Gips', description: 'Antall gipsplater ut fra veggflate og lag.' },
          { slug: 'isolering-kalkylator', title: 'Isolasjon', description: 'Antall pakker isolasjon.' },
          { slug: 'trappa-kalkylator', title: 'Trapp', description: 'Antall trinn, opptrinn og inntrinn.' },
          { slug: 'fall-kalkylator', title: 'Fall & helning', description: 'Høydeforskjell, prosent og 1:X.' },
          { slug: 'golvvarme-kalkylator', title: 'Gulvvarme', description: 'Sløyfelengde og antall sløyfer.' },
          { slug: 'trall-kalkylator', title: 'Terrassebord', description: 'Løpemeter og antall terrassebord.' },
          { slug: 'staket-kalkylator', title: 'Gjerde', description: 'Antall stolper og seksjoner.' },
          { slug: 'takstolar-kalkylator', title: 'Beregn takstoler', description: 'Antall takstoler ut fra cc.' },
        ],
      },
      {
        heading: 'PDF-verktøy',
        tools: [
          { slug: 'sla-ihop-pdf', title: 'Slå sammen PDF', description: 'Kombiner flere PDF-er og bilder til én fil.' },
          { slug: 'dela-pdf', title: 'Del PDF', description: 'Plukk ut valgfrie sider til en ny PDF.' },
          { slug: 'bild-till-pdf', title: 'Bilde til PDF', description: 'Lag en PDF av JPG- og PNG-bilder.' },
          { slug: 'pdf-till-jpg', title: 'PDF til JPG', description: 'Konverter hver side til et bilde.' },
          { slug: 'rotera-pdf', title: 'Roter PDF', description: 'Vri sidene 90, 180 eller 270 grader.' },
          { slug: 'ta-bort-sidor-pdf', title: 'Fjern sider', description: 'Fjern sider og behold resten.' },
          { slug: 'vattenstampel-pdf', title: 'Vannmerke', description: 'Legg UTKAST, KOPI m.m. på alle sider.' },
          { slug: 'signera-pdf', title: 'Signer PDF', description: 'Tegn signaturen din og plasser den i PDF-en.' },
        ],
      },
    ],
  },
  en: {
    seoTitle: 'Construction calculators & free tools for builders | ByggExp',
    seoDescription:
      'Free construction calculators and tools: ROT, VAT and hourly rate, material calculators (plasterboard, concrete, roof, flooring) and more. No account.',
    badge: 'Free tools',
    h1: 'Free construction calculators and tools for builders',
    intro:
      'Work out material, prices and deductions – and turn a material estimate into a quote with one click. All free and no account. Prices and ROT follow the Swedish market (SEK).',
    groups: [
      {
        heading: 'Cost & finance calculators',
        tools: [
          { slug: 'rot-avdrag-kalkylator', title: 'ROT deduction calculator', description: 'Work out the ROT deduction and what the customer pays (2026).' },
          { slug: 'moms-kalkylator', title: 'VAT calculator', description: 'Add VAT or reverse-calculate (25/12/6%).' },
          { slug: 'timpris-kalkylator', title: 'Hourly rate calculator', description: 'What to charge per hour from salary and costs.' },
          { slug: 'paslag-marginal-kalkylator', title: 'Markup & margin', description: 'Work out price from cost – markup vs margin.' },
          { slug: 'anstalld-kostnad-kalkylator', title: 'Employee cost', description: 'What an employee really costs, per billable hour.' },
          { slug: 'drojsmalsranta-kalkylator', title: 'Late-payment interest', description: 'Interest on an unpaid invoice (reference rate + 8%).' },
          { slug: 'forseningsvite-kalkylator', title: 'Delay penalty', description: 'Liquidated damages per AB 04/ABT 06.' },
        ],
      },
      {
        heading: 'Construction calculators',
        tools: [
          { slug: 'betong-kalkylator', title: 'Concrete calculator', description: 'Volume, bags, reinforcement and cost for a slab.' },
          { slug: 'tak-kalkylator', title: 'Roof calculator', description: 'Roof area, tiles, gutters and scaffolding.' },
          { slug: 'farg-kalkylator', title: 'Paint coverage', description: 'How many litres of paint you need.' },
          { slug: 'kvadratmeter-kalkylator', title: 'Square metres', description: 'Work out the area of one or more rooms.' },
          { slug: 'golv-kalkylator', title: 'Flooring & tiles', description: 'Material and packs for flooring and tiles.' },
          { slug: 'tapet-kalkylator', title: 'Wallpaper', description: 'How many rolls of wallpaper you need.' },
          { slug: 'reglar-kalkylator', title: 'Studs & timber', description: 'Number of studs and linear metres from c/c.' },
          { slug: 'grus-kalkylator', title: 'Gravel & crushed stone', description: 'Volume in m³ and weight in tonnes.' },
          { slug: 'gips-kalkylator', title: 'Plasterboard', description: 'Number of boards from wall area and layers.' },
          { slug: 'isolering-kalkylator', title: 'Insulation', description: 'Packs, volume and U-value.' },
          { slug: 'trappa-kalkylator', title: 'Stairs', description: 'Number of steps, rise and going.' },
          { slug: 'fall-kalkylator', title: 'Slope & fall', description: 'Height difference, percent and 1:X.' },
          { slug: 'golvvarme-kalkylator', title: 'Underfloor heating', description: 'Loop length and number of loops.' },
          { slug: 'trall-kalkylator', title: 'Decking', description: 'Linear metres and number of deck boards.' },
          { slug: 'staket-kalkylator', title: 'Fence', description: 'Number of posts and sections.' },
          { slug: 'takstolar-kalkylator', title: 'Roof trusses', description: 'Number of trusses from c/c.' },
          { slug: 'u-varde-kalkylator', title: 'U-value', description: 'Thermal resistance and U-value for a construction.' },
          { slug: 'spillprocent-kalkylator', title: 'Waste percentage', description: 'Material need including waste.' },
        ],
      },
    ],
  },
};

type VerktygHubProps = { lang: CalcLocale };

export const getServerSideProps: GetServerSideProps<VerktygHubProps> = async ({ params }) => {
  const lang = params?.lang;
  if (!calcLocaleEnabled(lang)) return { notFound: true };
  return { props: { lang } };
};

export default function VerktygHubPage({
  lang,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg`;

  return (
    <>
      <Head>
        <title>{c.seoTitle}</title>
        <meta name="description" content={c.seoDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.seoTitle} />
        <meta property="og:description" content={c.seoDescription} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>

      <Header headerT={headerT} />

      <main className="verktyg-hub">
        <div className="container container-narrow">
          <header className="verktyg-hub-hero">
            <span className="lead-magnet-badge">{c.badge}</span>
            <h1>{c.h1}</h1>
            <p>{c.intro}</p>
          </header>

          {c.groups.map((group) => (
            <section key={group.heading} className="verktyg-hub-group">
              <h2>{group.heading}</h2>
              <div className="verktyg-hub-grid">
                {group.tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${lang}/verktyg/${tool.slug}`}
                    className="verktyg-hub-card"
                  >
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer footerT={footerT} />
    </>
  );
}
