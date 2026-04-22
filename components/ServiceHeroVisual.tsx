"use client";

import { motion } from "framer-motion";

/* ─── Per-service visual config ─── */
interface ServiceVisualConfig {
  icon: string;
  stats: { label: string; value: string; icon: string }[];
  accentLabel: string;
  accentValue: string;
  floatingBadge: string;
  particles: { top: string; left: string; size: number; delay: number }[];
}

const visualConfigs: Record<string, ServiceVisualConfig> = {
  verification: {
    icon: "verified",
    stats: [
      { label: "Profiles Verified", value: "500+", icon: "verified" },
      { label: "Platform Coverage", value: "6+", icon: "devices" },
      { label: "Approval Rate", value: "98%", icon: "check_circle" },
    ],
    accentLabel: "Success Rate",
    accentValue: "98%",
    floatingBadge: "Processing",
    particles: [
      { top: "10%", left: "80%", size: 4, delay: 0 },
      { top: "30%", left: "15%", size: 3, delay: 0.5 },
      { top: "70%", left: "85%", size: 5, delay: 1 },
      { top: "85%", left: "25%", size: 3, delay: 1.5 },
    ],
  },
  reputation: {
    icon: "shield",
    stats: [
      { label: "Threats Neutralized", value: "2.4K+", icon: "security" },
      { label: "Monitoring", value: "24/7", icon: "visibility" },
      { label: "Response Time", value: "<2h", icon: "speed" },
    ],
    accentLabel: "Protection Level",
    accentValue: "Elite",
    floatingBadge: "Monitoring",
    particles: [
      { top: "15%", left: "75%", size: 4, delay: 0.2 },
      { top: "40%", left: "10%", size: 3, delay: 0.7 },
      { top: "65%", left: "90%", size: 5, delay: 0.4 },
      { top: "80%", left: "20%", size: 3, delay: 1.2 },
    ],
  },
  recovery: {
    icon: "history",
    stats: [
      { label: "Accounts Recovered", value: "1.2K+", icon: "restore" },
      { label: "Avg. Recovery", value: "72h", icon: "timer" },
      { label: "Success Rate", value: "95%", icon: "check_circle" },
    ],
    accentLabel: "Recovery Time",
    accentValue: "72h",
    floatingBadge: "Active",
    particles: [
      { top: "12%", left: "82%", size: 4, delay: 0.3 },
      { top: "35%", left: "8%", size: 3, delay: 0.8 },
      { top: "68%", left: "88%", size: 5, delay: 0.1 },
      { top: "82%", left: "30%", size: 3, delay: 1.3 },
    ],
  },
  username: {
    icon: "alternate_email",
    stats: [
      { label: "Handles Claimed", value: "800+", icon: "badge" },
      { label: "Platforms", value: "All Major", icon: "language" },
      { label: "Claim Rate", value: "100%", icon: "verified" },
    ],
    accentLabel: "Direct Claims",
    accentValue: "100%",
    floatingBadge: "Available",
    particles: [
      { top: "8%", left: "78%", size: 4, delay: 0.1 },
      { top: "45%", left: "12%", size: 3, delay: 0.6 },
      { top: "72%", left: "86%", size: 5, delay: 0.3 },
      { top: "88%", left: "22%", size: 3, delay: 1.1 },
    ],
  },
  branding: {
    icon: "auto_awesome",
    stats: [
      { label: "Brands Designed", value: "200+", icon: "palette" },
      { label: "Client Retention", value: "96%", icon: "favorite" },
      { label: "Visual Authority", value: "Top 1%", icon: "workspace_premium" },
    ],
    accentLabel: "Brand Authority",
    accentValue: "Top 1%",
    floatingBadge: "Creating",
    particles: [
      { top: "14%", left: "76%", size: 4, delay: 0.4 },
      { top: "38%", left: "14%", size: 3, delay: 0.9 },
      { top: "66%", left: "84%", size: 5, delay: 0.2 },
      { top: "84%", left: "28%", size: 3, delay: 1.4 },
    ],
  },
  webdev: {
    icon: "code",
    stats: [
      { label: "Sites Engineered", value: "150+", icon: "web" },
      { label: "Lighthouse Score", value: "100/100", icon: "bolt" },
      { label: "Load Time", value: "<1s", icon: "speed" },
    ],
    accentLabel: "Performance",
    accentValue: "100/100",
    floatingBadge: "Building",
    particles: [
      { top: "10%", left: "74%", size: 4, delay: 0.15 },
      { top: "42%", left: "16%", size: 3, delay: 0.65 },
      { top: "70%", left: "82%", size: 5, delay: 0.35 },
      { top: "86%", left: "24%", size: 3, delay: 1.15 },
    ],
  },
  "pr-media": {
    icon: "article",
    stats: [
      { label: "Media Outlets", value: "200+", icon: "newspaper" },
      { label: "Articles Placed", value: "3K+", icon: "edit_note" },
      { label: "Global Reach", value: "50M+", icon: "public" },
    ],
    accentLabel: "Media Network",
    accentValue: "200+",
    floatingBadge: "Publishing",
    particles: [
      { top: "11%", left: "79%", size: 4, delay: 0.25 },
      { top: "36%", left: "11%", size: 3, delay: 0.75 },
      { top: "67%", left: "87%", size: 5, delay: 0.15 },
      { top: "83%", left: "26%", size: 3, delay: 1.25 },
    ],
  },
  growth: {
    icon: "trending_up",
    stats: [
      { label: "Accounts Scaled", value: "1K+", icon: "group" },
      { label: "Avg. Growth", value: "340%", icon: "trending_up" },
      { label: "Engagement Lift", value: "5x", icon: "auto_graph" },
    ],
    accentLabel: "Organic Reach",
    accentValue: "Real",
    floatingBadge: "Growing",
    particles: [
      { top: "13%", left: "77%", size: 4, delay: 0.35 },
      { top: "41%", left: "13%", size: 3, delay: 0.85 },
      { top: "69%", left: "85%", size: 5, delay: 0.25 },
      { top: "81%", left: "27%", size: 3, delay: 1.35 },
    ],
  },
};

