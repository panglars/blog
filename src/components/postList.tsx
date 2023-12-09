import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function PostList() {
  const allPosts = await getPostInfo();
  // console.log(allPosts);
  return (
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
  return allPosts;
}
