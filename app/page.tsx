import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import PlatformShowcase from "@/components/PlatformShowcase";
import HomeHeroVisual from "@/components/HomeHeroVisual";
import ServicesShowcase from "@/components/ServicesShowcase";

/**
 * HOME PAGE COPY UPDATE
 * Strictly following provided text-only replacement rules.
 */

// Build premium showcase data from the canonical services list
const homeServices = [
  {
    slug: "verification",
    icon: "verified",
    title: "Social Media Verification",
    label: "Authority Protocol",
    description:
      "Get verified on major platforms and build real trust with your audience. We handle the full process until your badge is approved.",
    statsValue: "98%",
    statsLabel: "Success Rate",
    keywords: ["Official Badge", "Entity Trust", "Global Authority"]
  },
  {
    slug: "reputation",
    icon: "shield",
    title: "Reputation Management",
    label: "Narrative Control",
    description:
      "Take control of what people see when they search your name. We remove harmful content and protect your digital image 24/7.",
    statsValue: "24/7",
    statsLabel: "Monitoring",
    keywords: ["Crisis Control", "Search Shield", "Narrative Fix"]
  },
  {
    slug: "recovery",
    icon: "history",
    title: "Account Recovery",
    label: "Asset Retrieval",
    description:
      "Lost access to your account? We recover hacked or disabled profiles quickly and securely through trusted channels.",
    statsValue: "72h",
    statsLabel: "Avg. Recovery",
    keywords: ["Hacked Restore", "Disabled Appeal", "Access Regained"]
  },
  {
    slug: "username",
    icon: "alternate_email",
    title: "Username Claim",
    label: "Digital Real Estate",
    description:
      "Secure the exact username you need. We use official trademark and platform channels to claim inactive or squatted handles.",
    statsValue: "100%",
    statsLabel: "Direct Claims",
    keywords: ["Inactive Handles", "Trademark Rights", "Handle Transfer"]
  },
  {
    slug: "branding",
    icon: "auto_awesome",
    title: "Branding & Design",
    label: "Identity Architecture",
    description:
      "Build a brand that commands respect. We design high-end visual identities that position you as an authority in your space.",
    statsValue: "Top 1%",
    statsLabel: "Visual Authority",
    keywords: ["Identity Design", "Brand Systems", "Creative Strategy"]
  },
  {
    slug: "webdev",
    icon: "code",
    title: "Website Development",
    label: "Digital Engineering",
    description:
      "High-performance digital presence. We engineer fast, secure, and beautiful websites tailored for elite conversion.",
    statsValue: "100/100",
    statsLabel: "Performance",
    keywords: ["Next.js", "Turbo Load", "Digital Vault"]
  },
  {
    slug: "pr-media",
    icon: "article",
    title: "PR & Media",
    label: "Media Operations",
    description:
      "Get featured in prestigious publications. We secure editorial coverage to build credibility and establish your global presence.",
    statsValue: "200+",
    statsLabel: "Media Outlets",
    keywords: ["Forbes", "Bloomberg", "Editorial", "Visibility"]
  },
  {
    slug: "growth",
    icon: "trending_up",
    title: "Growth & Engagement",
    label: "Amplification Engine",
    description:
      "Scale your audience sustainably. Data-driven strategies designed to grow your influence and build loyal communities.",
    statsValue: "Real",
    statsLabel: "Organic Reach",
    keywords: ["Targeted Growth", "High Engagement", "Loyal Community"]
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Digital Authority Agency"
        title={
          <>
            Take Full Control
            <br />
            of Your <span className="text-neon">Digital Presence</span>
          </>
        }
        description="We help elite individuals and brands get verified, protect their digital assets, and build a powerful online reputation with absolute discretion."
        ctaText="Explore Services"
        ctaHref="/services"
        secondaryCta="Get in Touch"
        secondaryCtaHref="/contact"
        rightContent={<HomeHeroVisual />}
      />

      {/* Services Section — Premium Alternating Layout */}
      <ServicesShowcase services={homeServices} />

      {/* Stats Section */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-3xl md:text-[2.5rem] text-on-surface mb-4 leading-tight">
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
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
              Why Joinz
            </span>
            <h2 className="font-headline font-bold text-3xl md:text-[2.5rem] text-on-surface mb-6 leading-tight">
              Built on Trust, Delivered with <span className="text-neon">Precision</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
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
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-primary text-lg">
                      check_circle
                    </span>
                  </div>
                  <div>
                    <h4 className="text-on-surface text-base font-bold mb-1">{feature.title}</h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/8 to-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-[8rem] opacity-15">
                    verified_user
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl shadow-2xl">
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
            <h3 className="text-on-surface-variant/40 text-xs font-bold uppercase tracking-[0.3em]">Supported Platforms</h3>
          </div>
          <PlatformShowcase />
        </ScrollReveal>
      </Section>

      {/* Closing CTA */}
      <ClosingCta
        title="Ready to Build Your"
        highlight="Digital Legacy?"
        description="Join 500+ elite brands who trust Joinz to architect their digital future."
        ctaText="Explore Services"
        ctaHref="/services"
      />
    </>
  );
}
