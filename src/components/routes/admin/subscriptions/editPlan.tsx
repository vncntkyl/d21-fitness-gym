import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useEditSubscription,
  useSubscription,
} from "@/hooks/use-subscriptions";
import { addSubscriptionPlanSchema } from "@/lib/schema";
import type { Subscription } from "@/types/Subscriptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { format } from "date-fns";

function EditPlan({
  plan,
  onSuccess,
}: {
  plan: Subscription;
  onSuccess: () => void;
}) {
  const { data, isLoading } = useSubscription(plan.ID);
  const { mutate, isPending } = useEditSubscription();
  const form = useForm<z.infer<typeof addSubscriptionPlanSchema>>({
    resolver: zodResolver(addSubscriptionPlanSchema),
    defaultValues: {
      name: undefined,
      description: null,
      subscription_type: undefined,
      amount: undefined,
      duration: undefined,
      payment_mode: undefined,
    },
    mode: "all",
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
        description: data.description,
        subscription_type: data.subscription_type,
        amount: data.amount,
        duration: data.duration,
        payment_mode: data.payment_mode,
      });
    }
  }, [data, form]);

  const onSubmit = async (
    values: z.infer<typeof addSubscriptionPlanSchema>
  ) => {
    if (!data) return;

    const updatedPlan: Omit<Subscription, "ID" | "status" | "created_at"> = {
      ...values,
      modified_at: format(new Date(), "yyyy-MM-dd hh:mm:ss"),
    };
    mutate({ data: updatedPlan, id: plan.ID }, { onSuccess: onSuccess });
  };

  if (!data || isLoading) return <>Loading data...</>;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Subscription Plan</DialogTitle>
        <DialogDescription>
          Fields with <span className="text-primary">*</span> are required
          fields.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Subscription Name/Label{" "}
                  <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} required disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="optional"
                    value={field.value ?? undefined}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subscription_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Subscription Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))} // hook form controls this
                    defaultValue={String(field.value)} // initial value
                    disabled={isPending}
                  >
                    <SelectTrigger className="w-full rounded-none">
                      <SelectValue placeholder="Select a subscription type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">For Member</SelectItem>
                      <SelectItem value="2">For Non Member</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Amount <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input {...field} required disabled={isPending} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Duration <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                    required
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="payment_mode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Payment Mode <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={(value) => field.onChange(Number(value))} // hook form controls this
                    defaultValue={String(field.value)} // initial value
                    disabled={isPending}
                  >
                    <SelectTrigger className="w-full rounded-none">
                      <SelectValue placeholder="Select a payment mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Annual</SelectItem>
                      <SelectItem value="2">Monthly</SelectItem>
                      <SelectItem value="3">Daily</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full hover:bg-primary/70"
            disabled={
              !form.formState.isValid ||
              form.formState.isSubmitting ||
              isPending
            }
          >
            Save
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
}

export default EditPlan;
