const techItems = [
  {
    name: "Avalonia UI 11.3.9",
    description: "Cross-platform .NET UI framework",
    icon: "🖥",
    category: "UI",
  },
  {
    name: "WebViewControl-Avalonia 3.120.10",
    description: "Embedded web rendering engine",
    icon: "🌐",
    category: "Web",
  },
  {
    name: "LLamaSharp 0.25.0",
    description: "Local AI / LLM on-device integration",
    icon: "🤖",
    category: "AI",
  },
  {
    name: "Jint 4.4.2",
    description: "JavaScript interpreter on .NET",
    icon: "⚡",
    category: "Runtime",
  },
  {
    name: "Microsoft.Playwright 1.56.0",
    description: "Browser automation & testing",
    icon: "🎭",
    category: "Automation",
  },
  {
    name: "Whisper.net 1.9.0",
    description: "Voice input / speech recognition",
    icon: "🎙",
    category: "Speech",
  },
  {
    name: "LiteDB 6.0.0",
    description: "Embedded local NoSQL database",
    icon: "🗄",
    category: "Database",
  },
  {
    name: ".NET 10",
    description: "Target framework (net10.0)",
    icon: "⚙️",
    category: "Platform",
  },
];

const categoryColors: Record<string, string> = {
  UI: "#4f9ef8",
  Web: "#34d399",
  AI: "#a78bfa",
  Runtime: "#fbbf24",
  Automation: "#f472b6",
  Speech: "#38bdf8",
  Database: "#fb923c",
  Platform: "#64748b",
};

export default function TechStackSection() {
  return (
    <section
      id="tech"
      style={{
        padding: "96px 24px",
        background:
          "linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
            Technology
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
            Built on a{" "}
            <span className="gradient-text">modern stack</span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Vetale Browser leverages cutting-edge .NET libraries to deliver a
            desktop browsing experience that feels native, fast, and extensible.
          </p>
        </div>

        {/* Platform highlight */}
        <div
          className="glass-card"
          style={{
            padding: "32px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "24px",
            borderColor: "var(--border-accent)",
          }}
        >
          <div>
            <div style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "8px" }}>
              Target Platform
            </div>
            <div
              style={{
                fontSize: "1.75rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
              }}
            >
              Windows (x64, x86, ARM64)
            </div>
            <div style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "4px" }}>
              Built with .NET 10 — the latest long-term-supported framework
            </div>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {["win-x64", "win-x86", "win-arm64"].map((arch) => (
              <span
                key={arch}
                style={{
                  padding: "6px 14px",
                  background: "rgba(79,158,248,0.12)",
                  border: "1px solid rgba(79,158,248,0.25)",
                  borderRadius: "6px",
                  fontSize: "13px",
                  color: "var(--accent)",
                  fontFamily: "monospace",
                }}
              >
                {arch}
              </span>
            ))}
          </div>
        </div>

        {/* Tech grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "16px",
          }}
        >
          {techItems.map((item, i) => {
            const color = categoryColors[item.category] || "#64748b";
            return (
              <div
                key={i}
                className="glass-card"
                style={{ padding: "20px 24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: "11px",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: `${color}18`,
                      color: color,
                      border: `1px solid ${color}33`,
                      fontWeight: 500,
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    fontFamily: "monospace",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
