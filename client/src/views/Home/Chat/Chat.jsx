import React from 'react';
import s from "./Chat.module.scss";
import Messages from "./components/Messages/Messages.jsx";
import Input from "./components/Input/Input.jsx";
import {useSelector} from "react-redux";

const Chat = ({id}) => {
    const messages = useSelector((state) => {
        return state.fetch.chats.filter((chat) => {
            if (chat.chatID === id) {
                return chat
            }
        })[0]
    })


    return (
        <div className={s.chat}>
            <Messages messages={messages}/>
            <Input />
        </div>
    );
};

export default Chat;