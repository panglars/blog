import RSS from "rss";
import { getAllPosts } from "@/lib/posts";
import siteConfig from "@/siteConfig";

export async function GET() {
  const feed = new RSS({
    title: siteConfig.TITLE,
    description: siteConfig.DESCRIPTION,
    generator: "Emacs",
    copyright: "All rights reserved 2023,@PangLAN",
    language: "en-US",
    site_url: siteConfig.SITEURL,
    feed_url: siteConfig.SITEURL + "/feed.xml",
  });
  const allPostsData = getAllPosts([
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
      url: siteConfig.SITEURL + "/post/" + post.slug,
    });
  });
  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}
