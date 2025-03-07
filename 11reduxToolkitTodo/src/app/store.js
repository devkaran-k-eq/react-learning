import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../feature/todo/todoSlice";

// create store using configureStore
export const store = configureStore({
    reducer: todoReducer
});