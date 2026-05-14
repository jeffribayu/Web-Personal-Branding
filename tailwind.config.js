/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "1440px",
        "2xl": "1500px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
        display: ["'Caveat'", "cursive"],
        serif: ["'Playfair Display'", "serif"],
      },
      colors: {
        brand: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        ink: {
          900: "#0c1222",
          800: "#151b2e",
          700: "#1e2740",
          600: "#2a3550",
        },
      },
      boxShadow: {
        soft: "0 12px 40px -8px rgba(6, 182, 212, 0.35)",
        glow: "0 0 0 1px rgba(6,182,212,0.25), 0 22px 55px -18px rgba(6,182,212,0.55)",
        card: "0 20px 50px -18px rgba(12, 18, 34, 0.22)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(100% 70% at 15% 15%, rgba(6,182,212,0.35) 0%, transparent 55%), radial-gradient(80% 60% at 85% 80%, rgba(249,115,22,0.22) 0%, transparent 50%)",
        "teal-gradient":
          "linear-gradient(125deg, #164e63 0%, #0891b2 42%, #06b6d4 72%, #0d9488 100%)",
        "page-mesh":
          "radial-gradient(ellipse 90% 50% at 10% -10%, rgba(6,182,212,0.12) 0%, transparent 50%), radial-gradient(ellipse 70% 40% at 100% 20%, rgba(249,115,22,0.08) 0%, transparent 45%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(12px, -8px) scale(1.05)" },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
