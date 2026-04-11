import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { profiles } from "@/lib/profiles";

export default function RealCaseResults() {
  // Define the specific profiles to show in order
  const selectedUsernames = ["@gzy", "@ibrahim_assad", "@ahmed_amwell", "@s500s"];
  const selectedProfiles = selectedUsernames
    .map(username => profiles.find(p => p.username === username))
    .filter(Boolean);

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1440px] mx-auto text-center mt-[80px]">
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="font-headline font-bold text-[2rem] md:text-[2.5rem] text-white tracking-tight mb-3">
            Real Case Results
          </h2>
          <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Proven success stories from real clients.
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {selectedProfiles.map((item, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className="relative bg-[rgba(10,20,25,0.6)] backdrop-blur-[12px] border border-[rgba(0,255,170,0.08)] rounded-[16px] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-6px] hover:border-[rgba(0,255,170,0.3)] overflow-hidden group">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,255,170,0.08),transparent_60%)] pointer-events-none" />

              {/* Profile Image (circle) */}
              {item && (
                <>
                  <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-[rgba(0,255,170,0.3)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Name & Verified Badge */}
                  <div className="relative z-10 flex items-center justify-center gap-1.5 mb-1">
                    <h3 className="font-headline font-bold text-white text-lg tracking-tight">
                      {item.name}
                    </h3>
                    <span
                      className="material-symbols-outlined text-[#00ffaa] text-xl block [filter:drop-shadow(0_0_6_rgba(0,255,170,0.5))]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                  </div>

                  {/* Username */}
                  <p className="relative z-10 text-[rgba(255,255,255,0.6)] text-sm font-medium mb-4">
                    {item.username}
                  </p>

                  {/* Followers Count */}
                  <p className="relative z-10 text-white font-bold text-2xl mb-8">
                    {item.followers}
                  </p>

                  {/* Follow Button */}
                  <a
                    href={`https://www.tiktok.com/${item.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-full py-2.5 px-5 rounded-full bg-transparent border border-[rgba(0,255,170,0.4)] text-[#00ffaa] font-bold text-sm transition-all duration-300 hover:bg-[rgba(0,255,170,0.1)] hover:shadow-[0_0_20px_rgba(0,255,170,0.2)] text-center no-underline"
                  >
                    Follow
                  </a>
                </>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
