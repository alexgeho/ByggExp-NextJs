import type { ReactNode } from 'react';

import type { CalcLocale } from '../../lib/locale';
import EmbedSnippet from './EmbedSnippet';

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
  /** Optional lead-capture form shown right under the tool. */
  leadForm?: ReactNode;
  /** Visual preview of the template/result (e.g. a TemplatePreview). */
  preview?: ReactNode;
  sections?: LeadMagnetSection[];
  faqHeading?: string;
  faq?: LeadMagnetFaqItem[];
  cta?: LeadMagnetCta;
  relatedHeading?: string;
  related?: LeadMagnetLink[];
  /**
   * When set, renders a "Bädda in gratis på din sajt" section with a copy-paste
   * iframe snippet for /sv/embed/<embedSlug>. The snippet carries an attribution
   * backlink to byggexp.se — see EmbedSnippet. The slug must also be registered
   * in src/pages/[lang]/embed/[slug].tsx.
   */
  embedSlug?: string;
  /** Title used inside the embed snippet; defaults to the page title. */
  embedTitle?: string;
  /** Locale for the built-in tool disclaimer (sv default, en for /en). */
  locale?: CalcLocale | 'ru';
  /**
   * Wide layout: the page uses a wider container and the tool can lay its inputs
   * and live result out in two columns (see `.lm-tool-split`). Reading blocks
   * stay at a comfortable measure. Opt-in per calculator.
   */
  wide?: boolean;
};

export default function LeadMagnetPage({
  badge,
  title,
  intro,
  tool,
  leadForm,
  preview,
  sections = [],
  faqHeading,
  faq = [],
  cta,
  relatedHeading,
  related = [],
  embedSlug,
  embedTitle,
  locale = 'sv',
  wide = false,
}: LeadMagnetPageProps) {
  const disclaimer =
    locale === 'ru'
      ? 'Инструмент даёт оценку и является вспомогательным средством, а не готовым расчётом. Всегда сверяйте результат с чертежами, действующими нормами, данными поставщика и своим профессиональным опытом, прежде чем давать обязывающую цену, заказывать материал или использовать файл. ByggExp не несёт ответственности за решения, принятые исключительно на основе инструмента.'
      : locale === 'en'
      ? 'This tool gives an estimate and is an aid – not a finished calculation. Always check the result against drawings, applicable regulations, supplier data and your professional experience before giving a binding price, ordering material or using the file. ByggExp is not responsible for decisions made solely on the basis of the tool.'
      : 'Verktyget ger en uppskattning och är ett hjälpmedel – inte en färdig kalkyl. Kontrollera alltid resultatet mot ritning, gällande regler, leverantörens uppgifter och din yrkeserfarenhet innan du lämnar ett bindande pris, beställer material eller använder filen. ByggExp ansvarar inte för beslut som fattas enbart utifrån verktyget.';
  // BreadcrumbList schema (Hem › Verktyg › <tool>) for a breadcrumb rich result in
  // SERP. Derived from locale + title — no per-page wiring needed.
  const routeLoc = locale === 'en' || locale === 'nb' ? locale : 'sv';
  const origin = routeLoc === 'nb' ? 'https://byggexp.no' : 'https://byggexp.se';
  const crumbLabels =
    routeLoc === 'en'
      ? { home: 'Home', tools: 'Tools' }
      : routeLoc === 'nb'
      ? { home: 'Hjem', tools: 'Verktøy' }
      : { home: 'Hem', tools: 'Verktyg' };
  const breadcrumbSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: crumbLabels.home, item: `${origin}/${routeLoc}` },
      { '@type': 'ListItem', position: 2, name: crumbLabels.tools, item: `${origin}/${routeLoc}/verktyg` },
      { '@type': 'ListItem', position: 3, name: title },
    ],
  });
  return (
    <article className={wide ? 'lead-magnet lead-magnet--wide' : 'lead-magnet'}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <div className={wide ? 'container' : 'container container-narrow'}>
        <header className="lead-magnet-hero">
          {badge ? <span className="lead-magnet-badge">{badge}</span> : null}
          <h1 className="lead-magnet-title">{title}</h1>
          <p className="lead-magnet-intro">{intro}</p>
        </header>

        {tool ? <div className="lead-magnet-tool">{tool}</div> : null}

        {tool ? <p className="lm-tool-disclaimer">{disclaimer}</p> : null}

        {leadForm ? <div className="lead-magnet-tool">{leadForm}</div> : null}

        {preview ? <div className="lead-magnet-preview">{preview}</div> : null}

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

        {embedSlug ? (
          <section id="badda-in" className="lead-magnet-section">
            <h2 className="lead-magnet-section-heading">
              Bädda in kalkylatorn gratis på din sajt
            </h2>
            <div className="lead-magnet-section-body">
              <EmbedSnippet slug={embedSlug} title={embedTitle || title} />
            </div>
          </section>
        ) : null}

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
