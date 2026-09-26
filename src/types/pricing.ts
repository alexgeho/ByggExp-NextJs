/** Plural forms keyed by Intl.PluralRules categories; `other` is the fallback. */
export type PluralForms = Partial<Record<Intl.LDMLPluralRule, string>> & {
  other: string;
};

export type PricingT = {
  pricingTitle: string;
  pricingHeading: string;
  pricingSub: string;

  periodLabel: string;
  pricingMonthly: string;
  pricingYearly: string;

  usersLabel: string;
  usersDecrease: string;
  usersIncrease: string;
  /** "{n} users" – `{n}` is replaced with the number. */
  usersCount: PluralForms;

  pricingPer: string;
  popular: string;

  planFaktura: string;
  planProjekt: string;
  planKomplett: string;
  planFakturaSub: string;
  planProjektSub: string;
  planKomplettSub: string;

  fakturaUsers: string;
  fakturaMaxUsers: string;
  fixedPrice: string;
  /** `{included}` and `{extra}` are replaced with numbers. */
  includedDetail: string;
  yearlyNote: string;

  groupProject: string;
  groupFinance: string;
  projectItems: readonly string[];
  financeItems: readonly string[];

  pricingButton: string;
  pricingTrial: string;

  offerBadge: string;
  offerTitle: string;
  offerText: string;
  offerButton: string;

  addonBadge: string;
  addonTitle: string;
  addonPer: string;
  addonNote: string;
  addonItems: readonly string[];

  komplettItems: string[];

  usersNote: string;
  fakturaLimitNote: string;

  footnote: string;
};

export type PricingProps = {
  pricingT: PricingT;
  lang: string;
};
