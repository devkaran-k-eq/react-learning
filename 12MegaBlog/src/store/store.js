import { configureStore } from "@reduxjs/toolkit";
import authsliceReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    auth: authsliceReducer, // Use 'auth' as the key for the auth slice
  },
});