import { AnimatePresence } from "framer-motion";
import { BrowserRoutes } from "./browser-routes";

export function AnimatedRoutes() {
  return (
    <AnimatePresence mode={"wait"}>
      <BrowserRoutes />
    </AnimatePresence>
  );
}
