"use client";

import { useTheme } from "next-themes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faRss,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex space-x-6">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500"
      >
        <span className="sr-only">Toggle mode</span>
        {theme !== "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <Link href="/rss.xml">
        <button className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500">
          <span className="sr-only">RSS</span>
          <FontAwesomeIcon icon={faRss} />
        </button>
      </Link>
      <button className="w-6 h-6 flex items-center justify-center hover:bg-cyan-500">
        <FontAwesomeIcon icon={faLanguage} />
      </button>
    </div>
  );
}
