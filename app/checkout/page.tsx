import CartItems from "@/components/checkout/cart-items-card";
import PlaceOrderForm from "@/components/forms/place-order-form";

export default function Checkout() {
  return (
    <main className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full px-4 flex items-start">
        <CartItems />
        <PlaceOrderForm />
      </div>
    </main>
  );
}
