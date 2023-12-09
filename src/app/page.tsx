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
    <div className="mx-auto max-w-4xl">
      <h1 className="my-16 text-center text-4xl font-semibold leading-snug text-slate-900 dark:text-slate-100">{`Hello,I'm Pang LAN`}</h1>
      <div>
        {allPosts.map((post) => (
          <div key={post.slug} className="mb-8">
            <h2 className="my-4 text-3xl font-semibold tracking-tighter text-slate-900 dark:text-slate-100">
              <Link href={`/post/${post.slug}`} className="no-underline">
                {post.title}
              </Link>
            </h2>
            <div className="flex justify-between">
              {post.category && (
                <p className="font-serif text-xl italic tracking-tighter">
                  {post.category}
                </p>
              )}
              {post.date && (
                <p className="font-serif text-xl italic tracking-tighter">
                  {post.date}
                </p>
              )}
            </div>
          </div>
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
