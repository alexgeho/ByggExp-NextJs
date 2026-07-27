import { useState, type FormEvent, type ChangeEvent } from "react";
import { API_URL } from "../../config/api";
import type { ContactProps } from "../../types/contact";
import type { CTAProps } from "../../types/cta";
import { CalendlyInlineWidget } from "../CalendlyInlineWidget";

const CALENDLY_URL = "https://calendly.com/870717ag/30min";

const PHONE_1 = "+46 70 757 75 75";
const PHONE_2 = "+46 81 212 76 76";
const WHATSAPP_NUMBER = "+46 70 757 75 75";
const ADDRESS = "Byggmästarvägen 18, 168 32 Bromma, Sweden";

const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

function Contact({ contactT, ctaT }: ContactProps & CTAProps) {
  /* ON SUBMIT/SUCCESS */
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  /* INPUTS */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleNameChange(event: ChangeEvent<HTMLInputElement>) {
    setName(event.currentTarget.value);
  }
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    setPhone(event.currentTarget.value);
  }

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
        body: JSON.stringify({
          "f-name": name,
          "f-email": email,
          "f-phone": phone,
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
    <section className="contact">
      <div className="container">
        <div className="contact-head">
          <span className="eyebrow">{contactT.contactEyebrow}</span>
          <h1>{contactT.contactTitle}</h1>
          <p className="contact-lead">{contactT.contactLead}</p>
        </div>

        {/* INFO CARDS: row 1 = Email + Phone, row 2 = Chat + Address */}
        <div className="contact-info-grid">
          {/* EMAIL CARD */}
          <div className="contact-card">
            <span className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </span>

            <h3>{contactT.contactEmailLabel}</h3>
            <a href="mailto:hello@byggexp.com" className="contact-email">
              hello@byggexp.com
            </a>
            <p className="contact-note">{contactT.contactResponseTime}</p>
          </div>

          {/* PHONE CARD */}
          <div className="contact-card">
            <span className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>

            <h3>{contactT.contactPhoneLabel}</h3>
            <a
              href={`tel:${PHONE_1.replace(/\s/g, "")}`}
              className="contact-email"
            >
              {PHONE_1}
            </a>
            <a
              href={`tel:${PHONE_2.replace(/\s/g, "")}`}
              className="contact-email"
            >
              {PHONE_2}
            </a>
          </div>

          {/* CHAT CARD */}
          <div className="contact-card">
            <span className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </span>

            <h3>{contactT.contactChatLabel}</h3>
            <p className="contact-note">{contactT.contactChatText}</p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-btn"
            >
              {contactT.contactChatButton}
            </a>
          </div>

          {/* ADDRESS CARD */}
          <div className="contact-card">
            <span className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>

            <h3>{contactT.contactAddressLabel}</h3>
            <a
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-note contact-address"
            >
              {ADDRESS}
            </a>
          </div>
        </div>

        {/* REQUEST FORM */}
        <div className="contact-form-wrap">
          <div className="contact-card contact-form-card">
            {!isSuccess && (
              <>
                <div className="ctaLeft contact-form-left">
                  <div className="section-head section-head--dark cta-head">
                    <span className="eyebrow">{ctaT.ctaTitle}</span>

                    <h2>
                      {ctaT.ctaHeading1} <em>{ctaT.ctaAccent}</em>{" "}
                      {ctaT.ctaHeading2}
                    </h2>
                  </div>

                  <ul className="cta-list-contact">
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

                <form
                  noValidate
                  onSubmit={handleSubmit}
                  className="contact-form"
                >
                  <div className="contact-form-group">
                    <label htmlFor="c-name">{ctaT.ctaNameLabel}</label>
                    <input
                      id="c-name"
                      name="name"
                      type="text"
                      placeholder={ctaT.ctaNamePlaceholder}
                      autoComplete="name"
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="c-email">{ctaT.ctaEmailLabel}</label>
                    <input
                      id="c-email"
                      name="email"
                      type="email"
                      placeholder={ctaT.ctaEmailPlaceholder}
                      autoComplete="email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="c-phone">{ctaT.ctaPhoneLabel}</label>
                    <input
                      id="c-phone"
                      name="phone"
                      type="tel"
                      placeholder={ctaT.ctaPhonePlaceholder}
                      autoComplete="tel"
                      value={phone}
                      onChange={handlePhoneChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? ctaT.ctaButtonSending
                      : contactT.contactDemoButton}
                  </button>

                  {submitError && (
                    <p className="contact-form-fine contact-form-fine-error">
                      {ctaT.ctaSubmitError}
                    </p>
                  )}

                  <p className="contact-form-fine">{ctaT.ctaPrivacy}</p>
                </form>
              </>
            )}

            {/* SUCCESS */}
            {isSuccess && (
              <div className="contact-form-success">
                <div className="contact-success-icon">
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
                <p>{ctaT.ctaSuccessText}</p>
                <p className="contact-success-hint">
                  {ctaT.ctaSuccessCalendlyHint}
                </p>

                <div className="contact-calendly">
                  <CalendlyInlineWidget
                    url={CALENDLY_URL}
                    prefill={{
                      name,
                      email,
                      customAnswers: { a1: phone },
                    }}
                    styles={{ height: "650px" }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Contact;
