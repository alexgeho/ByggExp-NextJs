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

  benefitsOfficeCard5Title: string;
  benefitsOfficeCard5Text: string;

  benefitsOfficeCard6Title: string;
  benefitsOfficeCard6Text: string;

  benefitsOfficeCard7Title: string;
  benefitsOfficeCard7Text: string;

  benefitsOfficeCard8Title: string;
  benefitsOfficeCard8Text: string;
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

  benefitsSiteCard5Title: string;
  benefitsSiteCard5Text: string;

  benefitsSiteCard6Title: string;
  benefitsSiteCard6Text: string;

  benefitsSiteCard7Title: string;
  benefitsSiteCard7Text: string;

  benefitsSiteCard8Title: string;
  benefitsSiteCard8Text: string;
};

export type BenefitsProps = {
  benefitsT: {
    office: BenefitsOfficeT;
    site: BenefitsSiteT;
  };
};