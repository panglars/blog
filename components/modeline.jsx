import styles from "./modeline.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

function ReadingPercentage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
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

  return <>{percentage}%</>;
}

function BufferName() {
  const routerName = useRouter();
  // console.log(bufferName.pathname);
  let bufferName = String(routerName.pathname);
  if (bufferName == "/") {
    return (
      <>
        <FontAwesomeIcon icon={faHouse} />
        &nbsp;Index
      </>
    );
  } else if (bufferName == "/posts/[slug]") {
    return (
      <>
        <FontAwesomeIcon icon={faNewspaper} />
        &nbsp;Post
      </>
    );
  } else {
    return (
      <>
        <FontAwesomeIcon icon={faGlobe} />
        &nbsp;
        {bufferName.slice(1)}
      </>
    );
  }
}

export default function Modeline() {
  return (
    <div className={styles.modeline}>
      <div className={styles.bufferInfo}>
        <BufferName />
        &nbsp;
        <ReadingPercentage />
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
