/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#10b981",
          dark: "#059669",
          light: "#34d399",
        },
        accent: {
          DEFAULT: "#059669",
          dark: "#047857",
          light: "#34d399",
        },
        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
        },
        surface: "var(--color-surface)",
        foreground: "var(--color-text)",
        muted: "var(--color-text-secondary)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient": "gradient-shift 5s ease infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "slide-in-left": "slide-in-left 0.6s ease-out forwards",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
