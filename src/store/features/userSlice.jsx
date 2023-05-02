import {createSlice} from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            id: 1
        },
        token: true,
    },
    reducers: {
        setUser: (state, action) => {

        },
        setToken: (state, action) => {

        }
    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;