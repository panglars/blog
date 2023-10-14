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
        <nav className="ml-auto font-semibold space-x-8">
          <Link href="/" className="hover:text-cyan-500">
            Home
          </Link>
          <Link href="/archive" className="hover:text-cyan-500">
            Archive
          </Link>
          <Link href="/about" className="hover:text-cyan-500">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
