import Link from "next/link";

export default function Headers() {
  return (
    <nav className="flex justify-between items-center p-8 text-2xl">
      <Link href="/" className="font-bold">
        PangLAN
      </Link>
      <div className="space-x-4">
        <Link href="/category">Category</Link>
        <Link href="/about">About</Link>
        <Link href="/friends">Friends</Link>
        <Link href="/tags">Tags</Link>
        <Link href="/rss.xml">RSS</Link>
      </div>
    </nav>
  );
}
