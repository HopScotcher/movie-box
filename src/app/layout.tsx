import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SearchBar from "@/components/MainPageComponents.tsx/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Box",
  description: "Movies galore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchBar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
