import Image from "next/image";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Meta from "./meta";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  );
}
