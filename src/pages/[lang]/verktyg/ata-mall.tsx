import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import AtaMallTool from '../../../components/LeadMagnet/AtaMallTool';
import PartnerServices from '../../../components/LeadMagnet/PartnerServices';
import { CONTRACT_PARTNER_SERVICES } from '../../../content/partner-services';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet (see content-value-strategy): served on /sv only.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad betyder ÄTA?',
    answer:
      'ÄTA står för Ändrings-, Tilläggs- och Avgående arbeten – arbeten som ändras, tillkommer eller utgår jämfört med kontraktet. De regleras i AB 04 kap 2.',
  },
  {
    question: 'Måste en ÄTA vara skriftlig?',
    answer:
      'För din egen säkerhet bör den vara det. Även om arbetet avtalas under resans gång är det den skriftliga beställningen och underrättelsen som gör att du kan få betalt om det blir tvist.',
  },
  {
    question: 'Vad är skillnaden mellan föreskriven och likställd ÄTA?',
    answer:
      'Föreskriven ÄTA (AB 04 kap 2 §3) är en uttrycklig beställning från beställaren. Likställd ÄTA (kap 2 §4) är arbete som jämställs med ÄTA på grund av avvikande förhållanden, utan uttrycklig beställning.',
  },
  {
    question: 'Kan jag förlora rätten till betalning för ÄTA?',
    answer:
      'Ja. Vid likställd ÄTA kan utebliven underrättelse "utan dröjsmål" leda till att rätten till ersättning går förlorad – även om arbetet utförts. Därför är det viktigt att underrätta beställaren i tid.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function AtaMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/ata-mall`;

  const title = 'ÄTA-mall – gratis PDF & Excel | ByggExp';
  const description =
    'Ladda ner en gratis ÄTA-mall som PDF eller Excel, eller fyll i online. Skapa en tydlig ÄTA-beställning enligt AB 04 – med exempel och vad som krävs för att få betalt.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: FAQ.map((item) => ({
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
        badge="Gratis mall"
        title="ÄTA-mall – gratis mall att fylla i online"
        intro="Skapa en tydlig ÄTA-beställning på minuten: typ, beskrivning, mängd, à-pris och vem som beställt. Fyll i formuläret och ladda ner den som PDF eller Excel att signera – eller hantera ÄTA löpande i ByggExp. Klicka på ”Fyll i exempel” för att se en färdig ÄTA."
        tool={<AtaMallTool />}
        leadForm={<ToolLeadForm tool="ata-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/ata-mall-preview.webp"
            alt="Förhandsvisning av en ifylld ÄTA-mall som PDF"
            caption="Så ser en ifylld ÄTA ut som PDF"
            width={1000}
            height={596}
          />
        }
        sections={[
          {
            id: 'vad-ar-ata',
            heading: 'Vad är ÄTA-arbeten?',
            body: (
              <p>
                ÄTA står för <strong>Ändrings-, Tilläggs- och Avgående arbeten</strong> – arbeten som
                tillkommer, ändras eller utgår jämfört med det ursprungliga kontraktet. De regleras i{' '}
                <strong>AB 04 kap 2</strong> (och motsvarande i ABT 06). Eftersom ÄTA påverkar både
                pris och tid är det just här de flesta tvister uppstår – och där en tydlig ÄTA-mall
                sparar både pengar och konflikter.
              </p>
            ),
          },
          {
            id: 'foreskriven-likstalld-ata',
            heading: 'Föreskriven och likställd ÄTA',
            body: (
              <ul>
                <li>
                  <strong>Föreskriven ÄTA (AB 04 kap 2 §3).</strong> Beställaren har rätt att beställa
                  ändringar och tillägg – en uttrycklig beställning.
                </li>
                <li>
                  <strong>Likställd ÄTA (AB 04 kap 2 §4).</strong> Arbete som inte beställts uttryckligen
                  men som jämställs med ÄTA, till exempel för att förhållandena på arbetsplatsen avviker
                  från handlingarna. Det är ofta här pengar går förlorade.
                </li>
              </ul>
            ),
          },
          {
            id: 'sa-far-du-betalt',
            heading: 'Så får du betalt – underrätta i tid',
            body: (
              <>
                <p>
                  Nyckeln till att få betalt för likställd ÄTA är att underrätta beställaren{' '}
                  <strong>utan dröjsmål</strong>:
                </p>
                <ul>
                  <li>
                    Överstiger kostnaden gränsbeloppet (som utgångspunkt ett halvt prisbasbelopp om
                    inget annat avtalats) ska du inhämta beställarens syn <em>innan</em> arbetet utförs.
                  </li>
                  <li>
                    Ligger den under gränsbeloppet får du börja direkt, men måste underrätta utan
                    dröjsmål efteråt.
                  </li>
                  <li>
                    Uteblir underrättelsen kan du förlora rätten till ersättning – även om arbetet
                    utförts.
                  </li>
                </ul>
                <p>
                  Tänk på att en signerad dagbok i sig inte bevisar att en ÄTA är beställd och godkänd –
                  ÄTA behöver en tydlig beställning/underrättelse för sig. Det är precis det den här
                  mallen ger dig.
                </p>
              </>
            ),
          },
          {
            id: 'vad-ska-ata-innehalla',
            heading: 'Vad ska en ÄTA innehålla?',
            body: (
              <ul>
                <li>Projekt och datum</li>
                <li>Beskrivning av arbetet – vad, var och varför</li>
                <li>Typ (ändring, tillägg, avgående) och om den är föreskriven eller likställd</li>
                <li>Mängd och à-pris eller uppskattad kostnad</li>
                <li>Påverkan på tidplanen – begär tidsförlängning när det behövs</li>
                <li>Vem som beställt eller underrättats, och när</li>
              </ul>
            ),
          },
          {
            id: 'vanliga-misstag-ata',
            heading: 'Vanliga misstag som kostar pengar',
            body: (
              <ul>
                <li>
                  <strong>Muntliga beställningar.</strong> ”Fixa det där också” räcker inte – få det
                  skriftligt.
                </li>
                <li>
                  <strong>Ingen underrättelse i tid.</strong> Vid likställd ÄTA är det just den uteblivna
                  underrättelsen som fäller dig.
                </li>
                <li>
                  <strong>Förlita sig på dagbokssignering.</strong> En signerad dagbok bevisar inte att
                  ÄTA är godkänd.
                </li>
                <li>
                  <strong>Glömma tidsförlängning.</strong> Kräv tid samtidigt som pengar när arbetet
                  påverkar tidplanen.
                </li>
              </ul>
            ),
          },
          {
            id: 'ata-i-byggexp',
            heading: 'Så hanterar du ÄTA i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. Vill du slippa lösa PDF:er kan du hantera ÄTA löpande
                i ByggExp: notera den direkt i projektet, koppla foton och beställarens mejl som
                underlag och ta med godkända ÄTA som tydliga rader på fakturan. Eftersom ÄTA, dagbok,
                tid och ekonomi ligger i samma app hänger allt ihop – från beställning till betald
                faktura.
              </p>
            ),
          },
          {
            id: 'relaterade-tjanster',
            heading: 'Innan ÄTA blir en tvist',
            body: (
              <PartnerServices items={CONTRACT_PARTNER_SERVICES} context="ata-mall" />
            ),
          },
        ]}
        faqHeading="Vanliga frågor om ÄTA"
        faq={FAQ}
        cta={{
          heading: 'Hantera ÄTA hela vägen till fakturan i ByggExp',
          text: 'Dokumentera ÄTA, dagbok, tid och ekonomi i en app – från offert till lön. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/blog/ata-arbeten`, label: 'Guide: ÄTA-arbeten enligt AB 04' },
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/verktyg/offert-mall`, label: 'Offert – gratis mall' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
