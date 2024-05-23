/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        color: {
          // 100: "#182825ff",
          // 200: "#016fb9ff",
          // 300: "#22aed1ff",
          // 400: "#6d8ea0ff",
          // 500: "#afa98dff",
          100: "#FFEBD2",
          200: "#84DCC6",
          300: "#95A3B3",
          400: "#4B4E6D",
          500: "#222222",
        },
        charcoal: {
          50: "#ECEEEC",
          100: "#D7DAD7",
          200: "#B0B5B0",
          300: "#889188",
          400: "#626A62",
          500: "#3E433E",
          600: "#313531",
          700: "#252825",
          800: "#191A19",
          900: "#0C0D0C",
        },
        tomato: {
          50: "#FFEEEB",
          100: "#FFE1DC",
          200: "#FEBFB3",
          300: "#FEA090",
          400: "#FD7E68",
          500: "#FD6043",
          600: "#FC2803",
          700: "#C01E02",
          800: "#7E1401",
          900: "#420A01",
        },
        negroni: {
          50: "#FDFAF7",
          100: "#FBF5EF",
          200: "#F6E8DA",
          300: "#F2DECA",
          400: "#EDD1B5",
          500: "#E9C7A5",
          600: "#D99E63",
          700: "#C1782F",
          800: "#7F4F1F",
          900: "#422910",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
