import orgStyles from "./org-styles.module.scss";
import rehypeHighlight from "rehype-highlight";
import { rehype } from "rehype";
import { useEffect, useState } from "react";
import "highlight.js/styles/base16/solarized-light.css";

export default function Postbody({ content }) {
  const file = rehype()
    .data("settings", { fragment: true })
    .use(rehypeHighlight)
    .process(content);

  const [highlightContext, setHighlightContext] = useState(content);

  useEffect(() => {
    file.then((vfileObject) => {
      const value = vfileObject.value;
      //      console.log(String(value));
      setHighlightContext(value);
    });
  }, []);
  return (
    <div className={orgStyles["org"]}>
      <div dangerouslySetInnerHTML={{ __html: highlightContext }} />
    </div>
  );
}
