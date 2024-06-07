import PostList from "@/layouts/PostListWithTags";
import { getAllTags } from "@/lib/api";

export default async function TagPage({ params }: { params: { tag: string } }) {
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
