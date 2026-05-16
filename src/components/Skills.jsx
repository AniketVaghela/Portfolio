import { motion } from "framer-motion";
import {
  FaChartBar, FaDatabase,
  FaChartLine, FaTable, FaChartPie,
} from "react-icons/fa";
import { SiPython, SiPandas, SiNumpy, SiMysql, SiGithub } from "react-icons/si";
import config from "../data/config";
import "./Skills.css";

// real brand icons where available, best-fit fa icons for the rest
const iconMap = {
  "Microsoft Power BI":     <FaChartBar />,
  "Microsoft Excel":        <FaTable />,
  "SQL":                    <SiMysql />,
  "Python":                 <SiPython />,
  "Tableau":                <FaChartPie />,
  "NumPy / Pandas":         <SiNumpy />,
  "Matplotlib / Seaborn":   <FaChartLine />,
  "Git & GitHub":           <SiGithub />,
};

const categories = [
  {
    label: "Data & Visualization",
    icon: <FaChartBar />,
    keys: ["Microsoft Power BI", "Microsoft Excel", "Tableau", "Matplotlib / Seaborn"],
  },
  {
    label: "Database & Programming",
    icon: <FaDatabase />,
    keys: ["SQL", "Python", "NumPy / Pandas", "Git & GitHub"],
  },
];

export default function Skills() {
  const skillMap = Object.fromEntries(config.skills.map((s) => [s.name, s]));

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-title">
          <h2>My <span>Skills</span></h2>
          <div className="title-line"></div>
        </div>
        <p className="section-sub">Technologies and tools I work with</p>

        <div className="skills-categories">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <div className="skill-category-header">
                <div className="skill-category-icon">{cat.icon}</div>
                <h3>{cat.label}</h3>
              </div>

              <ul className="skill-list">
                {cat.keys.map((key, i) => {
                  const skill = skillMap[key];
                  if (!skill) return null;
                  return (
                    <motion.li
                      key={key}
                      className="skill-item"
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: ci * 0.15 + i * 0.07 }}
                    >
                      <span className="skill-item-icon">{iconMap[key]}</span>
                      <span className="skill-item-name">{skill.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-languages"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="lang-label">Languages :</span>
          {config.languages.map((lang) => (
            <span key={lang} className="lang-tag">{lang}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
