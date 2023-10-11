import PostBody from "../../../components/postbody";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";

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
      <h1 className="text-center text-3xl">{post.title}</h1>
      <p className="text-center text-xl">
        {post.category} {post.date} {post.language} {post.tag}
      </p>
      <PostBody content={post.content} />
    </>
  );
}
