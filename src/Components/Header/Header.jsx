import { useState, useEffect, useRef } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../img/logo.svg';

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const checkboxRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (checkboxRef.current) checkboxRef.current.checked = false;
    setOpenNav(false);
  }, [router.pathname]);

  useEffect(() => {
    function handleScroll() {
      const navbar = document.querySelector('.CustomNavbar');
      if (!navbar) return;
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function toggleClick() {
    setOpenNav(prev => !prev);
  }

  return (
    <>
      <nav className={`tot-nav ${openNav ? 'nav-open' : 'nav-close'}`}>
        <div className="tot-nav-box">
          <Link onClick={toggleClick} href="/">Hem</Link>
          <Link onClick={toggleClick} href="/about">Om oss</Link>
          <Link onClick={toggleClick} href="/faq">FAQ</Link>
          <Link onClick={toggleClick} href="/blog">Blog</Link>
          <Link onClick={toggleClick} href="/contacts">Kontakt</Link>
          <div className="tot-nav-buttons">
            <Button variant="outline-light" className="px-3" as={Link} href="/login" onClick={toggleClick}>Login</Button>
            <Button variant="primary" className="px-3" as={Link} href="/signup" onClick={toggleClick}>Try for free</Button>
          </div>
        </div>
      </nav>

      <Navbar fixed="top" expand="md" style={{ backgroundColor: '#000509' }} variant="dark">
        <Container className="custom-container d-flex align-items-center">
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <img src={logo.src} width="405" height="156" className="d-inline-block align-top logo-img" alt="ByggExp Logo" />
          </Link>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="custom-nav mx-auto header-nav">
              <Nav.Link as={Link} href="/">Hem</Nav.Link>
              <Nav.Link as={Link} href="/about">Om oss</Nav.Link>
              <Nav.Link as={Link} href="/faq">FAQ</Nav.Link>
              <Nav.Link as={Link} href="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} href="/contacts">Kontakt</Nav.Link>
            </Nav>
            <div className="HeaderButtons">
              <Button variant="outline-light" className="px-3" as={Link} href="/login">Login</Button>
              <Button variant="primary" className="px-3" as={Link} href="/signup">Try for free</Button>
            </div>
          </Navbar.Collapse>

          <input ref={checkboxRef} onClick={toggleClick} type="checkbox" id="checkbox" />
          <label htmlFor="checkbox" className="tot-toggle">
            <div className="tot-bars" id="bar1"></div>
            <div className="tot-bars" id="bar2"></div>
            <div className="tot-bars" id="bar3"></div>
          </label>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;