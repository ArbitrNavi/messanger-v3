import React from 'react';
import {Link} from "react-router-dom";


const Login = () => {

    return (
        <div className="formBlock">
            <div className="formWrap">
                <h1>
                    Авторизация
                </h1>
                <form action="">
                    <input type="text" placeholder={`Email`}/>
                    <input type="password" placeholder={`Пароль`}/>
                    <button>
                        Войти
                    </button>
                </form>
                <p>
                    Не зарегестрированны? <br /> <Link to={`/register`}>Регистрация</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;