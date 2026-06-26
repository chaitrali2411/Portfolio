import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        surface: "#FFFFFF",
        card: "#FFFFFF",
        primary: "#2563EB",
        secondary: "#3B82F6",
        accent: "#60A5FA",
        foreground: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 70% 55% at 50% -15%, rgba(37, 99, 235, 0.1), transparent 65%)",
        "hero-blob":
          "radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.25), transparent 45%)",
        "section-glow":
          "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37, 99, 235, 0.05), transparent 70%)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)",
        "card-hover":
          "0 4px 16px rgba(0, 0, 0, 0.06), 0 12px 32px rgba(37, 99, 235, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
        soft: "0 2px 8px rgba(0, 0, 0, 0.04)",
        nav: "0 1px 3px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.03)",
      },
      borderRadius: {
        card: "1.25rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
