import {createSlice} from "@reduxjs/toolkit";

export const fetchSlice  = createSlice({
    name: 'fetch',
    initialState: {
        chats: [
            {
                chatID: "1",
                users: {
                    first: 1,
                    second: 2,
                },
                messages: [
                    {
                        messageId: 1,
                        userId: 1,
                        text: "Привет как дела?",
                        time: "12:30",
                    },
                    {
                        messageId: 2,
                        userId: 2,
                        text: "Нормально, у тебя как?",
                        time: "12:36",
                    },
                    {
                        messageId: 3,
                        userId: 1,
                        text: "Замечательно",
                        time: "12:50",
                    }
                ]
            },
            {
                chatID: "2",
                users: {
                    first: 1,
                    second: 3,
                },
                messages: [
                    {
                        messageId: 1,
                        userId: 3,
                        text: "Привет как дела?",
                        time: "12:30",
                    },
                    {
                        messageId: 2,
                        userId: 1,
                        text: "Нормально, у тебя как?",
                        time: "12:36",
                    },
                    {
                        messageId: 3,
                        userId: 3,
                        text: "Не плохо?",
                        time: "12:50",
                    }
                ]
            }
        ],
    },
    reducers: {
        sendMessage: (state, action) => {
            const message = action.payload
            console.log(message)
            state.chats.map(chat => {
                if (chat.chatID === message.chatID) {
                    chat.messages.push(message.data)
                }
            })
        }
    }
})

export const {sendMessage} = fetchSlice.actions;
export default fetchSlice.reducer