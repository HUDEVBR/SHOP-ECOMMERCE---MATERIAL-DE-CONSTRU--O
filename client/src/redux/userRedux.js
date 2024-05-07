import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => { 
            state.isFetching = true;
        },
        loginSuccess: (state) => { 
            state.isFetching = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => { 
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { loginFailure, loginStart, loginSuccess } = userSlice.actions
export default userSlice.reducer;