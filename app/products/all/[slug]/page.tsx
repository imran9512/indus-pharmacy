import ProductThumbnail from "@/components/product-checkout/product-thumbnail";
import { getProductsByCategorySlug } from "@/lib/getProductBySlug";
import { Columns4, Globe, Pill } from "lucide-react";

type SearchedProduct = {
  params: { slug: string };
};
export default function SearchedProduct({ params }: SearchedProduct) {
  const products = getProductsByCategorySlug(params.slug);

  return (
    <main className="flex items-center justify-center">
      <section className="max-w-screen-xl w-full overflow-hidden">
        <div className="grid items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {products.map((product) => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
