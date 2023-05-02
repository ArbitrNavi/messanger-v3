import React from 'react';
import s from "./Messages.module.scss";
import Message from "./components/Message.jsx";

const Messages = ({messages}) => {

    console.log(messages.messages[0].messageId)

    return (
        <div className={s.messages}>
            {
                messages.messages.map((message) => <Message key={message.messageId} message={message} />)
            }
        </div>
    );
};

export default Messages;