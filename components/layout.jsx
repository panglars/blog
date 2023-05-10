import styles from "./layout.module.scss";
import Meta from "./meta";
import Minibuffer from "./minibuffer";
import Modeline from "./modeline";
import { Providers } from "./providers";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <main className={styles.container}>{children}</main>
      <Modeline />
      <Minibuffer />
    </>
  );
}
