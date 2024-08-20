import { combineReducers } from "@reduxjs/toolkit";
import dashboardReducers from "./slice/dashboard/dashboardSlice";

const combinedReducer = combineReducers({
  dashboard: dashboardReducers,
});

export const rootReducer = (state, action) => {
  // if (action.type === "auth/logout") {
  //   state = undefined;
  // }
  return combinedReducer(state, action);
};
