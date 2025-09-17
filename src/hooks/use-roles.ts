import { getAll, getOne } from "@/api/controller";
import { type Role } from "@/types/Role";
import { useQuery } from "@tanstack/react-query";

export const useRoles = () => {
  return useQuery({
    queryKey: ["roles"],
    queryFn: () => getAll<Role[]>("roles"),
    staleTime: 60 * 10 * 1000,
  });
};

export const useRole = (id?: number) => {
  return useQuery({
    queryKey: ["roles", id],
    queryFn: () => getOne<Role>("roles", id!),
    enabled: !!id,
    staleTime: 60 * 10 * 1000,
  });
};
