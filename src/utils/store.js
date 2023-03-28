import { createStore } from "redux";
import _ from "lodash";
import { combineReducers } from "../reducers";
import { getFromLocalStorage, setInLocalStorage } from "./storageHelper";

const persistedState = getFromLocalStorage("state");

const rootReducer = combineReducers();

const Store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

Store.subscribe(
  _.throttle(() => {
    setInLocalStorage("state", {
      config: Store.getState().config,
      orders: Store.getState().orders,
    });
  }, 1000)
);

export default Store;
