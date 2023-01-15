import { createContext, useContext } from "react";

export interface AuthContextValues {
  token?: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValues>({
  login: () => null,
  logout: () => null,
  token: null,
});

export const useAuthContext = () => useContext(AuthContext);
