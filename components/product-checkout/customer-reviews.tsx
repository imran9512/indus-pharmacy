import { ReviewsType } from "@/types/product-schemas";

export default function CustomerReviews({
  reviews,
}: {
  reviews: ReviewsType[];
}) {
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length === 0 ? (
        <p className="text-zinc-600">No reviews yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {review.reviewer_name}
                </h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-5 h-5 ${
                        starIndex < review.stars
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-gray-300"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l2.923 7.447h7.852l-6.35 4.934 2.923 7.447L12 16.894l-6.35 4.934 2.923-7.447-6.35-4.934h7.852z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-sm text-zinc-500 mb-2">{review.review_text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
