import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import UvardeKalkylatorTool from '../../../components/LeadMagnet/UvardeKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar man ut U-värde?',
    answer:
      'U-värdet är 1 delat med det totala värmemotståndet: U = 1 / (Rsi + ΣR + Rse). Varje materiallagers motstånd R är tjockleken (i meter) delat med lambdavärdet (λ). Kalkylatorn summerar lagren och lägger till ytmotstånden.',
  },
  {
    question: 'Vad är ett bra U-värde?',
    answer:
      'Lägre är bättre. En välisolerad yttervägg ligger ofta runt 0,15–0,18 W/m²K och moderna fönster runt 0,9–1,2 W/m²K (Uw för hela fönstret). Kontrollera aktuella krav hos Boverket för din åtgärd.',
  },
  {
    question: 'Skillnaden på Uw och Ug för fönster?',
    answer:
      'Ug avser bara glaset, Uw hela fönstret inklusive karm och båge. Uw är alltid högre (sämre) än Ug – jämför alltid Uw mot Uw när du utvärderar fönster.',
  },
  {
    question: 'Kostar kalkylatorn något?',
    answer: 'Nej, den är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function UvardeKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/u-varde-kalkylator`;
  const title = 'U-värde kalkylator – räkna ut U-värde gratis | ByggExp';
  const description =
    'Räkna ut U-värde för vägg, tak eller golv gratis. Lägg in materiallagren med tjocklek och lambda så får du värmemotstånd och U-värde (W/m²K) direkt.';

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
        title="U-värde – räkna ut värmegenomgången"
        intro="Välj konstruktionstyp och lägg in materiallagren med tjocklek. Kalkylatorn summerar värmemotståndet och räknar ut U-värdet (W/m²K). Lägre U-värde betyder bättre isolering och lägre energiförlust."
        tool={<UvardeKalkylatorTool />}
        leadForm={<ToolLeadForm tool="u-varde-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/u-varde-preview.webp"
            alt="Förhandsvisning av U-värde-kalkylator"
            caption="Så ser U-värde-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-fungerar-u-varde',
            heading: 'Så fungerar U-värde',
            body: (
              <>
                <p>
                  U-värdet beskriver hur mycket värme som passerar genom en konstruktion per kvadratmeter och grad
                  temperaturskillnad. Ju lägre värde, desto bättre isolering. Det räknas ut från summan av alla
                  materiallagers värmemotstånd plus ytmotstånden på in- och utsidan.
                </p>
                <p>
                  Varje lagers motstånd är <strong>R = tjocklek (m) ÷ λ</strong>. Ett tjockare eller mer isolerande
                  skikt (lägre λ) ger högre R och därmed lägre U-värde.
                </p>
              </>
            ),
          },
          {
            id: 'koldbryggor',
            heading: 'Tänk på köldbryggorna',
            body: (
              <p>
                Vid isolering mellan träreglar leder reglarna mer värme än isoleringen. Den här kalkylatorn räknar på
                homogena skikt – för en regelvägg blir det verkliga U-värdet något högre. Använd tillverkarens
                U-värdesunderlag eller λ-metoden när det ska vara exakt.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om U-värde"
        faq={FAQ}
        cta={{
          heading: 'Kalkylera hela bygget i ByggExp',
          text: 'Samla materialåtgång, offert och projekt på ett ställe. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/berakna-u-varde-isolering`, label: 'Guide: beräkna U-värde' },
          { href: `/${LOCALE}/blog/fonster-u-varde-2026`, label: 'Fönster och U-värde' },
          { href: `/${LOCALE}/verktyg/isolering-kalkylator`, label: 'Isolering-kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
