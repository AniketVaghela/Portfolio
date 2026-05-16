import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import config from "../data/config";
import "./AiChat.css";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey there! 👋 I'm Aniket's personal assistant. Ask me anything about him — his skills, projects, education or how to contact him!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    const newHistory = [...history, { role: "user", content: text }];

    const body = {
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: config.geminiContext },
        ...newHistory,
      ],
      temperature: 0.7,
      max_tokens: 512,
    };

    try {
      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Groq API error:", data);
        throw new Error(data?.error?.message || "API error " + res.status);
      }

      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response right now.";

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: `Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <div className="ai-btn" onClick={() => setOpen(!open)} title="Ask about Aniket">
        <FaRobot />
      </div>

      <div className={`ai-chat ${open ? "open" : ""}`}>
        <div className="ai-chat-header">
          <div className="ai-header-info">
            <div className="ai-avatar"><FaRobot /></div>
            <div>
              <h4>Aniket's Assistant</h4>
              <span className="ai-status">Online</span>
            </div>
          </div>
          <button className="ai-close" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg ${msg.role}`}>
              <div className="ai-msg-bubble">{msg.text}</div>
            </div>
          ))}
          {loading && (
            <div className="ai-msg bot typing-indicator">
              <div className="ai-msg-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="ai-input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me about Aniket..."
          />
          <button onClick={sendMessage} disabled={loading}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
}
