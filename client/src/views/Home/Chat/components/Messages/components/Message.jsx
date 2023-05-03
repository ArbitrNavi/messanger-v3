import React from 'react';
import s from "./Message.module.scss";
import {useSelector} from "react-redux";

const Message = ({message}) => {
    const {user} = useSelector((state) => state.user)


    return (
        <div className={`${s.message} ${
            message.userId === user.id ? `${s.owner}` : ``
        }`}>
            <div className={s.container}>
                <div className={s.avatar}>
                    <img src="https://i.pinimg.com/564x/65/30/4d/65304d4d2aef1615f4c23a7733c9ee65.jpg" alt=""/>
                </div>
                <div className={s.messageContainer}>
                    <p className={s.text}>
                        {message.text}
                    </p>
                    <p className={s.time}>
                        {message.time}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Message;