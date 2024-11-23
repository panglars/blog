import PostList from "@/layouts/PostListWithTags";
import { getAllTags } from "@/lib/api";

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
    const params = await props.params;
    const allTags = await getAllTags([
		"title",
		"date",
		"slug",
		"author",
		"category",
		"tags",
		"content",
	]);
    const { tag } = params;
    const displayPosts = allTags[tag] || [];
    return <PostList displayPosts={displayPosts} tagTitle={tag} />;
}
