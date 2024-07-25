"use client";
import CartItems from "@/components/checkout/cart-items-card";
import PlaceOrderForm from "@/components/forms/place-order-form";
import { useCartStore } from "@/stores/useCartStore";

export default function Checkout() {
  const { cartItems } = useCartStore();
  return (
    <main className="flex items-center justify-center w-full mt-6 min-h-[90vh]">
      {cartItems?.length ? (
        <div className="max-w-screen-xl lg:w-full px-4 flex flex-col md:flex-row items-start gap-12 py-8">
          <PlaceOrderForm />
          <CartItems />
        </div>
      ) : (
        <div className="h-full w-full text-center text-4xl lg:text-7xl font-bold">
          There Is nothing in your cart 🤷‍♂️
        </div>
      )}
    </main>
  );
}
