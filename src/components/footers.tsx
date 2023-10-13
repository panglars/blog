import Link from "next/link";

export default function Footers() {
  return (
    <footer className="mx-auto w-full max-w-3xl text-center text-ms font-semibold tracking-tight">
      @PangLan 2023 Powered by <Link href="https://nextjs.org">next.js</Link>{" "}
      and <Link href="https://github.com/rasendubi/uniorg">uniorg</Link>
    </footer>
  );
}
