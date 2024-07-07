import ProductCarousel from "@/components/checkout/product-carousel";
import AddToCart from "@/components/product-checkout/add-to-cart";
import ProductHeader from "@/components/product-checkout/product-header";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { notFound } from "next/navigation";

type ProductSlug = {
  params: { product: string };
};
export default async function Product({ params }: ProductSlug) {
  const productSlug = params.product;
  const product = await getProductBySlug(productSlug);
  if (!productSlug) {
    notFound();
  }

  return (
    <main className="flex items-center justify-center min-h-[90vh] mt-6">
      {product && (
        <article className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl px-4 w-full gap-12">
          <div className="lg:flex-1 lg:basis-1/2 w-full border p-8 rounded-lg">
            <ProductCarousel
              images={product.images}
              productName={product.name}
            />
          </div>
          <div className="p-4 max-w-xl md:p-10 mb-10 lg:basis-1/2 w-full lg:ml-auto border rounded-lg">
            <ProductHeader
              productName={product?.name}
              inStock={product?.in_stock}
              price={product.price}
              quantity={product.amount}
              brandName={product.brand}
            />
            <AddToCart product={product} />
            <p className="text-xs text-zinc-600 pb-8">{product.description}</p>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-xs text-zinc-600">Origin</p>
                <p className="text-xs text-zinc-600">
                  {product.imported_from.toLowerCase() ===
                  product.made_in.toLowerCase()
                    ? `Made in and imported from ${product.imported_from}`
                    : `Made in ${product.made_in}, imported from ${product.imported_from}`}
                </p>
              </div>
              <div>
                <p className="font-semibold text-xs text-zinc-600">Brand</p>
                <p className="text-xs text-zinc-600">{product.brand}</p>
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
                  {product.additional_info}
                </p>
              </div>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}
