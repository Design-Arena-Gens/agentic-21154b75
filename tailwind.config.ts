import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "serif"]
      },
      colors: {
        brand: {
          50: "#f4f6ff",
          100: "#dce4ff",
          200: "#bcc9ff",
          300: "#8f9cff",
          400: "#5c64ff",
          500: "#3a37ff",
          600: "#261ed9",
          700: "#1f1caa",
          800: "#1d1b83",
          900: "#1d1e68"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(90, 115, 255, 0.35)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(circle at 80% 20%, rgba(90,115,255,0.12), transparent 55%), radial-gradient(circle at 50% 90%, rgba(255,255,255,0.04), transparent 65%)"
      }
    }
  },
  plugins: []
};

export default config;
