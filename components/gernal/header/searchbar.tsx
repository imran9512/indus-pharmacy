"use client";
import { Input } from "@/components/ui/input";
import { Product } from "@/types/product-schemas";
import { Search } from "lucide-react";
import { useState } from "react";
import { AllProducts } from "@/constants/all-products";
import Link from "next/link";

export default function Searchbar() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    filterProducts(value);
  }

  function filterProducts(query: string) {
    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const lowerCaseQuery = query.toLowerCase();
      const filtered = AllProducts.filter((product) => {
        const productNameMatch = product.name
          .toLowerCase()
          .includes(lowerCaseQuery);
        const brandMatch = product.brand.toLowerCase().includes(lowerCaseQuery);
        const ingredientMatch = product.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(lowerCaseQuery)
        );

        return productNameMatch || brandMatch || ingredientMatch;
      });

      setFilteredProducts(filtered);
    }
  }

  return (
    <div className="relative">
      <div className="hidden lg:block max-w-lg mx-5 min-w-96 relative">
        <div className="bg-[#f1f3f5] w-full">
          <Search className="absolute top-0 left-0 h-full w-4 ml-4" />
          <Input
            className="bg-transparent border border-none focus:border-[#228be6] focus:ring-0 focus-within:ring-0 w-full px-10"
            onChange={handleChange}
            placeholder="Search"
          />
        </div>
      </div>
      {query && (
        <ol className="absolute top-12 bg-white w-full py-2 max-h-96 overflow-y-auto">
          {filteredProducts.map((product) => {
            let matchText = "";

            if (product.name.toLowerCase().includes(query.toLowerCase())) {
              matchText = product.name;
            } else if (
              product.brand.toLowerCase().includes(query.toLowerCase())
            ) {
              matchText = product.brand;
            } else {
              const matchedIngredient = product.ingredients.find((ingredient) =>
                ingredient.toLowerCase().includes(query.toLowerCase())
              );
              if (matchedIngredient) {
                matchText = matchedIngredient;
              }
            }

            return (
              <li key={product.id}>
                <Link
                  className="px-4 inline-block py-2 border-b w-full"
                  href={`/products/${product.slug}`}
                >
                  {matchText}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
}
