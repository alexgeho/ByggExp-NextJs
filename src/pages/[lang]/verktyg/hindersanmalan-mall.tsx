import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import HindersanmalanMallTool from '../../../components/LeadMagnet/HindersanmalanMallTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Serves "hindersanmälan
// mall" / "hinderanmälan ab04": fill in a notice of hindrance (AB 04 / ABT 06
// kap 4 §§ 3–4) and download a ready-to-send letter as PDF.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad är en hindersanmälan?',
    answer:
      'En hindersanmälan är entreprenörens underrättelse till beställaren om att något hindrar arbetet från att bli klart inom kontraktstiden, tillsammans med en begäran om tidsförlängning. Enligt AB 04 och ABT 06 kap 4 § 3 har entreprenören rätt till förlängning vid bland annat förhållanden på beställarens sida, myndighetsbeslut, strejk eller epidemi och osedvanligt väder.',
  },
  {
    question: 'När måste hindret anmälas?',
    answer:
      'Utan dröjsmål, enligt kap 4 § 4 – alltså så snart du insett eller borde ha insett att förhållandet kan försena entreprenaden. Det finns ingen fast frist i dagar. Anmäls hindret inte i tid får det normalt inte åberopas, och då kan förseningsvite löpa.',
  },
  {
    question: 'Måste hindersanmälan vara skriftlig?',
    answer:
      'AB 04 och ABT 06 ställer inget formkrav på skriftlighet för underrättelse om hinder. Men det är du som ska kunna visa att du anmält i tid, så skicka alltid en skriftlig anmälan – helst med mottagningsbekräftelse – till beställarens behöriga ombud.',
  },
  {
    question: 'Vad ska en hindersanmälan innehålla?',
    answer:
      'Parter, projekt och kontrakt, vad som hindrar och varför, vilken grund i kap 4 § 3 du åberopar, när hindret upptäcktes, hur tidplanen påverkas och hur lång förlängning du begär. Kräver du ersättning (vid hinder på beställarens sida) anger du det också. Datera och skriv under.',
  },
  {
    question: 'Ger en hindersanmälan rätt till ersättning?',
    answer:
      'Inte alltid. Hinder som beror på beställaren eller förhållanden på beställarens sida (punkt 1) kan ge både tidsförlängning och ersättning enligt kap 5 § 4. Övriga grunder, som strejk eller osedvanligt väder, ger normalt bara mer tid.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function HindersanmalanMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/hindersanmalan-mall`;
  const title = 'Hindersanmälan mall – gratis (PDF) | ByggExp';
  const description =
    'Gratis mall för hindersanmälan enligt AB 04 och ABT 06 kap 4 § 3–4. Fyll i hinder, orsak, grund och begärd tidsförlängning – ladda ner ett färdigt brev som PDF. Utan konto.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
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
        disclaimer={false}
        badge="Gratis mall"
        title="Hindersanmälan – mall enligt AB 04 och ABT 06"
        intro="Anmäl hindret utan dröjsmål och begär tidsförlängning. Fyll i och ladda ner som PDF."
        tool={<HindersanmalanMallTool />}
        leadForm={<ToolLeadForm tool="hindersanmalan-mall" />}
        sections={[
          {
            id: 'sa-anmaler-du-hinder',
            heading: 'Så anmäler du hinder',
            body: (
              <ol>
                <li>Anmäl så fort du ser att hindret kan försena arbetet – vänta inte till byggmötet.</li>
                <li>Beskriv hindret, orsaken och vilken punkt i kap 4 § 3 du åberopar.</li>
                <li>Ange hur tidplanen påverkas och hur lång förlängning du begär.</li>
                <li>Skicka till beställarens behöriga ombud och be om mottagningsbekräftelse.</li>
                <li>
                  Läs mer i guiden{' '}
                  <a href={`/${LOCALE}/blog/hindersanmalan-tidsforlangning-ab04`}>
                    Hindersanmälan och tidsförlängning enligt AB 04
                  </a>
                  .
                </li>
              </ol>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om hindersanmälan"
        faq={FAQ}
        cta={{
          heading: 'Hinder, ÄTA och tidplan i ByggExp',
          text: 'Dokumentera hinder och ÄTA per projekt med datum och spårbar historik. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/verktyg/ata-mall`, label: 'ÄTA-mall' },
          { href: `/${LOCALE}/verktyg/forseningsvite-kalkylator`, label: 'Förseningsvite – kalkylator' },
          { href: `/${LOCALE}/verktyg/entreprenadkontrakt-mall`, label: 'Entreprenadkontrakt-mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
