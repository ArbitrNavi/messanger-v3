import React, {useEffect} from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const GuestLayout = () => {
    const user = useSelector((state) => state.user)

    if (user.token) {
        return <Navigate to={`/home`} />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default GuestLayout;