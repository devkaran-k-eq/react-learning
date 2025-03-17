import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  loading: false, // loading state
  error: false, // error in fetching data
};

// fetch users from api
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const promise = await axios.get("https://jsonplaceholder.typicode.com/users"); // fetch data from api
  return promise.data; // return the fetched data
});

export const deleteData = createAction("users/deleteData");

const fetchUserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}, // reducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        console.log("fetching data....");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        console.log("data fetched successfully"); // added success log
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        console.log("error in fetching data");
      })
      .addCase(deleteData, (state,action) => {
        state.users = state.users.filter( (user) => user.id !== action.payload)
      })
  },
});

export default fetchUserSlice.reducer;
