import fs from "fs";
import { join } from "path";
import orgToHtml from "./orgToHtml";
import { useEffect } from "react";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = [],
): Record<string, any> {
  const realSlug = slug.replace(/\.org$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.org`);
  const content = fs.readFileSync(fullPath, "utf8");
  const org = orgToHtml(content);
  //  console.log(org);
  const items: Record<string, any> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    } else if (field === "content") {
      items[field] = String(org);
    }
    // <<1145-14-14 Sat> -> 1145-14-14
    else if (field === "date") {
      items[field] = String(org.data[field]).replace(
        /^<(\d{4}-\d{2}-\d{2}) \w{3}>$/,
        "$1",
      );
    } else if (org.data[field]) {
      items[field] = org.data[field];
    }
  });
  //  console.log(items);
  return items;
}

export function getAllPosts(fields: string[] = []): Record<string, any>[] {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getAllCategory(fields: string[] = []) {
  const slugs = getPostSlugs();
  let allPostsData = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return allPostsData.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = [];
    }
    acc[post.category].push(post);
    return acc;
  }, {});
}
