import Link from "next/link";
import { categories } from "@/constants/catagories";
export default function Catagories() {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 w-full gap-x-8">
      {categories.map((item, index) => (
        <li
          key={index}
          className={`text-sm ${index % 7 === 6 ? "self-end ml-auto" : ""}`}
        >
          <Link href={`/${item.toLowerCase()}`}>{item}</Link>
        </li>
      ))}
    </ul>
  );
}
