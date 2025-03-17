import { configureStore } from "@reduxjs/toolkit";
import fetchUserSliceReducer from "./fetchUserSlice";

export const store = configureStore({
  reducer: {
    users: fetchUserSliceReducer,
  },
});
