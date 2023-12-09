import siteConfig from "../siteConfig";
import PostList from "@/components/postList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.TITLE,
  description: siteConfig.DESCRIPTION,
  alternates: {
    canonical: siteConfig.SITEURL,
    types: {
      "application/rss+xml": [{ url: "feed.xml", title: "RSS Feed" }],
    },
  },
};

export default function Page() {
  return (
    <>
      <PostList />
    </>
  );
}
