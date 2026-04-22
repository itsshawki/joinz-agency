"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ServiceShowcaseItem {
  slug: string;
  icon: string;
  title: string;
  label: string;
  description: string;
  statsValue?: string;
  statsLabel?: string;
  keywords?: string[];
}

function ServiceRow({
  service,
  index,
}: {
  service: ServiceShowcaseItem;
  index: number;
}) {
  const isLeft = index % 2 === 0;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className="group block perspective-1000"
        id={`home-service-${service.slug}`}
      >
        <div
          className={`
            service-showcase-card relative overflow-hidden
            min-h-[380px] flex flex-col md:flex-row
            rounded-[32px]
            bg-white/[0.02] backdrop-blur-2xl
            border border-white/[0.06]
            shadow-[0_0_40px_rgba(0,0,0,0.3)]
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            hover:translate-y-[-8px] hover:border-white/[0.12]
            hover:shadow-[0_20px_80px_rgba(0,255,180,0.12)]
            ${!isLeft ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* ── Background Layers ── */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
            <div 
              className={`absolute inset-0 bg-gradient-to-r from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} 
            />
            <div className="absolute -top-[20%] -left-[10%] w-[40%] h-[60%] bg-primary/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />
          </div>

          {/* ── Text Content Side (55%) ── */}
          <div className="relative z-10 flex-[0.55] px-8 py-10 md:px-14 md:py-14 flex flex-col justify-center">
            {/* Service label */}
            <motion.span 
              variants={itemVariants}
              className="inline-flex items-center gap-2 text-primary text-[0.75rem] font-bold uppercase tracking-[0.3em] mb-6"
            >
              <span className="w-8 h-[1px] bg-primary/30" />
              {service.label}
            </motion.span>

            {/* Title */}
            <motion.div variants={itemVariants} className="flex items-center gap-5 mb-6">
              <h3 className="font-headline font-extrabold text-3xl md:text-[2.5rem] text-white leading-[1.1] tracking-[-0.03em]">
                {service.title}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-on-surface-variant text-lg leading-relaxed mb-10 max-w-[560px] opacity-80"
            >
              {service.description}
            </motion.p>

            {/* CTA + Micro Content */}
            <motion.div variants={itemVariants} className="mt-auto">
              <div className="flex flex-col gap-6">
                <span className="inline-flex items-center gap-3 text-primary text-base font-bold group-hover:gap-5 transition-all duration-500">
                  <span className="text-sm tracking-widest uppercase">Explore Service</span>
                  <span className="material-symbols-outlined text-xl transition-transform duration-500 group-hover:translate-x-2">
                    east
                  </span>
                </span>
                
                {/* Supporting Micro Content */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 opacity-40 group-hover:opacity-70 transition-opacity duration-500">
                  {["Trusted Process", "Elite Support", "Confidential"].map((text) => (
                    <div key={text} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Visual Side (45%) ── */}
          <div
            className={`
              service-visual-side
              relative flex-[0.45] min-h-[300px] md:min-h-full overflow-hidden
              flex items-center justify-center
              border-t md:border-t-0 ${isLeft ? "md:border-l" : "md:border-r"} border-white/[0.04]
              bg-white/[0.01]
            `}
          >
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]">
              <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(22,204,155,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(22,204,155,0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Animated Gradient Orb */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-64 h-64 bg-primary/20 rounded-full blur-[80px]"
            />

            {/* Floating Stats Badge */}
            {service.statsValue && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute top-10 right-10 z-20 glass-card px-5 py-3 rounded-2xl border border-white/10 shadow-2xl"
              >
                <div className="text-primary font-bold text-xl">{service.statsValue}</div>
                <div className="text-[10px] text-white/50 uppercase tracking-tighter font-bold">{service.statsLabel}</div>
              </motion.div>
            )}

            {/* Keywords Stack */}
            {service.keywords && (
              <div className="absolute bottom-10 left-10 z-20 flex flex-col gap-2">
                {service.keywords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 0.4 + (i * 0.1), x: 0 } : {}}
                    transition={{ delay: 0.6 + (i * 0.1) }}
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-white/5 px-3 py-1 rounded-full border border-white/5"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            )}

            {/* Soft Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,204,155,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            {/* Large Watermark Icon */}
            <motion.span 
              animate={{ 
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="material-symbols-outlined text-primary text-[12rem] md:text-[16rem] opacity-[0.04] select-none group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-1000"
            >
              {service.icon}
            </motion.span>

            {/* Motion Particles (Simulated) */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute w-1 h-1 bg-primary rounded-full"
                  style={{
                    top: `${20 + (i * 15)}%`,
                    left: `${15 + (i * 12)}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Corner Light */}
            <div className={`absolute ${isLeft ? "bottom-0 right-0" : "bottom-0 left-0"} w-40 h-40 bg-primary/10 blur-[60px] rounded-full`} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesShowcase({
  services,
}: {
  services: ServiceShowcaseItem[];
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      id="services-showcase"
      className="px-6 md:px-12 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          className="mb-20 md:mb-28 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
            Core Expertise
          </span>
          <h2 className="font-headline font-bold text-4xl md:text-[3.5rem] text-white mb-6 leading-tight">
            Elite Digital <span className="text-neon">Services</span>
          </h2>
          <p className="text-on-surface-variant text-xl max-w-2xl leading-relaxed opacity-70">
            Engineered solutions for high-stakes digital assets. 
            We provide the infrastructure and influence required to dominate your space.
          </p>
        </motion.div>

        {/* Service Rows */}
        <div className="flex flex-col gap-y-12">
          {services.map((service, i) => (
            <ServiceRow key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
