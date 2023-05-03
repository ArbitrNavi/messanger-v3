import {configureStore} from "@reduxjs/toolkit";

import userReducer from "./features/userSlice.jsx"
import fetchReducer from "./features/fetchSlice.jsx"
import sendMessageReducer from "./features/sendMessageSlice.jsx"

export default configureStore({
    reducer: {
        user: userReducer,
        fetch: fetchReducer,
        sendMessage: sendMessageReducer,
    }
})