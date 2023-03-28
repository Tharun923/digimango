import React from "react";
import features, { flaggedWith } from "../../features";

function Checkout() {
  return <div>Checkout</div>;
}

export default flaggedWith(features.checkout, Checkout);
