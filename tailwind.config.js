/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          40: "FFF",
          250: "#e5e5e5",
        },
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
      "netflix-reg": ["netflix-reg", "sans-serif"],
      "netflix-light": ["netflix-light", "sans-serif"],
      "netflix-med": ["netflix-med", "sans-serif"],

      "netflix-bold": ["netflix-bold", "sans-serif"],
    },
  },
  plugins: [],
};
