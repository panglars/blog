import styles from "./modeline.module.scss";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

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

export default function Modeline({ bufferName = "Buffer" }) {
  return (
    <div className={styles.modeline}>
      <div className="buffer">
        {bufferName} &nbsp;
        <ReadingPercentage />
      </div>

      <div className={styles.navigate}>
        <Link href="/"> Home </Link>
        <Link href="/archives"> Archives </Link>
        <Link href="/about"> About </Link>
        <Link href="/firends"> Firends </Link>
      </div>
    </div>
  );
}
