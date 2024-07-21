import fs from "fs";
import { join } from "path";
import { orgToHtml } from "@/lib/orgToElement";

async function getFriends() {
	const friends = fs.readFileSync(
		join(process.cwd(), "public/friends.org"),
		"utf8",
	);
	return await orgToHtml(friends);
}

export default async function Page() {
	const friends = await getFriends();
	return (
		<>
			<article
				className="prose max-w-none py-4 dark:prose-invert"
				dangerouslySetInnerHTML={{ __html: String(friends) }}
			/>
		</>
	);
}
