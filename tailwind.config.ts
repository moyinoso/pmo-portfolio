import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0B0D",
          soft: "#131316",
          line: "rgba(236, 233, 226, 0.09)",
        },
        paper: {
          DEFAULT: "#ECE8E0",
          dim: "#A39E93",
        },
        brass: {
          DEFAULT: "#C6A15B",
          soft: "#8C7342",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        shell: "74rem",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        pulseDot: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        pulseDot: "pulseDot 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
