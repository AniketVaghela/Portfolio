import { useState, useEffect, useRef } from "react";
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import config from "../data/config";
import "./Navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Education", "Strengths", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // scroll spy — find which section is in view
      const sections = links.map((l) => document.getElementById(l.toLowerCase()));
      let current = "home";
      sections.forEach((sec) => {
        if (sec && window.scrollY >= sec.offsetTop - 120) {
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">Aniket<span>.</span></div>

        <div className="nav-right" ref={menuRef}>
          <a
            href={config.resume}
            className="nav-resume-btn"
            download="Aniket_Vaghela_Resume.pdf"
            title="Download Resume"
          >
            <FaDownload /> Resume
          </a>

          <button
            className={`nav-menu-btn ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-dropdown ${menuOpen ? "open" : ""}`}>
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`nav-dropdown-item ${activeSection === link.toLowerCase() ? "active" : ""}`}
                onClick={closeMenu}
              >
                <span className="nav-dropdown-dot">•</span>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
