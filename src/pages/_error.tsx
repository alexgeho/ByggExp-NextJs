import type { NextPageContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { footerTranslations } from '../locales/footer';
import { headerTranslations } from '../locales/header';

// Branded 404 / error page with the site header + footer. Implemented as
// _error (not a static pages/404.tsx) so the language can follow the request
// host on the server: Norwegian on byggexp.no, Swedish on byggexp.se. A static
// 404 is built once and cannot tell the two domains apart.

type ErrorLang = 'sv' | 'nb';

type ErrorProps = { statusCode: number; lang: ErrorLang };

const COPY: Record<ErrorLang, { notFound: string; error: string; home: string }> = {
  sv: { notFound: 'Sidan finns inte', error: 'Något gick fel', home: 'Till startsidan' },
  nb: { notFound: 'Siden finnes ikke', error: 'Noe gikk galt', home: 'Til forsiden' },
};

function pickLang(host: string, path: string): ErrorLang {
  const bareHost = host.toLowerCase().split(':')[0].replace(/^www\./, '');
  if (bareHost === 'byggexp.no') return 'nb';
  return path.split('/')[1] === 'nb' ? 'nb' : 'sv';
}

function ErrorPage({ statusCode, lang }: ErrorProps) {
  const c = COPY[lang] || COPY.sv;
  const title = statusCode === 404 ? c.notFound : c.error;

  return (
    <>
      <Head>
        <title>{`${title} | ByggExp`}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Header headerT={headerTranslations[lang]} lang={lang} />
      {/* Fill the viewport so the footer sits at the bottom, not mid-screen. */}
      <section
        className="blog-hero"
        style={{
          minHeight: 'calc(100vh - 200px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div className="container container-narrow">
          <span className="blog-badge">{statusCode}</span>
          <h1>{title}</h1>
          <Link href={`/${lang}`} className="funktioner-custom-cta" style={{ marginTop: 12 }}>
            {c.home}
          </Link>
        </div>
      </section>
      <Footer footerT={footerTranslations[lang]} lang={lang} />
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err, req, asPath }: NextPageContext): ErrorProps => {
  const statusCode = res ? res.statusCode : err?.statusCode || 404;
  const host =
    req?.headers.host || (typeof window !== 'undefined' ? window.location.host : '');
  return { statusCode, lang: pickLang(host, asPath || '') };
};

export default ErrorPage;
