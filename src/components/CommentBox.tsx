"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faRightFromBracket,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="mt-60 px-2.5">
          <textarea
            placeholder="Let us know what you think!"
            className="block w-full h-20 rounded-lg border-none bg-inherit"
            onChange={(e) => setText(() => e.target.value)}
            value={text}
          ></textarea>
          <div className="flex justify-between mt-4 ">
            <span className="text-slate-900 dark:text-slate-100">
              <FontAwesomeIcon icon={faUser} /> {session.user?.name}
            </span>
            <div className="space-x-6 font-bold">
              <button
                className="border-none border-0 hover:text-red-500 space-x-1"
                onClick={() => signOut({ redirect: false })}
              >
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span>Sign Out</span>
              </button>
              <button className="border-none border-0 hover:text-green-500 space-x-1">
                <FontAwesomeIcon icon={faPaperPlane} />
                <span>Post</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  } else
    return (
      <div className="mt-60 px-2.5">
        <textarea
          placeholder="Please SignIn to comment"
          className="block w-full h-20 rounded-lg border-none bg-inherit text-gray-900"
          disabled
        ></textarea>
        <div className="flex justify-between mt-4">
          <span className="text-slate-900 dark:text-slate-100">
            Sign in to comment
          </span>
          <div className="space-x-6 font-bold">
            <button
              className="border-none border-0 hover:text-green-500 space-x-1"
              onClick={() => signIn()}
            >
              <FontAwesomeIcon icon={faRightToBracket} /> <span>Login</span>
            </button>
          </div>
        </div>
      </div>
    );
}
