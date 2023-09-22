import Link from "next/link";

export default function Footers() {
  return (
    <footer className="p-4 absolute bottom-0 text-center w-full">
      @PangLan 2023 Powered by <Link href="https://nextjs.org">next.js</Link>{" "}
      and <Link href="https://github.com/rasendubi/uniorg">uniorg</Link>
    </footer>
  );
}
