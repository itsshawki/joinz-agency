"use client";

import { motion } from "framer-motion";

export default function ServicesPageHeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center">
      {/* Ambient glow behind everything */}
      <div
        className="absolute w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none animate-pulse-glow"
      />

      {/* Main glass card - Dashboard style */}
      <motion.div
        className="glass-card w-full rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl border border-outline/20"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[50px] pointer-events-none" />
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-on-surface-variant text-xs font-bold tracking-widest uppercase mb-1">Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D2BE] animate-pulse" />
              <p className="text-primary font-bold">Active Services</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary/50 text-3xl">dashboard</span>
        </div>

        <div className="space-y-6 mb-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-on-surface font-semibold">Success Rate</span>
              <span className="text-primary font-bold">98%</span>
            </div>
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-[#00a896] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "98%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-on-surface font-semibold">Core Solutions</span>
              <span className="text-primary font-bold">6 Active</span>
            </div>
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-[#00a896] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-on-surface font-semibold">Delivery</span>
              <span className="text-primary font-bold">24/7</span>
            </div>
            <div className="h-1.5 w-full bg-surface-variant rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary to-[#00a896] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.9, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Mini Cards */}
      {[
        { title: "Verification", icon: "verified", top: "-5%", left: "-5%", delay: 0.4 },
        { title: "Reputation", icon: "shield", top: "15%", right: "-10%", delay: 0.6 },
        { title: "Recovery", icon: "history", bottom: "10%", left: "-10%", delay: 0.8 },
        { title: "Branding", icon: "auto_awesome", bottom: "-5%", right: "5%", delay: 1.0 },
      ].map((card, i) => (
        <motion.div
          key={card.title}
          className="absolute glass-card rounded-2xl p-3 shadow-xl flex items-center gap-3 border border-primary/20 backdrop-blur-xl bg-surface-container/90"
          style={{ top: card.top, left: card.left, right: card.right, bottom: card.bottom }}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: card.delay, ease: "easeOut" }}
        >
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-sm">{card.icon}</span>
          </div>
          <span className="text-on-surface text-xs font-bold pr-2">{card.title}</span>
        </motion.div>
      ))}
    </div>
  );
}
