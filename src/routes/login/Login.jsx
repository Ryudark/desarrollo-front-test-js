import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userLogin } from "../../redux/action/actionLogin";
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [login, setlogin] = useState({
        user: "",
        password: "",
    });

    function handleChange(e) {
        e.preventDefault();
        setlogin({ ...login, [e.target.name]: e.target.value });
    }

    function onSubmit(e) {
        e.preventDefault();
        try {
            dispatch(userLogin(login));
            navigate("/home", { replace: true });
        } catch (error) {
            alert(error);   
        }
    }

    return (
        <div className="center">
        <div className="divLogin">
            <h2>LOGIN</h2>
            <form onSubmit={onSubmit}>
            <div>
                <input
                onChange={handleChange}
                name="user"
                type="email"
                placeholder="Usuario"
                value={login.user}
                />
            </div>
            <div>
                <input
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="password"
                value={login.password}
                />
            </div>
            <input className="botonLogin" type="submit" value="ingresar" />
            </form>
        </div>
        </div>
    );
}

export default Login;
