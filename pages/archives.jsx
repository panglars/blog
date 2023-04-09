import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getAllPosts } from "../lib/posts";
import { Fragment } from "react";
import Link from "next/link";

export default function Archives({ allPosts }) {
  return (
    <Layout>
      <ul className={utilStyles.list}>
        {allPosts.map((post) => (
          <li className={utilStyles.listItem} key={post.slug}>
            <Fragment>
              <Link href={`/posts/${post.slug}`}>{post.title} </Link>
              <div className={utilStyles.lightText}>
                {post.date} {post.category}
              </div>
            </Fragment>
          </li>
        ))}
      </ul>
    </Layout>
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
