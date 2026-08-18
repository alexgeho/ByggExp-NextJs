import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import FakturaGeneratorTool from '../../../components/LeadMagnet/FakturaGeneratorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad måste en faktura innehålla?',
    answer:
      'Bland annat fakturanummer, fakturadatum, säljarens och köparens uppgifter, en specifikation av varorna eller tjänsterna, momsbelopp och momssats samt vad som ska betalas och när. Verktyget hjälper dig med uppställningen.',
  },
  {
    question: 'Kan jag lägga till ROT-avdrag på fakturan?',
    answer:
      'Ja. Bocka i «arbete» på arbetskostnadsraderna och slå på ROT – då dras 30 % av arbetskostnaden av (max 50 000 kr per person) och kundens del räknas ut.',
  },
  {
    question: 'Laddas mina uppgifter upp någonstans?',
    answer:
      'Nej. Fakturan skapas lokalt i din webbläsare och PDF:en laddas ner direkt – inget skickas till någon server.',
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

export default function FakturaMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/faktura-mall`;
  const title = 'Fakturamall – gör faktura med ROT gratis (PDF) | ByggExp';
  const description =
    'Skapa en faktura online och ladda ner som PDF – gratis. Fakturanummer, datum, rader, moms och ROT-avdrag räknas ut automatiskt. Inget konto, ingen uppladdning.';

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
        title="Fakturamall – skapa faktura och ladda ner som PDF"
        intro="Gör en proffsig faktura med rader, moms och ROT-avdrag direkt online. Fakturanummer, datum och summor fylls i enkelt och du laddar ner en färdig PDF. Gratis och utan konto."
        tool={<FakturaGeneratorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/faktura-preview.webp"
            alt="Förhandsvisning av faktura som PDF"
            caption="Så ser en faktura ut som PDF"
            width={1000}
            height={582}
          />
        }
        sections={[
          {
            id: 'sa-gor-du',
            heading: 'Så skapar du en faktura – steg för steg',
            body: (
              <ol>
                <li>Fyll i ditt företag, kunden, fakturanummer och datum.</li>
                <li>Lägg till rader med beskrivning, antal och à-pris.</li>
                <li>Välj momssats och slå eventuellt på ROT-avdrag.</li>
                <li>Ange betalningsuppgifter och förfallodatum.</li>
                <li>Ladda ner fakturan som PDF och skicka till kunden.</li>
              </ol>
            ),
          },
          {
            id: 'vad-ska-faktura-innehalla',
            heading: 'Vad måste en faktura innehålla?',
            body: (
              <ul>
                <li>Fakturanummer och fakturadatum.</li>
                <li>Säljarens och köparens namn och adress.</li>
                <li>Specifikation av arbete och material.</li>
                <li>Momssats och momsbelopp.</li>
                <li>Att betala, förfallodatum och betalningsuppgifter.</li>
              </ul>
            ),
          },
          {
            id: 'faktura-i-byggexp',
            heading: 'Fakturera automatiskt i ByggExp',
            body: (
              <p>
                Den här mallen är gratis att använda. I ByggExp skapar du fakturor med företagets
                logotyp, får moms och ROT uträknat automatiskt och kan fakturera direkt utifrån loggad
                tid, material och ÄTA – utan att skriva in raderna på nytt.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om faktura"
        faq={FAQ}
        cta={{
          heading: 'Fakturera proffsigt i ByggExp',
          text: 'Faktura med logotyp, moms och ROT – direkt från loggad tid och material. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Fler gratis verktyg"
        related={[
          { href: `/${LOCALE}/blog/fakturera-som-hantverkare`, label: 'Guide: fakturera som hantverkare' },
          { href: `/${LOCALE}/blog/e-faktura-obligatorisk-byggforetag`, label: 'E-faktura – blir det obligatoriskt?' },
          { href: `/${LOCALE}/blog/kunden-betalar-inte-fakturan`, label: 'Kunden betalar inte – så driver du in' },
          { href: `/${LOCALE}/verktyg/offert-mall`, label: 'Offertmall' },
          { href: `/${LOCALE}/verktyg/rot-avdrag-kalkylator`, label: 'ROT-avdrag kalkylator' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
