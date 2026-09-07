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

/**
 * The mail API still validates `f-phone` as non-empty (400 "f-phone should
 * not be empty"), so a lead that only left an email cannot be posted with a
 * blank value. Send an explicit marker instead — it keeps the field valid and
 * reads correctly in the notification, rather than looking like a lost number.
 *
 * Remove this once `f-phone` is optional in the API DTO.
 */
const PHONE_NOT_PROVIDED = "Ej angivet";

export function buildLeadPayload(
  name: string,
  email: string,
  phone: string,
  fallbackSource: string,
) {
  return {
    "f-name": name.trim(),
    "f-email": email.trim(),
    "f-phone": phone.trim() || PHONE_NOT_PROVIDED,
    // The mail backend labels the lead with this; without it the
    // notification falls back to the old /ru page.
    "f-source":
      typeof window !== "undefined"
        ? `${window.location.host}${window.location.pathname}`
        : fallbackSource,
  };
}
