import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axiosClient from "../../axios-client.js";
import {useDispatch} from "react-redux";
import {setToken, setUser} from "../store/features/userSlice.jsx";


const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirm] = useState("");
    const [file, setFile] = useState();
    const [errors, setErrors] = useState(null);

    const dispatcher = useDispatch();
    const data = new FormData();


    const onSubmit = (e) => {
        e.preventDefault();

        data.append('name', name)
        data.append('email', email)
        data.append('password', password)
        data.append('password_confirmation', password_confirmation)
        data.append('avatar', file)

        axiosClient
            .post("/signup", data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(({data}) => {
                console.log(data)
                dispatcher(setUser(data.user))
                dispatcher(setToken(data.token))
                window.location.reload();
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
                    Регистрация
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
                <form action="" encType={`multipart/form-data`} onSubmit={(e) => onSubmit(e)}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder={`Имя пользователя`}
                    />
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
                    <input
                        value={password_confirmation}
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                        type="password"
                        placeholder={`Подтвердите пароль`}
                    />
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <button>
                        Зарегестрироваться
                    </button>
                </form>
                <p>
                    Зарегестрированны? <br/> <Link to={`/login`}>Войти</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;