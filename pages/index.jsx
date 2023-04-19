import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getAllPosts } from "../lib/posts";
import { generateRSS } from "../lib/rss";
import Banner from "../components/banner";

// TODO Fallback post.date
export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>PangLAN's Blog</title>
        </Head>
        <Banner />
        <br />
        <br />
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPosts.map((post) => (
              <li className={utilStyles.listItem} key={post.date}>
                <div className={utilStyles.flexBox}>
                  <div>
                    <Link href={`/posts/${post.slug}`}>{post.title} </Link>
                  </div>

                  <div className={utilStyles.lightText}>
                    {post.date.replace(/^<(.*)>$/, "$1")}
                  </div>
                </div>
                <div className={utilStyles.flexBox}>
                  <div className={utilStyles.lightText}>
                    Category:{post.category}
                  </div>
                  <div className={utilStyles.lightText}>Tags:{post.tags}</div>
                </div>
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
    "category",
    "tags",
    "content",
  ]);
  await generateRSS();
  return {
    props: { allPosts },
  };
}
