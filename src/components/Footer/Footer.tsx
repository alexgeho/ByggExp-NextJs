import type { FooterProps } from "../../types/footer";
import Link from "next/link";
import { useRouter } from "next/router";

const logo = "/landing/header/logo.svg";

const YOUTUBE_URL = "https://www.youtube.com/@byggexp";



function Footer({ footerT }: FooterProps) {
  const router = useRouter();
  const langParam = router.query.lang;
  const lang = typeof langParam === "string" ? langParam : "sv";

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="Byggexp" />
        </div>

        <div className="footer-meta">
          <span>© 2026 Byggexp</span>

          <Link href={`/${lang}/blog`}>
            {footerT.footerBlog}
          </Link>

          <Link href={`/${lang}/om-oss`}>
            {footerT.footerAbout}
          </Link>

          <Link href={`/${lang}/faq`}>
            {footerT.footerFaq}
          </Link>

          <Link href={`/${lang}/integritetspolicy`}>
            {footerT.footerPrivacy}
          </Link>

          <Link href={`/${lang}/villkor`}>
            {footerT.footerTerms}
          </Link>

          <Link href={`/${lang}/radera-konto`}>
            {footerT.footerDeleteAccount}
          </Link>

          <a href="mailto:support@byggexp.se">
            support@byggexp.se
          </a>

          <a
            className="footer-social"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ByggExp på YouTube"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;