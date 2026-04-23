import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ServiceHeroVisual from "@/components/ServiceHeroVisual";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import RecentlyVerified from "@/components/RecentlyVerified";
import RealCaseResults from "@/components/RealCaseResults";
import PlatformNetworkDashboard from "@/components/PlatformNetworkDashboard";
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
      {/* Hero — cinematic full-width, matching homepage style */}
      <Hero
        eyebrow={service.tagline}
        title={
          <>
            {service.heroTitle}{" "}
            <span className="text-neon">{service.heroHighlight}</span>
          </>
        }
        description={service.heroDescription}
        ctaText={service.ctaText}
        ctaHref="/contact"
        secondaryCta={service.secondaryCta}
        secondaryCtaHref={service.secondaryCtaAnchor}
        rightContent={<ServiceHeroVisual slug={service.slug} />}
      />

      {/* Bento Feature Grid */}
      <Section containerLow>
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              {service.sectionSubtitle}
            </span>
            <h2 className="font-headline font-bold text-[2rem] text-on-surface">
              {service.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature (Top Left - Large) */}
          <ScrollReveal className="md:col-span-8">
            <div className="glass-card rounded-3xl p-8 md:p-10 relative group overflow-hidden h-full flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  {service.mainFeature.icon}
                </span>
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  {service.mainFeature.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed max-w-2xl whitespace-pre-line">
                  {service.mainFeature.description}
                </p>
              </div>
              {service.mainFeature.footerNote && (
                <div className="mt-8 pt-6 border-t border-outline/30">
                  <span className="text-xs uppercase tracking-widest text-on-surface-variant/50 font-bold">
                    {service.mainFeature.footerNote}
                  </span>
                </div>
              )}
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">
                  {service.mainFeature.bgIcon}
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Side Feature (Top Right - Small Vertical) */}
          <ScrollReveal className="md:col-span-4" delay={120}>
            <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col justify-between h-full">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">
                  {service.sideFeature.icon}
                </span>
                <h3 className="font-headline font-bold text-2xl text-on-surface mb-4">
                  {service.sideFeature.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed whitespace-pre-line">
                  {service.sideFeature.description}
                </p>
              </div>
              <div className="pt-8 border-t border-outline/30 mt-8">
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
          {service.slug !== "verification" && service.smallFeatures.map((feat, i) => (
            <ScrollReveal
              key={feat.title}
              className={feat.span || "md:col-span-4"}
              delay={(i + 2) * 80}
            >
              <div className="glass-card rounded-3xl p-8 h-full flex items-center justify-between group">
                <div>
                  <span className="material-symbols-outlined text-primary mb-4">
                    {feat.icon}
                  </span>
                  <h4 className="font-headline font-bold text-lg text-on-surface mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-on-surface-variant text-sm whitespace-pre-line">
                    {feat.description}
                  </p>
                </div>
                {feat.badge && (
                  <div className="hidden sm:flex flex-col items-end text-right ml-4 px-4 py-2 rounded-xl bg-surface-variant border border-outline/30">
                    <span className="text-primary font-bold text-sm tracking-tight whitespace-nowrap">{feat.badge}</span>
                    <span className="text-on-surface-variant/50 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">{feat.badgeSub}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Supported Platforms (Verification only) - Minimal Luxury Section */}
        {service.slug === "verification" && (
          <div className="mt-24 md:mt-32 relative">
            <ScrollReveal>
              <div className="text-center mb-12 md:mb-16 relative z-10">
                <span className="text-primary text-xs font-black uppercase tracking-[0.4em] mb-3 block">
                  PLATFORMS
                </span>
                <h2 className="font-headline font-bold text-3xl md:text-5xl text-on-surface mb-4 tracking-tight">
                  Supported Platforms
                </h2>
                <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                  Verification support across major global platforms.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden glass-card border-white/5 bg-white/[0.01]">
                <PlatformNetworkDashboard />
              </div>
            </ScrollReveal>
          </div>
        )}
      </Section>

      {/* Media Logos (PR page only) */}
      {service.mediaLogos && (
        <Section>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-[2rem] text-on-surface">
                Featured In
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {service.mediaLogos.map((logo, i) => (
              <ScrollReveal key={logo} delay={i * 60}>
                <div className="glass-card rounded-2xl p-8 flex items-center justify-center media-logo-card">
                  <span className="font-headline font-bold text-xl text-on-surface">
                    {logo}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* Verification Framework Section */}
      <section
        id="method"
        className="px-6 md:px-12 py-24 md:py-32 max-w-[1300px] mx-auto overflow-hidden text-center"
      >
        <ScrollReveal>
          <div className="mb-16 md:mb-24">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block text-center">
              {service.processSubtitle}
            </span>
            <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-8">
              {service.processTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Flow Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {service.processSteps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 150}>
                <div className="group relative flex flex-col p-8 md:p-10 rounded-3xl glass-card transition-all duration-500 hover:bg-surface-variant hover:border-primary/30 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(0,210,190,0.12)] text-left h-full">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-2xl mb-8 relative group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(0,210,190,0.18)] transition-all duration-500 bg-background/80 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-md" />
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  <div className="relative z-10">
                    <h5 className="text-on-surface font-bold text-2xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h5>
                    <p className="text-on-surface-variant text-base leading-relaxed group-hover:text-on-surface/80 transition-colors duration-300 whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>

                  {/* Glass Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-surface-variant to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
                </div>
              </ScrollReveal>
            ))}
          </div>
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
