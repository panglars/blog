"use client";

import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";

export default function PostBody({ content }: any) {
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <div className="max-w-3xl mx-auto">
      <article
        className="prose max-w-none prose-slate dark:prose-invert prose-lg prose-a:underline
hover:prose-a:text-cyan-500"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </div>
    </div>
  );
}
