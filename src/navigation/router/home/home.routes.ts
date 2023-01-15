import { RouteItem } from "../../../@core";
import { PublicLayout } from "../../../layouts";
import { FadeInOutTransition } from "../../../transitions";
import { HomePage } from "../../../modules";

type HomeRoutes = "HOME";
export const homeRoutes: Record<HomeRoutes, RouteItem> = {
  HOME: {
    path: "/",
    Layout: PublicLayout,
    Screen: HomePage,
    Transition: FadeInOutTransition,
    loader: () => null,
    isProtected: false,
  },
};
