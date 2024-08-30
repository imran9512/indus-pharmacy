import type { AllProductsType } from "@/types/product-schemas";

export const AllProducts: AllProductsType = [
  {
    id: 1,     
    name: "Ritalin 10mg",
    slug: "buy-Ritalin-10mg-price-in-pakistan",
    brand: "Novartis",
    ingredients: ["Methylphenidate" , "check"],
    price: 6850,
    description: "Ritalin 10mg is use to trat ADHD in humen",
    made_in: "Made in Spain",
    imported_from: "Spain",
    active_substances: ["Methylphenidate"],
    additional_info: "main article here1234",
    in_stock: "true",
    images: [
      "p5.jpg",
      "p6.jpg",
      "p7.jpg",
      "p8.jpg",
    ],
    amount: "30 tablet per pack",
    catagories: ["Alcohol Dependence", "Panic Disorder", "Drug Addiction" ],
    reviews: [
      {
        reviewer_name: "khawar khan",
        review_text: "The best product for ADHD",
        stars: 5,
      },
    ],
  },
];