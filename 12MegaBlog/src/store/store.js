import {configureStore} from "@reduxjs/toolkit"
import authsliceReducer from "./authSlice"

export const store = configureStore({
    reducer: authsliceReducer
})