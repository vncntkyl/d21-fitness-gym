export type Subscription = {
  ID: number;
  name: string;
  description?: string | null;
  amount: string;
  duration: number;
  payment_mode: number;
  status: number;
  created_at: string;
  modified_at: string;
};
