"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/stores/useCartStore";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CheckOutButton({
  mobile = false,
}: {
  mobile?: boolean;
}) {
  const { cartItems } = useCartStore();
  const pathname = usePathname();
  return (
    <Button
      size={"icon"}
      className={cn(
        "rounded-full",
        mobile
          ? `${
              pathname !== "/checkout"
                ? "bg-transparent text-black hover:bg-transparent"
                : "bg-[#228be61a] text-[#228be6] hover:bg-[#228be61a]"
            }`
          : "bg-[#228be61a] text-[#228be6] hover:bg-[#228be61a]"
      )}
      asChild
    >
      <Link href={"/checkout"} className="relative">
        <BaggageClaim className="size-6" />
        <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#228be6] text-white p-2 text-sm absolute top-0 -right-2">
          {cartItems.length}
        </span>
      </Link>
    </Button>
  );
}
