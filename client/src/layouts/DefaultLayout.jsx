import React from 'react';
import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

const DefaultLayout = () => {
    const user = useSelector((state) => state.user)

    if (!user.token) {
        return <Navigate to={`/login`} />
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;