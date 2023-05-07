import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        token: localStorage.getItem("ACCESS_TOKEN"),
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setToken: (state, action) => {
            localStorage.setItem("ACCESS_TOKEN", action.payload);
        },
    },
    extraReducers: (builder) => {

    }
})

export const {setUser, setToken} = userSlice.actions;
export default userSlice.reducer;