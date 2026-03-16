const privacyPoints = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "GDPR-style User Agreement",
    description:
      "A clear, transparent User Agreement flow is built into the browser. You know exactly what data is collected and how it is used — before you start.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    title: "All data stored locally",
    description:
      "Your settings, history, bookmarks, and session data never leave your device unless you explicitly enable a feature that requires it.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
    title: "Local AI runs on your PC",
    description:
      "When you enable the AI assistant, inference happens entirely on your machine via LLamaSharp. Your prompts never go to a third-party server.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </svg>
    ),
    title: "Voice recognition with consent",
    description:
      "Microphone access is requested only when you actively use the voice input feature. The Whisper pipeline is transparent and opt-in.",
  },
];

export default function PrivacySection() {
  return (
    <section
      id="privacy"
      style={{
        padding: "96px 24px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left side */}
        <div>
          <div className="tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Privacy
          </div>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              marginBottom: "20px",
            }}
          >
            Your data stays{" "}
            <span className="gradient-text">where it belongs</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            Vetale Browser is designed with a privacy-first mindset. Every feature
            that could involve your data gives you full control — and the defaults
            always favor your privacy.
          </p>
          <a
            href="https://github.com/Developer3421/Vetale-Browser-Official/blob/main/USER_AGREEMENT_SYSTEM.md"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ display: "inline-flex" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Read User Agreement
          </a>
        </div>

        {/* Right side - privacy points */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {privacyPoints.map((point, i) => (
            <div
              key={i}
              className="glass-card"
              style={{ padding: "20px 24px", display: "flex", gap: "16px" }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "rgba(79,158,248,0.12)",
                  border: "1px solid rgba(79,158,248,0.25)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {point.icon}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  {point.title}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {point.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive fallback for small screens */}
      <style>{`
        @media (max-width: 768px) {
          #privacy > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
