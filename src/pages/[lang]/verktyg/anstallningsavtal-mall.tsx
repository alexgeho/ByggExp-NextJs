import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import AnstallningsavtalMallTool from '../../../components/LeadMagnet/AnstallningsavtalMallTool';
import ToolLeadForm from '../../../components/LeadMagnet/ToolLeadForm';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  {
    question: 'Vad måste ett anställningsavtal innehålla?',
    answer:
      'Arbetsgivare och arbetstagare, befattning, startdatum, anställningsform, arbetsplats, arbetstid, lön och löneutbetalning, semester, uppsägningstid och tillämpligt kollektivavtal. Mallen täcker den skriftliga information LAS kräver.',
  },
  {
    question: 'Vilka anställningsformer finns?',
    answer:
      'Tillsvidareanställning är huvudregeln. Därutöver finns särskild visstidsanställning (SÄVA) och provanställning (max 6 månader). Ange vilken form som gäller i avtalet.',
  },
  {
    question: 'Måste jag följa kollektivavtalet?',
    answer:
      'Är företaget bundet av Byggavtalet eller ett hängavtal gäller dess villkor för lön, arbetstid, OB och semester. Anpassa alltid avtalet till ert kollektivavtal.',
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

export default function AnstallningsavtalMallPage() {
  const headerT = headerTranslations[LOCALE];
  const footerT = footerTranslations[LOCALE];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://byggexp.se';
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/anstallningsavtal-mall`;
  const title = 'Anställningsavtal mall bygg gratis PDF & Excel | ByggExp';
  const description =
    'Ladda ner ett gratis anställningsavtal för byggföretag. Fyll i parter, roll, anställningsform, lön, arbetstid och kollektivavtal och få ett färdigt avtal som PDF eller Excel.';

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
        title="Anställningsavtal för byggföretag – gratis mall"
        intro="Fyll i uppgifterna och ladda ner ett färdigt anställningsavtal som PDF eller Excel. Mallen täcker den skriftliga information du som arbetsgivare måste lämna enligt LAS – anpassa alltid till ert kollektivavtal."
        tool={<AnstallningsavtalMallTool />}
        leadForm={<ToolLeadForm tool="anstallningsavtal-mall" />}
        preview={
          <PreviewImage
            src="/landing/verktyg/anstallningsavtal-preview.webp"
            alt="Förhandsvisning av anställningsavtal-mallen"
            caption="Så ser anställningsavtal-mallen ut"
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'vad-ska-med',
            heading: 'Vad ska anställningsavtalet innehålla?',
            body: (
              <ul>
                <li>Parter, befattning och startdatum.</li>
                <li>Anställningsform (tillsvidare, SÄVA eller provanställning).</li>
                <li>Arbetsplats, arbetstid och sysselsättningsgrad.</li>
                <li>Lön, löneform och utbetalningsdag.</li>
                <li>Semester, uppsägningstid och tillämpligt kollektivavtal.</li>
              </ul>
            ),
          },
          {
            id: 'provanstallning',
            heading: 'Provanställning och SÄVA',
            body: (
              <p>
                En provanställning får vara i högst sex månader och kan avbrytas av båda parter. Särskild
                visstidsanställning (SÄVA) övergår till tillsvidare efter viss tids anställning. Ange tydligt vilken form
                som gäller och eventuell provanställningsperiod i avtalet.
              </p>
            ),
          },
        ]}
        faqHeading="Vanliga frågor om anställningsavtal"
        faq={FAQ}
        cta={{
          heading: 'Håll koll på personal och tid i ByggExp',
          text: 'Tidrapportering, frånvaro och personalliggare samlat. Boka en demo.',
          buttonLabel: 'Boka demo',
          href: `/${LOCALE}/contact`,
        }}
        relatedHeading="Relaterat"
        related={[
          { href: `/${LOCALE}/blog/anstallningsavtal-mall-bygg`, label: 'Guide: anställningsavtal för bygg' },
          { href: `/${LOCALE}/blog/anstalla-personal-byggforetag`, label: 'Anställa personal' },
          { href: `/${LOCALE}/verktyg/tidrapport-mall`, label: 'Tidrapport-mall (PDF)' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
