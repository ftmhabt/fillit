import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 3s ease-in-out infinite",
        "wave-reverse": "wave-reverse 4s ease-in-out infinite",
        gradient: "gradient 3s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-25px)" },
          "100%": { transform: "translateX(0)" },
        },
        "wave-reverse": {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(25px)" },
          "100%": { transform: "translateX(0)" },
        },
        gradient: {
          "0%": { stopColor: "#4facfe" },
          "50%": { stopColor: "#00f2fe" },
          "100%": { stopColor: "#4facfe" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
