import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { generateRSS } from "@/lib/rss";

export default async function Page() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl leading-snug my-8">{`Hello,I'm Pang LAN`}</h1>
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post.slug} className="mb-8">
            <Link href={`/post/${post.slug}`} className="text-2xl">
              <h2>{post.title}</h2>
            </Link>
            {post.date && <p className="text-right text-xl">{post.date}</p>}
            {post.category && (
              <p className="text-right text-xl">{post.category}</p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

async function getPostInfo() {
  let allPosts: Record<string, any>[];
  allPosts = getAllPosts([
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
