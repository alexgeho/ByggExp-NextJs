import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { languages, selectableLanguages } from "../../locales/languages";
import { BLOG_CATEGORIES } from "../../lib/blog-categories";
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
  /* RESOURCES DROPDOWN (free stuff: tools + blog, kept apart from the paid product) */
  const [resOpen, setResOpen] = useState(false);

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
          {/* Header search removed — the blog has its own search under the hero,
              and the header search was redundant. */}

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
            <Link href={`/${lang}/funktioner`} onClick={closeMenu}>{headerT.funktioner}</Link>
            <Link href={`/${lang}#pricing`} onClick={closeMenu}>{headerT.pricing}</Link>

            {/* RESOURCES — free tools + blog, grouped so visitors don't mistake
                them for the paid product. Rendered as a mega-menu (icon + title
                + description) on desktop; flows inline in the burger on mobile. */}
            <div className="nav-dropdown">
              <button
                type="button"
                className="nav-dropdown-btn"
                onClick={() => setResOpen(!resOpen)}
                aria-expanded={resOpen}
              >
                <span>{headerT.resources}</span>
                <img
                  src={down}
                  alt=""
                  className={resOpen ? "language-arrow open" : "language-arrow"}
                />
              </button>
              <div
                className={
                  resOpen ? "nav-dropdown-menu nav-mega open" : "nav-dropdown-menu nav-mega"
                }
              >
                <div className="nav-mega-links">
                  {(lang === "sv" || lang === "nb") && (
                    <Link
                      href={`/${lang}/verktyg`}
                      className="nav-mega-card"
                      onClick={() => {
                        setResOpen(false);
                        closeMenu();
                      }}
                    >
                      <span className="nav-mega-ico" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.3 2.3-1.7-.3-.3-1.7 2.3-2.3Z"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="nav-mega-text">
                        <strong>{headerT.freeTools}</strong>
                        <small>{headerT.freeToolsDesc}</small>
                      </span>
                    </Link>
                  )}
                  <Link
                    href={`/${lang}/blog`}
                    className="nav-mega-card"
                    onClick={() => {
                      setResOpen(false);
                      closeMenu();
                    }}
                  >
                    <span className="nav-mega-ico" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5v-13ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5v-13Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="nav-mega-text">
                      <strong>{headerT.blog}</strong>
                      <small>{headerT.blogDesc}</small>
                    </span>
                  </Link>
                </div>
                {(lang === "sv" || lang === "nb") && (
                  <div className="nav-mega-cats">
                    <span className="nav-mega-cats-title">{headerT.browseBlog}</span>
                    <div className="nav-mega-cats-grid">
                      {BLOG_CATEGORIES.map((cat) => (
                        <Link
                          key={cat.key}
                          href={`/${lang}/blog?kategori=${cat.key}`}
                          className="nav-dropdown-cat"
                          onClick={() => {
                            setResOpen(false);
                            closeMenu();
                          }}
                        >
                          <span
                            className="nav-dropdown-cat-dot"
                            style={{ background: cat.color }}
                          />
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Link href={`/${lang}/om-oss`} onClick={closeMenu}>{headerT.company}</Link>
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
