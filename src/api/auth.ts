import { type User } from "@/types/User";
import { api } from "./config";

export const login = async (username: string, password: string) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  const response = await api.post<User>("auth", formData, {
    params: {
      resource: "login",
    },
  });

  return response.data;
};

export const revalidate = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const formData = new FormData();
  formData.append("token", token);
  const response = await api.post<User>("auth", formData, {
    params: {
      resource: "me",
    },
  });

  return response.data;
};
