import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactNode } from 'react';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import BetongKalkylatorTool from '../../../components/LeadMagnet/BetongKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { calcLocaleEnabled, type CalcLocale } from '../../../lib/locale';
import { localeOrigin } from '../../../lib/seo';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv served on byggexp.se, nb served on byggexp.no (Norway expansion). Content is
// keyed by locale; the page renders whichever the [lang] segment asks for. nb is
// gated by NB_LIVE (see lib/locale) until byggexp.no goes live.
type Locale = CalcLocale;

type ToolContent = {
  metaTitle: string;
  description: string;
  badge: string;
  h1: string;
  intro: string;
  previewAlt: string;
  previewCaption: string;
  sections: { id: string; heading: string; body: ReactNode }[];
  faqHeading: string;
  faq: LeadMagnetFaqItem[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  relatedHeading: string;
  related: { slug: string; label: string }[];
};

const CONTENT: Record<Locale, ToolContent> = {
  sv: {
    metaTitle: 'Betongkalkylator 2026 – volym, säckar & vatten | ByggExp',
    description:
      'Räkna ut betong för platta, grundbalk eller plintar: volym i m³, antal säckar torrbetong, blandningsvatten och armeringsnät. Gratis betongkalkylator, utan konto.',
    badge: 'Gratis kalkylator',
    h1: 'Betongkalkylator',
    intro:
      'Ska du gjuta en platta på mark, en grundbalk eller plintar? Fyll i måtten så räknar vi fram hela materiallistan – betongvolym, armering, cellplast och bärlager – och ett riktpris med både material och arbete. Bra att ha inför inköp eller offert.',
    previewAlt: 'Förhandsvisning av betongberäknare',
    previewCaption: 'Så ser betongberäknaren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Så räknas volymen – per gjutning',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/betong.webp" alt="Diagram: betongvolym för platta på mark med kantbalk" width={720} height={380} loading="lazy" />
              <figcaption>Volym = längd × bredd × tjocklek, plus kantbalken runt omkretsen. 1 m³ ≈ 80 säckar 25 kg.</figcaption>
            </figure>
            <ul>
              <li><strong>Platta / golv:</strong> längd × bredd × tjocklek. Med kantbalk läggs omkrets × kantbalkens bredd × höjd till.</li>
              <li><strong>Grundmur / balk:</strong> längd × bredd × höjd.</li>
              <li><strong>Plintar / stolphål (runda):</strong> π × radie² × djup, gånger antal hål.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'volym-till-sackar',
        heading: 'Från volym till säckar och vatten',
        body: (
          <ul>
            <li>1 m³ = <strong>1000 liter</strong> betong.</li>
            <li>En säck <strong>25 kg</strong> torrbetong ≈ 12,5 liter → ca <strong>80 säckar per m³</strong>.</li>
            <li>En <strong>storsäck 1000 kg</strong> ≈ 520 liter.</li>
            <li>Blandningsvatten: ca <strong>3–4 liter per säck</strong>.</li>
          </ul>
        ),
      },
      {
        id: 'platta-kantbalk',
        heading: 'Platta på mark: glöm inte kantbalken',
        body: (
          <p>
            Den förtjockade kanten rymmer mer betong än man tror. Ett garage på 5 × 10 m ger
            ca 5 m³ i själva plattan men nästan 1 m³ till i kantbalken – räkna alltid med den,
            annars beställer du för lite.
          </p>
        ),
      },
      {
        id: 'sack-eller-fabriksbetong',
        heading: 'Säckbetong eller fabriksbetong?',
        body: (
          <p>
            För mindre jobb är säckbetong smidigt. Från ungefär 1–2 m³ blir fabriksbetong
            (färdig betong som levereras med bil) oftast både billigare och enklare än att
            blanda många säckar för hand – och du hinner gjuta innan betongen börjar binda.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanliga frågor om betong',
    faq: [
      {
        question: 'Hur räknar jag ut betongvolym?',
        answer:
          'För en platta är volymen längd × bredd × tjocklek i meter (5 × 4 × 0,10 = 2 m³). För en balk/grundmur längd × bredd × höjd, och för runda plintar π × radie² × djup × antal. Kalkylatorn väljer rätt formel utifrån vad du gjuter och lägger på spill.',
      },
      {
        question: 'Hur många säckar betong går det på en kubik?',
        answer:
          'En 25 kg säck torrbetong ger ofta ca 12,5 liter färdig betong, så en kubikmeter (1000 liter) motsvarar ungefär 80 säckar. En storsäck om 1000 kg ger ca 520 liter. Kontrollera alltid värdet på din förpackning.',
      },
      {
        question: 'Måste jag räkna med kantbalken?',
        answer:
          'Ja – den förtjockade kanten rymmer förvånansvärt mycket betong och glöms lätt bort. Välj "Kantbalk: Ja" och ange bredd och höjd, så lägger kalkylatorn till volymen runt hela plattans omkrets automatiskt.',
      },
      {
        question: 'Hur mycket vatten behöver jag blanda i?',
        answer:
          'Räkna med ca 3–4 liter vatten per 25 kg-säck. Kalkylatorn visar ett riktvärde för hela mängden – följ produktens anvisning för exakt konsistens.',
      },
      {
        question: 'När ska jag beställa färdig betong i stället för säck?',
        answer:
          'Tumregeln är runt 1–2 m³: över den mängden blir fabriksbetong oftast både billigare och enklare än att blanda säck för säck. Under det räcker säckbetong gott.',
      },
      {
        question: 'Kostar det något?',
        answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
      },
    ],
    ctaHeading: 'Håll koll på material och ekonomi i ByggExp',
    ctaText: 'Följ material, tid och kostnader per projekt. Boka en demo.',
    ctaButton: 'Boka demo',
    relatedHeading: 'Fler byggkalkylatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberäknare' },
      { slug: 'tak-kalkylator', label: 'Takberäknare' },
      { slug: '', label: 'Alla gratis verktyg' },
    ],
  },
  nb: {
    metaTitle: 'Betongkalkulator 2026 – volum, sekker & vann | ByggExp',
    description:
      'Regn ut betong for plate, grunnbjelke eller plinter: volum i m³, antall sekker tørrbetong, blandevann og armeringsnett. Gratis betongkalkulator, uten konto.',
    badge: 'Gratis kalkulator',
    h1: 'Betongkalkulator',
    intro:
      'Velg hva du støper – plate, grunnbjelke eller plinter – så regner vi ut betongvolum i kubikkmeter, antall sekker tørrbetong, blandevann og armeringsnett. En sekk 25 kg gir ca. 12,5 liter ferdig betong.',
    previewAlt: 'Forhåndsvisning av betongberegner',
    previewCaption: 'Slik ser betongberegneren ut',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'Slik regnes volumet – per støping',
        body: (
          <ul>
            <li><strong>Plate / gulv:</strong> lengde × bredde × tykkelse. Med kantbjelke legges omkrets × kantbjelkens bredde × høyde til.</li>
            <li><strong>Grunnmur / bjelke:</strong> lengde × bredde × høyde.</li>
            <li><strong>Plinter / stolpehull (runde):</strong> π × radius² × dybde, ganger antall hull.</li>
          </ul>
        ),
      },
      {
        id: 'volym-till-sackar',
        heading: 'Fra volum til sekker og vann',
        body: (
          <ul>
            <li>1 m³ = <strong>1000 liter</strong> betong.</li>
            <li>En sekk <strong>25 kg</strong> tørrbetong ≈ 12,5 liter → ca. <strong>80 sekker per m³</strong>.</li>
            <li>En <strong>storsekk 1000 kg</strong> ≈ 520 liter.</li>
            <li>Blandevann: ca. <strong>3–4 liter per sekk</strong>.</li>
          </ul>
        ),
      },
      {
        id: 'platta-kantbalk',
        heading: 'Plate på mark: ikke glem kantbjelken',
        body: (
          <p>
            Den fortykkede kanten rommer mer betong enn man tror. En garasje på 5 × 10 m gir
            ca. 5 m³ i selve platen, men nesten 1 m³ til i kantbjelken – regn alltid med den,
            ellers bestiller du for lite.
          </p>
        ),
      },
      {
        id: 'sack-eller-fabriksbetong',
        heading: 'Sekkebetong eller fabrikkbetong?',
        body: (
          <p>
            For mindre jobber er sekkebetong smidig. Fra omtrent 1–2 m³ blir fabrikkbetong
            (ferdig betong som leveres med bil) som regel både billigere og enklere enn å
            blande mange sekker for hånd – og du rekker å støpe før betongen begynner å binde.
          </p>
        ),
      },
    ],
    faqHeading: 'Vanlige spørsmål om betong',
    faq: [
      {
        question: 'Hvordan regner jeg ut betongvolum?',
        answer:
          'For en plate er volumet lengde × bredde × tykkelse i meter (5 × 4 × 0,10 = 2 m³). For en bjelke/grunnmur lengde × bredde × høyde, og for runde plinter π × radius² × dybde × antall. Kalkulatoren velger riktig formel ut fra hva du støper og legger på svinn.',
      },
      {
        question: 'Hvor mange sekker betong går det på en kubikk?',
        answer:
          'En 25 kg sekk tørrbetong gir ofte ca. 12,5 liter ferdig betong, så en kubikkmeter (1000 liter) tilsvarer omtrent 80 sekker. En storsekk på 1000 kg gir ca. 520 liter. Kontroller alltid verdien på pakken din.',
      },
      {
        question: 'Ikke glem kantbjelken på en plate på mark',
        answer:
          'Den fortykkede kanten (kantbjelken) rommer overraskende mye betong. Velg "Kantbjelke: Ja" og angi bredden og høyden, så legges volumet rundt hele platens omkrets til automatisk.',
      },
      {
        question: 'Hvor mye vann trenger jeg å blande i?',
        answer:
          'Regn med ca. 3–4 liter vann per 25 kg-sekk. Kalkulatoren viser en veiledende verdi for hele mengden – følg produktets anvisning for eksakt konsistens.',
      },
      {
        question: 'Når bør jeg bestille ferdig betong i stedet for sekk?',
        answer:
          'Fra omtrent 1–2 m³ blir fabrikkbetong (ferdig betong som leveres med bil) som regel både billigere og enklere enn å blande mange sekker for hånd. For mindre jobber holder sekkebetong bra.',
      },
      {
        question: 'Koster det noe?',
        answer: 'Nei, kalkulatoren er gratis og krever ingen konto.',
      },
    ],
    ctaHeading: 'Hold styr på materialer og økonomi i ByggExp',
    ctaText: 'Følg materialer, tid og kostnader per prosjekt. Bestill en demo.',
    ctaButton: 'Bestill demo',
    relatedHeading: 'Flere byggkalkulatorer',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Kvadratmeterberegner' },
      { slug: 'tak-kalkylator', label: 'Takberegner' },
      { slug: '', label: 'Alle gratis verktøy' },
    ],
  },
  en: {
    metaTitle: 'Concrete calculator 2026 – volume, bags & water | ByggExp',
    description:
      'Work out concrete for a slab, footing or piers: volume in m³, number of dry-mix bags, mixing water and reinforcement mesh. Free concrete calculator, no account.',
    badge: 'Free calculator',
    h1: 'Concrete calculator',
    intro:
      'Choose what you are casting – slab on grade, footing or piers – and we work out the concrete volume in cubic metres, number of dry-mix bags, mixing water and reinforcement mesh. A 25 kg bag yields about 12.5 litres of finished concrete.',
    previewAlt: 'Preview of the concrete calculator',
    previewCaption: 'This is how the concrete calculator looks',
    sections: [
      {
        id: 'sa-raknar-du',
        heading: 'How the volume is calculated – per pour',
        body: (
          <>
            <figure className="lm-diagram">
              <img src="/landing/diagrams/betong.webp" alt="Diagram: concrete volume for a slab on grade with edge beam" width={720} height={380} loading="lazy" />
              <figcaption>Volume = length × width × thickness, plus the edge beam around the perimeter. 1 m³ ≈ 80 bags of 25 kg.</figcaption>
            </figure>
            <ul>
              <li><strong>Slab / floor:</strong> length × width × thickness. With an edge beam, add perimeter × edge-beam width × height.</li>
              <li><strong>Footing / beam:</strong> length × width × height.</li>
              <li><strong>Piers / post holes (round):</strong> π × radius² × depth, times the number of holes.</li>
            </ul>
          </>
        ),
      },
      {
        id: 'volym-till-sackar',
        heading: 'From volume to bags and water',
        body: (
          <ul>
            <li>1 m³ = <strong>1000 litres</strong> of concrete.</li>
            <li>A <strong>25 kg</strong> bag of dry-mix ≈ 12.5 litres → about <strong>80 bags per m³</strong>.</li>
            <li>A <strong>1000 kg big bag</strong> ≈ 520 litres.</li>
            <li>Mixing water: about <strong>3–4 litres per bag</strong>.</li>
          </ul>
        ),
      },
      {
        id: 'platta-kantbalk',
        heading: 'Slab on grade: don’t forget the edge beam',
        body: (
          <p>
            The thickened edge holds more concrete than you might think. A 5 × 10 m garage gives
            about 5 m³ in the slab itself but almost another 1 m³ in the edge beam – always include
            it, otherwise you will order too little.
          </p>
        ),
      },
      {
        id: 'sack-eller-fabriksbetong',
        heading: 'Bagged or ready-mix concrete?',
        body: (
          <p>
            For smaller jobs, bagged concrete is convenient. From roughly 1–2 m³, ready-mix concrete
            (delivered by truck) is usually both cheaper and easier than mixing many bags by hand –
            and you finish the pour before the concrete starts to set.
          </p>
        ),
      },
    ],
    faqHeading: 'Frequently asked questions about concrete',
    faq: [
      {
        question: 'How do I calculate concrete volume?',
        answer:
          'For a slab the volume is length × width × thickness in metres (5 × 4 × 0.10 = 2 m³). For a beam/footing length × width × height, and for round piers π × radius² × depth × count. The calculator picks the right formula for what you are casting and adds waste.',
      },
      {
        question: 'How many bags of concrete are in a cubic metre?',
        answer:
          'A 25 kg bag of dry-mix often yields about 12.5 litres of finished concrete, so a cubic metre (1000 litres) is roughly 80 bags. A 1000 kg big bag gives about 520 litres. Always check the value on your packaging.',
      },
      {
        question: 'Don’t forget the edge beam on a slab on grade',
        answer:
          'The thickened edge (edge beam) holds surprisingly much concrete. Choose "Edge beam: Yes" and enter its width and depth, and the volume around the whole slab perimeter is added automatically.',
      },
      {
        question: 'How much water do I need to mix in?',
        answer:
          'Reckon about 3–4 litres of water per 25 kg bag. The calculator shows a guide value for the whole amount – follow the product instructions for the exact consistency.',
      },
      {
        question: 'When should I order ready-mix instead of bags?',
        answer:
          'From roughly 1–2 m³, ready-mix concrete (delivered by truck) is usually both cheaper and easier than mixing many bags by hand. For smaller jobs bagged concrete is fine.',
      },
      {
        question: 'Does it cost anything?',
        answer: 'No, the calculator is free and requires no account.',
      },
    ],
    ctaHeading: 'Keep track of material and finances in ByggExp',
    ctaText: 'Follow material, time and costs per project. Book a demo.',
    ctaButton: 'Book a demo',
    relatedHeading: 'More construction calculators',
    related: [
      { slug: 'kvadratmeter-kalkylator', label: 'Square-metre calculator' },
      { slug: 'tak-kalkylator', label: 'Roof calculator' },
      { slug: '', label: 'All free tools' },
    ],
  },
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const lang = params?.lang;
  if (!calcLocaleEnabled(lang)) {
    return { notFound: true };
  }
  return { props: { lang } };
};

