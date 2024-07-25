import { cn } from "@/lib/utils";

type ProductHeaderType = {
  brandName: string;
  inStock?: boolean;
  productName: string;
  price: number;
  quantity: string;
};
export default function ProductHeader({
  brandName,
  inStock = true,
  productName,
  price,
  quantity,
}: ProductHeaderType) {
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
      <h4 className="text-2xl font-bold text-[#228be6]">{productName}</h4>
      <p className="text-zinc-600">Rs {price}</p>
      <p className="text-xs text-zinc-600">{quantity}</p>
    </header>
  );
}
