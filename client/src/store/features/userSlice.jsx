import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: 1
        },
        token: localStorage.getItem("ACCESS_TOKEN"),
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            localStorage.setItem("ACCESS_TOKEN", action.payload);
        },
    }
})

export const {setUser, setToken} = userSlice.actions;
export default userSlice.reducer;