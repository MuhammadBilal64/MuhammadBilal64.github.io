import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        surface: "#111111",
        elevated: "#171717",
        line: "#262626",
        ink: "#F5F5F5",
        mute: "#A3A3A3",
        dim: "#737373",
        accent: "#6E9FCF",
        ok: "#5FA87A",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        panel: "6px",
      },
      boxShadow: {
        panel: "0 1px 0 rgba(255,255,255,0.03)",
      },
    },
  },
  plugins: [],
};

export default config;
