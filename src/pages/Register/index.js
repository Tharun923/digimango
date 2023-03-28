import React from "react";
import features, { flaggedWith } from "../../features";

function Register() {
  return <div>Register</div>;
}

export default flaggedWith(features.register, Register);
