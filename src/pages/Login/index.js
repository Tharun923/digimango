import React from "react";
import features, { flaggedWith } from "../../features";

function Login() {
  return <div>Login</div>;
}

export default flaggedWith(features.login, Login);
