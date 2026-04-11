"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle scroll lock and close menu on route change
  useEffect(() => {
    // eslint-disable-next-line
    setMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = "unset";
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (menuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 w-full z-[1100] transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-6 md:px-12">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-white font-headline"
          >
            Joinz
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <Link
              href="/contact"
              className="primary-cta px-6 py-2.5 text-sm !hidden lg:!flex"
            >
              Get Started
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`hamburger lg:hidden ${menuOpen ? "active" : ""}`}
              aria-label="Toggle Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-nav-link text-4xl font-headline font-bold transition-all duration-300 delay-${index + 1} ${
                isActive(link.href) ? "text-primary" : "text-white hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mobile-nav-link primary-cta mt-6 px-12 py-4 text-xl delay-5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
