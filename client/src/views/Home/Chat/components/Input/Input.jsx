import React, {useState} from 'react';
import s from "./Input.module.scss";
import moment from "moment";

import file from "./../../../../../assets/file.svg"
import send from "./../../../../../assets/send.svg"
import {useDispatch, useSelector} from "react-redux";
import {setValue} from "../../../../../store/features/sendMessageSlice.jsx";
import {useParams} from "react-router-dom";
import chat from "../../Chat.jsx";
import {retry} from "@reduxjs/toolkit/query";
const Input = () => {
    const {chatID} = useParams();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.sendMessage.value)
    const messages = useSelector((state) =>
        state.fetch.chats.filter(e => {
            if (e.chatID === chatID) {
                return e
            }
        })[0]
    )

    const sendMessage = () => {
        const message = {
            messageId: messages.messages.length + 1,
            text: value,
            time: moment().format('HH:mm')
        }
        console.log(message)
    }

    return (
        <div className={s.input}>
            <textarea value={value} onChange={(event) => dispatch(setValue(event.target.value))} />
            <input style={{display: "none"}} id={`file`} type="file"/>
            <label className={s.button} id={s.green} htmlFor="file">
                <img src={file} alt=""/>
            </label>
            <div onClick={() => sendMessage()} className={s.button} id={s.purple}>
                <img src={send} alt=""/>
            </div>
        </div>
    );
};

export default Input;