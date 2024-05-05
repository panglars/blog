import { unified } from "unified";
import { uniorgSlug } from "uniorg-slug";
import rehypeStringify from "rehype-stringify";
import uniorg from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import extractKeywords from "uniorg-extract-keywords";
import rehypeSanitize from "rehype-sanitize";

/*
import rehypeReact from "rehype-react";
import { createElement } from "react";
import * as prod from "react/jsx-runtime";
import Link from "@/components/Link";

const production = {
  jsx: prod.jsx,
  jsxs: prod.jsxs,
  Fragment: prod.Fragment,
  components: {
    a: Link,
  },
};
const processorJSX = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorgSlug)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
// .use(rehypeReact, { production, createElement });

export function orgToJSX(org: string) {
  return <>{processorJSX.processSync(org).result}</>;
}
 */
const htmlProcessor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorgSlug)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
  .use(rehypeStringify);

export function orgToHtml(org: string) {
  return htmlProcessor.processSync(org);
}
