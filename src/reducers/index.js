import bills from "./bills.js";
import user from "./user";
import customers from "./customers";
import config from "./config";
import { combineReducers as combine } from "redux";

export const combineReducers = () =>
  combine({
    bills,
    user,
    customers,
    config,
  });
