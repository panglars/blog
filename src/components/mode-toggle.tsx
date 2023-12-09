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
    <div className="relative flex space-x-6 px-4 pb-4 md:relative  md:px-0 md:pb-8">
      <button className=" cursor-pointer transition hover:text-cyan-500">
        <FontAwesomeIcon icon={faLanguage} />
      </button>

      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className=" cursor-pointer transition hover:text-cyan-500"
      >
        {theme !== "dark" ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} />
        )}
      </button>
      <button className=" cursor-pointer transition hover:text-cyan-500">
        <Link href="/feed.xml">
          <FontAwesomeIcon icon={faRss} />
        </Link>
      </button>
    </div>
  );
}
