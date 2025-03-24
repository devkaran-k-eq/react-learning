import { createSlice } from "@reduxjs/toolkit";

export const catSlice = createSlice({
  name: "cats",
  initialState: {
    cats: [],
    isLoading: false,
    catImages: [],
  },

  reducers: {
    getCatsFetch: (state) => {
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      state.isLoading = false;
      state.cats = action.payload;
    },
    getCatsFailure: (state) => {
      state.isLoading = false;
    },
    getCatImageSuccess: (state, action) => {
      state.catImages = action.payload;
    },
  },
});

// export actions
export const {
  getCatsSuccess,
  getCatsFetch,
  getCatsFailure,
  getCatImageSuccess,
} = catSlice.actions;

// reducer
export default catSlice.reducer;
