import React from 'react';
import Sidebar from "./Sidebar/Sidebar.jsx";
import Chat from "./Chat/Chat.jsx";
import Info from "./Info/Info.jsx";
import {useParams} from "react-router-dom";
import SelectChat from "../SelectChat.jsx";
import {useSelector} from "react-redux";


const App = () => {
    const id = useParams();
    const userData = useSelector((state) => state.user)

    return (
        <div className="App">
            <Sidebar />
            {
                !id.chatID ? <SelectChat /> : <Chat id={id.chatID} />
            }
            <Info />
        </div>
    );
};

export default App;