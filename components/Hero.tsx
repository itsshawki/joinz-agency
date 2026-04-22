"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
  /** Optional right-side visual element */
  rightContent?: React.ReactNode;
}

const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero({
  eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCta,
  secondaryCtaHref,
  rightContent,
}: HeroProps) {
  return (
    <section className="hero-section">
      {/* FULL WIDTH BACKGROUND LAYER */}
      <div className="hero-background hero-gradient">
        {/* Abstract SVG Lines */}
        <svg
          className="abstract-lines"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M0,500 C150,300 350,700 500,500 S850,300 1000,500" />
          <path d="M0,600 C200,400 400,800 600,600 S900,400 1000,600" opacity="0.5" />
        </svg>
      </div>

      <div className="hero-inner">
        {/* LEFT — Text Content */}
        <div className="hero-text">
          {eyebrow && (
            <motion.div
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
            >
              <span className="hero-eyebrow">{eyebrow}</span>
            </motion.div>
          )}

          <motion.h1
            className="hero-title"
            variants={fadeDown}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: eyebrow ? 0.15 : 0 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="hero-subtext"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: eyebrow ? 0.3 : 0.15 }}
          >
            {description}
          </motion.p>

          {(ctaText || secondaryCta) && (
            <motion.div
              className="hero-cta-row"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: eyebrow ? 0.45 : 0.3 }}
            >
              {ctaText && ctaHref && (
                <Link href={ctaHref} className="hero-cta-primary">
                  {ctaText}
                  <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
                </Link>
              )}
              {secondaryCta && secondaryCtaHref && (
                <Link href={secondaryCtaHref} className="hero-cta-secondary">
                  {secondaryCta}
                </Link>
              )}
            </motion.div>
          )}
        </div>

        {/* RIGHT — Visual / Breathing Space */}
        <div className="hero-visual">
          {rightContent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="w-full h-full"
            >
              {rightContent}
            </motion.div>
          ) : (
            /* Default: ambient glow orb */
            <motion.div
              className="hero-glow-orb"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
              aria-hidden="true"
            />
          )}
        </div>
      </div>
    </section>
  );
}
