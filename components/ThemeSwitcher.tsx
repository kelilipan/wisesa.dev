import { Switch } from "@headlessui/react";
import clsx from "clsx";

import { useTheme } from "next-themes";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <Switch
      checked={isDark}
      onChange={() => setTheme(isDark ? "light" : "dark")}
      className={`${
        isDark ? "bg-light" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable dark mode</span>
      <span
        className={clsx(
          isDark ? "translate-x-6" : "translate-x-1",
          `inline-block w-4 h-4 transform bg-white rounded-full transition duration-150 ease-in-out`
        )}
      />
    </Switch>
  );
};
export default ThemeSwitcher;
