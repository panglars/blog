import { getAllPosts, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import PostBody from "@/components/postBody";
import siteMetadata from "@/siteMetadata";

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
        <div>
          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            <time dateTime={post.date} className="ml-4">
              {new Date(post.date).toLocaleDateString(siteMetadata.LANG, {
                year: "numeric",
                month: "short",
                day: "numeric",
                weekday: "short",
              })}
            </time>
          </dd>
        </div>
      </div>

      <PostBody content={post.content} />
    </>
  );
}
