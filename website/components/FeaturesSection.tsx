const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 0 1 0 20M12 2a10 10 0 0 0 0 20M2 12h20" />
        <path d="M12 2c2.5 2.5 4 6.1 4 10s-1.5 7.5-4 10M12 2C9.5 4.5 8 8.1 8 12s1.5 7.5 4 10" />
      </svg>
    ),
    title: "Local AI Assistant",
    description:
      "Run large language models directly on your PC with LLamaSharp. AI assistance without sending your data to the cloud — complete privacy by default.",
    accent: "#4f9ef8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Customizable UI",
    description:
      "Tune every pixel — tab widths, colors, nav bar height, button sizes and more. The Fluent-like theme adapts to your workflow, not the other way around.",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="6" width="6" height="4" rx="1" />
        <rect x="10" y="4" width="6" height="4" rx="1" />
        <rect x="18" y="6" width="4" height="4" rx="1" />
        <path d="M2 14h20M2 18h14" />
      </svg>
    ),
    title: "Tab-Heavy Workflows",
    description:
      "Designed for multi-tab power users. Overflow windows let you drag and drop tabs between separate windows — keeping your workspace organized.",
    accent: "#34d399",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Built-in DevTools",
    description:
      "An integrated HTML editor with templates, console logging, and diagnostics workflows — developer tooling baked right into the browser.",
    accent: "#fbbf24",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M21 12h-3M6 12H3M12 6V3M12 21v-3" />
        <path d="M18.364 5.636l-2.121 2.121M7.757 16.243l-2.121 2.121M18.364 18.364l-2.121-2.121M7.757 7.757 5.636 5.636" />
      </svg>
    ),
    title: "Playwright Automation",
    description:
      "Native Playwright integration for browser automation and testing. Script web interactions and run diagnostics directly from within the browser.",
    accent: "#f472b6",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
      </svg>
    ),
    title: "Voice Input",
    description:
      "Whisper-based voice recognition pipeline lets you control and input text using your voice. Microphone access is requested only when you enable this feature.",
    accent: "#38bdf8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Privacy by Design",
    description:
      "GDPR-style User Agreement flow included. Settings, history, bookmarks, and sessions stay on your device — local storage, always.",
    accent: "#4f9ef8",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    title: "Local Embedded Database",
    description:
      "LiteDB stores all your browser data locally — fast, reliable, and completely under your control. No external syncing unless you choose it.",
    accent: "#a78bfa",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      style={{
        padding: "96px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div className="tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
          Features
        </div>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Everything you need,{" "}
          <span className="gradient-text">nothing you don&apos;t</span>
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          Vetale Browser is built for people who want a browser that works with them,
          not against them.
        </p>
      </div>

      {/* Features grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="glass-card"
            style={{ padding: "28px" }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `${feature.accent}18`,
                border: `1px solid ${feature.accent}33`,
                color: feature.accent,
                marginBottom: "20px",
                flexShrink: 0,
              }}
            >
              {feature.icon}
            </div>
            <h3
              style={{
                fontSize: "17px",
                fontWeight: 600,
                marginBottom: "10px",
                color: "var(--text-primary)",
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
