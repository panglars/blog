import Link from "next/link";
import { getAllPosts } from "../lib/posts";
import { generateRSS } from "../lib/rss";

export default async function Page() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl leading-snug my-4">{`Hello,I'm Pang LAN`}</h1>
      <h2 className="text-center text-2xl">{process.env.SUBTITLE}</h2>
      <p className="flex items-center my-8 text-xl">
        <Link href="https://github.com/pang-lan">Github</Link>
        <Link href="https://t.me/xuandabing">Telegram</Link>
      </p>
      <ul className="my-10">
        {allPosts.map((post) => (
          <li className="list-item" key={post.date}>
            <div>
              <Link href={`/post/${post.slug}`} className="text-2xl">
                {post.title}
              </Link>
              <div className="text-right text-xl ">
                {post.date}
                {post.category}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
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
  await generateRSS();
  return allPosts;
}