export default function Page({ lang }: { lang: Locale }) {
  const c = CONTENT[lang];
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/verktyg/betong-kalkylator`;

  return (
    <>
      <Head>
        <title>{c.metaTitle}</title>
        <meta name="description" content={c.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={c.metaTitle} />
        <meta property="og:description" content={c.description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: c.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            }),
          }}
        />
      </Head>

      <Header headerT={headerT} />

      <LeadMagnetPage
        badge={c.badge}
        title={c.h1}
        intro={c.intro}
        embedSlug="betong-kalkylator"
        embedTitle={c.h1}
        locale={lang}
        tool={<BetongKalkylatorTool locale={lang} />}
        leadForm={<ToolLeadForm tool="betong-kalkylator" locale={lang} />}
        preview={
          <PreviewImage
            src="/landing/verktyg/betong-preview.webp"
            alt={c.previewAlt}
            caption={c.previewCaption}
            width={1000}
            height={474}
          />
        }
        sections={c.sections}
        faqHeading={c.faqHeading}
        faq={c.faq}
        cta={{
          heading: c.ctaHeading,
          text: c.ctaText,
          buttonLabel: c.ctaButton,
          href: `/${lang}/contact`,
        }}
        relatedHeading={c.relatedHeading}
        related={c.related.map((r) => ({
          href: `/${lang}/verktyg${r.slug ? `/${r.slug}` : ''}`,
          label: r.label,
        }))}
      />

      <Footer footerT={footerT} />
    </>
  );
}
