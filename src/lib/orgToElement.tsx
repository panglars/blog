import { unified } from "unified";
import { uniorgSlug } from "uniorg-slug";
import rehypeStringify from "rehype-stringify";
import uniorgParse from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import rehypeSanitize from "rehype-sanitize";
import { extractKeywords } from "uniorg-extract-keywords";
import rehypeShiki from "@shikijs/rehype";

const htmlProcessor = unified()
	.use(uniorgParse)
	.use(extractKeywords)
	.use(uniorgSlug) //add anchors headings
	.use(uniorg2rehype)

	.use(rehypeSanitize)
	.use(rehypeShiki, {
		theme: "github-dark",
	})
	.use(rehypeStringify);

export async function orgToHtml(org: string) {
	const result = await htmlProcessor.process(org);
	return result;
}
