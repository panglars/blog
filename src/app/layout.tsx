import type { Metadata } from "next";
import "./globals.css";
import Footers from "../components/footers";
import Headers from "../components/headers";
import { Fira_Code } from "next/font/google";

export const fira = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: process.env.TITLE,
  description: process.env.SUBTITLE,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <Headers />
        {children}
        <Footers />
      </body>
    </html>
  );
}