const defaultConfig: ServiceVisualConfig = {
  icon: "star",
  stats: [
    { label: "Completed", value: "500+", icon: "check_circle" },
    { label: "Success", value: "98%", icon: "verified" },
    { label: "Support", value: "24/7", icon: "support" },
  ],
  accentLabel: "Success",
  accentValue: "98%",
  floatingBadge: "Active",
  particles: [
    { top: "10%", left: "80%", size: 4, delay: 0 },
    { top: "30%", left: "15%", size: 3, delay: 0.5 },
    { top: "70%", left: "85%", size: 5, delay: 1 },
    { top: "85%", left: "25%", size: 3, delay: 1.5 },
  ],
};

export default function ServiceHeroVisual({ slug }: { slug: string }) {
  const config = visualConfigs[slug] || defaultConfig;

  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      {/* Ambient glow behind everything */}
      <motion.div
        className="absolute -top-10 -right-10 w-72 h-72 bg-primary/8 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Main glass card */}
      <motion.div
        className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        {/* Subtle inner glows */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 space-y-5">
          {/* Stat rows */}
          {config.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 + i * 0.12 }}
            >
              {i > 0 && <div className="h-[1px] bg-white/[0.06] mb-5" />}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary text-xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-bold truncate">{stat.label}</p>
                  <p className="text-primary text-xs font-bold">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Accent bar */}
          <motion.div
            className="mt-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/60 text-xs font-bold">{config.accentLabel}</span>
              <span className="text-primary text-sm font-bold">{config.accentValue}</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dim"
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 1.1 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating badge — top right */}
      <motion.div
        className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-xl z-20"
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold">{config.floatingBadge}</span>
        </div>
      </motion.div>

      {/* Floating icon badge — bottom left */}
      <motion.div
        className="absolute -bottom-3 -left-3 glass-card rounded-2xl p-4 shadow-xl z-20"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
      >
        <span className="material-symbols-outlined text-primary text-2xl">
          {config.icon}
        </span>
      </motion.div>

      {/* Floating particles */}
      {config.particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30 pointer-events-none"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
