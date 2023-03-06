/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        black01: "#151515",
        black02: "#242424",
        black03: "rgba(0,0,0,0)",
        black04: "rgba(0,0,0,0.75)",
        white: "rgba(255,255,255,1)",
        white02: "rgba(255,255,255,0)",
        grey: "#D9D9D9",
        green: "rgba(78,225,160,1)",
        green02: "rgba(78,225,160,0)",
      },
      fontFamily: {
        font: "Space Grotesk",
      },
      screens: {
        small: "0px",
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
