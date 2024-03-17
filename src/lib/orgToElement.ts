import { unified } from "unified";
import { uniorgSlug } from "uniorg-slug";
import html from "rehype-stringify";
import uniorg from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import extractKeywords from "uniorg-extract-keywords";
import rehypeSanitize from "rehype-sanitize";

const processor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorgSlug)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
  .use(html);

export function orgToHtml(org: string) {
  return processor.processSync(org);
}

export function orgToJSX(org: string) {
  return processor.processSync(org);
}
