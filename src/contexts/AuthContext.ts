import { createContext, useContext } from "react";
import { UserInterface } from "../firebase";

export const AuthContext = createContext<UserInterface | null | undefined>(
  null
);

export const useAuth = () => useContext(AuthContext);
