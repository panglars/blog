import { Feed } from "feed";
import fs from "fs";
import { getAllPosts } from "./posts";
import yaml from "js-yaml";

const config = yaml.load(fs.readFileSync("./config.yaml", "utf-8"));
//console.log(config);

export const generateRSS = async () => {
  const feed = new Feed({
    title: config.title,
    description: config.subtitle,
    id: config.siteURL,
    link: config.siteURL,
    language: "zh-CN",
    favicon: "./public/images/icon.png",
    generator: "Next.js + Uniorg",
    copyright: "All rights reserved 2023, Pang LAN",
    author: {
      name: config.author.name,
      email: config.author.email,
      link: config.author.link,
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
        id: config.siteURL + "/posts/" + post.slug,
        link: config.siteURL + "/posts/" + post.slug,
        content: post.content,
        author: [
          {
            name: config.author.name,
            email: config.author.email,
            link: config.author.link,
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
