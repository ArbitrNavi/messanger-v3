import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import {setToken, setUser} from "../store/features/userSlice.jsx";
import {useDispatch} from "react-redux";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatcher = useDispatch();
    const [errors, setErrors] = useState(null);


    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
        }


        axiosClient.post("/login", payload)
            .then(({data}) => {
                dispatcher(setUser(data.user))
                dispatcher(setToken(data.token))
            })
            .catch((err) => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }

    return (
        <div className="formBlock">
            <div className="formWrap">
                <h1>
                    Авторизация
                </h1>
                {
                    errors && (
                        <div className="errorBlock">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )
                }
                <form onSubmit={(e) => onSubmit(e)}>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder={`Email`}
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder={`Пароль`}
                    />
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