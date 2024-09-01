import type { AllProductsType } from "@/types/product-schemas";

export const AllProducts: AllProductsType = [
  {
    id: 1,     
    name: "Ritalin 10mg",
    slug: "buy-Ritalin-10mg-price-in-pakistan",
    brand: "Novartis",
    ingredients: ["Methylphenidate"],
    price: 6850,
    description: `Ritalin 10mg is use to trat ADHD in humen`,
    made_in: "Spain",
    imported_from: "USA",
    active_substances: ["Methylphenidate"],
    additional_info: `main article here`,
    in_stock: true,
    images: [
      "p1.jpg",
      "p2.jpg",
      "p3.jpg",
      "p4.jpg",
    ],
    amount: "30 tablet per pack",
    catagories: ["ADHD" , "" , "" ],
    reviews: [
      {
        reviewer_name: "khawar khan",
        review_text: "The best product for ADHD",
        stars: 4,
      },
    ],
  },
];
