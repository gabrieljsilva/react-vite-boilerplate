import { Route, Routes, useLocation } from "react-router-dom";
import { Router } from "../router";
import { NotFoundPage } from "../../modules";
import { AnimatedRoute } from "./animated-route";

export function BrowserRoutes() {
  const router = Router;
  const routes = router.toArray();
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path={"/"}>
        {routes.map(({ path, Layout, Screen, Transition, loader, isProtected }, index) => (
          <Route key={index} element={Layout && <Layout />}>
            <Route
              path={path}
              loader={loader}
              element={<AnimatedRoute isProtected={isProtected} Screen={Screen} Transition={Transition} />}
            />
          </Route>
        ))}

        <Route path={"*"} element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
}
