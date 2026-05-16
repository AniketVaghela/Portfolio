import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import config from "../data/config";
import "./Projects.css";

function ProjectCard({ project, i }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setImgIdx((p) => (p - 1 + project.images.length) % project.images.length);
  };

  const next = () => {
    setDirection(1);
    setImgIdx((p) => (p + 1) % project.images.length);
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {/* image carousel */}
      <div className="project-img-wrap">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={imgIdx}
            src={project.images[imgIdx]}
            alt={`${project.title} screenshot ${imgIdx + 1}`}
            className="project-img"
            custom={direction}
            variants={{
              enter: (d) => ({ opacity: 0, x: d * 40 }),
              center: { opacity: 1, x: 0 },
              exit: (d) => ({ opacity: 0, x: d * -40 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {project.images.length > 1 && (
          <>
            <button className="img-nav img-nav-left" onClick={prev} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <button className="img-nav img-nav-right" onClick={next} aria-label="Next">
              <FaChevronRight />
            </button>
            <div className="img-dots">
              {project.images.map((_, di) => (
                <button
                  key={di}
                  className={`img-dot ${di === imgIdx ? "active" : ""}`}
                  onClick={() => { setDirection(di > imgIdx ? 1 : -1); setImgIdx(di); }}
                  aria-label={`Go to image ${di + 1}`}
                />
              ))}
            </div>
            <span className="img-counter">{imgIdx + 1} / {project.images.length}</span>
          </>
        )}
      </div>

      {/* info */}
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-title">
          <h2>My <span>Projects</span></h2>
          <div className="title-line"></div>
        </div>
        <p className="section-sub">Some things I've built</p>

        <div className="projects-grid">
          {config.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
