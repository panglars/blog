import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import PostBody from "@/components/postBody";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const post = await getPost(params);

  return {
    title: post.title,
  };
}

export async function generateStaticParams() {
  return getAllPosts(["slug"]);
}

async function getPost(params: any) {
  return getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "language",
    "category",
    "tags",
    "content",
  ]);
}

export default async function Post({ params }: Props) {
  const post = await getPost(params);
  return (
    <>
      <h1 className="text-3xl mt-12 mb-3 font-semibold">{post.title}</h1>
      <div className="grid justify-items-end mb-12 font-serif italic text-xl tracking-tighter">
        <div>Category:{post.category}</div>
        <div>Date:{post.date}</div>
        <div>Langruage:{post.language}</div>
        <div>Tags:{post.tags}</div>
      </div>
      <PostBody content={post.content} />
    </>
  );
}
