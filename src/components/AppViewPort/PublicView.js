import React from "react";
import { Route } from "react-router-dom";
import { publicRoutes } from "../../routes/routes";
import { isEnabled } from "../../features";

const AppViewport = () => {
  return (
    <>
      {publicRoutes
        .filter((route) => isEnabled(route))
        .map((route) => (
          <Route
            key={route.id}
            path={route.path}
            component={!route.renderAsChild && route.component}
            children={route.renderAsChild && route.component}
            exact={Boolean(route.exact)}
            strict={Boolean(route.strict)}
            sensitive={Boolean(route.sensitive)}
          />
        ))}
    </>
  );
};

export default AppViewport;
