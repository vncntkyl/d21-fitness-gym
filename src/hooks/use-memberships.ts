import { catchError } from "@/api/config";
import { add, getAll, getOne } from "@/api/controller";
import type { Response } from "@/types/Auth";
import { type Membership } from "@/types/Memberships";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useMemberships = () => {
  return useQuery({
    queryKey: ["memberships"],
    queryFn: () => getAll<Membership[]>("memberships"),
    staleTime: 60 * 10 * 1000,
  });
};

export const useMembership = (id?: number) => {
  return useQuery({
    queryKey: ["memberships", id],
    queryFn: () => getOne<Membership>("memberships", id!),
    enabled: !!id,
    staleTime: 60 * 10 * 1000,
  });
};

export const useCreateMemberships = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      data: Omit<Membership, "ID" | "status" | "created_at" | "modified_at">
    ) =>
      add<
        Response<Membership>,
        Omit<Membership, "ID" | "status" | "created_at" | "modified_at">
      >("memberships", data),
    onSuccess: (response) => {
      toast.success(response.message);
      if (response.data) {
        const updatedMembership = response.data;

        queryClient.setQueryData<Membership[]>(["memberships"], (items) => {
          if (!items) return items;

          return items.map((item) =>
            item.ID === updatedMembership.ID ? { ...updatedMembership } : item
          );
        });
      }
      queryClient.refetchQueries({ queryKey: ["memberships"] });
    },
    onError: catchError,
  });
};
