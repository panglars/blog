import siteConfig from "../siteConfig";
import PostList from "@/components/postList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.TITLE,
  description: siteConfig.DESCRIPTION,
};

export default function Page() {
  return (
    <>
      <PostList />
    </>
  );
}
