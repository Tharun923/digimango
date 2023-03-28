import { get } from "lodash";

export const getCustomers = (state) => get(state, "customers.customers");
