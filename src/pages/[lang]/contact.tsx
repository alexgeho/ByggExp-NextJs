import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ctaTranslations } from "../../locales/CTA";
import { contactTranslations } from "../../locales/contact";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { landingLanguageCodes, type LandingLanguageCode } from "../../locales/languages";
import { buildHreflangAlternates, localeOrigin } from "../../lib/seo";

type ContactPageProps = {
  lang: LandingLanguageCode;
};

export const getStaticPaths: GetStaticPaths<ContactPageProps> = async () => ({
  paths: landingLanguageCodes.map((lang) => ({ params: { lang } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<ContactPageProps> = async ({ params }) => ({
  props: {
    lang: params?.lang as LandingLanguageCode,
  },
});

export default function ContactPage({
  lang,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const headerT = headerTranslations[lang];
  const footerT = footerTranslations[lang];
  const contactT = contactTranslations[lang];
  const ctaT = ctaTranslations[lang];
  const pageTitle =
    lang === "sv"
      ? "Kontakta ByggExp – boka gratis demo"
      : `${contactT.title} | ByggExp`;
  const canonicalUrl = `${localeOrigin(lang)}/${lang}/contact`;
  const hreflangAlternates = buildHreflangAlternates(
    (code) => `${localeOrigin(code)}/${code}/contact`,
  );

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={contactT.lead} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangAlternates.map((alt) => (
          <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
        ))}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={contactT.lead} />
        <meta property="og:url" content={canonicalUrl} />
      </Head>
      <Header headerT={headerT} />
      <Contact contactT={contactT} ctaT={ctaT} lang={lang} />
      <Footer footerT={footerT} />
    </>
  );
}
