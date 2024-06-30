import { AllProducts } from "@/constants/all-products";
import { Product } from "@/types/product-schemas";
export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const product = AllProducts.find((product) =>
    product.catagories.includes(slug)
  );
  return product;
}
