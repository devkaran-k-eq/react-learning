import { createSlice } from "@reduxjs/toolkit";


export const catSlice = createSlice({
    name: "cats",
    initialState: {
        cats: [],
        isLoading:  false,
        catImages: [],
    },
    reducers: {
        getCatsFetch: (state) => {
            state.isLoading = true
        },
        getCatsSuccess: (state,action) => {
            state.isLoading = false;
            state.cats = action.payload
        },
        getCatsFailure: (state) => {
            state.isLoading = false
        },
        getCatImageSuccess: (state, action) => {
            state.catImages = action.payload
        },
    }
})

export const {getCatsFetch, getCatsSuccess, getCatsFailure, getCatImageSuccess} = catSlice.actions;

export default catSlice.reducer;