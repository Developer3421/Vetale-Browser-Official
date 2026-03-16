"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Logo + copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "7px",
              background: "linear-gradient(135deg, #4f9ef8, #a78bfa)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
              <path
                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "var(--text-primary)",
              }}
            >
              Vetale Browser
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "var(--text-muted)",
              }}
            >
              © {currentYear} Oleh Kurylo · MIT License
            </div>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
          {[
            {
              label: "GitHub",
              href: "https://github.com/Developer3421/Vetale-Browser-Official",
            },
            {
              label: "Microsoft Store",
              href: "https://apps.microsoft.com/detail/9p2xg1k9cvmh?hl=en-US&gl=US",
            },
            {
              label: "Appearance Guide",
              href: "https://github.com/Developer3421/Vetale-Browser-Official/blob/main/APPEARANCE_README.md",
            },
            {
              label: "Privacy",
              href: "https://github.com/Developer3421/Vetale-Browser-Official/blob/main/USER_AGREEMENT_SYSTEM.md",
            },
            {
              label: "DevTools Guide",
              href: "https://github.com/Developer3421/Vetale-Browser-Official/blob/main/DEVTOOLS_USAGE_GUIDE.md",
            },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--text-secondary)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
