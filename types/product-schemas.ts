import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  brand: z.string(),
  ingredients: z.array(z.string()),
  price: z.number(),
  description: z.string(),
  origin: z.string(),
  active_substances: z.array(z.string()),
  additional_info: z.string(),
  in_stock: z.boolean(),
  images: z.array(z.string()),
  amount: z.string(),
  catagories: z.array(z.string()),
});

const allProductsSchema = z.array(productSchema);

type Product = z.infer<typeof productSchema>;
type AllProductsType = z.infer<typeof allProductsSchema>;

export { productSchema, allProductsSchema };
export type { Product, AllProductsType };
