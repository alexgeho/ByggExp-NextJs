import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import GipsKalkylatorTool from '../../../components/LeadMagnet/GipsKalkylatorTool';
import LeadMagnetPage, {
  type LeadMagnetFaqItem,
} from '../../../components/LeadMagnet/LeadMagnetPage';
import PreviewImage from '../../../components/LeadMagnet/PreviewImage';
import { footerTranslations } from '../../../locales/footer';
import { headerTranslations } from '../../../locales/header';

const LOCALE = 'sv';

const FAQ: LeadMagnetFaqItem[] = [
  { question: 'Vilket c/c-avstånd ska reglarna ha?', answer: 'Det styrs av skivbredden. Är gipsskivan 1200 mm bred sätts reglarna c/c 600 mm, är skivan 900 mm bred gäller c/c 450 mm. Kalkylatorn väljer rätt c/c automatiskt när du anger skivbredden.' },
  { question: 'Räknas gips på båda sidor av väggen?', answer: 'En regelvägg kläs normalt på båda sidor. Välj "Dubbelsidig" så dubblas gips- och skruvmängden, medan stommen (reglar, syll, hammarband) räknas en gång – den delas ju av båda sidorna.' },
  { question: 'Hur många skruv går det åt?', answer: 'Räkna med ca 20 skruv per m² och gipslager. Gyproc anger tätare infästning i kanten (ca c200 mm) än i fält (ca c300 mm), och yttre lagret skruvas tätare än det inre.' },
  { question: 'Ett eller två lager gips?', answer: 'Två lager ger bättre ljud- och brandmotstånd och krävs ibland enligt konstruktionen. Välj antal lager per sida i kalkylatorn så räknas skivor och skruv om.' },
  { question: 'Hur stor är en gipsskiva?', answer: 'Vanliga mått är 1200 × 2600 mm (ca 3,1 m²) och 900 × 2600 mm (ca 2,3 m²). Välj skivbredd och skivlängd i kalkylatorn.' },
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
  const canonicalUrl = `${siteUrl}/${LOCALE}/verktyg/gips-kalkylator`;
  const title = 'Gipskalkylator – gipsskivor, reglar & skruv 2026 | ByggExp';
  const description = 'Räkna ut hela materiallistan för en gipsvägg: antal gipsskivor, reglar (rätt c/c), syll/hammarband, isolering och skruv – utifrån väggens mått. Gratis, utan konto.';

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
        title='Gipskalkylator'
        intro='Ange väggens mått så får du hela materiallistan för en regelvägg: gipsskivor, reglar, syll och hammarband, isolering och skruv. Skivbredden styr regelavståndet (c/c) enligt Gyprocs handbok.'
        tool={<GipsKalkylatorTool />}
        preview={
          <PreviewImage
            src="/landing/verktyg/gips-preview.webp"
            alt='Förhandsvisning av gipsberäknare'
            caption='Så ser gipsberäknare ut'
            width={1000}
            height={474}
          />
        }
        sections={[
          {
            id: 'sa-raknar-du',
            heading: 'Så räknar kalkylatorn',
            body: (
              <ul>
                <li><strong>Gips:</strong> vägglängd × höjd × antal sidor × lager, plus spill, delat på skivans yta.</li>
                <li><strong>Reglar:</strong> vägglängd ÷ c/c + 1. Stommen räknas en gång även när båda sidor kläs.</li>
                <li><strong>Syll + hammarband:</strong> 2 × vägglängd i löpmeter (upp och ned).</li>
                <li><strong>Skruv:</strong> ca 20 st per m² och gipslager.</li>
                <li><strong>Isolering:</strong> väggytan en gång, eftersom den fyller stommen.</li>
              </ul>
            ),
          },
          {
            id: 'skivbredd-cc',
            heading: 'Skivbredd styr regelavståndet (c/c)',
            body: (
              <ul>
                <li>Skiva <strong>1200 mm</strong> bred → reglar <strong>c/c 600 mm</strong>.</li>
                <li>Skiva <strong>900 mm</strong> bred → reglar <strong>c/c 450 mm</strong>.</li>
                <li>Skarven mellan två skivor ska alltid landa mitt på en regel – därför hänger måtten ihop.</li>
              </ul>
            ),
          },
          {
            id: 'lager-skruv',
            heading: 'Lager, skruv och isolering',
            body: (
              <p>
                Ett lager räcker för de flesta innerväggar. Två lager ger bättre ljud-
                och brandmotstånd och krävs ibland enligt konstruktionen. Skruva i kant
                tätare (ca c200 mm) än i fält (ca c300 mm), och skruva det yttre lagret
                tätare än det inre. Ska väggen ljud- eller värmeisoleras fyller du
                stommen med isolering motsvarande väggytan.
              </p>
            ),
          },
          {
            id: 'info',
            heading: 'Tänk på',
            body: (
              <p>
                Lägg på spill för kap runt fönster, dörrar och hörn – köp hellre någon
                skiva extra. Måtten här följer Gyprocs monteringshandbok; kontrollera
                alltid skiv- och regeltyp samt infästning mot leverantörens anvisning
                för just din väggtyp (t.ex. våtrum, brand- eller ljudklassad vägg).
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
          { href: `/${LOCALE}/verktyg/kvadratmeter-kalkylator`, label: 'Kvadratmeterberäknare' },
          { href: `/${LOCALE}/verktyg`, label: 'Alla gratis verktyg' },
        ]}
      />

      <Footer footerT={footerT} />
    </>
  );
}
