import type { GetStaticPaths, GetStaticProps } from "next";

import FunktionPageView from "../../../components/FunktionPage/FunktionPageView";
import { FUNKSJON_PAGE_SLUGS_NB } from "../../../content/funksjon-pages-nb";
import type { LandingLanguageCode } from "../../../locales/languages";

// Norwegian commercial feature pages /nb/funksjoner/<slug> (byggexp.no only).
// Same template as /sv/funktioner/<slug>; content in content/funksjon-pages-nb.ts.
// The hub stays /nb/funktioner (shared route with sv/en, hreflang cluster).

type Props = { lang: LandingLanguageCode; slug: string };

export const getStaticPaths: GetStaticPaths<Props> = async () => ({
  paths: FUNKSJON_PAGE_SLUGS_NB.map((slug) => ({ params: { lang: "nb", slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => ({
  props: {
    lang: params?.lang as LandingLanguageCode,
    slug: params?.slug as string,
  },
});

export default FunktionPageView;
