/**
 * Shared validation for the demo-request forms (CTA + Kontakt).
 *
 * Name and email are required; the phone number is optional — an email
 * address alone is enough for us to follow up on a lead.
 */

// The part before "@" is restricted to ASCII: no mail provider issues
// mailboxes with Cyrillic or accented characters there, so such an address is
// a typo or junk and the lead would be unreachable. The domain stays
// permissive — .se does register IDN domains (foretag.se with a-ring/umlauts),
// and rejecting those would turn away real Swedish businesses.
const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@[^\s@]+\.[^\s@.]{2,}$/;

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

/**
 * Gemensam regel för ALLA leadformulär på sajten (startsidans CTA + Kontakt):
 * två fält — "Namn / företag" och "Telefon eller e-post". Besökaren skriver
 * det som passar; vi godtar en giltig e-post eller ett nummer med minst 7 siffror.
 */
export function isValidContact(value: string) {
  const v = value.trim();
  return isValidEmail(v) || v.replace(/\D/g, "").length >= 7;
}

export function validateContactLeadForm(name: string, contact: string): LeadFormErrors {
  return {
    name: !name.trim(),
    email: !isValidContact(contact),
  };
}

// Mejl-API:t kräver en giltig f-email. Lämnar besökaren bara telefon skickas
// en tydlig markör och numret går i f-phone (samma mönster som PHONE_NOT_PROVIDED).
const EMAIL_NOT_PROVIDED = "ej-angiven@byggexp.se";

export function buildContactLeadPayload(name: string, contact: string, fallbackSource: string) {
  const v = contact.trim();
  const isEmail = isValidEmail(v);
  return buildLeadPayload(name, isEmail ? v : EMAIL_NOT_PROVIDED, isEmail ? "" : v, fallbackSource);
}
