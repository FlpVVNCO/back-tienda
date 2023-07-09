import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  price: z.number({
    required_error: "Price is required",
  }),
  amount: z.number({
    required_error: "Amount is required",
  }),
  date: z.string().datetime().optional(),
});
