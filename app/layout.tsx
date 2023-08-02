import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "yonahadic - Kanji dictionary",
  description: "Just another Kanji dictionary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full text-text  ">
      <body
        className={`${inter.className} bg-background w-full h-full px-6 sm:px-28 xl:px-60`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
