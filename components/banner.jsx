import utilStyles from "../styles/utils.module.scss";
import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={utilStyles.borderCircle}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          I'm PangLan
        </Link>
      </h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={"https://github.com/Fogberry"}>
            <Image src="/images/telegram.svg" height={24} width={24} />
            Telegram
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"https://github.com/Fogberry"}>
            <Image src="/images/github.svg" height={24} width={24} />
            Github
          </Link>
        </li>
      </ul>
    </>
  );
}
// TODO add icon
