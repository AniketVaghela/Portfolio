import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaChevronDown, FaChartBar, FaChartLine } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import config from "../data/config";
import "./Hero.css";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  left: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 10,
}));

const roles = [
  { label: "Data Analyst",      icon: <FaChartLine /> },
  { label: "Power BI Developer", icon: <FaChartBar /> },
  { label: "Business Analyst",  icon: <FaChartLine /> },
];

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function useScramble(target) {
  const [output, setOutput] = useState(target);
  const frame = useRef(0);
  const raf = useRef(null);

  useEffect(() => {
    let iteration = 0;
    cancelAnimationFrame(raf.current);

    const animate = () => {
      setOutput(
        target
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iteration) return target[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration < target.length) {
        frame.current++;
        if (frame.current % 3 === 0) iteration++;
        raf.current = requestAnimationFrame(animate);
      } else {
        setOutput(target);
      }
    };

    raf.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf.current);
  }, [target]);

  return output;
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const scrambled = useScramble(roles[roleIdx].label);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      <div className="hero-particles">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="hero-badge-dot" />
          Available for opportunities
        </motion.div>

        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{config.name}</h1>

        <div className="hero-role">
          <span className="role-icon">{roles[roleIdx].icon}</span>
          <span className="role-scramble">{scrambled}</span>
        </div>

        <p className="hero-desc">
          I am a Computer Engineering student skilled in Power BI, Excel, SQL and basic Python, with internship experience in data visualization. I'm a quick learner focused on solving problems and applying data-driven insights.
        </p>

        <div className="hero-btns">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <a href="#projects" className="btn btn-outline">View Work</a>
        </div>

        <div className="hero-socials">
          <a href={config.github} target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
          <a href={config.linkedin} target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
          <a href={`mailto:${config.email}`} title="Email"><FaEnvelope /></a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image-wrap"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      >
        <div className="hero-visual">

          {/* outer ring */}
          <div className="visual-ring visual-ring-outer" />
          <div className="visual-ring visual-ring-inner" />

          {/* center icon */}
          <div className="visual-center">
            <FaChartBar className="visual-main-icon" />
            <span className="visual-label">Data</span>
          </div>

          {/* animated bar chart */}
          <div className="visual-bars">
            <div className="visual-bar" style={{ "--h": "40%", "--d": "0s" }} />
            <div className="visual-bar" style={{ "--h": "70%", "--d": "0.15s" }} />
            <div className="visual-bar" style={{ "--h": "55%", "--d": "0.3s" }} />
            <div className="visual-bar" style={{ "--h": "85%", "--d": "0.45s" }} />
            <div className="visual-bar" style={{ "--h": "60%", "--d": "0.6s" }} />
          </div>

          {/* floating stat chips */}
          <div className="visual-chip visual-chip-1">
            <FaChartLine style={{ fontSize: "0.75rem" }} />
            <span>Power BI</span>
          </div>
          <div className="visual-chip visual-chip-2">
            <span>📊 Excel</span>
          </div>
          <div className="visual-chip visual-chip-3">
            <SiMysql style={{ fontSize: "0.85rem" }} />
            <span>MySQL</span>
          </div>
          <div className="visual-chip visual-chip-4">
            <span>📈 Tableau</span>
          </div>
          <div className="visual-chip visual-chip-5">
            <span>🐍 Python</span>
          </div>

        </div>
      </motion.div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <FaChevronDown />
      </a>
    </section>
  );
}
