import PostBody from "../../../components/postbody";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import { AppProps } from "next/app";

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);
  return posts;
}
async function getPost(params: any) {
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
export default async function Post({ params }: any) {
  const post = await getPost(params);
  // console.log(post);
  return (
    <>
      <PostBody content={post.content} />
      <Link href="/" className="text-right">
        Go back
      </Link>
    </>
  );
}
