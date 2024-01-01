import CategoryList from "@/layouts/CategoryList";
import { getAllPosts } from "@/lib/posts";

export default function Category() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "tags",
    "content",
  ]);

  return <CategoryList displayPosts={allPosts} />;
}
