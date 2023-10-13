import { Feed } from "feed";
import fs from "fs";
import { getAllPosts } from "./posts";
import siteConfig from "../siteConfig";

export const generateRSS = async () => {
  const feed = new Feed({
    title: siteConfig.TITLE,
    description: siteConfig.DESCRIPTION,
    id: siteConfig.SITEURL,
    link: siteConfig.SITEURL,
    copyright: "All rights reserved 2023,@PangLAN",
    author: {
      name: siteConfig.NAME,
      email: siteConfig.EMAIL,
    },
  });
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "category",
    "tags",
    "content",
  ]);
  await Promise.all(
    allPosts.map(async (post) => {
      let utcdate = new Date(post.date);
      // utcdate = Date(post.date).toUTCString();
      feed.addItem({
        title: post.title,
        id: siteConfig.SITEURL + "/post/" + post.slug,
        link: siteConfig.SITEURL + "/post/" + post.slug,
        content: post.content,
        author: [
          {
            name: siteConfig.NAME,
            email: siteConfig.EMAIL,
          },
        ],
        date: utcdate,
      });
    })
  );

  fs.writeFileSync("./public/rss.xml", feed.rss2());
};
