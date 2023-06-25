import Layout from "../components/layout";
import Link from "next/link";

export default function Firends() {
  const poly000Data = {
    title: "poly000",
    favicon: "https://poly000.github.io/android-chrome-512x512.png",
    url: "https://poly000.github.io",
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

function Firend({ title, favicon, url, description }) {
  return (
    <>
      <h2>{title}</h2>
      <Link href={url}>{description}</Link>
    </>
  );
}
