import ProductCarousel from "@/components/checkout/product-carousel";
import AddToCart from "@/components/product-checkout/add-to-cart";
import CustomerReviews from "@/components/product-checkout/customer-reviews";
import ProductHeader from "@/components/product-checkout/product-header";
import { getProductBySlug } from "@/lib/getProductBySlug";
import { calculateAverageRating } from "@/lib/utils";
import { notFound } from "next/navigation";

type ProductSlug = {
  params: { product: string };
};

export async function generateMetadata({ params }: ProductSlug) {
  const productSlug = params.product;
  const product = await getProductBySlug(productSlug);

  return {
    title: `${product?.metaData?.title ? product?.metaData?.title : product?.name} | Male Sort`,
    description: product?.metaData?.description,
  };
}

function generateProductSchema(product: any, averageRating: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images, // Array of image URLs
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD", // Replace with your currency
      price: product.price,
      itemCondition: "https://schema.org/NewCondition", // Update condition if necessary
      availability: product.in_stock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: product.reviews.length,
    },
    review: product.reviews.map((review: any) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      datePublished: review.date,
      reviewBody: review.content,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}

export default async function Product({ params }: ProductSlug) {
  const productSlug = params.product;
  const product = await getProductBySlug(productSlug);

  if (!productSlug || !product) {
    notFound();
  }

  const averageRating = calculateAverageRating(product.reviews);
  const productSchema = generateProductSchema(product, averageRating);

  return (
    <main className="flex flex-col items-center justify-center min-h-[90vh] mt-6 max-w-screen-2xl mx-auto overflow-x-hidden">
      {/* JSON-LD injected as part of the DOM */}
      <div style={{ display: "none" }}>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </div>

      {product && (
        <article className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl px-4 w-full gap-6 lg:gap-24">
          <div className="p-4 max-w-xl md:p-10 mb-10 lg:basis-1/2 w-full lg:ml-auto rounded-lg order-2">
            <ProductHeader
              productName={product?.name}
              inStock={product?.in_stock}
              price={product.price}
              quantity={product.amount}
              brandName={product.brand}
              sku={product.sku}
              averageRating={averageRating}
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
              {product.ingredients && (
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-xs text-zinc-600">
                    Ingredients
                  </p>
                  <ol className="flex items-center gap-2">
                    {product.ingredients?.map((ingredient, index) => (
                      <li
                        className="px-1.5 py-0.5 bg-[#228be61a] text-[#228be6] max-w-max rounded-full text-xs"
                        key={index}
                      >
                        {ingredient}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
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
          <div className="lg:basis-1/2 rounded-lg order-1">
            <ProductCarousel
              images={product.images}
              productName={product.name}
            />
          </div>
        </article>
      )}
      <CustomerReviews reviews={product.reviews} />
    </main>
  );
}
