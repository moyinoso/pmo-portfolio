import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL in Vercel, or replace the fallback with your domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pmo-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moyinoluwa Oso Ogooluwa — Data · AI · Technology",
    template: "%s — Moyinoluwa Oso Ogooluwa",
  },
  description:
    "I follow the clues in the data until the bigger picture starts to make sense. Data, AI, technology, automation and research — by Moyinoluwa Oso Ogooluwa (PMO).",
  keywords: [
    "Moyinoluwa Oso Ogooluwa",
    "PMO",
    "Data Analysis",
    "Artificial Intelligence",
    "Technology",
    "Automation",
    "Data Science",
  ],
  authors: [{ name: "Moyinoluwa Oso Ogooluwa" }],
  creator: "Moyinoluwa Oso Ogooluwa",
  openGraph: {
    type: "profile",
    url: siteUrl,
    siteName: "Moyinoluwa Oso Ogooluwa",
    title: "Moyinoluwa Oso Ogooluwa — Data · AI · Technology",
    description:
      "I follow the clues in the data until the bigger picture starts to make sense.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Moyinoluwa Oso Ogooluwa — Data · AI · Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moyinoluwa Oso Ogooluwa — Data · AI · Technology",
    description:
      "I follow the clues in the data until the bigger picture starts to make sense.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain bg-ink font-sans text-paper antialiased">
        {children}
      </body>
    </html>
  );
}
