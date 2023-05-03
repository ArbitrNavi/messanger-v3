import React from 'react';
import s from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <div>
                <div className={s.avatarContainer}>
                    <img src="https://i.pinimg.com/564x/65/30/4d/65304d4d2aef1615f4c23a7733c9ee65.jpg" alt=""/>
                </div>
                <p>
                    Мурат
                </p>
            </div>
            <button>
                Выйти
            </button>
        </div>
    );
};

export default Navbar;