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
      <h1 className="text-3xl mt-12 mb-3 font-semibold text-slate-900 dark:text-slate-100 ">
        {post.title}
      </h1>
      <div className="mb-12 font-serif italic text-xl tracking-tighter">
        <div className="flex justify-between">
          <span> Category</span>
          <span>{post.category}</span>
        </div>
        <div className="flex justify-between">
          <span>Date</span>
          <span>{post.date}</span>
        </div>
        {post.language && (
          <div className="flex justify-between">
            <span>Language</span>
            <span>{post.language}</span>
          </div>
        )}
        {post.tags && (
          <div className="flex justify-between">
            <span>Tags</span>
            <span>{post.tags}</span>
          </div>
        )}
      </div>
      <PostBody content={post.content} />
    </>
  );
}
