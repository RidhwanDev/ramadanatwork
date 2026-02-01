import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, earthy palette inspired by lantern glow and twilight
        sand: {
          50: "#fdfbf7",
          100: "#f9f5ed",
          200: "#f2e8d5",
          300: "#e8d5b5",
          400: "#d9bc8c",
          500: "#c9a066",
          600: "#b8864a",
          700: "#9a6d3d",
          800: "#7d5836",
          900: "#66482f",
        },
        dusk: {
          50: "#f5f3f7",
          100: "#ebe7ef",
          200: "#d5cedf",
          300: "#b8acc8",
          400: "#9685ab",
          500: "#7a6591",
          600: "#655178",
          700: "#534262",
          800: "#463851",
          900: "#3c3145",
        },
        night: {
          50: "#f4f6f7",
          100: "#e2e8eb",
          200: "#c8d4da",
          300: "#a2b5c0",
          400: "#758e9e",
          500: "#5a7283",
          600: "#4d5f6f",
          700: "#43505d",
          800: "#3c454f",
          900: "#1e2328",
          950: "#13171a",
        },
        crescent: {
          400: "#f5d485",
          500: "#f0c45c",
          600: "#e5a832",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "lantern-glow":
          "radial-gradient(ellipse at top, rgba(245, 212, 133, 0.15) 0%, transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
