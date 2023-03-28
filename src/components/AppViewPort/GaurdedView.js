import React from "react";
import { gaurdedRoutes } from "../../routes/routes";
import { Route } from "react-router-dom";
import { isEnabled } from "../../features";

const AppViewport = () => {
  return (
    <>
      {gaurdedRoutes
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
