import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import MomsKalkylatorTool from '../../../components/LeadMagnet/MomsKalkylatorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur räknar jag ut moms på ett belopp?',
    answer:
      'Är beloppet exklusive moms multiplicerar du med momssatsen (t.ex. 0,25 för 25 %). Är beloppet inklusive moms delar du med 1,25 för att få beloppet exklusive moms – kalkylatorn gör båda automatiskt.',
  },
  {
    question: 'Vilken momssats gäller för byggtjänster?',
    answer:
      'För de flesta byggtjänster är momsen 25 %. Vissa varor och tjänster har 12 % eller 6 %. Notera att omvänd byggmoms kan gälla mellan byggföretag.',
  },
  {
    question: 'Hur räknar jag baklänges från ett pris inklusive moms?',
    answer:
      'Välj «Inklusive moms» i kalkylatorn. Med 25 % moms blir beloppet exklusive moms priset delat med 1,25, och momsen är skillnaden.',
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

export default function MomsKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/moms-kalkylator`;
  const title = 'Momskalkylator – räkna ut moms gratis | ByggExp';
  const description =
    'Räkna ut moms gratis: lägg på eller räkna baklänges från ett belopp med 25, 12 eller 6 % moms. Se belopp exkl. moms, momsen och inkl. moms direkt.';

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
        title="Momskalkylator – räkna ut moms"
        intro="Lägg på moms eller räkna baklänges från ett pris. Välj 25, 12 eller 6 % så ser du beloppet exklusive moms, själva momsen och beloppet inklusive moms."
        tool={<MomsKalkylatorTool />}
        leadForm={<ToolLeadForm tool="moms-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/moms-preview.webp"
            alt="Förhandsvisning av momskalkylator"
            caption="Så ser momskalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'rakna-sjalv-pa-mobilen',
            heading: 'Räkna ut moms själv på mobilen (25 %)',
            body: (
              <>
                <figure className="lm-diagram">
                  <img src="/landing/diagrams/moms.webp" alt="Diagram: moms från netto till brutto, netto × 1,25 = brutto" width={720} height={380} loading="lazy" />
                  <figcaption>Netto × 1,25 = brutto (25 % moms). Baklänges: brutto ÷ 1,25 = netto.</figcaption>
                </figure>
                <p>
                  Har du bara mobilens miniräknare räcker tre enkla knapptryck. Exemplen
                  utgår från 25 % moms – den vanligaste satsen för byggtjänster.
                </p>
                <ul>
                  <li>
                    <strong>Lägga på moms:</strong> pris exkl. moms <strong>× 1,25</strong> = pris inkl. moms.
                    <br />Ex: 10 000 × 1,25 = <strong>12 500 kr</strong>.
                  </li>
                  <li>
                    <strong>Ta bort moms (baklänges):</strong> pris inkl. moms <strong>× 0,8</strong> = pris exkl. moms.
                    <br />Ex: 12 500 × 0,8 = <strong>10 000 kr</strong>. (Att dela med 1,25 ger samma svar.)
                  </li>
                  <li>
                    <strong>Bara själva momsen:</strong> pris inkl. moms <strong>× 0,2</strong> = momsen.
                    <br />Ex: 12 500 × 0,2 = <strong>2 500 kr</strong>.
                  </li>
                </ul>
                <p>
                  Genvägarna ×&nbsp;0,8 och ×&nbsp;0,2 gäller just 25 %. Vid 12 % delar du i stället
                  med 1,12 för att ta bort momsen, och vid 6 % med 1,06.
                </p>
              </>
            ),
          },
          {
            id: 'momssatser',
            heading: 'Momssatser i Sverige',
            body: (
              <ul>
                <li><strong>25 %</strong> – standard, gäller de flesta byggtjänster.</li>
                <li><strong>12 %</strong> – t.ex. livsmedel, hotell och restaurang.</li>
                <li><strong>6 %</strong> – t.ex. böcker, persontransport och kultur.</li>
              </ul>
            ),
          },
          {
            id: 'omvand-byggmoms',
            heading: 'Omvänd byggmoms',
            body: (
              <p>
                Mellan byggföretag gäller ofta omvänd skattskyldighet (omvänd byggmoms): säljaren
                fakturerar utan moms och köparen redovisar momsen. Kalkylatorn hjälper dig ändå att se
                vilket momsbelopp det handlar om.
              </p>
            ),
          },
        ]}
        embedSlug="moms-kalkylator"
        embedTitle="Momskalkylator"
        faqHeading="Vanliga frågor om moms"
        faq={FAQ}
        cta={{
          heading: 'Fakturera med rätt moms i ByggExp',
          text: 'Skapa offert och faktura där moms och ROT räknas ut automatiskt. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/blog/moms-hantverkare`, label: 'Guide: moms & omvänd byggmoms' },
          { href: `/${LOCALE}/verktyg/rot-avdrag-kalkylator`, label: 'ROT-avdrag kalkylator' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport – gratis mall' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
