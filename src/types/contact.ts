export type ContactT = {
  breadcrumbHome: string;
  eyebrow: string;
  title: string;
  lead: string;
  checks: readonly [string, string, string];

  formName: string;
  formEmail: string;
  formCompany: string;
  formPhone: string;
  formTopic: string;
  topics: readonly string[];
  formMessage: string;
  formSubmit: string;

  callLabel: string;
  callText: string;
  mailLabel: string;
  mailText: string;
  emailSupport: string;
  emailSales: string;
  emailPress: string;

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
  rowMeetings: string;
  meetings: string;
  rowPhone: string;
  rowEmail: string;

  faqEyebrow: string;
  faqTitle: string;
  faq: readonly { q: string; a: string }[];
};

export type ContactProps = {
  contactT: ContactT;
};
