import styles from "./modeline.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faNewspaper,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import { useTheme } from "next-themes";
config.autoAddCss = false;

function Rainbow_block() {
  return <>{"█ "}</>;
}
function ReadingPercentage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    async function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const currentPercentage =
        (scrollPosition / (totalHeight - window.innerHeight)) * 100;
      setPercentage(currentPercentage.toFixed(0));
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{`  ${percentage}%  `}</>;
}

function BufferName() {
  const routerName = useRouter();
  // console.log(bufferName.pathname);
  let bufferName = String(routerName.pathname),
    bufferNameMessage;
  if (bufferName == "/") {
    bufferNameMessage = (
      <>
        <FontAwesomeIcon icon={faHouse} /> Index
      </>
    );
  } else if (bufferName == "/posts/[slug]") {
    bufferNameMessage = (
      <>
        <FontAwesomeIcon icon={faNewspaper} /> Post
      </>
    );
  } else {
    bufferNameMessage = (
      <>
        <FontAwesomeIcon icon={faGlobe} /> {bufferName.slice(1)}
      </>
    );
  }
  return <> {bufferNameMessage} </>;
}

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  let themeicon;
  if (theme === "light") {
    themeicon = <FontAwesomeIcon icon={faMoon} />;
  } else {
    themeicon = <FontAwesomeIcon icon={faSun} />;
  }
  return (
    <>
      <Link href="javascript:void(0)" onClick={toggleTheme}>
        {themeicon}
        {" " + theme}
      </Link>
    </>
  );
}
export default function Modeline() {
  return (
    <div className={styles.modeline}>
      <div className={styles.bufferInfo}>
        <Rainbow_block />
        <BufferName />
        <ReadingPercentage />
        <ThemeButton />
      </div>

      <div>
        <Link href="/" className={styles.navigate}>
          Home
        </Link>
        <Link href="/archives" className={styles.navigate}>
          Archives
        </Link>
        <Link href="/about" className={styles.navigate}>
          About
        </Link>
        <Link href="/firends" className={styles.navigate}>
          Firends
        </Link>
      </div>
    </div>
  );
}
