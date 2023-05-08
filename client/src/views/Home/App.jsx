import React, {useEffect, useState} from 'react';
import Sidebar from "./Sidebar/Sidebar.jsx";
import Chat from "./Chat/Chat.jsx";
import Info from "./Info/Info.jsx";
import {useParams} from "react-router-dom";
import SelectChat from "../SelectChat.jsx";
import {useDispatch, useSelector} from "react-redux";
import axiosClient from "../../../axios-client.js";
import {setUser} from "../../store/features/userSlice.jsx";
import Loading from "../Loading.jsx";


const App = () => {
    const id = useParams();
    const userData = useSelector((state) => state.user)

    const dispatcher = useDispatch();
    const [isLoading, setLoading] = useState(true)

    console.log(userData)
    console.log(localStorage.getItem("ACCESS_TOKEN"))

    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({data}) => {
                dispatcher(setUser(data))
                setLoading(false)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [userData.token])


    return (
        <div className="App">
            {
                isLoading ? <Loading/> : (
                    <>
                        <Sidebar/>
                        {
                            !id.chatID ? <SelectChat/> : <Chat id={id.chatID}/>
                        }
                        <Info/>
                    </>
                )
            }

        </div>
    );
};

export default App;