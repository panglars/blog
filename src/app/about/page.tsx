import fs from "fs";
import { join } from "path";
import orgToHtml from "@/lib/orgToHtml";

function getFriends() {
  const context = fs.readFileSync(
    join(process.cwd(), "public/about.org"),
    "utf8",
  );
  return orgToHtml(context);
}

export default function Page() {
  const about = getFriends();
  return (
    <>
      <article
        className="prose max-w-none py-4 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: String(about) }}
      />
    </>
  );
}
