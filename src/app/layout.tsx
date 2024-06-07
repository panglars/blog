import "./globals.css";

import React from "react";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footers from "@/components/Footers";
import Headers from "@/components/Headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import siteMetadata from "@/siteMetadata";
import SectionContainer from "@/components/SectionContainer";

const space_grotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
	title: siteMetadata.TITLE,
	description: siteMetadata.DESCRIPTION,
	alternates: {
		canonical: siteMetadata.SITEURL,
		types: {
			"application/rss+xml": [{ url: "feed.xml", title: "RSS Feed" }],
		},
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang={siteMetadata.LANG}
			className={`${space_grotesk.variable} scroll-smooth`}>
			<body className="bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<SectionContainer>
						<div className="flex h-screen flex-col justify-between font-sans">
							<Headers />
							<main className="mb-auto">{children}</main>
							<Footers />
						</div>
					</SectionContainer>
				</ThemeProvider>
				<SpeedInsights />
			</body>
		</html>
	);
}
