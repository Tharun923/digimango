import { get, omit, isEmpty } from "lodash";
import { ADD_NEW_BILL, SETTLE_BILL, SETTLE_CUSTOMER } from "../actions/types";
import mockData, { pendingBills } from "../api/mock";
export const defaultState = {
  bills: mockData.bills, //{}
  pendingBills: mockData.pendingBills, //{}
  // billsHistory: mockData.billsHistory, //[]
  billsHistory: [],
  totals: {
    totalSold: 1550,
    pendingAmount: 1550,
    paidAmount: 0,
  },
};

const addNewBill = (state, action) => ({
  ...state,
  bills: Object.assign(state.bills, action.payload),
});

const settleBill = (state, action) => {
  const curCustomer = get(state, `pendingBills.${action.payload.custId}`);
  const billData = get(state, `bills.${action.payload.bill}`);
  const curCustomerBills = [...curCustomer.bills];
  const updatedBills = curCustomerBills.filter((eachBill) => {
    return eachBill !== action.payload.bill;
  });
  const pendingBillsWithoutCurCust = omit(
    state.pendingBills,
    action.payload.custId
  );
  return {
    ...state,
    pendingBills: !isEmpty(updatedBills)
      ? {
          ...pendingBills,
          [action.payload.custId]: {
            bills: updatedBills,
            totalAmount:
              parseInt(curCustomer.totalAmount) - parseInt(billData.amount),
            totalQuantity:
              parseInt(curCustomer.totalQuantity) - parseInt(billData.quantity),
          },
        }
      : pendingBillsWithoutCurCust,
    billsHistory: [action.payload.bill, ...state.billsHistory],
    totals: {
      ...state.totals,
      pendingAmount:
        parseInt(state.totals.pendingAmount) - parseInt(billData.amount),
      paidAmount: parseInt(state.totals.paidAmount) + parseInt(billData.amount),
    },
  };
};

const settleCustomer = (state, action) => {
  const curCustomer = get(state, `pendingBills.${action.payload.custId}`);
  const pendingBillsWithoutCurCust = omit(
    state.pendingBills,
    action.payload.custId
  );
  return {
    ...state,
    pendingBills: pendingBillsWithoutCurCust,
    billsHistory: [...curCustomer.bills, ...state.billsHistory],
    totals: {
      ...state.totals,
      pendingAmount:
        parseInt(state.totals.pendingAmount) -
        parseInt(curCustomer.totalAmount),
      paidAmount:
        parseInt(state.totals.paidAmount) + parseInt(curCustomer.totalAmount),
    },
  };
};

export default (state = defaultState, action) => {
  const handlers = {
    [ADD_NEW_BILL]: addNewBill,
    [SETTLE_BILL]: settleBill,
    [SETTLE_CUSTOMER]: settleCustomer,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};
