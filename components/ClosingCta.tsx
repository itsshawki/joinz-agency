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
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1300px] mx-auto glass-card rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-20 relative overflow-hidden text-center">
        {/* Glow gradient overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="font-headline font-extrabold text-3xl md:text-[2.75rem] leading-tight text-white mb-6">
            {title} <span className="text-neon">{highlight}</span>
          </h2>
          <p className="text-on-surface-variant mb-10 text-lg leading-relaxed max-w-xl mx-auto">{description}</p>
          <Link
            href={ctaHref}
            className="primary-cta px-12 py-5 text-lg justify-center"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
