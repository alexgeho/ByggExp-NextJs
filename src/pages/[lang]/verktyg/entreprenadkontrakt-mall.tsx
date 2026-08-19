import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import EntreprenadkontraktMallTool from '../../../components/LeadMagnet/EntreprenadkontraktMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad ska ett entreprenadkontrakt innehålla?',
    answer:
      'Parter, arbetsomfattning (och vad som inte ingår), prismodell, betalplan, tider och vite, ÄTA-hantering, besiktning, garanti- och ansvarstid, försäkring och hävningsvillkor. Mallen täcker alla dessa punkter.',
  },
  {
    question: 'Ska jag använda AB 04 eller ABS 18?',
    answer:
      'Mellan näringsidkare används AB 04 (utförande) eller ABT 06 (total). Är beställaren konsument gäller konsumenttjänstlagen tvingande och du bör utgå från ABS 18 eller Hantverkarformuläret 17. Ange rätt standardavtal i kontraktet.',
  },
  {
    question: 'Gäller ett muntligt avtal?',
    answer:
      'Ja, muntliga avtal är giltiga men nästan omöjliga att bevisa vid tvist. Ett skriftligt, signerat kontrakt gör att det är avtalstexten som avgör – inte ord mot ord.',
  },
  {
    question: 'Kostar mallen något?',
    answer: 'Nej, den är gratis och kräver inget konto. Du fyller i och laddar ner PDF eller Excel.',
  },
];

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params?.lang !== LOCALE) return { notFound: true };
  return { props: {} };
};

export default function EntreprenadkontraktMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/entreprenadkontrakt-mall`;
  const title = 'Entreprenadkontrakt mall gratis (PDF & Excel) | ByggExp';
  const description =
    'Ladda ner en gratis entreprenadkontrakt-mall som håller vid tvist. Fyll i parter, pris, tider, ÄTA och garanti och få ut ett färdigt kontrakt som PDF eller Excel.';

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
        title="Entreprenadkontrakt – gratis mall"
        intro="Fyll i uppgifterna och ladda ner ett färdigt entreprenadkontrakt som PDF eller Excel. Mallen täcker parter, prismodell, tider, vite, ÄTA, garanti och hävning – de punkter som avgör vid en tvist."
        tool={<EntreprenadkontraktMallTool />}
        leadForm={<ToolLeadForm tool="entreprenadkontrakt-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/entreprenadkontrakt-preview.webp"
            alt="Förhandsvisning av entreprenadkontrakt-mallen"
            caption="Så ser entreprenadkontrakt-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-haller-kontraktet',
            heading: 'Så håller kontraktet vid tvist',
            body: (
              <p>
                Vid en konflikt är det kontraktstexten som avgör vad som räknas som fel eller avtalsbrott. Se till att
                arbetsomfattningen är tydlig, att det framgår vad som <em>inte</em> ingår, och att prismodell och betalplan är
                låsta. Reglera ÄTA skriftligt – merarbete på muntlig begäran är den vanligaste orsaken till att man inte får betalt.
              </p>
            ),
          },
          {
            id: 'konsument-eller-naringsidkare',
            heading: 'Konsument eller näringsidkare?',
            body: (
              <p>
                Bygger du åt en konsument gäller konsumenttjänstlagen tvingande till konsumentens förmån – villkor som ger sämre
                skydd blir utan verkan. Utgå då från ABS 18 eller Hantverkarformuläret 17. Mellan företag råder avtalsfrihet med
                AB 04 eller ABT 06. Ange alltid vilket standardavtal som gäller.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om entreprenadkontrakt"
        faq={FAQ}
        cta={{
          heading: 'Från offert till signerat avtal i ByggExp',
          text: 'Bygg kontraktet ur offerten så att omfattning, pris och villkor följer med hela vägen. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/entreprenadkontrakt-mall`, label: 'Guide: entreprenadkontrakt' },
          { href: `/${LOCALE}/blog/ab-04-och-abt-06`, label: 'AB 04 och ABT 06' },
          { href: `/${LOCALE}/verktyg/ata-mall`, label: 'ÄTA-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
