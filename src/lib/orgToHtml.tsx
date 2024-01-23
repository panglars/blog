import { unified } from "unified";
import html from "rehype-stringify";
import uniorg from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import extractKeywords from "uniorg-extract-keywords";
import rehypeSanitize from "rehype-sanitize";

const processor = unified()
  .use(uniorg)
  .use(extractKeywords)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
  .use(html);

export default function orgToHtml(org: any) {
  return processor.processSync(org);
}
