import type { ReactNode } from 'react';

// Reusable, presentation-only layout for a lead-magnet / tool article page.
// Everything is prop-driven and every visual element carries a `lead-magnet-*`
// class, so a designer can restyle the whole page from one SCSS file
// (src/styles/lead-magnet.scss) without touching this component or the pages
// that use it. Swap content by changing props; swap the look by changing SCSS.

export type LeadMagnetSection = {
  id?: string;
  heading: string;
  body: ReactNode;
};

export type LeadMagnetFaqItem = { question: string; answer: string };

export type LeadMagnetLink = { href: string; label: string };

export type LeadMagnetCta = {
  heading?: string;
  text?: string;
  buttonLabel: string;
  href: string;
};

export type LeadMagnetPageProps = {
  /** Small eyebrow label above the title, e.g. "Gratis mall". */
  badge?: string;
  title: string;
  intro: string;
  /** Interactive tool slot (e.g. a form that generates a PDF). */
  tool?: ReactNode;
  sections?: LeadMagnetSection[];
  faqHeading?: string;
  faq?: LeadMagnetFaqItem[];
  cta?: LeadMagnetCta;
  relatedHeading?: string;
  related?: LeadMagnetLink[];
};

export default function LeadMagnetPage({
  badge,
  title,
  intro,
  tool,
  sections = [],
  faqHeading,
  faq = [],
  cta,
  relatedHeading,
  related = [],
}: LeadMagnetPageProps) {
  return (
    <article className="lead-magnet">
      <div className="container container-narrow">
        <header className="lead-magnet-hero">
          {badge ? <span className="lead-magnet-badge">{badge}</span> : null}
          <h1 className="lead-magnet-title">{title}</h1>
          <p className="lead-magnet-intro">{intro}</p>
        </header>

        {tool ? <div className="lead-magnet-tool">{tool}</div> : null}

        {sections.map((section) => (
          <section
            key={section.heading}
            id={section.id}
            className="lead-magnet-section"
          >
            <h2 className="lead-magnet-section-heading">{section.heading}</h2>
            <div className="lead-magnet-section-body">{section.body}</div>
          </section>
        ))}

        {faq.length > 0 ? (
          <section className="lead-magnet-faq" aria-labelledby="lead-magnet-faq-heading">
            <h2 id="lead-magnet-faq-heading" className="lead-magnet-section-heading">
              {faqHeading}
            </h2>
            <dl className="lead-magnet-faq-list">
              {faq.map((item) => (
                <div key={item.question} className="lead-magnet-faq-item">
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        {cta ? (
          <aside className="lead-magnet-cta">
            {cta.heading ? <h2 className="lead-magnet-cta-heading">{cta.heading}</h2> : null}
            {cta.text ? <p className="lead-magnet-cta-text">{cta.text}</p> : null}
            <a className="lead-magnet-cta-button" href={cta.href}>
              {cta.buttonLabel}
            </a>
          </aside>
        ) : null}

        {related.length > 0 ? (
          <nav className="lead-magnet-related" aria-label={relatedHeading || undefined}>
            {relatedHeading ? (
              <h2 className="lead-magnet-section-heading">{relatedHeading}</h2>
            ) : null}
            <ul className="lead-magnet-related-list">
              {related.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
