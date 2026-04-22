import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Counter from "@/components/Counter";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about JOINZ Agency — a cyber-elite creative agency dedicated to precision engineering and editorial design mastery for elite brands.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Joinz"
        title={
          <>
            Who We <span className="text-neon">Are</span>
          </>
        }
        description="We are the silent partners behind the world's leading digital profiles. Joinz is a premier digital service agency specializing in secure, confidential, and guaranteed social media solutions."
      />

      {/* Story + Expertise */}
      <Section containerLow>
        <div className="grid md:grid-cols-5 gap-8">
          <ScrollReveal className="md:col-span-3">
            <div className="glass-card rounded-3xl p-8 md:p-12 h-full">
              <h2 className="font-headline font-bold text-2xl text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-on-surface-variant leading-relaxed">
                <p>
                  Joinz was built on one simple principle control.
                </p>
                <p>
                  In today&apos;s digital world, your online presence defines your reputation, opportunities, and influence. We created Joinz to give individuals and brands full control over how they appear, grow, and protect themselves online.
                </p>
                <p>
                  Over the years, we&apos;ve developed a strong network across media platforms, legal channels, and private communication lines that allow us to deliver results beyond traditional methods.
                </p>
                <p>
                  Whether it&apos;s securing verification, removing harmful content, or handling sensitive digital issues we operate with discretion, precision, and results-driven execution.
                </p>
                <p>
                  At Joinz, we don&apos;t rely on automated systems or generic support forms. Every case is handled strategically, ensuring the highest success rate possible.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-2" delay={150}>
            <div className="glass-card rounded-3xl p-8 md:p-12 h-full">
              <h2 className="font-headline font-bold text-2xl text-white mb-2">
                Our Expertise
              </h2>
              <span className="text-primary text-sm font-bold mb-6 block">
                10+ Years of Experience
              </span>
              <div className="space-y-4">
                {[
                  { icon: "hexagon", label: "Social Media Verification" },
                  { icon: "auto_awesome", label: "Account Recovery Solutions" },
                  { icon: "verified", label: "Username Claims & Account Claiming" },
                  { icon: "token", label: "Reputation Management & Content Removal" },
                  { icon: "security", label: "Press & Media Publishing" },
                  { icon: "trending_up", label: "Growth & Digital Authority Building" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 text-on-surface-variant leading-relaxed"
                  >
                    <span className="material-symbols-outlined text-primary text-lg">
                      {item.icon}
                    </span>
                    <span className="text-base">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <Counter target="150+" label="Projects Delivered" />
            <Counter target="50+" label="Global Clients" />
            <Counter target="99%" label="Client Satisfaction" />
            <Counter target="8+" label="Years of Excellence" />
          </div>
        </ScrollReveal>
      </Section>

      {/* Differentiators */}
      <Section containerLow>
        <ScrollReveal>
          <div className="mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3 block">
              Our Edge
            </span>
            <h2 className="font-headline font-bold text-[2rem] text-white">
              What Makes Us Different
            </h2>
            <p className="text-on-surface-variant text-lg mt-4 max-w-2xl">
              We operate at the edge of what&apos;s possible, balancing speed with surgical precision.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "architecture",
              title: "Speed Without Compromise",
              desc: "Direct portal access means we bypass level 1 support entirely, cutting response times from months to days.",
            },
            {
              icon: "shield",
              title: "Absolute Confidentiality",
              desc: "We work under strict NDAs. We never boast about our high-profile clients on public forums. Your privacy is paramount.",
            },
            {
              icon: "diamond",
              title: "Result-Driven Assurance",
              desc: "We pre-vet every single case. If we take your case, it means we know we can deliver it.",
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 120}>
              <div className="glass-card rounded-3xl p-8 h-full group transition-all duration-400 hover:-translate-y-2 hover:border-primary/20">
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline font-bold text-xl text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Let's Build Your"
        highlight="Digital Legacy"
        description="Ready to work with a team that treats your brand like a sovereign entity? Let's talk."
        ctaText="Get in touch"
      />
    </>
  );
}
