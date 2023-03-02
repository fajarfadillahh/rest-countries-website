/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        gray: {
          900: "hsl(200, 15%, 8%)",
          800: "hsl(207, 26%, 17%)",
          700: "hsl(209, 23%, 22%)",
          600: "hsl(0, 0%, 52%)",
          500: "hsl(0, 0%, 98%)",
        },
      },
      letterSpacing: {
        tighter: "0.92px",
      },
      boxShadow: {
        sm: "0 6px 16px rgba(0,0,0,0.05)",
        md: "0 6px 16px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
