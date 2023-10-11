import Link from "next/link";

export default function Footers() {
  return (
    <footer className="p-4  text-center relative min-h-screen mt-16">
      @PangLan 2023 Powered by <Link href="https://nextjs.org">next.js</Link>{" "}
      and <Link href="https://github.com/rasendubi/uniorg">uniorg</Link>
    </footer>
  );
}
