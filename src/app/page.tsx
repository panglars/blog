import Link from "next/link";
import { getAllPosts } from "../lib/posts";

export default async function Page() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
    <>
      <h1 className="text-center text-4xl leading-snug mb-4">{`Hello,I'm Pang LAN`}</h1>
      <h2 className="text-center text-2xl">都不知道该干什么</h2>
      <ul className="">
        {allPosts.map((post) => (
          <li className="list-item" key={post.date}>
            <div>
              <Link href={`/post/${post.slug}`} className="text-2xl ml-8">
                {post.title}
              </Link>
              <div className="text-right text-xl m-8">
                {post.date}
                {post.category}
              </div>
            </div>
          </li>
        ))}
      </ul>
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
