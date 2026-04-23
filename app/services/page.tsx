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
    description: "Get verified on major platforms and build real trust with your audience. We handle the full process until your badge is approved.",
    tags: ["AUTHORITY", "TRUST", "LEGACY"],
  },
  {
    ...originalServiceCards[1],
    description: "Take control of what people see when they search your name. We remove harmful content and protect your digital image 24/7.",
    tags: ["CONTROL", "NARRATIVE", "PRIVACY"],
  },
  {
    ...originalServiceCards[2],
    description: "Lost access to your account? We recover hacked or disabled profiles quickly and securely through trusted channels.",
    tags: ["RECOVERY", "SECURITY", "ASSET"],
  },
  {
    ...originalServiceCards[3],
    description: "Secure the exact username you need. We use official trademark and platform channels to claim inactive or squatted handles.",
    tags: ["IDENTITY", "ASSET", "TRADEMARK"],
  },
  {
    ...originalServiceCards[4],
    description: "Build a brand that commands respect. We design high-end visual identities that position you as an authority in your space.",
    tags: ["DESIGN", "IDENTITY", "PREMIUM"],
  },
  {
    ...originalServiceCards[5],
    description: "High-performance digital presence. We engineer fast, secure, and beautiful websites tailored for elite conversion.",
    tags: ["ENGINEERING", "NEXT.JS", "SPEED"],
  },
  {
    ...originalServiceCards[6],
    description: "Get featured in prestigious publications. We secure editorial coverage to build credibility and establish your global presence.",
    tags: ["MEDIA", "PR", "VISIBILITY"],
  },
  {
    ...originalServiceCards[7],
    description: "Scale your audience sustainably. Data-driven strategies designed to grow your influence and build loyal communities.",
    tags: ["GROWTH", "ORGANIC", "ENGAGEMENT"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Expertise"
        title={
          <>
            Elite Digital <span className="text-neon">Capabilities</span>
          </>
        }
        description="Engineered solutions for high-stakes digital assets. We provide the infrastructure and influence required to dominate your space."
        ctaText="Get Started"
        ctaHref="/contact"
      />

      <Section containerLow>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {servicesPageCards.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 60}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <ClosingCta
        title="Let's Build Your"
        highlight="Digital Authority"
        description="Every digital journey is unique. Schedule a private consultation with our strategy team to identify the exact levers needed for your brand's growth."
        ctaText="Get Started"
      />
    </>
  );
}
