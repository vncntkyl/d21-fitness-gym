import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatText } from "@/lib/format";
import { userPasswordSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function PasswordInfo() {
  const [isEditing, onToggleEditing] = useState(false);
  const form = useForm<z.infer<typeof userPasswordSchema>>({
    resolver: zodResolver(userPasswordSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_new_password: "",
    },
    mode: "all",
  });
  const onSubmit = async (values: z.infer<typeof userPasswordSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {(
          ["old_password", "new_password", "confirm_new_password"] as const
        ).map((key) => {
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
                        type="password"
                        {...field}
                        value={field.value}
                        disabled={!isEditing}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          );
        })}
        <div className="flex justify-end">
          {!isEditing ? (
            <Button type="button" onClick={() => onToggleEditing(true)}>
              Change
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

export default PasswordInfo;
