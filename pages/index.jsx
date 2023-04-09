import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getAllPosts } from "../lib/posts";
import { Fragment } from "react";
import Image from "next/image";
const name = "PangLAN";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Index</title>
        </Head>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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

          <ul className={utilStyles.list}>
            {allPosts.map((post) => (
              <li className={utilStyles.listItem} key={post.slug}>
                <Fragment>
                  <Link href={`/posts/${post.slug}`}>{post.title} </Link>
                  <div className={utilStyles.lightText}>
                    {post.date} {post.category}
                    <br />
                    {post.tags}
                  </div>
                </Fragment>
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

  return {
    props: { allPosts },
  };
}
