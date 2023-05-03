import {createSlice} from "@reduxjs/toolkit";

export const sendMessageSlice = createSlice({
    name: "sendMessage",
    initialState: {
        value: "",
    },
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setValue} = sendMessageSlice.actions;
export default sendMessageSlice.reducer