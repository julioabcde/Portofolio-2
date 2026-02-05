module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
        },
        accent: "var(--color-accent)",

        background: {
          DEFAULT: "var(--color-background)",
          secondary: "var(--color-background-secondary)",
        },
        surface: "var(--color-surface)",

        foreground: "var(--color-text)",
        muted: "var(--color-text-secondary)",
        border: "var(--color-border)",
      },

      boxShadow: {
        glow: "var(--shadow-glow)",
        card: "var(--shadow-card)",
      },

      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
      },

      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
