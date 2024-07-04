// stores/useCartStore.ts
import { create } from "zustand";
import { Product } from "@/types/product-schemas";

type CartStore = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.id !== Number(productId)
      ),
    })),
}));
