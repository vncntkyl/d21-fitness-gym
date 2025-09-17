import type { Dispatch, SetStateAction } from "react";
import type { User } from "./User";

export type Auth = {
  username: string;
  password: string;
};

export type AuthProvider = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  logout: () => void;
};

export type Response<Data> = {
  message: string;
  data?: Data;
  id?: number;
};
