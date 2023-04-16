import utilStyles from "../styles/utils.module.scss";
import Image from "next/image";
import Link from "next/link";
import styles from "./banner.module.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faRss } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const Title = "PangLan";
const subTitle = "";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Link href="/">
        <Image
          priority
          src="/images/profile.jpg"
          className={styles.bannerimg}
          height={108}
          width={108}
          alt=""
        />
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/" className={utilStyles.colorInherit}>
          {Title}
        </Link>
      </h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href={"https://github.com/Fogberry"}>
            &nbsp;
            <FontAwesomeIcon icon={faTelegram} />
            &nbsp;Telegram
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link href={"https://github.com/Fogberry"}>
            &nbsp;
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;Github
          </Link>
        </li>

        <li className={styles.listItem}>
          <Link href={"mailto:i@yinn.party"}>
            &nbsp;
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;Email
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"/rss.xml"}>
            &nbsp;
            <FontAwesomeIcon icon={faRss} />
            &nbsp;RSS
          </Link>
        </li>
      </ul>
    </div>
  );
}
// TODO add icon
