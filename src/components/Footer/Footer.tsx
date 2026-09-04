import type { FooterProps } from "../../types/footer";
import Link from "next/link";
import { useRouter } from "next/router";

const logo = "/landing/header/logo.svg";



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
        </div>
      </div>
    </footer>
  );
}

export default Footer;