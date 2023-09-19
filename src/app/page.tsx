import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default async function Page() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
    <>
      <h1 className="text-center text-2xl font-sans m-2">{`Hello,I'm Pang LAN`}</h1>
      <h2 className="text-center text-xl">都不知道该干什么</h2>
      <ul className="">
        {allPosts.map((post) => (
          <li className="list-item" key={post.date}>
            <div>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
              <p>
                {post.date} {post.language} {post.category}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <Link href="/about" className="text-left">
        About{" "}
      </Link>
    </>
  );
}

async function getPostInfo() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "language",
    "category",
    "tags",
    "content",
  ]);
  return allPosts;
}
