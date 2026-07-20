import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F2EBE2",
          light: "#F8F3EC",
        },
        green: {
          DEFAULT: "#B8D1D1",
        },
        ink: {
          DEFAULT: "#1B1D1B",
          light: "#2A2C29",
        },
        charcoal: {
          DEFAULT: "#222222",
          light: "#2A2C29",
        },
        sage: {
          DEFAULT: "#AFC6C1",
          dark: "#8FAEA8",
        },
        mauve: {
          DEFAULT: "#B7A0BB",
        },
        stone: {
          DEFAULT: "#3D3B36",
          muted: "#75726A",
        },
        border: {
          DEFAULT: "#DCD3C4",
          dark: "#3A3C39",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      borderRadius: {
        pill: "9999px",
        card: "12px",
      },
      spacing: {
        section: "6rem",
        "section-lg": "8rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
