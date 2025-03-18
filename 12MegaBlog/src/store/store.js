import { configureStore } from "@reduxjs/toolkit";
import authsliceReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    authSlice: authsliceReducer, // Use 'auth' as the key for the auth slice
  },
});