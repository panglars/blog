import Link from "next/link";

export default function Footers() {
  return (
    <footer className="mx-auto w-full max-w-3xl text-center text-ms tracking-tight mt-20 mb-8">
      <div className="container">
        Copyright © 2023 PangLAN. All rights reserved.
      </div>
      <div>
        Make by{" "}
        <Link href="https://nextjs.org" className="font-bold">
          Next.js
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/rasendubi/uniorg" className="font-bold">
          uniorg
        </Link>
        . Powered by{" "}
        <Link href="https://vercel.com/home" className="font-bold">
          Vercel
        </Link>
      </div>
    </footer>
  );
}
