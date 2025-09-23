import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatText } from "@/lib/format";
import { userAccountInfoSchema } from "@/lib/schema";
import type { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function AccountInfo({ data }: { data: User }) {
  const [isEditing, onToggleEditing] = useState(false);
  const form = useForm<z.infer<typeof userAccountInfoSchema>>({
    resolver: zodResolver(userAccountInfoSchema),
    defaultValues: {
      username: "",
      email: "",
      contact_number: "",
    },
    mode: "all",
  });
  const onSubmit = async (values: z.infer<typeof userAccountInfoSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    if (!data) return;

    form.reset({
      username: data.username,
      email: data.email_address,
      contact_number: data.contact_number as string,
    });
  }, [data]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {(["username", "email", "contact_number"] as const).map((key) => {
          return (
            <FormField
              control={form.control}
              key={key}
              name={key}
              render={({ field }) => {
                return (
                  <FormItem className="grid grid-cols-[1fr_2fr]">
                    <FormLabel className="capitalize">
                      {formatText(key, "_")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value}
                        disabled={!isEditing}
                        required
                      />
                    </FormControl>
                  </FormItem>
                );
              }}
            />
          );
        })}
        <div className="flex justify-end">
          {!isEditing ? (
            <Button type="button" onClick={() => onToggleEditing(true)}>
              Edit
            </Button>
          ) : (
            <>
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  onToggleEditing(false);
                  form.reset();
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </>
          )}
        </div>
      </form>
    </Form>
  );
}

export default AccountInfo;
