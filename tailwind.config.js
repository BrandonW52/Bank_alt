/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      "ff-primary": ["Nunito", "ui-sans-serif"],
      "ff-secondary": ["Tilt Neon", "ui-sans-serif"],
    },
    colors: {
      "clr-light": "#fff",
      "clr-primary": "#303030",
      "clr-accent": "#ac00ff",
    },
    extend: {},
  },
  plugins: [],
};
