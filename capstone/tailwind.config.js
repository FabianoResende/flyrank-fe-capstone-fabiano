/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0ea5e9",   // cyan-500
          secondary: "#38bdf8", // cyan-400
          dark: "#0f172a",      // slate-900
          light: "#f1f5f9",     // slate-100
        },
      },
      screens: {
        mobile: "375px",
        desktop: "1280px",
      },
      spacing: {
        base: "1rem",
        lg: "2rem",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
