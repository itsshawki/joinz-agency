import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import RecentlyVerified from "@/components/RecentlyVerified";
import RealCaseResults from "@/components/RealCaseResults";
import { services, getServiceBySlug } from "@/lib/services";

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Not Found" };
  return {
    title: service.title,
    description: service.heroDescription,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <Hero
        tagline={service.tagline}
        title={
          <>
            {service.heroTitle}{" "}
            <span className="text-neon">{service.heroHighlight}</span>
            {service.slug === "webdev" && " engineering"}
            {service.slug === "pr-media" && " dominance"}
            {service.slug === "branding" && " architecture"}
            {service.slug === "growth" && " & engagement"}
            {service.slug === "username" && " acquisition"}
          </>
        }
        description={service.heroDescription}
        ctaText={service.ctaText}
        ctaHref="/contact"
        secondaryCta={service.secondaryCta}
        secondaryCtaHref={service.secondaryCtaAnchor}
      />

      {/* Bento Feature Grid */}
      <Section containerLow>
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-headline font-bold text-[2rem] text-white">
              {service.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature (wide) */}
          <ScrollReveal className="md:col-span-8">
            <div className="glass-card rounded-xl p-8 md:p-10 relative group overflow-hidden h-full">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">
                {service.mainFeature.icon}
              </span>
              <h3 className="font-headline font-bold text-2xl text-white mb-4">
                {service.mainFeature.title}
              </h3>
              <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                {service.mainFeature.description}
              </p>
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">
                  {service.mainFeature.bgIcon}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Side Feature (narrow) */}
          <ScrollReveal className="md:col-span-4" delay={120}>
            <div className="bg-surface-container-highest rounded-xl p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  {service.sideFeature.icon}
                </span>
                <h3 className="font-headline font-bold text-2xl text-white mb-4">
                  {service.sideFeature.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {service.sideFeature.description}
                </p>
              </div>
              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex justify-between items-center text-primary font-bold">
                  <span>{service.sideFeature.statLabel}</span>
                  <span className="material-symbols-outlined">
                    {service.sideFeature.statIcon}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Small Feature Cards */}
          {service.smallFeatures.map((feat, i) => (
            <ScrollReveal
              key={feat.title}
              className="md:col-span-4"
              delay={(i + 2) * 80}
            >
              <div className="glass-card rounded-xl p-8 h-full">
                <span className="material-symbols-outlined text-primary mb-4">
                  {feat.icon}
                </span>
                <h4 className="font-headline font-bold text-lg text-white mb-2">
                  {feat.title}
                </h4>
                <p className="text-on-surface-variant text-sm">
                  {feat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Media Logos (PR page only) */}
      {service.mediaLogos && (
        <Section>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-[2rem] text-white">
                Authorized Media Partners
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {service.mediaLogos.map((logo, i) => (
              <ScrollReveal key={logo} delay={i * 60}>
                <div className="glass-card rounded-xl p-8 flex items-center justify-center media-logo-card">
                  <span className="font-headline font-bold text-xl text-white">
                    {logo}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* Process + Image */}
      <section
        id="method"
        className="px-6 md:px-12 py-24 md:py-32 max-w-[1440px] mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-[2rem] text-white leading-tight mb-8">
              {service.processTitle}
            </h2>
            <div className="space-y-8">
              {service.processSteps.map((step) => (
                <div key={step.number} className="flex gap-6 process-step">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary font-bold step-number">
                    {step.number}
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-2">{step.title}</h5>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[8rem] opacity-20">
                    {service.mainFeature.icon}
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 md:-bottom-8 -right-4 md:-right-8 glass-card p-6 md:p-8 rounded-xl shadow-2xl max-w-xs">
                <p className="text-primary font-headline font-bold text-3xl mb-1">
                  {service.statValue}
                </p>
                <p className="text-on-surface-variant text-sm font-bold">
                  {service.statLabel}
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recently Verified Accounts (Verification only) */}
      {service.slug === "verification" && (
        <>
          <RecentlyVerified />
          <RealCaseResults />
        </>
      )}

      {/* Closing CTA */}
      <ClosingCta
        title={service.closingTitle}
        highlight={service.closingHighlight}
        description={service.closingDescription}
        ctaText={service.closingCta}
      />
    </>
  );
}
