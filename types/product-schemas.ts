import { z } from "zod";

const reviewSchema = z.object({
  reviewer_name: z.string(),
  stars: z.number().min(1).max(5),
  review_text: z.string(),
});
const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  sku: z.string(),
  slug: z.string(),
  brand: z.string(),
  ingredients: z.array(z.string()),
  price: z.number(),
  description: z.string(),
  made_in: z.string(),
  imported_from: z.string(),
  active_substances: z.array(z.string()),
  additional_info: z.string(),
  in_stock: z.boolean(),
  images: z.array(z.string()),
  amount: z.string(),
  catagories: z.array(z.string()),
  reviews: z.array(reviewSchema),
});

const allProductsSchema = z.array(productSchema);

type Product = z.infer<typeof productSchema>;
type AllProductsType = z.infer<typeof allProductsSchema>;

export { productSchema, allProductsSchema };
export type { Product, AllProductsType };
