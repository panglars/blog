import { Feed } from "feed";
import fs from "fs";
import { getPostBySlug, getAllPosts } from "./posts";

const siteURL = "https://yinn.party";

export const generateRSS = async () => {
  const feed = new Feed({
    title: "PangLAN",
    description: "This is my personal feed!",
    id: siteURL,
    link: siteURL,
    language: "zh-CN",
    favicon: "./public/images/icon.png",
    generator: "Next.js + Uniorg",
    copyright: "All rights reserved 2023, Pang LAN",
    author: {
      name: "Pang LAN",
      email: "i@yinn.party",
      link: siteURL,
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
      feed.addItem({
        title: post.title,
        id: siteURL + "/posts/" + post.slug,
        link: siteURL + "/posts/" + post.slug,
        content: post.content,
        author: [
          {
            name: "Pang LAN",
            email: "i@yinn.party",
            link: siteURL,
          },
        ],
      });
    })
  );

  //  console.log(feed.atom1());

  fs.writeFileSync(
    "./public/rss.xml",
    feed.rss2(),
    (err) => err && console.error(err)
  );
};
