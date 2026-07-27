import type { CTAProps } from "../../types/cta";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { API_URL } from "../../config/api";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

function CTA({ ctaT }: CTAProps) {
  /* ON SUBMIT/SUCCCES OPENS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch(`${API_URL}/mail/demo-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
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
    setName(event.currentTarget.value);
  }
  /* END */

  /* INPUT EMAIL */
  const [email, setEmail] = useState("");

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  /* END */

  /* INPUT PHONE */
  const [phone, setPhone] = useState("");

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.currentTarget.value);
  }
  /* END */

  /* INPUTED DATA(OBJECT) */

  const formData = {
    "f-name": name,
    "f-email": email,
    "f-phone": phone,
  };

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
                <div className="form-group" data-field="name">
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
                  />

                  <div className="err-msg">{ctaT.ctaNameError}</div>
                </div>

                {/* EMAIL */}
                <div className="form-group" data-field="email">
                  <label htmlFor="f-email">{ctaT.ctaEmailLabel}</label>

                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    placeholder={ctaT.ctaEmailPlaceholder}
                    autoComplete="email"
                    onChange={handleEmailChange}
                    value={email}
                  />

                  <div className="err-msg">{ctaT.ctaEmailError}</div>
                </div>

                {/* PHONE */}
                <div className="form-group" data-field="phone">
                  <label htmlFor="f-phone">{ctaT.ctaPhoneLabel}</label>

                  <input
                    id="f-phone"
                    name="phone"
                    type="tel"
                    placeholder={ctaT.ctaPhonePlaceholder}
                    autoComplete="tel"
                    onChange={handlePhoneChange}
                    value={phone}
                  />

                  <div className="err-msg">{ctaT.ctaPhoneError}</div>
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

              <p id="success-msg">{ctaT.ctaSuccessText}</p>
              <p className="form-success-hint">
                {ctaT.ctaSuccessCalendlyHint}
              </p>

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
