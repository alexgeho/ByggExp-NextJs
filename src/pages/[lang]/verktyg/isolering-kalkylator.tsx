import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import IsoleringKalkylatorTool from '../../../components/LeadMagnet/IsoleringKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Hur mycket isolering går det åt?', answer: 'Det beror på ytan och hur många m² en förpackning täcker vid vald tjocklek – ju tjockare isolering, desto färre m² per förpackning. Kalkylatorn räknar även ut volymen (m³) och antal förpackningar inkl. spill.' },
  { question: 'Vad betyder lambda och U-värde?', answer: 'Lambda (W/mK) är materialets värmeledningsförmåga – mineralull ligger på ca 0,033–0,037. U-värdet beskriver hur mycket värme som släpps igenom: lägre är bättre. Kalkylatorn visar ett ungefärligt U-värde för enbart isolerskiktet (U ≈ lambda ÷ tjocklek).' },
  { question: 'Vilket U-värde ger olika tjocklek?', answer: 'Grovt räknat ger ca 10 cm mineralull U ≈ 0,4, 20 cm ≈ 0,2 och 40 cm ≈ 0,1 W/m²K för isolerskiktet. Ett korrekt U-värde för hela väggen tar även hänsyn till reglar, skivor och köldbryggor.' },
  { question: 'Vilket c/c ska reglarna ha?', answer: 'Skivor som är 560 mm breda passar reglar med c/c 600 mm (de kläms lätt ihop och sitter kvar av friktion). Lägg gärna isoleringen i två korsande skikt för att bryta köldbryggor.' },
  { question: 'Kostar det något?', answer: 'Nej, kalkylatorn är gratis och kräver inget konto.' },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function Page() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/isolering-kalkylator`;
  const title = 'Isoleringskalkylator – förpackningar, m³ & U-värde | ByggExp';
  const description = 'Räkna ut isolering: antal förpackningar, volym (m³) och ett ungefärligt U-värde utifrån yta, tjocklek och lambda. Gratis isoleringskalkylator, utan konto.';

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
        badge='Gratis kalkylator'
        title='Isoleringskalkylator'
        intro='Ange ytan och isoleringstjockleken så räknar vi ut antal förpackningar, volym i m³ och ett ungefärligt U-värde för isolerskiktet. Standard är mineralull med lambda 0,036 W/mK.'
        tool={<IsoleringKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/isolering-preview.webp"
            alt='Förhandsvisning av isoleringsberäknare'
            caption='Så ser isoleringsberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Det här räknar kalkylatorn ut',
            body: (
              <ul>
                <li><strong>Behov:</strong> ytan plus spill (m²).</li>
                <li><strong>Förpackningar:</strong> behovet delat på m² per förpackning.</li>
                <li><strong>Volym:</strong> yta × tjocklek (m³).</li>
                <li><strong>U-värde (ca):</strong> lambda ÷ tjocklek – för enbart isolerskiktet.</li>
              </ul>
            ),
          },
          {
            id: 'tjocklek-uvarde',
            heading: 'Tjocklek, lambda och U-värde',
            body: (
              <p>
                Samma förpackning täcker färre m² ju tjockare isolering du väljer. Tjockare skikt och
                lägre lambda ger lägre U-värde (bättre). Grovt: 10 cm mineralull ≈ U 0,4, 20 cm ≈ 0,2
                och 40 cm ≈ 0,1 W/m²K. Kontrollera vilken tjocklek din konstruktion (vind, vägg, golv)
                kräver innan du beställer.
              </p>
            ),
          },
          {
            id: 'reglar',
            heading: 'Reglar, skivbredd och köldbryggor',
            body: (
              <p>
                Isolerskivor på 560 mm passar reglar med c/c 600 mm. Lägg gärna isoleringen i två
                korsande skikt så att reglarna inte bildar genomgående köldbryggor – det ger en märkbart
                bättre vägg i praktiken än U-värdet för enbart isolerskiktet antyder.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor"
        faq={FAQ}
        cta={{
          heading: 'Räkna material och tid i ByggExp',
          text: 'Håll koll på material, tid och kostnader per projekt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler byggkalkylatorer"
        related={[
          { href: `/${LOCALE}/verktyg/reglar-kalkylator`, label: 'Reglar & virke' },
          { href: `/${LOCALE}/verktyg/gips-kalkylator`, label: 'Gipsberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
