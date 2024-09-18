import type { AllProductsType } from "@/types/product-schemas";

export const AllProducts: AllProductsType = [
  {
    id: 1,     
    name: "Ritalin 10mg",
    slug: "buy-Ritalin-10mg-price-in-pakistan",
    sku: "RT10"
    brand: "Novartis",
    ingredients: ["Methylphenidate"],
    price: 6850,
    description: `Ritalin 10mg is use to trat ADHD in humen`,
    made_in: "Spain",
    imported_from: "USA",
    active_substances: ["Methylphenidate"],
    additional_info: `Ritalin is use to treat ADHD in human`,
    in_stock: true,
    images: [
      "Ritalin 10 - Methylph.jpg",
      "Ritalin 10 - Methylph 2.jpg",
      "Ritalin 10 - Methylph 3.jpg",
    ],
    amount: "30 tablet per pack",
    catagories: ["ADHD" ],
    reviews: [
      {
        reviewer_name: "khawar khan",
        review_text: "The best product for ADHD",
        stars: 4,
      },
     ],
    },
    {
      id: 2,     
      name: "Vyas 70mg",
      slug: "Lisdexamfetamine-70mg-price-in-pakistan",
      brand: "Tekaje",
      ingredients: ["Lisdexamfetamine"],
      price: 19950,
      description: `Lisdexamfetamine treats ADHD and binge eating disorder by boosting neurotransmitter levels, enhancing focus and control. It provides a steady effect with lower abuse potential, working by increasing dopamine and norepinephrine in the brain.`,
      made_in: "Iran",
      imported_from: "UAE",
      active_substances: ["Lisdexamfetamine"],
      additional_info: `main article here`,
      in_stock: true,
      images: [
        "Vyas 70mg 30cap 1.jpg",
        "Vyas 70mg 30cap 2.jpg",
        "Vyas 70mg 30cap 3.jpg",
      ],
      amount: "30 capsule / pack",
      catagories: ["ADHD" ],
      reviews: [
        {
          reviewer_name: "Inam Ul Haq",
          review_text: "perfect solution for those who facing attention deficiency",
          stars: 5,
        },
      ],
     },
];
