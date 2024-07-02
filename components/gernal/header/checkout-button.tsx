import { Button } from "@/components/ui/button";
import { BaggageClaim } from "lucide-react";
import Link from "next/link";

export default function CheckOutButton() {
  return (
    <Button
      size={"icon"}
      className="rounded-full bg-[#228be61a] text-[#228be6] hover:bg-[#228be61a]"
      asChild
    >
      <Link href={"/checkout"} className="relative">
        <BaggageClaim className="size-6" />
        <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#228be6] text-white p-2 text-sm absolute top-0 -right-2">
          1
        </span>
      </Link>
    </Button>
  );
}
