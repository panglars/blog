import { unified } from "unified";
import html from "rehype-stringify";
import uniorg from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import extractKeywords from "uniorg-extract-keywords";
import { visit } from "unist-util-visit";

const processor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorg2rehype)
  // @ts-expect-error
  .use(addMarkNotProse)
  // @ts-expect-error
  .use(html);

export default function orgToHtml(org: any) {
  return processor.processSync(org);
}

function addMarkNotProse() {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (node.tagName === "code") {
        node.properties = node.properties || {};
        node.properties.className = "not-prose";
      }
    });
  };
}
