import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

import Benefits from "../../components/Benefits/Benefits";
import CTA from "../../components/CTA/CTA";
import Features from "../../components/Features/Features";
import FinalBenefits from "../../components/FinalBenefits/FinalBenefits";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Pain from "../../components/Pain/Pain";
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

type HomePageProps = {
  lang: LandingLanguageCode;
};

export const getStaticPaths: GetStaticPaths<HomePageProps> = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ params }) => ({
  props: {
    lang: params?.lang as LandingLanguageCode,
  },
});

export default function HomePage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

  return (
    <>
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
