import { prismDarkTheme, prismLightTheme } from "@/theme/prism";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Global, css } from "@emotion/react";
import React from "react";
const PrismTheme: React.FC = ({ children }) => {
  const prismThemeCSS = useColorModeValue(prismLightTheme, prismDarkTheme);
  return (
    <>
      <Global
        styles={css`
          ${prismThemeCSS}
        `}
      />
      {children}
    </>
  );
};
export default PrismTheme;
