import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Work", to: "work" },
  { label: "About", to: "about" },
  { label: "Blog", to: "blog" },
  { label: "Contact", to: "contact" },
];

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 900) closeMenu(); };
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <RouteLink to="/" className="navbar--logo" onClick={closeMenu}>
        aryan<span className="navbar--logo-accent">.neopane</span>
      </RouteLink>

      <button
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={() => setNavActive(!navActive)}
        aria-label="Toggle navigation"
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              {onHome ? (
                <ScrollLink
                  onClick={closeMenu}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  to={to}
                  className="navbar--content"
                  activeClass="navbar--active-content"
                >
                  {label}
                </ScrollLink>
              ) : (
                <RouteLink to="/" state={{ scrollTo: to }} className="navbar--content" onClick={closeMenu}>
                  {label}
                </RouteLink>
              )}
            </li>
          ))}
          <li>
            <a
              href="https://github.com/woooj02"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar--content navbar--github"
              onClick={closeMenu}
            >
              GitHub ↗
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
