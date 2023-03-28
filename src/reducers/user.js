import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../actions/types";
export const defaultState = {
  isAuthenticated: true,
};

const enableAuthentication = (state, action) => ({
  ...state,
  isAuthenticated: true,
});

const disableAuthentication = (state, action) => ({
  ...state,
  isAuthenticated: false,
});

export default (state = defaultState, action) => {
  const handlers = {
    [LOGIN_SUCCESS]: enableAuthentication,
    [LOGOUT_SUCCESS]: disableAuthentication,
  };
  return handlers[action.type] ? handlers[action.type](state, action) : state;
};
