import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with JOINZ Agency. Secure contact for elite brands seeking world-class digital architecture, verification, and reputation management.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact Us"
        title={
          <>
            Let&apos;s Build Something{" "}
            <span className="text-neon">Extraordinary</span>
          </>
        }
        description="Ready to elevate your digital presence? Reach out through our secure contact form and a strategist will respond within 24 hours."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <ScrollReveal>
            <div className="space-y-12">
              <ContactForm />
              
              {/* Social Contact Links */}
              <div className="flex flex-col items-center gap-6 pb-4">
                <span className="text-on-surface-variant/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Or contact us directly
                </span>
                <div className="flex items-center gap-8">
                  <a
                    href="https://www.facebook.com/Joinz.Agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant/40 hover:text-primary hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(0,210,190,0.4)] transition-all duration-300 transform"
                    aria-label="Facebook"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/joinz.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant/40 hover:text-primary hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(0,210,190,0.4)] transition-all duration-300 transform"
                    aria-label="Instagram"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 2.67.121 3.943 1.397 4.063 4.063.056 1.265.072 1.648.072 4.851 0 3.203-.016 3.585-.072 4.85-.12 2.662-1.392 3.934-4.063 4.063-1.265.055-1.647.072-4.85.072-3.203 0-3.585-.017-4.85-.072-2.663-.12-3.938-1.39-4.063-4.063-.056-1.265-.072-1.647-.072-4.85 0-3.203.016-3.585.072-4.85.12-2.67 1.397-3.943 4.063-4.063 1.265-.055 1.648-.071 4.85-.071zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/201020366187"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface-variant/40 hover:text-primary hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_0_15px_rgba(0,210,190,0.4)] transition-all duration-300 transform"
                    aria-label="WhatsApp"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.894-5.335 11.897-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              {[
                {
                  icon: "mail",
                  title: "Email",
                  value: "info@joinz.agency",
                  desc: "Encrypted communication available",
                },
                {
                  icon: "schedule",
                  title: "Response Time",
                  value: "Under 24 Hours",
                  desc: "Priority clients receive same-day response",
                },
                {
                  icon: "public",
                  title: "Global Coverage",
                  value: "50+ Countries",
                  desc: "Remote-first with global reach",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-8 flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-primary">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface mb-1">
                      {item.title}
                    </h3>
                    <p className="text-primary font-bold text-lg mb-1">
                      {item.value}
                    </p>
                    <p className="text-on-surface-variant text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}

              {/* Visual accent */}
              <div className="glass-card rounded-2xl p-8 text-center">
                <span className="material-symbols-outlined text-primary text-5xl mb-3">
                  lock
                </span>
                <p className="font-headline font-bold text-on-surface mb-1">
                  Sovereign Security
                </p>
                <p className="text-on-surface-variant text-sm">
                  All communications are encrypted and handled with
                  enterprise-grade security protocols.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </>
  );
}
