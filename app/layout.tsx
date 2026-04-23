import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SovereignBackground from "@/components/SovereignBackground";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

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
    default: "Joinz Agency | Digital Authority Agency",
    template: "%s | Joinz Agency",
  },
  description: "We help brands and creators get verified, protect their reputation, and build powerful digital authority across all major platforms.",
  openGraph: {
    title: "Joinz Agency | Digital Authority Agency",
    description: "We help brands and creators get verified, protect their reputation, and build powerful digital authority across all major platforms.",
    url: "https://joinz.agency",
    siteName: "Joinz Agency",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        {/* Inline script to prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('joinz-theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} bg-background text-on-surface font-body antialiased`}
      >
        <ThemeProvider>
          {/* Global sovereign background — fixed, z-0, covers all pages */}
          <SovereignBackground />

          <Navbar />

          <main className="relative z-10 overflow-hidden">
            {children}
          </main>

          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
