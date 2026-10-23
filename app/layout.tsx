import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import "./guides.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://grounded-backyard-guide.vercel.app"),
  title: {
    default: "Grounded Backyard | Practical growing guides",
    template: "%s | Grounded Backyard",
  },
  description:
    "Practical, plain-English guides for growing more food, using water wisely and building a more productive backyard.",
  verification: {
    google: "C-O5NLgkNKSS7_5Kdqpn1zkh9T0sYc3pg3wm8JhCE9Y",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Grow more from the space you already have.",
    description: "Practical guides for a more productive, resilient backyard.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grounded Backyard | Practical home and garden resources",
    description: "Practical guides and clearly disclosed partner resources for homeowners.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7069398799077640" crossOrigin="anonymous" />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
