"use client";

import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";

export default function Page() {
  //const pathname = usePathname();
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <>
      <h1 className="text-center text-4xl leading-snug my-16">About Me</h1>
      <p> Building...</p>
      <div>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </div>
    </>
  );
}
