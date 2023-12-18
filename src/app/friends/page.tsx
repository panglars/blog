import fs from "fs";
import { join } from "path";
import orgToHtml from "@/lib/orgToHtml";

function getFriends() {
  const friends = fs.readFileSync(
    join(process.cwd(), "public/friends.org"),
    "utf8",
  );
  return orgToHtml(friends);
}

export default function Page() {
  const friends = getFriends();
  return (
    <>
      <article
        className="prose max-w-none py-4 dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: String(friends) }}
      />
    </>
  );
}
