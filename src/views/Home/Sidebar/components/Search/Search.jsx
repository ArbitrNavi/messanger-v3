import React from 'react';
import s from "./Search.module.scss";

const Search = () => {
    return (
        <div className={s.search}>
            <input type="text" placeholder={`Найти пользоталея`} />
        </div>
    );
};

export default Search;