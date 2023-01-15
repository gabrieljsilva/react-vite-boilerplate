import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes } from "./animated-routes";

export function BrowserNavigator() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
