import { getAllCategory } from "@/lib/posts";
import siteMetadata from "@/siteMetadata";
import Link from "@/components/Link";
import Tag from "@/components/Tag";

export default async function CategoryList() {
  const groupdata = getAllCategory([
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
      <div className="flex sm:space-x-24">
        <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
          <div className="px-6 py-4">
            <Link
              href={`/category`}
              className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
            >
              All Posts
            </Link>
            <ul>
              {Object.entries(groupdata).map(([category]) => (
                <li key={category} className="my-3">
                  <Link
                    className="px-3 py-2 text-sm font-medium uppercase text-gray-500 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                    href={`/category/${category}`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*
        <div>
          <ul>
            {displayCategory.map((post: Post) => (
              <li key={post.slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString(
                          siteMetadata.LANG,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            weekday: "short",
                          },
                        )}
                      </time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/post/${post.slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
            </div>
          */}
      </div>
    </>
  );
}

interface Post {
  title: string;
  date: string;
  slug: string;
  language: string;
  category: string;
  content: string;
  tags: string[];
}
