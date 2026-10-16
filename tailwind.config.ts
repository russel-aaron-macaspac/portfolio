import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#080b12",
        panel: "#101622",
        line: "#202b3d",
        electric: "#4f8cff",
        violet: "#8b5cf6",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(79, 140, 255, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
