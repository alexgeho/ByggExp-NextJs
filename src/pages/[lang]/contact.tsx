import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ctaTranslations } from "../../locales/CTA";
import { contactTranslations } from "../../locales/contact";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import { landingLanguageCodes, type LandingLanguageCode } from "../../locales/languages";

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

  return (
    <>
      <Header headerT={headerT} />
      <Contact contactT={contactT} ctaT={ctaT} />
      <Footer footerT={footerT} />
    </>
  );
}
