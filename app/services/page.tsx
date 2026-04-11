import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import Section from "@/components/Section";
import { serviceCards as originalServiceCards } from "@/lib/services";

export const metadata: Metadata = {
  title: "Expert Digital Solutions | JOINZ Agency",
  description:
    "Expert solutions to establish, protect, and amplify your digital authority across all major platforms.",
};

// Services-page specific service card data with tags and updated copy
const servicesPageCards = [
  {
    ...originalServiceCards[0],
    description: "Get the blue badge you deserve. We handle the complex submission processes for Instagram, Facebook, TikTok, and X, leveraging high-tier media placements and agency connections.",
    tags: ["#AUTHORITY", "#TRUST", "#LEGACY"],
  },
  {
    ...originalServiceCards[1],
    description: "Control your digital narrative. We specialize in suppressing negative search results and promoting positive, high-authority content.",
    tags: ["#NARRATIVE", "#CONTROL"],
  },
  {
    ...originalServiceCards[2],
    description: "Reclaim your lost digital assets. Our specialist team utilizes strategic platform contacts to recover disabled or hacked accounts swiftly and securely.",
  },
  {
    ...originalServiceCards[3],
    description: "Secure your unique handle. We utilize official trademark channels to claim inactive or squatted usernames across all major social networks.",
  },
  {
    ...originalServiceCards[4],
    description: "Architect your visual legacy. We build premium identity systems and core messaging architectures that command respect and radiate authority.",
  },
  {
    ...originalServiceCards[5],
    description: "Engineering high-performance digital vaults. Bespoke, ultra-fast, and secure web experiences tailored for conversion and elite aesthetic impact.",
  },
  {
    ...originalServiceCards[6],
    description: "Master the global newsroom. Secure high-tier editorial features and press placements in the world's most prestigious publications.",
  },
  {
    ...originalServiceCards[7],
    description: "Engineered audience amplification. Data-driven growth strategies designed to scale your reach and authority through algorithm-compliant acceleration.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        tagline="Curated excellence"
        title={
          <>
            Expert Digital <span className="text-neon">Solutions</span>
          </>
        }
        description="Expert solutions to establish, protect, and amplify your digital authority across all major platforms."
        ctaText="Get started"
        ctaHref="/contact"
      />

      <Section containerLow>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesPageCards.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 80}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="NEED A CUSTOM"
        highlight="SOLUTION?"
        description="Our services are modular. Combine multiple capabilities for a comprehensive digital strategy."
        ctaText="TALK TO A STRATEGIST"
      />
    </>
  );
}
