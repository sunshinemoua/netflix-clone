/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          450: "#303030",
        },
        black: {
          550: "#141414",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      "netflix-font": [
        "Netflix Sans",
        "Helvetica Neue",
        "Segoe UI",
        "Roboto",
        "Ubuntu",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
