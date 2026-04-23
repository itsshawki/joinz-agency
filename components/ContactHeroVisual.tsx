"use client";

import { motion } from "framer-motion";

export default function ContactHeroVisual() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto aspect-square md:aspect-auto md:h-[400px] flex items-center justify-center">
      <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Support Dashboard Card */}
      <motion.div
        className="glass-card w-full rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-2xl border border-primary/20 bg-surface-container/80 backdrop-blur-[22px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-8 border-b border-outline/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-[#00D2BE] rounded-full" />
              <div className="absolute inset-0 bg-[#00D2BE] rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-on-surface font-bold">Online Now</span>
          </div>
          <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
        </div>

        <div className="space-y-6">
          {[
            { label: "Response Time", value: "< 12 Hour", icon: "timer" },
            { label: "Communication", value: "Secure & Confidential", icon: "lock" },
            { label: "Network", value: "Global Clients", icon: "public" },
            { label: "Support Level", value: "Priority Support", icon: "stars" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
              </div>
              <div>
                <p className="text-on-surface-variant text-xs mb-0.5 font-semibold uppercase tracking-wider">{item.label}</p>
                <p className="text-on-surface text-sm font-bold">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Message Flow Lines */}
        <div className="absolute top-[30%] -right-8 w-24 h-[1px] bg-gradient-to-r from-primary to-transparent opacity-50" />
        <div className="absolute top-[60%] -right-8 w-32 h-[1px] bg-gradient-to-r from-primary to-transparent opacity-30" />
        
        <motion.div 
          className="absolute -right-2 top-[30%] w-10 h-[2px] bg-primary blur-[2px]"
          animate={{ x: [-40, 20, -40], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -right-2 top-[60%] w-12 h-[2px] bg-primary blur-[2px]"
          animate={{ x: [-50, 30, -50], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />

      </motion.div>
    </div>
  );
}
