"use client";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Your Valid name is required for delivery." }),
  number: z
    .number({ message: "Please enter a valid number (No dashes e.t.c)" })
    .min(11, { message: "Contact Number should be at least 11 digit long" }),
  address: z.string().min(7, { message: "Please Enter Complete Address." }),
  city: z.string().min(2, { message: "Please Enter correct City Name" }),
  additional_info: z.string().optional(),
});
export default function PlaceOrderForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form></form>
    </Form>
  );
}
