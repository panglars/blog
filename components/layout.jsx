import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Meta from "./meta";
import Footer from "./footer";
import Modeline from "./modeline";
const name = "PangLAN";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
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
                {name}
              </Link>
            </h2>
          </>
        </header>

        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
