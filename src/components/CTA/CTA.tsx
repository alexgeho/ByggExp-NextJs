import type { CTAProps } from "../../types/cta";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { API_URL } from "../../config/api";
import {
  NO_LEAD_FORM_ERRORS,
  buildLeadPayload,
  hasLeadFormErrors,
  isValidEmail,
  validateLeadForm,
} from "../../lib/leadForm";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

function CTA({ ctaT }: CTAProps) {
  /* ON SUBMIT/SUCCCES OPENS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState(NO_LEAD_FORM_ERRORS);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateLeadForm(name, email);
    setErrors(nextErrors);

    if (hasLeadFormErrors(nextErrors)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildLeadPayload(name, email, phone, "cta")),
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
  /* END */

  /* INPUT NAME */
  const [name, setName] = useState("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setName(value);

    // Clear the warning as soon as the field is filled in, so the user
    // sees the form recover while typing instead of only on re-submit.
    if (errors.name && value.trim()) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
  }
  /* END */

  /* INPUT EMAIL */
  const [email, setEmail] = useState("");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setEmail(value);

    if (errors.email && isValidEmail(value)) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  }
  /* END */

  /* INPUT PHONE */
  const [phone, setPhone] = useState("");

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.currentTarget.value);
  }
  /* END */

  return (
    <section className="cta" id="cta">
      <div className="container cta-inner">

        {/* LEFT CONTENT */}
        <div className="ctaLeft">

          <div className="section-head cta-head">
            <span className="eyebrow">{ctaT.ctaTitle}</span>

            <h2>
              {ctaT.ctaHeading1} <em>{ctaT.ctaAccent}</em> {ctaT.ctaHeading2}
            </h2>
          </div>

          <ul className="cta-list">
            <li>
              <span className="check">
                <svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m1 5 4 4 8-8"
                  />
                </svg>
              </span>
              {ctaT.ctaItem1}
            </li>

            <li>
              <span className="check">
                <svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m1 5 4 4 8-8"
                  />
                </svg>
              </span>
              {ctaT.ctaItem2}
            </li>

            <li>
              <span className="check">
                <svg viewBox="0 0 14 10" fill="none">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m1 5 4 4 8-8"
                  />
                </svg>
              </span>
              {ctaT.ctaItem3}
            </li>
          </ul>
        </div>

        {/* RIGHT FORM */}

        <div className="form-card" id="form-card">
          {!isSuccess && (
            <div id="form-view">
              <h3>{ctaT.ctaFormTitle}</h3>

              <form id="demo-form" noValidate onSubmit={handleSubmit}>
                <div
                  className={`form-group${errors.name ? " error" : ""}`}
                  data-field="name"
                >
                  <label htmlFor="f-name">{ctaT.ctaNameLabel}</label>

                  {/* NAME */}
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    placeholder={ctaT.ctaNamePlaceholder}
                    autoComplete="name"
                    onChange={handleNameChange}
                    value={name}
                    aria-invalid={errors.name}
                    aria-describedby="f-name-error"
                  />

                  <div className="err-msg" id="f-name-error" role="alert">
                    {ctaT.ctaNameError}
                  </div>
                </div>

                {/* EMAIL */}
                <div
                  className={`form-group${errors.email ? " error" : ""}`}
                  data-field="email"
                >
                  <label htmlFor="f-email">{ctaT.ctaEmailLabel}</label>

                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder={ctaT.ctaEmailPlaceholder}
                    autoComplete="email"
                    onChange={handleEmailChange}
                    value={email}
                    aria-invalid={errors.email}
                    aria-describedby="f-email-error"
                  />

                  <div className="err-msg" id="f-email-error" role="alert">
                    {ctaT.ctaEmailError}
                  </div>
                </div>

                {/* PHONE — optional, an email address is enough */}
                <div className="form-group" data-field="phone">
                  <label htmlFor="f-phone">
                    {ctaT.ctaPhoneLabel}{" "}
                    <span className="label-optional">
                      ({ctaT.ctaPhoneOptional})
                    </span>
                  </label>

                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    placeholder={ctaT.ctaPhonePlaceholder}
                    autoComplete="tel"
                    onChange={handlePhoneChange}
                    value={phone}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? ctaT.ctaButtonSending : ctaT.ctaButton}
                </button>

                {submitError && (
                  <p className="form-fine form-fine-error">
                    {ctaT.ctaSubmitError}
                  </p>
                )}

                <p className="form-fine">{ctaT.ctaPrivacy}</p>
              </form>
            </div>
          )}

          {/* SUCCESS */}
          {isSuccess && (
            <div id="form-success" className="form-success">
              <div className="form-success-icon">
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

              <h3>{ctaT.ctaSuccessTitle}</h3>

              <p className="form-success-hint">
                {ctaT.ctaSuccessCalendlyHint}
              </p>
              <p id="success-msg">{ctaT.ctaSuccessText}</p>

              <div className="calendly-embed">
                <CalendlyInlineWidget
                  url={CALENDLY_URL}
                  prefill={{
                    name,
                    email,
                    customAnswers: { a1: phone },
                  }}
                  styles={{ height: "750px" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTA;
