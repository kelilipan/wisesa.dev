import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  // shadows: {
  //   outline: "0 0 0 3px rgba(255, 100, 100, 0.5)",
  // },
  fonts: {
    body: `'Inter',${defaultTheme.fonts.body}`,
    heading: `'Inter',${defaultTheme.fonts.heading}`,
    doodle: `"Virgil",'Inter',-apple-system,BlinkMacSystemFont,"Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif`,
  },
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
        overflowY: "scroll",
      },
      body: {
        color: mode("#202020", "whiteAlpha.900")(props),
        bg: mode("white", "#1d1d1d")(props),
      },
      "::selection": {
        color: mode("black", "black")(props),
        bg: mode("blackAlpha.300", "whiteAlpha.600")(props),
      },
      ".noselect": {
        pointerEvents: "none",
        userSelect: "none",
        webkitUserDrag: "none!important",
        webkitUserSelect: "none",
        webkitTouchCallout: "none",
      },
      "#nprogress .bar": {
        zIndex: 1500,
      },
    }),
  },
});

export default theme;
