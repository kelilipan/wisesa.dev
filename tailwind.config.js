const { fontFamily, width } = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        doodle: ["Virgil", ...fontFamily.sans],
      },
      fontSize: false,
      minWidth: width,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
