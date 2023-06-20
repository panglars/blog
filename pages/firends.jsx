import Layout from "../components/layout";
import Styles from "../components/firends.module.scss";

export default function Firends() {
  const poly000Data = {
    title: "poly000",
    favicon: "https://poly000.github.io/android-chrome-512x512.png",
    link: "https://poly000.github.io",
    descriptions: "Poly000客栈",
  };
  return (
    <Layout>
      <h1>My firends</h1>
      <Firend {...poly000Data} />
    </Layout>
  );
}
// TODO Add firends components

function Firend({ title, favicon, link, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <img src={favicon} alt="Favicon" />
      <a href={link}>{link}</a>
      <p>{description}</p>
    </div>
  );
}
