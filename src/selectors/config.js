import { get } from "lodash";

export const getConfigData = (state) => get(state, "config");
