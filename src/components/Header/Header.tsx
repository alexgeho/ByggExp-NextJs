import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { languages, selectableLanguages } from "../../locales/languages";
import type { HeaderProps } from "../../types/header";

const logo = "/landing/header/logo.svg";
const burger = "/landing/header/burger.svg";
const close = "/landing/header/close.svg";
const down = "/landing/header/down.svg";

function Header({ headerT }: HeaderProps) {
  /* BURGER NAV */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  /*  */

  /* LANG */
  const router = useRouter();
  const langParam = router.query.lang;
  const lang =
    typeof langParam === "string" && langParam in languages ? langParam : "sv";
  const currentLanguage = languages[lang as keyof typeof languages];

  const [isOpen, setIsOpen] = useState(false);

  function changeLanguage(language: string) {
    // Keep the user on the same page when switching language: swap only the
    // leading /<lang> segment, preserving the rest of the path, query and hash.
    const [path, hash] = router.asPath.split("#");
    const newPath = path.replace(/^\/[^/]+/, `/${language}`);
    void router.push(hash ? `${newPath}#${hash}` : newPath);
    setIsOpen(false);
    setIsMenuOpen(false);
  }
  /*  */
  return (
    <header className="site-header">
      <nav className="nav">
        {/* LOGO */}
        <Link href={`/${lang}`} className="nav-logo">
          <img src={logo} alt="ByggExp" />
        </Link>

        {/* NAV RIGHT */}
        <div className="nav-right">
          {/* LANGUAGE */}
          {!isMenuOpen && (
            <div className="language-switcher">
              <button
                type="button"
                className="language-selector"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={currentLanguage.flag} alt="" />
                <span>{currentLanguage.label}</span>
              </button>

              {isOpen && (
                <div className="language-dropdown">
                  {Object.entries(selectableLanguages).map(([code, language]) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => changeLanguage(code)}
                    >
                      <img src={language.flag} alt="" />
                      <span>{language.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* NAV LINKS */}
          <div className={isMenuOpen ? "nav-links open" : "nav-links"}>
            <Link href={`/${lang}#features`} onClick={closeMenu}>{headerT.how}</Link>
            <Link href={`/${lang}#pricing`} onClick={closeMenu}>{headerT.pricing}</Link>
            <Link href={`/${lang}#cta`} onClick={closeMenu}>{headerT.company}</Link>
            <Link href={`/${lang}/contact`} onClick={closeMenu}>{headerT.contact}</Link>

            {/* MOBILET LANGUAGE */}
            <div className="mobile-language">
              <button
                type="button"
                className="language-selector"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img src={currentLanguage.flag} alt="" />
                <span>{currentLanguage.label}</span>

                <img
                  src={down}
                  alt=""
                  className={isOpen ? "language-arrow open" : "language-arrow"}
                />
              </button>

              {isOpen && (
                <div className="language-dropdown">
                  {Object.entries(selectableLanguages).map(([code, language]) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => changeLanguage(code)}
                    >
                      <img src={language.flag} alt="" />
                      <span>{language.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {/* MOBILET LANGUAGE END*/}

            {/* CTA BTN */}
            <Link href={`/${lang}#cta`} className="nav-cta" onClick={closeMenu}>
              {headerT.demo}
            </Link>
            {/* CTA BTN END*/}
          </div>
          {/* BURGER */}
          <button className="burger" id="burger" onClick={openMenu}>
            <img
              src={isMenuOpen ? close : burger}
              alt=""
              className={isMenuOpen ? "close-icon" : "burger-icon"}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
