import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FargKalkylatorTool from '../../../components/LeadMagnet/FargKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur mycket färg går det åt per kvadratmeter?',
    answer:
      'Det beror på färgtypen. Inne ligger vägg- och takfärg ofta på ca 6–8 m² per liter och strykning, träfasad kring 5 m²/l och putsad fasad kring 4 m²/l. Kalkylatorn föreslår ett värde per färgtyp som du kan justera efter burken.',
  },
  {
    question: 'Hur många strykningar behöver jag?',
    answer:
      'Oftast två strykningar för ett jämnt resultat, ibland tre på sugande eller kraftigt kulört underlag. Kalkylatorn räknar med det antal du anger.',
  },
  {
    question: 'Ska jag dra av fönster och dörrar?',
    answer:
      'Ja, för en mer exakt mängd. Ange den sammanlagda ytan för fönster och dörrar i fältet "Avdrag" så räknas de bort innan färgåtgången beräknas.',
  },
  {
    question: 'Varför går det åt mer färg än beräknat?',
    answer:
      'Sugande, grova eller obehandlade underlag drar mer, och ett mörkt-till-ljust kulörbyte kan kräva en extra strykning eller grundfärg. Räkna gärna med lite marginal.',
  },
  {
    question: 'Kostar det något?',
    answer: 'Nej, kalkylatorn är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function FargKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/farg-kalkylator`;
  const title = 'Färgkalkylator – räkna färgåtgång (liter) | ByggExp';
  const description =
    'Räkna ut färgåtgången i liter: yta, antal strykningar och täckförmåga per färgtyp (vägg, tak, träfasad, puts) – med avdrag för fönster och dörrar. Gratis, utan konto.';

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
        badge="Gratis kalkylator"
        title="Färgkalkylator"
        intro="Välj färgtyp – innervägg, tak, träfasad eller puts – ange ytan och antal strykningar, så räknar vi ut hur många liter färg du behöver, med avdrag för fönster och dörrar. Täckförmågan sätts efter färgtyp och kan justeras."
        tool={<FargKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/farg-preview.webp"
            alt="Förhandsvisning av färgåtgång-kalkylator"
            caption="Så ser färgåtgång-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknas färgåtgången',
            body: (
              <p>
                Formeln är: (yta − fönster/dörrar) × antal strykningar ÷ täckförmåga (m²/l), plus spill.
                En vägg på 40 m² med två strykningar och 7 m²/l ger 40 × 2 ÷ 7 ≈ 11,4 liter, plus
                marginal – alltså ungefär 12 liter.
              </p>
            ),
          },
          {
            id: 'tackformaga',
            heading: 'Täckförmåga per färgtyp',
            body: (
              <ul>
                <li><strong>Innervägg / tak:</strong> ca 6–8 m² per liter och strykning.</li>
                <li><strong>Träfasad:</strong> ca 5 m² per liter – grövre, sugande underlag.</li>
                <li><strong>Putsad fasad:</strong> ca 4 m² per liter.</li>
                <li>Kalkylatorn föreslår ett värde per typ; exakt siffra står på burken.</li>
              </ul>
            ),
          },
          {
            id: 'tips',
            heading: 'Tips för rätt mängd',
            body: (
              <p>
                Grundfärg kan behövas på nytt eller sugande underlag, och en tredje strykning krävs
                ibland vid stora kulörskillnader. Lite extra färg är billigare än ett extra inköp mitt
                i jobbet – och samma bas/kulör kan skilja lite mellan batcher.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om färgåtgång"
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg/betong-kalkylator`, label: 'Betongberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
