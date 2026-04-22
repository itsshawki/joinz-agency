import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import RecentlyVerified from "@/components/RecentlyVerified";
import RealCaseResults from "@/components/RealCaseResults";
import { services, getServiceBySlug } from "@/lib/services";
import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiX,
  SiYoutube,
  SiSnapchat
} from "react-icons/si";


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
      />

      {/* Bento Feature Grid */}
      <Section containerLow>
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              {service.sectionSubtitle}
            </span>
            <h2 className="font-headline font-bold text-[2rem] text-white">
              {service.sectionTitle}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Feature (Top Left - Large) */}
          <ScrollReveal className="md:col-span-8">
            <div className="glass-card rounded-3xl p-8 md:p-10 relative group overflow-hidden h-full flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-[#16cc9b] text-4xl mb-6">
                  {service.mainFeature.icon}
                </span>
                <h3 className="font-headline font-bold text-2xl text-white mb-4">
                  {service.mainFeature.title}
                </h3>
                <p className="text-white/60 leading-relaxed max-w-2xl whitespace-pre-line">
                  {service.mainFeature.description}
                </p>
              </div>
              {service.mainFeature.footerNote && (
                <div className="mt-8 pt-6 border-t border-white/5">
                  <span className="text-xs uppercase tracking-widest text-white/40 font-bold">
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
                <span className="material-symbols-outlined text-[#16cc9b] text-4xl mb-6">
                  {service.sideFeature.icon}
                </span>
                <h3 className="font-headline font-bold text-2xl text-white mb-4">
                  {service.sideFeature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">
                  {service.sideFeature.description}
                </p>
              </div>
              <div className="pt-8 border-t border-white/5 mt-8">
                <div className="flex justify-between items-center text-[#16cc9b] font-bold">
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
                  <span className="material-symbols-outlined text-[#16cc9b] mb-4">
                    {feat.icon}
                  </span>
                  <h4 className="font-headline font-bold text-lg text-white mb-2">
                    {feat.title}
                  </h4>
                  <p className="text-white/60 text-sm whitespace-pre-line">
                    {feat.description}
                  </p>
                </div>
                {feat.badge && (
                  <div className="hidden sm:flex flex-col items-end text-right ml-4 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <span className="text-[#16cc9b] font-bold text-sm tracking-tight whitespace-nowrap">{feat.badge}</span>
                    <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">{feat.badgeSub}</span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Supported Platforms (Verification only) - Premium Luxury Centerpiece */}
        {service.slug === "verification" && (
          <ScrollReveal delay={300}>
            <div className="mt-24 md:mt-32 rounded-[2.5rem] md:rounded-[3rem] p-12 md:p-24 relative overflow-hidden glass-card group/centerpiece">
              {/* Luxury Background Layers */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,204,155,0.08),transparent_60%)] pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5 pointer-events-none opacity-30" />

              {/* Scan Line Detail */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-scan" />

              <div className="relative z-10 text-center mb-20">
                <h3 className="font-headline font-bold text-4xl md:text-6xl mb-6 tracking-tight bg-gradient-to-r from-white via-white to-primary/40 bg-clip-text text-transparent">
                  Supported Platforms
                </h3>

                {/* Visual Divider */}
                <div className="flex justify-center mb-8">
                  <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </div>

                <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                  Authoritative verification infrastructure engineered for the world&apos;s elite digital platforms.
                </p>
              </div>

              {/* Floating Cluster Layout */}
              <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
                {[
                  { icon: SiInstagram, name: "Instagram", delay: "0s", offset: "-translate-y-2" },
                  { icon: SiFacebook, name: "Facebook", delay: "0.2s", offset: "translate-y-4" },
                  { icon: SiTiktok, name: "TikTok", delay: "0.4s", offset: "-translate-y-4" },
                  { icon: SiX, name: "X / Twitter", delay: "0.1s", offset: "translate-y-0" },
                  { icon: SiYoutube, name: "YouTube", delay: "0.3s", offset: "translate-y-2" },
                  { icon: SiSnapchat, name: "Snapchat", delay: "0.5s", offset: "-translate-y-1" },
                ].map((platform) => (
                  <div
                    key={platform.name}
                    className={`group relative flex flex-col items-center transition-all duration-500 ease-out hover:z-20 ${platform.offset}`}
                  >
                    {/* Premium Badge Wrapper */}
                    <div
                      className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_60px_rgba(22,204,155,0.25)] animate-float overflow-hidden backdrop-blur-sm"
                      style={{ animationDelay: platform.delay, animationDuration: "6s" }}
                    >
                      {/* Glass Reflection Highlight */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Icon */}
                      <platform.icon className="text-4xl md:text-5xl text-white opacity-40 group-hover:opacity-100 group-hover:text-white transition-all duration-300 filter group-hover:drop-shadow-[0_0_15px_rgba(22,204,155,0.8)]" />

                      {/* Subtle status dot */}
                      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary shadow-[0_0_8px_rgba(22,204,155,0.5)] transition-colors" />
                    </div>

                    {/* Hover Platform Name Label */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:bottom-[-2.5rem] whitespace-nowrap">
                      <div className="px-3 py-1 rounded bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                          {platform.name}
                        </span>
                      </div>
                    </div>

                    {/* Under-Glow Support */}
                    <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </Section>

      {/* Media Logos (PR page only) */}
      {service.mediaLogos && (
        <Section>
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-headline font-bold text-[2rem] text-white">
                Featured In
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {service.mediaLogos.map((logo, i) => (
              <ScrollReveal key={logo} delay={i * 60}>
                <div className="glass-card rounded-2xl p-8 flex items-center justify-center media-logo-card">
                  <span className="font-headline font-bold text-xl text-white">
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
            <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
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
                <div className="group relative flex flex-col p-8 md:p-10 rounded-3xl glass-card transition-all duration-500 hover:bg-white/[0.06] hover:border-primary/30 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(22,204,155,0.12)] text-left h-full">
                  {/* Step Number Badge */}
                  <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center text-primary font-bold text-2xl mb-8 relative group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(22,204,155,0.4)] transition-all duration-500 bg-background/80 backdrop-blur-sm">
                    <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-110 transition-transform duration-500 blur-md" />
                    <span className="relative z-10">{step.number}</span>
                  </div>

                  <div className="relative z-10">
                    <h5 className="text-white font-bold text-2xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h5>
                    <p className="text-white/50 text-base leading-relaxed group-hover:text-white/80 transition-colors duration-300 whitespace-pre-line">
                      {step.description}
                    </p>
                  </div>

                  {/* Glass Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
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
