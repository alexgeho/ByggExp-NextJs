import type { GetStaticPaths, GetStaticProps } from "next";

import FunktionPageView from "../../../components/FunktionPage/FunktionPageView";
import { FUNKTION_PAGE_SLUGS } from "../../../content/funktion-pages";
import type { LandingLanguageCode } from "../../../locales/languages";

// Commercial feature pages /sv/funktioner/<slug> (Swedish only). Template:
// components/FunktionPage/FunktionPageView.tsx (shared with /nb/funksjoner).

type Props = { lang: LandingLanguageCode; slug: string };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: FUNKTION_PAGE_SLUGS.map((slug) => ({ params: { lang: "sv", slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    lang: params?.lang as LandingLanguageCode,
    slug: params?.slug as string,
  },
});

export default FunktionPageView;
