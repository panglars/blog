import styles from "./layout.module.scss";
import Meta from "./meta";
import Modeline from "./modeline";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
      <Modeline />
    </>
  );
}
