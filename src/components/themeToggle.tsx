"use client";

import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-6 w-6 text-gray-900 dark:text-gray-100"
    >
      {theme !== "dark" ? <IoMoon /> : <IoSunny />}
    </button>
  );
}
