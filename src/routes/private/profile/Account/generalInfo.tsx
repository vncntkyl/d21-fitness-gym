import { Button } from "@/components/ui/button";
import { Datepicker } from "@/components/ui/datepicker";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formatText } from "@/lib/format";
import { userGeneralInfoSchema } from "@/lib/schema";
import type { User } from "@/types/User";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function GeneralInfo({ data }: { data: User }) {
  const [isEditing, onToggleEditing] = useState(false);
  const form = useForm<z.infer<typeof userGeneralInfoSchema>>({
    resolver: zodResolver(userGeneralInfoSchema),
    defaultValues: {
      first_name: "",
      middle_name: "",
      last_name: "",
      birthday: new Date(),
      address: "",
    },
    mode: "all",
  });
  const onSubmit = async (values: z.infer<typeof userGeneralInfoSchema>) => {
    console.log(values);
  };

  useEffect(() => {
    if (!data) return;

    form.reset({
      first_name: data.first_name,
      middle_name: data.middle_name,
      last_name: data.last_name,
      address: data.address,
      birthday: new Date(data.birthday),
    });
  }, [data]);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {(
          [
            "first_name",
            "middle_name",
            "last_name",
            "birthday",
            "address",
          ] as const
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
                      {key === "birthday" ? (
                        <Datepicker
                          value={field.value as Date | undefined}
                          onValueChange={field.onChange}
                          disabled={!isEditing}
                        />
                      ) : (
                        <Input
                          {...field}
                          value={field.value as string}
                          disabled={!isEditing}
                          required
                        />
                      )}
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

export default GeneralInfo;
