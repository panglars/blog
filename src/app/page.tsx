import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function Page() {
  const allPosts = await getData();
  return (
    <div>
      <h1 className="text-center">Hello, Dashboard Page!</h1>;
      <ul>
        {allPosts.map((post) => (
          <li key={post.date}>
            <Link href={`/posts/${post.slug}`}>{post.title} </Link>
          </li>
        ))}
      </ul>
    </div>
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
//

async function getData() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "tags",
    "content",
  ]);
  return allPosts;
}
