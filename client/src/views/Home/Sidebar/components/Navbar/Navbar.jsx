import React from 'react';
import s from "./Navbar.module.scss";
import {useDispatch, useSelector} from "react-redux";
import axiosClient from "../../../../../../axios-client.js";
import {setToken, setUser} from "../../../../../store/features/userSlice.jsx";
import {Navigate, redirect} from "react-router-dom";

const Navbar = () => {
    const {user} = useSelector((state) => state.user)
    const dispatcher = useDispatch();

    const onLogout = (e) => {
        e.preventDefault();
        axiosClient
            .post("/logout")
            .then(() => {
                dispatcher(setUser({}));
                dispatcher(setToken(null))
                return <Navigate to={`/login`} />
            })
    }

    return (
        <div className={s.navbar}>
            <div>
                <div className={s.avatarContainer}>
                    <img src={`http://127.0.0.1:8000/${user.avatar}`} alt=""/>
                </div>
                <p>
                    {user.name}
                </p>
            </div>
            <button onClick={(e) => onLogout(e)}>
                Выйти
            </button>
        </div>
    );
};

export default Navbar;