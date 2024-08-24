"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { sendMail } from "@/lib/sendMail";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import { useCartStore } from "@/stores/useCartStore";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  LEPORIDS_SHIPPING_CHARGES,
  TCS_SHIPPING_CHARGES,
} from "@/constants/shipping-charges";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Your Valid name is required for delivery." }),
  number: z
    .string()
    .min(11, { message: "Contact Number should be at least 11 digit long" }),
  address: z.string().min(7, { message: "Please Enter Complete Address." }),
  city: z.string().min(2, { message: "Please Enter correct City Name" }),
  additional_info: z.string().optional(),
  shipping_method: z.enum(["regular", "TCS", "Leopards"]), //add short words to trigger changings
});
export default function PlaceOrderForm({
  setShippingCharges,
  shippingCharges,
}: {
  setShippingCharges: Dispatch<SetStateAction<number>>;
  shippingCharges: number;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: "",
      address: "",
      city: "",
      additional_info: "",
      shipping_method: "regular", //set default method here
    },
  });
  const { cartItems, resetCart } = useCartStore();
  const isLoading = form.formState.isSubmitting;
  async function onsubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const productCountMap = new Map();
    let totalPrice = 0;
    cartItems.forEach((item) => {
      if (productCountMap.has(item.id)) {
        productCountMap.set(item.id, {
          ...item,
          count: productCountMap.get(item.id).count + 1,
        });
      } else {
        productCountMap.set(item.id, { ...item, count: 1 });
      }
      totalPrice += item.price;
    });

    let orderDetails = "Order Details:\n";
    productCountMap.forEach((item) => {
      orderDetails += `${item.name} (${item.count} piece(s)) = ${
        item.price
      } x ${item.count} = ${item.price * item.count} PKR\n`;
    });
    orderDetails += `Shipping Charges: ${shippingCharges}\nTotal Price: ${
      totalPrice + shippingCharges
    } PKR\n`;

    const mailText = `
      Name: ${values.name}
      Contact Number: ${values.number}
      Address: ${values.address}
      City: ${values.city}
      Shipping Method: ${values.shipping_method}
      \n${orderDetails}
    `;

    const res = await sendMail({
      subject: "New Order Placed",
      text: mailText,
    });

    if (res?.messageId) {
      form.reset();
      resetCart();
      toast.success("Order Placed Successfully.");
    } else {
      toast.error("Error Placing Order.");
    }
  }
  const shippingMethod = form.watch().shipping_method;
  useEffect(() => {
    //set shipping charges conditionally
    if (shippingMethod === "regular") {
      setShippingCharges(0);
    } else if (shippingMethod === "TCS") {
      setShippingCharges(TCS_SHIPPING_CHARGES);
    } else if (shippingMethod === "Leopards") {
      setShippingCharges(LEPORIDS_SHIPPING_CHARGES);
    }
  }, [shippingMethod]);
  return (
    <Form {...form}>
      <form
        className="p-4 lg:p-8 border rounded-xl flex-1 order-2 lg:order-1"
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <h2 className="text-3xl font-bold mb-12 text-[#228be6]">
          Delivery Details
        </h2>
        <div className="flex flex-col gap-4 mb-12">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormDescription>
                  Will be printed on the package
                </FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormDescription>
                  We will contact here on WhatsApp.
                </FormDescription>
                <FormControl>
                  <Input {...field} type="number" min={11} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormDescription>
                  For a timely delivery, make sure the address is complete.
                </FormDescription>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormDescription>
                  Please also add tehsil/district for smaller cities/villages.
                </FormDescription>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additional_info"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Instructions</FormLabel>
                <FormDescription>
                  Any special requests, alternative contact information,
                  feedback, etc.
                </FormDescription>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div>
            <FormLabel>Payment Method</FormLabel>
            <FormDescription>
              More Payment Methods will be coming soon.
            </FormDescription>
            <RadioGroup className="flex gap-2 items-center mt-1">
              <RadioGroupItem value="Cash On Delivery" checked />
              <FormLabel>Cash on Delivery</FormLabel>
            </RadioGroup>
          </div> */}
          <FormField
            control={form.control}
            name="shipping_method"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shipping Method</FormLabel>
                <FormDescription>
                  Shipping is free on all orders
                </FormDescription>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="regular" id="0" />
                        </FormControl>
                        <FormLabel htmlFor="0">Regular Method</FormLabel>
                      </div>
                    </FormItem>
                    {/* <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="abc" id="0" />
                        </FormControl>
                        <FormLabel htmlFor="0">ABC</FormLabel>
                      </div>
                    </FormItem> */}
                    {/* <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="xyz" id="0" />
                        </FormControl>
                        <FormLabel htmlFor="0">Regular Method</FormLabel>
                      </div>
                    </FormItem> */}
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="TCS" id="1" />
                        </FormControl>
                        <FormLabel htmlFor="1">
                          TCS Overnight (2-3 working days)
                        </FormLabel>
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <FormControl>
                          <RadioGroupItem value="Leopards" id="2" />
                        </FormControl>
                        <FormLabel htmlFor="2">
                          Leopards Couriers (2-3 working days)
                        </FormLabel>
                      </div>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <Button className="w-full gap-2" type="submit" disabled={isLoading}>
          <span>Place Order</span>
          {isLoading && <Loader />}
        </Button>
      </form>
    </Form>
  );
}
