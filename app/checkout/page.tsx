import CartItems from "@/components/checkout/cart-items-card";

export default function Checkout() {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full px-4 flex items-start">
        <CartItems />
      </div>
    </main>
  );
}
