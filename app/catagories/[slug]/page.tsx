import SubCatagories from "@/components/catagories/sub-catagories";
type CatagorySlug = {
  params: { slug: string };
};
export default function CatagoriesPage({ params }: CatagorySlug) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <SubCatagories slug={params.slug} />
    </main>
  );
}
