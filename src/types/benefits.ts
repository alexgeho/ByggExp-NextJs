export type BenefitsOfficeT = {
  benefitsOfficeTitle: string;
  benefitsOfficeHeading1: string;
  benefitsOfficeAccent: string;
  benefitsOfficeHeading2: string;
  benefitsOfficeLead: string;

  benefitsOfficeCard1Title: string;
  benefitsOfficeCard1Text: string;

  benefitsOfficeCard2Title: string;
  benefitsOfficeCard2Text: string;

  benefitsOfficeCard3Title: string;
  benefitsOfficeCard3Text: string;

  benefitsOfficeCard4Title: string;
  benefitsOfficeCard4Text: string;
};

export type BenefitsSiteT = {
  benefitsSiteLead: string;

  benefitsSiteCard1Title: string;
  benefitsSiteCard1Text: string;

  benefitsSiteCard2Title: string;
  benefitsSiteCard2Text: string;

  benefitsSiteCard3Title: string;
  benefitsSiteCard3Text: string;

  benefitsSiteCard4Title: string;
  benefitsSiteCard4Text: string;
};

export type BenefitsProps = {
  benefitsT: {
    office: BenefitsOfficeT;
    site: BenefitsSiteT;
  };
};