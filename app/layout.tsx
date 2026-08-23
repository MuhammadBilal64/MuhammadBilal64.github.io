import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammadbilal64.github.io"),
  title: "Muhammad Bilal — Backend Engineer | .NET · Go & Systems",
  description:
    "Muhammad Bilal is a Computer Science student at FAST NUCES Karachi focused on backend engineering with .NET, Go, concurrency, and distributed systems.",
  applicationName: "Muhammad Bilal — Engineering Command Center",
  authors: [{ name: "Muhammad Bilal" }],
  keywords: [
    "Muhammad Bilal",
    "Backend Engineer",
    ".NET",
    "ASP.NET Core",
    "Go",
  ],
  openGraph: {
    title: "Muhammad Bilal — Backend Engineer · .NET · Go & Systems",
    description:
      "Muhammad Bilal is a Computer Science student at FAST NUCES Karachi focused on backend engineering with .NET, Go, concurrency, and distributed systems.",
    type: "website",
    locale: "en_US",
    url: "https://muhammadbilal64.github.io",
    siteName: "Muhammad Bilal",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal — Backend Engineer · .NET · Go & Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal — Backend Engineer · .NET · Go & Systems",
    description:
      "Muhammad Bilal is a Computer Science student at FAST NUCES Karachi focused on backend engineering with .NET, Go, concurrency, and distributed systems.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
