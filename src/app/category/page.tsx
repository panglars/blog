import { getAllCategory } from "@/lib/posts";

export default async function Page() {
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
      <h1 className="text-center text-3xl">Category</h1>
      {Object.entries(groupdata).map(([category, posts]) => (
        <div>
          <h2>{category}</h2>
          {posts.map((post) => (
            <p>
              {post.slug} {post.date}
            </p>
          ))}
        </div>
      ))}
    </>
  );
}

