"use client";
import Link from "next/link";
import { getSubcategoriesBySlug } from "@/lib/getCatagoriesBySlug";
export default function SubCatagories({ slug }: { slug: string }) {
  const subCatagories = getSubcategoriesBySlug(slug);
  console.log(subCatagories);
  console.log("Slug", slug);
  return (
    <section className="w-full max-w-screen-xl mx-auto">
      <h3 className="text-4xl mb-20 font-bold">
        Products Related{" "}
        <span className="text-[#228be6] capitalize">{slug}</span> are here:
      </h3>
      <ul className="grid grid-cols-3 items-center w-full gap-x-8">
        {subCatagories?.map((catagory) => (
          <Link
            href={`/products/all/${catagory
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            key={catagory}
            className="text-center px-4 bg-[#228be61a] text-[#228be6] py-2 rounded-3xl"
          >
            {catagory}
          </Link>
        ))}
      </ul>
    </section>
  );
}
