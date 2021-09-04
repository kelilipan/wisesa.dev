import React from "react";
import style from "./ThemeSwitcher.module.css";
import { FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

//TODO: to typescript
const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      <input
        checked={isDark}
        type="checkbox"
        className={style.checkbox}
        id="theme-switcher"
        onChange={toggleColorMode}
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
    </div>
  );
};

export default ThemeSwitcher;
