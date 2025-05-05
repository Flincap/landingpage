/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0fdf5",
          100: "#dcfce8",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#00C853", // Primary green
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        blue: {
          50: "#eef3ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5bdfd",
          400: "#819afa",
          500: "#6581f5",
          600: "#4f60ea",
          700: "#3e48d1",
          800: "#3542a8",
          900: "#1A237E", // Primary blue
          950: "#141b59",
        },
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#FFD600", // Primary yellow
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        "source-sans-3": ["Source Sans 3", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
