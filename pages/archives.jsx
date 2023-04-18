import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import { getAllPosts } from "../lib/posts";
import { Fragment } from "react";
import Link from "next/link";
// TODO Add category
export default function Archives({ allPosts }) {
  const categorizedPosts = allPosts.reduce((acc, post) => {
    if (acc.hasOwnProperty(post.category)) {
      acc[post.category].push(post);
    } else {
      acc[post.category] = [post];
    }

    return acc;
  }, {});
  // console.log(categorizedPosts);

  return (
    <Layout>
      {Object.keys(categorizedPosts).map((category) => (
        <ul className={utilStyles.list} key={category}>
          <h2 className={utilStyles.headingXl}>{category}</h2>
          {categorizedPosts[category].map((post) => (
            <li className={utilStyles.listItem} key={post.slug}>
              <div className={utilStyles.flexBox}>
                <div>
                  <Link href={`/posts/${post.slug}`}>{post.title} </Link>
                </div>
                <div className={utilStyles.lightText}>
                  {post.date.replace(/^<(.*)>$/, "$1")}
                </div>
              </div>
            </li>
          ))}
        </ul>
      ))}
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
