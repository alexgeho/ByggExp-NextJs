import { useState, type FormEvent } from "react";
import Link from "next/link";
import { API_URL } from "../../config/api";
import {
  NO_LEAD_FORM_ERRORS,
  buildContactLeadPayload,
  hasLeadFormErrors,
  isValidContact,
  isValidEmail,
  validateContactLeadForm,
} from "../../lib/leadForm";
import type { ContactProps } from "../../types/contact";
import type { CTAProps } from "../../types/cta";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

const APP_STORE_URL = "https://apps.apple.com/se/app/id6748280779";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=se.byggexp.app";
const YOUTUBE_URL = "https://www.youtube.com/@byggexp";

const PHONE = "+46 70 757 75 75";
const PHONE_OFFICE = "+46 8 446 821 58";
const COMPANY = "Real Marketing s. r. o.";
const ORG_NR = "53551958 (IČO) · VAT SK2121411820";
// Registered office of the company (Slovakia) — listed last in the table; the
// Bromma office address is what visitors need first.
const SEAT = "Gessayova 2616/14, 851 03 Bratislava";
const STREET = "Ekbacksvägen 32";
const POSTAL = "168 69 Bromma";
const ADDRESS = `${STREET}, ${POSTAL}`;

const phoneHref = `tel:${PHONE.replace(/\s/g, "")}`;
const officeHref = `tel:${PHONE_OFFICE.replace(/\s/g, "")}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

type Props = ContactProps & CTAProps & { lang: string };

function Contact({ contactT: t, ctaT, lang }: Props) {
  /* ON SUBMIT/SUCCESS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState(NO_LEAD_FORM_ERRORS);

  /* INPUTS */
  const [name, setName] = useState("");
  // Ett fält för telefon ELLER e-post — besökaren skriver det som passar.
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(value: string) {
    setName(value);
    // Clear the warning as soon as the field is filled in, so the user
    // sees the form recover while typing instead of only on re-submit.
    if (errors.name && value.trim()) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
  }
  function handleContactChange(value: string) {
    setContact(value);
    if (errors.email && isValidContact(value)) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateContactLeadForm(name, contact);
    setErrors(nextErrors);
    if (hasLeadFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    const details = [
      message.trim() && `Meddelande: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join(" · ");

    try {
      const response = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buildContactLeadPayload(name, contact, "kontakt"),
          ...(details && { "f-message": details }),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setIsSuccess(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="kontakt">
      {/* HERO: breadcrumbs + plain page title, no sales copy */}
      <section className="kontakt-hero">
        <div className="kontakt-container">
          <nav className="kontakt-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>{t.breadcrumbHome}</Link>
            <span aria-hidden="true">/</span>
            <span className="kontakt-breadcrumbs-current">{t.eyebrow}</span>
          </nav>
          <h1 className="kontakt-title">{t.eyebrow}</h1>
        </div>
      </section>

      {/* Ordnat efter vad besökaren vill göra:
            1. skriva till oss (formulär)      | ringa/mejla direkt
            2. veta vem som svarar (personer, hela bredden)
            3. betala/ändra abonnemang (kund) | hämta appen · titta på video
          Mobil: samma ordning uppifrån och ned. */}
      <section className="kontakt-main">
        <div className="kontakt-container kontakt-grid">
          <div className="kontakt-form-col">
            {!isSuccess ? (
              <form noValidate onSubmit={handleSubmit} className="kontakt-form">
                <div className="kontakt-row">
                  <div className={`kontakt-field${errors.name ? " error" : ""}`}>
                    <label htmlFor="c-name" className="sr-only">{t.formName}</label>
                    <input
                      id="c-name"
                      type="text"
                      placeholder={t.formName}
                      autoComplete="name"
                      value={name}
                      onChange={(e) => handleNameChange(e.currentTarget.value)}
                      aria-invalid={errors.name}
                      aria-describedby="c-name-error"
                    />
                    <div className="kontakt-err" id="c-name-error" role="alert">
                      {ctaT.ctaNameError}
                    </div>
                  </div>

                  <div className={`kontakt-field${errors.email ? " error" : ""}`}>
                    <label htmlFor="c-email" className="sr-only">{t.formEmail}</label>
                    <input
                      id="c-email"
                      type="text"
                      placeholder={t.formEmail}
                      autoComplete="email"
                      value={contact}
                      onChange={(e) => handleContactChange(e.currentTarget.value)}
                      aria-invalid={errors.email}
                      aria-describedby="c-email-error"
                    />
                    <div className="kontakt-err" id="c-email-error" role="alert">
                      {t.contactError}
                    </div>
                  </div>
                </div>

                <div className="kontakt-field kontakt-field-grow">
                  <label htmlFor="c-message" className="sr-only">{t.formMessage}</label>
                  <textarea
                    id="c-message"
                    rows={3}
                    placeholder={t.formMessage}
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </div>

                <div className="kontakt-submit-row">
                  <button type="submit" className="kontakt-submit" disabled={isSubmitting}>
                    {isSubmitting ? ctaT.ctaButtonSending : t.formSubmit}
                  </button>
                  <p className="kontakt-fine">{ctaT.ctaPrivacy}</p>
                </div>

                {submitError && (
                  <p className="kontakt-fine kontakt-fine-error">{ctaT.ctaSubmitError}</p>
                )}
              </form>
            ) : (
              <div className="kontakt-success">
                <div className="kontakt-success-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h2>{ctaT.ctaSuccessTitle}</h2>
                <p className="kontakt-success-hint">{ctaT.ctaSuccessCalendlyHint}</p>
                <p>{ctaT.ctaSuccessText}</p>
                <div className="kontakt-calendly">
                  <CalendlyInlineWidget
                    url={CALENDLY_URL}
                    prefill={
                      isValidEmail(contact)
                        ? { name, email: contact }
                        : { name, customAnswers: { a1: contact } }
                    }
                    styles={{ height: "650px" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Kontaktvägar: telefon + e-post i ett kort */}
          <div className="kontakt-card kontakt-channels">
            <span className="kontakt-card-label">{t.callLabel}</span>
            <ul className="kontakt-mail-list">
              <li>
                <span>{t.phoneOffice}</span>
                <a href={officeHref}>{PHONE_OFFICE}</a>
              </li>
              <li>
                <span>{t.phoneMobile}</span>
                <a href={phoneHref}>{PHONE}</a>
              </li>
            </ul>
            <p>{t.callText}</p>

            <span className="kontakt-card-label kontakt-card-label--sub">{t.mailLabel}</span>
            <ul className="kontakt-mail-list">
              <li>
                <span>{t.emailSales}</span>
                <a href="mailto:sales@byggexp.se">sales@byggexp.se</a>
              </li>
              <li>
                <span>{t.emailSupport}</span>
                <a href="mailto:support@byggexp.se">support@byggexp.se</a>
              </li>
            </ul>
            <p>{t.mailText}</p>
          </div>

          {/* Personer: riktiga människor bakom telefon och mejl (som remato.com/contact) */}

          {/* Befintliga kunder: var och hur man betalar, byter kort och avslutar.
              Allt här är bekräftat i admin (Prenumeration, /company/billing →
              Stripe Checkout + Stripe-portalen) och i prissidans texter. */}
          <div className="kontakt-card kontakt-payment">
            <span className="kontakt-card-label">{t.payTitle}</span>
            <ol className="kontakt-pay-steps">
              {t.paySteps.map((step, index) => (
                <li key={step.title}>
                  <span className="kontakt-pay-num" aria-hidden="true">{index + 1}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="kontakt-pay-foot">
              <div className="kontakt-pay-logos" aria-label={t.payment}>
                <img src="/landing/contact/visa.svg" alt="Visa" width={44} height={28} />
                <img src="/landing/contact/mastercard.svg" alt="Mastercard" width={44} height={28} />
                <img src="/landing/contact/stripe.svg" alt="Stripe" width={44} height={28} />
              </div>
              <Link className="kontakt-card-link" href={`/${lang}/villkor`}>
                {t.payTermsLink} →
              </Link>
            </div>
          </div>

          {/* Två olika handlingar – två kort: hämta appen / titta på video */}
          <div className="kontakt-side">
            <div className="kontakt-card kontakt-apps">
              <span className="kontakt-card-label">{t.appsLabel}</span>
              <p>{t.appsText}</p>
              <div className="kontakt-badges">
                <a
                  className="kontakt-badge"
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/landing/contact/apple.svg" alt="" width={22} height={22} />
                  <span>
                    <small>{t.appStorePre}</small>
                    App Store
                  </span>
                </a>
                <a
                  className="kontakt-badge"
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/landing/contact/googleplay.svg" alt="" width={20} height={20} />
                  <span>
                    <small>{t.googlePlayPre}</small>
                    Google Play
                  </span>
                </a>
              </div>
            </div>

            <div className="kontakt-card kontakt-video">
              <span className="kontakt-card-label">{t.videoLabel}</span>
              <p>{t.videoText}</p>
              <div className="kontakt-badges">
                <a
                  className="kontakt-badge"
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/landing/contact/youtube.svg" alt="" width={24} height={24} />
                  <span>
                    <small>{t.youtubePre}</small>
                    YouTube
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="kontakt-steps">
        <div className="kontakt-container">
          <span className="kontakt-eyebrow">{t.stepsEyebrow}</span>
          <h2>{t.stepsTitle}</h2>
          <ol className="kontakt-steps-list">
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <div className="kontakt-step-visual">
                  <img
                    src={`/landing/contact/step${index + 1}.webp`}
                    width={256}
                    height={256}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="kontakt-step-num">{index + 1}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="kontakt-faq">
        <div className="kontakt-container kontakt-faq-inner">
          <span className="kontakt-eyebrow">{t.faqEyebrow}</span>
          <h2>{t.faqTitle}</h2>
          {t.faq.map((item) => (
            <details key={item.q} className="kontakt-faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="kontakt-company">
        <div className="kontakt-container kontakt-company-grid">
          <div className="kontakt-company-head">
            <span className="kontakt-eyebrow">{t.companyEyebrow}</span>
            <h2 className="kontakt-company-logo">
              {/* Same wordmark as the site header, in ink for the light section */}
              <img src="/landing/header/logo-dark.svg" alt="ByggExp" width={235} height={30} />
              <span className="sr-only"> — {COMPANY}</span>
            </h2>
            <p>{t.companyText}</p>
          </div>

          <dl className="kontakt-table">
            <div>
              <dt>{t.rowCompany}</dt>
              <dd>{COMPANY}</dd>
            </div>
            <div>
              <dt>{t.rowOrgNr}</dt>
              <dd>{ORG_NR}</dd>
            </div>
            <div>
              <dt>{t.rowAddress}</dt>
              <dd>
                {STREET}
                <br />
                {POSTAL}
                <a href={mapsHref} target="_blank" rel="noopener noreferrer">
                  {t.mapLink}
                </a>
              </dd>
            </div>
            <div>
              <dt>{t.rowSeat}</dt>
              <dd>
                {SEAT}
                <br />
                {t.seatCountry}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default Contact;
