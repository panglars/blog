"use client";

import orgStyles from "./org-styles.module.css";
import orgStylesDark from "./org-styles-dark.module.css";
import { useTheme } from "next-themes";
import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";

export default function PostBody({ content }: any) {
  const { setTheme, theme } = useTheme();
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <div className="max-w-3xl mx-auto">
      {theme === "light" ? (
        <div
          className={orgStyles["org"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <div
          className={orgStylesDark["org"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
      <div>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </div>
    </div>
  );
}
