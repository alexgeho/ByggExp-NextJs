import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Benefits from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import Features from "../../components/Features/Features";
import FinalBenefits from "../../components/FinalBenefits/FinalBenefits";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import HeroV2, { HERO_V2_VARIANTS, type HeroV2Variant } from "../../components/HeroV2/HeroV2";
import Pain from "../../components/Pain/Pain";
import { buildHreflangAlternates, defaultHomeMeta, localeOrigin } from "../../lib/seo";
import Pricing, { FAKTURA_PRICE } from "../../components/Pricing/Pricing";
import { benefitsTranslations } from "../../locales/benefits";
import { ctaTranslations } from "../../locales/CTA";
import { featuresTranslations1_3 } from "../../locales/features1-3";
import { featuresTranslations4_6 } from "../../locales/features4-6";
import { featuresTranslations7_9 } from "../../locales/features7-9";
import { featuresTranslations10_11 } from "../../locales/features10-11";
import { finalBenefitsTranslations } from "../../locales/finalBenefits";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { heroTranslations } from "../../locales/hero";
import { landingLanguageCodes, type LandingLanguageCode } from "../../locales/languages";
import { painTranslations } from "../../locales/pain";
import { pricingTranslations } from "../../locales/pricing";
import { fetchSiteSeo } from "../../lib/blog-api";
import type { SiteSeo } from "../../types/blog";

type HomePageProps = {
  lang: LandingLanguageCode;
  seo: SiteSeo | null;
  // ?v=old shows the previous home page (git tag startsida-v1) for comparison.
  oldVersion: boolean;
  heroVariant: HeroV2Variant;
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ params, query }) => {
  const lang = params?.lang as LandingLanguageCode;
  if (!landingLanguageCodes.includes(lang)) {
    return { notFound: true };
  }

  return {
    props: {
      lang,
      seo: await fetchSiteSeo(lang).catch(() => null),
      oldVersion: query.v === "old",
      // ?v=<variant> previews other HeroV2 layouts without changing the default.
      heroVariant: HERO_V2_VARIANTS.find((v) => v === query.v) ?? "dark",
    },
  };
};

// Product entity for the home page. Entry price comes from components/Pricing
// so it can't drift from the visible plans (prices are SEK excl. VAT). No
// aggregateRating until there are real, verifiable reviews.
function homeAppSchema(url: string, description?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ByggExp",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    url,
    ...(description ? { description } : {}),
    publisher: { "@type": "Organization", name: "ByggExp", url: "https://byggexp.se" },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "SEK",
      lowPrice: FAKTURA_PRICE,
      offerCount: 3,
    },
  };
}

export default function HomePage({
  lang,
  seo,
  oldVersion,
  heroVariant,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  useEffect(() => {
    if (!router.asPath.includes("#")) return;

    const id = router.asPath.split("#")[1];
    if (!id) return;

    let frame = 0;
    let lastTop: number | null = null;
    let stableFrames = 0;
    let framesWaited = 0;

    const waitForStableLayout = () => {
      const element = document.getElementById(id);
      const top = element ? element.getBoundingClientRect().top + window.scrollY : null;

      if (top !== null && lastTop !== null && Math.abs(top - lastTop) < 1) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }

      lastTop = top;
      framesWaited += 1;

      if (element && (stableFrames >= 6 || framesWaited > 120)) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      frame = window.requestAnimationFrame(waitForStableLayout);
    };

    frame = window.requestAnimationFrame(waitForStableLayout);

    return () => window.cancelAnimationFrame(frame);
  }, [router.asPath]);

  const headerT = headerTranslations[lang];
  const painT = painTranslations[lang];
  const heroT = heroTranslations[lang];
  const benefitsT = benefitsTranslations[lang];
  const featuresT1_3 = featuresTranslations1_3[lang];
  const featuresT4_6 = featuresTranslations4_6[lang];
  const featuresT7_9 = featuresTranslations7_9[lang];
  const featuresT10_11 = featuresTranslations10_11[lang];
  const finalBenefitsT = finalBenefitsTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const canonicalUrl = seo?.canonicalUrl || `${localeOrigin(lang)}/${lang}`;
  const hreflangAlternates = buildHreflangAlternates((code) => `${localeOrigin(code)}/${code}`);
  const fallbackMeta = defaultHomeMeta[lang] ?? defaultHomeMeta.sv;
  const title = seo?.title || fallbackMeta.title;
  const description = seo?.description || fallbackMeta.description;

  const features = (
    <Features
      lang={lang}
      featuresT1_3={featuresT1_3}
      featuresT4_6={featuresT4_6}
      featuresT7_9={featuresT7_9}
      featuresT10_11={featuresT10_11}
    />
  );

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        {hreflangAlternates.map((alt) => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
        {seo?.noIndex || oldVersion ? <meta name="robots" content="noindex, nofollow" /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {description ? <meta property="og:description" content={description} /> : null}
        <meta property="og:url" content={canonicalUrl} />
        {seo?.imageUrl ? <meta property="og:image" content={seo.imageUrl} /> : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeAppSchema(canonicalUrl, description)) }}
        />
      </Head>
      <Header headerT={headerT} />
      {oldVersion ? (
        <>
          <Hero heroT={heroT} />
          <Pain painT={painT} />
          <Benefits benefitsT={benefitsT} />
          {features}
          <FinalBenefits finalBenefitsT={finalBenefitsT} />
          <Pricing pricingT={pricingT} lang={lang} />
        </>
      ) : (
        <>
          {/* Hero → services → prices first; pain and benefits further down (owner 2026-10-20) */}
          {lang === "sv" ? <HeroV2 variant={heroVariant} /> : <Hero heroT={heroT} />}
          {features}
          <Pricing pricingT={pricingT} lang={lang} />
          <Pain painT={painT} />
          <Benefits benefitsT={benefitsT} finalBenefitsT={finalBenefitsT} />
        </>
      )}
      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
