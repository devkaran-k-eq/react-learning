import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import usersReducer from '../features/users/usersSlice';
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

console.log('apiSlice.reducerPath', apiSlice.reducerPath);
console.log('apiSlice.reducer', apiSlice.reducer);


setupListeners(store.dispatch)