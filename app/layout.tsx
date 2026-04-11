import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SovereignBackground from "@/components/SovereignBackground";
import WhatsAppButton from "@/components/WhatsAppButton";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "JOINZ Agency — Sovereign Digital Architecture",
    template: "%s — JOINZ Agency",
  },
  description:
    "A cyber-elite creative agency dedicated to precision engineering and editorial design mastery. We don't just build websites; we construct digital legacies.",
  openGraph: {
    title: "JOINZ Agency — Sovereign Digital Architecture",
    description:
      "A cyber-elite creative agency dedicated to precision engineering and editorial design mastery.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} bg-background text-on-surface font-body antialiased`}
      >
        {/* Global sovereign background — fixed, z-0, covers all pages */}
        <SovereignBackground />

        <Navbar />

        <main className="relative z-10 overflow-hidden pt-32">
          {children}
        </main>

        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
