export type Subscription = {
  ID: number;
  name: string;
  description?: string | null;
  subscription_type: number;
  amount: string;
  duration: number;
  payment_mode: number;
  status: number;
  created_at: string;
  modified_at: string;
};
