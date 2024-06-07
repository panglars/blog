import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { IoLogoRss } from "react-icons/io5";
import MobileNav from "./MobileNav";
import siteMetadata from "@/siteMetadata";

export default function Headers() {
	return (
		<header className="flex items-center justify-between py-10 text-xl">
			<div>
				<Link
					href="/"
					className="hidden text-2xl font-medium text-gray-900 dark:text-gray-100 sm:block">
					{siteMetadata.TITLE}
				</Link>
			</div>
			<nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
				{/*
        <Link
          href="/archive"
          className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
        >
          Archive
        </Link>
          */}
				<Link
					href="/tags"
					className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block">
					Tags
				</Link>
				<Link
					href="/about"
					className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block">
					About
				</Link>
				<Link
					href="/friends"
					className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block">
					Friends
				</Link>

				<button className="h-6 w-6 text-gray-900 dark:text-gray-100">
					<Link href="/feed.xml">
						<IoLogoRss />
					</Link>
				</button>
				<ThemeToggle />
				<MobileNav />
			</nav>
		</header>
	);
}
