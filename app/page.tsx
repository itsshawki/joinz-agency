import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Counter from "@/components/Counter";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import PlatformShowcase from "@/components/PlatformShowcase";
import { serviceCards as originalServiceCards } from "@/lib/services";

/**
 * HOME PAGE COPY UPDATE
 * Strictly following provided text-only replacement rules.
 */

// Home-specific service card data to avoid modifying other pages
const homeServiceCards = [
  {
    ...originalServiceCards[0],
    description: "Get the blue badge on all major platforms through official white-glove channels.",
  },
  {
    ...originalServiceCards[1],
    description: "Curate your online narrative and remove negative digital footprints effectively.",
  },
  {
    ...originalServiceCards[2],
    description: "Recover compromised or disabled high-value accounts with specialized support.",
  },
  {
    ...originalServiceCards[3],
    description: "Acquire desired handles that are inactive or held by squatted accounts.",
  },
  {
    ...originalServiceCards[4],
    description: "Visual identity systems designed for the premium digital-first landscape.",
  },
  {
    ...originalServiceCards[5],
    description: "High-performance, immersive web experiences tailored for conversion.",
  },
  {
    ...originalServiceCards[6],
    description: "Press placement and editorial coverage in top-tier global publications.",
  },
  {
    ...originalServiceCards[7],
    description: "Data-driven organic growth strategies to scale your digital influence.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        tagline="The Sovereign Architect"
        title={
          <>
            Take Full Control of Your <span className="text-neon">Digital Presence</span>
          </>
        }
        description="We help elite individuals and brands get verified, protect their digital assets, and build a powerful online reputation with absolute discretion."
        ctaText="Explore services"
        ctaHref="/services"
        // Secondary button removed as per request
      />

      {/* Services Section */}
      <Section containerLow>
        <ScrollReveal>
          <div className="mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-4">
              Elite Digital <span className="text-neon">Services</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
              Curated solutions for those who demand the highest standards in digital asset management and authority.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServiceCards.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 80}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-4">
              Trusted by brands across <span className="text-neon">platforms</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-3xl mx-auto leading-relaxed">
              We help clients secure, grow, and protect their <span className="text-neon">digital presence</span> across major platforms.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
          <Counter target="500+" label="Cases Handled" />
          <Counter target="98%" label="Success Rate" />
          <Counter target="24/7" label="Support" />
        </div>
      </Section>

      {/* Trust Section & Features */}
      <Section containerLow>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <ScrollReveal>
            <h2 className="font-headline font-bold text-3xl md:text-4xl text-white mb-6">
              Built on Trust, Delivered with <span className="text-neon">Precision</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
              Our methodology combines internal network access with advanced digital forensics to ensure your online identity remains impenetrable and authentic.
            </p>
            <div className="space-y-6">
              {[
                { title: "Fast Results", desc: "Expedited processing through direct platform partnerships and streamlined workflows." },
                { title: "High Success Rate", desc: "Proven track record in complex cases where others have failed." },
                { title: "Trusted Process", desc: "Fully transparent and secure engagement protocols at every step." },
                { title: "Confidential Handling", desc: "Extreme discretion for high-profile clients with strictly enforced NDAs." },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <h4 className="text-white text-base font-bold mb-1">{feature.title}</h4>
                    <p className="text-on-surface-variant text-sm">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/10 to-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[8rem] opacity-20">
                    verified_user
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl shadow-2xl">
                <p className="text-primary font-headline font-bold text-2xl">
                  98%
                </p>
                <p className="text-on-surface-variant text-xs font-bold">
                  Success Rate
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Partners Logos */}
      <Section className="py-20 relative">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h3 className="text-white/40 text-sm font-bold uppercase tracking-[0.3em]">Supported Platforms</h3>
          </div>
          <PlatformShowcase />
        </ScrollReveal>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        title="Ready to build your"
        highlight="digital legacy?"
        description="Join 500+ elite brands who trust Joinz to architect their digital future."
        ctaText="Explore services"
      />
    </>
  );
}
