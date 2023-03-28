import { get, isObject, isString } from "lodash";
import React from "react";

const addons = {
  serviceWorker: { id: "service-worker", enabled: true },
  restAPI: { id: "rest-api", enabled: true },
  cacheRedux: { id: "cache-redux", enabled: true },
};

const general = {
  homepage: { id: "homepage", enabled: true },
  login: { id: "login", enabled: true },
  register: { id: "register", enabled: true },
};

const bills = {
  checkout: { id: "checkout", enabled: true },
  orderSummary: { id: "order-summary", enabled: true },
  billHistory: { id: "bill-history", enabled: true },
  pendingBills: { id: "pending-bills", enabled: true },
  addBill: { id: "add-bill", enabled: true },
};

const features = {
  ...addons,
  ...general,
  ...bills,
};

export default features;

/* Checks if a feature is enabled */
export function isEnabled(feature) {
  if (isObject(feature)) {
    return get(feature, "enabled", false);
  } else if (isString(feature)) {
    const featureFlag = Object.values(features).find(
      (flag) => flag.id === feature
    );
    return get(featureFlag, "enabled", false);
  }
  return false;
}

/* A Higher Order Component that renders if a feature is enabled */
export function flaggedWith(feature, Feature, DisabledFeature = () => null) {
  return (props) =>
    isEnabled(feature) ? (
      <Feature {...props} />
    ) : (
      <DisabledFeature {...props} />
    );
}
