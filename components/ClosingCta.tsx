import Link from "next/link";

interface ClosingCtaProps {
  title: string;
  highlight: string;
  description: string;
  ctaText: string;
  ctaHref?: string;
}

export default function ClosingCta({
  title,
  highlight,
  description,
  ctaText,
  ctaHref = "/contact",
}: ClosingCtaProps) {
  return (
    <section className="px-6 md:px-12 py-24">
      <div className="max-w-[1440px] mx-auto bg-surface-container rounded-3xl p-10 md:p-16 relative overflow-hidden text-center border border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline font-extrabold text-3xl md:text-[2.5rem] text-white mb-6">
            {title} <span className="text-neon">{highlight}</span>
          </h2>
          <p className="text-on-surface-variant mb-10 text-lg">{description}</p>
          <Link
            href={ctaHref}
            className="primary-cta px-12 py-5 text-lg neon-glow justify-center"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
