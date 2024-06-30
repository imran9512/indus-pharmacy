import AddToCart from "@/components/product-checkout/add-to-cart";
import { notFound } from "next/navigation";

type ProductSlug = {
  params: { product: string };
};
export default function Product({ params }: ProductSlug) {
  const productSlug = params.product;
  console.log(productSlug);
  if (!productSlug) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center">
      <article className="flex flex-col items-center justify-between max-w-screen-xl lg:px-4 w-full bg-green-100">
        <div className="flex-1 basis-1/2 w-full"></div>
        <div className="px-4 max-w-xl md:p-10 mt-4 mb-10 basis-1/2 bg-red-100 w-full ml-auto">
          <header className="flex flex-col gap-1">
            <div className="w-full flex items-center justify-between">
              <p className="text-xs text-zinc-600">Brand Name</p>
              <div className="p-3 h-4 border-zinc-500 border flex items-center justify-center gap-2 rounded-xl">
                <div className="h-2 w-2 bg-green-700 rounded-full" />
                <p className="text-sm">In Stock</p>
              </div>
            </div>
            <h4 className="text-2xl font-bold">Temotaj 100mg</h4>
            <p className="text-zinc-600">Rs 1000</p>
            <p className="text-xs text-zinc-600">5 Capsoules</p>
          </header>
          <AddToCart />
        </div>
      </article>
    </main>
  );
}
