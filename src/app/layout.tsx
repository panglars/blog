import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import React from "react";
import siteConfig from "../siteConfig";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Footers from "@/components/footers";
import Headers from "@/components/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.TITLE,
  description: siteConfig.DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="max-w-3xl mx-auto py-10 px-4">
            <Headers />
            <main>{children}</main>
          </div>
          <Footers />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
