import z from "zod";

export const signupSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(30, "Full name is too long"),
  email: z.email("Invalid email address").trim(),
  password: z
    .string()
    .trim()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export type SignupInput = z.infer<typeof signupSchema>;
