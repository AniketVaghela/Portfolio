import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import config from "../data/config";
import "./AiChat.css";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

// Suggested quick questions shown at start
const SUGGESTIONS = [
  "What are Aniket's skills?",
  "Tell me about his internships",
  "What projects has he built?",
  "How can I contact Aniket?",
];

export default function AiChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hey there! 👋 I'm **Aniket's personal assistant**.\n\nAsk me anything about him — his skills, projects, education or how to reach him!",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;

    setInput("");
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    const newHistory = [...history, { role: "user", content: msg }];

    const body = {
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: config.geminiContext },
        ...newHistory,
      ],
      temperature: 0.65,
      max_tokens: 600,
    };

    try {
      const res = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Groq API error:", data);
        throw new Error(data?.error?.message || "API error " + res.status);
      }

      const reply =
        data.choices?.[0]?.message?.content ||
        "Sorry, I couldn't get a response right now.";

      setHistory([...newHistory, { role: "assistant", content: reply }]);
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: `⚠️ **Error:** ${err.message}\n\nPlease try again in a moment.`,
        },
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
      {/* Floating trigger button */}
      <div
        className="ai-btn"
        onClick={() => setOpen(!open)}
        title="Ask about Aniket"
      >
        <FaRobot />
      </div>

      <div className={`ai-chat ${open ? "open" : ""}`}>
        {/* Header */}
        <div className="ai-chat-header">
          <div className="ai-header-info">
            <div className="ai-avatar">
              <FaRobot />
            </div>
            <div>
              <h4>Aniket's Assistant</h4>
              <span className="ai-status">● Online</span>
            </div>
          </div>
          <button className="ai-close" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Messages */}
        <div className="ai-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`ai-msg ${msg.role}`}>
              {msg.role === "bot" && (
                <div className="ai-msg-avatar">
                  <FaRobot />
                </div>
              )}
              <div className="ai-msg-bubble">
                {msg.role === "bot" ? (
                  <ReactMarkdown
                    components={{
                      // open links in new tab
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noreferrer" />
                      ),
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {loading && (
            <div className="ai-msg bot typing-indicator">
              <div className="ai-msg-avatar">
                <FaRobot />
              </div>
              <div className="ai-msg-bubble">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {/* Quick suggestion chips */}
          {showSuggestions && !loading && (
            <div className="ai-suggestions">
              {SUGGESTIONS.map((s, i) => (
                <button
                  key={i}
                  className="ai-chip"
                  onClick={() => sendMessage(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input row */}
        <div className="ai-input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask me about Aniket..."
            disabled={loading}
          />
          <button onClick={() => sendMessage()} disabled={loading || !input.trim()}>
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </>
  );
}
