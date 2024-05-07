import fs from "fs";
import { join } from "path";
import { orgToHtml } from "@/lib/orgToElement";

async function getFriends() {
  const context = fs.readFileSync(
    join(process.cwd(), "public/about.org"),
    "utf8",
  );
  return await orgToHtml(context);
}

export default async function Page() {
  const about = await getFriends();
  return (
    <>
      <article
        className="prose max-w-none py-4 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: String(about) }}
      />
    </>
  );
}
