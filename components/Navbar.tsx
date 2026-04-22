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
      <header className="fixed top-0 left-0 w-full z-[1100] px-4 md:px-8 pt-4">
        <nav
          className={`navbar-float transition-all duration-500 ${
            scrolled
              ? "navbar-float--scrolled"
              : ""
          }`}
        >
          <div className="flex justify-between items-center w-full">
            {/* Logo — Left */}
            <Link
              href="/"
              className="text-[1.4rem] font-black tracking-[-0.04em] text-white font-headline flex-shrink-0"
            >
              Joinz
            </Link>

            {/* Nav Links — Center */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-pill ${isActive(link.href) ? "nav-pill--active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger — Right */}
            <div className="flex items-center gap-4 lg:gap-5">
              <Link
                href="/contact"
                className="nav-cta-button !hidden lg:!flex"
              >
                Get Started
                <span className="material-symbols-outlined !text-[16px]">arrow_forward</span>
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
      </header>

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
            className="mobile-nav-link nav-cta-button mt-6 px-12 py-4 text-xl delay-5"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}
