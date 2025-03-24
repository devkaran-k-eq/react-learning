import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catSaga from "./catSaga";
import catSliceReducer from "./catSlice"

export const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    cats: catSliceReducer,
  },
  middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(saga),
});

saga.run(catSaga);
console.log("Saga From Store", saga, catSaga);
