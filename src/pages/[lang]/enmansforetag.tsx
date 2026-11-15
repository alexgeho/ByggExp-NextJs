import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useState, type MouseEvent } from "react";

import BenefitSlider, {
  type SliderCard,
} from "../../components/Benefits/BenefitSlider";
import CTA from "../../components/CTA/CTA";
import { FAKTURA_PRICE } from "../../components/Pricing/Pricing";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Lightbox from "../../components/Lightbox/Lightbox";
import PlanPriceSection from "../../components/Pricing/PlanPriceSection";
import StepsCarousel from "../../components/StepsCarousel/StepsCarousel";
import { localeOrigin } from "../../lib/seo";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { pricingTranslations } from "../../locales/pricing";
import type { LandingLanguageCode } from "../../locales/languages";

// Sales page for one-person construction firms ("vi har inga anställda").
// Mirrors the sales deck: white hero → dark problem block → white feature rows.
// Swedish only — the audience is Swedish sole traders.

type Props = { lang: LandingLanguageCode };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: [{ params: { lang: "sv" } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: { lang: params?.lang as LandingLanguageCode },
});

const ZOOMABLE = ".em-hero-visual img, .features .step-visual img";

// Same carousel + glass 3D icons as the home page "Vad får ni…" block.
const BENEFITS: { id: string; icon: string; title: string; text: string }[] = [
  {
    id: "faktura",
    icon: "/landing/enmansforetag/benefits/faktura.webp",
    title: "Fakturera på minuten",
    text: "Faktura klar direkt från offert eller tid.",
  },
  {
    id: "kund",
    icon: "/landing/enmansforetag/benefits/kund-paminnelse.webp",
    title: "Påminnelse när kunden inte betalat",
    text: "Appen säger till – du slipper hålla koll.",
  },
  {
    id: "lev",
    icon: "/landing/enmansforetag/benefits/leverantor.webp",
    title: "Dina fakturor i tid",
    text: "Påminnelse innan leverantörsfakturan förfaller.",
  },
  {
    id: "kvitton",
    icon: "/landing/enmansforetag/benefits/kvitton.webp",
    title: "Kvitton med mobilen",
    text: "Fota – klart för bokföringen.",
  },
  {
    id: "anteckningar",
    icon: "/landing/enmansforetag/benefits/anteckningar.webp",
    title: "Anteckningar med påminnelse",
    text: "Skriv ner direkt – appen påminner i rätt tid.",
  },
  {
    id: "uppgifter",
    icon: "/landing/enmansforetag/benefits/uppgifter.webp",
    title: "Uppgifter med deadline",
    text: "Allt som ska göras – med påminnelse innan det är för sent.",
  },
];
const BENEFIT_CARDS: SliderCard[] = BENEFITS.map((b) => ({
  id: b.id,
  icon: (
    <img
      src={b.icon}
      alt=""
      width={256}
      height={256}
      loading="lazy"
      decoding="async"
    />
  ),
  iconClass: "benefit-icon-3d",
  title: b.title,
  text: b.text,
}));

type Feature = {
  title: string;
  text: string;
  bullets?: string[];
  img: string;
  alt: string;
};

const FEATURES: Feature[] = [
  {
    title: "Ingen leverantörsfaktura glöms bort",
    text: "Lägg in fakturan från grossisten eller maskinuthyraren – ByggExp påminner i god tid före förfallodagen.",
    bullets: [
      "Notis i telefonen före förfallodagen",
      "Mindre risk för påminnelseavgifter och dröjsmålsränta",
      "Kostnaden hamnar direkt på rätt projekt",
    ],
    img: "/landing/enmansforetag/leverantorsfakturor-v2.webp",
    alt: "Inköpsfakturor i ByggExp och notis i telefonen: faktura att betala, förfaller om 7 dagar",
  },
  {
    title: "Släpp in kvittot – ByggExp läser av resten",
    text: "Fota kvittot i appen eller dra in det i adminpanelen. Leverantör, datum och belopp läses av automatiskt.",
    bullets: [
      "Kvittot kopplas direkt till projektet – kostnaden syns i projektets ekonomi",
      "Alla kvitton per projekt i en lista",
      "Enkelt att lämna till din redovisning",
    ],
    img: "/landing/enmansforetag/kvitton-utlagg-v2.webp",
    alt: "Utlägg i ByggExp: kvittolista i adminpanelen och nytt utlägg i mobilen",
  },
  {
    title: "Appen kommer ihåg – inte du",
    text: "Lägg in en uppgift med tid – ByggExp påminner dig i telefonen tills du markerar den som klar.",
    bullets: [
      "Var 15:e minut, varje timme, dag eller vecka",
      "Återkommande uppgifter skapas automatiskt igen",
    ],
    img: "/landing/enmansforetag/paminnelse-uppgift.webp",
    alt: "Uppgift med påminnelse i ByggExp och påminnelse på telefonens låsskärm",
  },
  {
    title: "Foton och kontroller – i projektet, inte i pärmar",
    text: "Foton, byggdagbok och egenkontroller sparas på rätt projekt.",
    bullets: [
      "Egenkontrollen fylls i av sig själv – utifrån dina foton",
      "Svaret finns när kunden undrar hur det såg ut bakom väggen",
      "KMA och egenkontroller med färdiga mallar",
    ],
    img: "/landing/features/4foto-1200.webp",
    alt: "Projektets foton i ByggExp på dator och mobil",
  },
  {
    title: "Vet du vilket jobb som faktiskt lönar sig?",
    text: "ByggExp visar budget mot utfall, vad timmar och material kostar och marginalen per projekt i realtid – du ser direkt om ett jobb börjar gå back.",
    img: "/landing/features/9ekonomi-1200.webp",
    alt: "Projektets ekonomi i ByggExp: budget, kostnader och marginal",
  },
];

