import orgStyles from "./org-styles.module.scss";
import { rehype } from "rehype";
import { useEffect, useState } from "react";
import rehypePrism from "rehype-prism-plus";

export default function Postbody({ content }) {
  const file = rehype()
    .data("settings", { fragment: true })
    .use(rehypePrism)
    .process(content);

  const [highlightContext, setHighlightContext] = useState(content);

  useEffect(() => {
    file.then((vfileObject) => {
      const value = vfileObject.value;
      setHighlightContext(value);
    });
  }, []);
  return (
    <div className={orgStyles["org"]}>
      <div dangerouslySetInnerHTML={{ __html: highlightContext }} />
    </div>
  );
}
