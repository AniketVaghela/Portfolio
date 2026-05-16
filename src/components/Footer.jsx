import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import config from "../data/config";
import "./Footer.css";

const links = ["Home", "About", "Skills", "Projects", "Education", "Strengths", "Contact"];

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">Aniket<span>.</span></div>
            <p>Data Analyst · Power BI Developer · Business Analyst</p>
          </div>

          <div className="footer-nav">
            <h5>Quick Links</h5>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h5>Get In Touch</h5>
            <p>{config.email}</p>
            <p>{config.phone}</p>
            <div className="footer-socials">
              <a href={config.github} target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
              <a href={config.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
              <a href={`mailto:${config.email}`} title="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Aniket Vaghela. All rights reserved.
          </p>
          <p className="footer-copy">Built with React &amp; Vite</p>
        </div>

      </div>
    </footer>
  );
}
