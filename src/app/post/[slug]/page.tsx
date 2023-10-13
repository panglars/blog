import PostBody from "../../../components/postbody";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";

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
      <h1 className="text-center text-3xl">{post.title}</h1>
      <p className="text-center text-xl">
        {post.category} {post.date} {post.language} {post.tag}
      </p>
      <PostBody content={post.content} />
    </>
  );
}
