import { Product } from "@/types/product-schemas";
import { Globe, Columns4, Pill } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type ProductThumbnailProps = {
  product: Product;
};
export default function ProductThumbnail({ product }: ProductThumbnailProps) {
  return (
    <Link
      className="px-4 py-2 border max-w-96 block"
      href={`/products/${product.slug}`}
    >
      <h4 className="text-2xl font-bold mb-2 rounded-lg">{product.name}</h4>
      <div className="rounded-lg mb-4">
        <Image
          src={`/assets/products/${product.images[0]}`}
          alt={`${product.name} Image`}
          width={600}
          height={900}
          className="object-cover h-52 w-full"
        />
      </div>
      <ol className="flex flex-col gap-3">
        <li className="flex items-center gap-2">
          <Globe className="self-start size-6" />
          <p>{product.brand}</p>
        </li>
        {product.ingredients?.length && (
          <li className="flex items-center gap-2 ">
            <Columns4 className="self-start size-6" />
            <ol className="flex items-center gap-1">
              {product.ingredients.map((salt, index) => (
                <li key={index}>{salt}</li>
              ))}
            </ol>
          </li>
        )}
        {product.price && (
          <li className="flex items-center gap-2">
            <span className="size-6">RS</span>
            <p>{product.price}</p>
          </li>
        )}
      </ol>
    </Link>
  );
}
