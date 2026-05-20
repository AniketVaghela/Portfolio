import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import "./index.css";
import App from "./App.jsx";

// Initialize EmailJS once globally with the public key
emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
