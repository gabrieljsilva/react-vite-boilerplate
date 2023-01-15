import { AuthContext, AuthContextValues } from "./auth-context";
import { ReactNode } from "react";
import { authLocalstorageKey } from "../../constants";
import { useLocalStorage } from "../../hooks";

interface AuthContextProviderProps {
  children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [token, setToken] = useLocalStorage<string | null | undefined>(authLocalstorageKey, null);
  const login = (token: string) => setToken(token);
  const logout = () => setToken(undefined);

  const authContextValues: AuthContextValues = {
    token,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValues}>{children}</AuthContext.Provider>;
}
