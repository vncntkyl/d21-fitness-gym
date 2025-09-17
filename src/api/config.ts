import axios, { AxiosError } from "axios";
import { toast } from "sonner";
const url = import.meta.env.VITE_SERVER;

export const api = axios.create({ baseURL: url, timeout: 120000 });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (!["auth", "roles"].some((path) => config.url?.includes(path)) && !token) {
    return Promise.reject({
      message: "No authentication token found. Request cancelled.",
      config,
      isAuthError: true, // optional custom flag
    });
  }
  if (token && !config.url?.includes("auth")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
api.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    let msg = "Something went wrong...";
    if (error.message) {
      msg = error.message;
    }

    if (msg === "Network Error") {
      toast.error(
        "The host could not connect to the server. Please message the IT team"
      );
    }
    if (/No authentication token found. Request cancelled/.test(msg)) {
      toast.error("Session Expired", {
        description: msg,
      });
      return;
    }
    if (error.response?.data) {
      const data = error.response.data as { error?: string };
      msg = data.error ?? msg;

      if (/Session.*expired/i.test(msg)) {
        toast.error("Session Expired", {
          description: msg,
        });
        return;
      }
    }
    toast.error(msg);
    return Promise.reject(new Error(msg));
  }
);

export const catchError = (error: unknown) => {
  if (error instanceof Error) {
    toast.error("System Error", {
      description: error.message,
    });
  }
};
