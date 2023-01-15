import { AvailableRoutes, Router } from "../../../navigation";
import { setUrlParams } from "../set-url-variables";

export function goTo<P = Record<string, string>>(key: AvailableRoutes, params?: P): string {
  const path = Router.findPathByKey(key);
  return params ? setUrlParams(path!, params) : path!;
}
