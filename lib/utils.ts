import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
type Review = {
  reviewer_name: string;
  stars: number;
  review_text: string;
};

export function calculateAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0;

  const totalStars = reviews.reduce((sum, review) => sum + review.stars, 0);
  return parseFloat((totalStars / reviews.length).toFixed(2));
}
