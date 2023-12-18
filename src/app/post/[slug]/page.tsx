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
      <div className="space-y-1 pb-10 text-center dark:border-gray-700">
        <div className="relative pt-10">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            {post.title}
          </h1>
        </div>
      </div>
      <PostBody content={post.content} />
    </>
  );
}
