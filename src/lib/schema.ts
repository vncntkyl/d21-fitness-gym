import { z } from "zod";

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
  amount: z.string(),
  duration: z.number(),
  payment_mode: z.number(),
});

export const editPaymentModeSchema = z.object({
  payment_mode: z.number(),
});
