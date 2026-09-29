export type ContactT = {
  breadcrumbHome: string;
  eyebrow: string;
  title: string;
  lead: string;

  formName: string;
  formEmail: string;
  contactError: string;
  formCompany: string;
  formPhone: string;
  formPhoneHint: string;
  formTopic: string;
  topics: readonly string[];
  formMessage: string;
  formSubmit: string;

  callLabel: string;
  callText: string;
  phoneOffice: string;
  phoneMobile: string;
  mailLabel: string;
  mailText: string;
  emailSupport: string;
  emailSales: string;
  emailPress: string;

  appsLabel: string;
  appsText: string;
  videoLabel: string;
  videoText: string;
  appStorePre: string;
  googlePlayPre: string;
  youtubePre: string;

  stepsEyebrow: string;
  stepsTitle: string;
  steps: readonly { title: string; text: string }[];

  companyEyebrow: string;
  companyText: string;
  termsLink: string;
  privacyLink: string;
  rowCompany: string;
  rowOrgNr: string;
  rowSeat: string;
  seatCountry: string;
  rowAddress: string;
  mapLink: string;
  rowHours: string;
  hours: string;
  rowPayment: string;
  payment: string;
  payTitle: string;
  paySteps: readonly { title: string; text: string }[];
  payTermsLink: string;

  teamLabel: string;
  teamRoles: { founder: string };
  rowPhone: string;
  rowEmail: string;

  faqEyebrow: string;
  faqTitle: string;
  faq: readonly { q: string; a: string }[];
};

export type ContactProps = {
  contactT: ContactT;
};
