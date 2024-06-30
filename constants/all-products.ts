import type { AllProductsType } from "@/types/product-schemas";
export const AllProducts: AllProductsType = [
  {
    id: 1,
    name: "Product 1",
    slug: "product1",
    brand: "Sartaj Pharma",
    ingredients: [""],
    price: 5000,
    description: `Sorafenib is used to treat kidney, liver, and thyroid cancer.It works by slowing or stopping the growth of cancer cells.`,
    origin: "India",
    active_substances: ["Sorafenib"],
    additional_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  aperiam error, laboriosam, culpa quidem exercitationem minus
                  vero a sed velit nam minima deleniti quis obcaecati asperiores
                  quisquam dolorem voluptate maxime!`,
    in_stock: false,
    images: [""],
    amount: "5 Capsules",
    catagories: ["category-1"],
    reviews: [
      {
        reviewer_name: "Flame Tyror",
        review_text: "blah blah blah",
        stars: 3,
      },
    ],
  },
  {
    id: 2,
    name: "bproduct",
    slug: "product2",
    brand: "Sartaj Pharma",
    ingredients: [""],
    price: 12000,
    description: `Sorafenib is used to treat kidney, liver, and thyroid cancer.It works by slowing or stopping the growth of cancer cells.`,
    origin: "USA",
    active_substances: ["Sorafenib"],
    additional_info: "",
    in_stock: true,
    images: [""],
    amount: "5 Capsules",
    catagories: ["category-1"],
    reviews: [
      {
        reviewer_name: "Flame Tyror",
        review_text: "blah blah blah",
        stars: 3,
      },
    ],
  },
];
