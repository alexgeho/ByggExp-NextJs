export type FooterProps = {
  footerT: {
    footerBlog: string;
    footerAbout: string;
    footerFaq: string;
    footerPrivacy: string;
    footerTerms: string;
    footerDeleteAccount: string;
    footerCreditBy: string;
  };
  /** Overrides the /[lang]/ route segment (pages without it, e.g. _error). */
  lang?: string;
};