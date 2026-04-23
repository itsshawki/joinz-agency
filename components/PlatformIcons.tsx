"use client";

/**
 * PlatformIcons — Client Component
 *
 * react-icons uses CommonJS internally. When imported directly in a Next.js
 * Server Component under Turbopack, it causes a fatal runtime crash:
 *   "Runtime TypeError: Error in input stream"
 *
 * Isolating react-icons inside a "use client" component fixes the crash
 * because client bundles are handled by webpack/esbuild, not Turbopack's
 * server-side module graph.
 */

import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiX,
  SiYoutube,
  SiSnapchat,
} from "react-icons/si";

const platforms = [
  { Icon: SiInstagram, name: "Instagram", delay: "0s",   offset: "-translate-y-2" },
  { Icon: SiFacebook,  name: "Facebook",  delay: "0.2s", offset: "translate-y-4"  },
  { Icon: SiTiktok,    name: "TikTok",    delay: "0.4s", offset: "-translate-y-4" },
  { Icon: SiX,         name: "X / Twitter", delay: "0.1s", offset: "translate-y-0" },
  { Icon: SiYoutube,   name: "YouTube",   delay: "0.3s", offset: "translate-y-2"  },
  { Icon: SiSnapchat,  name: "Snapchat",  delay: "0.5s", offset: "-translate-y-1" },
];

export default function PlatformIcons() {
  return (
    <div className="relative z-10 flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto">
      {platforms.map(({ Icon, name, delay, offset }) => (
        <div
          key={name}
          className={`group relative flex flex-col items-center transition-all duration-500 ease-out hover:z-20 ${offset}`}
        >
          {/* Premium Badge Wrapper */}
          <div
            className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center rounded-[2rem] bg-surface-container border border-outline/20 transition-all duration-300 group-hover:scale-110 group-hover:border-primary/50 group-hover:shadow-[0_0_60px_rgba(0,210,190,0.25)] animate-float overflow-hidden backdrop-blur-sm"
            style={{ animationDelay: delay, animationDuration: "6s" }}
          >
            {/* Glass Reflection Highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon */}
            <Icon className="text-4xl md:text-5xl text-on-surface opacity-40 group-hover:opacity-100 group-hover:text-on-surface transition-all duration-300 filter group-hover:drop-shadow-[0_0_15px_rgba(0,210,190,0.8)]" />

            {/* Subtle status dot */}
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary shadow-[0_0_8px_rgba(0,210,190,0.5)] transition-colors" />
          </div>

          {/* Hover Platform Name Label */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:bottom-[-2.5rem] whitespace-nowrap">
            <div className="px-3 py-1 rounded bg-surface-container border border-outline/20 backdrop-blur-md">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                {name}
              </span>
            </div>
          </div>

          {/* Under-Glow Support */}
          <div className="absolute inset-0 -z-10 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </div>
      ))}
    </div>
  );
}
