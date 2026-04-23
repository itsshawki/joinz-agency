"use client";

import { motion } from "framer-motion";

export default function AboutHeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5 pointer-events-none">
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-on-surface" />
        ))}
      </div>
      <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Central Orbit / Logo style element */}
      <motion.div 
        className="relative z-10 w-40 h-40 rounded-full border border-primary/30 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute w-full h-full rounded-full border border-primary/10 scale-150" />
        <div className="absolute w-full h-full rounded-full border border-primary/5 scale-200" />
        
        <div className="w-24 h-24 rounded-full bg-surface-container border border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,210,190,0.2)]">
          <span className="material-symbols-outlined text-primary text-5xl">public</span>
        </div>

        {/* Orbiting dots */}
        <div className="absolute top-0 w-3 h-3 bg-primary rounded-full -mt-1.5 shadow-[0_0_10px_rgba(0,210,190,0.8)]" />
        <div className="absolute bottom-0 w-2 h-2 bg-primary/50 rounded-full -mb-1" />
      </motion.div>

      {/* Stat Badges */}
      {[
        { val: "10+", label: "Years Exp.", icon: "military_tech", top: "5%", left: "5%", delay: 0.3 },
        { val: "1000+", label: "Clients", icon: "groups", top: "15%", right: "-5%", delay: 0.5 },
        { val: "500+", label: "Cases", icon: "folder_special", bottom: "15%", left: "-5%", delay: 0.7 },
        { val: "Global", label: "Reach", icon: "language", bottom: "5%", right: "5%", delay: 0.9 },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          className="absolute glass-card rounded-2xl p-4 shadow-xl border border-primary/20 flex flex-col items-center gap-1 min-w-[110px] backdrop-blur-xl bg-surface-container/90"
          style={{ top: stat.top, left: stat.left, right: stat.right, bottom: stat.bottom }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: stat.delay, ease: "easeOut" }}
        >
          <span className="material-symbols-outlined text-primary mb-1">{stat.icon}</span>
          <span className="text-on-surface text-2xl font-bold">{stat.val}</span>
          <span className="text-on-surface-variant text-[10px] uppercase tracking-widest">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
