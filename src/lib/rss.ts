import { Feed } from "feed";
import fs from "fs";
import { getAllPosts } from "./posts";

export const generateRSS = async () => {
  const feed = new Feed({
    title: process.env.TITLE!,
    description: process.env.DESCRIPTION,
    id: process.env.SITEURL!,
    link: process.env.SITEURL,
    copyright: "All rights reserved 2023,@PangLAN",
    author: {
      name: process.env.AUTHOR,
      email: process.env.EMAIL,
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
      //utcdate = Date(post.date).toUTCString();
      feed.addItem({
        title: post.title,
        id: process.env.SITEURL + "/post/" + post.slug,
        link: process.env.SITEURL + "/post/" + post.slug,
        content: post.content,
        author: [
          {
            name: process.env.NAME!,
            email: process.env.EMAIL!,
          },
        ],
        date: utcdate,
      });
    })
  );

  fs.writeFileSync("./public/rss.xml", feed.rss2());
};
