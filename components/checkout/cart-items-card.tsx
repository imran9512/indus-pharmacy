import { Delete, Plus, Trash } from "lucide-react";
import { Button } from "../ui/button";

export default function CartItems() {
  return (
    <section className="p-4 border rounded-xl">
      <h1 className="font-bold text-xl">Your Cart</h1>
      <div className="space-y-6 my-6">
        <article className="flex items-center">
          <div className="flex gap-x-2 items-center w-full">
            <div className="h-20 w-20 bg-red-400">
              {/* PProduct Image Here */}
            </div>
            <div className="space-y-1">
              <p className="text-xs text-zinc-500">Vem</p>
              <h5>Medicine 0.5mg/5ml IV</h5>
              <p className="text-xs text-zinc-500">1 x 5x 5ml ampules</p>
              <p className="text-sm text-zinc-700">Rs. 9000</p>
            </div>
            <div className="flex gap-4 items-center self-center">
              <Button size={"icon"} className="bg-red-200 hover:bg-red-200">
                <Trash className="text-[#fa5252] h-6 w-6" />
              </Button>
              <Button
                className="bg-[#228be61a] text-[#228be6] hover:bg-bg-[#228be61a]"
                size={"icon"}
              >
                <Plus />
              </Button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
