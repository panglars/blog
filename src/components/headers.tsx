import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
export default function Headers() {
  return (
    <div className="lg:sticky lg:top-20">
      {
        // TODO: Add blog information
      }
      <ModeToggle />
      <nav className=" relative flex flex-row items-start px-4 pb-4 text-xl md:relative md:flex-col md:overflow-auto md:px-0 md:pb-0">
        <div className="flex flex-row space-x-4 pr-10 md:flex-col md:space-x-0">
          <Link href="/" className="transition  hover:text-cyan-500">
            Home
          </Link>
          <Link href="/archive" className=" transition hover:text-cyan-500">
            Archive
          </Link>
          <Link href="/about" className=" transition hover:text-cyan-500">
            About
          </Link>
        </div>
      </nav>
    </div>
  );
}
