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
  shipping_method: z.enum(["TCS", "Leopards"]),
});
export default function PlaceOrderForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      number: Number(""),
      address: "",
      city: "",
      additional_info: "",
      shipping_method: "TCS",
    },
  });
  async function onsubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        className="p-4 lg:p-8 border rounded-xl flex-1"
        onSubmit={form.handleSubmit(onsubmit)}
      >
        <h2 className="text-3xl font-bold mb-12">Delivery Details</h2>
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
                  <Input {...field} type="number" />
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
          <div>
            <FormLabel>Payment Method</FormLabel>
            <FormDescription>
              More Payment Methods will be coming soon.
            </FormDescription>
            <RadioGroup className="flex gap-2 items-center mt-1">
              <RadioGroupItem value="Cash On Delivery" checked />
              <FormLabel>Cash on Delivery</FormLabel>
            </RadioGroup>
          </div>
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
                        <RadioGroupItem value="TCS" id="1" />
                        <FormLabel htmlFor="1">
                          TCS Overnight (2-3 working days)
                        </FormLabel>
                      </div>
                    </FormItem>
                    <FormItem>
                      <div className="flex items-center gap-2">
                        <RadioGroupItem value="Leopards" id="2" />
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
        <Button className="w-full" type="submit">
          Place Order
        </Button>
      </form>
    </Form>
  );
}
