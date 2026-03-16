export default function DownloadSection() {
  return (
    <section
      style={{
        padding: "96px 24px",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Glow card */}
      <div
        className="glass-card accent-glow"
        style={{
          padding: "72px 48px",
          borderColor: "rgba(79,158,248,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(79,158,248,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Microsoft Store icon */}
        <div
          style={{
            width: "72px",
            height: "72px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, #4f9ef8, #a78bfa)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 32px",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
          </svg>
        </div>

        <div
          className="tag"
          style={{ display: "inline-flex", marginBottom: "20px" }}
        >
          Free to Download
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
          Get Vetale Browser
          <br />
          <span className="gradient-text">from Microsoft Store</span>
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "480px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Available for Windows (x64, x86, ARM64). Requires .NET 10 and Windows OS.
          Local AI features work best with a CPU supporting AVX2.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://apps.microsoft.com/detail/9p2xg1k9cvmh?hl=en-US&gl=US"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "16px", padding: "16px 32px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
            Download on Microsoft Store
          </a>

          <a
            href="https://github.com/Developer3421/Vetale-Browser-Official"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ fontSize: "16px", padding: "16px 32px" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* System requirements */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
          }}
        >
          {[
            { icon: "🖥", label: "Windows OS" },
            { icon: "⚙️", label: ".NET 10" },
            { icon: "💻", label: "x64 / x86 / ARM64" },
            { icon: "🤖", label: "AVX2 for AI (recommended)" },
          ].map((req, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}
            >
              <span>{req.icon}</span>
              <span>{req.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
