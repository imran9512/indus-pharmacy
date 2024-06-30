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
      <article className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl px-4 w-full bg-green-100">
        <div className="lg:flex-1 lg:basis-1/2 w-full"></div>
        <div className="p-4 max-w-xl md:p-10 mt-4 mb-10 lg:basis-1/2 bg-red-100 w-full lg:ml-auto">
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
          <p className="text-xs text-zinc-600 pb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            nobis illum perferendis sint repudiandae quaerat officia doloremque,
            doloribus incidunt soluta odio. Sint, deserunt eaque. Voluptatem
            ipsa ab obcaecati corrupti libero!
          </p>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-xs text-zinc-600">Origin</p>
              <p className="text-xs text-zinc-600">
                Made in and imported from India
              </p>
            </div>
            <div>
              <p className="font-semibold text-xs text-zinc-600">Brand</p>
              <p className="text-xs text-zinc-600">Blah Blah</p>
            </div>
            <div>
              <p className="font-semibold text-xs text-zinc-600">
                Active Substance
              </p>
              <p className="text-xs text-zinc-600">Temozokomide</p>
            </div>
            <div>
              <p className="font-semibold text-xs text-zinc-600">
                Additional Information
              </p>
              <p className="text-xs text-zinc-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                aperiam error, laboriosam, culpa quidem exercitationem minus
                vero a sed velit nam minima deleniti quis obcaecati asperiores
                quisquam dolorem voluptate maxime!
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
