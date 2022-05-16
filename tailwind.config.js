const { fontFamily, width } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ["./pages/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        doodle: ["Virgil", ...fontFamily.sans],
      },
      colors: {
        dark: "#1d1d1d",
        light: "#2f2f2f",
        gray: colors.neutral,
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
      },
      fontSize: false,
      minWidth: width,
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#202020",
            "h1,h2,h3,h4,h5,h6": {
              a: {
                fontWeight: "bold",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.white"),
              code: { color: theme("colors.blue.400") },
            },
            blockquote: {
              borderLeftColor: theme("colors.gray.700"),
              color: theme("colors.gray.300"),
            },
            "h1,h2,h3,h4,h5,h6": {
              color: theme("colors.white"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            ol: {
              li: {
                "&:before": { color: theme("colors.gray.500") },
              },
            },
            ul: {
              li: {
                "&:before": { backgroundColor: theme("colors.gray.500") },
              },
            },
            strong: { color: theme("colors.gray.300") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
          },
        },
      }),
    },
    cursor: {
      pencil: "url('/pencil.png') 0 24, auto",
      "pencil-dark": "url('/pencil-invert.png') 0 24, auto",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
