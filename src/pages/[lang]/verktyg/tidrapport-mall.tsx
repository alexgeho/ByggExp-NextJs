import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import TidrapportTool from '../../../components/LeadMagnet/TidrapportTool';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

// sv-only lead magnet — see content-value-strategy. Served on /sv, 404 elsewhere.
const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en tidrapport innehålla?',
    answer:
      'Normalt vem som arbetat, vilket projekt, datum och antal timmar per dag samt en summering. Mallen ovan räknar ut totalen automatiskt.',
  },
  {
    question: 'Kan jag använda tidrapporten som underlag för lön och fakturering?',
    answer:
      'Ja. En ifylld tidrapport med timmar per projekt fungerar som underlag för både löneberäkning och fakturering av nedlagd tid.',
  },
  {
    question: 'Kan jag rapportera tid automatiskt?',
    answer:
      'Ja. I ByggExp kan tiden samlas automatiskt via GPS-incheckning per projekt, så att du slipper fylla i timmar för hand och kan exportera direkt.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) {
    return { notFound: true };
  }
  return { props: {} };
};

export default function TidrapportMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/tidrapport-mall`;

  const title = 'Tidrapport mall – gratis mall & guide | ByggExp';
  const description =
    'Ladda ner en gratis tidrapport-mall eller fyll i online och spara som PDF. Summera timmar per projekt automatiskt – för byggföretag och hantverkare.';

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
        title="Tidrapport – gratis mall att fylla i online"
        intro="Med den här gratis tidrapport-mallen fyller du i arbetstimmar per dag och projekt och laddar ner en färdig PDF – summan räknas ut automatiskt. Perfekt som underlag för lön och fakturering."
        tool={<TidrapportTool />}
        sections={[
          {
            id: 'vad-ar-tidrapport',
            heading: 'Vad är en tidrapport?',
            body: (
              <p>
                En tidrapport är en sammanställning av arbetad tid – vem som jobbat, på vilket
                projekt och hur många timmar per dag. Den är underlag för både löneberäkning och för
                att fakturera kunden rätt antal timmar.
              </p>
            ),
          },
          {
            id: 'vad-ska-tidrapport-innehalla',
            heading: 'Vad ska en tidrapport innehålla?',
            body: (
              <ul>
                <li>Anställd och projekt</li>
                <li>Datum för varje arbetspass</li>
                <li>Antal timmar per dag</li>
                <li>Eventuell anteckning (t.ex. moment eller övertid)</li>
                <li>Summering av totalt antal timmar</li>
              </ul>
            ),
          },
          {
            id: 'tidrapport-i-byggexp',
            heading: 'Så slipper du fylla i tidrapporten för hand',
            body: (
              <p>
                Mallen ovan är gratis att använda. I ByggExp kan tidrapporteringen ske automatiskt:
                med GPS-incheckning samlas timmarna per projekt, och du exporterar dem direkt som
                underlag för lön och fakturering – utan dubbelarbete.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om tidrapport"
        faq={FAQ}
        cta={{
          heading: 'Automatisk tidrapportering i ByggExp',
          text: 'Låt GPS-incheckningen samla timmarna och exportera direkt till lön och faktura. Boka en demo och se hur det fungerar.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler guider och mallar"
        related={[
          { href: `/${LOCALE}/verktyg/byggdagbok-mall`, label: 'Byggdagbok – gratis mall' },
          { href: `/${LOCALE}/blog/automatisk-tidrapportering-och-export`, label: 'Automatisk tidrapportering' },
          { href: `/${LOCALE}/blog/loneunderlag-for-byggforetag`, label: 'Löneunderlag för byggföretag' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
