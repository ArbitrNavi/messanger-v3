import React from 'react';
import s from "./User.module.scss";
import {Link} from "react-router-dom";

const User = ({chatData}) => {

    {console.log()}
    return (
        <li >
            <Link  to={`${chatData.chatID}`}>
                <div className={s.user}>
                    <div className={s.avatarContainer}>
                        <img src="https://i.pinimg.com/564x/65/30/4d/65304d4d2aef1615f4c23a7733c9ee65.jpg" alt=""/>
                    </div>
                    <div className={s.info}>
                        <p className={s.username}>Имя пользователя</p>
                        <div className={s.textFlex}>
                            <p className={s.lastMessage}>{chatData.messages[chatData.messages.length - 1].text}</p>
                            <p className={s.time}>{chatData.messages[chatData.messages.length - 1].time}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default User;