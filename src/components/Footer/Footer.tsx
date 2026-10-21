import type { FooterProps } from "../../types/footer";
import Link from "next/link";
import { useRouter } from "next/router";

const logo = "/landing/header/logo.svg";

const SOCIALS = [
  {
    label: "ByggExp på YouTube",
    href: "https://www.youtube.com/@byggexp",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z",
  },
  {
    label: "ByggExp på Facebook",
    href: "https://www.facebook.com/profile.php?id=61595288321379",
    path: "M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z",
  },
  {
    label: "ByggExp på LinkedIn",
    href: "https://www.linkedin.com/company/byggexp",
    path: "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z",
  },
];


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
          <span>
            © 2026 ByggExp
          </span>

          <Link href={`/${lang}/blog`}>
            {footerT.footerBlog}
          </Link>

          {lang === "sv" ? <Link href="/sv/enmansforetag">Enmansföretag</Link> : null}

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

          {SOCIALS.map((s) => (
            <a
              key={s.href}
              className="footer-social"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
                <path fill="currentColor" d={s.path} />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;