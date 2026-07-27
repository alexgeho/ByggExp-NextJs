import type { FooterProps } from "../../types/footer";

const logo = "/landing/header/logo.svg";



function Footer({ footerT }: FooterProps) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img src={logo} alt="Byggexp" />
        </div>

        <div className="footer-meta">
          <span>© 2026 Byggexp</span>

          <a href="#">
            {footerT.footerPrivacy}
          </a>

          <a href="#">
            {footerT.footerTerms}
          </a>

          <a href="mailto:hello@byggexp.com">
            hello@byggexp.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;