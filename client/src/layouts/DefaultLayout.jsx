import React, {useEffect, useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axiosClient from "../../axios-client.js";
import Loading from "../views/Loading.jsx";
import {setUser} from "../store/features/userSlice.jsx"

const DefaultLayout = () => {
    const user = useSelector((state) => state.user)

    if (!user.token) {
        return <Navigate to={`/login`}/>
    }

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default DefaultLayout;