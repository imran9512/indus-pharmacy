import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CheckOutButton() {
  return (
    <Button
      size={"icon"}
      className="rounded-full bg-[#228be61a] text-[#228be6] hover:bg-[#228be61a]"
      asChild
    >
      <Link href={"/checkout"} className="relative">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </span>
        <span className="flex items-center justify-center h-2 w-2 rounded-full bg-[#228be6] text-white p-2 text-sm absolute top-0 -right-2">
          1
        </span>
      </Link>
    </Button>
  );
}
