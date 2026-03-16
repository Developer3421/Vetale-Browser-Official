import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vetale Browser — Personal, Powerful, Private",
  description:
    "A modern Windows browser with local AI, a highly customizable Fluent-like UI, and built-in tools for power users. Available on Microsoft Store.",
  keywords: [
    "Vetale Browser",
    "Windows browser",
    "local AI browser",
    "Avalonia browser",
    "customizable browser",
    "privacy browser",
  ],
  openGraph: {
    title: "Vetale Browser — Personal, Powerful, Private",
    description:
      "A modern Windows browser with local AI, highly customizable UI, and built-in power-user tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
