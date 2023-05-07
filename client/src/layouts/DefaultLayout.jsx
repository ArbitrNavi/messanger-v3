import React, {useEffect, useState} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axiosClient from "../../axios-client.js";
import {setUser} from "../store/features/userSlice.jsx";
import Loading from "../views/Loading.jsx";

const DefaultLayout = () => {
    const user = useSelector((state) => state.user)
    const dispatcher = useDispatch();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axiosClient
            .get("/user")
            .then(({data}) => {
                dispatcher(setUser(data))
                setLoading(true)
            })
    }, [])

    if (!user.token) {
        return <Navigate to={`/login`}/>
    }

    return (
        <div>
            {
                loading ? <Outlet/> : <Loading />
            }
        </div>
    );
};

export default DefaultLayout;