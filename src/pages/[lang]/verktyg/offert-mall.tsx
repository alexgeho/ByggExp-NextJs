import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import OffertGeneratorTool from '../../../components/LeadMagnet/OffertGeneratorTool';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska en offert innehålla?',
    answer:
      'Ditt företag och kundens uppgifter, en tydlig specifikation av arbete och material med antal och à-pris, momssats, eventuellt ROT-avdrag, samt giltighetstid och villkor. Verktyget räknar ut summorna åt dig.',
  },
  {
    question: 'Kan jag lägga till ROT-avdrag i offerten?',
    answer:
      'Ja. Bocka i «arbete» på de rader som är arbetskostnad och slå på ROT – då dras 30 % av arbetskostnaden av (max 50 000 kr per person) och kundens del räknas ut automatiskt.',
  },
  {
    question: 'Laddas mina uppgifter upp någonstans?',
    answer:
      'Nej. Offerten skapas lokalt i din webbläsare och PDF:en laddas ner direkt – inget skickas till någon server.',
  },
  {
    question: 'Kostar det något?',
    answer: 'Nej, verktyget är gratis och kräver inget konto.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function OffertMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/offert-mall`;
  const title = 'Offertmall bygg – gör offert med ROT gratis | ByggExp';
  const description =
    'Skapa en offert online och ladda ner som PDF – gratis. Lägg till rader, moms och ROT-avdrag så räknas kundens del ut automatiskt. Inget konto, ingen uppladdning.';

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
        title="Offertmall – skapa offert med ROT och ladda ner som PDF"
        intro="Bygg en proffsig offert med rader, moms och ROT-avdrag direkt online. Summorna räknas ut automatiskt och du laddar ner en färdig PDF. Gratis och utan konto."
        tool={<OffertGeneratorTool />}
        leadForm={<ToolLeadForm tool="offert-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/offert-preview.webp"
            alt="Förhandsvisning av offert som PDF"
            caption="Så ser en offert ut som PDF"
            width={1000}
            height={556}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så skapar du en offert – steg för steg',
            body: (
              <ol>
                <li>Fyll i ditt företag och kundens namn.</li>
                <li>Lägg till rader med beskrivning, antal och à-pris.</li>
                <li>Bocka i «arbete» på de rader som är arbetskostnad om du vill använda ROT.</li>
                <li>Välj momssats och slå eventuellt på ROT-avdrag.</li>
                <li>Ladda ner offerten som PDF och skicka till kunden.</li>
              </ol>
            ),
          },
          {
            id: 'vad-ska-offert-innehalla',
            heading: 'Vad ska en offert innehålla?',
            body: (
              <ul>
                <li>Ditt företag och kundens uppgifter.</li>
                <li>Tydlig specifikation av arbete och material med antal och à-pris.</li>
                <li>Momssats och totalsumma.</li>
                <li>Eventuellt ROT-avdrag och vad kunden faktiskt betalar.</li>
                <li>Giltighetstid och betalningsvillkor.</li>
              </ul>
            ),
          },
          {
            id: 'offert-till-faktura',
            heading: 'Från offert till faktura i ByggExp',
            body: (
              <p>
                Den här mallen är gratis att använda. I ByggExp bygger du offerter med företagets
                logotyp, får ROT och moms uträknat automatiskt, och omvandlar en accepterad offert till
                faktura utan att skriva in raderna på nytt – allt samlat per projekt.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om offert"
        faq={FAQ}
        cta={{
          heading: 'Skapa offerter proffsigt i ByggExp',
          text: 'Offert med logotyp, ROT och moms – och ett klick till faktura. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/blog/skriva-offert`, label: 'Guide: så skriver du en offert' },
          { href: `/${LOCALE}/blog/mangdforteckning-bygg`, label: 'Guide: mängdförteckning' },
          { href: `/${LOCALE}/verktyg/rot-avdrag-kalkylator`, label: 'ROT-avdrag kalkylator' },
          { href: `/${LOCALE}/verktyg/moms-kalkylator`, label: 'Momskalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
