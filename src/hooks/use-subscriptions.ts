import { catchError } from "@/api/config";
import { add, edit, getAll, getOne, remove } from "@/api/controller";
import type { Response } from "@/types/Auth";
import { type Subscription } from "@/types/Subscriptions";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useSubscriptions = () => {
  return useQuery({
    queryKey: ["subscriptions"],
    queryFn: () => getAll<Subscription[]>("subscriptions"),
    staleTime: 60 * 10 * 1000,
    select: (data) => {
      return data.map((item) => {
        return {
          ...item,
          subscription_type: Number(item.subscription_type),
          duration: Number(item.duration),
          payment_mode: Number(item.payment_mode),
        };
      });
    },
  });
};

export const useSubscription = (id?: number) => {
  return useQuery({
    queryKey: ["subscriptions", id],
    queryFn: () => getOne<Subscription>("subscriptions", id!),
    enabled: !!id,
    staleTime: 60 * 10 * 1000,
    select: (item) => {
      return {
        ...item,
        subscription_type: Number(item.subscription_type),
        duration: Number(item.duration),
        payment_mode: Number(item.payment_mode),
      };
    },
  });
};

export const useCreateSubscriptions = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (
      data: Omit<Subscription, "ID" | "status" | "created_at" | "modified_at">
    ) =>
      add<
        Response<Subscription>,
        Omit<Subscription, "ID" | "status" | "created_at" | "modified_at">
      >("subscriptions", data),
    onSuccess: (response) => {
      toast.success(response.message);
      updateQueryClient(queryClient, response.data);
      queryClient.refetchQueries({ queryKey: ["subscriptions"] });
    },
    onError: catchError,
  });
};

export const useEditSubscription = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      id,
    }: {
      data: Omit<Subscription, "ID" | "status" | "created_at">;
      id: number;
    }) =>
      edit<
        Response<Subscription>,
        Omit<Subscription, "ID" | "status" | "created_at">
      >("subscriptions", Object.keys(data), Object.values(data), id),
    onSuccess: (response) => {
      toast.success(response.message);
      updateQueryClient(queryClient, response.data);
      queryClient.refetchQueries({ queryKey: ["subscriptions"] });
    },
    onError: catchError,
  });
};

export const useEditPaymentMode = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      data,
      id,
    }: {
      data: Pick<Subscription, "payment_mode">;
      id: number;
    }) =>
      edit<Response<Subscription>, Pick<Subscription, "payment_mode">>(
        "subscriptions",
        Object.keys(data),
        Object.values(data),
        id
      ),
    onSuccess: (response) => {
      toast.success(response.message);
      updateQueryClient(queryClient, response.data);
      queryClient.refetchQueries({ queryKey: ["subscriptions"] });
    },
    onError: catchError,
  });
};

export const usePlanActivation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      data,
      id,
    }: {
      data: Pick<Subscription, "status">;
      id: number;
    }) =>
      edit<Response<Subscription>, Pick<Subscription, "status">>(
        "subscriptions",
        Object.keys(data),
        Object.values(data),
        id
      ),
    onSuccess: (response) => {
      toast.success(response.message);
      updateQueryClient(queryClient, response.data);
      queryClient.refetchQueries({ queryKey: ["subscriptions"] });
    },
    onError: catchError,
  });
};

export const useDeletePlan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      remove<Response<Subscription>>("subscriptions", id),
    onSuccess: (response, variables) => {
      toast.success(response.message);
      updateQueryClient(queryClient, undefined, true, variables);
      queryClient.refetchQueries({ queryKey: ["subscriptions"] });
    },
    onError: catchError,
  });
};

const updateQueryClient = (
  queryClient: QueryClient,
  data?: Subscription,
  isDelete = false,
  id?: number
) => {
  if (data) {
    const updatedSubscription = data;

    queryClient.setQueryData<Subscription[]>(["subscriptions"], (items) => {
      if (!items) return items;

      return isDelete
        ? items.filter((item) => item.ID !== id)
        : items.map((item) =>
            item.ID === updatedSubscription.ID
              ? { ...updatedSubscription }
              : item
          );
    });
  }
};
