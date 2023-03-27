import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getAllPosts } from "../lib/posts";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blog</title>
        </Head>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPosts.map((post) => (
              <li className={utilStyles.listItem}>
                <Link href={`/posts/${post.slug}`}>{post.title} </Link>
                <br />
                {post.date}
                <br />
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "author_picture",
    "cover_image",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
