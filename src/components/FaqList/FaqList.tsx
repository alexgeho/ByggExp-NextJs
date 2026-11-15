// FAQ block — ONE component for every page with questions and answers (R38):
// calculators/templates (LeadMagnetPage), feature pages, /sv/priser,
// /sv/byt-system, /sv/tidrapportering-app.
// Styles: `.lead-magnet-faq*` in styles/lead-magnet.scss.
// The FAQPage JSON-LD stays with the page that owns the data.

export type FaqItem = { question: string; answer: string };

type Props = {
  /** id of the heading (aria-labelledby of the section). */
  headingId: string;
  heading: string;
  /** Optional line under the heading (`fn-section-sub`). */
  sub?: string;
  items: readonly FaqItem[];
};

export default function FaqList({ headingId, heading, sub, items }: Props) {
  return (
    <section className="lead-magnet-faq" aria-labelledby={headingId}>
      <h2 id={headingId} className="lead-magnet-section-heading">
        {heading}
      </h2>
      {sub ? <p className="fn-section-sub">{sub}</p> : null}
      <dl className="lead-magnet-faq-list">
        {items.map((item) => (
          <div key={item.question} className="lead-magnet-faq-item">
            <dt>{item.question}</dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
