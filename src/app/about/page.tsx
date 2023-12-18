"use client";
import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";
import Firends from "@/components/friends";

export default function Page() {
  //const pathname = usePathname();
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  return (
    <>
      <p> Building...</p>
      <h2 className="my-12 text-3xl leading-snug text-slate-900 dark:text-slate-100">
        My Firend Links
      </h2>
      <Firends />
      <div>
        {/*
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
          */}
      </div>
    </>
  );
}
