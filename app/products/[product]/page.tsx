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

  return <main></main>;
}
