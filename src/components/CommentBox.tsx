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
            className="block w-full rounded-lg border-none bg-inherit text-gray-900"
            onChange={(e) => setText(() => e.target.value)}
            value={text}
          ></textarea>
          <div className="flex justify-between text-xl font-bold">
            <span className="text-green-400">
              Signed in as {session.user?.name}
            </span>
            <button
              className="border-none"
              onClick={() => signOut({ redirect: false })}
            >
              Sign Out
            </button>
            <button className="mt-6 px-3 border-none">Post</button>
          </div>
        </div>
      </form>
    );
  }
  return (
    <div className="mt-10 px-2.5">
      <textarea
        placeholder="Please SignIn to comment"
        className="block w-full rounded-lg border-none bg-inherit text-gray-900"
        disabled
      ></textarea>
      <div className="flex justify-between text-xl font-bold">
        <span className="text-red-400">Not Sign in</span>
        <button className="border-none" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
    </div>
  );
}
