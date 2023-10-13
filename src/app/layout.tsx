"use client";
import "./globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import Footers from "@/components/footers";
import Headers from "@/components/headers";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
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
      </SessionProvider>
    </html>
  );
}
