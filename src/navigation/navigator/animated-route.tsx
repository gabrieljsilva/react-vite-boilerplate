import { ElementType } from "react";
import { ProtectedRoute } from "./protected-route";

interface AnimatedRouteProps {
  Screen: ElementType;
  Transition?: ElementType;
  isProtected: boolean;
}

export function AnimatedRoute({ Transition, Screen, isProtected }: AnimatedRouteProps) {
  return (
    <ProtectedRoute isProtected={isProtected}>
      {Transition ? (
        <Transition>
          <Screen />
        </Transition>
      ) : (
        <Screen />
      )}
    </ProtectedRoute>
  );
}
