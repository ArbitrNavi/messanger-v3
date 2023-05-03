import React from 'react';
import Sidebar from "./Sidebar/Sidebar.jsx";
import Chat from "./Chat/Chat.jsx";
import Info from "./Info/Info.jsx";
import {useParams} from "react-router-dom";
import SelectChat from "../SelectChat.jsx";


const App = () => {
    const id = useParams();

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