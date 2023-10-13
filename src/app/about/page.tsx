"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import useComment from "@/components/useComment";
import CommentBox from "@/components/CommentBox";
import CommentList from "@/components/CommentList";

export default function Page() {
  const pathname = usePathname();
  const { text, setText, comments, onSubmit, onDelete } = useComment();
  const { data: session } = useSession();
  return (
    <>
      <h1 className="text-center text-4xl leading-snug my-8">About Me</h1>
      <p> Building...</p>
      <div>
        {session ? (
          <>
            <span className="flex justify-center  text-green-500">
              Signed in as {session.user?.name}
            </span>
          </>
        ) : (
          <>
            <span className="flex justify-center text-red-500">
              Not signed in
            </span>
          </>
        )}
        <div className="text-2xl flex justify-center">At Page: {pathname}</div>
        <CommentBox onSubmit={onSubmit} text={text} setText={setText} />
        <CommentList comments={comments} onDelete={onDelete} />
      </div>
    </>
  );
}
