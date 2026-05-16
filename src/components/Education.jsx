import { motion } from "framer-motion";
import config from "../data/config";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">
        <div className="section-title">
          <h2>My <span>Education</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="timeline">
          {config.education.map((item, i) => (
            <motion.div
              key={i}
              className="timeline-item"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h3>{item.degree}</h3>
                <h4>{item.school}</h4>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
