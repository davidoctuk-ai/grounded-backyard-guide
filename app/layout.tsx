import type { Metadata } from "next";
import "./globals.css";

const base = "https://grounded-backyard-guide.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: {
    default: "Grounded Backyard | Practical growing guides",
    template: "%s | Grounded Backyard",
  },
  description: "Practical guides for gardens, water and home projects, with clearly disclosed partner links.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Grounded Backyard | Practical home and garden resources",
    description: "Useful plans for gardens, water and practical home projects.",
    type: "website",
    images: [{ url: `${base}/og.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grounded Backyard | Practical home and garden resources",
    description: "Useful plans for gardens, water and practical home projects.",
    images: [`${base}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script defer src="/_vercel/insights/script.js" /></body></html>;
}
