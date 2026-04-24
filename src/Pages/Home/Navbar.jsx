import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeMenu = () => setNavActive(false);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 1200) closeMenu(); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Home",     to: "heroSection" },
    { label: "Skills",   to: "mySkills" },
    { label: "About",    to: "AboutMe" },
    { label: "Projects", to: "MyPortfolio" },
    { label: "Blog",     to: "Blog" },
  ];

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <span className="navbar--logo-text">&lt;AN /&gt;</span>
      </div>

      <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <Link
                onClick={closeMenu}
                activeClass="navbar--active-content"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to={to}
                className="navbar--content"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Link
        onClick={closeMenu}
        activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
