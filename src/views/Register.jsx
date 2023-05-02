import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="formBlock">
            <div className="formWrap">
                <h1>
                    Регистрация
                </h1>
                <form action="">
                    <input type="text" placeholder={`Имя пользователя`}/>
                    <input type="text" placeholder={`Email`}/>
                    <input type="password" placeholder={`Пароль`}/>
                    <input type="password" placeholder={`Подтвердите пароль`}/>
                    <button>
                        Зарегестрироваться
                    </button>
                </form>
                <p>
                    Зарегестрированны? <br /> <Link to={``}>Войти</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;