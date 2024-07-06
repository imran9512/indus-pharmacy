import { create } from "zustand";
import { Product } from "@/types/product-schemas";

type CartStore = {
  cartItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product) =>
    set((state) => ({
      cartItems: [...state.cartItems, product],
    })),
  removeFromCart: (productId) =>
    set((state) => {
      const index = state.cartItems.findIndex((item) => item.id === productId);
      if (index !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems.splice(index, 1);
        return { cartItems: updatedCartItems };
      }
      return state;
    }),
}));
