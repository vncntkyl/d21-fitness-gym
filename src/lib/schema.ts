import { z } from "zod";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

export const loginSchema = z.object({
  username: z.string().min(4, "Username must not be empty.").max(100),
  password: z.string().min(4, "Password must not be empty."),
});

export const addMembershipPlanSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  amount: z.string(),
  payment_mode: z.number(),
});

export const addSubscriptionPlanSchema = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  subscription_type: z.number(),
  amount: z.string(),
  duration: z.number(),
  payment_mode: z.number(),
});

export const editPaymentModeSchema = z.object({
  payment_mode: z.number(),
});

export const userGeneralInfoSchema = z.object({
  first_name: z.string(),
  middle_name: z.string().optional(),
  last_name: z.string(),
  birthday: z.date(),
  address: z.string(),
});

export const userAccountInfoSchema = z.object({
  username: z.string(),
  email: z.email(),
  contact_number: z.string().optional(),
});

export const userPasswordSchema = z
  .object({
    old_password: z.string().min(1, "Old password is required"),
    new_password: z
      .string()
      .regex(
        passwordRegex,
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character"
      ),
    confirm_new_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_new_password, {
    message: "Passwords do not match",
    path: ["confirm_new_password"], // highlight confirm field
  });
