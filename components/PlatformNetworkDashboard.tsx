"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
  FaSnapchat,
  FaLinkedinIn,
  FaTelegram
} from "react-icons/fa6";

const platforms = [
  { id: 'instagram', name: "Instagram", icon: FaInstagram },
  { id: 'facebook', name: "Facebook", icon: FaFacebookF },
  { id: 'tiktok', name: "TikTok", icon: FaTiktok },
  { id: 'x', name: "X", icon: FaXTwitter },
  { id: 'youtube', name: "YouTube", icon: FaYoutube },
  { id: 'snapchat', name: "Snapchat", icon: FaSnapchat },
  { id: 'linkedin', name: "LinkedIn", icon: FaLinkedinIn },
  { id: 'telegram', name: "Telegram", icon: FaTelegram },
];

export default function PlatformNetworkDashboard() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 md:py-12">
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-10">
        {platforms.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5 }}
          >
            <PlatformCard platform={p} />
          </motion.div>
        ))}
      </div>

      {/* Bottom Compact Stats */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
        <StatPill text="8+ Platforms" />
        <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
        <StatPill text="24/7 Monitoring" />
        <div className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
        <StatPill text="98% Success Rate" />
      </div>
    </div>
  );
}

function PlatformCard({ platform }: { platform: any }) {
  const Icon = platform.icon;
  if (!Icon) return null;

  return (
    <motion.div
      whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.04)" }}
      className="glass-card p-5 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-3 md:gap-4 transition-all duration-300 group shadow-sm hover:border-primary/30 hover:shadow-[0_10px_30px_rgba(0,210,190,0.05)]"
    >
      <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <Icon className="text-2xl md:text-3xl text-on-surface/30 group-hover:text-primary transition-all duration-500 relative z-10" />
        
        {/* Small Active Dot */}
        <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors duration-500 shadow-[0_0_8px_rgba(0,210,190,0)] group-hover:shadow-[0_0_8px_rgba(0,210,190,0.5)]" />
      </div>
      
      <span className="text-[10px] md:text-xs font-black text-on-surface/40 group-hover:text-on-surface uppercase tracking-[0.15em] transition-colors duration-500">
        {platform.name}
      </span>
    </motion.div>
  );
}

function StatPill({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-sm">
      <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,210,190,0.6)]" />
      <span className="text-[9px] md:text-[10px] font-black text-on-surface/60 uppercase tracking-[0.2em]">
        {text}
      </span>
    </div>
  );
}
