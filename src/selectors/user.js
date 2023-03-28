import { get } from "lodash";

export const isAuthenticated = (state) => get(state, "user.isAuthenticated");
