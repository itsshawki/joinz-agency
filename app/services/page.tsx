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
    tags: ["#AUTHORITY", "#TRUST", "#LEGACY"],
  },
  {
    ...originalServiceCards[1],
    description: "Take control of what people see when they search your name. We remove harmful content and protect your digital image 24/7.",
    tags: ["#NARRATIVE", "#CONTROL"],
  },
  {
    ...originalServiceCards[2],
    description: "Lost access to your account? We recover hacked or disabled profiles quickly and securely through trusted channels.",
  },
  {
    ...originalServiceCards[3],
    description: "Secure the exact username you need. We use official trademark and platform channels to claim inactive or squatted handles.",
  },
  {
    ...originalServiceCards[4],
    description: "Build a brand that commands respect. We design high-end visual identities that position you as an authority in your space.",
  },
  {
    ...originalServiceCards[5],
    description: "High-performance digital presence. We engineer fast, secure, and beautiful websites tailored for elite conversion.",
  },
  {
    ...originalServiceCards[6],
    description: "Get featured in prestigious publications. We secure editorial coverage to build credibility and establish your global presence.",
  },
  {
    ...originalServiceCards[7],
    description: "Scale your audience sustainably. Data-driven strategies designed to grow your influence and build loyal communities.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Our Services"
        title={
          <>
            Expert Digital <span className="text-neon">Solutions</span>
          </>
        }
        description="Expert solutions to establish, protect, and amplify your digital authority across all major platforms."
        ctaText="Get Started"
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
        title="Let's Build Your"
        highlight="Digital Authority"
        description="Every digital journey is unique. Schedule a private consultation with our strategy team to identify the exact levers needed for your brand's growth."
        ctaText="Get Started"
      />
    </>
  );
}
