import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// const counterSlice = createSlice({
//   name: "counter",   // pizza slice name
//   initialState,  // Initial State for slice
//   reducers: {       // Function to update state
//     increment: (state) => (state.count += 1),
//     decrement: (state) => (state.count -= 1),
//     reset: function (state) {
//       return (state.count = 0);

//     },
//   },
// });

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;  // ✅ Correct: Directly modifying state
    },
    decrement: (state) => {
      state.count -= 1;  // ✅ Correct
    },
    reset: (state) => {
      state.count = 0;  // ✅ Correct
    },
  },
});




// export actions
export const {increment, decrement, reset} = counterSlice.actions;

// export reducer to be used in store
export default counterSlice.reducer


