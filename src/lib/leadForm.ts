/**
 * Shared validation for the demo-request forms (CTA + Kontakt).
 *
 * Name and email are required; the phone number is optional — an email
 * address alone is enough for us to follow up on a lead.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

export type LeadFormErrors = {
  name: boolean;
  email: boolean;
};

export const NO_LEAD_FORM_ERRORS: LeadFormErrors = {
  name: false,
  email: false,
};

export function isValidEmail(value: string) {
  return EMAIL_PATTERN.test(value.trim());
}

export function validateLeadForm(name: string, email: string): LeadFormErrors {
  return {
    name: !name.trim(),
    email: !isValidEmail(email),
  };
}

export function hasLeadFormErrors(errors: LeadFormErrors) {
  return errors.name || errors.email;
}
