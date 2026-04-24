import { Link } from "react-scroll";
import React from "react";

function Footer() {
  return (
    <footer className="footer--container">
      <div className="footer--link--container">
        <div>
          <span className="navbar--logo-text">&lt;AN /&gt;</span>
        </div>
        <div className="footer--items">
          <ul>
            {[
              { label: "Home",     to: "heroSection" },
              { label: "Skills",   to: "mySkills" },
              { label: "About",    to: "AboutMe" },
              { label: "Projects", to: "MyPortfolio" },
              { label: "Blog",     to: "Blog" },
              { label: "Contact",  to: "Contact" },
            ].map(({ label, to }) => (
              <li key={to}>
                <Link spy smooth offset={-70} duration={500} to={to} className="text-md">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="divider" />

      <div className="footer--content--container">
        <p className="footer--content">
          © {new Date().getFullYear()} Aryan Neopane — Built with React
        </p>
        <div className="footer--social--icon">
          <ul>
            <li>
              <a href="https://github.com/woooj02" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
