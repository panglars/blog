import RSS from "rss";
import { getAllPosts } from "@/lib/api";
import siteMetadata from "@/siteMetadata";

export async function GET() {
	const feed = new RSS({
		title: siteMetadata.TITLE,
		description: siteMetadata.DESCRIPTION,
		generator: "Emacs",
		copyright: siteMetadata.COPYRIGHT,
		language: siteMetadata.LANG,
		site_url: siteMetadata.SITEURL,
		feed_url: siteMetadata.SITEURL + "/feed.xml",
	});
	const allPostsData = await getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"category",
		"tags",
		"content",
	]);

	allPostsData.forEach((post) => {
		feed.item({
			title: post.title,
			description: post.content,
			guid: post.slug,
			date: new Date(post.date), //use UTC time
			url: siteMetadata.SITEURL + "/post/" + post.slug,
		});
	});
	return new Response(feed.xml(), {
		headers: {
			"content-type": "application/xml",
		},
	});
}
