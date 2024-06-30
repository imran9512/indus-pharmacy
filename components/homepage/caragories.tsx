import Link from "next/link";

export default function Categories() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-4xl font-bold mb-6">Categories and Tags</h2>
      <div className="grid grid-cols-3 gap-x-12 gap-8">
        <Link
          href={"/"}
          className="text-2xl font-bold p-4 border text-center rounded-xl shadow-md"
        >
          Catagory One
        </Link>
        <Link
          href={"/"}
          className="text-2xl font-bold p-4 border text-center rounded-xl shadow-md"
        >
          Catagory One
        </Link>
        <Link
          href={"/"}
          className="text-2xl font-bold p-4 border text-center rounded-xl shadow-md"
        >
          Catagory One
        </Link>
        <Link
          href={"/"}
          className="text-2xl font-bold p-4 border text-center rounded-xl shadow-md"
        >
          Catagory One
        </Link>
      </div>
    </div>
  );
}
