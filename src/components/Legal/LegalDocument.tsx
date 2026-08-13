import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { footerTranslations } from "../../locales/footer";
import { headerTranslations } from "../../locales/header";
import {
  landingLanguageCodes,
  type LandingLanguageCode,
} from "../../locales/languages";

// Public legal document shell for byggexp.se. Wrapped in the site Header/Footer
// so it matches the rest of the site; the document itself is a clean card with
// a horizontally scrollable table on small screens.
export default function LegalDocument({
  title,
  updated,
  lang = "sv",
  children,
}: {
  title: string;
  updated?: string;
  lang?: string;
  children: ReactNode;
}) {
  const safeLang: LandingLanguageCode = landingLanguageCodes.includes(
    lang as LandingLanguageCode,
  )
    ? (lang as LandingLanguageCode)
    : "sv";
  const updatedLabel = safeLang === "sv" ? "Senast uppdaterad" : "Last updated";
  const homeLabel = safeLang === "sv" ? "Hem" : "Home";

  return (
    <>
      <Head>
        <title>{`${title} · ByggExp`}</title>
        <meta name="description" content={`${title} – ByggExp`} />
      </Head>

      <Header headerT={headerTranslations[safeLang]} />

      <main className="legal-page">
        <article className="legal-page__inner">
          <nav className="legal-page__crumbs" aria-label="Breadcrumb">
            <Link href={`/${safeLang}`}>{homeLabel}</Link>
            <span aria-hidden="true">/</span>
            <span className="legal-page__crumbs-current">{title}</span>
          </nav>
          <h1 className="legal-page__title">{title}</h1>
          {updated ? (
            <p className="legal-page__updated">
              {updatedLabel}: {updated}
            </p>
          ) : null}
          <div className="legal-page__body">{children}</div>
        </article>
      </main>

      <Footer footerT={footerTranslations[safeLang]} />

      <style jsx global>{`
        .legal-page {
          background: #f4f6fa;
          color: #0b2545;
          padding: 48px 20px 96px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
        }
        .legal-page__inner {
          max-width: 820px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid #e6eaf1;
          border-radius: 20px;
          padding: 44px 48px;
          box-shadow: 0 24px 60px -30px rgba(11, 37, 69, 0.18);
        }
        .legal-page__crumbs {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          font-size: 13px;
          color: #8390a5;
          margin-bottom: 18px;
        }
        .legal-page__crumbs a {
          color: #1c6cf3;
          text-decoration: none;
        }
        .legal-page__crumbs a:hover {
          text-decoration: underline;
        }
        .legal-page__title {
          font-size: clamp(26px, 4vw, 34px);
          line-height: 1.1;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }
        .legal-page__updated {
          color: #8390a5;
          font-size: 13px;
          margin: 0 0 28px;
        }
        .legal-page__body {
          line-height: 1.7;
          font-size: 15.5px;
          color: #24344d;
        }
        .legal-page__body h2 {
          font-size: 19px;
          margin: 32px 0 10px;
          color: #0b2545;
          letter-spacing: -0.01em;
        }
        .legal-page__body p {
          margin: 0 0 14px;
        }
        .legal-page__body a {
          color: #1c6cf3;
        }
        .legal-page__body ul {
          margin: 0 0 14px;
          padding-left: 20px;
        }
        .legal-page__body li {
          margin-bottom: 6px;
        }
        /* Tables scroll horizontally on small screens instead of overflowing. */
        .legal-page__body table {
          display: block;
          overflow-x: auto;
          width: 100%;
          border-collapse: collapse;
          margin: 0 0 20px;
          font-size: 14px;
          border: 1px solid #e6eaf1;
          border-radius: 12px;
          -webkit-overflow-scrolling: touch;
        }
        .legal-page__body thead {
          background: #f4f6fa;
        }
        .legal-page__body th,
        .legal-page__body td {
          border-bottom: 1px solid #eef1f6;
          border-right: 1px solid #eef1f6;
          padding: 11px 14px;
          text-align: left;
          vertical-align: top;
          min-width: 120px;
        }
        .legal-page__body th {
          font-weight: 700;
          color: #0b2545;
          white-space: nowrap;
        }
        .legal-page__body tbody tr:nth-child(even) {
          background: #fafbfd;
        }
        .legal-page__body tr > :last-child {
          border-right: 0;
        }
        .legal-page__body tbody tr:last-child > * {
          border-bottom: 0;
        }
        @media (max-width: 640px) {
          .legal-page {
            padding: 28px 14px 64px;
          }
          .legal-page__inner {
            padding: 28px 22px;
            border-radius: 16px;
          }
        }
      `}</style>
    </>
  );
}
