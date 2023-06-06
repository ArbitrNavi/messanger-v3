import React, { useEffect } from "react";
import s from "./Messages.module.scss";
import Message from "./components/Message.jsx";
import Pusher from "pusher-js";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessage } from "../../../../../store/features/fetchSlice.jsx";

const Messages = ({ messages }) => {
	const dispatcher = useDispatch();
	const { chatID } = useParams();

	console.log(chatID);

	useEffect(() => {
		Pusher.logToConsole = true;

		const pusher = new Pusher("455572925820eb7bf87d", {
			cluster: "eu",
		});

		const channel = pusher.subscribe("chat");
		channel.bind("message", function (data) {
			console.log(JSON.stringify(data));
			dispatcher(
				sendMessage({
					chatID: chatID,
					data: data,
				}),
			);
		});
	}, []);

	return (
		<div className={s.messages}>
			{messages.messages.map((message) => (
				<Message key={message.messageId} message={message} />
			))}
		</div>
	);
};

export default Messages;
