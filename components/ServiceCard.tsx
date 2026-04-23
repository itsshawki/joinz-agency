"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  slug: string;
  icon: string;
  title: string;
  description: string;
  tags?: string[];
}

export default function ServiceCard({
  slug,
  icon,
  title,
  description,
  tags,
}: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`} className="group block perspective-1000 h-full" id={`service-card-${slug}`}>
      <div className={`
        relative overflow-hidden h-full flex flex-col
        rounded-[32px]
        bg-surface-container backdrop-blur-[22px] saturate-[160%]
        border border-outline/10
        shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_10px_40px_rgba(0,0,0,0.18)]
        transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        hover:translate-y-[-10px] hover:border-primary/30
        hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_80px_rgba(0,255,180,0.12)]
      `}>
        {/* ── Background Layers ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 noise-bg opacity-[0.03] z-0" />
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" 
          />
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/[0.02] blur-[80px] rounded-full pointer-events-none z-0" />
        </div>

        {/* ── Large Watermark Icon ── */}
        <div className="absolute -right-4 -top-4 pointer-events-none overflow-hidden select-none">
          <span className="material-symbols-outlined text-primary text-[8rem] opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-110 group-hover:rotate-12 transition-all duration-1000 ease-out">
            {icon}
          </span>
        </div>

        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
          {/* Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-surface-container/50 border border-outline/10 flex items-center justify-center mb-8 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-sm">
            <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform duration-500">
              {icon}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-headline font-extrabold text-2xl text-on-surface mb-4 leading-tight tracking-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-on-surface-variant text-sm leading-relaxed mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {description}
          </p>

          {/* Tags */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span key={tag} className="text-[9px] font-bold tracking-widest text-primary/60 bg-primary/5 px-2 py-1 rounded-md border border-primary/10">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA Link */}
          <div className="mt-auto pt-4 flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest group-hover:gap-5 transition-all duration-500">
            <span>Explore Service</span>
            <span className="material-symbols-outlined text-base transition-transform duration-500 group-hover:translate-x-1">
              east
            </span>
          </div>
        </div>

        {/* Soft Radial Glow on Hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,210,190,0.06)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
      </div>
    </Link>
  );
}
