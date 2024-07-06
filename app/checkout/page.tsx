import CartItems from "@/components/checkout/cart-items-card";
import PlaceOrderForm from "@/components/forms/place-order-form";

export default function Checkout() {
  return (
    <main className="flex items-center justify-center w-full">
      <div className="max-w-screen-xl lg:w-full px-4 flex flex-col md:flex-row items-start gap-12 py-8">
        <CartItems />
        <PlaceOrderForm />
      </div>
    </main>
  );
}
