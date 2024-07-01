import { AllCatagories } from "@/constants/catagories";
export function getSubcategoriesBySlug(slug: string): string[] | undefined {
  const category = AllCatagories.find((cat) => cat.slug === slug);
  return category ? category.sub_catagories : undefined;
}
