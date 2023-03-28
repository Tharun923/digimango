// import { ADD_NEW_CUSTOMER } from "../actions/types";
import mockData from "../api/mock";
export const defaultState = {
  sizeOptions: mockData.config.sizeOptions, //[]
  quantityOptions: mockData.config.quantityOptions, //[]
};

export default (state = defaultState, action) => {
  const handlers = {
    // [ADD_NEW_CUSTOMER]: addNewCustomer,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};
