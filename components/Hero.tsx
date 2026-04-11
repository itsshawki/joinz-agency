import Link from "next/link";

interface HeroProps {
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCta?: string;
  secondaryCtaHref?: string;
}

export default function Hero({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCta,
  secondaryCtaHref,
}: HeroProps) {
  return (
    <section className="hero-section">
      {/* FULL WIDTH BACKGROUND LAYER */}
      <div className="hero-background hero-gradient">
        {/* Abstract SVG Lines — Moved inside full-width background layer */}
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

      <div className="hero-content px-6">
        <h1 className="hero-title">
          {title}
        </h1>
        <p className="hero-subtext">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-[28px]">
          {ctaText && ctaHref && (
            <Link
              href={ctaHref}
              className="hero-button"
            >
              {ctaText}
              <span className="material-symbols-outlined !text-[18px]">arrow_forward</span>
            </Link>
          )}
          {secondaryCta && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="hero-button"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
