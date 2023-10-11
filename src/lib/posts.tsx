import fs from "fs";
import {join} from "path";
import orgToHtml from "./orgToHtml";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: string[] = []
): Record<string, any> {
  const realSlug = slug.replace(/\.org$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.org`);
  const content = fs.readFileSync(fullPath, "utf8");
  const org = orgToHtml(content);

  const items: Record<string, any> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = String(org);
    }
    if (org.data[field]) {
      items[field] = org.data[field];
    }
  });
  items["date"] = String(items["date"]).replace(
    /^<(\d{4}-\d{2}-\d{2}) \w{3}>$/,
    "$1"
  );
  //console.log(items);
  return items;
}

export function getAllPosts(fields: string[] = []): Record<string, any>[] {
  const slugs = getPostSlugs();
  return slugs
      .map((slug) => getPostBySlug(slug, fields))
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}
