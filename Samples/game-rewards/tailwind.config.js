/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      "tower-gray": {
        50: "#f5f8f6",
        100: "#dfe8e4",
        200: "#bfd0c9",
        300: "#a8bdb5",
        400: "#728f86",
        500: "#57756a",
        600: "#445d54",
        700: "#394c46",
        800: "#313e3a",
        900: "#2b3633",
        950: "#161d1b",
      },
      goblin: {
        50: "#f4faf3",
        100: "#e4f4e4",
        200: "#cbe7cb",
        300: "#a2d3a2",
        400: "#71b771",
        500: "#4d9a4d",
        600: "#3c803c",
        700: "#316431",
        800: "#2b502b",
        900: "#254225",
        950: "#102311",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
