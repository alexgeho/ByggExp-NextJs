import Head from "next/head";
import type { ReactNode } from "react";

import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ILLU_HEIGHT_C } from "../../content/funktion-pages-c";
import { localeOrigin } from "../../lib/seo";
import { ctaTranslations } from "../../locales/CTA";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";

// Shell for Swedish-only commercial pages outside /funktioner (/sv/priser,
// /sv/byt-system): same hero, article, FAQ and CTA blocks as the feature
// pages in pages/[lang]/funktioner/[slug].tsx.

export type InfoPageProps = {
  path: string;
  title: string;
  description: string;
  name: string;
  h1: string;
  h1Accent: string;
  lead: string;
  hero: { name: string; alt: string };
  heroCheck: string;
  /** Extra section between hero and article (e.g. the price cards). */
  children?: ReactNode;
  body: string;
  faq: { question: string; answer: string }[];
  related: { href: string; label: string }[];
};

const IMG = (name: string, w: 640 | 1200) => `/landing/funktioner/${name}-${w}.webp`;

export default function InfoPage(p: InfoPageProps) {
  const lang = "sv";
  const origin = localeOrigin(lang);
  const canonicalUrl = `${origin}/${lang}/${p.path}`;

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: `${origin}/${lang}` },
        { "@type": "ListItem", position: 2, name: p.name, item: canonicalUrl },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>{p.title}</title>
        <meta name="description" content={p.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={p.title} />
        <meta property="og:description" content={p.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${origin}${IMG(p.hero.name, 1200)}`} />
        {schema.map((s) => (
          <script
            key={s["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>
      <Header headerT={headerTranslations[lang]} />

      <main className="em fn">
        <section className="em-hero">
          <div className="container em-hero-inner">
            <div className="em-hero-content">
              <nav className="fn-crumbs" aria-label="Brödsmulor">
                <a href={`/${lang}`}>Hem</a>
                <span aria-hidden="true">/</span>
                <span>{p.name}</span>
              </nav>
              <h1>
                {p.h1} <span>{p.h1Accent}</span>
              </h1>
              <p className="em-lead">{p.lead}</p>
              <a href="#cta" className="btn-primary">
                Boka gratis konsultation
              </a>
              <ul className="em-checks">
                <li>14 dagar gratis</li>
                <li>Ingen bindningstid</li>
                <li>{p.heroCheck}</li>
              </ul>
            </div>
            <div className="em-hero-visual fn-hero-visual">
              <img
                src={IMG(p.hero.name, 1200)}
                srcSet={`${IMG(p.hero.name, 640)} 640w, ${IMG(p.hero.name, 1200)} 1200w`}
                sizes="(max-width: 900px) 100vw, 560px"
                width={1200}
                height={ILLU_HEIGHT_C[p.hero.name]}
                fetchPriority="high"
                decoding="async"
                alt={p.hero.alt}
              />
            </div>
          </div>
        </section>

        {p.children}

        <section className="fn-article">
          <div className="container container-narrow">
            <div
              className="blog-article-content"
              dangerouslySetInnerHTML={{ __html: p.body }}
            />
          </div>
        </section>

        <section className="lead-magnet tr-app-more">
          <div className="container container-narrow">
            <section className="lead-magnet-faq" aria-labelledby="info-faq-heading">
              <h2 id="info-faq-heading" className="lead-magnet-section-heading">
                Vanliga frågor
              </h2>
              <dl className="lead-magnet-faq-list">
                {p.faq.map((item) => (
                  <div key={item.question} className="lead-magnet-faq-item">
                    <dt>{item.question}</dt>
                    <dd>{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <nav className="lead-magnet-related" aria-label="Guider">
              <h2 className="lead-magnet-section-heading">Guider</h2>
              <ul className="lead-magnet-related-list">
                {p.related.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </main>

      <CTA ctaT={ctaTranslations[lang]} />
      <Footer footerT={footerTranslations[lang]} />
    </>
  );
}
