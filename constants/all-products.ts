import type { AllProductsType } from "@/types/product-schemas";

export const AllProducts: AllProductsType = [
  {
    id: 1,
    name: "Ritalin 10mg",
    slug: "buy-Ritalin-10mg-price-in-pakistan",
    sku: "RT10",
    brand: "Novartis",
    ingredients: ["Methylphenidate"],
    price: 6850,
    description: `Ritalin, used for treating ADHD, enhances focus and impulse control by increasing dopamine and norepinephrine levels in the brain. It provides effective symptom management and is available in various formulations, including immediate and extended-release, to suit individual needs.`,
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
    catagories: ["ADHD"],
    reviews: [
      {
        reviewer_name: "khawar khan",
        review_text:
          "Thank you for making methylphenidate available in Pakistan! This product has truly transformed my focus and productivity. I’m grateful for the positive impact it’s had on my life.",
        stars: 5,
      },
      {
        reviewer_name: "Imtyaz Raza",
        review_text:
          "I highly recommend methylphenidate for anyone struggling with ADHD. It has significantly improved my concentration and daily functioning. Don’t hesitate to give it a try.",
        stars: 5,
      },
      {
        reviewer_name: "khawar khan",
        review_text:
          "Thank you for making methylphenidate available in Pakistan! This product has truly transformed my focus and productivity. I’m grateful for the positive impact it’s had on my life.",
        stars: 5,
      },
    ],
    metaData: {
      title: "Halogen",
      description: "",
    },
  },
  {
    id: 2,
    name: "Vyas 70mg",
    sku: "vy70",
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
    catagories: ["ADHD"],
    reviews: [
      {
        reviewer_name: "Inam Ul Haq",
        review_text:
          "perfect solution for those who facing attention deficiency",
        stars: 5,
      },
    ],
  },
];
