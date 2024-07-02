import { Product } from "@/types/product-schemas";
import { Globe, Columns4, Pill } from "lucide-react";
type ProductThumbnailProps = {
  product: Product;
};
export default function ProductThumbnail({ product }: ProductThumbnailProps) {
  return (
    <div className="px-4 py-2 border">
      <h4 className="text-2xl font-bold mb-2 rounded-lg">{product.name}</h4>
      <p className="mb-4 text-base h-16">{product.description}</p>
      <div className="h-64 w-96 bg-blue-800 rounded-lg mb-4"></div>
      <ol className="flex flex-col gap-3">
        <li className="flex items-center gap-2">
          <Globe className="self-start size-6" />
          <p>
            {product.imported_from.toLowerCase() ===
            product.made_in.toLowerCase()
              ? `Made in and imported from ${product.imported_from}`
              : `Made in ${product.made_in}, imported from ${product.imported_from}`}
          </p>
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
        {product.amount && (
          <li className="flex items-center gap-2 ">
            <Pill className="self-start size-6" />
            <p>{product.amount}</p>
          </li>
        )}
      </ol>
    </div>
  );
}
