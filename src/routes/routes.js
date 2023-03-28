import paths from "./paths";
import features from "../features";
import {
  Home,
  Login,
  Register,
  Checkout,
  BillHistory,
  PendingBills,
  AddBill,
} from "../pages";
import strings from "../utils/localization";

import { pathTemplate } from "../utils/routing";

export const homepage = {
  ...features.homepage,
  path: pathTemplate(paths.home),
  name: strings.home,
  component: Home,
  exact: true,
};

export const publicRoutes = [
  homepage,
  {
    ...features.login,
    path: pathTemplate(paths.login),
    name: strings.login,
    component: Login,
  },
  {
    ...features.register,
    path: pathTemplate(paths.register),
    name: strings.register,
    component: Register,
  },
];

export const gaurdedRoutes = [
  homepage,
  {
    ...features.checkout,
    path: pathTemplate(paths.checkout),
    name: strings.checkout,
    component: Checkout,
  },
  {
    ...features.pendingBills,
    path: pathTemplate(paths.pendingBills),
    name: strings.pendingBills,
    component: PendingBills,
  },
  {
    ...features.billHistory,
    path: pathTemplate(paths.billHistory),
    name: strings.billHistory,
    component: BillHistory,
  },
  {
    ...features.addBill,
    path: pathTemplate(paths.addBill),
    name: strings.addBill,
    component: AddBill,
  },
];

const reducer = (links = [], current) => {
  if (current.children) {
    return links.concat(current.children.reduce(reducer, []));
  } else {
    return links.concat(current);
  }
};

export default []
  .concat(publicRoutes.reduce(reducer, []))
  .concat(gaurdedRoutes.reduce(reducer, []));
