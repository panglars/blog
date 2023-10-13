"use client";

import { useSession, signIn, signOut } from "next-auth/react";

type CommentFormProps = {
  text: string;
  setText: Function;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function CommentBox({
  text,
  setText,
  onSubmit,
}: CommentFormProps) {
  const { data: session } = useSession();
  if (session) {
    return (
      <form onSubmit={onSubmit}>
        <div className="mt-10 px-2.5">
          <textarea
            placeholder="Let us know what you think!"
            className="block w-full rounded-lg border-none bg-inherit"
            onChange={(e) => setText(() => e.target.value)}
            value={text}
          ></textarea>
          <div className="flex justify-between text-xl font-bold mt-4">
            <span className="text-gray-500">
              Signed in as {session.user?.name}
            </span>
            <button
              className="border-none border-0 hover:text-red-500"
              onClick={() => signOut({ redirect: false })}
            >
              Sign Out
            </button>
            <button className="border-none border-0 hover:text-green-500">
              Post
            </button>
          </div>
        </div>
      </form>
    );
  } else
    return (
      <div className="mt-10 px-2.5">
        <textarea
          placeholder="Please SignIn to comment"
          className="block w-full rounded-lg border-none bg-inherit text-gray-900"
          disabled
        ></textarea>
        <div className="flex justify-between text-xl font-bold mt-4">
          <span className="text-gray-500">Not Sign in</span>
          <button
            className="border-none border-0 hover:text-green-500"
            onClick={() => signIn()}
          >
            Sign In
          </button>
        </div>
      </div>
    );
}
