import { getAllPosts } from "@/lib/posts";
import Link from "@/components/Link";
import siteMetadata from "@/siteMetadata";
import Tag from "@/components/Tag";

export default async function PostList() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "language",
    "category",
    "tags",
    "content",
  ]);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {allPosts.map((post) => (
          <li key={post.slug} className="py-12">
            <article>
              <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
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
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold leading-8 tracking-tight">
                        <Link
                          href={`/post/${post.slug}`}
                          className="text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <div className="flex flex-wrap">
                        {post.tags.map((tag: string) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    {post.summary && (
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {post.summary}
                      </div>
                    )}
                  </div>
                  <div className="text-base font-medium leading-6">
                    <Link
                      href={`/post/${post.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label={`Read more: "${post.title}"`}
                    >
                      Read more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
