import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./Auth/AuthSlice";

const rootReducer = combineReducers({
  [AuthSlice.name]: AuthSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
