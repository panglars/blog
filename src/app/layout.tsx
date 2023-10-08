import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footers from "../components/footers";
import Headers from "../components/headers";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Headers />
        {children}
        <Footers />
      </body>
    </html>
  );
}
