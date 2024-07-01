import { AllProducts } from "@/constants/all-products";
import { Product } from "@/types/product-schemas";
export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  const product = AllProducts.find((product) => product.slug === slug);
  return product;
}
export function getProductsByCategorySlug(slug: string): Product[] {
  const formattedSlug = slug.replace(/-/g, " ").toLowerCase();
  const products = AllProducts.filter((product) =>
    product.catagories.some(
      (category) => category.toLowerCase() === formattedSlug
    )
  );
  return products;
}
