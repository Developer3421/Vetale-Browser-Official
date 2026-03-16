export default function BrowserMockup() {
  return (
    <section
      style={{
        padding: "0 24px 96px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <div className="tag" style={{ display: "inline-flex", marginBottom: "16px" }}>
          UI Customization
        </div>
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
            marginBottom: "16px",
          }}
        >
          Your browser,{" "}
          <span className="gradient-text">your design</span>
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
          Full control over every visual aspect — from tab colors to nav bar height,
          all stored locally on your device.
        </p>
      </div>

      {/* Browser mockup */}
      <div
        className="browser-mockup accent-glow"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {/* Title bar with traffic lights */}
        <div className="browser-titlebar">
          <div className="browser-dot" style={{ background: "#ff5f57" }} />
          <div className="browser-dot" style={{ background: "#febc2e" }} />
          <div className="browser-dot" style={{ background: "#28c840" }} />

          {/* Tabs */}
          <div style={{ display: "flex", gap: "4px", marginLeft: "12px", alignItems: "flex-end" }}>
            <div className="browser-tab active">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
              </svg>
              vetale-browser.io
            </div>
            <div className="browser-tab inactive">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              New Tab
            </div>
            <div className="browser-tab inactive">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
              </svg>
              GitHub
            </div>
          </div>
        </div>

        {/* Navigation bar */}
        <div
          style={{
            height: "44px",
            background: "#141420",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            alignItems: "center",
            padding: "0 12px",
            gap: "8px",
          }}
        >
          {/* Nav buttons */}
          {["←", "→", "↺"].map((btn, i) => (
            <div
              key={i}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "6px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                color: "var(--text-secondary)",
                cursor: "pointer",
              }}
            >
              {btn}
            </div>
          ))}

          {/* Address bar */}
          <div
            style={{
              flex: 1,
              height: "30px",
              background: "var(--bg-card)",
              borderRadius: "6px",
              border: "1px solid var(--border-accent)",
              display: "flex",
              alignItems: "center",
              padding: "0 12px",
              gap: "8px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
              apps.microsoft.com/detail/9p2xg1k9cvmh
            </span>
          </div>

          {/* AI button */}
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              background: "rgba(79,158,248,0.15)",
              border: "1px solid rgba(79,158,248,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f9ef8" strokeWidth="2">
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </div>

          {/* Voice button */}
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "6px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" strokeWidth="2">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            </svg>
          </div>
        </div>

        {/* Browser content area */}
        <div
          style={{
            background: "var(--bg-secondary)",
            minHeight: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "24px",
            padding: "48px 32px",
          }}
        >
          {/* Appearance panel hint */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Tab color", color: "#1e1e28", sample: "#4f9ef8" },
              { label: "Nav bar color", color: "#141420", sample: "#141420" },
              { label: "Accent color", color: "#141420", sample: "#a78bfa" },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  minWidth: "140px",
                }}
              >
                <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                  {item.label}
                </span>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "6px",
                      background: item.sample,
                      border: "1px solid var(--border)",
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "var(--text-secondary)", fontFamily: "monospace" }}>
                    {item.sample}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "13px", color: "var(--text-muted)", textAlign: "center" }}>
            Fully customizable appearance · Settings saved locally · Reset to defaults anytime
          </p>
        </div>
      </div>

      {/* Customization bullets */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "40px",
          maxWidth: "900px",
          margin: "40px auto 0",
        }}
      >
        {[
          { label: "Tab width", detail: "160–320 px" },
          { label: "Tab text size", detail: "12–20 px" },
          { label: "Nav bar height", detail: "35–50 px" },
          { label: "Button size", detail: "28–40 px" },
          { label: "All colors", detail: "HEX format" },
          { label: "Window size", detail: "Width & height" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4f9ef8" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span style={{ color: "var(--text-primary)" }}>{item.label}</span>
            <span style={{ color: "var(--text-muted)", marginLeft: "auto", fontSize: "12px" }}>
              {item.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
