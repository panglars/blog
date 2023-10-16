"use client";
import "./globals.css";
import React from "react";
import { Inconsolata } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Footers from "@/components/footers";
import Headers from "@/components/headers";
import { SessionProvider } from "next-auth/react";
const font = Inconsolata({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`antialiased min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 ${font.className}`}
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
      </SessionProvider>
    </html>
  );
}
