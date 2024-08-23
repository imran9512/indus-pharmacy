import type { AllProductsType } from "@/types/product-schemas";

export const AllProducts: AllProductsType = [
  {
    id: 1,
    name: "Product 1",
    slug: "product1",
    brand: "Sartaj Pharma",
    ingredients: [""],
    price: 5000,
    description: `Sorafenib is used to treat kidney, liver, and thyroid cancer. It works by slowing or stopping the growth of cancer cells.`,
    made_in: "India",
    imported_from: "India",
    active_substances: ["Sorafenib"],
    additional_info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  aperiam error, laboriosam, culpa quidem exercitationem minus
                  vero a sed velit nam minima deleniti quis obcaecati asperiores
                  quisquam dolorem voluptate maxime!`,
    in_stock: false,
    images: [
      "p1.jpg",
      "p2.jpg",
      "p3.jpg",
      "p4.jpg",
    ],
    amount: "5 Capsules",
    catagories: ["Alcohol Dependence", "Panic Disorder", "Drug Addiction"],
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
    name: "product 2",
    slug: "product2",
    brand: "Sartaj Pharma",
    ingredients: [""],
    price: 12000,
    description: `Sorafenib is used to treat kidney, liver, and thyroid cancer. It works by slowing or stopping the growth of cancer cells.`,
    active_substances: ["Sorafenib"],
    made_in: "USA",
    imported_from: "UK",
    additional_info: "",
    in_stock: true,
    images: [
      "p5.jpg",
      "p6.jpg",
      "p7.jpg",
      "p8.jpg",    ],
    amount: "5 Capsules",
    catagories: [
      "Panic Disorder",
      "Lung Cancer",
      "Prostate Cancer",
      "Drug Addiction",
    ],
    reviews: [
      {
        reviewer_name: "Flame Tyror",
        review_text: "blah blah blah",
        stars: 3,
      },
    ],
  },
  {
    id: 3,
    name: "Product 3",
    slug: "product3",
    brand: "HealthPharm",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 8000,
    description: `This medication is used to treat hypertension and heart diseases.`,
    made_in: "Canada",
    imported_from: "USA",
    active_substances: ["Substance1"],
    additional_info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    in_stock: true,
    images: [
      "product-3.1.jpg",
      "product-3.2.jpg",
      "product-3.3.jpg",
      "product-3.4.jpg",
    ],
    amount: "10 Tablets",
    catagories: ["Hypertension"],
    reviews: [
      {
        reviewer_name: "John Doe",
        review_text: "Very effective.",
        stars: 4,
      },
    ],
  },
  {
    id: 4,
    name: "Product 4",
    slug: "product4",
    brand: "MediHealth",
    ingredients: ["Ingredient1"],
    price: 3000,
    description: `This is a pain relief medication used for treating mild to moderate pain.`,
    made_in: "UK",
    imported_from: "Canada",
    active_substances: ["Substance2"],
    additional_info: `Consectetur adipiscing elit.`,
    in_stock: true,
    images: [
      "product-4.1.jpg",
      "product-4.2.jpg",
      "product-4.3.jpg",
      "product-4.4.jpg",
    ],
    amount: "20 Tablets",
    catagories: ["Pain Relief"],
    reviews: [
      {
        reviewer_name: "Jane Smith",
        review_text: "Worked great for my pain.",
        stars: 5,
      },
    ],
  },
  {
    id: 5,
    name: "Product 5",
    slug: "product5",
    brand: "Wellness Corp",
    ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
    price: 6000,
    description: `Used for improving immune system function.`,
    made_in: "Germany",
    imported_from: "France",
    active_substances: ["Substance3"],
    additional_info: `Adipiscing elit.`,
    in_stock: false,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "15 Capsules",
    catagories: ["Immune Support", "Drug Addiction"],
    reviews: [
      {
        reviewer_name: "Emily Clark",
        review_text: "Highly recommend.",
        stars: 5,
      },
    ],
  },
  {
    id: 6,
    name: "Product 6",
    slug: "product6",
    brand: "FitLife",
    ingredients: ["Ingredient1"],
    price: 4500,
    description: `This is a dietary supplement for weight loss.`,
    made_in: "Australia",
    imported_from: "India",
    active_substances: ["Substance4"],
    additional_info: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    in_stock: true,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "30 Capsules",
    catagories: ["Weight Loss"],
    reviews: [
      {
        reviewer_name: "Mark Brown",
        review_text: "Lost 5 pounds in a month!",
        stars: 4,
      },
    ],
  },
  {
    id: 7,
    name: "Product 7",
    slug: "product7",
    brand: "NatureCare",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 7000,
    description: `Herbal supplement for general well-being.`,
    made_in: "India",
    imported_from: "Australia",
    active_substances: ["Substance5"],
    additional_info: `Ut enim ad minim veniam, quis nostrud exercitation ullamco.`,
    in_stock: false,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "50 Capsules",
    catagories: ["Wellness", "Drug Addiction"],
    reviews: [
      {
        reviewer_name: "Sarah Lee",
        review_text: "Feel better after taking this.",
        stars: 4,
      },
    ],
  },
  {
    id: 8,
    name: "Product 8",
    slug: "product8",
    brand: "CardioPlus",
    ingredients: ["Ingredient1"],
    price: 9000,
    description: `Medication for heart disease prevention.`,
    made_in: "USA",
    imported_from: "Canada",
    active_substances: ["Substance6"],
    additional_info: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.`,
    in_stock: true,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "10 Tablets",
    catagories: ["Heart Health", "Alcohol Dependence"],
    reviews: [
      {
        reviewer_name: "Tom Wilson",
        review_text: "Good for my heart condition.",
        stars: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Product 9",
    slug: "product9",
    brand: "GastroHeal",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 11000,
    description: `Used for treating gastrointestinal issues.`,
    made_in: "Japan",
    imported_from: "South Korea",
    active_substances: ["Substance7"],
    additional_info: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "20 Tablets",
    catagories: ["Gastrointestinal Health", "Alcohol Dependence"],
    reviews: [
      {
        reviewer_name: "Lucy Gray",
        review_text: "Helped my stomach issues.",
        stars: 4,
      },
    ],
  },
  {
    id: 10,
    name: "Product 10",
    slug: "product10",
    brand: "Dermacare",
    ingredients: ["Ingredient1"],
    price: 13000,
    description: `Cream for treating skin conditions like eczema.`,
    made_in: "South Korea",
    imported_from: "Japan",
    active_substances: ["Substance8"],
    additional_info: `Lorem ipsum dolor sit amet.`,
    in_stock: false,
    images: [
      "product-3.1.jpg",
      "product-3.2.jpg",
      "product-3.3.jpg",
      "product-3.4.jpg",
    ],
    amount: "50 ml",
    catagories: ["Dermatology", "Alcohol Dependence", "Breast Cancer"],
    reviews: [
      {
        reviewer_name: "Anna White",
        review_text: "Cleared up my skin condition.",
        stars: 5,
      },
    ],
  },
  {
    id: 11,
    name: "Product 11",
    slug: "product11",
    brand: "VisionPlus",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 15000,
    description: `Supplements for improving vision.`,
    made_in: "India",
    imported_from: "China",
    active_substances: ["Substance9"],
    additional_info: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "60 Tablets",
    catagories: ["Vision Health", "PCD Type 2"],
    reviews: [
      {
        reviewer_name: "David Brown",
        review_text: "Noticed improvement in vision.",
        stars: 4,
      },
    ],
  },
  {
    id: 12,
    name: "Product 12",
    slug: "product12",
    brand: "MindCare",
    ingredients: ["Ingredient1"],
    price: 20000,
    description: `Medication for treating anxiety and depression.`,
    made_in: "UK",
    imported_from: "USA",
    active_substances: ["Substance10"],
    additional_info: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur.`,
    in_stock: true,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "30 Capsules",
    catagories: ["Mental Health", "PCD Type 2"],
    reviews: [
      {
        reviewer_name: "Catherine Jones",
        review_text: "Helped with my anxiety.",
        stars: 5,
      },
    ],
  },
  {
    id: 13,
    name: "Product 13",
    slug: "product13",
    brand: "BoneHealth",
    ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
    price: 17000,
    description: `Supplements for bone health and osteoporosis prevention.`,
    made_in: "Canada",
    imported_from: "USA",
    active_substances: ["Substance11"],
    additional_info: `Neque porro quisquam est, qui dolorem ipsum quia dolor.`,
    in_stock: true,
    images: [
      "product-2.1.jpg",
      "product-2.2.jpg",
      "product-2.3.jpg",
      "product-2.4.jpg",
    ],
    amount: "90 Tablets",
    catagories: ["Bone Health", "PCD Type 2"],
    reviews: [
      {
        reviewer_name: "Daniel Green",
        review_text: "Good for my bones.",
        stars: 4,
      },
    ],
  },
  {
    id: 14,
    name: "Product 14",
    slug: "product14",
    brand: "HairCare",
    ingredients: ["Ingredient1"],
    price: 25000,
    description: `Serum for hair growth and preventing hair loss.`,
    made_in: "Australia",
    imported_from: "India",
    active_substances: ["Substance12"],
    additional_info: `Ut labore et dolore magnam aliquam quaerat voluptatem.`,
    in_stock: false,
    images: [
      "product-2.1.jpg",
      "product-2.2.jpg",
      "product-2.3.jpg",
      "product-2.4.jpg",
    ],
    amount: "100 ml",
    catagories: ["Hair Health", "PCD Type 2"],
    reviews: [
      {
        reviewer_name: "Michelle Harris",
        review_text: "Hair growth improved.",
        stars: 5,
      },
    ],
  },
  {
    id: 15,
    name: "Product 15",
    slug: "product15",
    brand: "SleepWell",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 22000,
    description: `Tablets for treating insomnia and improving sleep quality.`,
    made_in: "Germany",
    imported_from: "UK",
    active_substances: ["Substance13"],
    additional_info: `Enim ad minima veniam, quis nostrum exercitationem ullam corporis.`,
    in_stock: true,
    images: [
      "product-4.1.jpg",
      "product-4.2.jpg",
      "product-4.3.jpg",
      "product-4.4.jpg",
    ],
    amount: "30 Tablets",
    catagories: ["Sleep Health", "Gambling Addiction"],
    reviews: [
      {
        reviewer_name: "Peter Clark",
        review_text: "Sleeping better now.",
        stars: 4,
      },
    ],
  },
  {
    id: 16,
    name: "Product 16",
    slug: "product16",
    brand: "EnergyBoost",
    ingredients: ["Ingredient1"],
    price: 26000,
    description: `Energy drinks for boosting energy levels.`,
    made_in: "USA",
    imported_from: "Canada",
    active_substances: ["Substance14"],
    additional_info: `Laboriosam, nisi ut aliquid ex ea commodi consequatur.`,
    in_stock: true,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "6 Bottles",
    catagories: ["Energy", "Social Anxiety Disorder"],
    reviews: [
      {
        reviewer_name: "Jessica Lee",
        review_text: "Felt more energetic.",
        stars: 4,
      },
    ],
  },
  {
    id: 17,
    name: "Product 17",
    slug: "product17",
    brand: "DiabetesCare",
    ingredients: ["Ingredient1", "Ingredient2", "Ingredient3"],
    price: 19000,
    description: `Medication for managing diabetes.`,
    made_in: "India",
    imported_from: "Australia",
    active_substances: ["Substance15"],
    additional_info: `Quis autem vel eum iure reprehenderit.`,
    in_stock: false,
    images: [
      "product-4.1.jpg",
      "product-4.2.jpg",
      "product-4.3.jpg",
      "product-4.4.jpg",
    ],
    amount: "50 Tablets",
    catagories: ["Diabetes", "Social Anxiety Disorder"],
    reviews: [
      {
        reviewer_name: "Chris Johnson",
        review_text: "Helped manage my diabetes.",
        stars: 5,
      },
    ],
  },
  {
    id: 18,
    name: "Product 18",
    slug: "product18",
    brand: "JointHealth",
    ingredients: ["Ingredient1"],
    price: 28000,
    description: `Supplements for joint health and arthritis.`,
    made_in: "UK",
    imported_from: "USA",
    active_substances: ["Substance16"],
    additional_info: `Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "60 Capsules",
    catagories: ["Joint Health", "Social Anxiety Disorder"],
    reviews: [
      {
        reviewer_name: "Karen Martin",
        review_text: "Joints feel better.",
        stars: 4,
      },
    ],
  },
  {
    id: 19,
    name: "Product 19",
    slug: "product19",
    brand: "KidneyCare",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 30000,
    description: `Medication for kidney health and preventing kidney stones.`,
    made_in: "South Korea",
    imported_from: "Japan",
    active_substances: ["Substance17"],
    additional_info: `Laboris nisi ut aliquip ex ea commodo consequat.`,
    in_stock: true,
    images: [
      "product-5.1.jpg",
      "product-5.2.jpg",
      "product-5.3.jpg",
      "product-5.4.jpg",
    ],
    amount: "40 Tablets",
    catagories: ["Kidney Health", "PCD Type 1"],
    reviews: [
      {
        reviewer_name: "Brian Scott",
        review_text: "No more kidney stones.",
        stars: 5,
      },
    ],
  },
  {
    id: 20,
    name: "Product 20",
    slug: "product20",
    brand: "LiverCare",
    ingredients: ["Ingredient1"],
    price: 32000,
    description: `Supplements for liver health and detoxification.`,
    made_in: "Japan",
    imported_from: "South Korea",
    active_substances: ["Substance18"],
    additional_info: `Eum fugiat quo voluptas nulla pariatur.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "30 Capsules",
    catagories: ["Generalized Anxiety Disorder", "Acne"],
    reviews: [
      {
        reviewer_name: "Olivia Taylor",
        review_text: "Liver function improved.",
        stars: 5,
      },
    ],
  },
  {
    id: 21,
    name: "Product 21",
    slug: "product21",
    brand: "RespiraCare",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 35000,
    description: `Medication for respiratory health and treating asthma.`,
    made_in: "China",
    imported_from: "India",
    active_substances: ["Substance19"],
    additional_info: `Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.`,
    in_stock: true,
    images: [
      "product-4.1.jpg",
      "product-4.2.jpg",
      "product-4.3.jpg",
      "product-4.4.jpg",
    ],
    amount: "20 Tablets",
    catagories: ["Respiratory Health", "Acne"],
    reviews: [
      {
        reviewer_name: "Sophia Adams",
        review_text: "Breathing easier now.",
        stars: 4,
      },
    ],
  },
  {
    id: 22,
    name: "Product 22",
    slug: "product22",
    brand: "AllergyRelief",
    ingredients: ["Ingredient1"],
    price: 37000,
    description: `Medication for treating allergies and hay fever.`,
    made_in: "France",
    imported_from: "Germany",
    active_substances: ["Substance20"],
    additional_info: `Sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    in_stock: false,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "10 Tablets",
    catagories: ["Allergy", "Dermatitis"],
    reviews: [
      {
        reviewer_name: "William Brown",
        review_text: "No more allergies.",
        stars: 5,
      },
    ],
  },
  {
    id: 23,
    name: "Product 23",
    slug: "product23",
    brand: "ProbioticPlus",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 40000,
    description: `Probiotics for improving gut health.`,
    made_in: "USA",
    imported_from: "Canada",
    active_substances: ["Substance21"],
    additional_info: `Et harum quidem rerum facilis est et expedita distinctio.`,
    in_stock: true,
    images: [""],
    amount: "90 Capsules",
    catagories: ["Gut Health", "Dermatitis"],
    reviews: [
      {
        reviewer_name: "Linda Clark",
        review_text: "Gut health improved.",
        stars: 4,
      },
    ],
  },
  {
    id: 24,
    name: "Product 24",
    slug: "product24",
    brand: "CalmEase",
    ingredients: ["Ingredient1"],
    price: 42000,
    description: `Herbal supplement for stress relief and relaxation.`,
    made_in: "UK",
    imported_from: "USA",
    active_substances: ["Substance22"],
    additional_info: `Nam libero tempore, cum soluta nobis est eligendi optio.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "60 Capsules",
    catagories: ["Stress Relief", "Psoriasis"],
    reviews: [
      {
        reviewer_name: "Kevin Lee",
        review_text: "Feeling much calmer.",
        stars: 4,
      },
    ],
  },
  {
    id: 25,
    name: "Product 25",
    slug: "product25",
    brand: "AntiInflam",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 45000,
    description: `Medication for reducing inflammation and pain.`,
    made_in: "Australia",
    imported_from: "India",
    active_substances: ["Substance23"],
    additional_info: `Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.`,
    in_stock: true,
    images: [""],
    amount: "20 Tablets",
    catagories: [
      "Anti Inflammatory",
      "Psoriasis",
      "Moisturizers",
      "Sunscreens",
      "Sleep Apnea",
      "Narcolepsy",
    ],
    reviews: [
      {
        reviewer_name: "Emma Taylor",
        review_text: "Pain and inflammation reduced.",
        stars: 5,
      },
    ],
  },
  {
    id: 26,
    name: "Product 26",
    slug: "product26",
    brand: "VitaBoost",
    ingredients: ["Ingredient1"],
    price: 47000,
    description: `Vitamins and supplements for overall health.`,
    made_in: "India",
    imported_from: "China",
    active_substances: ["Substance24"],
    additional_info: `Itaque earum rerum hic tenetur a sapiente delectus.`,
    in_stock: true,
    images: [""],
    amount: "90 Capsules",
    catagories: ["Vitamins", "Anti Aging Products", "Insomnia"],
    reviews: [
      {
        reviewer_name: "Nancy Wilson",
        review_text: "Feeling healthier.",
        stars: 4,
      },
    ],
  },
  {
    id: 27,
    name: "Product 27",
    slug: "product27",
    brand: "MenoEase",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 49000,
    description: `Supplements for managing menopause symptoms.`,
    made_in: "Canada",
    imported_from: "USA",
    active_substances: ["Substance25"],
    additional_info: `Aut odit aut fugit, sed quia consequuntur magni dolores eos.`,
    in_stock: true,
    images: [""],
    amount: "60 Capsules",
    catagories: [
      "Menopause",
      "Anti Aging Products",
      "Sleep Apnea",
      "Narcolepsy",
    ],
    reviews: [
      {
        reviewer_name: "Patricia Moore",
        review_text: "Menopause symptoms eased.",
        stars: 4,
      },
    ],
  },
  {
    id: 28,
    name: "Product 28",
    slug: "product28",
    brand: "HeartShield",
    ingredients: ["Ingredient1"],
    price: 50000,
    description: `Medication for reducing cholesterol and preventing heart disease.`,
    made_in: "UK",
    imported_from: "USA",
    active_substances: ["Substance26"],
    additional_info: `Architecto beatae vitae dicta sunt explicabo.`,
    in_stock: false,
    images: [""],
    amount: "30 Tablets",
    catagories: ["Heart Health"],
    reviews: [
      {
        reviewer_name: "George King",
        review_text: "Cholesterol levels improved.",
        stars: 5,
      },
    ],
  },
  {
    id: 29,
    name: "Product 29",
    slug: "product29",
    brand: "ThyroCare",
    ingredients: ["Ingredient1", "Ingredient2"],
    price: 52000,
    description: `Medication for managing thyroid conditions.`,
    made_in: "USA",
    imported_from: "Canada",
    active_substances: ["Substance27"],
    additional_info: `Nemo enim ipsam voluptatem quia voluptas sit aspernatur.`,
    in_stock: true,
    images: [""],
    amount: "50 Tablets",
    catagories: ["Thyroid Health"],
    reviews: [
      {
        reviewer_name: "Rachel Turner",
        review_text: "Thyroid condition managed well.",
        stars: 4,
      },
    ],
  },
  {
    id: 30,
    name: "Product 30",
    slug: "product30",
    brand: "MemoryPlus",
    ingredients: ["Ingredient1"],
    price: 54000,
    description: `Supplements for improving memory and cognitive function.`,
    made_in: "Japan",
    imported_from: "South Korea",
    active_substances: ["Substance28"],
    additional_info: `Sed quia non numquam eius modi tempora incidunt ut labore et dolore.`,
    in_stock: true,
    images: [
      "product-1.1.jpg",
      "product-1.2.jpg",
      "product-1.3.jpg",
      "product-1.4.jpg",
    ],
    amount: "60 Tablets",
    catagories: ["Memory Health"],
    reviews: [
      {
        reviewer_name: "Michael Allen",
        review_text: "Memory improved.",
        stars: 5,
      },
    ],
  },
];
