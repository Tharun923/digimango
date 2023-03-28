import { get } from "lodash";

export const getBills = (state) => get(state, "bills.bills");
export const getPendingBills = (state) => get(state, "bills.pendingBills");
export const getBillsHistory = (state) => get(state, "bills.billsHistory");
export const getBillTotals = (state) => get(state, "bills.totals");
