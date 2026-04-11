# Design System Specification: Cyber-Elite Editorial

## 1. Overview & Creative North Star
The **Creative North Star** for this design system is **"The Sovereign Architect."** 

This system is designed to evoke the feeling of a high-security digital vault combined with the refined aesthetics of a premium editorial magazine. We are moving away from "standard SaaS" layouts. Instead of centered, predictable grids, we employ **intentional asymmetry** and **tonal depth** to convey power and exclusivity. 

The experience should feel "heavy" yet fluid—like navigating through layers of smoked glass and neon light. Every element is a deliberate architectural choice, emphasizing that this digital agency operates at a level of precision and security far beyond the ordinary.

---

## 2. Colors: Tonal Sovereignty
Our palette is rooted in deep, obsidian depths with a singular, high-voltage accent.

### The Palette
*   **Background (Core):** `#080f12` (Surface) - The foundation of the system.
*   **Secondary Dark:** `#1c3a44` (Secondary Container) - Used for mid-tier depth.
*   **Primary Accent:** `#16cc9b` (Primary) - Reserved for high-impact calls to action and critical status.
*   **Text (High Emphasis):** `#ffffff` (On-Surface) - Pure white for maximum readability against the dark void.

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for defining sections. Borders create a "boxed-in" feeling that looks amateur. Boundaries must be defined through **Background Color Shifts**. To separate a section, transition from `surface` to `surface-container-low`.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the following hierarchy to "stack" importance:
1.  **Bottom Layer:** `surface` (#080f12) - Global background.
2.  **Mid Layer:** `surface-container` (#121b1e) - Primary content blocks.
3.  **Floating Layer:** `surface-variant` (#1d272b) - Cards and interactive elements.

### The "Glass & Gradient" Rule
Floating elements must utilize **Glassmorphism**. Use a semi-transparent `secondary_container` with a `backdrop-filter: blur(20px)`. 
*   **Signature Texture:** Main CTAs should not be flat. Apply a subtle linear gradient from `primary` (#64ffca) to `primary_container` (#06c897) at a 135-degree angle to provide a "lit from within" glow.

---

## 3. Typography: Authoritative Clarity
We pair the structural integrity of **Manrope** for headings with the functional precision of **Inter** for data and body text.

*   **Display (Manrope, Bold):** 3.5rem. Use for hero statements. Tracking: -2%.
*   **Headline (Manrope, Bold):** 2rem. Used for section intros. Always sentence case to maintain an editorial feel.
*   **Title (Inter, Semi-Bold):** 1.125rem. For card titles and navigation.
*   **Body (Inter, Regular):** 1rem. Line height: 1.6. Use `on_surface_variant` (#a5acb0) for secondary body text to reduce visual noise.
*   **Label (Inter, Bold, All-Caps):** 0.75rem. Tracking: 0.1em. Reserved for small metadata or "kicker" text above headlines.

---

## 4. Elevation & Depth: Tonal Layering
Depth is achieved through light and opacity, never through harsh outlines.

*   **The Layering Principle:** Place a `surface_container_lowest` (#000000) card on a `surface_container` (#121b1e) background to create a "recessed" or "carved" look. 
*   **Ambient Shadows:** For floating glass cards, use a shadow color of `primary` at 5% opacity with a blur radius of 40px. This mimics the neon glow reflecting off a dark surface.
*   **The "Ghost Border":** If containment is required for accessibility, use the `outline_variant` (#42494c) at **15% opacity**. This creates a hint of an edge that disappears into the background.
*   **Abstract Accents:** Incorporate ultra-thin (0.5px) curved lines using the `primary` color at 30% opacity. These should sweep across the background to guide the eye and break the rigidity of the grid.

---

## 5. Components

### Buttons
*   **Primary:** Rounded (Radius: `full`). Gradient fill (`primary` to `primary_container`). Drop shadow: 10px blur, `primary` color at 20% opacity. Text: `on_primary` (Bold).
*   **Secondary:** Ghost style. Transparent fill, "Ghost Border" (15% opacity white). On hover: Subtle `surface_bright` fill.
*   **Tertiary:** Text-only. `primary` color. No underline; use an arrow icon (minimal green line) that shifts 4px on hover.

### Glassmorphism Cards
*   **Base:** `surface_variant` at 60% opacity.
*   **Effect:** `backdrop-filter: blur(16px)`.
*   **Edge:** A "Highlight Stroke" on the top and left edges only (1px, white at 10% opacity) to catch the "light."

### Input Fields
*   **Surface:** `surface_container_lowest`. 
*   **Border:** None. 
*   **Focus State:** A 1px bottom border of `primary` and a subtle `primary` outer glow.
*   **Labels:** Use `label-md` floating above the input.

### Lists & Navigation
*   **No Dividers:** Separate list items using `spacing-md` (0.75rem) or by alternating background tints very subtly. 
*   **Icons:** Use "Minimal Green Line Icons." Stroke width: 1.5px. Color: `primary`.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. A hero headline should be slightly offset from the body text to create a custom, high-end feel.
*   **Do** embrace negative space. If a section feels crowded, double the spacing.
*   **Do** use "Primary" color sparingly. It is a laser, not a paint bucket.

### Don't:
*   **Don't** use 100% opaque borders. It breaks the "Sovereign Architect" illusion.
*   **Don't** use standard drop shadows. Always tint shadows with the surface or accent color.
*   **Don't** use generic iconography. If the icon isn't a custom-weighted green line icon, it doesn't belong in this system.
*   **Don't** center-align everything. Use left-aligned editorial layouts to maintain the "Elite SaaS" aesthetic.