import { homeRoutes } from "./home";
import { RouteItem } from "../../@core";

export type AvailableRoutes = keyof typeof homeRoutes;

export class Router {
  static routes = {
    homeRoutes,
  };

  static findPathByKey(key: AvailableRoutes) {
    for (const router of Object.values(this.routes)) {
      if (router[key]) {
        return router[key].path;
      }
    }
  }

  static toArray() {
    const routesList: RouteItem[] = [];
    for (const router of Object.values(this.routes)) {
      for (const route of Object.values(router)) {
        routesList.push(route);
      }
    }
    return routesList;
  }
}
