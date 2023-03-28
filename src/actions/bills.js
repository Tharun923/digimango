import { SETTLE_BILL, SETTLE_CUSTOMER } from "./types";

export const settleBill = (custId, bill) => {
  return {
    type: SETTLE_BILL,
    payload: {
      custId,
      bill,
    },
  };
};

export const settleCustomer = (custId) => {
  return {
    type: SETTLE_CUSTOMER,
    payload: {
      custId,
    },
  };
};
