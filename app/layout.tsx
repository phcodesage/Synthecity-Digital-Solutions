import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LatestBlogsSection from "./components/LatestBlogsSection";
import SuccessStories from "./components/SuccessStories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SynthecITy - Digital Solutions",
  description: "We Transform Ideas into Digital Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen pt-[78px]">{children}</main>
        <SuccessStories />
        <LatestBlogsSection />
        <Footer />
      </body>
    </html>
  );
}
