import { extendTheme, theme as defaultTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
export default extendTheme({
  config: {
    initialColorMode: "light",
  },
  // shadows: {
  //   outline: "0 0 0 3px rgba(0, 0, 0, 0.2)",
  // },
  fonts: {
    body: `'Inter',${defaultTheme.fonts.body}`,
    heading: `'Inter',${defaultTheme.fonts.heading}`,
  },
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        color: mode("black", "whiteAlpha.900")(props),
        bg: mode("white", "black")(props),
      },
    }),
  },
});
