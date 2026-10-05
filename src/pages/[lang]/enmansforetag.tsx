import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";

import BenefitSlider, {
  type SliderCard,
} from "../../components/Benefits/BenefitSlider";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { localeOrigin } from "../../lib/seo";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
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

const STEPS = [
  {
    img: "/landing/features/7offerter-1200.webp",
    alt: "Offert i ByggExp på dator och mobil",
    title: "Offert",
    text: "Rader, pris, ROT-avdrag och moms. Skicka till kunden och följ status.",
  },
  {
    img: "/landing/features/1arbetspass-1200.webp",
    alt: "Tidrapport i ByggExp på dator och mobil",
    title: "Jobbet",
    text: "Tid, material och ÄTA loggas direkt på projektet.",
  },
  {
    img: "/landing/features/8fakturor-1200.webp",
    alt: "Faktura i ByggExp på dator och mobil",
    title: "Faktura",
    text: "Allt som loggats blir en faktura. Du ser vad som är betalt och obetalt.",
  },
];

type Feature = {
  eyebrow: string;
  title: string;
  text: string;
  bullets?: string[];
  img: string;
  alt: string;
  phone?: boolean;
};

const FEATURES: Feature[] = [
  {
    eyebrow: "Kvitton och utlägg",
    title: "Släpp in kvittot – ByggExp läser av resten",
    text: "Fota kvittot i appen eller dra in det i adminpanelen. Leverantör, datum och belopp läses av automatiskt.",
    bullets: [
      "Kvittot kopplas direkt till projektet – kostnaden syns i projektets ekonomi",
      "Alla kvitton per projekt i en lista",
      "Enkelt att lämna till din redovisning",
    ],
    img: "/landing/enmansforetag/kvitton-utlagg.webp",
    alt: "Utlägg i ByggExp: kvittolista i adminpanelen och nytt utlägg i mobilen",
  },
  {
    eyebrow: "Påminnelser",
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
    eyebrow: "Leverantörsfakturor",
    title: "Ingen leverantörsfaktura glöms bort",
    text: "Lägg in fakturan från grossisten eller maskinuthyraren – ByggExp påminner i god tid före förfallodagen.",
    bullets: [
      "Notis i telefonen före förfallodagen",
      "Mindre risk för påminnelseavgifter och dröjsmålsränta",
      "Kostnaden hamnar direkt på rätt projekt",
    ],
    img: "/landing/enmansforetag/leverantorsfakturor.webp",
    alt: "Inköpsfakturor i ByggExp och notis i telefonen: faktura att betala, förfaller om 7 dagar",
  },
  {
    eyebrow: "Dokumentation",
    title: "Foton och kontroller – i projektet, inte i pärmar",
    text: "Foton, byggdagbok och egenkontroller sparas på rätt projekt.",
    bullets: [
      "Svaret finns när kunden undrar hur det såg ut bakom väggen",
      "KMA och egenkontroller med färdiga mallar",
    ],
    img: "/landing/features/4foto-1200.webp",
    alt: "Projektets foton i ByggExp på dator och mobil",
  },
  {
    eyebrow: "Lönsamhet",
    title: "Vet du vilket jobb som faktiskt lönar sig?",
    text: "ByggExp visar budget mot utfall, vad timmar och material kostar och marginalen per projekt i realtid – du ser direkt om ett jobb börjar gå back.",
    img: "/landing/features/9ekonomi-1200.webp",
    alt: "Projektets ekonomi i ByggExp: budget, kostnader och marginal",
  },
];

const INCLUDED = [
  "Mobilapp + adminpanel",
  "Offerter och fakturor",
  "Påminnelser om kommande betalningar",
  "Skanna kvitton och fakturor – bokförs automatiskt på projektet",
  "Projektekonomi: budget, kalkyl och lönsamhet",
];

export default function EnmansforetagPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const headerT = headerTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const title = "ByggExp för enmansföretag – appen tar pappersarbetet";
  const description =
    "Driver du byggfirman själv? ByggExp samlar offerter, fakturor, kvitton och deadlines i telefonen – från 299 SEK/månad, 2 veckor gratis.";
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/enmansforetag`;

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

      <main className="em">
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
                Boka demo
              </a>
              <ul className="em-checks">
                <li>2 veckor gratis</li>
                <li>Kom igång på 15 minuter</li>
                <li>Ingen bindningstid</li>
              </ul>
            </div>
            <div className="em-hero-visual">
              <img
                className="em-hero-laptop"
                src="/landing/features/9ekonomi-1200.webp"
                alt="ByggExp i adminpanelen"
              />
              <img
                className="em-hero-phone"
                src="/landing/hero/phone-3d.webp"
                alt="ByggExp-appen i mobilen"
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

        {/* FEATURE ROWS — image side alternates */}
        {FEATURES.map((f, i) => (
          <section
            key={f.title}
            className={`em-feature${i % 2 === 0 ? "" : " em-feature-reverse"}`}
          >
            <div className="container em-feature-inner">
              <div className="em-feature-text">
                <p className="em-eyebrow">{f.eyebrow}</p>
                <h2>{f.title}</h2>
                <p className="em-lead">{f.text}</p>
                {f.bullets ? (
                  <ul className="em-bullets">
                    {f.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              <div className="em-feature-visual">
                {f.phone ? (
                  <div className="em-phone">
                    <img src={f.img} alt={f.alt} />
                  </div>
                ) : (
                  <img className="em-mockup" src={f.img} alt={f.alt} />
                )}
              </div>
            </div>
          </section>
        ))}

        {/* QUOTE → INVOICE */}
        <section className="em-steps">
          <div className="container">
            <p className="em-eyebrow">Offert och faktura</p>
            <h2>Från offert till betald faktura – utan att skriva om något</h2>
            <div className="em-steps-grid">
              {STEPS.map((s, i) => (
                <div key={s.title} className="em-step">
                  <img src={s.img} alt={s.alt} />
                  <span className="em-step-label">Steg {i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICE */}
        <section className="em-price">
          <div className="container em-feature-inner">
            <div className="em-feature-text">
              <p className="em-eyebrow">Pris</p>
              <h2>Paketet Koll på pengarna</h2>
              <p className="em-price-num">
                299 <span>SEK / månad</span>
              </p>
              <p className="em-lead">15 % rabatt vid årsbetalning</p>
              <a href="#cta" className="btn-primary">
                Boka demo
              </a>
              <ul className="em-checks">
                <li>2 veckor gratis med alla funktioner</li>
                <li>Ingen startavgift</li>
                <li>Ingen bindningstid</li>
              </ul>
            </div>
            <div className="em-price-box">
              <h3>Det här ingår</h3>
              <ul className="em-bullets">
                {INCLUDED.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p>
                Anställer du din första medarbetare? Löner och AGI ingår redan.
                Tidrapport och planering finns i paketen för 690 och 990 SEK.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
