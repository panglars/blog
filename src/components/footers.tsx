import Link from "next/link";

export default function Footers() {
  return (
    <footer className="mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500">
      @PangLan 2023 Powered by <Link href="https://nextjs.org">next.js</Link>{" "}
      and <Link href="https://github.com/rasendubi/uniorg">uniorg</Link>
    </footer>
  );
}
