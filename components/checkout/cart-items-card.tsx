"use client";

import { Plus, Trash, Minus } from "lucide-react";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores/useCartStore";
import Image from "next/image";

export default function CartItems() {
  const { cartItems, addToCart, removeFromCart } = useCartStore();

  const productCountMap = new Map();
  cartItems.forEach((item) => {
    if (productCountMap.has(item.id)) {
      productCountMap.set(item.id, {
        ...item,
        count: productCountMap.get(item.id).count + 1,
      });
    } else {
      productCountMap.set(item.id, { ...item, count: 1 });
    }
  });

  const groupedItems = Array.from(productCountMap.values());

  return (
    <section className="p-4 border rounded-xl min-w-96">
      <h1 className="font-bold text-xl">Your Cart</h1>
      <div className="space-y-6 my-6 w-full">
        {groupedItems.map((item, index) => (
          <article className="flex items-center" key={index}>
            <div className="flex gap-x-4 items-center w-full">
              <div className="h-20 w-20">
                <Image
                  src={`/assets/products/${item.images[0]}`}
                  alt={`${item.name} Image`}
                  width={80}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-zinc-500">{item.brand}</p>
                <h5>{item.name}</h5>
                <p className="text-xs text-zinc-500">{item.amount}</p>
                <p className="text-sm text-zinc-700">
                  Rs. {item.price * item.count}
                </p>
              </div>
              <div className="flex gap-4 items-center self-center ml-auto">
                <Button
                  size={"icon"}
                  className="bg-red-200 hover:bg-red-200"
                  onClick={() => removeFromCart(item.id)}
                >
                  {item.count > 1 ? (
                    <Minus className="text-[#fa5252] size-6" />
                  ) : (
                    <Trash className="text-[#fa5252] size-6" />
                  )}
                </Button>
                <Button
                  className="bg-[#228be61a] text-[#228be6] hover:bg-bg-[#228be61a]"
                  size={"icon"}
                  onClick={() => addToCart(item)}
                >
                  <Plus />
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