export default function EnmansforetagPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const headerT = headerTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const title = "ByggExp för enmansföretag – appen tar pappersarbetet";
  const description =
    "Driver du byggfirman själv? ByggExp samlar offerter, fakturor, kvitton och deadlines i telefonen – från 299 SEK/månad, 14 dagar gratis.";
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/enmansforetag`;

  // Every screenshot on the page opens full-size on click (same lightbox as the
  // home-page features). One delegated handler, so new images need no wiring.
  const [lightbox, setLightbox] = useState<string | null>(null);

  const openImage = (e: MouseEvent<HTMLElement>) => {
    const img = (e.target as HTMLElement).closest<HTMLImageElement>(ZOOMABLE);
    if (img) setLightbox(img.currentSrc || img.src);
  };

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
      </Head>
      <Header headerT={headerT} />

      <main className="em" onClick={openImage}>
        {/* HERO — white */}
        <section className="em-hero">
          <div className="container em-hero-inner">
            <div className="em-hero-content">
              <span className="em-pill">
                <span className="em-pill-dot" />
                För dig som driver firman själv
              </span>
              <h1>
                Sköter du allt själv? <span>Låt appen ta pappersarbetet.</span>
              </h1>
              <p className="em-lead">
                Offerter, fakturor, kvitton och deadlines – i en och samma
                telefon. ByggExp tar kvällens pappersarbete.
              </p>
              <a href="#cta" className="btn-primary">
                Boka gratis konsultation
              </a>
              <ul className="em-checks">
                <li>14 dagar gratis</li>
                <li>Kom igång på 15 minuter</li>
                <li>Ingen bindningstid</li>
              </ul>
            </div>
            <div className="em-hero-visual">
              <img
                className="em-hero-laptop"
                src="/landing/enmansforetag/hero-projekt-kvitton.webp"
                alt="Projektets ekonomi i ByggExp och kvitton i mobilen"
              />
            </div>
          </div>
        </section>

        {/* BENEFITS — carousel as on the home page */}
        <section className="benefits">
          <div className="container">
            <div className="section-head section-head--dark">
              <span className="eyebrow">Utan anställda</span>
              <h2>
                Få betalt i tid. <em>Betala i tid.</em>
              </h2>
            </div>
            <div className="benefits-single">
              <BenefitSlider cards={BENEFIT_CARDS} />
            </div>
          </div>
        </section>

        {/* FEATURES — same carousel as the home page "features" block */}
        <StepsCarousel
          eyebrow="Funktioner"
          heading={
            <>
              Allt samlat – <em>i telefonen</em>
            </>
          }
          steps={FEATURES}
          prevLabel="Föregående"
          nextLabel="Nästa"
        />

        {/* PRICE — the "Koll på pengarna" card from the pricing page, as is */}
        <PlanPriceSection
          plan="faktura"
          lang={lang}
          pricingT={pricingT}
          eyebrow="Pris"
          heading="Paketet Koll på pengarna"
          lead="15 % rabatt vid årsbetalning"
          price={FAKTURA_PRICE}
          items={pricingT.financeItems}
          trial
          checks={["Ingen startavgift", "Ingen bindningstid"]}
          notes={[pricingT.fakturaLimitNote]}
        />
      </main>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />

      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
