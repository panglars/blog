import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

export default function Headers() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <ModeToggle />
        {
          // TODO language toggle components
          // TODO RSS icon
        }
        <nav className="ml-auto font-medium space-x-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/rss.xml">RSS</Link>
        </nav>
      </div>
    </header>
  );
}
