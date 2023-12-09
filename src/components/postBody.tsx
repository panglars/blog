"use client";

import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";

export default function PostBody({ content }: any) {
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <div className="mx-auto max-w-3xl">
      <article
        className="prose prose-lg prose-slate max-w-none dark:prose-invert md:prose-base prose-a:underline
        hover:prose-a:text-cyan-500 prose-code:text-lime-500 prose-pre:border dark:prose-pre:border-slate-800 dark:prose-pre:bg-slate-900"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <div>
        {/*
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
          */}
      </div>
    </div>
  );
}
