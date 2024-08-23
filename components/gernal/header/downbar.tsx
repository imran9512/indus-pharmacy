"use client";
import { Home } from "lucide-react";
import Searchbar from "./searchbar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CheckOutButton from "./checkout-button";
export default function DownBar() {
  const pathname = usePathname();
  return (
    <div className="py-6 bg-white z-50 border-t sticky w-full bottom-0 lg:hidden">
      <div className="flex items-center gap-3 justify-between px-2">
        <Searchbar mobile className="mx-auto" />
        <div className="flex items-center gap-3">
          <Link
            href={"/"}
            className={cn(
              "p-2",
              pathname === "/"
                ? "bg-[#228be61a] text-[#228be6] rounded-full"
                : ""
            )}
          >
            <Home />
          </Link>
          <CheckOutButton mobile />
        </div>
      </div>
    </div>
  );
}
