import styles from "./modeline.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
// TODO Reading percentage
function ReadingPercentage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const currentPercentage = (scrollPosition / totalHeight) * 100;
      setPercentage(currentPercentage.toFixed(2));
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <div>{percentage}%</div>;
}

export default function Modeline({ bufferName = "Buffer" }) {
  return (
    <div className={styles.modeline}>
      <div>
        PangLAN {bufferName}
        <ReadingPercentage />
      </div>
      <div className="navigate">
        <Link href="/"> Home </Link>
        <Link href="/archives"> Archives </Link>
        <Link href="/about"> About </Link>
        <Link href="/firends"> Firends </Link>
      </div>
    </div>
  );
}
