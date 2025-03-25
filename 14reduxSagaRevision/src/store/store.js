import { configureStore } from "@reduxjs/toolkit";
import  createSagaMiddleware from "redux-saga"
import catSliceReducer from "./catSlice"
import catSaga from "./catSaga";

export const saga =  createSagaMiddleware();

export const store = configureStore({
    reducer:{
        cats: catSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
    
});


saga.run(catSaga)