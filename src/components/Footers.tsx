import Link from "@/components/Link";
import siteMetadata from "@/siteMetadata";
import { IoMail, IoLogoOctocat, IoLogoTwitter } from "react-icons/io5";

export default function Footers() {
	return (
		<footer>
			<div className="mt-16 flex flex-col items-center">
				<div className="mb-3 flex space-x-4">
					<Link href={`mailto:${siteMetadata.EMAIL}`}>
						<IoMail />
					</Link>
					<Link href={siteMetadata.GITHUB}>
						<IoLogoOctocat />
					</Link>
					<Link href={siteMetadata.TWITTER}>
						<IoLogoTwitter />
					</Link>
				</div>
				<div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
					<div>{siteMetadata.NAME}</div>
					<div>{` • `}</div>
					<div>{`© ${new Date().getFullYear()}`}</div>
					<div>{` • `}</div>
					<Link href="https://creativecommons.org/licenses/by-sa/4.0/">
						{siteMetadata.COPYRIGHT}
					</Link>
				</div>
				<div className="mb-8 space-x-4 text-sm text-gray-500 dark:text-gray-400">
					<Link href="https://github.com/rasendubi/uniorg">uniorg</Link>
					<Link href="https://nextjs.org">Next.js</Link>
					<Link href="https://vercel.com">Vercel</Link>
				</div>
			</div>
		</footer>
	);
}
