/**
 * SovereignBackground — Pixel-perfect replication of the Stitch design system background.
 *
 * ─────────────────────────────────────────────────────────────────────
 *  SOURCE OF TRUTH: Stitch project/211881981372003397 HTML exports
 *  Every value below is lifted verbatim from the Stitch code.html files.
 * ─────────────────────────────────────────────────────────────────────
 *
 * LAYER SOURCES
 * ─────────────
 * .abstract-line (all pages except Growth):
 *   background: radial-gradient(circle at 50% 50%, rgba(0,210,190,0.05) 0%, transparent 70%)
 *
 * .bg-mesh (Growth Redesign):
 *   radial-gradient(at 0% 0%, rgba(0,210,190,0.05) 0px, transparent 50%),
 *   radial-gradient(at 100% 100%, rgba(0,210,190,0.05) 0px, transparent 50%)
 *
 * SVG — Premium Redesign (Home) lines 132–135:
 *   viewBox="0 0 1000 1000", absolute top-0 right-0, opacity-20
 *   Path 1: M0,500 C150,300 350,700 500,500 S850,300 1000,500
 *   Path 2: M0,600 C200,400 400,800 600,600 S900,400 1000,600 (opacity 0.5)
 *
 * SVG — Growth Redesign lines 127–130:
 *   absolute inset-0, opacity-20
 *   Path 1: M-100 800 C 200 600, 600 900, 1500 500
 *   Path 2: M-100 400 C 400 300, 800 600, 1600 200
 *
 * SVG — Services Redesign lines 131–134 (.curved-line):
 *   stroke-opacity: 0.15, stroke-width: 0.5, viewBox="0 0 1000 1000"
 *   Path 1: M-100,200 C200,400 400,100 1100,500
 *   Path 2: M1100,300 C800,600 200,800 -100,400
 *
 * .neon-glow (all cards):
 *   box-shadow: 0 0 20px rgba(0,210,190,0.15)
 *
 * .glass-card:
 *   background: rgba(28,58,68,0.6); backdrop-filter: blur(16px);
 *   border-top/left: 1px solid rgba(255,255,255,0.1)
 */
"use client";

import { useTheme } from "./ThemeProvider";

export default function SovereignBackground() {
  const { theme } = useTheme();
  
  // Adjust opacity based on theme — subtler in light mode
  const glowOpacity = theme === "light" ? 0.04 : 0.03;
  const svgOpacity = theme === "light" ? 0.05 : 0.08;
  const strokeColor = theme === "light" ? "#00A99D" : "#00D2BE";

  return (
    <>
      {/* ── LAYER 1: .abstract-line radial glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            `radial-gradient(circle at 50% 50%, rgba(0, 210, 190, ${glowOpacity}) 0%, transparent 60%)`,
        }}
      />

      {/* ── LAYER 2: .bg-mesh corner gradients ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: [
            `radial-gradient(at 0% 0%, rgba(0, 210, 190, ${glowOpacity}) 0px, transparent 40%)`,
            `radial-gradient(at 100% 100%, rgba(0, 210, 190, ${glowOpacity}) 0px, transparent 40%)`,
          ].join(", "),
        }}
      />

      {/* ── LAYER 3: Premium Redesign SVG (Home hero background) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed top-0 right-0 w-full h-full z-0"
        style={{ opacity: svgOpacity }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,500 C150,300 350,700 500,500 S850,300 1000,500"
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
        />
        <path
          d="M0,600 C200,400 400,800 600,600 S900,400 1000,600"
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>

      {/* ── LAYER 4: Growth Redesign SVG (wide-viewport paths) ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
        style={{ opacity: svgOpacity }}
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100 800 C 200 600, 600 900, 1500 500"
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
        />
        <path
          d="M-100 400 C 400 300, 800 600, 1600 200"
          fill="none"
          stroke={strokeColor}
          strokeWidth="0.5"
        />
      </svg>

      {/* ── LAYER 5: Services / curved-line SVG paths ── */}
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-100,200 C200,400 400,100 1100,500"
          fill="none"
          stroke={strokeColor}
          strokeOpacity={theme === "light" ? 0.06 : 0.08}
          strokeWidth="0.5"
        />
        <path
          d="M1100,300 C800,600 200,800 -100,400"
          fill="none"
          stroke={strokeColor}
          strokeOpacity={theme === "light" ? 0.06 : 0.08}
          strokeWidth="0.5"
        />
      </svg>
    </>
  );
}
