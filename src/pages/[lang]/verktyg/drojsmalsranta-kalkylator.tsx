import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import DrojsmalsrantaKalkylatorTool from '../../../components/LeadMagnet/DrojsmalsrantaKalkylatorTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Hur hög är dröjsmålsräntan?',
    answer:
      'Enligt räntelagen är dröjsmålsräntan referensräntan plus 8 procentenheter, om inte en annan ränta avtalats. Referensräntan fastställs av Riksbanken 1 januari och 1 juli. Justera referensräntan i kalkylatorn till aktuell nivå.',
  },
  {
    question: 'Från vilken dag räknas dröjsmålsräntan?',
    answer:
      'Har ni ett förfallodatum löper räntan från dagen efter förfallodagen. Saknas förfallodag får du ta ut dröjsmålsränta tidigast 30 dagar efter att du skickat fakturan eller krav på betalning.',
  },
  {
    question: 'Får jag ta ut påminnelse- och inkassoavgift?',
    answer:
      'Ja. Om det framgår av avtalet eller fakturan får du ta ut lagstadgad påminnelseavgift (60 kr) och inkassoavgift (180 kr). Kryssa i dem i kalkylatorn för att lägga till dem i totalsumman.',
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

export default function DrojsmalsrantaKalkylatorPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/drojsmalsranta-kalkylator`;
  const title = 'Dröjsmålsränta kalkylator – räkna ut räntan gratis | ByggExp';
  const description =
    'Räkna ut dröjsmålsränta på en obetald faktura gratis: referensränta + 8 %, antal dagar och lagstadgade påminnelse- och inkassoavgifter. Direkt totalsumma.';

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
        title="Dröjsmålsränta – räkna ut räntan på en obetald faktura"
        intro="Kunden betalar sent? Fyll i fakturabeloppet, förfallodatum och betaldatum så räknar kalkylatorn ut dröjsmålsräntan enligt räntelagen (referensränta + 8 procentenheter) plus eventuella avgifter."
        tool={<DrojsmalsrantaKalkylatorTool />}
        leadForm={<ToolLeadForm tool="drojsmalsranta-kalkylator" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/drojsmalsranta-preview.webp"
            alt="Förhandsvisning av dröjsmålsränta-kalkylatorn"
            caption="Så ser dröjsmålsränta-kalkylatorn ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknas-drojsmalsranta',
            heading: 'Så räknas dröjsmålsränta',
            body: (
              <>
                <p>
                  Dröjsmålsräntan är enkel ränta och beräknas på det obetalda beloppet inklusive moms:
                  <strong> belopp × räntesats ÷ 365 × antal dagar</strong>. Räntesatsen enligt räntelagen är
                  Riksbankens referensränta plus 8 procentenheter.
                </p>
                <p>
                  Exempel: en faktura på 50&nbsp;000 kr som betalas 30 dagar för sent, med referensränta 2 %
                  (dröjsmålsränta 10 %), ger 50&nbsp;000 × 0,10 ÷ 365 × 30 ≈ <strong>411 kr</strong> i ränta.
                </p>
              </>
            ),
          },
          {
            id: 'referensrantan',
            heading: 'Referensräntan ändras två gånger om året',
            body: (
              <p>
                Riksbanken fastställer referensräntan den 1 januari och den 1 juli. Eftersom räntan ändras
                behöver du kontrollera aktuell nivå och justera den i kalkylatorn – då blir dröjsmålsräntan alltid
                rätt. Har ni avtalat en högre avtalsränta gäller den i stället.
              </p>
            ),
          },
        ]}
        embedSlug="drojsmalsranta-kalkylator"
        embedTitle="Dröjsmålsränta-kalkylator"
        faqHeading="Vanliga frågor om dröjsmålsränta"
        faq={FAQ}
        cta={{
          heading: 'Slipp jaga betalningar i ByggExp',
          text: 'Fakturera med tydliga betalningsvillkor och håll koll på förfallodatum. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/drojsmalsranta-2026`, label: 'Guide: dröjsmålsränta 2026' },
          { href: `/${LOCALE}/blog/kunden-betalar-inte-fakturan`, label: 'När kunden inte betalar' },
          { href: `/${LOCALE}/verktyg/faktura-mall`, label: 'Faktura-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
