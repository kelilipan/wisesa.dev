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
      typography: {
        DEFAULT: {
          css: {
            "h1,h2,h3,h4,h5,h6": {
              a: {
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
          },
        },
      },
    },
    cursor: {
      pencil: "url('/pencil.png') 0 24, auto",
      "pencil-dark": "url('/pencil-invert.png') 0 24, auto",
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require("@tailwindcss/typography")],
};
