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
import axiosClient from "../../../../../../axios-client.js";

const Input = () => {
    const {chatID} = useParams();
    const dispatch = useDispatch();
    const value = useSelector((state) => state.sendMessage.value)
    const {user} = useSelector((state) => state.user)

    const messages = useSelector((state) =>
        state.fetch.chats.filter(e => {
            if (e.chatID === chatID) {
                return e
            }
        })[0]
    )


    const sendMessage = () => {
        const message = {
            // userId: user.id,
            messageId: messages.messages.length + 1,
            text: value,
            time: moment().format('HH:mm')
        }

        console.log(message)

        axiosClient.post('/sendMessage', message).then(({data}) => console.log(data))
    }

    return (
        <div className={s.input}>
            <textarea value={value} onChange={(event) => dispatch(setValue(event.target.value))}/>
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