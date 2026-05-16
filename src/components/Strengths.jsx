import { motion } from "framer-motion";
import {
  FaComments, FaLightbulb, FaBolt, FaUsers, FaChartLine,
} from "react-icons/fa";
import config from "../data/config";
import "./Strengths.css";

const iconMap = [
  <FaComments />,
  <FaLightbulb />,
  <FaBolt />,
  <FaUsers />,
  <FaChartLine />,
];

export default function Strengths() {
  return (
    <section id="strengths" className="strengths">
      <div className="section-container">
        <div className="section-title">
          <h2>Key <span>Strengths</span></h2>
          <div className="title-line"></div>
        </div>
        <p className="section-sub">What I bring to the table</p>

        <div className="strengths-grid">
          {config.strengths.map((item, i) => (
            <motion.div
              key={item.label}
              className="strength-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="strength-icon">{iconMap[i]}</div>
              <h4>{item.label}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
