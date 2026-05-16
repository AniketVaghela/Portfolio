import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AiChat from "./components/AiChat";
import Strengths from "./components/Strengths";
import "./App.css";

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* scroll progress bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Strengths />
      <Contact />
      <Footer />
      <AiChat />

      <a
        href="#home"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
      >
        <FaArrowUp />
      </a>
    </>
  );
}
