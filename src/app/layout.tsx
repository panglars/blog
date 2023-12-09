"use client";
import "./globals.css";
import React from "react";
import { Inconsolata } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footers from "@/components/footers";
import Headers from "@/components/headers";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          className={` bg-slate-100 text-slate-700 antialiased dark:bg-slate-900 dark:text-slate-400 ${font.className}`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="mx-4 mb-40 mt-8 flex max-w-5xl flex-col md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
              <aside className="-mx-4 md:mx-0 md:w-[200px] md:flex-shrink-0 md:px-0">
                <Headers />
              </aside>
              <div className="mt-6 flex min-w-0 flex-auto flex-col md:mt-0">
                <div className="min-h-[60vh] flex-auto ">
                  <main className="w-full flex-auto md:w-9/12">{children}</main>
                </div>
                <Footers />
              </div>
            </div>
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </SessionProvider>
    </html>
  );
}
