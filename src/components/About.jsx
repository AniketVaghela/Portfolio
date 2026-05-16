import { motion } from "framer-motion";
import {
  FaUser, FaGraduationCap, FaMapMarkerAlt,
  FaDownload, FaPhone, FaEnvelope, FaBriefcase,
  FaCertificate, FaHeart, FaCode,
} from "react-icons/fa";
import {
  FaChartBar, FaTable, FaDatabase, FaChartPie, FaChartLine,
} from "react-icons/fa";
import { SiPython, SiNumpy, SiMysql, SiGithub } from "react-icons/si";
import config from "../data/config";
import "./About.css";

const skillIconMap = {
  "Microsoft Power BI":   <FaChartBar />,
  "Microsoft Excel":      <FaTable />,
  "SQL":                  <SiMysql />,
  "Python":               <SiPython />,
  "Tableau":              <FaChartPie />,
  "NumPy / Pandas":       <SiNumpy />,
  "Matplotlib / Seaborn": <FaChartLine />,
  "Git & GitHub":         <SiGithub />,
};

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-title">
          <h2>About <span>Me</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Who am I?</h3>
            <p>{config.about}</p>

            {/* personal info */}
            <div className="about-info">
              <div className="info-item">
                <FaUser />
                <div>
                  <span className="info-label">Name</span>
                  <span className="info-value">{config.name}</span>
                </div>
              </div>
              <div className="info-item">
                <FaGraduationCap />
                <div>
                  <span className="info-label">College</span>
                  <span className="info-value">MBIT</span>
                </div>
              </div>
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">{config.location}</span>
                </div>
              </div>
              <div className="info-item">
                <FaPhone />
                <div>
                  <span className="info-label">Phone</span>
                  <span className="info-value">{config.phone}</span>
                </div>
              </div>
              <div className="info-item">
                <FaEnvelope />
                <div>
                  <span className="info-label">Email</span>
                  <span className="info-value">{config.email}</span>
                </div>
              </div>
            </div>

            {/* stats */}
            <div className="about-stats">
              {config.stats.map((stat, i) => (
                <div key={i} className="stat-box">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* internship */}
            <div className="about-block">
              <h4 className="about-block-title">
                <FaBriefcase /> Internships
              </h4>
              <div className="internship-list">
                {config.internships.map((item, i) => (
                  <div key={i} className="about-block-card">
                    <div className="block-card-top">
                      <span className="block-role">{item.role}</span>
                      <span className="block-duration">{item.duration}</span>
                    </div>
                    <span className="block-company">{item.company}</span>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* certifications */}
            <div className="about-block">
              <h4 className="about-block-title">
                <FaCertificate /> Certifications
              </h4>
              <div className="cert-list">
                {config.certifications.map((cert, i) => (
                  <div key={i} className="cert-item">
                    <FaCertificate className="cert-icon" />
                    <div>
                      <span className="cert-title">{cert.title}</span>
                      <span className="cert-issuer">{cert.issuer}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* hobbies */}
            <div className="about-hobbies">
              <h4 className="about-block-title">
                <FaHeart /> Hobbies
              </h4>
              <div className="hobbies-list">
                {config.hobbies.map((h) => (
                  <span key={h} className="hobby-tag">{h}</span>
                ))}
              </div>
            </div>

            <a href={config.resume} className="btn btn-primary" download="Aniket_Vaghela_Resume.pdf">
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
