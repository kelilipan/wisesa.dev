import React from "react";
import style from "./ThemeSwitcher.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { Box, useColorMode } from "@chakra-ui/react";
//TODO: to typescript
const ThemeSwitcher = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box {...props}>
      <input
        defaultChecked={isDark}
        type="checkbox"
        className={style.checkbox}
        id="theme-switcher"
        onClick={toggleColorMode}
        aria-label="theme switcher"
      />
      <label
        className={style.label}
        htmlFor="theme-switcher"
        style={{
          background: isDark ? "#4A5568" : "#CBD5E0",
        }}
      >
        <FaMoon color="#f1c40f" />
        <FaSun color="#f39c12" />
        <div className={style.ball}></div>
      </label>
    </Box>
  );
};

export default ThemeSwitcher;
