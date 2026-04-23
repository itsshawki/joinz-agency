"use client";

export default function HomeHeroVisual() {
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      {/* Main card */}
      <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[60px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Mini stat cards */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
            </div>
            <div>
              <p className="text-on-surface text-sm font-bold">Completed Cases</p>
              <p className="text-primary text-xs font-bold">800+ Completed</p>
            </div>
          </div>

          <div className="h-[1px] bg-outline/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">shield</span>
            </div>
            <div>
              <p className="text-on-surface text-sm font-bold">Reputation Protected</p>
              <p className="text-primary text-xs font-bold">24/7 Monitoring</p>
            </div>
          </div>

          <div className="h-[1px] bg-outline/10" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
            </div>
            <div>
              <p className="text-on-surface text-sm font-bold">Growth Engine</p>
              <p className="text-primary text-xs font-bold">Data-Driven Results</p>
            </div>
          </div>

          {/* Success rate bar */}
          <div className="mt-4 p-4 rounded-2xl bg-surface-variant border border-outline/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-on-surface-variant text-xs font-bold">Success Rate</span>
              <span className="text-primary text-sm font-bold">98%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-outline/30 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary to-primary-dim"
                style={{ width: "98%" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs font-bold">Active Now</span>
        </div>
      </div>
    </div>
  );
}
