import ProductThumbnail from "@/components/product-checkout/product-thumbnail";
import { AllProducts } from "@/constants/all-products";
export default function ProductsPage() {
  return (
    <main className="flex items-center justify-center mt-12">
      <section className="max-w-screen-xl w-full overflow-hidden">
        <div className="grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {AllProducts.map((product) => (
            <ProductThumbnail key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
