import React from "react";
import { useSelector } from "react-redux";
import PublicView from "./PublicView";
import GaurdedView from "./GaurdedView";
import { isAuthenticated } from "../../selectors/user";

const AppViewport = () => {
  const isLoggedIn = useSelector(isAuthenticated);
  return isLoggedIn ? <GaurdedView /> : <PublicView />;
};

export default AppViewport;
