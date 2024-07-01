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
        <div className="p-3 h-4 border-zinc-500 border flex items-center justify-center gap-2 rounded-xl">
          <div
            className={cn(
              "h-2 w-2 bg-green-700 rounded-full",
              inStock ? "bg-green-700" : "bg-red-700"
            )}
          />
          <p className="text-sm">{inStock ? "In Stock" : "Out Of Stock"}</p>
        </div>
      </div>
      <h4 className="text-2xl font-bold">{productName}</h4>
      <p className="text-zinc-600">Rs {price}</p>
      <p className="text-xs text-zinc-600">{quantity}</p>
    </header>
  );
}
