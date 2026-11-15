import Head from "next/head";
import type { ReactNode } from "react";

import CTA from "../CTA/CTA";
import FaqList from "../FaqList/FaqList";
import Footer from "../Footer/Footer";
import FunktionHero from "../FunktionPage/FunktionHero";
import Header from "../Header/Header";
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
  /** Extra JSON-LD blocks, e.g. SoftwareApplication with offers on /sv/priser. */
  extraSchema?: Record<string, unknown>[];
};

const IMG = (name: string, w: 640 | 1200) => `/landing/funktioner/${name}-${w}.webp`;

export default function InfoPage(p: InfoPageProps) {
  const lang = "sv";
  const origin = localeOrigin(lang);
  const canonicalUrl = `${origin}/${lang}/${p.path}`;

  const schema: Record<string, unknown>[] = [
    ...(p.extraSchema ?? []),
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
            key={String(s["@type"])}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </Head>
      <Header headerT={headerTranslations[lang]} />

      <main className="em fn">
        {/* Shared hero (R38); R32 indent from the real illustration. */}
        <FunktionHero
          lang={lang}
          name={p.name}
          h1={p.h1}
          h1Accent={p.h1Accent}
          crumb={{ href: `/${lang}`, label: "Hem" }}
          lead={p.lead}
          heroCheck={p.heroCheck}
          hero={p.hero}
        />

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
            <FaqList
              headingId="info-faq-heading"
              heading="Vanliga frågor"
              items={p.faq}
            />

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
