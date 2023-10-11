import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default async function Page() {
  const allPosts = await getPostInfo();

  return (
    <>
      <h1 className="text-center text-4xl">Category</h1>
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
