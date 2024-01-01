import PostList from "@/layouts/PostListWithTags";
import { getAllPosts } from "@/lib/posts";

export default function Tags() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "tags",
    "content",
  ]);

  return <PostList displayPosts={allPosts} tagTitle={"AllPosts"} />;
}
