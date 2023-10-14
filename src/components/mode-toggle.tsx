"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faRss } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-6 h-6 flex items-center justify-center"
      >
        <span className="sr-only">Toggle mode</span>
        {theme !== "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <Link href="/rss.xml">
        <button className="w-6 h-6 flex items-center justify-center">
          <span className="sr-only">RSS</span>
          <FontAwesomeIcon icon={faRss} />
        </button>
      </Link>
    </div>
  );
}
