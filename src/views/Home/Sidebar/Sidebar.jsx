import React from 'react';
import s from "./Sidebar.module.scss";
import Navbar from "./components/Navbar/Navbar.jsx";
import Search from "./components/Search/Search.jsx";
import Chats from "./components/Chats/Chats.jsx";

const Sidebar = () => {


    return (
        <div className={s.sidebar}>
            <Navbar />
            <Search />
            <Chats />
        </div>
    );
};

export default Sidebar;