import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { generateRSS } from "@/lib/rss";
import siteConfig from "../siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.TITLE,
  description: siteConfig.DESCRIPTION,
};

export default async function Page() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center text-4xl leading-snug my-8">{`Hello,I'm Pang LAN`}</h1>
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post.slug} className="mb-8">
            <h2 className="text-3xl font-semibold tracking-tighter">
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="flex justify-between">
              {post.category && (
                <p className="font-serif italic tracking-tighter text-xl">
                  {post.category}
                </p>
              )}
              {post.date && (
                <p className="font-serif italic tracking-tighter text-xl">
                  {post.date}
                </p>
              )}
            </div>
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
