import * as prod from "react/jsx-runtime";
import { unified } from "unified";
import { uniorgSlug } from "uniorg-slug";
import html from "rehype-stringify";
import uniorg from "uniorg-parse";
import uniorg2rehype from "uniorg-rehype";
import extractKeywords from "uniorg-extract-keywords";
import rehypeSanitize from "rehype-sanitize";
import rehypeReact from "rehype-react";

// @ts-expect-error: the react types are missing.
const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

const htmlProcessor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorgSlug)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
  .use(html);

const JSXprocessor = unified()
  .use(uniorg)
  .use(extractKeywords)
  .use(uniorgSlug)

  .use(uniorg2rehype)
  .use(rehypeSanitize)
  .use(rehypeReact, production);

export function orgToHtml(org: string) {
  return htmlProcessor.processSync(org);
}

export function orgToJSX(org: string) {
  return JSXprocessor.processSync(org);
}
