import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/gernal/header/header";
import { Toaster } from "@/components/ui/sonner";
import Searchbar from "@/components/gernal/header/searchbar";
import DownBar from "@/components/gernal/header/downbar";
import Footer from "@/components/gernal/footer/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Male Sort",
  description: "Confidential healthcare products for men and women",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-black">
      <body className={cn(inter.className, "flex flex-col min-h-screen")}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <DownBar />
        <Toaster richColors />
      </body>
    </html>
  );
}
