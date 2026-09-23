import { useState, type FormEvent } from "react";
import Link from "next/link";
import { API_URL } from "../../config/api";
import {
  NO_LEAD_FORM_ERRORS,
  buildLeadPayload,
  hasLeadFormErrors,
  isValidEmail,
  validateLeadForm,
} from "../../lib/leadForm";
import type { ContactProps } from "../../types/contact";
import type { CTAProps } from "../../types/cta";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

const PHONE = "+46 70 757 75 75";
const WHATSAPP_NUMBER = "+46 70 757 75 75";
const COMPANY = "RealMar AB";
const ORG_NR = "559474-9383";
const STREET = "Byggmästarvägen 18";
const POSTAL = "168 32 Bromma";
const ADDRESS = `${STREET}, ${POSTAL}`;

const phoneHref = `tel:${PHONE.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

type Props = ContactProps & CTAProps & { lang: string };

function Contact({ contactT: t, ctaT, lang }: Props) {
  /* ON SUBMIT/SUCCESS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState(NO_LEAD_FORM_ERRORS);

  /* INPUTS */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  function handleNameChange(value: string) {
    setName(value);
    // Clear the warning as soon as the field is filled in, so the user
    // sees the form recover while typing instead of only on re-submit.
    if (errors.name && value.trim()) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
  }
  function handleEmailChange(value: string) {
    setEmail(value);
    if (errors.email && isValidEmail(value)) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadForm(name, email);
    setErrors(nextErrors);
    if (hasLeadFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    const details = [
      topic && `Ärende: ${topic}`,
      company.trim() && `Företag: ${company.trim()}`,
      message.trim() && `Meddelande: ${message.trim()}`,
    ]
      .filter(Boolean)
      .join(" · ");

    try {
      const response = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...buildLeadPayload(name, email, phone, "kontakt"),
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
      {/* HERO */}
      <section className="kontakt-hero">
        <div className="kontakt-container">
          <nav className="kontakt-breadcrumbs" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>{t.breadcrumbHome}</Link>
            <span aria-hidden="true">/</span>
            <span className="kontakt-breadcrumbs-current">{t.eyebrow}</span>
          </nav>

          <div className="kontakt-hero-text">
            <span className="kontakt-eyebrow">{t.eyebrow}</span>
            <h1>{t.title}</h1>
            <p className="kontakt-lead">{t.lead}</p>
            <ul className="kontakt-checks">
              {t.checks.map((check) => (
                <li key={check}>✓ {check}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FORM + CONTACT CARDS */}
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
                      type="email"
                      placeholder={t.formEmail}
                      autoComplete="email"
                      value={email}
                      onChange={(e) => handleEmailChange(e.currentTarget.value)}
                      aria-invalid={errors.email}
                      aria-describedby="c-email-error"
                    />
                    <div className="kontakt-err" id="c-email-error" role="alert">
                      {ctaT.ctaEmailError}
                    </div>
                  </div>
                </div>

                <div className="kontakt-row">
                  <div className="kontakt-field">
                    <label htmlFor="c-company" className="sr-only">{t.formCompany}</label>
                    <input
                      id="c-company"
                      type="text"
                      placeholder={t.formCompany}
                      autoComplete="organization"
                      value={company}
                      onChange={(e) => setCompany(e.currentTarget.value)}
                    />
                  </div>

                  <div className="kontakt-field">
                    <label htmlFor="c-phone" className="sr-only">{t.formPhone}</label>
                    <input
                      id="c-phone"
                      type="tel"
                      placeholder={t.formPhone}
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.currentTarget.value)}
                    />
                  </div>
                </div>

                <div className="kontakt-field">
                  <label htmlFor="c-topic" className="sr-only">{t.formTopic}</label>
                  <select
                    id="c-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.currentTarget.value)}
                    className={topic ? "" : "is-placeholder"}
                  >
                    <option value="">{t.formTopic}</option>
                    {t.topics.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="kontakt-field">
                  <label htmlFor="c-message" className="sr-only">{t.formMessage}</label>
                  <textarea
                    id="c-message"
                    rows={5}
                    placeholder={t.formMessage}
                    value={message}
                    onChange={(e) => setMessage(e.currentTarget.value)}
                  />
                </div>

                <button type="submit" className="kontakt-submit" disabled={isSubmitting}>
                  {isSubmitting ? ctaT.ctaButtonSending : t.formSubmit}
                </button>

                {submitError && (
                  <p className="kontakt-fine kontakt-fine-error">{ctaT.ctaSubmitError}</p>
                )}
                <p className="kontakt-fine">{ctaT.ctaPrivacy}</p>
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
                    prefill={{ name, email, customAnswers: { a1: phone } }}
                    styles={{ height: "650px" }}
                  />
                </div>
              </div>
            )}
          </div>

          <aside className="kontakt-cards">
            <div className="kontakt-card">
              <span className="kontakt-card-label">{t.callLabel}</span>
              <a href={phoneHref} className="kontakt-card-value">{PHONE}</a>
              <p>{t.callText}</p>
            </div>

            <div className="kontakt-card">
              <span className="kontakt-card-label">{t.mailLabel}</span>
              <ul className="kontakt-mail-list">
                <li>
                  <span>{t.emailSales}</span>
                  <a href="mailto:sales@byggexp.se">sales@byggexp.se</a>
                </li>
                <li>
                  <span>{t.emailSupport}</span>
                  <a href="mailto:support@byggexp.se">support@byggexp.se</a>
                </li>
                <li>
                  <span>{t.emailPress}</span>
                  <a href="mailto:press@byggexp.se">press@byggexp.se</a>
                </li>
              </ul>
              <p>{t.mailText}</p>
            </div>

            <div className="kontakt-card">
              <span className="kontakt-card-label">{t.chatLabel}</span>
              <p>{t.chatText}</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="kontakt-card-link"
              >
                {t.chatButton} →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="kontakt-company">
        <div className="kontakt-container kontakt-company-grid">
          <div>
            <span className="kontakt-eyebrow">{t.companyEyebrow}</span>
            <h2>ByggExp — {COMPANY}</h2>
            <p>{t.companyText}</p>
            <p className="kontakt-company-links">
              <Link href={`/${lang}/villkor`}>{t.termsLink}</Link>
              <span aria-hidden="true"> · </span>
              <Link href={`/${lang}/integritetspolicy`}>{t.privacyLink}</Link>
            </p>
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
              <dt>{t.rowHours}</dt>
              <dd>{t.hours}</dd>
            </div>
            <div>
              <dt>{t.rowMeetings}</dt>
              <dd>{t.meetings}</dd>
            </div>
            <div>
              <dt>{t.rowPhone}</dt>
              <dd><a href={phoneHref}>{PHONE}</a></dd>
            </div>
            <div>
              <dt>{t.rowEmail}</dt>
              <dd><a href="mailto:sales@byggexp.se">sales@byggexp.se</a></dd>
            </div>
          </dl>
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

      {/* HOW IT WORKS */}
      <section className="kontakt-steps">
        <div className="kontakt-container">
          <span className="kontakt-eyebrow">{t.stepsEyebrow}</span>
          <h2>{t.stepsTitle}</h2>
          <ol className="kontakt-steps-list">
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <span className="kontakt-step-num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Contact;
