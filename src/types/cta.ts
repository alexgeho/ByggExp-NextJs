export type CTAProps = {
  /** One short line under the heading (home page, R53). */
  lead?: string;
  ctaT: {
    ctaTitle: string;

    ctaHeading1: string;
    ctaAccent: string;
    ctaHeading2: string;

    ctaLead: string;

    ctaItem1: string;
    ctaItem2: string;
    ctaItem3: string;

    ctaFormTitle: string;

    ctaNameLabel: string;
    ctaNamePlaceholder: string;
    ctaNameError: string;

    ctaEmailLabel: string;
    ctaEmailPlaceholder: string;
    ctaEmailError: string;

    ctaPhoneLabel: string;
    ctaPhonePlaceholder: string;
    ctaPhoneOptional: string;

    ctaButton: string;
    ctaButtonSending: string;
    ctaSubmitError: string;

    ctaPrivacy: string;

    ctaSuccessTitle: string;
    ctaSuccessText: string;
    ctaSuccessCalendlyHint: string;
    ctaCalendlyButton: string;
  };
};