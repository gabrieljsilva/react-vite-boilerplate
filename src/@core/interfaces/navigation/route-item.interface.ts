import { ElementType } from "react";

export interface RouteItem {
  path: string;
  Layout: ElementType;
  Screen: ElementType;
  Transition?: ElementType;
  isProtected: boolean;
  loader?: () => unknown;
}
