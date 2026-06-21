import { z } from "zod";

export const userSchema = z.object({
  fullName: z.string().min(1, "Name is required"),

  email: z.string().email("Invalid email"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

  dob: z.string().min(1, "DOB required"),

  gender: z.string().min(1, "Select gender"),

  country: z.string().min(1, "Select country"),

  skills: z
    .array(z.string())
    .min(1, "Select at least one skill"),

  bio: z
    .string()
    .min(20, "Bio should be at least 20 characters"),

  profileImage: z.any().optional(),

  terms: z.literal(true, {
    errorMap: () => ({
      message: "Accept terms",
    }),
  }),
});