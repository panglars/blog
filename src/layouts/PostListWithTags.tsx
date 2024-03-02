import { getAllTags } from "@/lib/api";
import siteMetadata from "@/siteMetadata";
import Link from "@/components/Link";

interface Post {
  title: string;
  date: string;
  slug: string;
  language: string;
  category: string;
  content: string;
  tags: string[];
}

interface Props {
  displayPosts: Post[];
  tagTitle: string;
}

export default async function CategoryList({ displayPosts, tagTitle }: Props) {
  const postsTags = getAllTags([
    "title",
    "date",
    "slug",
    "language",
    "category",
    "tags",
    "content",
  ]);
  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {tagTitle}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              <Link
                href={`/tags`}
                className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
              >
                All Posts
              </Link>
              <ul>
                {Object.entries(postsTags).map(([tag]) => (
                  <li key={tag} className="my-3">
                    <Link
                      className="inline px-3 py-2 text-sm font-bold uppercase text-primary-500"
                      href={`/tags/${tag}`}
                    >
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {displayPosts.map((post: Post) => (
                <li key={post.slug} className="py-5">
                  <article className="flex flex-col space-y-2 xl:space-y-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/post/${post.slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          siteMetadata.LANG,
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          },
                        )}
                      </time>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
