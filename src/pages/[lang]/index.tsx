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
import Pain from "../../components/Pain/Pain";
import { buildHreflangAlternates } from "../../lib/seo";
import Pricing from "../../components/Pricing/Pricing";
import { benefitsTranslations } from "../../locales/benefits";
import { ctaTranslations } from "../../locales/CTA";
import { featuresTranslations1_3 } from "../../locales/features1-3";
import { featuresTranslations4_6 } from "../../locales/features4-6";
import { featuresTranslations7_9 } from "../../locales/features7-9";
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
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({ params }) => {
  const lang = params?.lang as LandingLanguageCode;
  if (!landingLanguageCodes.includes(lang)) {
    return { notFound: true };
  }

  return {
    props: {
      lang,
      seo: await fetchSiteSeo(lang).catch(() => null),
    },
  };
};

export default function HomePage({
  lang,
  seo,
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
  const finalBenefitsT = finalBenefitsTranslations[lang];
  const pricingT = pricingTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const footerT = footerTranslations[lang];
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://byggexp.se";
  const canonicalUrl = seo?.canonicalUrl || `${siteUrl}/${lang}`;
  const hreflangAlternates = buildHreflangAlternates((code) => `${siteUrl}/${code}`);
  const title = seo?.title || "ByggExp";
  const description = seo?.description || "";

  return (
    <>
      <Head>
        <title>{title}</title>
        {description ? <meta name="description" content={description} /> : null}
        <link rel="canonical" href={canonicalUrl} />
        {hreflangAlternates.map((alt) => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
        {seo?.noIndex ? <meta name="robots" content="noindex, nofollow" /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {description ? <meta property="og:description" content={description} /> : null}
        <meta property="og:url" content={canonicalUrl} />
        {seo?.imageUrl ? <meta property="og:image" content={seo.imageUrl} /> : null}
      </Head>
      <Header headerT={headerT} />
      <Hero heroT={heroT} />
      <Pain painT={painT} />
      <Benefits benefitsT={benefitsT} />
      <Features
        featuresT1_3={featuresT1_3}
        featuresT4_6={featuresT4_6}
        featuresT7_9={featuresT7_9}
      />
      <FinalBenefits finalBenefitsT={finalBenefitsT} />
      <Pricing pricingT={pricingT} />
      <CTA ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
