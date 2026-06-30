import type { Config } from "tailwindcss";

/**
 * Tokens live as RGB channel triples in app/globals.css (e.g. `--crimson: 192 16 46`)
 * so Tailwind's `<alpha-value>` slot works and `bg-crimson/20` etc. behave correctly.
 * Dark mode swaps the same hues at adjusted lightness via the `.dark` class.
 */
const withAlpha = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: withAlpha("--paper"),
        "paper-raised": withAlpha("--paper-raised"),
        ink: withAlpha("--ink"),
        "ink-soft": withAlpha("--ink-soft"),
        line: withAlpha("--line"),
        crimson: withAlpha("--crimson"),
        "crimson-deep": withAlpha("--crimson-deep"),
        marigold: withAlpha("--marigold"),
        "marigold-soft": withAlpha("--marigold-soft"),
        himal: withAlpha("--himal"),
        jade: withAlpha("--jade"),
        // Traditional lungta (prayer-flag) five colours, for the accent strip.
        "flag-blue": withAlpha("--flag-blue"),
        "flag-white": withAlpha("--flag-white"),
        "flag-red": withAlpha("--flag-red"),
        "flag-green": withAlpha("--flag-green"),
        "flag-yellow": withAlpha("--flag-yellow"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        deva: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderColor: {
        DEFAULT: withAlpha("--line"),
      },
      borderRadius: {
        card: "14px",
        pill: "999px",
      },
      boxShadow: {
        // Hairline-first: very soft, low-spread. We lean on borders, not shadows.
        soft: "0 1px 2px rgb(var(--ink) / 0.04), 0 8px 24px -16px rgb(var(--ink) / 0.18)",
        lift: "0 2px 4px rgb(var(--ink) / 0.06), 0 18px 40px -24px rgb(var(--ink) / 0.28)",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 2.4s linear infinite",
        "fade-in": "fade-in 240ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
