import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import BetalningspaminnelseMallTool from '../../../components/LeadMagnet/BetalningspaminnelseMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Får jag ta ut avgift på en betalningspåminnelse?',
    answer:
      'Ja. Mot en privatperson får du ta ut en lagstadgad påminnelseavgift på 60 kr om det avtalats eller framgått. Mot ett företag har du alltid rätt till en förseningsersättning på 450 kr direkt när fakturan förfaller, utan påminnelse.',
  },
  {
    question: 'När kan jag skicka påminnelse?',
    answer:
      'Så snart fakturan har förfallit. Du behöver inte vänta – men ge kunden en ny, rimlig förfallodag i påminnelsen innan ärendet går vidare till inkasso.',
  },
  {
    question: 'Kan jag ta dröjsmålsränta också?',
    answer:
      'Ja, dröjsmålsränta enligt räntelagen (referensränta + 8 procentenheter) från förfallodagen. Mot företag räcker det ofta att fakturan förfallit; skriv gärna in räntesatsen i påminnelsen.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Fyll i och ladda ner PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function BetalningspaminnelseMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/betalningspaminnelse-mall`;
  const title = 'Betalningspåminnelse mall gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis betalningspåminnelse-mall. Fyll i den obetalda fakturan, lägg på lagstadgad avgift och dröjsmålsränta och få en färdig påminnelse som PDF.';

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
        badge="Gratis mall"
        title="Betalningspåminnelse – gratis mall"
        intro="Fyll i den obetalda fakturan och ladda ner en färdig betalningspåminnelse som PDF eller Excel. Lägg på lagstadgad avgift och dröjsmålsränta – en tydlig påminnelse gör att fler betalar innan det går till inkasso."
        tool={<BetalningspaminnelseMallTool />}
        leadForm={<ToolLeadForm tool="betalningspaminnelse-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/betalningspaminnelse-preview.webp"
            alt="Förhandsvisning av betalningspåminnelse-mallen"
            caption="Så ser betalningspåminnelse-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska påminnelsen innehålla?',
            body: (
              <ul>
                <li>Fakturanummer, ursprungligt belopp och förfallodag.</li>
                <li>Lagstadgad avgift (60 kr privat / 450 kr företag) och dröjsmålsränta.</li>
                <li>En ny, tydlig förfallodag.</li>
                <li>Besked om att ärendet annars går till inkasso.</li>
              </ul>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om betalningspåminnelse"
        faq={FAQ}
        cta={{
          heading: 'Slipp jaga betalningar i ByggExp',
          text: 'Fakturera med tydliga villkor och håll koll på förfallodatum. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/kunden-betalar-inte-fakturan`, label: 'När kunden inte betalar' },
          { href: `/${LOCALE}/blog/drojsmalsranta-2026`, label: 'Dröjsmålsränta 2026' },
          { href: `/${LOCALE}/verktyg/drojsmalsranta-kalkylator`, label: 'Dröjsmålsränta-kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
