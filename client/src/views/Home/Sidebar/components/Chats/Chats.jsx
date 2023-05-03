import React from 'react';
import s from "./Chats.module.scss";
import User from "./components/User/User.jsx";
import {useSelector} from "react-redux";

const Chats = () => {
    const chats = useSelector((state) => state.fetch.chats)
    console.log(chats)

    return (
        <div className={s.chats}>
            <ul>
                {
                    chats.map((chat) =>
                        <User
                            key={chat.chatID}
                            chatData={chat}
                        />)
                }
            </ul>
        </div>
    );
};

export default Chats;