import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import ByggdagbokTool from '../../../components/LeadMagnet/ByggdagbokTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// This lead magnet targets the Swedish market only (see content-value-strategy):
// no en/ru versions, so the page is served on /sv/... and 404s elsewhere, and
// emits a self-canonical with no hreflang alternates.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Är en byggdagbok ett krav?',
    answer:
      'I entreprenader enligt AB 04 ska entreprenören föra dagbok över förhållanden av betydelse för entreprenaden och löpande delge beställaren innehållet. Vad dagboken bör innehålla styrs ofta av AMA AF (AF AMA 07).',
  },
  {
    question: 'Vad ska en byggdagbok innehålla?',
    answer:
      'Vanligtvis datum, väder och temperatur, vilka som var på plats och ansvarig, utfört arbete, avvikelser och hinder, ÄTA och ändringar, leveranser och material samt kontroller. Vår mall täcker alla dessa fält.',
  },
  {
    question: 'Kan jag föra byggdagbok digitalt?',
    answer:
      'Ja. Du kan fylla i mallen ovan och spara som PDF, eller föra byggdagbok löpande i ByggExp där varje inlägg kopplas till rätt projekt med foton.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function ByggdagbokMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/byggdagbok-mall`;

  const title = 'Byggdagbok mall – gratis mall & guide | ByggExp';
  const description =
    'Ladda ner en gratis byggdagbok-mall eller fyll i direkt online och spara som PDF. Guide till vad en byggdagbok ska innehålla enligt AB 04 och AMA AF.';

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
        title="Byggdagbok – gratis mall att fylla i online"
        intro="Med den här gratis byggdagbok-mallen dokumenterar du dagens arbete på några minuter: väder, bemanning, utfört arbete, avvikelser och ÄTA. Fyll i formuläret och ladda ner en färdig PDF – eller för byggdagbok digitalt i ByggExp."
        tool={<ByggdagbokTool />}
        sections={[
          {
            id: 'vad-ar-byggdagbok',
            heading: 'Vad är en byggdagbok?',
            body: (
              <p>
                En byggdagbok är en löpande dokumentation av vad som händer på bygget dag för dag –
                utfört arbete, vilka som var på plats, väder, avvikelser och ändringar. Den fungerar
                som ett gemensamt minne för projektet och som underlag vid besiktning, fakturering
                eller en eventuell tvist.
              </p>
            ),
          },
          {
            id: 'vad-ska-byggdagbok-innehalla',
            heading: 'Vad ska en byggdagbok innehålla?',
            body: (
              <>
                <p>
                  Det finns ingen fast lista, men en komplett byggdagbok innehåller normalt följande –
                  och det är precis fälten i mallen ovan:
                </p>
                <ul>
                  <li>Datum och projekt / arbetsplats</li>
                  <li>Väder och temperatur</li>
                  <li>Antal på plats och vilka som arbetade</li>
                  <li>Utfört arbete under dagen</li>
                  <li>Avvikelser och hinder</li>
                  <li>ÄTA-arbeten och ändringar</li>
                  <li>Leveranser och material</li>
                  <li>Kontroller och övriga anteckningar</li>
                </ul>
              </>
            ),
          },
          {
            id: 'byggdagbok-lag-ab04-ama-af',
            heading: 'Vad säger lagen – AB 04 och AMA AF',
            body: (
              <p>
                I entreprenader enligt standardavtalet <strong>AB 04</strong> ska entreprenören föra
                dagbok över omständigheter av betydelse för entreprenaden och fortlöpande delge
                beställaren innehållet. Hur dagboken utformas styrs ofta av{' '}
                <strong>AMA AF (AF AMA 07)</strong>, som anger vilka uppgifter som förväntas. En väl
                förd byggdagbok blir därför både ett avtalskrav och ett viktigt bevisunderlag om
                tidplan, ÄTA eller ansvar ifrågasätts i efterhand.
              </p>
            ),
          },
          {
            id: 'byggdagbok-i-byggexp',
            heading: 'Så för du byggdagbok i ByggExp',
            body: (
              <p>
                Mallen ovan är gratis att använda. Vill du slippa lösa PDF:er kan du föra byggdagbok
                löpande i ByggExp: varje inlägg kopplas till rätt projekt, du bifogar foton direkt
                från mobilen och bygger en komplett historik dag för dag – utan papper.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om byggdagbok"
        faq={FAQ}
        cta={{
          heading: 'För byggdagbok automatiskt i ByggExp',
          text: 'Dokumentera bygget, tiden och ekonomin i en app – från offert till lön. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/verktyg/egenkontroll-mall`, label: 'Egenkontroll – gratis mall' },
          { href: `/${LOCALE}/blog/dokumentera-med-foton-pa-bygget`, label: 'Dokumentera med foton på bygget' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
