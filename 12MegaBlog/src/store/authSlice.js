import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})


// export actions
export const {login, logout} = authSlice.actions

//reducer
export default authSlice.reducer