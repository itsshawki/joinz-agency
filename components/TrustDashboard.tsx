"use client";

import { motion } from "framer-motion";

export default function TrustDashboard() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto perspective-1000 p-6 md:p-10">
      {/* Background Decorative Rings (Outer) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-primary/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
      </div>

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, rotateY: 5 }}
        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative aspect-[4/3] glass-card rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 lg:p-10 flex flex-col justify-between border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
      >
        {/* Background Clipping Layer for Inner Glows */}
        <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] overflow-hidden pointer-events-none">
          {/* Inner Glows */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/15 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          
          {/* Dynamic Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" 
            style={{ 
              backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        {/* Top Header Section */}
        <div className="relative z-10 flex justify-between items-start">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/15 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(0,210,190,0.3)]">
              <span className="material-symbols-outlined text-primary text-xl md:text-2xl animate-pulse">shield</span>
            </div>
            <div>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-0.5 md:mb-1">Infrastructure</p>
              <p className="text-on-surface text-sm md:text-base font-bold leading-tight">Trusted Protocol</p>
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl shadow-lg"
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span className="text-primary text-[10px] md:text-xs font-black tracking-wide">98% SUCCESS</span>
            </div>
          </motion.div>
        </div>

        {/* Central Visualization Section */}
        <div className="relative flex-1 flex items-center justify-center my-4 md:my-0">
          <div className="relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56">
            {/* Animated Radar Rings */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ scale: 1.8, opacity: 0 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: "easeOut",
                }}
                className="absolute inset-0 border border-primary/30 rounded-full"
              />
            ))}
            
            {/* Core Dashboard UI */}
            <div className="relative z-10 w-full h-full rounded-full border border-primary/20 bg-primary/5 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-[inset_0_0_40px_rgba(0,210,190,0.15)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="material-symbols-outlined text-primary text-3xl md:text-4xl lg:text-5xl mb-1 md:mb-2 opacity-80"
              >
                radar
              </motion.span>
              <p className="text-[10px] md:text-[11px] font-black tracking-[0.3em] text-primary/80 uppercase mb-0.5">Secure</p>
              <p className="text-on-surface text-[13px] md:text-[15px] font-black tracking-widest">NETWORK</p>
              
              {/* Scanning Line */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_10px_rgba(0,210,190,0.5)] z-20"
              />
            </div>

            {/* Floating Intelligence Badges - Desktop/Tablet Positions */}
            <div className="hidden sm:block">
              <FloatingBadge text="Fast Results" icon="bolt" position={{ top: "0%", left: "-15%" }} delay={0} />
              <FloatingBadge text="Confidential" icon="visibility_off" position={{ top: "0%", right: "-15%" }} delay={0.5} />
              <FloatingBadge text="Verified Access" icon="verified" position={{ bottom: "0%", left: "-15%" }} delay={1} />
              <FloatingBadge text="Elite Support" icon="headset_mic" position={{ bottom: "0%", right: "-15%" }} delay={1.5} />
            </div>

            {/* Mobile Mini Badges - Scaled down */}
            <div className="sm:hidden">
              <FloatingBadge text="Fast" icon="bolt" position={{ top: "-5%", left: "5%" }} delay={0} mobile />
              <FloatingBadge text="Secure" icon="visibility_off" position={{ top: "-5%", right: "5%" }} delay={0.5} mobile />
              <FloatingBadge text="Verified" icon="verified" position={{ bottom: "-5%", left: "5%" }} delay={1} mobile />
              <FloatingBadge text="Support" icon="headset_mic" position={{ bottom: "-5%", right: "5%" }} delay={1.5} mobile />
            </div>
          </div>
        </div>

        {/* Bottom Metrics Section */}
        <div className="relative z-10 space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <ProgressBar label="Case Resolution" value={98} delay={0.2} />
            <ProgressBar label="Client Privacy" value={100} delay={0.4} />
            <ProgressBar label="Delivery Speed" value={94} delay={0.6} />
          </div>
          
          <div className="flex justify-between items-center pt-2 md:pt-4 border-t border-white/5">
            <div className="flex gap-1">
               {[1, 2, 3, 4, 5].map(i => (
                 <div key={i} className="w-1 h-3 rounded-full bg-primary/20" />
               ))}
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/5 border border-primary/20 shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,210,190,1)]" />
              <span className="text-[10px] md:text-[11px] font-black text-on-surface uppercase tracking-widest">Active System</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface FloatingBadgeProps {
  text: string;
  icon: string;
  position: any;
  delay: number;
  mobile?: boolean;
}

function FloatingBadge({ text, icon, position, delay, mobile }: FloatingBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay },
        opacity: { duration: 0.5, delay: 0.5 + delay },
        scale: { duration: 0.5, delay: 0.5 + delay }
      }}
      className={`absolute z-20 flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl md:rounded-2xl bg-surface-container-highest/80 border border-white/10 shadow-2xl backdrop-blur-2xl pointer-events-none whitespace-nowrap`}
      style={position}
    >
      <span className="material-symbols-outlined text-primary text-sm md:text-base">{icon}</span>
      <span className="text-[10px] md:text-xs font-bold text-on-surface tracking-wide">{text}</span>
    </motion.div>
  );
}

function ProgressBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <div className="flex justify-between items-end">
        <span className="text-[10px] md:text-[11px] font-black text-on-surface-variant uppercase tracking-[0.15em]">{label}</span>
        <span className="text-[10px] md:text-[11px] font-black text-primary tracking-wider">{value}%</span>
      </div>
      <div className="h-1 md:h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "circOut", delay: 0.8 + delay }}
          className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full relative"
        >
          {/* Animated Shine */}
          <motion.div 
            animate={{ left: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-0 w-20 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg]"
          />
        </motion.div>
      </div>
    </div>
  );
}
