import Image from "next/image";
import { profiles } from "@/lib/profiles";

// Duplicate for seamless scroll
const scrollItems = [...profiles, ...profiles];

export default function RecentlyVerified() {
  return (
    <section className="py-24 md:py-32 overflow-hidden border-t border-outline/30 relative z-10 w-full">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scroll-track {
          display: flex;
          gap: 40px;
          animation: scrollLeft 30s linear infinite;
          animation-delay: 0s;
          width: max-content;
          will-change: transform;
          justify-content: flex-start;
          padding: 0 !important;
          margin: 0 !important;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="font-headline font-bold text-[2rem] md:text-[2.5rem] text-on-surface mb-3 tracking-tight">
            Recently <span className="text-neon">Verified</span> Accounts
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real accounts successfully verified by our team.
          </p>
        </div>
      </div>

      {/* Slider Container - Full Width starting from screen edge */}
      <div className="w-full overflow-hidden p-0 m-0">
        <div className="scroll-track pb-12">
          {scrollItems.map((account, i) => (
            <div key={i} className="flex-shrink-0 m-0 p-0">
              <a
                href={`https://www.tiktok.com/${account.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-6 group/item cursor-pointer outline-none"
              >
                {/* Profile Circle with Premium Glow */}
                <div className="relative">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full p-[2px] bg-outline/30 group-hover/item:bg-primary transition-all duration-700">
                    <div className="w-full h-full rounded-full overflow-hidden bg-surface-container border-[3px] border-background relative">
                      <Image
                        src={account.image}
                        alt={account.username}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover opacity-100 transition-all duration-700 scale-100 group-hover/item:scale-110"
                      />
                      {/* Overlay inner border/shadow */}
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] pointer-events-none" />
                    </div>
                  </div>

                  {/* Official Verification Badge (Background Removed) */}
                  <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 scale-100 group-hover/item:scale-125 transition-transform duration-500 z-10">
                    <span className="material-symbols-outlined text-primary text-2xl md:text-3xl block" style={{ fontVariationSettings: "'FILL' 1" }}>
                      verified
                    </span>
                  </div>

                  {/* Background Glow Effect on Hover */}
                  <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />
                </div>

                {/* Account Identity */}
                <div className="text-center transform transition-all duration-500 group-hover/item:translate-y-[-4px]">
                  <h5 className="text-on-surface font-bold text-base md:text-lg mb-1 tracking-tight">
                    {account.username}
                  </h5>
                  <div className="inline-flex items-center px-3 py-1 rounded-full glass-card">
                    <p className="text-on-surface-variant text-[10px] md:text-xs font-label font-semibold">
                      {account.platform}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
