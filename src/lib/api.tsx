import fs from "fs";
import { join } from "path";
import { orgToHtml } from "./orgToElement";
import toVFile from "to-vfile";

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
  const content = toVFile.readSync(fullPath);
  console.log("org:", content);
  const org = orgToHtml(content);
  const items: Record<string, any> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    switch (field) {
      case "slug":
        items[field] = realSlug;
        break;
      case "content":
        items[field] = String(org);
        break;
      case "date":
        // <<1145-14-14 Sat> -> 1145-14-14
        items[field] = String(org.data[field]).replace(
          /^<(\d{4}-\d{2}-\d{2}) \w{3}>$/,
          "$1",
        );
        break;
      case "tags":
        items[field] = String(org.data[field]).split(",");
        break;
      default:
        if (org.data[field]) {
          items[field] = org.data[field];
        }
        break;
    }
  });
  //  console.log(items);
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export function getAllTags(fields: string[] = []) {
  const allPosts = getAllPosts(fields);
  const tagsMap: Record<string, any> = {};
  allPosts.forEach((post) => {
    if (Array.isArray(post.tags)) {
      post.tags.forEach((tag) => {
        if (!tagsMap[tag]) {
          tagsMap[tag] = [];
        }
        if (!tagsMap[tag].some((p: any) => p.slug === post.slug)) {
          tagsMap[tag].push(post);
        }
      });
    }
  });
  return tagsMap;
}
