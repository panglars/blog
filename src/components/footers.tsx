import Link from "next/link";

export default function Footers() {
  return (
    <footer className="mt-20 flex flex-auto items-center text-sm text-slate-400 md:w-9/12">
      <div className="container">
        Copyright © 2023 PangLAN. All rights reserved. Make by{" "}
        <Link
          href="https://nextjs.org"
          className="underline hover:text-cyan-500"
        >
          Next.js
        </Link>{" "}
        and{" "}
        <Link
          href="https://github.com/rasendubi/uniorg"
          className="underline hover:text-cyan-500"
        >
          uniorg
        </Link>
        . Powered by{" "}
        <Link
          href="https://vercel.com/home"
          className="underline hover:text-cyan-500"
        >
          Vercel
        </Link>
      </div>
    </footer>
  );
}
