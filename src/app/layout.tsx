import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Headers from "../components/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pang LAN ",
  description: "FANTASTIC,but noting",
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
      </body>
    </html>
  );
}
