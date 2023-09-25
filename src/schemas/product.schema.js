import { z } from "zod";

const MAX_FILE_SIZE = 2500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const createProductSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  genre: z.string({
    required_error: "Description must be a string",
  }),
  price: z.string({
    required_error: "Price is required",
  }),
  amount: z.string({
    required_error: "Amount is required",
  }),
  date: z.string().datetime().optional(),
  image: z.optional(),
});
