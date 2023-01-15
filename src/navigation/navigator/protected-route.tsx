import { authLocalstorageKey } from "../../constants";
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  isProtected: boolean;
  children: ReactNode;
}

export function ProtectedRoute({ isProtected = false, children }: ProtectedRouteProps) {
  if (!isProtected) {
    return <>{children}</>;
  }

  const isLoggedIn = localStorage.getItem(authLocalstorageKey);
  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return <>{children}</>;
}
