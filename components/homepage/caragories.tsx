import Link from "next/link";
import { AllCatagories } from "@/constants/catagories";
export default function Categories() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold mb-6 text-center">
        Categories and Tags
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-8">
        {AllCatagories.map((catagory) => (
          <Link
            key={catagory.slug}
            href={catagory.slug}
            className="text-2xl font-bold p-4 border text-center rounded-xl shadow-md"
          >
            {catagory.main_catagory}
          </Link>
        ))}
      </div>
    </div>
  );
}
