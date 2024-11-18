import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

type ProductHeaderType = {
  brandName: string;
  inStock?: boolean;
  productName: string;
  sku: string;
  price: number;
  quantity: string;
  averageRating: number;
};

export default function ProductHeader({
  brandName,
  sku,
  inStock = true,
  productName,
  price,
  quantity,
  averageRating,
}: ProductHeaderType) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 >= 0.5; // Check for half-star
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, index) => (
          <Star
            key={`full-${index}`}
            className="text-yellow-500 fill-yellow-500"
          />
        ))}
        {hasHalfStar && (
          <Star
            key="half"
            className="text-yellow-500 fill-yellow-500"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <Star key={`empty-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <header className="flex flex-col gap-1">
      <div className="w-full flex items-center justify-between">
        <p className="text-xs text-zinc-600">{brandName}</p>
        <div
          className={cn(
            "p-3 h-4 flex items-center justify-center gap-2 rounded-xl font-semibold",
            inStock
              ? "bg-green-300/40 text-green-700"
              : "bg-red-300/40 text-red-700"
          )}
        >
          <p className="text-sm">{inStock ? "In Stock" : "Out Of Stock"}</p>
        </div>
      </div>
      <h2 className="text-2xl font-bold text-[#228be6]">{productName}</h2>
      <p className="text-zinc-600">SKU {sku}</p>
      <h4 className="text-zinc-600">Rs {price}</h4>
      <p className="text-xs text-zinc-600">{quantity}</p>
      <div className="mt-2 flex items-center gap-2">
        <div>{renderStars(averageRating)}</div>
        <p className="text-sm text-zinc-600">{averageRating.toFixed(1)} / 5</p>
      </div>
    </header>
  );
}
