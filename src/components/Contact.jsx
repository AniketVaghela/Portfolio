import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import config from "../data/config";
import "./Contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ msg: "", type: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus({ msg: "Message sent successfully!", type: "success" });
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus({ msg: `Failed: ${err?.text || err?.message || "Please try again."}`, type: "error" });
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus({ msg: "", type: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="section-title">
          <h2>Get In <span>Touch</span></h2>
          <div className="title-line"></div>
        </div>
        <p className="section-sub">
          Feel free to reach out for collaborations, opportunities or just a hello
        </p>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="contact-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>{config.email}</p>
              </div>
            </div>
            <div className="contact-card">
              <FaPhone />
              <div>
                <h4>Phone</h4>
                <p>{config.phone}</p>
              </div>
            </div>
            <div className="contact-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p>{config.location}</p>
              </div>
            </div>
            <div className="contact-socials">
              <a href={config.github} target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href={config.linkedin} target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <input type="text" name="from_name" placeholder="Your Name" required />
              <label>Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="from_email" placeholder="Your Email" required />
              <label>Your Email</label>
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" required />
              <label>Subject</label>
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <label>Your Message</label>
            </div>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Sending..." : <><FaPaperPlane /> Send Message</>}
            </button>
            {status.msg && (
              <p className={`form-status ${status.type}`}>{status.msg}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
