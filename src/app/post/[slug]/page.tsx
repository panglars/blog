import PostBody from "../../../components/postbody";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

export async function generateStaicParams() {
  const posts = getAllPosts(["slug"]);
  return { posts };
}
async function getPost(params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "language",
    "category",
    "tags",
    "content",
  ]);
  return post;
}
export default async function Post({ params }) {
  const post = await getPost(params);
  console.log(post);
  return (
    <>
      <PostBody content={post.content} />
      <Link href="/" className="text-right">
        Go back
      </Link>
    </>
  );
}
